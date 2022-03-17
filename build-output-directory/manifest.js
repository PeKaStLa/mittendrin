export const manifest = {
	appDir: "_app",
	assets: new Set(["berg.jpg","favicon.png","fuss1.jpg","hof2.jpg","hsmittel.jpg","hsnah.jpg","hsweit.jpg","stadt.jpg","stadt_short.jpg","sz.jpg","wz.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"start-9b43361a.js","js":["start-9b43361a.js","chunks/vendor-33cb9a14.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js')
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
			}
		]
	}
};
