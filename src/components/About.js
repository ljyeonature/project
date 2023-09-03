import React from 'react';
import '../style/about.css'

const About = () => {
	return (
		<div id="about" className="height-fix">
			<div id="about"  >
				<h2>ABOUT</h2>
				<ul className="about">
					<li className="about__photo">
						<img src="profile.jpg" alt="프로필 사진" />
					</li>
					<li className="about__introduction1">
						<div className="box1">
							<span></span><span></span><span></span><span></span>
							<h3 className="category">PROFILE</h3>
							<p>이름 : 이지연</p>
							<p>생년월일 : 2000.01.31(22세)</p>
							<p>주소 : 경기도 수원시</p>
							<p>학력 : 건양대 재학</p>
						</div>
					</li>
					<li className="about__introduction2">
						<div className="box1">
							<span></span><span></span><span></span><span></span>
							<h3 className="category">Introduction</h3>
							<p>자격증</p>
							<p>
								좌우명 : 포기하지 말자<br/>
								(Do Not Give Up!)
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;