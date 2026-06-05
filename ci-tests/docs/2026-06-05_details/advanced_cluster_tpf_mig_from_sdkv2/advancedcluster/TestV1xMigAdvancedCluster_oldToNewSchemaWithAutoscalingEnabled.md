# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 18 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057130000) |  | dev | flaky_client | 621.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 23 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 25 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 27 minutes
- 2026-05-14: MISSING
- 2026-05-15

### Error 2026-05-15T00:57:13+00:00
```
2026-05-15T00:57:13.6943069Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-05-15T00:57:15.7962501Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-05-15T01:07:37.4375961Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-05-15T01:07:37.4376678Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-05-15T01:07:37.4377113Z         
2026-05-15T01:07:37.4378379Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f67649b96da6ebb0d3b/clusters/test-acc-tf-c-6096228446675547636": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-05-15T01:07:37.4379274Z         
2026-05-15T01:07:37.4379927Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T01:07:37.4380620Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T01:07:37.4381254Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T01:07:37.4381586Z         
2026-05-15T01:07:37.6362812Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (621.84s)
```

- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 41 minutes
- 2026-05-19: MISSING
- 2026-05-20 PASS 24 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS 47 minutes
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 23 minutes
- 2026-05-26: MISSING
- 2026-05-27 PASS 53 minutes
- 2026-05-28: MISSING
- 2026-05-29 PASS 31 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 31 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 43 minutes
- 2026-06-04: MISSING
- 2026-06-05 PASS 28 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20 PASS 21 minutes
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 29 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 26 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
