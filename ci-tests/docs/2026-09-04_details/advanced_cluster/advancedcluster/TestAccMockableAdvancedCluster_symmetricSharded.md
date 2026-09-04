# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 03:09](#error-2026-08-28t0309080000) |  | dev | timeout | 14329.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS an hour
- 2026-08-08 PASS an hour
- 2026-08-09: MISSING
- 2026-08-10 PASS 2 hours
- 2026-08-11 PASS an hour
- 2026-08-12 PASS an hour
- 2026-08-13 PASS 2 hours
- 2026-08-14 PASS 2 hours
- 2026-08-15 PASS an hour
- 2026-08-16: MISSING
- 2026-08-17 PASS an hour
- 2026-08-18 PASS an hour
- 2026-08-19 PASS an hour
- 2026-08-20 PASS an hour
- 2026-08-21 PASS an hour
- 2026-08-22 PASS an hour
- 2026-08-23: MISSING
- 2026-08-24 PASS an hour
- 2026-08-25 PASS an hour
- 2026-08-26 PASS 2 hours
- 2026-08-27 PASS 2 hours
- 2026-08-28

### Error 2026-08-28T03:09:08+00:00
```
2026-08-28T03:09:08.6873338Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-08-28T03:09:11.5304219Z     resource_test.go:657: Adding variable clusterName=test-acc-tf-c-644290960122268704
2026-08-28T03:09:11.5305072Z     resource_test.go:657: Adding variable groupId=6a90fbd463fde9550ed2f095
2026-08-28T03:10:51.2612468Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-08-28T04:05:55.4267400Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-08-28T04:05:55.4268905Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-4754006381139244567
2026-08-28T07:06:03.9036664Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-08-28T07:06:03.9037474Z     resource_test.go:657: Step 2/3 error: Error running apply: exit status 1
2026-08-28T07:06:03.9037911Z         
2026-08-28T07:06:03.9038188Z         Error: Error in update
2026-08-28T07:06:03.9038754Z         
2026-08-28T07:06:03.9039233Z           with mongodbatlas_advanced_cluster.test,
2026-08-28T07:06:03.9040319Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-28T07:06:03.9041125Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-28T07:06:03.9041516Z         
2026-08-28T07:06:03.9042005Z         cluster=test-acc-tf-c-644290960122268704 didn't reach desired state: IDLE,
2026-08-28T07:06:03.9042662Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-08-28T07:06:03.9043148Z         'UPDATING', timeout: 3h0m0s)
2026-08-28T07:09:38.1598625Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (14329.74s)
```

- 2026-08-29 PASS an hour
- 2026-08-30: MISSING
- 2026-08-31 PASS 2 hours
- 2026-09-01 PASS 2 hours
- 2026-09-02 PASS 3 hours
- 2026-09-03
  - PASS 2 hours
  - PASS an hour
- 2026-09-04 PASS an hour

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS an hour
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS an hour
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS an hour
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS an hour
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS an hour
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS an hour
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
