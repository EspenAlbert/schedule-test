# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:30](#error-2025-08-24t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2d9bbb8c4ee1f822bc/limits | qa | flaky_500 | 34.03s
[2025-09-01 00:30](#error-2025-09-01t0030190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 26 minutes
- 2025-08-07 PASS 33 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 30 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 23 minutes
- 2025-08-15 PASS 19 minutes
- 2025-08-16 PASS 47 minutes
- 2025-08-17 PASS 39 minutes
- 2025-08-18 PASS 25 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 24 minutes
  - PASS 27 minutes
- 2025-08-21 PASS 23 minutes
- 2025-08-22 PASS 20 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24

### Error 2025-08-24T00:30:35+00:00
```
2025-08-24T00:30:35.9476820Z === RUN   TestAccCluster_WithTags
2025-08-24T00:30:35.9560124Z === CONT  TestAccCluster_WithTags
2025-08-24T00:31:10.1925852Z === NAME  TestAccCluster_WithTags
2025-08-24T00:31:10.1926768Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-08-24T00:31:10.1927443Z         
2025-08-24T00:31:10.1928031Z         Error: error when getting project properties after create
2025-08-24T00:31:10.1928635Z         
2025-08-24T00:31:10.1928987Z           with mongodbatlas_project.cluster_project,
2025-08-24T00:31:10.1929843Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T00:31:10.1930589Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-24T00:31:10.1931169Z         
2025-08-24T00:31:10.1931724Z         error getting project (68aa5d2d9bbb8c4ee1f822bc): error getting project's
2025-08-24T00:31:10.1932252Z         limits (68aa5d2d9bbb8c4ee1f822bc):
2025-08-24T00:31:10.1932824Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2d9bbb8c4ee1f822bc/limits
2025-08-24T00:31:10.1933492Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:31:10.1934054Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:31:10.1934428Z         BadRequestDetail: 
2025-08-24T00:31:10.2410964Z --- FAIL: TestAccCluster_WithTags (34.29s)
```

- 2025-08-25 PASS 23 minutes
- 2025-08-26 PASS 21 minutes
- 2025-08-27 PASS 28 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29 PASS 31 minutes
- 2025-08-30 PASS 24 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:19+00:00
```
2025-09-01T00:30:19.6785059Z === RUN   TestAccCluster_WithTags
2025-09-01T00:30:20.6340237Z === CONT  TestAccCluster_WithTags
2025-09-01T00:30:21.4788942Z === NAME  TestAccCluster_WithTags
2025-09-01T00:30:21.4790067Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:30:21.4790954Z         
2025-09-01T00:30:21.4791848Z         Error: error creating project: test-acc-tf-p-856677794319479951
2025-09-01T00:30:21.4792760Z         
2025-09-01T00:30:21.4793572Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:21.4795032Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:21.4796460Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:21.4797038Z         
2025-09-01T00:30:21.4798169Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:21.4799394Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:21.4800544Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:21.4801861Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:21.4802746Z         BadRequestDetail: 
2025-09-01T00:30:21.4954712Z    test_working_directory=/tmp/plugintest3584745352
2025-09-01T00:30:21.5588631Z --- FAIL: TestAccCluster_WithTags (0.93s)
```

  - PASS an hour
  - PASS an hour
  - PASS 21 minutes
  - PASS 24 minutes
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 25 minutes
- 2025-09-02 PASS 24 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 29 minutes