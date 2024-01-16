<script lang="ts">
    import { useCompletion } from 'ai/svelte'
    import SvelteMarkdown from 'svelte-markdown'

    // default LLM
    let myModel = "gpt-3.5-turbo-1106";

    let complete = useCompletion({ api: '/api/categorize-v2', body: { model: myModel } });
	  let { input, handleSubmit, completion, isLoading } = complete;
	
    $: {
	     
      complete = useCompletion({ api: '/api/categorize-v2', body: { model: myModel }, initialInput: $input });
	     input = complete.input;
	     handleSubmit = complete.handleSubmit;
	     completion = complete.completion;
	     isLoading = complete.isLoading;
	   }

const strings = [
'Jumbo Scheveningen SGRAVENHAGE',
'gro-up Kinderopvang B.V. Omschrijving: Doorlopende incasso Valutadatum: 28-11-2023		gro-up Kinderopvang B.V.',
'VGZ ZORGVERZEKERAAR NV BETREFT BEWUZT Omschrijving: PREMIE dec. 2023.',
'DELA Natura- en levensve Omschrijving: cooperatie DELA premie voor DELA LeefdoorPlan polis',
'Stager ticketing : 24-11-2023',
'SIMYO Doorlopende incasso Valutadatum: 24-11-2023',
'Oxfam Novib Omschrijving: ,Periode 1/12/2023 1/3/2024,Bedankt voor uw bijdrage',
'Online bankieren	Naar Oranje spaarrekening Z16452116 fiets geld terug',
'Verzamelbetaling	Naam: Centrale Salarisadministratie',
'ZIGGO SERVICES BV ',
'Naam: Tikkie Omschrijving: Bond NL94ABNA0457754478',
'Betaalautomaat	CCV*ENTRADA S GRAVENHAGE NLD',
'Betaalautomaat	CCV*INDIA GLORY S GRAVENHAGE NLD',
'Online bankieren	Naam: ING Bank NV Betaalverzoek Omschrijving: Betaling van Hr S Wever',
'Betaalautomaat	ALBERT HEIJN 1595 SGRAVENHAGE',
'Online bankieren	Naam: ING Bank NV Betaalverzoek Omschrijving: Betaling van Hr NI Louwes ',
'BELASTINGDIENST VOORSCHOT KINDEROPVANG 2023 (BERG ) MEER INFO OP WWW.TOESLAGEN.NL',
'Betaalautomaat	Zettle*Henk Patat B V RIJSWIJK',
'OXXIO NEDERLAND ',
'Shoku SGRAVENHAGE NLD',
'Naam: RVO.NL Uw kenmerk: Voorschot-11-2023-SEP2214291',
'Naam: Picnic Omschrijving: TX1314687450XT Refund Picnic',
'iDEAL	Naam: De Notenshop B.V. by Buckaroo',
'Betaalautomaat NLOVD6JKEBEXBXNJWA www.ovpay.nl',
'Betaalautomaat	Q PARK CENTRAAL NEW BA NLD',
'Betaalautomaat	CCV*INDIA GLORY S GRAVENHAGE NLD',
'Naam: TicketMaster Omschrijving:',
'iDEALNaam: Steampowered by GlobalCollect',
'Betaalautomaat	The Sting016 SGRAVENHAGE NLD'
];

function combineRandomStrings() {
  const indices = new Set();
  while(indices.size < 3) {
    indices.add(Math.floor(Math.random() * strings.length));
  }

  const selectedStrings = Array.from(indices as Set<number>).map(index => strings[index]);
  return selectedStrings.join('\n');
}

$input = combineRandomStrings();

import logo from '$lib/categorizing.jpg';

import { tick } from 'svelte';
/** @param {MouseEvent} event */
async function handleFocus(event: { target: HTMLInputElement; }) {
        await tick();
        if (event.target) {
          event.target.select();
        }
    }

</script>

<svelte:head>
  <title>Categorize transaction(s)</title> 
  <meta property="og:title" content="Categorize transaction(s)" />
  <meta property="og:description" content="Input some transactions and let OpenAI categorize them " />
  <meta property="og:url" content="https://ai.ontwerpkracht.nl/experiments/categorize-with-options" />
  <meta property="og:image" content="{logo}" />
  <meta property="og:image:width" content="1000" />
	<meta property="og:image:height" content="1000" />
	<meta property="og:image:type" content="image/jpeg" />
  <meta property="og:type" content="article" />
</svelte:head>

<form on:submit={handleSubmit}>

<!-- main wrapper -->
<div class="flex flex-col h-dvh bg-teal-50 md:p-16">

  <!-- gradient bovenkant -->
  <div class="flex flex-grow flex-col max-h-[700px] p-4 rounded-bl-[32px] rounded-br-[32px] md:mx-36 md:rounded-[32px]" style="background: linear-gradient(170deg, #535763 40.84%, #3DE9C0 59.52%, #FFF 67.83%, #3DE9C0 76.13%, #4B515F 92.74%)">
  
    <a href="/" class="flex gap-4 mb-4 group">
      <div class="flex-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 text-gray-200 group-hover:translate-x-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </div>  
      <div class="flex-1 text-gray-200 text-lg">Show all experiments</div>
    </a>

    <h1 class="flex text-5xl font-black text-teal-300 mb-6">Categorize transactions</h1>
  
    <label class="flex px-4 py-3 bg-neutral-200 rounded-tl-[32px] rounded-tr-[32px] text-sm font-medium" for="prompt">Paste or type your own transactions:</label>
    <div class="flex px-4 pb-4 bg-neutral-200">
      <textarea class="flex w-full bg-neutral-200 text-xs selection:bg-teal-300 caret-teal-300 font-mono whitespace-pre overflow-hidden focus:overflow-x-scroll" id="prompt" bind:value={$input} on:focus={handleFocus} rows="3" />
    </div>
    
    <!-- output container with select at the bottom -->
    <div class="flex-grow px-4 max-h-80 overflow-y-auto bg-neutral-200 text-sm font-medium">
      
        <SvelteMarkdown source={$completion} />
       
    </div>
  
    <div class="flex flex-shrink px-4 pb-4 w-full bg-neutral-200 rounded-bl-[32px] rounded-br-[32px]">
      <label class="hidden" for="model">GPT model</label>

      <select class="flex flex-shrink p-4 w-full bg-[#A1DDFF] border-r-8 pr-8 border-transparent rounded-[32px]" id="model" bind:value={myModel} autocomplete="off">
        <!-- <option value="gpt-4-1106-preview">GPT-4-1106-preview - Faster, cheapter & better (1 ct / 1k tokens)</option>
        <option value="gpt-4">GPT-4 - Slow but good & expensive (3 ct / 1k tokens))</option>
        <option value="gpt-3.5-turbo-1106">GPT-3.5-Turbo-1106 - Very cheap, mucho less good (0,1 ct / 1k tokens)</option> -->
        <option value="gpt-4-1106-preview">GPT-4-1106-preview</option>
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-3.5-turbo-1106">GPT-3.5-Turbo-1106</option>
      </select>
    </div>
    <!-- einde output container -->

  
  </div>
  <!-- einde gradient bovenkant -->

  <!-- buttons onderkant -->
  <div class="h-56">
    <div class="flex flex-col mt-10 items-center">
      <button class="mb-0 px-8 py-4 text-3xl font-medium bg-teal-300 rounded-2xl transition-transform duration-[2000ms] ease-out active:translate-y-3 active:duration-75" disabled='{$isLoading}' type="submit">{#if ($isLoading)}Wait! I'm working 😅{:else}Categorize them! 😎{/if}</button>
      <div class="w-48 h-4 bg-slate-600 rounded-bl-2xl rounded-br-2xl"></div>
      <button class="m-6 px-6 py-2 bg-zinc-200 font-bold text-neutral-500 rounded-xl transition-transform ease-out active:translate-y-1 active:duration-75" type="button" on:click={() => $input = combineRandomStrings()}>Gimme 3 new ones! 🔁</button>
    </div>
    
    
  </div>
  <!-- einde buttons onderkant -->

</div>
</form>