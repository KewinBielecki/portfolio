import React from 'react';
import '../../Styles/projects.scss';

export class Projects extends React.Component {


    render() {
        return(
            <div id='projects' className='projectsBox animated fadeInLeft'>
                <h2>Projekty</h2>
                <div className='projects1'>
                    <div className="hovereffect-1">
                        <img alt="" className="img-responsive project1"></img>
                            <div className="overlay">
                                <h2>To-do-App</h2><a className="info" href="https://kewinbielecki.github.io/To-do-App/" target='_blank'>Demo</a>
                                <a className="info1" href="https://github.com/KewinBielecki/To-do-App" target='_blank'>GITHUB</a>
                            </div>
                    </div>
                    <div className="hovereffect-1">
                        <img alt="" className="img-responsive project2"></img>
                        <div className="overlay">
                            <h2>Zaplanuj jedzonko</h2><a className="info" href="#">Demo</a>
                            <a className="info1" href="https://github.com/KewinBielecki/Zaplanuj-Jedzonko" target='_blank'>GITHUB</a>
                        </div>
                    </div>
                    <div className="hovereffect-1">
                        <img alt="" className="img-responsive project3"></img>
                        <div className="overlay">
                            <h2>Current Weather App</h2><a className="info" href="#">Demo</a>
                            <a className="info1" href="https://github.com/KewinBielecki/Current-Weather-App" target='_blank'>GITHUB</a>
                        </div>
                    </div>
                </div>
                <div className='projects2'>

                    <div className="hovereffect-1">
                        <img alt="" className="img-responsive project4"></img>
                        <div className="overlay">
                            <h2>Memory Game - GOT</h2><a className="info" href="#">Demo</a>
                            <a className="info1" href="https://github.com/KewinBielecki/Memory-Game---Game-of-Thrones" target='_blank'>GITHUB</a>
                        </div>
                    </div>
                    <div className="hovereffect-1">
                        <img alt="" className="img-responsive project5"></img>
                        <div className="overlay">
                            <h2>Pong Game</h2><a className="info" href="https://kewinbielecki.github.io/Pong-Game/" target='_blank'>Demo</a>
                            <a className="info1" href="https://github.com/KewinBielecki/Pong-Game" target='_blank'>GITHUB</a>
                        </div>
                    </div>
                    <div className="hovereffect-1">
                        <img alt="" className="img-responsive project6"></img>
                        <div className="overlay">
                            <h2>Portfolio</h2><a className="info" href="http://kbielak.vot.pl/" target='_blank'>Demo</a>
                            <a className="info1" href="https://github.com/KewinBielecki/Pong-Game" target='_blank'>GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;