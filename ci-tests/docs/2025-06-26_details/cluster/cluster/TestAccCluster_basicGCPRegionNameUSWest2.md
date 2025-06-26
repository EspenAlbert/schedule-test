# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 30 minutes
```
2025-05-28T00:37:41.7144167Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T00:37:41.7217718Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T01:08:33.3455252Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (1851.62s)
```
#### PASS 11 minutes
```
2025-05-28T07:01:07.5116815Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T07:01:07.5128576Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T07:12:47.7650228Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (700.25s)
```
#### PASS 14 minutes
```
2025-05-28T08:37:00.4384272Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T08:37:00.4396718Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T08:51:31.5479755Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (871.11s)
```
#### FAIL 2 seconds
```
2025-05-28T12:21:41.2638537Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T12:21:41.2655424Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T12:21:43.6797307Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T12:21:43.6797971Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-05-28T12:21:43.6798507Z         
2025-05-28T12:21:43.6800105Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6836ffd344831f420ade177b/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-28T12:21:43.6801653Z         
2025-05-28T12:21:43.6802029Z           with mongodbatlas_cluster.test,
2025-05-28T12:21:43.6802817Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-28T12:21:43.6803365Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-28T12:21:43.6803662Z         
2025-05-28T12:21:43.7333795Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.48s)
```
### 2025-05-29
#### PASS 11 minutes
```
2025-05-29T00:37:34.8199893Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-29T00:37:34.8216639Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-29T00:49:16.1561635Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (701.34s)
```
#### PASS 12 minutes
```
2025-05-29T07:02:38.5273561Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-29T07:02:38.5318107Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-29T07:15:14.7930775Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (756.26s)
```
### 2025-05-30
#### PASS 33 minutes
```
2025-05-30T00:38:02.3153644Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-30T00:38:02.3235580Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-30T01:11:43.8908233Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (2021.57s)
```
#### PASS 11 minutes
```
2025-05-30T07:33:24.1886849Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-30T07:33:24.2109523Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-30T07:44:51.0483465Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (686.85s)
```
### 2025-05-31
#### PASS 12 minutes
```
2025-05-31T00:36:59.0359574Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-31T00:36:59.0421964Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-31T00:49:10.0561460Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (731.02s)
```
### 2025-06-01
#### PASS 10 minutes
```
2025-06-01T00:40:59.9712426Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T00:40:59.9734015Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T00:51:25.8673070Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (625.90s)
```
#### PASS 13 minutes
```
2025-06-01T04:49:58.9124497Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T04:49:58.9182337Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T05:03:29.6648463Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (810.75s)
```
#### FAIL 2 seconds
```
2025-06-01T08:58:50.9685434Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T08:58:50.9697239Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T08:58:53.3938675Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T08:58:53.3939502Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-01T08:58:53.3940303Z         
2025-06-01T08:58:53.3941921Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/683c16487bf9cf70212cb6ac/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-01T08:58:53.3943082Z         
2025-06-01T08:58:53.3943437Z           with mongodbatlas_cluster.test,
2025-06-01T08:58:53.3944309Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-01T08:58:53.3944869Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-01T08:58:53.3945186Z         
2025-06-01T08:58:53.4447942Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.48s)
```
#### PASS 12 minutes
```
2025-06-01T13:08:10.4804117Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T13:08:10.4819688Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T13:20:46.6521115Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (756.17s)
```
#### PASS 11 minutes
```
2025-06-01T17:17:26.9865987Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T17:17:26.9877504Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T17:28:52.8845936Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (685.90s)
```
#### PASS 11 minutes
```
2025-06-01T21:25:52.2781584Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T21:25:52.2881575Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T21:37:29.6475540Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (697.36s)
```
### 2025-06-02
#### PASS 12 minutes
```
2025-06-02T00:39:05.2565493Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-02T00:39:05.2580301Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-02T00:51:10.8336273Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (725.58s)
```
#### PASS 12 minutes
```
2025-06-02T01:35:08.1024918Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-02T01:35:08.1035616Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-02T01:47:28.2926152Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (740.19s)
```
#### PASS 12 minutes
```
2025-06-02T05:50:19.9812788Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-02T05:50:19.9927708Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-02T06:02:30.5134195Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (730.52s)
```
### 2025-06-03
#### PASS 12 minutes
```
2025-06-03T00:38:19.2116363Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-03T00:38:19.2205905Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-03T00:51:06.6696064Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (767.45s)
```
### 2025-06-04
#### PASS 11 minutes
```
2025-06-04T00:29:14.8998518Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-04T00:29:14.9009805Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-04T00:40:55.4484638Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (700.55s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:48.8414071Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-05T00:28:48.8423725Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-05T00:31:51.8948765Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-05T00:31:51.8950022Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:51.8950699Z         
2025-06-05T00:31:51.8957792Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-3727134475115867813 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.8960882Z         
2025-06-05T00:31:51.8961442Z           with mongodbatlas_cluster.test,
2025-06-05T00:31:51.8962509Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:31:51.8963426Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-05T00:31:51.8963925Z         
2025-06-05T00:31:51.9017648Z    test_working_directory=/tmp/plugintest361729905 test_name=TestAccCluster_RegionsConfig
2025-06-05T00:31:52.0134134Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (183.17s)
```
### 2025-06-06
#### PASS 12 minutes
```
2025-06-06T00:30:08.0291269Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-06T00:30:08.0305968Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-06T00:42:15.9526211Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (727.92s)
```
### 2025-06-07
#### PASS 12 minutes
```
2025-06-07T00:28:50.9589629Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-07T00:28:50.9762365Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-07T00:41:50.9029594Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (779.93s)
```
### 2025-06-08
#### PASS 12 minutes
```
2025-06-08T00:32:05.3391295Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-08T00:32:05.3402798Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-08T00:44:51.0066012Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (765.67s)
```
### 2025-06-09
#### PASS 11 minutes
```
2025-06-09T00:31:03.3427998Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-09T00:31:03.3575461Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-09T00:42:33.5149260Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (690.16s)
```
### 2025-06-10
#### PASS 27 minutes
```
2025-06-10T00:37:45.9223620Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-10T00:37:45.9335687Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-10T01:05:05.0257788Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (1639.09s)
```
### 2025-06-11
#### PASS 11 minutes
```
2025-06-11T00:28:47.8959323Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-11T00:28:47.8971605Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-11T00:40:14.4498751Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (686.55s)
```
#### PASS 12 minutes
```
2025-06-11T07:37:17.2607599Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-11T07:37:17.2706796Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-11T07:49:55.4271047Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (758.17s)
```
### 2025-06-12
#### PASS 14 minutes
```
2025-06-12T00:28:32.4323950Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-12T00:28:32.4341605Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-12T00:43:01.8601030Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (869.43s)
```
### 2025-06-13
#### PASS 13 minutes
```
2025-06-13T00:28:34.2506751Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-13T00:28:34.2599549Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-13T00:41:51.7854247Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (797.53s)
```
### 2025-06-14
#### PASS 29 minutes
```
2025-06-14T00:28:01.7715980Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-14T00:28:01.7731438Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-14T00:57:40.5491846Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (1778.78s)
```
### 2025-06-15
#### PASS 13 minutes
```
2025-06-15T00:32:00.6366533Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-15T00:32:00.6391102Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-15T00:45:48.0393834Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (827.40s)
```
### 2025-06-16
#### PASS 11 minutes
```
2025-06-16T00:30:04.8267072Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-16T00:30:04.8282335Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-16T00:41:50.2766916Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (705.45s)
```
### 2025-06-17
#### PASS 14 minutes
```
2025-06-17T00:28:58.7277713Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-17T00:28:58.7289120Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-17T00:43:25.0695349Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (866.34s)
```
### 2025-06-18
#### PASS 12 minutes
```
2025-06-18T00:29:04.6910219Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-18T00:29:04.7026328Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-18T00:41:55.0090194Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (770.32s)
```
### 2025-06-19
#### PASS 30 minutes
```
2025-06-19T00:29:21.4774152Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-19T00:29:21.4787347Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-19T01:00:19.4758448Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (1858.00s)
```
### 2025-06-20
#### PASS 14 minutes
```
2025-06-20T00:28:46.3487387Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-20T00:28:46.3607804Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-20T00:42:47.8669219Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (841.51s)
```
### 2025-06-21
#### PASS 14 minutes
```
2025-06-21T00:28:37.8557715Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-21T00:28:37.8569098Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-21T00:42:40.2845357Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (842.43s)
```
### 2025-06-22
#### PASS 15 minutes
```
2025-06-22T00:31:44.8700776Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-22T00:31:44.8746315Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-22T00:46:54.0558995Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (909.18s)
```
### 2025-06-23
#### PASS 11 minutes
```
2025-06-23T00:31:00.9019490Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-23T00:31:00.9030907Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-23T00:42:26.9795166Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (686.08s)
```
### 2025-06-24
#### PASS 11 minutes
```
2025-06-24T00:28:56.7778555Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-24T00:28:56.7789491Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-24T00:40:32.3945356Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (695.62s)
```
### 2025-06-25
#### PASS 13 minutes
```
2025-06-25T00:29:14.3254722Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-25T00:29:14.3280995Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-25T00:42:30.3298796Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (796.00s)
```
### 2025-06-26
#### PASS 12 minutes
```
2025-06-26T00:29:15.6704155Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-26T00:29:15.6719587Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-26T00:41:25.2644323Z --- PASS: TestAccCluster_basicGCPRegionNameUSWest2 (729.59s)
```