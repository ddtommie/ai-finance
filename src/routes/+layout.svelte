<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    
    inject({ mode: dev ? 'development' : 'production' });
    
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
    injectSpeedInsights();
    
    import './styles.css';
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;900&display=swap">
</svelte:head>


<slot/>