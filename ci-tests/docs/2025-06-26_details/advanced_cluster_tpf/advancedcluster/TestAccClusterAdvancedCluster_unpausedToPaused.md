# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 17 minutes
```
2025-05-28T02:03:35.3180080Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T02:03:35.3296717Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T02:03:35.3343119Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T02:03:35.3344088Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:16:53.728521412Z, ProjectID: 683663751d73dc16f08484ec, Cluster name: test-acc-tf-c-7022319851456850655
2025-05-28T02:03:35.3413328Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1045.86s)
```
#### FAIL 16 minutes
```
2025-05-28T12:04:46.9781915Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9831557Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9943403Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9944240Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:04:06.039786841Z, ProjectID: 6836d0fdd000797dbe921ab2, Cluster name: test-acc-tf-c-7564314697780489913
2025-05-28T12:04:46.9998983Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T12:04:46.9999569Z     resource_advanced_cluster_test.go:314: Step 2/4 error: Error running apply: exit status 1
2025-05-28T12:04:46.9999980Z         
2025-05-28T12:04:47.0000330Z         Error: error reading cluster with legacy API 20240530
2025-05-28T12:04:47.0000637Z         
2025-05-28T12:04:47.0000977Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T12:04:47.0001610Z           on terraform_plugin_test.tf line 42, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T12:04:47.0002329Z           42: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T12:04:47.0002623Z         
2025-05-28T12:04:47.0003069Z         cluster name: test-acc-tf-c-7167777305822092739, API error details: undefined
2025-05-28T12:04:47.0003490Z         response type
2025-05-28T12:04:47.0008751Z    test_name=TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema test_terraform_path=/home/runner/work/_temp/0bbe0b64-86f0-4111-9a0b-d75d93ae70a5/terraform test_working_directory=/tmp/plugintest2633037047
2025-05-28T12:04:47.0064317Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (1008.54s)
```
#### PASS 19 minutes
```
2025-05-28T13:47:11.9974499Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T13:47:12.0059132Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T13:47:12.0117444Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-28T13:47:12.0118287Z     pre_check.go:40: Time before creating cluster: 2025-05-28T12:51:06.83323679Z, ProjectID: 6837061103b2ee7db737eda2, Cluster name: test-acc-tf-c-5168245639752865182
2025-05-28T13:47:12.0168931Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1160.03s)
```
### 2025-05-29
#### PASS 25 minutes
```
2025-05-29T02:20:21.7252333Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-29T02:20:21.7317856Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-29T02:20:21.7397231Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-29T02:20:21.7398085Z     pre_check.go:40: Time before creating cluster: 2025-05-29T01:07:00.154723926Z, ProjectID: 6837b277a548243915a5f9bd, Cluster name: test-acc-tf-c-3578780586210717609
2025-05-29T02:20:21.7446743Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1523.04s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T03:30:24.2293669Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-30T03:30:24.2354614Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-30T03:30:24.2411968Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-30T03:30:24.2412810Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:03:21.848178233Z, ProjectID: 683903333a84470fe9d528d3, Cluster name: test-acc-tf-c-7734395671663408465
2025-05-30T03:30:24.2479258Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (5659.15s)
```
#### PASS 26 minutes
```
2025-05-30T08:55:11.7529282Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-30T08:55:11.7604279Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-30T08:55:11.7664591Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-30T08:55:11.7665663Z     pre_check.go:40: Time before creating cluster: 2025-05-30T07:59:17.704407682Z, ProjectID: 683964cf12efeb384251aa14, Cluster name: test-acc-tf-c-2021405774853216837
2025-05-30T08:55:11.7744692Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1583.95s)
```
### 2025-05-31
#### PASS 18 minutes
```
2025-05-31T04:18:53.2224224Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-31T04:18:53.2275985Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-31T04:18:53.2318227Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-05-31T04:18:53.2319236Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:03:33.795282377Z, ProjectID: 683a54e7ebf07c11d4e9679c, Cluster name: test-acc-tf-c-1178233173008378230
2025-05-31T04:18:53.2395971Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1088.57s)
```
### 2025-06-01
#### PASS 15 minutes
```
2025-06-01T04:20:15.0514662Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T04:20:15.0575926Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T04:20:15.0626506Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T04:20:15.0627493Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:06:30.052762354Z, ProjectID: 683ba7042ebc1806778a323d, Cluster name: test-acc-tf-c-7069624942269146620
2025-06-01T04:20:15.0685767Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (912.97s)
```
#### PASS 16 minutes
```
2025-06-01T08:29:24.1308988Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T08:29:24.1362279Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T08:29:24.1422810Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T08:29:24.1423842Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:15:07.461031686Z, ProjectID: 683be1537bf9cf70212c4e79, Cluster name: test-acc-tf-c-3933756530011882523
2025-06-01T08:29:24.1489865Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (985.55s)
```
#### PASS 14 minutes
```
2025-06-01T12:36:46.3863372Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T12:36:46.3924724Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T12:36:46.3992526Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T12:36:46.3993374Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:24:21.89222196Z, ProjectID: 683c1bc2cc8f0935c7c25420, Cluster name: test-acc-tf-c-1790333193466344943
2025-06-01T12:36:46.4049939Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (860.30s)
```
#### PASS 15 minutes
```
2025-06-01T16:46:33.8301861Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T16:46:33.8352407Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T16:46:33.8425967Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T16:46:33.8426822Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:33:09.640115969Z, ProjectID: 683c5606cc8f0935c7c2b178, Cluster name: test-acc-tf-c-4922895779919291636
2025-06-01T16:46:33.8479451Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (906.65s)
```
#### PASS 15 minutes
```
2025-06-01T20:56:30.1305904Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T20:56:30.1400264Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T20:56:30.1442149Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-01T20:56:30.1443040Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:43:20.504643661Z, ProjectID: 683c90bd7bf9cf70212dc2b3, Cluster name: test-acc-tf-c-2820525379327523309
2025-06-01T20:56:30.1528215Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (949.28s)
```
### 2025-06-02
#### PASS 16 minutes
```
2025-06-02T01:07:47.7467618Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T01:07:47.7527251Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T01:07:47.7615364Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T01:07:47.7616885Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:51:53.821487392Z, ProjectID: 683ccacd7bf9cf70212e25eb, Cluster name: test-acc-tf-c-2314224513282700236
2025-06-02T01:07:47.7711906Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (961.24s)
```
#### PASS 17 minutes
```
2025-06-02T04:19:30.0958365Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T04:19:30.1013602Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T04:19:30.1074930Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T04:19:30.1075771Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:05:48.499093004Z, ProjectID: 683cf854cc8f0935c7c3e730, Cluster name: test-acc-tf-c-289449755636256995
2025-06-02T04:19:30.1137592Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1054.44s)
```
#### PASS 15 minutes
```
2025-06-02T05:16:34.1917565Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T05:16:34.1977989Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T05:16:34.2040769Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T05:16:34.2041620Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:04:15.200532701Z, ProjectID: 683d0602cc8f0935c7c43226, Cluster name: test-acc-tf-c-6428912438279746568
2025-06-02T05:16:34.2097248Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (921.45s)
```
#### PASS 15 minutes
```
2025-06-02T09:30:51.2521701Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T09:30:51.2627708Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T09:30:51.2696473Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-02T09:30:51.2698038Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:15:15.842023898Z, ProjectID: 683d40fccc8f0935c7c4b0e9, Cluster name: test-acc-tf-c-8559960152159156333
2025-06-02T09:30:51.2784452Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (941.49s)
```
### 2025-06-03
#### PASS 16 minutes
```
2025-06-03T02:00:08.0945307Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-03T02:00:08.0995930Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-03T02:00:08.1040652Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-03T02:00:08.1041486Z     pre_check.go:40: Time before creating cluster: 2025-06-03T01:06:18.749369295Z, ProjectID: 683e4a0525aee225e55c0761, Cluster name: test-acc-tf-c-5723901541381812118
2025-06-03T02:00:08.1112666Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (993.68s)
```
### 2025-06-04
#### PASS 17 minutes
```
2025-06-04T01:50:55.4299786Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-04T01:50:55.4364064Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-04T01:50:55.4423430Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-04T01:50:55.4424269Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:56:49.735273153Z, ProjectID: 683f991a040e94654178880b, Cluster name: test-acc-tf-c-3912699063696279734
2025-06-04T01:50:55.4470924Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1038.55s)
```
### 2025-06-05
#### FAIL 45 seconds
```
2025-06-05T00:35:38.5875535Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.5947796Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.6727711Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.6728494Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:11.017044967Z, ProjectID: 6840e4d6161ca93c1f05303e, Cluster name: test-acc-tf-c-3970772047223260728
2025-06-05T00:35:38.6734028Z    test_name=TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-05T00:35:38.6734369Z     resource_advanced_cluster_test.go:314: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6734571Z         
2025-06-05T00:35:38.6734722Z         Error: Error in create
2025-06-05T00:35:38.6734808Z         
2025-06-05T00:35:38.6735032Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6735483Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6735753Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6735845Z         
2025-06-05T00:35:38.6736163Z         cluster name: test-acc-tf-c-3970772047223260728, API error details:
2025-06-05T00:35:38.6736566Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6736923Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6737214Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6737349Z         BadRequestDetail: 
2025-06-05T00:35:38.6737551Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (45.79s)
```
### 2025-06-06
#### PASS 19 minutes
```
2025-06-06T05:30:18.8728365Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-06T05:30:18.8826067Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-06T05:30:18.8919130Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-06T05:30:18.8920668Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:02:46.385589657Z, ProjectID: 68423d84c64ff333daf6d97e, Cluster name: test-acc-tf-c-707608039688890861
2025-06-06T05:30:18.9027938Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1171.45s)
```
### 2025-06-07
#### PASS 18 minutes
```
2025-06-07T01:49:34.5030287Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-07T01:49:34.5083653Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-07T01:49:34.5141549Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-07T01:49:34.5142492Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:56:39.009595414Z, ProjectID: 68438dc4bf49d05598c179d9, Cluster name: test-acc-tf-c-8827062201490667564
2025-06-07T01:49:34.5202321Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1102.65s)
```
### 2025-06-08
#### PASS 16 minutes
```
2025-06-08T01:48:59.8825820Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-08T01:48:59.8911242Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-08T01:48:59.8962469Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-08T01:48:59.8963300Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:57:49.627833344Z, ProjectID: 6844df8669401b3bb3c38ee5, Cluster name: test-acc-tf-c-3511634357380822091
2025-06-08T01:48:59.9024581Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1015.62s)
```
### 2025-06-09
#### PASS 16 minutes
```
2025-06-09T04:06:35.6327800Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-09T04:06:35.6388588Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-09T04:06:35.6449614Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-09T04:06:35.6450450Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:58:23.974535707Z, ProjectID: 684631040a8f6759322c6122, Cluster name: test-acc-tf-c-3988082738034984165
2025-06-09T04:06:35.6498025Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1003.17s)
```
### 2025-06-10
#### PASS 22 minutes
```
2025-06-10T02:43:46.9783861Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-10T02:43:46.9834917Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-10T02:43:46.9883171Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-10T02:43:46.9883997Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:17:47.634496166Z, ProjectID: 6847873aa888514df22aa24c, Cluster name: test-acc-tf-c-6219656878367348091
2025-06-10T02:43:46.9940360Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1367.90s)
```
### 2025-06-11
#### PASS 15 minutes
```
2025-06-11T01:51:36.5487528Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-11T01:51:36.5556210Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-11T01:51:36.5613270Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-11T01:51:36.5614081Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:58:05.734477323Z, ProjectID: 6848d3e77856163396c4c67f, Cluster name: test-acc-tf-c-7165514346271701041
2025-06-11T01:51:36.5656816Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (942.58s)
```
#### PASS 17 minutes
```
2025-06-11T09:05:12.3187467Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-11T09:05:12.3275780Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-11T09:05:12.3365785Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-11T09:05:12.3367290Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:02:09.736933929Z, ProjectID: 6849378171e0a97458c8cea8, Cluster name: test-acc-tf-c-4888331563013529452
2025-06-11T09:05:12.3490431Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1072.06s)
```
### 2025-06-12
#### PASS 16 minutes
```
2025-06-12T01:54:44.2869951Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-12T01:54:44.2926314Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-12T01:54:44.2978934Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-12T01:54:44.2979755Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:59:20.355468606Z, ProjectID: 684a25bebe881b610a4fe361, Cluster name: test-acc-tf-c-3574458307956189643
2025-06-12T01:54:44.3039678Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1012.59s)
```
### 2025-06-13
#### PASS 17 minutes
```
2025-06-13T01:55:30.6442667Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-13T01:55:30.6492538Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-13T01:55:30.6545225Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-13T01:55:30.6546075Z     pre_check.go:40: Time before creating cluster: 2025-06-13T00:59:49.186854657Z, ProjectID: 684b7760e0143334a6a888c7, Cluster name: test-acc-tf-c-1535875551422637278
2025-06-13T01:55:30.6615547Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1036.01s)
```
### 2025-06-14
#### PASS 15 minutes
```
2025-06-14T02:34:39.9604141Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-14T02:34:39.9669500Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-14T02:34:39.9728811Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-14T02:34:39.9729652Z     pre_check.go:40: Time before creating cluster: 2025-06-14T01:01:47.02855682Z, ProjectID: 684cc9398f295e188b9ca0ae, Cluster name: test-acc-tf-c-8257736852776383080
2025-06-14T02:34:39.9769203Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (932.20s)
```
### 2025-06-15
#### PASS 16 minutes
```
2025-06-15T01:56:51.5902433Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-15T01:56:51.5991224Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-15T01:56:51.6116829Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-15T01:56:51.6118374Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:02:30.377273709Z, ProjectID: 684e1ae04bc09a1531970c40, Cluster name: test-acc-tf-c-8693740929696621576
2025-06-15T01:56:51.6206599Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1018.53s)
```
### 2025-06-16
#### PASS 21 minutes
```
2025-06-16T02:15:00.6533605Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-16T02:15:00.6590681Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-16T02:15:00.6633188Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-16T02:15:00.6634006Z     pre_check.go:40: Time before creating cluster: 2025-06-16T01:05:44.789056811Z, ProjectID: 684f6d3525b50457df2c102b, Cluster name: test-acc-tf-c-5967792809221862419
2025-06-16T02:15:00.6698925Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1285.45s)
```
### 2025-06-17
#### PASS 15 minutes
```
2025-06-17T01:54:49.3028590Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-17T01:54:49.3086737Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-17T01:54:49.3154089Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-17T01:54:49.3154924Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:57:35.279523995Z, ProjectID: 6850bcc26200565f4c9d267b, Cluster name: test-acc-tf-c-2419042743891259964
2025-06-17T01:54:49.3205213Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (955.82s)
```
### 2025-06-18
#### PASS 22 minutes
```
2025-06-18T01:55:10.7209504Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-18T01:55:10.7258621Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-18T01:55:10.7320918Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-18T01:55:10.7321877Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:59:32.354487163Z, ProjectID: 68520ed0d0293a55d1f3a4ab, Cluster name: test-acc-tf-c-4053389867687951147
2025-06-18T01:55:10.7405915Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1331.40s)
```
#### PASS 16 minutes
```
2025-06-18T08:48:56.0137210Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-18T08:48:56.0194881Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-18T08:48:56.0259318Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-18T08:48:56.0260143Z     pre_check.go:40: Time before creating cluster: 2025-06-18T07:57:03.49904134Z, ProjectID: 6852709dda72564c164a95fe, Cluster name: test-acc-tf-c-9095565427011017689
2025-06-18T08:48:56.0314425Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (974.97s)
```
### 2025-06-19
#### PASS 46 minutes
```
2025-06-19T02:33:55.9805232Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-19T02:33:55.9869472Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-19T02:33:55.9921274Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-19T02:33:55.9922308Z     pre_check.go:40: Time before creating cluster: 2025-06-19T01:05:52.33946857Z, ProjectID: 685361cfe16f343ef1d9ff85, Cluster name: test-acc-tf-c-8612300691625841756
2025-06-19T02:33:55.9981017Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (2788.46s)
```
### 2025-06-20
#### PASS 19 minutes
```
2025-06-20T01:46:12.3325481Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-20T01:46:12.3378788Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-20T01:46:12.3426463Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-20T01:46:12.3427457Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:58:51.530235162Z, ProjectID: 6854b1a8e16f343ef1dd4e1a, Cluster name: test-acc-tf-c-499088613114948515
2025-06-20T01:46:12.3498963Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1189.58s)
```
### 2025-06-21
#### PASS 15 minutes
```
2025-06-21T01:47:13.0069682Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-21T01:47:13.0120023Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-21T01:47:13.0174363Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-21T01:47:13.0175280Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:58:49.696186819Z, ProjectID: 6856032cf3e6555d2acbafbd, Cluster name: test-acc-tf-c-7794805575831009087
2025-06-21T01:47:13.0234458Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (939.16s)
```
### 2025-06-22
#### PASS 30 minutes
```
2025-06-22T03:04:12.6095858Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-22T03:04:12.6154781Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-22T03:04:12.6236172Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-22T03:04:12.6237870Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:02:48.956764652Z, ProjectID: 6857557eab82446d9bfb2ef2, Cluster name: test-acc-tf-c-6945724490861438229
2025-06-22T03:04:12.6379219Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1845.18s)
```
### 2025-06-23
#### PASS 17 minutes
```
2025-06-23T01:49:14.0895989Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-23T01:49:14.0985501Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-23T01:49:14.1066901Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-23T01:49:14.1067813Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:59:26.729660098Z, ProjectID: 6858a65b9c500e6d1cbd8548, Cluster name: test-acc-tf-c-616780479031396954
2025-06-23T01:49:14.1127079Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1027.25s)
```
### 2025-06-24
#### PASS 25 minutes
```
2025-06-24T02:00:03.6452409Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-24T02:00:03.6502889Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-24T02:00:03.6555420Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-24T02:00:03.6556630Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:57:47.813220734Z, ProjectID: 6859f77a2c29f60dd5412861, Cluster name: test-acc-tf-c-6485165951931302004
2025-06-24T02:00:03.6651270Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1520.44s)
```
### 2025-06-25
#### PASS 14 minutes
```
2025-06-25T01:46:02.1981212Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-25T01:46:02.2071817Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-25T01:46:02.2159493Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-25T01:46:02.2160319Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:57:06.219692832Z, ProjectID: 685b48d04b3ed2215cd7fb17, Cluster name: test-acc-tf-c-3732758542174381278
2025-06-25T01:46:02.2212563Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (846.31s)
```
### 2025-06-26
#### PASS 19 minutes
```
2025-06-26T01:58:04.7979623Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-26T01:58:04.8051019Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-26T01:58:04.8113714Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-26T01:58:04.8114555Z     pre_check.go:40: Time before creating cluster: 2025-06-26T01:03:04.566005886Z, ProjectID: 685c9bbffd004332ce390e76, Cluster name: test-acc-tf-c-6404075898143246698
2025-06-26T01:58:04.8160024Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (1149.96s)
```
#### PASS 15 minutes
```
2025-06-26T05:26:49.4796968Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-26T05:26:49.4906229Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-26T05:26:49.4974272Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-06-26T05:26:49.4975101Z     pre_check.go:40: Time before creating cluster: 2025-06-26T04:40:59.217793054Z, ProjectID: 685ccebf27410c4e07cdff9f, Cluster name: test-acc-tf-c-5503899097295495626
2025-06-26T05:26:49.5022599Z --- PASS: TestAccClusterAdvancedCluster_unpausedToPaused (903.50s)
```