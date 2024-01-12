import mongoose, {Document, Model} from "mongoose";

const hospitalSchema = new mongoose.Schema({
    address: String,
    contact: String,
    name: String,
})

export interface HospitalDocument extends Document{
    address: string,
    contact: string,
    name: string
}


export const Hospital: Model<HospitalDocument> = mongoose.models.Hospital || mongoose.model<HospitalDocument>('Hospital', hospitalSchema);