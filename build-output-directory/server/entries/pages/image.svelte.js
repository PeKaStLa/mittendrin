import { c as create_ssr_component, b as add_attribute } from "../../chunks/index-7340f048.js";
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "Ferienwohnung" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img class="${"2xl5:w-50/100 2xl3:w-60/100 2xl:w-70/100 xl:w-80/100 lg:w-90/100 md:w-90/100 w-95/100 my-4 m-auto rounded-xl border-4 border-gray-300 shadow-md "}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}>`;
});
export { Image as default };
