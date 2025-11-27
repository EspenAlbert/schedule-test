# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 20) FAIL(x 12) TIMEOUT
Success rate: 60.61%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028240000) |  | dev | timeout | 17899.00s
[2025-11-08 00:29](#error-2025-11-08t0029140000) |  | dev | timeout | 10803.04s
[2025-11-19 00:29](#error-2025-11-19t0029080000) |  | dev | timeout | 11635.06s
[2025-11-19 09:30](#error-2025-11-19t0930110000) |  | dev | timeout | 11448.02s
[2025-11-20 00:28](#error-2025-11-20t0028130000) |  | dev | timeout | 11448.07s
[2025-11-20 10:02](#error-2025-11-20t1002020000) |  | dev | timeout | 11478.09s
[2025-11-21 00:28](#error-2025-11-21t0028350000) |  | dev | timeout | 11539.06s
[2025-11-22 00:27](#error-2025-11-22t0027060000) |  | dev | timeout | 11446.03s
[2025-11-24 00:30](#error-2025-11-24t0030150000) |  | dev | timeout | 11506.04s
[2025-11-25 00:27](#error-2025-11-25t0027280000) |  | dev | timeout | 11597.08s
[2025-11-26 00:28](#error-2025-11-26t0028480000) |  | dev | timeout | 11474.06s
[2025-11-27 00:28](#error-2025-11-27t0028350000) |  | dev | timeout | 11658.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 33 minutes
- 2025-10-30

### Error 2025-10-30T00:28:24+00:00
```
2025-10-30T00:28:24.2498384Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T00:28:24.3471216Z     resource_test.go:1050: Adding variable groupId=6902b126e2dc7470847bf14d
2025-10-30T00:28:24.3472228Z     resource_test.go:1050: Adding variable clusterName=test-acc-tf-c-4075514828996499948
2025-10-30T00:29:52.4648234Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T00:38:59.6162419Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T00:38:59.6164690Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7558724466536901345
2025-10-30T00:39:00.1429266Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5036285164714340711
2025-10-30T00:39:00.8210236Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7054213157015212896
2025-10-30T03:39:05.9164909Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T03:39:05.9165664Z     resource_test.go:1050: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:39:05.9166169Z         
2025-10-30T03:39:05.9166516Z         Error: Error in update
2025-10-30T03:39:05.9166881Z         
2025-10-30T03:39:05.9167284Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:39:05.9168111Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:39:05.9168845Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:39:05.9169339Z         
2025-10-30T03:39:05.9169884Z         cluster=test-acc-tf-c-4075514828996499948 didn't reach desired state: IDLE,
2025-10-30T03:39:05.9170593Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:39:05.9171117Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:42:02.5108158Z   
2025-10-30T05:28:11.5683807Z 		TestAccClusterAdvancedCluster_unpausedToPaused (4h58m19s)
2025-10-30T05:28:11.5684505Z 		TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (4h58m19s)
2025-10-30T05:28:11.5685543Z 		TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (4h58m19s)
```

- 2025-10-31 PASS 34 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 35 minutes
- 2025-11-04 PASS 26 minutes
- 2025-11-05
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-11-06 PASS 37 minutes
- 2025-11-07 PASS 29 minutes
- 2025-11-08

### Error 2025-11-08T00:29:14+00:00
```
2025-11-08T00:29:14.7956886Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-08T00:29:14.8995511Z     resource_test.go:1050: Adding variable groupId=690e8ed80887d8385bbd77ce
2025-11-08T00:29:14.8996585Z     resource_test.go:1050: Adding variable clusterName=test-acc-tf-c-737049655562379421
2025-11-08T00:31:08.7356855Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-08T03:31:11.9702695Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-08T03:31:11.9703742Z     resource_test.go:1050: Step 1/4 error: Error running apply: exit status 1
2025-11-08T03:31:11.9704164Z         
2025-11-08T03:31:11.9704414Z         Error: Error in create
2025-11-08T03:31:11.9704654Z         
2025-11-08T03:31:11.9704977Z           with mongodbatlas_advanced_cluster.test,
2025-11-08T03:31:11.9705922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-08T03:31:11.9706599Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-08T03:31:11.9706944Z         
2025-11-08T03:31:11.9707391Z         cluster=test-acc-tf-c-737049655562379421 didn't reach desired state: IDLE,
2025-11-08T03:31:11.9707838Z         error: context deadline exceeded
2025-11-08T03:31:12.0155882Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (10803.39s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 24 minutes
- 2025-11-11 PASS 23 minutes
- 2025-11-12 PASS 28 minutes
- 2025-11-13 PASS 52 minutes
- 2025-11-14 PASS 30 minutes
- 2025-11-15 PASS 24 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 29 minutes
- 2025-11-18 PASS 25 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:08+00:00
```
2025-11-19T00:29:08.1329714Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T00:29:08.2364244Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-6912772427007536491
2025-11-19T00:29:08.2364996Z     resource_test.go:1051: Adding variable groupId=691d0f4fa9e010496ad07729
2025-11-19T00:35:20.7489484Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T00:46:33.0061069Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T00:46:33.0063035Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5050361591088426419
2025-11-19T00:46:33.8530631Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-497278270598515018
2025-11-19T00:46:34.2794158Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8625012961212267102
2025-11-19T03:46:42.6144910Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T03:46:42.6145723Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-19T03:46:42.6146302Z         
2025-11-19T03:46:42.6146550Z         Error: Error in update
2025-11-19T03:46:42.6146839Z         
2025-11-19T03:46:42.6147227Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:46:42.6147979Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:46:42.6148755Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:46:42.6149071Z         
2025-11-19T03:46:42.6149624Z         cluster=test-acc-tf-c-6912772427007536491 didn't reach desired state: IDLE,
2025-11-19T03:46:42.6150237Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-19T03:46:42.6150654Z         'UPDATING', timeout: 3h0m0s)
2025-11-19T03:49:16.2796707Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11635.64s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:11+00:00
```
2025-11-19T09:30:11.8339780Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T09:30:11.9338791Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-8697867930157428242
2025-11-19T09:30:11.9339495Z     resource_test.go:1051: Adding variable groupId=691d8e205ab64e7c55676c21
2025-11-19T09:31:55.5699587Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T09:40:03.5501153Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T09:40:03.5504157Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7244070691097992437
2025-11-19T09:40:03.8609346Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3424499456999837753
2025-11-19T09:40:04.4710932Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7988451819525491801
2025-11-19T12:40:10.4785010Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-19T12:40:10.4785641Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-19T12:40:10.4786017Z         
2025-11-19T12:40:10.4786276Z         Error: Error in update
2025-11-19T12:40:10.4786530Z         
2025-11-19T12:40:10.4786854Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:40:10.4787492Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:40:10.4788074Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:40:10.4788382Z         
2025-11-19T12:40:10.4788827Z         cluster=test-acc-tf-c-8697867930157428242 didn't reach desired state: IDLE,
2025-11-19T12:40:10.4789439Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-19T12:40:10.4789864Z         'UPDATING', timeout: 3h0m0s)
2025-11-19T12:42:43.6327586Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11448.17s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:13+00:00
```
2025-11-20T00:28:13.1166133Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T00:28:13.2131182Z     resource_test.go:1051: Adding variable groupId=691e6099f41e983fa169cc7b
2025-11-20T00:28:13.2131937Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-5222046483764000345
2025-11-20T00:29:55.6004849Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T00:38:03.8305831Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T00:38:03.8307249Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8452484184725804989
2025-11-20T00:38:04.1445650Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-2179968536261915397
2025-11-20T00:38:04.4546560Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8813046102827282965
2025-11-20T03:38:10.8347640Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T03:38:10.8348339Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-20T03:38:10.8348682Z         
2025-11-20T03:38:10.8348993Z         Error: Error in update
2025-11-20T03:38:10.8349223Z         
2025-11-20T03:38:10.8349532Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:38:10.8350271Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:38:10.8350893Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:38:10.8351178Z         
2025-11-20T03:38:10.8351758Z         cluster=test-acc-tf-c-5222046483764000345 didn't reach desired state: IDLE,
2025-11-20T03:38:10.8352505Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-20T03:38:10.8353032Z         'UPDATING', timeout: 3h0m0s)
2025-11-20T03:40:44.1943818Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11448.70s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:02:02+00:00
```
2025-11-20T10:02:02.9591385Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T10:02:03.0573140Z     resource_test.go:1051: Adding variable groupId=691ee7182b50f06feba62a40
2025-11-20T10:02:03.0574341Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-4685385591354906279
2025-11-20T10:03:33.6751099Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T10:11:42.2960457Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T10:11:42.2962174Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-15374526705500615
2025-11-20T10:11:42.8950257Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6487331037168056750
2025-11-20T10:11:43.1940725Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6118209777382330357
2025-11-20T13:11:49.1720842Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-20T13:11:49.1721552Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-20T13:11:49.1721930Z         
2025-11-20T13:11:49.1722276Z         Error: Error in update
2025-11-20T13:11:49.1722536Z         
2025-11-20T13:11:49.1722860Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:11:49.1723594Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:11:49.1724364Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:11:49.1724730Z         
2025-11-20T13:11:49.1725228Z         cluster=test-acc-tf-c-4685385591354906279 didn't reach desired state: IDLE,
2025-11-20T13:11:49.1725842Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-20T13:11:49.1726266Z         'UPDATING', timeout: 3h0m0s)
2025-11-20T13:14:52.5074044Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11478.93s)
```

- 2025-11-21

### Error 2025-11-21T00:28:35+00:00
```
2025-11-21T00:28:35.9383380Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-21T00:28:36.0341404Z     resource_test.go:1051: Adding variable groupId=691fb232238ce57ddce45c46
2025-11-21T00:28:36.0342166Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-2048007512648554648
2025-11-21T00:30:22.6996004Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-21T00:39:31.9566906Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-21T00:39:31.9567980Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-66422568021678713
2025-11-21T00:39:32.6603868Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-21T00:39:32.6605044Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3040900366251267094
2025-11-21T00:39:32.9249361Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-4840353746577728619
2025-11-21T03:39:38.6793379Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-21T03:39:38.6794241Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-21T03:39:38.6794792Z         
2025-11-21T03:39:38.6795040Z         Error: Error in update
2025-11-21T03:39:38.6795324Z         
2025-11-21T03:39:38.6795694Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:39:38.6796748Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:39:38.6797617Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:39:38.6797929Z         
2025-11-21T03:39:38.6798496Z         cluster=test-acc-tf-c-2048007512648554648 didn't reach desired state: IDLE,
2025-11-21T03:39:38.6799210Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-21T03:39:38.6799644Z         'UPDATING', timeout: 3h0m0s)
2025-11-21T03:42:42.1924762Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11539.59s)
```

- 2025-11-22

### Error 2025-11-22T00:27:06+00:00
```
2025-11-22T00:27:06.6856514Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-22T00:27:06.7834129Z     resource_test.go:1051: Adding variable groupId=692103564aaa8d393232afa0
2025-11-22T00:27:06.7834957Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-572029351279570717
2025-11-22T00:28:42.9714155Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-22T00:36:50.2733226Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-22T00:36:50.2734991Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-4115597720053034547
2025-11-22T00:36:50.6359646Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6407010844243216711
2025-11-22T00:36:50.9157253Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2566095632931435401
2025-11-22T03:36:56.4963169Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-22T03:36:56.4963808Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-22T03:36:56.4964186Z         
2025-11-22T03:36:56.4964456Z         Error: Error in update
2025-11-22T03:36:56.4964705Z         
2025-11-22T03:36:56.4965040Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:36:56.4965690Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:36:56.4966452Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:36:56.4966928Z         
2025-11-22T03:36:56.4967476Z         cluster=test-acc-tf-c-572029351279570717 didn't reach desired state: IDLE,
2025-11-22T03:36:56.4968086Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-22T03:36:56.4968513Z         'UPDATING', timeout: 3h0m0s)
2025-11-22T03:39:29.1239973Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11446.26s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:15+00:00
```
2025-11-24T00:30:15.8413705Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-24T00:30:15.9394398Z     resource_test.go:1051: Adding variable groupId=6923a716f47dc0591890af63
2025-11-24T00:30:15.9395220Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-84579870936457370
2025-11-24T00:33:24.1959627Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-24T00:42:32.2074823Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-24T00:42:32.2076379Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5513973218437351705
2025-11-24T00:42:32.6751222Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-300005851168387984
2025-11-24T00:42:32.9051040Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-476545817912999136
2025-11-24T03:42:37.8987064Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-24T03:42:37.8988057Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-24T03:42:37.8988677Z         
2025-11-24T03:42:37.8989104Z         Error: Error in update
2025-11-24T03:42:37.8989532Z         
2025-11-24T03:42:37.8990087Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:42:37.8990967Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:42:37.8991665Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:42:37.8992146Z         
2025-11-24T03:42:37.8992936Z         cluster=test-acc-tf-c-84579870936457370 didn't reach desired state: IDLE,
2025-11-24T03:42:37.8993566Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-24T03:42:37.8994260Z         'UPDATING', timeout: 3h0m0s)
2025-11-24T03:45:10.4404359Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11506.36s)
```

- 2025-11-25

### Error 2025-11-25T00:27:28+00:00
```
2025-11-25T00:27:28.9540922Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-25T00:27:29.0581851Z     resource_test.go:1051: Adding variable groupId=6924f7eedef656331da192db
2025-11-25T00:27:29.0582808Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-8773117635298295881
2025-11-25T00:31:51.4393475Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-25T00:42:29.8515549Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-25T00:42:29.8516770Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8800806161622889796
2025-11-25T00:42:30.3416379Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1450108853034774129
2025-11-25T00:42:30.6246983Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6447630939869110289
2025-11-25T03:42:36.2890348Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-25T03:42:36.2891070Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-25T03:42:36.2891489Z         
2025-11-25T03:42:36.2891756Z         Error: Error in update
2025-11-25T03:42:36.2892094Z         
2025-11-25T03:42:36.2892410Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:42:36.2893165Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:42:36.2894032Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:42:36.2894457Z         
2025-11-25T03:42:36.2894902Z         cluster=test-acc-tf-c-8773117635298295881 didn't reach desired state: IDLE,
2025-11-25T03:42:36.2895508Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-25T03:42:36.2895936Z         'UPDATING', timeout: 3h0m0s)
2025-11-25T03:45:09.1135351Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11597.80s)
```

- 2025-11-26

### Error 2025-11-26T00:28:48+00:00
```
2025-11-26T00:28:48.0354398Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-26T00:28:48.1317743Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-89272577831582971
2025-11-26T00:28:48.1318405Z     resource_test.go:1051: Adding variable groupId=692649bdfa65867a021bab23
2025-11-26T00:30:27.5286404Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-26T00:38:34.8780447Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-26T00:38:34.8781933Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-883282728179993607
2025-11-26T00:38:35.0656037Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-141740814909998899
2025-11-26T00:38:35.2417461Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-816971280245125646
2025-11-26T03:38:39.3745062Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-26T03:38:39.3746060Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-26T03:38:39.3746617Z         
2025-11-26T03:38:39.3746868Z         Error: Error in update
2025-11-26T03:38:39.3747106Z         
2025-11-26T03:38:39.3747419Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:38:39.3748044Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:38:39.3748730Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:38:39.3749138Z         
2025-11-26T03:38:39.3749669Z         cluster=test-acc-tf-c-89272577831582971 didn't reach desired state: IDLE,
2025-11-26T03:38:39.3750385Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-26T03:38:39.3750809Z         'UPDATING', timeout: 3h0m0s)
2025-11-26T03:41:42.0187524Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11474.59s)
```

- 2025-11-27

### Error 2025-11-27T00:28:35+00:00
```
2025-11-27T00:28:35.1677609Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-27T00:28:35.2660893Z     resource_test.go:1051: Adding variable groupId=69279b313c4d827e6c42e10a
2025-11-27T00:28:35.2666901Z     resource_test.go:1051: Adding variable clusterName=test-acc-tf-c-5341730132911377575
2025-11-27T00:30:06.5018926Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-27T00:41:14.6545233Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-27T00:41:14.6546284Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6634374190177091310
2025-11-27T00:41:15.1620297Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-27T00:41:15.1621605Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3970310441060549694
2025-11-27T00:41:15.4175882Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-27T00:41:15.4177400Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2473299644038577934
2025-11-27T03:41:21.2702167Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-27T03:41:21.2702863Z     resource_test.go:1051: Step 2/4 error: Error running apply: exit status 1
2025-11-27T03:41:21.2703295Z         
2025-11-27T03:41:21.2703546Z         Error: Error in update
2025-11-27T03:41:21.2704141Z         
2025-11-27T03:41:21.2704523Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:41:21.2705233Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:41:21.2706120Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:41:21.2706516Z         
2025-11-27T03:41:21.2706971Z         cluster=test-acc-tf-c-5341730132911377575 didn't reach desired state: IDLE,
2025-11-27T03:41:21.2707774Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-11-27T03:41:21.2708205Z         'UPDATING', timeout: 3h0m0s)
2025-11-27T03:44:24.7049726Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11658.31s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029520000) |  | qa | 5.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:52+00:00
```
2025-11-02T00:29:52.2236967Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-02T00:29:52.3249775Z     resource_test.go:1050: Adding variable groupId=6906a5fd5ace12378d2962e9
2025-11-02T00:29:52.3251146Z     resource_test.go:1050: Adding variable clusterName=test-acc-tf-c-1827879131688120531
2025-11-02T00:31:20.6108775Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-02T00:31:22.3343846Z   diagnostic_detail=
2025-11-02T00:31:22.3349874Z    diagnostic_severity=ERROR diagnostic_summary="Missing Configuration for Required Attribute" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig tf_proto_version=6.10 tf_req_id=6c20d6be-868a-8e8b-c2b5-acc0f664f927
2025-11-02T00:31:25.1869907Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-02T00:31:25.1871382Z     resource_test.go:1050: Step 1/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.1871994Z         
2025-11-02T00:31:25.1872389Z         Error: Error in create
2025-11-02T00:31:25.1872798Z         
2025-11-02T00:31:25.1873365Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.1874488Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.1875484Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.1876008Z         
2025-11-02T00:31:25.1876694Z         cluster name: test-acc-tf-c-1827879131688120531, API error details:
2025-11-02T00:31:25.1878272Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fd5ace12378d2962e9/clusters
2025-11-02T00:31:25.1918608Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.1919510Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.1920552Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.1921546Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.1922214Z         BadRequestDetail: 
2025-11-02T00:31:25.1962463Z    test_terraform_path=/home/runner/work/_temp/60a36c34-dbcd-44d9-9066-0019faa00ebd/terraform test_working_directory=/tmp/plugintest3631750824
2025-11-02T00:31:25.6482580Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (5.15s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 25 minutes
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
- 2025-11-23 PASS 28 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
