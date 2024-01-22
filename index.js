const oracledb = require('oracledb');
const express = require('express');
const cors = require('cors');
const app = express();
 const port = 3000;

app.use(cors());
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

        // const data = await con.execute(
        //     "SELECT * FROM departments" ,
        // );

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

















// res.send('<html><head><title>heyyyy</title></head><body>cse onek kothin</body></html>');

   // const data = await fun(`SELECT * FROM EMPLOYEES WHERE "FIRST_NAME" = '${username}' `);
  // res.send({name : 123 , username : 4});
   // res.end();a