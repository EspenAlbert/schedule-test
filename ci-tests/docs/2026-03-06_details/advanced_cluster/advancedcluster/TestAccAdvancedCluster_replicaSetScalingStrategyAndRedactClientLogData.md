# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 1425.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 41 minutes
- 2026-02-06 PASS 41 minutes
- 2026-02-07 PASS 39 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 39 minutes
- 2026-02-10 PASS 40 minutes
- 2026-02-11 PASS 40 minutes
- 2026-02-12 PASS 41 minutes
- 2026-02-13 PASS 38 minutes
- 2026-02-14 PASS 41 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 40 minutes
- 2026-02-17 PASS 39 minutes
- 2026-02-18 PASS 43 minutes
- 2026-02-19 PASS 53 minutes
- 2026-02-20 PASS 44 minutes
- 2026-02-21 PASS 42 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 41 minutes
- 2026-02-24

### Error 2026-02-24T00:37:14+00:00
```
2026-02-24T00:37:14.8703046Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-24T00:40:00.5486507Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-24T01:00:42.1702034Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-02-24T01:00:42.1703042Z     resource_test.go:762: Step 2/5 error: Error running apply: exit status 1
2026-02-24T01:00:42.1703444Z         
2026-02-24T01:00:42.1703897Z         Error: Error in update
2026-02-24T01:00:42.1704318Z         
2026-02-24T01:00:42.1704911Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:00:42.1705760Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:00:42.1706545Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:00:42.1707105Z         
2026-02-24T01:00:42.1707669Z         cluster name: test-acc-tf-c-2821031225331815425, API error details: (503
2026-02-24T01:00:42.1708347Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:03:46.2895976Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1425.75s)
```

- 2026-02-25 PASS 40 minutes
- 2026-02-26 PASS 44 minutes
- 2026-02-27 PASS 40 minutes
- 2026-02-28 PASS 44 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 40 minutes
  - PASS 45 minutes
- 2026-03-03 PASS 41 minutes
- 2026-03-04 PASS 43 minutes
- 2026-03-05 PASS 53 minutes
- 2026-03-06 PASS 49 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 31 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 31 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 35 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 32 minutes
  - PASS 32 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 33 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 34 minutes
- 2026-03-02 PASS 31 minutes
- 2026-03-03 PASS 33 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
