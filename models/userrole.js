const dbHelper = require('_helpers/db');

const Schema = dbHelper.mongoose.Schema;

const UserRoleSchema = new Schema({
    userId: {
     type: Number,
     required: true,
     trim: true
    },
    roleId: {
     type: Number,
     required: true
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
    
   const UserRole = dbHelper.mongoose.model('userrole', UserRoleSchema);
    
   module.exports = UserRole;