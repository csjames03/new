// userModel.ts
import mongoose, { Document, Model } from 'mongoose';

const donorSchema = new mongoose.Schema({
    address: String,
    age: Number,
    contact: String,
    firstName: String,
    lastName: String,
    middleName: String,
    medicalStatus: String,
    sex: String,
});

export interface DonorDocument extends Document {
    address: String,
    age: Number,
    contact: String,
    firstName: String,
    lastName: String,
    middleName: String,
    medicalStatus: String
    sex: String
}

export const Donor: Model<DonorDocument> = mongoose.models.Donor || mongoose.model<DonorDocument>('Donor', donorSchema);
