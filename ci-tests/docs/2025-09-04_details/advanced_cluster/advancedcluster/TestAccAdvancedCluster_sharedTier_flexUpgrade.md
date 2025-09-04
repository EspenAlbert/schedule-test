# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 24) FAIL(x 12)
Success rate: 66.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 00:31](#error-2025-08-06t0031120000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/6892a24e2e7dcc2aaecb6865/clusters | dev | flaky_500 | 770.10s
[2025-08-07 00:31](#error-2025-08-07t0031490000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 2,16 | dev | flaky_check | 3969.09s
[2025-08-16 00:27](#error-2025-08-16t0027550000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 7,21 | dev |  | 2759.10s
[2025-08-19 00:28](#error-2025-08-19t0028500000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68a3c53fc1be074b83c5b98c/clusters | dev |  | 1247.03s
[2025-08-20 13:58](#error-2025-08-20t1358510000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68a5d49af98188003c9999c9/clusters | qa |  | 474.07s
[2025-08-21 00:27](#error-2025-08-21t0027210000) |  | dev | timeout | 11058.00s
[2025-08-23 00:27](#error-2025-08-23t0027120000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 1,21 | dev |  | 2404.07s
[2025-08-24 00:30](#error-2025-08-24t0030560000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 5,20 | qa |  | 2257.04s
[2025-08-28 00:27](#error-2025-08-28t0027310000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 3,23 | dev |  | 3365.10s
[2025-09-01 00:30](#error-2025-09-01t0030410000) |  | dev | timeout | 10825.07s
[2025-09-01 15:01](#error-2025-09-01t1501400000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68b5b551ca3d15140ef05fc1/clusters | dev |  | 951.07s
[2025-09-01 16:11](#error-2025-09-01t1611060000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68b5c59860c05d1e5a79bfb7/clusters | dev |  | 55.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T00:31:12+00:00
```
2025-08-06T00:31:12.7782123Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T00:32:25.7095005Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T00:32:30.7093587Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T00:32:30.7104311Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:32:30.708756019Z, ProjectID: 6892a24e2e7dcc2aaecb6865, Cluster name: test-acc-tf-c-7473102997580992927
2025-08-06T00:42:34.0368626Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T00:42:34.0369474Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-06T00:42:34.0369988Z         
2025-08-06T00:42:34.0372162Z         Error: error reading advanced cluster list for project(6892a24e2e7dcc2aaecb6865): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a24e2e7dcc2aaecb6865/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-7991206564590139153 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-7991206564590139153], BadRequestDetail: 
2025-08-06T00:42:34.0373834Z         
2025-08-06T00:42:34.0374299Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-06T00:42:34.0375043Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-06T00:42:34.0375630Z           35: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-06T00:42:34.0375923Z         
2025-08-06T00:45:16.6787695Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (770.97s)
```

- 2025-08-07

### Error 2025-08-07T00:31:49+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-08-07T00:31:49.251000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='28 days ago')
CheckFailure for advanced_cluster.test at Step: 2 Checks: 2,16
```
2025-08-07T00:31:49.2516389Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-07T00:35:02.1501782Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-07T00:35:07.1539831Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-07T00:35:07.1547153Z     pre_check.go:40: Time before creating cluster: 2025-08-07T00:35:07.15262623Z, ProjectID: 6893f3f09c9cc040e192f9b7, Cluster name: test-acc-tf-c-8922443460415833754
2025-08-07T01:36:33.0732007Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-07T01:36:33.0733451Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Check failed: Check 2/43 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-07T01:36:33.0735969Z         Check 16/43 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-07T01:41:12.0082388Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (3969.86s)
```

- 2025-08-08 PASS 37 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 35 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 19 minutes
  - PASS 8 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 21 minutes
- 2025-08-15: MISSING
- 2025-08-16

### Error 2025-08-16T00:27:55+00:00
```
2025-08-16T00:27:55.5244632Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-16T00:29:12.9313030Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-16T00:30:22.9144297Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-16T00:30:22.9146182Z     pre_check.go:40: Time before creating cluster: 2025-08-16T00:30:22.914143678Z, ProjectID: 689fd089abb59e7daa2c9ddb, Cluster name: test-acc-tf-c-9133362267936093682
2025-08-16T01:04:59.7012252Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-16T01:04:59.7013955Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Check failed: Check 7/43 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-16T01:04:59.7016242Z         Check 21/43 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-16T01:15:12.9138559Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (2759.99s)
```

- 2025-08-17 PASS 20 minutes
- 2025-08-18 PASS 17 minutes
- 2025-08-19

### Error 2025-08-19T00:28:50+00:00
```
2025-08-19T00:28:50.7128463Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-19T00:29:44.1764149Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-19T00:31:14.1440392Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-19T00:31:14.1442366Z     pre_check.go:40: Time before creating cluster: 2025-08-19T00:31:14.143744921Z, ProjectID: 68a3c53fc1be074b83c5b98c, Cluster name: test-acc-tf-c-7072831506742657085
2025-08-19T00:43:37.7951835Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-19T00:43:37.7952536Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-19T00:43:37.7953049Z         
2025-08-19T00:43:37.7955866Z         Error: error reading advanced cluster list for project(68a3c53fc1be074b83c5b98c): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a3c53fc1be074b83c5b98c/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-910179889867457502 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-910179889867457502], BadRequestDetail: 
2025-08-19T00:43:37.7957573Z         
2025-08-19T00:43:37.7957923Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-19T00:43:37.7958553Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-19T00:43:37.7959375Z           35: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-19T00:43:37.7959678Z         
2025-08-19T00:50:31.4097729Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (1247.25s)
```

- 2025-08-20
  - PASS 9 minutes
  - FAIL 7 minutes

### Error 2025-08-20T13:58:51+00:00
```
2025-08-20T13:58:51.8635069Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T14:00:09.6459874Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T14:01:24.6398863Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T14:01:24.6400290Z     pre_check.go:40: Time before creating cluster: 2025-08-20T14:01:24.639568611Z, ProjectID: 68a5d49af98188003c9999c9, Cluster name: test-acc-tf-c-8250312200672644797
2025-08-20T14:07:24.3008528Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T14:07:24.3009295Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-20T14:07:24.3009856Z         
2025-08-20T14:07:24.3012544Z         Error: error reading advanced cluster list for project(68a5d49af98188003c9999c9): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d49af98188003c9999c9/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-7523506132159877590 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-7523506132159877590], BadRequestDetail: 
2025-08-20T14:07:24.3014291Z         
2025-08-20T14:07:24.3014658Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-20T14:07:24.3015325Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-20T14:07:24.3015920Z           35: 	data "mongodbatlas_advanced_clusters" "test" {
2025-08-20T14:07:24.3016232Z         
2025-08-20T14:08:04.3438394Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (474.70s)
```

- 2025-08-21

### Error 2025-08-21T00:27:21+00:00
```
2025-08-21T00:27:21.2318925Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T00:28:16.0646143Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T00:29:21.0361523Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T00:29:21.0364763Z     pre_check.go:40: Time before creating cluster: 2025-08-21T00:29:21.03584217Z, ProjectID: 68a667e60ed8ff152ac7ecb0, Cluster name: test-acc-tf-c-6806618265157761428
2025-08-21T03:32:33.3347300Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T03:32:33.3348384Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-21T03:32:33.3349052Z         
2025-08-21T03:32:33.3350534Z         Error: error updating advanced cluster (test-acc-tf-c-6806618265157761428): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-08-21T03:32:33.3351585Z         
2025-08-21T03:32:33.3352126Z           with mongodbatlas_advanced_cluster.test,
2025-08-21T03:32:33.3353146Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-21T03:32:33.3354045Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-21T03:32:33.3354509Z         
2025-08-21T03:32:34.1041031Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-21T03:32:34.1041597Z         
2025-08-21T03:32:34.1042678Z         Error: error deleting a flex cluster (test-acc-tf-c-6806618265157761428): unexpected state 'UPDATING', wanted target 'DELETED'. last error: %!s(<nil>)
2025-08-21T03:32:34.1043471Z         
2025-08-21T03:32:34.1043853Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (11058.04s)
```

- 2025-08-22: MISSING
- 2025-08-23

### Error 2025-08-23T00:27:12+00:00
```
2025-08-23T00:27:12.6310085Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-23T00:28:26.3070357Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-23T00:29:31.2967516Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-23T00:29:31.2970166Z     pre_check.go:40: Time before creating cluster: 2025-08-23T00:29:31.296420821Z, ProjectID: 68a90adead47257586c2719a, Cluster name: test-acc-tf-c-612400142492131278
2025-08-23T01:06:08.8035695Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-23T01:06:08.8037765Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Check failed: Check 1/43 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-23T01:06:08.8040215Z         Check 21/43 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-23T01:08:30.9779449Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (2404.67s)
```

- 2025-08-24

### Error 2025-08-24T00:30:56+00:00
```
2025-08-24T00:30:56.3151259Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T00:32:02.0860392Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T00:33:12.0070234Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T00:33:12.0071962Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:33:12.006759164Z, ProjectID: 68aa5d3e4192cd1cc589d457, Cluster name: test-acc-tf-c-3827804413180558163
2025-08-24T01:08:38.7431993Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T01:08:38.7434029Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Check failed: Check 5/43 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-24T01:08:38.7436709Z         Check 20/43 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-24T01:09:39.3979196Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (2257.38s)
```

- 2025-08-25 PASS 12 minutes
- 2025-08-26 PASS 31 minutes
- 2025-08-27 PASS 33 minutes
- 2025-08-28

### Error 2025-08-28T00:27:31+00:00
```
2025-08-28T00:27:31.9133129Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T00:28:33.9030879Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T00:29:53.8718106Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T00:29:53.8719332Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:29:53.871524405Z, ProjectID: 68afa270e2173c2b10934a86, Cluster name: test-acc-tf-c-8847494321049443008
2025-08-28T01:23:39.2519481Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T01:23:39.2521404Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Check failed: Check 3/43 error: mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-28T01:23:39.2523259Z         Check 23/43 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-28T01:24:39.8542619Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (3365.97s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 10 minutes
- 2025-08-31 PASS 8 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T00:30:41+00:00
```
2025-09-01T00:30:41.5979687Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T00:30:44.5149558Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T00:31:09.5093552Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T00:31:09.5094793Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:31:09.509108371Z, ProjectID: 68b4e92e46ef690a79d70c0c, Cluster name: test-acc-tf-c-5606142179961030367
2025-09-01T03:31:10.1776797Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T03:31:10.1777565Z     resource_advanced_cluster_test.go:162: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:31:10.1778009Z         
2025-09-01T03:31:10.1778844Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:10.1779426Z         
2025-09-01T03:31:10.1779832Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T03:31:10.1780719Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T03:31:10.1781335Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T03:31:10.1781658Z         
2025-09-01T03:31:10.2185718Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (10825.72s)
```

  - PASS 35 minutes
  - PASS an hour
  - PASS 9 minutes
  - PASS 24 minutes
  - PASS 11 minutes
  - FAIL 15 minutes

### Error 2025-09-01T15:01:40+00:00
```
2025-09-01T15:01:40.5023258Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T15:02:46.4312041Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T15:03:01.4221171Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T15:03:01.4223904Z     pre_check.go:40: Time before creating cluster: 2025-09-01T15:03:01.421754848Z, ProjectID: 68b5b551ca3d15140ef05fc1, Cluster name: test-acc-tf-c-306599403913671266
2025-09-01T15:14:35.8351185Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T15:14:35.8351938Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running apply: exit status 1
2025-09-01T15:14:35.8352357Z         
2025-09-01T15:14:35.8355240Z         Error: error reading advanced cluster list for project(68b5b551ca3d15140ef05fc1): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5b551ca3d15140ef05fc1/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-8927039118212051196 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-8927039118212051196], BadRequestDetail: 
2025-09-01T15:14:35.8356966Z         
2025-09-01T15:14:35.8357331Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-01T15:14:35.8357979Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-09-01T15:14:35.8358593Z           35: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-01T15:14:35.8358898Z         
2025-09-01T15:18:38.1664899Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (951.74s)
```

  - FAIL 55 seconds

### Error 2025-09-01T16:11:06+00:00
```
2025-09-01T16:11:06.2815647Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T16:12:15.5775689Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T16:13:10.5435318Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T16:13:10.5437300Z     pre_check.go:40: Time before creating cluster: 2025-09-01T16:13:10.54325599Z, ProjectID: 68b5c59860c05d1e5a79bfb7, Cluster name: test-acc-tf-c-8232476303623024148
2025-09-01T16:13:11.3089588Z   
2025-09-01T16:13:11.3090387Z     resource_advanced_cluster_test.go:162: Step 1/2 error: Error running apply: exit status 1
2025-09-01T16:13:11.3091059Z         
2025-09-01T16:13:11.3093192Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5c59860c05d1e5a79bfb7/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-01T16:13:11.3094909Z         
2025-09-01T16:13:11.3095235Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T16:13:11.3095871Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T16:13:11.3096461Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T16:13:11.3096765Z         
2025-09-01T16:13:11.3558580Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (55.81s)
```

- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 8 minutes
- 2025-09-04 PASS 10 minutes