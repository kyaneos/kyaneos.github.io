<script>
	import { onMount } from 'svelte';

	let publications = $state([]);
	let loading = $state(true);

	onMount(async () => {
		// Google Sheets CSV URL from your spreadsheet
		const sheetId = '1Kd-qv6oxFzKKzvim2TdFYXslB398zdJ6tKX1Dur064M';
		const gid = '0';
		const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

		try {
			const response = await fetch(url);
			const text = await response.text();

			// Parse CSV
			const lines = text.split('\n');
			const headers = lines[0].split(',').map(h => h.trim());

			publications = lines.slice(1)
				.filter(line => line.trim())
				.map(line => {
					const values = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g) || [];
					const pub = {};
					headers.forEach((header, index) => {
						pub[header] = values[index]?.replace(/^"|"$/g, '').trim() || '';
					});
					return pub;
				})
				.filter(pub => pub.Title);
		} catch (error) {
			console.error('Error loading publications:', error);
		} finally {
			loading = false;
		}
	});

	function formatAuthors(authors) {
		if (!authors) return '';
		return authors.replace('Moran, J.', '<strong>Moran, J.</strong>');
	}
</script>

<svelte:head>
	<title>Research - Justin Moran</title>
</svelte:head>

<div class="container">
	<h1>Research</h1>

	<section class="section">
		<p>
			My research applies cognitive, educational, and social psychology to improve learning experiences
			and technologies. I focus on blending user experience, web design, and video games with experimental
			methods and education technology to better understand cognition and learning across different mediums.
		</p>
	</section>

	<section class="section">
		<h2>Publications</h2>

		{#if loading}
			<p>Loading publications...</p>
		{:else if publications.length > 0}
			{#each publications as pub}
				<div class="publication">
					<div class="publication-title">{pub.Title}</div>
					<div class="publication-authors">{@html formatAuthors(pub.Authors)}</div>
					<div class="publication-venue">
						{pub.Journal || pub.Conference}
						{#if pub.Year} ({pub.Year}){/if}
						{#if pub.Status} • {pub.Status}{/if}
					</div>
					{#if pub.DOI || pub.PDF || pub.Code}
						<div class="publication-links">
							{#if pub.DOI}
								<a href={pub.DOI.startsWith('http') ? pub.DOI : `https://doi.org/${pub.DOI}`} target="_blank" rel="noopener noreferrer">Paper</a>
							{/if}
							{#if pub.PDF}
								<a href={pub.PDF} target="_blank" rel="noopener noreferrer">PDF</a>
							{/if}
							{#if pub.Code}
								<a href={pub.Code} target="_blank" rel="noopener noreferrer">Code</a>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		{:else}
			<div class="entry">
				<div class="entry-title">Moran, J., Jolly, E. (in prep). Transmission and Transformation of Social Reputations in Serial Reproduction.</div>
				<div class="entry-subtitle">Manuscript in preparation</div>
				<div class="publication-links">
					<a href="https://github.com/kyaneos/telephone" target="_blank" rel="noopener noreferrer">Experiment Repo</a>
				</div>
			</div>
		{/if}
	</section>

	<section class="section">
		<h2>Posters/Poster Contributions</h2>

		<div class="publication">
			<div class="publication-title">Breaking the IOED: Effects of Generating Explanations on Metacognitive Monitoring and Control</div>
			<div class="publication-authors">Inez Zung, Jacquelyn Y. Tsui, Emma H. Geller, Caren M. Walker, Steven C. Pan</div>
			<div class="publication-venue">Psychonomic Society Annual Meeting 2024</div>
			<div class="publication-links">
				<a href="/poster-pdf/1136_BreakingIOED_Psynom2024.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
			</div>
		</div>

		<div class="publication">
			<div class="publication-title">Are You Sure About That? The Impact of Semantic Relatedness on Learning Through Testing, JOLs, and Passive Restudy</div>
			<div class="publication-authors">Alejandro Carranza, Timothy C. Rickard, Emma H. Geller </div>
			<div class="publication-venue">CogSci 2025</div>
			<div class="publication-links">
				<a href="/poster-pdf/alejandroJOL.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
			</div>
		</div>

		<div class="publication">
			<div class="publication-title">Using Gestures to Signal a Causal Lesson Structure</div>
			<div class="publication-authors">Alan Lopez, Logan Fiorella, Celeste Pilegard</div>
			<div class="publication-venue">Honors Thesis Poster</div>
			<div class="publication-links">
				<a href="/poster-pdf/AlanHonorsGesturesPoster.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
			</div>
		</div>

		<div class="publication">
			<div class="publication-title">Will this be on the test? - Investigating Signaling to Different Knowledge</div>
			<div class="publication-authors">Hana Nguyen, Inez Zung, Celeste Pilegard</div>
			<div class="publication-venue">Honors Thesis Poster</div>
			<div class="publication-links">
				<a href="/poster-pdf/Willthisbeonthetest-InvestigatingSignalingtoDifferentKnowledge.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Current Research</h2>
		<div class="entry">
			<div class="entry-title">Research Scientist</div>
			<div class="entry-subtitle"><a href="https://sciminds.ucsd.edu/" target="_blank" rel="noopener noreferrer">Sciminds Research Studio</a> @ UCSD (2025-Present)</div>
			<div class="entry-description">
				Leading projects developing video games and web applications as platforms for social cognition
				research, focusing on user experience and experimental methods integration.
				<br>
				PI: Dr. Eshin Jolly, PhD.
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
	</section>

	<section class="section">
		<h2>Previous Research</h2>
		<div class="entry">
			<div class="entry-title">Research Assistant</div>
			<div class="entry-subtitle"><a href="https://pilegard.ucsd.edu/psilab" target="_blank" rel="noopener noreferrer">PSI Lab</a> @ UCSD (2024)</div>
			<div class="entry-description">
				Research on how body language and gestures indicating cause and effect impact retention
				of causal science lessons.
				<br>
				PI: Dr. Celeste Pilegard, PhD.
				<br>
				Project Lead: Alan Lopez
			</div>
		</div>
		<div class="entry">
			<div class="entry-title">Content & Web Development</div>
			<div class="entry-subtitle"><a href="https://lchcautobio.ucsd.edu/justin-moran/" target="_blank" rel="noopener noreferrer">Laboratory of Comparative Human Cognition</a> @ UCSD (2023-2024)</div>
			<div class="entry-description">
				Developed, maintained, and wrote content for laboratory website. Engaged in literature reviews,
				helped organize information for cultural psychology book, attended seminars with leading professionals,
				and created graphics. Director/Advisor: Dr. Michael Cole, PhD.
				<a href="https://lchcautobio.ucsd.edu/justin-moran/" target="_blank" rel="noopener noreferrer">Profile</a>
			</div>
		</div>
		<div class="entry">
			<div class="entry-title">Cross-Cultural Developmental Psychology</div>
			<div class="entry-subtitle"><a href="https://sites.google.com/biola.edu/culture-and-development-lab/home" target="_blank" rel="noopener noreferrer">Cultural and Social Development Lab</a> @ Biola University (2022)</div>
			<div class="entry-description">
				Research on cross-cultural developmental psychology, adolescence and emerging adulthood,
				identity development, and psychology and religion.
				<br>
				PI: Dr. Oscar Baldelomar, PhD.
			</div>
		</div>
	</section>
</div>