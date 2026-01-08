# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters | dev | flaky_500 | 6.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 21 minutes
- 2025-12-12 PASS 17 minutes
- 2025-12-13 PASS 19 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 minutes
- 2025-12-16 PASS 16 minutes
- 2025-12-17 PASS 17 minutes
- 2025-12-18 PASS 20 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 18 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 minutes
- 2025-12-23 PASS 17 minutes
- 2025-12-24 PASS 17 minutes
- 2025-12-25 PASS 27 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 16 minutes
- 2025-12-31 PASS 21 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 17 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 22 minutes
- 2026-01-06 PASS 18 minutes
- 2026-01-07

### Error 2026-01-07T00:30:44+00:00
```
2026-01-07T00:30:44.9116108Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-01-07T00:31:16.9133562Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-01-07T00:31:23.2391764Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-01-07T00:31:23.2393037Z     effective_fields_test.go:105: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:23.2394160Z         
2026-01-07T00:31:23.2394599Z         Error: Error in create
2026-01-07T00:31:23.2395006Z         
2026-01-07T00:31:23.2395514Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:23.2396717Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:23.2397722Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:23.2398231Z         
2026-01-07T00:31:23.2398920Z         cluster name: test-acc-tf-c-8034424324850902510, API error details:
2026-01-07T00:31:23.2400027Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters
2026-01-07T00:31:23.2401166Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:23.2402100Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:23.2402799Z         BadRequestDetail: 
2026-01-07T00:31:23.3217643Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (6.42s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 17 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 15 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 16 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 minutes
