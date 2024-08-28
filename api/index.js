
import express from 'express';
import cors from 'cors'
import razorpay from "razorpay";
import bodyParser from "body-parser";
import Razorpay from 'razorpay';

    
const app = express()
const port = 4000

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

    
app.get('/', (req, res) => {
    res.send('amol jadhav')
})

app.post('/orders',(req,res)=>{

     const razorpay =new Razorpay({
        key_id:"rzp_test_zyr1Gcf0ChNi6x",
        key_secrret:""
     })

})
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})