import fs, { WriteStream } from 'fs';
import path from 'path';
import winston, { Logger } from 'winston';

// Define logLevel
const logLevel = process.env.NODE_ENV === 'development' ? 'debug' : 'info';

// Export server logger
export const logger: Logger = winston.createLogger({
  level: logLevel,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

// Export access log stream
export const accessLogStream: WriteStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
