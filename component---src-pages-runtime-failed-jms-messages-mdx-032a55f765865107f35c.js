(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),s=a("q1tI"),r=a.n(s),o=a("NmYn"),i=a.n(o),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),m=a.n(b),p=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,s=void 0===n?[]:n;return Object(u.b)("div",{className:m()(p.pageHeader,(t={},t[p.withTabs]=s.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},h=a("UQWD"),g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,s=a||n,r=s.baseUrl,o=s.subDirectory,i=r+"/edit/"+s.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),N=a("Wbzz"),E=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var t,s=i()(e,{lower:!0,strict:!0}),r=s===n,o=new RegExp(n+"/?(#.*)?$"),c=a.replace(o,s);return Object(u.b)("li",{key:e,className:m()((t={},t[E.selectedItem]=r,t),E.listItem)},Object(u.b)(N.Link,{className:E.link,to:""+c},e))}));return Object(u.b)("div",{className:E.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:E.list},s))))))},t}(r.a.Component),A=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,m=t.relativePagePath,p=t.titleType,h=b.tabs,g=b.title,j=b.theme,N=b.description,E=b.keywords,M=n.data.site.pathPrefix,x=M?s.pathname.replace(M,""):s.pathname,C=h?x.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:h,homepage:!1,theme:j,pageTitle:g,pageDescription:N,pageKeywords:E,titleType:p},Object(u.b)(d,{title:r?Object(u.b)(r,null):g,label:"label",tabs:h}),h&&Object(u.b)(w,{slug:x,tabs:h,currentTab:C}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:m})),Object(u.b)(O.a,{pageContext:t,location:s,slug:x,tabs:h,currentTab:C}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},gOWJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a("wx14"),s=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=c("Caption"),b=c("InlineNotification"),m={_frontmatter:i},p=o.a;function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Introduction"),Object(r.b)("p",null,"It would be unusual for JMS processing to fail; but, if messages do fail that is why we define retry counts and error and dead message queues.\nThere are broadly two contexts for JMS failures:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Message production: messages to MQ from Liberty."),Object(r.b)("li",{parentName:"ul"},"Message consumption: message processing in Liberty for messages from MQ.")),Object(r.b)("h2",null,"Message production failures"),Object(r.b)("p",null,"If the production of a JMS message fails, a Java exception is thrown in Liberty (shown in the application server logs), the transaction fails, and the message is never processed by MQ."),Object(r.b)("p",null,"For example, if an MQ queue fills up you would see the following exception in the chain of stack. This points back to the issue in MQ and other related exceptions would identify the failing queue."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"traces in the WebSphere Liberty log files:\nCaused by: com.ibm.mq.MQException: JMSCMQ0001:\nIBM MQ call failed with compcode '2' ('MQCC_FAILED') reason '2053' ('MQRC_Q_FULL').\n")),Object(r.b)("h2",null,"Message consumption failures"),Object(r.b)("p",null,"The JMS configuration for IBM® Cúram Social Program Management (SPM) specifies a hierarchy of queues, from the normal queue, to an error queue, and finally to the dead message queue.\nFigure 1 illustrates this flow of JMS messages for SPM."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"701px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAABuklEQVQoz3VRa3ObMBDk//+hNk1jsDutST8kHRswdmzzRlDzksGgt6oQt6aZdufmZoR2b0+LtotdJ7HsyHJi6wXs6rru+/6Q761o5cS2HVsHsIcN7PpuB7aKtolsxQxyX33UnNR+PJr6Sl/ulxZY53nGOHMyW1/P5pbxxV2so1VZlJhhK1vN7bmx1s2juU03VVlpcRnGMAxKL6r9pIm7rhNC5G0W1oFfeKqDJhn6nnMKzklQ+UHhRU34s8nQgDSEkJQSIyy4kH+DM44Qvh25UDQpbjStv0Aph0tXMtIKNnDOp3pChhbmajhnl3OTK//prdYXzwIuz4nBqm+0eaqq6rd+dMCAnBYw1rvU4LVZlwnGN702lD8kfKwindWmEhfFSVwXGzsCpPxaBjOlF/B7dQoxmYj7rpa8ZRTiS8HImRDy+qprqQmUolqVFJ2gLcaIT6LRVGhvLpS+xjN9s1oBYYIw5UK+D/O69tCPNCbGuGEctVsX+R46Hip3Q4ZhnMKvpXwn0Cilf3xU77YuuPuQ3H9K7z8WC0OMP/J/0HzfBwCkCkkC8jx4fjo+fPYM/TB78BZGEgTp2+2/8AsJH6KCxknvmQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("picture",{parentName:"span"},"\n        ",Object(r.b)("source",Object(n.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/ea47a9161e1e20957d4a5ed2b528902d/0eda2/curam_jmsqueue_message_flow.webp 288w","/spm-kubernetes/static/ea47a9161e1e20957d4a5ed2b528902d/460e2/curam_jmsqueue_message_flow.webp 576w","/spm-kubernetes/static/ea47a9161e1e20957d4a5ed2b528902d/178f4/curam_jmsqueue_message_flow.webp 701w"],sizes:"(max-width: 701px) 100vw, 701px",type:"image/webp"})),"\n        ",Object(r.b)("source",Object(n.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/ea47a9161e1e20957d4a5ed2b528902d/7fc1e/curam_jmsqueue_message_flow.png 288w","/spm-kubernetes/static/ea47a9161e1e20957d4a5ed2b528902d/a5df1/curam_jmsqueue_message_flow.png 576w","/spm-kubernetes/static/ea47a9161e1e20957d4a5ed2b528902d/ed6d3/curam_jmsqueue_message_flow.png 701w"],sizes:"(max-width: 701px) 100vw, 701px",type:"image/png"})),"\n        ",Object(r.b)("img",Object(n.a)({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/ea47a9161e1e20957d4a5ed2b528902d/ed6d3/curam_jmsqueue_message_flow.png",alt:"SPM on Kubernetes - Cúram JMS queue message flow",title:"SPM on Kubernetes - Cúram JMS queue message flow",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(r.b)(l,{mdxType:"Caption"},Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Figure 1:")," Cúram JMS queue message flow")),Object(r.b)("p",null,"JMS messages are usually handled within one of the three queues: ",Object(r.b)("inlineCode",{parentName:"p"},"DPEnactment"),", ",Object(r.b)("inlineCode",{parentName:"p"},"WorkflowEnactment"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"WorkflowActivity"),"; and, if necessary, are given up to five retry attempts, which is a configurable value in MQ ",Object(r.b)("inlineCode",{parentName:"p"},"(BOTHRESH(5))"),"."),Object(r.b)("p",null,"Should the message not succeed at that point it is routed to its associated error or exception queue as shown in the diagram: ",Object(r.b)("inlineCode",{parentName:"p"},"DPEnactment")," to ",Object(r.b)("inlineCode",{parentName:"p"},"DPError"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"WorkflowEnactment")," and ",Object(r.b)("inlineCode",{parentName:"p"},"WorkflowActivity")," to ",Object(r.b)("inlineCode",{parentName:"p"},"WorkflowError"),"."),Object(r.b)("p",null,"At this point, SPM or custom error processing can take over, depending on the message type and your configuration.  Similarly, the error queues are defined to retry up to five times."),Object(r.b)("p",null,"Should the error queue processing fail the message is finally routed to the ",Object(r.b)("inlineCode",{parentName:"p"},"CuramDeadMessageQueue"),", specified as the MQ dead letter queue.\nThe message will stay until you either resend it to its originating queue or delete it, and how to do that is the subject of this document."),Object(r.b)("p",null,"Normally your only concern with respect to JMS message failures is what ends up in the dead message queue, since that represents work that should be processed but wasn’t."),Object(r.b)("p",null,"However, there are some error queue interventions that may be necessary, which are outside the scope of this document.\nFor instance, Cúram Express Rules processing will transfer messages routed to the JMS error queue to batch as discussed in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/CERReference/c_CERREF_Dependency1DependencyManagerDeferredProcessing1.html"}),"Dependency Manager deferred processing"),"."),Object(r.b)("p",null,"You should monitor the dead message queue in MQ, ",Object(r.b)("inlineCode",{parentName:"p"},"QN.CURAMDEADMESSAGEQUEUE"),", to ensure that messages are not failing to be processed, which should also be evidenced by Java exceptions in the Liberty logs and a non-zero queue depth in MQ.\nFor instance, this MQSC command displays the current queue depth for the dead message queue:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"DISPLAY QUEUE(QN.CURAMDEADMESSAGEQUEUE) CURDEPTH\n")),Object(r.b)("p",null,"There are a number of options for processing messages from ",Object(r.b)("inlineCode",{parentName:"p"},"QN.CURAMDEADMESSAGEQUEUE"),", provided by two MQ commands:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The queue load and unload command: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.ref.adm.doc/q117660_.htm"}),"dmpmqmsg")),Object(r.b)("li",{parentName:"ul"},"The run dead-letter queue handler command: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.ref.adm.doc/q083420_.htm"}),"runmqdlq"))),Object(r.b)("p",null,"Important points to remember:"),Object(r.b)(b,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," When processing messages from ",Object(r.b)("inlineCode",{parentName:"p"},"QN.CURAMDEADMESSAGEQUEUE")," you need to be aware of the original queue that the message was targeted to.\nThat is, messages from multiple queues can be routed to ",Object(r.b)("inlineCode",{parentName:"p"},"QN.CURAMDEADMESSAGEQUEUE")," and routing those messages incorrectly will result in additional errors. The dmpmqmsg command provides filtering options and runmqdlg provides a rules table.")),Object(r.b)(b,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("p",null,"Messages are processed as they arrive, with the exception of the dead message queue.\nThat is, if you load messages from ",Object(r.b)("inlineCode",{parentName:"p"},"QN.CURAMDEADMESSAGEQUEUE")," into another queue and they fail again you can end up with duplicate messages, which can be confusing and error-prone to resolve.\nTherefore, it is recommended that you clear the dead message queue before processing its contents.")),Object(r.b)("h3",null,"Dead Letter Messages example"),Object(r.b)("p",null,"This is a simple example illustrating the processing of dead letter messages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Unload the messages from the queue; for example, from the ",Object(r.b)("inlineCode",{parentName:"p"},"QN.CURAMDEADMESSAGEQUEUE")," queue in Queue Manager QM1:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$MQ_INSTALLATION_PATH/dmpmqmsg -m QM1 -i QN.CURAMDEADMESSAGEQUEUE -f dead_messages.mq\n")),Object(r.b)("p",{parentName:"li"},"  This command would copy all the message on the queue into the specified file."),Object(r.b)("p",{parentName:"li"},"  Replacing the ",Object(r.b)("inlineCode",{parentName:"p"},"-i")," option with ",Object(r.b)("inlineCode",{parentName:"p"},"-I")," would move the messages, leaving the queue empty."),Object(r.b)("p",{parentName:"li"},"  To selectively process messages you can use the search option (-s) to selectively process messages; for instance"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$MQ_INSTALLATION_PATH/dmpmqmsg -m QM1 -I QN.CURAMDEADMESSAGEQUEUE -s QN.DPENACTMENT  -dA -f DPENACTMENT.mq\n$MQ_INSTALLATION_PATH/dmpmqmsg -m QM1 -I QN.CURAMDEADMESSAGEQUEUE -s QN.WORKFLOWENACTMENT  -dA -f WORKFLOWENACTMENT.mq\n")),Object(r.b)("p",{parentName:"li"},"  This would move the messages from the ",Object(r.b)("inlineCode",{parentName:"p"},"QN.CURAMDEADMESSAGEQUEUE")," into the specified files based on the filter.\nYou could then use the ",Object(r.b)("inlineCode",{parentName:"p"},"DISPLAY QUEUE(QN.CURAMDEADMESSAGEQUEUE) CURDEPTH")," command to confirm that all messages are accounted for.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you didn’t use the ",Object(r.b)("inlineCode",{parentName:"p"},"-I")," option (or, optionally the ",Object(r.b)("inlineCode",{parentName:"p"},"-p")," option) when running the dmpmqmsg command to clear the dead message queue as its contents were processed you should do that now using the MQSC command; for instance:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"CLEAR QLOCAL (QN.CURAMDEADMESSAGEQUEUE)\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once the original problem is resolved that caused the errors, reload the messages.  For instance, using the previous filtered example:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$MQ_INSTALLATION_PATH/dmpmqmsg -m QM1 -o QN.DPENACTMENT -f DPENACTMENT.mq\n$MQ_INSTALLATION_PATH/dmpmqmsg -m QM1 -I QN.WORKFLOWENACTMENT -f WORKFLOWENACTMENT.mq\n")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-runtime-failed-jms-messages-mdx-032a55f765865107f35c.js.map