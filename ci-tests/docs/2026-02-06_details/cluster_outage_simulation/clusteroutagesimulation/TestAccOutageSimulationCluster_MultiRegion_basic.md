# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10815.10s
[2026-02-02 00:38](#error-2026-02-02t0038330000) |  | dev | timeout | 10820.07s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b4e3c7fce2317dc4d0/clusters | dev | out_of_capacity | 10.09s
[2026-02-04 00:35](#error-2026-02-04t0035340000) |  | dev | timeout | 10825.09s
[2026-02-05 00:39](#error-2026-02-05t0039040000) |  | dev | timeout | 10816.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 49 minutes
- 2026-01-09 PASS 48 minutes
- 2026-01-10 PASS 47 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 47 minutes
- 2026-01-13 PASS 49 minutes
- 2026-01-14 PASS 53 minutes
- 2026-01-15 PASS 47 minutes
- 2026-01-16 PASS 48 minutes
- 2026-01-17 PASS 52 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 47 minutes
- 2026-01-20 PASS 49 minutes
- 2026-01-21 PASS 51 minutes
- 2026-01-22 PASS 53 minutes
- 2026-01-23 PASS 51 minutes
- 2026-01-24 PASS 52 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 50 minutes
- 2026-01-27 PASS 52 minutes
- 2026-01-28 PASS 45 minutes
- 2026-01-29 PASS 57 minutes
- 2026-01-30 PASS 51 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.9680923Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-01-31T00:35:16.9693458Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-01-31T00:35:31.9771599Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-01-31T00:35:31.9773123Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:31.976835376Z, ProjectID: 697d4e3eff188f1e45c454e5, Cluster name: test-acc-tf-c-3716782217471126774
2026-01-31T03:35:22.7618405Z   
2026-01-31T03:35:32.9007403Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-01-31T03:35:32.9008639Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:35:32.9009307Z         
2026-01-31T03:35:32.9009732Z         Error: Error in create
2026-01-31T03:35:32.9010298Z         
2026-01-31T03:35:32.9010929Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:32.9012224Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:32.9013455Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:32.9013995Z         
2026-01-31T03:35:32.9014638Z         cluster=test-acc-tf-c-3716782217471126774 didn't reach desired state: IDLE,
2026-01-31T03:35:32.9015408Z         error: context deadline exceeded
2026-01-31T03:35:32.9505626Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.98s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:33+00:00
```
2026-02-02T00:38:33.5688160Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-02T00:38:33.5696691Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-02T00:38:53.5806897Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-02T00:38:53.5809841Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:53.58032354Z, ProjectID: 697ff207197cc66080b02fe5, Cluster name: test-acc-tf-c-5439569532905955057
2026-02-02T03:38:54.2343189Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-02T03:38:54.2343869Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:38:54.2344451Z         
2026-02-02T03:38:54.2344710Z         Error: Error in create
2026-02-02T03:38:54.2345066Z         
2026-02-02T03:38:54.2345601Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:38:54.2346268Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:38:54.2346894Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:38:54.2347219Z         
2026-02-02T03:38:54.2347637Z         cluster=test-acc-tf-c-5439569532905955057 didn't reach desired state: IDLE,
2026-02-02T03:38:54.2348080Z         error: context deadline exceeded
2026-02-02T03:38:54.2810628Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10820.71s)
```

- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.3140779Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-03T00:39:18.3156615Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-03T00:39:28.3199043Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-03T00:39:28.3200906Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:28.319608069Z, ProjectID: 698143b4e3c7fce2317dc4d0, Cluster name: test-acc-tf-c-4330346262936946095
2026-02-03T00:39:29.1270834Z   
2026-02-03T00:39:29.1271540Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:29.1272192Z         
2026-02-03T00:39:29.1272630Z         Error: Error in create
2026-02-03T00:39:29.1273187Z         
2026-02-03T00:39:29.1273838Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:29.1275145Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:29.1276251Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:29.1276612Z         
2026-02-03T00:39:29.1277066Z         cluster name: test-acc-tf-c-4330346262936946095, API error details:
2026-02-03T00:39:29.1277788Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4e3c7fce2317dc4d0/clusters
2026-02-03T00:39:29.1278512Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:29.1279202Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:29.1279719Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:29.1744769Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10.86s)
```

- 2026-02-04

### Error 2026-02-04T00:35:34+00:00
```
2026-02-04T00:35:34.4296164Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-04T00:35:34.4305822Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-04T00:35:59.4424256Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-04T00:35:59.4426746Z     pre_check.go:46: Time before creating cluster: 2026-02-04T00:35:59.442137656Z, ProjectID: 698294544e657829c5739105, Cluster name: test-acc-tf-c-7865389767279547792
2026-02-04T03:36:00.3125362Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-04T03:36:00.3126175Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-02-04T03:36:00.3126676Z         
2026-02-04T03:36:00.3126934Z         Error: Error in create
2026-02-04T03:36:00.3127184Z         
2026-02-04T03:36:00.3127667Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-04T03:36:00.3128799Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-04T03:36:00.3129508Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-04T03:36:00.3130038Z         
2026-02-04T03:36:00.3130559Z         cluster=test-acc-tf-c-7865389767279547792 didn't reach desired state: IDLE,
2026-02-04T03:36:00.3131052Z         error: context deadline exceeded
2026-02-04T03:36:00.3608969Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10825.93s)
```

- 2026-02-05

### Error 2026-02-05T00:39:04+00:00
```
2026-02-05T00:39:04.4876604Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T00:39:04.4884248Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T00:39:19.4993145Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T01:28:55.9079193Z     pre_check.go:46: Time before creating cluster: 2026-02-05T00:39:19.498920686Z, ProjectID: 6983e6a6b0f8d5bab81972ba, Cluster name: test-acc-tf-c-2152889649476239244
2026-02-05T03:39:20.8736466Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-02-05T03:39:20.8737135Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-02-05T03:39:20.8737495Z         
2026-02-05T03:39:20.8738076Z         Error: Error in create
2026-02-05T03:39:20.8738340Z         
2026-02-05T03:39:20.8738696Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-05T03:39:20.8739426Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-05T03:39:20.8740160Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-05T03:39:20.8740588Z         
2026-02-05T03:39:20.8741160Z         cluster=test-acc-tf-c-2152889649476239244 didn't reach desired state: IDLE,
2026-02-05T03:39:20.8741621Z         error: context deadline exceeded
2026-02-05T03:39:20.9218520Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10816.43s)
```

- 2026-02-06 PASS 55 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 48 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 50 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 48 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 50 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 53 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 50 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 52 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
