# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd225df5af52d2d4d8380/limits | qa | flaky_500 | 37.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05: MISSING
- 2025-09-06 PASS 9 seconds
- 2025-09-07

### Error 2025-09-07T00:29:24+00:00
```
2025-09-07T00:29:24.3767661Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-07T00:30:25.1304038Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-07T00:31:02.4675588Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-07T00:31:02.4676728Z     resource_advanced_cluster_test.go:723: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-07T00:31:02.4677694Z         
2025-09-07T00:31:02.4678227Z         Error: error when getting project properties after create
2025-09-07T00:31:02.4678762Z         
2025-09-07T00:31:02.4679119Z           with mongodbatlas_project.cluster_project,
2025-09-07T00:31:02.4679807Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-07T00:31:02.4680422Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-07T00:31:02.4680749Z         
2025-09-07T00:31:02.4681218Z         error getting project (68bcd225df5af52d2d4d8380): error getting project's
2025-09-07T00:31:02.4681678Z         limits (68bcd225df5af52d2d4d8380):
2025-09-07T00:31:02.4682261Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd225df5af52d2d4d8380/limits
2025-09-07T00:31:02.4682930Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:02.4683508Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:02.4683921Z         BadRequestDetail: 
2025-09-07T00:31:02.5146011Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (37.41s)
```

- 2025-09-08
  - PASS 5 seconds
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-09-09 PASS 8 seconds
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 8 seconds
- 2025-09-20 PASS 7 seconds
- 2025-09-21 PASS 8 seconds
- 2025-09-22 PASS 11 seconds
- 2025-09-23 PASS 7 seconds
- 2025-09-24 PASS 7 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 9 seconds
- 2025-09-27 PASS 7 seconds
- 2025-09-28 PASS 7 seconds
- 2025-09-29
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-09-30
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-10-01
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-10-02 PASS 9 seconds