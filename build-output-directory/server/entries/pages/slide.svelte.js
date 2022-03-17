import { c as create_ssr_component, b as add_attribute } from "../../chunks/index-7340f048.js";
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img class="${"sm:max-w-90/100 md:max-w-90/100 2xl:max-w-85/100 2xl2:max-w-85/100 2xl3:max-w-80/100 2xl4:max-w-70/100 2xl5:max-w-65/100 2xl6:max-w-55/100 2xl7:max-w-50/100 2xl8:max-w-50/100 m-auto rounded-xl animate-fade "}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}>`;
});
export { Slide as default };
