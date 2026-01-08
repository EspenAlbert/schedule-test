# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters/test-acc-tf-c-6424083343657156953 | dev | flaky_500 | 97.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-12-11 PASS 32 minutes
- 2025-12-12 PASS 29 minutes
- 2025-12-13 PASS 27 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 26 minutes
- 2025-12-16 PASS 27 minutes
- 2025-12-17 PASS 29 minutes
- 2025-12-18 PASS 30 minutes
- 2025-12-19 PASS 30 minutes
- 2025-12-20 PASS 28 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 29 minutes
- 2025-12-23 PASS 27 minutes
- 2025-12-24 PASS 30 minutes
- 2025-12-25 PASS 38 minutes
- 2025-12-26 PASS 25 minutes
- 2025-12-27 PASS 28 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 26 minutes
- 2025-12-31 PASS 29 minutes
- 2026-01-01 PASS 25 minutes
- 2026-01-02 PASS 29 minutes
- 2026-01-03 PASS 29 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 29 minutes
- 2026-01-06 PASS 29 minutes
- 2026-01-07

### Error 2026-01-07T00:30:44+00:00
```
2026-01-07T00:30:44.9123404Z === RUN   TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-01-07T00:31:16.8643337Z === CONT  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-01-07T00:32:54.5946598Z === NAME  TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-01-07T00:32:54.5947275Z     effective_fields_test.go:171: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:32:54.5947973Z         
2026-01-07T00:32:54.5948246Z         Error: Error in create
2026-01-07T00:32:54.5948576Z         
2026-01-07T00:32:54.5948900Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:32:54.5949611Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:32:54.5950444Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:32:54.5950745Z         
2026-01-07T00:32:54.5951164Z         cluster=test-acc-tf-c-6424083343657156953 didn't reach desired state: IDLE,
2026-01-07T00:32:54.5951539Z         error:
2026-01-07T00:32:54.5952205Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters/test-acc-tf-c-6424083343657156953
2026-01-07T00:32:54.5953162Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:54.5953693Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:54.5954063Z         BadRequestDetail: 
2026-01-07T00:32:54.6434915Z --- FAIL: TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling (97.78s)
```

- 2026-01-08 PASS 28 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 29 minutes
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
- 2025-12-28 PASS 25 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 25 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
