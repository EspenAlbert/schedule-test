# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveSetToUnset Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1185.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 17 minutes
- 2026-02-07 PASS 15 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 17 minutes
- 2026-02-13 PASS 19 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 19 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 18 minutes
- 2026-02-19 PASS 25 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 16 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5610632Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-02-24T00:40:00.6209473Z === CONT  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-24T00:56:30.9342166Z === NAME  TestAccAdvancedCluster_effectiveSetToUnset
2026-02-24T00:56:30.9343294Z     effective_fields_test.go:58: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:56:30.9343728Z         
2026-02-24T00:56:30.9344191Z         Error: error reading Advanced Configuration
2026-02-24T00:56:30.9344508Z         
2026-02-24T00:56:30.9344869Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:56:30.9345599Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:56:30.9346452Z           45: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:56:30.9346775Z         
2026-02-24T00:56:30.9347219Z         cluster name: test-acc-tf-c-2562109235208182520, API error details: (503
2026-02-24T00:56:30.9347886Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:59:45.8978686Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (1185.29s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 25 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 19 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 18 minutes
  - PASS 17 minutes
- 2026-03-03 PASS 20 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 26 minutes
- 2026-03-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 18 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 12 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 28 minutes
- 2026-03-02 PASS 12 minutes
- 2026-03-03 PASS 19 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
