# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027410000) |  | dev | timeout | 10808.02s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 49 minutes
- 2025-10-05 PASS 20 minutes
- 2025-10-06 PASS 21 minutes
- 2025-10-07

### Error 2025-10-07T00:27:41+00:00
```
2025-10-07T00:27:41.0853860Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-07T00:27:46.6752403Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-07T03:27:51.5082609Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-07T03:27:51.5083385Z     resource_migration_v1x_test.go:20: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:27:51.5083803Z         
2025-10-07T03:27:51.5084054Z         Error: Error in create
2025-10-07T03:27:51.5084295Z         
2025-10-07T03:27:51.5084614Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:27:51.5085254Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:27:51.5085830Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:27:51.5086130Z         
2025-10-07T03:27:51.5086887Z         cluster=test-acc-tf-c-4399959010339897477 didn't reach desired state: IDLE,
2025-10-07T03:27:51.5087980Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-07T03:27:51.5088721Z         'CREATING', timeout: 3h0m0s)
2025-10-07T03:27:51.7229933Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10808.18s)
```

- 2025-10-08 PASS 21 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 58 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 40 minutes
- 2025-10-14 PASS 32 minutes
- 2025-10-15 PASS 27 minutes
- 2025-10-16 PASS 28 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 20 minutes
- 2025-10-20 PASS 54 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 34 minutes
  - PASS 22 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS an hour
- 2025-10-25: MISSING
- 2025-10-26 PASS 21 minutes
- 2025-10-27 PASS an hour
- 2025-10-28: MISSING
- 2025-10-29 PASS 44 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 29 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 23 minutes
- 2025-11-03 PASS 26 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 39 minutes
  - PASS 26 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 28 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 24 minutes
- 2025-11-10 PASS 21 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 25 minutes