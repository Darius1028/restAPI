import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  phone: { type: String, required: true, trim: true},
  password: { type: String, required: false, trim: true},
  email: { type: String, required: false, trim: true},
  isActive: { type: Boolean, default:true},
  firstName: { type: String, required: true, trim: true},
  lastName: { type: String, required: true, trim: true},
  accountId: { type: String, required: false, trim: true},
  avatar: { type: String, required: false, trim: true}
}, 
{
  versionKey: false,
  timestamps: true
});

export default model('User',userSchema)