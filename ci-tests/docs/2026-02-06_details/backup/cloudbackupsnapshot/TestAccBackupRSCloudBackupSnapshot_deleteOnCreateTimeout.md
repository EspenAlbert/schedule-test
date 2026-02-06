# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10811.01s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters | dev | out_of_capacity | 10.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 26 minutes
- 2026-01-10 PASS 17 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 22 minutes
- 2026-01-13 PASS 27 minutes
- 2026-01-14 PASS 20 minutes
- 2026-01-15 PASS 23 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 17 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 18 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 20 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 18 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 28 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6629747Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-01-31T03:36:47.6631132Z === CONT  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-01-31T03:36:47.6633954Z === NAME  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-01-31T03:36:47.6634918Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:25.418488794Z, ProjectID: 697d4e407d00588dcf9ed1b3, Cluster name: test-acc-tf-c-6477578191903328957
2026-01-31T03:36:47.6663401Z === NAME  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-01-31T03:36:47.6664143Z     resource_test.go:111: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-31T03:36:47.6664663Z         
2026-01-31T03:36:47.6664916Z         Error: Error in create
2026-01-31T03:36:47.6665171Z         
2026-01-31T03:36:47.6665542Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6666298Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6667015Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6667384Z         
2026-01-31T03:36:47.6667855Z         cluster=test-acc-tf-c-6477578191903328957 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6668359Z         error: context deadline exceeded
2026-01-31T03:36:47.6668816Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (10811.07s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9857994Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-02-03T00:40:22.9859386Z === CONT  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-02-03T00:40:22.9882589Z === NAME  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-02-03T00:40:22.9883557Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:31.367730739Z, ProjectID: 698143b5b2e54ee9959028e7, Cluster name: test-acc-tf-c-7988625795167967754
2026-02-03T00:40:22.9897980Z   
2026-02-03T00:40:22.9898541Z     resource_test.go:111: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:40:22.9899063Z         
2026-02-03T00:40:22.9899452Z         Error: Error in create
2026-02-03T00:40:22.9899726Z         
2026-02-03T00:40:22.9900106Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9900861Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9901573Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9901943Z         
2026-02-03T00:40:22.9902376Z         cluster name: test-acc-tf-c-7988625795167967754, API error details:
2026-02-03T00:40:22.9903088Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters
2026-02-03T00:40:22.9903809Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9904608Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9905147Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9905609Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (10.81s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 20 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 20 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 17 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 16 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 18 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 19 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
