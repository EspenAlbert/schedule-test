# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 105) FAIL(x 10)
Success rate: 91.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-15 00:55](#error-2025-04-15t0055080000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 2217.06s
[2025-04-22 00:53](#error-2025-04-22t0053420000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 2156.07s
[2025-05-11 00:30](#error-2025-05-11t0030090000) |  | qa |  | 0.01s
[2025-05-28 09:05](#error-2025-05-28t0905030000) |  | qa |  | 1006.05s
[2025-05-30 01:06](#error-2025-05-30t0106420000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 4909.09s
[2025-06-01 21:52](#error-2025-06-01t2152450000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 2188.09s
[2025-06-05 00:35](#error-2025-06-05t0035240000) | CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters | dev |  | 45.05s
[2025-06-18 00:57](#error-2025-06-18t0057350000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev | flaky_check | 2209.01s
[2025-07-06 01:01](#error-2025-07-06t0101130000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | qa |  | 2163.09s
[2025-07-10 03:38](#error-2025-07-10t0338500000) | API Error CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 35.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 21 minutes
- 2025-04-13 PASS 26 minutes
- 2025-04-14 PASS 19 minutes
- 2025-04-15

### Error 2025-04-15T00:55:08+00:00
```
2025-04-15T00:55:08.3163182Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-15T00:55:08.3164292Z     resource_advanced_cluster_test.go:164: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-04-15T00:56:51.1049655Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-15T00:58:01.0464297Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-15T00:58:01.0466778Z     pre_check.go:40: Time before creating cluster: 2025-04-15T00:58:01.046096599Z, ProjectID: 67fda792eb449713bee3c408, Cluster name: test-acc-tf-c-7168105264405218355
2025-04-15T01:32:48.0435702Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-15T01:32:48.0437128Z     resource_advanced_cluster_test.go:164: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-04-15T01:32:48.0438625Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-04-15T01:32:48.0439865Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-04-15T01:32:48.0441123Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-04-15T01:32:48.0442436Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-04-15T01:32:48.0443710Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-04-15T01:33:48.6831361Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2217.61s)
```

- 2025-04-16
  - PASS 17 minutes
  - PASS 32 minutes
- 2025-04-17 PASS 20 minutes
- 2025-04-18 PASS 23 minutes
- 2025-04-19 PASS 22 minutes
- 2025-04-20 PASS 22 minutes
- 2025-04-21 PASS 28 minutes
- 2025-04-22

### Error 2025-04-22T00:53:42+00:00
```
2025-04-22T00:53:42.1381033Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-22T00:53:42.1382679Z     resource_advanced_cluster_test.go:164: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-04-22T00:55:01.6919860Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-22T00:56:06.6531693Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-22T00:56:06.6532925Z     pre_check.go:40: Time before creating cluster: 2025-04-22T00:56:06.652869811Z, ProjectID: 6806e2691439031180cab7b5, Cluster name: test-acc-tf-c-5746104593834017186
2025-04-22T01:29:57.1958093Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-04-22T01:29:57.1959375Z     resource_advanced_cluster_test.go:164: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-04-22T01:29:57.1960811Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-04-22T01:29:57.1962285Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-04-22T01:29:57.1963554Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-04-22T01:29:57.1964865Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-04-22T01:29:57.1966151Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-04-22T01:30:58.3893624Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2156.73s)
```

- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 21 minutes
- 2025-04-25 PASS 23 minutes
- 2025-04-26 PASS 21 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 23 minutes
- 2025-04-29 PASS 23 minutes
- 2025-04-30 PASS 24 minutes
- 2025-05-01
  - PASS 25 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-05-02 PASS 24 minutes
- 2025-05-03 PASS 20 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 19 minutes
- 2025-05-06 PASS 22 minutes
- 2025-05-07 PASS 21 minutes
- 2025-05-08 PASS 23 minutes
- 2025-05-09 PASS 21 minutes
- 2025-05-10 PASS 21 minutes
- 2025-05-11

### Error 2025-05-11T00:30:09+00:00
```
2025-05-11T00:30:09.6177795Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-11T00:30:09.6777429Z     shared_resource.go:84: 
2025-05-11T00:30:09.6778706Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.6780555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.6782668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.6784868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.6786942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:161
2025-05-11T00:30:09.6787747Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.6788592Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.6789172Z         	Test:       	TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-11T00:30:09.6790181Z         	Messages:   	Project creation failed: test-acc-tf-p-2369096883247736468, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.6791008Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (0.06s)
```

- 2025-05-12 PASS 22 minutes
- 2025-05-13
  - PASS 20 minutes
  - PASS 20 minutes
- 2025-05-14 PASS 22 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 19 minutes
- 2025-05-17 PASS 19 minutes
- 2025-05-18 PASS 19 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 22 minutes
- 2025-05-22 PASS 22 minutes
- 2025-05-23 PASS 21 minutes
- 2025-05-24 PASS 19 minutes
- 2025-05-25 PASS 22 minutes
- 2025-05-26 PASS 20 minutes
- 2025-05-27 PASS 20 minutes
- 2025-05-28
  - PASS 18 minutes
  - FAIL 16 minutes

### Error 2025-05-28T09:05:03+00:00
```
2025-05-28T09:05:03.5510816Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:05:03.5513183Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-28T09:06:19.2002968Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:07:19.1741990Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:07:19.1743480Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:07:19.173617044Z, ProjectID: 6836cb3ae6404f5026cefe5c, Cluster name: test-acc-tf-c-6225934015367723171
2025-05-28T09:18:53.5649962Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-28T09:18:53.5650721Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Error running apply: exit status 1
2025-05-28T09:18:53.5651242Z         
2025-05-28T09:18:53.5652675Z         Error: error updating advanced cluster (test-acc-tf-c-6225934015367723171): unexpected state 'PENDING', wanted target 'IDLE'. last error: %!s(<nil>)
2025-05-28T09:18:53.5653663Z         
2025-05-28T09:18:53.5654135Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T09:18:53.5654914Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T09:18:53.5655585Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T09:18:53.5655940Z         
2025-05-28T09:23:05.7194698Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (1006.53s)
```

  - PASS 22 minutes
- 2025-05-29
  - PASS 26 minutes
  - PASS 17 minutes
- 2025-05-30
  - FAIL an hour

### Error 2025-05-30T01:06:42+00:00
```
2025-05-30T01:06:42.7179857Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T01:06:42.7182123Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-05-30T01:07:54.5540171Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T01:08:59.5285641Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T01:08:59.5287215Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:08:59.528333776Z, ProjectID: 6838fdf63a84470fe9d50aa7, Cluster name: test-acc-tf-c-7688489853782912900
2025-05-30T02:26:43.0757286Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-30T02:26:43.0758762Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-05-30T02:26:43.0760622Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-05-30T02:26:43.0762221Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-05-30T02:26:43.0763969Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-05-30T02:26:43.0765613Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-05-30T02:26:43.0766956Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-05-30T02:29:44.4259260Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (4909.87s)
```

  - PASS 16 minutes
- 2025-05-31 PASS 21 minutes
- 2025-06-01
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 20 minutes
  - FAIL 36 minutes

### Error 2025-06-01T21:52:45+00:00
```
2025-06-01T21:52:45.7887058Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T21:52:45.7888402Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-01T21:54:01.2718661Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T21:55:26.2552102Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T21:55:26.2554374Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:55:26.254889011Z, ProjectID: 683cc572cc8f0935c7c36f43, Cluster name: test-acc-tf-c-4416757417454010473
2025-06-01T22:29:28.9422055Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-01T22:29:28.9423338Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-01T22:29:28.9425278Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-01T22:29:28.9427087Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-01T22:29:28.9428413Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-01T22:29:28.9429745Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-01T22:29:28.9431020Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-01T22:30:30.1543820Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2188.90s)
```

- 2025-06-02
  - PASS 21 minutes
  - PASS 31 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 20 minutes
- 2025-06-04 PASS 21 minutes
- 2025-06-05

### Error 2025-06-05T00:35:24+00:00
```
2025-06-05T00:35:24.5407598Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:35:24.5409217Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-05T00:35:42.8272498Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:36:27.8212063Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:36:27.8215660Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:27.820799921Z, ProjectID: 6840e4d5161ca93c1f052fd9, Cluster name: test-acc-tf-c-8751505965529070667
2025-06-05T00:36:28.3099300Z   
2025-06-05T00:36:28.3099847Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:36:28.3100370Z         
2025-06-05T00:36:28.3103180Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters POST: HTTP 400 Bad Request (Error code: "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster with instance size M0 via the public api: This project has reached the limit for the number of free clusters. Reason: Bad Request. Params: [This project has reached the limit for the number of free clusters], BadRequestDetail: 
2025-06-05T00:36:28.3105146Z         
2025-06-05T00:36:28.3105692Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:36:28.3106355Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:36:28.3106955Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:36:28.3107269Z         
2025-06-05T00:36:28.3571328Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (45.54s)
```

- 2025-06-06 PASS 22 minutes
- 2025-06-07 PASS 22 minutes
- 2025-06-08 PASS 20 minutes
- 2025-06-09 PASS 36 minutes
- 2025-06-10 PASS 24 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-06-12 PASS 19 minutes
- 2025-06-13 PASS 23 minutes
- 2025-06-14 PASS an hour
- 2025-06-15 PASS 20 minutes
- 2025-06-16 PASS 33 minutes
- 2025-06-17 PASS 19 minutes
- 2025-06-18
  - FAIL 36 minutes

### Error 2025-06-18T00:57:35+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-06-18T00:57:35.525000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='20 days ago')
CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6
```
2025-06-18T00:57:35.5252251Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T00:57:35.5253599Z     resource_advanced_cluster_test.go:167: Neither HTTP_MOCKER_CAPTURE nor HTTP_MOCKER_REPLAY is set, running test case without modifications
2025-06-18T00:59:11.4676571Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T01:00:31.3768218Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T01:00:31.3771083Z     pre_check.go:40: Time before creating cluster: 2025-06-18T01:00:31.376573962Z, ProjectID: 68520863e8055c11bb5db967, Cluster name: test-acc-tf-c-7755882259580918934
2025-06-18T01:34:59.4394185Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-18T01:34:59.4395541Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Check failed: Check 1/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-18T01:34:59.4397577Z         Check 2/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-18T01:34:59.4398918Z         Check 3/8 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-18T01:34:59.4400140Z         Check 4/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.node_count' expected "3", got "0"
2025-06-18T01:34:59.4401668Z         Check 5/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.electable_specs.0.instance_size' expected "M10", got "M0"
2025-06-18T01:34:59.4402914Z         Check 6/8 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "AWS", got "TENANT"
2025-06-18T01:36:00.5329430Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2209.11s)
```

  - PASS 19 minutes
- 2025-06-19 PASS 53 minutes
- 2025-06-20 PASS 22 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22 PASS 33 minutes
- 2025-06-23 PASS 18 minutes
- 2025-06-24 PASS 27 minutes
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
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T03:38:50.317000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='an hour ago')
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
