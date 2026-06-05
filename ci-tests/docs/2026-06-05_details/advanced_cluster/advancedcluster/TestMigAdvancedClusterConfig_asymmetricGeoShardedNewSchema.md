# advanced_cluster/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057080000) |  | dev | timeout | 10807.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 22 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 27 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 25 minutes
- 2026-05-14: MISSING
- 2026-05-15

### Error 2026-05-15T00:57:08+00:00
```
2026-05-15T00:57:08.5762580Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-05-15T00:58:37.5059365Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-05-15T03:58:43.9885247Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-05-15T03:58:43.9885905Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2026-05-15T03:58:43.9886323Z         
2026-05-15T03:58:43.9886588Z         Error: Error in create
2026-05-15T03:58:43.9886845Z         
2026-05-15T03:58:43.9887191Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T03:58:43.9887876Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T03:58:43.9888675Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T03:58:43.9889101Z         
2026-05-15T03:58:43.9889579Z         cluster=test-acc-tf-c-4850797340231734220 didn't reach desired state: IDLE,
2026-05-15T03:58:43.9890061Z         error: context deadline exceeded
2026-05-15T03:58:44.1560093Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (10807.20s)
```

- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 36 minutes
- 2026-05-19: MISSING
- 2026-05-20 PASS 22 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS 45 minutes
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 33 minutes
- 2026-05-26: MISSING
- 2026-05-27 PASS 54 minutes
- 2026-05-28: MISSING
- 2026-05-29 PASS 20 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 38 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 31 minutes
- 2026-06-04: MISSING
- 2026-06-05 PASS 33 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 26 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 25 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 20 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
