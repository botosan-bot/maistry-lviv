exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const text = `📥 Нова заявка
👤 ${data.name}
📞 ${data.phone}
🛠 ${data.service}
📍 ${data.district}
📝 ${data.message}`;

  const TOKEN = process.env.TG_TOKEN;
  const CHAT_ID = process.env.TG_CHAT;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};
