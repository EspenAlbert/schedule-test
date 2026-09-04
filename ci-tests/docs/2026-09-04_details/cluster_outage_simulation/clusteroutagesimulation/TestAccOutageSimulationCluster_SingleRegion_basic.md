# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 10 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 03:08](#error-2026-08-28t0308410000) |  | dev | timeout | 2463.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 46 minutes
- 2026-08-07 PASS 46 minutes
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
- 2026-08-28

### Error 2026-08-28T03:08:41+00:00
```
2026-08-28T03:08:41.8679860Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:08:41.8698766Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:09:06.8823117Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:09:06.8825699Z     pre_check.go:46: Time before creating cluster: 2026-08-28T03:09:06.881991202Z, ProjectID: 6a90fbb663fde9550ed1d312, Cluster name: test-acc-tf-c-6998335229660266198
2026-08-28T03:47:37.5112330Z   
2026-08-28T03:49:45.4022052Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:49:45.4022858Z     resource_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-28T03:49:45.4023415Z         
2026-08-28T03:49:45.4024795Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6a90fbb663fde9550ed1d312), Cluster (test-acc-tf-c-6998335229660266198): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2026-08-28T03:49:45.4025786Z         
2026-08-28T03:49:45.4026153Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (2463.53s)
```

- 2026-08-29 PASS 45 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 47 minutes
- 2026-09-01 PASS 48 minutes
- 2026-09-02 PASS an hour
- 2026-09-03 PASS 47 minutes
- 2026-09-04 PASS 56 minutes

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
- 2026-08-30 PASS 45 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
