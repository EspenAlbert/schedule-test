# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-4410315746646496980 | dev | flaky_500 | 141.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-12-11 PASS 34 minutes
- 2025-12-12 PASS 31 minutes
- 2025-12-13 PASS 28 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 25 minutes
- 2025-12-16 PASS 32 minutes
- 2025-12-17 PASS 29 minutes
- 2025-12-18 PASS 30 minutes
- 2025-12-19 PASS 32 minutes
- 2025-12-20 PASS 26 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 32 minutes
- 2025-12-23 PASS 29 minutes
- 2025-12-24 PASS 31 minutes
- 2025-12-25 PASS 42 minutes
- 2025-12-26 PASS 27 minutes
- 2025-12-27 PASS 28 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 27 minutes
- 2025-12-31 PASS 31 minutes
- 2026-01-01 PASS 28 minutes
- 2026-01-02 PASS 30 minutes
- 2026-01-03 PASS 26 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 31 minutes
- 2026-01-06 PASS 28 minutes
- 2026-01-07

### Error 2026-01-07T00:30:54+00:00
```
2026-01-07T00:30:54.0498655Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-07T00:31:16.8349062Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-07T00:31:36.8428034Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-07T00:31:36.8428924Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:36.84253741Z, ProjectID: 695da93ad59b8466ea729f4f, Cluster name: test-acc-tf-c-4410315746646496980
2026-01-07T00:33:38.7026851Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2026-01-07T00:33:38.7027474Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2026-01-07T00:33:38.7027944Z         
2026-01-07T00:33:38.7028199Z         Error: Error in create
2026-01-07T00:33:38.7028529Z         
2026-01-07T00:33:38.7028839Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:33:38.7029438Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:33:38.7030003Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:33:38.7030296Z         
2026-01-07T00:33:38.7030719Z         cluster=test-acc-tf-c-4410315746646496980 didn't reach desired state: IDLE,
2026-01-07T00:33:38.7031091Z         error:
2026-01-07T00:33:38.7031759Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-4410315746646496980
2026-01-07T00:33:38.7032893Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:38.7033428Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:38.7033806Z         BadRequestDetail: 
2026-01-07T00:33:38.7559247Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (141.92s)
```

- 2026-01-08 PASS 26 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 29 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 24 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 25 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 26 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 28 minutes
