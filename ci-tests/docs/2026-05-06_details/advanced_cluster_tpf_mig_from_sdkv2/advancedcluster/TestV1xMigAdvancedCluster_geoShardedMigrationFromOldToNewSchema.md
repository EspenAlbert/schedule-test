# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 21) FAIL(x 2)
Success rate: 91.30%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-20 00:49](#error-2026-04-20t0049220000) |  | dev |  | 1109.03s
[2026-04-22 00:46](#error-2026-04-22t0046210000) |  | dev | timeout | 10810.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 26 minutes
  - PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 43 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 29 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 28 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 28 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T00:49:22+00:00
```
2026-04-20T00:49:22.3351943Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-20T00:49:25.0886962Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-20T01:07:51.4656433Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-20T01:07:51.4657512Z     resource_migration_v1x_test.go:276: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-04-20T01:07:51.4658309Z         
2026-04-20T01:07:51.4658864Z         Error: error resolving container IDs
2026-04-20T01:07:51.4659382Z         
2026-04-20T01:07:51.4660029Z           with data.mongodbatlas_advanced_cluster.test,
2026-04-20T01:07:51.4661529Z           on terraform_plugin_test.tf line 93, in data "mongodbatlas_advanced_cluster" "test":
2026-04-20T01:07:51.4662679Z           93: 	data "mongodbatlas_advanced_cluster" "test" {
2026-04-20T01:07:51.4663261Z         
2026-04-20T01:07:51.4664046Z         cluster name = test-acc-tf-c-6964539913888018515, error details:
2026-04-20T01:07:51.4665603Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e57812d4c388c612b3ac68/containers
2026-04-20T01:07:51.4666901Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-04-20T01:07:51.4667682Z         BadRequestDetail: 
2026-04-20T01:07:51.6415058Z   
2026-04-20T01:07:51.6415702Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-04-20T01:07:51.6416314Z         Failed to marshal state to json: missing expected {
2026-04-20T01:07:51.6507161Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (1109.32s)
```

- 2026-04-21: MISSING
- 2026-04-22

### Error 2026-04-22T00:46:21+00:00
```
2026-04-22T00:46:21.5853767Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-22T00:46:24.0743206Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-22T03:46:32.3283244Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-04-22T03:46:32.3284103Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-04-22T03:46:32.3284556Z         
2026-04-22T03:46:32.3285312Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-04-22T03:46:32.3285882Z         
2026-04-22T03:46:32.3286223Z           with mongodbatlas_advanced_cluster.test,
2026-04-22T03:46:32.3286908Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-22T03:46:32.3287540Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-22T03:46:32.3287857Z         
2026-04-22T03:46:32.5258774Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10810.94s)
```

- 2026-04-23: MISSING
- 2026-04-24 PASS 29 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 25 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 28 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 25 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 26 minutes
  - PASS 21 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 28 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 24 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 29 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 28 minutes
- 2026-05-04 PASS 24 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 27 minutes
