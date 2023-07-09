const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
var bodyParser = require('body-parser'); 
const Stripe = require('stripe')

const app=express();


app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))


app.use(cors())
app.use(express.json())

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');






const PORT=process.env.PORT || 8080

// console.log(process.env.MONGODB_URL)
//connect to database
mongoose.connect("mongodb+srv://srbhmodanwal:saurabh08@cluster0.iwbedvp.mongodb.net/eCommerce")
.then(
    ()=>
        console.log("Connected successfully to mongodb"))
    
    .catch((err)=>console.log(err))

//schemea
const userSchema=mongoose.Schema({
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {type:String,required:true},
})

const userModel=mongoose.model("user",userSchema);
//api

app.get("/",(req,res)=>{
    res.send("Server is running smoothly")
})

//sign up api
app.post("/signup",async(req,res)=>{
    // console.log(req.body)
    try {

        const { firstName,lastName, email, password } = req.body;
    
        // Check if the email is already registered
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
          return res.send({message:"Email id is already register",alert:false});
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const user = new userModel({
            firstName,
            lastName,
            email,
          password: hashedPassword,
          
        });
    
        // Save the user to the database
        const data =userModel(user)
        const save=  data.save()
    
        res.send({message:"Succesfully sign up",alert:true});
      } catch (error) {
       res.sendStatus(500).json({ message: 'Signup failed' ,alert:false});
      }


  

  


})

app.post("/login",async(req,res)=>{

    try {
        const { email, password } = req.body;
    
        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
          
        }
    
        // Generate a JSON Web Token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key');
    
        res.status(200).json({ token,alert:true,data:user });
      } catch (error) {
        res.status(500).json({ error: 'Login failed' ,alert:false});
      }




//     console.log(req.body)

//     const {email}=req.body
//    const result=await userModel.findOne({email:email})

//    if(result)
//    {
//     console.log(result)
//     res.send({message:"Login is successfully",alert:true,data:result})
//    }
//    else{

//     res.send({message:"This email is not registered,please sign up",alert:false})

//    }
    
})

//product section

const schemaProduct=mongoose.Schema({
    name:String,
    category:String,
    image:String,
    price:String,
    description:String,
});

const productModel=mongoose.model("product",schemaProduct)


//save product in database

app.post("/uploadProduct",async(req,res)=>{
    // console.log(req.body)
    const data =productModel(req.body)
    const save= await data.save()
    res.send({message:"Uploaded successfully",save})
    
})

app.get("/product",async(req,res)=>{
    const data=await productModel.find({})
    res.send(JSON.stringify(data));
}
)


//payment gateway
// console.log(process.env.STRIPE_SECRET_KEY)
const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)
// console.log(stripe)

app.post("/create-checkout-session",async(req,res)=>{

    try{
     const params = {
         submit_type : 'pay',
         mode : "payment",
         payment_method_types : ['card'],
         billing_address_collection : "auto",
         shipping_options : [{shipping_rate : "shr_1NPN7PSBcuNcw5GnMTkDuKYv"}],

         line_items : req.body.map((item)=>{
           return{
             price_data : {
               currency : "inr",
               product_data : {
                 name : item.name,
               
               },
               unit_amount : item.price * 100,
             },
             adjustable_quantity : {
               enabled : true,
               minimum : 1,
             },
             quantity : item.qty
           }
         }),

         success_url : `${process.env.FRONTEND_URL}/success`,
         cancel_url : `${process.env.FRONTEND_URL}/cancel`,

     }

     
     const session = await stripe.checkout.sessions.create(params)
     // console.log(session)
     res.status(200).json(session.id)
    }
    catch (err){
       res.status(err.statusCode || 500).json(err.message)
    }

})
app.listen(PORT,()=>console.log("server is running at port: "+PORT))