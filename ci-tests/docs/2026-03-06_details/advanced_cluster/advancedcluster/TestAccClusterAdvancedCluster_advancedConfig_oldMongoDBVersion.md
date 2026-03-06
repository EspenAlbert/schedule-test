# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 854.10s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 16 minutes
- 2026-02-07 PASS 15 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 19 minutes
- 2026-02-10 PASS 15 minutes
- 2026-02-11 PASS 16 minutes
- 2026-02-12 PASS 17 minutes
- 2026-02-13 PASS 16 minutes
- 2026-02-14 PASS 23 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 16 minutes
- 2026-02-18 PASS 18 minutes
- 2026-02-19 PASS 20 minutes
- 2026-02-20 PASS 18 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6991230Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:40:00.5503603Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:40:20.5529589Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:40:20.5533683Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:20.552707137Z, ProjectID: 699cf2b18dfec41eaa8533ad, Cluster name: test-acc-tf-c-6912266637818348581
2026-02-24T00:54:15.4648957Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-02-24T00:54:15.4649880Z     resource_test.go:267: Step 2/3 error: Error running apply: exit status 1
2026-02-24T00:54:15.4650389Z         
2026-02-24T00:54:15.4650799Z         Error: Error in update advanced configuration
2026-02-24T00:54:15.4651200Z         
2026-02-24T00:54:15.4651566Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:54:15.4652585Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:54:15.4653329Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:54:15.4653683Z         
2026-02-24T00:54:15.4654245Z         cluster name: test-acc-tf-c-6912266637818348581, API error details: (503
2026-02-24T00:54:15.4655085Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:54:15.5117528Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (854.96s)
```

- 2026-02-25 PASS 23 minutes
- 2026-02-26 PASS 25 minutes
- 2026-02-27 PASS 22 minutes
- 2026-02-28 PASS 18 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 18 minutes
  - PASS 20 minutes
- 2026-03-03 PASS 25 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 33 minutes
- 2026-03-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 13 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 21 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 23 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 17 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
