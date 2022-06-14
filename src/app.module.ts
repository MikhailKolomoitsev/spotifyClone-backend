import { Module } from '@nestjs/common';
import { TrackController } from './track/track.controller';
import { TrackService } from './track/track.service';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://admin:uVkmaZKRVQJzcufD@cluster0.pbpdz.mongodb.net/?retryWrites=true&w=majority'),
  ],
})
export class AppModule {}