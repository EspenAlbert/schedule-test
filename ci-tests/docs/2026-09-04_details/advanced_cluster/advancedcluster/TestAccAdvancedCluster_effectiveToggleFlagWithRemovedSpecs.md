# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) TIMEOUT
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-11 00:27](#error-2026-08-11t0027420000) |  | dev | timeout | 17896.00s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 46 minutes
- 2026-08-07 PASS 51 minutes
- 2026-08-08 PASS an hour
- 2026-08-09: MISSING
- 2026-08-10 PASS an hour
- 2026-08-11

### Error 2026-08-11T00:27:42+00:00
```
2026-08-11T00:27:42.3297891Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-08-11T00:29:20.0225234Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-08-11T03:50:52.2694018Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-08-11T03:50:52.2695131Z     effective_fields_test.go:289: Step 4/6 error: Error running apply: exit status 1
2026-08-11T03:50:52.2696436Z         
2026-08-11T03:50:52.2696912Z         Error: Error in update
2026-08-11T03:50:52.2697372Z         
2026-08-11T03:50:52.2697746Z           with mongodbatlas_advanced_cluster.test,
2026-08-11T03:50:52.2698469Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-11T03:50:52.2699449Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-11T03:50:52.2699856Z         
2026-08-11T03:50:52.2700345Z         cluster=test-acc-tf-c-4852343402847978816 didn't reach desired state: IDLE,
2026-08-11T03:50:52.2701009Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-08-11T03:50:52.2701476Z         'UPDATING', timeout: 3h0m0s)
2026-08-11T05:27:35.4914570Z panic: test timed out after 5h0m0s
2026-08-11T05:27:35.4915319Z 	running tests:
2026-08-11T05:27:35.4914570Z panic: test timed out after 5h0m0s
2026-08-11T05:27:35.4915319Z 	running tests:
2026-08-11T05:27:35.4916487Z 		TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (4h58m16s)
```

- 2026-08-12 PASS 51 minutes
- 2026-08-13 PASS 57 minutes
- 2026-08-14 PASS an hour
- 2026-08-15 PASS 58 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 55 minutes
- 2026-08-18 PASS 57 minutes
- 2026-08-19 PASS 58 minutes
- 2026-08-20 PASS 57 minutes
- 2026-08-21 PASS 48 minutes
- 2026-08-22 PASS 59 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS an hour
- 2026-08-25 PASS 58 minutes
- 2026-08-26 PASS 54 minutes
- 2026-08-27 PASS an hour
- 2026-08-28 PASS an hour
- 2026-08-29 PASS 58 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS an hour
- 2026-09-01 PASS an hour
- 2026-09-02 PASS 48 minutes
- 2026-09-03
  - PASS 59 minutes
  - PASS 53 minutes
- 2026-09-04 PASS an hour

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 55 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 57 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 49 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 46 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 55 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 54 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
