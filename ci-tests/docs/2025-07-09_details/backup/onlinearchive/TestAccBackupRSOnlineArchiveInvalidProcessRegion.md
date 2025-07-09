# backup/onlinearchive/TestAccBackupRSOnlineArchiveInvalidProcessRegion Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-11 00:29 |  | qa |  | 0.00s
2025-06-05 00:36 |  | dev |  | 20.09s
2025-07-01 01:07 |  | dev | unknown | 251.02s

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
#### PASS 9 minutes
### 2025-04-12
#### PASS 12 minutes
### 2025-04-13
#### PASS 18 minutes
### 2025-04-14
#### PASS 9 minutes
### 2025-04-15
#### PASS 11 minutes
### 2025-04-16
#### PASS 11 minutes
#### PASS 15 minutes
### 2025-04-17
#### PASS 9 minutes
### 2025-04-18
#### PASS 9 minutes
### 2025-04-19
#### PASS 11 minutes
### 2025-04-20
#### PASS 13 minutes
### 2025-04-21
#### PASS 11 minutes
### 2025-04-22
#### PASS 11 minutes
### 2025-04-23
#### PASS 11 minutes
### 2025-04-24
#### PASS 11 minutes
### 2025-04-25
#### PASS 9 minutes
### 2025-04-26
#### PASS 11 minutes
### 2025-04-27
#### PASS 14 minutes
### 2025-04-28
#### PASS 10 minutes
### 2025-04-29
#### PASS 13 minutes
### 2025-04-30
#### PASS 13 minutes
### 2025-05-01
#### PASS 12 minutes
#### PASS 10 minutes
#### PASS 11 minutes
#### PASS 10 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 10 minutes
### 2025-05-02
#### PASS 11 minutes
### 2025-05-03
#### PASS 10 minutes
### 2025-05-04
#### PASS 10 minutes
### 2025-05-05
#### PASS 11 minutes
### 2025-05-06
#### PASS 14 minutes
### 2025-05-07
#### PASS 11 minutes
### 2025-05-08
#### PASS 11 minutes
### 2025-05-09
#### PASS 12 minutes
### 2025-05-10
#### PASS 11 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:46.0023599Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-05-11T00:29:46.0024225Z     resource_online_archive_test.go:213: Creating execution project: test-acc-tf-p-8685647832368613932
2025-05-11T00:29:46.0024736Z     resource_online_archive_test.go:213: 
2025-05-11T00:29:46.0025628Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:46.0027277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:46.0028853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:46.0030692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_online_archive_test.go:213
2025-05-11T00:29:46.0031678Z         	Error:      	Received unexpected error:
2025-05-11T00:29:46.0032509Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:46.0033115Z         	Test:       	TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-05-11T00:29:46.0034136Z         	Messages:   	Project creation failed: test-acc-tf-p-8685647832368613932, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:46.0034885Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (0.01s)
```
### 2025-05-12
#### PASS 11 minutes
### 2025-05-13
#### PASS 11 minutes
#### PASS 11 minutes
### 2025-05-14
#### PASS 13 minutes
### 2025-05-15
#### PASS 11 minutes
### 2025-05-16
#### PASS 12 minutes
### 2025-05-17
#### PASS 11 minutes
### 2025-05-18
#### PASS 12 minutes
### 2025-05-19
#### PASS 12 minutes
### 2025-05-20
#### PASS 11 minutes
### 2025-05-21
#### PASS 11 minutes
### 2025-05-22
#### PASS 12 minutes
### 2025-05-23
#### PASS 11 minutes
### 2025-05-24
#### PASS 11 minutes
### 2025-05-25
#### PASS 12 minutes
### 2025-05-26
#### PASS 12 minutes
### 2025-05-27
#### PASS 10 minutes
### 2025-05-28
#### PASS 19 minutes
#### PASS 12 minutes
### 2025-05-29
#### PASS 23 minutes
### 2025-05-30
#### PASS 11 minutes
#### PASS 13 minutes
### 2025-05-31
#### PASS 11 minutes
### 2025-06-01
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 9 minutes
### 2025-06-02
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 11 minutes
### 2025-06-03
#### PASS 10 minutes
### 2025-06-04
#### PASS 12 minutes
### 2025-06-05
#### FAIL 20 seconds
```
2025-06-05T00:36:03.3445210Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-06-05T00:36:03.3448439Z === CONT  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-06-05T00:36:03.3535513Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-06-05T00:36:03.3536399Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:33:01.756874266Z, ProjectID: 6840e5a6161ca93c1f0542f4, Cluster name: test-acc-tf-c-3865353713320010682
2025-06-05T00:36:03.3548663Z   
2025-06-05T00:36:03.3549322Z     resource_online_archive_test.go:219: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:36:03.3549837Z         
2025-06-05T00:36:03.3551337Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e5a6161ca93c1f0542f4/clusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3552387Z         
2025-06-05T00:36:03.3552748Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3553455Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3554109Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3554444Z         
2025-06-05T00:36:03.3554931Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (20.91s)
```
### 2025-06-06
#### PASS 11 minutes
### 2025-06-07
#### PASS 12 minutes
### 2025-06-08
#### PASS 12 minutes
### 2025-06-09
#### PASS 11 minutes
### 2025-06-10
#### PASS 9 minutes
### 2025-06-11
#### PASS 11 minutes
#### PASS 11 minutes
### 2025-06-12
#### PASS 11 minutes
### 2025-06-13
#### PASS 11 minutes
### 2025-06-14
#### PASS 33 minutes
### 2025-06-15
#### PASS 11 minutes
### 2025-06-16
#### PASS 17 minutes
### 2025-06-17
#### PASS 10 minutes
### 2025-06-18
#### PASS 13 minutes
### 2025-06-19
#### PASS 19 minutes
### 2025-06-20
#### PASS 12 minutes
### 2025-06-21
#### PASS 10 minutes
### 2025-06-22
#### PASS 12 minutes
### 2025-06-23
#### PASS 11 minutes
### 2025-06-24
#### PASS 12 minutes
### 2025-06-25
#### PASS 9 minutes
### 2025-06-26
#### PASS 13 minutes
### 2025-06-27
#### PASS 11 minutes
### 2025-06-28
#### PASS 11 minutes
### 2025-06-29
#### PASS 11 minutes
### 2025-06-30
#### PASS 14 minutes
### 2025-07-01
#### FAIL 4 minutes
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-01T01:07:01.623000+00:00-TestAccBackupRSOnlineArchiveInvalidProcessRegion',confidence=1.0,ts_when='7 days ago')

```
2025-07-01T01:07:01.0623133Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0625276Z === CONT  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0626312Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0627198Z     pre_check.go:40: Time before creating cluster: 2025-07-01T00:43:20.432786918Z, ProjectID: 68632f208f2a6336ca1d1c57, Cluster name: test-acc-tf-c-1055619080495383280
2025-07-01T01:07:01.0643103Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0643838Z     resource_online_archive_test.go:219: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-01T01:07:01.0644527Z         
2025-07-01T01:07:01.0645746Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632f208f2a6336ca1d1c57/clusters/test-acc-tf-c-1055619080495383280": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-01T01:07:01.0646618Z         
2025-07-01T01:07:01.0646974Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-01T01:07:01.0647665Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-01T01:07:01.0648313Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-01T01:07:01.0648766Z         
2025-07-01T01:07:01.0649099Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (251.16s)
```
#### PASS 11 minutes
#### PASS 10 minutes
#### PASS 12 minutes
#### PASS 10 minutes
#### PASS 11 minutes
### 2025-07-02
#### PASS 12 minutes
### 2025-07-03
#### PASS 11 minutes
### 2025-07-04
#### PASS 12 minutes
### 2025-07-05
#### PASS 11 minutes
### 2025-07-06
#### PASS 12 minutes
### 2025-07-07
#### PASS 12 minutes
### 2025-07-08
#### PASS 12 minutes
### 2025-07-09
#### PASS 13 minutes