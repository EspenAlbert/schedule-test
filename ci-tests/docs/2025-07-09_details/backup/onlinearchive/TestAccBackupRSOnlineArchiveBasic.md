# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:36 | dev | 25.09s
2025-06-14 02:34 | dev | 1874.05s

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
#### PASS 16 minutes
### 2025-04-12
#### PASS 16 minutes
### 2025-04-13
#### PASS 23 minutes
### 2025-04-14
#### PASS 14 minutes
### 2025-04-15
#### PASS 14 minutes
### 2025-04-16
#### PASS 15 minutes
#### PASS 22 minutes
### 2025-04-17
#### PASS 14 minutes
### 2025-04-18
#### PASS 14 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 15 minutes
### 2025-04-22
#### PASS 17 minutes
### 2025-04-23
#### PASS 18 minutes
### 2025-04-24
#### PASS 19 minutes
### 2025-04-25
#### PASS 15 minutes
### 2025-04-26
#### PASS 16 minutes
### 2025-04-27
#### PASS 20 minutes
### 2025-04-28
#### PASS 17 minutes
### 2025-04-29
#### PASS 14 minutes
### 2025-04-30
#### PASS 24 minutes
### 2025-05-01
#### PASS 18 minutes
#### PASS 19 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-05-02
#### PASS 21 minutes
### 2025-05-03
#### PASS 15 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 17 minutes
### 2025-05-06
#### PASS 19 minutes
### 2025-05-07
#### PASS 18 minutes
### 2025-05-08
#### PASS 18 minutes
### 2025-05-09
#### PASS 16 minutes
### 2025-05-10
#### PASS 18 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:46.0000118Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-05-11T00:29:46.0000695Z     resource_online_archive_test.go:123: Creating execution project: test-acc-tf-p-4485256890462551030
2025-05-11T00:29:46.0001366Z     resource_online_archive_test.go:123: 
2025-05-11T00:29:46.0002252Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:46.0003892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:46.0005471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:46.0007312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_online_archive_test.go:123
2025-05-11T00:29:46.0008111Z         	Error:      	Received unexpected error:
2025-05-11T00:29:46.0008933Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:46.0009481Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2025-05-11T00:29:46.0010461Z         	Messages:   	Project creation failed: test-acc-tf-p-4485256890462551030, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:46.0011412Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (0.01s)
```
### 2025-05-12
#### PASS 15 minutes
### 2025-05-13
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 18 minutes
### 2025-05-15
#### PASS 15 minutes
### 2025-05-16
#### PASS 16 minutes
### 2025-05-17
#### PASS 15 minutes
### 2025-05-18
#### PASS 19 minutes
### 2025-05-19
#### PASS 15 minutes
### 2025-05-20
#### PASS 14 minutes
### 2025-05-21
#### PASS 16 minutes
### 2025-05-22
#### PASS 17 minutes
### 2025-05-23
#### PASS 14 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 18 minutes
### 2025-05-26
#### PASS 15 minutes
### 2025-05-27
#### PASS 17 minutes
### 2025-05-28
#### PASS 24 minutes
#### PASS 18 minutes
### 2025-05-29
#### PASS 28 minutes
### 2025-05-30
#### PASS 46 minutes
#### PASS 18 minutes
### 2025-05-31
#### PASS 18 minutes
### 2025-06-01
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-02
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 16 minutes
### 2025-06-05
#### FAIL 25 seconds
```
2025-06-05T00:36:03.3442284Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-06-05T00:36:03.3449686Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-06-05T00:36:03.3462631Z   
2025-06-05T00:36:03.3555356Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-06-05T00:36:03.3556186Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:33:06.757179574Z, ProjectID: 6840e5a6161ca93c1f0542f4, Cluster name: test-acc-tf-c-1587347447643754552
2025-06-05T00:36:03.3567431Z   
2025-06-05T00:36:03.3567871Z     resource_online_archive_test.go:131: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:36:03.3568277Z         
2025-06-05T00:36:03.3569773Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e5a6161ca93c1f0542f4/clusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3570982Z         
2025-06-05T00:36:03.3571393Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3572104Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3572764Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3573102Z         
2025-06-05T00:36:03.3573364Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (25.95s)
```
### 2025-06-06
#### PASS 14 minutes
### 2025-06-07
#### PASS 17 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 14 minutes
### 2025-06-10
#### PASS 20 minutes
### 2025-06-11
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 18 minutes
### 2025-06-13
#### PASS 15 minutes
### 2025-06-14
#### FAIL 31 minutes
```
2025-06-14T02:34:18.1537254Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-06-14T02:34:18.1541255Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-06-14T02:34:18.1546806Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-06-14T02:34:18.1547628Z     pre_check.go:40: Time before creating cluster: 2025-06-14T00:53:13.767389841Z, ProjectID: 684cc7dd25b50457df29c63d, Cluster name: test-acc-tf-c-2960145583487842580
2025-06-14T02:34:18.1551355Z     resource_online_archive_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-06-14T02:34:18.1557212Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1874.47s)
```
### 2025-06-15
#### PASS 18 minutes
### 2025-06-16
#### PASS 21 minutes
### 2025-06-17
#### PASS 17 minutes
### 2025-06-18
#### PASS 18 minutes
### 2025-06-19
#### PASS 38 minutes
### 2025-06-20
#### PASS 18 minutes
### 2025-06-21
#### PASS 15 minutes
### 2025-06-22
#### PASS 17 minutes
### 2025-06-23
#### PASS 15 minutes
### 2025-06-24
#### PASS 15 minutes
### 2025-06-25
#### PASS 15 minutes
### 2025-06-26
#### PASS 16 minutes
### 2025-06-27
#### PASS 14 minutes
### 2025-06-28
#### PASS 16 minutes
### 2025-06-29
#### PASS 17 minutes
### 2025-06-30
#### PASS 18 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 14 minutes
### 2025-07-02
#### PASS 15 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### PASS 14 minutes
### 2025-07-05
#### PASS 14 minutes
### 2025-07-06
#### PASS 16 minutes
### 2025-07-07
#### PASS 16 minutes
### 2025-07-08
#### PASS 18 minutes
### 2025-07-09
#### PASS 16 minutes