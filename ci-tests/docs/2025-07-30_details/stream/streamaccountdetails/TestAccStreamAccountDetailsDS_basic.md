# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 03:31](#error-2025-07-14t0331520000) |  | dev | timeout | 10808.06s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-07-02 PASS 10 minutes
- 2025-07-03 PASS 12 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 11 minutes
- 2025-07-08 PASS 11 minutes
- 2025-07-09 PASS 12 minutes
- 2025-07-10
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-07-11 PASS 11 minutes
- 2025-07-12 PASS 12 minutes
- 2025-07-13 PASS 14 minutes
- 2025-07-14

### Error 2025-07-14T03:31:52+00:00
```
2025-07-14T03:31:52.1902171Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-07-14T03:31:52.1905470Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-6680730184829808510
2025-07-14T03:31:52.1906373Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-07-14T03:31:52.1907306Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:20.434405599Z, ProjectID: 68744fd1d81a2d4bb4ea4440, Cluster name: test-acc-tf-c-7421551092776994049
2025-07-14T03:31:52.1919127Z    test_working_directory=/tmp/plugintest2268766254 test_name=TestAccStreamAccountDetailsDS_basic
2025-07-14T03:31:52.1920348Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:52.1920967Z         
2025-07-14T03:31:52.1922197Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:52.1923288Z         
2025-07-14T03:31:52.1923892Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:52.1925113Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:52.1926237Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:52.1926803Z         
2025-07-14T03:31:52.1927213Z --- FAIL: TestAccStreamAccountDetailsDS_basic (10808.62s)
```

- 2025-07-15 PASS 13 minutes
- 2025-07-16 PASS 12 minutes
- 2025-07-17 PASS 13 minutes
- 2025-07-18 PASS 13 minutes
- 2025-07-19 PASS 12 minutes
- 2025-07-20 PASS 12 minutes
- 2025-07-21 PASS 11 minutes
- 2025-07-22 PASS 12 minutes
- 2025-07-23
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 12 minutes
- 2025-07-25 PASS 12 minutes
- 2025-07-26 PASS 15 minutes
- 2025-07-27 PASS 15 minutes
- 2025-07-28 PASS 13 minutes
- 2025-07-29 PASS 10 minutes
- 2025-07-30 PASS 12 minutes