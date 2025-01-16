'use server'

import { Submission } from "@/models/Submission";
import { connectDB } from "./mongodb";

export async function submitForm(formData: FormData) {
  try {
    await connectDB();
    // Access form data directly
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Form submission:', { name, email, message });
    const submission = new Submission({ name, email, message });
    await submission.save();
    return;
  } catch (error) {
    return;
  }
}