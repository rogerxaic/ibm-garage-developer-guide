(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"013z":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=a("NmYn"),r=a.n(o),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),d=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,l=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===l,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,l=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||l,o=n.baseUrl,r=n.subDirectory,b=o+"/edit/"+n.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),v=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,l=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),o=n===l,b=new RegExp(l+"/?(#.*)?$"),c=a.replace(b,n);return Object(m.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(m.b)(i.Link,{className:N.link,to:""+c},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},n))))))},t}(n.a.Component),x=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,l=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,d=s.tabs,O=s.title,v=s.theme,N=s.description,T=s.keywords,w=Object(k.a)().interiorTheme,y=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=y?l.pathname.replace(y,""):l.pathname,I=d?C.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",P=v||w;return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:P,pageTitle:O,pageDescription:N,pageKeywords:T,titleType:u},Object(m.b)(h,{title:n?Object(m.b)(n,null):O,label:"label",tabs:d,theme:P}),d&&Object(m.b)(f,{slug:C,tabs:d,currentTab:I}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:p})),Object(m.b)(g.a,{pageContext:t,location:l,slug:C,tabs:d,currentTab:I}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Iw8b:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var l,n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),b=a("T0C+"),c=(a("qKvR"),{}),s=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),p={_frontmatter:c},u=i.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"Provides the steps to install the ",Object(r.b)(b.a,{name:"longName",mdxType:"Globals"})," and setting up the  ",Object(r.b)(b.a,{name:"longName",mdxType:"Globals"})," Workshop hands on labs.")),Object(r.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(r.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/aFSt5cW9TlI",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(r.b)("h2",null,"1. Create OpenShift Cluster"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create an OpenShift Cluster for example:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The 8 hours free Cluster on ",Object(r.b)("a",{parentName:"li",href:"https://developer.ibm.com/openlabs/openshift"},"IBM Open Labs")," select lab 6 ",Object(r.b)("inlineCode",{parentName:"li"},"Bring Your Own Application")),Object(r.b)("li",{parentName:"ul"},"Deploy a Cluster on IBM Cloud VPC2 using the ",Object(r.b)("a",{parentName:"li",href:"getting-started-day-0/provision-cluster/ibm-cloud-vpc"},"Toolkit")),Object(r.b)("li",{parentName:"ul"},"On other Clouds using docs from ",Object(r.b)("a",{parentName:"li",href:"https://cloudnativetoolkit.dev/getting-started-day-0/plan-installation/multi-cloud"},"cloudnativetoolkit.dev/multi-cloud")),Object(r.b)("li",{parentName:"ul"},"IBM internal DTE Infrastructure access via ",Object(r.b)("a",{parentName:"li",href:"https://ccp-ui.csplab.intranet.ibm.com/"},"IBM VPN")," or ",Object(r.b)("a",{parentName:"li",href:"https://ccp-ui.apps.labprod.ocp.csplab.local/"},"IBM CSPLAB"))))),Object(r.b)("h2",null,"2. Install IBM Cloud Native Toolkit"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use one of the install options for example the ",Object(r.b)("a",{parentName:"li",href:"https://cloudnativetoolkit.dev/getting-started-day-0/install-toolkit/quick-install"},"Quick Install"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl -sfL get.cloudnativetoolkit.dev | sh -\n")))),Object(r.b)("h2",null,"3. Setup IBM Cloud Native Toolkit Workshop"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install the foundation for the workshops"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl -sfL workshop.cloudnativetoolkit.dev | sh -\n")),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("strong",{parentName:"p"},"Note"),": The username and password for Git Admin is ",Object(r.b)("inlineCode",{parentName:"p"},"toolkit")," ",Object(r.b)("inlineCode",{parentName:"p"},"toolkit")))),Object(r.b)("h2",null,"4. (Optional) Auto configure Terminal Shell"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can use ",Object(r.b)("a",{parentName:"p",href:"https://cloud.ibm.com/shell"},"IBM Cloud Shell"),", the ",Object(r.b)("a",{parentName:"p",href:"https://developer.ibm.com/openlabs/openshift"},"OpenLabs Shell")," or your local workstation. More details in ",Object(r.b)("a",{parentName:"p",href:"https://cloudnativetoolkit.dev/getting-started/dev-env-setup"},"Toolkit Dev Setup")," and ",Object(r.b)("a",{parentName:"p",href:"https://cloudnativetoolkit.dev/getting-started/cli"},"Toolkit CLI"),".\nRun the following command on Cloud, Linux or MacOS shell:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl -sL shell.cloudnativetoolkit.dev | sh -\n")),Object(r.b)("p",{parentName:"li"},"  Be sure to follow the instructions provided to enable the changes in the current terminal session."))))}d.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-workshop-setup-index-mdx-950282fa2de0ccf9b6a1.js.map