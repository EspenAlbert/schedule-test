# cluster/cluster/TestAccCluster_AWSWithLabels Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029470000) |  | dev | timeout | 10858.00s
[2025-07-14 00:30](#error-2025-07-14t0030580000) |  | dev | timeout | 10862.10s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 19 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 19 minutes
- 2025-07-09 PASS 33 minutes
- 2025-07-10
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-07-11

### Error 2025-07-11T00:29:47+00:00
```
2025-07-11T00:29:47.9000947Z === RUN   TestAccCluster_AWSWithLabels
2025-07-11T00:29:49.8385287Z === CONT  TestAccCluster_AWSWithLabels
2025-07-11T00:30:44.8318048Z === NAME  TestAccCluster_AWSWithLabels
2025-07-11T00:30:44.8319425Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:44.831572479Z, ProjectID: 68705afc0642f25f3ba0847d, Cluster name: test-acc-tf-c-6880550639943725629
2025-07-11T03:30:45.8925500Z === NAME  TestAccCluster_AWSWithLabels
2025-07-11T03:30:45.8926355Z     resource_cluster_test.go:622: Step 1/3 error: Error running apply: exit status 1
2025-07-11T03:30:45.8926769Z         
2025-07-11T03:30:45.8927486Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:45.8928184Z         
2025-07-11T03:30:45.8928653Z           with mongodbatlas_cluster.aws_with_labels,
2025-07-11T03:30:45.8929310Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "aws_with_labels":
2025-07-11T03:30:45.8929922Z           12: 		resource "mongodbatlas_cluster" "aws_with_labels" {
2025-07-11T03:30:45.8930246Z         
2025-07-11T03:30:45.9356014Z --- FAIL: TestAccCluster_AWSWithLabels (10858.02s)
```

- 2025-07-12 PASS 20 minutes
- 2025-07-13 PASS 18 minutes
- 2025-07-14

### Error 2025-07-14T00:30:58+00:00
```
2025-07-14T00:30:58.8245680Z === RUN   TestAccCluster_AWSWithLabels
2025-07-14T00:31:01.0445930Z === CONT  TestAccCluster_AWSWithLabels
2025-07-14T00:32:01.0316150Z === NAME  TestAccCluster_AWSWithLabels
2025-07-14T00:32:01.0317779Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:32:01.031355657Z, ProjectID: 68744fc2d81a2d4bb4ea37e2, Cluster name: test-acc-tf-c-3888106237463331375
2025-07-14T03:31:03.0773782Z   
2025-07-14T03:32:01.8084079Z === NAME  TestAccCluster_AWSWithLabels
2025-07-14T03:32:01.8084626Z     resource_cluster_test.go:622: Step 1/3 error: Error running apply: exit status 1
2025-07-14T03:32:01.8085119Z         
2025-07-14T03:32:01.8086137Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:32:01.8086667Z         
2025-07-14T03:32:01.8087095Z           with mongodbatlas_cluster.aws_with_labels,
2025-07-14T03:32:01.8087835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "aws_with_labels":
2025-07-14T03:32:01.8088542Z           12: 		resource "mongodbatlas_cluster" "aws_with_labels" {
2025-07-14T03:32:01.8088859Z         
2025-07-14T03:32:01.8513609Z --- FAIL: TestAccCluster_AWSWithLabels (10862.99s)
```

- 2025-07-15 PASS 19 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 22 minutes
- 2025-07-19 PASS 19 minutes
- 2025-07-20 PASS 17 minutes
- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 17 minutes
- 2025-07-23
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-07-24 PASS 18 minutes
- 2025-07-25 PASS 18 minutes
- 2025-07-26 PASS 19 minutes
- 2025-07-27 PASS 18 minutes
- 2025-07-28 PASS 18 minutes
- 2025-07-29 PASS 19 minutes
- 2025-07-30 PASS 18 minutes