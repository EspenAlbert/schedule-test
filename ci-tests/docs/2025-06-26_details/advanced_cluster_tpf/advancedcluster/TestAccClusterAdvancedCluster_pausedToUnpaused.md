# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 22 minutes
```
2025-05-28T02:03:35.3181379Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T02:03:35.3294418Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T02:03:35.3348034Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T02:03:35.3348884Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:17:08.731099293Z, ProjectID: 683663751d73dc16f08484ec, Cluster name: test-acc-tf-c-2584144315904498435
2025-05-28T02:03:35.3422449Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1379.47s)
```
#### FAIL 15 minutes
```
2025-05-28T12:04:46.9782678Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:46.9830603Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:46.9940220Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:46.9941068Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:03:56.037904623Z, ProjectID: 6836d0fdd000797dbe921ab2, Cluster name: test-acc-tf-c-5388938651088140519
2025-05-28T12:04:47.0055003Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:47.0055576Z     resource_advanced_cluster_test.go:342: Step 1/5 error: Error running apply: exit status 1
2025-05-28T12:04:47.0055982Z         
2025-05-28T12:04:47.0056268Z         Error: error resolving container IDs
2025-05-28T12:04:47.0056534Z         
2025-05-28T12:04:47.0056848Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0057481Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0058066Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0058364Z         
2025-05-28T12:04:47.0058803Z         cluster name = test-acc-tf-c-5388938651088140519, error details: (503 Service
2025-05-28T12:04:47.0059410Z         Unavailable) failed to decode response body: undefined response type
2025-05-28T12:04:47.0059877Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (917.67s)
```
#### PASS 27 minutes
```
2025-05-28T13:47:11.9975257Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T13:47:12.0059507Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T13:47:12.0118958Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T13:47:12.0119813Z     pre_check.go:40: Time before creating cluster: 2025-05-28T12:51:11.833916869Z, ProjectID: 6837061103b2ee7db737eda2, Cluster name: test-acc-tf-c-2484272819014870586
2025-05-28T13:47:12.0179428Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1623.51s)
```
### 2025-05-29
#### PASS 29 minutes
```
2025-05-29T02:20:21.7253088Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-29T02:20:21.7317467Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-29T02:20:21.7393622Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-29T02:20:21.7394488Z     pre_check.go:40: Time before creating cluster: 2025-05-29T01:06:55.153811351Z, ProjectID: 6837b277a548243915a5f9bd, Cluster name: test-acc-tf-c-6347794331388248554
2025-05-29T02:20:21.7457392Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1770.15s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T03:30:24.2294645Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-30T03:30:24.2354026Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-30T03:30:24.2410439Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-30T03:30:24.2411285Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:03:16.847104086Z, ProjectID: 683903333a84470fe9d528d3, Cluster name: test-acc-tf-c-2452276583580700372
2025-05-30T03:30:24.2481757Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (5790.31s)
```
#### PASS 32 minutes
```
2025-05-30T08:55:11.7530572Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-30T08:55:11.7598952Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-30T08:55:11.7645153Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-30T08:55:11.7646270Z     pre_check.go:40: Time before creating cluster: 2025-05-30T07:59:02.703269457Z, ProjectID: 683964cf12efeb384251aa14, Cluster name: test-acc-tf-c-7721901348626784482
2025-05-30T08:55:11.7756929Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1963.18s)
```
### 2025-05-31
#### PASS 25 minutes
```
2025-05-31T04:18:53.2224999Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-31T04:18:53.2273027Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-31T04:18:53.2310504Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-31T04:18:53.2311379Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:03:28.794325324Z, ProjectID: 683a54e7ebf07c11d4e9679c, Cluster name: test-acc-tf-c-6642511529220193409
2025-05-31T04:18:53.2406135Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1517.21s)
```
### 2025-06-01
#### PASS 23 minutes
```
2025-06-01T04:20:15.0515447Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T04:20:15.0575526Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T04:20:15.0624629Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T04:20:15.0625488Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:06:25.051603569Z, ProjectID: 683ba7042ebc1806778a323d, Cluster name: test-acc-tf-c-7342120890994635609
2025-06-01T04:20:15.0700027Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1396.63s)
```
#### PASS 23 minutes
```
2025-06-01T08:29:24.1309772Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T08:29:24.1359739Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T08:29:24.1420677Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T08:29:24.1421860Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:15:02.460482434Z, ProjectID: 683be1537bf9cf70212c4e79, Cluster name: test-acc-tf-c-4560321540037962525
2025-06-01T08:29:24.1500950Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1380.40s)
```
#### PASS 24 minutes
```
2025-06-01T12:36:46.3864120Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T12:36:46.3923767Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T12:36:46.3979300Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T12:36:46.3980170Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:24:11.890802998Z, ProjectID: 683c1bc2cc8f0935c7c25420, Cluster name: test-acc-tf-c-5750701112679074376
2025-06-01T12:36:46.4065403Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1456.81s)
```
#### PASS 22 minutes
```
2025-06-01T16:46:33.8302654Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T16:46:33.8351442Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T16:46:33.8424188Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T16:46:33.8425101Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:33:04.639874274Z, ProjectID: 683c5606cc8f0935c7c2b178, Cluster name: test-acc-tf-c-1336936233668628611
2025-06-01T16:46:33.8494092Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1357.17s)
```
#### PASS 23 minutes
```
2025-06-01T20:56:30.1307343Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T20:56:30.1397641Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T20:56:30.1440030Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-01T20:56:30.1440933Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:43:15.503837151Z, ProjectID: 683c90bd7bf9cf70212dc2b3, Cluster name: test-acc-tf-c-2123185805114885305
2025-06-01T20:56:30.1540756Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1402.12s)
```
### 2025-06-02
#### PASS 23 minutes
```
2025-06-02T01:07:47.7468560Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T01:07:47.7525997Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T01:07:47.7609784Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T01:07:47.7611399Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:51:43.820937815Z, ProjectID: 683ccacd7bf9cf70212e25eb, Cluster name: test-acc-tf-c-8233851081186872504
2025-06-02T01:07:47.7739888Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1413.93s)
```
#### PASS 26 minutes
```
2025-06-02T04:19:30.0959152Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T04:19:30.1013208Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T04:19:30.1073362Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T04:19:30.1074237Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:05:43.498391436Z, ProjectID: 683cf854cc8f0935c7c3e730, Cluster name: test-acc-tf-c-5115315218007446590
2025-06-02T04:19:30.1151675Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1571.60s)
```
#### PASS 23 minutes
```
2025-06-02T05:16:34.1918352Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T05:16:34.1977604Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T05:16:34.2039010Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T05:16:34.2039869Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:04:10.199484608Z, ProjectID: 683d0602cc8f0935c7c43226, Cluster name: test-acc-tf-c-4554535275144427657
2025-06-02T05:16:34.2108772Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1436.84s)
```
#### PASS 23 minutes
```
2025-06-02T09:30:51.2523516Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T09:30:51.2656530Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T09:30:51.2735571Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-02T09:30:51.2736573Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:15:55.855138189Z, ProjectID: 683d40fccc8f0935c7c4b0e9, Cluster name: test-acc-tf-c-6418923593846506579
2025-06-02T09:30:51.2798779Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1407.27s)
```
### 2025-06-03
#### PASS 25 minutes
```
2025-06-03T02:00:08.0946261Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-03T02:00:08.0996306Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-03T02:00:08.1042157Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-03T02:00:08.1042983Z     pre_check.go:40: Time before creating cluster: 2025-06-03T01:06:23.750016513Z, ProjectID: 683e4a0525aee225e55c0761, Cluster name: test-acc-tf-c-6746139589949647921
2025-06-03T02:00:08.1126095Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1518.34s)
```
### 2025-06-04
#### PASS 25 minutes
```
2025-06-04T01:50:55.4300645Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-04T01:50:55.4363684Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-04T01:50:55.4421913Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-04T01:50:55.4422755Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:56:44.734333788Z, ProjectID: 683f991a040e94654178880b, Cluster name: test-acc-tf-c-616057622539896957
2025-06-04T01:50:55.4482623Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1553.77s)
```
### 2025-06-05
#### FAIL 40 seconds
```
2025-06-05T00:35:38.5876302Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:35:38.5947419Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:35:38.6717581Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:35:38.6718362Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:06.016792531Z, ProjectID: 6840e4d6161ca93c1f05303e, Cluster name: test-acc-tf-c-3350460911748810959
2025-06-05T00:35:38.6724146Z    test_working_directory=/tmp/plugintest2694626881 test_name=TestAccClusterAdvancedCluster_pausedToUnpaused test_step_number=1 test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform
2025-06-05T00:35:38.6724489Z     resource_advanced_cluster_test.go:342: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:35:38.6724585Z         
2025-06-05T00:35:38.6724735Z         Error: Error in create
2025-06-05T00:35:38.6724820Z         
2025-06-05T00:35:38.6725044Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6725489Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6725758Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6725853Z         
2025-06-05T00:35:38.6726166Z         cluster name: test-acc-tf-c-3350460911748810959, API error details:
2025-06-05T00:35:38.6726570Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6726926Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6727213Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6727352Z         BadRequestDetail: 
2025-06-05T00:35:38.6727548Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (40.82s)
```
### 2025-06-06
#### PASS 27 minutes
```
2025-06-06T05:30:18.8729695Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-06T05:30:18.8814409Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-06T05:30:18.8910149Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-06T05:30:18.8911858Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:02:31.384138097Z, ProjectID: 68423d84c64ff333daf6d97e, Cluster name: test-acc-tf-c-8958500941227727277
2025-06-06T05:30:18.9045013Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1642.53s)
```
### 2025-06-07
#### PASS 30 minutes
```
2025-06-07T01:49:34.5031154Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-07T01:49:34.5081894Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-07T01:49:34.5152898Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-07T01:49:34.5153725Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:57:14.014932704Z, ProjectID: 68438dc4bf49d05598c179d9, Cluster name: test-acc-tf-c-8074697626745166362
2025-06-07T01:49:34.5216070Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1833.34s)
```
### 2025-06-08
#### PASS 26 minutes
```
2025-06-08T01:48:59.8827096Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-08T01:48:59.8910869Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-08T01:48:59.8960848Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-08T01:48:59.8961678Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:57:44.627233972Z, ProjectID: 6844df8669401b3bb3c38ee5, Cluster name: test-acc-tf-c-3668994086886019748
2025-06-08T01:48:59.9039574Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1585.54s)
```
### 2025-06-09
#### PASS 27 minutes
```
2025-06-09T04:06:35.6328557Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-09T04:06:35.6388099Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-09T04:06:35.6448088Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-09T04:06:35.6448936Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:58:18.973832612Z, ProjectID: 684631040a8f6759322c6122, Cluster name: test-acc-tf-c-243931475000677638
2025-06-09T04:06:35.6509376Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1668.57s)
```
### 2025-06-10
#### PASS 45 minutes
```
2025-06-10T02:43:46.9784695Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-10T02:43:46.9842784Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-10T02:43:46.9902100Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-10T02:43:46.9902924Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:18:27.640342479Z, ProjectID: 6847873aa888514df22aa24c, Cluster name: test-acc-tf-c-5713531620119809891
2025-06-10T02:43:46.9976935Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (2717.85s)
```
### 2025-06-11
#### PASS 26 minutes
```
2025-06-11T01:51:36.5488359Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-11T01:51:36.5536139Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-11T01:51:36.5602779Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-11T01:51:36.5603596Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:57:35.729705474Z, ProjectID: 6848d3e77856163396c4c67f, Cluster name: test-acc-tf-c-6200947167303176169
2025-06-11T01:51:36.5671055Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1610.45s)
```
#### PASS 31 minutes
```
2025-06-11T09:05:12.3188935Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-11T09:05:12.3275132Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-11T09:05:12.3362918Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-11T09:05:12.3364430Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:02:04.736431151Z, ProjectID: 6849378171e0a97458c8cea8, Cluster name: test-acc-tf-c-4978179266379012723
2025-06-11T09:05:12.3512345Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1914.96s)
```
### 2025-06-12
#### PASS 27 minutes
```
2025-06-12T01:54:44.2871061Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-12T01:54:44.2925949Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-12T01:54:44.2977192Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-12T01:54:44.2978263Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:59:15.354474791Z, ProjectID: 684a25bebe881b610a4fe361, Cluster name: test-acc-tf-c-7217085950972946921
2025-06-12T01:54:44.3053144Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1678.89s)
```
### 2025-06-13
#### PASS 29 minutes
```
2025-06-13T01:55:30.6443601Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-13T01:55:30.6490148Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-13T01:55:30.6564390Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-13T01:55:30.6565223Z     pre_check.go:40: Time before creating cluster: 2025-06-13T01:00:24.19151514Z, ProjectID: 684b7760e0143334a6a888c7, Cluster name: test-acc-tf-c-1340808518338119042
2025-06-13T01:55:30.6627257Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1746.28s)
```
### 2025-06-14
#### PASS 28 minutes
```
2025-06-14T02:34:39.9605142Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-14T02:34:39.9671986Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-14T02:34:39.9709256Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-14T02:34:39.9710116Z     pre_check.go:40: Time before creating cluster: 2025-06-14T01:01:27.02585019Z, ProjectID: 684cc9398f295e188b9ca0ae, Cluster name: test-acc-tf-c-5768463684504907897
2025-06-14T02:34:39.9810093Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1733.81s)
```
### 2025-06-15
#### PASS 24 minutes
```
2025-06-15T01:56:51.5903649Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-15T01:56:51.6010563Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-15T01:56:51.6119490Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-15T01:56:51.6120882Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:02:35.377629212Z, ProjectID: 684e1ae04bc09a1531970c40, Cluster name: test-acc-tf-c-2774987770416683622
2025-06-15T01:56:51.6223655Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1485.35s)
```
### 2025-06-16
#### PASS 30 minutes
```
2025-06-16T02:15:00.6534341Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-16T02:15:00.6590190Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-16T02:15:00.6631703Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-16T02:15:00.6632532Z     pre_check.go:40: Time before creating cluster: 2025-06-16T01:05:39.788551078Z, ProjectID: 684f6d3525b50457df2c102b, Cluster name: test-acc-tf-c-6288010588073290714
2025-06-16T02:15:00.6711299Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1828.12s)
```
### 2025-06-17
#### PASS 25 minutes
```
2025-06-17T01:54:49.3029329Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-17T01:54:49.3081534Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-17T01:54:49.3142849Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-17T01:54:49.3143705Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:57:00.275172838Z, ProjectID: 6850bcc26200565f4c9d267b, Cluster name: test-acc-tf-c-2587370054113427940
2025-06-17T01:54:49.3228074Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1535.11s)
```
### 2025-06-18
#### PASS 27 minutes
```
2025-06-18T01:55:10.7210237Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-18T01:55:10.7258256Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-18T01:55:10.7319128Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-18T01:55:10.7320117Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:59:27.35398405Z, ProjectID: 68520ed0d0293a55d1f3a4ab, Cluster name: test-acc-tf-c-4182273803666227711
2025-06-18T01:55:10.7415389Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1637.54s)
```
#### PASS 24 minutes
```
2025-06-18T08:48:56.0137975Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-18T08:48:56.0193734Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-18T08:48:56.0257816Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-18T08:48:56.0258644Z     pre_check.go:40: Time before creating cluster: 2025-06-18T07:56:58.498386067Z, ProjectID: 6852709dda72564c164a95fe, Cluster name: test-acc-tf-c-4719363444340179203
2025-06-18T08:48:56.0327787Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1487.24s)
```
### 2025-06-19
#### PASS 53 minutes
```
2025-06-19T02:33:55.9805973Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-19T02:33:55.9875020Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-19T02:33:55.9940594Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-19T02:33:55.9941444Z     pre_check.go:40: Time before creating cluster: 2025-06-19T01:06:32.345399119Z, ProjectID: 685361cfe16f343ef1d9ff85, Cluster name: test-acc-tf-c-2651990425726309160
2025-06-19T02:33:55.9998885Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (3201.01s)
```
### 2025-06-20
#### PASS 26 minutes
```
2025-06-20T01:46:12.3326221Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-20T01:46:12.3372562Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-20T01:46:12.3405217Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-20T01:46:12.3406072Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:58:41.529045462Z, ProjectID: 6854b1a8e16f343ef1dd4e1a, Cluster name: test-acc-tf-c-720428626174215823
2025-06-20T01:46:12.3506485Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1616.41s)
```
### 2025-06-21
#### PASS 24 minutes
```
2025-06-21T01:47:13.0070413Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-21T01:47:13.0116452Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-21T01:47:13.0152583Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-21T01:47:13.0153422Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:58:19.691870696Z, ProjectID: 6856032cf3e6555d2acbafbd, Cluster name: test-acc-tf-c-7627298188414517111
2025-06-21T01:47:13.0247091Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1455.86s)
```
### 2025-06-22
#### PASS 35 minutes
```
2025-06-22T03:04:12.6096778Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-22T03:04:12.6154415Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-22T03:04:12.6233447Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-22T03:04:12.6234985Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:02:43.956409986Z, ProjectID: 6857557eab82446d9bfb2ef2, Cluster name: test-acc-tf-c-2377571832431024630
2025-06-22T03:04:12.6392785Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (2116.25s)
```
### 2025-06-23
#### PASS 23 minutes
```
2025-06-23T01:49:14.0897284Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-23T01:49:14.0984858Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-23T01:49:14.1065408Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-23T01:49:14.1066237Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:59:21.729319986Z, ProjectID: 6858a65b9c500e6d1cbd8548, Cluster name: test-acc-tf-c-527464253820717489
2025-06-23T01:49:14.1137321Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1393.04s)
```
### 2025-06-24
#### PASS 33 minutes
```
2025-06-24T02:00:03.6453143Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-24T02:00:03.6499918Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-24T02:00:03.6553655Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-24T02:00:03.6554620Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:57:42.812540634Z, ProjectID: 6859f77a2c29f60dd5412861, Cluster name: test-acc-tf-c-9160688778497668989
2025-06-24T02:00:03.6661886Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (2039.93s)
```
### 2025-06-25
#### PASS 22 minutes
```
2025-06-25T01:46:02.1982489Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-25T01:46:02.2065458Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-25T01:46:02.2146814Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-25T01:46:02.2147665Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:56:46.217328085Z, ProjectID: 685b48d04b3ed2215cd7fb17, Cluster name: test-acc-tf-c-7210667392012732236
2025-06-25T01:46:02.2227021Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1348.73s)
```
### 2025-06-26
#### PASS 25 minutes
```
2025-06-26T01:58:04.7980345Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-26T01:58:04.8044137Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-26T01:58:04.8104213Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-26T01:58:04.8105046Z     pre_check.go:40: Time before creating cluster: 2025-06-26T01:02:54.564726525Z, ProjectID: 685c9bbffd004332ce390e76, Cluster name: test-acc-tf-c-4000351337382073150
2025-06-26T01:58:04.8174054Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1504.79s)
```
#### PASS 21 minutes
```
2025-06-26T05:26:49.4798290Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-26T05:26:49.4904542Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-26T05:26:49.4960144Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-26T05:26:49.4961083Z     pre_check.go:40: Time before creating cluster: 2025-06-26T04:40:34.2141061Z, ProjectID: 685ccebf27410c4e07cdff9f, Cluster name: test-acc-tf-c-8032150950600685622
2025-06-26T05:26:49.5033932Z --- PASS: TestAccClusterAdvancedCluster_pausedToUnpaused (1309.01s)
```