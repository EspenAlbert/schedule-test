# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/697d4e3f7d00588dcf9eccf6/cloudProviderAccess/697d4e697d00588dcf9fd2b7 | dev | timeout | 10861.05s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/cloudProviderAccess/698143e0b2e54ee9959157eb | dev | out_of_capacity | 62.00s
[2026-02-24 00:56](#error-2026-02-24t0056260000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699cf2a28dfec41eaa847838/cloudProviderAccess/699cf2ccae2412ce62128580 | dev | flaky_500 | 1018.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 19 minutes
- 2026-01-28 PASS 18 minutes
- 2026-01-29 PASS 20 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6481578Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-01-31T03:36:47.6494269Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2026-01-31T03:36:47.6534993Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-01-31T03:36:47.6535919Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:44.897308761Z, ProjectID: 697d4e3f7d00588dcf9eccf6, Cluster name: test-acc-tf-c-5289218607372433549
2026-01-31T03:36:47.6538288Z 2026/01/31 00:35:54 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e3f7d00588dcf9eccf6/cloudProviderAccess/697d4e697d00588dcf9fd2b7 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-536866629505347747). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-536866629505347747], BadRequestDetail:  
2026-01-31T03:36:47.6540123Z 2026/01/31 00:35:54 retrying
2026-01-31T03:36:47.6549973Z   
2026-01-31T03:36:47.6616929Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-01-31T03:36:47.6617585Z     resource_cloud_backup_schedule_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:47.6618064Z         
2026-01-31T03:36:47.6618325Z         Error: Error in create
2026-01-31T03:36:47.6618589Z         
2026-01-31T03:36:47.6618972Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6619887Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6620603Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6620979Z         
2026-01-31T03:36:47.6621463Z         cluster=test-acc-tf-c-5289218607372433549 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6621971Z         error: context deadline exceeded
2026-01-31T03:36:47.6622376Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (10861.48s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9651835Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-02-03T00:40:22.9663644Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2026-02-03T00:40:22.9827095Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-03T00:40:22.9828004Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:50.201488484Z, ProjectID: 698143b5e3c7fce2317dd5f6, Cluster name: test-acc-tf-c-4120159882929284487
2026-02-03T00:40:22.9830338Z 2026/02/03 00:40:02 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/cloudProviderAccess/698143e0b2e54ee9959157eb PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7833402037014814400). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7833402037014814400], BadRequestDetail:  
2026-02-03T00:40:22.9832136Z 2026/02/03 00:40:02 retrying
2026-02-03T00:40:22.9845703Z    test_name=TestAccBackupRSCloudBackupSchedule_export test_terraform_path=/home/runner/work/_temp/94eb3854-7c8a-40ca-953b-807f8c063dbc/terraform
2026-02-03T00:40:22.9846640Z     resource_cloud_backup_schedule_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:22.9847106Z         
2026-02-03T00:40:22.9847368Z         Error: Error in create
2026-02-03T00:40:22.9847626Z         
2026-02-03T00:40:22.9847999Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9848744Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9849460Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9849831Z         
2026-02-03T00:40:22.9850381Z         cluster name: test-acc-tf-c-4120159882929284487, API error details:
2026-02-03T00:40:22.9851087Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters
2026-02-03T00:40:22.9851808Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9852494Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9853028Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9853432Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (62.00s)
```

- 2026-02-04 PASS 29 minutes
- 2026-02-05 PASS 19 minutes
- 2026-02-06 PASS 16 minutes
- 2026-02-07 PASS 19 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10 PASS 18 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 20 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 19 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 18 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T00:56:26+00:00
```
2026-02-24T00:56:26.6811351Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6823468Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6878412Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6880149Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:24.146716474Z, ProjectID: 699cf2a28dfec41eaa847838, Cluster name: test-acc-tf-c-7151337619973360903
2026-02-24T00:56:26.6884573Z 2026/02/24 00:37:33 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a28dfec41eaa847838/cloudProviderAccess/699cf2ccae2412ce62128580 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4400266209161475115). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4400266209161475115], BadRequestDetail:  
2026-02-24T00:56:26.6888066Z 2026/02/24 00:37:33 retrying
2026-02-24T00:56:26.6904220Z    test_name=TestAccBackupRSCloudBackupSchedule_basic test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform test_working_directory=/tmp/plugintest2477043192
2026-02-24T00:56:26.6932261Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-24T00:56:26.6933392Z     resource_cloud_backup_schedule_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:26.6934215Z         
2026-02-24T00:56:26.6935928Z         Error: error creating a Cloud Backup Schedule: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:56:26.6936986Z         
2026-02-24T00:56:26.6937720Z           with mongodbatlas_cloud_backup_schedule.schedule_test,
2026-02-24T00:56:26.6939144Z           on terraform_plugin_test.tf line 43, in resource "mongodbatlas_cloud_backup_schedule" "schedule_test":
2026-02-24T00:56:26.6940533Z           43:     resource "mongodbatlas_cloud_backup_schedule" "schedule_test" {
2026-02-24T00:56:26.6941263Z         
2026-02-24T00:56:26.6995159Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (1018.81s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-22 00:57](#error-2026-02-22t0057310000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699a5015c26caab7eb25b79f/backup/exportBuckets | qa | 40.09s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 17 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 14 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 19 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 15 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T00:57:31+00:00
```
2026-02-22T00:57:31.8396593Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8407469Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8416641Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8417545Z     pre_check.go:46: Time before creating cluster: 2026-02-22T00:39:04.406797145Z, ProjectID: 699a5015c26caab7eb25b79f, Cluster name: test-acc-tf-c-4853939872613247750
2026-02-22T00:57:31.8446941Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-02-22T00:57:31.8447597Z     resource_cloud_backup_schedule_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-02-22T00:57:31.8448284Z         
2026-02-22T00:57:31.8450448Z         Error: error creating snapshot export bucket: https://cloud-qa.mongodb.com/api/atlas/v2/groups/699a5015c26caab7eb25b79f/backup/exportBuckets POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (699a502fc26caab7eb25ffd6). Reason: Bad Request. Params: [699a502fc26caab7eb25ffd6], BadRequestDetail: 
2026-02-22T00:57:31.8451831Z         
2026-02-22T00:57:31.8452270Z           with mongodbatlas_cloud_backup_snapshot_export_bucket.test,
2026-02-22T00:57:31.8453119Z           on terraform_plugin_test.tf line 97, in resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test":
2026-02-22T00:57:31.8453928Z           97:     resource "mongodbatlas_cloud_backup_snapshot_export_bucket" "test" {
2026-02-22T00:57:31.8454332Z         
2026-02-22T00:57:31.8456496Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (40.91s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
