# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038310000) |  | dev | timeout | 10809.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 44 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 42 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 44 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 44 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 43 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 42 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 42 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 41 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 44 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 51 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:31+00:00
```
2026-02-02T00:38:31.4116286Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2026-02-02T00:38:31.4117529Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-3205924269684487152
2026-02-02T00:38:33.5694166Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2026-02-02T00:38:38.5737696Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2026-02-02T00:38:38.5740983Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:38.57348429Z, ProjectID: 697ff207197cc66080b02fe5, Cluster name: test-acc-tf-c-1279971466240096041
2026-02-02T03:38:40.8544985Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2026-02-02T03:38:40.8545755Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:38:40.8546152Z         
2026-02-02T03:38:40.8546397Z         Error: Error in create
2026-02-02T03:38:40.8546640Z         
2026-02-02T03:38:40.8546979Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:38:40.8547635Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:38:40.8548266Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:38:40.8548584Z         
2026-02-02T03:38:40.8549127Z         cluster=test-acc-tf-c-1279971466240096041 didn't reach desired state: IDLE,
2026-02-02T03:38:40.8549572Z         error: context deadline exceeded
2026-02-02T03:38:41.0269512Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (10809.61s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 46 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 47 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 41 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 42 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 40 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 41 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 41 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 43 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 42 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
