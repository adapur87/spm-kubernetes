(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),b=a.n(r),o=a("NmYn"),c=a.n(o),s=a("Xrax"),l=a("k4MR"),i=a("TSYQ"),u=a.n(i),p=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},a)))))},O=a("UQWD"),j=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,c=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),g=a("dI71"),f=a("Wbzz"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),b=r===n,o=new RegExp(n+"/?(#.*)?$"),s=a.replace(o,r);return Object(d.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=b,t),v.listItem)},Object(d.b)(f.Link,{className:v.link,to:""+s},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},r))))))},t}(b.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,b=e.Title,o=t.frontmatter,i=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,O=i.tabs,j=i.title,g=i.theme,f=i.description,v=i.keywords,w=n.data.site.pathPrefix,k=w?r.pathname.replace(w,""):r.pathname,y=O?k.split("/").filter(Boolean).slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:O,homepage:!1,theme:g,pageTitle:j,pageDescription:f,pageKeywords:v,titleType:p},Object(d.b)(m,{title:b?Object(d.b)(b,null):j,label:"label",tabs:O}),O&&Object(d.b)(T,{slug:k,tabs:O,currentTab:y}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(x,{relativePagePath:u})),Object(d.b)(h.a,{pageContext:t,location:r,slug:k,tabs:O,currentTab:y}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},uqpt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return i}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=o.a;function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"If you have feedback, or wish to raise an issue and you are not an IBM®\nrepresentative, please contact your local IBM Account Executive."),Object(b.b)("p",null,"To submit an issue or provide feedback, please create\nan issue\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/IBM/spm-kubernetes/issues"}),"here"),".\nWe strongly suggest that you click Watch or Star the repository on\nGitHub to be updated about the latest changes."),Object(b.b)("h2",null,"Please follow the template for creating issues"),Object(b.b)("p",null,"This is a basic template to follow if issues arise."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Describe the bug:")),Object(b.b)("p",null,"A clear and concise description of what the bug is."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Steps to reproduce the behavior:")),Object(b.b)("p",null,"Clear and concise steps to reproduce the behaviour"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"One"),Object(b.b)("li",{parentName:"ul"},"Two"),Object(b.b)("li",{parentName:"ul"},"Three")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Expected behavior:")),Object(b.b)("p",null,"A clear and concise description of what you expected to happen."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Screenshots:")),Object(b.b)("p",null,"If applicable, add screenshots to help explain your problem."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"System Information:")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"    OS: []\n    Docker Version: []\n    Minikube Version: []\n    Ant Version: []\n    Java Version: []\n    Liberty  Version: []\n    Cúram SPM Version: []\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Additional context:")),Object(b.b)("p",null,"Add any other context about the problem here."))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contact-contact-us-mdx-3a2fa1840a088b8a441c.js.map