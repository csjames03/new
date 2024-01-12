import mongoose, { Schema, Model, Document } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI!);

mongoose.Promise = global.Promise;

interface UserDocument extends Document {
  name: string;
  email: string;
}

const userSchema: Schema<UserDocument> = new Schema({
  name: String,
  email: String,
}, {
  timestamps: true,
});


const User: Model<UserDocument> = mongoose.model<UserDocument>("User", userSchema);

export { User };
