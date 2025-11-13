# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:45](#error-2025-10-20t1045140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters | dev | out_of_capacity | 10.05s
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev |  | 10816.01s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 17 minutes
- 2025-10-16 PASS 34 minutes
- 2025-10-17 PASS 18 minutes
- 2025-10-18 PASS 16 minutes
- 2025-10-19 PASS 19 minutes
- 2025-10-20
  - PASS 16 minutes
  - FAIL 10 seconds

### Error 2025-10-20T10:45:14+00:00
```
2025-10-20T10:45:14.5814707Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-20T10:45:14.5817885Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-20T10:45:14.5841282Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-20T10:45:14.5842175Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:40:27.307889374Z, ProjectID: 68f6118f5a13b66d7cb7ca85, Cluster name: test-acc-tf-c-4735878766414441781
2025-10-20T10:45:14.5855408Z    test_name=TestAccBackupRSOnlineArchiveWithProcessRegion test_terraform_path=/home/runner/work/_temp/537ce9fb-255d-4345-b10d-38c12bff48e2/terraform test_working_directory=/tmp/plugintest3132936550 test_step_number=1
2025-10-20T10:45:14.5856486Z     resource_test.go:178: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:45:14.5856862Z         
2025-10-20T10:45:14.5857119Z         Error: Error in create
2025-10-20T10:45:14.5857373Z         
2025-10-20T10:45:14.5857737Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:45:14.5858815Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:45:14.5859675Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:45:14.5860041Z         
2025-10-20T10:45:14.5860477Z         cluster name: test-acc-tf-c-4735878766414441781, API error details:
2025-10-20T10:45:14.5861176Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters
2025-10-20T10:45:14.5862813Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:45:14.5863605Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:45:14.5864117Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:45:14.5864557Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (10.55s)
```

- 2025-10-21 PASS 16 minutes
- 2025-10-22
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-10-23 PASS 42 minutes
- 2025-10-24 PASS 15 minutes
- 2025-10-25 PASS 16 minutes
- 2025-10-26 PASS 18 minutes
- 2025-10-27 PASS 16 minutes
- 2025-10-28 PASS 16 minutes
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3724980Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-30T04:45:03.3728151Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-30T04:45:03.3732718Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-30T04:45:03.3733579Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:45:34.045931324Z, ProjectID: 6902b51ce2dc7470847e2166, Cluster name: test-acc-tf-c-9188192045005176861
2025-10-30T04:45:03.3775407Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-30T04:45:03.3775930Z     resource_test.go:178: Step 1/4 error: Error running apply: exit status 1
2025-10-30T04:45:03.3776300Z         
2025-10-30T04:45:03.3776552Z         Error: Error in create
2025-10-30T04:45:03.3776803Z         
2025-10-30T04:45:03.3777291Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-30T04:45:03.3778007Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-30T04:45:03.3778661Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-30T04:45:03.3779002Z         
2025-10-30T04:45:03.3779451Z         cluster=test-acc-tf-c-9188192045005176861 didn't reach desired state: IDLE,
2025-10-30T04:45:03.3779923Z         error: context deadline exceeded
2025-10-30T04:45:03.3780603Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (10816.08s)
```

- 2025-10-31 PASS 21 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03 PASS 20 minutes
- 2025-11-04 PASS 28 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-11-06 PASS 20 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 17 minutes
- 2025-11-09 PASS 19 minutes
- 2025-11-10 PASS 17 minutes
- 2025-11-11 PASS 16 minutes
- 2025-11-12 PASS 20 minutes
- 2025-11-13
  - PASS 37 minutes
  - PASS 18 minutes