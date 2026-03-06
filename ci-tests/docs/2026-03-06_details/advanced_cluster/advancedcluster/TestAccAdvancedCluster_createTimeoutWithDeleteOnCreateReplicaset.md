# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037170000) |  | dev | flaky_500 | 1307.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 20 minutes
- 2026-02-18 PASS 24 minutes
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:37:17+00:00
```
2026-02-24T00:37:17.1466553Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-24T00:40:00.5491446Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-24T00:57:41.7375223Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-24T00:57:41.7375886Z     resource_test.go:1067: Step 2/6 error: Error running apply: exit status 1
2026-02-24T00:57:41.7376276Z         
2026-02-24T00:57:41.7376596Z         Error: error reading advanced cluster list
2026-02-24T00:57:41.7376888Z         
2026-02-24T00:57:41.7377266Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:41.7378157Z           on terraform_plugin_test.tf line 48, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:41.7378772Z           48: 	data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:41.7379081Z         
2026-02-24T00:57:41.7379673Z         project ID 699cf2bb8dfec41eaa859d9c. Error (503 Service Unavailable) failed
2026-02-24T00:57:41.7380240Z         to decode response body: undefined response type
2026-02-24T00:57:55.1779418Z    test_working_directory=/tmp/plugintest3119289624 test_name=TestAccClusterAdvancedCluster_pausedToUnpaused test_terraform_path=/home/runner/work/_temp/5c6ed455-a3dd-498c-9d5a-daa41eb22591/terraform test_step_number=1
2026-02-24T01:01:48.0728893Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1307.53s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 43 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 19 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 18 minutes
  - PASS 19 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04 PASS 21 minutes
- 2026-03-05 PASS 28 minutes
- 2026-03-06 PASS 20 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 22 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 26 minutes
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
