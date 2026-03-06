# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1024.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 35 minutes
- 2026-02-06 PASS 35 minutes
- 2026-02-07 PASS 31 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 33 minutes
- 2026-02-10 PASS 34 minutes
- 2026-02-11 PASS 33 minutes
- 2026-02-12 PASS 30 minutes
- 2026-02-13 PASS 35 minutes
- 2026-02-14 PASS 36 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 38 minutes
- 2026-02-17 PASS 34 minutes
- 2026-02-18 PASS 36 minutes
- 2026-02-19 PASS 47 minutes
- 2026-02-20 PASS 31 minutes
- 2026-02-21 PASS 36 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 33 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6995790Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-24T00:40:00.5454282Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-24T00:40:05.5474719Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-24T00:40:05.5476390Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:05.546267523Z, ProjectID: 699cf2b48dfec41eaa8573f2, Cluster name: test-acc-tf-c-1727048584702435644
2026-02-24T00:57:01.5844665Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-24T00:57:01.5845456Z     resource_test.go:400: Step 1/5 error: Error running apply: exit status 1
2026-02-24T00:57:01.5845854Z         
2026-02-24T00:57:01.5846325Z         Error: Error in update advanced configuration
2026-02-24T00:57:01.5846634Z         
2026-02-24T00:57:01.5847106Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:01.5847904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:01.5848724Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:01.5849068Z         
2026-02-24T00:57:01.5849662Z         cluster name: test-acc-tf-c-1727048584702435644, API error details: (503
2026-02-24T00:57:01.5850348Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:01.6296557Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (1024.41s)
```

- 2026-02-25 PASS 34 minutes
- 2026-02-26 PASS 40 minutes
- 2026-02-27 PASS 34 minutes
- 2026-02-28 PASS 36 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 35 minutes
  - PASS 36 minutes
- 2026-03-03 PASS 39 minutes
- 2026-03-04 PASS 36 minutes
- 2026-03-05 PASS 47 minutes
- 2026-03-06 PASS 35 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 28 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 31 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 37 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 28 minutes
  - PASS 26 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 29 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 35 minutes
- 2026-03-02 PASS 27 minutes
- 2026-03-03 PASS 28 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
