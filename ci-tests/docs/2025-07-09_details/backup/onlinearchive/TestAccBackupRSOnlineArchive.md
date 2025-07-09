# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-05-30 02:32 | dev | 4993.10s
2025-06-05 00:36 | dev | 15.09s

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
#### PASS 15 minutes
### 2025-04-12
#### PASS 16 minutes
### 2025-04-13
#### PASS 22 minutes
### 2025-04-14
#### PASS 16 minutes
### 2025-04-15
#### PASS 13 minutes
### 2025-04-16
#### PASS 14 minutes
#### PASS 21 minutes
### 2025-04-17
#### PASS 15 minutes
### 2025-04-18
#### PASS 13 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 15 minutes
### 2025-04-22
#### PASS 15 minutes
### 2025-04-23
#### PASS 17 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 15 minutes
### 2025-04-26
#### PASS 16 minutes
### 2025-04-27
#### PASS 16 minutes
### 2025-04-28
#### PASS 15 minutes
### 2025-04-29
#### PASS 16 minutes
### 2025-04-30
#### PASS 23 minutes
### 2025-05-01
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-05-02
#### PASS 16 minutes
### 2025-05-03
#### PASS 15 minutes
### 2025-05-04
#### PASS 17 minutes
### 2025-05-05
#### PASS 15 minutes
### 2025-05-06
#### PASS 16 minutes
### 2025-05-07
#### PASS 17 minutes
### 2025-05-08
#### PASS 14 minutes
### 2025-05-09
#### PASS 17 minutes
### 2025-05-10
#### PASS 14 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:45.9988643Z === RUN   TestAccBackupRSOnlineArchive
2025-05-11T00:29:45.9989210Z     resource_online_archive_test.go:28: Creating execution project: test-acc-tf-p-163601355379369024
2025-05-11T00:29:45.9989719Z     resource_online_archive_test.go:28: 
2025-05-11T00:29:45.9990747Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:45.9992619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:45.9994198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:45.9996008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_online_archive_test.go:28
2025-05-11T00:29:45.9996798Z         	Error:      	Received unexpected error:
2025-05-11T00:29:45.9997626Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.9998145Z         	Test:       	TestAccBackupRSOnlineArchive
2025-05-11T00:29:45.9999108Z         	Messages:   	Project creation failed: test-acc-tf-p-163601355379369024, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.9999786Z --- FAIL: TestAccBackupRSOnlineArchive (0.01s)
```
### 2025-05-12
#### PASS 14 minutes
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
#### PASS 17 minutes
### 2025-05-19
#### PASS 15 minutes
### 2025-05-20
#### PASS 15 minutes
### 2025-05-21
#### PASS 15 minutes
### 2025-05-22
#### PASS 19 minutes
### 2025-05-23
#### PASS 18 minutes
### 2025-05-24
#### PASS 17 minutes
### 2025-05-25
#### PASS 19 minutes
### 2025-05-26
#### PASS 14 minutes
### 2025-05-27
#### PASS 15 minutes
### 2025-05-28
#### PASS 24 minutes
#### PASS 16 minutes
### 2025-05-29
#### PASS 26 minutes
### 2025-05-30
#### FAIL an hour
```
2025-05-30T02:32:32.8194075Z === RUN   TestAccBackupRSOnlineArchive
2025-05-30T02:32:32.8202920Z === CONT  TestAccBackupRSOnlineArchive
2025-05-30T02:32:32.8212346Z === NAME  TestAccBackupRSOnlineArchive
2025-05-30T02:32:32.8213849Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:04:04.241190009Z, ProjectID: 683903e9633e350548a5b76c, Cluster name: test-acc-tf-c-2171315280560605463
2025-05-30T02:32:32.8235300Z === NAME  TestAccBackupRSOnlineArchive
2025-05-30T02:32:32.8236826Z     resource_online_archive_test.go:35: Step 1/7 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-05-30T02:32:32.8239092Z --- FAIL: TestAccBackupRSOnlineArchive (4993.98s)
```
#### PASS 17 minutes
### 2025-05-31
#### PASS 17 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 13 minutes
#### PASS 14 minutes
### 2025-06-02
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 15 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 17 minutes
### 2025-06-05
#### FAIL 15 seconds
```
2025-06-05T00:36:03.3441152Z === RUN   TestAccBackupRSOnlineArchive
2025-06-05T00:36:03.3449111Z === CONT  TestAccBackupRSOnlineArchive
2025-06-05T00:36:03.3510091Z === NAME  TestAccBackupRSOnlineArchive
2025-06-05T00:36:03.3511600Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:32:56.753737301Z, ProjectID: 6840e5a6161ca93c1f0542f4, Cluster name: test-acc-tf-c-6535666623299098045
2025-06-05T00:36:03.3529087Z   
2025-06-05T00:36:03.3529548Z     resource_online_archive_test.go:35: Step 1/7 error: Error running apply: exit status 1
2025-06-05T00:36:03.3529963Z         
2025-06-05T00:36:03.3531472Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e5a6161ca93c1f0542f4/clusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3532520Z         
2025-06-05T00:36:03.3532886Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3533593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3534261Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3534792Z         
2025-06-05T00:36:03.3535107Z --- FAIL: TestAccBackupRSOnlineArchive (15.92s)
```
### 2025-06-06
#### PASS 15 minutes
### 2025-06-07
#### PASS 19 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 23 minutes
### 2025-06-11
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 16 minutes
### 2025-06-13
#### PASS 19 minutes
### 2025-06-14
#### PASS 33 minutes
### 2025-06-15
#### PASS 16 minutes
### 2025-06-16
#### PASS 30 minutes
### 2025-06-17
#### PASS 16 minutes
### 2025-06-18
#### PASS 16 minutes
### 2025-06-19
#### PASS 42 minutes
### 2025-06-20
#### PASS 19 minutes
### 2025-06-21
#### PASS 18 minutes
### 2025-06-22
#### PASS 17 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 17 minutes
### 2025-06-25
#### PASS 16 minutes
### 2025-06-26
#### PASS 23 minutes
### 2025-06-27
#### PASS 16 minutes
### 2025-06-28
#### PASS 15 minutes
### 2025-06-29
#### PASS 19 minutes
### 2025-06-30
#### PASS 19 minutes
### 2025-07-01
#### PASS 18 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 13 minutes
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-07-02
#### PASS 16 minutes
### 2025-07-03
#### PASS 17 minutes
### 2025-07-04
#### PASS 15 minutes
### 2025-07-05
#### PASS 16 minutes
### 2025-07-06
#### PASS 20 minutes
### 2025-07-07
#### PASS 15 minutes
### 2025-07-08
#### PASS 16 minutes
### 2025-07-09
#### PASS 18 minutes