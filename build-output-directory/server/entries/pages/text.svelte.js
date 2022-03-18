import { c as create_ssr_component, e as escape } from "../../chunks/index-13c0de55.js";
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="${"2xl5:w-50/100 2xl3:w-60/100 2xl:w-70/100 xl:w-80/100 lg:w-90/100 md:w-90/100 w-95/100 mx-auto my-10 p-8 overflow-hidden text-center overflow-ellipsis break-words border-2 border-gray-300 bg-gray-100 rounded-lg shadow-lg "}"><p class="${"text-2xl lg:text-3xl "}">${escape(text)}</p></div>`;
});
export { Text as default };
