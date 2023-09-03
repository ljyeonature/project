import React from 'react';
import img1 from "../components/image/todo.jpg"
import img2 from "../components/image/mbti.jpg"
import img3 from "../components/image/card.jpg"

import '../style/portfolio.css'

const Portfolio = () => {
	
	return (
		<div id="port" className="height-fix">
			<div id="port">
				<h2>PORTFOLIO</h2>
			</div>
			<div className="ports">

				<div className="port">
					<div className="item front"><h3 id="title">Lotto</h3></div>
						
					<div className="item back">
						<a id="card" href="https://lotto-app.netlify.app/">
						<h3 id="title">open</h3>
						</a></div>
				</div>
				<div className="port">
					<div className="item front"><h3 id="title">To Do List</h3></div>
						
					<div className="item back">
						<a id="card" href="https://todoapp-yeon.netlify.app">
						<h3 id="title">open</h3>
						</a></div>
				</div>
				<div className="port">
					<div className="item front"><h3 id="title">MBTI</h3></div>
						
					<div className="item back">
						<a id="card" href="https://marvel-character.netlify.app">
						<h3 id="title">open</h3>
						</a></div>
				</div>
				<div className="port">
					<div className="item front"><h3 id="title">Card App</h3></div>
						
					<div className="item back">
						<a id="card" href="https://card-app-leejiyeon.netlify.app">
						<h3 id="title">open</h3>
						</a></div>
				</div>
			</div>

		</div>
	);
};

export default Portfolio;