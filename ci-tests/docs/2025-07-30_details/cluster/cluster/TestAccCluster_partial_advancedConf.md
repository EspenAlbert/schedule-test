# cluster/cluster/TestAccCluster_partial_advancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029450000) |  | dev | timeout | 10826.00s
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10840.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 15 minutes
- 2025-07-06 PASS 15 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-07-11

### Error 2025-07-11T00:29:45+00:00
```
2025-07-11T00:29:45.7910597Z === RUN   TestAccCluster_partial_advancedConf
2025-07-11T00:29:49.8201540Z === CONT  TestAccCluster_partial_advancedConf
2025-07-11T00:30:14.8222698Z === NAME  TestAccCluster_partial_advancedConf
2025-07-11T00:30:14.8224297Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:14.821988347Z, ProjectID: 68705af80642f25f3ba080f1, Cluster name: test-acc-tf-c-1806169549551969520
2025-07-11T03:30:15.8212542Z === NAME  TestAccCluster_partial_advancedConf
2025-07-11T03:30:15.8213524Z     resource_cluster_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:30:15.8214076Z         
2025-07-11T03:30:15.8215264Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:15.8215914Z         
2025-07-11T03:30:15.8216299Z           with mongodbatlas_cluster.test,
2025-07-11T03:30:15.8217187Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:30:15.8217848Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:30:15.8218223Z         
2025-07-11T03:30:15.8663533Z --- FAIL: TestAccCluster_partial_advancedConf (10826.05s)
```

- 2025-07-12 PASS 19 minutes
- 2025-07-13 PASS 30 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4791468Z === RUN   TestAccCluster_partial_advancedConf
2025-07-14T00:31:01.0439974Z === CONT  TestAccCluster_partial_advancedConf
2025-07-14T00:31:41.0241733Z === NAME  TestAccCluster_partial_advancedConf
2025-07-14T00:31:41.0243227Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:41.023904827Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-3565317282945519416
2025-07-14T03:31:41.8064033Z === NAME  TestAccCluster_partial_advancedConf
2025-07-14T03:31:41.8064703Z     resource_cluster_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:41.8065271Z         
2025-07-14T03:31:41.8065970Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:41.8066853Z         
2025-07-14T03:31:41.8067266Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:41.8067998Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:41.8068626Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:41.8068917Z         
2025-07-14T03:31:41.8481141Z --- FAIL: TestAccCluster_partial_advancedConf (10840.81s)
```

- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 16 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 16 minutes
- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 18 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 18 minutes
- 2025-07-25 PASS 18 minutes
- 2025-07-26 PASS 15 minutes
- 2025-07-27 PASS 16 minutes
- 2025-07-28 PASS 16 minutes
- 2025-07-29 PASS 17 minutes
- 2025-07-30 PASS 16 minutes