const dbHelper = require('_helpers/db');

const Schema = dbHelper.mongoose.Schema;

const RolePermissionSchema = new Schema({
    roleId: {
     type: Number,
     required: true,
     trim: true
    },
    permissionId: {
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
    
   const RolePermission = dbHelper.mongoose.model('rolepermission', RolePermissionSchema);
    
   module.exports = RolePermission;