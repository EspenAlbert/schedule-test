# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 20) FAIL(x 13)
Success rate: 60.61%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183e2dc7470847cbcb5 | dev | flaky_500 | 1072.04s
[2025-11-08 00:29](#error-2025-11-08t0029120000) |  | dev | timeout | 11003.02s
[2025-11-19 00:29](#error-2025-11-19t0029020000) |  | dev | timeout | 11057.09s
[2025-11-19 09:30](#error-2025-11-19t0930070000) |  | dev | timeout | 11168.02s
[2025-11-20 00:28](#error-2025-11-20t0028090000) |  | dev | timeout | 11055.03s
[2025-11-20 10:02](#error-2025-11-20t1002000000) |  | dev | timeout | 11003.01s
[2025-11-21 00:28](#error-2025-11-21t0028330000) |  | dev | timeout | 11054.06s
[2025-11-22 00:27](#error-2025-11-22t0027020000) |  | dev | timeout | 11003.05s
[2025-11-24 00:30](#error-2025-11-24t0030130000) |  | dev | timeout | 11085.08s
[2025-11-25 00:27](#error-2025-11-25t0027260000) |  | dev | timeout | 11044.06s
[2025-11-26 00:28](#error-2025-11-26t0028440000) |  | dev | timeout | 11043.06s
[2025-11-27 00:28](#error-2025-11-27t0028330000) |  | dev | timeout | 11043.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 24 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2614867Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-30T00:29:52.4650339Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-30T00:47:44.8624991Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-30T00:47:44.8625709Z     resource_test.go:716: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:47:44.8626175Z         
2025-10-30T00:47:44.8626471Z         Error: error when destroying resource
2025-10-30T00:47:44.8626747Z         
2025-10-30T00:47:44.8627082Z         error deleting project (6902b183e2dc7470847cbcb5):
2025-10-30T00:47:44.8627655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183e2dc7470847cbcb5
2025-10-30T00:47:44.8628268Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:47:44.8628855Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:47:44.8629252Z         BadRequestDetail: 
2025-10-30T00:47:44.8629665Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1072.40s)
```

- 2025-10-31 PASS 20 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 18 minutes
- 2025-11-04 PASS 16 minutes
- 2025-11-05
  - PASS 18 minutes
  - PASS 11 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08

### Error 2025-11-08T00:29:12+00:00
```
2025-11-08T00:29:12.0963918Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-08T00:31:08.7378423Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-08T03:31:16.8525037Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-08T03:31:16.8525916Z     resource_test.go:716: Step 1/2 error: Error running apply: exit status 1
2025-11-08T03:31:16.8526299Z         
2025-11-08T03:31:16.8526552Z         Error: Error in create
2025-11-08T03:31:16.8526796Z         
2025-11-08T03:31:16.8527117Z           with mongodbatlas_advanced_cluster.test,
2025-11-08T03:31:16.8528199Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-08T03:31:16.8528801Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-08T03:31:16.8529110Z         
2025-11-08T03:31:16.8529802Z         cluster=test-acc-tf-c-8587692970019470544 didn't reach desired state: IDLE,
2025-11-08T03:31:16.8530287Z         error: context deadline exceeded
2025-11-08T03:31:18.0020630Z   
2025-11-08T03:34:31.9474009Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11003.21s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 12 minutes
- 2025-11-11 PASS 14 minutes
- 2025-11-12 PASS 16 minutes
- 2025-11-13 PASS 37 minutes
- 2025-11-14 PASS 22 minutes
- 2025-11-15 PASS 14 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 16 minutes
- 2025-11-18 PASS 15 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:02+00:00
```
2025-11-19T00:29:02.9788963Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-19T00:35:20.7405431Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-19T03:35:31.4823722Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-19T03:35:31.4824802Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-19T03:35:31.4825387Z         
2025-11-19T03:35:31.4825781Z         Error: Error in create
2025-11-19T03:35:31.4826463Z         
2025-11-19T03:35:31.4826989Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:31.4828069Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:31.4829021Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:31.4829498Z         
2025-11-19T03:35:31.4830224Z         cluster=test-acc-tf-c-3111641968541752879 didn't reach desired state: IDLE,
2025-11-19T03:35:31.4830957Z         error: context deadline exceeded
2025-11-19T03:35:36.4314698Z    test_working_directory=/tmp/plugintest1623859711 test_step_number=1 test_name=TestAccClusterAdvancedCluster_advancedConfig test_terraform_path=/home/runner/work/_temp/bada4d32-3f9a-423c-bb10-1f3248da402d/terraform
2025-11-19T03:39:38.6889662Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11057.95s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:07+00:00
```
2025-11-19T09:30:07.9704571Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-19T09:31:55.5570946Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-19T12:32:05.2532749Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-19T12:32:05.2533612Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-19T12:32:05.2534000Z         
2025-11-19T12:32:05.2534398Z         Error: Error in create
2025-11-19T12:32:05.2534669Z         
2025-11-19T12:32:05.2535002Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:05.2535734Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:05.2536429Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:05.2536845Z         
2025-11-19T12:32:05.2537286Z         cluster=test-acc-tf-c-3638970813798201383 didn't reach desired state: IDLE,
2025-11-19T12:32:05.2537836Z         error: context deadline exceeded
2025-11-19T12:32:06.1016305Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-19T12:38:03.7322912Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11168.18s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:09+00:00
```
2025-11-20T00:28:09.4958814Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-20T00:29:55.5747366Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-20T03:30:03.3932184Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-20T03:30:03.3932738Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-20T03:30:03.3933485Z         
2025-11-20T03:30:03.3933738Z         Error: Error in create
2025-11-20T03:30:03.3934096Z         
2025-11-20T03:30:03.3934418Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:03.3935155Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:03.3935696Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:03.3935985Z         
2025-11-20T03:30:03.3936402Z         cluster=test-acc-tf-c-6249334837579640470 didn't reach desired state: IDLE,
2025-11-20T03:30:03.3936823Z         error: context deadline exceeded
2025-11-20T03:30:03.4569960Z    test_step_number=1 test_working_directory=/tmp/plugintest1815142402 test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/d0684163-37b0-4e5f-b042-cb4029e74368/terraform
2025-11-20T03:34:10.8839293Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11055.31s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:02:00+00:00
```
2025-11-20T10:02:00.7955117Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-20T10:03:33.6598595Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-20T13:03:41.7549146Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-20T13:03:41.7549894Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-20T13:03:41.7550385Z         
2025-11-20T13:03:41.7550652Z         Error: Error in create
2025-11-20T13:03:41.7550971Z         
2025-11-20T13:03:41.7551352Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:41.7552124Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:41.7552849Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:41.7553275Z         
2025-11-20T13:03:41.7554158Z         cluster=test-acc-tf-c-1244524945956737287 didn't reach desired state: IDLE,
2025-11-20T13:03:41.7554662Z         error: context deadline exceeded
2025-11-20T13:03:42.1239102Z   
2025-11-20T13:06:56.7788286Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11003.12s)
```

- 2025-11-21

### Error 2025-11-21T00:28:33+00:00
```
2025-11-21T00:28:33.9759659Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-21T00:30:22.6785511Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-21T03:30:31.0431751Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-21T03:30:31.0432795Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-21T03:30:31.0433431Z         
2025-11-21T03:30:31.0433855Z         Error: Error in create
2025-11-21T03:30:31.0434284Z         
2025-11-21T03:30:31.0434842Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:31.0435966Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:31.0437213Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:31.0437730Z         
2025-11-21T03:30:31.0438547Z         cluster=test-acc-tf-c-7230507826104293966 didn't reach desired state: IDLE,
2025-11-21T03:30:31.0439378Z         error: context deadline exceeded
2025-11-21T03:30:31.7927974Z   
2025-11-21T03:34:37.2627408Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11054.60s)
```

- 2025-11-22

### Error 2025-11-22T00:27:02+00:00
```
2025-11-22T00:27:02.1576458Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-22T00:28:42.9438205Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-22T03:28:51.7863970Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-22T03:28:51.7864994Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-22T03:28:51.7865486Z         
2025-11-22T03:28:51.7865767Z         Error: Error in create
2025-11-22T03:28:51.7866023Z         
2025-11-22T03:28:51.7866471Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:51.7867428Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:51.7868134Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:51.7868449Z         
2025-11-22T03:28:51.7869009Z         cluster=test-acc-tf-c-3969114794576688521 didn't reach desired state: IDLE,
2025-11-22T03:28:51.7869666Z         error: context deadline exceeded
2025-11-22T03:28:52.0404934Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData test_terraform_path=/home/runner/work/_temp/9e52c758-fb15-4d20-83d8-d3f78571282a/terraform test_working_directory=/tmp/plugintest3758599030 test_step_number=1
2025-11-22T03:32:06.4567946Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11003.52s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:13+00:00
```
2025-11-24T00:30:13.9762263Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-24T00:33:24.2033974Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-24T03:33:33.8975912Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-24T03:33:33.8977017Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-24T03:33:33.8977621Z         
2025-11-24T03:33:33.8977889Z         Error: Error in create
2025-11-24T03:33:33.8978190Z         
2025-11-24T03:33:33.8978598Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:33.8979503Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:33.8980393Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:33.8980868Z         
2025-11-24T03:33:33.8981326Z         cluster=test-acc-tf-c-3976286117467682731 didn't reach desired state: IDLE,
2025-11-24T03:33:33.8981786Z         error: context deadline exceeded
2025-11-24T03:33:39.7982814Z    test_name=TestAccClusterAdvancedCluster_replicaSetAWSProvider test_terraform_path=/home/runner/work/_temp/609ccb18-f3a3-412d-a4f5-f3ac64678863/terraform
2025-11-24T03:38:10.0024559Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11085.80s)
```

- 2025-11-25

### Error 2025-11-25T00:27:26+00:00
```
2025-11-25T00:27:26.7562215Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-25T00:31:51.4386678Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-25T03:31:59.4585140Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-25T03:31:59.4585928Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-25T03:31:59.4586443Z         
2025-11-25T03:31:59.4586767Z         Error: Error in create
2025-11-25T03:31:59.4587031Z         
2025-11-25T03:31:59.4587592Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:59.4588379Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:59.4589072Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:59.4589709Z         
2025-11-25T03:31:59.4590191Z         cluster=test-acc-tf-c-6402448843422242874 didn't reach desired state: IDLE,
2025-11-25T03:31:59.4590731Z         error: context deadline exceeded
2025-11-25T03:31:59.5768860Z   
2025-11-25T03:35:56.0529686Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11044.64s)
```

- 2025-11-26

### Error 2025-11-26T00:28:44+00:00
```
2025-11-26T00:28:44.9762931Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-26T00:30:27.5264229Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-26T03:30:36.0550865Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-26T03:30:36.0551707Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-26T03:30:36.0552088Z         
2025-11-26T03:30:36.0552338Z         Error: Error in create
2025-11-26T03:30:36.0552590Z         
2025-11-26T03:30:36.0552904Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:36.0553696Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:36.0554455Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:36.0554787Z         
2025-11-26T03:30:36.0555250Z         cluster=test-acc-tf-c-3476631064094002567 didn't reach desired state: IDLE,
2025-11-26T03:30:36.0555952Z         error: context deadline exceeded
2025-11-26T03:30:48.0609269Z    test_name=TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling test_terraform_path=/home/runner/work/_temp/88070532-96c2-4760-b2dd-7952d58b8690/terraform test_working_directory=/tmp/plugintest1630969498 test_step_number=1
2025-11-26T03:34:31.0976530Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11043.59s)
```

- 2025-11-27

### Error 2025-11-27T00:28:33+00:00
```
2025-11-27T00:28:33.0231419Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-27T00:30:06.5285482Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-27T03:30:14.0443580Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-27T03:30:14.0444614Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-27T03:30:14.0445231Z         
2025-11-27T03:30:14.0445640Z         Error: Error in create
2025-11-27T03:30:14.0446043Z         
2025-11-27T03:30:14.0446585Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:14.0447884Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:14.0448898Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:14.0449416Z         
2025-11-27T03:30:14.0450345Z         cluster=test-acc-tf-c-558020468061117072 didn't reach desired state: IDLE,
2025-11-27T03:30:14.0451132Z         error: context deadline exceeded
2025-11-27T03:30:14.1526169Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData test_terraform_path=/home/runner/work/_temp/14070def-dacb-49f4-8290-ab4287f196f1/terraform test_working_directory=/tmp/plugintest1086076636 test_step_number=1
2025-11-27T03:34:09.8648926Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11043.34s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 07:53](#error-2025-11-13t0753210000) |  | qa | flaky_400 | 8.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 13 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13

### Error 2025-11-13T07:53:21+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-11-13T07:53:21.418000+00:00-TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema',confidence=1.0,ts_when='14 days ago')

```
2025-11-13T07:53:21.4182569Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-13T07:54:58.4335497Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-13T07:55:06.3465597Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-13T07:55:06.3466878Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-13T07:55:06.3467652Z         
2025-11-13T07:55:06.3468058Z         Error: Error in create
2025-11-13T07:55:06.3468425Z         
2025-11-13T07:55:06.3468916Z           with mongodbatlas_advanced_cluster.test,
2025-11-13T07:55:06.3469864Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-13T07:55:06.3470655Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-13T07:55:06.3470961Z         
2025-11-13T07:55:06.3471465Z         cluster name: test-acc-tf-c-4595888119023728174, API error details:
2025-11-13T07:55:06.3472359Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69158ed548f3d02bc50c6c3a/clusters
2025-11-13T07:55:06.3473134Z         POST: HTTP 403 Forbidden (Error code:
2025-11-13T07:55:06.3473824Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-13T07:55:06.3474388Z         Configuration. Contains selections that are unavailable due to your
2025-11-13T07:55:06.3474945Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-13T07:55:06.3475356Z         BadRequestDetail: 
2025-11-13T07:55:06.3528477Z   
2025-11-13T07:55:07.0015482Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (8.57s)
```

- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 14 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 14 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
