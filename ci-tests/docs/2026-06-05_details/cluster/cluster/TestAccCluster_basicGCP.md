# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 00:55](#error-2026-05-07t0055560000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69fbe2d3e0fac50e27d49e7d/clusters | dev | out_of_capacity | 2.07s
[2026-05-07 09:33](#error-2026-05-07t0933310000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69fc5c682f0288ef643ef255/clusters | dev | out_of_capacity | 2.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL 2 seconds

### Error 2026-05-07T00:55:56+00:00
```
2026-05-07T00:55:56.1063312Z === RUN   TestAccCluster_basicGCP
2026-05-07T00:56:35.9789920Z === CONT  TestAccCluster_basicGCP
2026-05-07T00:56:38.5855216Z === NAME  TestAccCluster_basicGCP
2026-05-07T00:56:38.5855745Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2026-05-07T00:56:38.5856170Z         
2026-05-07T00:56:38.5857552Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69fbe2d3e0fac50e27d49e7d/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-07T00:56:38.5859317Z         
2026-05-07T00:56:38.5859649Z           with mongodbatlas_cluster.basic_gcp,
2026-05-07T00:56:38.5860295Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-05-07T00:56:38.5860903Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-05-07T00:56:38.5861222Z         
2026-05-07T00:56:38.6080945Z    test_working_directory=/tmp/plugintest2322628544 test_step_number=1 test_terraform_path=/home/runner/work/_temp/c4a1392a-b542-4e35-ad53-7aa41239d777/terraform
2026-05-07T00:56:38.6507700Z --- FAIL: TestAccCluster_basicGCP (2.68s)
```

  - FAIL 2 seconds

### Error 2026-05-07T09:33:31+00:00
```
2026-05-07T09:33:31.1581771Z === RUN   TestAccCluster_basicGCP
2026-05-07T09:33:37.2707913Z === CONT  TestAccCluster_basicGCP
2026-05-07T09:33:39.6939497Z === NAME  TestAccCluster_basicGCP
2026-05-07T09:33:39.6940348Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2026-05-07T09:33:39.6940854Z         
2026-05-07T09:33:39.6942910Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69fc5c682f0288ef643ef255/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-07T09:33:39.6944179Z         
2026-05-07T09:33:39.7043721Z           with mongodbatlas_cluster.basic_gcp,
2026-05-07T09:33:39.7045002Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-05-07T09:33:39.7046009Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-05-07T09:33:39.7046558Z         
2026-05-07T09:33:39.7484274Z --- FAIL: TestAccCluster_basicGCP (2.48s)
```

- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 27 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 20 minutes
- 2026-05-13 PASS 20 minutes
- 2026-05-14 PASS 40 minutes
- 2026-05-15 PASS 35 minutes
- 2026-05-16 PASS 24 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 48 minutes
- 2026-05-19 PASS 23 minutes
- 2026-05-20 PASS 27 minutes
- 2026-05-21 PASS 25 minutes
- 2026-05-22 PASS 47 minutes
- 2026-05-23 PASS 37 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 30 minutes
- 2026-05-26 PASS 23 minutes
- 2026-05-27 PASS 58 minutes
- 2026-05-28 PASS 30 minutes
- 2026-05-29 PASS 32 minutes
- 2026-05-30 PASS 24 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 29 minutes
- 2026-06-02 PASS 23 minutes
- 2026-06-03 PASS 40 minutes
- 2026-06-04 PASS 51 minutes
- 2026-06-05 PASS 35 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 27 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 28 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 32 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 27 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
