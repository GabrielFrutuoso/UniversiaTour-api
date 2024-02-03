import { Module } from '@nestjs/common';
import { DestinyModule } from './modules/destiny/destiny.module';
import { TouristicsModule } from './modules/touristics/touristics.module';


@Module({
  imports: [DestinyModule, TouristicsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
