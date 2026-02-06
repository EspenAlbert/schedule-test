# advanced_cluster/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038480000) |  | dev | timeout | 10806.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 27 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 26 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 23 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 26 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 25 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 24 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 20 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 38 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:48+00:00
```
2026-02-02T00:38:48.8797167Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-02-02T00:40:19.9787536Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-02-02T03:40:26.1765856Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-02-02T03:40:26.1767253Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.1768148Z         
2026-02-02T03:40:26.1768607Z         Error: Error in create
2026-02-02T03:40:26.1769040Z         
2026-02-02T03:40:26.1769624Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.1770897Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.1772965Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.1773602Z         
2026-02-02T03:40:26.1774417Z         cluster=test-acc-tf-c-5075266180790736652 didn't reach desired state: IDLE,
2026-02-02T03:40:26.1775285Z         error: context deadline exceeded
2026-02-02T03:40:26.3483663Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (10806.37s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 29 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 23 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 18 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 20 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 25 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
