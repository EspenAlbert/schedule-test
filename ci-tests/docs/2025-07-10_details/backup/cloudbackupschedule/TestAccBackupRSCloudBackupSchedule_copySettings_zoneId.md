# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_copySettings_zoneId Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029420000) |  | qa |  | 0.00s
[2025-06-05 00:33](#error-2025-06-05t0033000000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6840e4bac939f27413250567/cloudProviderAccess/6840e4cfc939f274132512ae | dev | flaky_500 | 201.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 17 minutes
- 2025-04-14 PASS 10 minutes
- 2025-04-15 PASS 11 minutes
- 2025-04-16
  - PASS 12 minutes
  - PASS 15 minutes
- 2025-04-17 PASS 11 minutes
- 2025-04-18 PASS 11 minutes
- 2025-04-19 PASS 10 minutes
- 2025-04-20 PASS 15 minutes
- 2025-04-21 PASS 11 minutes
- 2025-04-22 PASS 11 minutes
- 2025-04-23 PASS 11 minutes
- 2025-04-24 PASS 12 minutes
- 2025-04-25 PASS 9 minutes
- 2025-04-26 PASS 14 minutes
- 2025-04-27 PASS 12 minutes
- 2025-04-28 PASS 12 minutes
- 2025-04-29 PASS 11 minutes
- 2025-04-30 PASS 12 minutes
- 2025-05-01
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-05-02 PASS 11 minutes
- 2025-05-03 PASS 12 minutes
- 2025-05-04 PASS 12 minutes
- 2025-05-05 PASS 10 minutes
- 2025-05-06 PASS 10 minutes
- 2025-05-07 PASS 12 minutes
- 2025-05-08 PASS 14 minutes
- 2025-05-09 PASS 13 minutes
- 2025-05-10 PASS 12 minutes
- 2025-05-11

### Error 2025-05-11T00:29:42+00:00
```
2025-05-11T00:29:42.3746714Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-05-11T00:29:42.3747815Z     resource_cloud_backup_schedule_test.go:342: Creating execution project: test-acc-tf-p-5140443767470352779
2025-05-11T00:29:42.3748709Z     resource_cloud_backup_schedule_test.go:342: 
2025-05-11T00:29:42.3750180Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:42.3753105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:42.3755797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:42.3759158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:342
2025-05-11T00:29:42.3760562Z         	Error:      	Received unexpected error:
2025-05-11T00:29:42.3792189Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:42.3793289Z         	Test:       	TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-05-11T00:29:42.3795105Z         	Messages:   	Project creation failed: test-acc-tf-p-5140443767470352779, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:42.3796371Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (0.00s)
```

- 2025-05-12 PASS 12 minutes
- 2025-05-13
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-05-14 PASS 11 minutes
- 2025-05-15 PASS 11 minutes
- 2025-05-16 PASS 10 minutes
- 2025-05-17 PASS 11 minutes
- 2025-05-18 PASS 14 minutes
- 2025-05-19 PASS 10 minutes
- 2025-05-20 PASS 11 minutes
- 2025-05-21 PASS 12 minutes
- 2025-05-22 PASS 11 minutes
- 2025-05-23 PASS 19 minutes
- 2025-05-24 PASS 12 minutes
- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 11 minutes
- 2025-05-27 PASS 10 minutes
- 2025-05-28
  - PASS 17 minutes
  - PASS 13 minutes
- 2025-05-29 PASS 10 minutes
- 2025-05-30
  - PASS 26 minutes
  - PASS 9 minutes
- 2025-05-31 PASS 13 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 10 minutes
- 2025-06-02
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-06-03 PASS 12 minutes
- 2025-06-04 PASS 11 minutes
- 2025-06-05

### Error 2025-06-05T00:33:00+00:00
```
2025-06-05T00:33:00.5042773Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-06-05T00:33:00.5046719Z === CONT  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-06-05T00:33:00.5075366Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-06-05T00:33:00.5076374Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:04.021663964Z, ProjectID: 6840e4bac939f27413250567, Cluster name: test-acc-tf-c-6690429150257865164
2025-06-05T00:33:00.5078635Z 2025/06/05 00:29:04 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bac939f27413250567/cloudProviderAccess/6840e4cfc939f274132512ae PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7680136200558690490). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-7680136200558690490], BadRequestDetail:  
2025-06-05T00:33:00.5080434Z 2025/06/05 00:29:04 retrying
2025-06-05T00:33:00.5132766Z === NAME  TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2025-06-05T00:33:00.5133545Z     resource_cloud_backup_schedule_test.go:401: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:33:00.5133992Z         
2025-06-05T00:33:00.5135824Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bac939f27413250567/clusters/test-acc-tf-c-6690429150257865164 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:33:00.5137004Z         
2025-06-05T00:33:00.5137375Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:33:00.5138088Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:33:00.5138879Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:33:00.5139226Z         
2025-06-05T00:33:00.5139578Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (201.08s)
```

- 2025-06-06 PASS 13 minutes
- 2025-06-07 PASS 11 minutes
- 2025-06-08 PASS 13 minutes
- 2025-06-09 PASS 12 minutes
- 2025-06-10 PASS 21 minutes
- 2025-06-11
  - PASS 11 minutes
  - PASS 15 minutes
- 2025-06-12 PASS 12 minutes
- 2025-06-13 PASS 12 minutes
- 2025-06-14 PASS 13 minutes
- 2025-06-15 PASS 14 minutes
- 2025-06-16 PASS 12 minutes
- 2025-06-17 PASS 12 minutes
- 2025-06-18 PASS 10 minutes
- 2025-06-19 PASS 28 minutes
- 2025-06-20 PASS 11 minutes
- 2025-06-21 PASS 11 minutes
- 2025-06-22 PASS 11 minutes
- 2025-06-23 PASS 9 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 10 minutes
- 2025-06-26 PASS 10 minutes
- 2025-06-27 PASS 10 minutes
- 2025-06-28 PASS 12 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 12 minutes
- 2025-07-01
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-07-02 PASS 11 minutes
- 2025-07-03 PASS 11 minutes
- 2025-07-04 PASS 11 minutes
- 2025-07-05 PASS 12 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 11 minutes
- 2025-07-09 PASS 22 minutes
- 2025-07-10 PASS 15 minutes