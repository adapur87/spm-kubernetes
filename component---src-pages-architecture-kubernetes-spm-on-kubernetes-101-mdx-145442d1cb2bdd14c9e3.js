(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),o=a.n(r),b=a("NmYn"),i=a.n(b),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},O=a("UQWD"),j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,i=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("Wbzz"),N=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,b=new RegExp(n+"/?(#.*)?$"),l=a.replace(b,r);return Object(u.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(f.Link,{className:N.link,to:""+l},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},t}(o.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,O=s.tabs,j=s.title,x=s.theme,f=s.description,N=s.keywords,T=n.data.site.pathPrefix,P=T?r.pathname.replace(T,""):r.pathname,w=O?P.split("/").filter(Boolean).slice(-1)[0]||i()(O[0],{lower:!0}):"";return Object(u.b)(c.a,{tabs:O,homepage:!1,theme:x,pageTitle:j,pageDescription:f,pageKeywords:N,titleType:p},Object(u.b)(m,{title:o?Object(u.b)(o,null):j,label:"label",tabs:O}),O&&Object(u.b)(v,{slug:P,tabs:O,currentTab:w}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:d})),Object(u.b)(h.a,{pageContext:t,location:r,slug:P,tabs:O,currentTab:w}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},dCvg:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),o=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),{}),c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),s={_frontmatter:l},d=i.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(b.b)(d,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"If this is your first time looking into the topic of IBM® Cúram Social Program Management (SPM) on Kubernetes, this is the right place to start."),Object(b.b)("p",null,"Now, before moving forward on the specifics, take a look at the videos available in this section to familiarise yourself with the main concepts of a containerised architecture on Kubernetes."),Object(b.b)("p",null,"The first thing you need to know is that SPM introduced five new mandatory technologies to deploy on Kubernetes."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Technology"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IBM Cloud Kubernetes Services"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Highly scalable platform to orchestrate containerised applications on IBM Cloud.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Red Hat OpenShift"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Highly scalable platform to orchestrate containerised applications on any environment supported by Red Hat.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"WebSphere Liberty"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SPM Application Server for cloud native architectures on Kubernetes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Helm"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Consistently deploy containerised applications into Kubernetes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Docker"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Package SPM into containers for seamless environment portability.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IBM MQ"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Enterprise-grade messaging engine to move JMS messages for SPM on cloud native architectures.")))),Object(b.b)(c,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," These are mandatory technologies and cannot be used independently from each other for SPM.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-kubernetes-spm-on-kubernetes-101-mdx-145442d1cb2bdd14c9e3.js.map