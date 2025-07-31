# cluster/cluster/TestAccCluster_basicAzure Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029450000) |  | dev | timeout | 10802.09s
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10802.06s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 16 minutes
- 2025-07-04 PASS 26 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 15 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 16 minutes
- 2025-07-09 PASS 33 minutes
- 2025-07-10
  - PASS 14 minutes
  - PASS 16 minutes
- 2025-07-11

### Error 2025-07-11T00:29:45+00:00
```
2025-07-11T00:29:45.7918331Z === RUN   TestAccCluster_basicAzure
2025-07-11T00:29:49.8387373Z === CONT  TestAccCluster_basicAzure
2025-07-11T03:29:52.6909257Z === NAME  TestAccCluster_basicAzure
2025-07-11T03:29:52.6910163Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:29:52.6910864Z         
2025-07-11T03:29:52.6912183Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:52.6913157Z         
2025-07-11T03:29:52.6913730Z           with mongodbatlas_cluster.basic_azure,
2025-07-11T03:29:52.6915061Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2025-07-11T03:29:52.6916120Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2025-07-11T03:29:52.6916659Z         
2025-07-11T03:29:52.7475412Z --- FAIL: TestAccCluster_basicAzure (10802.92s)
```

- 2025-07-12 PASS 13 minutes
- 2025-07-13 PASS 28 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4795605Z === RUN   TestAccCluster_basicAzure
2025-07-14T00:31:01.0421266Z === CONT  TestAccCluster_basicAzure
2025-07-14T03:31:03.6051549Z === NAME  TestAccCluster_basicAzure
2025-07-14T03:31:03.6052367Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:03.6052992Z         
2025-07-14T03:31:03.6054123Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.6055361Z         
2025-07-14T03:31:03.6055896Z           with mongodbatlas_cluster.basic_azure,
2025-07-14T03:31:03.6056973Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2025-07-14T03:31:03.6057973Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2025-07-14T03:31:03.6058468Z         
2025-07-14T03:31:03.6718268Z --- FAIL: TestAccCluster_basicAzure (10802.63s)
```

- 2025-07-15 PASS 16 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 12 minutes
- 2025-07-18 PASS 15 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 14 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 12 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 17 minutes
- 2025-07-25 PASS 13 minutes
- 2025-07-26 PASS 18 minutes
- 2025-07-27 PASS 16 minutes
- 2025-07-28 PASS 14 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 14 minutes
- 2025-07-31 PASS 24 minutes