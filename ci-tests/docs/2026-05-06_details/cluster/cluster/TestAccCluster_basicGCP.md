# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters | dev | out_of_capacity | 2.04s
[2026-04-25 00:46](#error-2026-04-25t0046230000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69ec0edcfe9ffef66c7ae609/clusters | dev | out_of_capacity | 2.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 43 minutes
- 2026-04-08 PASS 17 minutes
- 2026-04-09 PASS 36 minutes
- 2026-04-10 PASS 30 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 25 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 24 minutes
- 2026-04-16

### Error 2026-04-16T00:50:58+00:00
```
2026-04-16T00:50:58.7664682Z === RUN   TestAccCluster_basicGCP
2026-04-16T00:53:12.0983584Z === CONT  TestAccCluster_basicGCP
2026-04-16T00:53:14.3478183Z === NAME  TestAccCluster_basicGCP
2026-04-16T00:53:14.3479014Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:14.3479640Z         
2026-04-16T00:53:14.3481931Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:14.3483242Z         
2026-04-16T00:53:14.3483607Z           with mongodbatlas_cluster.basic_gcp,
2026-04-16T00:53:14.3484308Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-04-16T00:53:14.3484966Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-04-16T00:53:14.3485321Z         
2026-04-16T00:53:14.3629216Z    test_name=TestAccCluster_RegionsConfig test_terraform_path=/home/runner/work/_temp/9471bf85-4be6-4dec-8183-4ca56d6cc8e8/terraform
2026-04-16T00:53:14.4217542Z --- FAIL: TestAccCluster_basicGCP (2.35s)
```

- 2026-04-17 PASS 23 minutes
- 2026-04-18 PASS 24 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21 PASS 23 minutes
- 2026-04-22 PASS 58 minutes
- 2026-04-23 PASS 28 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25

### Error 2026-04-25T00:46:23+00:00
```
2026-04-25T00:46:23.4773769Z === RUN   TestAccCluster_basicGCP
2026-04-25T00:46:30.5619992Z === CONT  TestAccCluster_basicGCP
2026-04-25T00:46:33.2589562Z === NAME  TestAccCluster_basicGCP
2026-04-25T00:46:33.2590218Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2026-04-25T00:46:33.2590743Z         
2026-04-25T00:46:33.2592346Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69ec0edcfe9ffef66c7ae609/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-25T00:46:33.2593404Z         
2026-04-25T00:46:33.2593802Z           with mongodbatlas_cluster.basic_gcp,
2026-04-25T00:46:33.2594537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-04-25T00:46:33.2595215Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-04-25T00:46:33.2595641Z         
2026-04-25T00:46:33.3016996Z --- FAIL: TestAccCluster_basicGCP (2.74s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 21 minutes
- 2026-04-29 PASS 22 minutes
- 2026-04-30 PASS 30 minutes
- 2026-05-01 PASS 18 minutes
- 2026-05-02 PASS 20 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 23 minutes
- 2026-05-05 PASS 30 minutes
- 2026-05-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 22 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 21 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 20 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 23 minutes
  - PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 20 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 21 minutes
