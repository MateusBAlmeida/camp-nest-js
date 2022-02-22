import { Module } from '@nestjs/common';
import { OrderModule } from './Orders/orders.module';

@Module({
  imports: [OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
