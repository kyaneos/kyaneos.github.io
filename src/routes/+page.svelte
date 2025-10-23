<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Justin Moran</title>
</svelte:head>

<div class="container">
	<header class="header-section">
		<h1>Justin Moran</h1>
		<div class="subtitle">Research Scientist</div>

		<div class="contact-info">
			<a href="mailto:jmoran@ucsd.edu">
				<i class="fas fa-envelope"></i> jmoran@ucsd.edu
			</a>
			<a href="https://github.com/kyaneos" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-github"></i> GitHub
			</a>
			<a href="https://www.linkedin.com/in/thisisjustinmoran/" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-linkedin"></i> LinkedIn
			</a>
		</div>
	</header>

	<section class="section">
		<h2>About</h2>
		<p>
			Researcher passionate about building computational models in cognitive, educational, and social psychology
			 to understand and improve learning experiences and technologies. Currently a Research Scientist in Dr. Eshin Jolly's
			<a href="https://sciminds.ucsd.edu/" target="_blank" rel="noopener noreferrer">Sciminds Research Studio</a> at UCSD, exploring ways to blend 
			user experience, web design, video games, and AI with experimental methods, learning technology, and computational modeling, and a 
			Research Assistant in Dr. Emma Geller’s <a href="https://www.lime-lab-ucsd.com/" target="_blank" rel="noopener noreferrer">LIME Lab</a>, investigating
			cognition and learning across different mediums.
		</p>
	</section>

	<section class="section">
		<h2>Research Interests</h2>
		<ul class="bullet-list">
			<li>Cognitive Psychology & Education Technology</li>
			<li>Social Cognition & User Experience</li>
			<li>Learning Sciences & Experimental Methods</li>
			<li>Web Development for Research Applications</li>
			<li>Video Games as Research Platforms</li>
		</ul>
	</section>

	<section class="section">
		<h2>Current Positions</h2>
		<div class="entry">
			<div class="entry-title">Research Scientist</div>
			<div class="entry-subtitle"><a href="https://sciminds.ucsd.edu/" target="_blank" rel="noopener noreferrer">Sciminds Research Studio</a> @ UCSD (2025-Present)</div>
			<div class="entry-description">
				Lead projects to build computational models to understand and predict learning mechanisms, and to develop online platforms 
				for better and more robust research. Create and utilize game platforms as simulated environments for large multiplayer-scale 
				studies on cognition, behavior, learning tools, social dynamics, and collaborative learning. Develop general tools, frameworks, 
				and templates to make the research process technically easier and more accessible.
				<br>
				PI: Eshin Jolly, PhD.
			</div>
		</div>
		<div class="entry">
			<div class="entry-title">Research Assistant</div>
			<div class="entry-subtitle"><a href="https://www.lime-lab-ucsd.com/" target="_blank" rel="noopener noreferrer">LIME Lab</a> @ UCSD (2024-Present)</div>
			<div class="entry-description">
				Working with graduate students and honors students on multiple research projects investigating
				preconceptions and learning, judgements of learning during restudy vs. retrieval practice,
				dual theory of processing in simulated environments, and subsumptive learning within STEM contexts.
				<br>
				PI: Dr. Emma Geller, PhD.
				<br>
				Project Leads: Inez Zung, Alejandro Carranza, Hana Nguyen
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Education</h2>
		<div class="entry">
			<div class="entry-title">Bachelor of Arts in Psychology</div>
			<div class="entry-subtitle">University of California San Diego (2020-2024)</div>
			<div class="entry-description">GPA: 3.77, Provost Honors</div>
		</div>
	</section>

	<section class="section">
		<h2>Creative Work</h2>
		<p>
			Beyond research, I create and play music of many different sorts, most recently and prominently for my jazz project <strong>Reflections</strong>,
			a reflection of my relationship with music and the people who I do and experience music with.
		</p>
	</section>

	<section class="section">
		<h2>Recent News</h2>
		<ul class="news-list">
			<li><strong>2025 June:</strong> Started official Research Scientist position at <a href="https://sciminds.ucsd.edu/" target="_blank" rel="noopener noreferrer">Sciminds Research Studio</a></li>
			<li><strong>2025 April:</strong> Began working with Eshin</li>
			<li><strong>2024 June:</strong> Joined <a href="https://www.lime-lab-ucsd.com/" target="_blank" rel="noopener noreferrer">LIME Lab</a> as Research Assistant</li>
			<li><strong>2024 June:</strong> Graduated from UCSD with B.A. in Psychology</li>
			<li><strong>2024 March:</strong> Joined <a href="https://pilegard.ucsd.edu/psilab" target="_blank" rel="noopener noreferrer">PSI Lab</a> as Research Assistant</li>
			<li><strong>2023 January:</strong> Moved back to San Diego and joined <a href="https://lchcautobio.ucsd.edu/justin-moran/" target="_blank" rel="noopener noreferrer">Laboratory of Comparative Human Cognition</a> as Content and Web Developer</li>
			<li><strong>2022 May:</strong> Started studying with Dr. Oscar Baldelomar in the <a href="https://sites.google.com/biola.edu/culture-and-development-lab/home" target="_blank" rel="noopener noreferrer">Cultural and Social Development Lab</a> in LA</li>


		</ul>
	</section>
</div>

<style>
	.header-section {
		text-align: center;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border-color);
	}

	.subtitle {
		font-size: 1.1rem;
		color: var(--text-color);
		margin-bottom: 0.25rem;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.contact-info i {
		margin-right: 0.5rem;
		width: 16px;
		text-align: center;
	}

	.news-list {
		list-style: none;
		padding-left: 0;
	}

	.news-list li {
		margin-bottom: 0.75rem;
		line-height: 1.6;
	}

	.news-list strong {
		color: var(--main-color);
		font-weight: 600;
	}
</style>