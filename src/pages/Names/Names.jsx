import React, { useEffect } from 'react'
import "./Names.css"
import AOS from 'aos'
import 'aos/dist/aos.css'


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}



const Names = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        AOS.init(({ duration: 2000 }));
    }, []);
    return (
        <div className='names'>
            <div className="someNames"  >
                <h2 data-aos="slide-down" data-aos-duration="3000" >Some Multiverses</h2>
                <div className="namesCards">
                    <div className="namesCard" data-aos="flip-left" data-aos-duration="3000" >
                        <img src="https://img.freepik.com/free-photo/planet-with-planet-middle_188544-19551.jpg" />
                        <div className="namesContent">
                            <h3>
                                Nexus Realm
                            </h3>
                            <p>
                                The hub of infinite realities, where dimensions converge across the multiverse gather. Amidst its ever-shifting landscapes, treasures await brave adventurers, while dangers lurk in every corner
                            </p>
                        </div>
                    </div>
                    <div className="namesCard" data-aos="flip-left" data-aos-duration="3000" >
                        <img src="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-5_1562-750.jpg" />
                        <div className="namesContent">
                            <h3>
                                Celestia Prime
                            </h3>
                            <p>
                                The celestial heart of the multiverse, where ethereal beauty and cosmic wonders converge. Home to celestial beings and ancient prophecies, its radiant splendor offers enlightenment and transcendence.
                            </p>
                        </div>
                    </div>

                    <div className="namesCard" data-aos="flip-left" data-aos-duration="3000" >
                        <img src="https://img.freepik.com/premium-photo/group-spheres-field-generative-ai-art_158863-17073.jpg" />
                        <div className="namesContent">
                            <h3>
                                Terra Nova
                            </h3>
                            <p>
                                A realm of boundless exploration and ancient mysteries, teeming with diverse landscapes and mythical creatures. From lush forests to crystalline oceans, its beauty beckons adventurers to uncover its secrets .
                            </p>
                        </div>
                    </div>

                </div>
            </div> 

            <div className="tab"  data-aos="zoom-out"  data-aos-duration="3000">
                <h2 id="tabHeading">Concept of the multiverse is used in various works</h2>
                <Box id="tabBox"
                    sx={{ flexGrow: 1, display: 'flex', alignItems: "center", height: 380}}
                >
                     <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: '#f0f8ff5d' }}
                    >
                        <Tab label="Science Fiction Literature" {...a11yProps(0)} id="tabItem" />
                        <Tab label="Comic Books" {...a11yProps(1)} id="tabItem" />
                        <Tab label="Film and Television" {...a11yProps(2)} id="tabItem" />
                        <Tab label="Video Games" {...a11yProps(3)} id="tabItem" />
                        <Tab label="Scientific Speculation" {...a11yProps(4)} id="tabItem" />
                    </Tabs>
                    <TabPanel value={value} index={0} className="tabDiv">
                        <div className="tabImage">
                            <img src="https://img.freepik.com/free-photo/book-that-has-word-mountain-it_188544-12612.jpg?size=626&ext=jpg&ga=GA1.1.47812527.1694450679&semt=ais" />
                        </div>
                        <div className="tabContent">
                            <h3>
                                Science Fiction Literature
                            </h3>
                            <p>

                                Authors like Philip K. Dick ("The Man in the High Castle"), Michael Moorcock ("The Multiverse"), and China Miéville ("The City & the City") have explored multiverse concepts in their novels, often depicting parallel realities, alternate histories, and the intersections between them.
                            </p>
                            <p>
                            "His Dark Materials" trilogy by Philip Pullman features a multiverse where characters travel between parallel worlds, each with its own unique characteristics and rules.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} className="tabDiv">
                        <div className="tabImage">
                            <img src="https://img.freepik.com/premium-vector/comic-book-sunburst-background-illustration_275207-4577.jpg" />
                        </div>
                        <div className="tabContent">
                            <h3>
                                Comic Books and Graphic Novels
                            </h3>
                            <p>
                                The DC Comics and Marvel Comics universes are famous for their multiverse concepts, with parallel Earths, alternate dimensions, and divergent timelines featuring prominently in storylines and character arcs.
                            </p>
                            <p>
                            The DC Comics and Marvel Comics universes incorporate multiverse concepts, with characters like Superman, Spider-Man, and The Flash encountering alternate versions of themselves from different Earths.

                            </p>
                            <p>
                            Graphic novel series like "Saga" by Brian K. Vaughan and "The Multiversity" by Grant Morrison explore vast multiverse landscapes with diverse civilizations and cultures.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2} className="tabDiv">
                        <div className="tabImage">
                            <img src="https://img.freepik.com/premium-photo/8-mm-movie-camera-with-reel-film-smoke_132310-8514.jpg" />
                        </div>
                        <div className="tabContent">
                            <h3>
                                Film and Television
                            </h3>
                            <p>
                                TV shows like "Doctor Who," "Fringe," and "Sliders" have explored multiverse concepts, with characters traveling between different dimensions and encountering alternate versions of themselves.
                            </p>
                            <p>
                                Films like "The Matrix," "Inception," and "The One" also delve into ideas of simulated realities and parallel worlds, challenging characters to navigate complex and surreal landscapes.
                            </p>
                            <p>
                            TV shows like "Stranger Things," "Fringe," and "Rick and Morty" feature characters navigating parallel dimensions and encountering alternate versions of themselves and their surroundings.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3} className="tabDiv">
                        <div className="tabImage">
                            <img src="https://img.freepik.com/premium-photo/futuristic-games-video-games-concept-gamepad-controls-flying-robot-their-video-game-blockchain-games_120871-324.jpg" />
                        </div>
                        <div className="tabContent">
                            <h3>
                                Video Games
                            </h3>
                            <p>

                                Video games like the "Bioshock" series, "Chrono Cross," and "The Legend of Zelda: A Link to the Past" feature multiverse elements, allowing players to explore alternate realities, divergent timelines, and the consequences of their actions across different dimensions.
                            </p>
                            <p>
                                Role-playing games like the "Elder Scrolls" series and "Chrono Cross" feature multiverse settings with interconnected dimensions and divergent timelines.

                            </p>
                            <p>
                            Games like the "Portal" series and "Quantum Break" incorporate elements of multiverse theory into their gameplay mechanics, allowing players to manipulate space-time and explore alternate realities.

                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={4} className="tabDiv">
                        <div className="tabImage">
                            <img src="https://img.freepik.com/premium-photo/business-people-big-data-technology-concept-businessman-working-with-virtual-reality-screens-from-back-black-background_380164-185983.jpg" />
                        </div>
                        <div className="tabContent">
                            <h3>
                                Scientific Speculation
                            </h3>
                            <p>
                                Physicists and cosmologists have proposed various multiverse theories to explain phenomena such as the fine-tuning of physical constants, the nature of black holes, and the origins of the universe itself. These theories range from eternal inflation to string theory to quantum mechanics interpretations.
                            </p>
                            <p>
                                Overall, the concept of the multiverse has captured the imagination of creators and thinkers across different mediums, offering rich opportunities for exploration of parallel worlds, alternate realities, and the mysteries of existence. Whether in fiction or science, the multiverse concept continues to inspire curiosity and creativity.
                            </p>
                        </div>
                    </TabPanel>
                </Box>
            </div>
        </div>
    )
}

export default Names
