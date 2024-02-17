import React, { useEffect } from 'react'
import "./Types.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Types = () => {
    useEffect(() => {
        AOS.init(({ duration: 2000 }));
    }, []);
    return (
        <div className='types'>
            <div className="banner" >
                <div className="heading" data-aos="fade-right">
                    <h1>
                        MULTIVERSE
                    </h1>
                    <p>
                        The multiverse is the hypothetical set of all universes. Together, these universes are presumed to comprise everything that exists: the entirety of space, time, matter, energy, information, and the physical laws and constants that describe them.
                    </p>
                    <p>
                        The different universes within the multiverse are called "parallel universes", "flat universes", "other universes", "alternate universes", "multiple universes", "plane universes", "parent and child universes", "many universes", or "many worlds". One common assumption is that the multiverse is a "patchwork quilt of separate universes all bound by the same laws of physics.
                    </p>
                </div>
                <div className="img" data-aos="fade-left">
                    <img src="https://img.freepik.com/free-photo/glowing-spaceship-orbits-sphere-deep-space-generated-by-ai_188544-9658.jpg" alt="" />
                </div>
            </div>
            <div className="typesHeading">
                <div className="divide" data-aos="zoom-in" >
                    <h2>
                        TYPES
                    </h2>
                    <h4>
                        Max Tegmark and Brian Greene have devised classification schemes for the various theoretical types of multiverses and universes that they might comprise.
                    </h4>
                </div>
                <div className="maxTegmark">
                    <h3>Max Tegmark's four levels</h3>
                    <div className="card1" data-aos="slide-right" data-aos-duration="3000">
                        <div className="card1Content">
                            <h4>Level I: An extension of our universe</h4>
                            <p>A prediction of cosmic inflation is the existence of an infinite ergodic universe, which, being infinite, must contain Hubble volumes realizing all initial conditions.
                                Accordingly, an infinite universe will contain an infinite number of Hubble volumes, all having the same physical laws and physical constants. In regard to configurations such as the distribution of matter, almost all will differ from our Hubble volume. However, because there are infinitely many, far beyond the cosmological horizon, there will eventually be Hubble volumes with similar, and even identical, configurations.
                                Tegmark estimates that an identical volume to ours should be about 9.5 trillion Kms meters away from us.
                                Given infinite space, there would, in fact, be an infinite number of Hubble volumes identical to ours in the universe. This follows directly from the cosmological principle, wherein it is assumed that our Hubble volume is not special or unique. </p>
                        </div>
                        <div className="card1Img">
                            <img src="https://img.freepik.com/free-photo/natural-phenomenon-backdrop-galaxy-sky-glows-abstractly-night-generative-ai_188544-9647.jpg" id="rightImg" alt="" />
                        </div>
                    </div>
                    <div className="card2" data-aos="slide-left" data-aos-duration="3000">

                        <div className="card1Img" >
                            <img src="https://img.freepik.com/free-photo/abstract-spaceship-orbiting-starry-galaxy-backdrop-circle-generated-by-ai_188544-9683.jpg" id="leftImg" alt="" />
                        </div>
                        <div className="card1Content">
                            <h4>Level II: Universes with different physical constants</h4>
                            <p>In the eternal inflation theory, which is a variant of the cosmic inflation theory, the multiverse or space as a whole is stretching and will continue doing so forever, but some regions of space stop stretching and form distinct bubbles (like gas pockets in a loaf of rising bread). Such bubbles are embryonic level I multiverses.

                                Different bubbles may experience different spontaneous symmetry breaking, which results in different properties, such as different physical constants.

                                Level II also includes John Archibald Wheeler's oscillatory universe theory and Lee Smolin's fecund universes theory. </p>
                        </div>
                    </div>
                    <div className="card1" data-aos="slide-right" data-aos-duration="3000">
                        <div className="card1Content">
                            <h4>Level III: Many-worlds interpretation of quantum mechanics</h4>
                            <p>Hugh Everett III's many-worlds interpretation (MWI) is one of several mainstream interpretations of quantum mechanics.

                                In brief, one aspect of quantum mechanics is that certain observations cannot be predicted absolutely. Instead, there is a range of possible observations, each with a different probability. According to the MWI, each of these possible observations corresponds to a different universe, with some or many of the interpretation's proponents suggesting that these universes are as real as ours. Suppose a six-sided die is thrown and that the result of the throw corresponds to quantum mechanics observable. All six possible ways the dice can fall correspond to six different universes. In the case of the Schrödinger's cat thought experiment, both outcomes would be "real" in at least one "world".</p>
                        </div>
                        <div className="card1Img">
                            <img src="https://img.freepik.com/premium-photo/nanotechnology-molecule-atom-model-image-mixed-media_641298-13051.jpg" id="rightImg" alt="" />
                        </div>
                    </div>
                    <div className="card2" data-aos="slide-left" data-aos-duration="3000">

                        <div className="card1Img">
                            <img src="https://img.freepik.com/free-photo/realistic-spiral-galaxy-with-stars-generative-ai_169016-29323.jpg" id="leftImg" alt="" />
                        </div>
                        <div className="card1Content">
                            <h4>Level IV: Ultimate ensemble</h4>
                            <p>The ultimate mathematical universe hypothesis is Tegmark's own hypothesis.[67]

                                This level considers all universes to be equally real which can be described by different mathematical structures.

                                Tegmark writes:
                                Abstract mathematics is so general that any Theory Of Everything (TOE) which is definable in purely formal terms (independent of vague human terminology) is also a mathematical structure. For instance, a TOE involving a set of different types of entities (denoted by words, say) and relations between them (denoted by additional words) is nothing but what mathematicians call a set-theoretical model, and one can generally find a formal system that it is a model of.</p>
                        </div>
                    </div>
                </div>
                <div className="brianGreene">

                </div>
            </div>



        </div>
    )
}

export default Types
