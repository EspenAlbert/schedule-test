# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 20) FAIL(x 3)
Success rate: 86.96%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-02 01:26](#error-2026-03-02t0126450000) | VERSION_GONE /api/atlas/v2/groups/69a4dc18d073a224c6f7d0c3/clusters | dev | 21.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 39 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 33 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 30 minutes
- 2026-02-12: MISSING
- 2026-02-13 PASS 31 minutes
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 34 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 31 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 31 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 31 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 32 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 31 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL 21 seconds

### Error 2026-03-02T01:26:45+00:00
```
2026-03-02T01:26:45.5587318Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T01:26:45.5594498Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T01:26:45.5622233Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T01:26:45.5622959Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-03-02T01:26:45.5623372Z         
2026-03-02T01:26:45.5623638Z         Error: Error in create (legacy)
2026-03-02T01:26:45.5623891Z         
2026-03-02T01:26:45.5624204Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T01:26:45.5624857Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T01:26:45.5625464Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T01:26:45.5625775Z         
2026-03-02T01:26:45.5626174Z         cluster name: test-acc-tf-c-4957222695195956909, API error details:
2026-03-02T01:26:45.5627156Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc18d073a224c6f7d0c3/clusters
2026-03-02T01:26:45.5627873Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T01:26:45.5628631Z         of api/atlas/v2/groups/69a4dc18d073a224c6f7d0c3/clusters is no longer
2026-03-02T01:26:45.5629127Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T01:26:45.5629674Z         api/atlas/v2/groups/69a4dc18d073a224c6f7d0c3/clusters], BadRequestDetail: 
2026-03-02T01:26:45.5630232Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (21.95s)
```

  - PASS 28 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 32 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 44 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-02 11:46](#error-2026-03-02t1146350000) | VERSION_GONE /api/atlas/v2/groups/69a573a430346acc7a7d062a/clusters | qa | 22.01s
[2026-03-02 12:17](#error-2026-03-02t1217100000) | VERSION_GONE /api/atlas/v2/groups/69a57aec0b79a8d7dc99cea0/clusters | qa | 6.09s

### Timeline
- 2026-02-04 PASS 24 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 25 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 22 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 22 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 30 minutes
- 2026-03-02
  - FAIL 22 seconds

### Error 2026-03-02T11:46:35+00:00
```
2026-03-02T11:46:35.5178997Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:46:35.5190132Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:46:35.5238798Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:46:35.5240140Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-03-02T11:46:35.5240903Z         
2026-03-02T11:46:35.5241393Z         Error: Error in create (legacy)
2026-03-02T11:46:35.5241871Z         
2026-03-02T11:46:35.5242471Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T11:46:35.5243751Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T11:46:35.5244925Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T11:46:35.5245497Z         
2026-03-02T11:46:35.5246272Z         cluster name: test-acc-tf-c-915045503955774038, API error details:
2026-03-02T11:46:35.5247534Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a573a430346acc7a7d062a/clusters
2026-03-02T11:46:35.5249000Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T11:46:35.5250358Z         of api/atlas/v2/groups/69a573a430346acc7a7d062a/clusters is no longer
2026-03-02T11:46:35.5251287Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T11:46:35.5252340Z         api/atlas/v2/groups/69a573a430346acc7a7d062a/clusters], BadRequestDetail: 
2026-03-02T11:46:35.5253394Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (22.09s)
```

  - FAIL 6 seconds

### Error 2026-03-02T12:17:10+00:00
```
2026-03-02T12:17:10.4237440Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T12:17:10.4247655Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T12:17:10.4259532Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T12:17:10.4260494Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-03-02T12:17:10.4260996Z         
2026-03-02T12:17:10.4261276Z         Error: Error in create (legacy)
2026-03-02T12:17:10.4261549Z         
2026-03-02T12:17:10.4261883Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T12:17:10.4262559Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T12:17:10.4263180Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T12:17:10.4263518Z         
2026-03-02T12:17:10.4263929Z         cluster name: test-acc-tf-c-2499354511398122075, API error details:
2026-03-02T12:17:10.4264603Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a57aec0b79a8d7dc99cea0/clusters
2026-03-02T12:17:10.4265292Z         POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05
2026-03-02T12:17:10.4265913Z         of api/atlas/v2/groups/69a57aec0b79a8d7dc99cea0/clusters is no longer
2026-03-02T12:17:10.4266407Z         available. Reason: Gone. Params: [2024-08-05
2026-03-02T12:17:10.4266963Z         api/atlas/v2/groups/69a57aec0b79a8d7dc99cea0/clusters], BadRequestDetail: 
2026-03-02T12:17:10.4267667Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (6.95s)
```

- 2026-03-03 PASS 24 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
