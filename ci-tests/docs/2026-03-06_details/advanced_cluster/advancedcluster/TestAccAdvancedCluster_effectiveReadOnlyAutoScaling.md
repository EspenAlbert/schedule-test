# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveReadOnlyAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1052.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 22 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 20 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5626690Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-24T00:40:00.6221020Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-24T00:57:33.1478046Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-02-24T00:57:33.1479098Z     effective_fields_test.go:242: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:57:33.1479810Z         
2026-02-24T00:57:33.1480620Z         Error: error resolving container IDs
2026-02-24T00:57:33.1481105Z         
2026-02-24T00:57:33.1481677Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:33.1482775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:33.1483429Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:33.1483757Z         
2026-02-24T00:57:33.1484245Z         cluster name = test-acc-tf-c-3772589217570876626, error details: (503 Service
2026-02-24T00:57:33.1484882Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:33.2157829Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (1052.60s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 31 minutes
- 2026-02-27 PASS 22 minutes
- 2026-02-28 PASS 22 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 21 minutes
  - PASS 21 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04 PASS 22 minutes
- 2026-03-05 PASS 35 minutes
- 2026-03-06 PASS 25 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 21 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 16 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 minutes
- 2026-03-02 PASS 15 minutes
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
