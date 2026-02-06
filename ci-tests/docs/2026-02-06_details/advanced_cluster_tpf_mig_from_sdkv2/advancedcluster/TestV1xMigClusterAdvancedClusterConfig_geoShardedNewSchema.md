# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038410000) |  | dev | timeout | 10820.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 32 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 30 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 30 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 35 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 26 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 30 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 29 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 29 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 38 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:41+00:00
```
2026-02-02T00:38:41.7020539Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-02-02T00:38:46.6824088Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-02-02T03:39:04.2512118Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-02-02T03:39:04.2512858Z     resource_migration_v1x_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:39:04.2513337Z         
2026-02-02T03:39:04.2514161Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:04.2514805Z         
2026-02-02T03:39:04.2515159Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:39:04.2515889Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:39:04.2517220Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:39:04.2517603Z         
2026-02-02T03:39:04.4601909Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10820.47s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 49 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 52 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 29 minutes
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
- 2026-01-22 PASS 25 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 28 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 29 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
