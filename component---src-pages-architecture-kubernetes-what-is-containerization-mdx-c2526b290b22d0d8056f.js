(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),o=a.n(r),i=a("NmYn"),s=a.n(i),c=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},x=a("UQWD"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=x.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("Wbzz"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0,strict:!0}),o=r===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,r);return Object(u.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(u.b)(h.Link,{className:v.link,to:""+c},e))}));return Object(u.b)("div",{className:v.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:v.list},r))))))},t}(o.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,i=t.frontmatter,l=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,x=l.tabs,g=l.title,f=l.theme,h=l.description,v=l.keywords,k=n.data.site.pathPrefix,P=k?r.pathname.replace(k,""):r.pathname,y=x?P.split("/").filter(Boolean).slice(-1)[0]||s()(x[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:x,homepage:!1,theme:f,pageTitle:g,pageDescription:h,pageKeywords:v,titleType:p},Object(u.b)(m,{title:o?Object(u.b)(o,null):g,label:"label",tabs:x}),x&&Object(u.b)(T,{slug:P,tabs:x,currentTab:y}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:d})),Object(u.b)(j.a,{pageContext:t,location:r,slug:P,tabs:x,currentTab:y}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},ox3K:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("qKvR"),{}),b=(n="Video",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:c},d=s.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Containerization makes it easier for developers to develop, deploy, and operate applications by simplifying the packaging and deployment process."),Object(i.b)("p",null,"IBM® Cúram Social Program Management (SPM) is packaged as Docker® containers, and running on IKS or OpenShift"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/get-started"}),"Docker")," is an open source tool that creates, deploys, and runs applications by using containers."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"What is Containerization?")),Object(i.b)(b,{title:"What is Containerization?",youtubeId:"0qotVMX-J5s",mdxType:"Video"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-kubernetes-what-is-containerization-mdx-c2526b290b22d0d8056f.js.map