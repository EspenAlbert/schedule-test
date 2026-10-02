# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-03 00:44](#error-2026-09-03t0044010000) |  | dev | flaky_client | 8777.07s
[2026-09-11 00:41](#error-2026-09-11t0041460000) |  | dev | timeout | 10807.04s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS 2 hours
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 27 minutes
  - PASS an hour
- 2026-09-08 PASS 48 minutes
- 2026-09-09 PASS 40 minutes
- 2026-09-10 PASS an hour
- 2026-09-11
  - FAIL 3 hours

### Error 2026-09-11T00:41:46+00:00
```
2026-09-11T00:41:46.0486437Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-09-11T00:41:53.7426595Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-09-11T03:41:57.1600928Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-09-11T03:41:57.1601914Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2026-09-11T03:41:57.1602528Z         
2026-09-11T03:41:57.1603317Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 3h0m0s)
2026-09-11T03:41:57.1604071Z         
2026-09-11T03:41:57.1604408Z           with mongodbatlas_cluster.basic_gcp,
2026-09-11T03:41:57.1605245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-09-11T03:41:57.1606187Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-09-11T03:41:57.1606543Z         
2026-09-11T03:41:57.2160927Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10807.44s)
```

  - PASS 36 minutes
- 2026-09-12 PASS 28 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 24 minutes
- 2026-09-15 PASS 25 minutes
- 2026-09-16 PASS 26 minutes
- 2026-09-17 PASS 25 minutes
- 2026-09-18 PASS 26 minutes
- 2026-09-19 PASS 25 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 24 minutes
- 2026-09-22 PASS 25 minutes
- 2026-09-23
  - PASS 26 minutes
  - PASS 27 minutes
- 2026-09-24 PASS 26 minutes
- 2026-09-25 PASS 24 minutes
- 2026-09-26 PASS 27 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29 PASS 27 minutes
- 2026-09-30 PASS 30 minutes
- 2026-10-01 PASS 27 minutes
- 2026-10-02 PASS 27 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 24 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 25 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 24 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 24 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 26 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
