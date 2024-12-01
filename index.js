
//Importaciones
const express = require("express");
const app = express();
const dfff = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');


// const dfMessenger = require('./js/app')
// console.log(dfMessenger)

//Levanta un servidor
app.get("/",(req,res)=>{
    res.send("Running server...")
});

app.post('/', express.json(), (req,res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });

//Funcion Welcome
    function welcome(agent) {
      agent.add(`Soy Esmeralda, tu asistente virtual de titulación.

Puedes preguntarme directamente tu duda pero te presento las consultas más frecuentes de otros usuarios, es posible que te puedan ayudar.

1️⃣Información general: Información de titulación, fechas, y dudas frecuentes.
2️⃣Gestión de documentacón: Envio de documentos.
3️⃣Orientación y consejería: Preparación para defensa de tesis 
4️⃣Asesoria y continuidad academica: Información sobre estudios de posgrado.
5️⃣Recurso digitales y material de apoyo: Recursos (videos, articulos, guias de redacción, etc)`);
     
    }
//Función Fallback intent
    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

//Función demo
    function demo(agent){
        agent.add(`funcion demo `);     
    }
//Función FAQs
    function getFaqs(agent){
      agent.add(`Intent Faqs`);     
    }
//Función answerF 
    function answerF(agent){
      agent.add("Soy la funcion answer")
    }
//Función messenger
    function messenger(agent){ 
      agent.add("intent messenger")   
    }
//Funciones con carga util
    function  PayloadDemo(agent){
        var payloadData = {
                "richContent": [
                  [
                    {
                      "type": "info",
                      "title": "Es el boton del intent",
                      "subtitle": "Info item subtitle",
                      "image": {
                        "src": {
                          "rawUrl": 'https://google.com'
                        }
                      },
                      "actionLink": "https://example.com"
                    }
                  ]
                ]         
          }

      agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
    }
    
// Funcion para acceder a los valores de parametros
  function languageHandler(agent) {
    const language = agent.parameters.language;
    const programmingLanguage = agent.parameters['language-programming'];
      if (language) {
        agent.add(`From fulfillment: Wow! I didn't know you knew (Wow! No sabia que sabias) ${language}`);
      } else if (programmingLanguage) {
        agent.add(`Desde fulfillment: ${programmingLanguage} es cool`);
      } else {
        agent.add(`Desde fulfillment: ¿Qué lenguaje conoces??`);
      }
  }

// Funcion para obtener imagenes
  function  getImage(agent){
      var payloadDataImage = {   
            "richContent": [
              [
                {
                  "type": "image",
                  "accessibilityText": "ESIME-ZACATENCO",
                  "rawUrl": "https://clickeducacion.com/wp-content/uploads/2022/11/esime-paro-indefinido.jpg",
                  "title": "Description Image",
                }
              ]
            ]       
        }
      agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadDataImage, {sendAsMessage: true, rawPayload: true}))
  }

// Función para botones personalizados
  function  getButton(agent){ 
    var payloadDataButton ={
      "richContent": [
        [
          {
            "type": "button",
            "icon": {
              "type": "chevron_right",
              "color": "#40694e"
            },
            "text": "Iniciar",
            "link": "https://example.com",
            "event": {
              "name": "",
              "languageCode": demo(agent),
              "parameters": {}
            }
          }
        ]
      ]
    }
    agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadDataButton, {sendAsMessage: true, rawPayload: true}))
}

// Función para obtener lista
  function  getList(agent){
    var payloadDataList = {
    "richContent": [
      [
        {
          "type": "list",
          "title": "1. Modos de titulación",
          "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
          }
        },
        {
          "type": "list",
          "title": "2. FAQs",
          "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
          }
        },
        {
          "type": "list",
          "title": "3. Tramites",
          "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
          }
        },
        {
          "type": "list",
          "title": "4. Fechas ",
          "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
          }
        },
        {
          "type": "list",
          "title": "5. Documentación",
          "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
          }
        }
      ]
    ]
  }
  agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadDataList, {sendAsMessage: true, rawPayload: true}))
}

//Función para respuesta enriquecida accordion
  function  getAccordion(agent){ 
    var payloadDataAccordion ={
     "richContent": [
        [
          {
           "facebook": {
              "attachment": {
              "type": "audio",
              "payload": {
                "url": "https://example.com/audio/test.mp3"
              }
               }
            }
         }
            
       ]
      ]
   }

  agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadDataAccordion, {sendAsMessage: true, rawPayload: true}))
}

//
  function  getChip(agent){ 
    var payloadDataChip ={
      "richContent": [
        [
          {
            "type": "chips",
            "options": [
              {
                "text": "Chip 1",
                "image": {
                "src": {
                  "rawUrl": "https://example.com/images/logo.png"
                  }
                },
                "link": "https://example.com"
              },
              {
              "text": "Chip 2",
              "image": {
                "src": {
                  "rawUrl": "https://example.com/images/logo.png"
                }
              },
              "link": "https://example.com"
            }
          ]
        }
      ]
    ]
  }
  agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadDataChip, {sendAsMessage: true, rawPayload: true}))
}

//Funcion de carga util mezclada
function  getMixed(agent){ 
  var payloadDataMixed ={
    "richContent": [
      [

        {
          "type": "info",
          "title": "Dialogflow",
          "subtitle": "Puedes preguntarme por alguna categoria de la lista o dar click en alguna que necesites",
          "actionLink": "https://cloud.google.com/dialogflow/docs"
        },
        {
          "type": "chips",
          "options": [
            {
              "text": "Opcion 1",
              "link": "https://cloud.google.com/dialogflow/case-studies"
            },
            {
              "text": "Docs",
              "link": "https://cloud.google.com/dialogflow/docs"
            },
            {
              "text": "opción",
              "link": "https://cloud.google.com/dialogflow/case-studies"
            },
            {
              "text": "Opcion 1",
              "link": "https://cloud.google.com/dialogflow/case-studies"
            },
            {
              "text": "Docs",
              "link": "https://cloud.google.com/dialogflow/docs"
            }
          ]
        }
      ]
    ]
  }

  agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadDataMixed, {sendAsMessage: true, rawPayload: true}))
}


//Enlace de los intents y palabras de entrenamiento

    let intentMap = new Map();
   
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('WebhookDemo',demo)
    intentMap.set("customPayloadDemo",PayloadDemo)
    intentMap.set("answer",answerF)
    intentMap.set("getImageIntent",getImage)
    intentMap.set("getButtonIntent", getButton)
    intentMap.set("getListIntent", getList)
    intentMap.set("getAccordionIntent", getAccordion)
    intentMap.set("getChipIntent", getChip)
    intentMap.set("getMixedIntent", getMixed)
    intentMap.set('set-language', languageHandler);
    intentMap.set('set-language', languageHandler);
    intentMap.set('getFaqsIntent', getFaqs);
   
    agent.handleRequest(intentMap);
});

//Servidor en escucha en el puerto 2109
app.listen(2109,()=>{
    console.log("Server Live in port 2109")
});


//Integración Facebook




