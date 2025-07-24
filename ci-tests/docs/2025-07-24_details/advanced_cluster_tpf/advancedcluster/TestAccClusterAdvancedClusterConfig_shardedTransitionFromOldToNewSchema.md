# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-02 01:46](#error-2025-07-02t0146500000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68648358948ea608f1ec5ca6/clusters | dev | out_of_capacity | 5.03s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 15 minutes
- 2025-06-26
  - PASS 19 minutes
  - PASS 14 minutes
- 2025-06-27 PASS 18 minutes
- 2025-06-28 PASS 17 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-07-02

### Error 2025-07-02T01:46:50+00:00
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

- 2025-07-03 PASS 15 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 15 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 16 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 33 minutes
- 2025-07-19 PASS 15 minutes
- 2025-07-20 PASS 14 minutes
- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 18 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-07-24 PASS 15 minutes