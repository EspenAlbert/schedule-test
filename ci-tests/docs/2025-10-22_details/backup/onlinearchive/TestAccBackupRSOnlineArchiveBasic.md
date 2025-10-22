# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-06 01:32](#error-2025-10-06t0132480000) |  | dev | timeout | 1894.06s
[2025-10-07 03:43](#error-2025-10-07t0343460000) |  | dev |  | 10806.01s
[2025-10-20 10:45](#error-2025-10-20t1045140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters | dev | out_of_capacity | 20.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 20 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 25 minutes
- 2025-09-26 PASS 18 minutes
- 2025-09-27 PASS 18 minutes
- 2025-09-28 PASS 20 minutes
- 2025-09-29
  - PASS 31 minutes
  - PASS 14 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-10-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 33 minutes
  - PASS 22 minutes
- 2025-10-02 PASS 28 minutes
- 2025-10-03 PASS 37 minutes
- 2025-10-04 PASS 42 minutes
- 2025-10-05 PASS 16 minutes
- 2025-10-06

### Error 2025-10-06T01:32:48+00:00
```
2025-10-06T01:32:48.9671300Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-10-06T01:32:48.9676267Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-10-06T01:32:48.9682501Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-10-06T01:32:48.9683240Z     pre_check.go:36: Time before creating cluster: 2025-10-06T00:43:23.56098671Z, ProjectID: 68e3108f065c07374c449877, Cluster name: test-acc-tf-c-1475368088366663510
2025-10-06T01:32:48.9685240Z   diagnostic_summary=
2025-10-06T01:32:48.9687779Z    tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_online_archive
2025-10-06T01:32:48.9699120Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-10-06T01:32:48.9699825Z     resource_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-10-06T01:32:48.9700916Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1894.60s)
```

- 2025-10-07

### Error 2025-10-07T03:43:46+00:00
```
2025-10-07T03:43:46.8353162Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-10-07T03:43:46.8358559Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-10-07T03:43:46.8359790Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-10-07T03:43:46.8360747Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:42:55.375611788Z, ProjectID: 68e46209507f48738a09cce3, Cluster name: test-acc-tf-c-1605617442128413551
2025-10-07T03:43:46.8391419Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-10-07T03:43:46.8391909Z     resource_test.go:131: Step 1/3 error: Error running apply: exit status 1
2025-10-07T03:43:46.8392270Z         
2025-10-07T03:43:46.8392530Z         Error: Error in create
2025-10-07T03:43:46.8392784Z         
2025-10-07T03:43:46.8393151Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:43:46.8393833Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:43:46.8394473Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:43:46.8394811Z         
2025-10-07T03:43:46.8395262Z         cluster=test-acc-tf-c-1605617442128413551 didn't reach desired state: IDLE,
2025-10-07T03:43:46.8395863Z         error: context deadline exceeded
2025-10-07T03:43:46.8396231Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (10806.10s)
```

- 2025-10-08 PASS 18 minutes
- 2025-10-09 PASS 50 minutes
- 2025-10-10 PASS 19 minutes
- 2025-10-11 PASS 19 minutes
- 2025-10-12 PASS 15 minutes
- 2025-10-13 PASS 20 minutes
- 2025-10-14 PASS 16 minutes
- 2025-10-15 PASS 19 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 20 minutes
- 2025-10-18 PASS 17 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 15 minutes
  - FAIL 20 seconds

### Error 2025-10-20T10:45:14+00:00
```
2025-10-20T10:45:14.5813994Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-10-20T10:45:14.5818787Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-10-20T10:45:14.5887516Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-10-20T10:45:14.5888384Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:40:37.315625738Z, ProjectID: 68f6118f5a13b66d7cb7ca85, Cluster name: test-acc-tf-c-103062860916147837
2025-10-20T10:45:14.5901449Z   
2025-10-20T10:45:14.5901837Z     resource_test.go:131: Step 1/3 error: Error running apply: exit status 1
2025-10-20T10:45:14.5902208Z         
2025-10-20T10:45:14.5902474Z         Error: Error in create
2025-10-20T10:45:14.5902725Z         
2025-10-20T10:45:14.5903098Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:45:14.5903819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:45:14.5904497Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:45:14.5904842Z         
2025-10-20T10:45:14.5905269Z         cluster name: test-acc-tf-c-103062860916147837, API error details:
2025-10-20T10:45:14.5905955Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters
2025-10-20T10:45:14.5906658Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:45:14.5907314Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:45:14.5907817Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:45:14.5908316Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (20.63s)
```

- 2025-10-21 PASS 15 minutes
- 2025-10-22
  - PASS 20 minutes
  - PASS 18 minutes