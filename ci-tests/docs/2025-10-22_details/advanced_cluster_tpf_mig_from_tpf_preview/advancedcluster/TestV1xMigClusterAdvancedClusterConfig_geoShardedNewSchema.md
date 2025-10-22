# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026050000) |  | dev | timeout | 10806.03s
[2025-10-07 00:27](#error-2025-10-07t0027410000) |  | dev | timeout | 10808.02s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 39 minutes
- 2025-09-24 PASS 42 minutes
- 2025-09-25 PASS 40 minutes
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 33 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29 PASS 19 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 24 minutes
- 2025-10-01
  - PASS an hour
  - PASS 19 minutes
  - PASS 33 minutes
  - PASS 44 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 24 minutes
  - PASS 21 minutes
- 2025-10-02

### Error 2025-10-02T00:26:05+00:00
```
2025-10-02T00:26:05.8814750Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T00:26:09.5720278Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T03:26:13.7062823Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2025-10-02T03:26:13.7063670Z     resource_migration_v1x_test.go:20: Step 1/4 error: Error running apply: exit status 1
2025-10-02T03:26:13.7064100Z         
2025-10-02T03:26:13.7064368Z         Error: Error in create
2025-10-02T03:26:13.7064626Z         
2025-10-02T03:26:13.7066871Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:26:13.7067554Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:26:13.7068156Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:26:13.7068493Z         
2025-10-02T03:26:13.7068960Z         cluster=test-acc-tf-c-358464567825752915 didn't reach desired state: IDLE,
2025-10-02T03:26:13.7069573Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-02T03:26:13.7070004Z         'CREATING', timeout: 3h0m0s)
2025-10-02T03:26:13.9180327Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10806.34s)
```

- 2025-10-03 PASS 25 minutes
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