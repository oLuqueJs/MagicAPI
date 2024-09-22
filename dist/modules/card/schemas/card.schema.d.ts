import { Schema, Document } from 'mongoose';
export interface Card extends Document {
    name: string;
    mana_cost: string;
    type_line: string;
    oracle_text: string;
    colors: string[];
    image_uris: {
        normal: string;
    };
}
export declare const CardSchema: Schema<Card, import("mongoose").Model<Card, any, any, any, Document<unknown, any, Card> & Card & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Card, Document<unknown, {}, import("mongoose").FlatRecord<Card>> & import("mongoose").FlatRecord<Card> & Required<{
    _id: unknown;
}>>;
