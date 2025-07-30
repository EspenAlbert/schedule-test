# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) TIMEOUT FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 17994.00s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10820.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10
  - PASS 19 minutes
  - PASS 12 minutes
- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8173892Z === RUN   TestAccCluster_withAutoScalingAWS
2025-07-11T00:29:49.8383476Z === CONT  TestAccCluster_withAutoScalingAWS
2025-07-11T00:30:34.8280476Z === NAME  TestAccCluster_withAutoScalingAWS
2025-07-11T00:30:34.8281821Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:34.82777678Z, ProjectID: 68705afc0642f25f3ba0847d, Cluster name: test-acc-tf-c-1968008958924466046
2025-07-11T03:49:59.6870028Z === NAME  TestAccCluster_withAutoScalingAWS
2025-07-11T03:49:59.6870791Z     resource_cluster_test.go:982: Step 2/2 error: Error running apply: exit status 1
2025-07-11T03:49:59.6871301Z         
2025-07-11T03:49:59.6872802Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1968008958924466046): error updating MongoDB Cluster (test-acc-tf-c-1968008958924466046): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-07-11T03:49:59.6873770Z         
2025-07-11T03:49:59.6874085Z           with mongodbatlas_cluster.test,
2025-07-11T03:49:59.6875066Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:49:59.6875805Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:49:59.6876105Z         
2025-07-11T05:29:44.2340449Z 	running tests:
2025-07-11T05:29:44.2341087Z 		TestAccCluster_basicAWS_PausedToUnpaused (4h59m54s)
2025-07-11T05:29:44.2341936Z 		TestAccCluster_withAutoScalingAWS (4h59m54s)
```

- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 13 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0087288Z === RUN   TestAccCluster_withAutoScalingAWS
2025-07-14T00:31:01.0311461Z === CONT  TestAccCluster_withAutoScalingAWS
2025-07-14T00:31:21.0164621Z === NAME  TestAccCluster_withAutoScalingAWS
2025-07-14T00:31:21.0166465Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:21.016213002Z, ProjectID: 68744fc2d81a2d4bb4ea37e2, Cluster name: test-acc-tf-c-2988177430203809647
2025-07-14T03:31:21.8046581Z === NAME  TestAccCluster_withAutoScalingAWS
2025-07-14T03:31:21.8047253Z     resource_cluster_test.go:982: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:21.8047773Z         
2025-07-14T03:31:21.8048657Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:21.8049337Z         
2025-07-14T03:31:21.8049792Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:21.8050491Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:21.8051129Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:21.8051425Z         
2025-07-14T03:31:21.8486926Z --- FAIL: TestAccCluster_withAutoScalingAWS (10820.83s)
```

- 2025-07-15 PASS 14 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 14 minutes
- 2025-07-18 PASS 15 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 12 minutes
- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 12 minutes
- 2025-07-23
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 13 minutes
- 2025-07-25 PASS 17 minutes
- 2025-07-26 PASS 14 minutes
- 2025-07-27 PASS 15 minutes
- 2025-07-28 PASS 13 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 15 minutes