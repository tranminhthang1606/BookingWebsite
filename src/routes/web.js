import express  from "express";


const router = express.Router();

const routes = (app)=>{
    router.get("/",(req,res)=>{
        return res.send('Hello world')
    })

    return app.use("/",router)
}

export {routes}