# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskAutoScalingAll Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters/test-acc-tf-c-6167257991228705807 | dev | flaky_500 | 157.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 15 minutes
- 2025-12-12 PASS 18 minutes
- 2025-12-13 PASS 18 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 16 minutes
- 2025-12-16 PASS 15 minutes
- 2025-12-17 PASS 19 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 19 minutes
- 2025-12-20 PASS 19 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 minutes
- 2025-12-23 PASS 19 minutes
- 2025-12-24 PASS 17 minutes
- 2025-12-25 PASS 27 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 17 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 15 minutes
- 2025-12-31 PASS 20 minutes
- 2026-01-01 PASS 14 minutes
- 2026-01-02 PASS 18 minutes
- 2026-01-03 PASS 17 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 22 minutes
- 2026-01-06 PASS 18 minutes
- 2026-01-07

### Error 2026-01-07T00:30:44+00:00
```
2026-01-07T00:30:44.9122309Z === RUN   TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-01-07T00:31:16.8495375Z === CONT  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-01-07T00:33:54.6160591Z === NAME  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-01-07T00:33:54.6161479Z     effective_fields_test.go:149: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:54.6162087Z         
2026-01-07T00:33:54.6162453Z         Error: Error in create
2026-01-07T00:33:54.6162998Z         
2026-01-07T00:33:54.6163465Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:33:54.6164439Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:33:54.6165383Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:33:54.6165889Z         
2026-01-07T00:33:54.6166643Z         cluster=test-acc-tf-c-6167257991228705807 didn't reach desired state: IDLE,
2026-01-07T00:33:54.6167296Z         error:
2026-01-07T00:33:54.6168506Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da932af4f6cc389e80b8c/clusters/test-acc-tf-c-6167257991228705807
2026-01-07T00:33:54.6169863Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:54.6170837Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:54.6171479Z         BadRequestDetail: 
2026-01-07T00:33:54.6754862Z --- FAIL: TestAccAdvancedCluster_effectiveDiskAutoScalingAll (157.83s)
```

- 2026-01-08 PASS 18 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 minutes
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
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 16 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
