const {model, Schema} = require('mongoose');

const cvReferenceSchema = new Schema(
    {
    Name: String,
    cvId: String
    }
)

const userSchema = new Schema(
    {
        FirstName: {
            type: String,
            required: true
        },

        SecondName: {
            type: String,
            required: false
        },

        Surname: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },
        
        ProfilePic: {
            type: String,
        },

        CvsCreated: {
            type: Number,
            default: 0
        },

        Cvs: [cvReferenceSchema]
    },

    {
      timestamps: true,
    }
)


module.exports = model("User", userSchema);