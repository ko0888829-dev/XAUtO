export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).send("PZM Bot Active");

  const BOT_TOKEN = process.env.BOT_TOKEN || "9241066905:AAFbDT3i7I1e_gbo2kenGnjdHzhK2AdoBwA";
  const WEBAPP_URL = process.env.WEBAPP_URL || "https://xauto-mine.vercel.app";

  try {
    const update = req.body;
    if (update.message && update.message.text && update.message.text.startsWith("/start")) {
      const chatId = update.message.chat.id;
      const parts = update.message.text.trim().split(/\s+/);
      const rawParam = parts[1] || "";
      const query = rawParam ? `?ref=${encodeURIComponent(rawParam)}&tgWebAppStartParam=${encodeURIComponent(rawParam)}` : "";

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: "🔮 *Welcome to PZM MINING Protocol!*\n\n• Verify with *0.1 GRAM* to start mining\n• Upgrade up to *Level 100* for higher hourly PZM\n• Reach *Level 3+* to withdraw your PZM!",
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [{ text: "🚀 Launch PZM Mining", web_app: { url: `${WEBAPP_URL}${query}` } }],
              [{ text: "💎 Buy PZM on DeDust", url: "https://dedust.io/swap/TON/EQDROsytSxLtDp_2pRIEainUGqZPRBbXkwayVn7VAT7bHHWL" }]
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
