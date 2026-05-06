# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 21 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-13 00:48](#error-2026-04-13t0048430000) |  | dev | timeout | 2507.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 43 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 57 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13

### Error 2026-04-13T00:48:43+00:00
```
2026-04-13T00:48:43.0653803Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2026-04-13T00:48:43.0682652Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2026-04-13T00:49:08.0857169Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-04-13T00:49:08.0858703Z     pre_check.go:46: Time before creating cluster: 2026-04-13T00:49:08.085400878Z, ProjectID: 69dc3d6935f1f181a4dc22f8, Cluster name: test-acc-tf-c-4186197272145093192
2026-04-13T01:30:30.3885833Z    test_name=TestMigOutageSimulationCluster_MultiRegion_basic test_terraform_path=/home/runner/work/_temp/bf194102-06d8-4c79-a0c0-431de902bfcd/terraform test_working_directory=/tmp/plugintest3920580122 test_step_number=2
2026-04-13T01:30:30.3900966Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-13T01:30:30.3901790Z         
2026-04-13T01:30:30.3903738Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (69dc3d6935f1f181a4dc22f8), Cluster (test-acc-tf-c-4186197272145093192): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2026-04-13T01:30:30.3905090Z         
2026-04-13T01:30:30.3928838Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (2507.33s)
```

- 2026-04-14: MISSING
- 2026-04-15 PASS 48 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 52 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 48 minutes
- 2026-04-21: MISSING
- 2026-04-22 PASS an hour
- 2026-04-23: MISSING
- 2026-04-24 PASS 47 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 44 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 48 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS an hour
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 47 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 54 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 46 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 49 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 47 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 45 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 46 minutes
- 2026-05-04 PASS 50 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 46 minutes
