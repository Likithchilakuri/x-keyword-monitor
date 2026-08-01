import 'dotenv/config';
import { sendTelegram } from './telegram.js';
import { startMonitor } from "./monitor.js";
console.log("🚀 X Keyword Monitor Started");

try {
  await sendTelegram("✅ X Keyword Monitor is now online!");
  console.log("Telegram test message sent.");
  await startMonitor();
} catch (err) {
  console.error("Telegram Error:", err.message);
}

// Keep Render service alive
setInterval(() => {
  console.log("Running...");
}, 60000);
