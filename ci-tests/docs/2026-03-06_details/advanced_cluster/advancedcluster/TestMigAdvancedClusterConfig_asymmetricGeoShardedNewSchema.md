# advanced_cluster/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 00:41](#error-2026-02-13t0041200000) |  | dev | timeout | 10807.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 23 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 21 minutes
- 2026-02-12: MISSING
- 2026-02-13

### Error 2026-02-13T00:41:20+00:00
```
2026-02-13T00:41:20.9239339Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-02-13T00:42:51.2772541Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-02-13T03:42:58.5793493Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-02-13T03:42:58.5794601Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2026-02-13T03:42:58.5795365Z         
2026-02-13T03:42:58.5795826Z         Error: Error in create
2026-02-13T03:42:58.5796290Z         
2026-02-13T03:42:58.5796850Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:42:58.5798271Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:42:58.5799374Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:42:58.5799923Z         
2026-02-13T03:42:58.5800718Z         cluster=test-acc-tf-c-4444813611722452175 didn't reach desired state: IDLE,
2026-02-13T03:42:58.5801550Z         error: context deadline exceeded
2026-02-13T03:42:58.6092842Z   
2026-02-13T03:42:58.7479475Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (10807.47s)
```

- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 23 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 20 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 23 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 20 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 19 minutes
  - PASS 21 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 19 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 22 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 24 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 24 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 26 minutes
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
