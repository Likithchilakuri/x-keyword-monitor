import 'dotenv/config';
import { sendTelegram } from './telegram.js';

console.log("🚀 X Keyword Monitor Started");

try {
  await sendTelegram("✅ X Keyword Monitor is now online!");
  console.log("Telegram test message sent.");
} catch (err) {
  console.error("Telegram Error:", err.message);
}

// Keep Render service alive
setInterval(() => {
  console.log("Running...");
}, 60000);
