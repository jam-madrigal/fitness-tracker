const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the resistance exercise"
  },
  weight: {
    type: Number,
    required: "Enter weight in pounds"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  },
  reps: {
    type: Number,
    required: "Enter number of reps per set"
  },
  duration: {
    type: Number,
    required: "Enter duration in minutes"
  }
});

const Resistance = mongoose.model("resistanceExercise", resistanceSchema);

module.exports = Resistance;
