# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2025-09-19 to 2025-10-02 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026090000) |  | dev | timeout | 10807.04s

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
- 2025-09-20 PASS 39 minutes
- 2025-09-21 PASS 36 minutes
- 2025-09-22 PASS 40 minutes
- 2025-09-23 PASS 40 minutes
- 2025-09-24 PASS 37 minutes
- 2025-09-25 PASS 41 minutes
- 2025-09-26 PASS 53 minutes
- 2025-09-27 PASS 34 minutes
- 2025-09-28 PASS 25 minutes
- 2025-09-29 PASS 27 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 27 minutes
  - PASS 22 minutes
  - PASS an hour
  - PASS 43 minutes
  - PASS 52 minutes
  - PASS 30 minutes
  - PASS 34 minutes
  - PASS 24 minutes
- 2025-10-02

### Error 2025-10-02T00:26:09+00:00
```
2025-10-02T00:26:09.5982572Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-02T00:26:12.2053099Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-02T03:26:16.7682345Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2025-10-02T03:26:16.7682975Z     resource_migration_v1x_test.go:283: Step 1/4 error: Error running apply: exit status 1
2025-10-02T03:26:16.7683365Z         
2025-10-02T03:26:16.7684008Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-02T03:26:16.7684497Z         
2025-10-02T03:26:16.7684820Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:26:16.7685397Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:26:16.7685934Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:26:16.7686226Z         
2025-10-02T03:26:16.7785423Z    test_terraform_path=/home/runner/work/_temp/808e531c-e8e2-4f52-a4c5-554108c78fd0/terraform test_working_directory=/tmp/plugintest1374974108 test_step_number=1
2025-10-02T03:26:17.0214392Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10807.42s)
```
