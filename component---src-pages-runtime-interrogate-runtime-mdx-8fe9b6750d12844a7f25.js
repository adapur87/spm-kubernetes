(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),b=a("q1tI"),c=a.n(b),o=a("NmYn"),s=a.n(o),i=a("Xrax"),r=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,b=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=b.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},h=a("UQWD"),g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,b=a||n,c=b.baseUrl,o=b.subDirectory,s=c+"/edit/"+b.branch+o+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),w=a("Wbzz"),k=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=s()(e,{lower:!0,strict:!0}),c=b===n,o=new RegExp(n+"/?(#.*)?$"),i=a.replace(o,b);return Object(u.b)("li",{key:e,className:d()((t={},t[k.selectedItem]=c,t),k.listItem)},Object(u.b)(w.Link,{className:k.link,to:""+i},e))}));return Object(u.b)("div",{className:k.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:k.list},b))))))},t}(c.a.Component),x=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,c=e.Title,o=t.frontmatter,l=void 0===o?{}:o,d=t.relativePagePath,p=t.titleType,h=l.tabs,g=l.title,O=l.theme,w=l.description,k=l.keywords,N=n.data.site.pathPrefix,A=N?b.pathname.replace(N,""):b.pathname,v=h?A.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(u.b)(r.a,{tabs:h,homepage:!1,theme:O,pageTitle:g,pageDescription:w,pageKeywords:k,titleType:p},Object(u.b)(m,{title:c?Object(u.b)(c,null):g,label:"label",tabs:h}),h&&Object(u.b)(y,{slug:A,tabs:h,currentTab:v}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:d})),Object(u.b)(f.a,{pageContext:t,location:b,slug:A,tabs:h,currentTab:v}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},GPu6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n,b=a("wx14"),c=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),i=(a("qKvR"),{}),r=(n="Caption",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),l={_frontmatter:i},d=s.a;function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)(d,Object(b.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can interrogate a Kubernetes system to debug or verify its status in the following ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"View the Minikube dashboard or the CodeReady Containers console"),Object(o.b)("li",{parentName:"ul"},"View pod status and logs"),Object(o.b)("li",{parentName:"ul"},"Log in to a pod to investigate its status"),Object(o.b)("li",{parentName:"ul"},"Modify a Kubernetes object")),Object(o.b)("h2",null,"Minikube dashboard"),Object(o.b)("p",null,"The dashboard add-on is enabled by default in Minikube and is used to verify the health of the system.\nBecause Minikube is a minimal environment, the dashboard add-on doesn’t have the full capability of the dashboard in a fully deployed Kubernetes cluster. However, the dashboard shows the most important data."),Object(o.b)("p",null,"Use the dashboard to list the Kubernetes objects, including the status and names of the pods, and more information such as how long the pods are running."),Object(o.b)("p",null,"Start the dashboard by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"# Minikube Dashboard\nminikube dashboard\n")),Object(o.b)("p",null,"Figure 1 shows an example of the Minikube dashboard:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuUlEQVQoz2VQOW8TQRid/0ePkPgJ1EgcokOiQsJ0QSkQXWQKFIwPaEhSBGEvqegACQf2mvV6r5mde3iziwKIJ8t6+x3vvW/I9JS+Oq+OP/Lp2f7l+/1ird5EchnpVWRmGzH/pJcXdh6p1xuxvDDzjTpe94uNxg+EsIbKvnJee+/vp5OHxQHIUb26+eMuyNf8y7Wn12mXoX9jcetdd47iHfrkcfkchNCiKHalkAofz9LZYTIDebtbP/h2CPK9iG8fPaLt3ht/72Tyof6M4uRy+iJdhWVsNk3DAca1CBLGGGusd/4KzjkU/xCLIW+0IZc/M1gzxnrRcyGxhLbUqmrq3a6oqopxhopSCkWoSkDLIG8tybKsrmswprjQwQ/cOdu0LMtoWZZCCDvgyjlEG0DQbttWa43gPWfWDqmRyUDid2zzFzBphyFkIXmeJ0kipegY61jvBoRoWtdVhVCjNBbwHy4aWuM+oTS8d9d1rWRN74SGnYMqfOM0T5ME3eEQN+5ADg+BW1AhcRzDHA0mOVdWKIfJwcQmaQFp3DVeOJ6Kp4UTloPzdruNogjy/l9AOM8pnhMt55z/Dyj+AkUzZnvVWY3wAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("picture",{parentName:"span"},"\n        ",Object(o.b)("source",Object(b.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/0eda2/Minikube-dashboard.webp 288w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/460e2/Minikube-dashboard.webp 576w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/e0ca3/Minikube-dashboard.webp 1152w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/d02be/Minikube-dashboard.webp 1728w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/c1f4c/Minikube-dashboard.webp 2304w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/b3028/Minikube-dashboard.webp 3360w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"})),"\n        ",Object(o.b)("source",Object(b.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/7fc1e/Minikube-dashboard.png 288w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/a5df1/Minikube-dashboard.png 576w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/3cbba/Minikube-dashboard.png 1152w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/0b124/Minikube-dashboard.png 1728w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/4ea69/Minikube-dashboard.png 2304w","/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/085b0/Minikube-dashboard.png 3360w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"})),"\n        ",Object(o.b)("img",Object(b.a)({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/ebbe7c5619818b53f01e99ad098b0cfb/3cbba/Minikube-dashboard.png",alt:"Minikube dashboard",title:"Minikube dashboard",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(o.b)(r,{mdxType:"Caption"},Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Figure 1:")," Minikube dashboard:")),Object(o.b)("h2",null,"CodeReady Containers Console"),Object(o.b)("p",null,"The console is a user interface accessible from a web browser. Developers can use the web console to visualize, browse, and manage the contents of projects."),Object(o.b)("p",null,"Launch the console by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"# CodeReady Containers Consoles\ncrc console\n")),Object(o.b)("p",null,"To view the credentials for ",Object(o.b)("inlineCode",{parentName:"p"},"kube:admin")," or ",Object(o.b)("inlineCode",{parentName:"p"},"developer")," run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"crc console --credentials\n")),Object(o.b)("p",null,"Figure 2 shows an example of the CodeReady Containers console:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6UlEQVQoz02SXWsTQRSG92f4FdpoNdGkflARFASxgq29EcQfoLbxB9iF/h8lUqF0s8ZK64UX3tc2FSUXJeBHk1KCyc7szJkzszOe2VXp4eFwhuWdfc+7G1yu1asXqjPzj2cXV+4+eTH7dLng/uLyfCOca4QPGuHC83BuKfz76Fl4b2mlGIJK/crpibOr8YZwjmeZcq5A/8Pk6GOAc8K61LqgUps+WZqMosg5hyAMKiWFTLlSoMCDypNyNkoSlgqCC0lIgODi9NUTZybi9jsvRqSutUatTWYLtLFUwwSan8fNnYR4vZO83E4+9URQv3a9VJ5qb7wnmVLk1xljMirrm8noQEedAn4ZqE4fOn2114fdA+gNMVh4+OjW7TubWx9IBqTWKMk5ohACAIo7SG2MzhCc1f8xGQYzN25OVWut+C2JmZQCVQGNQjIAnkouJUWQr6oUy+EKBWJwrnKJdl6PWoVhlxctSe9litSSIQ2QgqQs3PGyNiifr/q0W7EXo3Z+QYOgqDvrLGWG2nrbxgeJ6DfLi2YvPlUqr61Hv535zsY/xHgk+SAZ9djwQCRHwDl9HoAUkSA7hKbfge4yphBPrrXij0c/V7u7zW5n7/Bwe/Dr1ddvb7rd9v4+pSi09kpNhlSKiiMyCkXjHw1lHKp45KzvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("picture",{parentName:"span"},"\n        ",Object(o.b)("source",Object(b.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/0eda2/crc_console.webp 288w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/460e2/crc_console.webp 576w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/e0ca3/crc_console.webp 1152w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/d02be/crc_console.webp 1728w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/c1f4c/crc_console.webp 2304w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/801c1/crc_console.webp 3352w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"})),"\n        ",Object(o.b)("source",Object(b.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/7fc1e/crc_console.png 288w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/a5df1/crc_console.png 576w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/3cbba/crc_console.png 1152w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/0b124/crc_console.png 1728w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/4ea69/crc_console.png 2304w","/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/f1da0/crc_console.png 3352w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"})),"\n        ",Object(o.b)("img",Object(b.a)({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/c0889ec779f6603c52c863d091882b97/3cbba/crc_console.png",alt:"CodeReady Container console",title:"CodeReady Container console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(o.b)(r,{mdxType:"Caption"},Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Figure 2:")," CodeReady Containers console:")),Object(o.b)("h2",null,"Pods status and logs"),Object(o.b)("p",null,"All Kubernetes objects can also be accessed by running the ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," command-line tool. To list the objects, run the ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl get")," command followed by the types of object to retrieve, for example: pods, services, cron jobs, or other objects.\nA useful option is the ",Object(o.b)("inlineCode",{parentName:"p"},"-w")," (watch) option. The watch option keeps the command in a pending state, showing how the pods change over time. It also follows the pods through the initialization, waiting, and running phases."),Object(o.b)("p",null,"An example of ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"kubectl get pods -w\n")),Object(o.b)("p",null,"This command lists the names of all the pods and their status."),Object(o.b)("p",null,"When a pod is running, you can read the log of that pod by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"kubectl logs pod-name\n")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"pod-name")," is the name of the pod you want to query. The ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl logs")," command behaves in the same way as the Docker® ",Object(o.b)("inlineCode",{parentName:"p"},"logs")," command, so you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"-f")," option to leave the command open and show the log updating in real time."),Object(o.b)("p",null,"When the pod is not running but is in another state such as pending, initializing, or failed, you can ",Object(o.b)("inlineCode",{parentName:"p"},"describe")," it for debugging purposes if there is a problem."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"describe")," on any Kubernetes object to show its configuration, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"kubectl describe pod/pod-name\n")),Object(o.b)("h2",null,"Log in to a pod"),Object(o.b)("p",null,"Like any other Docker container when a pod is in running status, you can log in to it to conduct a more detailed investigation.\nThe commands that you use depend on the pod, but the following command should work because ",Object(o.b)("inlineCode",{parentName:"p"},"bash")," is generally available:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"kubectl exec -ti pod-name bash\n")),Object(o.b)("p",null,"The command opens a ",Object(o.b)("inlineCode",{parentName:"p"},"bash")," session within the pod."),Object(o.b)("h2",null,"Modify a Kubernetes object"),Object(o.b)("p",null,"You can also modify Kubernetes objects at run time by running the ",Object(o.b)("inlineCode",{parentName:"p"},"edit")," command. Use this command carefully because it might modify the health of the system.\nFor example, to modify a deployment object called ",Object(o.b)("inlineCode",{parentName:"p"},"deploymentname"),", run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell"}),"kubectl edit deployment/deploymentname\n")),Object(o.b)("p",null,"The configuration opens in the default editor, but you can specify a different editor by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"KUBE_EDITOR")," environment variable."))}p.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')}}]);
//# sourceMappingURL=component---src-pages-runtime-interrogate-runtime-mdx-8fe9b6750d12844a7f25.js.map