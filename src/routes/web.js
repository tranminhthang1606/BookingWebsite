import express  from "express";
import {HomeController} from "../controllers/homeController";

const router = express.Router();

const routes = (app)=>{
    router.get("/",HomeController)

    return app.use("/",router)
}

export {routes}