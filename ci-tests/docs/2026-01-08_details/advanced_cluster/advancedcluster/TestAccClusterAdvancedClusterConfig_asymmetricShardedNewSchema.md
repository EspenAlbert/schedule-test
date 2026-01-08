# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95bd59b8466ea72dd4c | dev | flaky_500 | 8.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-12-11 PASS 20 minutes
- 2025-12-12 PASS 25 minutes
- 2025-12-13 PASS 17 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16 PASS 19 minutes
- 2025-12-17 PASS 21 minutes
- 2025-12-18 PASS 20 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 16 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 17 minutes
- 2025-12-23 PASS 15 minutes
- 2025-12-24 PASS 17 minutes
- 2025-12-25 PASS 33 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 15 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 16 minutes
- 2025-12-31 PASS 20 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 21 minutes
- 2026-01-03 PASS 13 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 22 minutes
- 2026-01-06 PASS 16 minutes
- 2026-01-07

### Error 2026-01-07T00:30:58+00:00
```
2026-01-07T00:30:58.1052027Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-07T00:31:16.8493506Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-07T00:31:25.6304149Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-07T00:31:25.6304845Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:25.6305240Z         
2026-01-07T00:31:25.6305587Z         Error: error when getting project after create
2026-01-07T00:31:25.6305877Z         
2026-01-07T00:31:25.6306280Z           with mongodbatlas_project.cluster_project,
2026-01-07T00:31:25.6306999Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-01-07T00:31:25.6307658Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-01-07T00:31:25.6307969Z         
2026-01-07T00:31:25.6308334Z         error getting project (695da95bd59b8466ea72dd4c):
2026-01-07T00:31:25.6309008Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95bd59b8466ea72dd4c
2026-01-07T00:31:25.6309611Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:25.6310135Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:25.6310489Z         BadRequestDetail: 
2026-01-07T00:31:25.6779196Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (8.84s)
```

- 2026-01-08 PASS 17 minutes

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
- 2025-12-21 PASS 13 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 14 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
