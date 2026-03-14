/**
 * Netlify Function: sends comment notification email via Brevo.
 * Uses BREVO_API_KEY from Netlify environment variables (never exposed to the client).
 */

function escapeEmailHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const ENGLISH_MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getTodayDateEnglish() {
    const d = new Date();
    const day = d.getDate();
    const month = ENGLISH_MONTHS_SHORT[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
}

function buildEmailPayload(body) {
    const { userName, userCommentText, userStarRate, userWhatsAppNumber } = body;
    const whatsappDisplay = userWhatsAppNumber && String(userWhatsAppNumber).trim() ? userWhatsAppNumber : 'غير محدد رقم الهاتف';
    const safeName = escapeEmailHtml(userName);
    const safeComment = escapeEmailHtml(userCommentText);
    const safeWhatsapp = escapeEmailHtml(whatsappDisplay);
    const todayDate = getTodayDateEnglish();
    const stars = Math.min(5, Math.max(0, parseInt(userStarRate, 10) || 0));

    const htmlContent = `
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تعليق جديد - اندو للجميع</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Arial, sans-serif; background-color:#f4f4f4; -webkit-text-size-adjust:100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 10px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                    <tr>
                        <td style="background:linear-gradient(135deg, #6a4b1f 0%, #c29a66 100%); padding:24px 24px 20px; text-align:center;">
                            <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:600; letter-spacing:0.3px;">تعليق جديد</h1>
                            <p style="margin:8px 0 0; color:rgba(255,255,255,0.9); font-size:14px;">موقع اندو للجميع</p>
                        </td>
                    </tr>
                    <tr>
                        <td dir="rtl" style="padding:28px 24px 24px; text-align:right; direction:rtl;">
                            <p style="margin:0 0 6px; color:#333333; font-size:15px; line-height:1.6;">تم استلام تعليق جديد من أحد الزوار</p>
                            <p dir="ltr" style="margin:0 0 20px; color:#666666; font-size:14px; direction:ltr;">${todayDate}</p>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8; border-radius:8px; background-color:#fafafa;">
                                <tr>
                                    <td dir="rtl" style="padding:16px 20px; border-bottom:1px solid #e8e8e8; text-align:right; direction:rtl;">
                                        <span style="color:#888888; font-size:12px; display:block; margin-bottom:4px;">الاسم</span>
                                        <span style="color:#1a1a1a; font-size:16px; font-weight:500;">${safeName}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td dir="rtl" style="padding:16px 20px; border-bottom:1px solid #e8e8e8; text-align:right; direction:rtl;">
                                        <span style="color:#888888; font-size:12px; display:block; margin-bottom:4px;">التقييم</span>
                                        <span style="color:#1a1a1a; font-size:16px;">${'★'.repeat(stars)} <span style="color:#888888; font-size:14px;">(${stars}/5)</span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td dir="rtl" style="padding:16px 20px; border-bottom:1px solid #e8e8e8; text-align:right; direction:rtl;">
                                        <span style="color:#888888; font-size:12px; display:block; margin-bottom:4px;">التعليق</span>
                                        <span style="color:#1a1a1a; font-size:15px; line-height:1.65; white-space:pre-wrap; word-break:break-word;">${safeComment}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td dir="rtl" style="padding:16px 20px; text-align:right; direction:rtl;">
                                        <span style="color:#888888; font-size:12px; display:block; margin-bottom:4px;">رقم الواتساب</span>
                                        <span style="color:#1a1a1a; font-size:16px; font-weight:500;">${safeWhatsapp}</span>
                                    </td>
                                </tr>
                            </table>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                                <tr>
                                    <td dir="rtl" style="padding:14px 18px; background-color:#f0f7ff; border-right:4px solid #2563eb; border-radius:6px; text-align:right; direction:rtl;">
                                        <p style="margin:0; color:#1e3a5f; font-size:14px; line-height:1.5;">إذا حاب إظهار هذا التعليق في الموقع اعطيني خبر</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:16px 24px; background-color:#f9f9f9; border-top:1px solid #eeeeee; text-align:center;">
                            <p style="margin:0; color:#888888; font-size:12px;">اندو للجميع — إشعار تعليقات</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    const textContent = `تعليق جديد - اندو للجميع\n\nالاسم: ${userName}\nالتعليق: ${userCommentText}\nالتقييم: ${userStarRate}/5\nرقم الواتساب: ${whatsappDisplay}\n\nإذا أحببت إظهار هذا التعليق في الموقع، حدّث حالة التعليق في قاعدة البيانات إلى «معتمد».`;

    return { htmlContent, textContent };
}

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
        console.error('BREVO_API_KEY is not set in Netlify environment variables');
        return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error' }) };
    }

    let body;
    try {
        body = JSON.parse(event.body || '{}');
    } catch (e) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
    }

    const { userName, userCommentText, userStarRate, userWhatsAppNumber } = body;
    if (userName == null || userCommentText == null || userStarRate == null) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const { htmlContent, textContent } = buildEmailPayload(body);

    try {
        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: 'اندو للجميع', email: 'basmatunatv@gmail.com' },
                to: [
                    { email: 'bndoory300@gmail.com' },
                    { email: 'abdulaziz13zuhair@gmail.com' }
                ],
                subject: 'تعليق جديد - اندو للجميع',
                htmlContent,
                textContent
            })
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            console.error('Brevo API error:', res.status, err);
            return { statusCode: 502, body: JSON.stringify({ error: 'Email send failed', details: err }) };
        }

        return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    } catch (e) {
        console.error('send-comment-email error:', e);
        return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
    }
};
