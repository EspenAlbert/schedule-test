# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters | dev | flaky_500 | 6.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-12-11 PASS 6 seconds
- 2025-12-12 PASS 6 seconds
- 2025-12-13 PASS 6 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 7 seconds
- 2025-12-16 PASS 5 seconds
- 2025-12-17 PASS 6 seconds
- 2025-12-18 PASS 6 seconds
- 2025-12-19 PASS 6 seconds
- 2025-12-20 PASS 6 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 6 seconds
- 2025-12-23 PASS 6 seconds
- 2025-12-24 PASS 6 seconds
- 2025-12-25 PASS 6 seconds
- 2025-12-26 PASS 6 seconds
- 2025-12-27 PASS 6 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 6 seconds
- 2025-12-31 PASS 7 seconds
- 2026-01-01 PASS 5 seconds
- 2026-01-02 PASS 7 seconds
- 2026-01-03 PASS 6 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 7 seconds
- 2026-01-06 PASS 6 seconds
- 2026-01-07

### Error 2026-01-07T00:31:16+00:00
```
2026-01-07T00:31:16.8340660Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-01-07T00:31:16.8364012Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-01-07T00:31:23.3385138Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-01-07T00:31:23.3388155Z     resource_test.go:2957: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-07T00:31:23.3389847Z         
2026-01-07T00:31:23.3392634Z         Error: error creating flex cluster: Cluster name test-acc-tf-2048339718247801552 (project_id=695da932af4f6cc389e80b8c).
2026-01-07T00:31:23.3394304Z         
2026-01-07T00:31:23.3395723Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:23.3397656Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:23.3401302Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:23.3401786Z         
2026-01-07T00:31:23.3406694Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters
2026-01-07T00:31:23.3408089Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:23.3409016Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:23.3409704Z         BadRequestDetail: 
2026-01-07T00:31:23.4618755Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (6.63s)
```

- 2026-01-08 PASS 6 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 7 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 7 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 7 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 7 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
