const express = require("express");
const ErrorHandler = require("../middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


const {SitemapStream,streamToPromise}=require('sitemap')

//adding the sitemap route 


app.get('/sitemap.xml', (req, res) => {
    const sitemap = new SitemapStream({ hostname: 'https://www.modcub.in' });
  
    matchRoutes(routes, req.path).map(({ route }) => {
      sitemap.write({ url: route.path, changefreq: 'monthly', priority: 0.7 });
    });
  
    sitemap.end();
    streamToPromise(sitemap).then((sm) => {
      res.header('Content-Type', 'application/xml');
      res.send(sm);
    });
  });
// Enable CORS
// Enable CORS
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true,
}));

// Increase maximum file size limit
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
    res.send("Hello world!");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });
}

// import routes
const user = require("../controller/user");
const shop = require("../controller/shop");
const product = require("../controller/product");
const event = require("../controller/event");
const coupon = require("../controller/coupounCode");
const payment = require("../controller/payment");
const order = require("../controller/order");
const conversation = require("../controller/conversation");
const message = require("../controller/message");
const withdraw = require("../controller/withdraw");
const conact = require("../controller/contact");


app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);
app.use("/api/v2/contact", conact);

app.get("/", (req, res) => {
    res.json({ message: "server is working" });
});
// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
