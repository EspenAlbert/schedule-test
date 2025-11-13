# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026350000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60ecfde46041f566a7a2f/clusters | dev | out_of_capacity | 8.06s
[2025-10-30 00:28](#error-2025-10-30t0028200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183abf4374f329a55cb | dev | flaky_500 | 1901.09s
[2025-11-13 07:53](#error-2025-11-13t0753190000) |  | qa | flaky_400 | 8.06s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 16 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 21 minutes
- 2025-10-18 PASS 17 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS 15 minutes
  - FAIL 8 seconds

### Error 2025-10-20T10:26:35+00:00
```
2025-10-20T10:26:35.5286428Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-10-20T10:28:27.7212936Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-10-20T10:28:35.6461099Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-10-20T10:28:35.6461745Z     resource_test.go:575: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:28:35.6462445Z         
2025-10-20T10:28:35.6462732Z         Error: Error in create
2025-10-20T10:28:35.6462985Z         
2025-10-20T10:28:35.6463342Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:35.6464001Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:35.6464616Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:35.6464935Z         
2025-10-20T10:28:35.6465349Z         cluster name: test-acc-tf-c-238945670198539484, API error details:
2025-10-20T10:28:35.6466243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60ecfde46041f566a7a2f/clusters
2025-10-20T10:28:35.6466934Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:35.6467572Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:35.6468064Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:36.3111227Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (8.59s)
```

- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 20 minutes
  - PASS 13 minutes
- 2025-10-23 PASS 28 minutes
- 2025-10-24 PASS 15 minutes
- 2025-10-25 PASS 14 minutes
- 2025-10-26 PASS 15 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 17 minutes
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8266304Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-10-30T00:29:52.4647337Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-10-30T01:01:34.3130285Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-10-30T01:01:34.3130916Z     resource_test.go:575: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:01:34.3131367Z         
2025-10-30T01:01:34.3131873Z         Error: error when destroying resource
2025-10-30T01:01:34.3132170Z         
2025-10-30T01:01:34.3132519Z         error deleting project (6902b183abf4374f329a55cb):
2025-10-30T01:01:34.3133092Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183abf4374f329a55cb
2025-10-30T01:01:34.3133710Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T01:01:34.3134292Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T01:01:34.3134923Z         BadRequestDetail: 
2025-10-30T01:01:34.3135261Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1901.85s)
```

- 2025-10-31 PASS 21 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 minutes
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 17 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 44 minutes
- 2025-11-09 PASS 15 minutes
- 2025-11-10 PASS 15 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 20 minutes
- 2025-11-13
  - PASS 27 minutes
  - FAIL 8 seconds

### Error 2025-11-13T07:53:19+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-11-13T07:53:19.445000+00:00-TestAccClusterAdvancedCluster_withLabels',confidence=1.0,ts_when='a minute ago')

```
2025-11-13T07:53:19.4455236Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-13T07:54:58.4304173Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-13T07:55:06.3975744Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-13T07:55:06.3976813Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-13T07:55:06.3977474Z         
2025-11-13T07:55:06.3977869Z         Error: Error in create
2025-11-13T07:55:06.3978255Z         
2025-11-13T07:55:06.3978819Z           with mongodbatlas_advanced_cluster.test,
2025-11-13T07:55:06.3980012Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-13T07:55:06.3980850Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-13T07:55:06.3981317Z         
2025-11-13T07:55:06.3981920Z         cluster name: test-acc-tf-c-5044872104573291721, API error details:
2025-11-13T07:55:06.3982900Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69158ed648f3d02bc50c6d25/clusters
2025-11-13T07:55:06.3983672Z         POST: HTTP 403 Forbidden (Error code:
2025-11-13T07:55:06.3984544Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-13T07:55:06.3985469Z         Configuration. Contains selections that are unavailable due to your
2025-11-13T07:55:06.3986510Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-13T07:55:06.3987128Z         BadRequestDetail: 
2025-11-13T07:55:07.0255898Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (8.60s)
```
