# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters | dev | flaky_500 | 7.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 46 minutes
  - PASS 44 minutes
- 2025-12-11 PASS 45 minutes
- 2025-12-12 PASS 47 minutes
- 2025-12-13 PASS 45 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 55 minutes
- 2025-12-16 PASS 54 minutes
- 2025-12-17 PASS 44 minutes
- 2025-12-18 PASS 45 minutes
- 2025-12-19 PASS 49 minutes
- 2025-12-20 PASS 51 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 52 minutes
- 2025-12-23 PASS 40 minutes
- 2025-12-24 PASS 53 minutes
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 43 minutes
- 2025-12-27 PASS 43 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 42 minutes
- 2025-12-31 PASS 44 minutes
- 2026-01-01 PASS 48 minutes
- 2026-01-02 PASS 50 minutes
- 2026-01-03 PASS 40 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 44 minutes
- 2026-01-06 PASS 46 minutes
- 2026-01-07

### Error 2026-01-07T00:30:48+00:00
```
2026-01-07T00:30:48.0730374Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-07T00:31:16.8494346Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-07T00:31:23.8196668Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-07T00:31:23.8197608Z     effective_fields_test.go:289: Step 1/6 error: Error running apply: exit status 1
2026-01-07T00:31:23.8198179Z         
2026-01-07T00:31:23.8198574Z         Error: Error in create
2026-01-07T00:31:23.8198992Z         
2026-01-07T00:31:23.8199484Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:23.8200384Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:23.8201243Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:23.8201714Z         
2026-01-07T00:31:23.8202346Z         cluster name: test-acc-tf-c-3449907934589815542, API error details:
2026-01-07T00:31:23.8203755Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters
2026-01-07T00:31:23.8204801Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:23.8205671Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:23.8206254Z         BadRequestDetail: 
2026-01-07T00:31:23.8895710Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (7.05s)
```

- 2026-01-08 PASS 41 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 42 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 47 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 38 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 41 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 45 minutes
