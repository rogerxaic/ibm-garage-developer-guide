(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{fUtK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),r=a("8o2o"),i=(a("q1tI"),a("7ljp")),b=a("013z"),l=a("T0C+"),o=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},p=c("PageDescription"),s=c("Tabs"),d=c("Tab"),m=c("InlineNotification"),O={_frontmatter:o},j=b.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(j,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(p,{mdxType:"PageDescription"},Object(i.b)("p",null,"Steps to prepare an environment using the ",Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"})," for ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"}),"-managed clusters running on VPC infrastructure")),Object(i.b)("p",null,"See the following for instructions on how to\nprovision ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./ibm-cloud-on-classic"}),"new ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"}),"-managed clusters running on classic\ninfrastructure")),Object(i.b)(s,{mdxType:"Tabs"},Object(i.b)(d,{label:"Private Catalog",open:"true",mdxType:"Tab"},Object(i.b)("p",null,"One of the features of the IBM Cloud Catalog is support for private catalog tiles. These can\ncontain custom Terraform definitions that can accelerate SRE teams in the execution of common\nand repetitive tasks. The ",Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"})," tools installation can be configured as\na private catalog tile. This is the recommended approach for using this asset multiple times.\nThis asset enables the easy transition of a default cluster into a cluster that supports\nCloud-Native CI/CD development tools."),Object(i.b)("h3",null,"A. Create the catalog"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to the ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"})," Console"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Manage->Catalogs")," from the top menu"),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Create Catalog")),Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("inlineCode",{parentName:"li"},"Create a catalog")," dialog, provide the following values:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"name:")," the name of the catalog, for example ",Object(i.b)("inlineCode",{parentName:"li"},"Team Catalog")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"description:")," (optional) a brief description of the purpose of the catalog"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"products:")," select ",Object(i.b)("strong",{parentName:"li"},"Start with no products")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"resource group:")," click ",Object(i.b)("strong",{parentName:"li"},"Update")," to change the default resource group for the catalog"))),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Create")," to complete the catalog creation")),Object(i.b)("h3",null,"B. Register the ",Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"})," tiles in the catalog"),Object(i.b)(m,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The following instructions depend on the ",Object(i.b)("inlineCode",{parentName:"p"},"jq")," command. The information for installing\n",Object(i.b)("inlineCode",{parentName:"p"},"jq")," can be found on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/prereqs"}),Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"})," prerequisites")," page")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download ",Object(i.b)("inlineCode",{parentName:"li"},"create-catalog-offering.sh")," from the ",Object(i.b)("a",{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/latest",target:"_blank"},"latest Iteration Zero release")," and make the file executable",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"LATEST_RELEASE=$(curl -s https://api.github.com/repos/ibm-garage-cloud/ibm-garage-iteration-zero/releases/latest | jq -r '.tag_name')\ncurl -OL https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/download/${LATEST_RELEASE}/create-catalog-offering.sh\nchmod +x create-catalog-offering.sh\n"))),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"create-catalog-offering.sh")," scripts passing in the API Key and the name of the catalog that you created",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'./create-catalog-offering.sh {API_KEY} "Team Catalog"\n')))),Object(i.b)("h3",null,"C. Apply the tile"),Object(i.b)("p",null,"Once the tile has been installed it can be used repeatedly to set up clusters with\nthe CNCF tools. Each time the tile is applied, a set of configuration variables are\nrequired."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to the ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"})," Console.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("strong",{parentName:"p"},"Catalog")," from the top menu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the side menu, select your catalog from the drop-down list (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Team Catalog"),"). (",Object(i.b)("strong",{parentName:"p"},"IBM Cloud catalog")," should be selected initially.)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Private")," on the side menu to see the private catalog entries ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Cloud-Native Toolkit")," tile")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter values for the variables list provided."),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Variable")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"eg. Value")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ibmcloud_api_key")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The API key from IBM Cloud Console that has ClusterAdmin access and supports service creation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"{guid API key from Console}"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Existing resource group in the account where the cluster has been created"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"region")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The region where the cluster has been provisioned"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(i.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating if the cluster already exists. (",Object(i.b)("inlineCode",{parentName:"td"},"false")," means the cluster should be provisioned)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"vpc_cluster")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that the cluster has been built on VPC infrastructure"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"vpc_zone_names")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A comma-separated list of the VPC zones that should be used for worker nodes. This value is requored if ",Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," and ",Object(i.b)("inlineCode",{parentName:"td"},"vpc_cluster")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"us-south-1")," or ",Object(i.b)("inlineCode",{parentName:"td"},"us-east-1,us-east-2"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the cluster (If ",Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true")," then this name should match an existing cluster)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of cluster into which the toolkit will be installed"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ocp4")," or ",Object(i.b)("inlineCode",{parentName:"td"},"ocp44"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"registry_namespace")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The namespace that should be used in the IBM Container Registry. If not provided the value will default to the resource group name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one-registry-2020"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"provision_logdna")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of LogDNA should be provisioned"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"logdna_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the LogDNA instance (If ",Object(i.b)("inlineCode",{parentName:"td"},"provision_logdna")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing LogDNA instance to the cluster)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cntk-showcase-logdna"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"provision_sysdig")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of Sysdig should be provisioned"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sysdig_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the Sysdig instance (If ",Object(i.b)("inlineCode",{parentName:"td"},"provision_sysdig")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing Sysdig instance to the cluster)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cntk-showcase-sysdig"))))),Object(i.b)(m,{mdxType:"InlineNotification"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," Provisioning a new cluster using classic infrastructure is not supported with the tile install. In this case\nyou are recommended to either create the cluster using the ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"})," Console then use the tile\nto install the Toolkit ",Object(i.b)("strong",{parentName:"p"},"OR")," to install with one of the other methods."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the box to accept the ",Object(i.b)("strong",{parentName:"p"},"Apache 2")," license for the tile.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Install")," to start the install process"))),Object(i.b)("p",null,"This will kick off the installation of the ",Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"})," using an\nIBM Cloud Private Catalog Tile. The progress can be reviewed from the\n",Object(i.b)("strong",{parentName:"p"},"Schematics")," entry")),Object(i.b)(d,{label:"Iteration Zero",mdxType:"Tab"},Object(i.b)("h3",null,"A. Download the Iteration Zero scripts"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n")))),Object(i.b)("h3",null,"B. Configure the credentials"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In a terminal, change to the ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," cloned directory"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cd ibm-garage-iteration-zero\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.template")," file to a file named ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cp credentials.template credentials.properties\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," is already listed in ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," to prevent the\nprivate credentials from being committed to the git repository")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update the value for the ",Object(i.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property in ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," with your ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"})," API key"),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," The API key should have been set up during ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started-0/plan-installation/ibm-cloud"}),"plan installation"),"."))),Object(i.b)("h3",null,"C. Configure the environment variables"),Object(i.b)("p",null,"The settings for creating the ",Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"})," on ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"})," are set in the ",Object(i.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars"),"\nfile in the ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory of the ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," repository."),Object(i.b)("p",null,"There are a number of values that can be applied in the file, some required and some optional. Consult with\nthe following table to determine which values should be used:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Variable")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Required?")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"eg. Value")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of cluster into which the toolkit will be installed"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ocp4")," or ",Object(i.b)("inlineCode",{parentName:"td"},"ocp44"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating if the cluster already exists. (",Object(i.b)("inlineCode",{parentName:"td"},"false")," means the cluster should be provisioned)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Existing resource group in the account where the cluster has been created"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"vpc_cluster")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that the cluster has been built on VPC infrastructure. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name_prefix")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The prefix that should be applied for any resources that are provisioned. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"{resource_group_name}")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dev-one"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"region")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The region where the cluster has been/will be provisioned"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(i.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"vpc_zone_names")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A comma-separated list of the VPC zones that should be used for worker nodes. This value is required if ",Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," and ",Object(i.b)("inlineCode",{parentName:"td"},"vpc_cluster")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"us-south-1")," or ",Object(i.b)("inlineCode",{parentName:"td"},"us-east-1,us-east-2"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the cluster (If ",Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true")," then this name should match an existing cluster). Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"{prefix_name}-cluster")," or ",Object(i.b)("inlineCode",{parentName:"td"},"{resource_group_name}-cluster")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"registry_namespace")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The namespace that should be used in the IBM Container Registry. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"{resource_group_name}")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one-registry-2020"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"provision_logdna")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of LogDNA should be provisioned. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"logdna_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the LogDNA instance (If ",Object(i.b)("inlineCode",{parentName:"td"},"provision_logdna")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing LogDNA instance to the cluster)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cntk-showcase-logdna"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"provision_sysdig")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of Sysdig should be provisioned. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sysdig_name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the Sysdig instance (If ",Object(i.b)("inlineCode",{parentName:"td"},"provision_sysdig")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing Sysdig instance to the cluster)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cntk-showcase-sysdig"))))),Object(i.b)("br",null),Object(i.b)("p",null,"Update ",Object(i.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars")," with the appropriate values for your installation."),Object(i.b)("h3",null,"D. (Optional) Customize the installed components"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory contains the default set of stages that define the\nmodules that will be applied to the environment. The stages can be customized to change\nthe makeup of the environment that is provisioned by either removing or adding stages from/to the\n",Object(i.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The stages occasionally have dependencies on other stages (e.g. most all\ndepend on the cluster module, many depend on the namespace module, etc.) so be aware of those\ndependencies as you start making changes. Dependencies are reflected in the ",Object(i.b)("inlineCode",{parentName:"p"},"module.{stage name}")," references\nin the stage variable list."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/stages/catalog")," directory contains some optional\nstages that are prep-configured and can be dropped into the ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory. Other\nmodules are available from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"}),"Garage Terraform Modules"),"\ncatalog and can be added as stages to the directory as well. Since this is Terraform,\nany other Terraform scripts and modules can be added to the ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory\nas desired."),Object(i.b)("h3",null,"E. Run the installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open a terminal to the ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," directory")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Launch a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container")," from which the Terraform scripts will be run"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./launch.sh\n")),Object(i.b)("p",{parentName:"li"},"This will download the Cloud Garage Tools Docker image that contains all the necessary tools to execute Terraform scripts\nand exec shell into the running container. When the container starts it\nmounts the filesystem’s ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(i.b)("inlineCode",{parentName:"p"},"/home/devops/src/")," and loads the values from the\n",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," file as environment variables.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Apply the Terraform by running the provided ",Object(i.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./runTerraform.sh\n")),Object(i.b)("p",{parentName:"li"},"This script collects the values provided in the ",Object(i.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars")," and the\nstages defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/stages")," to build the Terraform workspace. Along the way it\nwill prompt for a couple pieces of information."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Type of installation: ",Object(i.b)("inlineCode",{parentName:"p"},"ibmcloud")," or ",Object(i.b)("inlineCode",{parentName:"p"},"ocp")),Object(i.b)("p",{parentName:"li"},"There are two major paths to installing with the Toolkit. In this case, we are installing\ninto an ",Object(i.b)(l.a,{name:"ic",mdxType:"Globals"}),"-managed environment so we will select ",Object(i.b)("inlineCode",{parentName:"p"},"ibmcloud"),"."),Object(i.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(i.b)("inlineCode",{parentName:"p"},"--ibmcloud")," as an argument to ",Object(i.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Handling of an old workspace (if applicable): ",Object(i.b)("inlineCode",{parentName:"p"},"keep")," or ",Object(i.b)("inlineCode",{parentName:"p"},"delete")),Object(i.b)("p",{parentName:"li"},"If you executed the script previously for the current cluster configuration and the workspace directory still\nexists then you will be prompted to either keep or delete the workspace directory. Keep the workspace directory if\nyou want to use the state from the previous run as a starting point to either add or remove configuration. Delete\nthe workspace if you want to start with a clean install of the Toolkit. "),Object(i.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(i.b)("inlineCode",{parentName:"p"},"--delete")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--keep")," as an argument to ",Object(i.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify the installation configuration"),Object(i.b)("p",{parentName:"li"},"The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(i.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(i.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(i.b)("inlineCode",{parentName:"p"},"--auto-approve")," as an argument to ",Object(i.b)("inlineCode",{parentName:"p"},"./runTerraform.sh")))),Object(i.b)("p",{parentName:"li"},"Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer)\nand the rest of the process takes about 30 minutes."))))),Object(i.b)("h2",null,"Post-installation steps"),Object(i.b)("p",null,"Once the Terraform has completed, walk through the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started-day-0/post-installation"}),"post installation steps")," to\nexplore and verify the environment."),Object(i.b)("h2",null,"Troubleshooting"),Object(i.b)("p",null,"If you find that the Terraform provisioning has failed, try re-running the ",Object(i.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(i.b)("p",null,"If you find that some of the services have failed to create in the time allocated, try the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Manually delete the service instances in your resource group"),Object(i.b)("li",{parentName:"ol"},"Re-run the ",Object(i.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script with the ",Object(i.b)("inlineCode",{parentName:"li"},"--delete")," argument to clean up the state",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./runTerraform.sh --delete\n")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-install-toolkit-ibm-cloud-on-vpc-mdx-7ca5e5636738235e1718.js.map