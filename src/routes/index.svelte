<script lang="ts">
	import Slider from './slider.svelte';
	import Image from './image.svelte';
	import Text from './text.svelte';

	let array: number[] = [0];
	$: array = array;
	let count: number = 0;
	$: count = count;

	let prices;
	let slider;

	function add() {
		count += 1;
	}

	function adda() {
		array = [...array, count];
	}
</script>

<!--
    {count}
    {array}
<br/>
<button on:click={ () => {add()}}>add count</button>
<button on:click={ () => {adda()}}>add array</button>
<br/>
-->

<!-- Main-DIV with whole index-page -->
<div name="index" on:click= {()=> { prices.scrollIntoView(); window.scrollBy(0,-50) }} class=" bg-gradient-to-b from-transparent to-white">
	<!-- DIV with 2x header and 1 image -->
	<div class="z-30 relative bg-gradient-to-b from-transparent to-white ">
		<img class=" " src="stadt_short.jpg" alt="Ausblick über Dächer" />
		<h1
			class="text-3xl sm:text-5xl md:text-5xl  lg:text-6xl
            xl:text-8xl
            2xl:text-9xl
            2xl:left-20 
            2xl:top-2
            2xl4:top-10

            py-5  font-thin
            text-center absolute 
            rounded-md text-black  
            left-4 sm:left-8 -top-5 sm:top-0
 "
		>
			Ferienwohnung Mittendrin
		</h1>
		<h2
			class="text-lg sm:text-2xl md:text-2xl lg:text-3xl 
            xl:text-4xl  text-center 
			top-9 
			max-w-[60%]
			sm:max-w-full
			left-16
            sm:left-32 md:left-32  sm:top-20
             md:top-24 lg:top-28
absolute xl:left-60  xl:top-36
2xl:top-52  2xl2:top-52   font-thin
2xl2:text-6xl  
2xl4:top-64 
text-gray-800"
		>
			Die Ferienwohnung mitten in Neustadt!
		</h2>
	</div>

	<div class="px-12 pt-12 pb-4  ">
		<p class="text-3xl lg:text-5xl sm:text-4xl   text-center ">
			Seien Sie herzlich willkommen in unserer liebevoll renovierten Ferienwohnung.
		</p>
	</div>

	

    <Text
		text="Das Haus aus dem 18. Jahrhundert steht als Einzeldenkmal unter Denkmalschutz in der
        Fußgängerzone."
	/>

	<Image src="wz.jpg" alt="Wohnzimmer" />

	<Text
		text="Unsere neu renovierte, helle Wohnung erwartet Sie mit kostenfreiem WLAN und Blick auf die Dächer der Stadt.
		Hier in Neustadt an der Weinstraße stehen Ihnen 100m² zur Verfügung. 
		3 gemütliche Schlafzimmer, 1 Wohnzimmer und 2 Bäder sind über eine Treppe im 2.OG erreichbar. 
	    Zum Wohnzimmer gehört ein angrenzender Ankleide/Ablageraum."
	/>

	<Image src="sz.jpg" alt="Schlafzimmer" />

	<Text
		text="Unsere Adresse ist ein ausgezeichneter Startpunkt für Radtouren in den herrlichen Pfälzer Wald
    oder in die schöne Landschaft der Rheinebene. Ihre Fahrräder können in einem abschließbaren
    Fahrradraum im Innenhof mit Steckdosen zum Aufladen Ihrer E-Bikes abgestellt werden. Ebenso
    können Sie Ihre Fahrräder im Innenhof reinigen und warten."
	/>

	<Image src="hof2_short.jpg" alt="Hof" />

	<Text
		text="Wenn Sie eine zentral gelegene Unterkunft mitten in der Stadt suchen, dann liegen Sie hier
    richtig. Restaurants, Cafes und Bars sind fußläufig in kürzester Zeit zu erreichen. Auch alle
    Geschäfte des täglichen Bedarfs sind in unmittelbarer Nähe, zum Bahnhof sind es ca. 7 Minuten."
	/>

	<Image src="fuss1.jpg" alt="Fußgängerzone" />

	<Text
		text="Die Fußgängerzone ist morgens bis 10:30 Uhr und abends ab 19 Uhr befahrbar. Zwischen diesen
    Zeiten können Sie jedoch in wenigen Metern Entfernung zum Ausladen parken. Öffentliche
    Parkplätze gegen Gebühr sind genügend vorhanden. Kostenlose Parkplätze sind fußläufig in ca.
    15 Minuten zu erreichen. Elektroautos parken in Neustadt umsonst."
	/>

	<Image src="berg.jpg" alt="Berge" />

	<Text
		text="Neustadt an der Weinstraße liegt eingebettet zwischen Pfälzer Wald und Weinbergen. Es hat eine
    malerische Altstadt und verwinkelte Gässchen mit restaurierten Fachwerkhäusern."
	/>

	<div class=" pb-4">
		<p class="text-center">
			<Image src="hsweit.jpg" alt="Hambacher Schloss" />
			By
			<a href="//commons.wikimedia.org/wiki/User:BlueBreezeWiki" title="User:BlueBreezeWiki"
				>BlueBreezeWiki</a
			>
			- <span class="int-own-work" lang="en">Own work </span>,
			<a
				href="https://creativecommons.org/licenses/by-sa/3.0"
				title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a
			>,
			<a href="https://commons.wikimedia.org/w/index.php?curid=57552295">Link</a>
		</p>
	</div>

	<Text
		text="Für Wander- oder Radtouren ist hier der ideale Ausgangspunkt. Hier gibt es viel zu
    unternehmen, das Hambacher Schloß, romantische Weindörfer, urige Wanderhütten und viele
    Weinfeste warten auf Ihren Besuch."
	/>

	<div class=" pb-4">
		<p class="text-center">
			<Image src="hsnah.jpg" alt="Hambacher Schloss" />
			By
			<a href="//commons.wikimedia.org/wiki/User:BlueBreezeWiki" title="User:BlueBreezeWiki"
				>BlueBreezeWiki</a
			>
			- <span class="int-own-work" lang="en">Own work </span>,
			<a
				href="https://creativecommons.org/licenses/by-sa/3.0"
				title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a
			>,
			<a href="https://commons.wikimedia.org/w/index.php?curid=57552292">Link</a>
		</p>
	</div>
	<div bind:this={prices} id="prices"
		class=" mx-auto my-16 p-6 w-90/100 xl:w-50/100 p border-2 border-gray-300 overflow-hidden text-center overflow-ellipsis  bg-gray-100 rounded-lg shadow-md break-words"
	>
		<p class="text-2xl lg:text-3xl  ">
			Preise:
			<br /><br />
			1 Übernachtung bis 6 Gäste 210€.
			<br /> <br />
			1 Übernachtung für 7 bis max. 8 Gästen 330€.
			<br /> <br />
			Buchungen sind erst ab drei Übernachtungen möglich.
		</p>
	</div>

	<div class="p-8">
		<p class="text-3xl lg:text-5xl    text-center ">
			Wir sind auch auf
			<a
				class="text-blue-700"
				href="https://www.booking.com/hotel/de/ferienwohnung-altstadt-neustadt-an-der-weinstrasse.de.html"
			>
				<p class="underline hover:text-blue-400">booking.com!</p>
			</a>
		</p>
	</div>

	<div
		class=" mx-auto my-10 p-8 w-90/100 xl:w-50/100 p 
    border-2 border-gray-300 overflow-hidden text-center overflow-ellipsis  bg-gray-100 rounded-lg shadow-md break-words"
	>
		<p class="text-2xl lg:text-3xl  ">
			Adresse: <br /><br /> Ferienwohnung Mittendrin <br />
			Hauptstraße 69 in <br /> 67433 Neustadt an der Weinstraße
			<br />
			<br />
			Gastgeberin: <br /><br />
			Michaela Stadler

			<br /> +49 1786 2959 54 <br />
			<a class="underline text-blue-700 hover:text-blue-400" href="mailto:info@stadlersoft.de"
				>info@stadlersoft.de</a
			>
		</p>
	</div>
	<!-- Image-carousel-component: -->
	<div bind:this={slider} id="slider">
	<Slider />
</div>

	<div
		class=" mx-auto my-10  w-90/100 xl:w-50/100 p-2
    border-2 border-gray-300 overflow-hidden text-center 
    overflow-ellipsis  bg-gray-100 rounded-lg shadow-md 
    break-words"
	>
		<p class="text-2xl lg:text-3xl  ">
			Impressum:
			<br /><br />
			Michaela Stadler

			<br /> Westliche Luhrbachstraße 9
			<br />67466 Lambrecht
			<br /> +49 1786 2959 54
			<br />
			<a
				class="underline text-blue-700
             hover:text-blue-400"
				href="mailto:info@stadlersoft.de">info@stadlersoft.de</a
			>
		</p>
	</div>

	<div class=" pb-20 sm:pb-16 " />

	<div
		class=" border-t-2 border-gray-400 text-xl md:text-3xl lg:text-4xl p-3 fixed bottom-0 bg-blue-400 w-[100%] text-center"
	>
		Bei Interesse rufen Sie uns an unter +49 1786 2959 54 !
	</div>
</div>
