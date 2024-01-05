<script>
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('https://ai-finance.pockethost.io');

    const records = pb.collection('transactions').getFullList({ sort: '-created',  });
    

</script>

hello

{#await records}
  <span>Loading...</span>
{:then data}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}