# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-10-02 00:44](#error-2026-10-02t0044380000) |  | dev | timeout | 3258.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS an hour
- 2026-09-03: MISSING
- 2026-09-04 PASS an hour
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 46 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS an hour
- 2026-09-10: MISSING
- 2026-09-11 PASS an hour
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 51 minutes
- 2026-09-15: MISSING
- 2026-09-16 PASS 50 minutes
- 2026-09-17: MISSING
- 2026-09-18 PASS an hour
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 50 minutes
- 2026-09-22: MISSING
- 2026-09-23 PASS an hour
- 2026-09-24: MISSING
- 2026-09-25 PASS 52 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 47 minutes
- 2026-09-29: MISSING
- 2026-09-30 PASS 48 minutes
- 2026-10-01: MISSING
- 2026-10-02

### Error 2026-10-02T00:44:38+00:00
```
2026-10-02T00:44:38.0002193Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2026-10-02T00:44:38.0021607Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2026-10-02T00:45:03.0116026Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-10-02T00:45:03.0120011Z     pre_check.go:46: Time before creating cluster: 2026-10-02T00:45:03.0112767Z, ProjectID: 6abefe72ae91d8b90b2b73ae, Cluster name: test-acc-tf-c-7268223326822647556
2026-10-02T01:38:56.0799730Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-10-02T01:38:56.0800668Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2026-10-02T01:38:56.0801321Z         
2026-10-02T01:38:56.0802935Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6abefe72ae91d8b90b2b73ae), Cluster (test-acc-tf-c-7268223326822647556): timeout while waiting for state to become 'DELETED' (last state: 'RECOVERING', timeout: 25m0s)
2026-10-02T01:38:56.0804041Z         
2026-10-02T01:38:56.0852429Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (3258.08s)
```


## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 46 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 45 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 48 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 45 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 45 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 46 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
