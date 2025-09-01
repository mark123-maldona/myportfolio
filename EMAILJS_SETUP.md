# EmailJS Setup Instructions

To enable the contact form to send emails to markkifunye123@gmail.com, follow these steps:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (markkifunye123@gmail.com)
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} <{{from_email}}>
To: {{to_email}}

Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" settings in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section
3. Copy this key

## Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',     // From Step 2
  templateId: 'your_actual_template_id',   // From Step 3
  publicKey: 'your_actual_public_key'      // From Step 4
};
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check markkifunye123@gmail.com for the test email

## Template Variables Used
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{to_email}}` - Your email (markkifunye123@gmail.com)
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Sender's email for replies

## Free Tier Limits
- EmailJS free plan allows 200 emails per month
- Perfect for portfolio contact forms
- No credit card required

## Security
- Your EmailJS public key is safe to expose in frontend code
- Email service credentials are securely handled by EmailJS
- No backend server required

