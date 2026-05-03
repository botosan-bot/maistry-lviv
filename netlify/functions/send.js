exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const text = `📥 Нова заявка
👤 ${data.name}
📞 ${data.phone}
🛠 ${data.service}
📍 ${data.district}
📝 ${data.message}`;

  const TOKEN = "8748878682:AAE1LJeREJKooMWyiEf--UaMcjeMtrD9_JE";
const CHAT_ID = "7461874774";

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
