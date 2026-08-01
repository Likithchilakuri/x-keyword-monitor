import 'dotenv/config';
import keywords from '../keywords.json' with { type: 'json' };

console.log('X Keyword Monitor starter');
console.log('Loaded keywords:', keywords);
console.log('Telegram Chat ID:', process.env.TELEGRAM_CHAT_ID);
console.log('Implement monitor logic in src/monitor.js');
