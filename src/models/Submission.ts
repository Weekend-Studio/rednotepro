import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

export const Submission = mongoose.models.Submission || mongoose.model('Submission', submissionSchema);