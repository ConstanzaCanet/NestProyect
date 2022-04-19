import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema/products.schema'
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name:'Product', schema:ProductSchema}
        ], 'products')
    ],
    controllers: [ProductosController],
    providers: [ProductosService]
})
export class ProductosModule {}
