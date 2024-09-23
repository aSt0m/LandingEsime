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
       
        agent.add(`Sending response from Webhook server New `);
        
       
    }
    function answerFunction(agent){
      agent.add("Soy la funcion answer")
    }
   

    function  customPayloadDemo(agent){
        var payloadData = {
  "richContent": [
    [
      {
        "type": "info",
        "title": "Info item title",
        "subtitle": "Info item subtitle",
        "image": {
          "src": {
            "rawUrl": "https://example.com/images/logo.png"
          }
        },
        "actionLink": "https://example.com"
      }
    ]
  ]
}
        agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
    }
    

    var intentMap = new Map();
   
    
    intentMap.set('WebhookDemo',demo)
    intentMap.set("customPayloadDemo",customPayloadDemo)
    intentMap.set("answer",answerFunction)
   

    agent.handleRequest(intentMap);

});



app.listen(3333,()=>{
    console.log("Server Live in port 3333")
});