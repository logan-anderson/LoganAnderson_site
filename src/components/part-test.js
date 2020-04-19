import Particles from 'react-particles-js';
import React from "react"

const Test = () => {
    return (
        <Particles
            width="100%"
            height="15vh"
            params={{
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 868.0624057955
                        }
                    },
                    "color": {
                        "value": "#d3d3d3"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#d3d3d3"
                        },
                    },
                    "opacity": {
                        "value": .8,
                        "random": false,
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 200,
                        "color": "#d3d3d3",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        // "direction": "none",
                        // "random": false,
                        // "straight": false,
                        // "out_mode": "out",
                        // "bounce": false,
                        // "attract": {
                        //     "enable": false,
                        //     "rotateX": 600,
                        //     "rotateY": 1200
                        // }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            // "mode": "grab"
                        },
                        // "onclick": {
                        //     "enable": false,
                        //     "mode": "push"
                        // },
                        // "resize": false
                    },
                //     "modes": {
                //         "grab": {
                //             "distance": 400,
                //             "line_linked": {
                //                 "opacity": 1
                //             }
                //         },
                //         "bubble": {
                //             "distance": 400,
                //             "size": 40,
                //             "duration": 2,
                //             "opacity": 8,
                //             "speed": 3
                //         },
                //         "repulse": {
                //             "distance": 200,
                //             "duration": 0.4
                //         },
                //         "push": {
                //             "particles_nb": 4
                //         },
                //         "remove": {
                //             "particles_nb": 2
                //         }
                //     }
                },
                "retina_detect": true
            }}
            style={{
                // "backgroundColor": "#252527",
                "position": "absolute",
                "width": "100vw",
                "height": "100vh"
            }}
        />
    )
}
export default Test