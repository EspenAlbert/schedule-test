# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 12)
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | flaky_500 | 12606.08s
[2025-11-19 00:28](#error-2025-11-19t0028580000) |  | dev | timeout | 11046.09s
[2025-11-19 09:30](#error-2025-11-19t0930030000) |  | dev | timeout | 11125.06s
[2025-11-20 00:28](#error-2025-11-20t0028010000) |  | dev | timeout | 11044.03s
[2025-11-20 10:01](#error-2025-11-20t1001560000) |  | dev | timeout | 10921.06s
[2025-11-21 00:28](#error-2025-11-21t0028280000) |  | dev | timeout | 10972.08s
[2025-11-22 00:26](#error-2025-11-22t0026560000) |  | dev | timeout | 10930.05s
[2025-11-24 00:30](#error-2025-11-24t0030090000) |  | dev | timeout | 10921.02s
[2025-11-25 00:27](#error-2025-11-25t0027220000) |  | dev | timeout | 10973.01s
[2025-11-26 00:28](#error-2025-11-26t0028400000) |  | dev | timeout | 12608.02s
[2025-11-27 00:28](#error-2025-11-27t0028260000) |  | dev | timeout | 10919.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 46 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3895357Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T00:29:52.4851367Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T03:29:59.0645921Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T03:29:59.0646580Z     resource_test.go:164: Step 1/3 error: Error running apply: exit status 1
2025-10-30T03:29:59.0646998Z         
2025-10-30T03:29:59.0647278Z         Error: Error in create
2025-10-30T03:29:59.0647551Z         
2025-10-30T03:29:59.0647922Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:29:59.0648649Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:29:59.0649324Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:29:59.0649670Z         
2025-10-30T03:29:59.0650192Z         cluster=test-acc-tf-c-6074820074370069813 didn't reach desired state: IDLE,
2025-10-30T03:29:59.0650809Z         error: context deadline exceeded
2025-10-30T03:35:47.4672363Z   
2025-10-30T03:59:59.3184750Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T03:59:59.3185500Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:59:59.3186401Z         
2025-10-30T03:59:59.3186812Z         Error: error when destroying resource
2025-10-30T03:59:59.3187196Z         
2025-10-30T03:59:59.3187641Z         error deleting project (6902b183abf4374f329a556d):
2025-10-30T03:59:59.3188338Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183abf4374f329a556d
2025-10-30T03:59:59.3188943Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-30T03:59:59.3189581Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-10-30T03:59:59.3190335Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-10-30T03:59:59.3190871Z         Params: [], BadRequestDetail: 
2025-10-30T03:59:59.3191374Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (12606.83s)
```

- 2025-10-31 PASS 47 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 48 minutes
- 2025-11-04 PASS 37 minutes
- 2025-11-05
  - PASS an hour
  - PASS 39 minutes
- 2025-11-06 PASS 48 minutes
- 2025-11-07 PASS 41 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 37 minutes
- 2025-11-11 PASS 34 minutes
- 2025-11-12 PASS 41 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 43 minutes
- 2025-11-15 PASS 35 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 41 minutes
- 2025-11-18 PASS 37 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:28:58+00:00
```
2025-11-19T00:28:58.0392468Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-19T00:35:20.7401592Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-19T03:35:31.0573918Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-19T03:35:31.0574844Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-19T03:35:31.0575484Z         
2025-11-19T03:35:31.0576177Z         Error: Error in create
2025-11-19T03:35:31.0576846Z         
2025-11-19T03:35:31.0577195Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:31.0577840Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:31.0578562Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:31.0578875Z         
2025-11-19T03:35:31.0579321Z         cluster=test-acc-tf-c-7082802714106806733 didn't reach desired state: IDLE,
2025-11-19T03:35:31.0580233Z         error: context deadline exceeded
2025-11-19T03:35:31.4222868Z   
2025-11-19T03:39:27.6819005Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (11046.95s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:03+00:00
```
2025-11-19T09:30:03.0189446Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-19T09:31:55.5696943Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-19T12:32:03.3298342Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-19T12:32:03.3299078Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-19T12:32:03.3299485Z         
2025-11-19T12:32:03.3300044Z         Error: Error in create
2025-11-19T12:32:03.3300292Z         
2025-11-19T12:32:03.3300809Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:03.3301561Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:03.3302260Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:03.3302572Z         
2025-11-19T12:32:03.3303108Z         cluster=test-acc-tf-c-5223339387536061990 didn't reach desired state: IDLE,
2025-11-19T12:32:03.3303914Z         error: context deadline exceeded
2025-11-19T12:32:03.3455364Z    test_terraform_path=/home/runner/work/_temp/b9256067-5db0-451c-ae44-8b4d0f38c8f9/terraform test_working_directory=/tmp/plugintest1921357003 test_name=TestAccClusterAdvancedCluster_withTags test_step_number=1
2025-11-19T12:37:21.1795289Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (11125.61s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:01+00:00
```
2025-11-20T00:28:01.5626924Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-20T00:29:55.6006651Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-20T03:30:03.4571713Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-20T03:30:03.4572426Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-20T03:30:03.4572764Z         
2025-11-20T03:30:03.4573234Z         Error: Error in create
2025-11-20T03:30:03.4573468Z         
2025-11-20T03:30:03.4573826Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:03.4574430Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:03.4575125Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:03.4575510Z         
2025-11-20T03:30:03.4575921Z         cluster=test-acc-tf-c-6244563650604776323 didn't reach desired state: IDLE,
2025-11-20T03:30:03.4576435Z         error: context deadline exceeded
2025-11-20T03:30:04.9882717Z    test_working_directory=/tmp/plugintest1707835856 test_name=TestAccClusterAdvancedCluster_withTags test_step_number=1 test_terraform_path=/home/runner/work/_temp/d0684163-37b0-4e5f-b042-cb4029e74368/terraform
2025-11-20T03:33:59.9329647Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (11044.34s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:56+00:00
```
2025-11-20T10:01:56.0805487Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-20T10:03:33.6962065Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-20T13:03:42.1239393Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-20T13:03:42.1240054Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-20T13:03:42.1240431Z         
2025-11-20T13:03:42.1240870Z         Error: Error in create
2025-11-20T13:03:42.1241123Z         
2025-11-20T13:03:42.1241586Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:42.1242339Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:42.1242991Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:42.1243406Z         
2025-11-20T13:03:42.1243909Z         cluster=test-acc-tf-c-1735538049959534471 didn't reach desired state: IDLE,
2025-11-20T13:03:42.1244407Z         error: context deadline exceeded
2025-11-20T13:03:42.5955730Z   
2025-11-20T13:05:35.2981039Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10921.60s)
```

- 2025-11-21

### Error 2025-11-21T00:28:28+00:00
```
2025-11-21T00:28:28.2284159Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-21T00:30:22.6892831Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-21T03:30:30.8854745Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-21T03:30:30.8855552Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-21T03:30:30.8856054Z         
2025-11-21T03:30:30.8856619Z         Error: Error in create
2025-11-21T03:30:30.8856998Z         
2025-11-21T03:30:30.8857337Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:30.8858343Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:30.8859347Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:30.8859673Z         
2025-11-21T03:30:30.8860268Z         cluster=test-acc-tf-c-8975877034532620364 didn't reach desired state: IDLE,
2025-11-21T03:30:30.8860853Z         error: context deadline exceeded
2025-11-21T03:30:30.9169852Z   
2025-11-21T03:33:15.4264770Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10972.76s)
```

- 2025-11-22

### Error 2025-11-22T00:26:56+00:00
```
2025-11-22T00:26:56.2518481Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-22T00:28:42.9648663Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-22T03:28:49.6163203Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-22T03:28:49.6164170Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-22T03:28:49.6164783Z         
2025-11-22T03:28:49.6165227Z         Error: Error in create
2025-11-22T03:28:49.6165638Z         
2025-11-22T03:28:49.6166231Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:49.6167348Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:49.6168376Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:49.6168927Z         
2025-11-22T03:28:49.6169725Z         cluster=test-acc-tf-c-5525395213540639528 didn't reach desired state: IDLE,
2025-11-22T03:28:49.6170517Z         error: context deadline exceeded
2025-11-22T03:28:50.1466337Z   
2025-11-22T03:30:53.4525537Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10930.50s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:09+00:00
```
2025-11-24T00:30:09.5158902Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-24T00:33:24.2032013Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-24T03:33:32.6776577Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-24T03:33:32.6777496Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-24T03:33:32.6778296Z         
2025-11-24T03:33:32.6778733Z         Error: Error in create
2025-11-24T03:33:32.6779159Z         
2025-11-24T03:33:32.6779717Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:32.6780718Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:32.6781837Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:32.6782397Z         
2025-11-24T03:33:32.6783189Z         cluster=test-acc-tf-c-7658289348811901506 didn't reach desired state: IDLE,
2025-11-24T03:33:32.6784180Z         error: context deadline exceeded
2025-11-24T03:33:33.2535989Z    test_name=TestAccClusterAdvancedCluster_withTags test_terraform_path=/home/runner/work/_temp/609ccb18-f3a3-412d-a4f5-f3ac64678863/terraform
2025-11-24T03:35:25.4084666Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10921.21s)
```

- 2025-11-25

### Error 2025-11-25T00:27:22+00:00
```
2025-11-25T00:27:22.3498825Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-25T00:31:51.4317867Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-25T03:31:59.7683690Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-25T03:31:59.7684632Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-25T03:31:59.7685228Z         
2025-11-25T03:31:59.7685641Z         Error: Error in create
2025-11-25T03:31:59.7686263Z         
2025-11-25T03:31:59.7686801Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:59.7687859Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:59.7688829Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:59.7689525Z         
2025-11-25T03:31:59.7690280Z         cluster=test-acc-tf-c-3873544041495734635 didn't reach desired state: IDLE,
2025-11-25T03:31:59.7691055Z         error: context deadline exceeded
2025-11-25T03:32:00.4544652Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-11-25T03:34:44.5150137Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10973.11s)
```

- 2025-11-26

### Error 2025-11-26T00:28:40+00:00
```
2025-11-26T00:28:40.0230203Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-26T00:30:27.4997909Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-26T03:30:35.4740229Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-26T03:30:35.4741100Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-26T03:30:35.4741671Z         
2025-11-26T03:30:35.4741923Z         Error: Error in create
2025-11-26T03:30:35.4742285Z         
2025-11-26T03:30:35.4742692Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:35.4743437Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:35.4744115Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:35.4744421Z         
2025-11-26T03:30:35.4744963Z         cluster=test-acc-tf-c-3652805326881341611 didn't reach desired state: IDLE,
2025-11-26T03:30:35.4745646Z         error: context deadline exceeded
2025-11-26T03:30:35.4925644Z   
2025-11-26T04:00:35.7040044Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-26T04:00:35.7040675Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-26T04:00:35.7041116Z         
2025-11-26T04:00:35.7041408Z         Error: error when destroying resource
2025-11-26T04:00:35.7041691Z         
2025-11-26T04:00:35.7042022Z         error deleting project (69264a27131e634a70c6ee0a):
2025-11-26T04:00:35.7042586Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69264a27131e634a70c6ee0a
2025-11-26T04:00:35.7043079Z         DELETE: HTTP 409 Conflict (Error code:
2025-11-26T04:00:35.7043607Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-11-26T04:00:35.7044217Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-11-26T04:00:35.7044655Z         Params: [], BadRequestDetail: 
2025-11-26T04:00:35.7045061Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (12608.21s)
```

- 2025-11-27

### Error 2025-11-27T00:28:26+00:00
```
2025-11-27T00:28:26.5453190Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-27T00:30:06.5000590Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-27T03:30:13.2286236Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-27T03:30:13.2286955Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-27T03:30:13.2287333Z         
2025-11-27T03:30:13.2287702Z         Error: Error in create
2025-11-27T03:30:13.2287955Z         
2025-11-27T03:30:13.2288328Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:13.2289025Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:13.2289721Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:13.2290284Z         
2025-11-27T03:30:13.2290738Z         cluster=test-acc-tf-c-4649048905743965565 didn't reach desired state: IDLE,
2025-11-27T03:30:13.2291869Z         error: context deadline exceeded
2025-11-27T03:30:14.0091166Z   
2025-11-27T03:32:06.2909619Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10919.80s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 07:53](#error-2025-11-13t0753170000) |  | qa | flaky_400 | 9.02s

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
- 2025-11-09 PASS 38 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13

### Error 2025-11-13T07:53:17+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-11-13T07:53:17.667000+00:00-TestAccClusterAdvancedCluster_replicaSetMultiCloud',confidence=1.0,ts_when='14 days ago')

```
2025-11-13T07:53:17.6674134Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-13T07:54:58.4185968Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-13T07:55:07.0053481Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-11-13T07:55:07.0054374Z     resource_test.go:165: Step 1/3 error: Error running apply: exit status 1
2025-11-13T07:55:07.0054992Z         
2025-11-13T07:55:07.0055414Z         Error: Error in create
2025-11-13T07:55:07.0055830Z         
2025-11-13T07:55:07.0056501Z           with mongodbatlas_advanced_cluster.test,
2025-11-13T07:55:07.0057621Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-13T07:55:07.0058638Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-13T07:55:07.0059178Z         
2025-11-13T07:55:07.0059881Z         cluster name: test-acc-tf-c-1853231104317587072, API error details:
2025-11-13T07:55:07.0061045Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69158ed648f3d02bc50c6d2b/clusters
2025-11-13T07:55:07.0061883Z         POST: HTTP 403 Forbidden (Error code:
2025-11-13T07:55:07.0062690Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-13T07:55:07.0063565Z         Configuration. Contains selections that are unavailable due to your
2025-11-13T07:55:07.0064129Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-13T07:55:07.0064527Z         BadRequestDetail: 
2025-11-13T07:55:07.5814905Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (9.17s)
```

- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 39 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 39 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
