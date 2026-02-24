# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:54](#error-2026-01-29t0054480000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697aab85f4a2a16d1a68aeac/clusters | dev | out_of_capacity | 1104.01s
[2026-01-31 03:35](#error-2026-01-31t0335480000) |  | dev | timeout | 10806.05s
[2026-02-02 03:39](#error-2026-02-02t0339080000) |  | dev | timeout | 10806.06s
[2026-02-03 00:40](#error-2026-02-03t0040270000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b2b2e54ee9958ff9cf/clusters | dev | out_of_capacity | 6.08s
[2026-02-24 00:57](#error-2026-02-24t0057260000) |  | dev | flaky_500 | 1200.01s

### Timeline
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
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 18 minutes
- 2026-02-10 PASS 16 minutes
- 2026-02-11 PASS 16 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 33 minutes
- 2026-02-18 PASS 19 minutes
- 2026-02-19 PASS 28 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 17 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:57:26+00:00
```
2026-02-24T00:57:26.9376127Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9379687Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9382005Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9383761Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:01.218935165Z, ProjectID: 699cf2a48dfec41eaa848c30, Cluster name: test-acc-tf-c-3824990927709651768
2026-02-24T00:57:26.9429204Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-02-24T00:57:26.9430382Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-02-24T00:57:26.9431410Z         
2026-02-24T00:57:26.9431996Z         Error: error reading Advanced Configuration
2026-02-24T00:57:26.9432525Z         
2026-02-24T00:57:26.9433182Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-24T00:57:26.9434500Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-24T00:57:26.9435744Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-24T00:57:26.9436365Z         
2026-02-24T00:57:26.9437158Z         cluster name: test-acc-tf-c-3824990927709651768, API error details: (503
2026-02-24T00:57:26.9438364Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:26.9439453Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (1200.12s)
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
- 2026-02-01 PASS 14 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 17 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
