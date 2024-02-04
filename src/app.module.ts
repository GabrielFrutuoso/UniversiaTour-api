import { Module } from '@nestjs/common';
import { DestinyModule } from './modules/destiny/destiny.module';
import { TouristicsModule } from './modules/touristics/touristics.module';
import { UserModule } from './modules/user/user.module';
import { ActivitiesModule } from './modules/activities/activities.module';


@Module({
  imports: [DestinyModule, TouristicsModule, UserModule, ActivitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
