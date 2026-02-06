# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/697d4e3f7d00588dcf9eccf6/cloudProviderAccess/697d4e697d00588dcf9fd2b7 | dev | timeout | 10861.05s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/cloudProviderAccess/698143e0b2e54ee9959157eb | dev | out_of_capacity | 62.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09 PASS 20 minutes
- 2026-01-10 PASS 16 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 21 minutes
- 2026-01-14 PASS 17 minutes
- 2026-01-15 PASS 22 minutes
- 2026-01-16 PASS 15 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 18 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 17 minutes
- 2026-01-23 PASS 15 minutes
- 2026-01-24 PASS 16 minutes
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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 15 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 14 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 16 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 16 minutes
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
