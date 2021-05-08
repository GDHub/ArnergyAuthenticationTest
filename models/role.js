const dbHelper = require('_helpers/db');

const Schema = dbHelper.mongoose.Schema;

const RoleSchema = new Schema({
    name: {
     type: String,
     required: true,
     trim: true
    },
    description: {
     type: String,
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
    
   const Role = dbHelper.mongoose.model('role', RoleSchema);
    
   module.exports = Role;