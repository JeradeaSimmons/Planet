import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const GalaxySchema = new Schema({

    name: { type: String, required: true, maxlength: 20 },
    description: { type: String, required: true, maxlength: 100 }
},


    { timestamps: true, toJSON: { virtuals: true } }



)