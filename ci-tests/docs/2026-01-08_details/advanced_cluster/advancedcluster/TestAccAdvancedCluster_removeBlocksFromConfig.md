# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031010000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da942d59b8466ea72ae92/clusters/test-acc-tf-c-4843687127214834171 | dev | flaky_500 | 37.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 54 minutes
  - PASS 53 minutes
- 2025-12-11 PASS 58 minutes
- 2025-12-12 PASS 52 minutes
- 2025-12-13 PASS 52 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 50 minutes
- 2025-12-16 PASS 51 minutes
- 2025-12-17 PASS 53 minutes
- 2025-12-18 PASS 49 minutes
- 2025-12-19 PASS an hour
- 2025-12-20 PASS 57 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 56 minutes
- 2025-12-23 PASS 57 minutes
- 2025-12-24 PASS 55 minutes
- 2025-12-25 PASS 59 minutes
- 2025-12-26 PASS 57 minutes
- 2025-12-27 PASS 54 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 52 minutes
- 2025-12-31 PASS 56 minutes
- 2026-01-01 PASS 50 minutes
- 2026-01-02 PASS 55 minutes
- 2026-01-03 PASS 50 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 54 minutes
- 2026-01-06 PASS 56 minutes
- 2026-01-07

### Error 2026-01-07T00:31:01+00:00
```
2026-01-07T00:31:01.7527141Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-01-07T00:31:16.8611400Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-01-07T00:31:54.1642254Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-01-07T00:31:54.1643089Z     resource_test.go:1075: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:31:54.1643454Z         
2026-01-07T00:31:54.1643830Z         Error: Error in create
2026-01-07T00:31:54.1644082Z         
2026-01-07T00:31:54.1644554Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:54.1645180Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:54.1646073Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:54.1646523Z         
2026-01-07T00:31:54.1647160Z         cluster=test-acc-tf-c-4843687127214834171 didn't reach desired state: IDLE,
2026-01-07T00:31:54.1647680Z         error:
2026-01-07T00:31:54.1648957Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da942d59b8466ea72ae92/clusters/test-acc-tf-c-4843687127214834171
2026-01-07T00:31:54.1650114Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:54.1650784Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:54.1651180Z         BadRequestDetail: 
2026-01-07T00:31:54.2363141Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (37.39s)
```

- 2026-01-08 PASS 54 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 48 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 47 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 44 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 49 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 48 minutes
