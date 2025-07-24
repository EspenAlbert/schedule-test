# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-13 02:11](#error-2025-07-13t0211000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6873051f207f456171043601/clusters | qa | out_of_capacity | 5.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 15 minutes
- 2025-06-26
  - PASS 27 minutes
  - PASS 14 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 18 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 15 minutes
- 2025-07-10
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 17 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2191464Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-13T02:11:00.2257979Z === CONT  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-13T02:11:00.2315267Z === NAME  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-13T02:11:00.2315978Z     resource_advanced_cluster_test.go:639: Step 1/3 error: Error running apply: exit status 1
2025-07-13T02:11:00.2316510Z         
2025-07-13T02:11:00.2316749Z         Error: Error in create
2025-07-13T02:11:00.2316981Z         
2025-07-13T02:11:00.2317288Z           with mongodbatlas_advanced_cluster.test,
2025-07-13T02:11:00.2317902Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-13T02:11:00.2318472Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-13T02:11:00.2318772Z         
2025-07-13T02:11:00.2319334Z         cluster name: test-acc-tf-c-8617376396918040049, API error details:
2025-07-13T02:11:00.2319986Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873051f207f456171043601/clusters
2025-07-13T02:11:00.2320772Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-07-13T02:11:00.2321406Z         region is currently out of capacity for the requested instance size. Reason:
2025-07-13T02:11:00.2321883Z         Conflict. Params: [], BadRequestDetail: 
2025-07-13T02:11:00.2323195Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (5.47s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 21 minutes
- 2025-07-16 PASS 16 minutes
- 2025-07-17 PASS 17 minutes
- 2025-07-18 PASS 27 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 16 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 18 minutes
- 2025-07-24 PASS 15 minutes