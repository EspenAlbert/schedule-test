# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 7)
Success rate: 78.79%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-17 00:43](#error-2026-01-17t0043450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/696ad820bab4422df29973f2/clusters | dev | out_of_capacity | 794.09s
[2026-01-21 00:47](#error-2026-01-21t0047180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69701e9fc42e4e02683fadd6/clusters | dev | out_of_capacity | 883.08s
[2026-01-29 00:54](#error-2026-01-29t0054480000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697aab85f4a2a16d1a68aeac/clusters | dev | out_of_capacity | 1104.01s
[2026-01-31 03:35](#error-2026-01-31t0335480000) |  | dev | timeout | 10806.05s
[2026-02-02 03:39](#error-2026-02-02t0339080000) |  | dev | timeout | 10806.06s
[2026-02-03 00:40](#error-2026-02-03t0040270000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b2b2e54ee9958ff9cf/clusters | dev | out_of_capacity | 6.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 13 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 17 minutes
- 2026-01-13 PASS 21 minutes
- 2026-01-14 PASS 14 minutes
- 2026-01-15 PASS 19 minutes
- 2026-01-16 PASS 16 minutes
- 2026-01-17

### Error 2026-01-17T00:43:45+00:00
```
2026-01-17T00:43:45.2332541Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-01-17T00:43:45.2336133Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-17T00:43:45.2338600Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-17T00:43:45.2340549Z     pre_check.go:46: Time before creating cluster: 2026-01-17T00:30:34.791047044Z, ProjectID: 696ad820bab4422df29973f2, Cluster name: test-acc-tf-c-887449948257735466
2026-01-17T00:43:45.2441128Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-17T00:43:45.2442387Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-01-17T00:43:45.2443354Z         
2026-01-17T00:43:45.2443878Z         Error: Error in create
2026-01-17T00:43:45.2444384Z         
2026-01-17T00:43:45.2445103Z           with mongodbatlas_advanced_cluster.cluster2,
2026-01-17T00:43:45.2446505Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-01-17T00:43:45.2447806Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-01-17T00:43:45.2448465Z         
2026-01-17T00:43:45.2449295Z         cluster name: test-acc-tf-c-1081210430107327826, API error details:
2026-01-17T00:43:45.2450899Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/696ad820bab4422df29973f2/clusters
2026-01-17T00:43:45.2451928Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-17T00:43:45.2452622Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-17T00:43:45.2453152Z         Conflict. Params: [], BadRequestDetail: 
2026-01-17T00:43:45.2453691Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (794.85s)
```

- 2026-01-18: MISSING
- 2026-01-19 PASS 15 minutes
- 2026-01-20 PASS 17 minutes
- 2026-01-21

### Error 2026-01-21T00:47:18+00:00
```
2026-01-21T00:47:18.0143435Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-01-21T00:47:18.0145730Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-21T00:47:18.0148798Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-21T00:47:18.0150199Z     pre_check.go:46: Time before creating cluster: 2026-01-21T00:32:38.773546714Z, ProjectID: 69701e9fc42e4e02683fadd6, Cluster name: test-acc-tf-c-2567322519358916547
2026-01-21T00:47:18.0181140Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-21T00:47:18.0181816Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-01-21T00:47:18.0182321Z         
2026-01-21T00:47:18.0182741Z         Error: Error in create
2026-01-21T00:47:18.0183003Z         
2026-01-21T00:47:18.0183396Z           with mongodbatlas_advanced_cluster.cluster2,
2026-01-21T00:47:18.0184236Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-01-21T00:47:18.0184935Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-01-21T00:47:18.0185287Z         
2026-01-21T00:47:18.0185738Z         cluster name: test-acc-tf-c-7254597619859735083, API error details:
2026-01-21T00:47:18.0186466Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69701e9fc42e4e02683fadd6/clusters
2026-01-21T00:47:18.0187206Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-21T00:47:18.0187914Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-21T00:47:18.0188573Z         Conflict. Params: [], BadRequestDetail: 
2026-01-21T00:47:18.0189005Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (883.79s)
```

- 2026-01-22 PASS 18 minutes
- 2026-01-23 PASS 18 minutes
- 2026-01-24 PASS 14 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 16 minutes
- 2026-01-27 PASS 16 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29

### Error 2026-01-29T00:54:48+00:00
```
2026-01-29T00:54:48.9181347Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-01-29T00:54:48.9184730Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-29T00:54:48.9188190Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-29T00:54:48.9190001Z     pre_check.go:46: Time before creating cluster: 2026-01-29T00:36:29.12846935Z, ProjectID: 697aab85f4a2a16d1a68aeac, Cluster name: test-acc-tf-c-6362539285833458183
2026-01-29T00:54:48.9224122Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-29T00:54:48.9224796Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-01-29T00:54:48.9225302Z         
2026-01-29T00:54:48.9225564Z         Error: Error in create
2026-01-29T00:54:48.9225819Z         
2026-01-29T00:54:48.9226188Z           with mongodbatlas_advanced_cluster.cluster2,
2026-01-29T00:54:48.9226898Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-01-29T00:54:48.9227572Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-01-29T00:54:48.9227912Z         
2026-01-29T00:54:48.9228347Z         cluster name: test-acc-tf-c-5962875395473103591, API error details:
2026-01-29T00:54:48.9229180Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab85f4a2a16d1a68aeac/clusters
2026-01-29T00:54:48.9229906Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-29T00:54:48.9230879Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-29T00:54:48.9231401Z         Conflict. Params: [], BadRequestDetail: 
2026-01-29T00:54:48.9231815Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (1104.10s)
```

- 2026-01-30 PASS 25 minutes
- 2026-01-31

### Error 2026-01-31T03:35:48+00:00
```
2026-01-31T03:35:48.8042293Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-01-31T03:35:48.8046425Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-31T03:35:48.8049524Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-31T03:35:48.8051261Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:16.418129495Z, ProjectID: 697d4e3dff188f1e45c4534d, Cluster name: test-acc-tf-c-3064528362887363310
2026-01-31T03:35:48.8068780Z    test_terraform_path=/home/runner/work/_temp/6964bba4-1218-4f42-b5b7-3a85e6b84a8e/terraform
2026-01-31T03:35:48.8110860Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-31T03:35:48.8111673Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:35:48.8112159Z         
2026-01-31T03:35:48.8112411Z         Error: Error in create
2026-01-31T03:35:48.8112661Z         
2026-01-31T03:35:48.8113034Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:48.8113768Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:48.8114683Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:48.8115034Z         
2026-01-31T03:35:48.8115498Z         cluster=test-acc-tf-c-3064528362887363310 didn't reach desired state: IDLE,
2026-01-31T03:35:48.8115985Z         error: context deadline exceeded
2026-01-31T03:35:48.8116261Z         
2026-01-31T03:35:48.8116504Z         Error: Error in create
2026-01-31T03:35:48.8116756Z         
2026-01-31T03:35:48.8117108Z           with mongodbatlas_advanced_cluster.cluster2,
2026-01-31T03:35:48.8117933Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-01-31T03:35:48.8118605Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-01-31T03:35:48.8118939Z         
2026-01-31T03:35:48.8119394Z         cluster=test-acc-tf-c-8705302381297059807 didn't reach desired state: IDLE,
2026-01-31T03:35:48.8119878Z         error: context deadline exceeded
2026-01-31T03:35:48.8120261Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (10806.45s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:08+00:00
```
2026-02-02T03:39:08.6120358Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-02-02T03:39:08.6122391Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-02T03:39:08.6126801Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-02T03:39:08.6128785Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:36.694364583Z, ProjectID: 697ff205197cc66080b017c1, Cluster name: test-acc-tf-c-8670177884847710370
2026-02-02T03:39:08.6152392Z    test_terraform_path=/home/runner/work/_temp/89fea399-e040-43f5-8f3f-cae11fd73362/terraform test_name=TestAccFederatedDatabaseInstance_azureCloudProviderConfig test_working_directory=/tmp/plugintest3938093023
2026-02-02T03:39:08.6238308Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-02T03:39:08.6239478Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:39:08.6240495Z         
2026-02-02T03:39:08.6240939Z         Error: Error in create
2026-02-02T03:39:08.6241371Z         
2026-02-02T03:39:08.6242018Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:39:08.6243295Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:39:08.6244643Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:39:08.6245247Z         
2026-02-02T03:39:08.6246064Z         cluster=test-acc-tf-c-8670177884847710370 didn't reach desired state: IDLE,
2026-02-02T03:39:08.6246880Z         error: context deadline exceeded
2026-02-02T03:39:08.6247354Z         
2026-02-02T03:39:08.6247783Z         Error: Error in create
2026-02-02T03:39:08.6248228Z         
2026-02-02T03:39:08.6248844Z           with mongodbatlas_advanced_cluster.cluster2,
2026-02-02T03:39:08.6250065Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-02-02T03:39:08.6251219Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-02-02T03:39:08.6251792Z         
2026-02-02T03:39:08.6252617Z         cluster=test-acc-tf-c-5845156499991743983 didn't reach desired state: IDLE,
2026-02-02T03:39:08.6253445Z         error: context deadline exceeded
2026-02-02T03:39:08.6254372Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (10806.57s)
```

- 2026-02-03

### Error 2026-02-03T00:40:27+00:00
```
2026-02-03T00:40:27.4926591Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-02-03T00:40:27.4930167Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-03T00:40:27.4932355Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-03T00:40:27.4933990Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:22.617205986Z, ProjectID: 698143b2b2e54ee9958ff9cf, Cluster name: test-acc-tf-c-6837797597243446704
2026-02-03T00:40:27.4975407Z   
2026-02-03T00:40:27.4976291Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:40:27.4977244Z         
2026-02-03T00:40:27.4977687Z         Error: Error in create
2026-02-03T00:40:27.4978308Z         
2026-02-03T00:40:27.4978956Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:27.4980249Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:27.4981478Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:27.4982100Z         
2026-02-03T00:40:27.4982850Z         cluster name: test-acc-tf-c-6837797597243446704, API error details:
2026-02-03T00:40:27.4984070Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b2b2e54ee9958ff9cf/clusters
2026-02-03T00:40:27.4985321Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:27.4986505Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:27.4987595Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:27.4988113Z         
2026-02-03T00:40:27.4988564Z         Error: Error in create
2026-02-03T00:40:27.4989009Z         
2026-02-03T00:40:27.4989787Z           with mongodbatlas_advanced_cluster.cluster2,
2026-02-03T00:40:27.4991060Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-02-03T00:40:27.4992231Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-02-03T00:40:27.4992823Z         
2026-02-03T00:40:27.4993570Z         cluster name: test-acc-tf-c-2602249854134697637, API error details:
2026-02-03T00:40:27.4994790Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b2b2e54ee9958ff9cf/clusters
2026-02-03T00:40:27.4996007Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:27.4997338Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:27.4998228Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:27.4998908Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (6.79s)
```

- 2026-02-04 PASS 17 minutes
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 17 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-25 00:49](#error-2026-01-25t0049100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6975654baff53e81ac7a7f6a/clusters | qa | out_of_capacity | 823.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 14 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 12 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 14 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25

### Error 2026-01-25T00:49:10+00:00
```
2026-01-25T00:49:10.3221568Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-01-25T00:49:10.3223413Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-25T00:49:10.3225461Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-25T00:49:10.3226704Z     pre_check.go:46: Time before creating cluster: 2026-01-25T00:35:31.255353347Z, ProjectID: 6975654baff53e81ac7a7f6a, Cluster name: test-acc-tf-c-997257453091226066
2026-01-25T00:49:10.3253727Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-25T00:49:10.3254366Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-01-25T00:49:10.3254840Z         
2026-01-25T00:49:10.3255108Z         Error: Error in create
2026-01-25T00:49:10.3255374Z         
2026-01-25T00:49:10.3255737Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-25T00:49:10.3256555Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-25T00:49:10.3257223Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-25T00:49:10.3257570Z         
2026-01-25T00:49:10.3257991Z         cluster name: test-acc-tf-c-997257453091226066, API error details:
2026-01-25T00:49:10.3258640Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6975654baff53e81ac7a7f6a/clusters
2026-01-25T00:49:10.3259309Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-25T00:49:10.3259955Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-25T00:49:10.3260463Z         Conflict. Params: [], BadRequestDetail: 
2026-01-25T00:49:10.3260881Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (823.69s)
```

- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 14 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
