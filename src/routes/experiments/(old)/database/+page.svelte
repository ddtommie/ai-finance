<script>
	export let data;
  
  import { invalidateAll } from '$app/navigation';
  import PocketBase from 'pocketbase';

  let record;

  const pb = new PocketBase('https://ai-finance.pockethost.io');

  async function createTransaction() {
    
    const data = {
      "iban": "test",
      "summary": "test",
      "category": "test"
    };

	record = await pb.collection('transactions').create(data);

  invalidateAll();
	console.log(record);
}
</script>

<button on:click={createTransaction}>Add test transaction</button>

{#await data.res}
  <span>Loading...</span>
{:then}
  <pre>{JSON.stringify(data.res, null, 2)}</pre>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

