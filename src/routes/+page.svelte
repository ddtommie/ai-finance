<svelte:head>
  <title>Hello welcome to my AI playground!</title> 
</svelte:head>

<h1>Hello welcome to my AI playground!</h1>

<table>
    <tr>
        <th>Date</th>
        <th>Experiment</th>
        <th>Stuff done</th>
    </tr>
    <tr>
        <td>24-dec</td>
        <td><a href="/">Working deployment on Vercel 🥳</a></td>
        <td><ul>
            <li>Got <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">SvelteKit</a> up and running using <a href="https://stackblitz.com/">StackBlitz</a></li>
            <li>Made a <a href="https://github.com/ddtommie/ai-finance/tree/main">github repo</a> out of it</li>
            <li>Got it running locally in vscode</li>
            <li>Connected the domain and deployed the site to Vercel</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>27-dec</td>
        <td><a href="experiments/random-chat">OpenAI API integration: Chat 💬</a></td>
        <td><ul>
            <li>Start a random chat conversation</li>
            <li>Used the <a href="https://sdk.vercel.ai/docs">Vercel AI SDK</a> to get up and running</li>
        </ul>
    </td>
    </tr>
    <tr>
        <td>3-jan</td>
        <td><a href="experiments/categorize-transaction">Categorize transactions</a></td>

        <td><ul>
            <li>Got a working text completion prompt.</li>
            <li>It generates a markdown table which gets streamed to the interface</li>
        </ul>
    </td>
    </tr>
    <tr>
        <td>5-jan</td>
        <td><a href="experiments/database">Write/read from a database</a></td>

        <td><ul>
            <li>Got Pocketbase running on pockethost.io</li>
            <li>List all transactions</li>
            <li>Create new transaction and update data</li>
        </ul>
    </td>
    </tr>
</table>