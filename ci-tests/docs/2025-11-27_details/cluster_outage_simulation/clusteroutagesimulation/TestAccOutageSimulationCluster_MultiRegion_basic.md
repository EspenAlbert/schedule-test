# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10)
Success rate: 68.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028000000) |  | dev | flaky_500 | 4196.06s
[2025-11-19 00:28](#error-2025-11-19t0028380000) |  | dev | timeout | 10815.07s
[2025-11-19 09:29](#error-2025-11-19t0929360000) |  | dev | timeout | 10815.07s
[2025-11-20 00:27](#error-2025-11-20t0027520000) |  | dev | timeout | 10815.07s
[2025-11-21 00:28](#error-2025-11-21t0028080000) |  | dev | timeout | 10810.07s
[2025-11-22 00:26](#error-2025-11-22t0026480000) |  | dev | timeout | 10815.08s
[2025-11-24 00:29](#error-2025-11-24t0029540000) |  | dev | timeout | 10805.07s
[2025-11-25 00:27](#error-2025-11-25t0027030000) |  | dev | timeout | 10815.07s
[2025-11-26 00:28](#error-2025-11-26t0028280000) |  | dev | timeout | 10805.09s
[2025-11-27 00:28](#error-2025-11-27t0028150000) |  | dev | timeout | 10810.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 53 minutes
- 2025-10-30

### Error 2025-10-30T00:28:00+00:00
```
2025-10-30T00:28:00.9400005Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T00:28:00.9415323Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T00:28:15.9473123Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T00:28:15.9474951Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:15.946984918Z, ProjectID: 6902b10fabf4374f32987fb9, Cluster name: test-acc-tf-c-2271139291488278286
2025-10-30T01:07:43.5688631Z    test_name=TestAccOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/b4ede200-2359-42dd-aaca-1e6f44b97830/terraform test_working_directory=/tmp/plugintest4276448167 test_step_number=1
2025-10-30T01:37:57.2140630Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-10-30T01:37:57.2141279Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-10-30T01:37:57.2141664Z         
2025-10-30T01:37:57.2143437Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (6902b10fabf4374f32987fb9), Cluster (test-acc-tf-c-2271139291488278286): timeout while waiting for state to become 'SIMULATING' (last state: 'START_REQUESTED', timeout: 25m0s)
2025-10-30T01:37:57.2145009Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-30T01:37:57.2145603Z         
2025-10-30T01:37:57.2146021Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-10-30T01:37:57.2146799Z           on terraform_plugin_test.tf line 64, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-10-30T01:37:57.2147534Z           64: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-10-30T01:37:57.2147907Z         
2025-10-30T01:37:57.5324486Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:37:57.5324937Z         
2025-10-30T01:37:57.5325196Z         Error: Error in delete
2025-10-30T01:37:57.5325447Z         
2025-10-30T01:37:57.5325862Z         cluster name: test-acc-tf-c-2271139291488278286, API error details:
2025-10-30T01:37:57.5326729Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b10fabf4374f32987fb9/clusters/test-acc-tf-c-2271139291488278286
2025-10-30T01:37:57.5327410Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T01:37:57.5327941Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-30T01:37:57.5328583Z         Detail: Cannot terminate cluster test-acc-tf-c-2271139291488278286 in project
2025-10-30T01:37:57.5329251Z         test-acc-tf-p-7494954675347226544 because it is undergoing a regional outage
2025-10-30T01:37:57.5329878Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-30T01:37:57.5330396Z         Request. Params: [test-acc-tf-c-2271139291488278286
2025-10-30T01:37:57.5330872Z         test-acc-tf-p-7494954675347226544], BadRequestDetail: 
2025-10-30T01:37:57.5331345Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (4196.59s)
```

- 2025-10-31 PASS 48 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 50 minutes
- 2025-11-04 PASS 44 minutes
- 2025-11-05
  - PASS 44 minutes
  - PASS 46 minutes
- 2025-11-06 PASS 47 minutes
- 2025-11-07 PASS 50 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 49 minutes
- 2025-11-11 PASS 42 minutes
- 2025-11-12 PASS 44 minutes
- 2025-11-13 PASS 59 minutes
- 2025-11-14 PASS 45 minutes
- 2025-11-15 PASS 50 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 43 minutes
- 2025-11-18 PASS 50 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:38+00:00
```
2025-11-19T00:28:38.8728775Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T00:28:38.8745948Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T00:28:53.8847549Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T00:28:53.8849580Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:28:53.884387936Z, ProjectID: 691d0f34b03baf562b966f27, Cluster name: test-acc-tf-c-7003460953757061321
2025-11-19T03:28:54.4939313Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T03:28:54.4940081Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-19T03:28:54.4940720Z         
2025-11-19T03:28:54.4941146Z         Error: Error in create
2025-11-19T03:28:54.4941509Z         
2025-11-19T03:28:54.4941885Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-19T03:28:54.4942602Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-19T03:28:54.4943275Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-19T03:28:54.4943633Z         
2025-11-19T03:28:54.4944097Z         cluster=test-acc-tf-c-7003460953757061321 didn't reach desired state: IDLE,
2025-11-19T03:28:54.4944570Z         error: context deadline exceeded
2025-11-19T03:28:54.5370291Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.66s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:29:36+00:00
```
2025-11-19T09:29:36.5871286Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T09:29:36.5888546Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T09:29:51.5923632Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T09:29:51.5925252Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:29:51.592050001Z, ProjectID: 691d8dfe5ab64e7c556718eb, Cluster name: test-acc-tf-c-6394099053639774215
2025-11-19T12:29:52.2394907Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-19T12:29:52.2395915Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-19T12:29:52.2396692Z         
2025-11-19T12:29:52.2397171Z         Error: Error in create
2025-11-19T12:29:52.2397642Z         
2025-11-19T12:29:52.2398322Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-19T12:29:52.2399668Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-19T12:29:52.2401071Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-19T12:29:52.2401590Z         
2025-11-19T12:29:52.2402274Z         cluster=test-acc-tf-c-6394099053639774215 didn't reach desired state: IDLE,
2025-11-19T12:29:52.2402976Z         error: context deadline exceeded
2025-11-19T12:29:52.2863347Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.70s)
```

- 2025-11-20

### Error 2025-11-20T00:27:52+00:00
```
2025-11-20T00:27:52.3954561Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-20T00:27:52.3971162Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-20T00:28:07.4078065Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-20T00:28:07.4079472Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:28:07.407550227Z, ProjectID: 691e6084f41e983fa168d6d6, Cluster name: test-acc-tf-c-198014717658878027
2025-11-20T03:28:08.0766071Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-20T03:28:08.0766818Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-20T03:28:08.0767438Z         
2025-11-20T03:28:08.0767942Z         Error: Error in create
2025-11-20T03:28:08.0768197Z         
2025-11-20T03:28:08.0768550Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-20T03:28:08.0769411Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-20T03:28:08.0770315Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-20T03:28:08.0770741Z         
2025-11-20T03:28:08.0771222Z         cluster=test-acc-tf-c-198014717658878027 didn't reach desired state: IDLE,
2025-11-20T03:28:08.0771678Z         error: context deadline exceeded
2025-11-20T03:28:08.1223084Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.73s)
```

- 2025-11-21

### Error 2025-11-21T00:28:08+00:00
```
2025-11-21T00:28:08.9091086Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-21T00:28:08.9100944Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-21T00:28:18.9139217Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-21T00:28:18.9141620Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:28:18.913587836Z, ProjectID: 691fb216238ce57ddce37d9c, Cluster name: test-acc-tf-c-8088732734416670072
2025-11-21T03:28:19.5838907Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-21T03:28:19.5839843Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-21T03:28:19.5840465Z         
2025-11-21T03:28:19.5840728Z         Error: Error in create
2025-11-21T03:28:19.5840970Z         
2025-11-21T03:28:19.5841331Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-21T03:28:19.5842117Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-21T03:28:19.5842934Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-21T03:28:19.5843267Z         
2025-11-21T03:28:19.5843708Z         cluster=test-acc-tf-c-8088732734416670072 didn't reach desired state: IDLE,
2025-11-21T03:28:19.5844165Z         error: context deadline exceeded
2025-11-21T03:28:19.6282676Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10810.72s)
```

- 2025-11-22

### Error 2025-11-22T00:26:48+00:00
```
2025-11-22T00:26:48.5129224Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-22T00:26:48.5139965Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-22T00:27:03.5246770Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-22T00:27:03.5248380Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:27:03.524386192Z, ProjectID: 69210345a2a1e670f528a455, Cluster name: test-acc-tf-c-2466061554210003980
2025-11-22T03:27:04.2357498Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-22T03:27:04.2358324Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-22T03:27:04.2358705Z         
2025-11-22T03:27:04.2359422Z         Error: Error in create
2025-11-22T03:27:04.2359916Z         
2025-11-22T03:27:04.2360536Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-22T03:27:04.2362297Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-22T03:27:04.2363371Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-22T03:27:04.2363840Z         
2025-11-22T03:27:04.2364330Z         cluster=test-acc-tf-c-2466061554210003980 didn't reach desired state: IDLE,
2025-11-22T03:27:04.2365110Z         error: context deadline exceeded
2025-11-22T03:27:04.2844204Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.77s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:29:54+00:00
```
2025-11-24T00:29:54.3112998Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-24T00:29:54.3123217Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-24T00:29:59.3163058Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-24T00:29:59.3167130Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:29:59.316011125Z, ProjectID: 6923a6ff21519f56cb854593, Cluster name: test-acc-tf-c-280985910855576424
2025-11-24T03:29:59.9965623Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-24T03:29:59.9966531Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-24T03:29:59.9967135Z         
2025-11-24T03:29:59.9967573Z         Error: Error in create
2025-11-24T03:29:59.9967976Z         
2025-11-24T03:29:59.9968590Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-24T03:29:59.9969857Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-24T03:29:59.9970984Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-24T03:29:59.9971733Z         
2025-11-24T03:29:59.9972498Z         cluster=test-acc-tf-c-280985910855576424 didn't reach desired state: IDLE,
2025-11-24T03:29:59.9973306Z         error: context deadline exceeded
2025-11-24T03:30:00.0432492Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10805.73s)
```

- 2025-11-25

### Error 2025-11-25T00:27:03+00:00
```
2025-11-25T00:27:03.0180667Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-25T00:27:03.0194699Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-25T00:27:18.0273788Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-25T00:27:18.0275682Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:27:18.027062261Z, ProjectID: 6924f7d32b3b85618cf825dd, Cluster name: test-acc-tf-c-5274857844550075232
2025-11-25T03:27:18.7056132Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-25T03:27:18.7056771Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-25T03:27:18.7057136Z         
2025-11-25T03:27:18.7057712Z         Error: Error in create
2025-11-25T03:27:18.7057983Z         
2025-11-25T03:27:18.7058473Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-25T03:27:18.7059498Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-25T03:27:18.7060458Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-25T03:27:18.7060793Z         
2025-11-25T03:27:18.7061235Z         cluster=test-acc-tf-c-5274857844550075232 didn't reach desired state: IDLE,
2025-11-25T03:27:18.7061693Z         error: context deadline exceeded
2025-11-25T03:27:18.7499606Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10815.73s)
```

- 2025-11-26

### Error 2025-11-26T00:28:28+00:00
```
2025-11-26T00:28:28.5313183Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-26T00:28:28.5321041Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-26T00:28:33.5322975Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-26T00:28:33.5324974Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:28:33.531993877Z, ProjectID: 692649a9fa65867a021addef, Cluster name: test-acc-tf-c-4080182645330441838
2025-11-26T03:28:34.3570266Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-26T03:28:34.3571077Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-26T03:28:34.3571690Z         
2025-11-26T03:28:34.3572105Z         Error: Error in create
2025-11-26T03:28:34.3572517Z         
2025-11-26T03:28:34.3573094Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-26T03:28:34.3574287Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-26T03:28:34.3575428Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-26T03:28:34.3575996Z         
2025-11-26T03:28:34.3576955Z         cluster=test-acc-tf-c-4080182645330441838 didn't reach desired state: IDLE,
2025-11-26T03:28:34.3577683Z         error: context deadline exceeded
2025-11-26T03:28:34.4044663Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10805.87s)
```

- 2025-11-27

### Error 2025-11-27T00:28:15+00:00
```
2025-11-27T00:28:15.6787784Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-27T00:28:15.6797104Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-27T00:28:25.6840298Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-27T00:28:25.6842333Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:28:25.683726634Z, ProjectID: 69279b1d3c4d827e6c422735, Cluster name: test-acc-tf-c-5515225207109994209
2025-11-27T03:28:26.4151234Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-11-27T03:28:26.4151865Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-11-27T03:28:26.4152300Z         
2025-11-27T03:28:26.4152854Z         Error: Error in create
2025-11-27T03:28:26.4153143Z         
2025-11-27T03:28:26.4153599Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-11-27T03:28:26.4154384Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-11-27T03:28:26.4155162Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-11-27T03:28:26.4155494Z         
2025-11-27T03:28:26.4155947Z         cluster=test-acc-tf-c-5515225207109994209 didn't reach desired state: IDLE,
2025-11-27T03:28:26.4156399Z         error: context deadline exceeded
2025-11-27T03:28:26.4619770Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10810.78s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 46 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 47 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 51 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 50 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 50 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
