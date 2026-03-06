# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037120000) |  | dev | flaky_500 | 1377.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 23 minutes
- 2026-02-07 PASS 19 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 22 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 21 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 23 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 22 minutes
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0238573Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-02-24T00:40:00.5693250Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-02-24T00:59:24.1393129Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-02-24T00:59:24.1393821Z     resource_test.go:534: Step 2/4 error: Error running apply: exit status 1
2026-02-24T00:59:24.1394322Z         
2026-02-24T00:59:24.1394581Z         Error: Error in update
2026-02-24T00:59:24.1395063Z         
2026-02-24T00:59:24.1395469Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:59:24.1396391Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:59:24.1397031Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:59:24.1397354Z         
2026-02-24T00:59:24.1397790Z         cluster name: test-acc-tf-c-4892938807642230050, API error details: (503
2026-02-24T00:59:24.1398452Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:59:24.8340496Z    test_terraform_path=/home/runner/work/_temp/5c6ed455-a3dd-498c-9d5a-daa41eb22591/terraform test_working_directory=/tmp/plugintest2897544726 test_step_number=1 test_name=TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-24T01:02:58.4833162Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1377.92s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 32 minutes
- 2026-02-27 PASS 22 minutes
- 2026-02-28 PASS 21 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 20 minutes
  - PASS 21 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04 PASS 22 minutes
- 2026-03-05 PASS 26 minutes
- 2026-03-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 21 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 23 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 21 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
