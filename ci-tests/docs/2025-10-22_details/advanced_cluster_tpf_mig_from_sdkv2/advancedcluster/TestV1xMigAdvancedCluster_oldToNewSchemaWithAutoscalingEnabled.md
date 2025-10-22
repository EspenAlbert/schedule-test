# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:54](#error-2025-10-01t0454580000) |  | dev | flaky_500 | 1169.04s
[2025-10-06 00:28](#error-2025-10-06t0028210000) |  | dev | flaky_client | 1066.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 30 minutes
- 2025-09-25 PASS 29 minutes
- 2025-09-26 PASS 29 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29 PASS 24 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 18 minutes
  - FAIL 19 minutes

### Error 2025-10-01T04:54:58+00:00
```
2025-10-01T04:54:58.5849258Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-01T04:55:01.4967261Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-01T05:10:49.6780494Z    test_name=TestV1xMigAdvancedCluster_replicaSetAWSProvider
2025-10-01T05:10:55.9118499Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-01T05:10:55.9119427Z     resource_migration_v1x_test.go:127: Step 1/5 error: Error running apply: exit status 1
2025-10-01T05:10:55.9120143Z         
2025-10-01T05:10:55.9121126Z         Error: error reading  advanced cluster (test-acc-tf-c-7703789765603959126): undefined response type
2025-10-01T05:10:55.9121586Z         
2025-10-01T05:10:55.9121932Z           with data.mongodbatlas_advanced_cluster.test,
2025-10-01T05:10:55.9122786Z           on terraform_plugin_test.tf line 49, in data "mongodbatlas_advanced_cluster" "test":
2025-10-01T05:10:55.9123344Z           49: 	data "mongodbatlas_advanced_cluster" "test" {
2025-10-01T05:10:55.9123635Z         
2025-10-01T05:10:55.9124678Z         Error: error reading advanced cluster list for project(68dcb4205a2f9645002034a6): (503 Service Unavailable) failed to decode response body: undefined response type
2025-10-01T05:10:55.9125300Z         
2025-10-01T05:10:55.9125642Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-01T05:10:55.9126260Z           on terraform_plugin_test.tf line 55, in data "mongodbatlas_advanced_clusters" "test":
2025-10-01T05:10:55.9126815Z           55: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-01T05:10:55.9127426Z         
2025-10-01T05:14:30.9180325Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (1169.43s)
```

  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 25 minutes
- 2025-10-03 PASS 21 minutes
- 2025-10-04 PASS 24 minutes
- 2025-10-05 PASS 17 minutes
- 2025-10-06

### Error 2025-10-06T00:28:21+00:00
```
2025-10-06T00:28:21.3980869Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-06T00:28:24.5158822Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-06T00:41:55.5645463Z     resource_migration_v1x_test.go:127: Step 1/5 error: Check failed: error getting independent shard scaling mode: Get "https://cloud-dev.mongodb.comtest/utils/auth/groups/68e30d222a8cab75bf4204a8/clusters/test-acc-tf-c-8092217992741393783/independentShardScalingMode": dial tcp: lookup cloud-dev.mongodb.comtest on 127.0.0.53:53: no such host
2025-10-06T00:46:11.0438875Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (1066.53s)
```

- 2025-10-07 PASS 21 minutes
- 2025-10-08 PASS 21 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 25 minutes
- 2025-10-11 PASS 22 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 24 minutes
- 2025-10-14 PASS 28 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 31 minutes
- 2025-10-17 PASS 22 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 19 minutes
- 2025-10-20 PASS 17 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 23 minutes
  - PASS 17 minutes