const express = require("express");
const app = express();
const dfff = require('dialogflow-fulfillment');


app.get("/",(req,res)=>{
    res.send("We are live")
});

app.post('/', express.json(), (req,res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });

    function demo(agent){
       
        agent.add(`Sending response from Webhook server ohh `);
        
       
    }
    function answerF(agent){
      agent.add("Soy la funcion answer")
    }

  


    

   
    function messenger(agent){
      agent.add("Soy dfMessenger desde el webhook")
      dfMessenger.renderCustomCard(payload);
    }

    function  PayloadDemo(agent){
        var payloadData = {



            // "richContent": [
            //   [
            //     {
            //       "type": "description",
            //       "title": "Description title",
            //       "text": [
            //         "This is text line 1.",
            //         "This is text line 2."
            //       ]
            //     }
            //   ]
            // ]

       


            
              // "richContent": [
              //   [
              //     {
              //       "type": "image",
              //       "title": "Description Image",
              //       "rawUrl": "https://almomento.mx/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-5.35.27-PM.jpeg",
              //       "accessibilityText": "Example logo"
              //     }
              //   ]
              // ]
            


              
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
    intentMap.set("customPayloadDemo",PayloadDemo)
    intentMap.set("answer",answerF)
    intentMap.set("dfMessenger",messenger)
   

    agent.handleRequest(intentMap);

});







app.listen(3331,()=>{
    console.log("Server Live in port 3331")
});