# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 34) TIMEOUT FAIL
Success rate: 97.14%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339350000) |  | dev |  | 6532.00s
[2025-07-13 01:05](#error-2025-07-13t0105150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68730649006d8d55bbaa54fa/clusters | qa | out_of_capacity | 5.01s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 32 minutes
  - PASS 30 minutes
  - PASS 29 minutes
  - PASS 30 minutes
  - PASS 35 minutes
- 2025-07-02 PASS 32 minutes
- 2025-07-03 PASS 34 minutes
- 2025-07-04 PASS 33 minutes
- 2025-07-05 PASS 31 minutes
- 2025-07-06 PASS 29 minutes
- 2025-07-07 PASS 34 minutes
- 2025-07-08 PASS 37 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10 PASS 31 minutes
- 2025-07-11

### Error 2025-07-11T03:39:35+00:00
```
2025-07-11T03:39:35.6993469Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-11T03:41:02.0582039Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-11T05:29:53.6608584Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1h48m52s)
2025-07-11T05:29:53.6610154Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1h48m52s)
2025-07-11T05:29:53.6611809Z 		TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (1h48m52s)
```

- 2025-07-12 PASS 35 minutes
- 2025-07-13

### Error 2025-07-13T01:05:15+00:00
```
2025-07-13T01:05:15.2808622Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-13T01:06:24.6827605Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-13T01:06:29.5697543Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-13T01:06:29.5699457Z     resource_advanced_cluster_test.go:935: Step 1/4 error: Error running apply: exit status 1
2025-07-13T01:06:29.5700608Z         
2025-07-13T01:06:29.5705173Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68730649006d8d55bbaa54fa/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-07-13T01:06:29.5708184Z         
2025-07-13T01:06:29.5708993Z           with mongodbatlas_advanced_cluster.test,
2025-07-13T01:06:29.5711067Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-13T01:06:29.5715711Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-13T01:06:29.5732919Z         
2025-07-13T01:06:29.7404749Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (5.06s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 36 minutes
- 2025-07-16 PASS 32 minutes
- 2025-07-17 PASS 33 minutes
- 2025-07-18 PASS 32 minutes
- 2025-07-19 PASS 33 minutes
- 2025-07-20 PASS 44 minutes
- 2025-07-21 PASS 29 minutes
- 2025-07-22 PASS 29 minutes
- 2025-07-23
  - PASS 28 minutes
  - PASS 37 minutes
  - PASS 31 minutes
  - PASS 34 minutes
- 2025-07-24 PASS 37 minutes
- 2025-07-25 PASS 33 minutes
- 2025-07-26 PASS 37 minutes
- 2025-07-27 PASS 36 minutes
- 2025-07-28 PASS 36 minutes
- 2025-07-29 PASS 36 minutes
- 2025-07-30 PASS 34 minutes