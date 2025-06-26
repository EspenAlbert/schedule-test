# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_priorityNewSchema Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 10 minutes
```
2025-05-28T02:03:35.3231886Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T02:03:35.3299588Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T02:03:35.3389157Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (646.05s)
```
#### FAIL 5 seconds
```
2025-05-28T12:04:46.9811095Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T12:04:46.9850358Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T12:04:46.9896938Z === NAME  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T12:04:46.9897629Z     resource_advanced_cluster_test.go:1096: Step 2/4 error: Error running apply: exit status 1
2025-05-28T12:04:46.9898220Z         
2025-05-28T12:04:46.9898599Z         Error: Error in create
2025-05-28T12:04:46.9898854Z         
2025-05-28T12:04:46.9899271Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:46.9899976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:46.9900632Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:46.9901041Z         
2025-05-28T12:04:46.9901460Z         cluster name: test-acc-tf-c-6262843850112804043, API error details:
2025-05-28T12:04:46.9902364Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836d107d000797dbe921b62/clusters
2025-05-28T12:04:46.9903144Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-05-28T12:04:46.9903885Z         region is currently out of capacity for the requested instance size. Reason:
2025-05-28T12:04:46.9904481Z         Conflict. Params: [], BadRequestDetail: 
2025-05-28T12:04:46.9905529Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (5.54s)
```
#### PASS 13 minutes
```
2025-05-28T13:47:12.0022236Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T13:47:12.0046624Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-28T13:47:12.0154581Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (824.17s)
```
### 2025-05-29
#### PASS 20 minutes
```
2025-05-29T02:20:21.7282201Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-29T02:20:21.7308201Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-29T02:20:21.7424331Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (1247.62s)
```
### 2025-05-30
#### PASS 14 minutes
```
2025-05-30T03:30:24.2323994Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-30T03:30:24.2360027Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-30T03:30:24.2439017Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (883.12s)
```
#### PASS 18 minutes
```
2025-05-30T08:55:11.7573385Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-30T08:55:11.7618868Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-30T08:55:11.7727898Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (1092.31s)
```
### 2025-05-31
#### PASS 14 minutes
```
2025-05-31T04:18:53.2254034Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-31T04:18:53.2279425Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-05-31T04:18:53.2388186Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (856.47s)
```
### 2025-06-01
#### PASS 12 minutes
```
2025-06-01T04:20:15.0545435Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T04:20:15.0581454Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T04:20:15.0670872Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (731.87s)
```
#### PASS 9 minutes
```
2025-06-01T08:29:24.1339103Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T08:29:24.1370640Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T08:29:24.1455158Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (581.03s)
```
#### PASS 10 minutes
```
2025-06-01T12:36:46.3892944Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T12:36:46.3942829Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T12:36:46.4038640Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (641.12s)
```
#### PASS 10 minutes
```
2025-06-01T16:46:33.8332074Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T16:46:33.8366035Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T16:46:33.8453539Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (610.67s)
```
#### PASS 9 minutes
```
2025-06-01T20:56:30.1361634Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T20:56:30.1415020Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-01T20:56:30.1499355Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (581.87s)
```
### 2025-06-02
#### PASS 10 minutes
```
2025-06-02T01:07:47.7496664Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T01:07:47.7520555Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T01:07:47.7678061Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (617.27s)
```
#### PASS 13 minutes
```
2025-06-02T04:19:30.0988475Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T04:19:30.1025642Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T04:19:30.1124092Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (795.91s)
```
#### PASS 12 minutes
```
2025-06-02T05:16:34.1948147Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T05:16:34.1985456Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T05:16:34.2083555Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (762.90s)
```
#### PASS 10 minutes
```
2025-06-02T09:30:51.2591172Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T09:30:51.2631604Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-02T09:30:51.2766479Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (642.20s)
```
### 2025-06-03
#### PASS 10 minutes
```
2025-06-03T02:00:08.0975385Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-03T02:00:08.1005521Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-03T02:00:08.1086879Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (644.05s)
```
### 2025-06-04
#### PASS 13 minutes
```
2025-06-04T01:50:55.4329634Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-04T01:50:55.4356476Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-04T01:50:55.4456399Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (793.85s)
```
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:38.5905398Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:35:38.5952672Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:35:38.6209396Z === NAME  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-05T00:35:38.6210101Z     resource_advanced_cluster_test.go:1096: Step 2/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6210638Z         
2025-06-05T00:35:38.6210893Z         Error: Error in create
2025-06-05T00:35:38.6211132Z         
2025-06-05T00:35:38.6211582Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6212350Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6212992Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6213360Z         
2025-06-05T00:35:38.6213832Z         cluster name: test-acc-tf-c-7508448073880311154, API error details:
2025-06-05T00:35:38.6214602Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters
2025-06-05T00:35:38.6215393Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6216070Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6216563Z         BadRequestDetail: 
2025-06-05T00:35:38.6391411Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (5.99s)
```
### 2025-06-06
#### PASS 10 minutes
```
2025-06-06T05:30:18.8780531Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-06T05:30:18.8824500Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-06T05:30:18.8970403Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (611.27s)
```
### 2025-06-07
#### PASS 10 minutes
```
2025-06-07T01:49:34.5062790Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-07T01:49:34.5102096Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-07T01:49:34.5178036Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (647.55s)
```
### 2025-06-08
#### PASS 10 minutes
```
2025-06-08T01:48:59.8875210Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-08T01:48:59.8924112Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-08T01:48:59.9002904Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (640.71s)
```
### 2025-06-09
#### PASS 12 minutes
```
2025-06-09T04:06:35.6358078Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-09T04:06:35.6380498Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-09T04:06:35.6474905Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (733.37s)
```
### 2025-06-10
#### PASS 15 minutes
```
2025-06-10T02:43:46.9814499Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-10T02:43:46.9838992Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-10T02:43:46.9916845Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (950.18s)
```
### 2025-06-11
#### PASS 11 minutes
```
2025-06-11T01:51:36.5517281Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-11T01:51:36.5545531Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-11T01:51:36.5634549Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (671.94s)
```
#### PASS 13 minutes
```
2025-06-11T09:05:12.3237769Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-11T09:05:12.3283689Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-11T09:05:12.3470221Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (791.22s)
```
### 2025-06-12
#### PASS 12 minutes
```
2025-06-12T01:54:44.2901782Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-12T01:54:44.2932644Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-12T01:54:44.3024932Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (733.23s)
```
### 2025-06-13
#### PASS 12 minutes
```
2025-06-13T01:55:30.6471448Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-13T01:55:30.6502802Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-13T01:55:30.6602060Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (768.19s)
```
### 2025-06-14
#### PASS 25 minutes
```
2025-06-14T02:34:39.9633438Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-14T02:34:39.9672368Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-14T02:34:39.9804942Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (1517.83s)
```
### 2025-06-15
#### PASS 14 minutes
```
2025-06-15T01:56:51.5950532Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-15T01:56:51.5998557Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-15T01:56:51.6187624Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (854.61s)
```
### 2025-06-16
#### PASS 19 minutes
```
2025-06-16T02:15:00.6563003Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-16T02:15:00.6594965Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-16T02:15:00.6694464Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (1184.53s)
```
### 2025-06-17
#### PASS 11 minutes
```
2025-06-17T01:54:49.3058040Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-17T01:54:49.3094730Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-17T01:54:49.3191947Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (708.13s)
```
### 2025-06-18
#### PASS 11 minutes
```
2025-06-18T01:55:10.7238187Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-18T01:55:10.7270543Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-18T01:55:10.7356287Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (677.87s)
```
#### PASS 14 minutes
```
2025-06-18T08:48:56.0167098Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-18T08:48:56.0189128Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-18T08:48:56.0309869Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (853.45s)
```
### 2025-06-19
#### PASS 38 minutes
```
2025-06-19T02:33:55.9834497Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-19T02:33:55.9859569Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-19T02:33:55.9962964Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (2335.71s)
```
### 2025-06-20
#### PASS 9 minutes
```
2025-06-20T01:46:12.3354752Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-20T01:46:12.3393062Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-20T01:46:12.3466552Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (586.81s)
```
### 2025-06-21
#### PASS 11 minutes
```
2025-06-21T01:47:13.0098158Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-21T01:47:13.0132345Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-21T01:47:13.0216919Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (671.06s)
```
### 2025-06-22
#### PASS 11 minutes
```
2025-06-22T03:04:12.6124559Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-22T03:04:12.6153571Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-22T03:04:12.6344260Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (700.25s)
```
### 2025-06-23
#### PASS 9 minutes
```
2025-06-23T01:49:14.0947834Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-23T01:49:14.0995014Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-23T01:49:14.1098945Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (582.71s)
```
### 2025-06-24
#### PASS 12 minutes
```
2025-06-24T02:00:03.6481786Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-24T02:00:03.6519679Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-24T02:00:03.6605152Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (738.56s)
```
### 2025-06-25
#### PASS 12 minutes
```
2025-06-25T01:46:02.2033292Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-25T01:46:02.2091079Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-25T01:46:02.2204506Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (768.71s)
```
### 2025-06-26
#### PASS 15 minutes
```
2025-06-26T01:58:04.8008231Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-26T01:58:04.8060387Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-26T01:58:04.8152990Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (912.02s)
```
#### PASS 10 minutes
```
2025-06-26T05:26:49.4849631Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-26T05:26:49.4914859Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-06-26T05:26:49.4997234Z --- PASS: TestAccClusterAdvancedCluster_priorityNewSchema (612.18s)
```