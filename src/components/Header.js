import React from 'react';
import '../style/header.css'


// 리액트야 Header라는 이름의 태그를 나는 만들거야.
const Header = () => {
	
	return (
		<header>
			<nav>
				<ul className="nav-bar">
					<li className="nav-item"><a id="nav" href="#">HOME</a></li>
					<li className="nav-item"><a id="nav" href="#about">ABOUT</a></li>
					<li className="nav-item"><a id="nav" href="#skills">SKILLS</a></li>
					<li className="nav-item"><a id="nav" href="#port">PORTFOLIO</a></li>
					<li className="nav-item"><a id="nav" href="#contact">CONTACT</a></li>
				</ul>
			</nav>
		</header>
	  )
};

export default Header;