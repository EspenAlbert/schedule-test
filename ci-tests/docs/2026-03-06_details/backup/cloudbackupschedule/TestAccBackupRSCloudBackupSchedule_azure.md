# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 02:50](#error-2026-02-05t0250200000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6983e69a304923ebd185245d/clusters | dev | out_of_capacity | 11.01s
[2026-02-16 01:00](#error-2026-02-16t0100530000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6992673c60ee1ae24ac92203/clusters | dev | out_of_capacity | 15.09s
[2026-02-19 01:06](#error-2026-02-19t0106270000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69965bca5b4417cf65b87799/clusters | dev | out_of_capacity | 6.02s
[2026-02-21 00:55](#error-2026-02-21t0055170000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6998fe1923648dd3abd4c3cb/clusters | dev | out_of_capacity | 20.08s
[2026-02-24 00:56](#error-2026-02-24t0056260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699cf2a28dfec41eaa847838/clusters | dev | out_of_capacity | 10.10s
[2026-02-26 00:56](#error-2026-02-26t0056220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699f958b6ef93d0b6c181662/clusters | dev | out_of_capacity | 21.07s
[2026-03-04 00:57](#error-2026-03-04t0057300000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a77ed9a0aca1fefeead67d/clusters | dev | out_of_capacity | 25.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T02:50:20+00:00
```
2026-02-05T02:50:20.2355778Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2358850Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2365174Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2366804Z     pre_check.go:46: Time before creating cluster: 2026-02-05T00:39:02.561038701Z, ProjectID: 6983e69a304923ebd185245d, Cluster name: test-acc-tf-c-2373532110598912219
2026-02-05T02:50:20.2391377Z    test_working_directory=/tmp/plugintest2228696035 test_name=TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2392853Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-05T02:50:20.2393696Z         
2026-02-05T02:50:20.2394171Z         Error: Error in create
2026-02-05T02:50:20.2394633Z         
2026-02-05T02:50:20.2395322Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-05T02:50:20.2396684Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-05T02:50:20.2397978Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-05T02:50:20.2398628Z         
2026-02-05T02:50:20.2399422Z         cluster name: test-acc-tf-c-2373532110598912219, API error details:
2026-02-05T02:50:20.2400864Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e69a304923ebd185245d/clusters
2026-02-05T02:50:20.2402162Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-05T02:50:20.2403400Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-05T02:50:20.2404349Z         Conflict. Params: [], BadRequestDetail: 
2026-02-05T02:50:20.2405077Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (11.08s)
```

- 2026-02-06 PASS 16 minutes
- 2026-02-07 PASS 14 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 15 minutes
- 2026-02-10 PASS 14 minutes
- 2026-02-11 PASS 14 minutes
- 2026-02-12 PASS 15 minutes
- 2026-02-13 PASS 17 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T01:00:53+00:00
```
2026-02-16T01:00:53.9557945Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-16T01:00:53.9562056Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-16T01:00:53.9585301Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-16T01:00:53.9586877Z     pre_check.go:46: Time before creating cluster: 2026-02-16T00:39:41.147637201Z, ProjectID: 6992673c60ee1ae24ac92203, Cluster name: test-acc-tf-c-456029040643827575
2026-02-16T01:00:53.9640331Z   
2026-02-16T01:00:53.9641358Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-16T01:00:53.9642324Z         
2026-02-16T01:00:53.9642765Z         Error: Error in create
2026-02-16T01:00:53.9643182Z         
2026-02-16T01:00:53.9643824Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-16T01:00:53.9645269Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-16T01:00:53.9646662Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-16T01:00:53.9647266Z         
2026-02-16T01:00:53.9648230Z         cluster name: test-acc-tf-c-456029040643827575, API error details:
2026-02-16T01:00:53.9649446Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6992673c60ee1ae24ac92203/clusters
2026-02-16T01:00:53.9650685Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-16T01:00:53.9651861Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-16T01:00:53.9652751Z         Conflict. Params: [], BadRequestDetail: 
2026-02-16T01:00:53.9653431Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (15.85s)
```

- 2026-02-17 PASS 15 minutes
- 2026-02-18 PASS 19 minutes
- 2026-02-19

### Error 2026-02-19T01:06:27+00:00
```
2026-02-19T01:06:27.0437843Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-19T01:06:27.0461373Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-19T01:06:27.0464511Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-19T01:06:27.0466320Z     pre_check.go:46: Time before creating cluster: 2026-02-19T00:39:46.023276343Z, ProjectID: 69965bca5b4417cf65b87799, Cluster name: test-acc-tf-c-3738714967923240974
2026-02-19T01:06:27.0492892Z   
2026-02-19T01:06:27.0493876Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-19T01:06:27.0494710Z         
2026-02-19T01:06:27.0495167Z         Error: Error in create
2026-02-19T01:06:27.0495606Z         
2026-02-19T01:06:27.0496309Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-19T01:06:27.0497766Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-19T01:06:27.0499087Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-19T01:06:27.0499726Z         
2026-02-19T01:06:27.0500535Z         cluster name: test-acc-tf-c-3738714967923240974, API error details:
2026-02-19T01:06:27.0501889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bca5b4417cf65b87799/clusters
2026-02-19T01:06:27.0503393Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-19T01:06:27.0504664Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-19T01:06:27.0505659Z         Conflict. Params: [], BadRequestDetail: 
2026-02-19T01:06:27.0506362Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (6.22s)
```

- 2026-02-20 PASS 17 minutes
- 2026-02-21

### Error 2026-02-21T00:55:17+00:00
```
2026-02-21T00:55:17.4188740Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-21T00:55:17.4190897Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-21T00:55:17.4198048Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-21T00:55:17.4199278Z     pre_check.go:46: Time before creating cluster: 2026-02-21T00:37:04.321824702Z, ProjectID: 6998fe1923648dd3abd4c3cb, Cluster name: test-acc-tf-c-4290599557073084442
2026-02-21T00:55:17.4214370Z    test_name=TestAccBackupRSCloudBackupSchedule_azure test_working_directory=/tmp/plugintest1912317207
2026-02-21T00:55:17.4215235Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-21T00:55:17.4215738Z         
2026-02-21T00:55:17.4216030Z         Error: Error in create
2026-02-21T00:55:17.4216323Z         
2026-02-21T00:55:17.4216719Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-21T00:55:17.4217487Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-21T00:55:17.4218218Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-21T00:55:17.4218613Z         
2026-02-21T00:55:17.4219072Z         cluster name: test-acc-tf-c-4290599557073084442, API error details:
2026-02-21T00:55:17.4219805Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe1923648dd3abd4c3cb/clusters
2026-02-21T00:55:17.4221085Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-21T00:55:17.4222139Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-21T00:55:17.4222920Z         Conflict. Params: [], BadRequestDetail: 
2026-02-21T00:55:17.4223441Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (20.78s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 18 minutes
- 2026-02-24

### Error 2026-02-24T00:56:26+00:00
```
2026-02-24T00:56:26.6817923Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-24T00:56:26.6820290Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-24T00:56:26.6827408Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-24T00:56:26.6829087Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:04.139112425Z, ProjectID: 699cf2a28dfec41eaa847838, Cluster name: test-acc-tf-c-7875175730864776456
2026-02-24T00:56:26.6853208Z    test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform test_working_directory=/tmp/plugintest2938214766 test_step_number=1
2026-02-24T00:56:26.6855236Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-24T00:56:26.6856157Z         
2026-02-24T00:56:26.6856664Z         Error: Error in create
2026-02-24T00:56:26.6857134Z         
2026-02-24T00:56:26.6857850Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-24T00:56:26.6859240Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-24T00:56:26.6860525Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-24T00:56:26.6861170Z         
2026-02-24T00:56:26.6861980Z         cluster name: test-acc-tf-c-7875175730864776456, API error details:
2026-02-24T00:56:26.6863284Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a28dfec41eaa847838/clusters
2026-02-24T00:56:26.6864613Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-24T00:56:26.6866057Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-24T00:56:26.6867059Z         Conflict. Params: [], BadRequestDetail: 
2026-02-24T00:56:26.6867788Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (10.98s)
```

- 2026-02-25 PASS 18 minutes
- 2026-02-26

### Error 2026-02-26T00:56:22+00:00
```
2026-02-26T00:56:22.6305939Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-26T00:56:22.6308318Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-26T00:56:22.6315947Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-26T00:56:22.6316878Z     pre_check.go:46: Time before creating cluster: 2026-02-26T00:36:49.574412087Z, ProjectID: 699f958b6ef93d0b6c181662, Cluster name: test-acc-tf-c-256096047651508593
2026-02-26T00:56:22.6334719Z   
2026-02-26T00:56:22.6335432Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-26T00:56:22.6335971Z         
2026-02-26T00:56:22.6336380Z         Error: Error in create
2026-02-26T00:56:22.6336662Z         
2026-02-26T00:56:22.6337182Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-26T00:56:22.6338082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-26T00:56:22.6338931Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-26T00:56:22.6339319Z         
2026-02-26T00:56:22.6339902Z         cluster name: test-acc-tf-c-256096047651508593, API error details:
2026-02-26T00:56:22.6340751Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f958b6ef93d0b6c181662/clusters
2026-02-26T00:56:22.6341718Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-26T00:56:22.6342559Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-26T00:56:22.6343230Z         Conflict. Params: [], BadRequestDetail: 
2026-02-26T00:56:22.6343787Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (21.71s)
```

- 2026-02-27 PASS 16 minutes
- 2026-02-28 PASS 15 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 20 minutes
- 2026-03-04

### Error 2026-03-04T00:57:30+00:00
```
2026-03-04T00:57:30.3612917Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-03-04T00:57:30.3614133Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-03-04T00:57:30.3635807Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-03-04T00:57:30.3637859Z     pre_check.go:46: Time before creating cluster: 2026-03-04T00:38:13.618298549Z, ProjectID: 69a77ed9a0aca1fefeead67d, Cluster name: test-acc-tf-c-2591493912877049090
2026-03-04T00:57:30.3664134Z   
2026-03-04T00:57:30.3665042Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-03-04T00:57:30.3666106Z         
2026-03-04T00:57:30.3666558Z         Error: Error in create
2026-03-04T00:57:30.3666996Z         
2026-03-04T00:57:30.3667672Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-03-04T00:57:30.3669058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-03-04T00:57:30.3670370Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-03-04T00:57:30.3671022Z         
2026-03-04T00:57:30.3671816Z         cluster name: test-acc-tf-c-2591493912877049090, API error details:
2026-03-04T00:57:30.3673304Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77ed9a0aca1fefeead67d/clusters
2026-03-04T00:57:30.3674667Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-03-04T00:57:30.3675955Z         region is currently out of capacity for the requested instance size. Reason:
2026-03-04T00:57:30.3676916Z         Conflict. Params: [], BadRequestDetail: 
2026-03-04T00:57:30.3700686Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (25.75s)
```

- 2026-03-05 PASS 23 minutes
- 2026-03-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 10 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 20 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 12 minutes
  - PASS 11 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 15 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 16 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 13 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
