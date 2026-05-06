# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 03:47](#error-2026-04-22t0347090000) |  | dev | timeout | 10809.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 27 minutes
  - PASS 19 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 45 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 32 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 25 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 28 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 21 minutes
- 2026-04-21: MISSING
- 2026-04-22

### Error 2026-04-22T03:47:09+00:00
```
2026-04-22T03:47:09.3403219Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-22T03:47:09.3406793Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-22T03:47:09.3418198Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-22T03:47:09.3419094Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-04-22T03:47:09.3419545Z         
2026-04-22T03:47:09.3419839Z         Error: Error in create (legacy)
2026-04-22T03:47:09.3420117Z         
2026-04-22T03:47:09.3420450Z           with mongodbatlas_advanced_cluster.test,
2026-04-22T03:47:09.3421107Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-22T03:47:09.3421710Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-04-22T03:47:09.3422029Z         
2026-04-22T03:47:09.3422496Z         cluster=test-acc-tf-c-2780268259359007975 didn't reach desired state: IDLE,
2026-04-22T03:47:09.3423117Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-04-22T03:47:09.3423556Z         'CREATING', timeout: 3h0m0s)
2026-04-22T03:47:09.3424010Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10809.88s)
```

- 2026-04-23: MISSING
- 2026-04-24 PASS 28 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 32 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 25 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 26 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 28 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 34 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 25 minutes
  - PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 25 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 24 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 32 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 27 minutes
- 2026-05-04 PASS 2 hours
- 2026-05-05: MISSING
- 2026-05-06 PASS 28 minutes
