const express = require('express')
const connection =require('./db.js')
const urlRoute = require('./routes/url.js')

const app = express()


app.use(express.json())

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
  }
    console.log('Connected to the database as ID ' + connection.threadId);
});


app.use("/url",urlRoute)

app.get("/:shortId",async(req,res)=>{
    const shortId = req.params.shortId;

    let sql = "select * from url where shortId = ?"
    let values = [shortId]
    connection.query(sql, values,(err, result) => {
        if (result.length > 0) {

            const redirectUrl = result[0].redirectUrl;
            console.log({ url: redirectUrl }); // Output the redirect URL to console

            res.redirect(redirectUrl)
        } else {
            // Handle the case where no matching entry is found
            res.status(404).json({ error: "URL not found" });
        }
}) 

})

app.listen(8000,()=>{
    console.log("Started")
})