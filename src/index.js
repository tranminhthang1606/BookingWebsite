import express from "express";
import { configViewEngine } from "./config/viewEngine";
import { routes } from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();

let app = express();
let port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

configViewEngine(app);
routes(app);
app.listen(port , ()=>{
    console.log("Backend Nodejs is running on port "+port);
})
