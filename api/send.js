export default async function handler(req, res) {
    try {
        const { text } = req.body;

        const token = process.env.TELEGRAM_TOKEN;
        const chat_id = process.env.TELEGRAM_CHAT_ID;

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id,
                text
            })
        });

        if (!response.ok) {
            throw new Error("Telegram error");
        }

        res.status(200).json({ ok: true });
    } catch (error) {
        res.status(500).json({ ok: false });
    }
}
