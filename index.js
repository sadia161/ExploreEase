const oracledb = require('oracledb');
const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
const app = express();
 const port = 3000;

app.use(cors());
=======
// const cors = require('cors');
const app = express();
const port = 3000;

// app.use(cors());
>>>>>>> 411e12a26fd1edfb368228cb909e68bed87aad84
 app.use(express.static('public'))
//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.listen(port);

async function fun(query) {
    let con;

    try {
        con = await oracledb.getConnection({
            user: "EXPLOREEASE",
            password: "ease",
            connectString: "localhost/orclpdb"
        });
        const data = con.execute(query);
        await con.close();
        
        //console.log(data.rows);
        return data;

    } catch (err) {
        console.error(err);
    }
}

//fun();
app.get('/Hotels/:username',async (req,res)=>{
    console.log('Host connected');
   
    const username = req.params.username;
    try{
    const data = await fun(`SELECT * FROM HOTELS WHERE "HOTEL_NAME" = '${username}' `);
    
    res.send(data.rows[0]);
    } catch(error)
    {
        console.error(error);
        res.status(500).send({error : 'Internal Server Error'})
    }
});

app.get('/Places/:username',async (req,res)=>{
    console.log('Host connected');
   
    const username = req.params.username;
    try {
        const data = await fun(`SELECT * FROM PLACES WHERE "PLACE_NAME" = '${username}' `);
        res.send(data.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
   
});
