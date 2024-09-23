import { Schema } from 'mongoose';
export declare const CommanderSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    colors: string[];
    name?: string;
    mana_cost?: string;
    type_line?: string;
    oracle_text?: string;
    image_uris?: {
        normal?: string;
    };
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    colors: string[];
    name?: string;
    mana_cost?: string;
    type_line?: string;
    oracle_text?: string;
    image_uris?: {
        normal?: string;
    };
}>> & import("mongoose").FlatRecord<{
    colors: string[];
    name?: string;
    mana_cost?: string;
    type_line?: string;
    oracle_text?: string;
    image_uris?: {
        normal?: string;
    };
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
