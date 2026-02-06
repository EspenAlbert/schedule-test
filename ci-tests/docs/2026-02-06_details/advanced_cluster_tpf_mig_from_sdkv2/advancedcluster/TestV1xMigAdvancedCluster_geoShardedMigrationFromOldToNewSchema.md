# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038440000) |  | dev | timeout | 10825.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 30 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 28 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 26 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 35 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 26 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 31 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 29 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 29 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 34 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:44+00:00
```
2026-02-02T00:38:44.3982212Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-02T00:38:46.6826061Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-02T03:39:09.2054599Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-02T03:39:09.2055324Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:39:09.2055793Z         
2026-02-02T03:39:09.2056796Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:09.2057426Z         
2026-02-02T03:39:09.2057769Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:39:09.2058465Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:39:09.2059112Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:39:09.2059693Z         
2026-02-02T03:39:09.4135108Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10825.01s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 45 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 47 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 28 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 25 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 22 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 28 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 27 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 24 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
