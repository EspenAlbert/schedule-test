# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa |  | 0.01s
[2025-06-05 00:35](#error-2025-06-05t0035300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e64fc939f27413252998/clusters/test-acc-tf-c-5132811184701658107 | dev | flaky_500 | 185.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 17 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 14 minutes
- 2025-04-15 PASS 29 minutes
- 2025-04-16
  - PASS 17 minutes
  - PASS 23 minutes
- 2025-04-17 PASS 20 minutes
- 2025-04-18 PASS 18 minutes
- 2025-04-19 PASS 17 minutes
- 2025-04-20 PASS 19 minutes
- 2025-04-21 PASS 21 minutes
- 2025-04-22 PASS 19 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 17 minutes
- 2025-04-25 PASS 18 minutes
- 2025-04-26 PASS 17 minutes
- 2025-04-27 PASS 20 minutes
- 2025-04-28 PASS 18 minutes
- 2025-04-29 PASS 16 minutes
- 2025-04-30 PASS 24 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 15 minutes
  - PASS 18 minutes
- 2025-05-02 PASS 20 minutes
- 2025-05-03 PASS 24 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 19 minutes
- 2025-05-06 PASS 18 minutes
- 2025-05-07 PASS 19 minutes
- 2025-05-08 PASS 18 minutes
- 2025-05-09 PASS 22 minutes
- 2025-05-10 PASS 19 minutes
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.2410223Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-05-11T00:30:10.3022405Z     shared_resource.go:84: 
2025-05-11T00:30:10.3024265Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.3027500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.3029442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.3031393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.3033350Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:634
2025-05-11T00:30:10.3034156Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.3035008Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.3035797Z         	Test:       	TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-05-11T00:30:10.3036944Z         	Messages:   	Project creation failed: test-acc-tf-p-2330966437727000038, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.3037814Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (0.06s)
```

- 2025-05-12 PASS 19 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 24 minutes
- 2025-05-15 PASS 18 minutes
- 2025-05-16 PASS 19 minutes
- 2025-05-17 PASS 17 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 20 minutes
- 2025-05-22 PASS 20 minutes
- 2025-05-23 PASS 13 minutes
- 2025-05-24 PASS 17 minutes
- 2025-05-25 PASS 18 minutes
- 2025-05-26 PASS 16 minutes
- 2025-05-27 PASS 15 minutes
- 2025-05-28
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-05-29
  - PASS 22 minutes
  - PASS 15 minutes
- 2025-05-30
  - PASS an hour
  - PASS 21 minutes
- 2025-05-31 PASS 18 minutes
- 2025-06-01
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-06-02
  - PASS 18 minutes
  - PASS 24 minutes
  - PASS 16 minutes
- 2025-06-03 PASS 19 minutes
- 2025-06-04 PASS 18 minutes
- 2025-06-05

### Error 2025-06-05T00:35:30+00:00
```
2025-06-05T00:35:30.3569141Z === RUN   TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-06-05T00:35:42.8409807Z === CONT  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-06-05T00:38:48.2535490Z === NAME  TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError
2025-06-05T00:38:48.2538940Z     resource_advanced_cluster_test.go:639: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:38:48.2539731Z         
2025-06-05T00:38:48.2553424Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64fc939f27413252998/clusters/test-acc-tf-c-5132811184701658107 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.2556000Z         
2025-06-05T00:38:48.2556623Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.2557857Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.2558969Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.2559567Z         
2025-06-05T00:38:48.2670068Z    test_name=TestAccMockableAdvancedCluster_symmetricShardedOldSchema test_terraform_path=/home/runner/work/_temp/2d4b31c9-479e-44d7-b7ae-aa2b06b7e890/terraform test_working_directory=/tmp/plugintest101370648 test_step_number=1
2025-06-05T00:38:48.4390639Z --- FAIL: TestAccClusterAdvancedClusterConfig_singleShardedTransitionToOldSchemaExpectsError (185.62s)
```

- 2025-06-06 PASS 20 minutes
- 2025-06-07 PASS 21 minutes
- 2025-06-08 PASS 17 minutes
- 2025-06-09 PASS an hour
- 2025-06-10 PASS 22 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 19 minutes
- 2025-06-12 PASS 24 minutes
- 2025-06-13 PASS 20 minutes
- 2025-06-14 PASS 19 minutes
- 2025-06-15 PASS 17 minutes
- 2025-06-16 PASS 21 minutes
- 2025-06-17 PASS 15 minutes
- 2025-06-18
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-06-19 PASS 46 minutes
- 2025-06-20 PASS 18 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22 PASS 31 minutes
- 2025-06-23 PASS 16 minutes
- 2025-06-24 PASS 29 minutes
- 2025-06-25 PASS 15 minutes
- 2025-06-26 PASS 16 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 16 minutes
- 2025-06-29 PASS 22 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 21 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 20 minutes
- 2025-07-08 PASS 15 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 16 minutes