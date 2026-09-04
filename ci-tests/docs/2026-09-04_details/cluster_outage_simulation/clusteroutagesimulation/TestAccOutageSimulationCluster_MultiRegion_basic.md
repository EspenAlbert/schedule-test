# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 00:32](#error-2026-08-13t0032240000) |  | dev | timeout | 2828.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 52 minutes
- 2026-08-07 PASS 55 minutes
- 2026-08-08 PASS 49 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 46 minutes
- 2026-08-11 PASS 46 minutes
- 2026-08-12 PASS 47 minutes
- 2026-08-13

### Error 2026-08-13T00:32:24+00:00
```
2026-08-13T00:32:24.9046410Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-08-13T00:32:24.9055015Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-08-13T00:32:34.9132228Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-08-13T00:32:34.9133673Z     pre_check.go:46: Time before creating cluster: 2026-08-13T00:32:34.912917582Z, ProjectID: 6a7d1097b3b1b577a7564929, Cluster name: test-acc-tf-c-5279638882230632614
2026-08-13T01:19:33.6172045Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-08-13T01:19:33.6173032Z     resource_test.go:64: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-13T01:19:33.6173614Z         
2026-08-13T01:19:33.6174848Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6a7d1097b3b1b577a7564929), Cluster (test-acc-tf-c-5279638882230632614): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2026-08-13T01:19:33.6175870Z         
2026-08-13T01:19:33.6176229Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (2828.71s)
```

- 2026-08-14 PASS an hour
- 2026-08-15 PASS 46 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 47 minutes
- 2026-08-18 PASS 49 minutes
- 2026-08-19 PASS 45 minutes
- 2026-08-20 PASS 49 minutes
- 2026-08-21 PASS 50 minutes
- 2026-08-22 PASS 47 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 48 minutes
- 2026-08-25 PASS 51 minutes
- 2026-08-26 PASS 48 minutes
- 2026-08-27 PASS an hour
- 2026-08-28 PASS an hour
- 2026-08-29 PASS 51 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS an hour
- 2026-09-01 PASS 53 minutes
- 2026-09-02 PASS an hour
- 2026-09-03 PASS 51 minutes
- 2026-09-04 PASS an hour

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 47 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 48 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 47 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 50 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 49 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 47 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
