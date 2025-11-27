# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 11) TIMEOUT
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 17899.00s
[2025-11-17 00:29](#error-2025-11-17t0029100000) |  | dev | timeout | 11904.07s
[2025-11-19 00:28](#error-2025-11-19t0028580000) |  | dev | timeout | 10810.07s
[2025-11-19 09:30](#error-2025-11-19t0930030000) |  | dev | timeout | 10855.07s
[2025-11-20 00:28](#error-2025-11-20t0028010000) |  | dev | timeout | 10850.07s
[2025-11-20 10:01](#error-2025-11-20t1001560000) |  | dev | timeout | 10850.06s
[2025-11-21 00:28](#error-2025-11-21t0028280000) |  | dev | timeout | 10850.07s
[2025-11-22 00:26](#error-2025-11-22t0026560000) |  | dev | timeout | 10850.07s
[2025-11-24 00:30](#error-2025-11-24t0030090000) |  | dev | timeout | 10815.07s
[2025-11-25 00:27](#error-2025-11-25t0027220000) |  | dev | timeout | 10850.07s
[2025-11-26 00:28](#error-2025-11-26t0028400000) |  | dev | timeout | 10805.07s
[2025-11-27 00:28](#error-2025-11-27t0028260000) |  | dev | timeout | 10830.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS an hour
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3893173Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T00:29:52.4994157Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T00:30:42.4701806Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T00:30:42.4703550Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:42.46989372Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-8242992937060996441
2025-10-30T03:42:26.1080050Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-10-30T03:42:26.1080827Z     resource_test.go:113: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:42:26.1081296Z         
2025-10-30T03:42:26.1081784Z         Error: Error in update
2025-10-30T03:42:26.1082043Z         
2025-10-30T03:42:26.1082370Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:42:26.1083113Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:42:26.1083804Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:42:26.1084106Z         
2025-10-30T03:42:26.1084661Z         cluster=test-acc-tf-c-8242992937060996441 didn't reach desired state: IDLE,
2025-10-30T03:42:26.1085363Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:42:26.1085885Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:42:43.7096688Z   
2025-10-30T05:28:11.5680863Z 		TestAccClusterAdvancedCluster_pausedToUnpaused (4h58m19s)
2025-10-30T05:28:11.5681959Z 		TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4h58m19s)
2025-10-30T05:28:11.5683140Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h58m19s)
```

- 2025-10-31 PASS 58 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 59 minutes
- 2025-11-04 PASS 59 minutes
- 2025-11-05
  - PASS an hour
  - PASS 57 minutes
- 2025-11-06 PASS an hour
- 2025-11-07 PASS 59 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 52 minutes
- 2025-11-11 PASS 54 minutes
- 2025-11-12 PASS 58 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS an hour
- 2025-11-15 PASS 55 minutes
- 2025-11-16: MISSING
- 2025-11-17

### Error 2025-11-17T00:29:10+00:00
```
2025-11-17T00:29:10.1319154Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-17T00:30:45.9052750Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-17T00:30:47.1700633Z   diagnostic_detail=
2025-11-17T00:30:47.1708060Z    diagnostic_severity=ERROR diagnostic_summary="Missing Configuration for Required Attribute" diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-11-17T00:31:45.8567155Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-17T00:31:45.8569218Z     pre_check.go:46: Time before creating cluster: 2025-11-17T00:31:45.856431209Z, ProjectID: 691a6c51840cb2065b9b1bb8, Cluster name: test-acc-tf-c-4563864969966739571
2025-11-17T03:43:03.3617258Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-17T03:43:03.3617924Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-11-17T03:43:03.3618393Z         
2025-11-17T03:43:03.3618640Z         Error: Error in update
2025-11-17T03:43:03.3618979Z         
2025-11-17T03:43:03.3619314Z           with mongodbatlas_advanced_cluster.test,
2025-11-17T03:43:03.3620074Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-17T03:43:03.3620772Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-17T03:43:03.3621375Z         
2025-11-17T03:43:03.3621914Z         cluster=test-acc-tf-c-4563864969966739571 didn't reach desired state: IDLE,
2025-11-17T03:43:03.3622531Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-17T03:43:03.3622964Z         'UPDATING', timeout: 3h0m0s)
2025-11-17T03:49:10.6334209Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11904.73s)
```

- 2025-11-18 PASS 57 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:58+00:00
```
2025-11-19T00:28:58.0390051Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T00:35:20.7300396Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T00:35:30.7297382Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T00:35:30.7299110Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:35:30.729413988Z, ProjectID: 691d0f47a9e010496ad05166, Cluster name: test-acc-tf-c-2523518216339313782
2025-11-19T03:35:31.4223336Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T03:35:31.4224259Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-19T03:35:31.4224903Z         
2025-11-19T03:35:31.4225295Z         Error: Error in create
2025-11-19T03:35:31.4225696Z         
2025-11-19T03:35:31.4226358Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:31.4227217Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:31.4227924Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:31.4228233Z         
2025-11-19T03:35:31.4228752Z         cluster=test-acc-tf-c-2523518216339313782 didn't reach desired state: IDLE,
2025-11-19T03:35:31.4229423Z         error: context deadline exceeded
2025-11-19T03:35:31.4648197Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10810.74s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:03+00:00
```
2025-11-19T09:30:03.0187597Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T09:31:55.5697750Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T09:32:50.5641879Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T09:32:50.5643446Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:50.563897009Z, ProjectID: 691d8e154938dd1e70f60d87, Cluster name: test-acc-tf-c-8813733131941056151
2025-11-19T12:32:51.2086643Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-19T12:32:51.2087595Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-19T12:32:51.2088198Z         
2025-11-19T12:32:51.2088623Z         Error: Error in create
2025-11-19T12:32:51.2089048Z         
2025-11-19T12:32:51.2089578Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:51.2090502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:51.2091212Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:51.2091681Z         
2025-11-19T12:32:51.2092242Z         cluster=test-acc-tf-c-8813733131941056151 didn't reach desired state: IDLE,
2025-11-19T12:32:51.2092971Z         error: context deadline exceeded
2025-11-19T12:32:51.2543930Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10855.69s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:01+00:00
```
2025-11-20T00:28:01.5624895Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T00:29:55.6007423Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T00:30:45.5778545Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T00:30:45.5779760Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:45.577551769Z, ProjectID: 691e608da0b6e4670df28de8, Cluster name: test-acc-tf-c-3851066662262499878
2025-11-20T03:30:46.2354919Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T03:30:46.2355565Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-20T03:30:46.2356063Z         
2025-11-20T03:30:46.2356305Z         Error: Error in create
2025-11-20T03:30:46.2356607Z         
2025-11-20T03:30:46.2356903Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:46.2357577Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:46.2358212Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:46.2358510Z         
2025-11-20T03:30:46.2359005Z         cluster=test-acc-tf-c-3851066662262499878 didn't reach desired state: IDLE,
2025-11-20T03:30:46.2359435Z         error: context deadline exceeded
2025-11-20T03:30:46.2801651Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10850.69s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:56+00:00
```
2025-11-20T10:01:56.0803821Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T10:03:33.6963987Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T10:04:23.6653239Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T10:04:23.6655098Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:04:23.665057479Z, ProjectID: 691ee710efafe847b127fc17, Cluster name: test-acc-tf-c-3221874787910748969
2025-11-20T13:04:24.2751846Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-20T13:04:24.2752756Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-20T13:04:24.2753328Z         
2025-11-20T13:04:24.2753744Z         Error: Error in create
2025-11-20T13:04:24.2754133Z         
2025-11-20T13:04:24.2754678Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:04:24.2755749Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:04:24.2756743Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:04:24.2757254Z         
2025-11-20T13:04:24.2758200Z         cluster=test-acc-tf-c-3221874787910748969 didn't reach desired state: IDLE,
2025-11-20T13:04:24.2758960Z         error: context deadline exceeded
2025-11-20T13:04:24.3226358Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10850.63s)
```

- 2025-11-21

### Error 2025-11-21T00:28:28+00:00
```
2025-11-21T00:28:28.2282474Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-21T00:30:22.6893960Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-21T00:31:12.6519932Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-21T00:31:12.6521646Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:31:12.65171541Z, ProjectID: 691fb229238ce57ddce4270e, Cluster name: test-acc-tf-c-6595865928843614914
2025-11-21T03:31:13.2823836Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-21T03:31:13.2824413Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-21T03:31:13.2824864Z         
2025-11-21T03:31:13.2825262Z         Error: Error in create
2025-11-21T03:31:13.2825549Z         
2025-11-21T03:31:13.2826027Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:31:13.2826975Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:31:13.2827669Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:31:13.2828015Z         
2025-11-21T03:31:13.2828523Z         cluster=test-acc-tf-c-6595865928843614914 didn't reach desired state: IDLE,
2025-11-21T03:31:13.2829075Z         error: context deadline exceeded
2025-11-21T03:31:13.3305834Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10850.66s)
```

- 2025-11-22

### Error 2025-11-22T00:26:56+00:00
```
2025-11-22T00:26:56.2513787Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-22T00:28:42.9650084Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-22T00:29:32.9456401Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-22T00:29:32.9458479Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:32.945327291Z, ProjectID: 6921034ba2a1e670f5291801, Cluster name: test-acc-tf-c-2436361179959103958
2025-11-22T03:29:33.5735602Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-22T03:29:33.5736449Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-22T03:29:33.5737117Z         
2025-11-22T03:29:33.5737535Z         Error: Error in create
2025-11-22T03:29:33.5737955Z         
2025-11-22T03:29:33.5738553Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:29:33.5739593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:29:33.5740317Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:29:33.5740739Z         
2025-11-22T03:29:33.5741564Z         cluster=test-acc-tf-c-2436361179959103958 didn't reach desired state: IDLE,
2025-11-22T03:29:33.5742093Z         error: context deadline exceeded
2025-11-22T03:29:33.6185410Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10850.67s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:09+00:00
```
2025-11-24T00:30:09.5157392Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-24T00:33:24.2023285Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-24T00:33:39.1839318Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-24T00:33:39.1840948Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:33:39.183694768Z, ProjectID: 6923a70ef47dc05918907815, Cluster name: test-acc-tf-c-7279453321738388819
2025-11-24T03:33:39.7983567Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-24T03:33:39.7984388Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-24T03:33:39.7984772Z         
2025-11-24T03:33:39.7985024Z         Error: Error in create
2025-11-24T03:33:39.7985263Z         
2025-11-24T03:33:39.7985586Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:39.7986243Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:39.7986842Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:39.7987143Z         
2025-11-24T03:33:39.7987600Z         cluster=test-acc-tf-c-7279453321738388819 didn't reach desired state: IDLE,
2025-11-24T03:33:39.7988058Z         error: context deadline exceeded
2025-11-24T03:33:39.8467797Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10815.66s)
```

- 2025-11-25

### Error 2025-11-25T00:27:22+00:00
```
2025-11-25T00:27:22.3496984Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-25T00:31:51.4363085Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-25T00:32:41.4021713Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-25T00:32:41.4024174Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:41.401837022Z, ProjectID: 6924f7e62b3b85618cf8e299, Cluster name: test-acc-tf-c-8238504867186741691
2025-11-25T03:32:42.0678715Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-25T03:32:42.0679771Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-25T03:32:42.0680233Z         
2025-11-25T03:32:42.0680616Z         Error: Error in create
2025-11-25T03:32:42.0680882Z         
2025-11-25T03:32:42.0681355Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:42.0682444Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:42.0683307Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:42.0683807Z         
2025-11-25T03:32:42.0684281Z         cluster=test-acc-tf-c-8238504867186741691 didn't reach desired state: IDLE,
2025-11-25T03:32:42.0685000Z         error: context deadline exceeded
2025-11-25T03:32:42.1155721Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10850.71s)
```

- 2025-11-26

### Error 2025-11-26T00:28:40+00:00
```
2025-11-26T00:28:40.0228500Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-26T00:30:27.5005196Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-26T00:30:32.4998309Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-26T00:30:32.5000685Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:30:32.499455746Z, ProjectID: 692649b3131e634a70c5ee92, Cluster name: test-acc-tf-c-7748489755491838342
2025-11-26T03:30:33.0951037Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-26T03:30:33.0951929Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-26T03:30:33.0952417Z         
2025-11-26T03:30:33.0952670Z         Error: Error in create
2025-11-26T03:30:33.0952909Z         
2025-11-26T03:30:33.0953335Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:33.0954072Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:33.0954721Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:33.0955058Z         
2025-11-26T03:30:33.0955752Z         cluster=test-acc-tf-c-7748489755491838342 didn't reach desired state: IDLE,
2025-11-26T03:30:33.0956241Z         error: context deadline exceeded
2025-11-26T03:30:33.1477059Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10805.65s)
```

- 2025-11-27

### Error 2025-11-27T00:28:26+00:00
```
2025-11-27T00:28:26.5451794Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-27T00:30:06.5003785Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-27T00:30:36.4910136Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-27T00:30:36.4912121Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:36.490684715Z, ProjectID: 69279b273c4d827e6c428b5e, Cluster name: test-acc-tf-c-1989158572030207833
2025-11-27T03:30:37.1288068Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-11-27T03:30:37.1288873Z     resource_test.go:114: Step 1/4 error: Error running apply: exit status 1
2025-11-27T03:30:37.1289254Z         
2025-11-27T03:30:37.1289595Z         Error: Error in create
2025-11-27T03:30:37.1289921Z         
2025-11-27T03:30:37.1290586Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:37.1291634Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:37.1292327Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:37.1292625Z         
2025-11-27T03:30:37.1293179Z         cluster=test-acc-tf-c-1989158572030207833 didn't reach desired state: IDLE,
2025-11-27T03:30:37.1293736Z         error: context deadline exceeded
2025-11-27T03:30:37.1781441Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (10830.68s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 53 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 50 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 55 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 57 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 55 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
