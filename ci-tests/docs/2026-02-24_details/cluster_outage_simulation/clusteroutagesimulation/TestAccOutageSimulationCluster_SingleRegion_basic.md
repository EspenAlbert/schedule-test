# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | timeout | 10812.08s
[2026-02-02 00:38](#error-2026-02-02t0038330000) |  | dev | timeout | 10825.09s
[2026-02-03 00:39](#error-2026-02-03t0039150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b4e3c7fce2317dc4d0/clusters | dev | out_of_capacity | 8.02s
[2026-02-19 00:39](#error-2026-02-19t0039210000) |  | dev |  | 1.04s
[2026-02-24 00:36](#error-2026-02-24t0036460000) |  | dev | flaky_500 | 993.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 43 minutes
- 2026-01-27 PASS 46 minutes
- 2026-01-28 PASS 43 minutes
- 2026-01-29 PASS 48 minutes
- 2026-01-30 PASS 52 minutes
- 2026-01-31

### Error 2026-01-31T00:35:10+00:00
```
2026-01-31T00:35:10.0386383Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-01-31T00:35:10.0387742Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5261147880362612362
2026-01-31T00:35:16.9690221Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-01-31T00:35:21.9732947Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-01-31T00:35:21.9735093Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:21.972883743Z, ProjectID: 697d4e3eff188f1e45c454e5, Cluster name: test-acc-tf-c-5333216883127234771
2026-01-31T03:35:22.7619167Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-01-31T03:35:22.7620139Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:35:22.7620581Z         
2026-01-31T03:35:22.7620927Z         Error: Error in create
2026-01-31T03:35:22.7621207Z         
2026-01-31T03:35:22.7621574Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:22.7622446Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:22.7623230Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:22.7623743Z         
2026-01-31T03:35:22.7624289Z         cluster=test-acc-tf-c-5333216883127234771 didn't reach desired state: IDLE,
2026-01-31T03:35:22.7624773Z         error: context deadline exceeded
2026-01-31T03:35:22.8095575Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (10812.77s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:33+00:00
```
2026-02-02T00:38:33.5681563Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-02T00:38:33.5697355Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-02T00:38:58.5835182Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-02T00:38:58.5838686Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:58.583218753Z, ProjectID: 697ff207197cc66080b02fe5, Cluster name: test-acc-tf-c-6721592637495618469
2026-02-02T03:38:40.8544708Z   
2026-02-02T03:38:59.4120130Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-02T03:38:59.4121068Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:38:59.4121698Z         
2026-02-02T03:38:59.4122107Z         Error: Error in create
2026-02-02T03:38:59.4122480Z         
2026-02-02T03:38:59.4123075Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:38:59.4124294Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:38:59.4125456Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:38:59.4125885Z         
2026-02-02T03:38:59.4126507Z         cluster=test-acc-tf-c-6721592637495618469 didn't reach desired state: IDLE,
2026-02-02T03:38:59.4127307Z         error: context deadline exceeded
2026-02-02T03:38:59.4587733Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (10825.89s)
```

- 2026-02-03

### Error 2026-02-03T00:39:15+00:00
```
2026-02-03T00:39:15.9953181Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-03T00:39:15.9954654Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-2399765619590920719
2026-02-03T00:39:18.3155601Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-03T00:39:23.3196402Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-02-03T00:39:23.3197798Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:23.319412161Z, ProjectID: 698143b4e3c7fce2317dc4d0, Cluster name: test-acc-tf-c-6130307391441160111
2026-02-03T00:39:24.1245955Z    test_step_number=1 test_name=TestAccOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/c1628e00-261f-42e2-9b9c-c6564eddc44f/terraform test_working_directory=/tmp/plugintest2046462595
2026-02-03T00:39:24.1247095Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:24.1247922Z         
2026-02-03T00:39:24.1248185Z         Error: Error in create
2026-02-03T00:39:24.1248434Z         
2026-02-03T00:39:24.1248818Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:24.1249578Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:24.1250288Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:24.1250629Z         
2026-02-03T00:39:24.1251061Z         cluster name: test-acc-tf-c-6130307391441160111, API error details:
2026-02-03T00:39:24.1251760Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4e3c7fce2317dc4d0/clusters
2026-02-03T00:39:24.1252477Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:24.1253421Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:24.1253948Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:24.1737751Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (8.18s)
```

- 2026-02-04 PASS 47 minutes
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


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 42 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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
