# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) TIMEOUT FAIL
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17992.00s
[2025-11-08 00:28](#error-2025-11-08t0028480000) |  | dev | timeout | 10802.08s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
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

- 2025-11-09: MISSING
- 2025-11-10 PASS 41 minutes
- 2025-11-11 PASS 37 minutes
- 2025-11-12 PASS 41 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 45 minutes
- 2025-11-15 PASS 37 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 41 minutes
- 2025-11-18 PASS 40 minutes
- 2025-11-19
  - PASS 25 minutes
  - PASS 21 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21 PASS 37 minutes
- 2025-11-22 PASS 22 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 22 minutes
- 2025-11-25 PASS 25 minutes
- 2025-11-26 PASS 20 minutes
- 2025-11-27 PASS 59 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 39 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 38 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 41 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 42 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 42 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
