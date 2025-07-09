# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:33 | dev | 191.03s

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
#### PASS 20 minutes
### 2025-04-14
#### PASS 16 minutes
### 2025-04-15
#### PASS 19 minutes
### 2025-04-16
#### PASS 17 minutes
#### PASS 24 minutes
### 2025-04-17
#### PASS 18 minutes
### 2025-04-18
#### PASS 19 minutes
### 2025-04-19
#### PASS 17 minutes
### 2025-04-20
#### PASS 17 minutes
### 2025-04-21
#### PASS 18 minutes
### 2025-04-22
#### PASS 18 minutes
### 2025-04-23
#### PASS 19 minutes
### 2025-04-24
#### PASS 19 minutes
### 2025-04-25
#### PASS 17 minutes
### 2025-04-26
#### PASS 18 minutes
### 2025-04-27
#### PASS 20 minutes
### 2025-04-28
#### PASS 17 minutes
### 2025-04-29
#### PASS 17 minutes
### 2025-04-30
#### PASS 24 minutes
### 2025-05-01
#### PASS 19 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-05-02
#### PASS 19 minutes
### 2025-05-03
#### PASS 18 minutes
### 2025-05-04
#### PASS 17 minutes
### 2025-05-05
#### PASS 15 minutes
### 2025-05-06
#### PASS 17 minutes
### 2025-05-07
#### PASS 18 minutes
### 2025-05-08
#### PASS 20 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 17 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:43.5261546Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-05-11T00:29:43.5262760Z     resource_cloud_backup_snapshot_test.go:23: Creating execution project: test-acc-tf-p-5014705319075367773
2025-05-11T00:29:43.5263814Z     resource_cloud_backup_snapshot_test.go:23: 
2025-05-11T00:29:43.5265550Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.5268797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.5272061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:43.5275853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_cloud_backup_snapshot_test.go:23
2025-05-11T00:29:43.5277485Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.5279083Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.5280231Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2025-05-11T00:29:43.5282242Z         	Messages:   	Project creation failed: test-acc-tf-p-5014705319075367773, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.5283531Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (0.01s)
```
### 2025-05-12
#### PASS 14 minutes
### 2025-05-13
#### PASS 18 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 24 minutes
### 2025-05-15
#### PASS 18 minutes
### 2025-05-16
#### PASS 19 minutes
### 2025-05-17
#### PASS 18 minutes
### 2025-05-18
#### PASS 18 minutes
### 2025-05-19
#### PASS 17 minutes
### 2025-05-20
#### PASS 18 minutes
### 2025-05-21
#### PASS 19 minutes
### 2025-05-22
#### PASS 19 minutes
### 2025-05-23
#### PASS 18 minutes
### 2025-05-24
#### PASS 18 minutes
### 2025-05-25
#### PASS 19 minutes
### 2025-05-26
#### PASS 18 minutes
### 2025-05-27
#### PASS 17 minutes
### 2025-05-28
#### PASS 27 minutes
#### PASS 19 minutes
### 2025-05-29
#### PASS 22 minutes
### 2025-05-30
#### PASS 18 minutes
#### PASS 16 minutes
### 2025-05-31
#### PASS 18 minutes
### 2025-06-01
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-06-02
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-06-03
#### PASS 18 minutes
### 2025-06-04
#### PASS 20 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:33:00.5269296Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-06-05T00:33:00.5271154Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-06-05T00:33:00.5272252Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-06-05T00:33:00.5273096Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:55.407499822Z, ProjectID: 6840e4bb161ca93c1f051e4e, Cluster name: test-acc-tf-c-606495017291676044
2025-06-05T00:33:00.5300655Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-06-05T00:33:00.5301247Z     resource_cloud_backup_snapshot_test.go:28: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:33:00.5301677Z         
2025-06-05T00:33:00.5303350Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bb161ca93c1f051e4e/clusters/test-acc-tf-c-606495017291676044 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:33:00.5304503Z         
2025-06-05T00:33:00.5304982Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:33:00.5305694Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:33:00.5306372Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:33:00.5306719Z         
2025-06-05T00:33:00.5307021Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (191.32s)
```
### 2025-06-06
#### PASS 18 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 18 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 24 minutes
### 2025-06-11
#### PASS 18 minutes
#### PASS 17 minutes
### 2025-06-12
#### PASS 17 minutes
### 2025-06-13
#### PASS 20 minutes
### 2025-06-14
#### PASS 18 minutes
### 2025-06-15
#### PASS 17 minutes
### 2025-06-16
#### PASS 18 minutes
### 2025-06-17
#### PASS 18 minutes
### 2025-06-18
#### PASS 25 minutes
### 2025-06-19
#### PASS 22 minutes
### 2025-06-20
#### PASS 17 minutes
### 2025-06-21
#### PASS 17 minutes
### 2025-06-22
#### PASS 19 minutes
### 2025-06-23
#### PASS 17 minutes
### 2025-06-24
#### PASS 16 minutes
### 2025-06-25
#### PASS 17 minutes
### 2025-06-26
#### PASS 16 minutes
### 2025-06-27
#### PASS 17 minutes
### 2025-06-28
#### PASS 17 minutes
### 2025-06-29
#### PASS 19 minutes
### 2025-06-30
#### PASS 18 minutes
### 2025-07-01
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 17 minutes
### 2025-07-02
#### PASS 17 minutes
### 2025-07-03
#### PASS 19 minutes
### 2025-07-04
#### PASS 17 minutes
### 2025-07-05
#### PASS 16 minutes
### 2025-07-06
#### PASS 17 minutes
### 2025-07-07
#### PASS 18 minutes
### 2025-07-08
#### PASS 19 minutes
### 2025-07-09
#### PASS 33 minutes