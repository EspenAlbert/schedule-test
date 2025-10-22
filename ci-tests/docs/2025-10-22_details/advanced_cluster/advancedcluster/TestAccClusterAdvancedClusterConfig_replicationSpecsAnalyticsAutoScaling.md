# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455040000) |  | dev | flaky_500 | 855.00s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 42 minutes
- 2025-09-24 PASS 43 minutes
- 2025-09-25 PASS 45 minutes
- 2025-09-26 PASS 42 minutes
- 2025-09-27 PASS 40 minutes
- 2025-09-28 PASS 41 minutes
- 2025-09-29
  - PASS 53 minutes
  - PASS 36 minutes
- 2025-09-30
  - PASS 40 minutes
  - PASS 34 minutes
  - PASS 39 minutes
  - PASS 36 minutes
  - PASS 35 minutes
- 2025-10-01
  - PASS 37 minutes
  - PASS 37 minutes
  - FAIL 14 minutes

### Error 2025-10-01T04:55:04+00:00
```
2025-10-01T04:55:04.4377544Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T04:56:43.0271244Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T04:57:18.0258003Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T04:57:18.0259516Z     pre_check.go:32: Time before creating cluster: 2025-10-01T04:57:18.025544792Z, ProjectID: 68dcb4265a2f964500207a8d, Cluster name: test-acc-tf-c-2358792650513533875
2025-10-01T05:10:57.9892404Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-01T05:10:57.9893311Z     resource_test.go:510: Step 2/5 error: Error running apply: exit status 1
2025-10-01T05:10:57.9893874Z         
2025-10-01T05:10:57.9894242Z         Error: Error in create
2025-10-01T05:10:57.9894488Z         
2025-10-01T05:10:57.9895119Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T05:10:57.9895796Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T05:10:57.9896570Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T05:10:57.9897007Z         
2025-10-01T05:10:57.9897436Z         cluster name: test-acc-tf-c-3704037308090443119, API error details: (503
2025-10-01T05:10:57.9898080Z         Service Unavailable) failed to decode response body: undefined response type
2025-10-01T05:10:58.0346485Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (855.01s)
```

  - PASS 34 minutes
  - PASS 46 minutes
  - PASS 36 minutes
  - PASS 53 minutes
  - PASS 33 minutes
- 2025-10-02 PASS 55 minutes
- 2025-10-03 PASS 38 minutes
- 2025-10-04 PASS 40 minutes
- 2025-10-05 PASS 34 minutes
- 2025-10-06 PASS an hour
- 2025-10-07 PASS 2 hours
- 2025-10-08 PASS 2 hours
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 43 minutes
- 2025-10-11 PASS 51 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 51 minutes
- 2025-10-14 PASS 40 minutes
- 2025-10-15 PASS 38 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 41 minutes
- 2025-10-18 PASS 37 minutes
- 2025-10-19 PASS 42 minutes
- 2025-10-20
  - PASS 50 minutes
  - PASS 35 minutes
- 2025-10-21 PASS 36 minutes
- 2025-10-22
  - PASS 41 minutes
  - PASS 35 minutes