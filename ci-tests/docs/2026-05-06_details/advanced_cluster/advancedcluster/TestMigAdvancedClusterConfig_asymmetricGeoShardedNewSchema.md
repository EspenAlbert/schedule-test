# advanced_cluster/advancedcluster/TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema Test Details
# Found 20 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 00:46](#error-2026-04-22t0046130000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e81a53a8d803e1612fb3f0/clusters | dev | out_of_capacity | 6.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 26 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 24 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 19 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 20 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22

### Error 2026-04-22T00:46:13+00:00
```
2026-04-22T00:46:13.8501052Z === RUN   TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-04-22T01:18:57.7812356Z === CONT  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-04-22T01:19:03.1318967Z === NAME  TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2026-04-22T01:19:03.1320167Z     resource_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2026-04-22T01:19:03.1321002Z         
2026-04-22T01:19:03.1321555Z         Error: Error in create
2026-04-22T01:19:03.1322096Z         
2026-04-22T01:19:03.1322782Z           with mongodbatlas_advanced_cluster.test,
2026-04-22T01:19:03.1324038Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-22T01:19:03.1325223Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-22T01:19:03.1325897Z         
2026-04-22T01:19:03.1326734Z         cluster name: test-acc-tf-c-3021852236925544315, API error details:
2026-04-22T01:19:03.1328207Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a53a8d803e1612fb3f0/clusters
2026-04-22T01:19:03.1329533Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-22T01:19:03.1330770Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-22T01:19:03.1331767Z         Conflict. Params: [], BadRequestDetail: 
2026-04-22T01:19:03.4620127Z --- FAIL: TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema (6.29s)
```

- 2026-04-23: MISSING
- 2026-04-24 PASS 23 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 24 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 23 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 22 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 22 minutes
  - PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 20 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 21 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 24 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 minutes
