# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 00:29](#error-2025-07-10t0029320000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/686f096a964afc762c20297c/flexClusters/test-acc-tf-c-4979273047400699959 | dev | timeout | 10994.07s
[2025-07-11 00:30](#error-2025-07-11t0030020000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68705b080642f25f3ba08e6b/flexClusters/test-acc-tf-c-407319417844878369 | dev | timeout | 10993.09s
[2025-07-23 00:30](#error-2025-07-23t0030440000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68802d32c8bf846a30ed1e09/flexClusters/test-acc-tf-c-8289250742541584263 | dev | timeout | 10994.04s
[2025-07-23 08:15](#error-2025-07-23t0815320000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68809a22dafa37582cecdeff/flexClusters/test-acc-tf-c-2072636036952028955 | qa | timeout | 10990.08s
[2025-07-23 13:23](#error-2025-07-23t1323330000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/6880e2540afa8a5c60506c34/flexClusters/test-acc-tf-c-6525145893966774536 | qa | timeout | 10990.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 31 minutes
- 2025-06-26 PASS 22 minutes
- 2025-06-27 PASS 21 minutes
- 2025-06-28 PASS 23 minutes
- 2025-06-29 PASS 24 minutes
- 2025-06-30 PASS 21 minutes
- 2025-07-01
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 21 minutes
- 2025-07-04 PASS 22 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06 PASS 21 minutes
- 2025-07-07 PASS 22 minutes
- 2025-07-08 PASS 22 minutes
- 2025-07-09 PASS 32 minutes
- 2025-07-10

### Error 2025-07-10T00:29:32+00:00
```
2025-07-10T00:29:32.2524307Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-10T00:29:37.2549833Z     pre_check.go:40: Time before creating cluster: 2025-07-10T00:29:37.254346988Z, ProjectID: 686f096a964afc762c20297c, Cluster name: test-acc-tf-c-4979273047400699959
2025-07-10T03:32:46.5818348Z    test_terraform_path=/home/runner/work/_temp/449eea15-3fb6-41a7-966b-3e4ff385c081/terraform test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_working_directory=/tmp/plugintest2964136079 test_step_number=2
2025-07-10T03:32:46.5822299Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-10T03:32:46.5822777Z         
2025-07-10T03:32:46.5823907Z         Error: error updating advanced cluster (test-acc-tf-c-4979273047400699959): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-07-10T03:32:46.5824928Z         
2025-07-10T03:32:46.5825531Z           with mongodbatlas_advanced_cluster.test,
2025-07-10T03:32:46.5826188Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-10T03:32:46.5826774Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-10T03:32:46.5827068Z         
2025-07-10T03:32:46.9256670Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/449eea15-3fb6-41a7-966b-3e4ff385c081/terraform
2025-07-10T03:32:46.9257689Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T03:32:46.9258148Z         
2025-07-10T03:32:46.9260628Z         Error: error deleting a flex cluster (test-acc-tf-c-4979273047400699959): https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c20297c/flexClusters/test-acc-tf-c-4979273047400699959 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-4979273047400699959 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-4979273047400699959], BadRequestDetail: 
2025-07-10T03:32:46.9262318Z         
2025-07-10T03:32:46.9262701Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10994.67s)
```

- 2025-07-11

### Error 2025-07-11T00:30:02+00:00
```
2025-07-11T00:30:02.6347070Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-11T00:30:07.6389238Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:07.63850797Z, ProjectID: 68705b080642f25f3ba08e6b, Cluster name: test-acc-tf-c-407319417844878369
2025-07-11T03:33:16.2468711Z    test_step_number=2 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/23c747bb-2e38-4a66-a7c8-1531b2135310/terraform
2025-07-11T03:33:16.2470314Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-11T03:33:16.2470950Z         
2025-07-11T03:33:16.2472394Z         Error: error updating advanced cluster (test-acc-tf-c-407319417844878369): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-07-11T03:33:16.2473808Z         
2025-07-11T03:33:16.2474696Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T03:33:16.2475833Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T03:33:16.2476711Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T03:33:16.2477027Z         
2025-07-11T03:33:16.5602079Z    test_working_directory=/tmp/plugintest401505679 test_step_number=2 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/23c747bb-2e38-4a66-a7c8-1531b2135310/terraform
2025-07-11T03:33:16.5603595Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T03:33:16.5604024Z         
2025-07-11T03:33:16.5606299Z         Error: error deleting a flex cluster (test-acc-tf-c-407319417844878369): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b080642f25f3ba08e6b/flexClusters/test-acc-tf-c-407319417844878369 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-407319417844878369 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-407319417844878369], BadRequestDetail: 
2025-07-11T03:33:16.5607833Z         
2025-07-11T03:33:16.5608191Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10993.93s)
```

- 2025-07-12 PASS 25 minutes
- 2025-07-13 PASS 25 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 22 minutes
- 2025-07-16 PASS 26 minutes
- 2025-07-17 PASS 23 minutes
- 2025-07-18 PASS 25 minutes
- 2025-07-19 PASS 22 minutes
- 2025-07-20 PASS 21 minutes
- 2025-07-21 PASS 21 minutes
- 2025-07-22 PASS 22 minutes
- 2025-07-23
  - FAIL 3 hours

### Error 2025-07-23T00:30:44+00:00
```
2025-07-23T00:30:44.6396164Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T00:30:49.6442643Z     pre_check.go:40: Time before creating cluster: 2025-07-23T00:30:49.643874477Z, ProjectID: 68802d32c8bf846a30ed1e09, Cluster name: test-acc-tf-c-8289250742541584263
2025-07-23T03:33:58.6857707Z    test_terraform_path=/home/runner/work/_temp/7a3634d2-4a9e-4d8d-a5de-c398c74c7f95/terraform
2025-07-23T03:33:58.6859815Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-23T03:33:58.6860482Z         
2025-07-23T03:33:58.6861965Z         Error: error updating advanced cluster (test-acc-tf-c-8289250742541584263): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-07-23T03:33:58.6863044Z         
2025-07-23T03:33:58.6863880Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T03:33:58.6864977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T03:33:58.6866290Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T03:33:58.6866863Z         
2025-07-23T03:33:59.0387672Z    test_terraform_path=/home/runner/work/_temp/7a3634d2-4a9e-4d8d-a5de-c398c74c7f95/terraform test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_working_directory=/tmp/plugintest3544998582
2025-07-23T03:33:59.0388878Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-23T03:33:59.0389321Z         
2025-07-23T03:33:59.0391686Z         Error: error deleting a flex cluster (test-acc-tf-c-8289250742541584263): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68802d32c8bf846a30ed1e09/flexClusters/test-acc-tf-c-8289250742541584263 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-8289250742541584263 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-8289250742541584263], BadRequestDetail: 
2025-07-23T03:33:59.0393244Z         
2025-07-23T03:33:59.0393595Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10994.40s)
```

  - FAIL 3 hours

### Error 2025-07-23T08:15:32+00:00
```
2025-07-23T08:15:32.4587061Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T08:15:37.4613106Z     pre_check.go:40: Time before creating cluster: 2025-07-23T08:15:37.460715553Z, ProjectID: 68809a22dafa37582cecdeff, Cluster name: test-acc-tf-c-2072636036952028955
2025-07-23T11:18:42.9875878Z   
2025-07-23T11:18:42.9876918Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-23T11:18:42.9877673Z         
2025-07-23T11:18:42.9878753Z         Error: error updating advanced cluster (test-acc-tf-c-2072636036952028955): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-07-23T11:18:42.9879548Z         
2025-07-23T11:18:42.9880406Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T11:18:42.9881108Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T11:18:42.9881911Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T11:18:42.9882225Z         
2025-07-23T11:18:43.2128102Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-23T11:18:43.2128573Z         
2025-07-23T11:18:43.2131133Z         Error: error deleting a flex cluster (test-acc-tf-c-2072636036952028955): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a22dafa37582cecdeff/flexClusters/test-acc-tf-c-2072636036952028955 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-2072636036952028955 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-2072636036952028955], BadRequestDetail: 
2025-07-23T11:18:43.2132976Z         
2025-07-23T11:18:43.2133336Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10990.75s)
```

  - FAIL 3 hours

### Error 2025-07-23T13:23:33+00:00
```
2025-07-23T13:23:33.4783965Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T13:23:38.4821339Z     pre_check.go:40: Time before creating cluster: 2025-07-23T13:23:38.481518892Z, ProjectID: 6880e2540afa8a5c60506c34, Cluster name: test-acc-tf-c-6525145893966774536
2025-07-23T16:26:43.7382824Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/f624d604-afd6-45ae-9298-6f57fbe31886/terraform test_working_directory=/tmp/plugintest818991638 test_step_number=2
2025-07-23T16:26:43.7385157Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-23T16:26:43.7385914Z         
2025-07-23T16:26:43.7387567Z         Error: error updating advanced cluster (test-acc-tf-c-6525145893966774536): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-07-23T16:26:43.7388741Z         
2025-07-23T16:26:43.7390077Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T16:26:43.7391340Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T16:26:43.7392440Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T16:26:43.7393054Z         
2025-07-23T16:26:43.9321613Z    test_step_number=2 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-23T16:26:43.9322406Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-23T16:26:43.9322861Z         
2025-07-23T16:26:43.9325170Z         Error: error deleting a flex cluster (test-acc-tf-c-6525145893966774536): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2540afa8a5c60506c34/flexClusters/test-acc-tf-c-6525145893966774536 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API") Detail: Cannot use non-flex cluster test-acc-tf-c-6525145893966774536 in the flex API. Reason: Bad Request. Params: [test-acc-tf-c-6525145893966774536], BadRequestDetail: 
2025-07-23T16:26:43.9326687Z         
2025-07-23T16:26:43.9327054Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10990.45s)
```

  - PASS 21 minutes
- 2025-07-24 PASS 23 minutes