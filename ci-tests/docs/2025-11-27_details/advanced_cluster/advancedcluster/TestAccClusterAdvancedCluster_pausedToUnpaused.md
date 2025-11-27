# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10) TIMEOUT
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev |  | 17899.00s
[2025-11-19 00:28](#error-2025-11-19t0028580000) |  | dev | timeout | 10825.08s
[2025-11-19 09:30](#error-2025-11-19t0930030000) |  | dev | timeout | 10845.07s
[2025-11-20 00:28](#error-2025-11-20t0028010000) |  | dev | timeout | 10840.07s
[2025-11-20 10:01](#error-2025-11-20t1001560000) |  | dev | timeout | 10840.06s
[2025-11-21 00:28](#error-2025-11-21t0028280000) |  | dev | timeout | 10835.07s
[2025-11-22 00:26](#error-2025-11-22t0026560000) |  | dev | timeout | 10840.07s
[2025-11-24 00:30](#error-2025-11-24t0030090000) |  | dev | timeout | 10845.06s
[2025-11-25 00:27](#error-2025-11-25t0027220000) |  | dev | timeout | 10835.07s
[2025-11-26 00:28](#error-2025-11-26t0028400000) |  | dev | timeout | 10845.06s
[2025-11-27 00:28](#error-2025-11-27t0028260000) |  | dev | timeout | 10820.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 32 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3899524Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-30T00:29:52.4847461Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-30T00:30:32.4675547Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-30T00:30:32.4677288Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:32.467226349Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-7158026017892682070
2025-10-30T05:28:11.5678726Z 		TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (4h58m19s)
2025-10-30T05:28:11.5680097Z 		TestAccClusterAdvancedCluster_biConnectorConfig (4h58m19s)
2025-10-30T05:28:11.5680863Z 		TestAccClusterAdvancedCluster_pausedToUnpaused (4h58m19s)
```

- 2025-10-31 PASS 28 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 25 minutes
- 2025-11-04 PASS 28 minutes
- 2025-11-05
  - PASS an hour
  - PASS 25 minutes
- 2025-11-06 PASS 30 minutes
- 2025-11-07 PASS 30 minutes
- 2025-11-08 PASS 52 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 25 minutes
- 2025-11-11 PASS 23 minutes
- 2025-11-12 PASS 28 minutes
- 2025-11-13 PASS 51 minutes
- 2025-11-14 PASS 29 minutes
- 2025-11-15 PASS 24 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 28 minutes
- 2025-11-18 PASS 26 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:58+00:00
```
2025-11-19T00:28:58.0396823Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T00:35:20.7305621Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T00:35:45.7322470Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T00:35:45.7324339Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:35:45.731916878Z, ProjectID: 691d0f47a9e010496ad05166, Cluster name: test-acc-tf-c-5518641033172103269
2025-11-19T03:35:46.4488591Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T03:35:46.4489323Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-19T03:35:46.4489883Z         
2025-11-19T03:35:46.4490140Z         Error: Error in create
2025-11-19T03:35:46.4490504Z         
2025-11-19T03:35:46.4490954Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:46.4491695Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:46.4492577Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:46.4492982Z         
2025-11-19T03:35:46.4493432Z         cluster=test-acc-tf-c-5518641033172103269 didn't reach desired state: IDLE,
2025-11-19T03:35:46.4493998Z         error: context deadline exceeded
2025-11-19T03:35:46.4906519Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10825.76s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:03+00:00
```
2025-11-19T09:30:03.0193855Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T09:31:55.5694787Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T09:32:40.5626206Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T09:32:40.5627538Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:40.562353003Z, ProjectID: 691d8e154938dd1e70f60d87, Cluster name: test-acc-tf-c-541119802893904889
2025-11-19T12:32:41.2006145Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-19T12:32:41.2006682Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-19T12:32:41.2007219Z         
2025-11-19T12:32:41.2007479Z         Error: Error in create
2025-11-19T12:32:41.2007859Z         
2025-11-19T12:32:41.2008256Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:41.2009194Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:41.2009895Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:41.2010294Z         
2025-11-19T12:32:41.2010742Z         cluster=test-acc-tf-c-541119802893904889 didn't reach desired state: IDLE,
2025-11-19T12:32:41.2011301Z         error: context deadline exceeded
2025-11-19T12:32:41.2466767Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10845.68s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:01+00:00
```
2025-11-20T00:28:01.5630958Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T00:29:55.6002275Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T00:30:35.5757144Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T00:30:35.5758314Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:35.575429909Z, ProjectID: 691e608da0b6e4670df28de8, Cluster name: test-acc-tf-c-502003025095580411
2025-11-20T03:30:36.2355803Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T03:30:36.2356405Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-20T03:30:36.2356908Z         
2025-11-20T03:30:36.2357205Z         Error: Error in create
2025-11-20T03:30:36.2357537Z         
2025-11-20T03:30:36.2358076Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:36.2358849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:36.2359550Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:36.2360026Z         
2025-11-20T03:30:36.2360433Z         cluster=test-acc-tf-c-502003025095580411 didn't reach desired state: IDLE,
2025-11-20T03:30:36.2360915Z         error: context deadline exceeded
2025-11-20T03:30:36.2839621Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10840.70s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:56+00:00
```
2025-11-20T10:01:56.0815361Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T10:03:33.6958477Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T10:04:13.6631427Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T10:04:13.6632552Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:04:13.662881202Z, ProjectID: 691ee710efafe847b127fc17, Cluster name: test-acc-tf-c-3573872450158847522
2025-11-20T13:04:14.2631355Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-20T13:04:14.2632275Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-20T13:04:14.2632906Z         
2025-11-20T13:04:14.2633315Z         Error: Error in create
2025-11-20T13:04:14.2633633Z         
2025-11-20T13:04:14.2633965Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:04:14.2634605Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:04:14.2635306Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:04:14.2635884Z         
2025-11-20T13:04:14.2636519Z         cluster=test-acc-tf-c-3573872450158847522 didn't reach desired state: IDLE,
2025-11-20T13:04:14.2637071Z         error: context deadline exceeded
2025-11-20T13:04:14.3102735Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10840.62s)
```

- 2025-11-21

### Error 2025-11-21T00:28:28+00:00
```
2025-11-21T00:28:28.2288097Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-21T00:30:22.6553058Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-21T00:30:57.6503987Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-21T00:30:57.6505682Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:30:57.650195275Z, ProjectID: 691fb229238ce57ddce4270e, Cluster name: test-acc-tf-c-4703138103576048466
2025-11-21T03:30:58.3220908Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-21T03:30:58.3221825Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-21T03:30:58.3222460Z         
2025-11-21T03:30:58.3222874Z         Error: Error in create
2025-11-21T03:30:58.3223171Z         
2025-11-21T03:30:58.3223493Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:58.3224123Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:58.3224848Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:58.3225154Z         
2025-11-21T03:30:58.3225751Z         cluster=test-acc-tf-c-4703138103576048466 didn't reach desired state: IDLE,
2025-11-21T03:30:58.3226550Z         error: context deadline exceeded
2025-11-21T03:30:58.3712663Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10835.72s)
```

- 2025-11-22

### Error 2025-11-22T00:26:56+00:00
```
2025-11-22T00:26:56.2522994Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-22T00:28:42.9645477Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-22T00:29:22.9432874Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-22T00:29:22.9434562Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:22.942967789Z, ProjectID: 6921034ba2a1e670f5291801, Cluster name: test-acc-tf-c-6565577884807167956
2025-11-22T03:29:23.5914938Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-22T03:29:23.5915648Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-22T03:29:23.5916118Z         
2025-11-22T03:29:23.5916424Z         Error: Error in create
2025-11-22T03:29:23.5916983Z         
2025-11-22T03:29:23.5917395Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:29:23.5918166Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:29:23.5919048Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:29:23.5919406Z         
2025-11-22T03:29:23.5919910Z         cluster=test-acc-tf-c-6565577884807167956 didn't reach desired state: IDLE,
2025-11-22T03:29:23.5920558Z         error: context deadline exceeded
2025-11-22T03:29:23.6386559Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10840.69s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:09+00:00
```
2025-11-24T00:30:09.5163850Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-24T00:33:24.2029211Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-24T00:34:09.1872556Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-24T00:34:09.1873678Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:34:09.186983143Z, ProjectID: 6923a70ef47dc05918907815, Cluster name: test-acc-tf-c-1030127636802953348
2025-11-24T03:34:09.7748868Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-24T03:34:09.7749549Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-24T03:34:09.7750043Z         
2025-11-24T03:34:09.7750460Z         Error: Error in create
2025-11-24T03:34:09.7750709Z         
2025-11-24T03:34:09.7751220Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:34:09.7752438Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:34:09.7753057Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:34:09.7753604Z         
2025-11-24T03:34:09.7754295Z         cluster=test-acc-tf-c-1030127636802953348 didn't reach desired state: IDLE,
2025-11-24T03:34:09.7754863Z         error: context deadline exceeded
2025-11-24T03:34:09.8244770Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10845.63s)
```

- 2025-11-25

### Error 2025-11-25T00:27:22+00:00
```
2025-11-25T00:27:22.3503003Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-25T00:31:51.3986030Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-25T00:32:26.4000882Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-25T00:32:26.4002604Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:26.399748929Z, ProjectID: 6924f7e62b3b85618cf8e299, Cluster name: test-acc-tf-c-2465747067885210104
2025-11-25T03:32:27.0151542Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-25T03:32:27.0152267Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-25T03:32:27.0152760Z         
2025-11-25T03:32:27.0153069Z         Error: Error in create
2025-11-25T03:32:27.0153506Z         
2025-11-25T03:32:27.0153899Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:27.0154588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:27.0155283Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:27.0155699Z         
2025-11-25T03:32:27.0156155Z         cluster=test-acc-tf-c-2465747067885210104 didn't reach desired state: IDLE,
2025-11-25T03:32:27.0156725Z         error: context deadline exceeded
2025-11-25T03:32:27.0614521Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10835.66s)
```

- 2025-11-26

### Error 2025-11-26T00:28:40+00:00
```
2025-11-26T00:28:40.0234587Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-26T00:30:27.5280374Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-26T00:31:12.5051920Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-26T00:31:12.5053605Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:31:12.504912836Z, ProjectID: 692649b3131e634a70c5ee92, Cluster name: test-acc-tf-c-6272985995350499198
2025-11-26T03:31:13.1003060Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-26T03:31:13.1003705Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-26T03:31:13.1004178Z         
2025-11-26T03:31:13.1004521Z         Error: Error in create
2025-11-26T03:31:13.1004764Z         
2025-11-26T03:31:13.1005170Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:31:13.1006391Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:31:13.1007032Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:31:13.1007449Z         
2025-11-26T03:31:13.1007901Z         cluster=test-acc-tf-c-6272985995350499198 didn't reach desired state: IDLE,
2025-11-26T03:31:13.1008624Z         error: context deadline exceeded
2025-11-26T03:31:13.1497288Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10845.64s)
```

- 2025-11-27

### Error 2025-11-27T00:28:26+00:00
```
2025-11-27T00:28:26.5459500Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-27T00:30:06.4993635Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-27T00:30:26.4881746Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-27T00:30:26.4883916Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:26.487818764Z, ProjectID: 69279b273c4d827e6c428b5e, Cluster name: test-acc-tf-c-970858724294581445
2025-11-27T03:30:27.0985149Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-11-27T03:30:27.0985691Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-11-27T03:30:27.0986166Z         
2025-11-27T03:30:27.0986617Z         Error: Error in create
2025-11-27T03:30:27.0986933Z         
2025-11-27T03:30:27.0987343Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:27.0988199Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:27.0988899Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:27.0989304Z         
2025-11-27T03:30:27.0989744Z         cluster=test-acc-tf-c-970858724294581445 didn't reach desired state: IDLE,
2025-11-27T03:30:27.0990438Z         error: context deadline exceeded
2025-11-27T03:30:27.1430978Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (10820.65s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 25 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 24 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 26 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 27 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 27 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
