# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 20 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-21 00:21](#error-2026-08-21t0021540000) |  | dev | timeout | 10815.08s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 27 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 23 minutes
- 2026-08-11: MISSING
- 2026-08-12 PASS 23 minutes
- 2026-08-13: MISSING
- 2026-08-14 PASS 36 minutes
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 54 minutes
- 2026-08-18: MISSING
- 2026-08-19 PASS 26 minutes
- 2026-08-20: MISSING
- 2026-08-21

### Error 2026-08-21T00:21:54+00:00
```
2026-08-21T00:21:54.2574600Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-08-21T00:22:00.7084213Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-08-21T03:22:12.7054459Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-08-21T03:22:12.7055338Z     resource_migration_v1x_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-08-21T03:22:12.7055817Z         
2026-08-21T03:22:12.7056617Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-08-21T03:22:12.7057227Z         
2026-08-21T03:22:12.7057603Z           with mongodbatlas_advanced_cluster.test,
2026-08-21T03:22:12.7058329Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-21T03:22:12.7058990Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-21T03:22:12.7059347Z         
2026-08-21T03:22:12.9138340Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10815.76s)
```

- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 28 minutes
- 2026-08-25: MISSING
- 2026-08-26 PASS 3 hours
- 2026-08-27: MISSING
- 2026-08-28 PASS 3 hours
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 29 minutes
- 2026-09-01: MISSING
- 2026-09-02 PASS 36 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 47 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 23 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 22 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 22 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 21 minutes
- 2026-08-24: MISSING
- 2026-08-25 PASS 22 minutes
- 2026-08-26: MISSING
- 2026-08-27 PASS 29 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS an hour
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
