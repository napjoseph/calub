(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{9842:function(e,t,i){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(t,{Z:function(){return r}})},9880:function(e,t,i){"use strict";var n=i(4736),r=i(8468),o=i(1716);t.default=function(e){var t=e.src,i=e.sizes,r=e.unoptimized,o=void 0!==r&&r,d=e.priority,m=void 0!==d&&d,h=e.loading,b=e.className,p=e.quality,v=e.width,y=e.height,w=e.objectFit,z=e.objectPosition,k=e.loader,I=void 0===k?S:k,E=e.placeholder,j=void 0===E?"empty":E,_=e.blurDataURL,q=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),R=i?"responsive":"intrinsic";"layout"in q&&(q.layout&&(R=q.layout),delete q.layout);var D="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var M=g(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(_=_||M.blurDataURL,D=M.src,(!R||"fill"!==R)&&(y=y||M.height,v=v||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:D;var O=x(v),N=x(y),C=x(p);0;var L=!m&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(o=!0,L=!1);var W,B,U,P=(0,f.useIntersection)({rootMargin:"200px",disabled:!L}),F=n(P,2),H=F[0],V=F[1],J=!L||V,T=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:z},"blur"===j?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(_,'")')}:void 0);if("undefined"!==typeof O&&"undefined"!==typeof N&&"fill"!==R){var G=N/O,Q=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===R?(W={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},B={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===R?(W={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},B={boxSizing:"border-box",display:"block",maxWidth:"100%"},U='<svg width="'.concat(O,'" height="').concat(N,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===R&&(W={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:O,height:N})}else"undefined"===typeof O&&"undefined"===typeof N&&"fill"===R&&(W={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Z={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};J&&(Z=A({src:t,unoptimized:o,layout:R,width:O,quality:C,sizes:i,loader:I}));return s.default.createElement("div",{style:W},B?s.default.createElement("div",{style:B},U?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(U))}):null):null,!J&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},q,A({src:t,unoptimized:o,layout:R,width:O,quality:C,sizes:i,loader:I}),{decoding:"async",style:T,className:b}))),s.default.createElement("img",Object.assign({},q,Z,{decoding:"async",className:b,ref:function(e){H(e),function(e,t){if("blur"===t&&e){var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?i():e.onload=i}}(e,j)},style:T})),m?s.default.createElement(u.default,null,s.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imagesrcset:Z.srcSet,imagesizes:Z.sizes})):null)};var a=o(i(2987)),c=o(i(3358)),s=o(i(1738)),u=o(i(9460)),l=i(9135),d=i(8071),f=i(5536);var m=new Map([["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=["auto=format","fit=max","w="+n],a="";r&&o.push("q="+r);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(z(i)).concat(a)}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(z(i),"?imwidth=").concat(n)}],["default",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}]]);function g(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||d.imageConfigDefault,b=h.deviceSizes,p=h.imageSizes,v=h.loader,y=h.path,w=(h.domains,[].concat(r(b),r(p)));function A(e){var t=e.src,i=e.unoptimized,n=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(i);n)a.push(parseInt(n[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=b[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(o,n,c),l=u.widths,d=u.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,i){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:i+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:l[f]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=m.get(v);if(t)return t((0,c.default)({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(v))}function z(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},5536:function(e,t,i){"use strict";var n=i(4736);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!a,s=(0,r.useRef)(),u=(0,r.useState)(!1),l=n(u,2),d=l[0],f=l[1],m=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),i||d||e&&e.tagName&&(s.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=c.get(t);if(i)return i;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return c.set(t,i={id:t,observer:r,elements:n}),i}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[i,t,d]);return(0,r.useEffect)((function(){if(!a&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[m,d]};var r=i(1738),o=i(5519),a="undefined"!==typeof IntersectionObserver;var c=new Map},9135:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},8071:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},800:function(e,t,i){e.exports=i(9880)}}]);