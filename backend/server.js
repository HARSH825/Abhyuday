import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config(); //env variables init

// app.use("/user",userRouter);

const PORT = process.env.PORT || 3001 ;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
