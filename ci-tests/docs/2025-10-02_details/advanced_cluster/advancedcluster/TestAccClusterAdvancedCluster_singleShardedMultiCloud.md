# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455020000) |  | dev | flaky_500 | 853.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 54 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 54 minutes
- 2025-09-07 PASS 39 minutes
- 2025-09-08
  - PASS 53 minutes
  - PASS 46 minutes
  - PASS 50 minutes
- 2025-09-09 PASS 55 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 56 minutes
- 2025-09-20 PASS 57 minutes
- 2025-09-21 PASS 52 minutes
- 2025-09-22 PASS 54 minutes
- 2025-09-23 PASS 54 minutes
- 2025-09-24 PASS 56 minutes
- 2025-09-25 PASS 57 minutes
- 2025-09-26 PASS 55 minutes
- 2025-09-27 PASS 41 minutes
- 2025-09-28 PASS 47 minutes
- 2025-09-29
  - PASS 59 minutes
  - PASS 36 minutes
- 2025-09-30
  - PASS 39 minutes
  - PASS 35 minutes
  - PASS 43 minutes
  - PASS 35 minutes
  - PASS 34 minutes
- 2025-10-01
  - PASS 41 minutes
  - PASS 33 minutes
  - FAIL 14 minutes

### Error 2025-10-01T04:55:02+00:00
```
2025-10-01T04:55:02.4691717Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-01T04:56:43.0209124Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-01T05:10:56.0028035Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-10-01T05:10:56.0029010Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2025-10-01T05:10:56.0029625Z         
2025-10-01T05:10:56.0030128Z         Error: error resolving container IDs
2025-10-01T05:10:56.0030580Z         
2025-10-01T05:10:56.0030996Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T05:10:56.0031886Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T05:10:56.0032525Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T05:10:56.0032960Z         
2025-10-01T05:10:56.0033485Z         cluster name = test-acc-tf-c-1379291682237294445, error details: (503 Service
2025-10-01T05:10:56.0034625Z         Unavailable) failed to decode response body: undefined response type
2025-10-01T05:10:56.0509191Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (853.03s)
```

  - PASS 33 minutes
  - PASS 58 minutes
  - PASS 38 minutes
  - PASS an hour
  - PASS 40 minutes
- 2025-10-02 PASS 51 minutes