import { model, models, Schema } from "mongoose";


const UserSchema = new Schema({
    clearkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: Object, required: true},
    firstName: {type: String},
    lastName: {type: String},
    planID: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
});

const User = models?.User || model('User', UserSchema);

export default User;