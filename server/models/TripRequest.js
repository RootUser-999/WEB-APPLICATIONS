import mongoose from 'mongoose';

const tripRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  preferredDates: {
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    }
  },
  numberOfPeople: {
    type: Number,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  additionalNotes: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

export default mongoose.model('TripRequest', tripRequestSchema);