import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Constanza:Konecta+865@products.fq2mz.mongodb.net/crudMongo?retryWrites=true&w=majority",{connectionName:'products'}),
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
