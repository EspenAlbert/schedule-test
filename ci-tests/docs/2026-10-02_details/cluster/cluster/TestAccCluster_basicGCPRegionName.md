# cluster/cluster/TestAccCluster_basicGCPRegionName Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041530000) |  | dev | timeout | 10804.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 40 minutes
- 2026-09-03
  - PASS 25 minutes
  - PASS 23 minutes
- 2026-09-04 PASS an hour
- 2026-09-05 PASS 34 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 25 minutes
  - PASS 31 minutes
- 2026-09-08 PASS 30 minutes
- 2026-09-09 PASS 40 minutes
- 2026-09-10 PASS 36 minutes
- 2026-09-11
  - FAIL 3 hours

### Error 2026-09-11T00:41:53+00:00
```
2026-09-11T00:41:53.7370769Z === RUN   TestAccCluster_basicGCPRegionName
2026-09-11T00:41:53.7423939Z === CONT  TestAccCluster_basicGCPRegionName
2026-09-11T03:41:57.7708763Z === NAME  TestAccCluster_basicGCPRegionName
2026-09-11T03:41:57.7709551Z     resource_cluster_test.go:1064: Step 1/1 error: Error running apply: exit status 1
2026-09-11T03:41:57.7710080Z         
2026-09-11T03:41:57.7711376Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 3h0m0s)
2026-09-11T03:41:57.7712552Z         
2026-09-11T03:41:57.7712902Z           with mongodbatlas_cluster.test,
2026-09-11T03:41:57.7713830Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-11T03:41:57.7714443Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-09-11T03:41:57.7714774Z         
2026-09-11T03:41:57.8280062Z --- FAIL: TestAccCluster_basicGCPRegionName (10804.09s)
```

  - PASS 26 minutes
- 2026-09-12 PASS 29 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 20 minutes
- 2026-09-15 PASS 20 minutes
- 2026-09-16 PASS 24 minutes
- 2026-09-17 PASS 21 minutes
- 2026-09-18 PASS 24 minutes
- 2026-09-19 PASS 20 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22 PASS 21 minutes
- 2026-09-23
  - PASS 21 minutes
  - PASS 24 minutes
- 2026-09-24 PASS 26 minutes
- 2026-09-25 PASS 24 minutes
- 2026-09-26 PASS 24 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29 PASS 21 minutes
- 2026-09-30 PASS 21 minutes
- 2026-10-01 PASS 22 minutes
- 2026-10-02 PASS 22 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 21 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 24 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 21 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 20 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 24 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
