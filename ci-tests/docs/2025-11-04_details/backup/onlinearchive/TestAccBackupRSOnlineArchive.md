# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:43](#error-2025-10-07t0343460000) |  | dev |  | 10820.09s
[2025-10-20 10:45](#error-2025-10-20t1045140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters | dev | out_of_capacity | 27.01s
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev |  | 10813.04s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 32 minutes
- 2025-10-07

### Error 2025-10-07T03:43:46+00:00
```
2025-10-07T03:43:46.8352457Z === RUN   TestAccBackupRSOnlineArchive
2025-10-07T03:43:46.8358897Z === CONT  TestAccBackupRSOnlineArchive
2025-10-07T03:43:46.8364997Z === NAME  TestAccBackupRSOnlineArchive
2025-10-07T03:43:46.8365882Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:43:10.385669884Z, ProjectID: 68e46209507f48738a09cce3, Cluster name: test-acc-tf-c-5280052188141875046
2025-10-07T03:43:46.8441206Z === NAME  TestAccBackupRSOnlineArchive
2025-10-07T03:43:46.8441721Z     resource_test.go:35: Step 1/7 error: Error running apply: exit status 1
2025-10-07T03:43:46.8442117Z         
2025-10-07T03:43:46.8442401Z         Error: Error in create
2025-10-07T03:43:46.8442686Z         
2025-10-07T03:43:46.8443074Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:43:46.8443822Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:43:46.8444520Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:43:46.8444888Z         
2025-10-07T03:43:46.8445371Z         cluster=test-acc-tf-c-5280052188141875046 didn't reach desired state: IDLE,
2025-10-07T03:43:46.8445889Z         error: context deadline exceeded
2025-10-07T03:43:46.8446258Z --- FAIL: TestAccBackupRSOnlineArchive (10820.91s)
```

- 2025-10-08 PASS 18 minutes
- 2025-10-09 PASS 50 minutes
- 2025-10-10 PASS 20 minutes
- 2025-10-11 PASS 20 minutes
- 2025-10-12 PASS 15 minutes
- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 23 minutes
- 2025-10-15 PASS 19 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 20 minutes
- 2025-10-18 PASS 17 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 17 minutes
  - FAIL 27 seconds

### Error 2025-10-20T10:45:14+00:00
```
2025-10-20T10:45:14.5812605Z === RUN   TestAccBackupRSOnlineArchive
2025-10-20T10:45:14.5813234Z     resource_test.go:28: Creating execution project: test-acc-tf-p-964372760581373486
2025-10-20T10:45:14.5817088Z === CONT  TestAccBackupRSOnlineArchive
2025-10-20T10:45:14.5908865Z === NAME  TestAccBackupRSOnlineArchive
2025-10-20T10:45:14.5909714Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:40:42.315988882Z, ProjectID: 68f6118f5a13b66d7cb7ca85, Cluster name: test-acc-tf-c-4120521923478889703
2025-10-20T10:45:14.5922405Z    test_name=TestAccBackupRSOnlineArchive
2025-10-20T10:45:14.5922904Z     resource_test.go:35: Step 1/7 error: Error running apply: exit status 1
2025-10-20T10:45:14.5923279Z         
2025-10-20T10:45:14.5923574Z         Error: Error in create
2025-10-20T10:45:14.5923822Z         
2025-10-20T10:45:14.5924196Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:45:14.5924911Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:45:14.5925595Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:45:14.5925939Z         
2025-10-20T10:45:14.5926364Z         cluster name: test-acc-tf-c-4120521923478889703, API error details:
2025-10-20T10:45:14.5927051Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f6118f5a13b66d7cb7ca85/clusters
2025-10-20T10:45:14.5927750Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:45:14.5928420Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:45:14.5929094Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:45:14.5929445Z --- FAIL: TestAccBackupRSOnlineArchive (27.10s)
```

- 2025-10-21 PASS 15 minutes
- 2025-10-22
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-10-23 PASS 42 minutes
- 2025-10-24 PASS 18 minutes
- 2025-10-25 PASS 17 minutes
- 2025-10-26 PASS 18 minutes
- 2025-10-27 PASS 16 minutes
- 2025-10-28 PASS 17 minutes
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3722955Z === RUN   TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3723487Z     resource_test.go:28: Creating execution project: test-acc-tf-p-4438390899891597033
2025-10-30T04:45:03.3727374Z === CONT  TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3731049Z === NAME  TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3732000Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:45:29.04307087Z, ProjectID: 6902b51ce2dc7470847e2166, Cluster name: test-acc-tf-c-5227040788593482355
2025-10-30T04:45:03.3761226Z === NAME  TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3761691Z     resource_test.go:35: Step 1/7 error: Error running apply: exit status 1
2025-10-30T04:45:03.3762049Z         
2025-10-30T04:45:03.3762305Z         Error: Error in create
2025-10-30T04:45:03.3762555Z         
2025-10-30T04:45:03.3762916Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-30T04:45:03.3763627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-30T04:45:03.3764281Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-30T04:45:03.3764621Z         
2025-10-30T04:45:03.3765072Z         cluster=test-acc-tf-c-5227040788593482355 didn't reach desired state: IDLE,
2025-10-30T04:45:03.3765544Z         error: context deadline exceeded
2025-10-30T04:45:03.3765880Z --- FAIL: TestAccBackupRSOnlineArchive (10813.42s)
```

- 2025-10-31 PASS 19 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 29 minutes