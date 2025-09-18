<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let { children } = $props();

	const navigation = [
		{ name: 'Home', href: `${base}/` },
		{ name: 'Research', href: `${base}/research/` },
		{ name: 'Projects', href: `${base}/projects/` },
		{ name: 'Blog', href: `${base}/blog/` },
		{ name: 'CV', href: 'https://kyaneos.github.io/cv/', external: true },
		"|",
		{ name: 'Music', href: `${base}/music/` }
	];

	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>Justin Moran</title>
	<meta name="description" content="Justin Moran - Cognitive Science PhD Student at UC San Diego" />
	<link rel="icon" href="/favicon.ico" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</svelte:head>

<nav>
	<div class="nav-container">
		<a href={`${base}/`} class="nav-name">Justin Moran</a>
		<div class="nav-links">
			{#each navigation as item}
				{#if item === "|"}
					<span class="nav-separator">|</span>
				{:else if item.external}
					<a href={item.href} target="_blank" rel="noopener noreferrer">
						{#if item.name === 'CV'}
							<i class="fas fa-file-pdf"></i> {item.name}
						{:else}
							{item.name}
						{/if}
					</a>
				{:else}
					<a href={item.href} class:active={$page.url.pathname === item.href}>
						{item.name}
					</a>
				{/if}
			{/each}
		</div>
	</div>
</nav>

<main>
	{@render children?.()}
</main>

<footer>
	<div class="footer-content">
		© {currentYear} Justin Moran
	</div>
</footer>

<style>
	.nav-name {
		font-family: 'Average', Georgia, serif;
		font-size: 1.25rem;
		color: var(--main-color);
		text-decoration: none;
	}

	.nav-name:hover {
		text-decoration: none;
		color: var(--accent-color);
	}

	.nav-links a.active {
		color: var(--accent-color);
		font-weight: 600;
	}

	main {
		min-height: calc(100vh - 100px);
	}

	.nav-separator {
		color: #999;
		margin: 0 1rem;
	}

	.nav-links i {
		margin-right: 0.25rem;
	}

	footer {
		margin-top: 3rem;
		padding: 1.5rem 0;
		border-top: 1px solid #eee;
	}

	.footer-content {
		text-align: center;
		color: #666;
		font-size: 0.9rem;
	}
</style>