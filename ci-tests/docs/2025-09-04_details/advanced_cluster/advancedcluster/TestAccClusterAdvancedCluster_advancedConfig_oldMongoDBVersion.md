# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 00:31](#error-2025-08-06t0031150000) | ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/6892a2502e7dcc2aaecb7219/clusters | dev |  | 45.08s
[2025-08-07 00:31](#error-2025-08-07t0031530000) | API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 43.01s
[2025-08-08 00:31](#error-2025-08-08t0031070000) | API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 10.09s
[2025-09-01 00:30](#error-2025-09-01t0030410000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T00:31:15+00:00
```
2025-08-06T00:31:15.3204699Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-06T00:32:25.7134927Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-06T00:33:10.7168290Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-06T00:33:10.7170267Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:33:10.716587486Z, ProjectID: 6892a2502e7dcc2aaecb7219, Cluster name: test-acc-tf-c-3847143583540731877
2025-08-06T00:33:11.5049415Z   
2025-08-06T00:33:11.5050150Z     resource_advanced_cluster_test.go:395: Step 2/3 error: Error running apply: exit status 1
2025-08-06T00:33:11.5050858Z         
2025-08-06T00:33:11.5053295Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a2502e7dcc2aaecb7219/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-08-06T00:33:11.5054510Z         
2025-08-06T00:33:11.5054831Z           with mongodbatlas_advanced_cluster.test,
2025-08-06T00:33:11.5055488Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-06T00:33:11.5056335Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-06T00:33:11.5056634Z         
2025-08-06T00:33:11.5487704Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (45.84s)
```

- 2025-08-07

### Error 2025-08-07T00:31:53+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-07T00:31:53.800000+00:00-TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion',confidence=1.0,ts_when='28 days ago')
API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-07T00:31:53.8006547Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-07T00:35:02.1542315Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-07T00:35:42.1597985Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-07T00:35:42.1599585Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:35:42.159582055Z, ProjectID: 6893f3f79c9cc040e1930b5b, Cluster name: test-acc-tf-c-716843317797661354
2025-08-07T00:35:45.1547455Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-07T00:35:45.1548282Z     resource_advanced_cluster_test.go:395: Step 2/3 error: Error running apply: exit status 1
2025-08-07T00:35:45.1548767Z         
2025-08-07T00:35:45.1550469Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6893f3f79c9cc040e1930b5b/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-08-07T00:35:45.1551730Z         
2025-08-07T00:35:45.1552046Z           with mongodbatlas_advanced_cluster.test,
2025-08-07T00:35:45.1552904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-07T00:35:45.1553587Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-07T00:35:45.1554092Z         
2025-08-07T00:35:45.2053734Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (43.05s)
```

- 2025-08-08

### Error 2025-08-08T00:31:07+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-08T00:31:07.896000+00:00-TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion',confidence=1.0,ts_when='27 days ago')
API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-08T00:31:07.8969445Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-08T00:31:59.3111370Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-08T00:32:09.3124736Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-08T00:32:09.3127019Z     pre_check.go:40: Time before creating cluster: 2025-08-08T00:32:09.31218596Z, ProjectID: 6895454913642126f901f4fb, Cluster name: test-acc-tf-c-2006193208871735714
2025-08-08T00:32:10.1226492Z   
2025-08-08T00:32:10.1227158Z     resource_advanced_cluster_test.go:393: Step 2/3 error: Error running apply: exit status 1
2025-08-08T00:32:10.1227731Z         
2025-08-08T00:32:10.1229575Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6895454913642126f901f4fb/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-08-08T00:32:10.1231069Z         
2025-08-08T00:32:10.1231392Z           with mongodbatlas_advanced_cluster.test,
2025-08-08T00:32:10.1232357Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-08T00:32:10.1233130Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-08T00:32:10.1233435Z         
2025-08-08T00:32:10.1644543Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10.85s)
```

- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 23 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 51 minutes
- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 20 minutes
- 2025-08-19 PASS 26 minutes
- 2025-08-20
  - PASS 20 minutes
  - PASS 24 minutes
- 2025-08-21 PASS 22 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 30 minutes
- 2025-08-24 PASS 18 minutes
- 2025-08-25 PASS 19 minutes
- 2025-08-26 PASS 27 minutes
- 2025-08-27 PASS 29 minutes
- 2025-08-28 PASS 21 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 18 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.8322837Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-09-01T00:30:41.9422876Z     shared_resource.go:93: 
2025-09-01T00:30:41.9424416Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:41.9426928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:41.9429151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:41.9431072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:41.9432969Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:41.9435098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:371
2025-09-01T00:30:41.9436082Z         	Error:      	Received unexpected error:
2025-09-01T00:30:41.9438985Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:41.9440413Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-09-01T00:30:41.9443265Z         	Messages:   	Project creation failed: test-acc-tf-p-6442152046528477204, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:41.9444839Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (0.11s)
```

  - PASS 33 minutes
  - PASS an hour
  - PASS 23 minutes
  - PASS 29 minutes
  - PASS 16 minutes
  - PASS 23 minutes
  - PASS 19 minutes
- 2025-09-02 PASS 23 minutes
- 2025-09-03 PASS 25 minutes
- 2025-09-04 PASS 26 minutes