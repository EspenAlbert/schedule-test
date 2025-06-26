# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 15 minutes
```
2025-05-28T02:03:35.3126381Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T02:03:35.3282800Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T02:03:35.3407861Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (931.18s)
```
#### FAIL 3 hours
```
2025-05-28T12:04:46.9750245Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T12:04:46.9844021Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T12:04:47.0084295Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T12:04:47.0084917Z     resource_advanced_cluster_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:04:47.0085359Z         
2025-05-28T12:04:47.0085606Z         Error: Error in create
2025-05-28T12:04:47.0085840Z         
2025-05-28T12:04:47.0086159Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0086797Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0087546Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0087849Z         
2025-05-28T12:04:47.0088305Z         cluster=test-acc-tf-c-5738060353040705697 didn't reach desired state: IDLE,
2025-05-28T12:04:47.0088910Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-05-28T12:04:47.0089329Z         'CREATING', timeout: 3h0m0s)
2025-05-28T12:04:47.0089696Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (10806.47s)
```
#### PASS 18 minutes
```
2025-05-28T13:47:11.9943329Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T13:47:12.0060322Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-28T13:47:12.0165663Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1086.34s)
```
### 2025-05-29
#### PASS 24 minutes
```
2025-05-29T02:20:21.7222059Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-29T02:20:21.7312632Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-29T02:20:21.7444823Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1473.51s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T03:30:24.2259697Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-30T03:30:24.2356194Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-30T03:30:24.2460870Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (5052.88s)
```
#### PASS 22 minutes
```
2025-05-30T08:55:11.7472593Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-30T08:55:11.7610207Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-30T08:55:11.7739929Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1372.93s)
```
### 2025-05-31
#### PASS 18 minutes
```
2025-05-31T04:18:53.2181466Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-31T04:18:53.2291031Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-05-31T04:18:53.2395525Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1087.80s)
```
### 2025-06-01
#### PASS 14 minutes
```
2025-06-01T04:20:15.0481846Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T04:20:15.0585389Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T04:20:15.0685300Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (894.41s)
```
#### PASS 16 minutes
```
2025-06-01T08:29:24.1278180Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T08:29:24.1374195Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T08:29:24.1489402Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (981.94s)
```
#### PASS 14 minutes
```
2025-06-01T12:36:46.3833977Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T12:36:46.3933582Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T12:36:46.4050842Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (890.22s)
```
#### PASS 16 minutes
```
2025-06-01T16:46:33.8269414Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T16:46:33.8372401Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T16:46:33.8482599Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (980.52s)
```
#### PASS 14 minutes
```
2025-06-01T20:56:30.1246587Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T20:56:30.1412148Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-01T20:56:30.1524296Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (864.09s)
```
### 2025-06-02
#### PASS 14 minutes
```
2025-06-02T01:07:47.7438240Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T01:07:47.7530894Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T01:07:47.7707337Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (878.36s)
```
#### PASS 17 minutes
```
2025-06-02T04:19:30.0926521Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T04:19:30.1028866Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T04:19:30.1135162Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1026.69s)
```
#### PASS 14 minutes
```
2025-06-02T05:16:34.1884212Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T05:16:34.1970730Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T05:16:34.2094369Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (864.42s)
```
#### PASS 15 minutes
```
2025-06-02T09:30:51.2466206Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T09:30:51.2634901Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-02T09:30:51.2785705Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (954.91s)
```
### 2025-06-03
#### PASS 15 minutes
```
2025-06-03T02:00:08.0910360Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-03T02:00:08.1007897Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-03T02:00:08.1110884Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (959.94s)
```
### 2025-06-04
#### PASS 16 minutes
```
2025-06-04T01:50:55.4264044Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-04T01:50:55.4366890Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-04T01:50:55.4469421Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (989.95s)
```
### 2025-06-05
#### FAIL 6 seconds
```
2025-06-05T00:35:38.5805359Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.5954660Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.6499004Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-05T00:35:38.6500139Z     resource_advanced_cluster_migration_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6500937Z         
2025-06-05T00:35:38.6501391Z         Error: Error in create
2025-06-05T00:35:38.6501815Z         
2025-06-05T00:35:38.6502404Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6503601Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6504661Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6505208Z         
2025-06-05T00:35:38.6505978Z         cluster name: test-acc-tf-c-5699110514341908503, API error details:
2025-06-05T00:35:38.6507216Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c6161ca93c1f0527b5/clusters
2025-06-05T00:35:38.6508672Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6509753Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6510436Z         BadRequestDetail: 
2025-06-05T00:35:38.6539577Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (6.59s)
```
### 2025-06-06
#### PASS 15 minutes
```
2025-06-06T05:30:18.8674054Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-06T05:30:18.8841588Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-06T05:30:18.9008447Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (948.04s)
```
### 2025-06-07
#### PASS 16 minutes
```
2025-06-07T01:49:34.4997112Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-07T01:49:34.5093439Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-07T01:49:34.5198830Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (969.68s)
```
### 2025-06-08
#### PASS 16 minutes
```
2025-06-08T01:48:59.8776457Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-08T01:48:59.8912158Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-08T01:48:59.9023190Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (980.54s)
```
### 2025-06-09
#### PASS 16 minutes
```
2025-06-09T04:06:35.6296837Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-09T04:06:35.6392481Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-09T04:06:35.6495998Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (989.72s)
```
### 2025-06-10
#### PASS 24 minutes
```
2025-06-10T02:43:46.9751137Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-10T02:43:46.9851022Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-10T02:43:46.9941927Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1450.75s)
```
### 2025-06-11
#### PASS 16 minutes
```
2025-06-11T01:51:36.5454799Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-11T01:51:36.5548741Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-11T01:51:36.5657257Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (983.67s)
```
#### PASS 19 minutes
```
2025-06-11T09:05:12.3137527Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-11T09:05:12.3295565Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-11T09:05:12.3496415Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1191.87s)
```
### 2025-06-12
#### PASS 17 minutes
```
2025-06-12T01:54:44.2838201Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-12T01:54:44.2936861Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-12T01:54:44.3040113Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1078.37s)
```
### 2025-06-13
#### PASS 15 minutes
```
2025-06-13T01:55:30.6411248Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-13T01:55:30.6505031Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-13T01:55:30.6613203Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (939.30s)
```
### 2025-06-14
#### PASS 14 minutes
```
2025-06-14T02:34:39.9563579Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-14T02:34:39.9677420Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-14T02:34:39.9767620Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (869.08s)
```
### 2025-06-15
#### PASS 15 minutes
```
2025-06-15T01:56:51.5854859Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-15T01:56:51.6012085Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-15T01:56:51.6200674Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (928.34s)
```
### 2025-06-16
#### PASS 20 minutes
```
2025-06-16T02:15:00.6498520Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-16T02:15:00.6598235Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-16T02:15:00.6695673Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1226.62s)
```
### 2025-06-17
#### PASS 15 minutes
```
2025-06-17T01:54:49.2986514Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-17T01:54:49.3079931Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-17T01:54:49.3203401Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (909.65s)
```
### 2025-06-18
#### PASS 19 minutes
```
2025-06-18T01:55:10.7178818Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-18T01:55:10.7261622Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-18T01:55:10.7380730Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1152.39s)
```
#### PASS 16 minutes
```
2025-06-18T08:48:56.0088657Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-18T08:48:56.0199336Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-18T08:48:56.0314872Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (985.19s)
```
### 2025-06-19
#### PASS 57 minutes
```
2025-06-19T02:33:55.9763817Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-19T02:33:55.9883667Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-19T02:33:56.0003208Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (3477.84s)
```
### 2025-06-20
#### PASS 16 minutes
```
2025-06-20T01:46:12.3296062Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-20T01:46:12.3382141Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-20T01:46:12.3488303Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (964.73s)
```
### 2025-06-21
#### PASS 18 minutes
```
2025-06-21T01:47:13.0039347Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-21T01:47:13.0126904Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-21T01:47:13.0237447Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1129.83s)
```
### 2025-06-22
#### PASS 16 minutes
```
2025-06-22T03:04:12.6065468Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-22T03:04:12.6157970Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-22T03:04:12.6365870Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1009.38s)
```
### 2025-06-23
#### PASS 15 minutes
```
2025-06-23T01:49:14.0836836Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-23T01:49:14.1003786Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-23T01:49:14.1125599Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (959.76s)
```
### 2025-06-24
#### PASS 23 minutes
```
2025-06-24T02:00:03.6419803Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-24T02:00:03.6513135Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-24T02:00:03.6618057Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1423.08s)
```
### 2025-06-25
#### PASS 16 minutes
```
2025-06-25T01:46:02.1930695Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-25T01:46:02.2075341Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-25T01:46:02.2216856Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (964.97s)
```
### 2025-06-26
#### PASS 21 minutes
```
2025-06-26T01:58:04.7950920Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-26T01:58:04.8058876Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-26T01:58:04.8163386Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (1283.14s)
```
#### PASS 14 minutes
```
2025-06-26T05:26:49.4745463Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-26T05:26:49.4916201Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-06-26T05:26:49.5021671Z --- PASS: TestMigAdvancedCluster_singleShardedMultiCloud (892.31s)
```