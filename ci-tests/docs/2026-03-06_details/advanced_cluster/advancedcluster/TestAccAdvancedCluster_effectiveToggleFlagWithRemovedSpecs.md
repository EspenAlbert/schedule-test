# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037040000) |  | dev | flaky_500 | 1486.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS an hour
- 2026-02-06 PASS 52 minutes
- 2026-02-07 PASS 49 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 52 minutes
- 2026-02-10 PASS 59 minutes
- 2026-02-11 PASS 48 minutes
- 2026-02-12 PASS 57 minutes
- 2026-02-13 PASS 48 minutes
- 2026-02-14 PASS 53 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 50 minutes
- 2026-02-17 PASS 53 minutes
- 2026-02-18 PASS 50 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS 52 minutes
- 2026-02-21 PASS 53 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 49 minutes
- 2026-02-24

### Error 2026-02-24T00:37:04+00:00
```
2026-02-24T00:37:04.0522649Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-24T00:40:00.6168932Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-24T01:01:13.4004591Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-24T01:01:13.4005401Z     effective_fields_test.go:289: Step 2/6 error: Error running apply: exit status 1
2026-02-24T01:01:13.4005937Z         
2026-02-24T01:01:13.4006208Z         Error: Error in update
2026-02-24T01:01:13.4006567Z         
2026-02-24T01:01:13.4006912Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:01:13.4007762Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:01:13.4008609Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:01:13.4008939Z         
2026-02-24T01:01:13.4009430Z         cluster name: test-acc-tf-c-6890318181181703781, API error details: (503
2026-02-24T01:01:13.4010109Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:04:47.1400005Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (1486.55s)
```

- 2026-02-25 PASS 51 minutes
- 2026-02-26 PASS an hour
- 2026-02-27 PASS 52 minutes
- 2026-02-28 PASS 55 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 49 minutes
  - PASS 45 minutes
- 2026-03-03 PASS 55 minutes
- 2026-03-04 PASS 48 minutes
- 2026-03-05 PASS an hour
- 2026-03-06 PASS 56 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 45 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 43 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 49 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 38 minutes
  - PASS 38 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 43 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 55 minutes
- 2026-03-02 PASS 36 minutes
- 2026-03-03 PASS 47 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
