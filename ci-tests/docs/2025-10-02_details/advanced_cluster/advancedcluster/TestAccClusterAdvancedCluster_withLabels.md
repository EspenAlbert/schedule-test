# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-21 00:29](#error-2025-09-21t0029380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474cbd1cb41a3e706e1d/limits | qa | flaky_500 | 37.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 39 minutes
- 2025-09-04 PASS 28 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 28 minutes
- 2025-09-07 PASS 22 minutes
- 2025-09-08
  - PASS 30 minutes
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-09-09 PASS 26 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 17 minutes
- 2025-09-20 PASS 17 minutes
- 2025-09-21

### Error 2025-09-21T00:29:38+00:00
```
2025-09-21T00:29:38.8148338Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-09-21T00:31:04.3656132Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-09-21T00:31:41.5253250Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-09-21T00:31:41.5253879Z     resource_test.go:585: Step 1/4 error: Error running apply: exit status 1
2025-09-21T00:31:41.5254320Z         
2025-09-21T00:31:41.5254719Z         Error: error when getting project properties after create
2025-09-21T00:31:41.5255309Z         
2025-09-21T00:31:41.5255658Z           with mongodbatlas_project.cluster_project,
2025-09-21T00:31:41.5256421Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-21T00:31:41.5257201Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-21T00:31:41.5257516Z         
2025-09-21T00:31:41.5257960Z         error getting project (68cf474cbd1cb41a3e706e1d): error getting project's
2025-09-21T00:31:41.5258405Z         limits (68cf474cbd1cb41a3e706e1d):
2025-09-21T00:31:41.5259210Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474cbd1cb41a3e706e1d/limits
2025-09-21T00:31:41.5259880Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:41.5260449Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:41.5260829Z         BadRequestDetail: 
2025-09-21T00:31:41.5707096Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (37.21s)
```

- 2025-09-22 PASS 17 minutes
- 2025-09-23 PASS 17 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 25 minutes
- 2025-09-26 PASS 37 minutes
- 2025-09-27 PASS 16 minutes
- 2025-09-28 PASS 13 minutes
- 2025-09-29
  - PASS 20 minutes
  - PASS 14 minutes
- 2025-09-30
  - PASS 17 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-10-01
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS 17 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 35 minutes
- 2025-10-02 PASS 2 hours