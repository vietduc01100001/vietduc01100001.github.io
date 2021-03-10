(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return a?i.a.createElement(m,s(s({ref:t},c),{},{components:a})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},170:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/youtube-d4d44066f0789d7ce8d135a915c9976a.png"},171:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/how-it-works-1-359c07acba5c354297d22e10c1802f52.png"},172:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/how-it-works-2-a48c9730d333242557d4e3b7e4ea99ab.png"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(104)),o={title:"Adaptive bitrate streaming",tags:["streaming media systems"],image:"/img/posts/adaptive-bitrate-streaming/thumbnail.png"},s={permalink:"/2021/03/07/adaptive-bitrate-streaming",source:"@site/blog/2021-03-07-adaptive-bitrate-streaming.md",description:"What is\xa0adaptive bitrate streaming? How does it work? And what benefits does it offer?",date:"2021-03-07T00:00:00.000Z",tags:[{label:"streaming media systems",permalink:"/tags/streaming-media-systems"}],title:"Adaptive bitrate streaming",readingTime:2.995,truncated:!0,nextItem:{title:"10 b\xe0i vi\u1ebft hay nh\u1ea5t m\xecnh \u0111\u1ecdc trong n\u0103m 2020",permalink:"/2021/02/06/10-bai-viet-hay-nhat-minh-doc-trong-nam-2020"}},l=[{value:"What is adaptive bitrate streaming?",id:"what-is-adaptive-bitrate-streaming",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Pros and cons",id:"pros-and-cons",children:[]},{value:"What&#39;s more?",id:"whats-more",children:[]}],c={toc:l};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"What is\xa0adaptive bitrate streaming? How does it work? And what benefits does it offer?"),Object(r.b)("p",null,"If you watch a video on the Internet right now, chances are it's being delivered to you by a technique called\xa0",Object(r.b)("em",{parentName:"p"},"adaptive bitrate streaming"),". Adaptive bitrate streaming helps you experience uninterrupted playback, even on an old/low-performance device, or on a cellular network. No longer staring at the spinning screen. No longer having to download the video to watch offline. It's just smooth!"),Object(r.b)("p",null,"Over the past few weeks, I've been working on a project that requires some understanding of this technique. And here are some of my findings. Let's get into it!"),Object(r.b)("h2",{id:"what-is-adaptive-bitrate-streaming"},"What is adaptive bitrate streaming?"),Object(r.b)("p",null,"Adaptive bitrate streaming is a technique used in streaming multimedia. It works by detecting a user's available resources, especially network bandwidth, to adjust the quality of the stream in real-time so that the user experience as smooth playback as possible."),Object(r.b)("p",null,"The easiest example is watching a YouTube video. Have you ever noticed when you start watching a video, the quality is usually 480p, and after a few seconds it switches to 720p or 1080p, then if you go too far from your wifi router, it switches back to 480p so you can keep watching without being interrupted? That's adaptive bitrate streaming I'm talking about."),Object(r.b)("p",null,Object(r.b)("img",{alt:"YouTube",src:a(170).default})),Object(r.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,"For this little magic to work out, we need some processing at both the server and the client."),Object(r.b)("p",null,"When a media file is uploaded, it is encoded into multiple versions of itself at different bit rates (for videos, usually at different resolutions too). These versions then get chunked into small segments. The size of these segments depends on the implementations but is typically between 2 and 10 seconds."),Object(r.b)("p",null,Object(r.b)("img",{alt:"How it works 1",src:a(171).default})),Object(r.b)("p",null,"When a user plays a video, the player client requests the server and receives a manifest file, which tells the player client how many segments this video has and where to find them. The segments are served over HTTP."),Object(r.b)("p",null,"Now the player client runs an algorithm to analyze the device resource metrics, including network speed, network bandwidth, and CPU capacity. It then chooses the segments with the suitable quality to start playing, while continues to run the algorithm in real-time and makes changes adaptively to the available resources."),Object(r.b)("p",null,Object(r.b)("img",{alt:"How it works 2",src:a(172).default})),Object(r.b)("p",null,"The result is we have a very self-aware guy who can analyze stuff and pick the right work to do, all to give us \u2014 the end-users \u2014 the best experience possible."),Object(r.b)("h2",{id:"pros-and-cons"},"Pros and cons"),Object(r.b)("p",null,"Compared to traditional multimedia streaming, back when the user has to download the media stream in the original quality and struggles when network speed is limited, adaptive bitrate streaming brings a lot of advantages, both for users and developers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Smooth playback in various network conditions."),Object(r.b)("li",{parentName:"ul"},"Serving over HTTP, widely compatible and secured."),Object(r.b)("li",{parentName:"ul"},"Can make use of our CDNs to cache media segments. This is a huge deal."),Object(r.b)("li",{parentName:"ul"},"Less development cost to develop and maintain servers that use other streaming protocols like\xa0",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol"}),"RTSP"),".")),Object(r.b)("p",null,"The seemingly only con when using adaptive bitrate streaming is more storage cost, as we have to store multiple copies of a media file source. However, with all the good stuff we're getting from it, adaptive bitrate streaming is a great technique that benefits everyone."),Object(r.b)("h2",{id:"whats-more"},"What's more?"),Object(r.b)("p",null,"There are numerous well-known implementations like\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP"}),"MPEG-DASH"),"\xa0or\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/HTTP_Live_Streaming"}),"HLS"),", which you can read more about. There is\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://youtube-eng.googleblog.com/2018/04/making-high-quality-video-efficient.html"}),"this"),"\xa0blog post by YouTube on how they're doing adaptive video streaming. You can also take a look at\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Real-time_Transport_Protocol"}),"RTP"),", which is a protocol that's used in multimedia streaming. Have fun reading!"))}u.isMDXComponent=!0}}]);