# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | timeout | 10812.08s
[2026-02-02 00:38](#error-2026-02-02t0038330000) |  | dev | timeout | 10825.09s
[2026-02-03 00:39](#error-2026-02-03t0039150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b4e3c7fce2317dc4d0/clusters | dev | out_of_capacity | 8.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 41 minutes
- 2026-01-09 PASS 45 minutes
- 2026-01-10 PASS 42 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 43 minutes
- 2026-01-13 PASS 48 minutes
- 2026-01-14 PASS 44 minutes
- 2026-01-15 PASS 46 minutes
- 2026-01-16 PASS 45 minutes
- 2026-01-17 PASS 47 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 42 minutes
- 2026-01-20 PASS 45 minutes
- 2026-01-21 PASS 44 minutes
- 2026-01-22 PASS 46 minutes
- 2026-01-23 PASS 44 minutes
- 2026-01-24 PASS 43 minutes
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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 40 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 41 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 41 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 39 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 42 minutes
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
