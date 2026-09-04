# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-01 00:49](#error-2026-09-01t0049550000) |  | dev | timeout | 10802.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 24 minutes
- 2026-08-07 PASS 25 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS 49 minutes
- 2026-08-29 PASS an hour
- 2026-08-30: MISSING
- 2026-08-31 PASS an hour
- 2026-09-01

### Error 2026-09-01T00:49:55+00:00
```
2026-09-01T00:49:55.1623275Z === RUN   TestAccCluster_basicGCP
2026-09-01T00:49:59.2435649Z === CONT  TestAccCluster_basicGCP
2026-09-01T03:50:01.6295407Z === NAME  TestAccCluster_basicGCP
2026-09-01T03:50:01.6295875Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2026-09-01T03:50:01.6296312Z         
2026-09-01T03:50:01.6296936Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 3h0m0s)
2026-09-01T03:50:01.6297410Z         
2026-09-01T03:50:01.6297784Z           with mongodbatlas_cluster.basic_gcp,
2026-09-01T03:50:01.6298566Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-09-01T03:50:01.6299091Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-09-01T03:50:01.6299369Z         
2026-09-01T03:50:01.6707477Z --- FAIL: TestAccCluster_basicGCP (10802.43s)
```

- 2026-09-02 PASS 2 hours
- 2026-09-03
  - PASS 28 minutes
  - PASS 2 hours
- 2026-09-04 PASS 2 hours

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 24 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
