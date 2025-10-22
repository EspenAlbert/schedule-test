# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-29 01:37](#error-2025-09-29t0137280000) |  | dev | timeout | 1812.04s
[2025-10-07 03:43](#error-2025-10-07t0343460000) |  | dev |  | 10825.09s
[2025-10-12 03:12](#error-2025-10-12t0312230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68eb17d4454e3b49aeac97da/clusters/test-acc-tf-c-4971122165288111485/onlineArchives/68eb1a1e454e3b49aeac9e99 | qa | flaky_500 | 758.07s
[2025-10-20 10:45](#error-2025-10-20t1045140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters | dev | out_of_capacity | 10.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 19 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26 PASS 23 minutes
- 2025-09-27 PASS 19 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29
  - FAIL 30 minutes

### Error 2025-09-29T01:37:28+00:00
```
2025-09-29T01:37:28.9335821Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9340619Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9343638Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9345004Z     pre_check.go:32: Time before creating cluster: 2025-09-29T00:48:02.403551498Z, ProjectID: 68d9d73b4e603f222fd99f4b, Cluster name: test-acc-tf-c-5386166454002091424
2025-09-29T01:37:28.9366597Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9367517Z     resource_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-09-29T01:37:28.9369358Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1812.38s)
```

  - PASS 16 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-10-01
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 31 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 31 minutes
  - PASS 22 minutes
- 2025-10-02 PASS 29 minutes
- 2025-10-03 PASS 37 minutes
- 2025-10-04 PASS 18 minutes
- 2025-10-05 PASS 16 minutes
- 2025-10-06 PASS 49 minutes
- 2025-10-07

### Error 2025-10-07T03:43:46+00:00
```
2025-10-07T03:43:46.8354029Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-07T03:43:46.8357434Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-07T03:43:46.8366697Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-07T03:43:46.8367639Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:43:15.388165207Z, ProjectID: 68e46209507f48738a09cce3, Cluster name: test-acc-tf-c-4639579902525059517
2025-10-07T03:43:46.8376181Z    test_terraform_path=/home/runner/work/_temp/b540e5a4-6731-42eb-aebd-723222e951d9/terraform test_name=TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-10-07T03:43:46.8456540Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-07T03:43:46.8457114Z     resource_test.go:178: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:43:46.8457529Z         
2025-10-07T03:43:46.8457816Z         Error: Error in create
2025-10-07T03:43:46.8458092Z         
2025-10-07T03:43:46.8458701Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:43:46.8459451Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:43:46.8460149Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:43:46.8460531Z         
2025-10-07T03:43:46.8461028Z         cluster=test-acc-tf-c-4639579902525059517 didn't reach desired state: IDLE,
2025-10-07T03:43:46.8461541Z         error: context deadline exceeded
2025-10-07T03:43:46.8461981Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (10825.91s)
```

- 2025-10-08 PASS 20 minutes
- 2025-10-09 PASS 49 minutes
- 2025-10-10 PASS 21 minutes
- 2025-10-11 PASS 16 minutes
- 2025-10-12

### Error 2025-10-12T03:12:23+00:00
```
2025-10-12T03:12:23.0206876Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-12T03:12:23.0212026Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-12T03:12:23.0218123Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-12T03:12:23.0219689Z     pre_check.go:36: Time before creating cluster: 2025-10-12T02:52:15.738130216Z, ProjectID: 68eb17d4454e3b49aeac97da, Cluster name: test-acc-tf-c-4971122165288111485
2025-10-12T03:12:23.0274873Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-10-12T03:12:23.0276037Z     resource_test.go:178: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T03:12:23.0276852Z         
2025-10-12T03:12:23.0280882Z         Error: error deleting MongoDB Atlas Online Archive: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eb17d4454e3b49aeac97da/clusters/test-acc-tf-c-4971122165288111485/onlineArchives/68eb1a1e454e3b49aeac9e99 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail:  archive_id (68eb1a1e454e3b49aeac9e99)
2025-10-12T03:12:23.0283599Z         
2025-10-12T03:12:23.0284294Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (758.69s)
```

- 2025-10-13 PASS 19 minutes
- 2025-10-14 PASS 16 minutes
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