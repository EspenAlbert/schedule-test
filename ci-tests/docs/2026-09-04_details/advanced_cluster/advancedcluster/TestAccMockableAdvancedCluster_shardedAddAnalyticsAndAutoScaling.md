# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) TIMEOUT
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 00:33](#error-2026-08-14t0033480000) |  | dev | timeout | 17899.00s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 23 minutes
- 2026-08-07 PASS 23 minutes
- 2026-08-08 PASS 23 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 24 minutes
- 2026-08-11 PASS 24 minutes
- 2026-08-12 PASS 26 minutes
- 2026-08-13 PASS 25 minutes
- 2026-08-14

### Error 2026-08-14T00:33:48+00:00
```
2026-08-14T00:33:48.0501269Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-08-14T00:33:48.1328961Z     resource_test.go:1039: Adding variable groupId=6a7e626833ce881fa886ce65
2026-08-14T00:33:48.1330202Z     resource_test.go:1039: Adding variable clusterName=test-acc-tf-c-3074804527707217517
2026-08-14T00:35:08.9847093Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-08-14T00:44:51.7203119Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-08-14T00:44:51.7205283Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6922719596181845672
2026-08-14T00:44:52.1732314Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6502996347436947324
2026-08-14T00:44:52.7298038Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8246318004866084018
2026-08-14T03:45:02.2640949Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-08-14T03:45:02.2641823Z     resource_test.go:1039: Step 2/4 error: Error running apply: exit status 1
2026-08-14T03:45:02.2642376Z         
2026-08-14T03:45:02.2642890Z         Error: Error in update
2026-08-14T03:45:02.2643255Z         
2026-08-14T03:45:02.2643608Z           with mongodbatlas_advanced_cluster.test,
2026-08-14T03:45:02.2644480Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-14T03:45:02.2645127Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-08-14T03:45:02.2645467Z         
2026-08-14T03:45:02.2646238Z         cluster=test-acc-tf-c-3074804527707217517 didn't reach desired state: IDLE,
2026-08-14T03:45:02.2646937Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-08-14T03:45:02.2647405Z         'UPDATING', timeout: 3h0m0s)
2026-08-14T05:33:28.0154922Z panic: test timed out after 5h0m0s
2026-08-14T05:33:28.0155812Z 	running tests:
2026-08-14T05:33:28.0154922Z panic: test timed out after 5h0m0s
2026-08-14T05:33:28.0155812Z 	running tests:
2026-08-14T05:33:28.0157273Z 		TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (4h58m19s)
```

- 2026-08-15 PASS 28 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 24 minutes
- 2026-08-18 PASS 30 minutes
- 2026-08-19 PASS 25 minutes
- 2026-08-20 PASS 26 minutes
- 2026-08-21 PASS 25 minutes
- 2026-08-22 PASS 24 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 24 minutes
- 2026-08-25 PASS 25 minutes
- 2026-08-26 PASS an hour
- 2026-08-27 PASS 49 minutes
- 2026-08-28 PASS 32 minutes
- 2026-08-29 PASS 24 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 31 minutes
- 2026-09-01 PASS 27 minutes
- 2026-09-02 PASS 30 minutes
- 2026-09-03
  - PASS 24 minutes
  - PASS 25 minutes
- 2026-09-04 PASS 37 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 24 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 24 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 24 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 23 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 23 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 23 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
