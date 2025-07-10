# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4de161ca93c1f0532d2/clusters | dev | flaky_500 | 6.01s
[2025-06-18 01:55](#error-2025-06-18t0155100000) | API Error CLUSTER_NOT_FOUND /api/atlas/v2/groups/{groupId}/clusters | dev | flaky_400 | 1536.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 22 minutes
- 2025-04-13 PASS 23 minutes
- 2025-04-14 PASS 18 minutes
- 2025-04-15 PASS 36 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 26 minutes
- 2025-04-17 PASS 22 minutes
- 2025-04-18 PASS 19 minutes
- 2025-04-19 PASS 25 minutes
- 2025-04-20 PASS 24 minutes
- 2025-04-21 PASS 28 minutes
- 2025-04-22 PASS 21 minutes
- 2025-04-23 PASS 24 minutes
- 2025-04-24 PASS 21 minutes
- 2025-04-25 PASS 23 minutes
- 2025-04-26 PASS 22 minutes
- 2025-04-27 PASS 23 minutes
- 2025-04-28 PASS 21 minutes
- 2025-04-29 PASS 21 minutes
- 2025-04-30 PASS 19 minutes
- 2025-05-01
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 18 minutes
  - PASS 22 minutes
  - PASS 19 minutes
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-05-02 PASS 27 minutes
- 2025-05-03 PASS 18 minutes
- 2025-05-04 PASS 20 minutes
- 2025-05-05 PASS 22 minutes
- 2025-05-06 PASS 24 minutes
- 2025-05-07 PASS 19 minutes
- 2025-05-08 PASS 27 minutes
- 2025-05-09 PASS 21 minutes
- 2025-05-10 PASS 23 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8121092Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-05-11T00:30:01.8121622Z     shared_resource.go:84: 
2025-05-11T00:30:01.8122510Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8124249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8126002Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8127735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8130029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1242
2025-05-11T00:30:01.8131120Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8132241Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8133043Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-05-11T00:30:01.8134373Z         	Messages:   	Project creation failed: test-acc-tf-p-2800634243465751545, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8135280Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (0.02s)
```

- 2025-05-12 PASS 23 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-05-14 PASS 23 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 18 minutes
- 2025-05-17 PASS 19 minutes
- 2025-05-18 PASS 20 minutes
- 2025-05-19 PASS 26 minutes
- 2025-05-20 PASS 20 minutes
- 2025-05-21
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-05-22 PASS 21 minutes
- 2025-05-23 PASS 20 minutes
- 2025-05-24 PASS 18 minutes
- 2025-05-25 PASS 27 minutes
- 2025-05-26 PASS 16 minutes
- 2025-05-27 PASS 16 minutes
- 2025-05-28
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 23 minutes
- 2025-05-29 PASS 24 minutes
- 2025-05-30
  - PASS an hour
  - PASS 25 minutes
- 2025-05-31 PASS 22 minutes
- 2025-06-01
  - PASS 28 minutes
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 23 minutes
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-06-03 PASS 24 minutes
- 2025-06-04 PASS 19 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5910492Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-06-05T00:35:38.5911104Z     resource_advanced_cluster_test.go:1316: Adding variable groupId=6840e4de161ca93c1f0532d2
2025-06-05T00:35:38.5911825Z     resource_advanced_cluster_test.go:1316: Adding variable clusterName=test-acc-tf-c-8531074905434078944
2025-06-05T00:35:38.5950243Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-06-05T00:35:38.6171744Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-06-05T00:35:38.6172634Z     resource_advanced_cluster_test.go:1316: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6173199Z         
2025-06-05T00:35:38.6173442Z         Error: Error in create
2025-06-05T00:35:38.6173786Z         
2025-06-05T00:35:38.6174116Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6174876Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6175580Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6175895Z         
2025-06-05T00:35:38.6176424Z         cluster name: test-acc-tf-c-8531074905434078944, API error details:
2025-06-05T00:35:38.6177205Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4de161ca93c1f0532d2/clusters
2025-06-05T00:35:38.6178011Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6178922Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6179324Z         BadRequestDetail: 
2025-06-05T00:35:38.6192560Z   
2025-06-05T00:35:38.6395676Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6.10s)
```

- 2025-06-06 PASS 26 minutes
- 2025-06-07 PASS 18 minutes
- 2025-06-08 PASS 19 minutes
- 2025-06-09 PASS 23 minutes
- 2025-06-10 PASS 26 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-06-12 PASS 23 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 46 minutes
- 2025-06-15 PASS 22 minutes
- 2025-06-16 PASS 35 minutes
- 2025-06-17 PASS 20 minutes
- 2025-06-18
  - FAIL 25 minutes

### Error 2025-06-18T01:55:10+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-06-18T01:55:10.724000+00:00-TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate',confidence=1.0,ts_when='20 days ago')
API Error CLUSTER_NOT_FOUND /api/atlas/v2/groups/{groupId}/clusters
```
2025-06-18T01:55:10.7242934Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-06-18T01:55:10.7243526Z     resource_advanced_cluster_test.go:1316: Adding variable groupId=68520edef40f964ca92fe91a
2025-06-18T01:55:10.7244220Z     resource_advanced_cluster_test.go:1316: Adding variable clusterName=test-acc-tf-c-7148372567503575923
2025-06-18T01:55:10.7272752Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-06-18T01:55:10.7348905Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-06-18T01:55:10.7349590Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5127701149399605834
2025-06-18T01:55:10.7350390Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3944019734956720405
2025-06-18T01:55:10.7395282Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-06-18T01:55:10.7395892Z     resource_advanced_cluster_test.go:1316: Step 2/4 error: Error running apply: exit status 1
2025-06-18T01:55:10.7396296Z         
2025-06-18T01:55:10.7396598Z         Error: error reading  advanced cluster list
2025-06-18T01:55:10.7396871Z         
2025-06-18T01:55:10.7397321Z           with data.mongodbatlas_advanced_clusters.test,
2025-06-18T01:55:10.7397945Z           on terraform_plugin_test.tf line 78, in data "mongodbatlas_advanced_clusters" "test":
2025-06-18T01:55:10.7398491Z           78: 	data "mongodbatlas_advanced_clusters" "test" {
2025-06-18T01:55:10.7398778Z         
2025-06-18T01:55:10.7399063Z         project ID 68520edef40f964ca92fe91a. Error
2025-06-18T01:55:10.7399644Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68520edef40f964ca92fe91a/clusters
2025-06-18T01:55:10.7400293Z         GET: HTTP 404 Not Found (Error code: "CLUSTER_NOT_FOUND") Detail: No cluster
2025-06-18T01:55:10.7400806Z         named test-acc-tf-c-3944019734956720405 exists in group
2025-06-18T01:55:10.7401260Z         68520edef40f964ca92fe91a. Reason: Not Found. Params:
2025-06-18T01:55:10.7401734Z         [test-acc-tf-c-3944019734956720405 68520edef40f964ca92fe91a],
2025-06-18T01:55:10.7402093Z         BadRequestDetail: 
2025-06-18T01:55:10.7414418Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1536.70s)
```

  - PASS 22 minutes
- 2025-06-19 PASS 51 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22 PASS 32 minutes
- 2025-06-23 PASS 20 minutes
- 2025-06-24 PASS 24 minutes
- 2025-06-25 PASS 17 minutes
- 2025-06-26
  - PASS 23 minutes
  - PASS 16 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 25 minutes
- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 20 minutes
  - PASS 22 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-07-02 PASS 19 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 22 minutes
- 2025-07-05 PASS 19 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 22 minutes
- 2025-07-08 PASS 31 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10 PASS 22 minutes