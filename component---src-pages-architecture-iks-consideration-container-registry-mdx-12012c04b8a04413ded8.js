(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),i=a.n(r),s=a("NmYn"),o=a.n(s),c=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),u=a.n(l),d=a("QH2O"),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},x=a("UQWD"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=x.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=r.subDirectory,o=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),h=a("dI71"),f=a("Wbzz"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),i=r===n,s=new RegExp(n+"/?(#.*)?$"),c=a.replace(s,r);return Object(m.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(m.b)(f.Link,{className:v.link,to:""+c},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},r))))))},t}(i.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,s=t.frontmatter,l=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,x=l.tabs,g=l.title,h=l.theme,f=l.description,v=l.keywords,w=n.data.site.pathPrefix,P=w?r.pathname.replace(w,""):r.pathname,k=x?P.split("/").filter(Boolean).slice(-1)[0]||o()(x[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:x,homepage:!1,theme:h,pageTitle:g,pageDescription:f,pageKeywords:v,titleType:d},Object(m.b)(p,{title:i?Object(m.b)(i,null):g,label:"label",tabs:x}),x&&Object(m.b)(T,{slug:P,tabs:x,currentTab:k}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:r,slug:P,tabs:x,currentTab:k}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},iKOn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),c={_frontmatter:o},b=s.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Container Registry"),Object(i.b)("p",null,"In ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/ie-en/cloud/container-registry"}),"IBM Cloud Container Registry")," you can store and distribute container images in a fully managed private registry."),Object(i.b)("p",null,"Push private images to conveniently run them in the IBM Cloud™ Kubernetes Service and other runtime environments. Images are checked for security issues so that you can make informed decisions about your deployments."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-iks-consideration-container-registry-mdx-12012c04b8a04413ded8.js.map