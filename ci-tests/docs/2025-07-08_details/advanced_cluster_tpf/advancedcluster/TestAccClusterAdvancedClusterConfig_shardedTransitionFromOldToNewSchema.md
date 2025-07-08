# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### FAIL 5 seconds
```
2025-07-02T01:46:50.6517037Z === RUN   TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-07-02T01:46:50.6549801Z === CONT  TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-07-02T01:46:50.6584347Z === NAME  TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema
2025-07-02T01:46:50.6585087Z     resource_advanced_cluster_test.go:960: Step 1/3 error: Error running apply: exit status 1
2025-07-02T01:46:50.6585525Z         
2025-07-02T01:46:50.6585843Z         Error: Error in create (legacy)
2025-07-02T01:46:50.6586158Z         
2025-07-02T01:46:50.6586473Z           with mongodbatlas_advanced_cluster.test,
2025-07-02T01:46:50.6587224Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-02T01:46:50.6587901Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-02T01:46:50.6588260Z         
2025-07-02T01:46:50.6588709Z         cluster name: test-acc-tf-c-4804837102132772143, API error details:
2025-07-02T01:46:50.6589471Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68648358948ea608f1ec5ca6/clusters
2025-07-02T01:46:50.6590230Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-07-02T01:46:50.6591095Z         region is currently out of capacity for the requested instance size. Reason:
2025-07-02T01:46:50.6591681Z         Conflict. Params: [], BadRequestDetail: 
2025-07-02T01:46:50.6592255Z --- FAIL: TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (5.34s)
```
### 2025-07-03
#### PASS 15 minutes
### 2025-07-04
#### PASS 20 minutes
### 2025-07-05
#### PASS 18 minutes
### 2025-07-06
#### PASS 16 minutes
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 15 minutes