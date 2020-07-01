const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Number,
    default: Date.now
  },
  exercises: Array
},
{
  toJSON: {
  virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
// WorkoutSchema.methods.day = function() {
//   this.day = Date.now();
//   return this.day;
// };

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;