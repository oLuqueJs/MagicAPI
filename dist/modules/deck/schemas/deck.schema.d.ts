import { Schema, Document } from 'mongoose';
export interface Deck extends Document {
    commander: string;
    cards: string[];
}
export declare const DeckSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    cards: string[];
    commander: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    cards: string[];
    commander: string;
}>> & import("mongoose").FlatRecord<{
    cards: string[];
    commander: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
