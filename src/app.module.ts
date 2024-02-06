import { Module } from '@nestjs/common';
import { DestinyModule } from './modules/destiny/destiny.module';
import { TouristicsModule } from './modules/touristics/touristics.module';
import { UserModule } from './modules/user/user.module';
import { ActivitiesModule } from './modules/activities/activities.module';
import { ImagesModule } from './modules/images/images.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [DestinyModule, TouristicsModule, UserModule, ActivitiesModule, ImagesModule, AuthModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
