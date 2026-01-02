# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutFlex Test Details
# Found 34 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-10 17:18](#error-2025-12-10t1718110000) |  | dev | timeout | 21.09s
[2025-12-18 00:29](#error-2025-12-18t0029400000) |  | dev | timeout | 22.02s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04
  - PASS 21 seconds
  - PASS 22 seconds
  - PASS 17 seconds
- 2025-12-05 PASS 8 minutes
- 2025-12-06 PASS 16 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 21 seconds
- 2025-12-09 PASS 16 seconds
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

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 21 seconds
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 20 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 14 seconds
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
