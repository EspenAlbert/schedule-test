# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveAnalyticsAutoScaling Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-8131226211009981816 | dev | flaky_500 | 70.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-12-11 PASS 29 minutes
- 2025-12-12 PASS 30 minutes
- 2025-12-13 PASS 29 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 25 minutes
- 2025-12-16 PASS 26 minutes
- 2025-12-17 PASS 27 minutes
- 2025-12-18 PASS 29 minutes
- 2025-12-19 PASS 30 minutes
- 2025-12-20 PASS 28 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 29 minutes
- 2025-12-23 PASS 24 minutes
- 2025-12-24 PASS 30 minutes
- 2025-12-25 PASS 38 minutes
- 2025-12-26 PASS 27 minutes
- 2025-12-27 PASS 28 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 26 minutes
- 2025-12-31 PASS 28 minutes
- 2026-01-01 PASS 26 minutes
- 2026-01-02 PASS 29 minutes
- 2026-01-03 PASS 26 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 28 minutes
- 2026-01-06 PASS 26 minutes
- 2026-01-07

### Error 2026-01-07T00:30:44+00:00
```
2026-01-07T00:30:44.9126743Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-01-07T00:31:16.8614476Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-01-07T00:32:24.1909224Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-01-07T00:32:24.1909776Z     effective_fields_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:32:24.1910146Z         
2026-01-07T00:32:24.1910405Z         Error: Error in create
2026-01-07T00:32:24.1910650Z         
2026-01-07T00:32:24.1910968Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:32:24.1911562Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:32:24.1912109Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:32:24.1912448Z         
2026-01-07T00:32:24.1913174Z         cluster=test-acc-tf-c-8131226211009981816 didn't reach desired state: IDLE,
2026-01-07T00:32:24.1913723Z         error:
2026-01-07T00:32:24.1914475Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-8131226211009981816
2026-01-07T00:32:24.1915367Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:24.1915904Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:24.1916270Z         BadRequestDetail: 
2026-01-07T00:32:24.2291379Z    test_name=TestAccAdvancedCluster_effectiveUnsetToSet
2026-01-07T00:32:24.2581136Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (70.57s)
```

- 2026-01-08 PASS 26 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 27 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 24 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 24 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 26 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
