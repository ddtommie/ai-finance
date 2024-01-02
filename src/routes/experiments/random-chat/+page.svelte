<script>
    import { useChat } from 'ai/svelte';
     
    const { input, handleSubmit, messages } = useChat();
    </script>
     
    <svelte:head>
        <title>Chat with GPT</title>
        <meta name="description" content="My first GPT chat app using SvelteKit" />
    </svelte:head>
     
    <section>
        <h1>Random chat with GPT</h1>
        <ul>
            {#each $messages as message}
                <li>{message.role}: {message.content}</li>
            {/each}
        </ul>
        <form on:submit={handleSubmit}>
            <input bind:value={$input} />
            <button type="submit">Send</button>
        </form>
    </section>
     
    <style>
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0.6;
    }
     
    h1 {
      width: 100%;
    }
    </style>