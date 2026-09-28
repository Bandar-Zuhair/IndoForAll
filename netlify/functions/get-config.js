/**
 * Netlify Function: returns public app config from environment variables.
 * Used by the frontend to get Supabase URL and anon key without hardcoding them in the repo.
 * Set SUPABASE_URL and SUPABASE_ANON_KEY in Netlify → Site configuration → Environment variables.
 *
 * Local development (VS Code Live Server, 127.0.0.1:5500, LAN IP on a phone, ...) has no Netlify
 * functions, so indoforall.js falls back to calling this live endpoint. The CORS header below
 * allows only local development origins to read it (the anon key is public by design anyway).
 */

const LOCAL_ORIGIN_PATTERN =
    /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0|10(\.\d{1,3}){3}|192\.168(\.\d{1,3}){2}|172\.(1[6-9]|2\d|3[01])(\.\d{1,3}){2})(:\d+)?$/;

exports.handler = async (event) => {
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

    const origin = (event && event.headers && (event.headers.origin || event.headers.Origin)) || '';
    const headers = { 'Content-Type': 'application/json', Vary: 'Origin' };
    if (LOCAL_ORIGIN_PATTERN.test(origin)) {
        headers['Access-Control-Allow-Origin'] = origin;
    }

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            supabaseUrl,
            supabaseAnonKey
        })
    };
};
