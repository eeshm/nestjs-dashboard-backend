import { registerAs } from '@nestjs/config';

//check port

export default registerAs('app', () => ({
 port: parseInt(process.env.PORT ?? '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_URL || '*',
}));