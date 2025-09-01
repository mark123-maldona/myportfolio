// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new email service (connect your Gmail account)
// 3. Create an email template
// 4. Get your service ID, template ID, and public key
// 5. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'service_portfolio', // Replace with your EmailJS service ID
  templateId: 'template_portfolio', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE' // Replace with your EmailJS public key
};

// Email template should include these variables:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{to_email}} - recipient email (markkifunye123@gmail.com)
// {{subject}} - message subject
// {{message}} - message content
// {{reply_to}} - sender's email for replies

