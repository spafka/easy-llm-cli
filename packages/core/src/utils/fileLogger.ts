import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'logs', 'llm.log');

// Ensure log directory exists
const logDir = path.dirname(logFilePath);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

export function logLlmEvent(data: any) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${JSON.stringify(data, null, 2)}\n---\n`;
  fs.appendFileSync(logFilePath, logMessage, 'utf8');
}
