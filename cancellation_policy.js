const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Cancellation Policy HTML Content
    const cancellationPolicyContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>IPO Daily - Cancellation Policy</title>
            <meta name="description" content="Understand IPO Daily's cancellation policy for our platform and services.">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <h1>Cancellation Policy</h1>
            <p>
                At IPO Daily, we strive to provide our users with accurate and valuable financial information. As a free-to-use 
                platform, we do not charge users for accessing any of the information provided. However, certain services or 
                features might be introduced in the future that could involve subscription plans or fees.
            </p>
            <h2>1. Free Access</h2>
            <p>
                IPO Daily is currently free to use and does not require any subscription or payment. If this changes, we will 
                update this policy to reflect the terms applicable to such paid features or services.
            </p>
            <h2>2. No Refunds</h2>
            <p>
                As there are no charges for accessing IPO Daily, there are no refunds applicable. For any future paid services, 
                refund policies will be clearly stated and communicated to users.
            </p>
            <h2>3. Cancellation of Subscriptions</h2>
            <p>
                In the event of the introduction of subscription-based services, users will have the ability to cancel their 
                subscriptions at any time. Details on how to cancel and any associated conditions will be provided at the time 
                of subscription.
            </p>
            <h2>4. Changes to this Policy</h2>
            <p>
                IPO Daily reserves the right to modify the cancellation policy at any time. Updates will be communicated to 
                users through the platform, and continued use of the platform will signify acceptance of the updated policy.
            </p>
            <h2>5. Contact Us</h2>
            <p>
                If you have any questions or concerns about this cancellation policy, please contact us via email at 
                support@ipodaily.com.
            </p>
        </body>
        </html>
        `;

    // Send the Cancellation Policy HTML Content as a Response
    res.send(cancellationPolicyContent);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "An error occurred while loading the cancellation policy.",
      });
  }
});

module.exports = router;
