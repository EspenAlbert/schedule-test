# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4) TIMEOUT
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 03:22](#error-2025-10-01t0322560000) |  | dev | flaky_client | 2031.07s
[2025-10-04 00:25](#error-2025-10-04t0025510000) |  | dev | timeout | 10802.07s
[2025-10-07 00:27](#error-2025-10-07t0027320000) |  | dev | timeout | 10802.08s
[2025-10-20 10:26](#error-2025-10-20t1026180000) |  | dev | timeout | 10802.08s
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17992.00s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 58 minutes
  - FAIL 33 minutes

### Error 2025-10-01T03:22:56+00:00
```
2025-10-01T03:22:56.8692906Z === RUN   TestAccCluster_RegionsConfig
2025-10-01T03:22:56.8741863Z === CONT  TestAccCluster_RegionsConfig
2025-10-01T03:56:48.5611041Z === NAME  TestAccCluster_RegionsConfig
2025-10-01T03:56:48.5612398Z     resource_cluster_test.go:1208: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T03:56:48.5613436Z         
2025-10-01T03:56:48.5616491Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-3366672339827219371): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc9e8d5a2f9645001ee4ff/clusters/test-acc-tf-c-3366672339827219371": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-01T03:56:48.5618352Z         
2025-10-01T03:56:48.5618808Z --- FAIL: TestAccCluster_RegionsConfig (2031.69s)
```

  - PASS 56 minutes
  - PASS 37 minutes
  - PASS 58 minutes
  - PASS 45 minutes
  - PASS an hour
  - PASS 38 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS an hour
- 2025-10-04

### Error 2025-10-04T00:25:51+00:00
```
2025-10-04T00:25:51.4630251Z === RUN   TestAccCluster_RegionsConfig
2025-10-04T00:25:51.4716528Z === CONT  TestAccCluster_RegionsConfig
2025-10-04T03:25:54.0714107Z === NAME  TestAccCluster_RegionsConfig
2025-10-04T03:25:54.0714902Z     resource_cluster_test.go:1208: Step 1/3 error: Error running apply: exit status 1
2025-10-04T03:25:54.0715498Z         
2025-10-04T03:25:54.0716403Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-04T03:25:54.0717041Z         
2025-10-04T03:25:54.0717331Z           with mongodbatlas_cluster.test,
2025-10-04T03:25:54.0718006Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-04T03:25:54.0718633Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-04T03:25:54.0718916Z         
2025-10-04T03:25:54.1177485Z --- FAIL: TestAccCluster_RegionsConfig (10802.65s)
```

- 2025-10-05 PASS 38 minutes
- 2025-10-06 PASS 43 minutes
- 2025-10-07

### Error 2025-10-07T00:27:32+00:00
```
2025-10-07T00:27:32.1577205Z === RUN   TestAccCluster_RegionsConfig
2025-10-07T00:27:32.1585711Z === CONT  TestAccCluster_RegionsConfig
2025-10-07T03:27:34.9259877Z === NAME  TestAccCluster_RegionsConfig
2025-10-07T03:27:34.9260748Z     resource_cluster_test.go:1208: Step 1/3 error: Error running apply: exit status 1
2025-10-07T03:27:34.9261414Z         
2025-10-07T03:27:34.9262618Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-07T03:27:34.9263174Z         
2025-10-07T03:27:34.9263464Z           with mongodbatlas_cluster.test,
2025-10-07T03:27:34.9264045Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-07T03:27:34.9264574Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-07T03:27:34.9264851Z         
2025-10-07T03:27:34.9802572Z --- FAIL: TestAccCluster_RegionsConfig (10802.82s)
```

- 2025-10-08 PASS an hour
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 44 minutes
- 2025-10-11 PASS 51 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 45 minutes
- 2025-10-14 PASS 43 minutes
- 2025-10-15 PASS 38 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 44 minutes
- 2025-10-18 PASS 38 minutes
- 2025-10-19 PASS 40 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 3 hours

### Error 2025-10-20T10:26:18+00:00
```
2025-10-20T10:26:18.7980486Z === RUN   TestAccCluster_RegionsConfig
2025-10-20T10:26:18.8022396Z === CONT  TestAccCluster_RegionsConfig
2025-10-20T13:26:21.5346464Z === NAME  TestAccCluster_RegionsConfig
2025-10-20T13:26:21.5347599Z     resource_cluster_test.go:1208: Step 1/3 error: Error running apply: exit status 1
2025-10-20T13:26:21.5348290Z         
2025-10-20T13:26:21.5349535Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-20T13:26:21.5350333Z         
2025-10-20T13:26:21.5350806Z           with mongodbatlas_cluster.test,
2025-10-20T13:26:21.5351865Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-20T13:26:21.5352774Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-20T13:26:21.5353258Z         
2025-10-20T13:26:21.5925082Z --- FAIL: TestAccCluster_RegionsConfig (10802.79s)
```

- 2025-10-21 PASS 37 minutes
- 2025-10-22
  - PASS 49 minutes
  - PASS 38 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 38 minutes
- 2025-10-26 PASS 39 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 38 minutes
- 2025-10-29 PASS 47 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4925910Z === RUN   TestAccCluster_RegionsConfig
2025-10-30T00:28:10.5132216Z === CONT  TestAccCluster_RegionsConfig
2025-10-30T03:41:40.3337201Z === NAME  TestAccCluster_RegionsConfig
2025-10-30T03:41:40.3337771Z     resource_cluster_test.go:1208: Step 2/3 error: Error running apply: exit status 1
2025-10-30T03:41:40.3338185Z         
2025-10-30T03:41:40.3339525Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5283640413556038809): error updating MongoDB Cluster (test-acc-tf-c-5283640413556038809): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-30T03:41:40.3340621Z         
2025-10-30T03:41:40.3340929Z           with mongodbatlas_cluster.test,
2025-10-30T03:41:40.3341528Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-30T03:41:40.3342070Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-30T03:41:40.3342365Z         
2025-10-30T03:42:27.9567590Z    test_name=TestAccCluster_create_RedactClientLogData
2025-10-30T05:28:02.7477604Z 		TestAccCluster_MultiRegion (4h59m52s)
2025-10-30T05:28:02.7478414Z 		TestAccCluster_ProviderRegionName (4h59m52s)
2025-10-30T05:28:02.7479168Z 		TestAccCluster_RegionsConfig (4h59m52s)
```
