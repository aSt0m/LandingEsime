

    particlesJS(
      {
        "particles": {
          "number": {
            "value": 10,
            "density": {
              "enable": true,
              "value_area": 500
            }
          },
          "color": {
            "value": "11582a"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "red"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 20,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "11582a",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
      
);






// Eventos Javascript
// En este evento me aparece un mensaje al inicio similar al Default Welcome Intent
// .........................................................................................

// window.addEventListener('dfMessengerLoaded',function(event){
//   console.log("chatbot cargado e inicializado" + event)

// const dfMessenger = document.querySelector('df-messenger');
// dfMessenger.renderCustomText('Renderizado de Custom text en dfMessenger');

//   dfMessenger = document.querySelector('df-messenger');
//   dfMessenger.showMinChat();

//     dfMessenger.addEventListener('df-list-element-clicked', function(event){
//       console.log("df-list-element-clicked" + event)
//   })
  

// })

// const dfMessenger = document.querySelector('df-messenger');
// console.log(dfMessenger)