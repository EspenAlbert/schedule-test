# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | timeout | 11571.02s
[2025-11-19 00:28](#error-2025-11-19t0028580000) |  | dev | timeout | 10820.08s
[2025-11-19 09:30](#error-2025-11-19t0930030000) |  | dev | timeout | 10840.07s
[2025-11-20 00:28](#error-2025-11-20t0028010000) |  | dev | timeout | 10835.07s
[2025-11-20 10:01](#error-2025-11-20t1001560000) |  | dev | timeout | 10835.07s
[2025-11-21 00:28](#error-2025-11-21t0028280000) |  | dev | timeout | 10830.07s
[2025-11-22 00:26](#error-2025-11-22t0026560000) |  | dev | timeout | 10836.08s
[2025-11-24 00:30](#error-2025-11-24t0030090000) |  | dev | timeout | 10840.07s
[2025-11-25 00:27](#error-2025-11-25t0027220000) |  | dev | timeout | 10810.07s
[2025-11-26 00:28](#error-2025-11-26t0028400000) |  | dev | timeout | 10840.07s
[2025-11-27 00:28](#error-2025-11-27t0028260000) |  | dev | timeout | 10810.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 23 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3900963Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T00:29:52.4846448Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T00:30:27.4672141Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T00:30:27.4673963Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:27.466938878Z, ProjectID: 6902b11de2dc7470847b8fef, Cluster name: test-acc-tf-c-1853270400503789627
2025-10-30T03:42:43.7097019Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-30T03:42:43.7097803Z     resource_test.go:308: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:42:43.7098289Z         
2025-10-30T03:42:43.7098558Z         Error: Error in delete
2025-10-30T03:42:43.7098814Z         
2025-10-30T03:42:43.7099254Z         cluster=test-acc-tf-c-1853270400503789627 didn't reach desired state:
2025-10-30T03:42:43.7099913Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:42:43.7100392Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:42:43.7100870Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (11571.23s)
```

- 2025-10-31 PASS 21 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 16 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 18 minutes
- 2025-11-08 PASS 46 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 18 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 16 minutes
- 2025-11-13 PASS 30 minutes
- 2025-11-14 PASS 23 minutes
- 2025-11-15 PASS 16 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 18 minutes
- 2025-11-18 PASS 18 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:58+00:00
```
2025-11-19T00:28:58.0405140Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T00:35:20.7304798Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T00:35:40.7317157Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T00:35:40.7321314Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:35:40.731390345Z, ProjectID: 691d0f47a9e010496ad05166, Cluster name: test-acc-tf-c-8147242616107279170
2025-11-19T03:35:41.5167495Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T03:35:41.5168402Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-19T03:35:41.5169039Z         
2025-11-19T03:35:41.5169456Z         Error: Error in create
2025-11-19T03:35:41.5169864Z         
2025-11-19T03:35:41.5170424Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:41.5171259Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:41.5171889Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:41.5172201Z         
2025-11-19T03:35:41.5172767Z         cluster=test-acc-tf-c-8147242616107279170 didn't reach desired state: IDLE,
2025-11-19T03:35:41.5173236Z         error: context deadline exceeded
2025-11-19T03:35:41.5680633Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10820.84s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:03+00:00
```
2025-11-19T09:30:03.0195180Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T09:31:55.5694034Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T09:32:35.5624517Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T09:32:35.5626308Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:35.56212222Z, ProjectID: 691d8e154938dd1e70f60d87, Cluster name: test-acc-tf-c-8447953105515003216
2025-11-19T12:32:36.2613622Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-19T12:32:36.2614288Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-19T12:32:36.2614793Z         
2025-11-19T12:32:36.2615043Z         Error: Error in create
2025-11-19T12:32:36.2615401Z         
2025-11-19T12:32:36.2615727Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:36.2616499Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:36.2617195Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:36.2617505Z         
2025-11-19T12:32:36.2618052Z         cluster=test-acc-tf-c-8447953105515003216 didn't reach desired state: IDLE,
2025-11-19T12:32:36.2618612Z         error: context deadline exceeded
2025-11-19T12:32:36.3049020Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10840.74s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:01+00:00
```
2025-11-20T00:28:01.5632184Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T00:29:55.6001423Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T00:30:30.5750838Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T00:30:30.5752481Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:30.574768741Z, ProjectID: 691e608da0b6e4670df28de8, Cluster name: test-acc-tf-c-4906994383241138947
2025-11-20T03:30:31.2719235Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T03:30:31.2719931Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-20T03:30:31.2720324Z         
2025-11-20T03:30:31.2720602Z         Error: Error in create
2025-11-20T03:30:31.2720832Z         
2025-11-20T03:30:31.2721213Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:31.2721795Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:31.2722428Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:31.2722773Z         
2025-11-20T03:30:31.2723502Z         cluster=test-acc-tf-c-4906994383241138947 didn't reach desired state: IDLE,
2025-11-20T03:30:31.2724042Z         error: context deadline exceeded
2025-11-20T03:30:31.3170433Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10835.73s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:56+00:00
```
2025-11-20T10:01:56.0816734Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T10:03:33.6957207Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T10:04:08.6624832Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T10:04:08.6626565Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:04:08.66215366Z, ProjectID: 691ee710efafe847b127fc17, Cluster name: test-acc-tf-c-323684496171439164
2025-11-20T13:04:09.3361593Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-20T13:04:09.3362608Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-20T13:04:09.3363228Z         
2025-11-20T13:04:09.3363524Z         Error: Error in create
2025-11-20T13:04:09.3363800Z         
2025-11-20T13:04:09.3364127Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:04:09.3364818Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:04:09.3365535Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:04:09.3365883Z         
2025-11-20T13:04:09.3366654Z         cluster=test-acc-tf-c-323684496171439164 didn't reach desired state: IDLE,
2025-11-20T13:04:09.3367132Z         error: context deadline exceeded
2025-11-20T13:04:09.3821294Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10835.69s)
```

- 2025-11-21

### Error 2025-11-21T00:28:28+00:00
```
2025-11-21T00:28:28.2289205Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-21T00:30:22.6552259Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-21T00:30:52.6499784Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-21T00:30:52.6501483Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:30:52.649692689Z, ProjectID: 691fb229238ce57ddce4270e, Cluster name: test-acc-tf-c-6315364324891074477
2025-11-21T03:30:53.3059192Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-21T03:30:53.3060106Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-21T03:30:53.3060484Z         
2025-11-21T03:30:53.3060738Z         Error: Error in create
2025-11-21T03:30:53.3060983Z         
2025-11-21T03:30:53.3061305Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:53.3061953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:53.3062559Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:53.3062863Z         
2025-11-21T03:30:53.3063303Z         cluster=test-acc-tf-c-6315364324891074477 didn't reach desired state: IDLE,
2025-11-21T03:30:53.3063757Z         error: context deadline exceeded
2025-11-21T03:30:53.3498052Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10830.70s)
```

- 2025-11-22

### Error 2025-11-22T00:26:56+00:00
```
2025-11-22T00:26:56.2523883Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-22T00:28:42.9644654Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-22T00:29:17.9425168Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-22T00:29:17.9427005Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:29:17.942192477Z, ProjectID: 6921034ba2a1e670f5291801, Cluster name: test-acc-tf-c-8873736360162603902
2025-11-22T03:29:19.7314274Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-22T03:29:19.7314895Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-22T03:29:19.7315444Z         
2025-11-22T03:29:19.7315708Z         Error: Error in create
2025-11-22T03:29:19.7316096Z         
2025-11-22T03:29:19.7316478Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:29:19.7317323Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:29:19.7317921Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:29:19.7318234Z         
2025-11-22T03:29:19.7318787Z         cluster=test-acc-tf-c-8873736360162603902 didn't reach desired state: IDLE,
2025-11-22T03:29:19.7319340Z         error: context deadline exceeded
2025-11-22T03:29:19.7742578Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10836.82s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:09+00:00
```
2025-11-24T00:30:09.5165535Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-24T00:33:24.2028386Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-24T00:34:04.1862887Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-24T00:34:04.1865162Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:34:04.186023545Z, ProjectID: 6923a70ef47dc05918907815, Cluster name: test-acc-tf-c-6140013589255310273
2025-11-24T03:34:04.8372475Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-24T03:34:04.8373507Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-24T03:34:04.8374310Z         
2025-11-24T03:34:04.8374574Z         Error: Error in create
2025-11-24T03:34:04.8374829Z         
2025-11-24T03:34:04.8375282Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:34:04.8376145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:34:04.8377036Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:34:04.8377395Z         
2025-11-24T03:34:04.8377856Z         cluster=test-acc-tf-c-6140013589255310273 didn't reach desired state: IDLE,
2025-11-24T03:34:04.8378321Z         error: context deadline exceeded
2025-11-24T03:34:04.8891284Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10840.69s)
```

- 2025-11-25

### Error 2025-11-25T00:27:22+00:00
```
2025-11-25T00:27:22.3503982Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-25T00:31:51.3973584Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-25T00:32:01.3964327Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-25T00:32:01.3966216Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:01.396053828Z, ProjectID: 6924f7e62b3b85618cf8e299, Cluster name: test-acc-tf-c-1474962444203731510
2025-11-25T03:32:02.0858449Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-25T03:32:02.0859153Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-25T03:32:02.0859993Z         
2025-11-25T03:32:02.0860408Z         Error: Error in create
2025-11-25T03:32:02.0860728Z         
2025-11-25T03:32:02.0861157Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:02.0861867Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:02.0862549Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:02.0862974Z         
2025-11-25T03:32:02.0863425Z         cluster=test-acc-tf-c-1474962444203731510 didn't reach desired state: IDLE,
2025-11-25T03:32:02.0863997Z         error: context deadline exceeded
2025-11-25T03:32:02.1323434Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10810.74s)
```

- 2025-11-26

### Error 2025-11-26T00:28:40+00:00
```
2025-11-26T00:28:40.0236215Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-26T00:30:27.5279582Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-26T00:31:07.5046475Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-26T00:31:07.5047716Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:31:07.504350769Z, ProjectID: 692649b3131e634a70c5ee92, Cluster name: test-acc-tf-c-1203069256855306745
2025-11-26T03:31:08.1255631Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-26T03:31:08.1256392Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-26T03:31:08.1256899Z         
2025-11-26T03:31:08.1257192Z         Error: Error in create
2025-11-26T03:31:08.1257554Z         
2025-11-26T03:31:08.1257877Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:31:08.1258626Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:31:08.1259322Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:31:08.1259625Z         
2025-11-26T03:31:08.1260178Z         cluster=test-acc-tf-c-1203069256855306745 didn't reach desired state: IDLE,
2025-11-26T03:31:08.1260683Z         error: context deadline exceeded
2025-11-26T03:31:08.1677990Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10840.65s)
```

- 2025-11-27

### Error 2025-11-27T00:28:26+00:00
```
2025-11-27T00:28:26.5460785Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-27T00:30:06.4864439Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-27T00:30:16.4869788Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-27T00:30:16.4872388Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:16.486570608Z, ProjectID: 69279b273c4d827e6c428b5e, Cluster name: test-acc-tf-c-3659612032092551985
2025-11-27T03:30:17.1655226Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-11-27T03:30:17.1656262Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2025-11-27T03:30:17.1656893Z         
2025-11-27T03:30:17.1657320Z         Error: Error in create
2025-11-27T03:30:17.1657595Z         
2025-11-27T03:30:17.1657938Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:17.1658584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:17.1659308Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:17.1659622Z         
2025-11-27T03:30:17.1660321Z         cluster=test-acc-tf-c-3659612032092551985 didn't reach desired state: IDLE,
2025-11-27T03:30:17.1660891Z         error: context deadline exceeded
2025-11-27T03:30:17.2140811Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10810.73s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 14 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 17 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 20 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 19 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
