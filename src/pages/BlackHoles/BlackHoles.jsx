import React, { useEffect } from 'react'
import "./BlackHoles.css"


import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../../Components/Navbar/Navbar'
const BlackHoles = () => {
  useEffect(() => {
    AOS.init(({ duration: 2000 }));
  }, []);
  return (
    <>
      <Navbar />
      <div className='blackHoles'>
        <div className="homeSection">
          <h2>
            Black Holes
          </h2>
          <p>
            Black holes are among the most mysterious cosmic objects, much studied but not fully understood. These objects aren’t really holes. They’re huge concentrations of matter packed into very tiny spaces. A black hole is so dense that gravity just beneath its surface, the event horizon, is strong enough that nothing – not even light – can escape. The event horizon isn’t a surface like Earth’s or even the Sun’s. It’s a boundary that contains all the matter that makes up the black hole.
          </p>
          <p>
            There is much we don’t know about black holes, like what matter looks like inside their event horizons. However, there is a lot that scientists do know about black holes.
          </p>
        </div>
        <div className="facts">
          <div className="factHeading">
            <h2>
              Essential Black Hole Facts
            </h2>
          </div>
          <div className="factCards">
            <div className="fact">
              <div className="factImage">
                <img src="https://img.freepik.com/premium-photo/concentrated-glowing-nebula-around-black-hole-singularity_124507-31926.jpg" />
              </div>
              <div className="factContent">
                <h3>
                  BIGGEST
                </h3>
                <p>
                  The most massive black hole observed, TON 618, tips the scales at 66 billion times the Sun’s mass.
                </p>
              </div>
            </div>
            <div className="fact">
              <div className="factImage">
                <img src="https://cdn.pixabay.com/photo/2021/05/22/22/35/black-hole-6274731_1280.jpg" />
              </div>
              <div className="factContent">
                <h3>
                  SMALLEST
                </h3>
                <p>
                  The lightest-known black hole is only 3.8 times the Sun’s mass. It’s paired up with a star.
                </p>
              </div>
            </div>
            <div className="fact">
              <div className="factImage">
                <img src="https://img.freepik.com/premium-photo/stunning-realistic-wallpaper-black-hole-deep-space-starry-astrophotography-universe-cosmus-space-background-generative-ai_742252-11252.jpg" />
              </div>
              <div className="factContent">
                <h3>
                  STAR BOOMS.
                </h3>
                <p>
                  One type of black hole is born when massive stars run out of fuel and explode in supernovae.
                </p>
              </div>
            </div>
            <div className="fact">
              <div className="factImage">
                <img src="https://img.freepik.com/premium-photo/black-hole-universe-scientific-art-abstract_410516-564.jpg" />
              </div>
              <div className="factContent">
                <h3>
                  CLOSEST
                </h3>
                <p>
                  The nearest known black hole, called Gaia BH1, is about 1,500 light-years away.
                </p>
              </div>
            </div>
            <div className="fact">
              <div className="factImage">
                <img src="https://img.freepik.com/premium-vector/realistic-isolated-black-hole-space_269299-772.jpg" />
              </div>
              <div className="factContent">
                <h3>
                  FARTHEST.
                </h3>
                <p>
                  The most distant black hole detected, at the center of a galaxy called QSO J0313-1806, is around 13 billion light-years away.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="news">
          <div className="blackHolesheading">
            NEWS ON BLACK HOLES
          </div>
          <div className="blackHolesCards" >
            <div className="blackHolesCard">
              <div className="blackHolesCardImage" data-aos="fade-left">
                <img src="https://img.freepik.com/free-photo/light-flares-composition_23-2150630149.jpg" />
              </div>
              <div className="blackHolesCardContent" data-aos="fade-right">
                <h3>
                  Black holes existed at the dawn of time, birthing new stars, finds study
                </h3>
                <p>
                  A new analysis of James Webb Space Telescope data suggests that black holes existed at the dawn of time, helping create new stars and supercharging galaxy formation. This theory could challenge the current understanding that they formed after the first stars and galaxies emerged.
                </p>
                <a href="https://indianexpress.com/article/technology/science/supermassive-black-holes-dawn-of-time-9151229/" target='blank'><button>Read More</button></a>
              </div>
            </div>
            <div className="blackHolesCard">
              <div className="blackHolesCardContent" data-aos="fade-left">
                <h3>
                  Telescopes Show the Milky Way’s Black Hole is Ready for a Kick
                </h3>
                <p>
                  This artist’s illustration depicts the findings of a new study about the supermassive black hole at the center of our galaxy called Sagittarius A* (abbreviated as Sgr A*). As reported in our latest press release, this result found that Sgr A* is spinning so quickly that it is warping spacetime — that is, time and the three dimensions of space — so that it can look more like a football.
                </p>
                <a href="https://www.nasa.gov/image-article/telescopes-show-the-milky-ways-black-hole-is-ready-for-a-kick/" target='blank'><button>Read more</button></a>
              </div>
              <div className="blackHolesCardImage" data-aos="fade-right">
                <img src="https://www.nasa.gov/wp-content/uploads/2024/02/football.jpg?resize=2000,1500" />
              </div>
            </div>
            <div className="blackHolesCard">
              <div className="blackHolesCardImage" data-aos="fade-left">
                <img src="https://cdn.pixabay.com/photo/2020/06/28/20/16/science-5350597_1280.jpg" />
              </div>
              <div className="blackHolesCardContent" data-aos="fade-right">
                <h3>
                  XMM-Newton spots a black hole throwing a tantrum
                </h3>
                <p>
                  Black holes are like temperamental toddlers. They spill food all the time, but ESA's XMM-Newton has caught a black hole in the act of "flipping over the table" during an otherwise civilized meal.
                  This act prevents the galaxy surrounding the black hole from forming new stars, giving us insight into how black holes and galaxies co-evolve.
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

export default BlackHoles
