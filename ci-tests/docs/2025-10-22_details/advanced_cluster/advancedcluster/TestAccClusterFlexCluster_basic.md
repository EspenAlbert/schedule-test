# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-29 00:29](#error-2025-09-29t0029080000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev | 73.05s
[2025-10-01 00:28](#error-2025-10-01t0028360000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev | 84.07s
[2025-10-17 00:29](#error-2025-10-17t0029390000) |  | dev | 100.09s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29
  - FAIL a minute

### Error 2025-09-29T00:29:08+00:00
```
2025-09-29T00:29:08.1732142Z === RUN   TestAccClusterFlexCluster_basic
2025-09-29T00:29:08.1732794Z     resource_test.go:2842: Creating execution project: test-acc-tf-p-2893919006889611217
2025-09-29T00:29:20.2570412Z   
2025-09-29T00:29:20.2571678Z     resource_test.go:2846: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-29T00:29:20.2573220Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-29T00:29:20.2575087Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-29T00:29:20.2576430Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-29T00:29:20.2577524Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-29T00:30:21.7030981Z --- FAIL: TestAccClusterFlexCluster_basic (73.53s)
```

  - PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - FAIL a minute

### Error 2025-10-01T00:28:36+00:00
```
2025-10-01T00:28:36.2797673Z === RUN   TestAccClusterFlexCluster_basic
2025-10-01T00:28:36.2798577Z     resource_test.go:2842: Creating execution project: test-acc-tf-p-1770956471362962901
2025-10-01T00:28:49.2790684Z   
2025-10-01T00:28:49.2791667Z     resource_test.go:2846: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:49.2793078Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:49.2794791Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T00:28:49.2796102Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:49.2797116Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T00:30:01.0202397Z --- FAIL: TestAccClusterFlexCluster_basic (84.74s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS 6 minutes
- 2025-10-02 PASS a minute
- 2025-10-03 PASS a minute
- 2025-10-04 PASS a minute
- 2025-10-05 PASS a minute
- 2025-10-06 PASS a minute
- 2025-10-07 PASS 2 minutes
- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 7 minutes
- 2025-10-10 PASS 5 minutes
- 2025-10-11 PASS 2 minutes
- 2025-10-12 PASS a minute
- 2025-10-13 PASS a minute
- 2025-10-14 PASS a minute
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17

### Error 2025-10-17T00:29:39+00:00
```
2025-10-17T00:29:39.7311746Z === RUN   TestAccClusterFlexCluster_basic
2025-10-17T00:29:39.7312898Z     resource_test.go:2844: Creating execution project: test-acc-tf-p-3599596926009982833
2025-10-17T00:29:57.1861167Z   
2025-10-17T00:29:57.1861675Z     resource_test.go:2848: Step 2/4 error: Error running apply: exit status 1
2025-10-17T00:29:57.1862061Z         
2025-10-17T00:29:57.1862493Z         Error: error updating flex cluster: test-acc-tf-c-409123650282560446
2025-10-17T00:29:57.1862854Z         
2025-10-17T00:29:57.1863186Z           with mongodbatlas_advanced_cluster.test,
2025-10-17T00:29:57.1863838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-17T00:29:57.1864434Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-17T00:29:57.1864749Z         
2025-10-17T00:29:57.1865487Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f18df365803f65491170f2/flexClusters/test-acc-tf-c-409123650282560446
2025-10-17T00:29:57.1866164Z         PATCH: HTTP 403 Forbidden (Error code:
2025-10-17T00:29:57.1866671Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-17T00:29:57.1867270Z         Configuration. Contains selections that are unavailable due to your
2025-10-17T00:29:57.1867855Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-17T00:29:57.1868260Z         BadRequestDetail: 
2025-10-17T00:31:20.6430662Z --- FAIL: TestAccClusterFlexCluster_basic (100.91s)
```

- 2025-10-18 PASS a minute
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS a minute
  - PASS a minute