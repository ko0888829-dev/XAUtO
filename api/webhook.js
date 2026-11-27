export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).send("Ownership Bot Active");

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const WEBAPP_URL = process.env.WEBAPP_URL;

  try {
    const update = req.body;
    if (update.message && update.message.text && update.message.text.startsWith("/start")) {
      const chatId = update.message.chat.id;
      const parts = update.message.text.split(" ");
      const startParam = parts[1] ? `?tgWebAppStartParam=${parts[1]}` : "";

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: "👑 *Welcome to Ownership Coin Protocol!*\n\n• Connect your TON Wallet\n• Hold tokens (`EQA1R_...Kxi9k`) to upgrade your *Holder Level*\n• Reach *Level 3+* to unlock instant reward withdrawals!",
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [{ text: "🚀 Launch Ownership App", web_app: { url: `${WEBAPP_URL}${startParam}` } }],
              [{ text: "💎 Buy Token on DeDust", url: "https://dedust.io/swap/TON/EQA1R_LuQCLHlMgOo1S4G7Y7W1cd0FrAkbA10Zq7rddKxi9k" }]
            ]
          }
        })
      });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(200).json({ ok: true });
  }
}
