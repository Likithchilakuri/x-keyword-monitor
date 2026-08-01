import { sendTelegram } from "./telegram.js";
import keywords from "./keywords.json" with { type: "json" };

const sent = new Set();

async function checkKeyword(keyword) {
  // Temporary test
  if (!sent.has(keyword)) {
    sent.add(keyword);

    await sendTelegram(
      `🧪 Test Alert\n\nKeyword: ${keyword}\n\nMonitoring engine is working.`
    );
  }
}

export async function startMonitor() {
  console.log("Monitor Started...");

  setInterval(async () => {
    for (const keyword of keywords.high) {
      await checkKeyword(keyword);
    }

    for (const keyword of keywords.medium) {
      await checkKeyword(keyword);
    }

    for (const keyword of keywords.low) {
      await checkKeyword(keyword);
    }
  }, 30000);
}// Add X monitoring implementation here.
