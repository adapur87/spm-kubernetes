(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,a){"use strict";var l=a("WcmB"),n=a("q1tI"),r=a.n(n),b=a("NmYn"),i=a.n(b),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,l=e.tabs,n=void 0===l?[]:l;return Object(u.b)("div",{className:m()(p.pageHeader,(t={},t[p.withTabs]=n.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},j=a("UQWD"),O=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,l=j.data.site.siteMetadata.repository,n=a||l,r=n.baseUrl,b=n.subDirectory,i=r+"/edit/"+n.branch+b+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),g=a("dI71"),f=a("Wbzz"),x=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,l=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),r=n===l,b=new RegExp(l+"/?(#.*)?$"),c=a.replace(b,n);return Object(u.b)("li",{key:e,className:m()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(u.b)(f.Link,{className:x.link,to:""+c},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:x.list},n))))))},t}(r.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,m=t.relativePagePath,p=t.titleType,j=s.tabs,O=s.title,g=s.theme,f=s.description,x=s.keywords,P=l.data.site.pathPrefix,k=P?n.pathname.replace(P,""):n.pathname,y=j?k.split("/").filter(Boolean).slice(-1)[0]||i()(j[0],{lower:!0}):"";return Object(u.b)(o.a,{tabs:j,homepage:!1,theme:g,pageTitle:O,pageDescription:f,pageKeywords:x,titleType:p},Object(u.b)(d,{title:r?Object(u.b)(r,null):O,label:"label",tabs:j}),j&&Object(u.b)(v,{slug:k,tabs:j,currentTab:y}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(N,{relativePagePath:m})),Object(u.b)(h.a,{pageContext:t,location:n,slug:k,tabs:j,currentTab:y}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},VdIu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var l,n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),o=(l="InlineNotification",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),s={_frontmatter:c},m=i.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"SPM installers"),Object(b.b)("p",null,"The IBM® Cúram Social Program Management (SPM) release that supports deployment to Kubernetes requires running a full SPM 7.0.11.0 platform installer, which you can download from ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/software/passportadvantage/index.html"}),"Passport Advantage"),"."),Object(b.b)("h2",null,"Installing SPM"),Object(b.b)("p",null,"Before you run an installer JAR file, you must have your SPM ",Object(b.b)("inlineCode",{parentName:"p"},"license")," folder in the location where you run the installer command."),Object(b.b)("p",null,"Run each of the installers (full or delta) using the following steps:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Substitute ",Object(b.b)("inlineCode",{parentName:"p"},"<installername.jar>")," with your actual installer file name to run the following command:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"java -jar <installername.jar>\n")))),Object(b.b)("p",null,"The command starts the SPM (izPack) installer."),Object(b.b)(o,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"Note the following points:"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Some of the dialogs are not displayed by the EA installer."),Object(b.b)("li",{parentName:"ul"},"If ",Object(b.b)("em",{parentName:"li"},"Select the language of the application")," is left blank, ",Object(b.b)("em",{parentName:"li"},"English - United States")," is the default language."),Object(b.b)("li",{parentName:"ul"},"If the language dialog is empty,  clicking ",Object(b.b)("em",{parentName:"li"},"Next")," installs the default English language."),Object(b.b)("li",{parentName:"ul"},"If you require additional languages, restart the installer until the dialog is displayed."))),Object(b.b)("p",null,"Go through the installation dialogs as follows:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),".:"),Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next")," on the Welcome screen.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"The value for ",Object(b.b)("em",{parentName:"li"},"Select the installation path:")," defaults to: ",Object(b.b)("inlineCode",{parentName:"li"},"./IBM/Curam/Development"),"\nChange this value as needed, and be aware that the default value appends to the working directory from where you ran the Java command.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."),Object(b.b)("li",{parentName:"ul"},"Respond to the dialog to create or reuse the installation folder."))),Object(b.b)("li",{parentName:"ul"},"For ",Object(b.b)("em",{parentName:"li"},"Select the language of the application"),", select a language.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"For ",Object(b.b)("em",{parentName:"li"},"Please select the license types for which you are licensed:"),", select the appropriate type(s).",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"For ",Object(b.b)("em",{parentName:"li"},"Please select the components for which you are licensed:")," select the appropriate component(s).",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"Provide values for the following items:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Organization Name"),Object(b.b)("li",{parentName:"ul"},"Organization Address"),Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"Provide values corresponding to the database to connect to:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Select the appropriate ",Object(b.b)("em",{parentName:"li"},"Database Platform")),Object(b.b)("li",{parentName:"ul"},"Database Account Logon"),Object(b.b)("li",{parentName:"ul"},"Database Account Password"),Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"Provide values corresponding to the database to connect to:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Database Server Name:"),Object(b.b)("li",{parentName:"ul"},"Database Server Port:"),Object(b.b)("li",{parentName:"ul"},"Database Name:"),Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"Installation progresses for some time.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"Updating of various files and settings occurs.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Next"),"."))),Object(b.b)("li",{parentName:"ul"},"Installation is complete.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Click ",Object(b.b)("em",{parentName:"li"},"Done"),".")))))))}p.isMDXComponent=!0},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')}}]);
//# sourceMappingURL=component---src-pages-deploy-spm-install-spm-mdx-ad2532867a4b5c33d8a9.js.map