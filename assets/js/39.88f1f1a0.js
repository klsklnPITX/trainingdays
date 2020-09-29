(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{380:function(a,e,t){a.exports=t.p+"assets/img/enableBackup1.e2f34d50.png"},381:function(a,e,t){a.exports=t.p+"assets/img/enableBackupTriggerManually.d0290798.png"},382:function(a,e,t){a.exports=t.p+"assets/img/enableBackupFileRestore.9582c527.png"},724:function(a,e,t){"use strict";t.r(e);var r=t(42),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"challenge-3-vm-azure-backup-save-your-vm-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#challenge-3-vm-azure-backup-save-your-vm-state"}},[a._v("#")]),a._v(" Challenge 3: VM - Azure Backup: Save your VM state")]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/day1/"}},[a._v("back")])],1),a._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[a._v("#")]),a._v(" Here is what you will learn")]),a._v(" "),r("ul",[r("li",[a._v("How to backup an azure vm using the azure backup service.")]),a._v(" "),r("li",[a._v("Create a backup vault")]),a._v(" "),r("li",[a._v("Recover a file")])]),a._v(" "),r("h2",{attrs:{id:"create-a-backup-vault"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-backup-vault"}},[a._v("#")]),a._v(" Create a Backup Vault")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[Azure Portal] -> Resource Groups -> 'rg-contosomortgage-www' -> 'vmweb01'\n  -> Operations -> Backup\n\nRecovery Services vault -> 'Create new' -> 'vault...'\nResource Group -> 'Create new' -> 'rg-contosomortgage-backups'\nChoose backup policy -> '(new) DailyPolicy'\n  ->Enable Backup\n")])])]),r("p",[r("strong",[a._v("Note:")]),a._v(" You might want to "),r("strong",[a._v("pack all of your vm backups in a separate Resource Group")]),a._v(" as backups of vms might live longer than the actual vm."),r("br"),a._v(" "),r("img",{attrs:{src:t(380),alt:"EnableBackup"}})]),a._v(" "),r("h2",{attrs:{id:"trigger-a-manual-vm-backup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-a-manual-vm-backup"}},[a._v("#")]),a._v(" Trigger a manual vm backup")]),a._v(" "),r("p",[a._v("Navigate to your vm in the azure portal -> Operations -> Backup"),r("br"),a._v("\nNote that "),r("strong",[a._v("the view has changed")]),a._v(" after creating the vault."),r("br"),a._v(" "),r("strong",[a._v("Trigger the backup manually")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:t(381),alt:"Trigger the backup manually"}})]),a._v(" "),r("p",[r("strong",[a._v("Press")]),a._v(" "),r("em",[a._v("'View all jobs'")]),a._v(" to get a status of the backup."),r("br"),a._v("\nIt'll take some time for the backup to finish.")]),a._v(" "),r("h2",{attrs:{id:"answer-following-questions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#answer-following-questions"}},[a._v("#")]),a._v(" Answer Following Questions")]),a._v(" "),r("ol",[r("li",[a._v("How many copys of backup data does Azure do ('redundancy') by default?")]),a._v(" "),r("li",[a._v("Do offline VMs also get backup'ed?")]),a._v(" "),r("li",[a._v("What is 'Soft Delete' ?")]),a._v(" "),r("li",[a._v("Which 'Azure' workloads can be backed up?")]),a._v(" "),r("li",[a._v("Does Azure Backup support 'onpremise' backups?")])]),a._v(" "),r("p",[r("strong",[a._v("Hint:")]),a._v(" Try to answer some questions through navigating to your backup vault properties")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[Azure Portal] -> Resource Groups -> 'rg-contosomortgage-backups' -> 'vault...' -> Properties\n")])])]),r("h2",{attrs:{id:"optional-do-a-vm-recovery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-do-a-vm-recovery"}},[a._v("#")]),a._v(" [optional]: Do a VM Recovery")]),a._v(" "),r("p",[a._v("Azure Portal -> Virtual Machines -> vmadds01 -> Operations -> Backup -> Restore VM")]),a._v(" "),r("p",[a._v("What is "),r("strong",[a._v("needed")]),a._v(" for a VM recovery?")]),a._v(" "),r("h2",{attrs:{id:"optional-do-a-file-recovery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-do-a-file-recovery"}},[a._v("#")]),a._v(" [optional]: Do a File Recovery")]),a._v(" "),r("p",[a._v("File recovery enables you to recover individual files selected from a backup at a given point in time."),r("br"),a._v("\nThe backup is "),r("em",[a._v("'mounted'")]),a._v(" as drive to your local machine via the internet.")]),a._v(" "),r("p",[a._v("Azure Portal -> Virtual Machines -> vmadds01 -> Operations -> Backup -> File Recovery")]),a._v(" "),r("p",[r("img",{attrs:{src:t(382),alt:"File Restore"}})]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/day1/"}},[a._v("back")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);