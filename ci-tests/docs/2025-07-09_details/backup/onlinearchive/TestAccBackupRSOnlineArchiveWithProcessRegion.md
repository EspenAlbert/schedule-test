# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:36 | dev | 10.09s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 17 minutes
### 2025-04-12
#### PASS 16 minutes
### 2025-04-13
#### PASS 22 minutes
### 2025-04-14
#### PASS 13 minutes
### 2025-04-15
#### PASS 15 minutes
### 2025-04-16
#### PASS 15 minutes
#### PASS 21 minutes
### 2025-04-17
#### PASS 16 minutes
### 2025-04-18
#### PASS 15 minutes
### 2025-04-19
#### PASS 17 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 14 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 18 minutes
### 2025-04-24
#### PASS 14 minutes
### 2025-04-25
#### PASS 16 minutes
### 2025-04-26
#### PASS 15 minutes
### 2025-04-27
#### PASS 19 minutes
### 2025-04-28
#### PASS 17 minutes
### 2025-04-29
#### PASS 14 minutes
### 2025-04-30
#### PASS 23 minutes
### 2025-05-01
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 15 minutes
### 2025-05-02
#### PASS 21 minutes
### 2025-05-03
#### PASS 15 minutes
### 2025-05-04
#### PASS 17 minutes
### 2025-05-05
#### PASS 15 minutes
### 2025-05-06
#### PASS 18 minutes
### 2025-05-07
#### PASS 15 minutes
### 2025-05-08
#### PASS 18 minutes
### 2025-05-09
#### PASS 16 minutes
### 2025-05-10
#### PASS 18 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:46.0011821Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-05-11T00:29:46.0012440Z     resource_online_archive_test.go:169: Creating execution project: test-acc-tf-p-6397452509930188973
2025-05-11T00:29:46.0012960Z     resource_online_archive_test.go:169: 
2025-05-11T00:29:46.0013840Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:46.0015489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:46.0017062Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:46.0018899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_online_archive_test.go:169
2025-05-11T00:29:46.0019694Z         	Error:      	Received unexpected error:
2025-05-11T00:29:46.0020521Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:46.0021400Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2025-05-11T00:29:46.0022412Z         	Messages:   	Project creation failed: test-acc-tf-p-6397452509930188973, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:46.0023152Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (0.01s)
```
### 2025-05-12
#### PASS 17 minutes
### 2025-05-13
#### PASS 18 minutes
#### PASS 17 minutes
### 2025-05-14
#### PASS 16 minutes
### 2025-05-15
#### PASS 16 minutes
### 2025-05-16
#### PASS 16 minutes
### 2025-05-17
#### PASS 17 minutes
### 2025-05-18
#### PASS 16 minutes
### 2025-05-19
#### PASS 17 minutes
### 2025-05-20
#### PASS 16 minutes
### 2025-05-21
#### PASS 17 minutes
### 2025-05-22
#### PASS 16 minutes
### 2025-05-23
#### PASS 18 minutes
### 2025-05-24
#### PASS 15 minutes
### 2025-05-25
#### PASS 18 minutes
### 2025-05-26
#### PASS 17 minutes
### 2025-05-27
#### PASS 15 minutes
### 2025-05-28
#### PASS 24 minutes
#### PASS 19 minutes
### 2025-05-29
#### PASS 29 minutes
### 2025-05-30
#### PASS an hour
#### PASS 17 minutes
### 2025-05-31
#### PASS 16 minutes
### 2025-06-01
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-02
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 16 minutes
### 2025-06-04
#### PASS 18 minutes
### 2025-06-05
#### FAIL 10 seconds
```
2025-06-05T00:36:03.3443545Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-06-05T00:36:03.3447690Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-06-05T00:36:03.3475895Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-06-05T00:36:03.3477506Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:32:51.751096448Z, ProjectID: 6840e5a6161ca93c1f0542f4, Cluster name: test-acc-tf-c-5751777887603917390
2025-06-05T00:36:03.3497184Z    test_name=TestAccBackupRSOnlineArchiveWithProcessRegion test_terraform_path=/home/runner/work/_temp/00501277-f3d8-4855-90e1-d61f13298651/terraform test_working_directory=/tmp/plugintest1578444125
2025-06-05T00:36:03.3499117Z     resource_online_archive_test.go:178: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:36:03.3499866Z         
2025-06-05T00:36:03.3502649Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e5a6161ca93c1f0542f4/clusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3504756Z         
2025-06-05T00:36:03.3505432Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3506741Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3508193Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3508798Z         
2025-06-05T00:36:03.3509364Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (10.89s)
```
### 2025-06-06
#### PASS 16 minutes
### 2025-06-07
#### PASS 17 minutes
### 2025-06-08
#### PASS 15 minutes
### 2025-06-09
#### PASS 14 minutes
### 2025-06-10
#### PASS 24 minutes
### 2025-06-11
#### PASS 18 minutes
#### PASS 15 minutes
### 2025-06-12
#### PASS 16 minutes
### 2025-06-13
#### PASS 14 minutes
### 2025-06-14
#### PASS 38 minutes
### 2025-06-15
#### PASS 17 minutes
### 2025-06-16
#### PASS 25 minutes
### 2025-06-17
#### PASS 16 minutes
### 2025-06-18
#### PASS 17 minutes
### 2025-06-19
#### PASS 43 minutes
### 2025-06-20
#### PASS 17 minutes
### 2025-06-21
#### PASS 15 minutes
### 2025-06-22
#### PASS 17 minutes
### 2025-06-23
#### PASS 17 minutes
### 2025-06-24
#### PASS 18 minutes
### 2025-06-25
#### PASS 14 minutes
### 2025-06-26
#### PASS 25 minutes
### 2025-06-27
#### PASS 16 minutes
### 2025-06-28
#### PASS 16 minutes
### 2025-06-29
#### PASS 16 minutes
### 2025-06-30
#### PASS 19 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 17 minutes
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 33 minutes
### 2025-07-04
#### PASS 14 minutes
### 2025-07-05
#### PASS 16 minutes
### 2025-07-06
#### PASS 17 minutes
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 16 minutes
### 2025-07-09
#### PASS 14 minutes