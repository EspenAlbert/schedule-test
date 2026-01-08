# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleAutoScaling Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters/test-acc-tf-c-2449266688048569805 | dev | flaky_500 | 37.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 minutes
  - PASS 16 minutes
- 2025-12-11 PASS 22 minutes
- 2025-12-12 PASS 29 minutes
- 2025-12-13 PASS 23 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 minutes
- 2025-12-16 PASS 18 minutes
- 2025-12-17 PASS 22 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 17 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 21 minutes
- 2025-12-23 PASS 18 minutes
- 2025-12-24 PASS 21 minutes
- 2025-12-25 PASS 30 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 minutes
- 2025-12-31 PASS 23 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 16 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 19 minutes
- 2026-01-06 PASS 19 minutes
- 2026-01-07

### Error 2026-01-07T00:30:44+00:00
```
2026-01-07T00:30:44.9125149Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-01-07T00:31:16.8621590Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-01-07T00:31:54.0825988Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-01-07T00:31:54.0826534Z     effective_fields_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:31:54.0826998Z         
2026-01-07T00:31:54.0827250Z         Error: Error in create
2026-01-07T00:31:54.0827504Z         
2026-01-07T00:31:54.0827822Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:54.0828568Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:54.0829265Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:54.0829562Z         
2026-01-07T00:31:54.0829987Z         cluster=test-acc-tf-c-2449266688048569805 didn't reach desired state: IDLE,
2026-01-07T00:31:54.0830359Z         error:
2026-01-07T00:31:54.0831101Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters/test-acc-tf-c-2449266688048569805
2026-01-07T00:31:54.0831836Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:54.0832382Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:54.0832960Z         BadRequestDetail: 
2026-01-07T00:31:54.1438845Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (37.29s)
```

- 2026-01-08 PASS 18 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 19 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 18 minutes
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
- 2026-01-08 PASS 19 minutes
