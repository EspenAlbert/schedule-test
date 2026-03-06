# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1031.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 45 minutes
- 2026-02-06 PASS 46 minutes
- 2026-02-07 PASS 40 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 45 minutes
- 2026-02-10 PASS 43 minutes
- 2026-02-11 PASS 44 minutes
- 2026-02-12 PASS 44 minutes
- 2026-02-13 PASS 41 minutes
- 2026-02-14 PASS 45 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 44 minutes
- 2026-02-17 PASS 45 minutes
- 2026-02-18 PASS 47 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS 49 minutes
- 2026-02-21 PASS 45 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 47 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6993689Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-02-24T00:40:00.5502827Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2026-02-24T00:40:15.5528461Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-02-24T00:40:15.5530088Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:15.552585417Z, ProjectID: 699cf2b18dfec41eaa8533ad, Cluster name: test-acc-tf-c-2469782469584412203
2026-02-24T00:57:12.3597300Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-02-24T00:57:12.3598112Z     resource_test.go:322: Step 1/4 error: Error running apply: exit status 1
2026-02-24T00:57:12.3598589Z         
2026-02-24T00:57:12.3599028Z         Error: Error in update advanced configuration
2026-02-24T00:57:12.3599551Z         
2026-02-24T00:57:12.3600076Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:12.3600771Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:12.3601420Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:12.3601743Z         
2026-02-24T00:57:12.3602197Z         cluster name: test-acc-tf-c-2469782469584412203, API error details: (503
2026-02-24T00:57:12.3603176Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:12.4024313Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (1031.85s)
```

- 2026-02-25 PASS 48 minutes
- 2026-02-26 PASS 58 minutes
- 2026-02-27 PASS 48 minutes
- 2026-02-28 PASS 48 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 42 minutes
  - PASS 47 minutes
- 2026-03-03 PASS 48 minutes
- 2026-03-04 PASS 45 minutes
- 2026-03-05 PASS an hour
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 34 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 39 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 43 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 39 minutes
  - PASS 32 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 38 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 43 minutes
- 2026-03-02 PASS 32 minutes
- 2026-03-03 PASS 34 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
