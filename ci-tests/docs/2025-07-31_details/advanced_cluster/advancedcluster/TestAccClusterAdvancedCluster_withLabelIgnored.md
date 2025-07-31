# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-20 01:00](#error-2025-07-20t0100540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4004426db7026b5b478e/limits | qa | flaky_500 | 39.03s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 9 seconds
- 2025-07-03 PASS 8 seconds
- 2025-07-04 PASS 9 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 36 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10 PASS 8 seconds
- 2025-07-11 PASS 8 seconds
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 20 seconds
- 2025-07-14: MISSING
- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 8 seconds
- 2025-07-17 PASS 9 seconds
- 2025-07-18 PASS 7 seconds
- 2025-07-19 PASS 8 seconds
- 2025-07-20

### Error 2025-07-20T01:00:54+00:00
```
2025-07-20T01:00:54.5789618Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-20T01:01:52.4229332Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-20T01:02:31.7092323Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-07-20T01:02:31.7093091Z     resource_advanced_cluster_test.go:721: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-20T01:02:31.7093714Z         
2025-07-20T01:02:31.7094085Z         Error: error when getting project properties after create
2025-07-20T01:02:31.7094503Z         
2025-07-20T01:02:31.7094836Z           with mongodbatlas_project.cluster_project,
2025-07-20T01:02:31.7096043Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T01:02:31.7096972Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T01:02:31.7097303Z         
2025-07-20T01:02:31.7097749Z         error getting project (687c4004426db7026b5b478e): error getting project's
2025-07-20T01:02:31.7098211Z         limits (687c4004426db7026b5b478e):
2025-07-20T01:02:31.7098776Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4004426db7026b5b478e/limits
2025-07-20T01:02:31.7099426Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:02:31.7100003Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:02:31.7100388Z         BadRequestDetail: 
2025-07-20T01:02:31.7551356Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (39.34s)
```

- 2025-07-21 PASS 8 seconds
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-07-24 PASS 7 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 9 seconds
- 2025-07-27 PASS 7 seconds
- 2025-07-28 PASS 9 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 9 seconds
- 2025-07-31 PASS 13 seconds