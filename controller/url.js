const shortid = require('shortid')
const connection = require('../db.js')

async function handleShortId(req,res){

    const body = req.body;

    if(!body.url) return res.status(400).json({error:'Url is required'})
    const shortId = shortid(8);
    let sql = "insert into url (shortId,redirectUrl,visitHistory) values (?)"
    let values = [shortId,body.url,'2003-01-02']
    connection.query(sql, [values],(err, result) => {
    if(err) throw err;
    console.log(result);
    
    });

    return res.json({id:shortId})
}

module.exports = {
    handleShortId
}
