# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 02:05](#error-2025-08-06t0205370000) | ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/6892a24eeb5d095197166617/clusters | dev | flaky_500 | 40.09s
[2025-08-07 02:02](#error-2025-08-07t0202550000) | API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 49.01s
[2025-08-08 01:48](#error-2025-08-08t0148330000) | API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 45.08s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T02:05:37+00:00
```
2025-08-06T02:05:37.4304107Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-06T02:05:37.4375151Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-06T02:05:37.4429624Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-06T02:05:37.4430536Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:33:37.224207038Z, ProjectID: 6892a24eeb5d095197166617, Cluster name: test-acc-tf-c-7450032883925602164
2025-08-06T02:05:37.4448927Z    test_name=TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion test_step_number=2 test_terraform_path=/home/runner/work/_temp/874ad39d-b37e-41ff-8b98-56f9e5f50963/terraform
2025-08-06T02:05:37.4449936Z     resource_advanced_cluster_test.go:395: Step 2/3 error: Error running apply: exit status 1
2025-08-06T02:05:37.4450351Z         
2025-08-06T02:05:37.4450600Z         Error: Error in create
2025-08-06T02:05:37.4450843Z         
2025-08-06T02:05:37.4451297Z           with mongodbatlas_advanced_cluster.test,
2025-08-06T02:05:37.4451960Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-06T02:05:37.4452567Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-06T02:05:37.4452876Z         
2025-08-06T02:05:37.4453290Z         cluster name: test-acc-tf-c-7450032883925602164, API error details:
2025-08-06T02:05:37.4454341Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a24eeb5d095197166617/clusters
2025-08-06T02:05:37.4455451Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED")
2025-08-06T02:05:37.4456110Z         Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params:
2025-08-06T02:05:37.4456550Z         [], BadRequestDetail: 
2025-08-06T02:05:37.4456964Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (40.90s)
```

- 2025-08-07

### Error 2025-08-07T02:02:55+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-07T02:02:55.526000+00:00-TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion',confidence=1.0,ts_when='28 days ago')
API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-07T02:02:55.5266497Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-07T02:02:55.5373042Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-07T02:02:55.5443260Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-07T02:02:55.5444263Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:37:11.840367585Z, ProjectID: 6893f3f69c9cc040e193076a, Cluster name: test-acc-tf-c-3757480179717353950
2025-08-07T02:02:55.5463166Z   
2025-08-07T02:02:55.5463599Z     resource_advanced_cluster_test.go:395: Step 2/3 error: Error running apply: exit status 1
2025-08-07T02:02:55.5464004Z         
2025-08-07T02:02:55.5464246Z         Error: Error in create
2025-08-07T02:02:55.5464478Z         
2025-08-07T02:02:55.5464790Z           with mongodbatlas_advanced_cluster.test,
2025-08-07T02:02:55.5465563Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-07T02:02:55.5466152Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-07T02:02:55.5466450Z         
2025-08-07T02:02:55.5466846Z         cluster name: test-acc-tf-c-3757480179717353950, API error details:
2025-08-07T02:02:55.5467497Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6893f3f69c9cc040e193076a/clusters
2025-08-07T02:02:55.5468288Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED")
2025-08-07T02:02:55.5468912Z         Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params:
2025-08-07T02:02:55.5469340Z         [], BadRequestDetail: 
2025-08-07T02:02:55.5469738Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (49.06s)
```

- 2025-08-08

### Error 2025-08-08T01:48:33+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-08T01:48:33.183000+00:00-TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion',confidence=1.0,ts_when='27 days ago')
API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-08T01:48:33.1830767Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-08T01:48:33.1885317Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-08T01:48:33.1972935Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-08-08T01:48:33.1973822Z     pre_check.go:40: Time before creating cluster: 2025-08-08T00:33:41.354465393Z, ProjectID: 6895454913642126f901f54f, Cluster name: test-acc-tf-c-4264248639610031369
2025-08-08T01:48:33.1991757Z    test_name=TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion test_terraform_path=/home/runner/work/_temp/1c73f022-9a5d-42d4-baee-fc434485559a/terraform test_working_directory=/tmp/plugintest1188489961 test_step_number=2
2025-08-08T01:48:33.1992915Z     resource_advanced_cluster_test.go:393: Step 2/3 error: Error running apply: exit status 1
2025-08-08T01:48:33.1993315Z         
2025-08-08T01:48:33.1993549Z         Error: Error in create
2025-08-08T01:48:33.1993776Z         
2025-08-08T01:48:33.1994088Z           with mongodbatlas_advanced_cluster.test,
2025-08-08T01:48:33.1994709Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-08T01:48:33.1995277Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-08T01:48:33.1995574Z         
2025-08-08T01:48:33.1995967Z         cluster name: test-acc-tf-c-4264248639610031369, API error details:
2025-08-08T01:48:33.1996607Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6895454913642126f901f54f/clusters
2025-08-08T01:48:33.1997290Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED")
2025-08-08T01:48:33.1997915Z         Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params:
2025-08-08T01:48:33.1998439Z         [], BadRequestDetail: 
2025-08-08T01:48:33.1998833Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (45.82s)
```

- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 33 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 27 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 25 minutes
- 2025-08-14 PASS 30 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 51 minutes
- 2025-08-17 PASS 46 minutes
- 2025-08-18 PASS 28 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - PASS 26 minutes
  - PASS 25 minutes
- 2025-08-21 PASS 25 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24 PASS 17 minutes
- 2025-08-25 PASS 30 minutes
- 2025-08-26 PASS 29 minutes
- 2025-08-27 PASS 30 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 25 minutes
- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6995077Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-09-01T00:30:49.6995812Z     shared_resource.go:93: 
2025-09-01T00:30:49.6997384Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7000646Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7004734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7007971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7011157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7014967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:371
2025-09-01T00:30:49.7016402Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7021774Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7024251Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-09-01T00:30:49.7028364Z         	Messages:   	Project creation failed: test-acc-tf-p-8440149429340852813, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7030948Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (0.18s)
```

  - PASS an hour
  - PASS an hour
  - PASS 26 minutes
  - PASS 39 minutes
  - PASS 37 minutes
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 20 minutes
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 27 minutes