# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutFlex Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-10 17:18](#error-2025-12-10t1718110000) |  | dev | timeout | 21.09s
[2025-12-18 00:29](#error-2025-12-18t0029400000) |  | dev | timeout | 22.02s
[2026-01-07 00:31](#error-2026-01-07t0031160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters | dev | flaky_500 | 6.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 24 seconds
  - FAIL 21 seconds

### Error 2025-12-10T17:18:11+00:00
```
2025-12-10T17:18:11.7467110Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-12-10T17:18:11.7473820Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-12-10T17:18:32.0190534Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-12-10T17:18:32.0191460Z     resource_test.go:2976: Step 2/4, expected an error but got none
2025-12-10T17:18:33.6439828Z   
2025-12-10T17:18:33.6440357Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-10T17:18:33.6440816Z         
2025-12-10T17:18:33.6441089Z         Error: Error in flex delete
2025-12-10T17:18:33.6441358Z         
2025-12-10T17:18:33.6441795Z         cluster name: test-acc-tf-3590554558763001891, API error details: timeout
2025-12-10T17:18:33.6442429Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-12-10T17:18:33.6442831Z         1s)
2025-12-10T17:18:33.6443143Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (21.93s)
```

- 2025-12-11 PASS 15 seconds
- 2025-12-12 PASS 23 seconds
- 2025-12-13 PASS 31 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 20 seconds
- 2025-12-16 PASS 22 seconds
- 2025-12-17 PASS 23 seconds
- 2025-12-18

### Error 2025-12-18T00:29:40+00:00
```
2025-12-18T00:29:40.9580009Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-12-18T00:29:40.9638778Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-12-18T00:30:01.1492131Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-12-18T00:30:01.1493059Z     resource_test.go:2976: Step 2/4, expected an error but got none
2025-12-18T00:30:03.1142837Z    test_name=TestAccAdvancedCluster_updateDeleteTimeoutFlex test_terraform_path=/home/runner/work/_temp/201d1d2b-118e-4336-8706-11361779ef6f/terraform test_working_directory=/tmp/plugintest3885495979
2025-12-18T00:30:03.1144041Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-18T00:30:03.1144506Z         
2025-12-18T00:30:03.1144770Z         Error: Error in flex delete
2025-12-18T00:30:03.1145029Z         
2025-12-18T00:30:03.1145465Z         cluster name: test-acc-tf-937377888759543568, API error details: timeout
2025-12-18T00:30:03.1146110Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-12-18T00:30:03.1146495Z         1s)
2025-12-18T00:30:03.1146811Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (22.16s)
```

- 2025-12-19 PASS 23 seconds
- 2025-12-20 PASS 21 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 23 seconds
- 2025-12-23 PASS 22 seconds
- 2025-12-24 PASS 21 seconds
- 2025-12-25 PASS 20 seconds
- 2025-12-26 PASS 21 seconds
- 2025-12-27 PASS 22 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 22 seconds
- 2025-12-31 PASS 37 seconds
- 2026-01-01 PASS 35 seconds
- 2026-01-02 PASS 37 seconds
- 2026-01-03 PASS 30 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 39 seconds
- 2026-01-06 PASS 35 seconds
- 2026-01-07

### Error 2026-01-07T00:31:16+00:00
```
2026-01-07T00:31:16.8342013Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2026-01-07T00:31:16.8347668Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2026-01-07T00:31:23.5270467Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2026-01-07T00:31:23.5271729Z     resource_test.go:2976: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:31:23.5272747Z         
2026-01-07T00:31:23.5274603Z         Error: error creating flex cluster: Cluster name test-acc-tf-2160400029507130421 (project_id=695da932af4f6cc389e80b8c).
2026-01-07T00:31:23.5275597Z         
2026-01-07T00:31:23.5276176Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:23.5277749Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:23.5279084Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:23.5290969Z         
2026-01-07T00:31:23.5292670Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/flexClusters
2026-01-07T00:31:23.5293905Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:23.5294872Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:23.5295566Z         BadRequestDetail: 
2026-01-07T00:31:23.6675693Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (6.83s)
```

- 2026-01-08 PASS 30 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 17 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 21 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 29 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 seconds
