import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../chunks/index-13c0de55.js";
import Slider from "./slider.svelte.js";
import Image from "./image.svelte.js";
import Text from "./text.svelte.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prices;
  let slider;
  return `


<div name="${"index"}" class="${"bg-gradient-to-b from-transparent to-white"}">
	<div class="${"z-30 relative bg-gradient-to-b from-transparent to-white "}"><img class="${"border-b-2 border-gray-400 shadow-xl "}" src="${"stadt_short.jpg"}" alt="${"Ausblick \xFCber D\xE4cher"}">
		<h1 class="${"text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl 2xl:left-20 2xl:top-2 2xl4:top-10 py-5 font-thin text-center absolute rounded-md text-black left-4 sm:left-8 -top-5 sm:top-0 "}">Ferienwohnung Mittendrin
		</h1>
		<h2 class="${"text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center top-9 max-w-[60%] sm:max-w-full left-16 sm:left-32 md:left-32 sm:top-20 md:top-24 lg:top-28 absolute xl:left-60 xl:top-36 2xl:top-52 2xl2:top-52 font-thin 2xl2:text-6xl 2xl4:top-64 text-gray-800"}">Die Ferienwohnung mitten in Neustadt!
		</h2></div>

	<div class="${"px-12 pt-12 pb-4 "}"><p class="${"text-3xl lg:text-5xl sm:text-4xl text-center "}">Seien Sie herzlich willkommen in unserer liebevoll renovierten Ferienwohnung.
		</p></div>

	
	<div class="${"text-center md:p-8 my-4"}"><button class="${"shadow-lg hover:shadow-2xl btn-primary text-xl sm:text-3xl mx-16 my-4 md:m-4 py-4 p-2 md:p-6"}">Direkt zu den Bildern</button>
	
		<button class="${"shadow-lg hover:shadow-2xl btn-primary text-xl sm:text-3xl mx-16 my-4 py-4 md:m-4 p-2 md:p-6"}">Direkt zu den Preisen</button></div>

    ${validate_component(Text, "Text").$$render($$result, {
    text: "Das Haus aus dem 18. Jahrhundert steht als Einzeldenkmal unter Denkmalschutz in der\n        Fu\xDFg\xE4ngerzone."
  }, {}, {})}

	${validate_component(Image, "Image").$$render($$result, { src: "wz.jpg", alt: "Wohnzimmer" }, {}, {})}

	${validate_component(Text, "Text").$$render($$result, {
    text: "Unsere neu renovierte, helle Wohnung erwartet Sie mit kostenfreiem WLAN und Blick auf die D\xE4cher der Stadt.\n		Hier in Neustadt an der Weinstra\xDFe stehen Ihnen 100m\xB2 zur Verf\xFCgung. \n		3 gem\xFCtliche Schlafzimmer, 1 Wohnzimmer und 2 B\xE4der sind \xFCber eine Treppe im 2.OG erreichbar. \n	    Zum Wohnzimmer geh\xF6rt ein angrenzender Ankleide/Ablageraum."
  }, {}, {})}

	${validate_component(Image, "Image").$$render($$result, { src: "sz.jpg", alt: "Schlafzimmer" }, {}, {})}

	${validate_component(Text, "Text").$$render($$result, {
    text: "Unsere Adresse ist ein ausgezeichneter Startpunkt f\xFCr Radtouren in den herrlichen Pf\xE4lzer Wald\n    oder in die sch\xF6ne Landschaft der Rheinebene. Ihre Fahrr\xE4der k\xF6nnen in einem abschlie\xDFbaren\n    Fahrradraum im Innenhof mit Steckdosen zum Aufladen Ihrer E-Bikes abgestellt werden. Ebenso\n    k\xF6nnen Sie Ihre Fahrr\xE4der im Innenhof reinigen und warten."
  }, {}, {})}

	${validate_component(Image, "Image").$$render($$result, { src: "hof2_short.jpg", alt: "Hof" }, {}, {})}

	${validate_component(Text, "Text").$$render($$result, {
    text: "Wenn Sie eine zentral gelegene Unterkunft mitten in der Stadt suchen, dann liegen Sie hier\n    richtig. Restaurants, Cafes und Bars sind fu\xDFl\xE4ufig in k\xFCrzester Zeit zu erreichen. Auch alle\n    Gesch\xE4fte des t\xE4glichen Bedarfs sind in unmittelbarer N\xE4he, zum Bahnhof sind es ca. 7 Minuten."
  }, {}, {})}

	${validate_component(Image, "Image").$$render($$result, { src: "fuss1.jpg", alt: "Fu\xDFg\xE4ngerzone" }, {}, {})}

	${validate_component(Text, "Text").$$render($$result, {
    text: "Die Fu\xDFg\xE4ngerzone ist morgens bis 10:30 Uhr und abends ab 19 Uhr befahrbar. Zwischen diesen\n    Zeiten k\xF6nnen Sie jedoch in wenigen Metern Entfernung zum Ausladen parken. \xD6ffentliche\n    Parkpl\xE4tze gegen Geb\xFChr sind gen\xFCgend vorhanden. Kostenlose Parkpl\xE4tze sind fu\xDFl\xE4ufig in ca.\n    15 Minuten zu erreichen. Elektroautos parken in Neustadt umsonst."
  }, {}, {})}

	${validate_component(Image, "Image").$$render($$result, { src: "berg.jpg", alt: "Berge" }, {}, {})}

	${validate_component(Text, "Text").$$render($$result, {
    text: "Neustadt an der Weinstra\xDFe liegt eingebettet zwischen Pf\xE4lzer Wald und Weinbergen. Es hat eine\n    malerische Altstadt und verwinkelte G\xE4sschen mit restaurierten Fachwerkh\xE4usern."
  }, {}, {})}

	<div class="${"pb-4"}"><p class="${"text-center"}">${validate_component(Image, "Image").$$render($$result, {
    src: "hsweit.jpg",
    alt: "Hambacher Schloss"
  }, {}, {})}
			By
			<a href="${"//commons.wikimedia.org/wiki/User:BlueBreezeWiki"}" title="${"User:BlueBreezeWiki"}">BlueBreezeWiki</a>
			- <span class="${"int-own-work"}" lang="${"en"}">Own work </span>,
			<a href="${"https://creativecommons.org/licenses/by-sa/3.0"}" title="${"Creative Commons Attribution-Share Alike 3.0"}">CC BY-SA 3.0</a>,
			<a href="${"https://commons.wikimedia.org/w/index.php?curid=57552295"}">Link</a></p></div>

	${validate_component(Text, "Text").$$render($$result, {
    text: "F\xFCr Wander- oder Radtouren ist hier der ideale Ausgangspunkt. Hier gibt es viel zu\n    unternehmen, das Hambacher Schlo\xDF, romantische Weind\xF6rfer, urige Wanderh\xFCtten und viele\n    Weinfeste warten auf Ihren Besuch."
  }, {}, {})}

	<div class="${"pb-4"}"><p class="${"text-center"}">${validate_component(Image, "Image").$$render($$result, {
    src: "hsnah.jpg",
    alt: "Hambacher Schloss"
  }, {}, {})}
			By
			<a href="${"//commons.wikimedia.org/wiki/User:BlueBreezeWiki"}" title="${"User:BlueBreezeWiki"}">BlueBreezeWiki</a>
			- <span class="${"int-own-work"}" lang="${"en"}">Own work </span>,
			<a href="${"https://creativecommons.org/licenses/by-sa/3.0"}" title="${"Creative Commons Attribution-Share Alike 3.0"}">CC BY-SA 3.0</a>,
			<a href="${"https://commons.wikimedia.org/w/index.php?curid=57552292"}">Link</a></p></div>
	<div id="${"prices"}" class="${"mx-auto my-12 mt-20 p-10 w-90/100 xl:w-50/100 p border-2 border-gray-300 overflow-hidden text-center overflow-ellipsis bg-gray-100 rounded-lg shadow-md break-words"}"${add_attribute("this", prices, 0)}><p class="${"text-2xl lg:text-3xl "}">Preise:
			<br><br>
			1 \xDCbernachtung bis 6 G\xE4ste 210\u20AC.
			<br> <br>
			1 \xDCbernachtung f\xFCr 7 bis max. 8 G\xE4sten 330\u20AC.
			<br> <br>
			Buchungen sind erst ab drei \xDCbernachtungen m\xF6glich.
		</p></div>

	<div class="${"p-8"}"><p class="${"text-3xl lg:text-5xl text-center "}">Wir sind auch auf
			<a class="${"text-blue-700"}" href="${"https://www.booking.com/hotel/de/ferienwohnung-altstadt-neustadt-an-der-weinstrasse.de.html"}"><p class="${"underline hover:text-blue-400"}">booking.com!</p></a></p></div>

	<div class="${"mx-auto mt-16 mb-36 p-8 w-90/100 xl:w-50/100 border-2 border-gray-300 overflow-hidden text-center overflow-ellipsis bg-gray-100 rounded-lg shadow-md break-words"}"><p class="${"text-2xl lg:text-3xl "}">Adresse: <br><br> Ferienwohnung Mittendrin <br>
			Hauptstra\xDFe 69 in <br> 67433 Neustadt an der Weinstra\xDFe
			<br>
			<br>
			Gastgeberin: <br><br>
			Michaela Stadler

			<br> +49 1786 2959 54 <br>
			<a class="${"underline text-blue-700 hover:text-blue-400"}" href="${"mailto:info@stadlersoft.de"}">info@stadlersoft.de</a></p></div>
	
	<div id="${"slider"}"${add_attribute("this", slider, 0)}>${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})}</div>

	<div class="${"mx-auto my-20 w-90/100 xl:w-50/100 p-6 border-2 border-gray-300 overflow-hidden text-center overflow-ellipsis bg-gray-100 rounded-lg shadow-md break-words"}"><p class="${"text-2xl lg:text-3xl "}">Impressum:
			<br><br>
			Michaela Stadler

			<br> Westliche Luhrbachstra\xDFe 9
			<br>67466 Lambrecht
			<br> +49 1786 2959 54
			<br>
			<a class="${"underline text-blue-700 hover:text-blue-400"}" href="${"mailto:info@stadlersoft.de"}">info@stadlersoft.de</a></p></div>

	<div class="${"pb-20 sm:pb-16 "}"></div>

	<div class="${"border-t-2 border-blue-300 text-xl md:text-3xl lg:text-4xl p-3 fixed bottom-0 bg-blue-400 w-[100%] text-center"}">Bei Interesse rufen Sie uns an unter +49 1786 2959 54 !
	</div></div>`;
});
export { Routes as default };
