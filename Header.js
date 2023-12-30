import React from 'react';
import './Header.css';
import { Button } from '@mui/material';


function HeaderComponent() {
  return (
    <div className="home-page">
        <div className="div">
            <div className="overlap">
            <div className="overlap-group">
                <div className="ellipse" />
                <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/uuBspW1o/img/rectangle-1.png" />
                <p className="text-wrapper">Unveiling the Wonders of the Universe</p>
                <img
                className="lost-in-space"
                alt="Lost in space"
                src="https://c.animaapp.com/uuBspW1o/img/lost-in-space-3d-cute-girl-in-astronaut-costume-transparent-back.png"
                />
                <div className="group">
                <div className="overlap-group-2">
                    <div className="text-wrapper-2">Exercising</div>
                    <div className="group-2">
                    <img className="group-3" alt="Group" src="https://c.animaapp.com/uuBspW1o/img/group-113@2x.png" />
                    </div>
                    <img className="OBJECTS" alt="Objects" src="https://c.animaapp.com/uuBspW1o/img/objects.svg" />
                </div>
                </div>
                <div className="overlap-wrapper">
                <div className="overlap-2">
                    <div className="group-wrapper">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-3">
                        <div className="text-wrapper-3">352D 5H 49M 20S</div>
                        <div className="text-wrapper-4">Total time in space</div>
                        <div className="group-2" />
                        </div>
                    </div>
                    </div>
                    <div className="stopwatch" />
                </div>
                </div>
                <img className="group-4" alt="Group" src="https://c.animaapp.com/uuBspW1o/img/group-122.png" />
            </div>
            <div className="frame">
                <div className="text-wrapper-5">Get Started</div>
            </div>
            <p className="at-odissey-our">
                At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier
                destination for all things related to space exploration, astronomy, and the mysteries of the universe.
                Whether you&#39;re a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches
                of the cosmos.
            </p>
            <div className="text-wrapper-6">Watch the Video</div>
            <div className="play-wrapper">
                <div className="play" />
            </div>
            </div>
            <img className="odyssey" alt="Odyssey" src="https://c.animaapp.com/uuBspW1o/img/odyssey.svg" />
            <div className="text-wrapper-7">
            <img alt="Odyssey" src="https://c.animaapp.com/uuBspW1o/img/odyssey.svg" />
            </div>
            <div>
      <Button className="text-wrapper-8" > AboutUs</Button>
      <Button className="text-wrapper-9" > Community</Button>
      <Button className="text-wrapper-10"> Education</Button>
      <Button className="text-wrapper-11" > StayConnected</Button>
      <Button className="text-wrapper-12" > AboutUs</Button>
      <Button className="text-wrapper-13" > Community</Button>
      <Button className="text-wrapper-14" > Education</Button>
      <Button className="text-wrapper-15" > StayConnected</Button>
      <div className="div-wrapper">
        <Button className="text-wrapper-16" > Signin</Button>
      </div>
    </div>
            </div>
            </div>
            )
}

export default HeaderComponent;