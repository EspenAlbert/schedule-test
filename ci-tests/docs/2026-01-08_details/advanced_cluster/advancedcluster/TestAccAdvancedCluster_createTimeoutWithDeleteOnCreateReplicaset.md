# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031010000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da942d59b8466ea72ae92/clusters/test-acc-tf-c-7911063175567328489 | dev | flaky_500 | 703.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 18 minutes
- 2025-12-11 PASS 21 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 25 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 21 minutes
- 2025-12-16 PASS 21 minutes
- 2025-12-17 PASS 21 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 26 minutes
- 2025-12-20 PASS 20 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 22 minutes
- 2025-12-24 PASS 26 minutes
- 2025-12-25 PASS 31 minutes
- 2025-12-26 PASS 20 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 20 minutes
- 2025-12-31 PASS 22 minutes
- 2026-01-01 PASS 18 minutes
- 2026-01-02 PASS 25 minutes
- 2026-01-03 PASS 19 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 19 minutes
- 2026-01-06 PASS 21 minutes
- 2026-01-07

### Error 2026-01-07T00:31:01+00:00
```
2026-01-07T00:31:01.7528986Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-07T00:31:16.8586262Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-07T00:43:00.2048834Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-07T00:43:00.2049808Z     resource_test.go:1109: Step 2/6 error: Error running apply: exit status 1
2026-01-07T00:43:00.2050239Z         
2026-01-07T00:43:00.2050483Z         Error: Error in create
2026-01-07T00:43:00.2050768Z         
2026-01-07T00:43:00.2051100Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:43:00.2052042Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:43:00.2052840Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:43:00.2053148Z         
2026-01-07T00:43:00.2053568Z         cluster=test-acc-tf-c-7911063175567328489 didn't reach desired state: IDLE,
2026-01-07T00:43:00.2053945Z         error:
2026-01-07T00:43:00.2054609Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da942d59b8466ea72ae92/clusters/test-acc-tf-c-7911063175567328489
2026-01-07T00:43:00.2055354Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:43:00.2055884Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:43:00.2056273Z         BadRequestDetail: 
2026-01-07T00:43:00.2562406Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (703.41s)
```

- 2026-01-08 PASS 22 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 21 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 18 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 21 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
