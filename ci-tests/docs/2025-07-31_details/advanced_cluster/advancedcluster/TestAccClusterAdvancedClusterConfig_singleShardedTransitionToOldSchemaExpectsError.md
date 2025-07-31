# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) TIMEOUT FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339310000) |  | dev |  | 6532.00s
[2025-07-27 01:03](#error-2025-07-27t0103200000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68857ad6ef1f7377717abd84/clusters | qa | out_of_capacity | 5.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 20 minutes
- 2025-07-08 PASS 15 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 16 minutes
- 2025-07-11

### Error 2025-07-11T03:39:31+00:00
```
2025-07-11T03:39:31.0317228Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-11T03:41:02.0286553Z === CONT  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-11T05:29:53.6615873Z 		TestAccClusterAdvancedClusterConfig_selfManagedSharding (1h48m52s)
2025-07-11T05:29:53.6616928Z 		TestAccClusterAdvancedClusterConfig_shardedTransitionFromOldToNewSchema (1h48m52s)
2025-07-11T05:29:53.6618215Z 		TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (1h48m52s)
```

- 2025-07-12 PASS 20 minutes
- 2025-07-13 PASS 25 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 20 minutes
- 2025-07-16 PASS 15 minutes
- 2025-07-17 PASS 19 minutes
- 2025-07-18 PASS 14 minutes
- 2025-07-19 PASS 20 minutes
- 2025-07-20 PASS 23 minutes
- 2025-07-21 PASS 16 minutes
- 2025-07-22 PASS 16 minutes
- 2025-07-23
  - PASS 15 minutes
  - PASS 27 minutes
  - PASS 18 minutes
  - PASS 23 minutes
- 2025-07-24 PASS 22 minutes
- 2025-07-25 PASS 15 minutes
- 2025-07-26 PASS 23 minutes
- 2025-07-27

### Error 2025-07-27T01:03:20+00:00
```
2025-07-27T01:03:20.0809006Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-27T01:04:27.1028003Z === CONT  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-27T01:04:32.2070863Z === NAME  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-27T01:04:32.2112715Z     resource_advanced_cluster_test.go:639: Step 1/3 error: Error running apply: exit status 1
2025-07-27T01:04:32.2114611Z         
2025-07-27T01:04:32.2122284Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857ad6ef1f7377717abd84/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-07-27T01:04:32.2124607Z         
2025-07-27T01:04:32.2125292Z           with mongodbatlas_advanced_cluster.test,
2025-07-27T01:04:32.2126420Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-27T01:04:32.2127445Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-27T01:04:32.2128001Z         
2025-07-27T01:04:32.5547372Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (5.45s)
```

- 2025-07-28 PASS 20 minutes
- 2025-07-29 PASS 17 minutes
- 2025-07-30 PASS 19 minutes
- 2025-07-31 PASS 38 minutes