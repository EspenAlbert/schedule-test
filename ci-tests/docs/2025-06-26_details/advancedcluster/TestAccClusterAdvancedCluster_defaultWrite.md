# advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 25 minutes
```
2025-05-28T01:22:03.6925386Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T01:23:14.7880692Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T01:23:29.7829529Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T01:23:29.7832766Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:23:29.782589209Z, ProjectID: 6836653b1d73dc16f0848cba, Cluster name: test-acc-tf-c-2439853625844399856
2025-05-28T01:48:37.8053821Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1524.16s)
```
#### FAIL 16 minutes
```
2025-05-28T09:05:05.0929696Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:06:19.1760119Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:06:44.1707646Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:06:44.1709944Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:06:44.170459339Z, ProjectID: 6836d1c1d000797dbe922198, Cluster name: test-acc-tf-c-1097220744388580423
2025-05-28T09:18:53.5888075Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:18:53.5889295Z     resource_advanced_cluster_test.go:507: Step 1/3 error: Error running post-apply non-refresh plan: exit status 1
2025-05-28T09:18:53.5890181Z         
2025-05-28T09:18:53.5891220Z         Error: error reading  advanced cluster (test-acc-tf-c-1097220744388580423): undefined response type
2025-05-28T09:18:53.5892200Z         
2025-05-28T09:18:53.5892835Z           with data.mongodbatlas_advanced_cluster.test,
2025-05-28T09:18:53.5894018Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_cluster" "test":
2025-05-28T09:18:53.5895044Z           45: 	data "mongodbatlas_advanced_cluster" "test" {
2025-05-28T09:18:53.5895603Z         
2025-05-28T09:18:53.5897564Z         Error: error reading advanced cluster list for project(6836d1c1d000797dbe922198): (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T09:18:53.5898787Z         
2025-05-28T09:18:53.5899423Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T09:18:53.5900604Z           on terraform_plugin_test.tf line 52, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T09:18:53.5902001Z           52: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T09:18:53.5902564Z         
2025-05-28T09:23:06.0014674Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (1008.42s)
```
#### PASS 30 minutes
```
2025-05-28T12:49:47.8721463Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T12:51:02.8150673Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T12:51:32.8166896Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T12:51:32.8168832Z     pre_check.go:40: Time before creating cluster: 2025-05-28T12:51:32.816433803Z, ProjectID: 6837066b541cf637391c1543, Cluster name: test-acc-tf-c-2682301813025545904
2025-05-28T13:21:55.0238728Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1853.96s)
```
### 2025-05-29
#### PASS 37 minutes
```
2025-05-29T01:04:58.2436706Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-29T01:06:48.9945855Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-29T01:07:18.9931048Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-29T01:07:18.9933507Z     pre_check.go:40: Time before creating cluster: 2025-05-29T01:07:18.992824692Z, ProjectID: 6837b2ba3945df7a919182e7, Cluster name: test-acc-tf-c-2002721982807009199
2025-05-29T01:43:48.1116539Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2221.88s)
```
#### PASS 24 minutes
```
2025-05-29T15:22:11.1667427Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-29T15:23:22.3406033Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-29T15:24:07.3310700Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-29T15:24:07.3311858Z     pre_check.go:40: Time before creating cluster: 2025-05-29T15:24:07.33081401Z, ProjectID: 68387ba319701207c7a27e2d, Cluster name: test-acc-tf-c-2878510124118857542
2025-05-29T15:48:11.6404536Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1492.79s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T01:06:44.7691254Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-30T01:07:54.5200044Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-30T01:07:59.5198922Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-30T01:07:59.5201282Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:07:59.519621281Z, ProjectID: 683904a43a84470fe9d53006, Cluster name: test-acc-tf-c-8056699320625022458
2025-05-30T02:47:41.6289047Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (5989.07s)
```
#### PASS 26 minutes
```
2025-05-30T07:59:59.4104133Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-30T08:01:07.2887649Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-30T08:01:47.2440147Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-30T08:01:47.2441812Z     pre_check.go:40: Time before creating cluster: 2025-05-30T08:01:47.243788275Z, ProjectID: 6839657f12efeb384251b14a, Cluster name: test-acc-tf-c-6197199946645317249
2025-05-30T08:27:09.5646911Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1563.76s)
```
### 2025-05-31
#### PASS 29 minutes
```
2025-05-31T01:05:09.7036784Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-31T01:06:19.0445128Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-31T01:06:59.0610202Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-31T01:06:59.0611634Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:06:59.06072705Z, ProjectID: 683a55c5ebf07c11d4e96f16, Cluster name: test-acc-tf-c-8562958700078738902
2025-05-31T01:36:11.5418074Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1793.83s)
```
### 2025-06-01
#### PASS 26 minutes
```
2025-06-01T01:08:02.7224905Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T01:09:45.0340770Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T01:10:44.9497535Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T01:10:44.9498714Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:10:44.949460539Z, ProjectID: 683ba7f22ebc1806778a3c69, Cluster name: test-acc-tf-c-9042129474210295697
2025-06-01T01:35:57.0929897Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1575.34s)
```
#### PASS 28 minutes
```
2025-06-01T05:17:47.6903712Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T05:18:55.6165953Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T05:20:00.5995264Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T05:20:00.5998570Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:20:00.599237142Z, ProjectID: 683be27bcc8f0935c7c1c615, Cluster name: test-acc-tf-c-57062990442642165
2025-06-01T05:47:31.6717691Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1718.48s)
```
#### PASS 25 minutes
```
2025-06-01T09:27:09.8534089Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T09:28:31.6581204Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T09:29:06.6612689Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T09:29:06.6613927Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:29:06.661028709Z, ProjectID: 683c1ced7bf9cf70212cf30d, Cluster name: test-acc-tf-c-5834356909509183980
2025-06-01T09:54:06.6416529Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1536.35s)
```
#### PASS 25 minutes
```
2025-06-01T13:36:25.6540007Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T13:37:35.7418663Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T13:38:15.7406970Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T13:38:15.7408210Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:38:15.740448378Z, ProjectID: 683c5759cc8f0935c7c2b980, Cluster name: test-acc-tf-c-2791042426433684677
2025-06-01T14:02:43.4960094Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1509.81s)
```
#### PASS 26 minutes
```
2025-06-01T17:45:33.2744348Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T17:46:42.8838008Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T17:47:17.8869303Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T17:47:17.8871180Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:47:17.886628889Z, ProjectID: 683c91bdcc8f0935c7c32d5d, Cluster name: test-acc-tf-c-8081188342592114949
2025-06-01T18:13:39.5852118Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1618.83s)
```
#### PASS 27 minutes
```
2025-06-01T21:52:47.5724289Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T21:54:01.2610601Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T21:54:16.2472162Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-01T21:54:16.2474735Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:54:16.246877526Z, ProjectID: 683ccbafcc8f0935c7c39621, Cluster name: test-acc-tf-c-7787248717664088086
2025-06-01T22:21:42.9250141Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1663.02s)
```
### 2025-06-02
#### PASS 29 minutes
```
2025-06-02T01:06:46.3170392Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T01:08:04.0064700Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T01:08:34.0092110Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T01:08:34.0093753Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:08:34.008934709Z, ProjectID: 683cf926cc8f0935c7c3ee6c, Cluster name: test-acc-tf-c-3770981667277289291
2025-06-02T01:37:21.7489252Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1759.84s)
```
#### PASS 25 minutes
```
2025-06-02T02:05:47.2554677Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T02:07:09.8624837Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T02:08:04.8566786Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T02:08:04.8568709Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:08:04.856410005Z, ProjectID: 683d06fb7bf9cf70212ec8c9, Cluster name: test-acc-tf-c-5816925773314371517
2025-06-02T02:32:43.9682476Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1535.84s)
```
#### PASS 27 minutes
```
2025-06-02T06:18:10.2541018Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T06:19:34.2063485Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T06:20:19.2181910Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-02T06:20:19.2183284Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:20:19.217915802Z, ProjectID: 683d4222cc8f0935c7c4b86f, Cluster name: test-acc-tf-c-1359040594954535782
2025-06-02T06:46:35.2130140Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1623.08s)
```
### 2025-06-03
#### PASS 31 minutes
```
2025-06-03T01:07:24.0195778Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-03T01:08:35.0312256Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-03T01:09:30.0062123Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-03T01:09:30.0063476Z     pre_check.go:40: Time before creating cluster: 2025-06-03T01:09:30.005917844Z, ProjectID: 683e4accc5fc37283c3645ee, Cluster name: test-acc-tf-c-4021604230576390966
2025-06-03T01:40:11.8333336Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1899.55s)
```
### 2025-06-04
#### PASS 30 minutes
```
2025-06-04T00:58:35.0297104Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-04T00:59:43.6863565Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-04T00:59:53.6883004Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-04T00:59:53.6884294Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:59:53.688045732Z, ProjectID: 683f9a3b4fa12629039d0113, Cluster name: test-acc-tf-c-3219045570479769256
2025-06-04T01:30:22.5404744Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1840.64s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:27.2508986Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:35:42.8416653Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:36:37.8221347Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:36:37.8223012Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:37.821834085Z, ProjectID: 6840e64fc939f27413252998, Cluster name: test-acc-tf-c-3192005317086672187
2025-06-05T00:39:39.0950190Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:39:39.0950982Z     resource_advanced_cluster_test.go:507: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:39:39.0951579Z         
2025-06-05T00:39:39.0953813Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64fc939f27413252998/clusters/test-acc-tf-c-3192005317086672187 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:39.0955480Z         
2025-06-05T00:39:39.0955815Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:39.0956477Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:39.0957068Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:39.0957374Z         
2025-06-05T00:39:39.1415889Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (239.42s)
```
### 2025-06-06
#### PASS 43 minutes
```
2025-06-06T01:02:40.4230620Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-06T01:06:43.1298703Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-06T01:06:53.1423715Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-06T01:06:53.1426029Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:06:53.142043462Z, ProjectID: 68423e308dba3d3587c504ca, Cluster name: test-acc-tf-c-614010665579137756
2025-06-06T01:49:57.3701992Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2595.83s)
```
### 2025-06-07
#### PASS 29 minutes
```
2025-06-07T00:58:11.7280733Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-07T00:59:22.5421229Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-07T00:59:37.5260051Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-07T00:59:37.5263758Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:59:37.525800918Z, ProjectID: 68438ea33cccfc2b22afdb5b, Cluster name: test-acc-tf-c-228103523051176179
2025-06-07T01:29:09.7633113Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1788.87s)
```
### 2025-06-08
#### PASS 29 minutes
```
2025-06-08T00:58:16.6174498Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-08T00:59:27.3067345Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-08T00:59:47.3081147Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-08T00:59:47.3083053Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:59:47.307860213Z, ProjectID: 6844e0280b3c4a5b49f6e187, Cluster name: test-acc-tf-c-8451597926163041005
2025-06-08T01:29:08.1209780Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1783.16s)
```
### 2025-06-09
#### PASS an hour
```
2025-06-09T00:59:40.0019136Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-09T01:00:51.7667734Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-09T01:01:11.7618731Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-09T01:01:11.7620589Z     pre_check.go:40: Time before creating cluster: 2025-06-09T01:01:11.761612305Z, ProjectID: 684631fce21315547b36391a, Cluster name: test-acc-tf-c-7966875193199689321
2025-06-09T02:04:27.6414157Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (3817.76s)
```
### 2025-06-10
#### PASS 35 minutes
```
2025-06-10T01:06:20.6970828Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-10T01:07:33.5691258Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-10T01:07:58.5657354Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-10T01:07:58.5659932Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:07:58.565479888Z, ProjectID: 6847850ca888514df22a9937, Cluster name: test-acc-tf-c-575767047391430127
2025-06-10T01:42:45.9102842Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2114.72s)
```
### 2025-06-11
#### PASS 28 minutes
```
2025-06-11T01:01:30.9364870Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-11T01:03:00.1025086Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-11T01:03:25.0882924Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-11T01:03:25.0884149Z     pre_check.go:40: Time before creating cluster: 2025-06-11T01:03:25.088057934Z, ProjectID: 6848d56a7856163396c4cd56, Cluster name: test-acc-tf-c-5735539215970415245
2025-06-11T01:31:45.7740623Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1727.37s)
```
#### PASS 37 minutes
```
2025-06-11T08:05:24.9525318Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-11T08:06:40.5923733Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-11T08:07:00.5797324Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-11T08:07:00.5799206Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:07:00.579383511Z, ProjectID: 684938c571e0a97458c8d665, Cluster name: test-acc-tf-c-2307159637623166061
2025-06-11T08:44:33.6291620Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2274.86s)
```
### 2025-06-12
#### PASS 31 minutes
```
2025-06-12T01:01:03.3268905Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-12T01:02:47.4176689Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-12T01:03:57.3487141Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-12T01:03:57.3488189Z     pre_check.go:40: Time before creating cluster: 2025-06-12T01:03:57.348409938Z, ProjectID: 684a26cfbe881b610a4febf6, Cluster name: test-acc-tf-c-39890090868515810
2025-06-12T01:34:15.9094287Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1891.69s)
```
### 2025-06-13
#### PASS 37 minutes
```
2025-06-13T01:00:42.3971980Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-13T01:02:08.8109311Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-13T01:02:43.8129198Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-13T01:02:43.8133306Z     pre_check.go:40: Time before creating cluster: 2025-06-13T01:02:43.812640621Z, ProjectID: 684b783ae5be291c80ec39df, Cluster name: test-acc-tf-c-3748254372315979906
2025-06-13T01:39:13.5056304Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2226.40s)
```
### 2025-06-14
#### PASS 37 minutes
```
2025-06-14T01:29:00.4993370Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-14T01:32:10.3087871Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-14T01:33:00.2941253Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-14T01:33:00.2942925Z     pre_check.go:40: Time before creating cluster: 2025-06-14T01:33:00.293839733Z, ProjectID: 684cd05c8f295e188b9cad47, Cluster name: test-acc-tf-c-7586616136735736302
2025-06-14T02:09:22.9311772Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2234.52s)
```
### 2025-06-15
#### PASS 30 minutes
```
2025-06-15T01:02:46.2710868Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-15T01:04:06.0040622Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-15T01:04:25.9958796Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-15T01:04:25.9960497Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:04:25.995547522Z, ProjectID: 684e1bb683e3896e131b0902, Cluster name: test-acc-tf-c-5745356460757926725
2025-06-15T01:34:41.8411669Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1838.56s)
```
### 2025-06-16
#### PASS 33 minutes
```
2025-06-16T01:03:13.7153131Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-16T01:04:53.8500874Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-16T01:05:23.8451358Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-16T01:05:23.8452948Z     pre_check.go:40: Time before creating cluster: 2025-06-16T01:05:23.844897841Z, ProjectID: 684f6d5125b50457df2c120c, Cluster name: test-acc-tf-c-8313466174351477800
2025-06-16T01:37:56.9496695Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1985.12s)
```
### 2025-06-17
#### PASS 32 minutes
```
2025-06-17T01:01:45.5703631Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-17T01:03:31.0380726Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-17T01:04:16.0341306Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-17T01:04:16.0342924Z     pre_check.go:40: Time before creating cluster: 2025-06-17T01:04:16.033809978Z, ProjectID: 6850be796200565f4c9d2df8, Cluster name: test-acc-tf-c-4669542479609656981
2025-06-17T01:35:38.9215064Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1930.38s)
```
### 2025-06-18
#### PASS 33 minutes
```
2025-06-18T00:57:38.6413494Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-18T00:59:11.3856450Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-18T00:59:41.3703125Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-18T00:59:41.3704689Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:59:41.369977616Z, ProjectID: 68520f02d0293a55d1f3a69d, Cluster name: test-acc-tf-c-8229682170102032862
2025-06-18T01:32:16.5026979Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1987.07s)
```
#### PASS 29 minutes
```
2025-06-18T07:58:21.7035350Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-18T07:59:36.5948530Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-18T08:00:11.5641673Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-18T08:00:11.5643449Z     pre_check.go:40: Time before creating cluster: 2025-06-18T08:00:11.563863956Z, ProjectID: 6852719d926cc210b0183374, Cluster name: test-acc-tf-c-4727516769982587037
2025-06-18T08:29:21.1681234Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1786.11s)
```
### 2025-06-19
#### PASS an hour
```
2025-06-19T01:07:34.8954228Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-19T01:09:39.9424793Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-19T01:10:04.9414926Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-19T01:10:04.9418707Z     pre_check.go:40: Time before creating cluster: 2025-06-19T01:10:04.941193872Z, ProjectID: 685362d6cd32be2bdf88f2f0, Cluster name: test-acc-tf-c-2523614964509409997
2025-06-19T02:10:33.3316302Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (3655.51s)
```
### 2025-06-20
#### PASS 30 minutes
```
2025-06-20T01:01:41.5127991Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-20T01:03:39.2419450Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-20T01:03:59.2434642Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-20T01:03:59.2436208Z     pre_check.go:40: Time before creating cluster: 2025-06-20T01:03:59.243193586Z, ProjectID: 6854b2f5cd32be2bdf8c2ff3, Cluster name: test-acc-tf-c-497816012028037817
2025-06-20T01:33:41.9236784Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1805.59s)
```
### 2025-06-21
#### PASS 30 minutes
```
2025-06-21T01:01:47.9870422Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-21T01:03:06.3653563Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-21T01:03:11.3656540Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-21T01:03:11.3658106Z     pre_check.go:40: Time before creating cluster: 2025-06-21T01:03:11.365328291Z, ProjectID: 6856047cf3e6555d2acbb7bc, Cluster name: test-acc-tf-c-3828654364009445749
2025-06-21T01:33:26.6358316Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1822.77s)
```
### 2025-06-22
#### PASS 37 minutes
```
2025-06-22T01:03:29.3595035Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-22T01:05:07.9342667Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-22T01:05:32.8955136Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-22T01:05:32.8956762Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:05:32.89529073Z, ProjectID: 68575661af7a0954e84b0ed2, Cluster name: test-acc-tf-c-6956123857145930829
2025-06-22T01:42:36.1677687Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2250.69s)
```
### 2025-06-23
#### PASS 25 minutes
```
2025-06-23T01:00:12.4003458Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-23T01:01:46.4889358Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-23T01:02:01.4768210Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-23T01:02:01.4769933Z     pre_check.go:40: Time before creating cluster: 2025-06-23T01:02:01.476630772Z, ProjectID: 6858a71c9c500e6d1cbd8d36, Cluster name: test-acc-tf-c-5483778510788122116
2025-06-23T01:27:22.8380601Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1538.16s)
```
### 2025-06-24
#### PASS 39 minutes
```
2025-06-24T00:59:10.8436477Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-24T01:00:52.0711327Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-24T01:01:37.0585812Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-24T01:01:37.0587926Z     pre_check.go:40: Time before creating cluster: 2025-06-24T01:01:37.0582348Z, ProjectID: 6859f85e2c29f60dd5413080, Cluster name: test-acc-tf-c-5218228004212960819
2025-06-24T01:40:30.3723717Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (2379.44s)
```
### 2025-06-25
#### PASS 25 minutes
```
2025-06-25T01:09:19.0804682Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-25T01:10:48.9114905Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-25T01:11:08.9032700Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-25T01:11:08.9034878Z     pre_check.go:40: Time before creating cluster: 2025-06-25T01:11:08.902971746Z, ProjectID: 685b4c3f4b3ed2215cd807ee, Cluster name: test-acc-tf-c-466387789232826859
2025-06-25T01:36:28.3789311Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1543.70s)
```
### 2025-06-26
#### PASS 28 minutes
```
2025-06-26T00:58:57.4397915Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-26T01:00:07.3676840Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-26T01:00:47.3773295Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-26T01:00:47.3777697Z     pre_check.go:40: Time before creating cluster: 2025-06-26T01:00:47.377047255Z, ProjectID: 685c9b51fd004332ce3908e0, Cluster name: test-acc-tf-c-7494521571933415643
2025-06-26T01:28:21.6921638Z --- PASS: TestAccClusterAdvancedCluster_defaultWrite (1696.81s)
```