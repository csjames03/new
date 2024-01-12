// userModel.ts
import mongoose, { Document, Model } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

export interface UserDocument extends Document {
    name: string;
    email: string;
}

export const User: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
