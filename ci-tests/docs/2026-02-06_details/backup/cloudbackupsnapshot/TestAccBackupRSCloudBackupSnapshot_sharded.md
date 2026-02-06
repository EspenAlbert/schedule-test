# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10815.10s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters | dev | out_of_capacity | 15.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 26 minutes
- 2026-01-09 PASS 32 minutes
- 2026-01-10 PASS 26 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 30 minutes
- 2026-01-13 PASS 33 minutes
- 2026-01-14 PASS 30 minutes
- 2026-01-15 PASS 32 minutes
- 2026-01-16 PASS 35 minutes
- 2026-01-17 PASS 26 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 28 minutes
- 2026-01-20 PASS 28 minutes
- 2026-01-21 PASS 35 minutes
- 2026-01-22 PASS 33 minutes
- 2026-01-23 PASS 33 minutes
- 2026-01-24 PASS 24 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27 PASS 30 minutes
- 2026-01-28 PASS 31 minutes
- 2026-01-29 PASS 35 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6628909Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6631587Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6635661Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6636561Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:30.421550453Z, ProjectID: 697d4e407d00588dcf9ed1b3, Cluster name: test-acc-tf-c-1908402429456152472
2026-01-31T03:36:47.6647036Z   
2026-01-31T03:36:47.6679183Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6679711Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:36:47.6680100Z         
2026-01-31T03:36:47.6680355Z         Error: Error in create
2026-01-31T03:36:47.6680617Z         
2026-01-31T03:36:47.6680979Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-01-31T03:36:47.6681708Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-01-31T03:36:47.6682402Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-01-31T03:36:47.6682974Z         
2026-01-31T03:36:47.6683473Z         cluster=test-acc-tf-c-1908402429456152472 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6683972Z         error: context deadline exceeded
2026-01-31T03:36:47.6684375Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10815.96s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9857149Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-03T00:40:22.9859828Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-03T00:40:22.9906111Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-03T00:40:22.9907017Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:36.370227404Z, ProjectID: 698143b5b2e54ee9959028e7, Cluster name: test-acc-tf-c-1378474228191796520
2026-02-03T00:40:22.9919972Z    test_name=TestAccBackupRSCloudBackupSnapshot_sharded test_terraform_path=/home/runner/work/_temp/94eb3854-7c8a-40ca-953b-807f8c063dbc/terraform
2026-02-03T00:40:22.9920824Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:40:22.9921214Z         
2026-02-03T00:40:22.9921481Z         Error: Error in create
2026-02-03T00:40:22.9921748Z         
2026-02-03T00:40:22.9922125Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-02-03T00:40:22.9922862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-02-03T00:40:22.9923568Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-02-03T00:40:22.9924038Z         
2026-02-03T00:40:22.9924619Z         cluster name: test-acc-tf-c-1378474228191796520, API error details:
2026-02-03T00:40:22.9925319Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters
2026-02-03T00:40:22.9926044Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9926724Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9927255Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9927659Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (15.89s)
```

- 2026-02-04 PASS 42 minutes
- 2026-02-05 PASS 43 minutes
- 2026-02-06 PASS 48 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 27 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 31 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 25 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 25 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 31 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 30 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
