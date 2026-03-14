/**
 * Netlify Function: returns public app config from environment variables.
 * Used by the frontend to get Supabase URL and anon key without hardcoding them in the repo.
 * Set SUPABASE_URL and SUPABASE_ANON_KEY in Netlify → Site configuration → Environment variables.
 */

exports.handler = async () => {
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            supabaseUrl,
            supabaseAnonKey
        })
    };
};
