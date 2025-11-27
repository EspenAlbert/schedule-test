# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 12)
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | flaky_500 | 12773.01s
[2025-11-11 00:29](#error-2025-11-11t0029110000) |  | dev | flaky_400 | 34.05s
[2025-11-19 00:28](#error-2025-11-19t0028580000) |  | dev | timeout | 10818.04s
[2025-11-19 09:30](#error-2025-11-19t0930030000) |  | dev | timeout | 10837.07s
[2025-11-20 00:28](#error-2025-11-20t0028010000) |  | dev | timeout | 10833.07s
[2025-11-20 10:01](#error-2025-11-20t1001560000) |  | dev | timeout | 10832.05s
[2025-11-21 00:28](#error-2025-11-21t0028280000) |  | dev | timeout | 10828.07s
[2025-11-22 00:26](#error-2025-11-22t0026560000) |  | dev | timeout | 10834.02s
[2025-11-24 00:30](#error-2025-11-24t0030090000) |  | dev | timeout | 10838.03s
[2025-11-25 00:27](#error-2025-11-25t0027220000) |  | dev | timeout | 10832.09s
[2025-11-26 00:28](#error-2025-11-26t0028400000) |  | dev | timeout | 10837.08s
[2025-11-27 00:28](#error-2025-11-27t0028260000) |  | dev | timeout | 10858.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 43 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3902744Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T00:29:52.4845457Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T00:30:22.4665156Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T00:30:22.4666986Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:22.466220793Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-5680553603968263238
2025-10-30T04:02:42.7619786Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T04:02:42.7620700Z     resource_test.go:363: Step 2/4 error: Error running apply: exit status 1
2025-10-30T04:02:42.7621294Z         
2025-10-30T04:02:42.7621911Z         Error: Error in delete
2025-10-30T04:02:42.7622346Z         
2025-10-30T04:02:42.7623074Z         cluster=test-acc-tf-c-5680553603968263238 didn't reach desired state:
2025-10-30T04:02:42.7624119Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:02:42.7624873Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:02:43.1479974Z    test_name=TestAccClusterAdvancedCluster_advancedConfig test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest1775876691 test_step_number=2
2025-10-30T04:02:43.1481296Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:02:43.1482289Z         
2025-10-30T04:02:43.1482802Z         Error: Error in delete
2025-10-30T04:02:43.1483191Z         
2025-10-30T04:02:43.1483750Z         cluster name: test-acc-tf-c-5680553603968263238, API error details:
2025-10-30T04:02:43.1484725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b122abf4374f32996ea1/clusters/test-acc-tf-c-5680553603968263238
2025-10-30T04:02:43.1485500Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T04:02:43.1486107Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T04:02:43.1486783Z         test-acc-tf-c-5680553603968263238 has already been requested for deletion.
2025-10-30T04:02:43.1487480Z         Reason: Bad Request. Params: [test-acc-tf-c-5680553603968263238],
2025-10-30T04:02:43.1487986Z         BadRequestDetail: 
2025-10-30T04:02:43.1488485Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (12773.10s)
```

- 2025-10-31 PASS 35 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 38 minutes
- 2025-11-04 PASS 39 minutes
- 2025-11-05
  - PASS 39 minutes
  - PASS 32 minutes
- 2025-11-06 PASS 48 minutes
- 2025-11-07 PASS 37 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 33 minutes
- 2025-11-11

### Error 2025-11-11T00:29:11+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-11-11T00:29:11.793000+00:00-TestAccClusterAdvancedCluster_advancedConfig',confidence=1.0,ts_when='16 days ago')

```
2025-11-11T00:29:11.7933864Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-11T00:31:00.3734944Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-11T00:31:30.3620070Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-11T00:31:30.3621816Z     pre_check.go:46: Time before creating cluster: 2025-11-11T00:31:30.361664279Z, ProjectID: 69128357e1c69e6c7a213373, Cluster name: test-acc-tf-c-1881521552076711038
2025-11-11T00:31:31.0510972Z   
2025-11-11T00:31:31.0511473Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-11T00:31:31.0511842Z         
2025-11-11T00:31:31.0512248Z         Error: Error in create
2025-11-11T00:31:31.0512509Z         
2025-11-11T00:31:31.0512838Z           with mongodbatlas_advanced_cluster.test,
2025-11-11T00:31:31.0514093Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-11T00:31:31.0514712Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-11T00:31:31.0515208Z         
2025-11-11T00:31:31.0534503Z         cluster name: test-acc-tf-c-1881521552076711038, API error details:
2025-11-11T00:31:31.0535640Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69128357e1c69e6c7a213373/clusters
2025-11-11T00:31:31.0536893Z         POST: HTTP 403 Forbidden (Error code:
2025-11-11T00:31:31.0537822Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-11T00:31:31.0539041Z         Configuration. Contains selections that are unavailable due to your
2025-11-11T00:31:31.0540126Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-11T00:31:31.0540905Z         BadRequestDetail: 
2025-11-11T00:31:31.0930603Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (34.53s)
```

- 2025-11-12 PASS 36 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 41 minutes
- 2025-11-15 PASS 32 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 37 minutes
- 2025-11-18 PASS 32 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:58+00:00
```
2025-11-19T00:28:58.0406462Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T00:35:20.7302192Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T00:35:35.7307620Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T00:35:35.7309524Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:35:35.730402847Z, ProjectID: 691d0f4aa9e010496ad06715, Cluster name: test-acc-tf-c-6508756832082949258
2025-11-19T03:35:36.4316096Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T03:35:36.4316841Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-19T03:35:36.4317344Z         
2025-11-19T03:35:36.4317621Z         Error: Error in create
2025-11-19T03:35:36.4317938Z         
2025-11-19T03:35:36.4318403Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:36.4319152Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:36.4319852Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:36.4320162Z         
2025-11-19T03:35:36.4320707Z         cluster=test-acc-tf-c-6508756832082949258 didn't reach desired state: IDLE,
2025-11-19T03:35:36.4321163Z         error: context deadline exceeded
2025-11-19T03:35:36.4789084Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10818.44s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:03+00:00
```
2025-11-19T09:30:03.0196265Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T09:31:55.5693134Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T09:32:30.5615031Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T09:32:30.5616473Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:30.561220105Z, ProjectID: 691d8e1b5ab64e7c5567626e, Cluster name: test-acc-tf-c-6098193234452696052
2025-11-19T12:32:31.2548263Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-19T12:32:31.2549121Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-19T12:32:31.2549738Z         
2025-11-19T12:32:31.2550171Z         Error: Error in create
2025-11-19T12:32:31.2550563Z         
2025-11-19T12:32:31.2551029Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:31.2552054Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:31.2552857Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:31.2553433Z         
2025-11-19T12:32:31.2554005Z         cluster=test-acc-tf-c-6098193234452696052 didn't reach desired state: IDLE,
2025-11-19T12:32:31.2554577Z         error: context deadline exceeded
2025-11-19T12:32:31.2979861Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10837.74s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:01+00:00
```
2025-11-20T00:28:01.5633455Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T00:29:55.6000440Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T00:30:25.5750001Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T00:30:25.5751601Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:25.574691383Z, ProjectID: 691e6091f41e983fa169881a, Cluster name: test-acc-tf-c-8583349949612318093
2025-11-20T03:30:26.2438401Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T03:30:26.2439159Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-20T03:30:26.2439692Z         
2025-11-20T03:30:26.2440117Z         Error: Error in create
2025-11-20T03:30:26.2440505Z         
2025-11-20T03:30:26.2441040Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:26.2441945Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:26.2442757Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:26.2443316Z         
2025-11-20T03:30:26.2443943Z         cluster=test-acc-tf-c-8583349949612318093 didn't reach desired state: IDLE,
2025-11-20T03:30:26.2444647Z         error: context deadline exceeded
2025-11-20T03:30:26.2926437Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10833.73s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:56+00:00
```
2025-11-20T10:01:56.0818359Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T10:03:33.6956028Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T10:04:03.6621990Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T10:04:03.6623767Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:04:03.661879616Z, ProjectID: 691ee7142b50f06feba62559, Cluster name: test-acc-tf-c-2545693152776135744
2025-11-20T13:04:04.2821590Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-20T13:04:04.2822276Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-20T13:04:04.2822733Z         
2025-11-20T13:04:04.2823123Z         Error: Error in create
2025-11-20T13:04:04.2823386Z         
2025-11-20T13:04:04.2823836Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:04:04.2824605Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:04:04.2825336Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:04:04.2825680Z         
2025-11-20T13:04:04.2826227Z         cluster=test-acc-tf-c-2545693152776135744 didn't reach desired state: IDLE,
2025-11-20T13:04:04.2826821Z         error: context deadline exceeded
2025-11-20T13:04:04.3324449Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10832.49s)
```

- 2025-11-21

### Error 2025-11-21T00:28:28+00:00
```
2025-11-21T00:28:28.2290278Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-21T00:30:22.6551490Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-21T00:30:47.6495311Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-21T00:30:47.6497161Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:30:47.649279754Z, ProjectID: 691fb22c238ce57ddce440c5, Cluster name: test-acc-tf-c-7191646594833132495
2025-11-21T03:30:48.2722291Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-21T03:30:48.2722903Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-21T03:30:48.2723341Z         
2025-11-21T03:30:48.2723598Z         Error: Error in create
2025-11-21T03:30:48.2723944Z         
2025-11-21T03:30:48.2724268Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:48.2725015Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:48.2725709Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:48.2726017Z         
2025-11-21T03:30:48.2726776Z         cluster=test-acc-tf-c-7191646594833132495 didn't reach desired state: IDLE,
2025-11-21T03:30:48.2727432Z         error: context deadline exceeded
2025-11-21T03:30:48.3201398Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10828.66s)
```

- 2025-11-22

### Error 2025-11-22T00:26:56+00:00
```
2025-11-22T00:26:56.2524878Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-22T00:28:42.9643855Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-22T00:29:12.9418148Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-22T00:29:12.9420155Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:12.941515042Z, ProjectID: 692103504aaa8d39323282b3, Cluster name: test-acc-tf-c-3134814692314832240
2025-11-22T03:29:13.5573221Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-22T03:29:13.5574127Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-22T03:29:13.5574783Z         
2025-11-22T03:29:13.5575220Z         Error: Error in create
2025-11-22T03:29:13.5575642Z         
2025-11-22T03:29:13.5576058Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:29:13.5576742Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:29:13.5577347Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:29:13.5577780Z         
2025-11-22T03:29:13.5578238Z         cluster=test-acc-tf-c-3134814692314832240 didn't reach desired state: IDLE,
2025-11-22T03:29:13.5578872Z         error: context deadline exceeded
2025-11-22T03:29:13.6006801Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10834.25s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:09+00:00
```
2025-11-24T00:30:09.5166671Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-24T00:33:24.2027628Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-24T00:33:59.1861270Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-24T00:33:59.1862973Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:33:59.185896148Z, ProjectID: 6923a71121519f56cb85fc10, Cluster name: test-acc-tf-c-7596377167203913525
2025-11-24T03:33:59.8083752Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-24T03:33:59.8085230Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-24T03:33:59.8085835Z         
2025-11-24T03:33:59.8086109Z         Error: Error in create
2025-11-24T03:33:59.8086470Z         
2025-11-24T03:33:59.8086999Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:59.8087750Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:59.8088734Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:59.8089110Z         
2025-11-24T03:33:59.8089665Z         cluster=test-acc-tf-c-7596377167203913525 didn't reach desired state: IDLE,
2025-11-24T03:33:59.8090462Z         error: context deadline exceeded
2025-11-24T03:33:59.8573719Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10838.33s)
```

- 2025-11-25

### Error 2025-11-25T00:27:22+00:00
```
2025-11-25T00:27:22.3505142Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-25T00:31:51.3984723Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-25T00:32:21.3992915Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-25T00:32:21.3994260Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:21.398993478Z, ProjectID: 6924f7eadef656331da183f7, Cluster name: test-acc-tf-c-701416910018771290
2025-11-25T03:32:22.0053683Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-25T03:32:22.0054389Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-25T03:32:22.0054847Z         
2025-11-25T03:32:22.0055192Z         Error: Error in create
2025-11-25T03:32:22.0055450Z         
2025-11-25T03:32:22.0055882Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:22.0056653Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:22.0057331Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:22.0057717Z         
2025-11-25T03:32:22.0058269Z         cluster=test-acc-tf-c-701416910018771290 didn't reach desired state: IDLE,
2025-11-25T03:32:22.0058756Z         error: context deadline exceeded
2025-11-25T03:32:22.0552621Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10832.90s)
```

- 2025-11-26

### Error 2025-11-26T00:28:40+00:00
```
2025-11-26T00:28:40.0237737Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-26T00:30:27.5278416Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-26T00:31:02.5034673Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-26T00:31:02.5036528Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:31:02.503234676Z, ProjectID: 692649b8131e634a70c6042d, Cluster name: test-acc-tf-c-4267888295971538218
2025-11-26T03:31:03.0733731Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-26T03:31:03.0734660Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-26T03:31:03.0735270Z         
2025-11-26T03:31:03.0735729Z         Error: Error in create
2025-11-26T03:31:03.0735987Z         
2025-11-26T03:31:03.0736308Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:31:03.0737045Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:31:03.0737645Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:31:03.0738023Z         
2025-11-26T03:31:03.0738708Z         cluster=test-acc-tf-c-4267888295971538218 didn't reach desired state: IDLE,
2025-11-26T03:31:03.0739192Z         error: context deadline exceeded
2025-11-26T03:31:03.1199677Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10837.82s)
```

- 2025-11-27

### Error 2025-11-27T00:28:26+00:00
```
2025-11-27T00:28:26.5461729Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-27T00:30:06.5016917Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-27T00:31:01.4959015Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-27T00:31:01.4961731Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:31:01.495549449Z, ProjectID: 69279b2ab358b3221e8cc1c8, Cluster name: test-acc-tf-c-882341052471288289
2025-11-27T03:31:02.1182085Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-27T03:31:02.1182773Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-27T03:31:02.1183324Z         
2025-11-27T03:31:02.1183624Z         Error: Error in create
2025-11-27T03:31:02.1184023Z         
2025-11-27T03:31:02.1184471Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:31:02.1185312Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:31:02.1186075Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:31:02.1186513Z         
2025-11-27T03:31:02.1187043Z         cluster=test-acc-tf-c-882341052471288289 didn't reach desired state: IDLE,
2025-11-27T03:31:02.1187614Z         error: context deadline exceeded
2025-11-27T03:31:02.1675788Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10858.20s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 32 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 31 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 33 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 35 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 37 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
