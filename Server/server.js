const express = require("express");
const app = express();
    
require("./Config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyAuthorRoutes = require("./Routes/author.routes");
AllMyAuthorRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));