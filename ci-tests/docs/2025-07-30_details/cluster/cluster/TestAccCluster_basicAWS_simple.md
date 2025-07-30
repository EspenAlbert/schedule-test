# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029450000) |  | dev | timeout | 10831.00s
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10845.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-07-02 PASS 17 minutes
- 2025-07-03 PASS 16 minutes
- 2025-07-04 PASS 21 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-07-11

### Error 2025-07-11T00:29:45+00:00
```
2025-07-11T00:29:45.7908815Z === RUN   TestAccCluster_basicAWS_simple
2025-07-11T00:29:49.8203088Z === CONT  TestAccCluster_basicAWS_simple
2025-07-11T00:30:19.8247182Z === NAME  TestAccCluster_basicAWS_simple
2025-07-11T00:30:19.8249260Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:19.824458116Z, ProjectID: 68705af80642f25f3ba080f1, Cluster name: test-acc-tf-c-5878391311928362698
2025-07-11T03:30:20.7988368Z === NAME  TestAccCluster_basicAWS_simple
2025-07-11T03:30:20.7989048Z     resource_cluster_test.go:28: Step 1/3 error: Error running apply: exit status 1
2025-07-11T03:30:20.7989539Z         
2025-07-11T03:30:20.7990393Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:20.7991098Z         
2025-07-11T03:30:20.7991603Z           with mongodbatlas_cluster.test,
2025-07-11T03:30:20.7992317Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:30:20.7992932Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:30:20.7993322Z         
2025-07-11T03:30:20.8484296Z --- FAIL: TestAccCluster_basicAWS_simple (10831.03s)
```

- 2025-07-12 PASS 14 minutes
- 2025-07-13 PASS 28 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4788655Z === RUN   TestAccCluster_basicAWS_simple
2025-07-14T00:31:01.0440514Z === CONT  TestAccCluster_basicAWS_simple
2025-07-14T00:31:46.0246569Z === NAME  TestAccCluster_basicAWS_simple
2025-07-14T00:31:46.0247967Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:46.024400009Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-4550365244024936101
2025-07-14T03:31:46.8366452Z === NAME  TestAccCluster_basicAWS_simple
2025-07-14T03:31:46.8367385Z     resource_cluster_test.go:28: Step 1/3 error: Error running apply: exit status 1
2025-07-14T03:31:46.8367990Z         
2025-07-14T03:31:46.8368808Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:46.8369326Z         
2025-07-14T03:31:46.8369838Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:46.8370502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:46.8371023Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:46.8371486Z         
2025-07-14T03:31:46.8792867Z --- FAIL: TestAccCluster_basicAWS_simple (10845.84s)
```

- 2025-07-15 PASS 14 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 17 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20 PASS 13 minutes
- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 16 minutes
- 2025-07-23
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 14 minutes
- 2025-07-25 PASS 15 minutes
- 2025-07-26 PASS 14 minutes
- 2025-07-27 PASS 16 minutes
- 2025-07-28 PASS 17 minutes
- 2025-07-29 PASS 14 minutes
- 2025-07-30 PASS 16 minutes