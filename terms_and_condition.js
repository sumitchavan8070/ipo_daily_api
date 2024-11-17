const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const { offset } = req.query;
  const url = `https://cmsapi.groww.in/api/v1/blogs/category/ipo?_limit=12&_start=${
    offset * 12
  }`;
  try {
    const response = await axios.get(url);

    // Terms and Conditions HTML Content
    const termsAndConditionsContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>IPO Daily - Terms and Conditions</title>
      </head>
      <body>
          <h1>Terms and Conditions</h1>
          <p>
              Welcome to IPO Daily. By accessing or using our platform, you agree to be bound by the terms and conditions 
              outlined below. Please read them carefully before proceeding.
          </p>
          <h2>1. Use of the Platform</h2>
          <p>
              IPO Daily provides accurate and up-to-date information on upcoming IPOs, GMP (Grey Market Premium), subscription 
              statuses, mutual funds, AMC details, and other financial information. This information is for educational and 
              informational purposes only and should not be considered as financial or investment advice.
          </p>
          <h2>2. Accuracy of Information</h2>
          <p>
              While we strive to provide accurate and reliable data, IPO Daily does not guarantee the accuracy, completeness, 
              or timeliness of the information provided. Users are encouraged to verify the details independently before making 
              any investment decisions.
          </p>
          <h2>3. User Responsibilities</h2>
          <p>
              Users are responsible for ensuring compliance with any applicable laws or regulations in their jurisdiction. By 
              using the platform, users agree not to misuse the information or engage in any unlawful activities.
          </p>
          <h2>4. Limitation of Liability</h2>
          <p>
              IPO Daily is not liable for any losses or damages arising from the use of the information provided on the platform. 
              All investments involve risks, and users should consult with a financial advisor or conduct thorough research 
              before investing.
          </p>
          <h2>5. Intellectual Property</h2>
          <p>
              All content, including but not limited to text, graphics, and trademarks, is the intellectual property of IPO Daily. 
              Unauthorized use, reproduction, or distribution of the content is prohibited.
          </p>
          <h2>6. Changes to Terms and Conditions</h2>
          <p>
              IPO Daily reserves the right to modify these terms and conditions at any time. Any changes will be communicated 
              through updates on the platform. Continued use of the platform signifies acceptance of the revised terms.
          </p>
          <h2>7. Governing Law</h2>
          <p>
              These terms and conditions are governed by the laws of the applicable jurisdiction. Any disputes arising from the 
              use of the platform will be resolved under the jurisdiction of the relevant courts.
          </p>
          <h2>8. Contact Us</h2>
          <p>
              For any questions or concerns about these terms and conditions, please contact us through the platform or email 
              at support@ipodaily.com.
          </p>
      </body>
      </html>
    `;

    // Send the Terms and Conditions HTML content as the response
    res.send(termsAndConditionsContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
