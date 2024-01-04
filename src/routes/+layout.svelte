<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
    inject({ mode: dev ? 'development' : 'production' });
    
    import './styles.css';
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;900;&display=swap">
</svelte:head>


<slot/>