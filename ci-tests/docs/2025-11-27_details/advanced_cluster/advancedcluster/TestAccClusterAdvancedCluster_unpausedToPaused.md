# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10) TIMEOUT
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 17899.00s
[2025-11-19 00:28](#error-2025-11-19t0028580000) |  | dev | timeout | 10830.08s
[2025-11-19 09:30](#error-2025-11-19t0930030000) |  | dev | timeout | 10850.07s
[2025-11-20 00:28](#error-2025-11-20t0028010000) |  | dev | timeout | 10845.07s
[2025-11-20 10:01](#error-2025-11-20t1001560000) |  | dev | timeout | 10845.06s
[2025-11-21 00:28](#error-2025-11-21t0028280000) |  | dev | timeout | 10840.06s
[2025-11-22 00:26](#error-2025-11-22t0026560000) |  | dev | timeout | 10845.07s
[2025-11-24 00:30](#error-2025-11-24t0030090000) |  | dev | timeout | 10850.07s
[2025-11-25 00:27](#error-2025-11-25t0027220000) |  | dev | timeout | 10840.07s
[2025-11-26 00:28](#error-2025-11-26t0028400000) |  | dev | timeout | 10850.06s
[2025-11-27 00:28](#error-2025-11-27t0028260000) |  | dev | timeout | 10825.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3898216Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T00:29:52.4848305Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T00:30:37.4708337Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T00:30:37.4710019Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:37.468604306Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-5453186812358773059
2025-10-30T03:47:54.0984914Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-10-30T03:47:54.0985792Z     resource_test.go:234: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:47:54.0986183Z         
2025-10-30T03:47:54.0986477Z         Error: Error in pause after update
2025-10-30T03:47:54.0986778Z         
2025-10-30T03:47:54.0987099Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:47:54.0988163Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:47:54.0988888Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:47:54.0989355Z         
2025-10-30T03:47:54.0989804Z         cluster=test-acc-tf-c-5453186812358773059 didn't reach desired state: IDLE,
2025-10-30T03:47:54.0990403Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:47:54.0990819Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:48:26.2851491Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade
2025-10-30T05:28:11.5681959Z 		TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4h58m19s)
2025-10-30T05:28:11.5683140Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h58m19s)
2025-10-30T05:28:11.5683807Z 		TestAccClusterAdvancedCluster_unpausedToPaused (4h58m19s)
```

- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 25 minutes
- 2025-11-04 PASS 19 minutes
- 2025-11-05
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 46 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 18 minutes
- 2025-11-11 PASS 18 minutes
- 2025-11-12 PASS 22 minutes
- 2025-11-13 PASS 37 minutes
- 2025-11-14 PASS 25 minutes
- 2025-11-15 PASS 19 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 25 minutes
- 2025-11-18 PASS 21 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:58+00:00
```
2025-11-19T00:28:58.0395248Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T00:35:20.7306459Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T00:35:50.7340758Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T00:35:50.7350379Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:35:50.73334168Z, ProjectID: 691d0f47a9e010496ad05166, Cluster name: test-acc-tf-c-8595620430149971151
2025-11-19T03:35:51.4756890Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T03:35:51.4757675Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-19T03:35:51.4758169Z         
2025-11-19T03:35:51.4758421Z         Error: Error in create
2025-11-19T03:35:51.4758748Z         
2025-11-19T03:35:51.4759165Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:51.4759918Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:51.4760641Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:51.4760957Z         
2025-11-19T03:35:51.4761509Z         cluster=test-acc-tf-c-8595620430149971151 didn't reach desired state: IDLE,
2025-11-19T03:35:51.4762067Z         error: context deadline exceeded
2025-11-19T03:35:51.5219680Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10830.79s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:03+00:00
```
2025-11-19T09:30:03.0192403Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T09:31:55.5695440Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T09:32:45.5635462Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T09:32:45.5637155Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:45.563229088Z, ProjectID: 691d8e154938dd1e70f60d87, Cluster name: test-acc-tf-c-3184855099373832324
2025-11-19T12:32:46.2002460Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-19T12:32:46.2003146Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-19T12:32:46.2003818Z         
2025-11-19T12:32:46.2004189Z         Error: Error in create
2025-11-19T12:32:46.2004448Z         
2025-11-19T12:32:46.2004771Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:46.2005665Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:46.2006375Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:46.2006719Z         
2025-11-19T12:32:46.2007230Z         cluster=test-acc-tf-c-3184855099373832324 didn't reach desired state: IDLE,
2025-11-19T12:32:46.2007799Z         error: context deadline exceeded
2025-11-19T12:32:46.2499822Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10850.68s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:01+00:00
```
2025-11-20T00:28:01.5629773Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T00:29:55.6003103Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T00:30:40.5774670Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T00:30:40.5776731Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:40.577097795Z, ProjectID: 691e608da0b6e4670df28de8, Cluster name: test-acc-tf-c-3418228748691132868
2025-11-20T03:30:41.2557597Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T03:30:41.2558298Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-20T03:30:41.2558784Z         
2025-11-20T03:30:41.2559026Z         Error: Error in create
2025-11-20T03:30:41.2559406Z         
2025-11-20T03:30:41.2559709Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:41.2560277Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:41.2560832Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:41.2561188Z         
2025-11-20T03:30:41.2561620Z         cluster=test-acc-tf-c-3418228748691132868 didn't reach desired state: IDLE,
2025-11-20T03:30:41.2562120Z         error: context deadline exceeded
2025-11-20T03:30:41.3044635Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10845.72s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:56+00:00
```
2025-11-20T10:01:56.0814198Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T10:03:33.6960048Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T10:04:18.6641113Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T10:04:18.6642575Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:04:18.6638495Z, ProjectID: 691ee710efafe847b127fc17, Cluster name: test-acc-tf-c-454934478765114438
2025-11-20T13:04:19.2383042Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-20T13:04:19.2383767Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-20T13:04:19.2384333Z         
2025-11-20T13:04:19.2384626Z         Error: Error in create
2025-11-20T13:04:19.2384873Z         
2025-11-20T13:04:19.2385198Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:04:19.2385928Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:04:19.2386594Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:04:19.2386920Z         
2025-11-20T13:04:19.2387438Z         cluster=test-acc-tf-c-454934478765114438 didn't reach desired state: IDLE,
2025-11-20T13:04:19.2388079Z         error: context deadline exceeded
2025-11-20T13:04:19.2814969Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10845.59s)
```

- 2025-11-21

### Error 2025-11-21T00:28:28+00:00
```
2025-11-21T00:28:28.2286978Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-21T00:30:22.6553733Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-21T00:31:02.6510222Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-21T00:31:02.6511934Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:31:02.650780265Z, ProjectID: 691fb229238ce57ddce4270e, Cluster name: test-acc-tf-c-5845879142901816167
2025-11-21T03:31:03.2540612Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-21T03:31:03.2541241Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-21T03:31:03.2541780Z         
2025-11-21T03:31:03.2542322Z         Error: Error in create
2025-11-21T03:31:03.2542680Z         
2025-11-21T03:31:03.2543219Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:31:03.2543884Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:31:03.2544644Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:31:03.2544944Z         
2025-11-21T03:31:03.2545391Z         cluster=test-acc-tf-c-5845879142901816167 didn't reach desired state: IDLE,
2025-11-21T03:31:03.2545959Z         error: context deadline exceeded
2025-11-21T03:31:03.2978535Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10840.64s)
```

- 2025-11-22

### Error 2025-11-22T00:26:56+00:00
```
2025-11-22T00:26:56.2521616Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-22T00:28:42.9646184Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-22T00:29:27.9450543Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-22T00:29:27.9451858Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:27.944780728Z, ProjectID: 6921034ba2a1e670f5291801, Cluster name: test-acc-tf-c-4333768778175880457
2025-11-22T03:29:28.5961587Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-22T03:29:28.5962375Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-22T03:29:28.5962830Z         
2025-11-22T03:29:28.5963230Z         Error: Error in create
2025-11-22T03:29:28.5963528Z         
2025-11-22T03:29:28.5964040Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:29:28.5964788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:29:28.5965390Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:29:28.5965803Z         
2025-11-22T03:29:28.5966294Z         cluster=test-acc-tf-c-4333768778175880457 didn't reach desired state: IDLE,
2025-11-22T03:29:28.5966823Z         error: context deadline exceeded
2025-11-22T03:29:28.6459338Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10845.70s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:09+00:00
```
2025-11-24T00:30:09.5162487Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-24T00:33:24.2029948Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-24T00:34:14.1879665Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-24T00:34:14.1880871Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:34:14.187696159Z, ProjectID: 6923a70ef47dc05918907815, Cluster name: test-acc-tf-c-6958585529863156479
2025-11-24T03:34:14.8227811Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-24T03:34:14.8228746Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-24T03:34:14.8229390Z         
2025-11-24T03:34:14.8229815Z         Error: Error in create
2025-11-24T03:34:14.8230072Z         
2025-11-24T03:34:14.8230398Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:34:14.8231049Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:34:14.8231785Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:34:14.8232115Z         
2025-11-24T03:34:14.8232788Z         cluster=test-acc-tf-c-6958585529863156479 didn't reach desired state: IDLE,
2025-11-24T03:34:14.8233313Z         error: context deadline exceeded
2025-11-24T03:34:14.8672767Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10850.67s)
```

- 2025-11-25

### Error 2025-11-25T00:27:22+00:00
```
2025-11-25T00:27:22.3501938Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-25T00:31:51.3993189Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-25T00:32:31.4011770Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-25T00:32:31.4013281Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:31.400874425Z, ProjectID: 6924f7e62b3b85618cf8e299, Cluster name: test-acc-tf-c-1819438660939975292
2025-11-25T03:32:32.0040711Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-25T03:32:32.0041562Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-25T03:32:32.0042418Z         
2025-11-25T03:32:32.0042740Z         Error: Error in create
2025-11-25T03:32:32.0043037Z         
2025-11-25T03:32:32.0043496Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:32.0044377Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:32.0045414Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:32.0045799Z         
2025-11-25T03:32:32.0046440Z         cluster=test-acc-tf-c-1819438660939975292 didn't reach desired state: IDLE,
2025-11-25T03:32:32.0046903Z         error: context deadline exceeded
2025-11-25T03:32:32.0485940Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10840.65s)
```

- 2025-11-26

### Error 2025-11-26T00:28:40+00:00
```
2025-11-26T00:28:40.0233225Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-26T00:30:27.5281046Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-26T00:31:17.5066086Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-26T00:31:17.5068318Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:31:17.50631057Z, ProjectID: 692649b3131e634a70c5ee92, Cluster name: test-acc-tf-c-69472908233494145
2025-11-26T03:31:18.0622304Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-26T03:31:18.0622852Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-26T03:31:18.0623408Z         
2025-11-26T03:31:18.0623707Z         Error: Error in create
2025-11-26T03:31:18.0624097Z         
2025-11-26T03:31:18.0624470Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:31:18.0625248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:31:18.0626068Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:31:18.0626453Z         
2025-11-26T03:31:18.0626910Z         cluster=test-acc-tf-c-69472908233494145 didn't reach desired state: IDLE,
2025-11-26T03:31:18.0627463Z         error: context deadline exceeded
2025-11-26T03:31:18.1062596Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10850.59s)
```

- 2025-11-27

### Error 2025-11-27T00:28:26+00:00
```
2025-11-27T00:28:26.5456186Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-27T00:30:06.4996117Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-27T00:30:31.4895328Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-27T00:30:31.4897913Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:31.489244019Z, ProjectID: 69279b273c4d827e6c428b5e, Cluster name: test-acc-tf-c-7103957533133337490
2025-11-27T03:30:32.1207376Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-11-27T03:30:32.1208127Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2025-11-27T03:30:32.1208496Z         
2025-11-27T03:30:32.1208824Z         Error: Error in create
2025-11-27T03:30:32.1209134Z         
2025-11-27T03:30:32.1209492Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:32.1210433Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:32.1211091Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:32.1211432Z         
2025-11-27T03:30:32.1217732Z         cluster=test-acc-tf-c-7103957533133337490 didn't reach desired state: IDLE,
2025-11-27T03:30:32.1218250Z         error: context deadline exceeded
2025-11-27T03:30:32.1698920Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10825.68s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 21 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 17 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 19 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 18 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
