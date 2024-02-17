import React, { useEffect } from 'react'
import "./DarkMatter.css"

import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../../Components/Navbar/Navbar'

const DarkMatter = () => {
    useEffect(() => {
        AOS.init(({ duration: 2000 }));
    }, []);
    return (
        <>
            <Navbar />
            <div className='darkMatter'>
                <div className="homeSection">
                    <h2>
                        Dark Matter & Dark Energy
                    </h2>
                    <p>
                        Everything scientists can observe in the universe, from people to planets, is made of matter. Matter is defined as any substance that has mass and occupies space. But there’s more to the universe than the matter we can see. Dark matter and dark energy are mysterious substances that affect and shape the cosmos, and scientists are still trying to figure them out.
                    </p>
                    <p>
                        Dark matter is not known to interact with ordinary baryonic matter and radiation except through gravity,[b] making it difficult to detect in the laboratory. The most prevalent explanation is that dark matter is some as-yet-undiscovered subatomic particle.
                    </p>
                </div>

                <div className="news">
                    <div className="darkMatterHeading">
                        Dark Matter and Energy Stories
                    </div>
                    <div className="darkMatterCards" >
                        <div className="darkMatterCard">
                            <div className="darkMatterCardImage" data-aos="fade-left">
                                <img src="https://img.freepik.com/free-photo/light-flares-composition_23-2150630149.jpg" />
                            </div>
                            <div className="darkMatterCardContent" data-aos="fade-right">
                                <h3>
                                    Stars travel more slowly at Milky Way's edge: Galaxy's core may contain less dark matter than previously estimated                            </h3>
                                <p>
                                    By clocking the speed of stars throughout the Milky Way galaxy, MIT physicists have found that stars further out in the galactic disk are traveling more slowly than expected compared to stars that are closer to the galaxy's center. The findings raise a surprising possibility: The Milky Way's gravitational core may be lighter in mass, and contain less dark matter, than previously thought.
                                </p>
                                <a href="https://indianexpress.com/article/technology/science/supermassive-black-holes-dawn-of-time-9151229/" target='blank'><button>Read More</button></a>
                            </div>
                        </div>
                        <div className="darkMatterCard">
                            <div className="darkMatterCardContent" data-aos="fade-left">
                                <h3>
                                    New dark matter theory explains two puzzles in astrophysics                            </h3>
                                <p>
                                    The first is a high-density dark matter halo in a massive elliptical galaxy,” Yu said. “The halo was detected through observations of strong gravitational lensing, and its density is so high that it is extremely unlikely in the prevailing cold dark matter theory. The second is that dark matter halos of ultra-diffuse galaxies have extremely low densities and they are difficult to explain by the cold dark matter theory.
                                </p>
                                <a href="https://www.nasa.gov/image-article/telescopes-show-the-milky-ways-black-hole-is-ready-for-a-kick/" target='blank'><button>Read more</button></a>
                            </div>
                            <div className="darkMatterCardImage" data-aos="fade-right">
                                <img src="https://www.nasa.gov/wp-content/uploads/2024/02/football.jpg?resize=2000,1500" />
                            </div>
                        </div>
                        <div className="darkMatterCard">
                            <div className="darkMatterCardImage" data-aos="fade-left">
                                <img src="https://cdn.pixabay.com/photo/2020/06/28/20/16/science-5350597_1280.jpg" />
                            </div>
                            <div className="darkMatterCardContent" data-aos="fade-right">
                                <h3>
                                    Astronomers measure dark matter 'haloes' around hundreds of ancient black holes for 1st time                            </h3>
                                <p>
                                    A team of astronomers has, for the first time, "weighed" dark matter haloes surrounding actively feeding supermassive black holes in the bright hearts of ancient galaxies.
                                    These black hole-powered hearts, or quasars, are often brighter than the combined light of every star in the galaxies around them.
                                </p>
                                <a href="https://www.thehindu.com/sci-tech/science/earth-wide-telescope-confirms-black-hole-shadow-is-real/article67828171.ece" target='blank'><button>Read More</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default DarkMatter
