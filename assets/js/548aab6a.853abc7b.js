(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var o=t(0),c=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,c=function(e,n){if(null==e)return{};var t,o,c={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),b=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=b(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),m=o,u=p["".concat(r,".").concat(m)]||p[m]||h[m]||a;return t?c.a.createElement(u,i(i({ref:n},s),{},{components:t})):c.a.createElement(u,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<a;s++)r[s]=t[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var o=t(3),c=t(7),a=(t(0),t(107)),r={title:"[Node.js] Khi require m\u1ed9t file n l\u1ea7n, th\xec \u0111o\u1ea1n code b\xean trong file \u0111\xf3 ch\u1ea1y bao nhi\xeau l\u1ea7n?",tags:["jest","node.js"],image:"/thumbs/2020-02-25-node-js-khi-require-mot-file-n-lan-thi-doan-code-ben-trong-file-do-chay-bao-nhieu-lan.png"},i={permalink:"/2020/02/25/node-js-khi-require-mot-file-n-lan-thi-doan-code-ben-trong-file-do-chay-bao-nhieu-lan",source:"@site/blog/2020-02-25-node-js-khi-require-mot-file-n-lan-thi-doan-code-ben-trong-file-do-chay-bao-nhieu-lan.md",description:"H\xf4m nay cu\u1ed1i sprint, \u0111ang ho\xe0n th\xe0nh n\u1ed1t c\xe1i coverage test cho \u0111\xfang h\u1ea1n th\xec m\xecnh g\u1eb7p ph\u1ea3i t\xecnh hu\u1ed1ng nh\u01b0 th\u1ebf n\xe0y.",date:"2020-02-25T00:00:00.000Z",formattedDate:"February 25, 2020",tags:[{label:"jest",permalink:"/tags/jest"},{label:"node.js",permalink:"/tags/node-js"}],title:"[Node.js] Khi require m\u1ed9t file n l\u1ea7n, th\xec \u0111o\u1ea1n code b\xean trong file \u0111\xf3 ch\u1ea1y bao nhi\xeau l\u1ea7n?",readingTime:4.165,truncated:!0,prevItem:{title:"10 terminal tools gi\xfap b\u1ea1n t\u0103ng hi\u1ec7u su\u1ea5t l\xe0m vi\u1ec7c",permalink:"/2020/05/02/10-terminal-tools-giup-ban-tang-hieu-suat-lam-viec"},nextItem:{title:"10 b\xe0i vi\u1ebft hay nh\u1ea5t m\xecnh \u0111\u1ecdc trong n\u0103m 2019",permalink:"/2019/12/24/10-bai-viet-hay-nhat-minh-doc-trong-nam-2019"}},l=[{value:"The problem",id:"the-problem",children:[]},{value:"Introduction to how <code>require</code> in Node.js works",id:"introduction-to-how-require-in-nodejs-works",children:[]},{value:"<code>jest.doMock()</code> to the rescue!",id:"jestdomock-to-the-rescue",children:[]}],s={toc:l};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"H\xf4m nay cu\u1ed1i sprint, \u0111ang ho\xe0n th\xe0nh n\u1ed1t c\xe1i coverage test cho \u0111\xfang h\u1ea1n th\xec m\xecnh g\u1eb7p ph\u1ea3i t\xecnh hu\u1ed1ng nh\u01b0 th\u1ebf n\xe0y."),Object(a.b)("h2",{id:"the-problem"},"The problem"),Object(a.b)("p",null,"M\xecnh c\xf3 file ",Object(a.b)("inlineCode",{parentName:"p"},"axon.js")," export m\u1ed9t h\xe0m ",Object(a.b)("inlineCode",{parentName:"p"},"connect()"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const axon = require('axon');\nconst sock = axon.socket('push');\n\nmodule.exports.connect = addr => new Promise(resolve => {\n    sock.connect(addr, err => {\n        if (err) return resolve(false);\n        resolve(true);\n    });\n});\n")),Object(a.b)("p",null,"H\xe0m n\xe0y \u0111\u01b0\u1ee3c d\xf9ng \u1edf file ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const axon = require('./axon');\n\nmodule.exports.doSomething = async () => {\n    const connected = await axon.connect('real_address');\n    if (!connected) return false;\n    // do something else\n    // ...\n    return true;\n}\n")),Object(a.b)("p",null,"\u0110\u1ec3 test case khi ch\u1ea1y kh\xf4ng ph\u1ea3i connect ra ngo\xe0i th\xec m\xecnh s\u1ebd mock. \xdd t\u01b0\u1edfng l\xfac \u0111\u1ea7u l\xe0 mock th\u1eb1ng ",Object(a.b)("inlineCode",{parentName:"p"},"axon.socket()"),". \u0110o\u1ea1n test case l\xfac \u0111\xf3 c\u1ee7a m\xecnh nh\xecn nh\u01b0 sau:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"test('doSomething() succeeds', async done => {\n    axon.socket = jest.fn().mockImplementationOnce(() => {\n        return {\n            connect: (addr, cb) => {\n                cb();\n            }\n        }\n    });\n\n    const index = require('./index');\n    const success = await index.doSomething();\n    expect(success).toBe(true);\n    done();\n});\n")),Object(a.b)("p",null,"Ch\u1ea1y ",Object(a.b)("inlineCode",{parentName:"p"},"jest --coverage")," l\xean th\u1ea5y test case pass xanh l\xe8, cover lu\xf4n \u0111\u01b0\u1ee3c d\xf2ng ",Object(a.b)("inlineCode",{parentName:"p"},"resolve(true);")," trong ",Object(a.b)("inlineCode",{parentName:"p"},"axon.js")," ngon l\xe0nh. \u0110ang th\u1eafng, m\xecnh copy paste l\xe0m c\xe1i test case th\u1ee9 hai cho tr\u01b0\u1eddng h\u1ee3p connect fail."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"test('doSomething() fails', async done => {\n    axon.socket = jest.fn().mockImplementationOnce(() => {\n        return {\n            connect: (addr, cb) => {\n                cb(new Error());\n            }\n        }\n    });\n\n    const index = require('./index');\n    const success = await index.doSomething();\n    expect(success).toBe(false);\n    done();\n});\n")),Object(a.b)("p",null,"\u01a0, ",Object(a.b)("strong",{parentName:"p"},'"1 failed"'),", Jest said. Sai l\xe0m sao \u0111\u01b0\u1ee3c nh\u1ec9? M\xecnh \u0111\xe3 ",Object(a.b)("inlineCode",{parentName:"p"},"mockReset()")," trong ",Object(a.b)("inlineCode",{parentName:"p"},"beforeEach()")," r\u1ed3i, l\u1ea1i c\xf2n d\xf9ng ",Object(a.b)("inlineCode",{parentName:"p"},"mockImplementationOnce()")," n\u1eefa. Th\u1eed debug th\xec th\u1ea5y ",Object(a.b)("inlineCode",{parentName:"p"},"connected")," l\xe0 ",Object(a.b)("inlineCode",{parentName:"p"},"false")," r\xf5 r\xe0ng, test case pass b\xecnh th\u01b0\u1eddng. Nh\u01b0ng c\u1ee9 ch\u1ea1y ",Object(a.b)("inlineCode",{parentName:"p"},"jest --coverage")," th\xec kh\xf4ng pass. Th\u1eed x\xf3a ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," r\u1ed3i ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," l\u1ea1i v\u1eabn v\u1eady. K\xec l\u1ea1!"),Object(a.b)("p",null,"Sau m\u1ed9t h\u1ed3i loay hoay c\u1ea7u c\u1ee9u b\xe1c Gu g\u1ed3, cu\u1ed1i c\xf9ng b\xe1c ph\xe1n cho m\u1ed9t c\xe2u nh\u01b0 n\xe0y: ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},'"Modules are cached after the first time they are loaded."'))),Object(a.b)("h2",{id:"introduction-to-how-require-in-nodejs-works"},"Introduction to how ",Object(a.b)("inlineCode",{parentName:"h2"},"require")," in Node.js works"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"require")," l\xe0 m\u1ed9t built-in function c\u1ee7a Node.js, nh\u1eadn v\xe0o m\u1ed9t bi\u1ebfn string l\xe0 path d\u1eabn \u0111\u1ebfn file c\u1ea7n require v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t object, m\u1ed9t h\xe0m ho\u1eb7c b\u1ea5t k\xec c\xe1i g\xec kh\xe1c m\xe0 file \u0111\xf3 export ra. V\xec c\xfa ph\xe1p s\u1eed d\u1ee5ng \u0111\u01a1n gi\u1ea3n, l\u1ea1i xu\u1ea5t hi\u1ec7n \u1edf m\u1ecdi n\u01a1i trong project n\xean \u0111\xf4i khi ch\xfang ta kh\xf4ng quan t\xe2m ",Object(a.b)("inlineCode",{parentName:"p"},"require")," ho\u1ea1t \u0111\u1ed9ng nh\u01b0 th\u1ebf n\xe0o."),Object(a.b)("p",null,"Khi \u0111\u01b0\u1ee3c g\u1ecdi, ",Object(a.b)("inlineCode",{parentName:"p"},"require")," s\u1ebd th\u1ef1c thi l\u1ea7n l\u01b0\u1ee3t theo c\xe1c b\u01b0\u1edbc sau:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"T\xecm absolute path c\u1ee7a file \u0111ang \u0111\u01b0\u1ee3c require, n\u1ebfu kh\xf4ng truy\u1ec1n file extension th\xec m\u1eb7c \u0111\u1ecbnh t\xecm v\u1edbi extension ",Object(a.b)("inlineCode",{parentName:"li"},".js")),Object(a.b)("li",{parentName:"ol"},"X\xe1c \u0111\u1ecbnh content type c\u1ee7a file \u0111\xf3, ngo\xe0i ",Object(a.b)("inlineCode",{parentName:"li"},".js")," th\xec Node.js c\xf3 th\u1ec3 require c\u1ea3 file ",Object(a.b)("inlineCode",{parentName:"li"},".json")," v\xe0 ",Object(a.b)("inlineCode",{parentName:"li"},".node")," n\u1eefa"),Object(a.b)("li",{parentName:"ol"},"Ki\u1ec3m tra xem file n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c cache ch\u01b0a, n\u1ebfu r\u1ed3i th\xec tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 lu\xf4n, n\u1ebfu ch\u01b0a th\xec \u0111i ti\u1ebfp b\u01b0\u1edbc 4"),Object(a.b)("li",{parentName:"ol"},'Kh\u1edfi t\u1ea1o m\u1ed9t private scope cho file, v\xec v\u1eady n\xean 2 bi\u1ebfn "global" trong 2 file JS kh\xe1c nhau c\xf3 th\u1ec3 \u0111\u1eb7t tr\xf9ng t\xean \u0111\u01b0\u1ee3c'),Object(a.b)("li",{parentName:"ol"},"Load code v\xe0o b\u1ed9 nh\u1edb"),Object(a.b)("li",{parentName:"ol"},"Cache l\u1ea1i file n\xe0y")),Object(a.b)("p",null,"\u0110\u1ebfn \u0111\xe2y th\xec d\u1ec5 d\xe0ng \u0111\u1ec3 nh\u1eadn ra v\u1ea5n \u0111\u1ec1 r\u1ed3i. File ",Object(a.b)("inlineCode",{parentName:"p"},"axon.js")," \u0111\u01b0\u1ee3c require 2 l\u1ea7n khi ch\u1ea1y ",Object(a.b)("inlineCode",{parentName:"p"},"jest --coverage"),", nh\u01b0ng khi debug ri\xeang 1 test case th\xec n\xf3 ch\u1ec9 \u0111\u01b0\u1ee3c require 1 l\u1ea7n. H\xe0m ",Object(a.b)("inlineCode",{parentName:"p"},"axon.socket()")," ch\u1ec9 th\u1ef1c thi m\u1ed9t l\u1ea7n v\xe0 \u0111\u01b0\u1ee3c cache l\u1ea1i. Ch\xednh v\xec v\u1eady n\xean test case fail m\u1edbi fail :)) N\u1ebfu m\xecnh \u0111\u1ed5i th\u1ee9 t\u1ef1 cho test case succeed xu\u1ed1ng d\u01b0\u1edbi th\xec n\xf3 m\u1edbi l\xe0 th\u1eb1ng b\u1ecb fail."),Object(a.b)("p",null,"N\u1ebfu v\u1eady th\xec l\xe0m sao gi\u1edd? Th\u1eed t\xe1ch test case ra 2 h\xe0m ",Object(a.b)("inlineCode",{parentName:"p"},"describe()")," xem sao? V\u1eabn fail. Th\u1eed t\xe1ch h\u1eb3n ra 2 file, m\u1ed7i file 1 test case. Pass! Nh\u01b0ng m\xe0 nh\u01b0 n\xe0y t\xf9 qu\xe1, kh\xf4ng th\u1ec3 c\u1ee9 m\u1ed7i test case \u0111\u1ec3 1 file \u0111\u01b0\u1ee3c."),Object(a.b)("h2",{id:"jestdomock-to-the-rescue"},Object(a.b)("inlineCode",{parentName:"h2"},"jest.doMock()")," to the rescue!"),Object(a.b)("p",null,"H\xe0m n\xe0y s\u1ebd mock c\u1ea3 package ",Object(a.b)("inlineCode",{parentName:"p"},"axon"),", k\u1ebft h\u1ee3p v\u1edbi ",Object(a.b)("inlineCode",{parentName:"p"},"jest.resetModules()")," th\xec m\u1ed7i l\u1ea7n g\u1eb7p ",Object(a.b)("inlineCode",{parentName:"p"},"require('axon')")," trong code Jest s\u1ebd d\xf9ng mock implementation c\u1ee7a m\xecnh ch\u1ee9 kh\xf4ng ph\u1ea3i \u0111\u1ecdc t\u1eeb file, v\xec v\u1eady s\u1ebd kh\xf4ng c\xf2n cache trong require n\u1eefa."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"beforeEach(() => {\n    jest.resetModules();\n});\n\ntest('doSomething() succeeds', async done => {\n    jest.doMock('axon', () => {\n        return {\n            socket: () => {\n                return {\n                    connect: (addr, cb) => {\n                        cb();\n                    }\n                }\n            }\n        }\n    });\n\n    const index = require('./index');\n    const connected = await index.doSomething();\n    expect(connected).toBe(true);\n    done();\n});\n\ntest('doSomething() fails', async done => {\n    jest.doMock('axon', () => {\n        return {\n            socket: () => {\n                return {\n                    connect: (addr, cb) => {\n                        cb(new Error());\n                    }\n                }\n            }\n        }\n    });\n\n    const index = require('./index');\n    const connected = await index.doSomething();\n    expect(connected).toBe(true);\n    done();\n});\n")),Object(a.b)("p",null,"K\u1ebft qu\u1ea3 2 test case \u0111\u1ec1u pass ngon l\xe0nh, coverage 100% v\xe0 m\xecnh c\xf3 th\u1ec3 y\xean t\xe2m \u0111i v\u1ec1 vi\u1ebft b\xe0i blog n\xe0y. \ud83c\udf89"),Object(a.b)("p",null,"Hi v\u1ecdng b\xe0i vi\u1ebft c\xf3 \xedch!"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Tham kh\u1ea3o t\u1eeb:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("a",{parentName:"em",href:"https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_require_id"},"Modules ","|"," Node.js v12.16.1 Documentation")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("a",{parentName:"em",href:"https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/"},"Requiring modules in Node.js: Everything you need to know")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("a",{parentName:"em",href:"https://stackoverflow.com/a/30038787/8943850"},"javascript - Requiring same module in multiple files - Stack Overflow"))))))}b.isMDXComponent=!0}}]);