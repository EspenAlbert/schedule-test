# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10) TIMEOUT
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | timeout | 17899.00s
[2025-11-19 00:29](#error-2025-11-19t0029000000) |  | dev | timeout | 10860.07s
[2025-11-19 09:30](#error-2025-11-19t0930050000) |  | dev | timeout | 10820.07s
[2025-11-20 00:28](#error-2025-11-20t0028040000) |  | dev | timeout | 10820.07s
[2025-11-20 10:01](#error-2025-11-20t1001570000) |  | dev | timeout | 10820.06s
[2025-11-21 00:28](#error-2025-11-21t0028310000) |  | dev | timeout | 10815.06s
[2025-11-22 00:26](#error-2025-11-22t0026590000) |  | dev | timeout | 10820.06s
[2025-11-24 00:30](#error-2025-11-24t0030120000) |  | dev | timeout | 10825.06s
[2025-11-25 00:27](#error-2025-11-25t0027240000) |  | dev | timeout | 10820.07s
[2025-11-26 00:28](#error-2025-11-26t0028420000) |  | dev | timeout | 10825.06s
[2025-11-27 00:28](#error-2025-11-27t0028290000) |  | dev | timeout | 10845.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 34 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8259672Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T00:29:52.4843608Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T00:30:12.4638077Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T00:30:12.4640354Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:12.463463581Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-7936247648180074126
2025-10-30T03:47:21.4033275Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-10-30T03:47:21.4034047Z     resource_test.go:441: Step 2/5 error: Error running apply: exit status 1
2025-10-30T03:47:21.4034476Z         
2025-10-30T03:47:21.4034798Z         Error: Error in update
2025-10-30T03:47:21.4035118Z         
2025-10-30T03:47:21.4035480Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:47:21.4036292Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:47:21.4037139Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:47:21.4037573Z         
2025-10-30T03:47:21.4038084Z         cluster=test-acc-tf-c-7936247648180074126 didn't reach desired state: IDLE,
2025-10-30T03:47:21.4038772Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:47:21.4039198Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:47:54.0984260Z    test_working_directory=/tmp/plugintest815472381
2025-10-30T05:28:11.5673981Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (4h58m19s)
2025-10-30T05:28:11.5675579Z 		TestAccClusterAdvancedClusterConfig_asymmetricGeoShardedNewSchemaAddingRemovingShard (4h58m19s)
2025-10-30T05:28:11.5677105Z 		TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (4h58m19s)
```

- 2025-10-31 PASS 29 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 28 minutes
- 2025-11-04 PASS 26 minutes
- 2025-11-05
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-11-06 PASS 31 minutes
- 2025-11-07 PASS 30 minutes
- 2025-11-08 PASS 53 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 25 minutes
- 2025-11-11 PASS 25 minutes
- 2025-11-12 PASS 28 minutes
- 2025-11-13 PASS 55 minutes
- 2025-11-14 PASS 34 minutes
- 2025-11-15 PASS 23 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 29 minutes
- 2025-11-18 PASS 26 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:00+00:00
```
2025-11-19T00:29:00.7346904Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T00:35:20.7906796Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T00:35:22.1780408Z   diagnostic_detail=
2025-11-19T00:35:22.1786908Z    tf_req_id=df290885-df2a-d304-5d5b-6727ebcffe68 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas diagnostic_summary="Missing Configuration for Required Attribute" tf_resource_type=mongodbatlas_advanced_cluster tf_proto_version=6.10 tf_rpc=ValidateResourceConfig diagnostic_severity=ERROR
2025-11-19T00:36:20.7376870Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T00:36:20.7378548Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:36:20.737338744Z, ProjectID: 691d0f4aa9e010496ad06715, Cluster name: test-acc-tf-c-7421856984276147147
2025-11-19T03:36:21.4510400Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T03:36:21.4511554Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-19T03:36:21.4512179Z         
2025-11-19T03:36:21.4512515Z         Error: Error in create
2025-11-19T03:36:21.4512771Z         
2025-11-19T03:36:21.4513089Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:36:21.4513718Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:36:21.4514643Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:36:21.4514975Z         
2025-11-19T03:36:21.4515645Z         cluster=test-acc-tf-c-7421856984276147147 didn't reach desired state: IDLE,
2025-11-19T03:36:21.4516299Z         error: context deadline exceeded
2025-11-19T03:36:21.4952653Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10860.73s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:05+00:00
```
2025-11-19T09:30:05.0241613Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T09:31:55.5688449Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T09:32:15.5595154Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T09:32:15.5596766Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:15.55915367Z, ProjectID: 691d8e1b5ab64e7c5567626e, Cluster name: test-acc-tf-c-792257237898116867
2025-11-19T12:32:16.2139590Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-19T12:32:16.2140398Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-19T12:32:16.2140855Z         
2025-11-19T12:32:16.2141124Z         Error: Error in create
2025-11-19T12:32:16.2141365Z         
2025-11-19T12:32:16.2141806Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:16.2142553Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:16.2143318Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:16.2143884Z         
2025-11-19T12:32:16.2144462Z         cluster=test-acc-tf-c-792257237898116867 didn't reach desired state: IDLE,
2025-11-19T12:32:16.2145101Z         error: context deadline exceeded
2025-11-19T12:32:16.2605015Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10820.70s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:04+00:00
```
2025-11-20T00:28:04.5874937Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T00:29:55.5998840Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T00:30:15.5724756Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T00:30:15.5726364Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:15.572174335Z, ProjectID: 691e6091f41e983fa169881a, Cluster name: test-acc-tf-c-837114827549456219
2025-11-20T03:30:16.2370981Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T03:30:16.2371729Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-20T03:30:16.2372157Z         
2025-11-20T03:30:16.2372417Z         Error: Error in create
2025-11-20T03:30:16.2372650Z         
2025-11-20T03:30:16.2373273Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:16.2373980Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:16.2374646Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:16.2374947Z         
2025-11-20T03:30:16.2375443Z         cluster=test-acc-tf-c-837114827549456219 didn't reach desired state: IDLE,
2025-11-20T03:30:16.2375870Z         error: context deadline exceeded
2025-11-20T03:30:16.2802736Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10820.69s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:57+00:00
```
2025-11-20T10:01:57.9363883Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T10:03:33.6953819Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T10:03:53.6614138Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T10:03:53.6616220Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:03:53.661131991Z, ProjectID: 691ee7142b50f06feba62559, Cluster name: test-acc-tf-c-7142827201362665646
2025-11-20T13:03:54.2494497Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-20T13:03:54.2495212Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-20T13:03:54.2495669Z         
2025-11-20T13:03:54.2495925Z         Error: Error in create
2025-11-20T13:03:54.2496333Z         
2025-11-20T13:03:54.2496692Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:54.2497525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:54.2498385Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:54.2498801Z         
2025-11-20T13:03:54.2499263Z         cluster=test-acc-tf-c-7142827201362665646 didn't reach desired state: IDLE,
2025-11-20T13:03:54.2499832Z         error: context deadline exceeded
2025-11-20T13:03:54.2913431Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10820.60s)
```

- 2025-11-21

### Error 2025-11-21T00:28:31+00:00
```
2025-11-21T00:28:31.2200332Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-21T00:30:22.6550013Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-21T00:30:37.6484680Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-21T00:30:37.6488577Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:30:37.648249758Z, ProjectID: 691fb22c238ce57ddce440c5, Cluster name: test-acc-tf-c-6012612021350358180
2025-11-21T03:30:38.2486451Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-21T03:30:38.2487180Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-21T03:30:38.2487679Z         
2025-11-21T03:30:38.2488057Z         Error: Error in create
2025-11-21T03:30:38.2488386Z         
2025-11-21T03:30:38.2488725Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:38.2489714Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:38.2490390Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:38.2490699Z         
2025-11-21T03:30:38.2491368Z         cluster=test-acc-tf-c-6012612021350358180 didn't reach desired state: IDLE,
2025-11-21T03:30:38.2491840Z         error: context deadline exceeded
2025-11-21T03:30:38.2952742Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10815.64s)
```

- 2025-11-22

### Error 2025-11-22T00:26:59+00:00
```
2025-11-22T00:26:59.8543391Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-22T00:28:42.9625955Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-22T00:29:02.9392872Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-22T00:29:02.9394600Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:02.938900602Z, ProjectID: 692103504aaa8d39323282b3, Cluster name: test-acc-tf-c-4095494663512827921
2025-11-22T03:29:03.5323210Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-22T03:29:03.5324282Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-22T03:29:03.5324894Z         
2025-11-22T03:29:03.5325281Z         Error: Error in create
2025-11-22T03:29:03.5325539Z         
2025-11-22T03:29:03.5325869Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:29:03.5326516Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:29:03.5327241Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:29:03.5327573Z         
2025-11-22T03:29:03.5328147Z         cluster=test-acc-tf-c-4095494663512827921 didn't reach desired state: IDLE,
2025-11-22T03:29:03.5328744Z         error: context deadline exceeded
2025-11-22T03:29:03.5779292Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10820.63s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:12+00:00
```
2025-11-24T00:30:12.1838971Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-24T00:33:24.2026114Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-24T00:33:49.1849755Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-24T00:33:49.1851630Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:33:49.184670413Z, ProjectID: 6923a71121519f56cb85fc10, Cluster name: test-acc-tf-c-3286390966697938807
2025-11-24T03:33:49.7664333Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-24T03:33:49.7665578Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-24T03:33:49.7666281Z         
2025-11-24T03:33:49.7666622Z         Error: Error in create
2025-11-24T03:33:49.7667128Z         
2025-11-24T03:33:49.7667680Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:49.7668661Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:49.7669590Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:49.7670114Z         
2025-11-24T03:33:49.7670850Z         cluster=test-acc-tf-c-3286390966697938807 didn't reach desired state: IDLE,
2025-11-24T03:33:49.7671426Z         error: context deadline exceeded
2025-11-24T03:33:49.8151141Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10825.62s)
```

- 2025-11-25

### Error 2025-11-25T00:27:24+00:00
```
2025-11-25T00:27:24.5902719Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-25T00:31:51.3982481Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-25T00:32:11.3976036Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-25T00:32:11.3978179Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:11.397266041Z, ProjectID: 6924f7eadef656331da183f7, Cluster name: test-acc-tf-c-6664912445213000004
2025-11-25T03:32:12.0633767Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-25T03:32:12.0634635Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-25T03:32:12.0635023Z         
2025-11-25T03:32:12.0635276Z         Error: Error in create
2025-11-25T03:32:12.0635522Z         
2025-11-25T03:32:12.0635842Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:12.0636597Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:12.0637305Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:12.0637783Z         
2025-11-25T03:32:12.0638240Z         cluster=test-acc-tf-c-6664912445213000004 didn't reach desired state: IDLE,
2025-11-25T03:32:12.0638701Z         error: context deadline exceeded
2025-11-25T03:32:12.1070984Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10820.71s)
```

- 2025-11-26

### Error 2025-11-26T00:28:42+00:00
```
2025-11-26T00:28:42.2346108Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-26T00:30:27.5276969Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-26T00:30:52.5018712Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-26T00:30:52.5020479Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:30:52.501581248Z, ProjectID: 692649b8131e634a70c6042d, Cluster name: test-acc-tf-c-3670370756901655216
2025-11-26T03:30:53.0602817Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-26T03:30:53.0603649Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-26T03:30:53.0604132Z         
2025-11-26T03:30:53.0604384Z         Error: Error in create
2025-11-26T03:30:53.0604788Z         
2025-11-26T03:30:53.0605133Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:53.0606024Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:53.0606720Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:53.0607028Z         
2025-11-26T03:30:53.0607578Z         cluster=test-acc-tf-c-3670370756901655216 didn't reach desired state: IDLE,
2025-11-26T03:30:53.0608135Z         error: context deadline exceeded
2025-11-26T03:30:53.1120831Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10825.60s)
```

- 2025-11-27

### Error 2025-11-27T00:28:29+00:00
```
2025-11-27T00:28:29.0755555Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-27T00:30:06.5011647Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-27T00:30:51.4929849Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-27T00:30:51.4932436Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:51.492654752Z, ProjectID: 69279b2ab358b3221e8cc1c8, Cluster name: test-acc-tf-c-8231031721481893746
2025-11-27T03:30:52.1099065Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-11-27T03:30:52.1099807Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2025-11-27T03:30:52.1100441Z         
2025-11-27T03:30:52.1100694Z         Error: Error in create
2025-11-27T03:30:52.1101028Z         
2025-11-27T03:30:52.1101493Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:52.1102248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:52.1102943Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:52.1103252Z         
2025-11-27T03:30:52.1103809Z         cluster=test-acc-tf-c-8231031721481893746 didn't reach desired state: IDLE,
2025-11-27T03:30:52.1104383Z         error: context deadline exceeded
2025-11-27T03:30:52.1577393Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10845.66s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 26 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 25 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 26 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 29 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 29 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
