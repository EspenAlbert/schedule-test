# advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 15 minutes
```
2025-05-28T01:22:12.7134313Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T01:23:14.8020857Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T01:24:04.7882267Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T01:24:04.7884009Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:24:04.787990795Z, ProjectID: 683665421d73dc16f0848d6c, Cluster name: test-acc-tf-c-3225095434556220530
2025-05-28T01:38:54.9432249Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (940.16s)
```
#### FAIL 17 minutes
```
2025-05-28T09:05:15.2356940Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:06:19.1757774Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:06:29.1689407Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:06:29.1691253Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:06:29.168640777Z, ProjectID: 6836d1c7e6404f5026cf2728, Cluster name: test-acc-tf-c-5289046676670611994
2025-05-28T09:18:53.5800756Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:18:53.5803250Z     resource_advanced_cluster_test.go:1126: Step 1/3 error: Error running apply: exit status 1
2025-05-28T09:18:53.5804106Z         
2025-05-28T09:18:53.5804652Z         Error: error reading advanced cluster
2025-05-28T09:18:53.5805146Z         
2025-05-28T09:18:53.5805700Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T09:18:53.5806866Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T09:18:53.5807919Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T09:18:53.5808459Z         
2025-05-28T09:18:53.5809211Z         cluster name: test-acc-tf-c-5289046676670611994, API error details: (503
2025-05-28T09:18:53.5810365Z         Service Unavailable) failed to decode response body: undefined response type
2025-05-28T09:18:53.5887574Z    test_step_number=1
2025-05-28T09:23:56.2254015Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (1057.06s)
```
#### PASS 18 minutes
```
2025-05-28T12:49:55.2022827Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T12:51:02.8232364Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T12:51:57.8193267Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T12:51:57.8194371Z     pre_check.go:40: Time before creating cluster: 2025-05-28T12:51:57.819113111Z, ProjectID: 68370671541cf637391c15f3, Cluster name: test-acc-tf-c-6972237361097161931
2025-05-28T13:09:19.2420545Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1096.42s)
```
### 2025-05-29
#### PASS 26 minutes
```
2025-05-29T01:05:09.0266859Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-29T01:06:49.0009819Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-29T01:07:38.9959374Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-29T01:07:38.9962168Z     pre_check.go:40: Time before creating cluster: 2025-05-29T01:07:38.99563932Z, ProjectID: 6837b2c33945df7a91918340, Cluster name: test-acc-tf-c-6685357195025690551
2025-05-29T01:33:19.9320710Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1590.94s)
```
#### PASS 13 minutes
```
2025-05-29T15:22:19.7389667Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-29T15:23:22.3254707Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-29T15:23:37.3276912Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-29T15:23:37.3280130Z     pre_check.go:40: Time before creating cluster: 2025-05-29T15:23:37.327531201Z, ProjectID: 68387baa19701207c7a27f6e, Cluster name: test-acc-tf-c-2318901437295337388
2025-05-29T15:37:11.4169788Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (829.09s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T01:06:53.6141545Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-30T01:07:54.5272928Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-30T01:08:19.5222466Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-30T01:08:19.5224843Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:08:19.521986958Z, ProjectID: 683904ab3a84470fe9d530b1, Cluster name: test-acc-tf-c-7256346548021307506
2025-05-30T02:37:32.8603373Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (5378.34s)
```
#### PASS 19 minutes
```
2025-05-30T08:00:06.5043497Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-30T08:01:07.2432577Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-30T08:01:32.2417467Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-30T08:01:32.2419212Z     pre_check.go:40: Time before creating cluster: 2025-05-30T08:01:32.241454101Z, ProjectID: 68396585a942e86350d3ff90, Cluster name: test-acc-tf-c-7580162885783594142
2025-05-30T08:20:56.1137943Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1188.87s)
```
### 2025-05-31
#### PASS 19 minutes
```
2025-05-31T01:05:18.9450378Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-31T01:06:19.0795880Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-31T01:07:24.0655704Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-31T01:07:24.0656917Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:07:24.065323346Z, ProjectID: 683a55cb6980316aa7dba9d5, Cluster name: test-acc-tf-c-212276613507681413
2025-05-31T01:26:06.0960212Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1187.00s)
```
### 2025-06-01
#### PASS 16 minutes
```
2025-06-01T01:08:14.3223736Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T01:09:44.9427102Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T01:09:54.9420422Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T01:09:54.9421986Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:09:54.941691932Z, ProjectID: 683ba7fc4e6c592331c58491, Cluster name: test-acc-tf-c-3254802326574883717
2025-06-01T01:26:17.7890178Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (992.85s)
```
#### PASS 16 minutes
```
2025-06-01T05:17:55.2507614Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T05:18:55.5769459Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T05:19:05.5918628Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T05:19:05.5923040Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:19:05.591482643Z, ProjectID: 683be2817bf9cf70212c577c, Cluster name: test-acc-tf-c-3853507633782519559
2025-06-01T05:35:38.1115997Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1002.54s)
```
#### PASS 16 minutes
```
2025-06-01T09:27:18.5436787Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T09:28:31.6920877Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T09:29:46.6669454Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T09:29:46.6671175Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:29:46.666675191Z, ProjectID: 683c1cf5cc8f0935c7c25b4f, Cluster name: test-acc-tf-c-580575037355529740
2025-06-01T09:44:59.7316354Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (988.02s)
```
#### PASS 17 minutes
```
2025-06-01T13:36:33.5847667Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T13:37:35.7882122Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T13:38:55.7465237Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T13:38:55.7467035Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:38:55.746262981Z, ProjectID: 683c575f7bf9cf70212d5732, Cluster name: test-acc-tf-c-3901069265228949104
2025-06-01T13:55:34.0131170Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1078.25s)
```
#### PASS 16 minutes
```
2025-06-01T17:45:42.7292750Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T17:46:42.8849806Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T17:47:52.8927647Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T17:47:52.8929723Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:47:52.892483307Z, ProjectID: 683c91c4cc8f0935c7c32e18, Cluster name: test-acc-tf-c-922830906726852120
2025-06-01T18:03:25.6185999Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1002.74s)
```
#### PASS 17 minutes
```
2025-06-01T21:52:54.2830368Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T21:54:01.2736833Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T21:54:56.2518854Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-01T21:54:56.2520548Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:54:56.251568394Z, ProjectID: 683ccbb47bf9cf70212e2da0, Cluster name: test-acc-tf-c-4058259751995254003
2025-06-01T22:11:18.8450338Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1037.59s)
```
### 2025-06-02
#### PASS 22 minutes
```
2025-06-02T01:06:53.0222166Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T01:08:04.1100930Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T01:09:29.0171059Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T01:09:29.0172823Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:09:29.016829847Z, ProjectID: 683cf92b7bf9cf70212e7da2, Cluster name: test-acc-tf-c-1301226989988147657
2025-06-02T01:30:11.2179359Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1327.11s)
```
#### PASS 33 minutes
```
2025-06-02T02:05:54.8888206Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T02:07:09.8634519Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T02:08:19.8597960Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T02:08:19.8599215Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:08:19.859557704Z, ProjectID: 683d0700cc8f0935c7c438cb, Cluster name: test-acc-tf-c-604754617282501037
2025-06-02T02:40:46.1426905Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (2016.28s)
```
#### PASS 16 minutes
```
2025-06-02T06:18:18.9771873Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T06:19:34.1959346Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T06:19:39.2097446Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-02T06:19:39.2099161Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:19:39.206963583Z, ProjectID: 683d42287bf9cf70212f4484, Cluster name: test-acc-tf-c-2879242905507110644
2025-06-02T06:36:10.7072877Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (996.51s)
```
### 2025-06-03
#### PASS 19 minutes
```
2025-06-03T01:07:33.9041010Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-03T01:08:35.0562711Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-03T01:09:45.0091437Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-03T01:09:45.0093324Z     pre_check.go:40: Time before creating cluster: 2025-06-03T01:09:45.00882785Z, ProjectID: 683e4ad3c5fc37283c3646b7, Cluster name: test-acc-tf-c-8760601677964357604
2025-06-03T01:27:39.0951609Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1144.06s)
```
### 2025-06-04
#### PASS 19 minutes
```
2025-06-04T00:58:42.2386246Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-04T00:59:43.6946296Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-04T01:00:28.6920912Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-04T01:00:28.6922553Z     pre_check.go:40: Time before creating cluster: 2025-06-04T01:00:28.691799468Z, ProjectID: 683f9a3f4fa12629039d01f6, Cluster name: test-acc-tf-c-3664701548700006109
2025-06-04T01:19:10.2170658Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1166.52s)
```
### 2025-06-05
#### FAIL 4 minutes
```
2025-06-05T00:35:39.9466201Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:35:42.8421775Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:36:52.8239761Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:36:52.8241938Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:52.823577994Z, ProjectID: 6840e657161ca93c1f054546, Cluster name: test-acc-tf-c-1327908782022319578
2025-06-05T00:39:53.9886597Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:39:53.9887367Z     resource_advanced_cluster_test.go:1126: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:39:53.9887947Z         
2025-06-05T00:39:53.9889857Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e657161ca93c1f054546/clusters/test-acc-tf-c-1327908782022319578 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:53.9891386Z         
2025-06-05T00:39:53.9891820Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:53.9892468Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:53.9893062Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:53.9893366Z         
2025-06-05T00:39:54.0320542Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (251.20s)
```
### 2025-06-06
#### PASS 28 minutes
```
2025-06-06T01:02:48.7663106Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-06T01:06:43.1427527Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-06T01:07:43.1484066Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-06T01:07:43.1486815Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:07:43.148074748Z, ProjectID: 68423e368dba3d3587c505c4, Cluster name: test-acc-tf-c-2397788958432974725
2025-06-06T01:35:26.8300506Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1723.69s)
```
### 2025-06-07
#### PASS 22 minutes
```
2025-06-07T00:58:20.6207585Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-07T00:59:22.5601095Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-07T01:00:42.5346143Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-07T01:00:42.5349660Z     pre_check.go:40: Time before creating cluster: 2025-06-07T01:00:42.534330091Z, ProjectID: 68438ea93cccfc2b22afdc19, Cluster name: test-acc-tf-c-6741930681096772018
2025-06-07T01:21:52.9003039Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1350.35s)
```
### 2025-06-08
#### PASS 18 minutes
```
2025-06-08T00:58:26.3784977Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-08T00:59:27.3264915Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-08T01:00:17.3134841Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-08T01:00:17.3137162Z     pre_check.go:40: Time before creating cluster: 2025-06-08T01:00:17.313232291Z, ProjectID: 6844e02f0b3c4a5b49f6e254, Cluster name: test-acc-tf-c-3820402290781904974
2025-06-08T01:17:29.3296393Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1082.02s)
```
### 2025-06-09
#### PASS 33 minutes
```
2025-06-09T00:59:48.8681637Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-09T01:00:51.7792502Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-09T01:02:06.7675912Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-09T01:02:06.7677604Z     pre_check.go:40: Time before creating cluster: 2025-06-09T01:02:06.767338891Z, ProjectID: 684632010a8f6759322c695d, Cluster name: test-acc-tf-c-6012671890718431359
2025-06-09T01:34:23.4090934Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (2011.63s)
```
### 2025-06-10
#### PASS 14 minutes
```
2025-06-10T01:06:30.4898263Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-10T01:07:33.5685562Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-10T01:07:43.5642421Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-10T01:07:43.5644090Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:07:43.564011117Z, ProjectID: 684785149fcc7665ab8332c2, Cluster name: test-acc-tf-c-373254370342760427
2025-06-10T01:22:00.2938562Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (866.73s)
```
### 2025-06-11
#### PASS 19 minutes
```
2025-06-11T01:01:39.4040951Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-11T01:03:00.1092146Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-11T01:03:50.0907101Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-11T01:03:50.0908784Z     pre_check.go:40: Time before creating cluster: 2025-06-11T01:03:50.090391832Z, ProjectID: 6848d5722bb50f2041c9826b, Cluster name: test-acc-tf-c-4413838566773514329
2025-06-11T01:22:21.8691990Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1161.76s)
```
#### PASS 22 minutes
```
2025-06-11T08:05:32.4481572Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-11T08:06:40.5934978Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-11T08:07:30.5835986Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-11T08:07:30.5838015Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:07:30.583261703Z, ProjectID: 684938ca49c05124969e98a4, Cluster name: test-acc-tf-c-8104825358388071425
2025-06-11T08:28:48.1082700Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1327.52s)
```
### 2025-06-12
#### PASS 20 minutes
```
2025-06-12T01:01:14.6046889Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-12T01:02:47.3576328Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-12T01:03:22.3424371Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-12T01:03:22.3426058Z     pre_check.go:40: Time before creating cluster: 2025-06-12T01:03:22.342093994Z, ProjectID: 684a26d7be881b610a4fecd3, Cluster name: test-acc-tf-c-2707959768459194163
2025-06-12T01:23:02.1790246Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1214.83s)
```
### 2025-06-13
#### PASS 24 minutes
```
2025-06-13T01:00:49.5232645Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-13T01:02:08.8628241Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-13T01:03:28.8202029Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-13T01:03:28.8203889Z     pre_check.go:40: Time before creating cluster: 2025-06-13T01:03:28.819931555Z, ProjectID: 684b7840e0143334a6a891d2, Cluster name: test-acc-tf-c-6420174357693500072
2025-06-13T01:26:19.3579946Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1450.51s)
```
### 2025-06-14
#### PASS 27 minutes
```
2025-06-14T01:29:10.9536381Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-14T01:32:10.3336358Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-14T01:33:15.2953517Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-14T01:33:15.2955518Z     pre_check.go:40: Time before creating cluster: 2025-06-14T01:33:15.295082327Z, ProjectID: 684cd0648f295e188b9cadfe, Cluster name: test-acc-tf-c-7825512029952914958
2025-06-14T01:59:32.2863441Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1641.98s)
```
### 2025-06-15
#### PASS 19 minutes
```
2025-06-15T01:02:53.9582684Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-15T01:04:06.0233259Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-15T01:04:56.0003100Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-15T01:04:56.0004364Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:04:55.999998737Z, ProjectID: 684e1bbc83e3896e131b096d, Cluster name: test-acc-tf-c-897889155748982976
2025-06-15T01:23:20.5481197Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1154.53s)
```
### 2025-06-16
#### PASS 21 minutes
```
2025-06-16T01:03:22.3748224Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-16T01:04:53.8404943Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-16T01:04:58.8431668Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-16T01:04:58.8433828Z     pre_check.go:40: Time before creating cluster: 2025-06-16T01:04:58.840263736Z, ProjectID: 684f6d5725b50457df2c1318, Cluster name: test-acc-tf-c-1487764123385032187
2025-06-16T01:26:52.0556353Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1318.22s)
```
### 2025-06-17
#### PASS 16 minutes
```
2025-06-17T01:01:53.8070185Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-17T01:03:31.0220788Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-17T01:04:01.0326212Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-17T01:04:01.0330125Z     pre_check.go:40: Time before creating cluster: 2025-06-17T01:04:01.032323994Z, ProjectID: 6850be7f4283fe24ea0be54d, Cluster name: test-acc-tf-c-3152920180681296844
2025-06-17T01:19:43.0893216Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (972.07s)
```
### 2025-06-18
#### PASS 18 minutes
```
2025-06-18T00:57:45.5597977Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-18T00:59:11.3769221Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-18T00:59:31.3688125Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-18T00:59:31.3690052Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:59:31.36847796Z, ProjectID: 68520f08f40f964ca92fe991, Cluster name: test-acc-tf-c-7610974106167799248
2025-06-18T01:18:01.8351497Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1130.47s)
```
#### PASS 19 minutes
```
2025-06-18T07:58:30.5017434Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-18T07:59:36.6325154Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-18T08:00:51.5688329Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-18T08:00:51.5689980Z     pre_check.go:40: Time before creating cluster: 2025-06-18T08:00:51.568498621Z, ProjectID: 685271a3da72564c164a9c52, Cluster name: test-acc-tf-c-4256113033854397306
2025-06-18T08:19:12.3937826Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1175.81s)
```
### 2025-06-19
#### PASS 53 minutes
```
2025-06-19T01:07:43.0809882Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-19T01:09:39.9368524Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-19T01:10:09.9426657Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-19T01:10:09.9428110Z     pre_check.go:40: Time before creating cluster: 2025-06-19T01:10:09.942351705Z, ProjectID: 685362ddcd32be2bdf88f3fe, Cluster name: test-acc-tf-c-7903000888653918495
2025-06-19T02:03:15.0623863Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (3215.13s)
```
### 2025-06-20
#### PASS 18 minutes
```
2025-06-20T01:01:51.2338134Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-20T01:03:39.2947932Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-20T01:05:04.2525101Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-20T01:05:04.2527064Z     pre_check.go:40: Time before creating cluster: 2025-06-20T01:05:04.252248187Z, ProjectID: 6854b2fccd32be2bdf8c30fb, Cluster name: test-acc-tf-c-7859761420205279416
2025-06-20T01:22:33.5183714Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1134.24s)
```
### 2025-06-21
#### PASS 18 minutes
```
2025-06-21T01:01:55.6573407Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-21T01:03:06.3679782Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-21T01:03:21.3671574Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-21T01:03:21.3673174Z     pre_check.go:40: Time before creating cluster: 2025-06-21T01:03:21.366972018Z, ProjectID: 68560481fadf221ee30c9e28, Cluster name: test-acc-tf-c-1530432566147228993
2025-06-21T01:21:37.1296768Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1110.76s)
```
### 2025-06-22
#### PASS 18 minutes
```
2025-06-22T01:03:37.8790044Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-22T01:05:07.9352088Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-22T01:06:12.8995617Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-22T01:06:12.8996909Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:06:12.899340431Z, ProjectID: 68575666ab82446d9bfb3600, Cluster name: test-acc-tf-c-7310323905707774499
2025-06-22T01:23:15.8603885Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1087.93s)
```
### 2025-06-23
#### PASS 17 minutes
```
2025-06-23T01:00:22.4649698Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-23T01:01:46.5293950Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-23T01:03:01.4836675Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-23T01:03:01.4838341Z     pre_check.go:40: Time before creating cluster: 2025-06-23T01:03:01.483402982Z, ProjectID: 6858a7249c500e6d1cbd8df2, Cluster name: test-acc-tf-c-5166629881448930966
2025-06-23T01:19:13.1267889Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1046.62s)
```
### 2025-06-24
#### PASS 27 minutes
```
2025-06-24T00:59:18.4756957Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-24T01:00:52.0714683Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-24T01:02:07.0644439Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-24T01:02:07.0645776Z     pre_check.go:40: Time before creating cluster: 2025-06-24T01:02:07.064176706Z, ProjectID: 6859f8652c29f60dd5413143, Cluster name: test-acc-tf-c-1038436992873568639
2025-06-24T01:28:10.9623984Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1638.89s)
```
### 2025-06-25
#### PASS 19 minutes
```
2025-06-25T01:09:29.9799908Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-25T01:10:48.9199588Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-25T01:12:03.9102517Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-25T01:12:03.9104286Z     pre_check.go:40: Time before creating cluster: 2025-06-25T01:12:03.909968828Z, ProjectID: 685b4c474b3ed2215cd8089e, Cluster name: test-acc-tf-c-7295744851578727774
2025-06-25T01:30:07.3584105Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1158.45s)
```
### 2025-06-26
#### PASS 18 minutes
```
2025-06-26T00:59:06.4282699Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-26T01:00:07.3915103Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-26T01:01:22.3802563Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-26T01:01:22.3807009Z     pre_check.go:40: Time before creating cluster: 2025-06-26T01:01:22.379930745Z, ProjectID: 685c9b58a6c38f0879789aa1, Cluster name: test-acc-tf-c-2635569893951628777
2025-06-26T01:18:36.3843389Z --- PASS: TestAccClusterAdvancedCluster_biConnectorConfig (1109.01s)
```