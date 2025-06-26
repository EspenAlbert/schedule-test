# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 25 minutes
```
2025-05-28T00:37:41.7142920Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T00:37:41.7173885Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T01:03:11.2556794Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (1529.54s)
```
#### PASS 11 minutes
```
2025-05-28T07:01:07.5115542Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T07:01:07.5132719Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T07:12:38.0050515Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (690.49s)
```
#### PASS 14 minutes
```
2025-05-28T08:37:00.4383088Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T08:37:00.4402223Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T08:51:31.8460289Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (871.41s)
```
#### PASS 12 minutes
```
2025-05-28T12:21:41.2637308Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T12:21:41.2656058Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-28T12:34:17.0552302Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (755.80s)
```
### 2025-05-29
#### PASS 12 minutes
```
2025-05-29T00:37:34.8198734Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-29T00:37:34.8230808Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-29T00:50:26.2802460Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (771.46s)
```
#### PASS 12 minutes
```
2025-05-29T07:02:38.5272372Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-29T07:02:38.5315427Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-29T07:15:24.6947320Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (766.16s)
```
### 2025-05-30
#### PASS 12 minutes
```
2025-05-30T00:38:02.3152346Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-30T00:38:02.3247061Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-30T00:50:39.2159642Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (756.90s)
```
#### PASS 12 minutes
```
2025-05-30T07:33:24.1885593Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-30T07:33:24.2110173Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-30T07:46:01.4644186Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (757.26s)
```
### 2025-05-31
#### PASS 12 minutes
```
2025-05-31T00:36:59.0358266Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-31T00:36:59.0534390Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-31T00:49:09.8655425Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (730.82s)
```
### 2025-06-01
#### FAIL 2 seconds
```
2025-06-01T00:40:59.9710967Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T00:40:59.9734953Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T00:41:02.5543163Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T00:41:02.5543883Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-06-01T00:41:02.5544716Z         
2025-06-01T00:41:02.5546573Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/683ba19a4e6c592331c54a0f/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-01T00:41:02.5547578Z         
2025-06-01T00:41:02.5547898Z           with mongodbatlas_cluster.test,
2025-06-01T00:41:02.5548515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-01T00:41:02.5549078Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-01T00:41:02.5549385Z         
2025-06-01T00:41:02.5991322Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.63s)
```
#### PASS 13 minutes
```
2025-06-01T04:49:58.9123021Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T04:49:58.9188359Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T05:03:19.3347066Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (800.42s)
```
#### PASS 13 minutes
```
2025-06-01T08:58:50.9684095Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T08:58:50.9763155Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T09:12:07.3604324Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (796.39s)
```
#### PASS 13 minutes
```
2025-06-01T13:08:10.4802847Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T13:08:10.4821674Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T13:21:26.7458808Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (796.27s)
```
#### PASS 11 minutes
```
2025-06-01T17:17:26.9864505Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T17:17:26.9878123Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T17:29:02.8914818Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (695.91s)
```
#### PASS 12 minutes
```
2025-06-01T21:25:52.2780400Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T21:25:52.2887511Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T21:38:30.0408533Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (757.75s)
```
### 2025-06-02
#### PASS 12 minutes
```
2025-06-02T00:39:05.2564208Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-02T00:39:05.2580945Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-02T00:51:21.3367256Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (736.08s)
```
#### PASS 12 minutes
```
2025-06-02T01:35:08.1023888Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-02T01:35:08.1036217Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-02T01:47:29.2164397Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (741.11s)
```
#### PASS 13 minutes
```
2025-06-02T05:50:19.9811525Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-02T05:50:20.0048709Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-02T06:03:51.3501033Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (811.36s)
```
### 2025-06-03
#### PASS 13 minutes
```
2025-06-03T00:38:19.2115008Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-03T00:38:19.2206575Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-03T00:51:47.1380658Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (807.92s)
```
### 2025-06-04
#### PASS 2 hours
```
2025-06-04T00:29:14.8995234Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-04T00:29:14.9175629Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-04T02:50:22.6827579Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (8467.78s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:48.8412968Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-05T00:28:48.8424364Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-05T00:31:52.0212408Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-05T00:31:52.0213486Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:52.0214296Z         
2025-06-05T00:31:52.0218200Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-4646526762676109680 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:52.0220602Z         
2025-06-05T00:31:52.0221234Z           with mongodbatlas_cluster.test,
2025-06-05T00:31:52.0222407Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:31:52.0223814Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-05T00:31:52.0224758Z         
2025-06-05T00:31:52.0860851Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (183.25s)
```
### 2025-06-06
#### FAIL 3 hours
```
2025-06-06T00:30:08.0290089Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-06T00:30:08.0306565Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-06T03:30:10.6847215Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-06T03:30:10.6848155Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-06-06T03:30:10.6848845Z         
2025-06-06T03:30:10.6850273Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-06-06T03:30:10.6851367Z         
2025-06-06T03:30:10.6851674Z           with mongodbatlas_cluster.test,
2025-06-06T03:30:10.6852272Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-06T03:30:10.6853148Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-06T03:30:10.6853569Z         
2025-06-06T03:30:10.7285020Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.70s)
```
### 2025-06-07
#### PASS 12 minutes
```
2025-06-07T00:28:50.9588423Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-07T00:28:50.9765891Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-07T00:41:11.3457077Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (740.37s)
```
### 2025-06-08
#### PASS 12 minutes
```
2025-06-08T00:32:05.3390092Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-08T00:32:05.3403426Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-08T00:44:51.2418430Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (765.90s)
```
### 2025-06-09
#### PASS 12 minutes
```
2025-06-09T00:31:03.3426572Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-09T00:31:03.3590307Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-09T00:43:13.3186333Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (729.96s)
```
### 2025-06-10
#### PASS 30 minutes
```
2025-06-10T00:37:45.9222420Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-10T00:37:45.9338856Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-10T01:08:25.8433575Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (1839.91s)
```
### 2025-06-11
#### PASS 11 minutes
```
2025-06-11T00:28:47.8958106Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-11T00:28:47.8972190Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-11T00:40:35.0884569Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (707.19s)
```
#### PASS 13 minutes
```
2025-06-11T07:37:17.2606371Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-11T07:37:17.2708192Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-11T07:51:05.7497461Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (828.49s)
```
### 2025-06-12
#### PASS 16 minutes
```
2025-06-12T00:28:32.4321154Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-12T00:28:32.4342185Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-12T00:44:53.7925090Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (981.36s)
```
### 2025-06-13
#### PASS 12 minutes
```
2025-06-13T00:28:34.2505523Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-13T00:28:34.2609167Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-13T00:41:21.2785343Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (767.02s)
```
### 2025-06-14
#### PASS 21 minutes
```
2025-06-14T00:28:01.7714756Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-14T00:28:01.7788226Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-14T00:49:39.4015999Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (1297.63s)
```
### 2025-06-15
#### PASS 14 minutes
```
2025-06-15T00:32:00.6365278Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-15T00:32:00.6387905Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-15T00:46:39.4130995Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (878.78s)
```
### 2025-06-16
#### PASS 17 minutes
```
2025-06-16T00:30:04.8265897Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-16T00:30:04.8288607Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-16T00:47:22.0715734Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (1037.25s)
```
### 2025-06-17
#### PASS 14 minutes
```
2025-06-17T00:28:58.7276478Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-17T00:28:58.7289692Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-17T00:43:05.0585774Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (846.33s)
```
### 2025-06-18
#### PASS 20 minutes
```
2025-06-18T00:29:04.6909003Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-18T00:29:04.7026955Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-18T00:49:58.1378173Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (1253.44s)
```
### 2025-06-19
#### PASS 30 minutes
```
2025-06-19T00:29:21.4772896Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-19T00:29:21.4812938Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-19T01:00:20.1416610Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (1858.66s)
```
### 2025-06-20
#### PASS 15 minutes
```
2025-06-20T00:28:46.3486194Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-20T00:28:46.3497796Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-20T00:43:57.9520547Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (911.60s)
```
### 2025-06-21
#### PASS 14 minutes
```
2025-06-21T00:28:37.8556570Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-21T00:28:37.8574010Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-21T00:42:40.2849079Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (842.43s)
```
### 2025-06-22
#### PASS 13 minutes
```
2025-06-22T00:31:44.8699320Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-22T00:31:44.8810320Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-22T00:45:03.4416832Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (798.57s)
```
### 2025-06-23
#### PASS 11 minutes
```
2025-06-23T00:31:00.9018503Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-23T00:31:00.9032345Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-23T00:42:47.1904714Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (706.29s)
```
### 2025-06-24
#### PASS 13 minutes
```
2025-06-24T00:28:56.7777436Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-24T00:28:56.7790244Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-24T00:42:12.3284506Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (795.55s)
```
### 2025-06-25
#### PASS 17 minutes
```
2025-06-25T00:29:14.3253486Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-25T00:29:14.3275281Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-25T00:47:11.3711588Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (1077.05s)
```
### 2025-06-26
#### PASS 14 minutes
```
2025-06-26T00:29:15.6702850Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-26T00:29:15.6731760Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-26T00:43:16.1641966Z --- PASS: TestAccCluster_basicGCPRegionNameWesternUS (840.49s)
```