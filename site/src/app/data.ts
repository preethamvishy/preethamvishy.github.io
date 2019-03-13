var masterData = {
    data: [
        {
            title: 'Socialytics',
            image: 'https://snag.gy/SNGiCc.jpg',
            github: 'https://github.com/preethamvishy/socialytics',
            live: 'https://preethamvishy.github.io/socialytics/instagram?user=instagram',
            description: `Quick, actionable Instagram analytics in under 10 seconds using Instagram's public data.  🚀`,
            tech: ['Angular', 'Node.js', 'Bootstrap', 'HTML', 'CSS', 'jQuery', 'JSON', 'Responsive']
        },
        {
            title: 'Flock',
            image: 'https://snag.gy/YAxXif.jpg',
            github: null,
            live: null,
            description: 'A full-stack web application for home rentals. ⛺',
            tech: ['Angular', 'Node.js', 'Bootstrap', 'HTML', 'CSS', 'JSON', 'Responsive']
        },
        {
            title: 'Try CLI',
            image: 'https://camo.githubusercontent.com/b4623c1474231db8931288bc2c8347d74939992b/68747470733a2f2f692e696d6775722e636f6d2f324b455747764b2e706e67',
            github: 'https://github.com/preethamvishy/try',
            live: 'https://npmjs.com/package/try-cli',
            description: 'A command line tool to attempt execution of a shell command and retry on schedule until it succeeds. Optionally, repeat the execution on schedule even if it succeeds ⌛️',
            tech: ['Node.js', 'CLI', 'npm']
        },
        {
            title: 'Porfolio',
            image: 'https://snag.gy/Fa4WiE.jpg',
            github: 'https://github.com/preethamvishy/preethamvishy.github.io',
            live: 'https://preethamvishy.github.io/',
            description: 'A platform to share my work with the world to augment enriching conversations, receive constructive feedback and engage in a synergy of learning experiences.',
            tech: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'Responsive']
        },
        {
            title: 'Liver',
            image: 'https://snag.gy/Bz5IC2.jpg',
            github: 'https://github.com/preethamvishy/live-twitter-sentiment',
            live: 'https://live-twitter-sentiment.herokuapp.com/',
            description: 'A live searchable twitter sentiment & tone analyzer using Web Sockets, Twitter Streaming API, Angular, Node.js and IBM Watson Tone Analyzer for NLP.',
            tech: ['Angular', 'Node.js', 'Bootstrap', 'HTML', 'CSS', 'Web Sockets', 'Twitter API', 'JSON', 'Heroku', 'Responsive', 'Socket.io', 'IBM Watson Tone Analyzer']
        },
        {
            title: 'Instapro',
            image: 'https://snag.gy/oRpmfX.jpg',
            github: 'https://github.com/preethamvishy/instapro',
            live: 'https://www.npmjs.com/package/instalytics',
            description: `An open-source Node.js library to get public Instagram data without API keys or logging in.`,
            tech: ['Node.js', 'npm', 'Cheerio', 'Web Scraping']
        },
        {
            title: 'Cafenaut',
            images: ['https://snag.gy/rsnORK.jpg', 'https://snag.gy/l5pzjR.jpg'],
            github: 'https://github.com/preethamvishy/Cafenaut',
            live: 'https://preethamvishy.github.io/Cafenaut/index.html',
            description: 'A fully responsive static website made with HTML and CSS for an imaginary cafe. ☕️',
            tech: ['HTML', 'CSS']
        },
        {
            title: 'Instalytics',
            image: 'https://camo.githubusercontent.com/ee0b9aabfb0af29f60868f8eb35013fdbf8ff937/68747470733a2f2f692e696d6775722e636f6d2f675147457a754e2e6a7067',
            github: 'https://github.com/preethamvishy/instalytics',
            live: 'https://www.npmjs.com/package/instalytics',
            description: `Instagram analytics as an open-source project dependency (limited due to change in Instagram's public Graph API).`,
            tech: ['Node.js', 'npm']
        },
    ],
    particleStyle: {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'z-index': 0,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    },
    particleParams: {
        "particles": {
          "number": {
            "value": 40,
            "density": {
              "enable": true,
              "value_area": 250
            }
          },
          "color": {
            "value": ["#aa73ff", "#33b1f8"]
          },
          "shape": {
            "type": "triangle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 15
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1.5,
              "opacity_min": 0.15,
              "sync": false
            }
          },
          "size": {
            "value": 2.5,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0.15,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 110,
            "color": "#33b1f8",
            "opacity": 0.25,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.6,
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
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        }
      }
};

export default masterData;