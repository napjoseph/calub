(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1940:function(e,n,t){"use strict";t.d(n,{d:function(){return i}});var i={subHeaderItems:["credentialType","credentialId","issuingOrganization","issuedDate","gradeAchieved"],issuingOrganizationMapping:[],credentialTypeMapping:[]}},9239:function(e,n,t){"use strict";t.d(n,{$:function(){return i},a:function(){return r}});var i={className:"h-8 w-8 text-gray-500",fill:"#a8abaf"},r={logo:i}},7672:function(){},6392:function(e,n,t){"use strict";t.d(n,{h:function(){return i}});var i={show:!1}},7135:function(e,n,t){"use strict";t.d(n,{DEFAULT_CERTIFICATIONS_META:function(){return i.d},DEFAULT_DIVIDER_CONFIG:function(){return r.a},DEFAULT_DIVIDER_LOGO_CONFIG:function(){return r.$},DEFAULT_HEADER_IMAGE:function(){return s.h}});var i=t(1940),r=t(9239),a=t(7672);t.o(a,"DEFAULT_FOOTER_CONFIG")&&t.d(n,{DEFAULT_FOOTER_CONFIG:function(){return a.DEFAULT_FOOTER_CONFIG}}),t.o(a,"DEFAULT_HEADER_IMAGE")&&t.d(n,{DEFAULT_HEADER_IMAGE:function(){return a.DEFAULT_HEADER_IMAGE}});var s=t(6392),c=t(594);t.o(c,"DEFAULT_FOOTER_CONFIG")&&t.d(n,{DEFAULT_FOOTER_CONFIG:function(){return c.DEFAULT_FOOTER_CONFIG}})},594:function(){},4840:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return re},default:function(){return ae}});var i,r=t(1030),a=t(1738),s={};!function(e){e.HEADER="header",e.DIVIDER="divider",e.WORK_EXPERIENCE="work-experience",e.CERTIFICATIONS="certifications",e.EDUCATION="education"}(i||(i={}));var c={displayHeader:!0},o=t(7135),l={links:[]},d=t(252),u=t(8425),m=t(1899),f=t.n(m),_=function(e,n){var t=[];return(e.subHeaderItems||[]).map((function(i){switch(i){case"credentialType":t.push((0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:f().key,children:"Credential Type:"}),(0,r.jsx)("span",{className:f().value,children:h(e,n)})]}));break;case"credentialId":t.push((0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:f().key,children:"Credential ID:"}),(0,r.jsx)("span",{className:f().value,children:(0,r.jsx)("a",{href:n.verificationUrl,className:f().url,children:n.credentialId})})]}));break;case"issuingOrganization":t.push((0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:f().key,children:"Issuer:"}),(0,r.jsx)("span",{className:f().value,children:p(e,n)})]}));break;case"issuedDate":t.push((0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:f().key,children:"Issued Date:"}),(0,r.jsx)("span",{className:f().value,children:n.issuedDate})]}));break;case"gradeAchieved":t.push((0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:f().key,children:"Grade Achieved:"}),(0,r.jsx)("span",{className:f().value,children:n.gradeAchieved})]}))}})),(0,r.jsx)(r.Fragment,{children:t.map((function(e,n){return(0,r.jsxs)(a.Fragment,{children:[!!n&&(0,r.jsx)("span",{className:f().divider,children:"|"}),e]},n)}))})},h=function(e,n){var t=n.credentialType||"",i=e.credentialTypeMapping.filter((function(e){return e.key===t}));if(0===i.length)return(0,r.jsx)(r.Fragment,{children:n.credentialType});var a=i[0];return(0,r.jsx)(r.Fragment,{children:a.displayName})},p=function(e,n){var t=n.issuingOrganization||"",i=e.issuingOrganizationMapping.filter((function(e){return e.key===t}));if(0===i.length)return(0,r.jsx)(r.Fragment,{children:n.issuingOrganization});var a=i[0];return a.url?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("a",{href:a.url,children:a.displayName})}):(0,r.jsx)(r.Fragment,{children:a.displayName})},v=function e(n){var t=n.meta,i=void 0===t?o.DEFAULT_CERTIFICATIONS_META:t,a=n.items,s=void 0===a?[]:a;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:f().container,children:(0,r.jsx)("ul",{className:f().list,children:s.map((function(n){var t=(0,r.jsx)("h3",{className:f().title,children:n.title});return n.credentialUrl&&""!==n.credentialUrl&&(t=(0,r.jsx)("h3",{className:f().title,children:(0,r.jsx)("a",{href:n.credentialUrl,children:n.title})})),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:f().certification,children:[(0,r.jsxs)("div",{className:f().content,children:[t,(0,r.jsx)("div",{className:f().meta,children:_(i,n)})]}),n.children&&(0,r.jsx)("div",{className:f().children,children:(0,r.jsx)(e,{meta:i,items:n.children})})]})},n.title)}))})})})},x=function(e){var n=e.config,t=n.meta||o.DEFAULT_CERTIFICATIONS_META;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v,{meta:t,items:n.items})})},g=t(800),j=t(3055),b=t.n(j),w=function(e){var n=e.item,t=n.title,i=n.canadaClassification,a=n.startDate,s=n.endDate,c=n.description;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h6",{className:b().title,title:t,children:i||t}),(0,r.jsxs)("p",{className:b().dates,children:[(0,r.jsx)("span",{className:b().start,children:a}),"\u2013",(0,r.jsx)("span",{className:b().end,children:s})]}),(0,r.jsx)("p",{className:b().description,children:c})]})},N=t(3842),y=t.n(N),E=function(e){var n=e.item,t=e.isLast,i=void 0!==t&&t,a=n.title,s=n.url,c=n.address,o=n.logoSrc,l=n.logoAlt,d=n.roles;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:y().wrapper,children:[!i&&(0,r.jsx)("span",{className:y().line,"aria-hidden":"true"}),(0,r.jsxs)("div",{className:y().content,children:[(0,r.jsx)("div",{className:y().logo,children:(0,r.jsx)("a",{href:s,className:y().link,children:(0,r.jsx)(g.default,{className:y().image,src:o,alt:l,width:24,height:24})})}),(0,r.jsxs)("div",{className:y().description,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:y().title,children:(0,r.jsx)("a",{href:s,className:y().link,children:a})}),(0,r.jsx)("p",{className:y().address,children:c})]}),(0,r.jsx)("div",{className:y().roles,children:(0,r.jsx)("ul",{className:y().list,children:d.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(w,{item:e})},n)}))})})]})]})]})})},A=function(e){var n=e.items;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{children:n.map((function(e,t){return(0,r.jsx)("li",{children:(0,r.jsx)(E,{item:e,isLast:t===n.length-1})},e.title)}))})})},O=t(1915),I=t.n(O),D=function(e){var n=e.item;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:I().title,children:n.title}),(0,r.jsxs)("div",{className:I().meta,children:[(0,r.jsx)("span",{className:I().from,children:(0,r.jsx)("a",{href:n.from.url,children:n.from.name})}),(0,r.jsx)("span",{className:I().divider,children:"|"}),(0,r.jsx)("span",{children:n.from.address})]}),(0,r.jsx)("div",{className:I().meta,children:(0,r.jsxs)("span",{className:I().dates,children:[(0,r.jsx)("span",{className:I().prefix,children:""}),(0,r.jsx)("span",{className:I().start,children:n.dates.start}),(0,r.jsx)("span",{className:I().to,children:" to "}),(0,r.jsx)("span",{className:I().end,children:n.dates.end}),(0,r.jsx)("span",{className:I().suffix,children:""})]})})]})})},k=t(6675),F=t.n(k),T=function(e){var n=e.config.items;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:F().container,children:(0,r.jsx)("ul",{className:F().list,children:n.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(D,{item:e})},n)}))})})})},C=t(6472),z=t.n(C),R=function(e){var n=e.overrideClassName,t=void 0===n?z().default:n,i=e.fill,a=void 0===i?"#a8abaf":i;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("svg",{className:t,version:"1.0",xmlns:"http://www.w3.org/2000/svg",height:"437.000000pt",viewBox:"0 0 437.000000 437.000000",preserveAspectRatio:"xMidYMid meet",children:(0,r.jsx)("g",{transform:"translate(0.000000,437.000000) scale(0.100000,-0.100000)",fill:"none",stroke:"none",children:(0,r.jsx)("path",{fill:a,d:"M2105 4060 c-125 -73 -266 -155 -440 -255 -241 -138 -482 -278 -655\n-378 -85 -49 -230 -132 -322 -185 l-168 -96 0 -962 0 -962 42 -25 c58 -32 350\n-201 471 -270 53 -32 140 -82 192 -112 52 -30 139 -80 193 -112 53 -31 153\n-88 222 -128 69 -40 168 -97 220 -127 52 -30 140 -81 195 -113 55 -31 105 -62\n112 -67 12 -10 38 3 268 137 213 124 294 171 418 242 70 40 184 106 255 146\n70 41 171 99 225 130 53 32 141 82 195 114 53 31 148 85 210 121 l112 64 0\n962 0 962 -107 61 c-60 33 -164 93 -233 133 -290 168 -464 268 -615 355 -88\n51 -205 118 -260 150 -55 32 -174 101 -265 153 -91 52 -169 98 -175 102 -5 3\n-46 -14 -90 -40z m-7 -390 l-3 -164 -55 -31 c-64 -36 -382 -220 -655 -378\n-104 -61 -236 -137 -292 -170 l-103 -59 0 -638 0 -638 -132 -76 c-73 -41 -141\n-78 -151 -82 -16 -6 -17 35 -15 801 l3 808 70 42 c39 23 194 113 345 200 559\n322 797 460 885 511 50 29 93 49 98 45 4 -4 6 -81 5 -171z m530 -21 c191 -111\n363 -210 382 -221 317 -180 570 -328 570 -333 0 -2 -55 -36 -122 -76 -68 -39\n-153 -89 -190 -111 l-68 -40 0 -637 c0 -595 -1 -637 -17 -647 -20 -12 -220\n-128 -413 -239 -150 -87 -525 -302 -560 -323 -25 -14 -31 -12 -150 59 -69 41\n-191 113 -272 159 l-147 85 -1 583 c0 464 3 582 13 576 12 -8 522 -404 846\n-657 198 -155 353 -275 382 -296 19 -13 19 -2 19 797 l0 811 -82 49 c-77 45\n-153 90 -433 254 l-110 64 -3 172 c-1 95 0 172 3 172 3 0 162 -91 353 -201z\nm-390 -323 c20 -13 82 -50 137 -82 55 -32 144 -84 197 -115 53 -32 111 -65\n127 -74 l31 -16 0 -579 c0 -319 -3 -580 -7 -580 -5 0 -69 48 -143 106 -74 58\n-154 120 -176 137 -23 18 -99 77 -170 133 -71 55 -272 211 -446 347 l-318 246\n0 -812 0 -812 153 -89 c83 -49 225 -132 315 -185 l162 -96 0 -167 c0 -131 -3\n-168 -13 -168 -7 0 -17 4 -22 9 -6 5 -100 61 -210 124 -110 63 -256 147 -325\n187 -69 39 -263 151 -432 248 -170 97 -308 179 -308 182 0 3 57 39 128 79 70\n41 154 91 187 111 l60 37 5 639 5 639 80 46 c44 25 125 72 180 104 120 70 382\n221 558 322 71 40 139 80 150 88 30 21 51 19 95 -9z m1420 -2012 c-7 -6 -78\n-48 -158 -94 -320 -184 -548 -315 -600 -345 -79 -46 -452 -260 -541 -312 -42\n-23 -80 -43 -83 -43 -3 0 -6 76 -6 168 l0 168 553 320 552 319 3 637 2 638 27\n17 c15 10 79 47 143 83 l115 66 3 -805 c2 -636 -1 -808 -10 -817z"})})})})},S=t(2684),L=t.n(S);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=function(e){var n=e.config,t=void 0===n?o.DEFAULT_DIVIDER_CONFIG:n,i=U(U({},o.DEFAULT_DIVIDER_LOGO_CONFIG),t.logo);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:L().container,children:[(0,r.jsx)("div",{className:L().borderContainer,"aria-hidden":"true",children:(0,r.jsx)("div",{className:L().border})}),(0,r.jsx)("div",{className:L().iconContainer,children:(0,r.jsx)("span",{className:L().icon,children:(0,r.jsx)(R,{overrideClassName:i.className,fill:i.fill})})})]})})},G=t(7171),V=t.n(G),q=t(8496),H=t.n(q),W=function(e){var n,t=e.item,i=t.title,a=t.value,s=t.linkTo,c=t.icon;return n=""===s?(0,r.jsx)(r.Fragment,{children:a}):(0,r.jsx)("a",{href:s,className:H().link,children:a}),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:H().container,children:[(0,r.jsx)("div",{className:H().iconContainer,title:i,children:(0,r.jsx)(u.G,{icon:c,size:"xs",fixedWidth:!0,className:H().icon})}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:H().content,children:n})})]})})},B=function(e){var n=e.items;return(0,r.jsx)(r.Fragment,{children:n&&(0,r.jsx)("ul",{children:n.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(W,{item:e})},n)}))})})},X=t(9973),J=t(8263),Y=t.n(J),Z=function(e){var n=e.title,t=void 0===n?"Profile Picture":n,i=e.image,a=void 0===i?o.DEFAULT_HEADER_IMAGE:i,s=a.path||"";return"static"===a.source&&(s="".concat((0,X.Z)()).concat(a.path)),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(g.default,{className:Y().image,src:s,alt:t,title:t,width:300,height:300,quality:100,unoptimized:!0})})},Q=t(2249),K=t.n(Q),$=function(e){var n=e.config,t=n.introText,i=n.fullName,a=n.image,s=void 0===a?o.DEFAULT_HEADER_IMAGE:a;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:K().container,children:[s.show&&""!==(s.path||"")&&(0,r.jsx)("div",{className:K().imageContainer,children:(0,r.jsx)(Z,{title:i,image:s})}),(0,r.jsxs)("div",{className:K().infoContainer,children:[t&&(0,r.jsx)("span",{className:K().introText,children:t}),(0,r.jsx)("h1",{className:K().title,children:i}),(0,r.jsx)("div",{className:K().links,children:(0,r.jsx)(B,{items:n.links})})]})]})})};function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var te=function(e){var n,t=e.section;switch(t.ofType){case i.HEADER:n=(0,r.jsx)($,{config:t.ofValue});break;case i.DIVIDER:n=(0,r.jsx)(M,{config:t.ofValue});break;case i.CERTIFICATIONS:n=(0,r.jsx)(x,{config:t.ofValue});break;case i.WORK_EXPERIENCE:n=(0,r.jsx)(A,{items:t.ofValue});break;case i.EDUCATION:n=(0,r.jsx)(T,{config:t.ofValue})}return ne(ne({},c),t.meta).displayHeader?(0,r.jsxs)("div",{className:V().container,children:[(0,r.jsxs)("div",{className:V().header,children:[t.icon&&(0,r.jsx)("div",{className:V().iconContainer,children:(0,r.jsx)(u.G,{icon:t.icon,size:"1x",fixedWidth:!0,className:V().icon})}),t.title&&(0,r.jsx)("div",{children:(0,r.jsx)("h2",{className:V().title,children:t.title})})]}),(0,r.jsx)("div",{className:V().content,children:n&&n})]}):(0,r.jsx)("div",{className:V().container,children:n&&n})},ie=t(6266),re=!0,ae=function(e){var n=e.config,t=n.meta,i=n.sections,c=(0,a.useContext)(ie.s),o=((t||s).footer||l).links||[];return c.services.footerLinkList.send({type:"SET_CONTENT",content:o}),(0,r.jsx)(r.Fragment,{children:i.map((function(e){return(0,r.jsx)(te,{section:e},e.title)}))})}},9880:function(e,n,t){"use strict";var i=t(4736),r=t(8468),a=t(1716);n.default=function(e){var n=e.src,t=e.sizes,r=e.unoptimized,a=void 0!==r&&r,u=e.priority,f=void 0!==u&&u,h=e.loading,p=e.className,v=e.quality,x=e.width,g=e.height,j=e.objectFit,y=e.objectPosition,E=e.loader,A=void 0===E?N:E,O=e.placeholder,I=void 0===O?"empty":O,D=e.blurDataURL,k=(0,s.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),F=t?"responsive":"intrinsic";"layout"in k&&(k.layout&&(F=k.layout),delete k.layout);var T="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(n)){var C=_(n)?n.default:n;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(D=D||C.blurDataURL,T=C.src,(!F||"fill"!==F)&&(g=g||C.height,x=x||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}n="string"===typeof n?n:T;var z=w(x),R=w(g),S=w(v);0;var L=!f&&("lazy"===h||"undefined"===typeof h);n&&n.startsWith("data:")&&(a=!0,L=!1);var P,U,M,G=(0,m.useIntersection)({rootMargin:"200px",disabled:!L}),V=i(G,2),q=V[0],H=V[1],W=!L||H,B=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:y},"blur"===I?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(D,'")')}:void 0);if("undefined"!==typeof z&&"undefined"!==typeof R&&"fill"!==F){var X=R/z,J=isNaN(X)?"100%":"".concat(100*X,"%");"responsive"===F?(P={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={display:"block",boxSizing:"border-box",paddingTop:J}):"intrinsic"===F?(P={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={boxSizing:"border-box",display:"block",maxWidth:"100%"},M='<svg width="'.concat(z,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===F&&(P={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:z,height:R})}else"undefined"===typeof z&&"undefined"===typeof R&&"fill"===F&&(P={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Y={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};W&&(Y=b({src:n,unoptimized:a,layout:F,width:z,quality:S,sizes:t,loader:A}));return o.default.createElement("div",{style:P},U?o.default.createElement("div",{style:U},M?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(M))}):null):null,!W&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},k,b({src:n,unoptimized:a,layout:F,width:z,quality:S,sizes:t,loader:A}),{decoding:"async",style:B,className:p}))),o.default.createElement("img",Object.assign({},k,Y,{decoding:"async",className:p,ref:function(e){q(e),function(e,n){if("blur"===n&&e){var t=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?t():e.onload=t}}(e,I)},style:B})),f?o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src,imagesrcset:Y.srcSet,imagesizes:Y.sizes})):null)};var s=a(t(2987)),c=a(t(3358)),o=a(t(1738)),l=a(t(9460)),d=t(9135),u=t(8071),m=t(5536);var f=new Map([["imgix",function(e){var n=e.root,t=e.src,i=e.width,r=e.quality,a=["auto=format","fit=max","w="+i],s="";r&&a.push("q="+r);a.length&&(s="?"+a.join("&"));return"".concat(n).concat(y(t)).concat(s)}],["cloudinary",function(e){var n=e.root,t=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(n).concat(a).concat(y(t))}],["akamai",function(e){var n=e.root,t=e.src,i=e.width;return"".concat(n).concat(y(t),"?imwidth=").concat(i)}],["default",function(e){var n=e.root,t=e.src,i=e.width,r=e.quality;0;return"".concat(n,"?url=").concat(encodeURIComponent(t),"&w=").concat(i,"&q=").concat(r||75)}]]);function _(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||u.imageConfigDefault,p=h.deviceSizes,v=h.imageSizes,x=h.loader,g=h.path,j=(h.domains,[].concat(r(p),r(v)));function b(e){var n=e.src,t=e.unoptimized,i=e.layout,a=e.width,s=e.quality,c=e.sizes,o=e.loader;if(t)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,n,t){if(t&&("fill"===n||"responsive"===n)){for(var i,a=/(^|\s)(1?\d?\d)vw/g,s=[];i=a.exec(t);i)s.push(parseInt(i[2]));if(s.length){var c=.01*Math.min.apply(Math,s);return{widths:j.filter((function(e){return e>=p[0]*c})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:p,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return j.find((function(n){return n>=e}))||j[j.length-1]})))),kind:"x"}}(a,i,c),d=l.widths,u=l.kind,m=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map((function(e,t){return"".concat(o({src:n,quality:s,width:e})," ").concat("w"===u?e:t+1).concat(u)})).join(", "),src:o({src:n,quality:s,width:d[m]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function N(e){var n=f.get(x);if(n)return n((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(x))}function y(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,n){return e-n})),j.sort((function(e,n){return e-n}))},5536:function(e,n,t){"use strict";var i=t(4736);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=(0,r.useRef)(),l=(0,r.useState)(!1),d=i(l,2),u=d[0],m=d[1],f=(0,r.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||u||e&&e.tagName&&(o.current=function(e,n,t){var i=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:r,elements:i}),t}(t),r=i.id,a=i.observer,s=i.elements;return s.set(e,n),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(r))}}(e,(function(e){return e&&m(e)}),{rootMargin:n}))}),[t,n,u]);return(0,r.useEffect)((function(){if(!s&&!u){var e=(0,a.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[f,u]};var r=t(1738),a=t(5519),s="undefined"!==typeof IntersectionObserver;var c=new Map},9135:function(e,n){"use strict";n.__esModule=!0,n.toBase64=function(e){return window.btoa(e)}},7480:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4840)}])},6472:function(e){e.exports={default:"logo_default__3IVrJ"}},1899:function(e){e.exports={container:"certification-list_container__3haPJ",list:"certification-list_list__pkAd3",certification:"certification-list_certification__uOzEP",content:"certification-list_content__1Z3j3",title:"certification-list_title__3oDXs",meta:"certification-list_meta__1OBHs",key:"certification-list_key__1S5ue",value:"certification-list_value__d8E7z",divider:"certification-list_divider__DIEfv",children:"certification-list_children__3vcNl"}},2684:function(e){e.exports={container:"section_container__3cCQm",borderContainer:"section_borderContainer__1bGgo",border:"section_border__Jft3t",iconContainer:"section_iconContainer__2EZtD",icon:"section_icon__3R9h8"}},1915:function(e){e.exports={title:"education-item_title__1TX-u",meta:"education-item_meta__3gH6w",from:"education-item_from__1rCAY",divider:"education-item_divider__3o4tw"}},6675:function(e){e.exports={container:"section_container__2-dLA",list:"section_list__-Rlz4"}},8496:function(e){e.exports={container:"link-item_container__1vuHQ",iconContainer:"link-item_iconContainer__1oSnn",icon:"link-item_icon__Xe3Ek",link:"link-item_link__mWtcP",content:"link-item_content__3EDgA"}},8263:function(e){e.exports={image:"profile-image_image__yYa0P"}},2249:function(e){e.exports={container:"section_container__2aERl","aspect-w-1":"section_aspect-w-1__3DV-v","aspect-w-2":"section_aspect-w-2__TMXWV","aspect-w-3":"section_aspect-w-3__2zxvo","aspect-w-4":"section_aspect-w-4__2BkdR","aspect-w-5":"section_aspect-w-5__3Q-1f","aspect-w-6":"section_aspect-w-6__3AcnJ","aspect-w-7":"section_aspect-w-7__2PWok","aspect-w-8":"section_aspect-w-8__3PtYR","aspect-w-9":"section_aspect-w-9__2F-uU","aspect-w-10":"section_aspect-w-10__1-Sgl","aspect-w-11":"section_aspect-w-11__drsSS","aspect-w-12":"section_aspect-w-12__1eYgr","aspect-w-13":"section_aspect-w-13__2pWBf","aspect-w-14":"section_aspect-w-14__3Mn_T","aspect-w-15":"section_aspect-w-15__2_QY8","aspect-w-16":"section_aspect-w-16__iM17u",imageContainer:"section_imageContainer__362ic",infoContainer:"section_infoContainer__-MiVM",introText:"section_introText__2ttaz",title:"section_title__2I3mV",links:"section_links__3PSko"}},7171:function(e){e.exports={container:"section_container__t9c91",header:"section_header__NvY8S",iconContainer:"section_iconContainer__24GIW",icon:"section_icon__5FKAn",title:"section_title__zRnY5",content:"section_content__2v2d-"}},3842:function(e){e.exports={wrapper:"company-item_wrapper__2_NrZ",line:"company-item_line__2icG1",content:"company-item_content__3T9Uu",logo:"company-item_logo__2hJDi",link:"company-item_link__3z92q",image:"company-item_image__3vXzU",description:"company-item_description__3p5DO",title:"company-item_title__vQnBW",address:"company-item_address__iyjES",roles:"company-item_roles__2w8R3",list:"company-item_list__397iu"}},3055:function(e){e.exports={title:"role-item_title__1URoo",dates:"role-item_dates__34Zpm",start:"role-item_start__3AtWq",end:"role-item_end__pOrKt",description:"role-item_description__a2qSJ"}},8071:function(e,n){"use strict";n.__esModule=!0,n.imageConfigDefault=n.VALID_LOADERS=void 0;n.VALID_LOADERS=["default","imgix","cloudinary","akamai"];n.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},800:function(e,n,t){e.exports=t(9880)}},function(e){e.O(0,[888,179],(function(){return n=7480,e(e.s=n);var n}));var n=e.O();_N_E=n}]);