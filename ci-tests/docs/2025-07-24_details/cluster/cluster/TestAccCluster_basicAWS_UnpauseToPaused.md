# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 10851.01s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10815.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 16 minutes
- 2025-06-26 PASS 16 minutes
- 2025-06-27 PASS 17 minutes
- 2025-06-28 PASS 17 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 17 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 33 minutes
- 2025-07-10
  - PASS 23 minutes
  - PASS 16 minutes
- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8180446Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-07-11T00:29:49.8378757Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-07-11T00:30:39.8307048Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-07-11T00:30:39.8308465Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:39.830468534Z, ProjectID: 68705afc0642f25f3ba0847d, Cluster name: test-acc-tf-c-1406234465224167395
2025-07-11T03:30:40.8964909Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-07-11T03:30:40.8965844Z     resource_cluster_test.go:1247: Step 1/3 error: Error running apply: exit status 1
2025-07-11T03:30:40.8966536Z         
2025-07-11T03:30:40.8967816Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:40.8968537Z         
2025-07-11T03:30:40.8968841Z           with mongodbatlas_cluster.test,
2025-07-11T03:30:40.8969429Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:30:40.8970182Z           12: resource "mongodbatlas_cluster" "test" {
2025-07-11T03:30:40.8970567Z         
2025-07-11T03:30:40.9412475Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (10851.11s)
```

- 2025-07-12 PASS 20 minutes
- 2025-07-13 PASS 17 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0104430Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-07-14T00:31:01.0117713Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-07-14T00:31:16.0136031Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-07-14T00:31:16.0137703Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:16.01332254Z, ProjectID: 68744fc2d81a2d4bb4ea37e2, Cluster name: test-acc-tf-c-7101094269842304438
2025-07-14T03:31:16.8574460Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-07-14T03:31:16.8575166Z     resource_cluster_test.go:1247: Step 1/3 error: Error running apply: exit status 1
2025-07-14T03:31:16.8575835Z         
2025-07-14T03:31:16.8577101Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:16.8577997Z         
2025-07-14T03:31:16.8578361Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:16.8578930Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:16.8579655Z           12: resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:16.8580104Z         
2025-07-14T03:31:16.9017406Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (10815.89s)
```

- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 18 minutes
- 2025-07-18 PASS 22 minutes
- 2025-07-19 PASS 17 minutes
- 2025-07-20 PASS 16 minutes
- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 17 minutes
- 2025-07-23
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-07-24 PASS 18 minutes