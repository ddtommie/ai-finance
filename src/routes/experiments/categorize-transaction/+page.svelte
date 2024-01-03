<script>
    import { useCompletion } from 'ai/svelte'
    import SvelteMarkdown from 'svelte-markdown'
    const { input, handleSubmit, completion } = useCompletion({
    api: '/api/categorize-v1',
  });

const strings = [
'Betaalautomaat	Pasvolgnr: 904 26-11-2023 14:39 Transactie: B90381 Term: G1TT2X ING Mobiel Betalen Valutadatum: 27-11-2023		Jumbo Scheveningen SGRAVENHAGE',
'Incasso	Naam: gro-up Kinderopvang B.V. Omschrijving: 5259477 IBAN: NL17INGB0000936540 Kenmerk: 3286294 Machtiging ID: 2133307-0001 Incassant ID: NL39ZZZ411359200000 Doorlopende incasso Valutadatum: 28-11-2023		gro-up Kinderopvang B.V.',
'Incasso	Naam: VGZ ZORGVERZEKERAAR NV BETREFT BEWUZT Omschrijving: PREMIE dec. 2023. IBAN: NL87INGB0000717127 Kenmerk: 10303317054 Machtiging ID: 987802 Incassant ID: NL12ZZZ091567230000 Doorlopende incasso Valutadatum: 27-11-2023		VGZ ZORGVERZEKERAAR NV BETREFT BEWUZT',
'Incasso	Naam: DELA Natura- en levensve Omschrijving: cooperatie DELA premie voor DELA LeefdoorPlan polis 007259360 DEC. 2023 IBAN: NL78RABO0303577029 Kenmerk: DELA-202312R020034992-007259360 Machtiging ID: 007259360.1609 Incassant ID: NL75ZZZ170783930000 Doorlopende incasso Valutadatum: 27-11-2023		DELA Natura- en levensve'
,'IDEAL	Naam: Stager ticketing Omschrijving: DHS5NC838CZ89VB2SAZ7 0180332830627087 ORD-510-8999069-4315460-IDEAL-41 IBAN: NL04ADYB2017400157 Kenmerk: 24-11-2023 15:22 0180332830627087 Valutadatum: 24-11-2023		Stager ticketing',
'Incasso	Naam: SIMYO Omschrijving: Simyo:0644218486, FACTUURNUMMER:77597347 IBAN: NL83INGB0007811682 Kenmerk: 89DA26D6E099485DB0765EEEFC1AA15B Machtiging ID: 007-M124796701 Incassant ID: NL12ZZZ271247010002 Doorlopende incasso Valutadatum: 24-11-2023		SIMYO',
'Incasso	Naam: Oxfam Novib Omschrijving: ,Periode 1/12/2023 1/3/2024,Bedankt voor uw bijdrage IBAN: NL93RABO0170100200 Kenmerk: 911648961132965504972 Machtiging ID: 000000195024 Incassant ID: NL02ZZZ271084360000 Doorlopende incasso Valutadatum: 24-11-2023		Oxfam Novib',
'Online bankieren	Naar Oranje spaarrekening Z16452116 fiets geld terug Valutadatum: 23-11-2023		Oranje Spaarrekening',
'Verzamelbetaling	Naam: Centrale Salarisadministratie Omschrijving: BETALINGSPERIODE 11 IBAN: NL97INGB0000113898 Kenmerk: 20231116 03317 22012 9960271 011 1 Verzamel overschrijving salaris Valutadatum: 23-11-2023		Centrale Salarisadministratie',
'Incasso	Naam: ZIGGO SERVICES BV Omschrijving: Klant Nr XXXXXX558/XXXXXX919 November Factuur Nr 315276248430 zie ziggo.nl/mijnziggo IBAN: NL98INGB0000845745 Kenmerk: 919U000877647743 Machtiging ID: 001495555800126092016000000789 Incassant ID: NL30ZZZ333034790000 Doorlopende incasso Valutadatum: 22-11-2023		ZIGGO SERVICES BV',
'iDEAL	Naam: Tikkie Omschrijving: 000741741027 0030015555846456 Bond NL94ABNA0457754478 Tikkie IBAN: NL13ABNA0506417344 Kenmerk: 21-11-2023 14:15 0030015555846456 Valutadatum: 21-11-2023		Tikkie',
'Betaalautomaat	Pasvolgnr: 904 19-11-2023 14:32 Transactie: B00366 Term: CT843173 ING Mobiel Betalen Valutadatum: 21-11-2023		CCV*ENTRADA S GRAVENHAGE NLD',
'Betaalautomaat	Pasvolgnr: 904 20-11-2023 12:21 Transactie: B20369 Term: CT390860 ING Mobiel Betalen Valutadatum: 21-11-2023		CCV*INDIA GLORY S GRAVENHAGE NLD',
'Online bankieren	Naam: ING Bank NV Betaalverzoek Omschrijving: Betaling van Hr S Wever NL87INGB0008834960 Koen nu eindelijk echt weg? IBAN: NL10INGB0005300114 Kenmerk: 20-11-2023 10:49 0051100427342341 Valutadatum: 20-11-2023		ING Bank NV Betaalverzoek',
'Betaalautomaat	Pasvolgnr: 904 19-11-2023 16:13 Transactie: B90368 Term: 894DDS ING Mobiel Betalen Valutadatum: 20-11-2023		ALBERT HEIJN 1595 SGRAVENHAGE',
'Online bankieren	Naam: ING Bank NV Betaalverzoek Omschrijving: Betaling van Hr NI Louwes NL03INGB0008790688 Koen nu eindelijk echt weg? IBAN: NL10INGB0005300114 Kenmerk: 20-11-2023 07:48 0051100427168432 Valutadatum: 20-11-2023		ING Bank NV Betaalverzoek',
'Verzamelbetaling	Naam: BELASTINGDIENST Omschrijving: MAAND DEC. NR. 189039188T300001 VOORSCHOT KINDEROPVANG 2023 (BERG ) MEER INFO OP WWW.TOESLAGEN.NL IBAN: NL86INGB0002445588 Kenmerk: COAXX575538500202311151030141792865 Valutadatum: 20-11-2023		BELASTINGDIENST',
'Betaalautomaat	Pasvolgnr: 904 18-11-2023 11:46 Transactie: B40364 Term: --- ING Mobiel Betalen Valutadatum: 19-11-2023		Zettle*Henk Patat B V RIJSWIJK',
'Incasso	Naam: OXXIO NEDERLAND BV Omschrijving: Kenmerk 1000010258381422 Omschrijving Klantnummer 37963789-1 BTW 30.84 Periode 2023-11 Kranenburgweg 214 SGRAVENHAGE IBAN: NL56ABNA0606060111 Kenmerk: 1000010258381422 Machtiging ID: 3871709 Incassant ID: NL84ZZZ526983270000 Doorlopende incasso		OXXIO NEDERLAND BV',
'Betaalautomaat	Pasvolgnr: 904 14-11-2023 11:49 Transactie: B50361 Term: P7J6L7 ING Mobiel Betalen Valutadatum: 14-11-2023		Shoku SGRAVENHAGE NLD',
'Verzamelbetaling	Naam: RVO.NL Omschrijving: RVO.NL : Uw kenmerk: Voorschot-11-2023-SEP2214291 IBAN: NL29INGB0705001318 Kenmerk: SEP2214291/43H9R Valutadatum: 14-11-2023		RVO.NL',
'Overschrijving	Naam: Picnic Omschrijving: TX1314687450XT Refund Picnic 12-11-2023 IBAN: NL04ADYB2017400157 Kenmerk: TX1314687450XT Valutadatum: 13-11-2023		Picnic',
'iDEAL	Naam: De Notenshop B.V. by Buckaroo Omschrijving: 101558195 1030000810669721 De Notenshop - Buckaroo IBAN: NL56DEUT0265186420 Kenmerk: 12-11-2023 13:12 1030000810669721 Valutadatum: 12-11-2023		De Notenshop B.V. by Buckaroo',
'Betaalautomaat	Pasvolgnr: 904 09-11-2023 23:31 Transactie: B10358 Term: PT30AE70 ING Mobiel Betalen Valutadatum: 11-11-2023		NLOVD6JKEBEXBXNJWA www.ovpay.nl',
'Betaalautomaat	Pasvolgnr: 904 08-11-2023 15:55 Transactie: B10352 Term: CT397807 ING Mobiel Betalen Valutadatum: 09-11-2023		Q PARK CENTRAAL NEW BA NLD',
'Betaalautomaat	Pasvolgnr: 904 07-11-2023 12:20 Transactie: B60349 Term: CT390860 ING Mobiel Betalen Valutadatum: 08-11-2023		CCV*INDIA GLORY S GRAVENHAGE NLD',
'iDEAL	Naam: TicketMaster Omschrijving: WRQCG56ZNXVHBFG2JFZX 0180331043048094 02125376JB213628734106 IBAN: NL04ADYB2017400157 Kenmerk: 06-11-2023 21:43 0180331043048094 Valutadatum: 06-11-2023		TicketMaster',
'iDEAL	Naam: Steampowered by GlobalCollect Omschrijving: 9791003BTHMA 0020009031549624 Steam Purchase IBAN: NL14RABO0155503219 Kenmerk: 02-11-2023 20:11 0020009031549624 Valutadatum: 02-11-2023		Steampowered by GlobalCollect',
'Betaalautomaat	Pasvolgnr: 904 01-11-2023 12:26 Transactie: B10339 Term: 0ZSR03 ING Mobiel Betalen Valutadatum: 02-11-2023		The Sting016 SGRAVENHAGE NLD'
];

function combineRandomStrings() {
  const indices = new Set();
  while(indices.size < 3) {
    indices.add(Math.floor(Math.random() * strings.length));
  }

  const selectedStrings = Array.from(indices).map(index => strings[index]);
  return selectedStrings.join('\n');
}

$input = combineRandomStrings();

</script>


<h1><a href="/">🔙</a> Categorize transaction(s)</h1>

<div class="small">
<SvelteMarkdown source={$completion} />
</div>

<p>These are 3 random transactions (you can paste your own)</p>
<form on:submit={handleSubmit}>
    <textarea bind:value={$input} rows="5" cols="50" />

    <div class="flex-container">
        <button type="submit">Categorize them! 😎</button>
        <button type="button" on:click={() => $input = combineRandomStrings()}>Gimme 3 new ones! 🔁</button>
    </div>
</form>