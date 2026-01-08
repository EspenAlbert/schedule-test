# autogen_slow/clusterapi/TestAccClusterAPI_moveBasic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:34](#error-2026-01-07t0034000000) |  | dev | 94.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 24 minutes
  - PASS 18 minutes
- 2025-12-11 PASS 25 minutes
- 2025-12-12 PASS 26 minutes
- 2025-12-13 PASS 20 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 minutes
- 2025-12-16 PASS 19 minutes
- 2025-12-17 PASS 19 minutes
- 2025-12-18 PASS 20 minutes
- 2025-12-19 PASS 23 minutes
- 2025-12-20 PASS 23 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 24 minutes
- 2025-12-23 PASS 19 minutes
- 2025-12-24 PASS 21 minutes
- 2025-12-25 PASS 31 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 20 minutes
- 2025-12-31 PASS 22 minutes
- 2026-01-01 PASS 18 minutes
- 2026-01-02 PASS 20 minutes
- 2026-01-03 PASS 18 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 22 minutes
- 2026-01-06 PASS 19 minutes
- 2026-01-07

### Error 2026-01-07T00:34:00+00:00
```
2026-01-07T00:34:00.5202367Z === RUN   TestAccClusterAPI_moveBasic
2026-01-07T00:34:00.5203590Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-9070693278085352790
2026-01-07T00:34:00.5207740Z === CONT  TestAccClusterAPI_moveBasic
2026-01-07T00:34:00.5245064Z === NAME  TestAccClusterAPI_moveBasic
2026-01-07T00:34:00.5245516Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:34:00.5245857Z         
2026-01-07T00:34:00.5246163Z         Error: Error waiting for changes in Create
2026-01-07T00:34:00.5246452Z         
2026-01-07T00:34:00.5246766Z           with mongodbatlas_cluster_old_api.old,
2026-01-07T00:34:00.5247382Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-01-07T00:34:00.5247971Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-01-07T00:34:00.5248275Z         
2026-01-07T00:34:00.5248697Z         unexpected state 'DELETED', wanted target 'IDLE'. last error: %!s(<nil>)
2026-01-07T00:34:00.5249107Z --- FAIL: TestAccClusterAPI_moveBasic (94.78s)
```

- 2026-01-08 PASS 18 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 17 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 17 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 20 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 18 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 17 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
