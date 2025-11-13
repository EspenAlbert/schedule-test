# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026350000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60ece5a13b66d7cb77255/clusters | dev | out_of_capacity | 8.01s
[2025-10-30 00:28](#error-2025-10-30t0028200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183abf4374f329a5592 | dev | flaky_500 | 1357.00s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 16 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 16 minutes
- 2025-10-18 PASS 17 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS 20 minutes
  - FAIL 8 seconds

### Error 2025-10-20T10:26:35+00:00
```
2025-10-20T10:26:35.5285056Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-10-20T10:28:27.7245420Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-10-20T10:28:35.1592865Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-10-20T10:28:35.1593492Z     resource_test.go:546: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:28:35.1593990Z         
2025-10-20T10:28:35.1594342Z         Error: Error in create
2025-10-20T10:28:35.1594595Z         
2025-10-20T10:28:35.1594923Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:35.1595573Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:35.1596426Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:35.1596743Z         
2025-10-20T10:28:35.1597165Z         cluster name: test-acc-tf-c-6253470088678466225, API error details:
2025-10-20T10:28:35.1597844Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60ece5a13b66d7cb77255/clusters
2025-10-20T10:28:35.1598527Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:35.1599169Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:35.1599665Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:35.6459998Z    test_working_directory=/tmp/plugintest336289644 test_name=TestAccClusterAdvancedCluster_withLabels test_terraform_path=/home/runner/work/_temp/ed2ad7b8-1a74-4ed2-bb7d-ab8de99af10f/terraform
2025-10-20T10:28:35.8410980Z --- FAIL: TestAccClusterAdvancedCluster_withTags (8.12s)
```

- 2025-10-21 PASS 15 minutes
- 2025-10-22
  - PASS 21 minutes
  - PASS 15 minutes
- 2025-10-23 PASS 26 minutes
- 2025-10-24 PASS 16 minutes
- 2025-10-25 PASS 16 minutes
- 2025-10-26 PASS 14 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 17 minutes
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8265070Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-10-30T00:29:52.4752497Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-10-30T00:52:29.4923267Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-10-30T00:52:29.4923902Z     resource_test.go:546: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:52:29.4924365Z         
2025-10-30T00:52:29.4924668Z         Error: error when destroying resource
2025-10-30T00:52:29.4924952Z         
2025-10-30T00:52:29.4925296Z         error deleting project (6902b183abf4374f329a5592):
2025-10-30T00:52:29.4925870Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183abf4374f329a5592
2025-10-30T00:52:29.4926481Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:52:29.4927066Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:52:29.4927461Z         BadRequestDetail: 
2025-10-30T00:52:29.4927774Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1357.02s)
```

- 2025-10-31 PASS 22 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 14 minutes
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 18 minutes
- 2025-11-05
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 43 minutes
- 2025-11-09 PASS 16 minutes
- 2025-11-10 PASS 15 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 19 minutes
- 2025-11-13
  - PASS 37 minutes
  - PASS 17 minutes