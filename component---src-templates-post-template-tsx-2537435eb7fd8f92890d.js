(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Mvws:function(e,t,a){e.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},WXWR:function(e,t,a){e.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},"d+ly":function(e,t,a){e.exports={author:"Author-module--author--2Yefr",author__card:"Author-module--author__card--2FUpD","author__card-profile":"Author-module--author__card-profile--3WV8O","author__card-profile-photo":"Author-module--author__card-profile-photo--3zTzs","author__card-profile-name":"Author-module--author__card-profile-name--2gNOq"}},"gt/k":function(e,t,a){e.exports={post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}},myfg:function(e,t,a){e.exports={meta:"Meta-module--meta--1XDVh",meta__divider:"Meta-module--meta__divider--2MocR","meta__series-link":"Meta-module--meta__series-link--ecU3G"}},vcjV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=a("Ng2+"),s=a("Wbzz"),r=a("RlvJ"),m=a("eZYV"),c=a("d+ly"),i=a.n(c),_=function(){var e=Object(m.b)().author;return l.a.createElement("div",{className:i.a.author},l.a.createElement("div",{className:i.a.author__card},l.a.createElement("div",{className:i.a["author__card-profile"]},l.a.createElement(s.Link,{className:i.a["author__card-profile"],to:"/pages/about"},l.a.createElement("img",{src:Object(s.withPrefix)(e.photo),className:i.a["author__card-profile-photo"],width:"50",height:"50",alt:e.name})),l.a.createElement("div",{className:i.a["author__card-profile-name"]},e.name)),l.a.createElement(r.a,{styles:{marginBottom:0},contacts:e.contacts})))},u=function(){return null},d=a("Mvws"),p=a.n(d),g=function(e){var t=e.body,a=e.title;return l.a.createElement("div",{className:p.a.content},l.a.createElement("h1",{className:p.a.content__title},a),l.a.createElement("div",{className:p.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},h=a("0lfv"),f=a("myfg"),E=a.n(f),v={year:"numeric",month:"short",day:"numeric"},N=function(e){var t=e.series,a=e.seriesSlug,n=e.date;return l.a.createElement("div",{className:E.a.meta},l.a.createElement("p",null,l.a.createElement("span",null,"Published ",Object(h.d)(n,v)),t&&a?l.a.createElement("span",null,l.a.createElement("span",{className:E.a.meta__divider}),l.a.createElement("span",null,"in"),l.a.createElement("span",{className:E.a.meta__divider}),l.a.createElement("span",{className:E.a.meta__series},l.a.createElement(s.Link,{to:a,className:E.a["meta__series-link"]},t))):null))},b=a("WXWR"),k=a.n(b),y=function(e){var t=e.tags,a=e.tagSlugs;return l.a.createElement("div",{className:k.a.tags},l.a.createElement("ul",{className:k.a.tags__list},a&&a.map((function(e,a){return l.a.createElement("li",{className:k.a["tags__list-item"],key:t[a]},l.a.createElement(s.Link,{to:e,className:k.a["tags__list-item-link"]},t[a]))}))))},w=a("gt/k"),S=a.n(w),W=function(e){var t=e.post,a=t.html,n=t.fields,o=n.slug,r=n.seriesSlug,m=n.tagSlugs,c=t.frontmatter,i=c.title,d=c.series,p=c.date,h=c.tags;return l.a.createElement("div",{className:S.a.post},l.a.createElement(s.Link,{className:S.a["post__home-button"],to:"/"},"All Posts"),l.a.createElement("div",{className:S.a.post__content},l.a.createElement(g,{body:a,title:i})),l.a.createElement("div",{className:S.a.post__footer},l.a.createElement(N,{series:d,seriesSlug:r,date:p}),h&&m&&l.a.createElement(y,{tags:h,tagSlugs:m}),l.a.createElement(_,null)),l.a.createElement("div",{className:S.a.post__comments},l.a.createElement(u,{postSlug:o,postTitle:t.frontmatter.title})))};t.default=function(e){var t=e.data,a=Object(m.b)(),n=a.title,s=a.subtitle,r=t.markdownRemark.frontmatter,c=r.title,i=r.description,_=void 0===i?"":i,u=r.socialImage,d=_||s,p=null==u?void 0:u.publicURL;return l.a.createElement(o.a,{title:c+" - "+n,description:d,socialImage:p},l.a.createElement(W,{post:t.markdownRemark}))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-2537435eb7fd8f92890d.js.map