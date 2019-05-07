const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    notes: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    emotions: {
      type: Number,
      required: true
    }

});
module.exports = Notes = mongoose.model("Notes", NotesSchema);