export const manifest = {
	appDir: "_app",
	assets: new Set(["berg.JPG","favicon.png","fuss1.jpg","hof2.JPG","hsmittel.jpg","hsnah.jpg","hsweit.jpg","stadt.JPG","stadt_short.jpg","sz.JPG","wz.JPG"]),
	mimeTypes: {".JPG":"image/jpeg",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"start-c6931d8e.js","js":["start-c6931d8e.js","chunks/vendor-33cb9a14.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
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
