# advanced_cluster/advancedcluster/TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 7)
Success rate: 80.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-07 00:31](#error-2025-08-07t0031490000) | API Error ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 59.10s
[2025-08-20 00:27](#error-2025-08-20t0027250000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters | dev |  | 1388.01s
[2025-09-01 00:30](#error-2025-09-01t0030380000) |  | dev | timeout | 10835.09s
[2025-09-01 12:23](#error-2025-09-01t1223080000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b5902a43a482152d60b7f4/clusters | dev | flaky_500 | 1603.06s
[2025-09-01 16:11](#error-2025-09-01t1611060000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b5c59860c05d1e5a79bfb7/clusters | dev |  | 1393.02s
[2025-09-03 00:26](#error-2025-09-03t0026180000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters | dev |  | 2279.02s
[2025-09-04 00:26](#error-2025-09-04t0026290000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters | dev |  | 1928.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07

### Error 2025-08-07T00:31:49+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-07T00:31:49.250000+00:00-TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled',confidence=1.0,ts_when='28 days ago')
API Error ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-07T00:31:49.2503576Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-07T00:35:02.1557441Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-07T00:35:57.1618833Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-07T00:35:57.1620485Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:35:57.161642768Z, ProjectID: 6893f3f09c9cc040e192f9b7, Cluster name: test-acc-tf-c-3918649230961327628
2025-08-07T00:36:01.9646810Z    test_terraform_path=/home/runner/work/_temp/5baa4f94-ecdf-4fc7-a021-3ec60a4b5def/terraform test_working_directory=/tmp/plugintest662738441 test_name=TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-07T00:36:01.9647970Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running apply: exit status 1
2025-08-07T00:36:01.9648411Z         
2025-08-07T00:36:01.9650331Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6893f3f09c9cc040e192f9b7/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-07T00:36:01.9651657Z         
2025-08-07T00:36:01.9651962Z           with mongodbatlas_advanced_cluster.test,
2025-08-07T00:36:01.9652572Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-07T00:36:01.9653132Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-07T00:36:01.9653426Z         
2025-08-07T00:36:02.1223134Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (59.97s)
```

- 2025-08-08 PASS 40 minutes
- 2025-08-09 PASS 37 minutes
- 2025-08-10 PASS 39 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 31 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 26 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 58 minutes
- 2025-08-17 PASS 46 minutes
- 2025-08-18 PASS 26 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - FAIL 23 minutes

### Error 2025-08-20T00:27:25+00:00
```
2025-08-20T00:27:25.8119311Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-20T00:28:29.0306549Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-20T00:29:19.0332158Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-20T00:29:19.0333364Z     pre_check.go:40: Time before creating cluster: 2025-08-20T00:29:19.032893212Z, ProjectID: 68a5166c552c1710e1fb279c, Cluster name: test-acc-tf-c-6180514461650290279
2025-08-20T00:42:43.9449894Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-08-20T00:42:43.9451135Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running apply: exit status 1
2025-08-20T00:42:43.9451915Z         
2025-08-20T00:42:43.9455954Z         Error: error reading advanced cluster list for project(68a5166c552c1710e1fb279c): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a5166c552c1710e1fb279c/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-7673890514674051713 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-7673890514674051713], BadRequestDetail: 
2025-08-20T00:42:43.9458553Z         
2025-08-20T00:42:43.9459173Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-20T00:42:43.9460323Z           on terraform_plugin_test.tf line 70, in data "mongodbatlas_advanced_clusters" "test":
2025-08-20T00:42:43.9461346Z           70: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-20T00:42:43.9461890Z         
2025-08-20T00:45:19.8421688Z    test_step_number=3 test_working_directory=/tmp/plugintest2585696983 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-20T00:51:37.1437974Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (1388.12s)
```

  - PASS 27 minutes
- 2025-08-21 PASS 35 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 34 minutes
- 2025-08-25 PASS 44 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 38 minutes
- 2025-08-28 PASS 26 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 28 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.2933584Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T00:30:44.5151105Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T00:30:46.1307098Z   
2025-09-01T00:31:14.5121269Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T00:31:14.5122741Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:31:14.51184953Z, ProjectID: 68b4e92e46ef690a79d70c0c, Cluster name: test-acc-tf-c-3650621152850509342
2025-09-01T03:30:47.2469729Z    test_terraform_path=/home/runner/work/_temp/0e74e7ec-61f5-4f15-87a7-893f44f3733e/terraform test_name=TestAccClusterAdvancedCluster_singleShardedMultiCloud
2025-09-01T03:31:16.9476706Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T03:31:16.9477446Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:16.9477918Z         
2025-09-01T03:31:16.9478664Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:16.9479212Z         
2025-09-01T03:31:16.9479549Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T03:31:16.9480213Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T03:31:16.9480819Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T03:31:16.9481351Z         
2025-09-01T03:31:17.1073385Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (10835.91s)
```

  - PASS 38 minutes
  - PASS an hour
  - PASS 30 minutes
  - FAIL 26 minutes

### Error 2025-09-01T12:23:08+00:00
```
2025-09-01T12:23:08.0643877Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T12:24:17.2288325Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T12:24:37.2165597Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T12:24:37.2169083Z     pre_check.go:40: Time before creating cluster: 2025-09-01T12:24:37.216266439Z, ProjectID: 68b5902a43a482152d60b7f4, Cluster name: test-acc-tf-c-4826441536543170608
2025-09-01T12:43:58.0444472Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T12:43:58.0445317Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-09-01T12:43:58.0445848Z         
2025-09-01T12:43:58.0448161Z         Error: error reading advanced cluster list for project(68b5902a43a482152d60b7f4): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5902a43a482152d60b7f4/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-8708400375660106696 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-8708400375660106696], BadRequestDetail: 
2025-09-01T12:43:58.0449703Z         
2025-09-01T12:43:58.0450073Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-01T12:43:58.0450745Z           on terraform_plugin_test.tf line 70, in data "mongodbatlas_advanced_clusters" "test":
2025-09-01T12:43:58.0451341Z           70: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-01T12:43:58.0451841Z         
2025-09-01T12:51:00.8223738Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (1603.59s)
```

  - PASS 25 minutes
  - PASS 27 minutes
  - FAIL 23 minutes

### Error 2025-09-01T16:11:06+00:00
```
2025-09-01T16:11:06.2803509Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T16:12:15.5782382Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T16:13:20.5445717Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T16:13:20.5447519Z     pre_check.go:40: Time before creating cluster: 2025-09-01T16:13:20.54427283Z, ProjectID: 68b5c59860c05d1e5a79bfb7, Cluster name: test-acc-tf-c-1253953555011603226
2025-09-01T16:27:55.8236320Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-01T16:27:55.8237498Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running apply: exit status 1
2025-09-01T16:27:55.8238236Z         
2025-09-01T16:27:55.8242168Z         Error: error reading advanced cluster list for project(68b5c59860c05d1e5a79bfb7): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5c59860c05d1e5a79bfb7/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5913904763312693632 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5913904763312693632], BadRequestDetail: 
2025-09-01T16:27:55.8244875Z         
2025-09-01T16:27:55.8245449Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-01T16:27:55.8246499Z           on terraform_plugin_test.tf line 70, in data "mongodbatlas_advanced_clusters" "test":
2025-09-01T16:27:55.8247475Z           70: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-01T16:27:55.8247959Z         
2025-09-01T16:35:28.7048245Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (1393.15s)
```

- 2025-09-02 PASS 30 minutes
- 2025-09-03

### Error 2025-09-03T00:26:18+00:00
```
2025-09-03T00:26:18.4094171Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-03T00:27:34.8529891Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-03T00:27:49.8551334Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-03T00:27:49.8553608Z     pre_check.go:40: Time before creating cluster: 2025-09-03T00:27:49.854786511Z, ProjectID: 68b78b28a89cf4184d26f099, Cluster name: test-acc-tf-c-1310023749706953033
2025-09-03T00:56:29.8703835Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-03T00:56:29.8704745Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running apply: exit status 1
2025-09-03T00:56:29.8705331Z         
2025-09-03T00:56:29.8708115Z         Error: error reading advanced cluster list for project(68b78b28a89cf4184d26f099): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5599210234147744779 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5599210234147744779], BadRequestDetail: 
2025-09-03T00:56:29.8710060Z         
2025-09-03T00:56:29.8710436Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-03T00:56:29.8711103Z           on terraform_plugin_test.tf line 70, in data "mongodbatlas_advanced_clusters" "test":
2025-09-03T00:56:29.8711697Z           70: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-03T00:56:29.8712015Z         
2025-09-03T01:05:34.0965901Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (2279.24s)
```

- 2025-09-04

### Error 2025-09-04T00:26:29+00:00
```
2025-09-04T00:26:29.6529783Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-04T00:27:48.8147048Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-04T00:29:03.7898502Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-04T00:29:03.7900962Z     pre_check.go:40: Time before creating cluster: 2025-09-04T00:29:03.789455822Z, ProjectID: 68b8dcb3d8b60049b936d6c0, Cluster name: test-acc-tf-c-4296375146637810765
2025-09-04T00:48:21.7235251Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-09-04T00:48:21.7235977Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running apply: exit status 1
2025-09-04T00:48:21.7236447Z         
2025-09-04T00:48:21.7238869Z         Error: error reading advanced cluster list for project(68b8dcb3d8b60049b936d6c0): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-1554695614228743002 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-1554695614228743002], BadRequestDetail: 
2025-09-04T00:48:21.7240365Z         
2025-09-04T00:48:21.7240741Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-04T00:48:21.7241793Z           on terraform_plugin_test.tf line 70, in data "mongodbatlas_advanced_clusters" "test":
2025-09-04T00:48:21.7242686Z           70: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-04T00:48:21.7243000Z         
2025-09-04T00:59:57.4604842Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (1928.66s)
```
