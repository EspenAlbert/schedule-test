# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | flaky_500 | 11813.02s
[2025-11-19 00:29](#error-2025-11-19t0029000000) |  | dev | timeout | 10855.07s
[2025-11-19 09:30](#error-2025-11-19t0930050000) |  | dev | timeout | 10815.07s
[2025-11-20 00:28](#error-2025-11-20t0028040000) |  | dev | timeout | 10815.08s
[2025-11-20 10:01](#error-2025-11-20t1001570000) |  | dev | timeout | 10815.06s
[2025-11-21 00:28](#error-2025-11-21t0028310000) |  | dev | timeout | 10810.07s
[2025-11-22 00:26](#error-2025-11-22t0026590000) |  | dev | timeout | 10815.06s
[2025-11-24 00:30](#error-2025-11-24t0030120000) |  | dev | timeout | 10820.06s
[2025-11-25 00:27](#error-2025-11-25t0027240000) |  | dev | timeout | 10815.07s
[2025-11-26 00:28](#error-2025-11-26t0028420000) |  | dev | timeout | 10820.06s
[2025-11-27 00:28](#error-2025-11-27t0028290000) |  | dev | timeout | 10840.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 52 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8262482Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T00:29:52.4816975Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T00:30:07.4635537Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T00:30:07.4637167Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:07.463208268Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-2336708150984266303
2025-10-30T03:46:45.3692763Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-10-30T03:46:45.3693510Z     resource_test.go:500: Step 2/5 error: Error running apply: exit status 1
2025-10-30T03:46:45.3694028Z         
2025-10-30T03:46:45.3694404Z         Error: Error in delete
2025-10-30T03:46:45.3694734Z         
2025-10-30T03:46:45.3695266Z         cluster=test-acc-tf-c-2336708150984266303 didn't reach desired state:
2025-10-30T03:46:45.3696072Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:46:45.3696534Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:45.6687264Z   
2025-10-30T03:46:45.6687810Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:45.6688310Z         
2025-10-30T03:46:45.6688583Z         Error: Error in delete
2025-10-30T03:46:45.6688829Z         
2025-10-30T03:46:45.6689241Z         cluster name: test-acc-tf-c-2336708150984266303, API error details:
2025-10-30T03:46:45.6690095Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b122abf4374f32996ea1/clusters/test-acc-tf-c-2336708150984266303
2025-10-30T03:46:45.6690755Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T03:46:45.6691206Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T03:46:45.6692083Z         test-acc-tf-c-2336708150984266303 has already been requested for deletion.
2025-10-30T03:46:45.6692793Z         Reason: Bad Request. Params: [test-acc-tf-c-2336708150984266303],
2025-10-30T03:46:45.6693188Z         BadRequestDetail: 
2025-10-30T03:46:45.6693644Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (11813.19s)
```

- 2025-10-31 PASS 41 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 40 minutes
- 2025-11-04 PASS 43 minutes
- 2025-11-05
  - PASS 45 minutes
  - PASS 39 minutes
- 2025-11-06 PASS 56 minutes
- 2025-11-07 PASS 44 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 38 minutes
- 2025-11-11 PASS 36 minutes
- 2025-11-12 PASS 41 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 46 minutes
- 2025-11-15 PASS 38 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 43 minutes
- 2025-11-18 PASS 37 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:00+00:00
```
2025-11-19T00:29:00.7349537Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T00:35:20.7833336Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T00:36:15.7372607Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T00:36:15.7375047Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:36:15.736928432Z, ProjectID: 691d0f4aa9e010496ad06715, Cluster name: test-acc-tf-c-6918253939888174315
2025-11-19T03:36:16.4108833Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T03:36:16.4109633Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-19T03:36:16.4110012Z         
2025-11-19T03:36:16.4110334Z         Error: Error in create
2025-11-19T03:36:16.4110618Z         
2025-11-19T03:36:16.4110936Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:36:16.4111670Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:36:16.4112356Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:36:16.4112694Z         
2025-11-19T03:36:16.4113280Z         cluster=test-acc-tf-c-6918253939888174315 didn't reach desired state: IDLE,
2025-11-19T03:36:16.4113864Z         error: context deadline exceeded
2025-11-19T03:36:16.4607361Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10855.69s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:05+00:00
```
2025-11-19T09:30:05.0244443Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T09:31:55.5685486Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T09:32:10.5589141Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T09:32:10.5591101Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:10.558558989Z, ProjectID: 691d8e1b5ab64e7c5567626e, Cluster name: test-acc-tf-c-3671222676486820136
2025-11-19T12:32:11.2083531Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-19T12:32:11.2084277Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-19T12:32:11.2084891Z         
2025-11-19T12:32:11.2085300Z         Error: Error in create
2025-11-19T12:32:11.2085659Z         
2025-11-19T12:32:11.2086141Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:11.2087181Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:11.2088226Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:11.2088742Z         
2025-11-19T12:32:11.2089530Z         cluster=test-acc-tf-c-3671222676486820136 didn't reach desired state: IDLE,
2025-11-19T12:32:11.2090338Z         error: context deadline exceeded
2025-11-19T12:32:11.2519552Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10815.69s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:04+00:00
```
2025-11-20T00:28:04.5876363Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T00:29:55.5997320Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T00:30:10.5716386Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T00:30:10.5719883Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:10.571333593Z, ProjectID: 691e6091f41e983fa169881a, Cluster name: test-acc-tf-c-4638355487703745361
2025-11-20T03:30:11.3747266Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T03:30:11.3748080Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-20T03:30:11.3748452Z         
2025-11-20T03:30:11.3748790Z         Error: Error in create
2025-11-20T03:30:11.3749032Z         
2025-11-20T03:30:11.3749336Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:11.3750004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:11.3750623Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:11.3750915Z         
2025-11-20T03:30:11.3751469Z         cluster=test-acc-tf-c-4638355487703745361 didn't reach desired state: IDLE,
2025-11-20T03:30:11.3751972Z         error: context deadline exceeded
2025-11-20T03:30:11.4201749Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10815.83s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:57+00:00
```
2025-11-20T10:01:57.9366502Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T10:03:33.6951455Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T10:03:48.6611107Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T10:03:48.6612948Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:03:48.660814006Z, ProjectID: 691ee7142b50f06feba62559, Cluster name: test-acc-tf-c-9159999840415720729
2025-11-20T13:03:49.2774336Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-20T13:03:49.2775232Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-20T13:03:49.2775729Z         
2025-11-20T13:03:49.2776005Z         Error: Error in create
2025-11-20T13:03:49.2776320Z         
2025-11-20T13:03:49.2776714Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:49.2777502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:49.2778339Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:49.2778678Z         
2025-11-20T13:03:49.2779245Z         cluster=test-acc-tf-c-9159999840415720729 didn't reach desired state: IDLE,
2025-11-20T13:03:49.2779835Z         error: context deadline exceeded
2025-11-20T13:03:49.3192990Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10815.63s)
```

- 2025-11-21

### Error 2025-11-21T00:28:31+00:00
```
2025-11-21T00:28:31.2203606Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-21T00:30:22.6548833Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-21T00:30:32.6474871Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-21T00:30:32.6477021Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:30:32.647235087Z, ProjectID: 691fb22c238ce57ddce440c5, Cluster name: test-acc-tf-c-7662470417908870119
2025-11-21T03:30:33.2741848Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-21T03:30:33.2742659Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-21T03:30:33.2743282Z         
2025-11-21T03:30:33.2743569Z         Error: Error in create
2025-11-21T03:30:33.2743880Z         
2025-11-21T03:30:33.2744197Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:33.2744934Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:33.2745639Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:33.2745940Z         
2025-11-21T03:30:33.2746715Z         cluster=test-acc-tf-c-7662470417908870119 didn't reach desired state: IDLE,
2025-11-21T03:30:33.2747333Z         error: context deadline exceeded
2025-11-21T03:30:33.3184459Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10810.66s)
```

- 2025-11-22

### Error 2025-11-22T00:26:59+00:00
```
2025-11-22T00:26:59.8545486Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-22T00:28:42.9624904Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-22T00:28:57.9382491Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-22T00:28:57.9384500Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:28:57.937859124Z, ProjectID: 692103504aaa8d39323282b3, Cluster name: test-acc-tf-c-318584819329868032
2025-11-22T03:28:58.5133768Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-22T03:28:58.5134601Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-22T03:28:58.5135216Z         
2025-11-22T03:28:58.5135527Z         Error: Error in create
2025-11-22T03:28:58.5135792Z         
2025-11-22T03:28:58.5136138Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:58.5136839Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:58.5137474Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:58.5137812Z         
2025-11-22T03:28:58.5138280Z         cluster=test-acc-tf-c-318584819329868032 didn't reach desired state: IDLE,
2025-11-22T03:28:58.5140626Z         error: context deadline exceeded
2025-11-22T03:28:58.5584519Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10815.61s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:12+00:00
```
2025-11-24T00:30:12.1842682Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-24T00:33:24.2025055Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-24T00:33:44.1842542Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-24T00:33:44.1844568Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:33:44.183965716Z, ProjectID: 6923a71121519f56cb85fc10, Cluster name: test-acc-tf-c-4717935909314974289
2025-11-24T03:33:44.7352553Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-24T03:33:44.7353684Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-24T03:33:44.7354475Z         
2025-11-24T03:33:44.7354743Z         Error: Error in create
2025-11-24T03:33:44.7354999Z         
2025-11-24T03:33:44.7355330Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:44.7356086Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:44.7356690Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:44.7357028Z         
2025-11-24T03:33:44.7357776Z         cluster=test-acc-tf-c-4717935909314974289 didn't reach desired state: IDLE,
2025-11-24T03:33:44.7358248Z         error: context deadline exceeded
2025-11-24T03:33:44.7890427Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10820.60s)
```

- 2025-11-25

### Error 2025-11-25T00:27:24+00:00
```
2025-11-25T00:27:24.5904554Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-25T00:31:51.3975996Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-25T00:32:06.3973357Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-25T00:32:06.3975092Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:06.397031778Z, ProjectID: 6924f7eadef656331da183f7, Cluster name: test-acc-tf-c-6940302634961564696
2025-11-25T03:32:07.0882113Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-25T03:32:07.0882992Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-25T03:32:07.0883473Z         
2025-11-25T03:32:07.0883862Z         Error: Error in create
2025-11-25T03:32:07.0884163Z         
2025-11-25T03:32:07.0884730Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:07.0885529Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:07.0886264Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:07.0886625Z         
2025-11-25T03:32:07.0887411Z         cluster=test-acc-tf-c-6940302634961564696 didn't reach desired state: IDLE,
2025-11-25T03:32:07.0888024Z         error: context deadline exceeded
2025-11-25T03:32:07.1341067Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10815.74s)
```

- 2025-11-26

### Error 2025-11-26T00:28:42+00:00
```
2025-11-26T00:28:42.2348263Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-26T00:30:27.5275910Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-26T00:30:47.5013075Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-26T00:30:47.5015810Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:30:47.501013121Z, ProjectID: 692649b8131e634a70c6042d, Cluster name: test-acc-tf-c-1233051846195147277
2025-11-26T03:30:48.0610950Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-26T03:30:48.0611773Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-26T03:30:48.0612282Z         
2025-11-26T03:30:48.0612643Z         Error: Error in create
2025-11-26T03:30:48.0612893Z         
2025-11-26T03:30:48.0613326Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:48.0614063Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:48.0614687Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:48.0615066Z         
2025-11-26T03:30:48.0615710Z         cluster=test-acc-tf-c-1233051846195147277 didn't reach desired state: IDLE,
2025-11-26T03:30:48.0616182Z         error: context deadline exceeded
2025-11-26T03:30:48.1082541Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10820.60s)
```

- 2025-11-27

### Error 2025-11-27T00:28:29+00:00
```
2025-11-27T00:28:29.0757746Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-27T00:30:06.5010080Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-27T00:30:46.4927043Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-27T00:30:46.4928813Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:46.49239776Z, ProjectID: 69279b2ab358b3221e8cc1c8, Cluster name: test-acc-tf-c-6618103865594994412
2025-11-27T03:30:47.1093424Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-11-27T03:30:47.1094293Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2025-11-27T03:30:47.1094669Z         
2025-11-27T03:30:47.1095111Z         Error: Error in create
2025-11-27T03:30:47.1095368Z         
2025-11-27T03:30:47.1095814Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:47.1096531Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:47.1097160Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:47.1097573Z         
2025-11-27T03:30:47.1098034Z         cluster=test-acc-tf-c-6618103865594994412 didn't reach desired state: IDLE,
2025-11-27T03:30:47.1098583Z         error: context deadline exceeded
2025-11-27T03:30:47.1567522Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (10840.66s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 38 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 34 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 38 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 40 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 40 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
