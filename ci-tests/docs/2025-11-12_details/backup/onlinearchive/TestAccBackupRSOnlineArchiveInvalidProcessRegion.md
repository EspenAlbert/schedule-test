# backup/onlinearchive/TestAccBackupRSOnlineArchiveInvalidProcessRegion Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:43](#error-2025-10-07t0343460000) |  | dev |  | 10816.02s
[2025-10-20 10:45](#error-2025-10-20t1045140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters | dev | out_of_capacity | 15.06s
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev |  | 10806.01s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 17 minutes
- 2025-10-05 PASS 13 minutes
- 2025-10-06 PASS 28 minutes
- 2025-10-07

### Error 2025-10-07T03:43:46+00:00
```
2025-10-07T03:43:46.8355068Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-07T03:43:46.8359390Z === CONT  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-07T03:43:46.8363255Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-07T03:43:46.8364262Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:43:05.381851153Z, ProjectID: 68e46209507f48738a09cce3, Cluster name: test-acc-tf-c-8766104251579967225
2025-10-07T03:43:46.8420203Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-07T03:43:46.8420879Z     resource_test.go:219: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-07T03:43:46.8421346Z         
2025-10-07T03:43:46.8421604Z         Error: Error in create
2025-10-07T03:43:46.8421862Z         
2025-10-07T03:43:46.8422224Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:43:46.8422911Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:43:46.8423559Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:43:46.8423911Z         
2025-10-07T03:43:46.8430487Z         cluster=test-acc-tf-c-8766104251579967225 didn't reach desired state: IDLE,
2025-10-07T03:43:46.8431084Z         error: context deadline exceeded
2025-10-07T03:43:46.8431525Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (10816.18s)
```

- 2025-10-08 PASS 15 minutes
- 2025-10-09 PASS 43 minutes
- 2025-10-10 PASS 13 minutes
- 2025-10-11 PASS 14 minutes
- 2025-10-12 PASS 9 minutes
- 2025-10-13 PASS 12 minutes
- 2025-10-14 PASS 11 minutes
- 2025-10-15 PASS 13 minutes
- 2025-10-16 PASS 31 minutes
- 2025-10-17 PASS 14 minutes
- 2025-10-18 PASS 13 minutes
- 2025-10-19 PASS 16 minutes
- 2025-10-20
  - PASS 11 minutes
  - FAIL 15 seconds

### Error 2025-10-20T10:45:14+00:00
```
2025-10-20T10:45:14.5815543Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-20T10:45:14.5817456Z === CONT  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-20T10:45:14.5865042Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-20T10:45:14.5865989Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:40:32.311455529Z, ProjectID: 68f6118f5a13b66d7cb7ca85, Cluster name: test-acc-tf-c-8512417989008733783
2025-10-20T10:45:14.5879454Z   
2025-10-20T10:45:14.5879988Z     resource_test.go:219: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-20T10:45:14.5880477Z         
2025-10-20T10:45:14.5880732Z         Error: Error in create
2025-10-20T10:45:14.5880987Z         
2025-10-20T10:45:14.5881359Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:45:14.5882086Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:45:14.5882758Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:45:14.5883099Z         
2025-10-20T10:45:14.5883526Z         cluster name: test-acc-tf-c-8512417989008733783, API error details:
2025-10-20T10:45:14.5884603Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters
2025-10-20T10:45:14.5885371Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:45:14.5886030Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:45:14.5886537Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:45:14.5887079Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (15.56s)
```

- 2025-10-21 PASS 11 minutes
- 2025-10-22
  - PASS 16 minutes
  - PASS 13 minutes
- 2025-10-23 PASS 31 minutes
- 2025-10-24 PASS 11 minutes
- 2025-10-25 PASS 12 minutes
- 2025-10-26 PASS 12 minutes
- 2025-10-27 PASS 12 minutes
- 2025-10-28 PASS 13 minutes
- 2025-10-29 PASS 17 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3725823Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-30T04:45:03.3727740Z === CONT  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-30T04:45:03.3729251Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-30T04:45:03.3730371Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:45:24.040045728Z, ProjectID: 6902b51ce2dc7470847e2166, Cluster name: test-acc-tf-c-7787313922291527178
2025-10-30T04:45:03.3746647Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-10-30T04:45:03.3747329Z     resource_test.go:219: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-30T04:45:03.3747806Z         
2025-10-30T04:45:03.3748066Z         Error: Error in create
2025-10-30T04:45:03.3748323Z         
2025-10-30T04:45:03.3748680Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-30T04:45:03.3749392Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-30T04:45:03.3750162Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-30T04:45:03.3750507Z         
2025-10-30T04:45:03.3750971Z         cluster=test-acc-tf-c-7787313922291527178 didn't reach desired state: IDLE,
2025-10-30T04:45:03.3751437Z         error: context deadline exceeded
2025-10-30T04:45:03.3751869Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (10806.15s)
```

- 2025-10-31 PASS 15 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 minutes
- 2025-11-03 PASS 11 minutes
- 2025-11-04 PASS 23 minutes
- 2025-11-05
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-11-06 PASS 14 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08 PASS 12 minutes
- 2025-11-09 PASS 15 minutes
- 2025-11-10 PASS 13 minutes
- 2025-11-11 PASS 12 minutes
- 2025-11-12 PASS 16 minutes