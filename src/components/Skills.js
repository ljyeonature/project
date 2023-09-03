import React,{useEffect} from 'react';
import WOW from 'wowjs'
import ProgressBar from 'progressbar.js'
import '../style/skills.css'

const Skills = () => {
	useEffect( () => {
			new WOW.WOW().init();
		}, []);
		
		  window.onload = function onLoad() {
			const html = new ProgressBar.Circle('#html', {
				color: 'orange',
				duration: 3000,
				easing: 'easeInOut',
			});
			html.animate(0.8);

			const css = new ProgressBar.Circle('#css', {
				color: 'orange',
				duration: 3000,
				easing: 'easeInOut',
			});
			css.animate(0.8);

			const js = new ProgressBar.Circle('#js', {
				color: 'orange',
				duration: 3000,
				easing: 'easeInOut',
			});
			js.animate(0.65);

			const jq = new ProgressBar.Circle('#jq', {
				color: 'orange',
				duration: 3000,
				easing: 'easeInOut',
			});
			jq.animate(0.4);

			const react = new ProgressBar.Circle('#react', {
				color: 'orange',
				duration: 3000,
				easing: 'easeInOut',
			});
			react.animate(0.85);

			const java = new ProgressBar.Circle('#java', {
				color: 'orange',
				duration: 3000,
				easing: 'easeInOut',
			});
			java.animate(0.85);
			
		};
	

		  
	return (

		<section id="skills" className="height-fix">
			<div id="skills" >
				<h2>SKILLS</h2>
				<div className="skills">
					<div className="html" id="html">
						<p className="wow bounce">HTML</p>
					</div>
					<div className="css" id="css">
						<p className="wow bounce">CSS</p>
						{/* <h2 className="wow bounce" >CSS</h2> */}
						{/* <p>스킬을 사용해 할 수 있는 것들 대강 묘사</p> */}
					</div>
					<div className="js" id="js">
						<p className="wow bounce">JavaScript</p>
						{/* <h2 className="wow bounce" >CSS</h2> */}
						{/* <p>스킬을 사용해 할 수 있는 것들 대강 묘사</p> */}
					</div>
					<div className="jq" id="jq">
						<p className="wow bounce">JQuery</p>
						{/* <h2 className="wow bounce" >CSS</h2> */}
						{/* <p>스킬을 사용해 할 수 있는 것들 대강 묘사</p> */}
					</div>
					<div className="react" id="react">
						<p className="wow bounce">React</p>
						{/* <h2 className="wow bounce" >CSS</h2> */}
						{/* <p>스킬을 사용해 할 수 있는 것들 대강 묘사</p> */}
					</div>
					<div className="java" id="java">
						<p className="wow bounce">Java</p>
						{/* <h2 className="wow bounce" >CSS</h2> */}
						{/* <p>스킬을 사용해 할 수 있는 것들 대강 묘사</p> */}
					</div>
				
				</div>
			</div>
		</section>
	);
};

export default Skills;