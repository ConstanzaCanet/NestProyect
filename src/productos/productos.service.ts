import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose' 
import { Product } from './interfaces/products.interfaces';
import { CreateProductDTO } from './dto/products.dto';



@Injectable()
export class ProductosService {

    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find()
        return products
    }

    async getProduct(productID: string): Promise<Product>{
        const product = await this.productModel.findById(productID)
        return product;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product>{
        const newP = new this.productModel(createProductDTO);
        return await newP.save()
    }

    async updateProduct(productID:string, createProductDTO: CreateProductDTO): Promise<Product>{
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO,{new :true})
        return updatedProduct;
    }


    async deleteProduct(productID: string): Promise<Product>{
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedProduct;
    }

}
