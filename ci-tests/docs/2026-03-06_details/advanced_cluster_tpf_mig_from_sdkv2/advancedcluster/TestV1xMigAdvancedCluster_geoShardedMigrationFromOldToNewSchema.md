# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 19) FAIL(x 4)
Success rate: 82.61%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 00:41](#error-2026-02-13t0041220000) |  | dev | timeout | 10821.00s
[2026-03-02 00:38](#error-2026-03-02t0038500000) | VERSION_GONE /api/atlas/v2/groups/69a4dc1ad073a224c6f7e67e/clusters | dev |  | 8.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 47 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 46 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 45 minutes
- 2026-02-12: MISSING
- 2026-02-13

### Error 2026-02-13T00:41:22+00:00
```
2026-02-13T00:41:22.3529125Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-13T00:41:25.3749214Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-13T03:41:43.1837493Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-13T03:41:43.1838242Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-02-13T03:41:43.1838701Z         
2026-02-13T03:41:43.1839481Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-13T03:41:43.1840076Z         
2026-02-13T03:41:43.1840417Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:41:43.1841102Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:41:43.1841744Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:41:43.1842085Z         
2026-02-13T03:41:43.3941209Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10821.04s)
```

- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 49 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 46 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 50 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 46 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 45 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 50 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL 8 seconds

### Error 2026-03-02T00:38:50+00:00
```
2026-03-02T00:38:50.5370621Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T00:38:52.2158935Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T00:38:59.0113438Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T00:38:59.0116313Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-03-02T00:38:59.0116789Z         
2026-03-02T00:38:59.0118960Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc1ad073a224c6f7e67e/clusters POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05 of api/atlas/v2/groups/69a4dc1ad073a224c6f7e67e/clusters is no longer available. Reason: Gone. Params: [2024-08-05 api/atlas/v2/groups/69a4dc1ad073a224c6f7e67e/clusters], BadRequestDetail: 
2026-03-02T00:38:59.0120753Z         
2026-03-02T00:38:59.0121085Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T00:38:59.0121773Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T00:38:59.0122415Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T00:38:59.0122736Z         
2026-03-02T00:38:59.2225093Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (8.69s)
```

  - PASS 48 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 46 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 50 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-02 11:25](#error-2026-03-02t1125240000) | VERSION_GONE /api/atlas/v2/groups/69a573a430346acc7a7d05d4/clusters | qa | 19.04s
[2026-03-02 11:56](#error-2026-03-02t1156300000) | VERSION_GONE /api/atlas/v2/groups/69a57aee30346acc7a7dff0a/clusters | qa | 28.03s

### Timeline
- 2026-02-04 PASS 24 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 28 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 31 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 26 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 32 minutes
- 2026-03-02
  - FAIL 19 seconds

### Error 2026-03-02T11:25:24+00:00
```
2026-03-02T11:25:24.4161662Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:25:26.9893203Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:25:43.6309900Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:25:43.6311322Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-03-02T11:25:43.6312111Z         
2026-03-02T11:25:43.6316139Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a573a430346acc7a7d05d4/clusters POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05 of api/atlas/v2/groups/69a573a430346acc7a7d05d4/clusters is no longer available. Reason: Gone. Params: [2024-08-05 api/atlas/v2/groups/69a573a430346acc7a7d05d4/clusters], BadRequestDetail: 
2026-03-02T11:25:43.6319428Z         
2026-03-02T11:25:43.6320041Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T11:25:43.6321348Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T11:25:43.6322567Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T11:25:43.6323129Z         
2026-03-02T11:25:43.8370216Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (19.42s)
```

  - FAIL 28 seconds

### Error 2026-03-02T11:56:30+00:00
```
2026-03-02T11:56:30.7680283Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:56:32.3571874Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:56:58.8961638Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:56:58.8962346Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-03-02T11:56:58.8962793Z         
2026-03-02T11:56:58.8964896Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a57aee30346acc7a7dff0a/clusters POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05 of api/atlas/v2/groups/69a57aee30346acc7a7dff0a/clusters is no longer available. Reason: Gone. Params: [2024-08-05 api/atlas/v2/groups/69a57aee30346acc7a7dff0a/clusters], BadRequestDetail: 
2026-03-02T11:56:58.8966886Z         
2026-03-02T11:56:58.8967225Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T11:56:58.8967911Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T11:56:58.8968550Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T11:56:58.8968875Z         
2026-03-02T11:56:59.1117592Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (28.34s)
```

- 2026-03-03 PASS 26 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
