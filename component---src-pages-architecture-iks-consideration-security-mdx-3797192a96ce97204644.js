(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),i=a("q1tI"),r=a.n(i),c=a("NmYn"),s=a.n(c),o=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(p.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},a)))))},x=a("UQWD"),h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=x.data.site.siteMetadata.repository,i=a||n,r=i.baseUrl,c=i.subDirectory,s=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),j=a("Wbzz"),v=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0,strict:!0}),r=i===n,c=new RegExp(n+"/?(#.*)?$"),o=a.replace(c,i);return Object(p.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(p.b)(j.Link,{className:v.link,to:""+o},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:v.list},i))))))},t}(r.a.Component),T=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,c=t.frontmatter,b=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,x=b.tabs,h=b.title,f=b.theme,j=b.description,v=b.keywords,y=n.data.site.pathPrefix,N=y?i.pathname.replace(y,""):i.pathname,P=x?N.split("/").filter(Boolean).slice(-1)[0]||s()(x[0],{lower:!0}):"";return Object(p.b)(l.a,{tabs:x,homepage:!1,theme:f,pageTitle:h,pageDescription:j,pageKeywords:v,titleType:d},Object(p.b)(m,{title:r?Object(p.b)(r,null):h,label:"label",tabs:x}),x&&Object(p.b)(w,{slug:N,tabs:x,currentTab:P}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:i,slug:N,tabs:x,currentTab:P}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I36W:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("qKvR"),{}),o={_frontmatter:s},l=c.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Security"),Object(r.b)("p",null,"IKS supplies many options to create a secured deployment. There is no one-size-fit-all solution that can be used everywhere, so a certain degree of familiarity with these options is required.\nWe recommend implementing the best practices that were highlighted in the below links and use IKS flexible configuration capabilities to incorporate security processes into the continuous integration pipeline,\nautomating the entire process with security seamlessly “baked in”."),Object(r.b)("p",null,"Both ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-psp"}),"Pod Security")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/architecture/architectures/securityArchitecture/secure-cloud-native-app"}),"Cloud Native Security"),"\ngive an overview of IKS concepts and guidelines of security."))}b.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')}}]);
//# sourceMappingURL=component---src-pages-architecture-iks-consideration-security-mdx-3797192a96ce97204644.js.map