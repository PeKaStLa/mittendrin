<script lang="ts">
	import Slider from './slider.svelte';
    import Image from './image.svelte';

	let array: number[] = [0];
	$: array = array;
	let count: number = 0;
	$: count = count;


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
<div name="index" class=" bg-gradient-to-b from-transparent to-white">
	<!-- DIV with 2x header and 1 image -->
	<div class="z-30 relative bg-gradient-to-b from-transparent to-white ">
		<img class="  " src="stadt_short.jpg" alt="Ausblick über Dächer" />
		<h1
			class="text-5xl sm:text-5xl md:text-5xl  lg:text-6xl    xl:text-8xl
              py-5  font-thin 
            text-center absolute 
            rounded-md text-black  
            left-8 top-0
 ">
				Ferienwohnung Mittendrin
		</h1>
		<h2 
			class="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-center 
            left-32 md:left-56 top-28 sm:top-20 md:top-28
absolute xl:left-60 xl:top-40 text-gray-800"
		>
			Die Ferienwohnung mitten in Neustadt!
		</h2>
	</div>

	<div class="p-12  ">
		<p class="lg:text-5xl text-3xl   text-center ">
			Seien Sie herzlich willkommen in unserer liebevoll renovierten Ferienwohnung.
		</p>
	</div>

	<div class="p-8  ">
		<p class="text-2xl lg:text-3xl    text-center ">
			Das Haus aus dem 18. Jahrhundert steht als Einzeldenkmal unter Denkmalschutz in der
			Fußgängerzone.
		</p>
	</div>


    <Image src="wz.jpg"  alt="Wohnzimmer" />

	<div class="p-8  ">
		<p class="text-2xl lg:text-3xl text-center">
			Unsere neu renovierte, helle Wohnung erwartet Sie mit kostenfreiem WLAN und Stadtblick in
			Neustadt an der Weinstraße. 3 gemütliche Schlafzimmer, 1 Wohnzimmer und 2 Bäder sind über eine
			Treppe im 2.OG erreichbar. Zum Wohnzimmer gehört ein angrenzender Ankleide/Ablageraum.
		</p>
	</div>

     <Image src="sz.jpg"  alt="Schlafzimmer" />

	<div class="p-8  ">
		<p class="text-2xl lg:text-3xl   text-center ">
			Unsere Adresse ist ein ausgezeichneter Startpunkt für Radtouren in den herrlichen Pfälzer Wald
			oder in die schöne Landschaft der Rheinebene. Ihre Fahrräder können in einem abschließbaren
			Fahrradraum im Innenhof mit Steckdosen zum Aufladen Ihrer E-Bikes abgestellt werden. Ebenso
			können Sie Ihre Fahrräder im Innenhof reinigen und warten.
		</p>
	</div>

    <Image src="hof2.jpg"  alt="Hof" />



	<div class="p-8  ">
		<p class="text-2xl lg:text-3xl   text-center ">
			Wenn Sie eine zentral gelegene Unterkunft mitten in der Stadt suchen, dann liegen Sie hier
			richtig. Restaurants, Cafes und Bars sind fußläufig in kürzester Zeit zu erreichen. Auch alle
			Geschäfte des täglichen Bedarfs sind in unmittelbarer Nähe, zum Bahnhof sind es ca. 7 Minuten.
		</p>
	</div>

    <Image src="fuss1.jpg"  alt="Fußgängerzone" />

	<div class="p-8  ">
		<p class="text-2xl lg:text-3xl   text-center ">
			Die Fußgängerzone ist morgens bis 10:30 Uhr und abends ab 19 Uhr befahrbar. Zwischen diesen
			Zeiten können Sie jedoch in wenigen Metern Entfernung zum Ausladen parken. Öffentliche
			Parkplätze gegen Gebühr sind genügend vorhanden. Kostenlose Parkplätze sind fußläufig in ca.
			15 Minuten zu erreichen. Elektroautos parken in Neustadt umsonst.
		</p>
	</div>


    <Image src="berg.jpg"  alt="Berge" />


	<div class="p-8  ">
		<p class="text-2xl lg:text-3xl   text-center ">
			Neustadt an der Weinstraße liegt eingebettet zwischen Pfälzer Wald und Weinbergen. Es hat eine
			malerische Altstadt und verwinkelte Gässchen mit restaurierten Fachwerkhäusern.
		</p>
	</div>

	<div class="py-6">
		<p class="text-center">
			<a
				href="https://commons.wikimedia.org/wiki/File:150318-Hambacher-Schloss-06.jpg#/media/File:150318-Hambacher-Schloss-06.jpg"
			>
			    <Image src="hsweit.jpg"  alt="Hambacher Schloss" />

            </a>By
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

	<div class="p-8  ">
		<p class="text-2xl lg:text-3xl   text-center ">
			Für Wander- oder Radtouren ist hier der ideale Ausgangspunkt. Hier gibt es viel zu
			unternehmen, das Hambacher Schloß, romantische Weindörfer, urige Wanderhütten und viele
			Weinfeste warten auf Ihren Besuch.
		</p>
	</div>

	<div class="py-6">
		<p class="text-center">
			<a
				href="https://commons.wikimedia.org/wiki/File:150318-Hambacher-Schloss-05.jpg#/media/File:150318-Hambacher-Schloss-05.jpg"
			>

            <Image src="hsnah.jpg"  alt="Hambacher Schloss" />
            
			</a>By
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
    <div class=" mx-auto my-4 p-8 w-90/100 xl:w-50/100 p border-2 border-gray-300 overflow-hidden text-center overflow-ellipsis  bg-gray-100 rounded-lg shadow-md break-words">

		<p class="text-2xl lg:text-3xl  ">
            Preise:<br/><br/>
            1 Übernachtung bis 6 Gäste 210€.
             <br/> <br/> 
            1 Übernachtung ab 7 Gästen 330€.
            <br/>  <br/>
    Buchungen sind erst ab drei Übernachtungen möglich.
</p>
    </div>

	<div class="p-8">
		<p class="text-3xl lg:text-5xl    text-center ">
			Wir sind auch auf 
			<a class="text-blue-700"
				href="https://www.booking.com/hotel/de/ferienwohnung-altstadt-neustadt-an-der-weinstrasse.de.html"
			>
				<p class="underline hover:text-blue-400">
					booking.com!
				</p>
			</a>
		</p>
	</div>

    <div class=" mx-auto my-10 p-8 w-90/100 xl:w-50/100 p 
    border-2 border-gray-300 overflow-hidden text-center overflow-ellipsis  bg-gray-100 rounded-lg shadow-md break-words">
		<p class="text-2xl lg:text-3xl  ">
            Adresse:<br/><br/>
            Hauptstraße 69 in <br/> 67433 Neustadt an der Weinstraße
            <br/>  <br/>
    Inhaber: <br/><br/>
Michaela und Andreas Stadler</p>
    </div>
	<!-- Image-carousel-component: -->
	<Slider />

    

	<div class="  sm:pb-28 lg:pb-20" />

	<div
		class=" border-t-4 border-gray-400  text-3xl lg:text-4xl p-4 fixed bottom-0 bg-blue-400 w-[100%] text-center"
	>
		Bei Interesse rufen Sie uns an unter +49 1786 2959 54 !
	</div>
</div>
