import React from 'react';
import '../style/footer.css'

const Footer = () => {
	return (
		<footer id="contact" className="height.fix">
		  <h2 id="contact">CONTACT</h2>
		  <div className="contacts">
			<div className="contacts__email">
			  <h3>MAIL</h3>
			  <p>sam5834@naver.com</p>
			</div>
			<div className="contacts__phone">
			  <h3>PHONE</h3>
			  <p>010-1234-5678</p>
			</div>
			
			<div className="contacts__blog">
			  <h3>BLOG</h3>
			  <p><a id="blog" href="https://naturepublic.tistory.com/">블로그로 이동!</a></p>
			</div>
		  </div>
		  <p style={{textAlign:'center'}}>Copyright &copy; jiyeon. All Right Reserved.</p>
	  	</footer>
	  )
};

export default Footer;