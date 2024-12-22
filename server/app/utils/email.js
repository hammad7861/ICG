// const { Resend } = require("resend");

// class Email {
//   constructor(user, resetCode = null) {
//     this.to = user.email;
//     this.firstName = user.firstName;
//     this.resetCode = resetCode;
//     this.from = process.env.EMAIL_FROM;
//     this.resend = new Resend(process.env.RESEND_API_KEY);
//   }

//   async send(subject, template) {
//     const msg = {
//       from: this.from,
//       to: this.to,
//       subject: subject,
//       html: this._generateHtmlContent(template),
//     };

//     try {
//       await this.resend.emails.send(msg);
//     } catch (error) {
//       console.error("Error sending email:", error);
//       throw new Error("Failed to send email");
//     }
//   }

//   _generateHtmlContent(template) {
//     switch (template) {
//       case "passwordReset":
//         return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>Password Reset Request</title>
// </head>
// <body>
//   <p>Dear ${this.firstName},</p>
//   <p>We received a request to reset your password. Please use the following code to reset your password:</p>
//   <h2 style="font-family: Arial, sans-serif; color: #333;">${this.resetCode}</h2>
//   <p>This code will expire in 5 minutes. If you did not request a password reset, please ignore this email.</p>
//   <p>If you have any questions, please contact our support team.</p>
//   <p>Best regards,<br>The Your Company Team</p>
// </body>
// </html>
//         `;
//       default:
//         return "";
//     }
//   }

//   async sendPasswordReset() {
//     await this.send("Password Reset Request", "passwordReset");
//   }
// }

// module.exports = Email;
