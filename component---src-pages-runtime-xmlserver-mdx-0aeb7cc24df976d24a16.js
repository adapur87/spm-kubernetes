(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),s=a.n(r),i=a("NmYn"),b=a.n(i),c=a("Xrax"),l=a("k4MR"),o=a("TSYQ"),d=a.n(o),u=a("QH2O"),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},x=a("UQWD"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=x.data.site.siteMetadata.repository,r=a||n,s=r.baseUrl,i=r.subDirectory,b=s+"/edit/"+r.branch+i+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),h=a("dI71"),v=a("Wbzz"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0,strict:!0}),s=r===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,r);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=s,t),f.listItem)},Object(m.b)(v.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},t}(s.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,i=t.frontmatter,o=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,x=o.tabs,g=o.title,h=o.theme,v=o.description,f=o.keywords,N=n.data.site.pathPrefix,k=N?r.pathname.replace(N,""):r.pathname,P=x?k.split("/").filter(Boolean).slice(-1)[0]||b()(x[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:x,homepage:!1,theme:h,pageTitle:g,pageDescription:v,pageKeywords:f,titleType:u},Object(m.b)(p,{title:s?Object(m.b)(s,null):g,label:"label",tabs:x}),x&&Object(m.b)(T,{slug:k,tabs:x,currentTab:P}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(j.a,{pageContext:t,location:r,slug:k,tabs:x,currentTab:P}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},Yb2a:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a("wx14"),r=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),{}),c={_frontmatter:b},l=i.a;function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"As shown in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/spm-kubernetes/architecture/arch-overview/dev-workstation"}),"Deployment architecture")," a single pod is created for our XML server."),Object(s.b)("p",null,"To verify the service name, run the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl get services\n")),Object(s.b)("p",null,"The XML server is listed with the name: ",Object(s.b)("inlineCode",{parentName:"p"},"releasename-xmlserver")," where ",Object(s.b)("inlineCode",{parentName:"p"},"releasename")," was defined during deployment."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-runtime-xmlserver-mdx-0aeb7cc24df976d24a16.js.map