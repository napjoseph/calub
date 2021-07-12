(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5860:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ce},default:function(){return oe}});var i=n(1030),r=n(1738),a=n(252),s=n(8425),c=n(7083),o=n(1899),l=n.n(o),d=function(e,t){var n=[];return(e.subHeaderItems||[]).map((function(r){switch(r){case"credentialType":n.push((0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:l().key,children:"Credential Type:"}),(0,i.jsx)("span",{className:l().value,children:u(e,t)})]}));break;case"credentialId":n.push((0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:l().key,children:"Credential ID:"}),(0,i.jsx)("span",{className:l().value,children:(0,i.jsx)("a",{href:t.verificationUrl,className:l().url,children:t.credentialId})})]}));break;case"issuingOrganization":n.push((0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:l().key,children:"Issuer:"}),(0,i.jsx)("span",{className:l().value,children:m(e,t)})]}));break;case"issuedDate":n.push((0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:l().key,children:"Issued Date:"}),(0,i.jsx)("span",{className:l().value,children:t.issuedDate})]}));break;case"gradeAchieved":n.push((0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:l().key,children:"Grade Achieved:"}),(0,i.jsx)("span",{className:l().value,children:t.gradeAchieved})]}))}})),(0,i.jsx)(i.Fragment,{children:n.map((function(e,t){return(0,i.jsxs)(r.Fragment,{children:[!!t&&(0,i.jsx)("span",{className:l().divider,children:"|"}),e]},t)}))})},u=function(e,t){var n=t.credentialType||"",r=e.credentialTypeMapping.filter((function(e){return e.key===n}));if(0===r.length)return(0,i.jsx)(i.Fragment,{children:t.credentialType});var a=r[0];return(0,i.jsx)(i.Fragment,{children:a.displayName})},m=function(e,t){var n=t.issuingOrganization||"",r=e.issuingOrganizationMapping.filter((function(e){return e.key===n}));if(0===r.length)return(0,i.jsx)(i.Fragment,{children:t.issuingOrganization});var a=r[0];return a.url?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("a",{href:a.url,children:a.displayName})}):(0,i.jsx)(i.Fragment,{children:a.displayName})},f=function e(t){var n=t.meta,r=void 0===n?c.DEFAULT_CERTIFICATIONS_META:n,a=t.items,s=void 0===a?[]:a;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:l().container,children:(0,i.jsx)("ul",{className:l().list,children:s.map((function(t){var n=(0,i.jsx)("h3",{className:l().title,children:t.title});return t.credentialUrl&&""!==t.credentialUrl&&(n=(0,i.jsx)("h3",{className:l().title,children:(0,i.jsx)("a",{href:t.credentialUrl,children:t.title})})),(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:l().certification,children:[(0,i.jsxs)("div",{className:l().content,children:[n,(0,i.jsx)("div",{className:l().meta,children:d(r,t)})]}),t.children&&(0,i.jsx)("div",{className:l().children,children:(0,i.jsx)(e,{meta:r,items:t.children})})]})},t.title)}))})})})},h=function(e){var t=e.config,n=t.meta||c.DEFAULT_CERTIFICATIONS_META;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(f,{meta:n,items:t.items})})},_=n(800),p=n(9973),x=n(3055),v=n.n(x),j=function(e){var t=e.item,n=t.title,r=t.canadaClassification,a=t.startDate,s=t.endDate,c=t.description;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h6",{className:v().title,title:n,children:r||n}),(0,i.jsxs)("p",{className:v().dates,children:[(0,i.jsx)("span",{className:v().start,children:a}),"\u2013",(0,i.jsx)("span",{className:v().end,children:s})]}),(0,i.jsx)("p",{className:v().description,children:c})]})},g=n(3842),b=n.n(g),w=function(e){var t=e.item,n=e.isLast,r=void 0!==n&&n,a=t.title,s=t.url,c=t.address,o=t.image,l=t.roles,d=o.path||"";return"static"===o.source&&(d="".concat((0,p.Z)()).concat(o.path)),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:b().wrapper,children:[!r&&(0,i.jsx)("span",{className:b().line,"aria-hidden":"true"}),(0,i.jsxs)("div",{className:b().content,children:[(0,i.jsx)("div",{className:b().logo,children:(0,i.jsx)("a",{href:s,className:b().link,children:(0,i.jsx)(_.default,{className:b().image,src:d,alt:o.title,title:o.title,width:24,height:24,quality:100,unoptimized:!0})})}),(0,i.jsxs)("div",{className:b().description,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:b().title,children:(0,i.jsx)("a",{href:s,className:b().link,children:a})}),(0,i.jsx)("p",{className:b().address,children:c})]}),(0,i.jsx)("div",{className:b().roles,children:(0,i.jsx)("ul",{className:b().list,children:l.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)(j,{item:e})},t)}))})})]})]})]})})},y=function(e){var t=e.items;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:t.map((function(e,n){return(0,i.jsx)("li",{children:(0,i.jsx)(w,{item:e,isLast:n===t.length-1})},e.title)}))})})},N=n(1915),k=n.n(N),A=function(e){var t=e.item;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:k().title,children:t.title}),(0,i.jsxs)("div",{className:k().meta,children:[(0,i.jsx)("span",{className:k().from,children:(0,i.jsx)("a",{href:t.from.url,children:t.from.name})}),(0,i.jsx)("span",{className:k().divider,children:"|"}),(0,i.jsx)("span",{children:t.from.address})]}),(0,i.jsx)("div",{className:k().meta,children:(0,i.jsxs)("span",{className:k().dates,children:[(0,i.jsx)("span",{className:k().prefix,children:""}),(0,i.jsx)("span",{className:k().start,children:t.dates.start}),(0,i.jsx)("span",{className:k().to,children:" to "}),(0,i.jsx)("span",{className:k().end,children:t.dates.end}),(0,i.jsx)("span",{className:k().suffix,children:""})]})})]})})},E=n(6675),O=n.n(E),z=function(e){var t=e.config.items;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:O().container,children:(0,i.jsx)("ul",{className:O().list,children:t.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)(A,{item:e})},t)}))})})})},I=n(6472),S=n.n(I),D=function(e){var t=e.overrideClassName,n=void 0===t?S().default:t,r=e.fill,a=void 0===r?"#a8abaf":r;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{className:n,version:"1.0",xmlns:"http://www.w3.org/2000/svg",height:"437.000000pt",viewBox:"0 0 437.000000 437.000000",preserveAspectRatio:"xMidYMid meet",children:(0,i.jsx)("g",{transform:"translate(0.000000,437.000000) scale(0.100000,-0.100000)",fill:"none",stroke:"none",children:(0,i.jsx)("path",{fill:a,d:"M2105 4060 c-125 -73 -266 -155 -440 -255 -241 -138 -482 -278 -655\n-378 -85 -49 -230 -132 -322 -185 l-168 -96 0 -962 0 -962 42 -25 c58 -32 350\n-201 471 -270 53 -32 140 -82 192 -112 52 -30 139 -80 193 -112 53 -31 153\n-88 222 -128 69 -40 168 -97 220 -127 52 -30 140 -81 195 -113 55 -31 105 -62\n112 -67 12 -10 38 3 268 137 213 124 294 171 418 242 70 40 184 106 255 146\n70 41 171 99 225 130 53 32 141 82 195 114 53 31 148 85 210 121 l112 64 0\n962 0 962 -107 61 c-60 33 -164 93 -233 133 -290 168 -464 268 -615 355 -88\n51 -205 118 -260 150 -55 32 -174 101 -265 153 -91 52 -169 98 -175 102 -5 3\n-46 -14 -90 -40z m-7 -390 l-3 -164 -55 -31 c-64 -36 -382 -220 -655 -378\n-104 -61 -236 -137 -292 -170 l-103 -59 0 -638 0 -638 -132 -76 c-73 -41 -141\n-78 -151 -82 -16 -6 -17 35 -15 801 l3 808 70 42 c39 23 194 113 345 200 559\n322 797 460 885 511 50 29 93 49 98 45 4 -4 6 -81 5 -171z m530 -21 c191 -111\n363 -210 382 -221 317 -180 570 -328 570 -333 0 -2 -55 -36 -122 -76 -68 -39\n-153 -89 -190 -111 l-68 -40 0 -637 c0 -595 -1 -637 -17 -647 -20 -12 -220\n-128 -413 -239 -150 -87 -525 -302 -560 -323 -25 -14 -31 -12 -150 59 -69 41\n-191 113 -272 159 l-147 85 -1 583 c0 464 3 582 13 576 12 -8 522 -404 846\n-657 198 -155 353 -275 382 -296 19 -13 19 -2 19 797 l0 811 -82 49 c-77 45\n-153 90 -433 254 l-110 64 -3 172 c-1 95 0 172 3 172 3 0 162 -91 353 -201z\nm-390 -323 c20 -13 82 -50 137 -82 55 -32 144 -84 197 -115 53 -32 111 -65\n127 -74 l31 -16 0 -579 c0 -319 -3 -580 -7 -580 -5 0 -69 48 -143 106 -74 58\n-154 120 -176 137 -23 18 -99 77 -170 133 -71 55 -272 211 -446 347 l-318 246\n0 -812 0 -812 153 -89 c83 -49 225 -132 315 -185 l162 -96 0 -167 c0 -131 -3\n-168 -13 -168 -7 0 -17 4 -22 9 -6 5 -100 61 -210 124 -110 63 -256 147 -325\n187 -69 39 -263 151 -432 248 -170 97 -308 179 -308 182 0 3 57 39 128 79 70\n41 154 91 187 111 l60 37 5 639 5 639 80 46 c44 25 125 72 180 104 120 70 382\n221 558 322 71 40 139 80 150 88 30 21 51 19 95 -9z m1420 -2012 c-7 -6 -78\n-48 -158 -94 -320 -184 -548 -315 -600 -345 -79 -46 -452 -260 -541 -312 -42\n-23 -80 -43 -83 -43 -3 0 -6 76 -6 168 l0 168 553 320 552 319 3 637 2 638 27\n17 c15 10 79 47 143 83 l115 66 3 -805 c2 -636 -1 -808 -10 -817z"})})})})},C=n(2684),F=n.n(C);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.config,n=void 0===t?c.DEFAULT_DIVIDER_CONFIG:t,r=T(T({},c.DEFAULT_DIVIDER_LOGO_CONFIG),n.logo);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:F().container,children:[(0,i.jsx)("div",{className:F().borderContainer,"aria-hidden":"true",children:(0,i.jsx)("div",{className:F().border})}),(0,i.jsx)("div",{className:F().iconContainer,children:(0,i.jsx)("span",{className:F().icon,children:(0,i.jsx)(D,{overrideClassName:r.className,fill:r.fill})})})]})})},M=n(690),L=n.n(M),U=function(e){return e.replace(/\s/g,"")},q=function(e){var t=e.item,n=t.title,r=t.role,a=t.company,s=t.email,c=t.mobile;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:L().container,children:[(0,i.jsx)("h4",{className:L().title,children:n}),(0,i.jsx)("div",{className:L().company,children:(0,i.jsx)("span",{children:a.url?(0,i.jsx)("a",{href:a.url,children:a.text}):a.text})}),(0,i.jsx)("div",{className:L().role,children:(0,i.jsx)("span",{children:r})}),(0,i.jsxs)("div",{children:[s&&(0,i.jsx)("div",{children:s.url?(0,i.jsx)("a",{href:s.url,children:s.text}):(0,i.jsx)("a",{href:"mailto:".concat(U(s.text)),children:s.text})}),c&&(0,i.jsx)("div",{children:c.url?(0,i.jsx)("a",{href:c.url,children:c.text}):(0,i.jsx)("a",{href:"callto:".concat(U(c.text)),children:c.text})})]})]})})},W=n(9313),V=n.n(W),G=function(e){var t=e.config.items,n=void 0===t?[]:t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:V().container,children:(0,i.jsx)("ul",{className:V().list,children:n.filter((function(e){return!e.meta||void 0===e.meta.show||!!e.meta.show})).map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)(q,{item:e})},t)}))})})})},H=n(7171),B=n.n(H),Z=n(8496),X=n.n(Z),Y=function(e){var t,n=e.item,r=n.title,a=n.value,c=n.linkTo,o=n.icon;return t=""===c?(0,i.jsx)(i.Fragment,{children:a}):(0,i.jsx)("a",{href:c,className:X().link,children:a}),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:X().container,children:[(0,i.jsx)("div",{className:X().iconContainer,title:r,children:(0,i.jsx)(s.G,{icon:o,size:"xs",fixedWidth:!0,className:X().icon})}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:X().content,children:t})})]})})},J=function(e){var t=e.items;return(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsx)("ul",{children:t.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)(Y,{item:e})},t)}))})})},Q=n(8263),K=n.n(Q),$=function(e){var t=e.title,n=void 0===t?"Profile Picture":t,r=e.image,a=void 0===r?c.DEFAULT_HEADER_IMAGE:r,s=a.path||"";return"static"===a.source&&(s="".concat((0,p.Z)()).concat(a.path)),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(_.default,{className:K().image,src:s,alt:n,title:n,width:300,height:300,quality:100,unoptimized:!0})})},ee=n(2249),te=n.n(ee),ne=function(e){var t=e.config,n=t.introText,r=t.fullName,a=t.image,s=void 0===a?c.DEFAULT_HEADER_IMAGE:a;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:te().container,children:[s.show&&""!==(s.path||"")&&(0,i.jsx)("div",{className:te().imageContainer,children:(0,i.jsx)($,{title:r,image:s})}),(0,i.jsxs)("div",{className:te().infoContainer,children:[n&&(0,i.jsx)("span",{className:te().introText,children:n}),(0,i.jsx)("h1",{className:te().title,children:r}),(0,i.jsx)("div",{className:te().links,children:(0,i.jsx)(J,{items:t.links})})]})]})})};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){var t,n=e.section;switch(n.ofType){case c.bA.HEADER:t=(0,i.jsx)(ne,{config:n.ofValue});break;case c.bA.DIVIDER:t=(0,i.jsx)(P,{config:n.ofValue});break;case c.bA.CERTIFICATIONS:t=(0,i.jsx)(h,{config:n.ofValue});break;case c.bA.WORK_EXPERIENCE:t=(0,i.jsx)(y,{items:n.ofValue});break;case c.bA.EDUCATION:t=(0,i.jsx)(z,{config:n.ofValue});break;case c.bA.CHARACTER_REFERENCES:t=(0,i.jsx)(G,{config:n.ofValue})}return re(re({},c.Yk),n.meta).displayHeader?(0,i.jsxs)("div",{className:B().container,children:[(0,i.jsxs)("div",{className:B().header,children:[n.icon&&(0,i.jsx)("div",{className:B().iconContainer,children:(0,i.jsx)(s.G,{icon:n.icon,size:"1x",fixedWidth:!0,className:B().icon})}),n.title&&(0,i.jsx)("div",{children:(0,i.jsx)("h2",{className:B().title,children:n.title})})]}),(0,i.jsx)("div",{className:B().content,children:t&&t})]}):(0,i.jsx)("div",{className:B().container,children:t&&t})},se=n(4925),ce=!0,oe=function(e){var t=e.config,n=t.sections,a=void 0===n?[]:n;return(0,r.useContext)(se.s).configService.send({type:"SET_CONTENT",content:t}),(0,i.jsx)(i.Fragment,{children:a.map((function(e){return(0,i.jsx)(ae,{section:e},e.title)}))})}},9880:function(e,t,n){"use strict";var i=n(4736),r=n(8468),a=n(1716);t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,a=void 0!==r&&r,u=e.priority,f=void 0!==u&&u,_=e.loading,p=e.className,x=e.quality,v=e.width,j=e.height,g=e.objectFit,N=e.objectPosition,k=e.loader,A=void 0===k?y:k,E=e.placeholder,O=void 0===E?"empty":E,z=e.blurDataURL,I=(0,s.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),S=n?"responsive":"intrinsic";"layout"in I&&(I.layout&&(S=I.layout),delete I.layout);var D="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var C=h(t)?t.default:t;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(z=z||C.blurDataURL,D=C.src,(!S||"fill"!==S)&&(j=j||C.height,v=v||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}t="string"===typeof t?t:D;var F=w(v),R=w(j),T=w(x);0;var P=!f&&("lazy"===_||"undefined"===typeof _);t&&t.startsWith("data:")&&(a=!0,P=!1);var M,L,U,q=(0,m.useIntersection)({rootMargin:"200px",disabled:!P}),W=i(q,2),V=W[0],G=W[1],H=!P||G,B=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:g,objectPosition:N},"blur"===O?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(z,'")')}:void 0);if("undefined"!==typeof F&&"undefined"!==typeof R&&"fill"!==S){var Z=R/F,X=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===S?(M={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},L={display:"block",boxSizing:"border-box",paddingTop:X}):"intrinsic"===S?(M={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},L={boxSizing:"border-box",display:"block",maxWidth:"100%"},U='<svg width="'.concat(F,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===S&&(M={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:F,height:R})}else"undefined"===typeof F&&"undefined"===typeof R&&"fill"===S&&(M={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Y={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};H&&(Y=b({src:t,unoptimized:a,layout:S,width:F,quality:T,sizes:n,loader:A}));return o.default.createElement("div",{style:M},L?o.default.createElement("div",{style:L},U?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(U))}):null):null,!H&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},I,b({src:t,unoptimized:a,layout:S,width:F,quality:T,sizes:n,loader:A}),{decoding:"async",style:B,className:p}))),o.default.createElement("img",Object.assign({},I,Y,{decoding:"async",className:p,ref:function(e){V(e),function(e,t){if("blur"===t&&e){var n=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?n():e.onload=n}}(e,O)},style:B})),f?o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src,imagesrcset:Y.srcSet,imagesizes:Y.sizes})):null)};var s=a(n(2987)),c=a(n(3358)),o=a(n(1738)),l=a(n(9460)),d=n(9135),u=n(8071),m=n(5536);var f=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=["auto=format","fit=max","w="+i],s="";r&&a.push("q="+r);a.length&&(s="?"+a.join("&"));return"".concat(t).concat(N(n)).concat(s)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(N(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(N(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]);function h(e){return void 0!==e.default}var _={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||u.imageConfigDefault,p=_.deviceSizes,x=_.imageSizes,v=_.loader,j=_.path,g=(_.domains,[].concat(r(p),r(x)));function b(e){var t=e.src,n=e.unoptimized,i=e.layout,a=e.width,s=e.quality,c=e.sizes,o=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,a=/(^|\s)(1?\d?\d)vw/g,s=[];i=a.exec(n);i)s.push(parseInt(i[2]));if(s.length){var c=.01*Math.min.apply(Math,s);return{widths:g.filter((function(e){return e>=p[0]*c})),kind:"w"}}return{widths:g,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:p,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return g.find((function(t){return t>=e}))||g[g.length-1]})))),kind:"x"}}(a,i,c),d=l.widths,u=l.kind,m=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map((function(e,n){return"".concat(o({src:t,quality:s,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:o({src:t,quality:s,width:d[m]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function y(e){var t=f.get(v);if(t)return t((0,c.default)({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function N(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,t){return e-t})),g.sort((function(e,t){return e-t}))},5536:function(e,t,n){"use strict";var i=n(4736);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,o=(0,r.useRef)(),l=(0,r.useState)(!1),d=i(l,2),u=d[0],m=d[1],f=(0,r.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||u||e&&e.tagName&&(o.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,a=i.observer,s=i.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(r))}}(e,(function(e){return e&&m(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){if(!s&&!u){var e=(0,a.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[f,u]};var r=n(1738),a=n(5519),s="undefined"!==typeof IntersectionObserver;var c=new Map},9135:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},7480:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5860)}])},6472:function(e){e.exports={default:"logo_default__3IVrJ"}},1899:function(e){e.exports={container:"certification-list_container__3haPJ",list:"certification-list_list__pkAd3",certification:"certification-list_certification__uOzEP",content:"certification-list_content__1Z3j3",title:"certification-list_title__3oDXs",meta:"certification-list_meta__1OBHs",key:"certification-list_key__1S5ue",value:"certification-list_value__d8E7z",divider:"certification-list_divider__DIEfv",children:"certification-list_children__3vcNl"}},690:function(e){e.exports={container:"reference-item_container__3XKZl",title:"reference-item_title__1fxLS",company:"reference-item_company__1W9f9",role:"reference-item_role__kgMRd"}},9313:function(e){e.exports={container:"section_container__2jZ0g",list:"section_list__-6sNg"}},2684:function(e){e.exports={container:"section_container__3cCQm",borderContainer:"section_borderContainer__1bGgo",border:"section_border__Jft3t",iconContainer:"section_iconContainer__2EZtD",icon:"section_icon__3R9h8"}},1915:function(e){e.exports={title:"education-item_title__1TX-u",meta:"education-item_meta__3gH6w",from:"education-item_from__1rCAY",divider:"education-item_divider__3o4tw"}},6675:function(e){e.exports={container:"section_container__2-dLA",list:"section_list__-Rlz4"}},8496:function(e){e.exports={container:"link-item_container__1vuHQ",iconContainer:"link-item_iconContainer__1oSnn",icon:"link-item_icon__Xe3Ek",link:"link-item_link__mWtcP",content:"link-item_content__3EDgA"}},8263:function(e){e.exports={image:"profile-image_image__yYa0P"}},2249:function(e){e.exports={container:"section_container__2aERl","aspect-w-1":"section_aspect-w-1__3DV-v","aspect-w-2":"section_aspect-w-2__TMXWV","aspect-w-3":"section_aspect-w-3__2zxvo","aspect-w-4":"section_aspect-w-4__2BkdR","aspect-w-5":"section_aspect-w-5__3Q-1f","aspect-w-6":"section_aspect-w-6__3AcnJ","aspect-w-7":"section_aspect-w-7__2PWok","aspect-w-8":"section_aspect-w-8__3PtYR","aspect-w-9":"section_aspect-w-9__2F-uU","aspect-w-10":"section_aspect-w-10__1-Sgl","aspect-w-11":"section_aspect-w-11__drsSS","aspect-w-12":"section_aspect-w-12__1eYgr","aspect-w-13":"section_aspect-w-13__2pWBf","aspect-w-14":"section_aspect-w-14__3Mn_T","aspect-w-15":"section_aspect-w-15__2_QY8","aspect-w-16":"section_aspect-w-16__iM17u",imageContainer:"section_imageContainer__362ic",infoContainer:"section_infoContainer__-MiVM",introText:"section_introText__2ttaz",title:"section_title__2I3mV",links:"section_links__3PSko"}},7171:function(e){e.exports={container:"section_container__t9c91",header:"section_header__NvY8S",iconContainer:"section_iconContainer__24GIW",icon:"section_icon__5FKAn",title:"section_title__zRnY5",content:"section_content__2v2d-"}},3842:function(e){e.exports={wrapper:"company-item_wrapper__2_NrZ",line:"company-item_line__2icG1",content:"company-item_content__3T9Uu",logo:"company-item_logo__2hJDi",link:"company-item_link__3z92q",image:"company-item_image__3vXzU",description:"company-item_description__3p5DO",title:"company-item_title__vQnBW",address:"company-item_address__iyjES",roles:"company-item_roles__2w8R3",list:"company-item_list__397iu"}},3055:function(e){e.exports={title:"role-item_title__1URoo",dates:"role-item_dates__34Zpm",start:"role-item_start__3AtWq",end:"role-item_end__pOrKt",description:"role-item_description__a2qSJ"}},8071:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},800:function(e,t,n){e.exports=n(9880)}},function(e){e.O(0,[888,179],(function(){return t=7480,e(e.s=t);var t}));var t=e.O();_N_E=t}]);