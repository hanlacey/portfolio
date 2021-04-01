import React from 'react';

function Header(props) {
    return (
        <div className="title-bar">
            <header>
                Hannah Lacey
                 <p id="bio-line">
                    Trainee full stack developer<br></br>
                Currently training at Northcoders bootcamp
            </p>
                <p id="bio-link-container">
                    <a id="bio-link" href="http://github.com/hanlacey">Github</a>
                    <a id="bio-link" href="http://linkedin.com/in/hanlacey">LinkedIn</a>
                    <a id="bio-link" href="mailto:hlaceydev@gmail.com">hlaceydev@gmail.com</a>                </p>
            </header>
        </div>
    );
}

export default Header;

