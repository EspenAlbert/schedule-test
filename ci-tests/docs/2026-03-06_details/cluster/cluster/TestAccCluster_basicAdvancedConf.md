# cluster/cluster/TestAccCluster_basicAdvancedConf Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036550000) |  | dev | flaky_500 | 898.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 26 minutes
- 2026-02-10 PASS 23 minutes
- 2026-02-11 PASS 20 minutes
- 2026-02-12 PASS 27 minutes
- 2026-02-13 PASS 25 minutes
- 2026-02-14 PASS 22 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 24 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 32 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T00:36:55+00:00
```
2026-02-24T00:36:55.7979971Z === RUN   TestAccCluster_basicAdvancedConf
2026-02-24T00:37:02.7202519Z === CONT  TestAccCluster_basicAdvancedConf
2026-02-24T00:37:17.7210431Z === NAME  TestAccCluster_basicAdvancedConf
2026-02-24T00:37:17.7212532Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:17.720707916Z, ProjectID: 699cf2a5ae2412ce62117913, Cluster name: test-acc-tf-c-7058900067398626406
2026-02-24T00:52:01.0363830Z === NAME  TestAccCluster_basicAdvancedConf
2026-02-24T00:52:01.0364589Z     resource_cluster_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:52:01.0365139Z         
2026-02-24T00:52:01.0366582Z         Error: error updating Advanced Configuration Option  for MongoDB Cluster (test-acc-tf-c-7058900067398626406): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:52:01.0367719Z         
2026-02-24T00:52:01.0368133Z           with mongodbatlas_cluster.test,
2026-02-24T00:52:01.0368873Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-24T00:52:01.0369460Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-24T00:52:01.0369783Z         
2026-02-24T00:52:01.0855375Z --- FAIL: TestAccCluster_basicAdvancedConf (898.37s)
```

- 2026-02-25 PASS 24 minutes
- 2026-02-26 PASS 30 minutes
- 2026-02-27 PASS 24 minutes
- 2026-02-28 PASS 22 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 23 minutes
- 2026-03-03 PASS 28 minutes
- 2026-03-04 PASS 21 minutes
- 2026-03-05 PASS 29 minutes
- 2026-03-06 PASS 27 minutes

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
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 minutes
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
- 2026-03-01 PASS 26 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 21 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
