# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2025-09-19 to 2025-10-02 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026070000) |  | dev | timeout | 10807.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 39 minutes
- 2025-09-20 PASS 56 minutes
- 2025-09-21 PASS 40 minutes
- 2025-09-22 PASS 40 minutes
- 2025-09-23 PASS 39 minutes
- 2025-09-24 PASS 40 minutes
- 2025-09-25 PASS 42 minutes
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 32 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29 PASS 25 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 24 minutes
- 2025-10-01
  - PASS 30 minutes
  - PASS 45 minutes
  - PASS 47 minutes
  - PASS 30 minutes
  - PASS 26 minutes
  - PASS 23 minutes
  - PASS 52 minutes
  - PASS 21 minutes
- 2025-10-02

### Error 2025-10-02T00:26:07+00:00
```
2025-10-02T00:26:07.2106519Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T00:26:12.2052372Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T03:26:16.7786532Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T03:26:16.7787744Z     resource_migration_v1x_test.go:20: Step 1/4 error: Error running apply: exit status 1
2025-10-02T03:26:16.7788325Z         
2025-10-02T03:26:16.7789565Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-02T03:26:16.7790284Z         
2025-10-02T03:26:16.7790591Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:26:16.7791178Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:26:16.7791752Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:26:16.7792046Z         
2025-10-02T03:26:17.0306977Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10807.21s)
```
