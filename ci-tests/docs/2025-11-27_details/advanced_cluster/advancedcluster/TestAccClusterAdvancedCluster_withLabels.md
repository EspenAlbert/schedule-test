# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 12)
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183abf4374f329a55cb | dev | flaky_500 | 1901.09s
[2025-11-19 00:29](#error-2025-11-19t0029000000) |  | dev | timeout | 11046.06s
[2025-11-19 09:30](#error-2025-11-19t0930050000) |  | dev | timeout | 11126.08s
[2025-11-20 00:28](#error-2025-11-20t0028040000) |  | dev | timeout | 11002.08s
[2025-11-20 10:01](#error-2025-11-20t1001570000) |  | dev | timeout | 11003.01s
[2025-11-21 00:28](#error-2025-11-21t0028310000) |  | dev | timeout | 10973.02s
[2025-11-22 00:26](#error-2025-11-22t0026590000) |  | dev | timeout | 11001.07s
[2025-11-24 00:30](#error-2025-11-24t0030120000) |  | dev | timeout | 11001.09s
[2025-11-25 00:27](#error-2025-11-25t0027240000) |  | dev | timeout | 10920.04s
[2025-11-26 00:28](#error-2025-11-26t0028420000) |  | dev | timeout | 10961.07s
[2025-11-27 00:28](#error-2025-11-27t0028290000) |  | dev | timeout | 11044.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8266304Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-10-30T00:29:52.4647337Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-10-30T01:01:34.3130285Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-10-30T01:01:34.3130916Z     resource_test.go:575: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:01:34.3131367Z         
2025-10-30T01:01:34.3131873Z         Error: error when destroying resource
2025-10-30T01:01:34.3132170Z         
2025-10-30T01:01:34.3132519Z         error deleting project (6902b183abf4374f329a55cb):
2025-10-30T01:01:34.3133092Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183abf4374f329a55cb
2025-10-30T01:01:34.3133710Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T01:01:34.3134292Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T01:01:34.3134923Z         BadRequestDetail: 
2025-10-30T01:01:34.3135261Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1901.85s)
```

- 2025-10-31 PASS 21 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 17 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 44 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 15 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 20 minutes
- 2025-11-13 PASS 27 minutes
- 2025-11-14 PASS 19 minutes
- 2025-11-15 PASS 15 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 21 minutes
- 2025-11-18 PASS 18 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:00+00:00
```
2025-11-19T00:29:00.7352304Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-19T00:35:20.7671497Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-19T03:35:30.1917160Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-19T03:35:30.1918101Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-19T03:35:30.1918749Z         
2025-11-19T03:35:30.1919160Z         Error: Error in create
2025-11-19T03:35:30.1919566Z         
2025-11-19T03:35:30.1920141Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:30.1921290Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:30.1922339Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:30.1922862Z         
2025-11-19T03:35:30.1923657Z         cluster=test-acc-tf-c-7525109892762698875 didn't reach desired state: IDLE,
2025-11-19T03:35:30.1924483Z         error: context deadline exceeded
2025-11-19T03:35:30.2525357Z   
2025-11-19T03:39:27.4005563Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11046.64s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:05+00:00
```
2025-11-19T09:30:05.0248178Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-19T09:31:55.5596681Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-19T12:32:04.5740777Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-19T12:32:04.5741493Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-19T12:32:04.5741950Z         
2025-11-19T12:32:04.5742384Z         Error: Error in create
2025-11-19T12:32:04.5742776Z         
2025-11-19T12:32:04.5743498Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:04.5744624Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:04.5745377Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:04.5746215Z         
2025-11-19T12:32:04.5746992Z         cluster=test-acc-tf-c-4100115004199997425 didn't reach desired state: IDLE,
2025-11-19T12:32:04.5747739Z         error: context deadline exceeded
2025-11-19T12:32:05.2532078Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-19T12:37:22.3541328Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11126.80s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:04+00:00
```
2025-11-20T00:28:04.5879005Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-20T00:29:55.5937678Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-20T03:30:03.0381699Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-20T03:30:03.0382449Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-20T03:30:03.0383122Z         
2025-11-20T03:30:03.0383396Z         Error: Error in create
2025-11-20T03:30:03.0383631Z         
2025-11-20T03:30:03.0383934Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:03.0384507Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:03.0385054Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:03.0385345Z         
2025-11-20T03:30:03.0385760Z         cluster=test-acc-tf-c-3251522721003316017 didn't reach desired state: IDLE,
2025-11-20T03:30:03.0386187Z         error: context deadline exceeded
2025-11-20T03:30:03.1565432Z   
2025-11-20T03:33:18.4321402Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11002.85s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:01:57+00:00
```
2025-11-20T10:01:57.9369496Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-20T10:03:33.6831136Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-20T13:03:41.6025278Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-20T13:03:41.6025963Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-20T13:03:41.6026452Z         
2025-11-20T13:03:41.6026764Z         Error: Error in create
2025-11-20T13:03:41.6027080Z         
2025-11-20T13:03:41.6027550Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:41.6028428Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:41.6029019Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:41.6029330Z         
2025-11-20T13:03:41.6029775Z         cluster=test-acc-tf-c-1128743775421277116 didn't reach desired state: IDLE,
2025-11-20T13:03:41.6030235Z         error: context deadline exceeded
2025-11-20T13:03:41.7548797Z   
2025-11-20T13:06:56.8242627Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11003.14s)
```

- 2025-11-21

### Error 2025-11-21T00:28:31+00:00
```
2025-11-21T00:28:31.2206481Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-21T00:30:22.6460512Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-21T03:30:31.7928378Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-21T03:30:31.7928929Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-21T03:30:31.7929301Z         
2025-11-21T03:30:31.7929548Z         Error: Error in create
2025-11-21T03:30:31.7929785Z         
2025-11-21T03:30:31.7930209Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:31.7930939Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:31.7931563Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:31.7931949Z         
2025-11-21T03:30:31.7932465Z         cluster=test-acc-tf-c-4090587319863717159 didn't reach desired state: IDLE,
2025-11-21T03:30:31.7933045Z         error: context deadline exceeded
2025-11-21T03:30:32.6371881Z    test_working_directory=/tmp/plugintest866683851 test_step_number=1 test_name=TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-21T03:33:15.8086681Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (10973.16s)
```

- 2025-11-22

### Error 2025-11-22T00:26:59+00:00
```
2025-11-22T00:26:59.8548893Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-22T00:28:42.9593536Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-22T03:28:49.6001496Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-22T03:28:49.6002345Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-22T03:28:49.6002975Z         
2025-11-22T03:28:49.6003420Z         Error: Error in create
2025-11-22T03:28:49.6003862Z         
2025-11-22T03:28:49.6004445Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:49.6005346Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:49.6005955Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:49.6006281Z         
2025-11-22T03:28:49.6006894Z         cluster=test-acc-tf-c-7501472673291570129 didn't reach desired state: IDLE,
2025-11-22T03:28:49.6007363Z         error: context deadline exceeded
2025-11-22T03:28:49.6161877Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/9e52c758-fb15-4d20-83d8-d3f78571282a/terraform
2025-11-22T03:32:04.6167036Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11001.67s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:12+00:00
```
2025-11-24T00:30:12.1846788Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-24T00:33:24.2021190Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-24T03:33:31.5488452Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-24T03:33:31.5489276Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-24T03:33:31.5489877Z         
2025-11-24T03:33:31.5490276Z         Error: Error in create
2025-11-24T03:33:31.5490660Z         
2025-11-24T03:33:31.5491200Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:31.5492267Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:31.5493275Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:31.5493782Z         
2025-11-24T03:33:31.5494703Z         cluster=test-acc-tf-c-8428324727251495625 didn't reach desired state: IDLE,
2025-11-24T03:33:31.5495455Z         error: context deadline exceeded
2025-11-24T03:33:32.2488331Z    test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_step_number=1
2025-11-24T03:36:46.0796648Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11001.89s)
```

- 2025-11-25

### Error 2025-11-25T00:27:24+00:00
```
2025-11-25T00:27:24.5907535Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-25T00:31:51.3989564Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-25T03:31:58.7241873Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-25T03:31:58.7242560Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-25T03:31:58.7243123Z         
2025-11-25T03:31:58.7243467Z         Error: Error in create
2025-11-25T03:31:58.7243726Z         
2025-11-25T03:31:58.7244054Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:58.7244681Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:58.7245258Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:58.7245573Z         
2025-11-25T03:31:58.7246011Z         cluster=test-acc-tf-c-8500866565229850116 didn't reach desired state: IDLE,
2025-11-25T03:31:58.7246467Z         error: context deadline exceeded
2025-11-25T03:31:59.4584816Z   
2025-11-25T03:33:51.7755175Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (10920.38s)
```

- 2025-11-26

### Error 2025-11-26T00:28:42+00:00
```
2025-11-26T00:28:42.2351956Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-26T00:30:27.5261365Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-26T03:30:35.6923017Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-26T03:30:35.6923851Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-26T03:30:35.6924426Z         
2025-11-26T03:30:35.6924801Z         Error: Error in create
2025-11-26T03:30:35.6925173Z         
2025-11-26T03:30:35.6925815Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:35.6926858Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:35.6927820Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:35.6928320Z         
2025-11-26T03:30:35.6929053Z         cluster=test-acc-tf-c-4242344651282215776 didn't reach desired state: IDLE,
2025-11-26T03:30:35.6929810Z         error: context deadline exceeded
2025-11-26T03:30:36.0550282Z   
2025-11-26T03:33:09.1824509Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (10961.68s)
```

- 2025-11-27

### Error 2025-11-27T00:28:29+00:00
```
2025-11-27T00:28:29.0761243Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-27T00:30:06.5001644Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-27T03:30:14.8415098Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-27T03:30:14.8415803Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-27T03:30:14.8416184Z         
2025-11-27T03:30:14.8416536Z         Error: Error in create
2025-11-27T03:30:14.8416935Z         
2025-11-27T03:30:14.8417483Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:14.8418467Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:14.8419459Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:14.8420247Z         
2025-11-27T03:30:14.8421101Z         cluster=test-acc-tf-c-6969817473793289311 didn't reach desired state: IDLE,
2025-11-27T03:30:14.8422188Z         error: context deadline exceeded
2025-11-27T03:30:17.1654688Z   
2025-11-27T03:34:10.5734183Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (11044.08s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 07:53](#error-2025-11-13t0753190000) |  | qa | flaky_400 | 8.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 15 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13

### Error 2025-11-13T07:53:19+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-11-13T07:53:19.445000+00:00-TestAccClusterAdvancedCluster_withLabels',confidence=1.0,ts_when='14 days ago')

```
2025-11-13T07:53:19.4455236Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-11-13T07:54:58.4304173Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-11-13T07:55:06.3975744Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-11-13T07:55:06.3976813Z     resource_test.go:576: Step 1/4 error: Error running apply: exit status 1
2025-11-13T07:55:06.3977474Z         
2025-11-13T07:55:06.3977869Z         Error: Error in create
2025-11-13T07:55:06.3978255Z         
2025-11-13T07:55:06.3978819Z           with mongodbatlas_advanced_cluster.test,
2025-11-13T07:55:06.3980012Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-13T07:55:06.3980850Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-13T07:55:06.3981317Z         
2025-11-13T07:55:06.3981920Z         cluster name: test-acc-tf-c-5044872104573291721, API error details:
2025-11-13T07:55:06.3982900Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69158ed648f3d02bc50c6d25/clusters
2025-11-13T07:55:06.3983672Z         POST: HTTP 403 Forbidden (Error code:
2025-11-13T07:55:06.3984544Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-13T07:55:06.3985469Z         Configuration. Contains selections that are unavailable due to your
2025-11-13T07:55:06.3986510Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-13T07:55:06.3987128Z         BadRequestDetail: 
2025-11-13T07:55:07.0255898Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (8.60s)
```

- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 17 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 14 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
