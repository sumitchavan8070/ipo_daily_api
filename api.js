const cors = require("cors");
const express = require("express");
const NodeCache = require("node-cache");
const cron = require("node-cron");
const cache = new NodeCache({ stdTTL: 3600 });
require("dotenv").config();

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    console.log(`Cache hit for ${key}`);
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.send(cachedResponse);
  }

  console.log(`Cache miss for ${key}`);
  res.originalSend = res.send;
  res.send = (body) => {
    cache.set(key, body);
    console.log(`Cache set for ${key}`);
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.originalSend(body);
  };
  next();
};

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// -------------------------------------------------------------------------------------------------------

const defaultApi = require("./default");

const ipo = require("./ipo");
const ipoV1 = require("./ipo-v1");
const ipoDetails = require("./ipo_details");

const buyback = require("./buyback");
const buyBackdetails = require("./buyback_details");

const blogs = require("./blogs");
const blogsV1 = require("./blogs-v1");
const search = require("./search");

const forms = require("./forms");
const gmp = require("./gmp");
const subs = require("./subs");
const fcm = require("./fcm");

const commonDetails = require("./common_details");

const privacyPolicy = require("./privacy_policy");
const termsAndCondition = require("./terms_and_condition");
const cancellationPolicy = require("./cancellation_policy");
const contactUs = require("./contsct_us");


// -------------------------------------------------------------------------------------------------------

app.use("/app/default", cacheMiddleware, defaultApi);

app.use("/app/ipo", cacheMiddleware, ipo);
app.use("/app/ipo-v1", cacheMiddleware, ipoV1);
app.use("/app/ipo-details", cacheMiddleware, ipoDetails);

app.use("/app/buyback", cacheMiddleware, buyback);
app.use("/app/buyback-details", cacheMiddleware, buyBackdetails);

app.use("/app/blogs", cacheMiddleware, blogs);
app.use("/app/blogs-v1", cacheMiddleware, blogsV1);
app.use("/app/search", search);

app.use("/app/forms", cacheMiddleware, forms);
app.use("/app/gmp", cacheMiddleware, gmp);
app.use("/app/subs", cacheMiddleware, subs);
app.use("/app/fcm", fcm);

app.use("/app/common-details", cacheMiddleware, commonDetails);

app.use("/app/privacy_policy", cacheMiddleware, privacyPolicy);
app.use("/app/terms_and_condition", cacheMiddleware, termsAndCondition);
app.use("/app/cancellation_policy", cacheMiddleware, cancellationPolicy);
app.use("/app/contact_us", cacheMiddleware, contactUs);


// -------------------------------------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to IPO Daily API</h1>
    <h3>📈 IPO Daily – Your Ultimate Guide to IPO Investments.</h3>

<p>IPO Daily 📲 offers everything you need for successful IPO investing, covering both Mainboard and SME IPOs. Get real-time alerts 🔔 on new listings, live subscriptions 📊, allotments, and Grey Market Premiums 🏷️ to keep you in the know. Perfect for staying ahead in the IPO world!

<h2>✨ Key Highlights:</h2>
<p>&bull;&emsp;📊 Track Mainboard & SME IPOs – with live status updates</p>
<p>&bull;&emsp;📈 Live Subscription Details – view real-time progress </p>
<p>&bull;&emsp; 🔔 Allotment Notifications – never miss an IPO allotment </p>
<p>&bull;&emsp; 💰 Grey Market Premium (GMP) – stay updated on price trends</p>
<p>&bull;&emsp; 💹 In-depth Financial Insights – explore price bands, past performances, and more</p>
<p>&bull;&emsp; 📰 Latest IPO Blogs & News – stay informed on all things IPO </p>


<p>Make smart investment decisions with IPO Daily—your all-in-one IPO tracker and alert tool! 🚀</p>

<p>Download Meadhikari and make exam success achievable with top-notch resources and tools for MPSC and Maharashtra exam preparation.</p>
    

  `);
});

app.get("/api/clearCache", (req, res) => {
  console.log("Cache cleared successfully");
  cache.flushAll();
  res.send("Cache cleared successfully");
});

cron.schedule("0 */12 * * *", () => {
  console.log("Clearing specific cache keys every 12 hours");
  cache.flushAll();
});

app.listen(3001, () => {
  console.log(`Server is running on http://localhost:${3001}/app/ipo-v1`);
});
