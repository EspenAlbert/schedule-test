# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-05-28 12:04](#error-2025-05-28t1204460000) |  | qa |  | 1191.03s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters | dev | flaky_500 | 7.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 20 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 17 minutes
- 2025-04-15 PASS 33 minutes
- 2025-04-16
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-04-17 PASS 18 minutes
- 2025-04-18 PASS 19 minutes
- 2025-04-19 PASS 27 minutes
- 2025-04-20 PASS 23 minutes
- 2025-04-21 PASS 24 minutes
- 2025-04-22 PASS 22 minutes
- 2025-04-23 PASS 30 minutes
- 2025-04-24 PASS 22 minutes
- 2025-04-25 PASS 22 minutes
- 2025-04-26 PASS 22 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 22 minutes
- 2025-04-29 PASS 22 minutes
- 2025-04-30 PASS 29 minutes
- 2025-05-01
  - PASS 17 minutes
  - PASS 23 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 22 minutes
- 2025-05-02 PASS 33 minutes
- 2025-05-03 PASS 21 minutes
- 2025-05-04 PASS 19 minutes
- 2025-05-05 PASS 21 minutes
- 2025-05-06 PASS 24 minutes
- 2025-05-07 PASS 23 minutes
- 2025-05-08 PASS 26 minutes
- 2025-05-09 PASS 20 minutes
- 2025-05-10 PASS 24 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8036342Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-11T00:30:01.8036820Z     shared_resource.go:84: 
2025-05-11T00:30:01.8037688Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8039420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8041393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8043138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8045121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:978
2025-05-11T00:30:01.8045929Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8046787Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8047547Z         	Test:       	TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-11T00:30:01.8048688Z         	Messages:   	Project creation failed: test-acc-tf-p-1145703916281548241, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8049523Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (0.02s)
```

- 2025-05-12 PASS 23 minutes
- 2025-05-13
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-05-14 PASS 24 minutes
- 2025-05-15 PASS 22 minutes
- 2025-05-16 PASS 20 minutes
- 2025-05-17 PASS 20 minutes
- 2025-05-18 PASS 19 minutes
- 2025-05-19 PASS 24 minutes
- 2025-05-20 PASS 21 minutes
- 2025-05-21
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-05-22 PASS 23 minutes
- 2025-05-23 PASS 21 minutes
- 2025-05-24 PASS 18 minutes
- 2025-05-25 PASS 31 minutes
- 2025-05-26 PASS 23 minutes
- 2025-05-27 PASS 21 minutes
- 2025-05-28
  - PASS 19 minutes
  - FAIL 19 minutes

### Error 2025-05-28T12:04:46+00:00
```
2025-05-28T12:04:46.9806760Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T12:04:46.9838798Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T12:04:47.0009857Z === NAME  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T12:04:47.0010548Z     resource_advanced_cluster_test.go:983: Step 1/3 error: Error running apply: exit status 1
2025-05-28T12:04:47.0010949Z         
2025-05-28T12:04:47.0011233Z         Error: error resolving container IDs
2025-05-28T12:04:47.0011505Z         
2025-05-28T12:04:47.0011979Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T12:04:47.0012623Z           on terraform_plugin_test.tf line 65, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T12:04:47.0013188Z           65: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T12:04:47.0013475Z         
2025-05-28T12:04:47.0013913Z         cluster name = test-acc-tf-c-5702567813895212895, error details: (503 Service
2025-05-28T12:04:47.0014523Z         Unavailable) failed to decode response body: undefined response type
2025-05-28T12:04:47.0026812Z    test_name=TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled test_terraform_path=/home/runner/work/_temp/0bbe0b64-86f0-4111-9a0b-d75d93ae70a5/terraform test_working_directory=/tmp/plugintest2409768101 test_step_number=1
2025-05-28T12:04:47.0066414Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1191.26s)
```

  - PASS 22 minutes
- 2025-05-29 PASS 36 minutes
- 2025-05-30
  - PASS an hour
  - PASS 23 minutes
- 2025-05-31 PASS 21 minutes
- 2025-06-01
  - PASS 28 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 22 minutes
- 2025-06-02
  - PASS 19 minutes
  - PASS 20 minutes
  - PASS 25 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 22 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5900952Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.5949695Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.6073022Z === NAME  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.6073713Z     resource_advanced_cluster_test.go:983: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6074139Z         
2025-06-05T00:35:38.6074412Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6074676Z         
2025-06-05T00:35:38.6075001Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6075776Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6076371Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6076683Z         
2025-06-05T00:35:38.6077086Z         cluster name: test-acc-tf-c-478175005657945574, API error details:
2025-06-05T00:35:38.6077749Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters
2025-06-05T00:35:38.6078550Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6079250Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6079633Z         BadRequestDetail: 
2025-06-05T00:35:38.6096105Z   
2025-06-05T00:35:38.6385628Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (7.71s)
```

- 2025-06-06 PASS 22 minutes
- 2025-06-07 PASS 33 minutes
- 2025-06-08 PASS 20 minutes
- 2025-06-09 PASS 23 minutes
- 2025-06-10 PASS 45 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 21 minutes
- 2025-06-12 PASS 23 minutes
- 2025-06-13 PASS 27 minutes
- 2025-06-14 PASS 28 minutes
- 2025-06-15 PASS 22 minutes
- 2025-06-16 PASS 27 minutes
- 2025-06-17 PASS 19 minutes
- 2025-06-18
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-06-19 PASS 46 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22 PASS 19 minutes
- 2025-06-23 PASS 21 minutes
- 2025-06-24 PASS 30 minutes
- 2025-06-25 PASS 19 minutes
- 2025-06-26
  - PASS 25 minutes
  - PASS 18 minutes
- 2025-06-27 PASS 23 minutes
- 2025-06-28 PASS 20 minutes
- 2025-06-29 PASS 26 minutes
- 2025-06-30 PASS 29 minutes
- 2025-07-01
  - PASS 25 minutes
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 22 minutes
- 2025-07-04 PASS 23 minutes
- 2025-07-05 PASS 23 minutes
- 2025-07-06 PASS 21 minutes
- 2025-07-07 PASS 20 minutes
- 2025-07-08 PASS 22 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 21 minutes