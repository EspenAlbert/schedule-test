# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3) TIMEOUT
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-03 00:26](#error-2025-09-03t0026180000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 2617.08s
[2025-09-04 00:26](#error-2025-09-04t0026290000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,2,3,4,5,6 | dev |  | 2434.05s
[2025-09-28 00:29](#error-2025-09-28t0029590000) |  | qa |  | 122.06s
[2025-10-02 00:26](#error-2025-10-02t0026130000) |  | dev | timeout | 17883.00s

## Timeline
- 2025-09-02: MISSING
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

- 2025-09-05: MISSING
- 2025-09-06 PASS 35 minutes
- 2025-09-07 PASS 29 minutes
- 2025-09-08
  - PASS 37 minutes
  - PASS 28 minutes
  - PASS 37 minutes
- 2025-09-09 PASS 31 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 19 minutes
- 2025-09-20 PASS 20 minutes
- 2025-09-21 PASS 17 minutes
- 2025-09-22 PASS 16 minutes
- 2025-09-23 PASS 18 minutes
- 2025-09-24 PASS 19 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 19 minutes
- 2025-09-27 PASS 23 minutes
- 2025-09-28

### Error 2025-09-28T00:29:59+00:00
```
2025-09-28T00:29:59.8278627Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:30:03.1309308Z     resource_test.go:95: Adding variable groupId=68d88187ca428e2ad3dbbb23
2025-09-28T00:30:03.1310393Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-2636416529427758817
2025-09-28T00:31:32.1259390Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:32:22.1074103Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:32:22.1075610Z     pre_check.go:32: Time before creating cluster: 2025-09-28T00:32:22.107046417Z, ProjectID: 68d88187ca428e2ad3dbbb23, Cluster name: test-acc-tf-c-2636416529427758817
2025-09-28T00:32:54.2187044Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-28T00:32:54.2188601Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-2355328481180600852
2025-09-28T00:32:54.5293922Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3461586229471372822
2025-09-28T00:32:54.8574671Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-4398666943869588898
2025-09-28T00:32:55.0633184Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-195872184394519003
2025-09-28T00:32:55.2769970Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-7740974006259736203
2025-09-28T00:33:00.7617312Z    test_working_directory=/tmp/plugintest3809768451 test_step_number=2
2025-09-28T00:33:00.7617890Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-09-28T00:33:00.7618256Z         
2025-09-28T00:33:00.7618522Z         Error: Error in tenant upgrade
2025-09-28T00:33:00.7618940Z         
2025-09-28T00:33:00.7619372Z           with mongodbatlas_advanced_cluster.test,
2025-09-28T00:33:00.7620000Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-28T00:33:00.7620581Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-28T00:33:00.7621341Z         
2025-09-28T00:33:00.7621858Z         cluster name: test-acc-tf-c-2636416529427758817, API error details:
2025-09-28T00:33:00.7622734Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88187ca428e2ad3dbbb23/clusters/tenantUpgrade
2025-09-28T00:33:00.7623296Z         POST: HTTP 403 Forbidden (Error code:
2025-09-28T00:33:00.7623775Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-09-28T00:33:00.7624345Z         Configuration. Contains selections that are unavailable due to your
2025-09-28T00:33:00.7624912Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-09-28T00:33:00.7625314Z         BadRequestDetail: 
2025-09-28T00:33:31.4458178Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (122.64s)
```

- 2025-09-29
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-09-30
  - PASS 19 minutes
  - PASS 14 minutes
  - PASS 21 minutes
  - PASS 18 minutes
  - PASS 14 minutes
- 2025-10-01
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 33 minutes
  - PASS 41 minutes
  - PASS 36 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-10-02

### Error 2025-10-02T00:26:13+00:00
```
2025-10-02T00:26:13.3315320Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:26:16.3354509Z     resource_test.go:95: Adding variable groupId=68ddc6a5a496fb5b13e0e224
2025-10-02T00:26:16.3355200Z     resource_test.go:95: Adding variable clusterName=test-acc-tf-c-5299893955055663139
2025-10-02T00:28:04.4447497Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:28:19.4434253Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:28:19.4437894Z     pre_check.go:36: Time before creating cluster: 2025-10-02T00:28:19.443085417Z, ProjectID: 68ddc6a5a496fb5b13e0e224, Cluster name: test-acc-tf-c-5299893955055663139
2025-10-02T00:28:51.0823841Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T00:28:51.0825117Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5949524132780715717
2025-10-02T00:28:51.2249628Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-2922492963179675176
2025-10-02T00:28:51.5001793Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6763242178075391064
2025-10-02T03:28:55.2414499Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-02T03:28:55.2415462Z     resource_test.go:95: Step 2/3 error: Error running apply: exit status 1
2025-10-02T03:28:55.2415912Z         
2025-10-02T03:28:55.2416193Z         Error: Error in tenant upgrade
2025-10-02T03:28:55.2416464Z         
2025-10-02T03:28:55.2416885Z           with mongodbatlas_advanced_cluster.test,
2025-10-02T03:28:55.2417612Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-02T03:28:55.2418505Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-02T03:28:55.2418820Z         
2025-10-02T03:28:55.2419273Z         cluster=test-acc-tf-c-5299893955055663139 didn't reach desired state: IDLE,
2025-10-02T03:28:55.2419876Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-02T03:28:55.2420299Z         'UPDATING', timeout: 3h0m0s)
2025-10-02T05:26:07.7853688Z panic: test timed out after 5h0m0s
2025-10-02T05:26:07.7854356Z 	running tests:
2025-10-02T05:26:07.7853688Z panic: test timed out after 5h0m0s
2025-10-02T05:26:07.7854356Z 	running tests:
2025-10-02T05:26:07.7857623Z 		TestAccMockableAdvancedCluster_tenantUpgrade (4h58m3s)
```
