# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 19) FAIL(x 4)
Success rate: 82.61%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 03:42](#error-2026-02-13t0342270000) |  | dev | timeout | 10814.03s
[2026-03-02 01:26](#error-2026-03-02t0126450000) | VERSION_GONE /api/atlas/v2/groups/69a4dc1bd073a224c6f7ebc5/clusters | dev |  | 14.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 51 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 46 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 45 minutes
- 2026-02-12: MISSING
- 2026-02-13

### Error 2026-02-13T03:42:27+00:00
```
2026-02-13T03:42:27.2944410Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-13T03:42:27.2948239Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-13T03:42:27.2973609Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-02-13T03:42:27.2974289Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-02-13T03:42:27.2974719Z         
2026-02-13T03:42:27.2974997Z         Error: Error in create (legacy)
2026-02-13T03:42:27.2975270Z         
2026-02-13T03:42:27.2975595Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:42:27.2976256Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:42:27.2976879Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:42:27.2977208Z         
2026-02-13T03:42:27.2977666Z         cluster=test-acc-tf-c-2541697168586329233 didn't reach desired state: IDLE,
2026-02-13T03:42:27.2978302Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-13T03:42:27.2978738Z         'CREATING', timeout: 3h0m0s)
2026-02-13T03:42:27.2979195Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (10814.31s)
```

- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 47 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 48 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 50 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 46 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 44 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 46 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL 14 seconds

### Error 2026-03-02T01:26:45+00:00
```
2026-03-02T01:26:45.5590194Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T01:26:45.5593243Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T01:26:45.5605798Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T01:26:45.5606624Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-03-02T01:26:45.5607059Z         
2026-03-02T01:26:45.5607329Z         Error: Error in create (legacy)
2026-03-02T01:26:45.5607593Z         
2026-03-02T01:26:45.5607919Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T01:26:45.5608576Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T01:26:45.5609186Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T01:26:45.5609505Z         
2026-03-02T01:26:45.5609907Z         cluster name: test-acc-tf-c-979613796661721713, API error details:
2026-03-02T01:26:45.5610584Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc1bd073a224c6f7ebc5/clusters
2026-03-02T01:26:45.5611270Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T01:26:45.5611883Z         of api/atlas/v2/groups/69a4dc1bd073a224c6f7ebc5/clusters is no longer
2026-03-02T01:26:45.5612373Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T01:26:45.5612928Z         api/atlas/v2/groups/69a4dc1bd073a224c6f7ebc5/clusters], BadRequestDetail: 
2026-03-02T01:26:45.5613613Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (14.64s)
```

  - PASS 46 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 47 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 56 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-02 11:46](#error-2026-03-02t1146350000) | VERSION_GONE /api/atlas/v2/groups/69a573a630346acc7a7d0a26/clusters | qa | 14.06s
[2026-03-02 12:17](#error-2026-03-02t1217100000) | VERSION_GONE /api/atlas/v2/groups/69a57aef0b79a8d7dc99cfe6/clusters | qa | 23.08s

### Timeline
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 26 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 25 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 27 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 32 minutes
- 2026-03-02
  - FAIL 14 seconds

### Error 2026-03-02T11:46:35+00:00
```
2026-03-02T11:46:35.5182644Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:46:35.5188529Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:46:35.5207450Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T11:46:35.5208871Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-03-02T11:46:35.5209649Z         
2026-03-02T11:46:35.5210146Z         Error: Error in create (legacy)
2026-03-02T11:46:35.5210615Z         
2026-03-02T11:46:35.5211225Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T11:46:35.5212509Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T11:46:35.5213672Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T11:46:35.5214246Z         
2026-03-02T11:46:35.5215029Z         cluster name: test-acc-tf-c-4988769269064472793, API error details:
2026-03-02T11:46:35.5216315Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a573a630346acc7a7d0a26/clusters
2026-03-02T11:46:35.5217578Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T11:46:35.5219054Z         of api/atlas/v2/groups/69a573a630346acc7a7d0a26/clusters is no longer
2026-03-02T11:46:35.5219986Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T11:46:35.5221046Z         api/atlas/v2/groups/69a573a630346acc7a7d0a26/clusters], BadRequestDetail: 
2026-03-02T11:46:35.5222295Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (14.63s)
```

  - FAIL 23 seconds

### Error 2026-03-02T12:17:10+00:00
```
2026-03-02T12:17:10.4241846Z === RUN   TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T12:17:10.4246967Z === CONT  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T12:17:10.4276566Z === NAME  TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema
2026-03-02T12:17:10.4277299Z     resource_migration_v1x_test.go:276: Step 1/4 error: Error running apply: exit status 1
2026-03-02T12:17:10.4277710Z         
2026-03-02T12:17:10.4277983Z         Error: Error in create (legacy)
2026-03-02T12:17:10.4278244Z         
2026-03-02T12:17:10.4278564Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T12:17:10.4279228Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T12:17:10.4279838Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T12:17:10.4280155Z         
2026-03-02T12:17:10.4280777Z         cluster name: test-acc-tf-c-3469414513761802916, API error details:
2026-03-02T12:17:10.4281466Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a57aef0b79a8d7dc99cfe6/clusters
2026-03-02T12:17:10.4282141Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T12:17:10.4282914Z         of api/atlas/v2/groups/69a57aef0b79a8d7dc99cfe6/clusters is no longer
2026-03-02T12:17:10.4283406Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T12:17:10.4283963Z         api/atlas/v2/groups/69a57aef0b79a8d7dc99cfe6/clusters], BadRequestDetail: 
2026-03-02T12:17:10.4284527Z --- FAIL: TestV1xMigAdvancedCluster_geoShardedMigrationFromOldToNewSchema (23.80s)
```

- 2026-03-03 PASS 26 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
