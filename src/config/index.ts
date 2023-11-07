import { Time } from '@/utils/constants';

export default () => ({
  swagger: {
    siteTitle: 'Basic NestJS Template | Documentation',
    title: 'Basic NestJS Template | Documentation',
    description: 'The Basic NestJS Template API Documentation',
    version: '1.0',
    bearerAuth: {
      type: 'http',
      in: 'Header',
      scheme: 'Bearer',
      bearerFormat: 'Bearer',
      name: 'Authorization',
      description: 'Please enter JWT token',
    },
  },
  jwt: { secret: process.env.JWT_SECRET },
  token: {
    authentication: {
      lifetime: 30 * Time.ONE_DAY,
      renewedTimes: 4,
    },
  },
});
