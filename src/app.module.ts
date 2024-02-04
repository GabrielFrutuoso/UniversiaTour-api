import { Module } from '@nestjs/common';
import { DestinyModule } from './modules/destiny/destiny.module';
import { TouristicsModule } from './modules/touristics/touristics.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [DestinyModule, TouristicsModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
