(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{332:function(e,t,s){e.exports=s.p+"assets/img/scm_day3.6cc16370.png"},333:function(e,t,s){e.exports=s.p+"assets/img/scm_day3_vr.07a34e4b.png"},596:function(e,t,s){e.exports=s.p+"assets/img/architecture_day3breakout.183cff63.png"},597:function(e,t,s){e.exports=s.p+"assets/img/scm_day3_search.099d4aa4.png"},598:function(e,t,s){e.exports=s.p+"assets/img/bo_data_sql.9f085225.png"},599:function(e,t,s){e.exports=s.p+"assets/img/bo_data_cosmos.e84b52f9.png"},600:function(e,t,s){e.exports=s.p+"assets/img/bo_data_search.6b5cb56e.png"},601:function(e,t,s){e.exports=s.p+"assets/img/portal_bo_adjust_contactsapi.6775c14b.png"},602:function(e,t,s){e.exports=s.p+"assets/img/portal_bo_adjust_resapi.06fa779a.png"},603:function(e,t,s){e.exports=s.p+"assets/img/portal_bo_adjust_imgmanipulation.c8d30316.png"},604:function(e,t,s){e.exports=s.p+"assets/img/portal_bo_add_search.d8c344a0.png"},605:function(e,t,s){e.exports=s.p+"assets/img/portal_bo_add_searchindexer.fc20afbe.png"},606:function(e,t,s){e.exports=s.p+"assets/img/architecture_day3breakout1.f7279020.png"},607:function(e,t,s){e.exports=s.p+"assets/img/day3_bo_tux_vr.feb3d315.png"},608:function(e,t,s){e.exports=s.p+"assets/img/portal_bo_add_vr.6074b5b9.png"},609:function(e,t,s){e.exports=s.p+"assets/img/day3_bo_tux_vr_swagger.ecdca7ea.png"},751:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"break-out-1-add-data-storage-services-to-our-sample-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#break-out-1-add-data-storage-services-to-our-sample-application"}},[e._v("#")]),e._v(" Break Out #1: Add data storage services to our sample application")]),e._v(" "),a("p",[e._v("Now that we have made experience with Azure SQL DB, Azure CosmosDB and Azure (Cognitive) Search, it is time to add these services to our sample application. At the end of the day, the architecture will have progressed to this:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(596),alt:"architecture_day3",title:"architecture_day3"}})]),e._v(" "),a("p",[e._v('As you can see, we will introduce a new microservice (with its own data store - Cosmos DB) called "Visit Reports", that allows us to add visit reports to existing contacts. We will have a '),a("em",[e._v("1-to-many")]),e._v(" relation between "),a("em",[e._v("Contacts")]),e._v(" and "),a("em",[e._v("Visit Reports")]),e._v(". And, to have the Visit Reports service being able to work on its own, it will also store some data coming from the "),a("em",[e._v("Contacts")]),e._v(" service. So there will be some kind of duplication of data, which - in a microservice approach - is not an unusual thing.")]),e._v(" "),a("p",[e._v("The services interact via the Azure Service Bus (Producer/Consumer pattern) and exchange data, when events occurs in e.g. the "),a("em",[e._v("Contacts")]),e._v(" service.")]),e._v(" "),a("p",[e._v("The advantage is, that the services aren't tied together via REST calls and can work and be scaled independently. If we would introduce another service in the future that needs information from a contact, we would simply introduce another consumer for the "),a("em",[e._v("Contacts")]),e._v(" topic.")]),e._v(" "),a("p",[e._v("In addition, we will also be migrating the Storage Queue services (for image resizing) to Azure Service Bus Queues so that we only have one messaging component in our architecture.")]),e._v(" "),a("p",[e._v("The frontend will also change, as we introduce a new service:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(332),alt:"scm_day3",title:"scm_day3"}}),e._v(" "),a("img",{attrs:{src:s(333),alt:"scm_day3_vr",title:"scm_day3_vr"}}),e._v(" "),a("img",{attrs:{src:s(597),alt:"scm_day3_search",title:"scm_day3_search"}})]),e._v(" "),a("h2",{attrs:{id:"setup-data-storage-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-data-storage-services"}},[e._v("#")]),e._v(" Setup Data Storage Services")]),e._v(" "),a("p",[e._v("First of all, we now add an Azure SQL DB, Cosmos DB and an Azure Search service for the application.")]),e._v(" "),a("h3",{attrs:{id:"sql-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-db"}},[e._v("#")]),e._v(" SQL DB")]),e._v(" "),a("p",[e._v("Create a new Azure SQL DB either via the Azure Portal or Azure CLI.")]),e._v(" "),a("p",[e._v("Database Properties:")]),e._v(" "),a("ul",[a("li",[e._v("use your existing resource group: "),a("strong",[e._v("scm-breakout-rg")])]),e._v(" "),a("li",[e._v("SKU: Basic")]),e._v(" "),a("li",[e._v("Location: "),a("em",[e._v("West Europe")])]),e._v(" "),a("li",[e._v("Create a new server in "),a("em",[e._v("West Europe")])]),e._v(" "),a("li",[e._v("Networking Tab: "),a("em",[e._v("Connectivity => Public")]),e._v(" and "),a("strong",[e._v("Allow Azure services and resources to access this server")]),e._v(" is set to "),a("strong",[e._v("YES")]),e._v(".")])]),e._v(" "),a("p",[e._v("Leave all other settings as proposed by Azure.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(598),alt:"bo_data_sql",title:"bo_data_sql"}})]),e._v(" "),a("h3",{attrs:{id:"cosmos-db-sql-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-db-sql-api"}},[e._v("#")]),e._v(" Cosmos DB / SQL API")]),e._v(" "),a("p",[e._v("Create a new Azure Cosmos Account either via the Azure Portal or Azure CLI. BTW: You can do this while Azure SQL DB is created.")]),e._v(" "),a("p",[e._v("Account Properties:")]),e._v(" "),a("ul",[a("li",[e._v("use your existing resource group: "),a("strong",[e._v("scm-breakout-rg")])]),e._v(" "),a("li",[e._v("Location: "),a("em",[e._v("West Europe")])]),e._v(" "),a("li",[e._v("API: "),a("em",[e._v("Core SQL")])])]),e._v(" "),a("p",[e._v("Leave all other settings as proposed by Azure.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(599),alt:"bo_data_cosmos",title:"bo_data_cosmos"}})]),e._v(" "),a("p",[e._v("When the deployment has finished, create a new "),a("em",[e._v("Database")]),e._v(" and "),a("em",[e._v("Container")]),e._v(" for the Visis Reports microservice.")]),e._v(" "),a("p",[e._v("Database Properties:")]),e._v(" "),a("ul",[a("li",[e._v("Database ID: "),a("em",[e._v("scmvisitreports")])]),e._v(" "),a("li",[e._v("Provision Database Throughput: "),a("em",[e._v("true")])]),e._v(" "),a("li",[e._v("RU/s: "),a("em",[e._v("Manual / 400")])])]),e._v(" "),a("p",[e._v("Container Properties:")]),e._v(" "),a("ul",[a("li",[e._v("Database ID: "),a("em",[e._v("scmvisitreports")])]),e._v(" "),a("li",[e._v("Container ID: "),a("em",[e._v("visitreports")])]),e._v(" "),a("li",[e._v("Partition: "),a("em",[e._v("/type")])])]),e._v(" "),a("h3",{attrs:{id:"azure-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-search"}},[e._v("#")]),e._v(" Azure Search")]),e._v(" "),a("p",[e._v("Create a new Azure Search Account either via the Azure Portal or Azure CLI.")]),e._v(" "),a("p",[e._v("Account Properties:")]),e._v(" "),a("ul",[a("li",[e._v("use your existing resource group: "),a("strong",[e._v("scm-breakout-rg")])]),e._v(" "),a("li",[e._v("Location: "),a("em",[e._v("West Europe")])]),e._v(" "),a("li",[e._v("Pricing Tier: "),a("em",[e._v("Free")]),e._v(" (for development purposes)")])]),e._v(" "),a("p",[e._v("Leave all other settings as proposed by Azure.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(600),alt:"bo_data_search",title:"bo_data_search"}})]),e._v(" "),a("h2",{attrs:{id:"setup-messaging-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-messaging-services"}},[e._v("#")]),e._v(" Setup Messaging Services")]),e._v(" "),a("p",[e._v("Create a new Azure Service Bus either via the Azure Portal or Azure CLI.")]),e._v(" "),a("p",[e._v("Service Bus Properties:")]),e._v(" "),a("ul",[a("li",[e._v("use your existing resource group: "),a("strong",[e._v("scm-breakout-rg")])]),e._v(" "),a("li",[e._v("Pricing Tier: "),a("em",[e._v("Standard")])]),e._v(" "),a("li",[e._v("Location: "),a("em",[e._v("West Europe")])])]),e._v(" "),a("p",[e._v("Leave all other settings as proposed by Azure.")]),e._v(" "),a("h3",{attrs:{id:"service-bus-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-bus-queue"}},[e._v("#")]),e._v(" Service Bus Queue")]),e._v(" "),a("p",[e._v("When the deployment of the new Service Bus has finished, we need to add a Service Bus "),a("strong",[e._v("Queue")]),e._v(". The queue will replace the Storage Account Queue we used to notify an Azure Function that creates thumbnails of contact images.")]),e._v(" "),a("p",[e._v("Service Bus Queue Properties:")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("thumbnails")])])]),e._v(" "),a("p",[e._v("When successfully added, go to "),a("strong",[e._v("Shared Access Policies")]),e._v(" of the "),a("strong",[e._v("Service Bus Queue (!)")]),e._v(" and add two policies:")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("thumbnailslisten")]),e._v(" (enable checkbox "),a("strong",[e._v("Listen")]),e._v(")\n"),a("ul",[a("li",[e._v("will be used by clients that only need to listen to the Service Bus Queue")])])]),e._v(" "),a("li",[e._v("Name: "),a("em",[e._v("thumbnailssend")]),e._v(" (enable checkbox "),a("strong",[e._v("Send")]),e._v(")\n"),a("ul",[a("li",[e._v("will be used by clients that also need to be able to send messages to the Service Bus Queue")])])])]),e._v(" "),a("p",[e._v("Our producers/consumers will use these Access Policies to be able to send and listen to/on that specific queue.")]),e._v(" "),a("h3",{attrs:{id:"service-bus-topic-for-contacts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-bus-topic-for-contacts"}},[e._v("#")]),e._v(" Service Bus Topic for Contacts")]),e._v(" "),a("p",[e._v("We also nee a topic for handling "),a("em",[e._v("Contacts")]),e._v(" changes (create, update etc.) with corresponding subscriptions. Go back to the Service Bus Namespace in the Portal and add a new topic.")]),e._v(" "),a("p",[e._v("Contacts Topic Properties:")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("scmtopic")])])]),e._v(" "),a("p",[e._v("Leave all other settings as is and click "),a("strong",[e._v("Create")]),e._v(". When finished, open the topic and add two subscriptions.")]),e._v(" "),a("p",[e._v("Subscription for Search Service / indexing of contacts:")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("scmcontactsearch")])]),e._v(" "),a("li",[e._v("Max delivery count: 10")]),e._v(" "),a("li",[a("strong",[e._v("Enable Sessions")]),e._v(": "),a("em",[e._v("true")]),e._v(" (in this sample, we will be using Service Bus sessions!)")])]),e._v(" "),a("p",[e._v("Subscription for Visit Reports Service")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("scmcontactvisitreport")])]),e._v(" "),a("li",[e._v("Max delivery count: 10")])]),e._v(" "),a("p",[e._v("When you have successfully added the two subscriptions, go back to "),a("strong",[e._v("Shared Access Policies")]),e._v(" of the Service Bus Topic "),a("strong",[e._v("scmtopic")]),e._v(" and add two policies:")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("scmtopiclisten")]),e._v(" (enable checkbox "),a("strong",[e._v("Listen")]),e._v(")\n"),a("ul",[a("li",[e._v("will be used by clients that only need to listen to the Service Bus Topic")])])]),e._v(" "),a("li",[e._v("Name: "),a("em",[e._v("scmtopicsend")]),e._v(" (enable checkbox "),a("strong",[e._v("Send")]),e._v(")\n"),a("ul",[a("li",[e._v("will be used by clients that also need to be able to send messages to the Service Bus Topic")])])])]),e._v(" "),a("h3",{attrs:{id:"service-bus-topic-for-visit-reports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-bus-topic-for-visit-reports"}},[e._v("#")]),e._v(" Service Bus Topic for Visit Reports")]),e._v(" "),a("p",[e._v("We also need a topic for handling "),a("em",[e._v("Visit Report")]),e._v(" changes (create, update etc.). Go back to the Service Bus Namespace in the Portal and add a new topic.")]),e._v(" "),a("p",[e._v("Visit Reports Topic Properties:")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("scmvrtopic")])])]),e._v(" "),a("p",[e._v("Leave all other settings as is and click "),a("strong",[e._v("Create")]),e._v(".")]),e._v(" "),a("p",[e._v("When successfully added, go back to "),a("strong",[e._v("Shared Access Policies")]),e._v(" of the Service Bus Topic "),a("strong",[e._v("scmvrtopic")]),e._v(" and add two policies:")]),e._v(" "),a("ul",[a("li",[e._v("Name: "),a("em",[e._v("scmvrtopiclisten")]),e._v(" (enable checkbox "),a("strong",[e._v("Listen")]),e._v(")\n"),a("ul",[a("li",[e._v("will be used by clients that only need to listen to the Service Bus Topic")])])]),e._v(" "),a("li",[e._v("Name: "),a("em",[e._v("scmvrtopicsend")]),e._v(" (enable checkbox "),a("strong",[e._v("Send")]),e._v(")\n"),a("ul",[a("li",[e._v("will be used by clients that also need to be able to send messages to the Service Bus Topic")])])])]),e._v(" "),a("p",[e._v("We don't add a subscription for the "),a("em",[e._v("visit report")]),e._v(" topic at the moment. The topic will be used later when we integrate further services like Azure Congitive Services.")]),e._v(" "),a("h2",{attrs:{id:"quality-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quality-check"}},[e._v("#")]),e._v(" Quality Check")]),e._v(" "),a("p",[e._v("You should have created the following Azure Services by now:")]),e._v(" "),a("ul",[a("li",[e._v("Azure SQL DB")]),e._v(" "),a("li",[e._v("Azure Cosmos DB (database + container)")]),e._v(" "),a("li",[e._v("Azure Search")]),e._v(" "),a("li",[e._v("Azure Service Bus\n"),a("ul",[a("li",[e._v("Queue for thumbnail generation\n"),a("ul",[a("li",[e._v("Shared Access Policies for "),a("em",[e._v("listen")]),e._v(" and "),a("em",[e._v("send")])])])]),e._v(" "),a("li",[e._v("Topic for Contacts\n"),a("ul",[a("li",[e._v("Shared Access Policies for "),a("em",[e._v("listen")]),e._v(" and "),a("em",[e._v("send")])]),e._v(" "),a("li",[e._v("subscription for visit reports")]),e._v(" "),a("li",[e._v("subscription for search service")])])]),e._v(" "),a("li",[e._v("Topic for Visit Reports\n"),a("ul",[a("li",[e._v("Shared Access Policies for "),a("em",[e._v("listen")]),e._v(" and "),a("em",[e._v("send")])])])])])])]),e._v(" "),a("p",[e._v("If you missed to create one of these services, please go back to the corresponding section.")]),e._v(" "),a("h2",{attrs:{id:"deploy-new-contacts-resources-service-and-image-resizer-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-new-contacts-resources-service-and-image-resizer-function"}},[e._v("#")]),e._v(" Deploy new Contacts/Resources Service and Image Resizer Function")]),e._v(" "),a("p",[e._v("Because we refactored the Contacts and Resources APIs to use Azure Service Bus for inter-service communication, we need to deploy new versions of these services and change some of the App Configuration/Settings we added yesterday.")]),e._v(" "),a("h3",{attrs:{id:"alter-app-configuration-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-app-configuration-settings"}},[e._v("#")]),e._v(" Alter App Configuration/Settings")]),e._v(" "),a("p",[e._v("We will "),a("strong",[e._v("reuse the Web Apps for Contacts and Resource")]),e._v("s as well as the Azure Function for image manipulation we created yesterday. So, first we will adjust the App Configuration for each of the services.")]),e._v(" "),a("blockquote",[a("p",[e._v("Use a second window to be able to switch back and forth.")])]),e._v(" "),a("p",[e._v("Azure Web App for "),a("strong",[e._v("Contacts Service")]),e._v(":")]),e._v(" "),a("p",[e._v("Application Configuration/Settings:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("EventServiceOptions__ServiceBusConnectionString")]),e._v(" "),a("td",[e._v("use the Connection String from the Shared Access Policy ("),a("strong",[e._v("Topic scmtopic")]),e._v(") for sending messages - "),a("strong",[e._v("scmtopicsend")])])])])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Connection Strings:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")]),e._v(" "),a("th",[e._v("Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("DefaultConnectionString")]),e._v(" "),a("td",[e._v('go to the Azure SQL DB you created and use the ADO.NET connection string (under "'),a("strong",[e._v("Settings")]),e._v('" / "'),a("strong",[e._v("Connection strings")]),e._v("\"). Don't forget to add your password to the connection string!")]),e._v(" "),a("td",[a("em",[e._v("SqlAzure")])])])])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("p",[a("img",{attrs:{src:s(601),alt:"portal_bo_adjust_contactsapi",title:"portal_bo_adjust_contactsapi"}})]),e._v(" "),a("p",[e._v("Azure Web App for "),a("strong",[e._v("Resources Service")]),e._v(":")]),e._v(" "),a("p",[e._v("Application Settings:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("ImageStoreOptions__ThumbnailContainer")]),e._v(" "),a("td",[a("em",[e._v("thumbnails")])])]),e._v(" "),a("tr",[a("td",[e._v("ImageStoreOptions__ImageContainer")]),e._v(" "),a("td",[a("em",[e._v("rawimages")])])]),e._v(" "),a("tr",[a("td",[e._v("ImageStoreOptions__StorageAccountConnectionString")]),e._v(" "),a("td",[e._v("use the "),a("strong",[e._v("Connection String")]),e._v(" from your Storage Account created in the Break Out session yesterday (should be the same)")])]),e._v(" "),a("tr",[a("td",[e._v("ServiceBusQueueOptions__ImageContainer")]),e._v(" "),a("td",[a("em",[e._v("rawimages")])])]),e._v(" "),a("tr",[a("td",[e._v("ServiceBusQueueOptions__ThumbnailContainer")]),e._v(" "),a("td",[a("em",[e._v("thumbnails")])])]),e._v(" "),a("tr",[a("td",[e._v("ServiceBusQueueOptions__ThumbnailQueueConnectionString")]),e._v(" "),a("td",[e._v("use the Connection String from the Shared Access Policy ("),a("strong",[e._v("Queue")]),e._v(") for sending messages - "),a("strong",[e._v("thumbnailssend")])])])])]),e._v(" "),a("blockquote",[a("p",[e._v("You can delete all "),a("strong",[e._v("StorageQueueOptions__")]),e._v(" app settings!")])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("p",[a("img",{attrs:{src:s(602),alt:"portal_bo_adjust_imgmanipulation",title:"portal_bo_adjust_resapi"}})]),e._v(" "),a("p",[e._v("Azure Function for "),a("strong",[e._v("Image Manipulation / Resizer Service")]),e._v(":")]),e._v(" "),a("p",[e._v("Configuration / Application Settings:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("ServiceBusConnectionString")]),e._v(" "),a("td",[e._v("use the Connection String from the Shared Access Policy ("),a("strong",[e._v("Queue")]),e._v(") for listening for messages - "),a("strong",[e._v("thumbnailslisten")])])]),e._v(" "),a("tr",[a("td",[e._v("ImageProcessorOptions__ImageWidth")]),e._v(" "),a("td",[a("em",[e._v("100")])])]),e._v(" "),a("tr",[a("td",[e._v("ImageProcessorOptions__StorageAccountConnectionString")]),e._v(" "),a("td",[e._v("use the "),a("strong",[e._v("Connection String")]),e._v(" from your Storage Account created in the Break Out session yesterday (should be the same)")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("You can delete the "),a("strong",[e._v("QueueName")]),e._v(" app settings!")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(603),alt:"portal_bo_adjust_imgmanipulation",title:"portal_bo_adjust_imgmanipulation"}})]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"redeploy-your-services-for-contacts-resources-and-image-manipulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redeploy-your-services-for-contacts-resources-and-image-manipulation"}},[e._v("#")]),e._v(" Redeploy your services for Contacts, Resources and Image Manipulation")]),e._v(" "),a("p",[e._v("First of all: as seen in the Break Out session yesterday, everything is pre-created for you...this time in the folder "),a("strong",[a("em",[e._v("day3/apps")])]),e._v(".")]),e._v(" "),a("p",[e._v("You have deployed web apps and functions several times yesterday, so you should be familiar, how to update the forementioned services.")]),e._v(" "),a("p",[e._v("So please redeploy the Web Apps from folder "),a("em",[e._v("day3/apps/dotnetcore/Scm/Adc.Scm.Api")]),e._v(" and "),a("em",[e._v("day3/apps/dotnetcore/Scm.Resources/Adc.Scm.Resources.Api")]),e._v(". (Tasks to publish the applications to a local folder are available. "),a("strong",[e._v("F1 --\x3e Tasks: Run Task --\x3e day3publish*")]),e._v(").")]),e._v(" "),a("p",[e._v("Do the same with the Image Manipulation Function in folder "),a("em",[e._v("day3/apps/dotnetcore/Scm.Resources/Adc.Scm.Resources.ImageResizer")]),e._v(" ("),a("strong",[e._v("Reminder")]),e._v(": open the functions app source folder as a separate Window when deploying from VS Code!)")]),e._v(" "),a("h3",{attrs:{id:"deploy-the-contacts-search-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-contacts-search-service"}},[e._v("#")]),e._v(" Deploy the Contacts Search Service")]),e._v(" "),a("p",[e._v("To be able to run the Contacts Search service (where we leverage the core functionality of Azure Search), we first need an Azure Web App to host it. So, please go to the Portal (or use Azure CLI) and create a basic Azure Web App (with a new Azure AppService Plan on Windows, Runtime "),a("strong",[e._v(".NET Core 3.1")]),e._v(") - use SKU / Size "),a("strong",[e._v("S1")]),e._v(".")]),e._v(" "),a("p",[e._v("When finished, apply these settings to the Web App Configuration settings:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("ContactSearchOptions__AdminApiKey")]),e._v(" "),a("td",[e._v("use the Primary Admin Key from Azure Search (under "),a("strong",[e._v("Settings / Keys")]),e._v(")")])]),e._v(" "),a("tr",[a("td",[e._v("ContactSearchOptions__IndexName")]),e._v(" "),a("td",[a("em",[e._v("scmcontacts")])])]),e._v(" "),a("tr",[a("td",[e._v("ContactSearchOptions__ServiceName")]),e._v(" "),a("td",[e._v("the name of your previously created Azure Search (just the subdomain! So from "),a("a",{attrs:{href:"https://adcd3search-dev.search.windows.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://adcd3search-dev.search.windows.net"),a("OutboundLink")],1),e._v(", only "),a("strong",[e._v("adcd3search-dev")]),e._v(")")])])])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("p",[a("img",{attrs:{src:s(604),alt:"portal_bo_add_search",title:"portal_bo_add_search"}})]),e._v(" "),a("p",[e._v("Time to deploy the Contacts Search (folder "),a("em",[e._v("day3/apps/dotnetcore/Scm.Search/Adc.Scm.Search.Api")]),e._v(") service from VS Code the the newly created Web App. Again, there is a predefined task to publish to a local folder ("),a("strong",[e._v("day3publishScmSearch")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"create-and-deploy-the-contacts-search-indexer-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-deploy-the-contacts-search-indexer-function"}},[e._v("#")]),e._v(" Create and deploy the Contacts Search Indexer Function")]),e._v(" "),a("p",[e._v("Now we have deployed an Azure Search Service and an API that is able to query the search index. But how will contacts be pushed to the Azure Search index? Therefore, we will be using another Azure Function that listens to created and changed contacts via an Azure Service Bus Topic ("),a("strong",[e._v("scmtopic")]),e._v(", you already created it - as well as the corresponding subscription "),a("strong",[e._v("scmcontactsearch")]),e._v(")!")]),e._v(" "),a("p",[e._v("Create the Azure function in the "),a("strong",[e._v("scm-breakout-rg")]),e._v(" resource group with the follwing parameters:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Region")]),e._v(" "),a("td",[a("em",[e._v("West Europe")])])]),e._v(" "),a("tr",[a("td",[e._v("Publish")]),e._v(" "),a("td",[a("em",[e._v("Code")])])]),e._v(" "),a("tr",[a("td",[e._v("Runtime")]),e._v(" "),a("td",[a("em",[e._v(".NET Core")])])]),e._v(" "),a("tr",[a("td",[e._v("OS")]),e._v(" "),a("td",[a("em",[e._v("Windows")])])]),e._v(" "),a("tr",[a("td",[e._v("Storage Account")]),e._v(" "),a("td",[e._v("Use the storage account you created in the breakout resource group")])]),e._v(" "),a("tr",[a("td",[e._v("Plan Type")]),e._v(" "),a("td",[a("em",[e._v("Consumption")])])])])]),e._v(" "),a("p",[e._v("When finished, apply these settings to the App Configuration settings:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("ContactIndexerOptions__AdminApiKey")]),e._v(" "),a("td",[e._v("use the Primary Admin Key from Azure Search (under "),a("strong",[e._v("Settings / Keys")]),e._v(")")])]),e._v(" "),a("tr",[a("td",[e._v("ContactIndexerOptions__IndexName")]),e._v(" "),a("td",[a("em",[e._v("scmcontacts")])])]),e._v(" "),a("tr",[a("td",[e._v("ContactIndexerOptions__ServiceName")]),e._v(" "),a("td",[e._v("the name of your previously created Azure Search (just the subdomain! So from "),a("a",{attrs:{href:"https://adcd3search-dev.search.windows.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://adcd3search-dev.search.windows.net"),a("OutboundLink")],1),e._v(", only "),a("strong",[e._v("adcd3search-dev")]),e._v(")")])]),e._v(" "),a("tr",[a("td",[e._v("ServiceBusConnectionString")]),e._v(" "),a("td",[e._v("use the Service Bus Connection String from the Shared Access Policy ("),a("strong",[e._v("Topics")]),e._v(" / "),a("strong",[e._v("scmtopic")]),e._v(") for listening for messages - "),a("strong",[e._v("scmtopiclisten")]),e._v(". "),a("br"),a("br"),a("strong",[e._v("Important")]),e._v(": Please remove the entitypath variable (incl. the value) at the end of the connection string!")])]),e._v(" "),a("tr",[a("td",[e._v("FUNCTIONS_EXTENSION_VERSION")]),e._v(" "),a("td",[e._v("~3")])])])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("p",[a("img",{attrs:{src:s(605),alt:"portal_bo_add_searchindexer",title:"portal_bo_add_searchindexer"}})]),e._v(" "),a("p",[a("strong",[e._v("Last but not least")]),e._v(", deploy the Contacts Search indexer function (folder "),a("em",[e._v("day3/apps/dotnetcore/Scm.Search/Adc.Scm.Search.Indexer")]),e._v(") service from VS Code the the newly created Function App.")]),e._v(" "),a("h2",{attrs:{id:"let-s-press-pause-for-a-moment-what-have-we-done-so-far"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-press-pause-for-a-moment-what-have-we-done-so-far"}},[e._v("#")]),e._v(' Let\'s press "Pause" for a moment - What have we done so far?')]),e._v(" "),a("p",[e._v("The was a lot of manual typing so far, so let's hold on for a moment. We have just migrated our initial services (Contacts and Resources, Image Manipulation) to Azure Service Bus Queues and Topics. We redeployed new versions of these services to make use of Azure Service Bus. We also added Storage Services to our application. The Contacts Service now uses Azure SQL DB.")]),e._v(" "),a("p",[e._v('In addition, we added an Azure Search service (incl. indexer function) plus an API that is able to talk to Azure Search and query for contacts. The contacts will be added / updated in the search index "on-the-fly" whenever a Contact is changed - notification is done via Service Bus Topics.')]),e._v(" "),a("p",[e._v("Regarding our architecture, we are at this stage:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(606),alt:"architecture_day3breakout1",title:"architecture_day3breakout1"}})]),e._v(" "),a("p",[e._v("Now, let's add the Visit Report API. Trust us, we're on the home stretch 😃")]),e._v(" "),a("h2",{attrs:{id:"deploy-new-visit-reports-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-new-visit-reports-service"}},[e._v("#")]),e._v(" Deploy new Visit Reports Service")]),e._v(" "),a("p",[e._v("To deploy the Visist Reports API, we - as usual - need another Web App. As this service runs on NodeJS and we want to leverage Azure Web Apps on Linux this time, let's create one that is backed by a Linux OS.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Important")]),e._v(": Currently, you can't mix Windows and Linux Web Apps in the same resource group, so we create another resource group to host the NodeJS Linux WebApp.")])]),e._v(" "),a("p",[a("strong",[e._v("Azure WebApp Properties")])]),e._v(" "),a("p",[e._v("Create the Linux Web App in West Europe with the following parameters.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value / Hint")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Resource Group")]),e._v(" "),a("td",[e._v("Create a new resource group, e.g. "),a("strong",[e._v("scm-breakout-tux-rg")])])]),e._v(" "),a("tr",[a("td",[e._v("Publish")]),e._v(" "),a("td",[a("em",[e._v("Code")])])]),e._v(" "),a("tr",[a("td",[e._v("Runtime Stack")]),e._v(" "),a("td",[a("em",[e._v("Node 12 LTS")])])]),e._v(" "),a("tr",[a("td",[e._v("App Service Plan")]),e._v(" "),a("td",[e._v("Create a new one: OS - "),a("em",[e._v("Linux")]),e._v(", SKU - "),a("em",[e._v("S1")])])])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(607),alt:"day3_bo_tux_vr",title:"day3_bo_tux_vr"}})]),e._v(" "),a("p",[e._v("When the Web App has been created, go to the Configuration section and add the following settings (App settings + Connection strings!).")]),e._v(" "),a("p",[a("strong",[e._v("Azure Web App / Configuration / Application Settings")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("APPINSIGHTS_KEY")]),e._v(" "),a("td",[e._v("<empty>")])]),e._v(" "),a("tr",[a("td",[e._v("COSMOSDB")]),e._v(" "),a("td",[e._v("the endpoint to the Cosmos DB, e.g. "),a("a",{attrs:{href:"https://adcd3cosmos-dev.documents.azure.com:443/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://adcd3cosmos-dev.documents.azure.com:443/"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("Azure Web App / Configuration / Connection Strings")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("COSMOSKEY")]),e._v(" "),a("td",[e._v("Primary Key of your Cosmos DB")]),e._v(" "),a("td",[e._v("Custom")])]),e._v(" "),a("tr",[a("td",[e._v("SBCONTACTSTOPIC_CONNSTR")]),e._v(" "),a("td",[e._v("Primary Connection String of the Service Bus "),a("strong",[e._v("Contacts")]),e._v(" Topic ("),a("strong",[e._v("scmtopic")]),e._v(" / "),a("em",[e._v("scmtopiclisten")]),e._v(")")]),e._v(" "),a("td",[e._v("Custom")])]),e._v(" "),a("tr",[a("td",[e._v("SBVRTOPIC_CONNSTR")]),e._v(" "),a("td",[e._v("Primary Connection String of the Service Bus "),a("strong",[e._v("Visit Reports")]),e._v(" Topic ("),a("strong",[e._v("scmvrtopic")]),e._v(" / "),a("em",[e._v("scmvrtopicsend")]),e._v(")")]),e._v(" "),a("td",[e._v("Custom")])])])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("p",[a("img",{attrs:{src:s(608),alt:"portal_bo_add_vr",title:"portal_bo_add_vr"}})]),e._v(" "),a("p",[e._v("Now, from an infrastructure point of view, we are ready to deploy the NodeJS app. If you haven't run the app on your local machine, open a terminal and got to folder: "),a("em",[e._v("day3/apps/nodejs/visitreport")]),e._v(". Execute the following command:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[e._v("This will install all the neccessary dependencies of the NodeJS Visit Reports service. When that has finished, you can deploy the service to the previously created Linux Web App.")]),e._v(" "),a("p",[e._v("Therefore, go to the Azure Tools Extension in Visual Studio Code ("),a("em",[e._v("App Service")]),e._v(" section), find your Linux Web App and "),a("em",[e._v("right-click-deploy")]),e._v(", choosing the folder "),a("em",[e._v("day3/apps/nodejs/visitreport")]),e._v(" as a deployment source.")]),e._v(" "),a("p",[e._v("In the output window, watch how the NodeJS app is copied to the Web App and is being started by Azure.")]),e._v(" "),a("p",[e._v("You can check, if it's running correctly by opening a browser window and point it to the following URL:")]),e._v(" "),a("p",[e._v("https://<YOUR_WEB_APP_NAME>.azurewebsites.net/docs")]),e._v(" "),a("p",[e._v("You will see the Swagger UI of the service (in the "),a("strong",[e._v("Explore")]),e._v(" textbox, replace "),a("em",[e._v("json")]),e._v(" with "),a("em",[e._v("yaml")]),e._v(" to view all operations).")]),e._v(" "),a("p",[a("img",{attrs:{src:s(609),alt:"day3_bo_tux_vr_swagger",title:"day3_bo_tux_vr_swagger"}})]),e._v(" "),a("h2",{attrs:{id:"deploy-new-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-new-frontend"}},[e._v("#")]),e._v(" Deploy new Frontend")]),e._v(" "),a("p",[e._v("Now that we have introduced a few new services, we also need to redeploy the VueJS frontend. Of course, we also added a few changes in the UI itself (please see the intro section). So we definetly want that new version running now in Azure.")]),e._v(" "),a("p",[e._v("Open the settings.js file in folder "),a("em",[e._v("day3/apps/frontend/scmfe/public/settings")]),e._v(" and adjust the settings to fit the URLs of your Web Apps. You will need:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("endpoint")]),e._v(" "),a("td",[e._v("URL of the contacts API endpoint, e.g. https://adcday3scmapi-dev.azurewebsites.net/")])]),e._v(" "),a("tr",[a("td",[e._v("resourcesEndpoint")]),e._v(" "),a("td",[e._v("URL of the resources API endpoint, e.g. https://adcday3scmresourcesapi-dev.azurewebsites.net/")])]),e._v(" "),a("tr",[a("td",[e._v("searchEndpoint")]),e._v(" "),a("td",[e._v("URL of the search API endpoint, e.g. https://adcday3scmrsearchapi-dev.azurewebsites.net/")])]),e._v(" "),a("tr",[a("td",[e._v("reportsEndpoint")]),e._v(" "),a("td",[e._v("URL of the visit reports API endpoint, e.g. https://adcday3scmvr-dev.azurewebsites.net")])]),e._v(" "),a("tr",[a("td",[e._v("enableStats")]),e._v(" "),a("td",[e._v("false (we will be adding statistics when we introduced Cognitive Services in the next challenge)")])]),e._v(" "),a("tr",[a("td",[e._v("aiKey")]),e._v(" "),a("td",[e._v('"" (just leave it empty)')])])])]),e._v(" "),a("p",[a("strong",[e._v("Sample:")])]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("var uisettings = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpoint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmapi-dev.azurewebsites.net/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"resourcesEndpoint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmresourcesapi-dev.azurewebsites.net/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"searchEndpoint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmrsearchapi-dev.azurewebsites.net/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"reportsEndpoint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmvr-dev.azurewebsites.net"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enableStats"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"aiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("After you have adjusted the settings, open a terminal at "),a("em",[e._v("day3/apps/frontend/scmfe")]),e._v(" and run...")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),a("p",[e._v("The VueJS app is built into folder "),a("em",[e._v("dist")]),e._v(" of the same directory. Please copy that folder with the "),a("strong",[e._v("Storage Explorer")]),e._v(" to the Storage Account you used for hosting the frontend (container: "),a("strong",[e._v("$web")]),e._v(". Please delete any contents from Day 2 before copying the new version).")]),e._v(" "),a("p",[e._v("When everything is set up correctly and the services work as expected, you should be able to open the SPA and test the Contacts and Visit Reports services, as well as the Search service.")]),e._v(" "),a("p",[e._v("Add and edit a few new contacts (search for them via the top navigation bar) and create some visit reports for them.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(332),alt:"scm_day3",title:"scm_day3"}}),e._v(" "),a("img",{attrs:{src:s(333),alt:"scm_day3_vr",title:"scm_day3_vr"}})]),e._v(" "),a("h1",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),a("p",[e._v("So, we know, this was a lot of manual work to do, to add a simple microservice-oriented application to Azure. There are a lot of moving parts in that kind of applications and you will want to avoid deploying such applications manually. That's why we will be introducing Azure DevOps on Day 4, so that you can build and deploy the infrastructure as well as the services automatically.\nBut hey, we wanted to show you how it's done \"the hard way\" to bring you relief the day after 😃 Azure DevOps, FTW!")]),e._v(" "),a("p",[e._v("We now have one more challenge to complete (Cognitive Services), until the application is finished from a services perspective.")])])}),[],!1,null,null,null);t.default=r.exports}}]);