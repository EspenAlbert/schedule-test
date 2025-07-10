# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030090000) |  | qa |  | 0.01s
[2025-05-25 01:00](#error-2025-05-25t0100220000) |  | qa | timeout | 13380.02s
[2025-06-05 00:35](#error-2025-06-05t0035270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e64cc939f2741325293e/clusters/test-acc-tf-c-5598582520213027917 | dev | flaky_500 | 196.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 34 minutes
- 2025-04-13 PASS 42 minutes
- 2025-04-14 PASS 30 minutes
- 2025-04-15 PASS 46 minutes
- 2025-04-16
  - PASS 34 minutes
  - PASS 46 minutes
- 2025-04-17 PASS 36 minutes
- 2025-04-18 PASS 38 minutes
- 2025-04-19 PASS 36 minutes
- 2025-04-20 PASS 35 minutes
- 2025-04-21 PASS 39 minutes
- 2025-04-22 PASS 35 minutes
- 2025-04-23 PASS 37 minutes
- 2025-04-24 PASS 34 minutes
- 2025-04-25 PASS 34 minutes
- 2025-04-26 PASS 32 minutes
- 2025-04-27 PASS 40 minutes
- 2025-04-28 PASS 34 minutes
- 2025-04-29 PASS 32 minutes
- 2025-04-30 PASS 43 minutes
- 2025-05-01
  - PASS 35 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 33 minutes
  - PASS 32 minutes
  - PASS 34 minutes
  - PASS 29 minutes
- 2025-05-02 PASS 42 minutes
- 2025-05-03 PASS 33 minutes
- 2025-05-04 PASS 34 minutes
- 2025-05-05 PASS 29 minutes
- 2025-05-06 PASS 37 minutes
- 2025-05-07 PASS 45 minutes
- 2025-05-08 PASS 41 minutes
- 2025-05-09 PASS 38 minutes
- 2025-05-10 PASS 37 minutes
- 2025-05-11

### Error 2025-05-11T00:30:09+00:00
```
2025-05-11T00:30:09.9921673Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-05-11T00:30:10.0524451Z     shared_resource.go:84: 
2025-05-11T00:30:10.0526519Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.0529611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.0532564Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.0534595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.0536570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:411
2025-05-11T00:30:10.0537389Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.0538611Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.0539214Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig
2025-05-11T00:30:10.0540224Z         	Messages:   	Project creation failed: test-acc-tf-p-4177398058068400148, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.0541065Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (0.06s)
```

- 2025-05-12 PASS 39 minutes
- 2025-05-13
  - PASS 33 minutes
  - PASS 33 minutes
- 2025-05-14 PASS 40 minutes
- 2025-05-15 PASS 36 minutes
- 2025-05-16 PASS 37 minutes
- 2025-05-17 PASS 39 minutes
- 2025-05-18 PASS 35 minutes
- 2025-05-19 PASS 37 minutes
- 2025-05-20 PASS 34 minutes
- 2025-05-21 PASS 36 minutes
- 2025-05-22 PASS 35 minutes
- 2025-05-23 PASS 31 minutes
- 2025-05-24 PASS 32 minutes
- 2025-05-25

### Error 2025-05-25T01:00:22+00:00
```
2025-05-25T01:00:22.3070083Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-05-25T01:01:31.9398649Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-05-25T01:02:21.8722518Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-05-25T01:02:21.8723879Z     pre_check.go:40: Time before creating cluster: 2025-05-25T01:02:21.871993821Z, ProjectID: 68326ba4f761711183aa801a, Cluster name: test-acc-tf-c-8281843577966109136
2025-05-25T04:43:01.1324599Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-05-25T04:43:01.1325424Z     resource_advanced_cluster_test.go:458: Step 3/4 error: Error running apply: exit status 1
2025-05-25T04:43:01.1326214Z         
2025-05-25T04:43:01.1327905Z         Error: error updating advanced cluster (test-acc-tf-c-4807183176164131832): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-05-25T04:43:01.1328755Z         
2025-05-25T04:43:01.1329093Z           with mongodbatlas_advanced_cluster.test,
2025-05-25T04:43:01.1329743Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-25T04:43:01.1330990Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-25T04:43:01.1331466Z         
2025-05-25T04:44:32.1146823Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (13380.22s)
```

- 2025-05-26 PASS 34 minutes
- 2025-05-27 PASS 31 minutes
- 2025-05-28
  - PASS 33 minutes
  - PASS 37 minutes
  - PASS 31 minutes
- 2025-05-29
  - PASS 42 minutes
  - PASS 27 minutes
- 2025-05-30
  - PASS an hour
  - PASS 34 minutes
- 2025-05-31 PASS 34 minutes
- 2025-06-01
  - PASS 32 minutes
  - PASS 33 minutes
  - PASS 29 minutes
  - PASS 35 minutes
  - PASS 33 minutes
  - PASS 35 minutes
- 2025-06-02
  - PASS 37 minutes
  - PASS 33 minutes
  - PASS 33 minutes
- 2025-06-03 PASS 37 minutes
- 2025-06-04 PASS 36 minutes
- 2025-06-05

### Error 2025-06-05T00:35:27+00:00
```
2025-06-05T00:35:27.2508218Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:35:42.8277623Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:35:57.8174970Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:35:57.8176893Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:35:57.817239707Z, ProjectID: 6840e64cc939f2741325293e, Cluster name: test-acc-tf-c-5598582520213027917
2025-06-05T00:38:58.9444178Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-06-05T00:38:58.9445529Z     resource_advanced_cluster_test.go:458: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:38:58.9446124Z         
2025-06-05T00:38:58.9449095Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64cc939f2741325293e/clusters/test-acc-tf-c-5598582520213027917 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:58.9450399Z         
2025-06-05T00:38:58.9450851Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:58.9451787Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:58.9452628Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:58.9452939Z         
2025-06-05T00:38:58.9921261Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (196.18s)
```

- 2025-06-06 PASS 44 minutes
- 2025-06-07 PASS 37 minutes
- 2025-06-08 PASS 34 minutes
- 2025-06-09 PASS 41 minutes
- 2025-06-10 PASS an hour
- 2025-06-11
  - PASS 34 minutes
  - PASS 45 minutes
- 2025-06-12 PASS 37 minutes
- 2025-06-13 PASS 37 minutes
- 2025-06-14 PASS 53 minutes
- 2025-06-15 PASS 34 minutes
- 2025-06-16 PASS an hour
- 2025-06-17 PASS 32 minutes
- 2025-06-18
  - PASS 37 minutes
  - PASS 34 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 40 minutes
- 2025-06-21 PASS 35 minutes
- 2025-06-22 PASS 39 minutes
- 2025-06-23 PASS 33 minutes
- 2025-06-24 PASS 35 minutes
- 2025-06-25 PASS 30 minutes
- 2025-06-26 PASS 31 minutes
- 2025-06-27 PASS 58 minutes
- 2025-06-28 PASS 34 minutes
- 2025-06-29 PASS 36 minutes
- 2025-06-30 PASS 39 minutes
- 2025-07-01
  - PASS 34 minutes
  - PASS 36 minutes
  - PASS 35 minutes
  - PASS 33 minutes
  - PASS 42 minutes
- 2025-07-02 PASS 31 minutes
- 2025-07-03 PASS 36 minutes
- 2025-07-04 PASS 36 minutes
- 2025-07-05 PASS 35 minutes
- 2025-07-06 PASS 35 minutes
- 2025-07-07 PASS 32 minutes
- 2025-07-08 PASS 32 minutes
- 2025-07-09 PASS 33 minutes
- 2025-07-10 PASS 33 minutes