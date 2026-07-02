import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email :{
            type : String,
            unique : true,
            required : true
        },
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        isAdmin : {
            type : Boolean,
            required : true,
            default : false
        },
        isBlocked : {
            type : Boolean,
            default : false
        },
        isEmailVerified : {
            type: Boolean,
            required: true,
            default : false
        },
        image : {
            type : String,
            required : true,
            default : "/default-profile.png"
        }
    }
)

const User = mongoose.model("user", userSchema)

export default User

//"email": "sarah.smith@company.com",
//"password": "12345"
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmFoLnNtaXRoQGNvbXBhbnkuY29tIiwiZmlyc3ROYW1lIjoiU2FyYWgiLCJsYXN0TmFtZSI6IlNtaXRoIiwiaXNBZG1pbiI6dHJ1ZSwiaXNCbG9ja2VkIjpmYWxzZSwiaXNFbWFpbFZlcmlmaWVkIjpmYWxzZSwiaW1hZ2UiOiIvZGVmYXVsdC1wcm9maWxlLnBuZyIsImlhdCI6MTc4MjgzNjUwOH0.hds_muzoofqKrZKXx1BbLwNeLrzMniFDjUsufIhRxFU