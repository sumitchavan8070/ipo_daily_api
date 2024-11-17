const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const { offset } = req.query;

  try {
    // Example: If you want to render the HTML provided in your query
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>IPO Daily - Privacy Policy</title>
      </head>
      <body>
          <h1>Responsibility of Contributors</h1>
          <p>
              At IPO Daily, our contributors are committed to providing accurate and timely information about upcoming IPOs, 
              including the latest GMP (Grey Market Premium) of IPOs, subscription status, mutual funds, AMC (Asset Management Company), 
              and their fund details. We strive to ensure that the information provided is reliable and beneficial to all users 
              without requiring any personal information.
          </p>
          <h2>Gathering of Personal Information</h2>
          <p>
              IPO Daily does not collect any personal information from users. Our platform is designed to be accessible and free 
              for all users without the need for providing personal information such as email addresses or telephone numbers. 
              We respect the privacy of our users and do not engage in the collection of any personal data.
          </p>
          <h2>Protection of Personal Information</h2>
          <p>
              As IPO Daily does not gather any personal information from users, there is no need for protection of personal data. 
              We uphold the principle of privacy and anonymity for all users accessing our platform for information on upcoming IPOs, 
              GMP, subscription status, mutual funds, AMC, and fund details.
          </p>
          <h2>Privacy Policy Changes</h2>
          <p>
              IPO Daily remains committed to providing free and accessible financial information to all users without the collection of 
              personal information. Any updates or changes to our privacy policy will be communicated transparently to ensure our 
              commitment to user privacy and data protection.
          </p>
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
