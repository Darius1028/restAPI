import { Schema, model } from 'mongoose';

const companySchema = new Schema({
  name: { type: String, required: true, trim: true },
  isActive: { type: Boolean, default: true },
  address: { type: String, required: true, trim: true },
  logo: { type: String, required: false, trim: true }
},
  {
    versionKey: false,
    timestamps: true
  });

export default model('Company', companySchema)