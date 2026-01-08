# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-110219843272952156 | dev | flaky_500 | 186.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 23 minutes
- 2025-12-11 PASS 28 minutes
- 2025-12-12 PASS 29 minutes
- 2025-12-13 PASS 25 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 24 minutes
- 2025-12-16 PASS 24 minutes
- 2025-12-17 PASS 30 minutes
- 2025-12-18 PASS 24 minutes
- 2025-12-19 PASS 29 minutes
- 2025-12-20 PASS 24 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 28 minutes
- 2025-12-23 PASS 23 minutes
- 2025-12-24 PASS 27 minutes
- 2025-12-25 PASS 35 minutes
- 2025-12-26 PASS 25 minutes
- 2025-12-27 PASS 22 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 21 minutes
- 2025-12-31 PASS 28 minutes
- 2026-01-01 PASS 21 minutes
- 2026-01-02 PASS 26 minutes
- 2026-01-03 PASS 22 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 29 minutes
- 2026-01-06 PASS 22 minutes
- 2026-01-07

### Error 2026-01-07T00:30:48+00:00
```
2026-01-07T00:30:48.0732866Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-01-07T00:31:16.8345932Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-01-07T00:34:23.6765250Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-01-07T00:34:23.6766060Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:34:23.6766670Z         
2026-01-07T00:34:23.6768927Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-110219843272952156 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:34:23.6770594Z         
2026-01-07T00:34:23.6770889Z           with mongodbatlas_cluster.old,
2026-01-07T00:34:23.6771430Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-01-07T00:34:23.6771934Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-01-07T00:34:23.6772216Z         
2026-01-07T00:34:23.7263744Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (186.89s)
```

- 2026-01-08 PASS 22 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 25 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 21 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 22 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 22 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 22 minutes
