# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 23) FAIL(x 12) TIMEOUT
Success rate: 65.71%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 02:05](#error-2025-08-06t0205370000) |  | dev | unknown | 647.06s
[2025-08-09 01:40](#error-2025-08-09t0140120000) |  | dev |  | 888.08s
[2025-08-12 09:08](#error-2025-08-12t0908190000) |  | dev |  | 415.09s
[2025-08-17 01:54](#error-2025-08-17t0154470000) |  | qa |  | 924.06s
[2025-08-20 01:34](#error-2025-08-20t0134330000) |  | dev |  | 562.01s
[2025-08-21 05:27](#error-2025-08-21t0527020000) |  | dev | timeout | 17890.00s
[2025-08-24 03:34](#error-2025-08-24t0334470000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 17 | qa |  | 2328.04s
[2025-08-25 01:49](#error-2025-08-25t0149120000) |  | dev |  | 780.08s
[2025-08-26 03:49](#error-2025-08-26t0349020000) |  | dev |  | 897.07s
[2025-08-28 03:36](#error-2025-08-28t0336120000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 22 | dev |  | 2309.03s
[2025-08-31 01:41](#error-2025-08-31t0141270000) |  | qa |  | 392.08s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 07:49](#error-2025-09-01t0749130000) |  | dev |  | 4429.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T02:05:37+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-06T02:05:37.429000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='28 days ago')

```
2025-08-06T02:05:37.4296732Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T02:05:37.4377357Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T02:05:37.4457616Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T02:05:37.4458486Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:33:42.225104801Z, ProjectID: 6892a24beb5d0951971651f5, Cluster name: test-acc-tf-c-5464222451445383646
2025-08-06T02:05:37.4506223Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-06T02:05:37.4506794Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-06T02:05:37.4507210Z         
2025-08-06T02:05:37.4507523Z         Error: error reading  advanced cluster list
2025-08-06T02:05:37.4507807Z         
2025-08-06T02:05:37.4508159Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-06T02:05:37.4508804Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-06T02:05:37.4509376Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-06T02:05:37.4509677Z         
2025-08-06T02:05:37.4509978Z         project ID 6892a24beb5d0951971651f5. Error
2025-08-06T02:05:37.4510578Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a24beb5d0951971651f5/clusters
2025-08-06T02:05:37.4511097Z         GET: HTTP 400 Bad Request (Error code:
2025-08-06T02:05:37.4511570Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-06T02:05:37.4512178Z         test-acc-tf-c-4567813620323913581 cannot be used in the Cluster API. Reason:
2025-08-06T02:05:37.4512818Z         Bad Request. Params: [test-acc-tf-c-4567813620323913581], BadRequestDetail: 
2025-08-06T02:05:37.4519150Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (647.57s)
```

- 2025-08-07 PASS 58 minutes
- 2025-08-08 PASS 12 minutes
- 2025-08-09

### Error 2025-08-09T01:40:12+00:00
```
2025-08-09T01:40:12.0180153Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-09T01:40:12.0253800Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-09T01:40:12.0305425Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-09T01:40:12.0306237Z     pre_check.go:40: Time before creating cluster: 2025-08-09T00:31:07.9636312Z, ProjectID: 6896963918106a5d9025b7f2, Cluster name: test-acc-tf-c-7530148234451326781
2025-08-09T01:40:12.0351355Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-09T01:40:12.0351910Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-09T01:40:12.0352313Z         
2025-08-09T01:40:12.0352610Z         Error: error reading  advanced cluster list
2025-08-09T01:40:12.0352888Z         
2025-08-09T01:40:12.0353225Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-09T01:40:12.0353840Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-09T01:40:12.0354497Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-09T01:40:12.0354793Z         
2025-08-09T01:40:12.0355076Z         project ID 6896963918106a5d9025b7f2. Error
2025-08-09T01:40:12.0355646Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6896963918106a5d9025b7f2/clusters
2025-08-09T01:40:12.0356155Z         GET: HTTP 400 Bad Request (Error code:
2025-08-09T01:40:12.0356608Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-09T01:40:12.0357196Z         test-acc-tf-c-4735150660780056526 cannot be used in the Cluster API. Reason:
2025-08-09T01:40:12.0357817Z         Bad Request. Params: [test-acc-tf-c-4735150660780056526], BadRequestDetail: 
2025-08-09T01:40:12.0374807Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (888.84s)
```

- 2025-08-10 PASS 15 minutes
- 2025-08-11 PASS 34 minutes
- 2025-08-12
  - PASS 26 minutes
  - FAIL 6 minutes

### Error 2025-08-12T09:08:19+00:00
```
2025-08-12T09:08:19.9551093Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-12T09:08:19.9625284Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-12T09:08:19.9712302Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-12T09:08:19.9713154Z     pre_check.go:40: Time before creating cluster: 2025-08-12T08:10:31.312076862Z, ProjectID: 689af63463141409ee3d81d9, Cluster name: test-acc-tf-c-8377277378806058440
2025-08-12T09:08:19.9735681Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-12T09:08:19.9736397Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-12T09:08:19.9736829Z         
2025-08-12T09:08:19.9737154Z         Error: error reading  advanced cluster list
2025-08-12T09:08:19.9737453Z         
2025-08-12T09:08:19.9737815Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-12T09:08:19.9738471Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-12T09:08:19.9739066Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-12T09:08:19.9739373Z         
2025-08-12T09:08:19.9739685Z         project ID 689af63463141409ee3d81d9. Error
2025-08-12T09:08:19.9740300Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689af63463141409ee3d81d9/clusters
2025-08-12T09:08:19.9740825Z         GET: HTTP 400 Bad Request (Error code:
2025-08-12T09:08:19.9741317Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-12T09:08:19.9741938Z         test-acc-tf-c-6638948304177863049 cannot be used in the Cluster API. Reason:
2025-08-12T09:08:19.9742590Z         Bad Request. Params: [test-acc-tf-c-6638948304177863049], BadRequestDetail: 
2025-08-12T09:08:19.9743077Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (415.92s)
```

- 2025-08-13 PASS 13 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 39 minutes
- 2025-08-17

### Error 2025-08-17T01:54:47+00:00
```
2025-08-17T01:54:47.5268580Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-17T01:54:47.5349520Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-17T01:54:47.5376353Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-17T01:54:47.5377219Z     pre_check.go:40: Time before creating cluster: 2025-08-17T00:33:23.154077186Z, ProjectID: 68a122e0aafa9a76ca8bc966, Cluster name: test-acc-tf-c-7752612458265440686
2025-08-17T01:54:47.5462378Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-17T01:54:47.5463025Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2025-08-17T01:54:47.5463497Z         
2025-08-17T01:54:47.5463798Z         Error: error reading  advanced cluster list
2025-08-17T01:54:47.5464085Z         
2025-08-17T01:54:47.5464428Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-17T01:54:47.5465049Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-17T01:54:47.5465596Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-17T01:54:47.5465890Z         
2025-08-17T01:54:47.5466180Z         project ID 68a122e0aafa9a76ca8bc966. Error
2025-08-17T01:54:47.5466761Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e0aafa9a76ca8bc966/clusters
2025-08-17T01:54:47.5467266Z         GET: HTTP 400 Bad Request (Error code:
2025-08-17T01:54:47.5467720Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-17T01:54:47.5468446Z         test-acc-tf-c-4752284568328509775 cannot be used in the Cluster API. Reason:
2025-08-17T01:54:47.5469070Z         Bad Request. Params: [test-acc-tf-c-4752284568328509775], BadRequestDetail: 
2025-08-17T01:54:47.5469528Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (924.64s)
```

- 2025-08-18 PASS 10 minutes
- 2025-08-19 PASS 12 minutes
- 2025-08-20
  - FAIL 9 minutes

### Error 2025-08-20T01:34:33+00:00
```
2025-08-20T01:34:33.2694785Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T01:34:33.2768308Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T01:34:33.2895857Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T01:34:33.2896697Z     pre_check.go:40: Time before creating cluster: 2025-08-20T00:30:38.293713206Z, ProjectID: 68a516698c0d724731cbbc99, Cluster name: test-acc-tf-c-1185454858222287831
2025-08-20T01:34:33.2916335Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-20T01:34:33.2916886Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-20T01:34:33.2917292Z         
2025-08-20T01:34:33.2917601Z         Error: error reading  advanced cluster list
2025-08-20T01:34:33.2917880Z         
2025-08-20T01:34:33.2918219Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-20T01:34:33.2918962Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-20T01:34:33.2919514Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-20T01:34:33.2919801Z         
2025-08-20T01:34:33.2920092Z         project ID 68a516698c0d724731cbbc99. Error
2025-08-20T01:34:33.2920673Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a516698c0d724731cbbc99/clusters
2025-08-20T01:34:33.2921403Z         GET: HTTP 400 Bad Request (Error code:
2025-08-20T01:34:33.2921862Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-20T01:34:33.2922450Z         test-acc-tf-c-6488905364746444437 cannot be used in the Cluster API. Reason:
2025-08-20T01:34:33.2923079Z         Bad Request. Params: [test-acc-tf-c-6488905364746444437], BadRequestDetail: 
2025-08-20T01:34:33.2924091Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (562.08s)
```

  - PASS 6 minutes
- 2025-08-21

### Error 2025-08-21T05:27:02+00:00
```
2025-08-21T05:27:02.5593855Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T05:27:02.5656330Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T05:27:02.5710340Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T05:27:02.5711161Z     pre_check.go:40: Time before creating cluster: 2025-08-21T00:29:12.686360179Z, ProjectID: 68a667d92e1df52cf3cd975a, Cluster name: test-acc-tf-c-4392721887825129693
2025-08-21T05:27:02.5853997Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-21T05:27:02.5855195Z     resource_advanced_cluster_test.go:161: Step 2/2 error: Error running apply: exit status 1
2025-08-21T05:27:02.5855946Z         
2025-08-21T05:27:02.5856745Z         Error: error upgrading to a flex cluster: test-acc-tf-c-4392721887825129693
2025-08-21T05:27:02.5857566Z         
2025-08-21T05:27:02.5858149Z           with mongodbatlas_advanced_cluster.test,
2025-08-21T05:27:02.5859293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-21T05:27:02.5860329Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-21T05:27:02.5860874Z         
2025-08-21T05:27:02.5861652Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-08-21T05:27:02.5862373Z         timeout: 3h0m0s)
2025-08-21T05:27:02.5878404Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-08-21T05:27:02.5888548Z 	running tests:
2025-08-21T05:27:02.5889229Z 		TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (4h58m10s)
2025-08-21T05:27:02.5890118Z 		TestAccAdvancedCluster_sharedTier_flexUpgrade (4h58m10s)
```

- 2025-08-22: MISSING
- 2025-08-23 PASS 11 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1350697Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T03:34:47.1482079Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T03:34:47.1791648Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T03:34:47.1792475Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:33:23.077663125Z, ProjectID: 68aa5d414192cd1cc589d8c5, Cluster name: test-acc-tf-c-6069140222493434116
2025-08-24T03:34:47.1858537Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-24T03:34:47.1859640Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Check failed: Check 17/43 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-24T03:34:47.1860544Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (2328.40s)
```

- 2025-08-25

### Error 2025-08-25T01:49:12+00:00
```
2025-08-25T01:49:12.2240835Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-25T01:49:12.2312558Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-25T01:49:12.2374609Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-25T01:49:12.2375417Z     pre_check.go:40: Time before creating cluster: 2025-08-25T00:31:59.229098162Z, ProjectID: 68abae51cd8afb23a27a3da9, Cluster name: test-acc-tf-c-9220507800410181656
2025-08-25T01:49:12.2399363Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-25T01:49:12.2399909Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running apply: exit status 1
2025-08-25T01:49:12.2400319Z         
2025-08-25T01:49:12.2400621Z         Error: error reading  advanced cluster list
2025-08-25T01:49:12.2400897Z         
2025-08-25T01:49:12.2401235Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-25T01:49:12.2401848Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-25T01:49:12.2402391Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-25T01:49:12.2402674Z         
2025-08-25T01:49:12.2402967Z         project ID 68abae51cd8afb23a27a3da9. Error
2025-08-25T01:49:12.2403559Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae51cd8afb23a27a3da9/clusters
2025-08-25T01:49:12.2404063Z         GET: HTTP 400 Bad Request (Error code:
2025-08-25T01:49:12.2404513Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-25T01:49:12.2405095Z         test-acc-tf-c-3908410403178275676 cannot be used in the Cluster API. Reason:
2025-08-25T01:49:12.2405828Z         Bad Request. Params: [test-acc-tf-c-3908410403178275676], BadRequestDetail: 
2025-08-25T01:49:12.2410700Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (780.77s)
```

- 2025-08-26

### Error 2025-08-26T03:49:02+00:00
```
2025-08-26T03:49:02.9016644Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-26T03:49:02.9080248Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-26T03:49:02.9145506Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-26T03:49:02.9146362Z     pre_check.go:40: Time before creating cluster: 2025-08-26T00:29:56.010067618Z, ProjectID: 68acff74304c2a61a1fb1f97, Cluster name: test-acc-tf-c-2843986216842963973
2025-08-26T03:49:02.9181463Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-26T03:49:02.9182037Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running apply: exit status 1
2025-08-26T03:49:02.9182462Z         
2025-08-26T03:49:02.9182772Z         Error: error reading  advanced cluster list
2025-08-26T03:49:02.9183061Z         
2025-08-26T03:49:02.9183415Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-26T03:49:02.9184053Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-26T03:49:02.9184616Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-26T03:49:02.9184913Z         
2025-08-26T03:49:02.9185214Z         project ID 68acff74304c2a61a1fb1f97. Error
2025-08-26T03:49:02.9185824Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68acff74304c2a61a1fb1f97/clusters
2025-08-26T03:49:02.9186343Z         GET: HTTP 400 Bad Request (Error code:
2025-08-26T03:49:02.9186811Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-26T03:49:02.9187415Z         test-acc-tf-c-4333729396828550135 cannot be used in the Cluster API. Reason:
2025-08-26T03:49:02.9188069Z         Bad Request. Params: [test-acc-tf-c-4333729396828550135], BadRequestDetail: 
2025-08-26T03:49:02.9199823Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (897.66s)
```

- 2025-08-27 PASS 22 minutes
- 2025-08-28

### Error 2025-08-28T03:36:12+00:00
```
2025-08-28T03:36:12.1362344Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T03:36:12.1432429Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T03:36:12.1537792Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T03:36:12.1538619Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:30:45.628110379Z, ProjectID: 68afa28072e5d24729532ef7, Cluster name: test-acc-tf-c-2917592632271179713
2025-08-28T03:36:12.1603780Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-28T03:36:12.1604891Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Check failed: Check 22/43 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-08-28T03:36:12.1606514Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (2309.28s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 7 minutes
- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0794214Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-31T01:41:27.0865405Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-31T01:41:27.0998852Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-31T01:41:27.0999685Z     pre_check.go:40: Time before creating cluster: 2025-08-31T00:32:50.04601315Z, ProjectID: 68b397847e07f9709daec36a, Cluster name: test-acc-tf-c-4569776086847272330
2025-08-31T01:41:27.1019573Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-08-31T01:41:27.1020136Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running apply: exit status 1
2025-08-31T01:41:27.1020544Z         
2025-08-31T01:41:27.1020846Z         Error: error reading  advanced cluster list
2025-08-31T01:41:27.1021143Z         
2025-08-31T01:41:27.1021485Z           with data.mongodbatlas_advanced_clusters.test,
2025-08-31T01:41:27.1022124Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-08-31T01:41:27.1022684Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-08-31T01:41:27.1022971Z         
2025-08-31T01:41:27.1023263Z         project ID 68b397847e07f9709daec36a. Error
2025-08-31T01:41:27.1023849Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397847e07f9709daec36a/clusters
2025-08-31T01:41:27.1024347Z         GET: HTTP 400 Bad Request (Error code:
2025-08-31T01:41:27.1024816Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-08-31T01:41:27.1025533Z         test-acc-tf-c-2645549426140442601 cannot be used in the Cluster API. Reason:
2025-08-31T01:41:27.1026398Z         Bad Request. Params: [test-acc-tf-c-2645549426140442601], BadRequestDetail: 
2025-08-31T01:41:27.1026892Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (392.85s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6783521Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T00:30:49.6783869Z     shared_resource.go:93: 
2025-09-01T00:30:49.6784725Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6786415Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6788136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6790856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6793959Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.6797377Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:161
2025-09-01T00:30:49.6798778Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6803647Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6805885Z         	Test:       	TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T00:30:49.6809753Z         	Messages:   	Project creation failed: test-acc-tf-p-6497018561336669945, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6812369Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (0.17s)
```

  - FAIL an hour

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6521532Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T07:49:13.6712147Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T07:49:13.6944196Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T07:49:13.6945050Z     pre_check.go:40: Time before creating cluster: 2025-09-01T05:59:46.150758351Z, ProjectID: 68b536017af6b0372e98079f, Cluster name: test-acc-tf-c-2088476207494027906
2025-09-01T07:49:13.7023974Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-01T07:49:13.7024554Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running apply: exit status 1
2025-09-01T07:49:13.7024966Z         
2025-09-01T07:49:13.7025275Z         Error: error reading  advanced cluster list
2025-09-01T07:49:13.7025556Z         
2025-09-01T07:49:13.7025962Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-01T07:49:13.7026644Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-09-01T07:49:13.7027203Z           35: data "mongodbatlas_advanced_clusters" "test" {
2025-09-01T07:49:13.7027491Z         
2025-09-01T07:49:13.7027789Z         project ID 68b536017af6b0372e98079f. Error
2025-09-01T07:49:13.7028385Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b536017af6b0372e98079f/clusters
2025-09-01T07:49:13.7029186Z         GET: HTTP 400 Bad Request (Error code:
2025-09-01T07:49:13.7029802Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-01T07:49:13.7030421Z         test-acc-tf-c-2865383773364916535 cannot be used in the Cluster API. Reason:
2025-09-01T07:49:13.7031054Z         Bad Request. Params: [test-acc-tf-c-2865383773364916535], BadRequestDetail: 
2025-09-01T07:49:13.7047276Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (4429.89s)
```

  - PASS an hour
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 9 minutes
- 2025-09-02 PASS 13 minutes
- 2025-09-03 PASS 9 minutes
- 2025-09-04 PASS 7 minutes