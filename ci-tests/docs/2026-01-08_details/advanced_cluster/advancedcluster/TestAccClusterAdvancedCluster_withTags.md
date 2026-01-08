# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 11.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 21 minutes
- 2025-12-12 PASS 22 minutes
- 2025-12-13 PASS 21 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 17 minutes
- 2025-12-16 PASS 20 minutes
- 2025-12-17 PASS 22 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 26 minutes
- 2025-12-20 PASS 20 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 23 minutes
- 2025-12-23 PASS 18 minutes
- 2025-12-24 PASS 20 minutes
- 2025-12-25 PASS 31 minutes
- 2025-12-26 PASS 19 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 minutes
- 2025-12-31 PASS 19 minutes
- 2026-01-01 PASS 19 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 19 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 21 minutes
- 2026-01-06 PASS 21 minutes
- 2026-01-07

### Error 2026-01-07T00:30:56+00:00
```
2026-01-07T00:30:56.1614844Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-01-07T00:31:16.9134450Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-01-07T00:31:28.5200356Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-01-07T00:31:28.5201084Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:31:28.5201512Z         
2026-01-07T00:31:28.5201919Z         Error: error creating project: test-acc-tf-p-6692377707386915543
2026-01-07T00:31:28.5202299Z         
2026-01-07T00:31:28.5202952Z           with mongodbatlas_project.cluster_project,
2026-01-07T00:31:28.5203969Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-01-07T00:31:28.5204918Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-01-07T00:31:28.5205409Z         
2026-01-07T00:31:28.5206129Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:31:28.5207020Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:31:28.5207555Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:31:28.5809438Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11.67s)
```

- 2026-01-08 PASS 19 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 21 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 17 minutes
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
- 2026-01-04 PASS 17 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
