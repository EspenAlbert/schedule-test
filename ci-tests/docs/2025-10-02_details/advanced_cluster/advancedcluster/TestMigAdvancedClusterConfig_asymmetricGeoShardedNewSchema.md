# advanced_cluster/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 26 TestRuns in dev, qa from 2025-09-19 to 2025-10-02 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 00:26](#error-2025-10-02t0026100000) |  | dev | flaky_client | 3177.05s

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
- 2025-09-19 PASS 17 minutes
- 2025-09-20 PASS 17 minutes
- 2025-09-21 PASS 14 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 17 minutes
- 2025-09-24 PASS 17 minutes
- 2025-09-25 PASS 16 minutes
- 2025-09-26 PASS 39 minutes
- 2025-09-27 PASS 22 minutes
- 2025-09-28 PASS 19 minutes
- 2025-09-29
  - PASS 20 minutes
  - PASS 14 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-10-01
  - PASS an hour
  - PASS an hour
  - PASS 18 minutes
  - PASS 22 minutes
  - PASS 33 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-10-02

### Error 2025-10-02T00:26:10+00:00
```
2025-10-02T00:26:10.6141702Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-02T00:28:04.4449786Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-02T01:20:59.0508554Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-02T01:20:59.0509168Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-10-02T01:20:59.0509561Z         
2025-10-02T01:20:59.0509813Z         Error: Error in create
2025-10-02T01:20:59.0510049Z         
2025-10-02T01:20:59.0510368Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T01:20:59.0510998Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T01:20:59.0511580Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T01:20:59.0511882Z         
2025-10-02T01:20:59.0512316Z         cluster=test-acc-tf-c-3326507526998278233 didn't reach desired state: IDLE,
2025-10-02T01:20:59.0513240Z         error: Get
2025-10-02T01:20:59.0513986Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ddc6a2a496fb5b13e0bd37/clusters/test-acc-tf-c-3326507526998278233":
2025-10-02T01:20:59.0514696Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-02T01:20:59.2636138Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (3177.54s)
```
