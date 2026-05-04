export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  try {
    const { text } = req.body;

    const token = process.env.TELEGRAM_TOKEN;
    const chat_id = process.env.CHAT_ID;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text,
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      return res.status(500).json({ ok: false, error: data });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
