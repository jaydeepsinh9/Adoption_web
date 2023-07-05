//Calling express.
const express =require("express")
const app =express()
//So the underneath declaration and all is routes(Basically where do we want everything to go.)
const routes =require("./routes/main")
app.use("",routes)
//database connection
const pets= require("./models/pets")
//Templet engine people also use pug and things
const hbs =require("hbs")
const { default: mongoose } = require("mongoose")
app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")
/*Normal response.
Now we will call some static pages and thing.
see we are giving this a name now
to understand more instead og public/css/style.css
We will use comman name /static or anuthing.*/
app.use("/common",express.static("public"))
//Databse connection
mongoose.connect("mongodb://localhost:27017/Webdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
    /*pets.create([
      {
        petName: "Dominic",
        petGender: "Male",
        petBreed: "British Shorthair",
        petAge: "4 years",
        petID: "D123456",
        petLocation: "New York",
        petImage: "/common/images/Dominic.jpg",
        petLike: "Claiming every cardboard box as his kingdom",
        petDislike: "When the laser pointer disappears into thin air"
        },
        
        {
        petName: "Ella",
        petGender: "Female",
        petBreed: "Maine Coon",
        petAge: "7 years",
        petID: "D987654",
        petLocation: "Los Angeles",
        petImage: "/common/images/Ella.jpg",
        petLike: "Judging you silently from atop his favorite bookshelf",
        petDislike: "When the treat jar is not instantly refilled"
        },
        
        {
        petName: "Maya",
        petGender: "Female",
        petBreed: "Scottish Fold",
        petAge: "2 years",
        petID: "D246810",
        petLocation: "London",
        petImage: "/common/images/Maya.jpg",
        petLike: "Pretending to be invisible in the middle of the room",
        petDislike: "Having his belly rubbed against his will"
        },
        
        {
        petName: "Michael",
        petGender: "Male",
        petBreed: "Siamese",
        petAge: "5 years",
        petID: "D135792",
        petLocation: "Paris",
        petImage: "/common/images/Michael.jpg",
        petLike: "Demanding attention at 3 AM just to ignore you",
        petDislike: "When the scratching post doesn't meet his lofty standards"
        },
        
        {
        petName: "Milo",
        petGender: "Male",
        petBreed: "Persian",
        petAge: "3 years",
        petID: "D567890",
        petLocation: "Sydney",
        petImage: "/common/images/Milo.jpg",
        petLike: "Strategically placing fur on your freshly laundered clothes",
        petDislike: "The indignity of wearing a costume during holidays"
        },
        
        {
        petName: "Penut",
        petGender: "Male",
        petBreed: "Ragdoll",
        petAge: "6 years",
        petID: "D246813",
        petLocation: "Tokyo",
        petImage: "/common/images/penut.jpg",
        petLike: "Mastering the art of the purrfect flop",
        petDislike: "When the toy mouse fails to provide an adequate challenge"
        },
        
        {
        petName: "Tobby",
        petGender: "Male",
        petBreed: "Sphynx",
        petAge: "1 year",
        petID: "D987654",
        petLocation: "Berlin",
        petImage: "/common/images/Tobby.jpg",
        petLike: "Keeping your laptop warm by sitting directly on the keyboard",
        petDislike: "The audacity of a closed door separating him from you"
        },
        
        {
        petName: "Yoshi",
        petGender: "Female",
        petBreed: "Bengal",
        petAge: "8 years",
        petID: "D123789",
        petLocation: "Toronto",
        petImage: "/common/images/Yoshi.jpg",
        petLike: "Perfecting his hunting skills by terrorizing innocent shoelaces",
        petDislike: "When you dare to pet him without his explicit consent"
        },
    ]).then(() => {
      console.log("Initial data created");
    }).catch((error) => {
      console.error("Error creating initial data:", error);
    });*/
    /*slider.create([
        {
          Source:"/common/images/dog-sleeping.jpg",AltText:"Dog-Sleeping",Header:"Sleeping-Dog",Text:"Trial",
        },
        {
          Source:"/common/images/scared-cat.jpg",AltText:"Scared-cat",Header:"Scared-cat",Text:"Trial2",
        },
        {
          Source:"/common/images/poodle.jpg",AltText:"Poodle",Header:"Poodle",Text:"Trial3",
        },
        {
          Source:"/common/images/cat-licking.jpg",AltText:"cat-licking",Header:"cat-licking",Text:"Trial4",
        },
      ]).then(() => {
      console.log("Initial data created");
    }).catch((error) => {
      console.error("Error creating initial data:", error);
    });*/
    // Create the initial data
    /*details.create({
      cname: "LovingPaws",
      clogo: "file:///C://Users/jayde/OneDrive%20-%20University%20of%20Windsor/Desktop/WEB%20devloper/public/images/logo2.jpg",
      links: [
        { label: "Home", url: "/" },
        { label: "Who we are", url: "wwa" },
        { label: "Adoptions", url: "adp" },
        { label: "Support us", url: "sus" },
        { label: "Check us out", url: "cut" },
        { label: "Contact us", url: "Cus" },
      ],
    }).then(() => {
      console.log("Initial data created");
    }).catch((error) => {
      console.error("Error creating initial data:", error);
    });*/
  });
  
  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });
app.listen(5500,()=>
{
    console.log("Server Started.\n")
})