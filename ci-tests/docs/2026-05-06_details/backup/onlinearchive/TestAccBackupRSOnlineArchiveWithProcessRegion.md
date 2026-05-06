# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters | dev | out_of_capacity | 20.08s
[2026-04-25 01:29](#error-2026-04-25t0129140000) |  | dev |  | 1282.03s
[2026-04-27 01:40](#error-2026-04-27t0140020000) |  | dev |  | 1663.03s
[2026-04-28 01:44](#error-2026-04-28t0144150000) |  | dev |  | 1916.01s
[2026-04-29 01:47](#error-2026-04-29t0147160000) |  | dev |  | 1746.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 45 minutes
- 2026-04-08 PASS 26 minutes
- 2026-04-09 PASS 32 minutes
- 2026-04-10 PASS 43 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 26 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 24 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8283918Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-16T01:05:00.8287446Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-16T01:05:00.8354357Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-16T01:05:00.8355413Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:26.796994936Z, ProjectID: 69e032c181002038a8a0a6f1, Cluster name: test-acc-tf-c-4326353105441171064
2026-04-16T01:05:00.8368727Z   
2026-04-16T01:05:00.8369133Z     resource_test.go:178: Step 1/4 error: Error running apply: exit status 1
2026-04-16T01:05:00.8369673Z         
2026-04-16T01:05:00.8369950Z         Error: Error in create
2026-04-16T01:05:00.8370218Z         
2026-04-16T01:05:00.8370603Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8371342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8372039Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8372396Z         
2026-04-16T01:05:00.8372833Z         cluster name: test-acc-tf-c-4326353105441171064, API error details:
2026-04-16T01:05:00.8373531Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters
2026-04-16T01:05:00.8374240Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8374910Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8375434Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8375873Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (20.82s)
```

- 2026-04-17 PASS 26 minutes
- 2026-04-18 PASS 25 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 17 minutes
- 2026-04-21 PASS 30 minutes
- 2026-04-22 PASS 44 minutes
- 2026-04-23 PASS 33 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25

### Error 2026-04-25T01:29:14+00:00
```
2026-04-25T01:29:14.7043453Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-25T01:29:14.7048853Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-25T01:29:14.7058674Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-25T01:29:14.7060122Z     pre_check.go:46: Time before creating cluster: 2026-04-25T01:03:45.219743231Z, ProjectID: 69ec12da1e137e366f02d49a, Cluster name: test-acc-tf-c-2958750854399874484
2026-04-25T01:29:14.7085346Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-25T01:29:14.7086564Z     resource_test.go:178: Step 1/4 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-25T01:29:14.7087642Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1282.25s)
```

- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T01:40:02+00:00
```
2026-04-27T01:40:02.9924937Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-27T01:40:02.9928419Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-27T01:40:02.9932926Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-27T01:40:02.9934152Z     pre_check.go:46: Time before creating cluster: 2026-04-27T01:12:18.960326875Z, ProjectID: 69eeb7eb3f007945e3a4279b, Cluster name: test-acc-tf-c-2109300677251571894
2026-04-27T01:40:02.9974693Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-27T01:40:02.9975478Z     resource_test.go:178: Step 1/4 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-27T01:40:02.9976635Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1663.30s)
```

- 2026-04-28

### Error 2026-04-28T01:44:15+00:00
```
2026-04-28T01:44:15.5200263Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-28T01:44:15.5204564Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-28T01:44:15.5214021Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-28T01:44:15.5214971Z     pre_check.go:46: Time before creating cluster: 2026-04-28T01:11:33.546226916Z, ProjectID: 69f0092e3c93ff81902e46e0, Cluster name: test-acc-tf-c-110625065163333094
2026-04-28T01:44:15.5236541Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-28T01:44:15.5237364Z     resource_test.go:178: Step 1/4 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-28T01:44:15.5247522Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1916.12s)
```

- 2026-04-29

### Error 2026-04-29T01:47:16+00:00
```
2026-04-29T01:47:16.1618662Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-29T01:47:16.1624526Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-29T01:47:16.1628001Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-29T01:47:16.1630018Z     pre_check.go:46: Time before creating cluster: 2026-04-29T01:14:36.916923946Z, ProjectID: 69f15b762bb4e6756060b60d, Cluster name: test-acc-tf-c-3256958148752374104
2026-04-29T01:47:16.1686236Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-04-29T01:47:16.1687666Z     resource_test.go:178: Step 1/4 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-29T01:47:16.1700610Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1746.78s)
```

- 2026-04-30 PASS 34 minutes
- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 21 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 33 minutes
- 2026-05-05 PASS 43 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 18 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 18 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 23 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 minutes
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes
