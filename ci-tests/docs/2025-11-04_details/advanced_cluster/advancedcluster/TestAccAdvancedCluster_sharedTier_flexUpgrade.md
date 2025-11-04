# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027210000) |  | dev |  | 10571.09s
[2025-10-10 00:27](#error-2025-10-10t0027490000) |  | dev | flaky_500 | 1102.08s
[2025-10-13 00:29](#error-2025-10-13t0029460000) |  | dev |  | 1143.04s
[2025-10-15 00:28](#error-2025-10-15t0028240000) |  | dev |  | 459.09s
[2025-10-16 00:29](#error-2025-10-16t0029400000) |  | dev |  | 757.07s
[2025-10-17 00:29](#error-2025-10-17t0029260000) |  | dev |  | 387.01s
[2025-10-20 10:26](#error-2025-10-20t1026300000) |  | dev |  | 372.02s
[2025-10-22 00:29](#error-2025-10-22t0029110000) |  | dev | unknown | 823.07s
[2025-10-25 00:27](#error-2025-10-25t0027510000) |  | dev |  | 432.02s

## Timeline
- 2025-10-05: MISSING
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
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-10-22T00:29:11.736000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='13 days ago')

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