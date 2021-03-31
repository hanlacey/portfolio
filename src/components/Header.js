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
                <p id="bio-link">
                    <a href="http://github.com/hanlacey">Github</a>
                </p>
                <p id="bio-link">
                    <a href="mailto:hnnhlcy@gmail.com?subject=Hello" target="_blank">Email</a>
                </p>
            </header>

        </div>
    );
}

export default Header;

