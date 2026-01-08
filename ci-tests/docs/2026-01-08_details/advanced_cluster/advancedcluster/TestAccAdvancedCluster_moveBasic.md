# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveBasic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-4982027661825747820 | dev | flaky_500 | 187.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 22 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 19 minutes
- 2025-12-12 PASS 18 minutes
- 2025-12-13 PASS 19 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 20 minutes
- 2025-12-16 PASS 16 minutes
- 2025-12-17 PASS 17 minutes
- 2025-12-18 PASS 17 minutes
- 2025-12-19 PASS 22 minutes
- 2025-12-20 PASS 16 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 20 minutes
- 2025-12-23 PASS 18 minutes
- 2025-12-24 PASS 22 minutes
- 2025-12-25 PASS 27 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 17 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 minutes
- 2025-12-31 PASS 19 minutes
- 2026-01-01 PASS 15 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 16 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 minutes
- 2026-01-06 PASS 19 minutes
- 2026-01-07

### Error 2026-01-07T00:30:48+00:00
```
2026-01-07T00:30:48.0731739Z === RUN   TestAccAdvancedCluster_moveBasic
2026-01-07T00:31:16.8399153Z === CONT  TestAccAdvancedCluster_moveBasic
2026-01-07T00:34:23.8739569Z === NAME  TestAccAdvancedCluster_moveBasic
2026-01-07T00:34:23.8740207Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:34:23.8740637Z         
2026-01-07T00:34:23.8742357Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-4982027661825747820 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:34:23.8743671Z         
2026-01-07T00:34:23.8743963Z           with mongodbatlas_cluster.old,
2026-01-07T00:34:23.8744584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-01-07T00:34:23.8745262Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-01-07T00:34:23.8745547Z         
2026-01-07T00:34:23.9242301Z --- FAIL: TestAccAdvancedCluster_moveBasic (187.09s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
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
- 2025-12-21 PASS 12 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 14 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
