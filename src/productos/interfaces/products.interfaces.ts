//aqui descrivo que voy a manejar en el codigo, muy parecidp al dto, pero no detallo lo que envio, solo lo que manejo en el codigo
import { Document } from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly imageUrl:string;
    readonly price: number;
    readonly dateAt: Date
}