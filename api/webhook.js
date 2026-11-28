const BOT_TOKEN = process.env.BOT_TOKEN || "9241066905:AAFbDT3i7I1e_gbo2kenGnjdHzhK2AdoBwA";
const WEBAPP_URL = process.env.WEBAPP_URL || "https://xauto-mine.vercel.app";
const COMMUNITY_URL = "https://t.me/PZM_MINE_BOT"; // သင့် Channel/Group Link ပြောင်းထည့်နိုင်ပါသည်
const BANNER_PHOTO = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop";

const TEXTS = {
  en: {
    welcome: "🔮 <b>Welcome to PZM Mining!</b>\n\nEnter the PRIZM Protocol and build your crypto mining journey on Telegram.\n\n⛏️ Collect PZM in the app\n🏗️ Upgrade levels up to LV 100\n💎 Earn instant referral rewards\n💸 Withdraw PZM at LV 3+\n👥 Invite friends and grow your crew\n\n👇 Start your journey with the button below.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  my: {
    welcome: "🔮 <b>PZM Mining မှ ကြိုဆိုပါတယ်!</b>\n\nTelegram ပေါ်မှာ PZM Token တွေ တူးဖော်ပြီး ဆုလာဘ်တွေ ရယူလိုက်ပါ။\n\n⛏️ App ထဲမှာ PZM များ စုဆောင်းပါ\n🏗️ Level 100 အထိ အဆင့်မြှင့်တင်ပါ\n💎 သူငယ်ချင်းဖိတ်ခေါ်ပြီး Bonus ရယူပါ\n💸 Level 3+ ပြည့်တာနဲ့ PZM ထုတ်ယူပါ\n\n👇 အောက်ပါခလုတ်ကို နှိပ်ပြီး စတင်လိုက်ပါ။",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  ru: {
    welcome: "🔮 <b>Добро пожаловать в PZM Mining!</b>\n\nПрисоединяйтесь к протоколу PRIZM и зарабатывайте токены в Telegram.\n\n⛏️ Собирайте PZM в приложении\n🏗️ Прокачивайте уровень до LV 100\n💸 Выводите PZM с уровня LV 3+\n👥 Приглашайте друзей и получайте бонусы\n\n👇 Нажмите кнопку ниже, чтобы начать.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  uk: {
    welcome: "🔮 <b>Ласкаво просимо до PZM Mining!</b>\n\nПочніть майнінг PRIZM прямо у Telegram.\n\n⛏️ Збирайте PZM у додатку\n🏗️ Підвищуйте рівень до LV 100\n💸 Виводьте PZM з рівня LV 3+\n👥 Запрошуйте друзів\n\n👇 Натисніть кнопку нижче.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  de: {
    welcome: "🔮 <b>Willkommen bei PZM Mining!</b>\n\nStarte dein PRIZM-Mining-Abenteuer auf Telegram.\n\n⛏️ Sammle PZM in der App\n🏗️ Upgrade bis Level 100\n💸 Auszahlung ab Level 3+\n👥 Lade Freunde ein\n\n👇 Starte jetzt über den Button unten.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  es: {
    welcome: "🔮 <b>¡Bienvenido a PZM Mining!</b>\n\nComienza tu aventura de minería PRIZM en Telegram.\n\n⛏️ Recolecta PZM en la app\n🏗️ Sube hasta el Nivel 100\n💸 Retira PZM desde Nivel 3+\n👥 Invita amigos y gana recompensas\n\n👇 Comienza con el botón de abajo.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  fr: {
    welcome: "🔮 <b>Bienvenue sur PZM Mining !</b>\n\nCommencez votre aventure de minage PRIZM sur Telegram.\n\n⛏️ Collectez des PZM\n🏗️ Améliorez jusqu'au Niveau 100\n💸 Retirez dès le Niveau 3+\n👥 Invitez vos amis\n\n👇 Commencez avec le bouton ci-dessous.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  pt: {
    welcome: "🔮 <b>Bem-vindo ao PZM Mining!</b>\n\nComece sua jornada de mineração PRIZM no Telegram.\n\n⛏️ Colete PZM no app\n🏗️ Evolua até o Nível 100\n💸 Saque PZM no Nível 3+\n👥 Convide amigos\n\n👇 Comece pelo botão abaixo.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  tr: {
    welcome: "🔮 <b>PZM Mining'e Hoş Geldiniz!</b>\n\nTelegram'da PRIZM madenciliğine hemen başlayın.\n\n⛏️ Uygulamada PZM toplayın\n🏗️ Seviye 100'e kadar yükseltin\n💸 Seviye 3+'ta PZM çekin\n👥 Arkadaşlarınızı davet edin\n\n👇 Aşağıdaki butonla başlayın.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  },
  ar: {
    welcome: "🔮 <b>مرحبًا بك في PZM Mining!</b>\n\nابدأ رحلة تعدين PRIZM على تيليجرام.\n\n⛏️ اجمع PZM داخل التطبيق\n🏗️ قم بالترقية حتى المستوى 100\n💸 اسحب أرباحك من المستوى 3+\n👥 ادعُ أصدقاءك\n\n👇 ابدأ رحلتك من الزر أدناه.",
    startBtn: "🚀 Start App",
    commBtn: "🌐 Community",
    langBtn: "🌍 Language"
  }
};

function getMainKeyboard(lang, refParam) {
  const t = TEXTS[lang] || TEXTS.en;
  const query = refParam ? `?ref=${encodeURIComponent(refParam)}&tgWebAppStartParam=${encodeURIComponent(refParam)}` : "";
  return {
    inline_keyboard: [
      [{ text: t.startBtn, web_app: { url: `${WEBAPP_URL}${query}` } }],
      [
        { text: t.commBtn, url: COMMUNITY_URL },
        { text: t.langBtn, callback_data: `open_lang:${refParam}` }
      ]
    ]
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).send("PZM Bot Active");

  try {
    const update = req.body;

    // 1. Handle /start command
    if (update.message && update.message.text && update.message.text.startsWith("/start")) {
      const chatId = update.message.chat.id;
      const parts = update.message.text.trim().split(/\s+/);
      const refParam = parts[1] || "";
      const t = TEXTS.en;

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          photo: BANNER_PHOTO,
          caption: t.welcome,
          parse_mode: "HTML",
          reply_markup: getMainKeyboard("en", refParam)
        })
      });
    }

    // 2. Handle Language Menu & Language Selection Callbacks
    if (update.callback_query) {
      const cb = update.callback_query;
      const chatId = cb.message.chat.id;
      const msgId = cb.message.message_id;
      const data = cb.data || "";

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: cb.id })
      });

      if (data.startsWith("open_lang:")) {
        const refParam = data.split(":")[1] || "";
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: "🌍 <b>Choose your language</b>",
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "🇬🇧 English", callback_data: `set_lang:en:${refParam}` },
                  { text: "🇲🇲 မြန်မာ", callback_data: `set_lang:my:${refParam}` }
                ],
                [
                  { text: "🇷🇺 Русский", callback_data: `set_lang:ru:${refParam}` },
                  { text: "🇺🇦 Українська", callback_data: `set_lang:uk:${refParam}` }
                ],
                [
                  { text: "🇩🇪 Deutsch", callback_data: `set_lang:de:${refParam}` },
                  { text: "🇪🇸 Español", callback_data: `set_lang:es:${refParam}` }
                ],
                [
                  { text: "🇫🇷 Français", callback_data: `set_lang:fr:${refParam}` },
                  { text: "🇵🇹 Português", callback_data: `set_lang:pt:${refParam}` }
                ],
                [
                  { text: "🇹🇷 Türkçe", callback_data: `set_lang:tr:${refParam}` },
                  { text: "🇸🇦 العربية", callback_data: `set_lang:ar:${refParam}` }
                ]
              ]
            }
          })
        });
      }

      if (data.startsWith("set_lang:")) {
        const [, lang, refParam = ""] = data.split(":");
        const t = TEXTS[lang] || TEXTS.en;

        // Delete language picker message & send updated localized welcome banner
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/deleteMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, message_id: msgId })
        });

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            photo: BANNER_PHOTO,
            caption: t.welcome,
            parse_mode: "HTML",
            reply_markup: getMainKeyboard(lang, refParam)
          })
        });
      }
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(200).json({ ok: true });
  }
}
