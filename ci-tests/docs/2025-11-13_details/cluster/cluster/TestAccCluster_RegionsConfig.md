# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2) TIMEOUT
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026180000) |  | dev | timeout | 10802.08s
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17992.00s
[2025-11-08 00:28](#error-2025-11-08t0028480000) |  | dev | timeout | 10802.08s

## Timeline
- 2025-10-14: MISSING
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

- 2025-10-31 PASS 44 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 39 minutes
- 2025-11-03 PASS 41 minutes
- 2025-11-04 PASS 48 minutes
- 2025-11-05
  - PASS 45 minutes
  - PASS 40 minutes
- 2025-11-06 PASS 50 minutes
- 2025-11-07 PASS 44 minutes
- 2025-11-08

### Error 2025-11-08T00:28:48+00:00
```
2025-11-08T00:28:48.0432779Z === RUN   TestAccCluster_RegionsConfig
2025-11-08T00:28:48.0722783Z === CONT  TestAccCluster_RegionsConfig
2025-11-08T03:28:50.8346262Z === NAME  TestAccCluster_RegionsConfig
2025-11-08T03:28:50.8346930Z     resource_cluster_test.go:1208: Step 1/3 error: Error running apply: exit status 1
2025-11-08T03:28:50.8347349Z         
2025-11-08T03:28:50.8348723Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 3h0m0s)
2025-11-08T03:28:50.8349499Z         
2025-11-08T03:28:50.8349988Z           with mongodbatlas_cluster.test,
2025-11-08T03:28:50.8350986Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-08T03:28:50.8351895Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-08T03:28:50.8352378Z         
2025-11-08T03:28:50.8797539Z --- FAIL: TestAccCluster_RegionsConfig (10802.81s)
```

- 2025-11-09 PASS 38 minutes
- 2025-11-10 PASS 41 minutes
- 2025-11-11 PASS 37 minutes
- 2025-11-12 PASS 41 minutes
- 2025-11-13
  - PASS an hour
  - PASS 41 minutes