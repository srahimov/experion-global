type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'success';

const colors: Record<LogLevel, string> = {
  info:    '\x1b[36m',  // Cyan
  warn:    '\x1b[33m',  // Yellow
  error:   '\x1b[31m',  // Red
  debug:   '\x1b[90m',  // Gray
  success: '\x1b[32m',  // Green
};
const reset = '\x1b[0m';

function log(level: LogLevel, message: string, data?: unknown): void {
  const timestamp = new Date().toISOString();
  const prefix    = `[${timestamp}] [${level.toUpperCase()}]`;
  const colored   = `${colors[level]}${prefix} ${message}${reset}`;

  if (data !== undefined) {
    console.log(colored, data);
  } else {
    console.log(colored);
  }
}

export const logger = {
  info:    (msg: string, data?: unknown) => log('info',    msg, data),
  warn:    (msg: string, data?: unknown) => log('warn',    msg, data),
  error:   (msg: string, data?: unknown) => log('error',   msg, data),
  debug:   (msg: string, data?: unknown) => log('debug',   msg, data),
  success: (msg: string, data?: unknown) => log('success', msg, data),
};