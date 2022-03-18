export const manifest = {
	appDir: "_app",
	assets: new Set(["as1.jpg","as2.jpg","bad.jpg","bad2.jpg","bad3.jpg","bad4.jpg","berg.jpg","favicon.png","flur.jpg","flur2.jpg","fuss1.jpg","fuss2.jpg","hof2_short.jpg","hof4_short.jpg","hsmittel.jpg","hsnah.jpg","hsweit.jpg","k1.jpg","k2.jpg","stadt.jpg","stadt_short.jpg","sz.jpg","sz2.jpg","sz3.jpg","sz4.jpg","sz5.jpg","sz6.jpg","t1.jpg","t2.jpg","wein1.jpg","wz.jpg","wz2.jpg","wz3.jpg","wz4.jpg","wz5.jpg","wz6.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"start-4cd0bd53.js","js":["start-4cd0bd53.js","chunks/vendor-9c00b111.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "slider",
				pattern: /^\/slider\/?$/,
				params: null,
				path: "/slider",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "image",
				pattern: /^\/image\/?$/,
				params: null,
				path: "/image",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "slide",
				pattern: /^\/slide\/?$/,
				params: null,
				path: "/slide",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "text",
				pattern: /^\/text\/?$/,
				params: null,
				path: "/text",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		]
	}
};
