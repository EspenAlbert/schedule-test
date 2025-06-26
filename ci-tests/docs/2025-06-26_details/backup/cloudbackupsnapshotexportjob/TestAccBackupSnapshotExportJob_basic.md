# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 40 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 19 minutes
```
2025-05-28T01:24:47.8114278Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-05-28T01:24:47.8116007Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:05:25.507095947Z, ProjectID: 68365ad9cbc2304eec2b51ce, Cluster name: test-acc-tf-c-6917121163444724518
2025-05-28T01:24:47.8119137Z 2025/05/28 01:05:34 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68365ad9cbc2304eec2b51ce/cloudProviderAccess/6836615dcbc2304eec2b7c44 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5594756004343344152). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5594756004343344152], BadRequestDetail:  
2025-05-28T01:24:47.8121220Z 2025/05/28 01:05:34 retrying
2025-05-28T01:24:47.8121576Z --- PASS: TestAccBackupSnapshotExportJob_basic (1166.77s)
```
#### PASS 31 minutes
```
2025-05-28T09:35:54.7775609Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-05-28T09:35:54.7776683Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:04:18.297070363Z, ProjectID: 6836cb29d000797dbe91ea6f, Cluster name: test-acc-tf-c-1502810898555693188
2025-05-28T09:35:54.7779840Z 2025/05/28 09:04:27 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836cb29d000797dbe91ea6f/cloudProviderAccess/6836d199d000797dbe922108 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4622632146462687268). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4622632146462687268], BadRequestDetail:  
2025-05-28T09:35:54.7781776Z 2025/05/28 09:04:27 retrying
2025-05-28T09:35:54.7782140Z --- PASS: TestAccBackupSnapshotExportJob_basic (1900.97s)
```
### 2025-05-29
#### PASS 20 minutes
```
2025-05-29T01:17:51.4141588Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-05-29T01:17:51.4142700Z     pre_check.go:40: Time before creating cluster: 2025-05-29T00:57:07.275802027Z, ProjectID: 6837ac4aa548243915a5ca1d, Cluster name: test-acc-tf-c-4352124658096099514
2025-05-29T01:17:51.4144963Z 2025/05/29 00:57:16 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6837ac4aa548243915a5ca1d/cloudProviderAccess/6837b0ea3945df7a91917ad5 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3467800001603477393). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3467800001603477393], BadRequestDetail:  
2025-05-29T01:17:51.4146721Z 2025/05/29 00:57:16 retrying
2025-05-29T01:17:51.4147054Z --- PASS: TestAccBackupSnapshotExportJob_basic (1248.56s)
```
### 2025-05-30
#### PASS 26 minutes
```
2025-05-30T01:23:40.6978863Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-05-30T01:23:40.6979734Z     pre_check.go:40: Time before creating cluster: 2025-05-30T00:57:25.662644864Z, ProjectID: 6838fde23a84470fe9d4fe3a, Cluster name: test-acc-tf-c-2924496388178283893
2025-05-30T01:23:40.6982021Z 2025/05/30 00:57:33 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6838fde23a84470fe9d4fe3a/cloudProviderAccess/6839027c633e350548a5afa9 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2269098756991257242). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2269098756991257242], BadRequestDetail:  
2025-05-30T01:23:40.6983780Z 2025/05/30 00:57:33 retrying
2025-05-30T01:23:40.6984134Z --- PASS: TestAccBackupSnapshotExportJob_basic (1579.61s)
```
#### PASS 29 minutes
```
2025-05-30T08:21:40.0561468Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-05-30T08:21:40.0563249Z     pre_check.go:40: Time before creating cluster: 2025-05-30T07:52:09.205541646Z, ProjectID: 68395f459fbb580dba4e5ac9, Cluster name: test-acc-tf-c-7919767382091286758
2025-05-30T08:21:40.0566289Z 2025/05/30 07:52:18 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68395f459fbb580dba4e5ac9/cloudProviderAccess/683963b19fbb580dba4e67d7 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8962931538513058439). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8962931538513058439], BadRequestDetail:  
2025-05-30T08:21:40.0568127Z 2025/05/30 07:52:18 retrying
2025-05-30T08:21:40.0568481Z --- PASS: TestAccBackupSnapshotExportJob_basic (1775.32s)
```
### 2025-05-31
#### PASS 16 minutes
```
2025-05-31T01:13:21.9463139Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-05-31T01:13:21.9464876Z     pre_check.go:40: Time before creating cluster: 2025-05-31T00:56:50.031107134Z, ProjectID: 683a4f21ebf07c11d4e9361b, Cluster name: test-acc-tf-c-5538409177676242390
2025-05-31T01:13:21.9469386Z 2025/05/31 00:56:57 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683a4f21ebf07c11d4e9361b/cloudProviderAccess/683a53d9ebf07c11d4e96681 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8037999402345683398). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8037999402345683398], BadRequestDetail:  
2025-05-31T01:13:21.9472749Z 2025/05/31 00:56:57 retrying
2025-05-31T01:13:21.9473621Z --- PASS: TestAccBackupSnapshotExportJob_basic (996.51s)
```
### 2025-06-01
#### PASS 18 minutes
```
2025-06-01T01:17:56.7866027Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-01T01:17:56.7867791Z     pre_check.go:40: Time before creating cluster: 2025-06-01T00:59:02.563465347Z, ProjectID: 683ba1952ebc1806778a0361, Cluster name: test-acc-tf-c-7935902032333989677
2025-06-01T01:17:56.7870883Z 2025/06/01 00:59:10 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683ba1952ebc1806778a0361/cloudProviderAccess/683ba5dd2ebc1806778a308b PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1868013770614291183). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1868013770614291183], BadRequestDetail:  
2025-06-01T01:17:56.7873127Z 2025/06/01 00:59:10 retrying
2025-06-01T01:17:56.7873546Z --- PASS: TestAccBackupSnapshotExportJob_basic (1138.81s)
```
#### PASS 17 minutes
```
2025-06-01T05:25:03.4085891Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-01T05:25:03.4087490Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:07:10.398400227Z, ProjectID: 683bdbeccc8f0935c7c18c4d, Cluster name: test-acc-tf-c-6288616990009211588
2025-06-01T05:25:03.4090010Z 2025/06/01 05:07:18 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683bdbeccc8f0935c7c18c4d/cloudProviderAccess/683be005cc8f0935c7c1bb56 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2587936219639347483). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2587936219639347483], BadRequestDetail:  
2025-06-01T05:25:03.4092053Z 2025/06/01 05:07:18 retrying
2025-06-01T05:25:03.4092410Z --- PASS: TestAccBackupSnapshotExportJob_basic (1077.61s)
```
#### PASS 16 minutes
```
2025-06-01T09:32:08.8710002Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-01T09:32:08.8712043Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:15:57.847666304Z, ProjectID: 683c1646cc8f0935c7c221e8, Cluster name: test-acc-tf-c-7460403338500838874
2025-06-01T09:32:08.8715371Z 2025/06/01 09:16:05 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683c1646cc8f0935c7c221e8/cloudProviderAccess/683c1a547bf9cf70212ce9f4 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6421740542609223574). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6421740542609223574], BadRequestDetail:  
2025-06-01T09:32:08.8717184Z 2025/06/01 09:16:05 retrying
2025-06-01T09:32:08.8717536Z --- PASS: TestAccBackupSnapshotExportJob_basic (975.67s)
```
#### PASS 19 minutes
```
2025-06-01T13:48:29.7228157Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-01T13:48:29.7229944Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:28:47.399957612Z, ProjectID: 683c50b47bf9cf70212d1edf, Cluster name: test-acc-tf-c-1062059360535308359
2025-06-01T13:48:29.7233972Z 2025/06/01 13:28:55 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683c50b47bf9cf70212d1edf/cloudProviderAccess/683c5596cc8f0935c7c2b0a2 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3654293826588380848). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3654293826588380848], BadRequestDetail:  
2025-06-01T13:48:29.7237086Z 2025/06/01 13:28:55 retrying
2025-06-01T13:48:29.7237671Z --- PASS: TestAccBackupSnapshotExportJob_basic (1186.94s)
```
#### PASS 17 minutes
```
2025-06-01T17:53:54.6684139Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-01T17:53:54.6685645Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:36:43.408777423Z, ProjectID: 683c8b24cc8f0935c7c2f130, Cluster name: test-acc-tf-c-1927029148037363582
2025-06-01T17:53:54.6689633Z 2025/06/01 17:36:51 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683c8b24cc8f0935c7c2f130/cloudProviderAccess/683c8fb27bf9cf70212dc0f3 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1627578968577568078). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1627578968577568078], BadRequestDetail:  
2025-06-01T17:53:54.6692918Z 2025/06/01 17:36:51 retrying
2025-06-01T17:53:54.6693489Z --- PASS: TestAccBackupSnapshotExportJob_basic (1035.88s)
```
#### PASS 15 minutes
```
2025-06-01T22:00:25.7928046Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-01T22:00:25.7929527Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:44:33.745367541Z, ProjectID: 683cc557cc8f0935c7c35cea, Cluster name: test-acc-tf-c-6058052537659854833
2025-06-01T22:00:25.7933113Z 2025/06/01 21:44:41 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cc557cc8f0935c7c35cea/cloudProviderAccess/683cc9c87bf9cf70212e23c1 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-9166153556610407671). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-9166153556610407671], BadRequestDetail:  
2025-06-01T22:00:25.7935179Z 2025/06/01 21:44:41 retrying
2025-06-01T22:00:25.7935588Z --- PASS: TestAccBackupSnapshotExportJob_basic (956.66s)
```
### 2025-06-02
#### PASS 18 minutes
```
2025-06-02T01:14:30.5691767Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-02T01:14:30.5693390Z     pre_check.go:40: Time before creating cluster: 2025-06-02T00:56:18.916376844Z, ProjectID: 683cf2a97bf9cf70212e4e41, Cluster name: test-acc-tf-c-2383289437538411006
2025-06-02T01:14:30.5697021Z 2025/06/02 00:56:28 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cf2a97bf9cf70212e4e41/cloudProviderAccess/683cf6ba7bf9cf70212e74ce PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6008449201860558156). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6008449201860558156], BadRequestDetail:  
2025-06-02T01:14:30.5699172Z 2025/06/02 00:56:28 retrying
2025-06-02T01:14:30.5699523Z --- PASS: TestAccBackupSnapshotExportJob_basic (1096.05s)
```
#### PASS 18 minutes
```
2025-06-02T02:13:46.2625709Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-02T02:13:46.2627235Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:55:41.910614658Z, ProjectID: 683cffc1cc8f0935c7c40180, Cluster name: test-acc-tf-c-2579530174924132724
2025-06-02T02:13:46.2631443Z 2025/06/02 01:55:50 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cffc1cc8f0935c7c40180/cloudProviderAccess/683d04a57bf9cf70212ebe45 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2092879006437907731). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2092879006437907731], BadRequestDetail:  
2025-06-02T02:13:46.2634565Z 2025/06/02 01:55:50 retrying
2025-06-02T02:13:46.2635128Z --- PASS: TestAccBackupSnapshotExportJob_basic (1088.93s)
```
#### PASS 20 minutes
```
2025-06-02T06:30:59.3777140Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-02T06:30:59.3778693Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:10:24.121986829Z, ProjectID: 683d3b997bf9cf70212f1531, Cluster name: test-acc-tf-c-6416913804076312419
2025-06-02T06:30:59.3782818Z 2025/06/02 06:10:36 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683d3b997bf9cf70212f1531/cloudProviderAccess/683d405a7bf9cf70212f3bb9 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-473766791555602913). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-473766791555602913], BadRequestDetail:  
2025-06-02T06:30:59.3785840Z 2025/06/02 06:10:36 retrying
2025-06-02T06:30:59.3786419Z --- PASS: TestAccBackupSnapshotExportJob_basic (1239.78s)
```
### 2025-06-03
#### PASS 16 minutes
```
2025-06-03T01:13:25.4707057Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-03T01:13:25.4708377Z     pre_check.go:40: Time before creating cluster: 2025-06-03T00:56:44.315320357Z, ProjectID: 683e43fbc5fc37283c361613, Cluster name: test-acc-tf-c-8696383946753646427
2025-06-03T01:13:25.4711627Z 2025/06/03 00:56:53 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683e43fbc5fc37283c361613/cloudProviderAccess/683e4853c5fc37283c363d23 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7689326873235558659). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7689326873235558659], BadRequestDetail:  
2025-06-03T01:13:25.4713934Z 2025/06/03 00:56:53 retrying
2025-06-03T01:13:25.4714329Z --- PASS: TestAccBackupSnapshotExportJob_basic (1005.46s)
```
### 2025-06-04
#### PASS 17 minutes
```
2025-06-04T01:07:40.0934791Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-04T01:07:40.0935932Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:49:46.22555976Z, ProjectID: 683f934f040e946541785b7e, Cluster name: test-acc-tf-c-8275744470058903832
2025-06-04T01:07:40.0939175Z 2025/06/04 00:49:54 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683f934f040e946541785b7e/cloudProviderAccess/683f9831040e946541788739 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-955660457457895189). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-955660457457895189], BadRequestDetail:  
2025-06-04T01:07:40.0941515Z 2025/06/04 00:49:54 retrying
2025-06-04T01:07:40.0941889Z --- PASS: TestAccBackupSnapshotExportJob_basic (1078.43s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:36:03.3223694Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-05T00:36:03.3226922Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:32:16.612911627Z, ProjectID: 6840e4bcc939f2741325062c, Cluster name: test-acc-tf-c-4952650337020011570
2025-06-05T00:36:03.3230954Z 2025/06/05 00:32:26 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f2741325062c/cloudProviderAccess/6840e598c939f2741325281b PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2763789558417976068). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2763789558417976068], BadRequestDetail:  
2025-06-05T00:36:03.3234258Z 2025/06/05 00:32:26 retrying
2025-06-05T00:36:03.3254956Z    test_step_number=1
2025-06-05T00:36:03.3256022Z     resource_cloud_backup_snapshot_export_job_test.go:20: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:36:03.3256871Z         
2025-06-05T00:36:03.3259973Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f2741325062c/clusters/test-acc-tf-c-4952650337020011570 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3262118Z         
2025-06-05T00:36:03.3262793Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3264088Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3265468Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3266092Z         
2025-06-05T00:36:03.3297119Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T00:36:03.3297910Z         
2025-06-05T00:36:03.3300927Z         Error: error deleting snapshot export bucket 6840e4bcc939f2741325062c https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f2741325062c/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3302968Z         
2025-06-05T00:36:03.3303452Z --- FAIL: TestAccBackupSnapshotExportJob_basic (201.32s)
```
### 2025-06-06
#### PASS 19 minutes
```
2025-06-06T01:08:25.1279627Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-06T01:08:25.1281117Z     pre_check.go:40: Time before creating cluster: 2025-06-06T00:48:30.417472915Z, ProjectID: 6842368dc64ff333daf68442, Cluster name: test-acc-tf-c-1646172093060509095
2025-06-06T01:08:25.1285526Z 2025/06/06 00:48:38 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6842368dc64ff333daf68442/cloudProviderAccess/68423ae5c64ff333daf6b548 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5824415391847971313). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5824415391847971313], BadRequestDetail:  
2025-06-06T01:08:25.1288823Z 2025/06/06 00:48:38 retrying
2025-06-06T01:08:25.1289399Z --- PASS: TestAccBackupSnapshotExportJob_basic (1199.07s)
```
### 2025-06-07
#### PASS 16 minutes
```
2025-06-07T01:05:44.4795616Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-07T01:05:44.4797204Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:49:12.612179069Z, ProjectID: 684387b73cccfc2b22af9cb6, Cluster name: test-acc-tf-c-3256769746779538559
2025-06-07T01:05:44.4801558Z 2025/06/07 00:49:20 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684387b73cccfc2b22af9cb6/cloudProviderAccess/68438c8fbf49d05598c17582 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6303447784207428710). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6303447784207428710], BadRequestDetail:  
2025-06-07T01:05:44.4804654Z 2025/06/07 00:49:20 retrying
2025-06-07T01:05:44.4805222Z --- PASS: TestAccBackupSnapshotExportJob_basic (996.45s)
```
### 2025-06-08
#### PASS 30 minutes
```
2025-06-08T01:30:48.3691293Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-08T01:30:48.3692379Z     pre_check.go:40: Time before creating cluster: 2025-06-08T01:00:37.953814767Z, ProjectID: 6844da0769401b3bb3c36703, Cluster name: test-acc-tf-c-758863073753206913
2025-06-08T01:30:48.3695187Z 2025/06/08 01:00:47 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6844da0769401b3bb3c36703/cloudProviderAccess/6844e0bd0b3c4a5b49f6e90b PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2677622969930147515). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2677622969930147515], BadRequestDetail:  
2025-06-08T01:30:48.3697578Z 2025/06/08 01:00:47 retrying
2025-06-08T01:30:48.3698154Z --- PASS: TestAccBackupSnapshotExportJob_basic (1814.83s)
```
### 2025-06-09
#### PASS 21 minutes
```
2025-06-09T01:12:33.0016651Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-09T01:12:33.0018184Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:51:28.020538827Z, ProjectID: 68462b3f0a8f6759322c2fe5, Cluster name: test-acc-tf-c-4134229953841166375
2025-06-09T01:12:33.0021231Z 2025/06/09 00:51:36 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68462b3f0a8f6759322c2fe5/cloudProviderAccess/684630170a8f6759322c6026 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1203072246115132563). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1203072246115132563], BadRequestDetail:  
2025-06-09T01:12:33.0022995Z 2025/06/09 00:51:36 retrying
2025-06-09T01:12:33.0023331Z --- PASS: TestAccBackupSnapshotExportJob_basic (1269.54s)
```
### 2025-06-10
#### PASS 16 minutes
```
2025-06-10T01:22:54.1003329Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-10T01:22:54.1004263Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:04:09.766701318Z, ProjectID: 68477e599fcc7665ab8306a7, Cluster name: test-acc-tf-c-7677737306315928226
2025-06-10T01:22:54.1006858Z 2025/06/10 01:04:17 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68477e599fcc7665ab8306a7/cloudProviderAccess/684784909fcc7665ab8330f8 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5796708647377447217). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5796708647377447217], BadRequestDetail:  
2025-06-10T01:22:54.1008881Z 2025/06/10 01:04:17 retrying
2025-06-10T01:22:54.1009229Z --- PASS: TestAccBackupSnapshotExportJob_basic (966.26s)
```
### 2025-06-11
#### PASS 17 minutes
```
2025-06-11T01:06:03.1403655Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-11T01:06:03.1405570Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:48:11.808858979Z, ProjectID: 6848cdb969b57d1e7dbaf24a, Cluster name: test-acc-tf-c-5841768157666600357
2025-06-11T01:06:03.1408466Z 2025/06/11 00:48:19 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6848cdb969b57d1e7dbaf24a/cloudProviderAccess/6848d2527856163396c4c4fe PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2565014565450294607). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2565014565450294607], BadRequestDetail:  
2025-06-11T01:06:03.1410490Z 2025/06/11 00:48:19 retrying
2025-06-11T01:06:03.1410853Z --- PASS: TestAccBackupSnapshotExportJob_basic (1075.92s)
```
#### PASS 43 minutes
```
2025-06-11T08:49:03.6342064Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-11T08:49:03.6344255Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:06:05.430246812Z, ProjectID: 6849322571e0a97458c8a1c2, Cluster name: test-acc-tf-c-3645491030824746665
2025-06-11T08:49:03.6348551Z 2025/06/11 08:06:13 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6849322571e0a97458c8a1c2/cloudProviderAccess/684938f471e0a97458c8d7a7 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1392140902769047346). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1392140902769047346], BadRequestDetail:  
2025-06-11T08:49:03.6351640Z 2025/06/11 08:06:13 retrying
2025-06-11T08:49:03.6352202Z --- PASS: TestAccBackupSnapshotExportJob_basic (2582.82s)
```
### 2025-06-12
#### PASS 16 minutes
```
2025-06-12T01:05:46.0302437Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-12T01:05:46.0303917Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:48:54.284808541Z, ProjectID: 684a1f261bc2f4360076a6d0, Cluster name: test-acc-tf-c-6200832601258427497
2025-06-12T01:05:46.0308074Z 2025/06/12 00:49:02 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684a1f261bc2f4360076a6d0/cloudProviderAccess/684a23fdde2af8414789b095 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4713581316503384073). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4713581316503384073], BadRequestDetail:  
2025-06-12T01:05:46.0311249Z 2025/06/12 00:49:02 retrying
2025-06-12T01:05:46.0311805Z --- PASS: TestAccBackupSnapshotExportJob_basic (1016.34s)
```
### 2025-06-13
#### PASS 16 minutes
```
2025-06-13T01:04:15.0962609Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-13T01:04:15.0963638Z     pre_check.go:40: Time before creating cluster: 2025-06-13T00:48:09.229621407Z, ProjectID: 684b70af868b87498d553ecb, Cluster name: test-acc-tf-c-3138236849311023220
2025-06-13T01:04:15.0966378Z 2025/06/13 00:48:17 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684b70af868b87498d553ecb/cloudProviderAccess/684b7550e5be291c80ec2cec PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5391108047326060337). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5391108047326060337], BadRequestDetail:  
2025-06-13T01:04:15.0968523Z 2025/06/13 00:48:17 retrying
2025-06-13T01:04:15.0968904Z --- PASS: TestAccBackupSnapshotExportJob_basic (970.40s)
```
### 2025-06-14
#### PASS 31 minutes
```
2025-06-14T02:34:18.1497660Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-14T02:34:18.1498492Z     pre_check.go:40: Time before creating cluster: 2025-06-14T00:49:27.196045077Z, ProjectID: 684cc21225b50457df299da4, Cluster name: test-acc-tf-c-733520536416940759
2025-06-14T02:34:18.1500758Z 2025/06/14 00:49:36 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684cc21225b50457df299da4/cloudProviderAccess/684cc71e25b50457df29c566 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8483112042976909373). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8483112042976909373], BadRequestDetail:  
2025-06-14T02:34:18.1502512Z 2025/06/14 00:49:36 retrying
2025-06-14T02:34:18.1502830Z --- PASS: TestAccBackupSnapshotExportJob_basic (1906.21s)
```
### 2025-06-15
#### PASS 33 minutes
```
2025-06-15T01:33:52.3719479Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-15T01:33:52.3720997Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:00:54.618024399Z, ProjectID: 684e14764bc09a153196dbdc, Cluster name: test-acc-tf-c-7890287850451641193
2025-06-15T01:33:52.3725031Z 2025/06/15 01:01:02 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/684e14764bc09a153196dbdc/cloudProviderAccess/684e1b4d83e3896e131b03b6 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7915929318375951516). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7915929318375951516], BadRequestDetail:  
2025-06-15T01:33:52.3728354Z 2025/06/15 01:01:02 retrying
2025-06-15T01:33:52.3728907Z --- PASS: TestAccBackupSnapshotExportJob_basic (1982.40s)
```
### 2025-06-16
#### PASS 16 minutes
```
2025-06-16T01:05:33.3453246Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-16T01:05:33.3454161Z     pre_check.go:40: Time before creating cluster: 2025-06-16T00:48:41.876406119Z, ProjectID: 684f658d25b50457df2be6af, Cluster name: test-acc-tf-c-113829912406606375
2025-06-16T01:05:33.3456904Z 2025/06/16 00:48:55 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684f658d25b50457df2be6af/cloudProviderAccess/684f69f58f295e188b9ef367 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7094082305313145778). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7094082305313145778], BadRequestDetail:  
2025-06-16T01:05:33.3458834Z 2025/06/16 00:48:55 retrying
2025-06-16T01:05:33.3459179Z --- PASS: TestAccBackupSnapshotExportJob_basic (1016.00s)
```
### 2025-06-17
#### PASS 16 minutes
```
2025-06-17T01:11:42.2283551Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-17T01:11:42.2285161Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:48:49.269700557Z, ProjectID: 6850b6cf6200565f4c9cfc6e, Cluster name: test-acc-tf-c-6629971531529095777
2025-06-17T01:11:42.2289525Z 2025/06/17 00:48:58 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6850b6cf6200565f4c9cfc6e/cloudProviderAccess/6850bb784283fe24ea0bdbaa PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3177397179323769827). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3177397179323769827], BadRequestDetail:  
2025-06-17T01:11:42.2292804Z 2025/06/17 00:48:58 retrying
2025-06-17T01:11:42.2293372Z --- PASS: TestAccBackupSnapshotExportJob_basic (1014.75s)
```
### 2025-06-18
#### PASS 17 minutes
```
2025-06-18T01:07:06.6508350Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-18T01:07:06.6509503Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:49:14.472757035Z, ProjectID: 6852084bf5c9a6304ddbf023, Cluster name: test-acc-tf-c-3528456740849058970
2025-06-18T01:07:06.6512531Z 2025/06/18 00:49:23 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6852084bf5c9a6304ddbf023/cloudProviderAccess/68520d11f5c9a6304ddc1c42 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-9208196750024354979). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-9208196750024354979], BadRequestDetail:  
2025-06-18T01:07:06.6514933Z 2025/06/18 00:49:23 retrying
2025-06-18T01:07:06.6515341Z --- PASS: TestAccBackupSnapshotExportJob_basic (1076.67s)
```
### 2025-06-19
#### PASS 55 minutes
```
2025-06-19T01:47:51.3812444Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-19T01:47:51.3813483Z     pre_check.go:40: Time before creating cluster: 2025-06-19T00:52:14.960683384Z, ProjectID: 685359dfe16f343ef1d9cde6, Cluster name: test-acc-tf-c-686356923240096280
2025-06-19T01:47:51.3816465Z 2025/06/19 00:52:23 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685359dfe16f343ef1d9cde6/cloudProviderAccess/68535f46e16f343ef1d9f8f0 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-832142892879095785). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-832142892879095785], BadRequestDetail:  
2025-06-19T01:47:51.3818643Z 2025/06/19 00:52:23 retrying
2025-06-19T01:47:51.3819003Z --- PASS: TestAccBackupSnapshotExportJob_basic (3340.98s)
```
### 2025-06-20
#### PASS 17 minutes
```
2025-06-20T01:05:10.4210790Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-20T01:05:10.4212593Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:47:19.788798728Z, ProjectID: 6854ab3ce16f343ef1dd230c, Cluster name: test-acc-tf-c-2493482842228410236
2025-06-20T01:05:10.4215546Z 2025/06/20 00:47:28 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6854ab3ce16f343ef1dd230c/cloudProviderAccess/6854af9fcd32be2bdf8c26ba PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6552406012015617062). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6552406012015617062], BadRequestDetail:  
2025-06-20T01:05:10.4217624Z 2025/06/20 00:47:28 retrying
2025-06-20T01:05:10.4217974Z --- PASS: TestAccBackupSnapshotExportJob_basic (1075.07s)
```
### 2025-06-21
#### PASS 17 minutes
```
2025-06-21T01:05:26.0469880Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-21T01:05:26.0471407Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:48:16.17392018Z, ProjectID: 6855fcaff3e6555d2acb8094, Cluster name: test-acc-tf-c-5376069915337285570
2025-06-21T01:05:26.0475610Z 2025/06/21 00:48:24 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6855fcaff3e6555d2acb8094/cloudProviderAccess/68560157fadf221ee30c93ea PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3082987090439432726). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3082987090439432726], BadRequestDetail:  
2025-06-21T01:05:26.0478803Z 2025/06/21 00:48:24 retrying
2025-06-21T01:05:26.0479375Z --- PASS: TestAccBackupSnapshotExportJob_basic (1034.31s)
```
### 2025-06-22
#### PASS 34 minutes
```
2025-06-22T01:35:35.9556467Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-22T01:35:35.9558405Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:01:32.087305458Z, ProjectID: 68574ef0af7a0954e84addcb, Cluster name: test-acc-tf-c-8305109889286500816
2025-06-22T01:35:35.9561289Z 2025/06/22 01:01:41 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef0af7a0954e84addcb/cloudProviderAccess/685755f3af7a0954e84b093f PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6914501021745152805). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6914501021745152805], BadRequestDetail:  
2025-06-22T01:35:35.9563267Z 2025/06/22 01:01:41 retrying
2025-06-22T01:35:35.9563622Z --- PASS: TestAccBackupSnapshotExportJob_basic (2048.34s)
```
### 2025-06-23
#### PASS 16 minutes
```
2025-06-23T01:06:09.0685512Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-23T01:06:09.0687057Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:49:28.592642655Z, ProjectID: 6858a0459c500e6d1cbd5e1d, Cluster name: test-acc-tf-c-7921986849759137664
2025-06-23T01:06:09.0690236Z 2025/06/23 00:49:37 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6858a0459c500e6d1cbd5e1d/cloudProviderAccess/6858a4a0ee34e36cf9c53453 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6253349205976939282). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6253349205976939282], BadRequestDetail:  
2025-06-23T01:06:09.0692504Z 2025/06/23 00:49:37 retrying
2025-06-23T01:06:09.0692834Z --- PASS: TestAccBackupSnapshotExportJob_basic (1004.92s)
```
### 2025-06-24
#### PASS 17 minutes
```
2025-06-24T01:07:05.4428024Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-24T01:07:05.4429575Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:49:24.451284279Z, ProjectID: 6859f14422100658cf265d19, Cluster name: test-acc-tf-c-4745251136485265852
2025-06-24T01:07:05.4432497Z 2025/06/24 00:49:32 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6859f14422100658cf265d19/cloudProviderAccess/6859f61b22100658cf268dae PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3996590510556249851). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3996590510556249851], BadRequestDetail:  
2025-06-24T01:07:05.4435920Z 2025/06/24 00:49:32 retrying
2025-06-24T01:07:05.4436539Z --- PASS: TestAccBackupSnapshotExportJob_basic (1065.59s)
```
### 2025-06-25
#### PASS 17 minutes
```
2025-06-25T01:06:59.3149347Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-25T01:06:59.3150180Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:49:46.257366552Z, ProjectID: 685b42d7b37149039973c15a, Cluster name: test-acc-tf-c-7904237688336616017
2025-06-25T01:06:59.3152434Z 2025/06/25 00:49:54 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685b42d7b37149039973c15a/cloudProviderAccess/685b47b14b3ed2215cd7f7e6 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1822858690773175161). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1822858690773175161], BadRequestDetail:  
2025-06-25T01:06:59.3154155Z 2025/06/25 00:49:54 retrying
2025-06-25T01:06:59.3154473Z --- PASS: TestAccBackupSnapshotExportJob_basic (1037.60s)
```
### 2025-06-26
#### PASS 17 minutes
```
2025-06-26T01:08:09.6292495Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-06-26T01:08:09.6293337Z     pre_check.go:40: Time before creating cluster: 2025-06-26T00:50:17.779582623Z, ProjectID: 685c94575c10882b9843ff94, Cluster name: test-acc-tf-c-409010384270980089
2025-06-26T01:08:09.6295581Z 2025/06/26 00:50:26 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/685c94575c10882b9843ff94/cloudProviderAccess/685c99511b4e2c6e5fe46fd9 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2531649608096394452). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2531649608096394452], BadRequestDetail:  
2025-06-26T01:08:09.6297332Z 2025/06/26 00:50:26 retrying
2025-06-26T01:08:09.6297653Z --- PASS: TestAccBackupSnapshotExportJob_basic (1076.28s)
```