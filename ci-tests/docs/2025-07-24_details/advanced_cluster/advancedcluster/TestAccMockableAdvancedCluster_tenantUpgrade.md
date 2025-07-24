# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 6)
Success rate: 83.33%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 01:01](#error-2025-07-06t0101130000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | qa |  | 2163.09s
[2025-07-10 03:38](#error-2025-07-10t0338500000) | API Error CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 35.05s
[2025-07-11 03:39](#error-2025-07-11t0339270000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68705b080642f25f3ba08e6b/clusters | dev |  | 50.05s
[2025-07-23 03:41](#error-2025-07-23t0341020000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68802d32c8bf846a30ed1e09/clusters | dev |  | 50.05s
[2025-07-23 11:39](#error-2025-07-23t1139380000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68809a22dafa37582cecdeff/clusters | qa | flaky_500 | 40.04s
[2025-07-23 16:33](#error-2025-07-23t1633570000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/6880e2540afa8a5c60506c34/clusters | qa |  | 60.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 19 minutes
- 2025-06-26 PASS 19 minutes
- 2025-06-27 PASS 28 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 24 minutes
- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 21 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 21 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06

### Error 2025-07-06T01:01:13+00:00
```
2025-07-06T01:01:13.3839889Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:01:13.3841575Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-06T01:02:29.8480839Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:03:29.8137166Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:03:29.8138444Z     pre_check.go:40: Time before creating cluster: 2025-07-06T01:03:29.813464685Z, ProjectID: 6869c418690ae45e168bdc48, Cluster name: test-acc-tf-c-3650899533151659350
2025-07-06T01:37:32.4575703Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-06T01:37:32.4577482Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-07-06T01:37:32.4579142Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-07-06T01:37:32.4580368Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-07-06T01:37:32.4581944Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-07-06T01:37:32.4583252Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-07-06T01:37:32.4584621Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-07-06T01:38:33.7232164Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2163.91s)
```

- 2025-07-07 PASS 21 minutes
- 2025-07-08 PASS 25 minutes
- 2025-07-09 PASS 21 minutes
- 2025-07-10

### Error 2025-07-10T03:38:50+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T03:38:50.317000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='14 days ago')
API Error CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/{groupId}/clusters
```
2025-07-10T03:38:50.3178114Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T03:38:50.3180711Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-10T03:40:20.4994430Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T03:40:55.4838700Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T03:40:55.4840393Z     pre_check.go:40: Time before creating cluster: 2025-07-10T03:40:55.483603804Z, ProjectID: 686f096a964afc762c20297c, Cluster name: test-acc-tf-c-7928385295381179982
2025-07-10T03:40:55.9875282Z   
2025-07-10T03:40:55.9875839Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-07-10T03:40:55.9876259Z         
2025-07-10T03:40:55.9879106Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/686f096a964afc762c20297c/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-07-10T03:40:55.9880943Z         
2025-07-10T03:40:55.9881267Z           with mongodbatlas_advanced_cluster.test,
2025-07-10T03:40:55.9881905Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-10T03:40:55.9882477Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-10T03:40:55.9882777Z         
2025-07-10T03:40:56.0336523Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (35.54s)
```

- 2025-07-11

### Error 2025-07-11T03:39:27+00:00
```
2025-07-11T03:39:27.3925237Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-11T03:39:27.3926570Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-11T03:41:02.0300131Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-11T03:41:52.0340234Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-11T03:41:52.0341891Z     pre_check.go:40: Time before creating cluster: 2025-07-11T03:41:52.033748823Z, ProjectID: 68705b080642f25f3ba08e6b, Cluster name: test-acc-tf-c-5382253822745792494
2025-07-11T03:41:52.4720129Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_terraform_path=/home/runner/work/_temp/23c747bb-2e38-4a66-a7c8-1531b2135310/terraform test_working_directory=/tmp/plugintest144230834
2025-07-11T03:41:52.4721233Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-07-11T03:41:52.4721658Z         
2025-07-11T03:41:52.4724903Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b080642f25f3ba08e6b/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-07-11T03:41:52.4726512Z         
2025-07-11T03:41:52.4726828Z           with mongodbatlas_advanced_cluster.test,
2025-07-11T03:41:52.4727455Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-11T03:41:52.4728037Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-11T03:41:52.4728356Z         
2025-07-11T03:41:52.5128351Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (50.48s)
```

- 2025-07-12 PASS 21 minutes
- 2025-07-13 PASS 24 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 26 minutes
- 2025-07-16 PASS 20 minutes
- 2025-07-17 PASS 21 minutes
- 2025-07-18 PASS 19 minutes
- 2025-07-19 PASS 21 minutes
- 2025-07-20 PASS 25 minutes
- 2025-07-21 PASS 17 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - FAIL 50 seconds

### Error 2025-07-23T03:41:02+00:00
```
2025-07-23T03:41:02.5754076Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T03:41:02.5757967Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-23T03:42:10.5574124Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T03:43:00.5422529Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T03:43:00.5424123Z     pre_check.go:40: Time before creating cluster: 2025-07-23T03:43:00.541953639Z, ProjectID: 68802d32c8bf846a30ed1e09, Cluster name: test-acc-tf-c-2543477833041307855
2025-07-23T03:43:01.0280512Z   
2025-07-23T03:43:01.0281066Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-07-23T03:43:01.0281681Z         
2025-07-23T03:43:01.0284530Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68802d32c8bf846a30ed1e09/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-07-23T03:43:01.0286410Z         
2025-07-23T03:43:01.0287094Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T03:43:01.0287936Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T03:43:01.0288533Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T03:43:01.0288838Z         
2025-07-23T03:43:01.0703216Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (50.53s)
```

  - FAIL 40 seconds

### Error 2025-07-23T11:39:38+00:00
```
2025-07-23T11:39:38.2364125Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T11:39:38.2365497Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-23T11:40:40.7205103Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T11:41:20.7222369Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T11:41:20.7223477Z     pre_check.go:40: Time before creating cluster: 2025-07-23T11:41:20.721975988Z, ProjectID: 68809a22dafa37582cecdeff, Cluster name: test-acc-tf-c-1718517633096521362
2025-07-23T11:41:21.0941500Z   
2025-07-23T11:41:21.0942047Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-07-23T11:41:21.0942477Z         
2025-07-23T11:41:21.0945499Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a22dafa37582cecdeff/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-07-23T11:41:21.0947111Z         
2025-07-23T11:41:21.0947443Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T11:41:21.0948075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T11:41:21.0948653Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T11:41:21.0948960Z         
2025-07-23T11:41:21.1354258Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (40.42s)
```

  - PASS 18 minutes
  - FAIL a minute

### Error 2025-07-23T16:33:57+00:00
```
2025-07-23T16:33:57.2689210Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T16:33:57.2690432Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-07-23T16:35:00.7465671Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T16:36:00.7217607Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T16:36:00.7219954Z     pre_check.go:40: Time before creating cluster: 2025-07-23T16:36:00.721421734Z, ProjectID: 6880e2540afa8a5c60506c34, Cluster name: test-acc-tf-c-1739584886786539174
2025-07-23T16:36:01.0701024Z   
2025-07-23T16:36:01.0701502Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-07-23T16:36:01.0701937Z         
2025-07-23T16:36:01.0704276Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2540afa8a5c60506c34/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-07-23T16:36:01.0706547Z         
2025-07-23T16:36:01.0706995Z           with mongodbatlas_advanced_cluster.test,
2025-07-23T16:36:01.0707639Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-23T16:36:01.0708238Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-07-23T16:36:01.0708553Z         
2025-07-23T16:36:01.1118293Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (60.37s)
```

- 2025-07-24 PASS 18 minutes