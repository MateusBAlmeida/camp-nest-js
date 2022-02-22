import { Controller } from "@nestjs/common";

@Controller('orders')
export class OrderController {
    private database: Order[] = [];


}