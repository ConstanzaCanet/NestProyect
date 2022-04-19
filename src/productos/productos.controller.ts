import { Controller,Get, Post,Query, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException} from '@nestjs/common';


import { CreateProductDTO } from './dto/products.dto';
import { ProductosService } from './productos.service';


@Controller('productos')
export class ProductosController {
    //instancio el service
    constructor(private productService: ProductosService){}


    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        console.log(createProductDTO)
        let product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: 'successfull!',
            product
        });
    };

    @Get('/')
    async getProduct(@Res() res){
        const products = await this.productService.getProducts();
        res.status(HttpStatus.OK).json({
            products
        })

        
    }

    @Get('/:pid')
    async getProductId(@Res() res, @Param('pid') pid){
        const product = await this.productService.getProduct(pid);
        if(!product) throw new NotFoundException('Product Does not exists')
        return res.status(HttpStatus.OK).json(product)
    }
    //realizo consultas con Query--->ejemplo:http://localhost:3000/productos/edit?pid=id
    @Put('/edit')
    async updatedProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('pid') pid){
        const updateP = await this.productService.updateProduct(pid, createProductDTO)
        if(!updateP) throw new NotFoundException('Product Does not exists')
        return res.status(HttpStatus.OK).json({
            message:'Has actualizado un objeto',
            updateP
        })
    }

    //realizo delete mediante consulta query---> por ejemplo: http://localhost:3000/productos/delete?pid=id
    @Delete('/delete')
    async deletedProduct(@Res() res,@Query('pid') pid){
        const deleted = await this.productService.deleteProduct(pid)
        if(!deleted) throw new NotFoundException('Product Does not exists')
        return res.status(HttpStatus.OK).json({
            message:'No veras a ese producto nunca más',
            deleted
        })
    }


}
