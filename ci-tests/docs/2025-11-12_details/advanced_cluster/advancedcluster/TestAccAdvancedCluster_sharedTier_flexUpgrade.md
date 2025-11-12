# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 27) FAIL(x 13) SKIP(x 2)
Success rate: 67.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029450000) |  | qa |  | 315.02s
[2025-10-09 00:27](#error-2025-10-09t0027210000) |  | dev |  | 10571.09s
[2025-10-10 00:27](#error-2025-10-10t0027490000) |  | dev | flaky_500 | 1102.08s
[2025-10-13 00:29](#error-2025-10-13t0029460000) |  | dev |  | 1143.04s
[2025-10-15 00:28](#error-2025-10-15t0028240000) |  | dev |  | 459.09s
[2025-10-16 00:29](#error-2025-10-16t0029400000) |  | dev |  | 757.07s
[2025-10-17 00:29](#error-2025-10-17t0029260000) |  | dev |  | 387.01s
[2025-10-20 10:26](#error-2025-10-20t1026300000) |  | dev |  | 372.02s
[2025-10-22 00:29](#error-2025-10-22t0029110000) |  | dev | unknown | 823.07s
[2025-10-25 00:27](#error-2025-10-25t0027510000) |  | dev |  | 432.02s
[2025-11-06 00:27](#error-2025-11-06t0027250000) |  | dev |  | 466.09s
[2025-11-07 00:28](#error-2025-11-07t0028020000) |  | dev |  | 440.02s
[2025-11-08 00:29](#error-2025-11-08t0029010000) |  | dev |  | 414.09s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 8 minutes
- 2025-10-05

### Error 2025-10-05T00:29:45+00:00
```
2025-10-05T00:29:45.3930628Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-05T00:31:26.4104565Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-05T00:31:41.3871934Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-05T00:31:41.3873941Z     pre_check.go:36: Time before creating cluster: 2025-10-05T00:31:41.386910388Z, ProjectID: 68e1bbf6fec65822ddfc9690, Cluster name: test-acc-tf-c-4909708051768102093
2025-10-05T00:35:39.2926603Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-05T00:35:39.2927441Z     resource_test.go:87: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2025-10-05T00:35:39.2927870Z         
2025-10-05T00:35:39.2928182Z         Error: error reading  advanced cluster list
2025-10-05T00:35:39.2928465Z         
2025-10-05T00:35:39.2928822Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-05T00:35:39.2929449Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-05T00:35:39.2930017Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-05T00:35:39.2930313Z         
2025-10-05T00:35:39.2930617Z         project ID 68e1bbf6fec65822ddfc9690. Error
2025-10-05T00:35:39.2931215Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbf6fec65822ddfc9690/clusters
2025-10-05T00:35:39.2931715Z         GET: HTTP 400 Bad Request (Error code:
2025-10-05T00:35:39.2932173Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-05T00:35:39.2932756Z         test-acc-tf-c-476272615093352436 cannot be used in the Cluster API. Reason:
2025-10-05T00:35:39.2933375Z         Bad Request. Params: [test-acc-tf-c-476272615093352436], BadRequestDetail: 
2025-10-05T00:36:41.5502297Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (315.17s)
```

- 2025-10-06 PASS 5 minutes
- 2025-10-07 PASS 9 minutes
- 2025-10-08 PASS 7 minutes
- 2025-10-09

### Error 2025-10-09T00:27:21+00:00
```
2025-10-09T00:27:21.2621121Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-09T00:35:20.1713023Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-09T00:35:55.1650159Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-09T00:35:55.1652029Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:35:55.164744992Z, ProjectID: 68e70165c2a3cd16930442c3, Cluster name: test-acc-tf-c-8368635523158924717
2025-10-09T03:29:26.8400598Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-09T03:29:26.8401117Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-10-09T03:29:26.8401479Z         
2025-10-09T03:29:26.8401789Z         Error: error reading  advanced cluster list
2025-10-09T03:29:26.8402072Z         
2025-10-09T03:29:26.8402435Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-09T03:29:26.8403069Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-09T03:29:26.8403643Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-09T03:29:26.8403938Z         
2025-10-09T03:29:26.8404239Z         project ID 68e70165c2a3cd16930442c3. Error
2025-10-09T03:29:26.8404838Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70165c2a3cd16930442c3/clusters
2025-10-09T03:29:26.8405346Z         GET: HTTP 400 Bad Request (Error code:
2025-10-09T03:29:26.8405797Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-09T03:29:26.8406380Z         test-acc-tf-c-2543977085198526198 cannot be used in the Cluster API. Reason:
2025-10-09T03:29:26.8406999Z         Bad Request. Params: [test-acc-tf-c-2543977085198526198], BadRequestDetail: 
2025-10-09T03:31:32.0170340Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (10571.86s)
```

- 2025-10-10

### Error 2025-10-10T00:27:49+00:00
```
2025-10-10T00:27:49.2993797Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-10T00:33:13.9811203Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-10T00:34:08.9644378Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-10T00:34:08.9645971Z     pre_check.go:36: Time before creating cluster: 2025-10-10T00:34:08.964145005Z, ProjectID: 68e853011a9c5e5749c0e530, Cluster name: test-acc-tf-c-154451236521881909
2025-10-10T00:47:28.7909012Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-10T00:47:28.7909571Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-10-10T00:47:28.7910011Z         
2025-10-10T00:47:28.7910360Z         Error: error reading  advanced cluster list
2025-10-10T00:47:28.7910722Z         
2025-10-10T00:47:28.7911076Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-10T00:47:28.7912105Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-10T00:47:28.7912715Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-10T00:47:28.7913025Z         
2025-10-10T00:47:28.7913341Z         project ID 68e853011a9c5e5749c0e530. Error
2025-10-10T00:47:28.7913955Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e853011a9c5e5749c0e530/clusters
2025-10-10T00:47:28.7914484Z         GET: HTTP 400 Bad Request (Error code:
2025-10-10T00:47:28.7914954Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-10T00:47:28.7915553Z         test-acc-tf-c-1770655832885120188 cannot be used in the Cluster API. Reason:
2025-10-10T00:47:28.7916440Z         Bad Request. Params: [test-acc-tf-c-1770655832885120188], BadRequestDetail: 
2025-10-10T00:47:54.6873105Z    test_terraform_path=/home/runner/work/_temp/7148f975-8d9b-4b69-826a-a5664feaa4c9/terraform test_step_number=1 test_working_directory=/tmp/plugintest1385988367 test_name=TestMigAdvancedClusterConfig_asymmetricGeoShardedNewSchema
2025-10-10T00:51:36.7323419Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (1102.76s)
```

- 2025-10-11 PASS 9 minutes
- 2025-10-12 PASS 19 minutes
- 2025-10-13

### Error 2025-10-13T00:29:46+00:00
```
2025-10-13T00:29:46.5508953Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-13T00:31:27.7860286Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-13T00:32:17.7880835Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-13T00:32:17.7883216Z     pre_check.go:36: Time before creating cluster: 2025-10-13T00:32:17.787739543Z, ProjectID: 68ec47f8b8d3122c29653bd5, Cluster name: test-acc-tf-c-4159739492705573556
2025-10-13T00:42:28.9744407Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-13T00:42:28.9745117Z     resource_test.go:87: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-10-13T00:42:28.9745543Z         
2025-10-13T00:42:28.9745972Z         Error: error reading  advanced cluster list
2025-10-13T00:42:28.9746272Z         
2025-10-13T00:42:28.9746735Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-13T00:42:28.9747484Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-13T00:42:28.9748341Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-13T00:42:28.9748773Z         
2025-10-13T00:42:28.9749082Z         project ID 68ec47f8b8d3122c29653bd5. Error
2025-10-13T00:42:28.9749705Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ec47f8b8d3122c29653bd5/clusters
2025-10-13T00:42:28.9750235Z         GET: HTTP 400 Bad Request (Error code:
2025-10-13T00:42:28.9750710Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-13T00:42:28.9751328Z         test-acc-tf-c-6828927571508852516 cannot be used in the Cluster API. Reason:
2025-10-13T00:42:28.9751980Z         Bad Request. Params: [test-acc-tf-c-6828927571508852516], BadRequestDetail: 
2025-10-13T00:50:31.1906603Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (1143.41s)
```

- 2025-10-14 PASS 6 minutes
- 2025-10-15

### Error 2025-10-15T00:28:24+00:00
```
2025-10-15T00:28:24.0603812Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-15T00:30:04.3794972Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-15T00:30:54.3803912Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-15T00:30:54.3805627Z     pre_check.go:36: Time before creating cluster: 2025-10-15T00:30:54.380129725Z, ProjectID: 68eeeaa6be088e40ea2d1b83, Cluster name: test-acc-tf-c-7219813970691121242
2025-10-15T00:36:31.7916972Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-15T00:36:31.7917589Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-10-15T00:36:31.7917964Z         
2025-10-15T00:36:31.7918378Z         Error: error reading  advanced cluster list
2025-10-15T00:36:31.7918665Z         
2025-10-15T00:36:31.7919107Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-15T00:36:31.7920068Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-15T00:36:31.7920893Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-15T00:36:31.7921209Z         
2025-10-15T00:36:31.7921527Z         project ID 68eeeaa6be088e40ea2d1b83. Error
2025-10-15T00:36:31.7922365Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68eeeaa6be088e40ea2d1b83/clusters
2025-10-15T00:36:31.7923084Z         GET: HTTP 400 Bad Request (Error code:
2025-10-15T00:36:31.7923554Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-15T00:36:31.7924143Z         test-acc-tf-c-51115352536134118 cannot be used in the Cluster API. Reason:
2025-10-15T00:36:31.7924779Z         Bad Request. Params: [test-acc-tf-c-51115352536134118], BadRequestDetail: 
2025-10-15T00:37:44.2759425Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (459.90s)
```

- 2025-10-16

### Error 2025-10-16T00:29:40+00:00
```
2025-10-16T00:29:40.8062581Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-16T00:31:37.5918339Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-16T00:32:27.5944871Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-16T00:32:27.5946036Z     pre_check.go:36: Time before creating cluster: 2025-10-16T00:32:27.594230217Z, ProjectID: 68f03c723de2446c7e52d38d, Cluster name: test-acc-tf-c-4121847805518513801
2025-10-16T00:38:22.1876482Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-16T00:38:22.1877517Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-10-16T00:38:22.1878104Z         
2025-10-16T00:38:22.1878615Z         Error: error reading  advanced cluster list
2025-10-16T00:38:22.1879078Z         
2025-10-16T00:38:22.1879653Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-16T00:38:22.1880727Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-16T00:38:22.1881937Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-16T00:38:22.1882441Z         
2025-10-16T00:38:22.1882944Z         project ID 68f03c723de2446c7e52d38d. Error
2025-10-16T00:38:22.1883945Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f03c723de2446c7e52d38d/clusters
2025-10-16T00:38:22.1884803Z         GET: HTTP 400 Bad Request (Error code:
2025-10-16T00:38:22.1885556Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-16T00:38:22.1886538Z         test-acc-tf-c-6481973931740745519 cannot be used in the Cluster API. Reason:
2025-10-16T00:38:22.1888620Z         Bad Request. Params: [test-acc-tf-c-6481973931740745519], BadRequestDetail: 
2025-10-16T00:44:15.2605968Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (757.67s)
```

- 2025-10-17

### Error 2025-10-17T00:29:26+00:00
```
2025-10-17T00:29:26.7708046Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-17T00:31:20.6718828Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-17T00:31:35.6460965Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-17T00:31:35.6463040Z     pre_check.go:36: Time before creating cluster: 2025-10-17T00:31:35.645825349Z, ProjectID: 68f18de565803f654910f87e, Cluster name: test-acc-tf-c-6686253316346681327
2025-10-17T00:36:34.6592970Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-17T00:36:34.6593596Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-10-17T00:36:34.6593982Z         
2025-10-17T00:36:34.6594370Z         Error: error reading  advanced cluster list
2025-10-17T00:36:34.6594679Z         
2025-10-17T00:36:34.6595053Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-17T00:36:34.6595925Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-17T00:36:34.6596554Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-17T00:36:34.6596858Z         
2025-10-17T00:36:34.6597160Z         project ID 68f18de565803f654910f87e. Error
2025-10-17T00:36:34.6597771Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f18de565803f654910f87e/clusters
2025-10-17T00:36:34.6598295Z         GET: HTTP 400 Bad Request (Error code:
2025-10-17T00:36:34.6598761Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-17T00:36:34.6599615Z         test-acc-tf-c-8807525846448819383 cannot be used in the Cluster API. Reason:
2025-10-17T00:36:34.6600257Z         Bad Request. Params: [test-acc-tf-c-8807525846448819383], BadRequestDetail: 
2025-10-17T00:37:47.7222563Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (387.08s)
```

- 2025-10-18 PASS 6 minutes
- 2025-10-19 PASS 5 minutes
- 2025-10-20
  - PASS 10 minutes
  - FAIL 6 minutes

### Error 2025-10-20T10:26:30+00:00
```
2025-10-20T10:26:30.0960061Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-20T10:28:27.7213577Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-20T10:28:42.7224844Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-20T10:28:42.7227210Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:28:42.722183651Z, ProjectID: 68f60e54de46041f5669aa57, Cluster name: test-acc-tf-c-9063663204673975725
2025-10-20T10:33:37.8753587Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-20T10:33:37.8754398Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-10-20T10:33:37.8754780Z         
2025-10-20T10:33:37.8755103Z         Error: error reading  advanced cluster list
2025-10-20T10:33:37.8755400Z         
2025-10-20T10:33:37.8756185Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-20T10:33:37.8756860Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-20T10:33:37.8757441Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-20T10:33:37.8757754Z         
2025-10-20T10:33:37.8758068Z         project ID 68f60e54de46041f5669aa57. Error
2025-10-20T10:33:37.8758680Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e54de46041f5669aa57/clusters
2025-10-20T10:33:37.8759203Z         GET: HTTP 400 Bad Request (Error code:
2025-10-20T10:33:37.8759681Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-20T10:33:37.8760293Z         test-acc-tf-c-2494045699399333875 cannot be used in the Cluster API. Reason:
2025-10-20T10:33:37.8760933Z         Bad Request. Params: [test-acc-tf-c-2494045699399333875], BadRequestDetail: 
2025-10-20T10:34:39.8808357Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (372.16s)
```

- 2025-10-21 PASS 7 minutes
- 2025-10-22
  - FAIL 13 minutes

### Error 2025-10-22T00:29:11+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-10-22T00:29:11.736000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='21 days ago')

```
2025-10-22T00:29:11.7364139Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-22T00:31:01.0760361Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-22T00:32:01.0052892Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-22T00:32:01.0055043Z     pre_check.go:36: Time before creating cluster: 2025-10-22T00:32:01.004992203Z, ProjectID: 68f82555678a6b3d96696f34, Cluster name: test-acc-tf-c-2375599530582791256
2025-10-22T00:42:05.9411815Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-22T00:42:05.9412526Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-10-22T00:42:05.9413067Z         
2025-10-22T00:42:05.9413455Z         Error: error reading  advanced cluster list
2025-10-22T00:42:05.9413798Z         
2025-10-22T00:42:05.9414151Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-22T00:42:05.9414800Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-22T00:42:05.9415396Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-22T00:42:05.9415697Z         
2025-10-22T00:42:05.9415999Z         project ID 68f82555678a6b3d96696f34. Error
2025-10-22T00:42:05.9416835Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f82555678a6b3d96696f34/clusters
2025-10-22T00:42:05.9417377Z         GET: HTTP 400 Bad Request (Error code:
2025-10-22T00:42:05.9417851Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-22T00:42:05.9418443Z         test-acc-tf-c-783019571787875317 cannot be used in the Cluster API. Reason:
2025-10-22T00:42:05.9419071Z         Bad Request. Params: [test-acc-tf-c-783019571787875317], BadRequestDetail: 
2025-10-22T00:44:44.6738266Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (823.69s)
```

  - PASS 6 minutes
- 2025-10-23 PASS 9 minutes
- 2025-10-24 PASS 5 minutes
- 2025-10-25

### Error 2025-10-25T00:27:51+00:00
```
2025-10-25T00:27:51.4462110Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-25T00:29:40.3702172Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-25T00:30:45.3527628Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-25T00:30:45.3529062Z     pre_check.go:36: Time before creating cluster: 2025-10-25T00:30:45.352468159Z, ProjectID: 68fc1984a875863bf4d40141, Cluster name: test-acc-tf-c-5795065019351067045
2025-10-25T00:35:40.3947055Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-25T00:35:40.3947776Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-10-25T00:35:40.3948251Z         
2025-10-25T00:35:40.3948650Z         Error: error reading  advanced cluster list
2025-10-25T00:35:40.3948992Z         
2025-10-25T00:35:40.3949457Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-25T00:35:40.3950364Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-25T00:35:40.3951810Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-25T00:35:40.3952214Z         
2025-10-25T00:35:40.3952555Z         project ID 68fc1984a875863bf4d40141. Error
2025-10-25T00:35:40.3953242Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68fc1984a875863bf4d40141/clusters
2025-10-25T00:35:40.3953827Z         GET: HTTP 400 Bad Request (Error code:
2025-10-25T00:35:40.3954359Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-25T00:35:40.3955240Z         test-acc-tf-c-5234641535563604848 cannot be used in the Cluster API. Reason:
2025-10-25T00:35:40.3956138Z         Bad Request. Params: [test-acc-tf-c-5234641535563604848], BadRequestDetail: 
2025-10-25T00:36:52.5224668Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (432.16s)
```

- 2025-10-26 PASS 6 minutes
- 2025-10-27 PASS 29 minutes
- 2025-10-28 PASS 6 minutes
- 2025-10-29 PASS 11 minutes
- 2025-10-30 PASS 7 minutes
- 2025-10-31 PASS 7 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 minutes
- 2025-11-03 PASS 6 minutes
- 2025-11-04 PASS 5 minutes
- 2025-11-05
  - PASS 7 minutes
  - PASS 6 minutes
- 2025-11-06

### Error 2025-11-06T00:27:25+00:00
```
2025-11-06T00:27:25.1872923Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:29:11.2684516Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:29:51.2580055Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:29:51.2582683Z     pre_check.go:46: Time before creating cluster: 2025-11-06T00:29:51.257647057Z, ProjectID: 690beb6bb0a5510b327ca4ff, Cluster name: test-acc-tf-c-9117943402257094767
2025-11-06T00:35:35.8092958Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:35:35.8093631Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-11-06T00:35:35.8094341Z         
2025-11-06T00:35:35.8094930Z         Error: error reading  advanced cluster list
2025-11-06T00:35:35.8095313Z         
2025-11-06T00:35:35.8095782Z           with data.mongodbatlas_advanced_clusters.test,
2025-11-06T00:35:35.8096576Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-11-06T00:35:35.8097229Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-11-06T00:35:35.8097570Z         
2025-11-06T00:35:35.8097908Z         project ID 690beb6bb0a5510b327ca4ff. Error
2025-11-06T00:35:35.8098602Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6bb0a5510b327ca4ff/clusters
2025-11-06T00:35:35.8099187Z         GET: HTTP 400 Bad Request (Error code:
2025-11-06T00:35:35.8099735Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-11-06T00:35:35.8100446Z         test-acc-tf-c-3741508550106808748 cannot be used in the Cluster API. Reason:
2025-11-06T00:35:35.8101176Z         Bad Request. Params: [test-acc-tf-c-3741508550106808748], BadRequestDetail: 
2025-11-06T00:36:58.1628110Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (466.90s)
```

- 2025-11-07

### Error 2025-11-07T00:28:02+00:00
```
2025-11-07T00:28:02.7649187Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:29:39.1165609Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:30:49.1257061Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:30:49.1258956Z     pre_check.go:46: Time before creating cluster: 2025-11-07T00:30:49.125394497Z, ProjectID: 690d3d0fa78815557f58c592, Cluster name: test-acc-tf-c-8915561565920588802
2025-11-07T00:35:46.7017211Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:35:46.7017683Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-11-07T00:35:46.7018089Z         
2025-11-07T00:35:46.7018380Z         Error: error reading  advanced cluster list
2025-11-07T00:35:46.7018719Z         
2025-11-07T00:35:46.7019058Z           with data.mongodbatlas_advanced_clusters.test,
2025-11-07T00:35:46.7019710Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-11-07T00:35:46.7020419Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-11-07T00:35:46.7020701Z         
2025-11-07T00:35:46.7020982Z         project ID 690d3d0fa78815557f58c592. Error
2025-11-07T00:35:46.7021704Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0fa78815557f58c592/clusters
2025-11-07T00:35:46.7022254Z         GET: HTTP 400 Bad Request (Error code:
2025-11-07T00:35:46.7022687Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-11-07T00:35:46.7023231Z         test-acc-tf-c-3211355284320255794 cannot be used in the Cluster API. Reason:
2025-11-07T00:35:46.7023816Z         Bad Request. Params: [test-acc-tf-c-3211355284320255794], BadRequestDetail: 
2025-11-07T00:36:59.3072896Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (440.19s)
```

- 2025-11-08

### Error 2025-11-08T00:29:01+00:00
```
2025-11-08T00:29:01.8132348Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:31:08.7764571Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:31:43.7471657Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:31:43.7473877Z     pre_check.go:46: Time before creating cluster: 2025-11-08T00:31:43.7467928Z, ProjectID: 690e8ecb0887d8385bbd339d, Cluster name: test-acc-tf-c-271108340439751507
2025-11-08T00:37:01.5092843Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:37:01.5093590Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-11-08T00:37:01.5094291Z         
2025-11-08T00:37:01.5094793Z         Error: error reading  advanced cluster list
2025-11-08T00:37:01.5095098Z         
2025-11-08T00:37:01.5095606Z           with data.mongodbatlas_advanced_clusters.test,
2025-11-08T00:37:01.5096430Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-11-08T00:37:01.5097000Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-11-08T00:37:01.5097604Z         
2025-11-08T00:37:01.5097988Z         project ID 690e8ecb0887d8385bbd339d. Error
2025-11-08T00:37:01.5098592Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690e8ecb0887d8385bbd339d/clusters
2025-11-08T00:37:01.5099101Z         GET: HTTP 400 Bad Request (Error code:
2025-11-08T00:37:01.5099560Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-11-08T00:37:01.5100176Z         test-acc-tf-c-1940384098746198210 cannot be used in the Cluster API. Reason:
2025-11-08T00:37:01.5100810Z         Bad Request. Params: [test-acc-tf-c-1940384098746198210], BadRequestDetail: 
2025-11-08T00:38:03.6450231Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (414.88s)
```

- 2025-11-09 PASS 5 minutes
- 2025-11-10 PASS 6 minutes
- 2025-11-11 SKIP unknown
- 2025-11-12 SKIP unknown