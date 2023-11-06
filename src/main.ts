import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import configuration from '@/config';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = configuration();

  const swaggerConfig = new DocumentBuilder()
    .setTitle(config.swagger.title)
    .setDescription(config.swagger.description)
    .setVersion(config.swagger.version)
    .addBearerAuth(config.swagger.bearerAuth as SecuritySchemeObject)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
