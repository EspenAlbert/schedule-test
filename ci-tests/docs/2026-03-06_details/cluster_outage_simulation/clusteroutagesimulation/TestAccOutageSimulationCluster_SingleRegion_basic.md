# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-19 00:39](#error-2026-02-19t0039210000) |  | dev |  | 1.04s
[2026-02-24 00:36](#error-2026-02-24t0036460000) |  | dev | flaky_500 | 993.08s
[2026-03-05 00:38](#error-2026-03-05t0038580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 49 minutes
- 2026-02-06 PASS 49 minutes
- 2026-02-07 PASS 45 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 47 minutes
- 2026-02-10 PASS 46 minutes
- 2026-02-11 PASS 46 minutes
- 2026-02-12 PASS 46 minutes
- 2026-02-13 PASS 46 minutes
- 2026-02-14 PASS 45 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 46 minutes
- 2026-02-17 PASS 47 minutes
- 2026-02-18 PASS 48 minutes
- 2026-02-19

### Error 2026-02-19T00:39:21+00:00
```
2026-02-19T00:39:21.8816376Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-19T00:39:21.8819163Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7948494839965984497
2026-02-19T00:39:23.3207666Z     resource_test.go:22: 
2026-02-19T00:39:23.3209409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-19T00:39:23.3212583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-19T00:39:23.3215748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-19T00:39:23.3218621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-19T00:39:23.3221051Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-02-19T00:39:23.3223101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-02-19T00:39:23.3223937Z         	Error:      	Received unexpected error:
2026-02-19T00:39:23.3224690Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T00:39:23.3225304Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-19T00:39:23.3226310Z         	Messages:   	Project creation failed: test-acc-tf-p-7948494839965984497, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T00:39:23.3227118Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (1.44s)
```

- 2026-02-20 PASS 50 minutes
- 2026-02-21 PASS 45 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 47 minutes
- 2026-02-24

### Error 2026-02-24T00:36:46+00:00
```
2026-02-24T00:36:46.0722344Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-24T00:36:46.0723683Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8182258132729360214
2026-02-24T00:36:49.4278856Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-24T00:36:54.4318793Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-24T00:36:54.4320079Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:36:54.431549841Z, ProjectID: 699cf29eae2412ce62113b94, Cluster name: test-acc-tf-c-1987462804768718999
2026-02-24T00:53:17.6647512Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-24T00:53:17.6648229Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-02-24T00:53:17.6648777Z         
2026-02-24T00:53:17.6651156Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (699cf29eae2412ce62113b94), Cluster (test-acc-tf-c-1987462804768718999): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:53:17.6652836Z         
2026-02-24T00:53:17.6653337Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2026-02-24T00:53:17.6654147Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2026-02-24T00:53:17.6654930Z           38: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2026-02-24T00:53:17.6655313Z         
2026-02-24T00:53:19.8356160Z    test_working_directory=/tmp/plugintest2992936183 test_terraform_path=/home/runner/work/_temp/fa56c540-a252-4faf-b590-7b7340e653ce/terraform
2026-02-24T00:53:19.8357368Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-24T00:53:19.8357861Z         
2026-02-24T00:53:19.8358123Z         Error: Error in delete
2026-02-24T00:53:19.8358381Z         
2026-02-24T00:53:19.8358840Z         cluster name: test-acc-tf-c-1987462804768718999, API error details: (503
2026-02-24T00:53:19.8359514Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:53:19.8360054Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (993.76s)
```

- 2026-02-25 PASS 47 minutes
- 2026-02-26 PASS 46 minutes
- 2026-02-27 PASS 49 minutes
- 2026-02-28 PASS 56 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 45 minutes
  - PASS 46 minutes
- 2026-03-03 PASS 47 minutes
- 2026-03-04 PASS 44 minutes
- 2026-03-05

### Error 2026-03-05T00:38:58+00:00
```
2026-03-05T00:38:58.1676763Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-03-05T00:38:58.1678849Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6677537601811337230
2026-03-05T00:40:00.0926102Z     resource_test.go:22: 
2026-03-05T00:40:00.0927668Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-05T00:40:00.0931346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-05T00:40:00.0934463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-05T00:40:00.0937451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-03-05T00:40:00.0940614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-03-05T00:40:00.0942631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-03-05T00:40:00.0943457Z         	Error:      	Received unexpected error:
2026-03-05T00:40:00.0945340Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:40:00.0946470Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-03-05T00:40:00.0948228Z         	Messages:   	Project creation failed: test-acc-tf-p-6677537601811337230, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:40:00.0949641Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (61.92s)
```

- 2026-03-06 PASS 52 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 43 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 44 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 43 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 42 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 44 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 46 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 43 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
