# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-14 00:46](#error-2026-09-14t0046500000) |  | dev | timeout | 12178.03s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 2 hours
- 2026-09-09 PASS 2 hours
- 2026-09-10 PASS 2 hours
- 2026-09-11
  - PASS 3 hours
  - PASS 45 minutes
- 2026-09-12 PASS an hour
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:46:50+00:00
```
2026-09-14T00:46:50.1568839Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-09-14T00:46:54.4312184Z     resource_test.go:657: Adding variable groupId=6aa743faaf6488f3aa95c43f
2026-09-14T00:46:54.4313397Z     resource_test.go:657: Adding variable clusterName=test-acc-tf-c-1274916063974697245
2026-09-14T00:48:26.8249685Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-09-14T01:06:39.0995018Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-09-14T01:06:39.0996379Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5147866086397938731
2026-09-14T01:06:39.3214011Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5212964804887461533
2026-09-14T01:06:39.8141304Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-5876250845882408587
2026-09-14T04:06:47.9502431Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-09-14T04:06:47.9503201Z     resource_test.go:657: Step 2/3 error: Error running apply: exit status 1
2026-09-14T04:06:47.9503645Z         
2026-09-14T04:06:47.9504047Z         Error: Error in update
2026-09-14T04:06:47.9504458Z         
2026-09-14T04:06:47.9505053Z           with mongodbatlas_advanced_cluster.test,
2026-09-14T04:06:47.9505805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-14T04:06:47.9506492Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-14T04:06:47.9506851Z         
2026-09-14T04:06:47.9507355Z         cluster=test-acc-tf-c-1274916063974697245 didn't reach desired state: IDLE,
2026-09-14T04:06:47.9508047Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-09-14T04:06:47.9508748Z         'UPDATING', timeout: 3h0m0s)
2026-09-14T04:08:42.7020225Z   
2026-09-14T04:11:20.2769384Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (12178.32s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS an hour
- 2026-09-14: MISSING
