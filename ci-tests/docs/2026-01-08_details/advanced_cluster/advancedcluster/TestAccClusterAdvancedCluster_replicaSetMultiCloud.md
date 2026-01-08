# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95bd59b8466ea72de9c | dev | flaky_500 | 10.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 42 minutes
  - PASS 40 minutes
- 2025-12-11 PASS 47 minutes
- 2025-12-12 PASS 52 minutes
- 2025-12-13 PASS 44 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 39 minutes
- 2025-12-16 PASS 37 minutes
- 2025-12-17 PASS 44 minutes
- 2025-12-18 PASS 40 minutes
- 2025-12-19 PASS 39 minutes
- 2025-12-20 PASS 36 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 40 minutes
- 2025-12-23 PASS 36 minutes
- 2025-12-24 PASS 45 minutes
- 2025-12-25 PASS 52 minutes
- 2025-12-26 PASS 36 minutes
- 2025-12-27 PASS 38 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 35 minutes
- 2025-12-31 PASS 41 minutes
- 2026-01-01 PASS 35 minutes
- 2026-01-02 PASS 41 minutes
- 2026-01-03 PASS 35 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 44 minutes
- 2026-01-06 PASS 38 minutes
- 2026-01-07

### Error 2026-01-07T00:30:54+00:00
```
2026-01-07T00:30:54.0493489Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:16.8397673Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:27.3530607Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:27.3531359Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:31:27.3531859Z         
2026-01-07T00:31:27.3532223Z         Error: error when getting project after create
2026-01-07T00:31:27.3532781Z         
2026-01-07T00:31:27.3533228Z           with mongodbatlas_project.cluster_project,
2026-01-07T00:31:27.3533839Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-01-07T00:31:27.3534627Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-01-07T00:31:27.3535043Z         
2026-01-07T00:31:27.3535437Z         error getting project (695da95bd59b8466ea72de9c):
2026-01-07T00:31:27.3536006Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95bd59b8466ea72de9c
2026-01-07T00:31:27.3536596Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:27.3537452Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:27.3537839Z         BadRequestDetail: 
2026-01-07T00:31:27.4045585Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10.57s)
```

- 2026-01-08 PASS 37 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 43 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 37 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 36 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 36 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 35 minutes
