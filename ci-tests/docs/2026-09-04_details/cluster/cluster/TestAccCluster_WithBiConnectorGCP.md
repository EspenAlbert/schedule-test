# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-03 00:44](#error-2026-09-03t0044010000) |  | dev | flaky_client | 8777.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 25 minutes
- 2026-08-07 PASS 24 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28 PASS an hour
- 2026-08-29 PASS an hour
- 2026-08-30: MISSING
- 2026-08-31 PASS 2 hours
- 2026-09-01 PASS 31 minutes
- 2026-09-02 PASS 2 hours
- 2026-09-03
  - FAIL 2 hours

### Error 2026-09-03T00:44:01+00:00
```
2026-09-03T00:44:01.3149228Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-09-03T00:44:06.4698423Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-09-03T03:07:31.7639418Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-09-03T03:07:31.7639999Z     resource_cluster_test.go:413: Step 2/2 error: Error running apply: exit status 1
2026-09-03T03:07:31.7640453Z         
2026-09-03T03:07:31.7642608Z         Error: error updating MongoDB Cluster (test-acc-tf-c-9071846899022505488): error updating MongoDB Cluster (test-acc-tf-c-9071846899022505488): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a98c2ce8c6ee76bb0d4a130/clusters/test-acc-tf-c-9071846899022505488": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-09-03T03:07:31.7643935Z         
2026-09-03T03:07:31.7644294Z           with mongodbatlas_cluster.basic_gcp,
2026-09-03T03:07:31.7644986Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-09-03T03:07:31.7645630Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-09-03T03:07:31.7646010Z         
2026-09-03T03:07:31.7852257Z    test_working_directory=/tmp/plugintest1343585006 test_step_number=2 test_name=TestAccCluster_RegionsConfig
2026-09-03T03:10:24.2026961Z --- FAIL: TestAccCluster_WithBiConnectorGCP (8777.73s)
```

  - PASS an hour
- 2026-09-04 PASS an hour

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 21 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
