import './css/style.css';
import Resume from './docs/rozsheenadalope-resume.pdf';
import Contact from './Contact.js';
import { useState } from 'react';
function App() {
	const [isVisible, setIsVisible] = useState(true);
	return (
		<main id='home'>
			{/* <!--Header Starts--> */}
			<nav className='navheader'>
				<div className='navheader-container home'>
					<div className='navheader-left'>
						<ul className='navheader-menu'>
							<li className='navheader-menu-style about'>
								<a
									href='#about'
									className='navheader-menu-style-link'
									onClick={() => setIsVisible(true)}
								>
									About
								</a>
								<a
									href='#about'
									className='icon'
									onClick={() => setIsVisible(true)}
								>
									<img
										src='./img/about.png'
										alt='about'
										width='15px'
										height='15px'
									/>
								</a>
							</li>
							<li className='navheader-menu-style skills'>
								<a
									href='#skills'
									className='navheader-menu-style-link'
									onClick={() => setIsVisible(true)}
								>
									Skills
								</a>
								<a
									href='#skills'
									className='icon'
									onClick={() => setIsVisible(true)}
								>
									<img
										src='./img/skills.png'
										alt='skills'
										width='15px'
										height='15px'
									/>
								</a>
							</li>
							<li className='navheader-menu-style projects'>
								<a
									href='#projects'
									className='navheader-menu-style-link'
									onClick={() => setIsVisible(true)}
								>
									Projects
								</a>
								<a
									href='#projects'
									className='icon'
									onClick={() => setIsVisible(true)}
								>
									<img
										src='./img/projects.png'
										alt='projects'
										width='15px'
										height='15px'
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className='navheader-mid'>
						<a
							href='#home'
							className='navheader-logo d-inline-block'
							onClick={() => setIsVisible(true)}
						>
							<img
								src='./img/webdevlogo.png'
								alt='Roz Dalope Logo'
								className='image'
								width='100px'
							/>
						</a>
					</div>
					<div className='navheader-right'>
						<div className='navheader-button'>
							<button
								onClick={() => setIsVisible(false)}
								type='button'
								value='Contact'
								className='contact-button c-button contact'
							>
								Contact
							</button>
							<a
								href={Contact}
								className='icon'
								onClick={() => setIsVisible(false)}
							>
								<img
									src='./img/contact.png'
									alt='contact'
									width='15px'
									height='15px'
								/>
							</a>
						</div>
					</div>
				</div>
			</nav>
			{/* <!--End of Header--> */}
			{/* <!--Start of body--> */}
			{isVisible ? (
				<div>
					<div className='section intro'>
						<div className='intro-container'>
							<div className='intro-subtitle'>
								<h2 className='intro-title'>designer</h2>
								<p className='intro-description'>Graphic Designer</p>
							</div>
							<div className='intro-image'>
								<img
									src='./img/rozdalope.png'
									alt='Roz Dalope Photo'
									className='image-2'
									width='550px'
								/>
								<h1 className='intro-title'>Roz Dalope</h1>
							</div>
							<div className='intro-subtitle'>
								<h2 className='intro-title'>
									<coder />
								</h2>
								<p className='intro-description'>Full stack web developer</p>
							</div>
						</div>
					</div>
					{/* <!-- About Section--> */}
					<div
						className='section about-section'
						id='about'
					>
						<div className='about overhead'>About</div>
						<h2 className='section-header'>Innovation continues...</h2>
						<p className='about-description'>
							A website is a powerful tool in marketing your products and makes
							a good appeal to your business. One of the great ways to make your
							business more reliable and showcase what your company is all about
							is by building a website. Here, I do not just build your website,
							but I also develop your business. I will use your marketing
							strategic plan to create a better platform for you.
							<br />
							&nbsp;
							<br />
							I can make a personalized platform for your website users through
							innovation and knowing your customer personas. A customized
							platform can attract more users, audiences, or customers that can
							turn into leads. In the competitive world of the business
							industry, website appearance and user experience are crucial
							because they can make or break a deal. With my skills, I can help
							your business grow by developing a website personalized for your
							business.
							<br />
							&nbsp; <br />
							&nbsp;
						</p>
						<div className='download-resume-button'>
							<a
								href={Resume}
								type='button'
								value='Resume'
								className='resume-button contact'
								target='_blank'
								rel='noreferrer'
							>
								Resume
							</a>
						</div>
					</div>
					{/* <!--End of About me Section --> */}
					{/* <!--Skills--> */}
					<div
						className='section skills-section'
						id='skills'
					>
						<div className='skills overhead'>skills</div>
						<h2 className='section-header'>Ways I can help</h2>
						<div className='skillset'>
							<div className='web-development skill'>
								<div className='mobile-skill'>
									<img
										src='img/webdev.png'
										alt='web development'
										className='skills-image'
										width='150px'
									/>
								</div>
								<h3 className='skillset-header'>Full Stack Web development</h3>
								<p className='skillset-description'>
									Build, create, and maintain a website for your business. The
									process involves web design, web programming, and database
									management.
								</p>
							</div>
							<div className='graphic-design skill'>
								<div className='mobile-skill'>
									<img
										src='img/graphicdesign.png'
										alt='graphic design'
										className='skills-image'
										width='150px'
									/>
								</div>
								<h3 className='skillset-header'>Graphic Design</h3>
								<p className='skillset-description'>
									Create a visual content to relay messages. Typography and
									images are used to display interactive designs to optimize the
									user experience.
								</p>
							</div>
							<div className='photography skill'>
								<div className='mobile-skill'>
									<img
										src='img/photography.png'
										alt='photography'
										className='skills-image'
										width='150px'
									/>
								</div>
								<h3 className='skillset-header'>Photography</h3>
								<p className='skillset-description'>
									Capture and produce high quality photographs which includes
									creative and technical skills necessary to operate camera
									equipment and edit photos after taking them.
								</p>
							</div>
						</div>
					</div>
					{/* <!--End of Skills Section--> */}
					{/* <!--projects Section--> */}
					<div
						className='section projects-section'
						id='projects'
					>
						<div className='projects overhead'>PROJECTS</div>
						<h2 className='section-header projects-section-header'>
							Building your online presence
						</h2>
						<p className='projects-description'>
							As your web developer, my goal is to help you market your products
							and services through your website. Its contents and functionality
							matters as it plays a big role in your business. We do not just
							build your website, but it's your business we are building. We
							will incorporate the trends tailor-made for your business needs.
						</p>
						<div className='projects-description projects-sample'>
							<div className='sample sample-1'>
								<div>
									<img
										src='img/webportfolio.jpg'
										alt='projects Sample 1'
										width='300px'
										className='p-sample'
									/>
								</div>
								<h4 className='projects-name'>Web Portfolio</h4>
								<div className='project-buttons'>
									<a
										href='https://rozdalope-github-io.vercel.app/'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										First Portfolio
									</a>
									<a
										href='https://github.com/rozdalope/rozdalope.github.io'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										Source Code
									</a>
								</div>

								<div>
									<p className='projects-sample-description'>
										Technologies used:
										<br />
										HTML + CSS
									</p>
								</div>
							</div>
							<div className='sample sample-2'>
								<div>
									<img
										src='img/Tetris.jpg'
										alt='projects Sample 2'
										width='300px'
										className='p-sample'
									/>
								</div>
								<h4 className='projects-name'>Tetris</h4>
								<div className='project-buttons'>
									<a
										href='https://tetris-jet.vercel.app/'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										Click to Play!
									</a>
									<a
										href='https://github.com/rozdalope/tetris/'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										Source Code
									</a>
								</div>
								<p className='projects-sample-description'>
									Technologies used:
									<br />
									HTML + CSS + Vanilla JS
								</p>
							</div>
							<div className='sample sample-3'>
								<div>
									<img
										src='img/photawe.jpg'
										alt='projects Sample 3'
										className='p-sample'
										width='300px'
									/>
								</div>
								<h4 className='projects-name'>PhotoAwe</h4>
								<div className='project-buttons'>
									<a
										href='https://phot-awe.vercel.app/'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										Test Photo E-com
									</a>
									<a
										href='https://github.com/rozdalope/PhotAwe'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										Source Code
									</a>
								</div>
								<p className='projects-sample-description'>
									Technologies used:
									<br />
									HTML + CSS + ReactJS
								</p>
							</div>
							<div className='sample sample-4'>
								<div>
									<img
										src='img/drunk.jpg'
										alt='projects Sample 4'
										width='300px'
										className='p-sample'
									/>
								</div>
								<h4 className='projects-name'>Drive d' Drunk</h4>
								<div className='project-buttons'>
									<a
										href='https://drive-d-drunk.vercel.app/'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										Test the app
									</a>
									<a
										href='https://github.com/rozdalope/DriveDDrunk'
										target='_blank'
										rel='noreferrer'
										className='project-button'
									>
										Source Code
									</a>
								</div>
								<p className='projects-sample-description'>
									Technologies used:
									<br />
									MERN Stack
								</p>
							</div>
						</div>
					</div>
					{/* <!--End of projects Section--> */}
				</div>
			) : (
				<Contact />
			)}
			{/* <!--Footer Section--> */}
			<footer>
				<div>
					<div className='connect-footer'>connect with me</div>
					<nav className='connect-button'>
						<a
							href='mailto:rosheng28.rd@gmail.com'
							className='connect-alt-text'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src='img/email.png'
								alt='Roz Dalope Email'
								width='30px'
								height='auto'
							/>
						</a>
						<a
							href='https://github.com/rozdalope'
							className='connect-alt-text'
							target='_blank'
							rel='noreferrer'
						>
							<img
								src='img/github.png'
								alt='Roz Dalope Github'
								width='30px'
								height='30px'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/rozdlp/'
							className='connect-alt-text'
							target='_blank'
							rel='noreferrer'
						>
							<img
								src='img/linkedin.png'
								alt='Roz Dalope LinkedIn'
								width='30px'
								height='auto'
							/>
						</a>
					</nav>
					<div className='connect-copyright'>
						&copy;2022 <light>rozdalope</light>
					</div>
				</div>
			</footer>
		</main>
	);
}

export default App;
