import PocketBase from 'pocketbase';
const pb = new PocketBase('https://ai-finance.pockethost.io');

// added fetch to the options, as suggested by the svelte warning so it can be used ssr and csr
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await pb.collection('transactions').getFullList({ sort: '-created',
	fetch: async (url, config) => {
		const response = await fetch(url, config);
		return response;
	},  });

	return { res };
}