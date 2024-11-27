const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
    const { offset } = req.query;

    try {
        // Example: If you want to render the HTML provided in your query
        const htmlContent = `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us </title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
    }

    body {
      width: 100%;
      min-height: 100vh;
      padding: 20px;
      display: flex;
      background: #066AC9;
      justify-content: center;
      align-items: center;
    }

    .container {
      display: flex;
      gap: 30px;
      width: 100%;
      max-width: 900px;
      background: #fff;
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .info_section {
      width: 40%;
      padding: 20px;
    }

    .info_section h3 {
      font-size: 20px;
      margin-bottom: 15px;
      color: #171645;
    }

    .info_section p {
      margin-bottom: 15px;
      color: #555;
      line-height: 1.6;
    }

    .info_section strong {
      display: block;
      margin: 10px 0;
      font-size: 16px;
      color: #171645;
    }

    .info_section a {
      text-decoration: none;
      color: #626cd6;
    }

    .contact_form {
      width: 60%;
      padding: 20px;
    }

    .contact_form h3 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }

    .input_box {
      margin-bottom: 20px;
    }

    .input_box label {
      display: block;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .input_box input,
    .input_box textarea {
      width: 100%;
      border: 1px solid #dadaf2;
      border-radius: 5px;
      outline: none;
      background: #f8f8fb;
      font-size: 17px;
      padding: 15px 20px;
      transition: 0.2s ease;
    }

    .input_box textarea {
      resize: none;
      height: 120px;
    }

    .input_box input:focus,
    .input_box textarea:focus {
      border-color: #626cd6;
    }

    button {
      width: 100%;
      height: 56px;
      border-radius: 5px;
      border: none;
      outline: none;
      background: #066AC9;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s ease;
    }

    button:hover {
      background: #4954d0;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Left Info Section -->
    <div class="info_section">
      <h3>Why You Should Contact Us</h3>
      <p>
        Reach out to us for any inquiries, feedback, or support to enhance your experience with Ipo Daily. Our dedicated team is here to assist you with any questions and provide timely responses. Your input helps us improve our services and better meet your financial research needs.
      </p>
      <strong>Phone:</strong>
      <p>+91 8862071189</p>
      <strong>E-mail:</strong>
      <p><a href="mailto:sdchavan8070@gmail.com">sdchavan8070@gmail.com</a></p>
    </div>

    <!-- Right Contact Form -->
    <div class="contact_form">
      <form action="#" onsubmit="return validateForm()">
        <h3>Contact Us</h3>

        <div class="input_box">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email address" 
            required />
        </div>

        <div class="input_box">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Enter the subject" 
            required />
        </div>

        <div class="input_box">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Write your message here" 
            required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>

  <script>
    function validateForm() {
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!email || !subject || !message) {
        alert('Please fill out all fields.');
        return false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return false;
      }

      if (message.length < 2) {
        alert('Enater a valid message ');
        return false;
      }

      alert('Your request has been submitted successfully');
      return true;
    }
  </script>
</body>
</html>


    `;

        // Send the HTML content as the response
        res.send(htmlContent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
