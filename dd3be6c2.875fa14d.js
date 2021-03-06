(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},c=Object.keys(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=r.a.createContext({}),u=function(n){var e=r.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=u(n.components);return r.a.createElement(p.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},h=r.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,c=n.originalType,i=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),s=u(t),h=a,m=s["".concat(i,".").concat(h)]||s[h]||b[h]||c;return t?r.a.createElement(m,l(l({ref:e},p),{},{components:t})):r.a.createElement(m,l({ref:e},p))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var c=t.length,i=new Array(c);i[0]=h;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var p=2;p<c;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},95:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return l})),t.d(e,"toc",(function(){return o})),t.d(e,"default",(function(){return u}));var a=t(3),r=t(7),c=(t(0),t(102)),i={title:"Conditional kh\xf4ng c\u1ea7n if else ho\u1eb7c switch trong JavaScript",tags:["JavaScript"]},l={permalink:"/2020/09/01/conditional-khong-can-if-else-hoac-switch-trong-javascript",source:"@site/blog/2020-09-01-conditional-khong-can-if-else-hoac-switch-trong-javascript.md",description:"M\u1ed9t b\xe0i note nhanh v\xe0 ng\u1eafn chia s\u1ebb v\u1ec1 s\u1ef1 hay ho c\u1ee7a JavaScript. M\u1edbi \u0111\xe2y m\xecnh g\u1eb7p m\u1ed9t t\xecnh hu\u1ed1ng nho nh\u1ecf nh\u01b0 sau.",date:"2020-09-01T00:00:00.000Z",tags:[{label:"JavaScript",permalink:"/tags/java-script"}],title:"Conditional kh\xf4ng c\u1ea7n if else ho\u1eb7c switch trong JavaScript",readingTime:2.8,truncated:!0,prevItem:{title:"10 b\xe0i vi\u1ebft hay nh\u1ea5t m\xecnh \u0111\u1ecdc trong n\u0103m 2020",permalink:"/2021/02/06/10-bai-viet-hay-nhat-minh-doc-trong-nam-2020"},nextItem:{title:"10 terminal tools gi\xfap b\u1ea1n t\u0103ng hi\u1ec7u su\u1ea5t l\xe0m vi\u1ec7c",permalink:"/2020/05/02/10-terminal-tools-giup-ban-tang-hieu-suat-lam-viec"}},o=[{value:"Round 1: <code>if else</code>",id:"round-1-if-else",children:[]},{value:"Round 2: <code>switch case</code>",id:"round-2-switch-case",children:[]},{value:"Round 3: Object mapping",id:"round-3-object-mapping",children:[]}],p={toc:o};function u(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"M\u1ed9t b\xe0i note nhanh v\xe0 ng\u1eafn chia s\u1ebb v\u1ec1 s\u1ef1 hay ho c\u1ee7a JavaScript. M\u1edbi \u0111\xe2y m\xecnh g\u1eb7p m\u1ed9t t\xecnh hu\u1ed1ng nho nh\u1ecf nh\u01b0 sau."),Object(c.b)("p",null,"C\xf3 m\u1ed9t entity ",Object(c.b)("inlineCode",{parentName:"p"},"User")," v\u1edbi 2 tr\u01b0\u1eddng: ",Object(c.b)("inlineCode",{parentName:"p"},"status")," v\xe0 ",Object(c.b)("inlineCode",{parentName:"p"},"type"),". M\u1ed7i tr\u01b0\u1eddng l\u1ea7n l\u01b0\u1ee3t c\xf3 nh\u1eefng gi\xe1 tr\u1ecb sau:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"status"),": ",Object(c.b)("inlineCode",{parentName:"li"},"['NO_ACCESS', 'PENDING_SUBSCRIBE', 'SUBSCRIBED', 'PENDING_CANCEL']")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"type"),": ",Object(c.b)("inlineCode",{parentName:"li"},"['NO_ACCESS', 'DELAYED', 'CLICK2REFRESH', 'REALTIME']"))),Object(c.b)("p",null,"Nhi\u1ec7m v\u1ee5 c\u1ee7a m\xecnh l\xe0 vi\u1ebft m\u1ed9t API \u0111\u1ec3 update 2 tr\u01b0\u1eddng tr\xean:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"PUT /users/:user_id")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": "PENDING_SUBSCRIBE",\n    "type": "REALTIME"\n}\n')))),Object(c.b)("p",null,"V\xec 2 tr\u01b0\u1eddng n\xe0y c\xf3 m\u1ed1i li\xean h\u1ec7 v\u1edbi nhau, n\xean sau khi v\u1eadn d\u1ee5ng h\u1ebft n\u0103ng l\u1ef1c to\xe1n h\u1ecdc cao c\u1ea5p t\u1eeb 12 n\u0103m \u0111\xe8n v\u1edf bonus v\xe0i n\u0103m t\u1ef1 \u0111i ch\u1ee3 mua rau c\u1ee7a m\xecnh, m\xecnh t\xednh ra \u0111\u01b0\u1ee3c c\xf3 t\u1ea5t c\u1ea3 16 tr\u01b0\u1eddng h\u1ee3p c\u1ea7n x\u1eed l\xfd \u1edf trong API tr\xean. Kh\xf4ng s\u1ee3 k\u1ebb th\xf9 \u0111\xf4ng, m\xecnh s\u1eafn \u1ed1ng tay ra tr\u1eadn. Sau \u0111\xe2y l\xe0 t\u01b0\u1eddng thu\u1eadt di\u1ec5n bi\u1ebfn tr\u1eadn \u0111\u1ea5u."),Object(c.b)("h3",{id:"round-1-if-else"},"Round 1: ",Object(c.b)("inlineCode",{parentName:"h3"},"if else")),Object(c.b)("p",null,"Ban \u0111\u1ea7u, m\xecnh th\u1eed code ngay v\u1edbi ki\u1ec3u ",Object(c.b)("inlineCode",{parentName:"p"},"if else")," truy\u1ec1n th\u1ed1ng."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"if (user.status === 'NO_ACCESS') {\n    if (user.type === 'NO_ACCESS') {\n        // ...\n    } else if (user.type === 'DELAYED') {\n        // ...\n    } else if (user.type === 'CLICK2REFRESH') {\n        // ...\n    } else if (user.type === 'REALTIME') {\n        // ...\n    }\n} else if (user.status === 'PENDING_SUBSCRIBE') {\n    if (user.type === 'NO_ACCESS') {\n        // ...\n    } else if (user.type === 'DELAYED') {\n        // ...\n    } else if ...\n} else if ...\n")),Object(c.b)("p",null,"V\xe0 ch\u1eb3ng c\u1ea7n ph\u1ea3i n\xf3i, \u0111\u1ed1ng code tr\xean nh\xecn nh\u01b0 shit v\u1eady. Qu\xe1 r\u1ed1i r\u1eafm v\xe0 n\u1ebfu kh\xf4ng c\u1ea9n th\u1eadn th\xec r\u1ea5t d\u1ec5 \u0111\u1ec3 vi\u1ebft sai t\xean tr\u01b0\u1eddng ho\u1eb7c gi\xe1 tr\u1ecb so s\xe1nh. V\xec v\u1eady, m\xecnh \u0111\xe3 chuy\u1ec3n sang d\xf9ng v\u0169 kh\xed l\u1ee3i h\u1ea1i h\u01a1n."),Object(c.b)("h3",{id:"round-2-switch-case"},"Round 2: ",Object(c.b)("inlineCode",{parentName:"h3"},"switch case")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"switch (user.status) {\n    case 'NO_ACCESS':\n        switch (user.type) {\n            case 'NO_ACCESS':\n                // ...\n                break;\n            case 'DELAYED':\n                // ...\n                break;\n            case 'CLICK2REFRESH':\n                // ...\n                break;\n            case 'REALTIME':\n                // ...\n                break;\n        }\n        break;\n    case 'PENDING_SUBSCRIBE':\n        // ...\n        break;\n    case 'SUBSCRIBED':\n        // ...\n        break;\n    case 'PENDING_CANCEL':\n        // ...\n        break;\n}\n")),Object(c.b)("p",null,"Tuy code \u0111\xe3 nh\xecn g\u1ecdn h\u01a1n, nh\u01b0ng c\u01a1 b\u1ea3n n\xf3 v\u1eabn kh\xf4ng kh\xe1c ",Object(c.b)("inlineCode",{parentName:"p"},"if else")," l\xe0 m\u1ea5y. C\xe0ng nhi\u1ec1u ",Object(c.b)("inlineCode",{parentName:"p"},"status")," v\xe0 ",Object(c.b)("inlineCode",{parentName:"p"},"type")," th\xec \u0111o\u1ea1n code s\u1ebd c\xe0ng d\xe0i v\xe0 kh\xf3 \u0111\u1ecdc. \u0110\u1ebfn l\xfac n\xe0y, m\xecnh \u0111\xe0nh ph\u1ea3i v\u1eadn n\u1ed9i c\xf4ng, t\u1eadn d\u1ee5ng t\u1ed1i \u0111a t\xednh dynamic c\u1ee7a JavaScript, v\xe0 k\u1ebft qu\u1ea3 l\xe0..."),Object(c.b)("h3",{id:"round-3-object-mapping"},"Round 3: Object mapping"),Object(c.b)("p",null,"S\u1eed d\u1ee5ng gi\xe1 tr\u1ecb c\u1ee7a 2 tr\u01b0\u1eddng ",Object(c.b)("inlineCode",{parentName:"p"},"status")," v\xe0 ",Object(c.b)("inlineCode",{parentName:"p"},"type"),", m\xecnh t\u1ea1o ra m\u1ed9t object nh\u01b0 sau:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const handlerMapping = {\n    NO_ACCESS: {\n        NO_ACCESS: () => {\n            // ...\n        },\n        DELAYED: () => {\n            // ...\n        },\n        CLICK2REFRESH: () => {\n            // ...\n        },\n        REALTIME: () => {\n            // ...\n        }\n    },\n    PENDING_SUBSCRIBE: {\n        // ...\n    },\n    ...\n}\n")),Object(c.b)("p",null,"L\xfac n\xe0y, vi\u1ec7c g\u1ecdi h\xe0m x\u1eed l\xfd tr\u1edf n\xean d\u1ec5 d\xe0ng h\u01a1n r\u1ea5t nhi\u1ec1u:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// get the handler function\nconst handler = handlerMapping[user.status][user.type]\n\n// execute the function\nhandler()\n")),Object(c.b)("p",null,"C\xe1ch s\u1eed d\u1ee5ng object mapping l\xe0m gi\u1ea3m b\u1edbt nh\u1eefng keyword l\u1eb7p \u0111i l\u1eb7p l\u1ea1i c\u1ee7a 2 c\xe1ch tr\xean, ph\xf9 h\u1ee3p v\u1edbi nh\u1eefng tr\u01b0\u1eddng h\u1ee3p \u0111i\u1ec1u ki\u1ec7n check d\xe0i v\u1edbi m\u1ed7i tr\u01b0\u1eddng c\xf3 nhi\u1ec1u gi\xe1 tr\u1ecb. D\xf9 kh\xf4ng ph\u1ea3i l\xe0 c\xe1i g\xec \u0111\xf3 qu\xe1 \u0111\u1ed9t ph\xe1 nh\u01b0ng m\xecnh c\u1ea3m th\u1ea5y kh\xe1 hay ho v\xe0 \u0111\xe1ng \u0111\u1ec3 chia s\u1ebb. C\u1ea3m \u01a1n c\xe1c b\u1ea1n \u0111\xe3 \u0111\u1ecdc h\u1ebft b\xe0i n\xe0y. \ud83e\udd17"))}u.isMDXComponent=!0}}]);