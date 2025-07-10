# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029420000) |  | qa |  | 0.00s
[2025-06-05 00:33](#error-2025-06-05t0033000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bac939f27413250567/clusters/test-acc-tf-c-2858823782872655814 | dev | flaky_500 | 216.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 15 minutes
- 2025-04-13 PASS 14 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 16 minutes
- 2025-04-16
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-04-17 PASS 16 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 13 minutes
- 2025-04-20 PASS 13 minutes
- 2025-04-21 PASS 15 minutes
- 2025-04-22 PASS 15 minutes
- 2025-04-23 PASS 12 minutes
- 2025-04-24 PASS 14 minutes
- 2025-04-25 PASS 14 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 11 minutes
- 2025-04-28 PASS 15 minutes
- 2025-04-29 PASS 14 minutes
- 2025-04-30 PASS 22 minutes
- 2025-05-01
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-05-02 PASS 12 minutes
- 2025-05-03 PASS 13 minutes
- 2025-05-04 PASS 11 minutes
- 2025-05-05 PASS 10 minutes
- 2025-05-06 PASS 13 minutes
- 2025-05-07 PASS 13 minutes
- 2025-05-08 PASS 15 minutes
- 2025-05-09 PASS 13 minutes
- 2025-05-10 PASS 13 minutes
- 2025-05-11

### Error 2025-05-11T00:29:42+00:00
```
2025-05-11T00:29:42.3817352Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-05-11T00:29:42.3818370Z     resource_cloud_backup_schedule_test.go:483: Creating execution project: test-acc-tf-p-4957723234699018269
2025-05-11T00:29:42.3819244Z     resource_cloud_backup_schedule_test.go:483: 
2025-05-11T00:29:42.3820698Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:42.3853683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:42.3856523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:42.3859834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:483
2025-05-11T00:29:42.3861324Z         	Error:      	Received unexpected error:
2025-05-11T00:29:42.3862698Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:42.3863604Z         	Test:       	TestAccBackupRSCloudBackupSchedule_azure
2025-05-11T00:29:42.3865211Z         	Messages:   	Project creation failed: test-acc-tf-p-4957723234699018269, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:42.3866317Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (0.00s)
```

- 2025-05-12 PASS 12 minutes
- 2025-05-13
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-05-14 PASS 22 minutes
- 2025-05-15 PASS 12 minutes
- 2025-05-16 PASS 13 minutes
- 2025-05-17 PASS 11 minutes
- 2025-05-18 PASS 11 minutes
- 2025-05-19 PASS 12 minutes
- 2025-05-20 PASS 14 minutes
- 2025-05-21 PASS 13 minutes
- 2025-05-22 PASS 12 minutes
- 2025-05-23 PASS 23 minutes
- 2025-05-24 PASS 11 minutes
- 2025-05-25 PASS 13 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 11 minutes
- 2025-05-28
  - PASS 19 minutes
  - PASS 13 minutes
- 2025-05-29 PASS 12 minutes
- 2025-05-30
  - PASS 26 minutes
  - PASS 10 minutes
- 2025-05-31 PASS 13 minutes
- 2025-06-01
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 10 minutes
- 2025-06-02
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-06-03 PASS 11 minutes
- 2025-06-04 PASS 12 minutes
- 2025-06-05

### Error 2025-06-05T00:33:00+00:00
```
2025-06-05T00:33:00.5044522Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-06-05T00:33:00.5048390Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-06-05T00:33:00.5082525Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-06-05T00:33:00.5083396Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:19.0232616Z, ProjectID: 6840e4bac939f27413250567, Cluster name: test-acc-tf-c-2858823782872655814
2025-06-05T00:33:00.5201960Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-06-05T00:33:00.5202568Z     resource_cloud_backup_schedule_test.go:486: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:33:00.5203010Z         
2025-06-05T00:33:00.5204799Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bac939f27413250567/clusters/test-acc-tf-c-2858823782872655814 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:33:00.5205970Z         
2025-06-05T00:33:00.5206348Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:33:00.5207058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:33:00.5207728Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:33:00.5208072Z         
2025-06-05T00:33:00.5208369Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (216.18s)
```

- 2025-06-06 PASS 14 minutes
- 2025-06-07 PASS 12 minutes
- 2025-06-08 PASS 13 minutes
- 2025-06-09 PASS 11 minutes
- 2025-06-10 PASS 21 minutes
- 2025-06-11
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 18 minutes
- 2025-06-14 PASS 15 minutes
- 2025-06-15 PASS 11 minutes
- 2025-06-16 PASS 19 minutes
- 2025-06-17 PASS 42 minutes
- 2025-06-18 PASS 12 minutes
- 2025-06-19 PASS 27 minutes
- 2025-06-20 PASS 12 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 12 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 11 minutes
- 2025-06-25 PASS 12 minutes
- 2025-06-26 PASS 12 minutes
- 2025-06-27 PASS 12 minutes
- 2025-06-28 PASS 11 minutes
- 2025-06-29 PASS 11 minutes
- 2025-06-30 PASS 18 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 14 minutes
- 2025-07-02 PASS 12 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 11 minutes
- 2025-07-06 PASS 10 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 11 minutes
- 2025-07-09 PASS 22 minutes
- 2025-07-10 PASS 17 minutes