# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 19) FAIL(x 16) TIMEOUT
Success rate: 54.29%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 00:31](#error-2025-08-06t0031120000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/6892a24e2e7dcc2aaecb6865/clusters | dev |  | 60.04s
[2025-08-07 00:31](#error-2025-08-07t0031490000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev | flaky_check | 3966.02s
[2025-08-12 08:07](#error-2025-08-12t0807200000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/689af63563141409ee3d8998/clusters | dev |  | 86.02s
[2025-08-13 00:29](#error-2025-08-13t0029190000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/689bdc5c230cf52517c886ff/clusters | dev | flaky_500 | 20.04s
[2025-08-19 00:28](#error-2025-08-19t0028500000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68a3c53fc1be074b83c5b98c/clusters | dev |  | 80.04s
[2025-08-20 00:27](#error-2025-08-20t0027250000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters | dev |  | 95.05s
[2025-08-20 13:58](#error-2025-08-20t1358510000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/68a5d49af98188003c9999c9/clusters | qa |  | 70.04s
[2025-08-21 00:27](#error-2025-08-21t0027210000) |  | dev | timeout | 17935.00s
[2025-08-24 00:30](#error-2025-08-24t0030560000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | qa |  | 4026.06s
[2025-08-25 00:29](#error-2025-08-25t0029120000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68abae58cd8afb23a27a63fd/clusters | dev |  | 88.09s
[2025-08-26 00:27](#error-2025-08-26t0027390000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 4058.05s
[2025-08-27 00:27](#error-2025-08-27t0027410000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 4133.02s
[2025-08-28 00:27](#error-2025-08-28t0027310000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 3221.01s
[2025-09-01 00:30](#error-2025-09-01t0030410000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s
[2025-09-01 07:57](#error-2025-09-01t0757390000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 4056.01s
[2025-09-03 00:26](#error-2025-09-03t0026180000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 2617.08s
[2025-09-04 00:26](#error-2025-09-04t0026290000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 2434.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T00:31:12+00:00
```
2025-08-06T00:31:12.7783077Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-06T00:31:12.7784151Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-06T00:32:25.7140802Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-06T00:33:25.7181795Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-06T00:33:25.7182925Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:33:25.717928073Z, ProjectID: 6892a24e2e7dcc2aaecb6865, Cluster name: test-acc-tf-c-6379991982691082771
2025-08-06T00:33:26.0607763Z    test_terraform_path=/home/runner/work/_temp/8f89a198-6402-408d-b486-e76e64814049/terraform
2025-08-06T00:33:26.0608640Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-06T00:33:26.0609360Z         
2025-08-06T00:33:26.0612063Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a24e2e7dcc2aaecb6865/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-06T00:33:26.0613671Z         
2025-08-06T00:33:26.0613994Z           with mongodbatlas_advanced_cluster.test,
2025-08-06T00:33:26.0614635Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-06T00:33:26.0615214Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-06T00:33:26.0615510Z         
2025-08-06T00:33:26.1088578Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (60.40s)
```

- 2025-08-07

### Error 2025-08-07T00:31:49+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-08-07T00:31:49.251000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='28 days ago')
CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6
```
2025-08-07T00:31:49.2517581Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-07T00:31:49.2520663Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-07T00:35:02.1559332Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-07T00:36:07.1633146Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-07T00:36:07.1634629Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:36:07.16313991Z, ProjectID: 6893f3f09c9cc040e192f9b7, Cluster name: test-acc-tf-c-6773794599357929860
2025-08-07T01:36:30.2997570Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-07T01:36:30.2998766Z     resource_advanced_cluster_test.go:168: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-07T01:36:30.3000918Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-07T01:36:30.3002172Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-07T01:36:30.3003369Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-07T01:36:30.3004864Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-07T01:36:30.3006208Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-07T01:36:33.0731646Z   
2025-08-07T01:41:08.3237217Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (3966.17s)
```

- 2025-08-08 PASS 39 minutes
- 2025-08-09 PASS 36 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 32 minutes
  - FAIL a minute

### Error 2025-08-12T08:07:20+00:00
```
2025-08-12T08:07:20.2612082Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-12T08:07:20.2613264Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-12T08:08:38.7507161Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-12T08:10:04.4528238Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-12T08:10:04.4530321Z     pre_check.go:40: Time before creating cluster: 2025-08-12T08:10:04.45241401Z, ProjectID: 689af63563141409ee3d8998, Cluster name: test-acc-tf-c-3137509996556273173
2025-08-12T08:10:04.8754290Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_terraform_path=/home/runner/work/_temp/1070e8a3-3614-4426-af73-0807029eac14/terraform
2025-08-12T08:10:04.8755280Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-12T08:10:04.8755988Z         
2025-08-12T08:10:04.8758920Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689af63563141409ee3d8998/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-12T08:10:04.8760844Z         
2025-08-12T08:10:04.8761176Z           with mongodbatlas_advanced_cluster.test,
2025-08-12T08:10:04.8761830Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-12T08:10:04.8762443Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-12T08:10:04.8762756Z         
2025-08-12T08:10:04.9240332Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (86.17s)
```

- 2025-08-13

### Error 2025-08-13T00:29:19+00:00
```
2025-08-13T00:29:19.1993094Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-13T00:29:19.1994810Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-13T00:30:20.8465841Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-13T00:30:40.8497978Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-13T00:30:40.8500140Z     pre_check.go:40: Time before creating cluster: 2025-08-13T00:30:40.84948968Z, ProjectID: 689bdc5c230cf52517c886ff, Cluster name: test-acc-tf-c-407494987129614087
2025-08-13T00:30:41.2010711Z    test_terraform_path=/home/runner/work/_temp/169965c2-2bae-4fea-b86d-bc5bf6601a84/terraform test_working_directory=/tmp/plugintest2363184387 test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_step_number=1
2025-08-13T00:30:41.2012013Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-13T00:30:41.2012527Z         
2025-08-13T00:30:41.2015725Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689bdc5c230cf52517c886ff/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-13T00:30:41.2017308Z         
2025-08-13T00:30:41.2017627Z           with mongodbatlas_advanced_cluster.test,
2025-08-13T00:30:41.2018252Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-13T00:30:41.2018836Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-13T00:30:41.2019135Z         
2025-08-13T00:30:41.2462367Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (20.40s)
```

- 2025-08-14 PASS 36 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 47 minutes
- 2025-08-18 PASS 33 minutes
- 2025-08-19

### Error 2025-08-19T00:28:50+00:00
```
2025-08-19T00:28:50.7129768Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-19T00:28:50.7130992Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-19T00:29:44.1762811Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-19T00:31:04.1425535Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-19T00:31:04.1428248Z     pre_check.go:40: Time before creating cluster: 2025-08-19T00:31:04.14224436Z, ProjectID: 68a3c53fc1be074b83c5b98c, Cluster name: test-acc-tf-c-3523111903552908535
2025-08-19T00:31:04.5086589Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-19T00:31:04.5087784Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-19T00:31:04.5088203Z         
2025-08-19T00:31:04.5091090Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a3c53fc1be074b83c5b98c/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-19T00:31:04.5092687Z         
2025-08-19T00:31:04.5093016Z           with mongodbatlas_advanced_cluster.test,
2025-08-19T00:31:04.5093660Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-19T00:31:04.5094237Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-19T00:31:04.5094536Z         
2025-08-19T00:31:04.5508991Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (80.39s)
```

- 2025-08-20
  - FAIL a minute

### Error 2025-08-20T00:27:25+00:00
```
2025-08-20T00:27:25.8139912Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T00:27:25.8141333Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-20T00:28:29.0404650Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T00:30:04.0393843Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T00:30:04.0396167Z     pre_check.go:40: Time before creating cluster: 2025-08-20T00:30:04.039068748Z, ProjectID: 68a5166c552c1710e1fb279c, Cluster name: test-acc-tf-c-2069194349288963450
2025-08-20T00:30:04.4409651Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_terraform_path=/home/runner/work/_temp/3ecf3243-c170-407b-a20d-8f7a7a535dc8/terraform test_working_directory=/tmp/plugintest1841194550
2025-08-20T00:30:04.4411021Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-20T00:30:04.4411477Z         
2025-08-20T00:30:04.4414221Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-20T00:30:04.4416334Z         
2025-08-20T00:30:04.4416671Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T00:30:04.4417309Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T00:30:04.4417902Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T00:30:04.4418202Z         
2025-08-20T00:30:04.4830851Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (95.46s)
```

  - FAIL a minute

### Error 2025-08-20T13:58:51+00:00
```
2025-08-20T13:58:51.8636474Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T13:58:51.8637984Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-20T14:00:09.6456360Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T14:01:19.6391615Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T14:01:19.6393057Z     pre_check.go:40: Time before creating cluster: 2025-08-20T14:01:19.638853046Z, ProjectID: 68a5d49af98188003c9999c9, Cluster name: test-acc-tf-c-4305469167143403699
2025-08-20T14:01:19.9594649Z    test_working_directory=/tmp/plugintest692814980 test_step_number=1
2025-08-20T14:01:19.9595693Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-20T14:01:19.9596368Z         
2025-08-20T14:01:19.9600399Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d49af98188003c9999c9/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-20T14:01:19.9603426Z         
2025-08-20T14:01:19.9603968Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T14:01:19.9605050Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T14:01:19.9606059Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T14:01:19.9606562Z         
2025-08-20T14:01:20.0174529Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (70.38s)
```

- 2025-08-21

### Error 2025-08-21T00:27:21+00:00
```
2025-08-21T00:27:21.2320140Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T00:27:21.2321441Z     resource_advanced_cluster_test.go:168: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-21T00:28:16.0645265Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T00:29:16.0358943Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T00:29:16.0360656Z     pre_check.go:40: Time before creating cluster: 2025-08-21T00:29:16.035536034Z, ProjectID: 68a667e60ed8ff152ac7ecb0, Cluster name: test-acc-tf-c-3276941678344236643
2025-08-21T03:32:29.5129530Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T03:32:29.5130349Z     resource_advanced_cluster_test.go:168: Step 2/3 error: Error running apply: exit status 1
2025-08-21T03:32:29.5130974Z         
2025-08-21T03:32:29.5131984Z         Error: error updating advanced cluster (test-acc-tf-c-3276941678344236643): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-08-21T03:32:29.5132749Z         
2025-08-21T03:32:29.5133199Z           with mongodbatlas_advanced_cluster.test,
2025-08-21T03:32:29.5134028Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-21T03:32:29.5134872Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-08-21T03:32:29.5135203Z         
2025-08-21T03:32:33.3345751Z    test_terraform_path=/home/runner/work/_temp/c6e6ff24-2805-43b7-823c-d13bd22bdc44/terraform test_working_directory=/tmp/plugintest3531995527 test_step_number=2 test_name=TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T05:27:10.6082491Z panic: test timed out after 5h0m0s
2025-08-21T05:27:10.6083105Z 	running tests:
2025-08-21T05:27:10.6083787Z 		TestAccMockableAdvancedCluster_tenantUpgrade (4h58m55s)
```

- 2025-08-22: MISSING
- 2025-08-23 PASS 39 minutes
- 2025-08-24

### Error 2025-08-24T00:30:56+00:00
```
2025-08-24T00:30:56.3152342Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T00:30:58.3526596Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-24T00:32:02.0859793Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T00:33:07.0063593Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T00:33:07.0064781Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:33:07.006107398Z, ProjectID: 68aa5d409bbb8c4ee1f838a0, Cluster name: test-acc-tf-c-6598084478227700817
2025-08-24T01:38:05.8864226Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T01:38:05.8865327Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-24T01:38:05.8866943Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-24T01:38:05.8868824Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-24T01:38:05.8870683Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-24T01:38:05.8872299Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-24T01:38:05.8873801Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-24T01:39:06.5386853Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (4026.56s)
```

- 2025-08-25

### Error 2025-08-25T00:29:12+00:00
```
2025-08-25T00:29:12.8942374Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-25T00:29:15.8245709Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-25T00:30:27.1654366Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-25T00:31:52.1378930Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-25T00:31:52.1380597Z     pre_check.go:40: Time before creating cluster: 2025-08-25T00:31:52.137584972Z, ProjectID: 68abae58cd8afb23a27a63fd, Cluster name: test-acc-tf-c-3426161381896876610
2025-08-25T00:31:53.1325276Z   
2025-08-25T00:31:53.1325898Z     resource_advanced_cluster_test.go:169: Step 1/3 error: Error running apply: exit status 1
2025-08-25T00:31:53.1326320Z         
2025-08-25T00:31:53.1328449Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae58cd8afb23a27a63fd/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-25T00:31:53.1330466Z         
2025-08-25T00:31:53.1330797Z           with mongodbatlas_advanced_cluster.test,
2025-08-25T00:31:53.1331442Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-25T00:31:53.1332270Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-25T00:31:53.1332593Z         
2025-08-25T00:31:53.1765115Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (88.95s)
```

- 2025-08-26

### Error 2025-08-26T00:27:39+00:00
```
2025-08-26T00:27:39.1158170Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-26T00:27:41.1801932Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-26T00:28:49.1697948Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-26T00:29:54.1639495Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-26T00:29:54.1641565Z     pre_check.go:40: Time before creating cluster: 2025-08-26T00:29:54.163686416Z, ProjectID: 68acff7b52781c2812d00502, Cluster name: test-acc-tf-c-4490838404529246217
2025-08-26T01:34:54.8526975Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-26T01:34:54.8528387Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-26T01:34:54.8530194Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-26T01:34:54.8531515Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-26T01:34:54.8532834Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-26T01:34:54.8534476Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-26T01:34:54.8535819Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-26T01:36:25.6498116Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (4058.55s)
```

- 2025-08-27

### Error 2025-08-27T00:27:41+00:00
```
2025-08-27T00:27:41.7742854Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T00:27:44.0524017Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-27T00:28:59.6988574Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T00:29:49.6605145Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T00:29:49.6607296Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:29:49.660204088Z, ProjectID: 68ae50fd8c9e474c785b9035, Cluster name: test-acc-tf-c-6291174628137974495
2025-08-27T01:36:49.9685127Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T01:36:49.9686421Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-27T01:36:49.9687920Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-27T01:36:49.9689140Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-27T01:36:49.9690410Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-27T01:36:49.9691946Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-27T01:36:49.9693213Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-27T01:37:50.6394527Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (4133.22s)
```

- 2025-08-28

### Error 2025-08-28T00:27:31+00:00
```
2025-08-28T00:27:31.9134090Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T00:27:33.8013198Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-08-28T00:28:33.9030040Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T00:29:48.8708632Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T00:29:48.8710329Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:29:48.870564463Z, ProjectID: 68afa27372e5d2472952fca8, Cluster name: test-acc-tf-c-720193885532770232
2025-08-28T01:21:12.3672684Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T01:21:12.3674354Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-28T01:21:12.3676465Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-28T01:21:12.3677796Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-28T01:21:12.3679120Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-08-28T01:21:12.3680737Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-08-28T01:21:12.3682072Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-08-28T01:22:13.0834541Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (3221.09s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 36 minutes
- 2025-08-31 PASS 29 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.5981299Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T00:30:41.7207625Z     shared_resource.go:93: 
2025-09-01T00:30:41.7209870Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:41.7213673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:41.7216080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:41.7218108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:41.7220425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:166
2025-09-01T00:30:41.7221839Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:41.7222377Z         	Error:      	Received unexpected error:
2025-09-01T00:30:41.7225548Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:41.7226883Z         	Test:       	TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T00:30:41.7229165Z         	Messages:   	Project creation failed: test-acc-tf-p-8924450026832631059, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:41.7230645Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (0.12s)
```

  - PASS 39 minutes
  - FAIL an hour

### Error 2025-09-01T07:57:39+00:00
```
2025-09-01T07:57:39.2817027Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T07:57:41.4086745Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-09-01T07:59:40.0936155Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T08:01:10.0593828Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T08:01:10.0595529Z     pre_check.go:40: Time before creating cluster: 2025-09-01T08:01:10.059097256Z, ProjectID: 68b551f3e551ff23b4097438, Cluster name: test-acc-tf-c-5375144219216176422
2025-09-01T09:02:19.9909699Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T09:02:19.9911118Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-09-01T09:02:19.9912932Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-09-01T09:02:19.9914207Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-09-01T09:02:19.9915475Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-09-01T09:02:19.9917082Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-09-01T09:02:19.9918430Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-09-01T09:05:02.0878136Z 2025/09/01 09:05:02 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-09-01T09:07:13.9857769Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (4056.06s)
```

  - PASS 35 minutes
  - PASS 34 minutes
  - PASS 42 minutes
  - PASS 25 minutes
  - PASS 29 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03

### Error 2025-09-03T00:26:18+00:00
```
2025-09-03T00:26:18.4106065Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-03T00:26:19.8994020Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-09-03T00:27:34.8677957Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-03T00:28:49.8620517Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-03T00:28:49.8622520Z     pre_check.go:40: Time before creating cluster: 2025-09-03T00:28:49.861689382Z, ProjectID: 68b78b2aa89cf4184d27026c, Cluster name: test-acc-tf-c-2004844932621161400
2025-09-03T01:05:38.6095548Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-03T01:05:38.6097039Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-09-03T01:05:38.6098632Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-09-03T01:05:38.6100165Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-09-03T01:05:38.6101572Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-09-03T01:05:38.6102923Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-09-03T01:05:38.6104204Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-09-03T01:05:39.8967056Z 2025/09/03 01:05:39 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-09-03T01:11:11.1765232Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2617.80s)
```

- 2025-09-04

### Error 2025-09-04T00:26:29+00:00
```
2025-09-04T00:26:29.6545397Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-04T00:26:32.1407452Z     resource_advanced_cluster_test.go:169: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-09-04T00:27:48.8144600Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-04T00:28:48.7885314Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-04T00:28:48.7886967Z     pre_check.go:40: Time before creating cluster: 2025-09-04T00:28:48.788020509Z, ProjectID: 68b8dcb5ef2c35484d65b4c3, Cluster name: test-acc-tf-c-7844548682256176548
2025-09-04T01:06:09.5684064Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-04T01:06:09.5686140Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-09-04T01:06:09.5688829Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-09-04T01:06:09.5691251Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-09-04T01:06:09.5693832Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-09-04T01:06:09.5696276Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-09-04T01:06:09.5698651Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-09-04T01:08:20.8601786Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2434.55s)
```
