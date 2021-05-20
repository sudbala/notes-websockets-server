import mongoose, { Schema } from 'mongoose';

// Adapted from express-mongo-server side SA

// create a PostSchema with a title field
const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  text: String,
}, { toJSON: { virtuals: true } });

// create a PostModel class from schema
const PostModel = mongoose.model('Note', NoteSchema);

export default PostModel;
