# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-03 00:26](#error-2025-09-03t0026180000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters/test-acc-tf-c-5599210234147744779 | dev | 976.04s
[2025-09-04 00:26](#error-2025-09-04t0026290000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters/test-acc-tf-c-1554695614228743002 | dev | 1522.00s
[2025-09-08 12:04](#error-2025-09-08t1204440000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68bec65a0e369c59c11a744f/clusters/test-acc-tf-c-5062579074712047841 | dev | 954.04s
[2025-09-30 15:06](#error-2025-09-30t1506320000) |  | qa | 21.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03

### Error 2025-09-03T00:26:18+00:00
```
2025-09-03T00:26:18.4103567Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:27:34.8528423Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:27:44.8542253Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:27:44.8544706Z     pre_check.go:40: Time before creating cluster: 2025-09-03T00:27:44.853885274Z, ProjectID: 68b78b28a89cf4184d26f099, Cluster name: test-acc-tf-c-5599210234147744779
2025-09-03T00:43:51.0023466Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-03T00:43:51.0024299Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-03T00:43:51.0024963Z         
2025-09-03T00:43:51.0025963Z         Error: error updating advanced cluster (test-acc-tf-c-5599210234147744779): couldn't find resource (21 retries)
2025-09-03T00:43:51.0026787Z         
2025-09-03T00:43:51.0027186Z           with mongodbatlas_advanced_cluster.test,
2025-09-03T00:43:51.0028071Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-03T00:43:51.0028904Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-03T00:43:51.0029616Z         
2025-09-03T00:43:51.2441402Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-03T00:43:51.2441907Z         
2025-09-03T00:43:51.2444670Z         Error: error deleting advanced cluster (test-acc-tf-c-5599210234147744779): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b28a89cf4184d26f099/clusters/test-acc-tf-c-5599210234147744779 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5599210234147744779 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5599210234147744779], BadRequestDetail: 
2025-09-03T00:43:51.2446449Z         
2025-09-03T00:43:51.2446825Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (976.39s)
```

- 2025-09-04

### Error 2025-09-04T00:26:29+00:00
```
2025-09-04T00:26:29.6542609Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:27:48.8146112Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:28:58.7894607Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:28:58.7896934Z     pre_check.go:40: Time before creating cluster: 2025-09-04T00:28:58.789186829Z, ProjectID: 68b8dcb3d8b60049b936d6c0, Cluster name: test-acc-tf-c-1554695614228743002
2025-09-04T00:53:10.6212708Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-04T00:53:10.6213559Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-04T00:53:10.6214021Z         
2025-09-04T00:53:10.6214796Z         Error: error updating advanced cluster (test-acc-tf-c-1554695614228743002): couldn't find resource (21 retries)
2025-09-04T00:53:10.6215414Z         
2025-09-04T00:53:10.6215755Z           with mongodbatlas_advanced_cluster.test,
2025-09-04T00:53:10.6216515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-04T00:53:10.6217219Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-04T00:53:10.6217637Z         
2025-09-04T00:53:10.8395481Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/427a7b05-237d-46dc-80b1-f08d939a1e60/terraform test_working_directory=/tmp/plugintest4075298172
2025-09-04T00:53:10.8396671Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-04T00:53:10.8397118Z         
2025-09-04T00:53:10.8399459Z         Error: error deleting advanced cluster (test-acc-tf-c-1554695614228743002): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b8dcb3d8b60049b936d6c0/clusters/test-acc-tf-c-1554695614228743002 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-1554695614228743002 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-1554695614228743002], BadRequestDetail: 
2025-09-04T00:53:10.8401039Z         
2025-09-04T00:53:10.8401602Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (1522.04s)
```

- 2025-09-05: MISSING
- 2025-09-06 PASS 40 minutes
- 2025-09-07 PASS 31 minutes
- 2025-09-08
  - PASS 44 minutes
  - PASS 31 minutes
  - FAIL 15 minutes

### Error 2025-09-08T12:04:44+00:00
```
2025-09-08T12:04:44.5823363Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-08T12:05:50.8197704Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-08T12:06:25.8183277Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-08T12:06:25.8187666Z     pre_check.go:40: Time before creating cluster: 2025-09-08T12:06:25.818023049Z, ProjectID: 68bec65a0e369c59c11a744f, Cluster name: test-acc-tf-c-5062579074712047841
2025-09-08T12:21:45.0513412Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-08T12:21:45.0514596Z     resource_advanced_cluster_test.go:157: Step 3/3 error: Error running apply: exit status 1
2025-09-08T12:21:45.0515294Z         
2025-09-08T12:21:45.0516218Z         Error: error updating advanced cluster (test-acc-tf-c-5062579074712047841): couldn't find resource (21 retries)
2025-09-08T12:21:45.0516759Z         
2025-09-08T12:21:45.0517223Z           with mongodbatlas_advanced_cluster.test,
2025-09-08T12:21:45.0518062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-08T12:21:45.0518651Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-08T12:21:45.0519053Z         
2025-09-08T12:21:45.2432158Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/473344b7-b40d-49c4-9a7c-9b80815de865/terraform test_working_directory=/tmp/plugintest1148264974
2025-09-08T12:21:45.2433338Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-08T12:21:45.2433763Z         
2025-09-08T12:21:45.2436082Z         Error: error deleting advanced cluster (test-acc-tf-c-5062579074712047841): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bec65a0e369c59c11a744f/clusters/test-acc-tf-c-5062579074712047841 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5062579074712047841 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5062579074712047841], BadRequestDetail: 
2025-09-08T12:21:45.2437621Z         
2025-09-08T12:21:45.2438190Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (954.42s)
```

- 2025-09-09 PASS 44 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 24 minutes
- 2025-09-20 PASS 24 minutes
- 2025-09-21 PASS 20 minutes
- 2025-09-22 PASS 20 minutes
- 2025-09-23 PASS 22 minutes
- 2025-09-24 PASS 24 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 36 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 23 minutes
- 2025-09-29
  - PASS 39 minutes
  - PASS 17 minutes
- 2025-09-30
  - PASS 27 minutes
  - PASS 18 minutes
  - PASS 22 minutes
  - PASS 21 minutes
  - FAIL 21 seconds

### Error 2025-09-30T15:06:32+00:00
```
2025-09-30T15:06:32.2398806Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-30T15:08:02.5676654Z === CONT  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-30T15:08:22.5645508Z === NAME  TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-09-30T15:08:22.5646931Z     pre_check.go:32: Time before creating cluster: 2025-09-30T15:08:22.564280156Z, ProjectID: 68dbf1f5ce185e38b70f056a, Cluster name: test-acc-tf-c-6034206953717015360
2025-09-30T15:08:23.6173960Z   
2025-09-30T15:08:23.6174503Z     resource_test.go:82: Step 1/3 error: Error running apply: exit status 1
2025-09-30T15:08:23.6174882Z         
2025-09-30T15:08:23.6175505Z         Error: Error in create
2025-09-30T15:08:23.6175833Z         
2025-09-30T15:08:23.6176280Z           with mongodbatlas_advanced_cluster.test,
2025-09-30T15:08:23.6177075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-30T15:08:23.6177768Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-30T15:08:23.6178076Z         
2025-09-30T15:08:23.6178573Z         cluster name: test-acc-tf-c-6034206953717015360, API error details:
2025-09-30T15:08:23.6179437Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf1f5ce185e38b70f056a/clusters
2025-09-30T15:08:23.6180298Z         POST: HTTP 403 Forbidden (Error code:
2025-09-30T15:08:23.6198624Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-09-30T15:08:23.6199649Z         Configuration. Contains selections that are unavailable due to your
2025-09-30T15:08:23.6200602Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-09-30T15:08:23.6201028Z         BadRequestDetail: 
2025-09-30T15:08:23.6619686Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (21.10s)
```

- 2025-10-01
  - PASS an hour
  - PASS an hour
  - PASS 23 minutes
  - PASS 19 minutes
  - PASS 34 minutes
  - PASS 25 minutes
  - PASS 35 minutes
  - PASS 23 minutes
- 2025-10-02 PASS 2 hours