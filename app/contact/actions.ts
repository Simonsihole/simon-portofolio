"use server"

interface ContactFormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Simulate a delay for network request
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real application, you would send this data to an email service
  // or your backend API here.
  // For example, using Nodemailer in a Next.js API route:
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({ ... });
  // await transporter.sendMail({
  //   from: email,
  //   to: 'simonsihole@gmail.com', // Your actual email
  //   subject: `New Contact Form Submission from ${name}`,
  //   text: message,
  // });

  console.log("--- Contact Form Submission ---");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log("-----------------------------");
  console.log("NOTE: This is a simulated email send. For real email, integrate a backend API or a service like Formspree/EmailJS.");

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields." };
  }

  return { success: true, message: "Your message has been sent successfully!" };
}
