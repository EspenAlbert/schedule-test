# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da04192cd1cc58a00b9/limits | qa | flaky_500 | 37.06s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 9 seconds
- 2025-08-07 PASS 29 seconds
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 10 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-08-13 PASS 12 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15: MISSING
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22: MISSING
- 2025-08-23 PASS 9 seconds
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1377108Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-08-24T03:34:47.1496639Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-08-24T03:34:47.1642065Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-08-24T03:34:47.1642783Z     resource_advanced_cluster_test.go:723: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-08-24T03:34:47.1643298Z         
2025-08-24T03:34:47.1643662Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1643990Z         
2025-08-24T03:34:47.1644318Z           with mongodbatlas_project.cluster_project,
2025-08-24T03:34:47.1644964Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T03:34:47.1645548Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-08-24T03:34:47.1645847Z         
2025-08-24T03:34:47.1646276Z         error getting project (68aa5da04192cd1cc58a00b9): error getting project's
2025-08-24T03:34:47.1646720Z         limits (68aa5da04192cd1cc58a00b9):
2025-08-24T03:34:47.1647278Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da04192cd1cc58a00b9/limits
2025-08-24T03:34:47.1647926Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1648600Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1648980Z         BadRequestDetail: 
2025-08-24T03:34:47.1649313Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (37.58s)
```

- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29: MISSING
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7150683Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-01T00:30:49.7554566Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-01T00:30:49.7610966Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-01T00:30:49.7611910Z     resource_advanced_cluster_test.go:723: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T00:30:49.7612439Z         
2025-09-01T00:30:49.7612873Z         Error: error creating project: test-acc-tf-p-4934363320226123704
2025-09-01T00:30:49.7613213Z         
2025-09-01T00:30:49.7613536Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:49.7614189Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:49.7614783Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:49.7615085Z         
2025-09-01T00:30:49.7615545Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7616174Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7616772Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7617359Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7617751Z         BadRequestDetail: 
2025-09-01T00:30:49.7629041Z    test_name=TestAccClusterAdvancedCluster_withTags test_terraform_path=/home/runner/work/_temp/a4685d55-a02f-41f0-96ef-d09228d8abbb/terraform test_working_directory=/tmp/plugintest3059359939 test_step_number=1
2025-09-01T00:30:49.7755224Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (1.85s)
```

  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 10 seconds