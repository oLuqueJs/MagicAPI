import { Schema } from 'mongoose';
export declare const CommanderSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    username?: string;
    password?: string;
    email?: string;
    role?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    username?: string;
    password?: string;
    email?: string;
    role?: string;
}>> & import("mongoose").FlatRecord<{
    username?: string;
    password?: string;
    email?: string;
    role?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
