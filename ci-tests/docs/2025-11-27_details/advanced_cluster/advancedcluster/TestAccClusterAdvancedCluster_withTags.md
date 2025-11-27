# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183abf4374f329a5592 | dev | flaky_500 | 1357.00s
[2025-11-19 00:29](#error-2025-11-19t0029000000) |  | dev | timeout | 11046.05s
[2025-11-19 09:30](#error-2025-11-19t0930050000) |  | dev | timeout | 11166.09s
[2025-11-20 00:28](#error-2025-11-20t0028040000) |  | dev | timeout | 11004.03s
[2025-11-20 10:01](#error-2025-11-20t1001570000) |  | dev | timeout | 11002.05s
[2025-11-21 00:28](#error-2025-11-21t0028310000) |  | dev | timeout | 11043.10s
[2025-11-22 00:26](#error-2025-11-22t0026590000) |  | dev | timeout | 11003.04s
[2025-11-24 00:30](#error-2025-11-24t0030120000) |  | dev | timeout | 11044.08s
[2025-11-25 00:27](#error-2025-11-25t0027240000) |  | dev | timeout | 10960.07s
[2025-11-26 00:28](#error-2025-11-26t0028420000) |  | dev | timeout | 10919.08s
[2025-11-27 00:28](#error-2025-11-27t0028290000) |  | dev | timeout | 10971.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8265070Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-10-30T00:29:52.4752497Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-10-30T00:52:29.4923267Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-10-30T00:52:29.4923902Z     resource_test.go:546: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:52:29.4924365Z         
2025-10-30T00:52:29.4924668Z         Error: error when destroying resource
2025-10-30T00:52:29.4924952Z         
2025-10-30T00:52:29.4925296Z         error deleting project (6902b183abf4374f329a5592):
2025-10-30T00:52:29.4925870Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183abf4374f329a5592
2025-10-30T00:52:29.4926481Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:52:29.4927066Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:52:29.4927461Z         BadRequestDetail: 
2025-10-30T00:52:29.4927774Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1357.02s)
```

- 2025-10-31 PASS 22 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 18 minutes
- 2025-11-05
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 43 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 15 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 19 minutes
- 2025-11-13 PASS 37 minutes
- 2025-11-14 PASS 20 minutes
- 2025-11-15 PASS 17 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 19 minutes
- 2025-11-18 PASS 18 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:00+00:00
```
2025-11-19T00:29:00.7351397Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-19T00:35:20.7770273Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-19T03:35:30.1739611Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-19T03:35:30.1740238Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-19T03:35:30.1740773Z         
2025-11-19T03:35:30.1741119Z         Error: Error in create
2025-11-19T03:35:30.1741369Z         
2025-11-19T03:35:30.1741686Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:30.1742318Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:30.1742918Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:30.1743224Z         
2025-11-19T03:35:30.1743671Z         cluster=test-acc-tf-c-6027239485098056000 didn't reach desired state: IDLE,
2025-11-19T03:35:30.1744238Z         error: context deadline exceeded
2025-11-19T03:35:30.1916770Z   
2025-11-19T03:39:27.2161418Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11046.45s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:05+00:00
```
2025-11-19T09:30:05.0246935Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-19T09:31:55.5604719Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-19T12:32:03.3456686Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-19T12:32:03.3457246Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-19T12:32:03.3457852Z         
2025-11-19T12:32:03.3458235Z         Error: Error in create
2025-11-19T12:32:03.3458650Z         
2025-11-19T12:32:03.3459210Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:03.3460366Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:03.3461432Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:03.3461752Z         
2025-11-19T12:32:03.3462336Z         cluster=test-acc-tf-c-7378538910656786669 didn't reach desired state: IDLE,
2025-11-19T12:32:03.3462803Z         error: context deadline exceeded
2025-11-19T12:32:03.9901636Z    test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard test_terraform_path=/home/runner/work/_temp/b9256067-5db0-451c-ae44-8b4d0f38c8f9/terraform test_working_directory=/tmp/plugintest2658884186 test_step_number=1
2025-11-19T12:38:02.5032405Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11166.94s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:04+00:00
```
2025-11-20T00:28:04.5878043Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-20T00:29:55.5951040Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-20T03:30:04.9884344Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-20T03:30:04.9885202Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-20T03:30:04.9885996Z         
2025-11-20T03:30:04.9886384Z         Error: Error in create
2025-11-20T03:30:04.9886767Z         
2025-11-20T03:30:04.9887297Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:04.9888436Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:04.9889382Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:04.9889882Z         
2025-11-20T03:30:04.9890614Z         cluster=test-acc-tf-c-3047615458096879539 didn't reach desired state: IDLE,
2025-11-20T03:30:04.9891350Z         error: context deadline exceeded
2025-11-20T03:30:05.9739543Z   
2025-11-20T03:33:19.8530034Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11004.27s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:57+00:00
```
2025-11-20T10:01:57.9368614Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-20T10:03:33.6836390Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-20T13:03:41.3132699Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-20T13:03:41.3133349Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-20T13:03:41.3133865Z         
2025-11-20T13:03:41.3134129Z         Error: Error in create
2025-11-20T13:03:41.3134457Z         
2025-11-20T13:03:41.3134823Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:41.3135595Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:41.3136328Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:41.3136657Z         
2025-11-20T13:03:41.3137243Z         cluster=test-acc-tf-c-3492761487036676173 didn't reach desired state: IDLE,
2025-11-20T13:03:41.3138189Z         error: context deadline exceeded
2025-11-20T13:03:41.6024646Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/0ded2230-e9ea-4553-8f7f-1463f6ed3fd4/terraform
2025-11-20T13:06:56.2245728Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11002.54s)
```

- 2025-11-21

### Error 2025-11-21T00:28:31+00:00
```
2025-11-21T00:28:31.2205490Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-21T00:30:22.6497904Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-21T03:30:30.9802512Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-21T03:30:30.9809835Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-21T03:30:30.9810485Z         
2025-11-21T03:30:30.9810914Z         Error: Error in create
2025-11-21T03:30:30.9811755Z         
2025-11-21T03:30:30.9812317Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:30.9813408Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:30.9814660Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:30.9815196Z         
2025-11-21T03:30:30.9815958Z         cluster=test-acc-tf-c-6280302980708645494 didn't reach desired state: IDLE,
2025-11-21T03:30:30.9816965Z         error: context deadline exceeded
2025-11-21T03:30:31.0430760Z    test_terraform_path=/home/runner/work/_temp/985d4590-f2ee-4e18-b7f2-13295b78d6f0/terraform
2025-11-21T03:34:26.6061054Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11043.96s)
```

- 2025-11-22

### Error 2025-11-22T00:26:59+00:00
```
2025-11-22T00:26:59.8547572Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-22T00:28:42.9595029Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-22T03:28:51.6037066Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-22T03:28:51.6037657Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-22T03:28:51.6038040Z         
2025-11-22T03:28:51.6038298Z         Error: Error in create
2025-11-22T03:28:51.6038631Z         
2025-11-22T03:28:51.6038959Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:51.6039814Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:51.6040587Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:51.6040993Z         
2025-11-22T03:28:51.6041774Z         cluster=test-acc-tf-c-7661313458922436931 didn't reach desired state: IDLE,
2025-11-22T03:28:51.6042389Z         error: context deadline exceeded
2025-11-22T03:28:51.7863084Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-22T03:32:06.3755105Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11003.43s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:12+00:00
```
2025-11-24T00:30:12.1845882Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-24T00:33:24.2023976Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-24T03:33:33.2536977Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-24T03:33:33.2537673Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-24T03:33:33.2538108Z         
2025-11-24T03:33:33.2538521Z         Error: Error in create
2025-11-24T03:33:33.2538775Z         
2025-11-24T03:33:33.2539841Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:33.2540985Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:33.2541883Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:33.2542356Z         
2025-11-24T03:33:33.2543156Z         cluster=test-acc-tf-c-1676972230666847899 didn't reach desired state: IDLE,
2025-11-24T03:33:33.2543961Z         error: context deadline exceeded
2025-11-24T03:33:33.3056875Z   
2025-11-24T03:37:28.9662427Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11044.78s)
```

- 2025-11-25

### Error 2025-11-25T00:27:24+00:00
```
2025-11-25T00:27:24.5906383Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-25T00:31:51.3998822Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-25T03:31:58.1152183Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-25T03:31:58.1152879Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-25T03:31:58.1153320Z         
2025-11-25T03:31:58.1153588Z         Error: Error in create
2025-11-25T03:31:58.1153947Z         
2025-11-25T03:31:58.1154429Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:58.1155181Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:58.1155905Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:58.1156288Z         
2025-11-25T03:31:58.1156817Z         cluster=test-acc-tf-c-7418263367973275193 didn't reach desired state: IDLE,
2025-11-25T03:31:58.1157398Z         error: context deadline exceeded
2025-11-25T03:31:58.7240668Z    test_name=TestAccClusterAdvancedCluster_withLabels test_terraform_path=/home/runner/work/_temp/e616dc9d-8531-4e6f-bb76-bbeb25737e02/terraform test_working_directory=/tmp/plugintest862421828 test_step_number=1
2025-11-25T03:34:32.1224293Z --- FAIL: TestAccClusterAdvancedCluster_withTags (10960.72s)
```

- 2025-11-26

### Error 2025-11-26T00:28:42+00:00
```
2025-11-26T00:28:42.2350824Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-26T00:30:27.5264939Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-26T03:30:34.8254325Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-26T03:30:34.8255249Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-26T03:30:34.8256110Z         
2025-11-26T03:30:34.8256551Z         Error: Error in create
2025-11-26T03:30:34.8256994Z         
2025-11-26T03:30:34.8257571Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:34.8259077Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:34.8260189Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:34.8260756Z         
2025-11-26T03:30:34.8261620Z         cluster=test-acc-tf-c-3501717831245285077 didn't reach desired state: IDLE,
2025-11-26T03:30:34.8262752Z         error: context deadline exceeded
2025-11-26T03:30:35.4739941Z   
2025-11-26T03:32:27.2929544Z --- FAIL: TestAccClusterAdvancedCluster_withTags (10919.78s)
```

- 2025-11-27

### Error 2025-11-27T00:28:29+00:00
```
2025-11-27T00:28:29.0759817Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-11-27T00:30:06.5002633Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-11-27T03:30:14.0091456Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-11-27T03:30:14.0092154Z     resource_test.go:547: Step 1/4 error: Error running apply: exit status 1
2025-11-27T03:30:14.0092693Z         
2025-11-27T03:30:14.0092968Z         Error: Error in create
2025-11-27T03:30:14.0093284Z         
2025-11-27T03:30:14.0093685Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:14.0094547Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:14.0095300Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:14.0095663Z         
2025-11-27T03:30:14.0096222Z         cluster=test-acc-tf-c-8336893768027268894 didn't reach desired state: IDLE,
2025-11-27T03:30:14.0096894Z         error: context deadline exceeded
2025-11-27T03:30:14.0442758Z   
2025-11-27T03:32:58.3056586Z --- FAIL: TestAccClusterAdvancedCluster_withTags (10971.81s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 14 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 16 minutes
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
- 2025-11-23 PASS 16 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
