# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 6 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 5) FAIL
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 03:08](#error-2026-08-28t0308380000) |  | dev | timeout | 2338.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
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

### Error 2026-08-28T03:08:38+00:00
```
2026-08-28T03:08:38.6576595Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:08:38.6580282Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-7476368934986766510
2026-08-28T03:08:41.8696335Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:08:51.8769056Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:08:51.8770663Z     pre_check.go:46: Time before creating cluster: 2026-08-28T03:08:51.876504444Z, ProjectID: 6a90fbb663fde9550ed1d312, Cluster name: test-acc-tf-c-8879677898650534913
2026-08-28T03:47:37.5112883Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2026-08-28T03:47:37.5116425Z     resource_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-28T03:47:37.5117567Z         
2026-08-28T03:47:37.5119779Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6a90fbb663fde9550ed1d312), Cluster (test-acc-tf-c-8879677898650534913): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2026-08-28T03:47:37.5121451Z         
2026-08-28T03:47:37.5157673Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (2338.86s)
```

- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 48 minutes
- 2026-09-01: MISSING
- 2026-09-02 PASS 50 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 57 minutes

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
- 2026-08-30 PASS 46 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
