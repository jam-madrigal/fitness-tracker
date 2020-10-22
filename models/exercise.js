const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the cardio exercise"
  },
  distance: {
    type: Number,
    required: "Enter distance in miles"
  },
  duration: {
    type: Number,
    required: "Enter duration in minutes"
  }
});

const Cardio = mongoose.model("Exercise", cardioSchema);

module.exports = Cardio;
