import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "../../chunks/index-7340f048.js";
let alt = "Ferienwohnung_Mittendrin";
let _OTHER_TIMERS = 4;
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    "stadt.jpg",
    "fuss1.jpg",
    "hof2_short.jpg",
    "wz.jpg",
    "wz3.jpg",
    "wz4.jpg",
    "wz2.jpg",
    "wz6.jpg",
    "fuss2.jpg",
    "sz.jpg",
    "sz2.jpg",
    "sz3.jpg",
    "sz4.jpg",
    "sz5.jpg",
    "sz6.jpg",
    "berg.jpg",
    "bad.jpg",
    "bad2.jpg",
    "bad3.jpg",
    "bad4.jpg",
    "flur.jpg",
    "flur2.jpg",
    "as2.jpg",
    "k1.jpg",
    "k2.jpg",
    "wein1.jpg",
    "t1.jpg",
    "t2.jpg",
    "hof4_short.jpg",
    "as1.jpg"
  ];
  let counter = 0;
  let _FIRST_TIMER = 6;
  setInterval(() => {
    if (_FIRST_TIMER >= 1) {
      _FIRST_TIMER--;
    } else {
      _continue();
    }
  }, 1e3);
  function _continue() {
    _FIRST_TIMER = _OTHER_TIMERS;
    if (counter == images.length - 1) {
      counter = 0;
    } else {
      counter += 1;
    }
  }
  counter = counter;
  return `<div name="${"slider"}" class="${"relative m-4 lg:m-4 sm:m-2 md:m-2"}"><div class="${"text-center pb-2"}">${each(images, (image) => {
    return `<span class="${escape(counter == images.indexOf(image) ? "animate-bounce  bg-[#717171]" : "bg-[#bbb]") + " m-0.5 h-6 w-6 shadow-md mx-1 transition ease-in-out hover:duration-500 hover:bg-[#717171] cursor-pointer rounded-full inline-block"}"></span>`;
  })}</div>

	<button class="${"absolute top-[40%] rounded-md 2xl:rounded-lg bg-white text-black hover:text-white hover:bg-gray-500 shadow-md transition ease-in-out hover:duration-500 pb-6 pl-2 pr-2 pt-6 text-3xl lg:pb-7 lg:pl-3 lg:pr-2 lg:pt-7 lg:text-5xl 2xl:pb-8 2xl:pl-4 2xl:pr-4 2xl:pt-8 2xl:text-5xl 2xl4:pb-10 2xl4:pl-8 2xl4:pr-8 2xl4:pt-10 2xl4:text-7xl "}">\u276E</button>
	<button class="${"absolute top-[40%] rounded-md 2xl:rounded-lg bg-white text-black hover:text-white hover:bg-gray-500 transition ease-in-out hover:duration-500 shadow-md pb-6 pl-2 pr-2 pt-6 text-3xl lg:pb-7 lg:pl-2 lg:pr-3 lg:pt-7 lg:text-5xl 2xl:pb-8 2xl:pl-4 2xl:pr-4 2xl:pt-8 2xl:text-5xl 2xl4:pb-10 2xl4:pl-8 2xl4:pr-8 2xl4:pt-10 2xl4:text-7xl right-0 "}">\u276F</button>

	<img class="${"sm:max-w-90/100 md:max-w-90/100 2xl:max-w-85/100 2xl2:max-w-85/100 2xl3:max-w-80/100 2xl4:max-w-70/100 2xl5:max-w-65/100 2xl6:max-w-55/100 2xl7:max-w-50/100 2xl8:max-w-50/100 m-auto rounded-xl shadow-lg border-2 border-gray-300 "}"${add_attribute("src", images[counter], 0)}${add_attribute("alt", alt, 0)}></div>`;
});
export { Slider as default };
