import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    require('dotenv').config()
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors()
    await app.listen(PORT, () => console.log(`App launch on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
