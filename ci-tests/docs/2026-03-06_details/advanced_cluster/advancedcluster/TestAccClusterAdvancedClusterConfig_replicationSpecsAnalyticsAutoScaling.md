# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037120000) |  | dev | flaky_500 | 1208.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 53 minutes
- 2026-02-06 PASS 55 minutes
- 2026-02-07 PASS 46 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 48 minutes
- 2026-02-10 PASS 50 minutes
- 2026-02-11 PASS 47 minutes
- 2026-02-12 PASS 50 minutes
- 2026-02-13 PASS 54 minutes
- 2026-02-14 PASS 51 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 51 minutes
- 2026-02-17 PASS 52 minutes
- 2026-02-18 PASS 55 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS 53 minutes
- 2026-02-21 PASS 49 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 49 minutes
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0233984Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-24T00:40:00.5695097Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-24T00:41:00.5584526Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-24T00:41:00.5586409Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:41:00.558156656Z, ProjectID: 699cf2b48dfec41eaa8573f2, Cluster name: test-acc-tf-c-698317663280707710
2026-02-24T01:00:08.9612223Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-02-24T01:00:08.9613829Z     resource_test.go:459: Step 2/5 error: Error running apply: exit status 1
2026-02-24T01:00:08.9614237Z         
2026-02-24T01:00:08.9614616Z         Error: Error in create
2026-02-24T01:00:08.9614871Z         
2026-02-24T01:00:08.9615321Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:00:08.9616151Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:00:08.9617051Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:00:08.9617398Z         
2026-02-24T01:00:08.9617858Z         cluster name: test-acc-tf-c-3944410719245240085, API error details: (503
2026-02-24T01:00:08.9618548Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:00:09.0091538Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (1208.44s)
```

- 2026-02-25 PASS 49 minutes
- 2026-02-26 PASS an hour
- 2026-02-27 PASS 47 minutes
- 2026-02-28 PASS 50 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 48 minutes
  - PASS 49 minutes
- 2026-03-03 PASS 53 minutes
- 2026-03-04 PASS 48 minutes
- 2026-03-05 PASS an hour
- 2026-03-06 PASS 49 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 38 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 42 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 47 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 40 minutes
  - PASS 43 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 44 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 48 minutes
- 2026-03-02 PASS 37 minutes
- 2026-03-03 PASS 39 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
