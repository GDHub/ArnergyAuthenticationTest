const dbHelper = require('_helpers/db');

const Schema = dbHelper.mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    emailAdress: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
        trim: true
    },
    creationDate: {
        type: Date,
        required: true,
    },
    createdBy: {
        type: String,
        trim: true,
        required: true
    },
    modifiedDate: {
        type: Date,
    },
    modifiedBy: {
        type: String,
        trim: true,
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
});
    
   const User = dbHelper.mongoose.model('user', UserSchema);
    
   module.exports = User;