# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) TIMEOUT FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 17994.00s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10810.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 20 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 34 minutes
- 2025-07-10
  - PASS 24 minutes
  - PASS 17 minutes
- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8181591Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-07-11T00:29:49.8377602Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-07-11T00:30:49.8345256Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-07-11T00:30:49.8347280Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:49.834056233Z, ProjectID: 68705afc0642f25f3ba0847d, Cluster name: test-acc-tf-c-8360703538588246829
2025-07-11T04:08:17.8966465Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-07-11T04:08:17.8967425Z     resource_cluster_test.go:1286: Step 2/2 error: Error running apply: exit status 1
2025-07-11T04:08:17.8967985Z         
2025-07-11T04:08:17.8969209Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8360703538588246829): error updating MongoDB Cluster (test-acc-tf-c-8360703538588246829): timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 3h0m0s)
2025-07-11T04:08:17.8972157Z         
2025-07-11T04:08:17.8972687Z           with mongodbatlas_cluster.test,
2025-07-11T04:08:17.8973738Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T04:08:17.8974981Z           12: resource "mongodbatlas_cluster" "test" {
2025-07-11T04:08:17.8975518Z         
2025-07-11T05:29:44.2339765Z panic: test timed out after 5h0m0s
2025-07-11T05:29:44.2340449Z 	running tests:
2025-07-11T05:29:44.2339765Z panic: test timed out after 5h0m0s
2025-07-11T05:29:44.2340449Z 	running tests:
2025-07-11T05:29:44.2341087Z 		TestAccCluster_basicAWS_PausedToUnpaused (4h59m54s)
```

- 2025-07-12 PASS 21 minutes
- 2025-07-13 PASS 18 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0105518Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-07-14T00:31:01.0117148Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-07-14T00:31:11.0132409Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-07-14T00:31:11.0133537Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:11.012998397Z, ProjectID: 68744fc2d81a2d4bb4ea37e2, Cluster name: test-acc-tf-c-6942504139095895678
2025-07-14T03:31:11.8007566Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-07-14T03:31:11.8008467Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:11.8009049Z         
2025-07-14T03:31:11.8010044Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:11.8010758Z         
2025-07-14T03:31:11.8011042Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:11.8011709Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:11.8012320Z           12: resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:11.8012603Z         
2025-07-14T03:31:11.8511492Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (10810.84s)
```

- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 21 minutes
- 2025-07-17 PASS 18 minutes
- 2025-07-18 PASS 25 minutes
- 2025-07-19 PASS 20 minutes
- 2025-07-20 PASS 17 minutes
- 2025-07-21 PASS 18 minutes
- 2025-07-22 PASS 18 minutes
- 2025-07-23
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-07-24 PASS 20 minutes
- 2025-07-25 PASS 20 minutes
- 2025-07-26 PASS 20 minutes
- 2025-07-27 PASS 19 minutes
- 2025-07-28 PASS 17 minutes
- 2025-07-29 PASS 19 minutes
- 2025-07-30 PASS 20 minutes