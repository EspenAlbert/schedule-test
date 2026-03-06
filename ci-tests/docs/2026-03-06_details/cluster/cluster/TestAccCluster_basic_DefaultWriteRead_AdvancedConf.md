# cluster/cluster/TestAccCluster_basic_DefaultWriteRead_AdvancedConf Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036550000) |  | dev | 907.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 25 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 22 minutes
- 2026-02-13 PASS 20 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 24 minutes
- 2026-02-19 PASS 30 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 22 minutes
- 2026-02-24

### Error 2026-02-24T00:36:55+00:00
```
2026-02-24T00:36:55.7978253Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-24T00:37:02.7242865Z === CONT  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-24T00:37:27.7249214Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-24T00:37:27.7250707Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:27.72463599Z, ProjectID: 699cf2a5ae2412ce62117913, Cluster name: test-acc-tf-c-4337919037213982416
2026-02-24T00:52:10.0643834Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-24T00:52:10.0644650Z     resource_cluster_test.go:219: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:52:10.0645093Z         
2026-02-24T00:52:10.0646282Z         Error: error updating Advanced Configuration Option (v20240530) for MongoDB Cluster (test-acc-tf-c-4337919037213982416): undefined response type
2026-02-24T00:52:10.0647160Z         
2026-02-24T00:52:10.0647481Z           with mongodbatlas_cluster.test,
2026-02-24T00:52:10.0648202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-24T00:52:10.0648884Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-24T00:52:10.0649587Z         
2026-02-24T00:52:10.1072529Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (907.39s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 27 minutes
- 2026-02-27 PASS 23 minutes
- 2026-02-28 PASS 18 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 20 minutes
- 2026-03-03 PASS 27 minutes
- 2026-03-04 PASS 21 minutes
- 2026-03-05 PASS 30 minutes
- 2026-03-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 22 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 26 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 22 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 19 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
