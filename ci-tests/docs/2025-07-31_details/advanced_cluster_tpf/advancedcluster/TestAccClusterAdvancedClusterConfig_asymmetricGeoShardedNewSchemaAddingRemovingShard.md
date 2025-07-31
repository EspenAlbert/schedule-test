# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-13 02:11](#error-2025-07-13t0211000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68730524006d8d55bbaa4dcf/clusters | qa | out_of_capacity | 5.03s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 30 minutes
- 2025-07-03 PASS 48 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 31 minutes
- 2025-07-06 PASS 30 minutes
- 2025-07-07 PASS 30 minutes
- 2025-07-08 PASS 39 minutes
- 2025-07-09 PASS 31 minutes
- 2025-07-10
  - PASS 29 minutes
  - PASS 39 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 49 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2207068Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-13T02:11:00.2266376Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-13T02:11:00.2294091Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard
2025-07-13T02:11:00.2295006Z     resource_advanced_cluster_test.go:935: Step 1/4 error: Error running apply: exit status 1
2025-07-13T02:11:00.2295479Z         
2025-07-13T02:11:00.2295721Z         Error: Error in create
2025-07-13T02:11:00.2296063Z         
2025-07-13T02:11:00.2296374Z           with mongodbatlas_advanced_cluster.test,
2025-07-13T02:11:00.2297125Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-13T02:11:00.2297820Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-13T02:11:00.2298129Z         
2025-07-13T02:11:00.2298644Z         cluster name: test-acc-tf-c-6822373315245921049, API error details:
2025-07-13T02:11:00.2299525Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68730524006d8d55bbaa4dcf/clusters
2025-07-13T02:11:00.2300311Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-07-13T02:11:00.2301049Z         region is currently out of capacity for the requested instance size. Reason:
2025-07-13T02:11:00.2301536Z         Conflict. Params: [], BadRequestDetail: 
2025-07-13T02:11:00.2314573Z    test_name=TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-07-13T02:11:00.2322446Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (5.34s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 35 minutes
- 2025-07-16 PASS 32 minutes
- 2025-07-17 PASS 32 minutes
- 2025-07-18 PASS 40 minutes
- 2025-07-19 PASS 31 minutes
- 2025-07-20 PASS 31 minutes
- 2025-07-21 PASS 30 minutes
- 2025-07-22 PASS 29 minutes
- 2025-07-23
  - PASS 27 minutes
  - PASS 36 minutes
  - PASS 28 minutes
  - PASS 30 minutes
- 2025-07-24 PASS 31 minutes
- 2025-07-25 PASS 34 minutes
- 2025-07-26 PASS 38 minutes
- 2025-07-27 PASS 40 minutes
- 2025-07-28 PASS 35 minutes
- 2025-07-29 PASS 39 minutes
- 2025-07-30 PASS 37 minutes
- 2025-07-31 PASS 55 minutes