# advanced_cluster/advancedcluster/TestMigAdvancedCluster_partialAdvancedConf Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:30](#error-2025-07-11t0030020000) |  | dev | flaky_client | 2566.06s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 22 minutes
- 2025-07-03 PASS 24 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 22 minutes
- 2025-07-06 PASS 20 minutes
- 2025-07-07 PASS 22 minutes
- 2025-07-08 PASS 25 minutes
- 2025-07-09 PASS 24 minutes
- 2025-07-10 PASS 23 minutes
- 2025-07-11

### Error 2025-07-11T00:30:02+00:00
```
2025-07-11T00:30:02.6331179Z === RUN   TestMigAdvancedCluster_partialAdvancedConf
2025-07-11T03:41:02.0304006Z === CONT  TestMigAdvancedCluster_partialAdvancedConf
2025-07-11T04:23:48.4067831Z === NAME  TestMigAdvancedCluster_partialAdvancedConf
2025-07-11T04:23:48.4068462Z     resource_advanced_cluster_migration_test.go:190: Step 1/4 error: Error running apply: exit status 1
2025-07-11T04:23:48.4068909Z         
2025-07-11T04:23:48.4070105Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b020642f25f3ba08936/clusters/test-acc-tf-c-6559648731178337462": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-11T04:23:48.4070973Z         
2025-07-11T04:23:48.4071288Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T04:23:48.4071925Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T04:23:48.4072509Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T04:23:48.4073113Z         
2025-07-11T04:23:48.5963869Z --- FAIL: TestMigAdvancedCluster_partialAdvancedConf (2566.57s)
```

- 2025-07-12 PASS 23 minutes
- 2025-07-13 PASS 26 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 26 minutes
- 2025-07-16 PASS 22 minutes
- 2025-07-17 PASS 25 minutes
- 2025-07-18 PASS 24 minutes
- 2025-07-19 PASS 25 minutes
- 2025-07-20 PASS 19 minutes
- 2025-07-21 PASS 19 minutes
- 2025-07-22 PASS 21 minutes
- 2025-07-23
  - PASS 20 minutes
  - PASS 29 minutes
  - PASS 21 minutes
  - PASS 22 minutes
- 2025-07-24 PASS 25 minutes
- 2025-07-25 PASS 27 minutes
- 2025-07-26 PASS 26 minutes
- 2025-07-27 PASS 27 minutes
- 2025-07-28 PASS 24 minutes
- 2025-07-29 PASS 24 minutes
- 2025-07-30 PASS 28 minutes
- 2025-07-31 PASS 23 minutes