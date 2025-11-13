# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:45](#error-2025-10-20t1045140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters | dev | out_of_capacity | 5.05s
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev |  | 10821.01s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 15 minutes
- 2025-10-16 PASS 31 minutes
- 2025-10-17 PASS 17 minutes
- 2025-10-18 PASS 13 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS 13 minutes
  - FAIL 5 seconds

### Error 2025-10-20T10:45:14+00:00
```
2025-10-20T10:45:14.5816381Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-20T10:45:14.5818261Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-20T10:45:14.5819148Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-20T10:45:14.5820012Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:40:22.303554503Z, ProjectID: 68f6118f5a13b66d7cb7ca85, Cluster name: test-acc-tf-c-7031468176597339480
2025-10-20T10:45:14.5832242Z    test_name=TestAccOnlineArchive_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/537ce9fb-255d-4345-b10d-38c12bff48e2/terraform
2025-10-20T10:45:14.5833507Z     resource_test.go:532: Step 1/2 error: Error running apply: exit status 1
2025-10-20T10:45:14.5834274Z         
2025-10-20T10:45:14.5834592Z         Error: Error in create
2025-10-20T10:45:14.5834935Z         
2025-10-20T10:45:14.5835354Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:45:14.5836081Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:45:14.5836913Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:45:14.5837257Z         
2025-10-20T10:45:14.5837682Z         cluster name: test-acc-tf-c-7031468176597339480, API error details:
2025-10-20T10:45:14.5838374Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters
2025-10-20T10:45:14.5839300Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:45:14.5839965Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:45:14.5840472Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:45:14.5840862Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (5.54s)
```

- 2025-10-21 PASS 13 minutes
- 2025-10-22
  - PASS 18 minutes
  - PASS 14 minutes
- 2025-10-23 PASS 37 minutes
- 2025-10-24 PASS 16 minutes
- 2025-10-25 PASS 12 minutes
- 2025-10-26 PASS 15 minutes
- 2025-10-27 PASS 14 minutes
- 2025-10-28 PASS 12 minutes
- 2025-10-29 PASS 18 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3726667Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3728536Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3734380Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3735200Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:45:39.046411889Z, ProjectID: 6902b51ce2dc7470847e2166, Cluster name: test-acc-tf-c-6981169937196542871
2025-10-30T04:45:03.3789875Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3790474Z     resource_test.go:532: Step 1/2 error: Error running apply: exit status 1
2025-10-30T04:45:03.3790847Z         
2025-10-30T04:45:03.3791097Z         Error: Error in create
2025-10-30T04:45:03.3791351Z         
2025-10-30T04:45:03.3791711Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-30T04:45:03.3792408Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-30T04:45:03.3793081Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-30T04:45:03.3793421Z         
2025-10-30T04:45:03.3793872Z         cluster=test-acc-tf-c-6981169937196542871 didn't reach desired state: IDLE,
2025-10-30T04:45:03.3794341Z         error: context deadline exceeded
2025-10-30T04:45:03.3794727Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (10821.10s)
```

- 2025-10-31 PASS 18 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 minutes
- 2025-11-03 PASS 13 minutes
- 2025-11-04 PASS 26 minutes
- 2025-11-05
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-11-06 PASS 21 minutes
- 2025-11-07 PASS 16 minutes
- 2025-11-08 PASS 15 minutes
- 2025-11-09 PASS 17 minutes
- 2025-11-10 PASS 15 minutes
- 2025-11-11 PASS 16 minutes
- 2025-11-12 PASS 18 minutes
- 2025-11-13
  - PASS 34 minutes
  - PASS 16 minutes