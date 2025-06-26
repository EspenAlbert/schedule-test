# advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 42) FAIL
Success rate: 97.67%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS a minute
```
2025-05-28T01:22:14.1025410Z === RUN   TestAccClusterFlexCluster_basic
2025-05-28T01:23:14.7657684Z --- PASS: TestAccClusterFlexCluster_basic (60.66s)
```
#### PASS a minute
```
2025-05-28T09:05:18.4054893Z === RUN   TestAccClusterFlexCluster_basic
2025-05-28T09:06:19.1673575Z --- PASS: TestAccClusterFlexCluster_basic (60.76s)
```
#### PASS a minute
```
2025-05-28T12:49:59.4183344Z === RUN   TestAccClusterFlexCluster_basic
2025-05-28T12:51:02.8136755Z --- PASS: TestAccClusterFlexCluster_basic (63.40s)
```
### 2025-05-29
#### PASS a minute
```
2025-05-29T01:05:11.2187162Z === RUN   TestAccClusterFlexCluster_basic
2025-05-29T01:06:48.9897066Z --- PASS: TestAccClusterFlexCluster_basic (97.77s)
```
#### PASS a minute
```
2025-05-29T15:22:21.9892239Z === RUN   TestAccClusterFlexCluster_basic
2025-05-29T15:23:22.3212570Z --- PASS: TestAccClusterFlexCluster_basic (60.33s)
```
### 2025-05-30
#### PASS 58 seconds
```
2025-05-30T01:06:55.6006642Z === RUN   TestAccClusterFlexCluster_basic
2025-05-30T01:07:54.5164324Z --- PASS: TestAccClusterFlexCluster_basic (58.92s)
```
#### PASS 59 seconds
```
2025-05-30T08:00:07.9472376Z === RUN   TestAccClusterFlexCluster_basic
2025-05-30T08:01:07.2323707Z --- PASS: TestAccClusterFlexCluster_basic (59.29s)
```
### 2025-05-31
#### PASS 58 seconds
```
2025-05-31T01:05:20.1515948Z === RUN   TestAccClusterFlexCluster_basic
2025-05-31T01:06:19.0395305Z --- PASS: TestAccClusterFlexCluster_basic (58.89s)
```
### 2025-06-01
#### PASS a minute
```
2025-06-01T01:08:16.1326843Z === RUN   TestAccClusterFlexCluster_basic
2025-06-01T01:09:44.9332947Z --- PASS: TestAccClusterFlexCluster_basic (88.80s)
```
#### PASS 58 seconds
```
2025-06-01T05:17:56.8029842Z === RUN   TestAccClusterFlexCluster_basic
2025-06-01T05:18:55.5729749Z --- PASS: TestAccClusterFlexCluster_basic (58.77s)
```
#### PASS a minute
```
2025-06-01T09:27:22.8979326Z === RUN   TestAccClusterFlexCluster_basic
2025-06-01T09:28:31.6410331Z --- PASS: TestAccClusterFlexCluster_basic (68.74s)
```
#### PASS a minute
```
2025-06-01T13:36:35.4565007Z === RUN   TestAccClusterFlexCluster_basic
2025-06-01T13:37:35.7350498Z --- PASS: TestAccClusterFlexCluster_basic (60.28s)
```
#### PASS 58 seconds
```
2025-06-01T17:45:44.0362015Z === RUN   TestAccClusterFlexCluster_basic
2025-06-01T17:46:42.8785125Z --- PASS: TestAccClusterFlexCluster_basic (58.84s)
```
#### PASS a minute
```
2025-06-01T21:52:55.6235993Z === RUN   TestAccClusterFlexCluster_basic
2025-06-01T21:54:01.2418711Z --- PASS: TestAccClusterFlexCluster_basic (65.62s)
```
### 2025-06-02
#### PASS a minute
```
2025-06-02T01:06:58.6021102Z === RUN   TestAccClusterFlexCluster_basic
2025-06-02T01:08:04.0052184Z --- PASS: TestAccClusterFlexCluster_basic (65.40s)
```
#### PASS a minute
```
2025-06-02T02:05:58.2748868Z === RUN   TestAccClusterFlexCluster_basic
2025-06-02T02:07:09.8470140Z --- PASS: TestAccClusterFlexCluster_basic (71.57s)
```
#### PASS a minute
```
2025-06-02T06:18:23.6558071Z === RUN   TestAccClusterFlexCluster_basic
2025-06-02T06:19:34.1913473Z --- PASS: TestAccClusterFlexCluster_basic (70.54s)
```
### 2025-06-03
#### PASS 59 seconds
```
2025-06-03T01:07:35.9843623Z === RUN   TestAccClusterFlexCluster_basic
2025-06-03T01:08:34.9980945Z --- PASS: TestAccClusterFlexCluster_basic (59.01s)
```
### 2025-06-04
#### PASS a minute
```
2025-06-04T00:58:43.5467624Z === RUN   TestAccClusterFlexCluster_basic
2025-06-04T00:59:43.6855217Z --- PASS: TestAccClusterFlexCluster_basic (60.14s)
```
### 2025-06-05
#### FAIL a moment
```
2025-06-05T00:35:42.0094745Z === RUN   TestAccClusterFlexCluster_basic
2025-06-05T00:35:42.7671603Z   
2025-06-05T00:35:42.7674166Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:42.7674858Z         
2025-06-05T00:35:42.7677641Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4ce161ca93c1f052c81/flexClusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:42.7678877Z         
2025-06-05T00:35:42.7679214Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:42.7679875Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:42.7680468Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:42.7702824Z         
2025-06-05T00:35:42.8152025Z --- FAIL: TestAccClusterFlexCluster_basic (0.81s)
```
### 2025-06-06
#### PASS 3 minutes
```
2025-06-06T01:02:53.0408888Z === RUN   TestAccClusterFlexCluster_basic
2025-06-06T01:06:43.1261252Z --- PASS: TestAccClusterFlexCluster_basic (230.09s)
```
### 2025-06-07
#### PASS 58 seconds
```
2025-06-07T00:58:23.7213635Z === RUN   TestAccClusterFlexCluster_basic
2025-06-07T00:59:22.5192502Z --- PASS: TestAccClusterFlexCluster_basic (58.80s)
```
### 2025-06-08
#### PASS 58 seconds
```
2025-06-08T00:58:29.0696550Z === RUN   TestAccClusterFlexCluster_basic
2025-06-08T00:59:27.3051232Z --- PASS: TestAccClusterFlexCluster_basic (58.24s)
```
### 2025-06-09
#### PASS 59 seconds
```
2025-06-09T00:59:52.5798745Z === RUN   TestAccClusterFlexCluster_basic
2025-06-09T01:00:51.7495025Z --- PASS: TestAccClusterFlexCluster_basic (59.17s)
```
### 2025-06-10
#### PASS a minute
```
2025-06-10T01:06:31.9130015Z === RUN   TestAccClusterFlexCluster_basic
2025-06-10T01:07:33.5622803Z --- PASS: TestAccClusterFlexCluster_basic (61.65s)
```
### 2025-06-11
#### PASS a minute
```
2025-06-11T01:01:40.9379232Z === RUN   TestAccClusterFlexCluster_basic
2025-06-11T01:03:00.0805150Z --- PASS: TestAccClusterFlexCluster_basic (79.14s)
```
#### PASS a minute
```
2025-06-11T08:05:35.4627651Z === RUN   TestAccClusterFlexCluster_basic
2025-06-11T08:06:40.5638548Z --- PASS: TestAccClusterFlexCluster_basic (65.10s)
```
### 2025-06-12
#### PASS a minute
```
2025-06-12T01:01:16.9018766Z === RUN   TestAccClusterFlexCluster_basic
2025-06-12T01:02:47.3381946Z --- PASS: TestAccClusterFlexCluster_basic (90.44s)
```
### 2025-06-13
#### PASS a minute
```
2025-06-13T01:00:51.5250323Z === RUN   TestAccClusterFlexCluster_basic
2025-06-13T01:02:08.8074835Z --- PASS: TestAccClusterFlexCluster_basic (77.28s)
```
### 2025-06-14
#### PASS 2 minutes
```
2025-06-14T01:29:14.2064429Z === RUN   TestAccClusterFlexCluster_basic
2025-06-14T01:32:10.2834980Z --- PASS: TestAccClusterFlexCluster_basic (176.08s)
```
### 2025-06-15
#### PASS a minute
```
2025-06-15T01:02:56.3131155Z === RUN   TestAccClusterFlexCluster_basic
2025-06-15T01:04:05.9957549Z --- PASS: TestAccClusterFlexCluster_basic (69.68s)
```
### 2025-06-16
#### PASS a minute
```
2025-06-16T01:03:24.4411692Z === RUN   TestAccClusterFlexCluster_basic
2025-06-16T01:04:53.8401220Z --- PASS: TestAccClusterFlexCluster_basic (89.40s)
```
### 2025-06-17
#### PASS a minute
```
2025-06-17T01:01:55.8030502Z === RUN   TestAccClusterFlexCluster_basic
2025-06-17T01:03:31.0171656Z --- PASS: TestAccClusterFlexCluster_basic (95.22s)
```
### 2025-06-18
#### PASS a minute
```
2025-06-18T00:57:49.7798028Z === RUN   TestAccClusterFlexCluster_basic
2025-06-18T00:59:11.3659176Z --- PASS: TestAccClusterFlexCluster_basic (81.59s)
```
#### PASS a minute
```
2025-06-18T07:58:31.7633932Z === RUN   TestAccClusterFlexCluster_basic
2025-06-18T07:59:36.5582186Z --- PASS: TestAccClusterFlexCluster_basic (64.80s)
```
### 2025-06-19
#### PASS a minute
```
2025-06-19T01:07:44.7898474Z === RUN   TestAccClusterFlexCluster_basic
2025-06-19T01:09:39.9308922Z --- PASS: TestAccClusterFlexCluster_basic (115.14s)
```
### 2025-06-20
#### PASS a minute
```
2025-06-20T01:01:54.2563274Z === RUN   TestAccClusterFlexCluster_basic
2025-06-20T01:03:39.2380239Z --- PASS: TestAccClusterFlexCluster_basic (104.98s)
```
### 2025-06-21
#### PASS a minute
```
2025-06-21T01:01:57.0620769Z === RUN   TestAccClusterFlexCluster_basic
2025-06-21T01:03:06.3644850Z --- PASS: TestAccClusterFlexCluster_basic (69.30s)
```
### 2025-06-22
#### PASS a minute
```
2025-06-22T01:03:39.7373159Z === RUN   TestAccClusterFlexCluster_basic
2025-06-22T01:05:07.8915084Z --- PASS: TestAccClusterFlexCluster_basic (88.16s)
```
### 2025-06-23
#### PASS a minute
```
2025-06-23T01:00:25.7367895Z === RUN   TestAccClusterFlexCluster_basic
2025-06-23T01:01:46.4696570Z --- PASS: TestAccClusterFlexCluster_basic (80.73s)
```
### 2025-06-24
#### PASS a minute
```
2025-06-24T00:59:21.2379805Z === RUN   TestAccClusterFlexCluster_basic
2025-06-24T01:00:52.0491298Z --- PASS: TestAccClusterFlexCluster_basic (90.81s)
```
### 2025-06-25
#### PASS a minute
```
2025-06-25T01:09:33.2165760Z === RUN   TestAccClusterFlexCluster_basic
2025-06-25T01:10:48.9012751Z --- PASS: TestAccClusterFlexCluster_basic (75.69s)
```
### 2025-06-26
#### PASS 59 seconds
```
2025-06-26T00:59:07.7399808Z === RUN   TestAccClusterFlexCluster_basic
2025-06-26T01:00:07.3622793Z --- PASS: TestAccClusterFlexCluster_basic (59.62s)
```