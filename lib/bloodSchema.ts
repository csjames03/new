import mongoose, {Document, Model} from "mongoose";

const bloodSchema = new mongoose.Schema({
    bags: Number,
    location: String,
    rh: String,
    type: String
})

export interface BloodDocument extends Document{
    bags: number,
    location: string,
    rh: string,
    type: string
}


export const Donor: Model<BloodDocument> = mongoose.models.Blood || mongoose.model<BloodDocument>('Blood', bloodSchema);