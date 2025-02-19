'use server'

import { Submission } from "@/models/Submission";
import { connectDB } from "./mongodb";

export async function submitForm(formData: FormData) {
  try {
    await connectDB();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const submission = new Submission({ name, email, message });
    await submission.save();
    return;
  } catch (error) {
    return;
  }
}