const express = require("express");
const app = express();
const dfff = require('dialogflow-fulfillment');
;

app.get("/",(req,res)=>{
    res.send("We are live")
});

app.post('/', express.json(), (req,res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });

    function demo(agent){
        agent.add("Sending response from Webhook server")
        agent.add("Sending other request of server!!!!!!")
    }

    var intentMap = new Map();
    
   intentMap.set('WebhookDemo',demo)

    agent.handleRequest(intentMap);

});



app.listen(3333,()=>{
    console.log("Server Live in port 3333")
});