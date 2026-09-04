# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 54 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 48 minutes
- 2026-08-11: MISSING
- 2026-08-12 PASS 50 minutes
- 2026-08-13: MISSING
- 2026-08-14 PASS an hour
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 52 minutes
- 2026-08-18: MISSING
- 2026-08-19 PASS 47 minutes
- 2026-08-20: MISSING
- 2026-08-21 PASS 50 minutes
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 45 minutes
- 2026-08-25: MISSING
- 2026-08-26 PASS 48 minutes
- 2026-08-27: MISSING
- 2026-08-28 PASS an hour
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 55 minutes
- 2026-09-01: MISSING
- 2026-09-02 PASS an hour
- 2026-09-03: MISSING
- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-30 00:45](#error-2026-08-30t0045570000) |  | qa | timeout | 2644.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 50 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 49 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 46 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 44 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 49 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30

### Error 2026-08-30T00:45:57+00:00
```
2026-08-30T00:45:57.0671961Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2026-08-30T00:45:57.0693678Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2026-08-30T00:46:22.0787807Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-08-30T00:46:22.0791382Z     pre_check.go:46: Time before creating cluster: 2026-08-30T00:46:22.078420865Z, ProjectID: 6a937d42f71a0dd243527621, Cluster name: test-acc-tf-c-1944014111566906803
2026-08-30T01:30:01.6799986Z   
2026-08-30T01:30:01.6800853Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-30T01:30:01.6801365Z         
2026-08-30T01:30:01.6802391Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6a937d42f71a0dd243527621), Cluster (test-acc-tf-c-1944014111566906803): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2026-08-30T01:30:01.6803190Z         
2026-08-30T01:30:01.6829993Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (2644.61s)
```

- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
