# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 21) FAIL(x 13)
Success rate: 61.76%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-06 00:26](#error-2025-09-06t0026090000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68bb7f9fe111ac0f653b7342/clusters | dev |  | 823.07s
[2025-09-08 00:28](#error-2025-09-08t0028460000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68be233c4c1fe670da314a02/clusters | dev |  | 938.07s
[2025-09-08 09:32](#error-2025-09-08t0932410000) | CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API /api/atlas/v2/groups/68bea2b8341d8a49877633ab/clusters | qa |  | 563.01s
[2025-09-21 00:29](#error-2025-09-21t0029330000) |  | qa |  | 326.07s
[2025-09-24 00:27](#error-2025-09-24t0027090000) |  | dev |  | 426.04s
[2025-09-26 00:27](#error-2025-09-26t0027110000) |  | dev |  | 445.06s
[2025-09-27 00:26](#error-2025-09-27t0026300000) |  | dev |  | 403.03s
[2025-09-28 00:29](#error-2025-09-28t0029590000) |  | qa |  | 410.06s
[2025-09-30 07:29](#error-2025-09-30t0729380000) |  | dev |  | 363.04s
[2025-09-30 09:09](#error-2025-09-30t0909350000) |  | dev |  | 371.09s
[2025-10-01 07:28](#error-2025-10-01t0728210000) |  | dev | flaky_500 | 365.03s
[2025-10-01 09:09](#error-2025-10-01t0909530000) |  | dev | flaky_500 | 429.05s
[2025-10-01 11:48](#error-2025-10-01t1148310000) |  | dev |  | 486.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 minutes
- 2025-09-04 PASS 10 minutes
- 2025-09-05: MISSING
- 2025-09-06

### Error 2025-09-06T00:26:09+00:00
```
2025-09-06T00:26:09.6317703Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-06T00:27:49.0463007Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-06T00:28:59.0323101Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-06T00:28:59.0325518Z     pre_check.go:40: Time before creating cluster: 2025-09-06T00:28:59.032063106Z, ProjectID: 68bb7f9fe111ac0f653b7342, Cluster name: test-acc-tf-c-7719394633107688893
2025-09-06T00:38:58.8011423Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-06T00:38:58.8012574Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running apply: exit status 1
2025-09-06T00:38:58.8013377Z         
2025-09-06T00:38:58.8017900Z         Error: error reading advanced cluster list for project(68bb7f9fe111ac0f653b7342): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bb7f9fe111ac0f653b7342/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-3729746780207216896 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-3729746780207216896], BadRequestDetail: 
2025-09-06T00:38:58.8020782Z         
2025-09-06T00:38:58.8021451Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-06T00:38:58.8022696Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-09-06T00:38:58.8023793Z           35: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-06T00:38:58.8024562Z         
2025-09-06T00:41:32.6960301Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (823.65s)
```

- 2025-09-07 PASS 14 minutes
- 2025-09-08
  - FAIL 15 minutes

### Error 2025-09-08T00:28:46+00:00
```
2025-09-08T00:28:46.7521338Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T00:29:48.2788732Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T00:29:53.2781141Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T00:29:53.2783098Z     pre_check.go:40: Time before creating cluster: 2025-09-08T00:29:53.277829544Z, ProjectID: 68be233c4c1fe670da314a02, Cluster name: test-acc-tf-c-8690846483081848532
2025-09-08T00:40:22.6018880Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T00:40:22.6019649Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running apply: exit status 1
2025-09-08T00:40:22.6020172Z         
2025-09-08T00:40:22.6022336Z         Error: error reading advanced cluster list for project(68be233c4c1fe670da314a02): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68be233c4c1fe670da314a02/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-188704807018490893 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-188704807018490893], BadRequestDetail: 
2025-09-08T00:40:22.6023964Z         
2025-09-08T00:40:22.6024316Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-08T00:40:22.6024951Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-09-08T00:40:22.6025505Z           35: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-08T00:40:22.6025803Z         
2025-09-08T00:45:26.9947078Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (938.72s)
```

  - FAIL 9 minutes

### Error 2025-09-08T09:32:41+00:00
```
2025-09-08T09:32:41.8067873Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T09:33:47.7760774Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T09:34:37.7641840Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T09:34:37.7644214Z     pre_check.go:40: Time before creating cluster: 2025-09-08T09:34:37.76388744Z, ProjectID: 68bea2b8341d8a49877633ab, Cluster name: test-acc-tf-c-8387318856515550810
2025-09-08T09:42:31.1476903Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-08T09:42:31.1478000Z     resource_advanced_cluster_test.go:162: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-08T09:42:31.1478697Z         
2025-09-08T09:42:31.1482634Z         Error: error reading advanced cluster list for project(68bea2b8341d8a49877633ab): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b8341d8a49877633ab/clusters GET: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-5765230097157905704 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-5765230097157905704], BadRequestDetail: 
2025-09-08T09:42:31.1485426Z         
2025-09-08T09:42:31.1486092Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-08T09:42:31.1487267Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_clusters" "test":
2025-09-08T09:42:31.1488327Z           35: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-08T09:42:31.1488839Z         
2025-09-08T09:43:10.8195164Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (563.06s)
```

  - PASS 8 minutes
- 2025-09-09 PASS 10 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 7 minutes
- 2025-09-20 PASS 6 minutes
- 2025-09-21

### Error 2025-09-21T00:29:33+00:00
```
2025-09-21T00:29:33.4641130Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-21T00:31:04.3697043Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-21T00:31:54.3751862Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-21T00:31:54.3753111Z     pre_check.go:32: Time before creating cluster: 2025-09-21T00:31:54.374877415Z, ProjectID: 68cf46ec5ccc8c4417188ddc, Cluster name: test-acc-tf-c-1900604722967706559
2025-09-21T00:35:20.5209391Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-21T00:35:20.5210030Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-09-21T00:35:20.5210399Z         
2025-09-21T00:35:20.5210711Z         Error: error reading  advanced cluster list
2025-09-21T00:35:20.5211037Z         
2025-09-21T00:35:20.5211590Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-21T00:35:20.5212429Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-09-21T00:35:20.5212999Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-21T00:35:20.5213295Z         
2025-09-21T00:35:20.5213596Z         project ID 68cf46ec5ccc8c4417188ddc. Error
2025-09-21T00:35:20.5214197Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46ec5ccc8c4417188ddc/clusters
2025-09-21T00:35:20.5214698Z         GET: HTTP 400 Bad Request (Error code:
2025-09-21T00:35:20.5215446Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-21T00:35:20.5216049Z         test-acc-tf-c-2092414884614609246 cannot be used in the Cluster API. Reason:
2025-09-21T00:35:20.5216677Z         Bad Request. Params: [test-acc-tf-c-2092414884614609246], BadRequestDetail: 
2025-09-21T00:36:31.0465786Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (326.68s)
```

- 2025-09-22 PASS 5 minutes
- 2025-09-23 PASS 6 minutes
- 2025-09-24

### Error 2025-09-24T00:27:09+00:00
```
2025-09-24T00:27:09.1357072Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-24T00:29:07.3902234Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-24T00:30:07.3738180Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-24T00:30:07.3739956Z     pre_check.go:32: Time before creating cluster: 2025-09-24T00:30:07.373548508Z, ProjectID: 68d33ad96387fb3b6d1e7b91, Cluster name: test-acc-tf-c-3548648066525626712
2025-09-24T00:34:30.6887643Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-24T00:34:30.6888611Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-09-24T00:34:30.6889303Z         
2025-09-24T00:34:30.6889847Z         Error: error reading  advanced cluster list
2025-09-24T00:34:30.6890399Z         
2025-09-24T00:34:30.6890798Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-24T00:34:30.6891635Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-09-24T00:34:30.6892254Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-24T00:34:30.6892582Z         
2025-09-24T00:34:30.6892895Z         project ID 68d33ad96387fb3b6d1e7b91. Error
2025-09-24T00:34:30.6893571Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d33ad96387fb3b6d1e7b91/clusters
2025-09-24T00:34:30.6894139Z         GET: HTTP 400 Bad Request (Error code:
2025-09-24T00:34:30.6894892Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-24T00:34:30.6895610Z         test-acc-tf-c-172042977924015621 cannot be used in the Cluster API. Reason:
2025-09-24T00:34:30.6896306Z         Bad Request. Params: [test-acc-tf-c-172042977924015621], BadRequestDetail: 
2025-09-24T00:36:13.7950688Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (426.41s)
```

- 2025-09-25 PASS 5 minutes
- 2025-09-26

### Error 2025-09-26T00:27:11+00:00
```
2025-09-26T00:27:11.0976357Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-26T00:28:51.0176084Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-26T00:29:50.9949359Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-26T00:29:50.9950640Z     pre_check.go:32: Time before creating cluster: 2025-09-26T00:29:50.994637238Z, ProjectID: 68d5ddddf8df4c6a73fc323e, Cluster name: test-acc-tf-c-835910197154275852
2025-09-26T00:34:23.7721737Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-26T00:34:23.7722460Z     resource_test.go:87: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2025-09-26T00:34:23.7722989Z         
2025-09-26T00:34:23.7723386Z         Error: error reading  advanced cluster list
2025-09-26T00:34:23.7723681Z         
2025-09-26T00:34:23.7724028Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-26T00:34:23.7724659Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-09-26T00:34:23.7725227Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-26T00:34:23.7725525Z         
2025-09-26T00:34:23.7726269Z         project ID 68d5ddddf8df4c6a73fc323e. Error
2025-09-26T00:34:23.7726994Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5ddddf8df4c6a73fc323e/clusters
2025-09-26T00:34:23.7727517Z         GET: HTTP 400 Bad Request (Error code:
2025-09-26T00:34:23.7727987Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-26T00:34:23.7728590Z         test-acc-tf-c-2348332167469680574 cannot be used in the Cluster API. Reason:
2025-09-26T00:34:23.7729217Z         Bad Request. Params: [test-acc-tf-c-2348332167469680574], BadRequestDetail: 
2025-09-26T00:36:16.6159592Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (445.61s)
```

- 2025-09-27

### Error 2025-09-27T00:26:30+00:00
```
2025-09-27T00:26:30.1854210Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-27T00:28:04.6598483Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-27T00:28:44.6070960Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-27T00:28:44.6072260Z     pre_check.go:32: Time before creating cluster: 2025-09-27T00:28:44.606842648Z, ProjectID: 68d72f335ed71157b4340062, Cluster name: test-acc-tf-c-4054623639947148942
2025-09-27T00:33:26.1682680Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-27T00:33:26.1683366Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-09-27T00:33:26.1683875Z         
2025-09-27T00:33:26.1684321Z         Error: error reading  advanced cluster list
2025-09-27T00:33:26.1684742Z         
2025-09-27T00:33:26.1685231Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-27T00:33:26.1685974Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-09-27T00:33:26.1686654Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-27T00:33:26.1687239Z         
2025-09-27T00:33:26.1687670Z         project ID 68d72f335ed71157b4340062. Error
2025-09-27T00:33:26.1688404Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d72f335ed71157b4340062/clusters
2025-09-27T00:33:26.1689052Z         GET: HTTP 400 Bad Request (Error code:
2025-09-27T00:33:26.1689648Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-27T00:33:26.1690371Z         test-acc-tf-c-1778226701900605396 cannot be used in the Cluster API. Reason:
2025-09-27T00:33:26.1691134Z         Bad Request. Params: [test-acc-tf-c-1778226701900605396], BadRequestDetail: 
2025-09-27T00:34:47.9254691Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (403.32s)
```

- 2025-09-28

### Error 2025-09-28T00:29:59+00:00
```
2025-09-28T00:29:59.8277345Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-28T00:31:32.1260024Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-28T00:32:27.1082399Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-28T00:32:27.1084472Z     pre_check.go:32: Time before creating cluster: 2025-09-28T00:32:27.10789725Z, ProjectID: 68d88186e664a15fb5ae806e, Cluster name: test-acc-tf-c-3165885291680427818
2025-09-28T00:37:21.0616489Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-28T00:37:21.0617279Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-09-28T00:37:21.0617641Z         
2025-09-28T00:37:21.0617947Z         Error: error reading  advanced cluster list
2025-09-28T00:37:21.0618228Z         
2025-09-28T00:37:21.0618567Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-28T00:37:21.0619198Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-09-28T00:37:21.0619762Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-28T00:37:21.0620059Z         
2025-09-28T00:37:21.0620354Z         project ID 68d88186e664a15fb5ae806e. Error
2025-09-28T00:37:21.0621220Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88186e664a15fb5ae806e/clusters
2025-09-28T00:37:21.0621733Z         GET: HTTP 400 Bad Request (Error code:
2025-09-28T00:37:21.0622205Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-28T00:37:21.0622806Z         test-acc-tf-c-6552227273208332951 cannot be used in the Cluster API. Reason:
2025-09-28T00:37:21.0623435Z         Bad Request. Params: [test-acc-tf-c-6552227273208332951], BadRequestDetail: 
2025-09-28T00:38:22.6570169Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (410.55s)
```

- 2025-09-29
  - PASS 7 minutes
  - PASS 6 minutes
- 2025-09-30
  - PASS 6 minutes
  - FAIL 6 minutes

### Error 2025-09-30T07:29:38+00:00
```
2025-09-30T07:29:38.2352197Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T07:31:22.1162404Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T07:32:12.1124109Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T07:32:12.1125188Z     pre_check.go:32: Time before creating cluster: 2025-09-30T07:32:12.111861155Z, ProjectID: 68db86e0c882bb707c96c55a, Cluster name: test-acc-tf-c-147626273565198747
2025-09-30T07:36:03.0765298Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T07:36:03.0765849Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-09-30T07:36:03.0766275Z         
2025-09-30T07:36:03.0766820Z         Error: error reading  advanced cluster list
2025-09-30T07:36:03.0767166Z         
2025-09-30T07:36:03.0767652Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-30T07:36:03.0768287Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-09-30T07:36:03.0768847Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-30T07:36:03.0769137Z         
2025-09-30T07:36:03.0769449Z         project ID 68db86e0c882bb707c96c55a. Error
2025-09-30T07:36:03.0770050Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db86e0c882bb707c96c55a/clusters
2025-09-30T07:36:03.0770558Z         GET: HTTP 400 Bad Request (Error code:
2025-09-30T07:36:03.0771020Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-30T07:36:03.0771615Z         test-acc-tf-c-4781644290017495188 cannot be used in the Cluster API. Reason:
2025-09-30T07:36:03.0772241Z         Bad Request. Params: [test-acc-tf-c-4781644290017495188], BadRequestDetail: 
2025-09-30T07:37:25.5283693Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (363.41s)
```

  - PASS 5 minutes
  - FAIL 6 minutes

### Error 2025-09-30T09:09:35+00:00
```
2025-09-30T09:09:35.1986162Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T09:11:27.4818011Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T09:12:17.4887191Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T09:12:17.4889238Z     pre_check.go:32: Time before creating cluster: 2025-09-30T09:12:17.488393199Z, ProjectID: 68db9e4df2e0c5381c12d780, Cluster name: test-acc-tf-c-5880412738619496073
2025-09-30T09:16:07.0779800Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-09-30T09:16:07.0780580Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-09-30T09:16:07.0781069Z         
2025-09-30T09:16:07.0781393Z         Error: error reading  advanced cluster list
2025-09-30T09:16:07.0781725Z         
2025-09-30T09:16:07.0782388Z           with data.mongodbatlas_advanced_clusters.test,
2025-09-30T09:16:07.0783538Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-09-30T09:16:07.0784562Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-09-30T09:16:07.0785090Z         
2025-09-30T09:16:07.0785588Z         project ID 68db9e4df2e0c5381c12d780. Error
2025-09-30T09:16:07.0786456Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db9e4df2e0c5381c12d780/clusters
2025-09-30T09:16:07.0787111Z         GET: HTTP 400 Bad Request (Error code:
2025-09-30T09:16:07.0787777Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-09-30T09:16:07.0788454Z         test-acc-tf-c-8802884442097795024 cannot be used in the Cluster API. Reason:
2025-09-30T09:16:07.0789553Z         Bad Request. Params: [test-acc-tf-c-8802884442097795024], BadRequestDetail: 
2025-09-30T09:17:39.4081276Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (371.93s)
```

  - PASS 5 minutes
- 2025-10-01
  - PASS 6 minutes
  - PASS 6 minutes
  - PASS 7 minutes
  - FAIL 6 minutes

### Error 2025-10-01T07:28:21+00:00
```
2025-10-01T07:28:21.4901356Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T07:30:00.8596014Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T07:30:15.8584100Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T07:30:15.8585694Z     pre_check.go:32: Time before creating cluster: 2025-10-01T07:30:15.858092431Z, ProjectID: 68dcd8135a2f96450022dfeb, Cluster name: test-acc-tf-c-6901459463410587842
2025-10-01T07:34:42.7722251Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T07:34:42.7722905Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-10-01T07:34:42.7723451Z         
2025-10-01T07:34:42.7723774Z         Error: error reading  advanced cluster list
2025-10-01T07:34:42.7724072Z         
2025-10-01T07:34:42.7724525Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-01T07:34:42.7725265Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-01T07:34:42.7725890Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-01T07:34:42.7726236Z         
2025-10-01T07:34:42.7726542Z         project ID 68dcd8135a2f96450022dfeb. Error
2025-10-01T07:34:42.7727414Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcd8135a2f96450022dfeb/clusters
2025-10-01T07:34:42.7728045Z         GET: HTTP 400 Bad Request (Error code:
2025-10-01T07:34:42.7728522Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-01T07:34:42.7729123Z         test-acc-tf-c-2107618933612814643 cannot be used in the Cluster API. Reason:
2025-10-01T07:34:42.7729755Z         Bad Request. Params: [test-acc-tf-c-2107618933612814643], BadRequestDetail: 
2025-10-01T07:36:06.1357428Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (365.28s)
```

  - FAIL 7 minutes

### Error 2025-10-01T09:09:53+00:00
```
2025-10-01T09:09:53.8899922Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T09:12:02.9793838Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T09:12:52.9654122Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T09:12:57.9664071Z     pre_check.go:32: Time before creating cluster: 2025-10-01T09:12:52.965060447Z, ProjectID: 68dcefde5a2f96450025b73e, Cluster name: test-acc-tf-c-6359847634358336784
2025-10-01T09:18:00.1621833Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T09:18:00.1622561Z     resource_test.go:87: Step 2/2 error: Error running apply: exit status 1
2025-10-01T09:18:00.1622983Z         
2025-10-01T09:18:00.1623296Z         Error: error reading  advanced cluster list
2025-10-01T09:18:00.1623664Z         
2025-10-01T09:18:00.1624007Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-01T09:18:00.1624653Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-01T09:18:00.1625255Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-01T09:18:00.1625544Z         
2025-10-01T09:18:00.1626052Z         project ID 68dcefde5a2f96450025b73e. Error
2025-10-01T09:18:00.1626684Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcefde5a2f96450025b73e/clusters
2025-10-01T09:18:00.1627163Z         GET: HTTP 400 Bad Request (Error code:
2025-10-01T09:18:00.1627860Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-01T09:18:00.1628482Z         test-acc-tf-c-4044748115877462443 cannot be used in the Cluster API. Reason:
2025-10-01T09:18:00.1629057Z         Bad Request. Params: [test-acc-tf-c-4044748115877462443], BadRequestDetail: 
2025-10-01T09:19:12.4340407Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (429.47s)
```

  - PASS 5 minutes
  - FAIL 8 minutes

### Error 2025-10-01T11:48:31+00:00
```
2025-10-01T11:48:31.2984137Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T11:50:16.3577999Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T11:51:21.3134242Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T11:51:21.3136304Z     pre_check.go:32: Time before creating cluster: 2025-10-01T11:51:21.31315404Z, ProjectID: 68dd150d77784f3f4723a6a6, Cluster name: test-acc-tf-c-6421718748629380903
2025-10-01T11:56:28.8127521Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-10-01T11:56:28.8128239Z     resource_test.go:87: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2025-10-01T11:56:28.8128765Z         
2025-10-01T11:56:28.8129083Z         Error: error reading  advanced cluster list
2025-10-01T11:56:28.8129495Z         
2025-10-01T11:56:28.8129963Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-01T11:56:28.8130893Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-10-01T11:56:28.8131471Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-01T11:56:28.8131767Z         
2025-10-01T11:56:28.8132071Z         project ID 68dd150d77784f3f4723a6a6. Error
2025-10-01T11:56:28.8132691Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd150d77784f3f4723a6a6/clusters
2025-10-01T11:56:28.8133212Z         GET: HTTP 400 Bad Request (Error code:
2025-10-01T11:56:28.8133679Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-10-01T11:56:28.8134286Z         test-acc-tf-c-1939885785515717457 cannot be used in the Cluster API. Reason:
2025-10-01T11:56:28.8134928Z         Bad Request. Params: [test-acc-tf-c-1939885785515717457], BadRequestDetail: 
2025-10-01T11:58:22.6633542Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (486.35s)
```

  - PASS 11 minutes
- 2025-10-02 PASS 6 minutes