# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10811.01s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters | dev | out_of_capacity | 10.08s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 1207.00s

### Timeline
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
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 19 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 19 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 20 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2694007Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-02-24T01:20:27.2696586Z === CONT  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-02-24T01:20:27.2701338Z === NAME  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-02-24T01:20:27.2703040Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:03.491542109Z, ProjectID: 699cf2a2ae2412ce621157e7, Cluster name: test-acc-tf-c-1762933954568927343
2026-02-24T01:20:27.2724738Z === NAME  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-02-24T01:20:27.2726216Z     resource_test.go:111: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T01:20:27.2727103Z         
2026-02-24T01:20:27.2728312Z         Error: error taking a snapshot: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2729235Z         
2026-02-24T01:20:27.2729894Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-02-24T01:20:27.2731172Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-02-24T01:20:27.2732394Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-02-24T01:20:27.2733022Z         
2026-02-24T01:20:27.2733651Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (1207.03s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 21 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 20 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 15 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
