# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 26) FAIL(x 10)
Success rate: 72.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 00:29](#error-2025-07-10t0029320000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/686f096a964afc762c20297c/flexClusters/test-acc-tf-c-4979273047400699959 | dev | timeout | 10994.07s
[2025-07-11 00:30](#error-2025-07-11t0030020000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68705b080642f25f3ba08e6b/flexClusters/test-acc-tf-c-407319417844878369 | dev | timeout | 10993.09s
[2025-07-23 00:30](#error-2025-07-23t0030440000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68802d32c8bf846a30ed1e09/flexClusters/test-acc-tf-c-8289250742541584263 | dev | timeout | 10994.04s
[2025-07-23 08:15](#error-2025-07-23t0815320000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/68809a22dafa37582cecdeff/flexClusters/test-acc-tf-c-2072636036952028955 | qa | timeout | 10990.08s
[2025-07-23 13:23](#error-2025-07-23t1323330000) | CANNOT_USE_NON_FLEX_CLUSTER_IN_FLEX_API /api/atlas/v2/groups/6880e2540afa8a5c60506c34/flexClusters/test-acc-tf-c-6525145893966774536 | qa | timeout | 10990.05s
[2025-07-25 00:31](#error-2025-07-25t0031040000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/6882d047dcc4727c0ec4f769/clusters/test-acc-tf-c-3137159195104425468 | dev |  | 873.06s
[2025-07-26 00:29](#error-2025-07-26t0029420000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68842174a8aaac041ec4f2e3/clusters/test-acc-tf-c-4760441764857859093 | dev |  | 860.10s
[2025-07-28 00:33](#error-2025-07-28t0033100000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/6886c544d543ef30ea6bab2d/clusters/test-acc-tf-c-4414672739934594237 | dev |  | 890.01s
[2025-07-29 00:33](#error-2025-07-29t0033240000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/688816d229c5e61354b15291/clusters/test-acc-tf-c-7481542568151554970 | dev |  | 849.01s
[2025-07-30 00:31](#error-2025-07-30t0031100000) | API Error CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/{groupId}/clusters/{clusterName} | dev | unknown | 886.08s

## Timeline
- 2025-06-30: MISSING
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
- 2025-07-25

### Error 2025-07-25T00:31:04+00:00
```
2025-07-25T00:31:04.8437060Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-25T00:31:09.8483305Z     pre_check.go:40: Time before creating cluster: 2025-07-25T00:31:09.847940396Z, ProjectID: 6882d047dcc4727c0ec4f769, Cluster name: test-acc-tf-c-3137159195104425468
2025-07-25T00:45:38.1851450Z   
2025-07-25T00:45:38.1854070Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-25T00:45:38.1854769Z         
2025-07-25T00:45:38.1855862Z         Error: error updating advanced cluster (test-acc-tf-c-3137159195104425468): couldn't find resource (21 retries)
2025-07-25T00:45:38.1856701Z         
2025-07-25T00:45:38.1857249Z           with mongodbatlas_advanced_cluster.test,
2025-07-25T00:45:38.1858287Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-25T00:45:38.1859168Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-25T00:45:38.1859499Z         
2025-07-25T00:45:38.4799752Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-25T00:45:38.4800414Z         
2025-07-25T00:45:38.4802897Z         Error: error deleting advanced cluster (test-acc-tf-c-3137159195104425468): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6882d047dcc4727c0ec4f769/clusters/test-acc-tf-c-3137159195104425468 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-3137159195104425468 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-3137159195104425468], BadRequestDetail: 
2025-07-25T00:45:38.4804465Z         
2025-07-25T00:45:38.4804834Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (873.64s)
```

- 2025-07-26

### Error 2025-07-26T00:29:42+00:00
```
2025-07-26T00:29:42.8843987Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-26T00:29:47.8879875Z     pre_check.go:40: Time before creating cluster: 2025-07-26T00:29:47.887424909Z, ProjectID: 68842174a8aaac041ec4f2e3, Cluster name: test-acc-tf-c-4760441764857859093
2025-07-26T00:44:03.4930116Z   
2025-07-26T00:44:03.4930890Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-26T00:44:03.4931459Z         
2025-07-26T00:44:03.4932239Z         Error: error updating advanced cluster (test-acc-tf-c-4760441764857859093): couldn't find resource (21 retries)
2025-07-26T00:44:03.4933076Z         
2025-07-26T00:44:03.4933604Z           with mongodbatlas_advanced_cluster.test,
2025-07-26T00:44:03.4934507Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-26T00:44:03.4935625Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-26T00:44:03.4936062Z         
2025-07-26T00:44:03.8512052Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-26T00:44:03.8512776Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-26T00:44:03.8513218Z         
2025-07-26T00:44:03.8515579Z         Error: error deleting advanced cluster (test-acc-tf-c-4760441764857859093): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68842174a8aaac041ec4f2e3/clusters/test-acc-tf-c-4760441764857859093 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-4760441764857859093 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-4760441764857859093], BadRequestDetail: 
2025-07-26T00:44:03.8517332Z         
2025-07-26T00:44:03.8517687Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (860.97s)
```

- 2025-07-27 PASS 22 minutes
- 2025-07-28

### Error 2025-07-28T00:33:10+00:00
```
2025-07-28T00:33:10.3411156Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-28T00:33:15.3457753Z     pre_check.go:40: Time before creating cluster: 2025-07-28T00:33:15.345382476Z, ProjectID: 6886c544d543ef30ea6bab2d, Cluster name: test-acc-tf-c-4414672739934594237
2025-07-28T00:48:00.1361370Z   
2025-07-28T00:48:00.1362020Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-28T00:48:00.1362627Z         
2025-07-28T00:48:00.1363441Z         Error: error updating advanced cluster (test-acc-tf-c-4414672739934594237): couldn't find resource (21 retries)
2025-07-28T00:48:00.1364041Z         
2025-07-28T00:48:00.1364364Z           with mongodbatlas_advanced_cluster.test,
2025-07-28T00:48:00.1365199Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-28T00:48:00.1366319Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-28T00:48:00.1366675Z         
2025-07-28T00:48:00.4914908Z    test_terraform_path=/home/runner/work/_temp/85f40fd2-35be-4f08-b3c7-805528b7c725/terraform test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_working_directory=/tmp/plugintest726574359 test_step_number=3
2025-07-28T00:48:00.4916336Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-28T00:48:00.4916786Z         
2025-07-28T00:48:00.4919100Z         Error: error deleting advanced cluster (test-acc-tf-c-4414672739934594237): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6886c544d543ef30ea6bab2d/clusters/test-acc-tf-c-4414672739934594237 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-4414672739934594237 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-4414672739934594237], BadRequestDetail: 
2025-07-28T00:48:00.4920641Z         
2025-07-28T00:48:00.4921001Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (890.15s)
```

- 2025-07-29

### Error 2025-07-29T00:33:24+00:00
```
2025-07-29T00:33:24.1864949Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-29T00:33:29.1872001Z     pre_check.go:40: Time before creating cluster: 2025-07-29T00:33:29.18659475Z, ProjectID: 688816d229c5e61354b15291, Cluster name: test-acc-tf-c-7481542568151554970
2025-07-29T00:47:32.9415503Z   
2025-07-29T00:47:32.9416371Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-29T00:47:32.9417059Z         
2025-07-29T00:47:32.9418164Z         Error: error updating advanced cluster (test-acc-tf-c-7481542568151554970): couldn't find resource (21 retries)
2025-07-29T00:47:32.9418945Z         
2025-07-29T00:47:32.9419460Z           with mongodbatlas_advanced_cluster.test,
2025-07-29T00:47:32.9420622Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-29T00:47:32.9421934Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-29T00:47:32.9422489Z         
2025-07-29T00:47:33.2907009Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-29T00:47:33.2907452Z         
2025-07-29T00:47:33.2909810Z         Error: error deleting advanced cluster (test-acc-tf-c-7481542568151554970): https://cloud-dev.mongodb.com/api/atlas/v2/groups/688816d229c5e61354b15291/clusters/test-acc-tf-c-7481542568151554970 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-7481542568151554970 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-7481542568151554970], BadRequestDetail: 
2025-07-29T00:47:33.2911417Z         
2025-07-29T00:47:33.2911777Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (849.10s)
```

- 2025-07-30

### Error 2025-07-30T00:31:10+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-30T00:31:10.582000+00:00-TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade',confidence=1.0,ts_when='2 minutes ago')
API Error CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/{groupId}/clusters/{clusterName}
```
2025-07-30T00:31:10.5824478Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-30T00:31:15.5857636Z     pre_check.go:40: Time before creating cluster: 2025-07-30T00:31:15.585413282Z, ProjectID: 688967cc9a270e78174a01e0, Cluster name: test-acc-tf-c-1205741175453761884
2025-07-30T00:45:57.1909386Z   
2025-07-30T00:45:57.1910197Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-07-30T00:45:57.1910948Z         
2025-07-30T00:45:57.1912303Z         Error: error updating advanced cluster (test-acc-tf-c-1205741175453761884): couldn't find resource (21 retries)
2025-07-30T00:45:57.1913186Z         
2025-07-30T00:45:57.1913523Z           with mongodbatlas_advanced_cluster.test,
2025-07-30T00:45:57.1914160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-30T00:45:57.1915135Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-30T00:45:57.1915634Z         
2025-07-30T00:45:57.4071258Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-30T00:45:57.4071695Z         
2025-07-30T00:45:57.4074255Z         Error: error deleting advanced cluster (test-acc-tf-c-1205741175453761884): https://cloud-dev.mongodb.com/api/atlas/v2/groups/688967cc9a270e78174a01e0/clusters/test-acc-tf-c-1205741175453761884 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-1205741175453761884 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-1205741175453761884], BadRequestDetail: 
2025-07-30T00:45:57.4075828Z         
2025-07-30T00:45:57.4076188Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (886.82s)
```
