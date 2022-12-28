import 'reflect-metadata';
import 'es6-shim';
import { ValidationPipe } from '@nestjs/common/pipes';
import {  NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  await app.listen(9000);
}
bootstrap();
