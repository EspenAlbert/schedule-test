# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa |  | 1.07s
[2025-06-05 00:35](#error-2025-06-05t0035350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 5.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 10 seconds
- 2025-04-13 PASS 8 seconds
- 2025-04-14 PASS 9 seconds
- 2025-04-15 PASS 7 seconds
- 2025-04-16
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-04-17 PASS 8 seconds
- 2025-04-18 PASS 8 seconds
- 2025-04-19 PASS 7 seconds
- 2025-04-20 PASS 9 seconds
- 2025-04-21 PASS 7 seconds
- 2025-04-22 PASS 9 seconds
- 2025-04-23 PASS 8 seconds
- 2025-04-24 PASS 9 seconds
- 2025-04-25 PASS 7 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 8 seconds
- 2025-04-28 PASS 7 seconds
- 2025-04-29 PASS 7 seconds
- 2025-04-30 PASS 8 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-05-02 PASS 9 seconds
- 2025-05-03 PASS 7 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05 PASS 7 seconds
- 2025-05-06 PASS 10 seconds
- 2025-05-07 PASS 8 seconds
- 2025-05-08 PASS 7 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 7 seconds
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.6541488Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-05-11T00:30:11.3738697Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-05-11T00:30:13.0301199Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-05-11T00:30:13.0302763Z     resource_advanced_cluster_test.go:917: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-05-11T00:30:13.0303658Z         
2025-05-11T00:30:13.0304352Z         Error: error creating project: test-acc-tf-p-3875345375952152935
2025-05-11T00:30:13.0304938Z         
2025-05-11T00:30:13.0305505Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.0306659Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.0307712Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.0308240Z         
2025-05-11T00:30:13.0309039Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.0309729Z         type
2025-05-11T00:30:13.0694998Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-05-11T00:30:13.1032109Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (1.73s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-05-14 PASS 9 seconds
- 2025-05-15 PASS 8 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 8 seconds
- 2025-05-18 PASS 10 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 7 seconds
- 2025-05-21 PASS 7 seconds
- 2025-05-22 PASS 8 seconds
- 2025-05-23 PASS 8 seconds
- 2025-05-24 PASS 8 seconds
- 2025-05-25 PASS 7 seconds
- 2025-05-26 PASS 7 seconds
- 2025-05-27 PASS 7 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-05-29
  - PASS 7 seconds
  - PASS 10 seconds
- 2025-05-30
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-05-31 PASS 8 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-06-02
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-06-03 PASS 7 seconds
- 2025-06-04 PASS 8 seconds
- 2025-06-05

### Error 2025-06-05T00:35:35+00:00
```
2025-06-05T00:35:35.4290025Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-05T00:35:42.8425539Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-05T00:35:48.5691607Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2025-06-05T00:35:48.5693645Z     resource_advanced_cluster_test.go:920: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:35:48.5700582Z         
2025-06-05T00:35:48.5702089Z         Error: error creating project: test-acc-tf-p-5123459622129698789
2025-06-05T00:35:48.5703392Z         
2025-06-05T00:35:48.5704527Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:48.5707378Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:48.5710989Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:48.5711697Z         
2025-06-05T00:35:48.5712535Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:48.5713622Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:48.5714627Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:48.7726316Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (5.94s)
```

- 2025-06-06 PASS 9 seconds
- 2025-06-07 PASS 8 seconds
- 2025-06-08 PASS 8 seconds
- 2025-06-09 PASS 10 seconds
- 2025-06-10 PASS 8 seconds
- 2025-06-11
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-06-12 PASS 8 seconds
- 2025-06-13 PASS 8 seconds
- 2025-06-14 PASS 8 seconds
- 2025-06-15 PASS 8 seconds
- 2025-06-16 PASS 10 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-06-19 PASS 8 seconds
- 2025-06-20 PASS 9 seconds
- 2025-06-21 PASS 8 seconds
- 2025-06-22 PASS 7 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 9 seconds
- 2025-06-25 PASS 9 seconds
- 2025-06-26 PASS 8 seconds
- 2025-06-27 PASS 8 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29 PASS 33 seconds
- 2025-06-30 PASS 8 seconds
- 2025-07-01
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 9 seconds
- 2025-07-06 PASS 18 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10 PASS 8 seconds