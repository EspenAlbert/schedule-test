# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 11) TIMEOUT
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s
[2025-11-08 00:29](#error-2025-11-08t0029120000) |  | dev | timeout | 10961.08s
[2025-11-19 00:29](#error-2025-11-19t0029020000) |  | dev | timeout | 11046.01s
[2025-11-19 09:30](#error-2025-11-19t0930070000) |  | dev | timeout | 11169.08s
[2025-11-20 00:28](#error-2025-11-20t0028090000) |  | dev | timeout | 11046.07s
[2025-11-20 10:02](#error-2025-11-20t1002000000) |  | dev | timeout | 11004.07s
[2025-11-21 00:28](#error-2025-11-21t0028330000) |  | dev | timeout | 11043.07s
[2025-11-22 00:27](#error-2025-11-22t0027020000) |  | dev | timeout | 11003.09s
[2025-11-24 00:30](#error-2025-11-24t0030130000) |  | dev | timeout | 11044.05s
[2025-11-25 00:27](#error-2025-11-25t0027260000) |  | dev | timeout | 11014.04s
[2025-11-26 00:28](#error-2025-11-26t0028440000) |  | dev | timeout | 11011.10s
[2025-11-27 00:28](#error-2025-11-27t0028330000) |  | dev | timeout | 11043.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2620624Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-10-30T00:29:52.4753853Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-10-30T03:44:40.2845499Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-10-30T03:44:40.2846593Z     resource_test.go:803: Step 2/5 error: Error running apply: exit status 1
2025-10-30T03:44:40.2847160Z         
2025-10-30T03:44:40.2847605Z         Error: Error in update
2025-10-30T03:44:40.2848016Z         
2025-10-30T03:44:40.2848622Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:44:40.2849508Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:44:40.2850126Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:44:40.2850453Z         
2025-10-30T03:44:40.2850908Z         cluster=test-acc-tf-c-4627852114248743158 didn't reach desired state: IDLE,
2025-10-30T03:44:40.2851576Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:44:40.2852467Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:44:40.8985515Z    test_name=TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest4284930658
2025-10-30T05:28:11.5671202Z 	running tests:
2025-10-30T05:28:11.5672290Z 		TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (4h58m19s)
2025-10-30T05:28:11.5673981Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (4h58m19s)
```

- 2025-10-31 PASS 33 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 30 minutes
- 2025-11-04 PASS 34 minutes
- 2025-11-05
  - PASS 32 minutes
  - PASS 32 minutes
- 2025-11-06 PASS 34 minutes
- 2025-11-07 PASS 34 minutes
- 2025-11-08

### Error 2025-11-08T00:29:12+00:00
```
2025-11-08T00:29:12.0970169Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-08T00:31:08.7774246Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-08T03:31:16.1275507Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-08T03:31:16.1276395Z     resource_test.go:803: Step 1/5 error: Error running apply: exit status 1
2025-11-08T03:31:16.1276776Z         
2025-11-08T03:31:16.1277029Z         Error: Error in create
2025-11-08T03:31:16.1277274Z         
2025-11-08T03:31:16.1277594Z           with mongodbatlas_advanced_cluster.test,
2025-11-08T03:31:16.1278600Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-08T03:31:16.1279194Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-08T03:31:16.1279497Z         
2025-11-08T03:31:16.1279946Z         cluster=test-acc-tf-c-4388621898866419324 didn't reach desired state: IDLE,
2025-11-08T03:31:16.1280400Z         error: context deadline exceeded
2025-11-08T03:31:16.8524462Z   
2025-11-08T03:33:50.5323919Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (10961.79s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 30 minutes
- 2025-11-11 PASS 32 minutes
- 2025-11-12 PASS 33 minutes
- 2025-11-13 PASS 46 minutes
- 2025-11-14 PASS 37 minutes
- 2025-11-15 PASS 30 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 32 minutes
- 2025-11-18 PASS 31 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:02+00:00
```
2025-11-19T00:29:02.9795148Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-19T00:35:20.7301326Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-19T03:35:29.8657155Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-19T03:35:29.8658139Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-19T03:35:29.8658758Z         
2025-11-19T03:35:29.8659104Z         Error: Error in create
2025-11-19T03:35:29.8659454Z         
2025-11-19T03:35:29.8659951Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:29.8661071Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:29.8662116Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:29.8662643Z         
2025-11-19T03:35:29.8663448Z         cluster=test-acc-tf-c-5638792362576357223 didn't reach desired state: IDLE,
2025-11-19T03:35:29.8664269Z         error: context deadline exceeded
2025-11-19T03:35:30.1739230Z   
2025-11-19T03:39:26.8445206Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11046.12s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:07+00:00
```
2025-11-19T09:30:07.9711132Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-19T09:31:55.5691608Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-19T12:32:06.1017357Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-19T12:32:06.1018439Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-19T12:32:06.1019360Z         
2025-11-19T12:32:06.1019620Z         Error: Error in create
2025-11-19T12:32:06.1019949Z         
2025-11-19T12:32:06.1020340Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:06.1021156Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:06.1022085Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:06.1022397Z         
2025-11-19T12:32:06.1022838Z         cluster=test-acc-tf-c-8209723194359548502 didn't reach desired state: IDLE,
2025-11-19T12:32:06.1023522Z         error: context deadline exceeded
2025-11-19T12:32:06.2264002Z    test_terraform_path=/home/runner/work/_temp/b9256067-5db0-451c-ae44-8b4d0f38c8f9/terraform
2025-11-19T12:38:05.3698067Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11169.80s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:09+00:00
```
2025-11-20T00:28:09.4964525Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-20T00:29:55.5956205Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-20T03:30:05.9740084Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-20T03:30:05.9740821Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-20T03:30:05.9741250Z         
2025-11-20T03:30:05.9741493Z         Error: Error in create
2025-11-20T03:30:05.9741795Z         
2025-11-20T03:30:05.9742172Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:05.9742864Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:05.9743630Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:05.9743998Z         
2025-11-20T03:30:05.9744425Z         cluster=test-acc-tf-c-7492397514075598147 didn't reach desired state: IDLE,
2025-11-20T03:30:05.9744982Z         error: context deadline exceeded
2025-11-20T03:30:06.2573330Z   
2025-11-20T03:34:02.2318577Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11046.65s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:02:00+00:00
```
2025-11-20T10:02:00.7960982Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-20T10:03:33.6712568Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-20T13:03:43.5409764Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-20T13:03:43.5410431Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-20T13:03:43.5410803Z         
2025-11-20T13:03:43.5411059Z         Error: Error in create
2025-11-20T13:03:43.5411317Z         
2025-11-20T13:03:43.5411649Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:43.5412295Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:43.5412894Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:43.5413204Z         
2025-11-20T13:03:43.5413659Z         cluster=test-acc-tf-c-8219460533662767498 didn't reach desired state: IDLE,
2025-11-20T13:03:43.5414117Z         error: context deadline exceeded
2025-11-20T13:03:49.2773662Z    test_working_directory=/tmp/plugintest3455890365
2025-11-20T13:06:58.3174471Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11004.65s)
```

- 2025-11-21

### Error 2025-11-21T00:28:33+00:00
```
2025-11-21T00:28:33.9767059Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-21T00:30:22.6527882Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-21T03:30:30.4493396Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-21T03:30:30.4494289Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-21T03:30:30.4494657Z         
2025-11-21T03:30:30.4494904Z         Error: Error in create
2025-11-21T03:30:30.4495145Z         
2025-11-21T03:30:30.4495589Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:30.4496402Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:30.4497296Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:30.4497616Z         
2025-11-21T03:30:30.4498057Z         cluster=test-acc-tf-c-6458645557645481144 didn't reach desired state: IDLE,
2025-11-21T03:30:30.4498539Z         error: context deadline exceeded
2025-11-21T03:30:30.8853569Z    test_terraform_path=/home/runner/work/_temp/985d4590-f2ee-4e18-b7f2-13295b78d6f0/terraform test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_working_directory=/tmp/plugintest2672230290
2025-11-21T03:34:26.2991449Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11043.65s)
```

- 2025-11-22

### Error 2025-11-22T00:27:02+00:00
```
2025-11-22T00:27:02.1582647Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-22T00:28:42.9436824Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-22T03:28:52.0406238Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-22T03:28:52.0407079Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-22T03:28:52.0407470Z         
2025-11-22T03:28:52.0407733Z         Error: Error in create
2025-11-22T03:28:52.0407995Z         
2025-11-22T03:28:52.0408326Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:52.0408969Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:52.0409561Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:52.0409870Z         
2025-11-22T03:28:52.0410336Z         cluster=test-acc-tf-c-3554207685020817265 didn't reach desired state: IDLE,
2025-11-22T03:28:52.0410817Z         error: context deadline exceeded
2025-11-22T03:28:53.6248946Z    test_terraform_path=/home/runner/work/_temp/9e52c758-fb15-4d20-83d8-d3f78571282a/terraform
2025-11-22T03:32:06.7989705Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11003.86s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:13+00:00
```
2025-11-24T00:30:13.9768427Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-24T00:33:24.1949440Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-24T03:33:33.3057510Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-24T03:33:33.3058583Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-24T03:33:33.3059198Z         
2025-11-24T03:33:33.3059614Z         Error: Error in create
2025-11-24T03:33:33.3060011Z         
2025-11-24T03:33:33.3060563Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:33.3061690Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:33.3062726Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:33.3063273Z         
2025-11-24T03:33:33.3064284Z         cluster=test-acc-tf-c-4467862828342222601 didn't reach desired state: IDLE,
2025-11-24T03:33:33.3065069Z         error: context deadline exceeded
2025-11-24T03:33:33.6895047Z    test_terraform_path=/home/runner/work/_temp/609ccb18-f3a3-412d-a4f5-f3ac64678863/terraform test_working_directory=/tmp/plugintest2428529014
2025-11-24T03:37:28.6937999Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11044.51s)
```

- 2025-11-25

### Error 2025-11-25T00:27:26+00:00
```
2025-11-25T00:27:26.7568613Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-25T00:31:51.4388854Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-25T03:32:00.4545679Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-25T03:32:00.4546524Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-25T03:32:00.4547010Z         
2025-11-25T03:32:00.4547279Z         Error: Error in create
2025-11-25T03:32:00.4547580Z         
2025-11-25T03:32:00.4547988Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:00.4548767Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:00.4549628Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:00.4550085Z         
2025-11-25T03:32:00.4550625Z         cluster=test-acc-tf-c-7415019978329800679 didn't reach desired state: IDLE,
2025-11-25T03:32:00.4551116Z         error: context deadline exceeded
2025-11-25T03:32:02.0857426Z    test_terraform_path=/home/runner/work/_temp/e616dc9d-8531-4e6f-bb76-bbeb25737e02/terraform test_name=TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-25T03:35:25.7892110Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11014.38s)
```

- 2025-11-26

### Error 2025-11-26T00:28:44+00:00
```
2025-11-26T00:28:44.9769956Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-26T00:30:27.4986476Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-26T03:30:34.5641162Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-26T03:30:34.5641912Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-26T03:30:34.5642395Z         
2025-11-26T03:30:34.5642646Z         Error: Error in create
2025-11-26T03:30:34.5642985Z         
2025-11-26T03:30:34.5643309Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:34.5644052Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:34.5644746Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:34.5645130Z         
2025-11-26T03:30:34.5646095Z         cluster=test-acc-tf-c-6484624387261418438 didn't reach desired state: IDLE,
2025-11-26T03:30:34.5646579Z         error: context deadline exceeded
2025-11-26T03:30:34.8253695Z    test_working_directory=/tmp/plugintest93219416
2025-11-26T03:33:59.4735244Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11011.98s)
```

- 2025-11-27

### Error 2025-11-27T00:28:33+00:00
```
2025-11-27T00:28:33.0237084Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-27T00:30:06.5007920Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-27T03:30:14.1528290Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-27T03:30:14.1529423Z     resource_test.go:804: Step 1/5 error: Error running apply: exit status 1
2025-11-27T03:30:14.1530225Z         
2025-11-27T03:30:14.1530670Z         Error: Error in create
2025-11-27T03:30:14.1531102Z         
2025-11-27T03:30:14.1531683Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:14.1532862Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:14.1533944Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:14.1534501Z         
2025-11-27T03:30:14.1535323Z         cluster=test-acc-tf-c-6960217455900590907 didn't reach desired state: IDLE,
2025-11-27T03:30:14.1536150Z         error: context deadline exceeded
2025-11-27T03:30:14.7641409Z    test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard test_terraform_path=/home/runner/work/_temp/14070def-dacb-49f4-8290-ab4287f196f1/terraform test_working_directory=/tmp/plugintest593105633 test_step_number=1
2025-11-27T03:34:09.7931571Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (11043.30s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 30 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 30 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 30 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 31 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 34 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
