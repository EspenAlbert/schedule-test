# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | flaky_500 | 12764.08s
[2025-11-19 00:29](#error-2025-11-19t0029000000) |  | dev | timeout | 10805.08s
[2025-11-19 09:30](#error-2025-11-19t0930050000) |  | dev | timeout | 10825.07s
[2025-11-20 00:28](#error-2025-11-20t0028040000) |  | dev | timeout | 10825.07s
[2025-11-20 10:01](#error-2025-11-20t1001570000) |  | dev | timeout | 10825.07s
[2025-11-21 00:28](#error-2025-11-21t0028310000) |  | dev | timeout | 10820.07s
[2025-11-22 00:26](#error-2025-11-22t0026590000) |  | dev | timeout | 10825.06s
[2025-11-24 00:30](#error-2025-11-24t0030120000) |  | dev | timeout | 10830.06s
[2025-11-25 00:27](#error-2025-11-25t0027240000) |  | dev | timeout | 10825.07s
[2025-11-26 00:28](#error-2025-11-26t0028420000) |  | dev | timeout | 10830.06s
[2025-11-27 00:28](#error-2025-11-27t0028290000) |  | dev | timeout | 10850.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 42 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8257711Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T00:29:52.4844647Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T00:30:17.4648906Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T00:30:17.4650288Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:17.46459483Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-9003881928093157054
2025-10-30T04:02:36.9559099Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-10-30T04:02:36.9559704Z     resource_test.go:410: Step 2/3 error: Error running apply: exit status 1
2025-10-30T04:02:36.9560118Z         
2025-10-30T04:02:36.9560445Z         Error: Error in delete
2025-10-30T04:02:36.9560730Z         
2025-10-30T04:02:36.9561207Z         cluster=test-acc-tf-c-9003881928093157054 didn't reach desired state:
2025-10-30T04:02:36.9562126Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:02:36.9562671Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:02:37.3250023Z    test_step_number=2 test_working_directory=/tmp/plugintest129278947 test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform
2025-10-30T04:02:37.3251205Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:02:37.3252012Z         
2025-10-30T04:02:37.3252323Z         Error: Error in delete
2025-10-30T04:02:37.3252611Z         
2025-10-30T04:02:37.3253068Z         cluster name: test-acc-tf-c-9003881928093157054, API error details:
2025-10-30T04:02:37.3254003Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b122abf4374f32996ea1/clusters/test-acc-tf-c-9003881928093157054
2025-10-30T04:02:37.3254707Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T04:02:37.3255208Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T04:02:37.3255836Z         test-acc-tf-c-9003881928093157054 has already been requested for deletion.
2025-10-30T04:02:37.3256478Z         Reason: Bad Request. Params: [test-acc-tf-c-9003881928093157054],
2025-10-30T04:02:37.3256928Z         BadRequestDetail: 
2025-10-30T04:02:37.3257320Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (12764.84s)
```

- 2025-10-31 PASS 32 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 34 minutes
- 2025-11-04 PASS 32 minutes
- 2025-11-05
  - PASS 35 minutes
  - PASS 30 minutes
- 2025-11-06 PASS 39 minutes
- 2025-11-07 PASS 36 minutes
- 2025-11-08 PASS 56 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 28 minutes
- 2025-11-11 PASS 28 minutes
- 2025-11-12 PASS 32 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 41 minutes
- 2025-11-15 PASS 30 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 33 minutes
- 2025-11-18 PASS 32 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:00+00:00
```
2025-11-19T00:29:00.7344200Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T00:35:20.7296695Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T00:35:25.7288361Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T00:35:25.7295112Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:35:25.72856282Z, ProjectID: 691d0f4aa9e010496ad06715, Cluster name: test-acc-tf-c-6484205062287442113
2025-11-19T03:35:26.4446236Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T03:35:26.4446880Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-19T03:35:26.4447403Z         
2025-11-19T03:35:26.4447738Z         Error: Error in create
2025-11-19T03:35:26.4448112Z         
2025-11-19T03:35:26.4448445Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:26.4449228Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:26.4449912Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:26.4450224Z         
2025-11-19T03:35:26.4450802Z         cluster=test-acc-tf-c-6484205062287442113 didn't reach desired state: IDLE,
2025-11-19T03:35:26.4451375Z         error: context deadline exceeded
2025-11-19T03:35:26.4937516Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10805.77s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:05+00:00
```
2025-11-19T09:30:05.0239735Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T09:31:55.5689981Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T09:32:20.5600569Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T09:32:20.5602386Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:20.559715929Z, ProjectID: 691d8e1b5ab64e7c5567626e, Cluster name: test-acc-tf-c-354803140689586991
2025-11-19T12:32:21.1710099Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-19T12:32:21.1710727Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-19T12:32:21.1711198Z         
2025-11-19T12:32:21.1711452Z         Error: Error in create
2025-11-19T12:32:21.1711830Z         
2025-11-19T12:32:21.1712305Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:21.1713050Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:21.1713863Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:21.1714270Z         
2025-11-19T12:32:21.1714712Z         cluster=test-acc-tf-c-354803140689586991 didn't reach desired state: IDLE,
2025-11-19T12:32:21.1715271Z         error: context deadline exceeded
2025-11-19T12:32:21.2228650Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10825.66s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:04+00:00
```
2025-11-20T00:28:04.5873226Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T00:29:55.5999754Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T00:30:20.5741236Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T00:30:20.5742400Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:20.573865569Z, ProjectID: 691e6091f41e983fa169881a, Cluster name: test-acc-tf-c-2036378089598861373
2025-11-20T03:30:21.2399061Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T03:30:21.2399687Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-20T03:30:21.2400133Z         
2025-11-20T03:30:21.2400379Z         Error: Error in create
2025-11-20T03:30:21.2400673Z         
2025-11-20T03:30:21.2401031Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:21.2401690Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:21.2402302Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:21.2402595Z         
2025-11-20T03:30:21.2403161Z         cluster=test-acc-tf-c-2036378089598861373 didn't reach desired state: IDLE,
2025-11-20T03:30:21.2403616Z         error: context deadline exceeded
2025-11-20T03:30:21.2913830Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10825.71s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:57+00:00
```
2025-11-20T10:01:57.9361916Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T10:03:33.6955018Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T10:03:58.6619947Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T10:03:58.6621345Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:03:58.661721824Z, ProjectID: 691ee7142b50f06feba62559, Cluster name: test-acc-tf-c-2955172467243753068
2025-11-20T13:03:59.2975955Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-20T13:03:59.2976860Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-20T13:03:59.2977442Z         
2025-11-20T13:03:59.2977796Z         Error: Error in create
2025-11-20T13:03:59.2978243Z         
2025-11-20T13:03:59.2978749Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:59.2979383Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:59.2979970Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:59.2980288Z         
2025-11-20T13:03:59.2980733Z         cluster=test-acc-tf-c-2955172467243753068 didn't reach desired state: IDLE,
2025-11-20T13:03:59.2981194Z         error: context deadline exceeded
2025-11-20T13:03:59.3432300Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10825.65s)
```

- 2025-11-21

### Error 2025-11-21T00:28:31+00:00
```
2025-11-21T00:28:31.2198856Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-21T00:30:22.6550831Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-21T00:30:42.6491854Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-21T00:30:42.6493454Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:30:42.648906277Z, ProjectID: 691fb22c238ce57ddce440c5, Cluster name: test-acc-tf-c-61993749154388021
2025-11-21T03:30:43.3017409Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-21T03:30:43.3018275Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-21T03:30:43.3018884Z         
2025-11-21T03:30:43.3019289Z         Error: Error in create
2025-11-21T03:30:43.3019673Z         
2025-11-21T03:30:43.3020210Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:43.3021306Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:43.3022311Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:43.3022822Z         
2025-11-21T03:30:43.3023564Z         cluster=test-acc-tf-c-61993749154388021 didn't reach desired state: IDLE,
2025-11-21T03:30:43.3024334Z         error: context deadline exceeded
2025-11-21T03:30:43.3481086Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10820.69s)
```

- 2025-11-22

### Error 2025-11-22T00:26:59+00:00
```
2025-11-22T00:26:59.8541927Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-22T00:28:42.9643129Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-22T00:29:07.9406280Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-22T00:29:07.9407979Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:07.940311817Z, ProjectID: 692103504aaa8d39323282b3, Cluster name: test-acc-tf-c-445515660485670201
2025-11-22T03:29:08.5095505Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-22T03:29:08.5096137Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-22T03:29:08.5096628Z         
2025-11-22T03:29:08.5096890Z         Error: Error in create
2025-11-22T03:29:08.5097243Z         
2025-11-22T03:29:08.5097584Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:29:08.5098359Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:29:08.5099063Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:29:08.5099381Z         
2025-11-22T03:29:08.5099939Z         cluster=test-acc-tf-c-445515660485670201 didn't reach desired state: IDLE,
2025-11-22T03:29:08.5100605Z         error: context deadline exceeded
2025-11-22T03:29:08.5620821Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10825.61s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:12+00:00
```
2025-11-24T00:30:12.1837365Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-24T00:33:24.2026990Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-24T00:33:54.1860935Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-24T00:33:54.1862198Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:33:54.185836921Z, ProjectID: 6923a71121519f56cb85fc10, Cluster name: test-acc-tf-c-8255404646425699206
2025-11-24T03:33:54.7361362Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-24T03:33:54.7361899Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-24T03:33:54.7362633Z         
2025-11-24T03:33:54.7363025Z         Error: Error in create
2025-11-24T03:33:54.7363282Z         
2025-11-24T03:33:54.7363731Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:54.7364899Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:54.7365617Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:54.7365948Z         
2025-11-24T03:33:54.7366494Z         cluster=test-acc-tf-c-8255404646425699206 didn't reach desired state: IDLE,
2025-11-24T03:33:54.7367076Z         error: context deadline exceeded
2025-11-24T03:33:54.7817961Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10830.59s)
```

- 2025-11-25

### Error 2025-11-25T00:27:24+00:00
```
2025-11-25T00:27:24.5901091Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-25T00:31:51.3983597Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-25T00:32:16.3986334Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-25T00:32:16.3987690Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:16.398315122Z, ProjectID: 6924f7eadef656331da183f7, Cluster name: test-acc-tf-c-2336861065359102971
2025-11-25T03:32:17.0190609Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-25T03:32:17.0191397Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-25T03:32:17.0191790Z         
2025-11-25T03:32:17.0192055Z         Error: Error in create
2025-11-25T03:32:17.0192302Z         
2025-11-25T03:32:17.0192630Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:17.0193261Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:17.0193849Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:17.0194238Z         
2025-11-25T03:32:17.0194728Z         cluster=test-acc-tf-c-2336861065359102971 didn't reach desired state: IDLE,
2025-11-25T03:32:17.0195313Z         error: context deadline exceeded
2025-11-25T03:32:17.0634996Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10825.67s)
```

- 2025-11-26

### Error 2025-11-26T00:28:42+00:00
```
2025-11-26T00:28:42.2344363Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-26T00:30:27.5277771Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-26T00:30:57.5028982Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-26T00:30:57.5030996Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:30:57.50263751Z, ProjectID: 692649b8131e634a70c6042d, Cluster name: test-acc-tf-c-8407849365836426676
2025-11-26T03:30:58.0597087Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-26T03:30:58.0597769Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-26T03:30:58.0598172Z         
2025-11-26T03:30:58.0598711Z         Error: Error in create
2025-11-26T03:30:58.0599059Z         
2025-11-26T03:30:58.0599522Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:58.0600270Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:58.0600973Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:58.0601279Z         
2025-11-26T03:30:58.0601836Z         cluster=test-acc-tf-c-8407849365836426676 didn't reach desired state: IDLE,
2025-11-26T03:30:58.0602375Z         error: context deadline exceeded
2025-11-26T03:30:58.1051325Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10830.59s)
```

- 2025-11-27

### Error 2025-11-27T00:28:29+00:00
```
2025-11-27T00:28:29.0753115Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-11-27T00:30:06.5014999Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-11-27T00:30:56.4947805Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-27T00:30:56.4949321Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:56.494510207Z, ProjectID: 69279b2ab358b3221e8cc1c8, Cluster name: test-acc-tf-c-8013356819983999255
2025-11-27T03:30:57.1334132Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-11-27T03:30:57.1334883Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2025-11-27T03:30:57.1335440Z         
2025-11-27T03:30:57.1335700Z         Error: Error in create
2025-11-27T03:30:57.1336072Z         
2025-11-27T03:30:57.1336486Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:57.1337584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:57.1338559Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:57.1339025Z         
2025-11-27T03:30:57.1339771Z         cluster=test-acc-tf-c-8013356819983999255 didn't reach desired state: IDLE,
2025-11-27T03:30:57.1340783Z         error: context deadline exceeded
2025-11-27T03:30:57.1815480Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10850.69s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 29 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 29 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 29 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 32 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 33 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
