# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 11) TIMEOUT
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s
[2025-11-08 00:29](#error-2025-11-08t0029120000) |  | dev | timeout | 10974.03s
[2025-11-19 00:29](#error-2025-11-19t0029020000) |  | dev | timeout | 11046.07s
[2025-11-19 09:30](#error-2025-11-19t0930070000) |  | dev | timeout | 11167.05s
[2025-11-20 00:28](#error-2025-11-20t0028090000) |  | dev | timeout | 11054.03s
[2025-11-20 10:02](#error-2025-11-20t1002000000) |  | dev | timeout | 11014.01s
[2025-11-21 00:28](#error-2025-11-21t0028330000) |  | dev | timeout | 11084.08s
[2025-11-22 00:27](#error-2025-11-22t0027020000) |  | dev | timeout | 11012.00s
[2025-11-24 00:30](#error-2025-11-24t0030130000) |  | dev | timeout | 11044.07s
[2025-11-25 00:27](#error-2025-11-25t0027260000) |  | dev | timeout | 11044.02s
[2025-11-26 00:28](#error-2025-11-26t0028440000) |  | dev | timeout | 11041.06s
[2025-11-27 00:28](#error-2025-11-27t0028330000) |  | dev | timeout | 11044.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 51 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2612675Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-10-30T00:29:52.4651458Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-10-30T03:44:40.2806534Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-10-30T03:44:40.2807844Z     resource_test.go:693: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:44:40.2808549Z         
2025-10-30T03:44:40.2809010Z         Error: Error in update
2025-10-30T03:44:40.2809453Z         
2025-10-30T03:44:40.2810079Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:44:40.2811218Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:44:40.2812971Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:44:40.2813553Z         
2025-10-30T03:44:40.2814388Z         cluster=test-acc-tf-c-7245092745045748215 didn't reach desired state: IDLE,
2025-10-30T03:44:40.2815483Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:44:40.2816804Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:44:40.2844883Z   
2025-10-30T05:28:11.5675579Z 		TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (4h58m19s)
2025-10-30T05:28:11.5677105Z 		TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (4h58m19s)
2025-10-30T05:28:11.5678726Z 		TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (4h58m19s)
```

- 2025-10-31 PASS 50 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 51 minutes
- 2025-11-04 PASS 54 minutes
- 2025-11-05
  - PASS an hour
  - PASS 45 minutes
- 2025-11-06 PASS 56 minutes
- 2025-11-07 PASS 50 minutes
- 2025-11-08

### Error 2025-11-08T00:29:12+00:00
```
2025-11-08T00:29:12.0961128Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-08T00:31:08.8256507Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-08T03:31:18.0021582Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-08T03:31:18.0022386Z     resource_test.go:693: Step 1/4 error: Error running apply: exit status 1
2025-11-08T03:31:18.0022763Z         
2025-11-08T03:31:18.0023013Z         Error: Error in create
2025-11-08T03:31:18.0023384Z         
2025-11-08T03:31:18.0023959Z           with mongodbatlas_advanced_cluster.test,
2025-11-08T03:31:18.0024618Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-08T03:31:18.0025205Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-08T03:31:18.0025510Z         
2025-11-08T03:31:18.0025965Z         cluster=test-acc-tf-c-5585452479101914235 didn't reach desired state: IDLE,
2025-11-08T03:31:18.0026423Z         error: context deadline exceeded
2025-11-08T03:32:19.8798220Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_terraform_path=/home/runner/work/_temp/5a5a3a11-5a57-4482-8d80-f63a58e216c5/terraform test_working_directory=/tmp/plugintest354545948
2025-11-08T03:34:03.0276093Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (10974.29s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 43 minutes
- 2025-11-11 PASS 43 minutes
- 2025-11-12 PASS 47 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 58 minutes
- 2025-11-15 PASS 48 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 49 minutes
- 2025-11-18 PASS 46 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:02+00:00
```
2025-11-19T00:29:02.9784735Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-19T00:35:20.7504288Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-19T03:35:30.2527176Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-19T03:35:30.2528524Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-19T03:35:30.2529197Z         
2025-11-19T03:35:30.2529648Z         Error: Error in create
2025-11-19T03:35:30.2530068Z         
2025-11-19T03:35:30.2530662Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:30.2531840Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:30.2532914Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:30.2533452Z         
2025-11-19T03:35:30.2534285Z         cluster=test-acc-tf-c-6249938606850053488 didn't reach desired state: IDLE,
2025-11-19T03:35:30.2535134Z         error: context deadline exceeded
2025-11-19T03:35:31.0573256Z    test_working_directory=/tmp/plugintest2666084685
2025-11-19T03:39:27.4762563Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11046.73s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:07+00:00
```
2025-11-19T09:30:07.9701844Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-19T09:31:55.5603142Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-19T12:32:03.9903638Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-19T12:32:03.9904813Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-19T12:32:03.9905438Z         
2025-11-19T12:32:03.9905860Z         Error: Error in create
2025-11-19T12:32:03.9906293Z         
2025-11-19T12:32:03.9906843Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:03.9907968Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:03.9908878Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:03.9909340Z         
2025-11-19T12:32:03.9910101Z         cluster=test-acc-tf-c-5285947430702838761 didn't reach desired state: IDLE,
2025-11-19T12:32:03.9910903Z         error: context deadline exceeded
2025-11-19T12:32:04.5740393Z    test_name=TestAccClusterAdvancedCluster_withLabels
2025-11-19T12:38:03.0309253Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11167.47s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:09+00:00
```
2025-11-20T00:28:09.4956118Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-20T00:29:55.5748577Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-20T03:30:03.1566007Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-20T03:30:03.1566733Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-20T03:30:03.1567073Z         
2025-11-20T03:30:03.1567385Z         Error: Error in create
2025-11-20T03:30:03.1567620Z         
2025-11-20T03:30:03.1567919Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:03.1568589Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:03.1569241Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:03.1569651Z         
2025-11-20T03:30:03.1570081Z         cluster=test-acc-tf-c-3850343457114017771 didn't reach desired state: IDLE,
2025-11-20T03:30:03.1570500Z         error: context deadline exceeded
2025-11-20T03:30:03.3931813Z   
2025-11-20T03:34:09.9076519Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11054.34s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:02:00+00:00
```
2025-11-20T10:02:00.7952604Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-20T10:03:33.6614700Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-20T13:03:42.5956548Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-20T13:03:42.5957771Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-20T13:03:42.5958649Z         
2025-11-20T13:03:42.5959024Z         Error: Error in create
2025-11-20T13:03:42.5959281Z         
2025-11-20T13:03:42.5959793Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:42.5960474Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:42.5961481Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:42.5961803Z         
2025-11-20T13:03:42.5962251Z         cluster=test-acc-tf-c-7584321346974149788 didn't reach desired state: IDLE,
2025-11-20T13:03:42.5962714Z         error: context deadline exceeded
2025-11-20T13:03:42.6510570Z    test_working_directory=/tmp/plugintest2428258047
2025-11-20T13:07:07.8142169Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11014.15s)
```

- 2025-11-21

### Error 2025-11-21T00:28:33+00:00
```
2025-11-21T00:28:33.9757007Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-21T00:30:22.6499325Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-21T03:30:30.9170725Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-21T03:30:30.9172042Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-21T03:30:30.9172660Z         
2025-11-21T03:30:30.9173082Z         Error: Error in create
2025-11-21T03:30:30.9173501Z         
2025-11-21T03:30:30.9174068Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:30.9175254Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:30.9176507Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:30.9177075Z         
2025-11-21T03:30:30.9177910Z         cluster=test-acc-tf-c-7009589207838719910 didn't reach desired state: IDLE,
2025-11-21T03:30:30.9178756Z         error: context deadline exceeded
2025-11-21T03:30:30.9802122Z   
2025-11-21T03:35:07.4814480Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11084.83s)
```

- 2025-11-22

### Error 2025-11-22T00:27:02+00:00
```
2025-11-22T00:27:02.1573949Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-22T00:28:42.9441101Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-22T03:28:50.1467151Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-22T03:28:50.1468352Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-22T03:28:50.1468791Z         
2025-11-22T03:28:50.1469136Z         Error: Error in create
2025-11-22T03:28:50.1469487Z         
2025-11-22T03:28:50.1469984Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:50.1471011Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:50.1472226Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:50.1472764Z         
2025-11-22T03:28:50.1473559Z         cluster=test-acc-tf-c-5184376041945761561 didn't reach desired state: IDLE,
2025-11-22T03:28:50.1474376Z         error: context deadline exceeded
2025-11-22T03:28:51.6036609Z    test_name=TestAccClusterAdvancedCluster_withTags
2025-11-22T03:32:14.9559696Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11012.01s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:13+00:00
```
2025-11-24T00:30:13.9759326Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-24T00:33:24.2057609Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-24T03:33:33.6896340Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-24T03:33:33.6897139Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-24T03:33:33.6897514Z         
2025-11-24T03:33:33.6898006Z         Error: Error in create
2025-11-24T03:33:33.6898264Z         
2025-11-24T03:33:33.6898596Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:33.6899242Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:33.6899987Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:33.6900403Z         
2025-11-24T03:33:33.6900961Z         cluster=test-acc-tf-c-7022000252690748800 didn't reach desired state: IDLE,
2025-11-24T03:33:33.6901536Z         error: context deadline exceeded
2025-11-24T03:33:33.8973622Z    test_terraform_path=/home/runner/work/_temp/609ccb18-f3a3-412d-a4f5-f3ac64678863/terraform test_working_directory=/tmp/plugintest2085079326 test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema test_step_number=1
2025-11-24T03:37:28.9472874Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11044.74s)
```

- 2025-11-25

### Error 2025-11-25T00:27:26+00:00
```
2025-11-25T00:27:26.7559682Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-25T00:31:51.4387739Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-25T03:31:59.5769863Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-25T03:31:59.5771116Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-25T03:31:59.5771852Z         
2025-11-25T03:31:59.5772282Z         Error: Error in create
2025-11-25T03:31:59.5772655Z         
2025-11-25T03:31:59.5773143Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:59.5774175Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:59.5775201Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:59.5775733Z         
2025-11-25T03:31:59.5776514Z         cluster=test-acc-tf-c-798162317900480182 didn't reach desired state: IDLE,
2025-11-25T03:31:59.5777298Z         error: context deadline exceeded
2025-11-25T03:31:59.7682936Z   
2025-11-25T03:35:55.6076234Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11044.20s)
```

- 2025-11-26

### Error 2025-11-26T00:28:44+00:00
```
2025-11-26T00:28:44.9760303Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-26T00:30:27.5272803Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-26T03:30:34.3436049Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-26T03:30:34.3436969Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-26T03:30:34.3437554Z         
2025-11-26T03:30:34.3437825Z         Error: Error in create
2025-11-26T03:30:34.3438062Z         
2025-11-26T03:30:34.3438377Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:34.3439012Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:34.3439618Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:34.3439918Z         
2025-11-26T03:30:34.3440490Z         cluster=test-acc-tf-c-2103116421793641346 didn't reach desired state: IDLE,
2025-11-26T03:30:34.3441037Z         error: context deadline exceeded
2025-11-26T03:30:34.5640058Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData test_terraform_path=/home/runner/work/_temp/88070532-96c2-4760-b2dd-7952d58b8690/terraform
2025-11-26T03:34:29.0811566Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11041.57s)
```

- 2025-11-27

### Error 2025-11-27T00:28:33+00:00
```
2025-11-27T00:28:33.0228758Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-27T00:30:06.5289342Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-27T03:30:14.7643701Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2025-11-27T03:30:14.7644756Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2025-11-27T03:30:14.7645155Z         
2025-11-27T03:30:14.7645500Z         Error: Error in create
2025-11-27T03:30:14.7645754Z         
2025-11-27T03:30:14.7646074Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:14.7646700Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:14.7647286Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:14.7647594Z         
2025-11-27T03:30:14.7648036Z         cluster=test-acc-tf-c-4631424005286723371 didn't reach desired state: IDLE,
2025-11-27T03:30:14.7648490Z         error: context deadline exceeded
2025-11-27T03:30:14.8413841Z    test_working_directory=/tmp/plugintest3421662166 test_step_number=1 test_name=TestAccClusterAdvancedCluster_withLabels test_terraform_path=/home/runner/work/_temp/14070def-dacb-49f4-8290-ab4287f196f1/terraform
2025-11-27T03:34:10.7749187Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11044.25s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 42 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 43 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 46 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 46 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 47 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
