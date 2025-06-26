# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 14 minutes
```
2025-05-28T02:03:35.3197221Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T02:03:35.3283463Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T02:03:35.3400980Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (873.51s)
```
#### FAIL 5 seconds
```
2025-05-28T12:04:46.9791792Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T12:04:46.9834220Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T12:04:46.9875072Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T12:04:46.9875809Z     resource_advanced_cluster_test.go:744: Step 1/3 error: Error running apply: exit status 1
2025-05-28T12:04:46.9876341Z         
2025-05-28T12:04:46.9876593Z         Error: Error in create
2025-05-28T12:04:46.9876835Z         
2025-05-28T12:04:46.9877155Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:46.9877806Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:46.9878397Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:46.9878812Z         
2025-05-28T12:04:46.9879221Z         cluster name: test-acc-tf-c-4613698556196945694, API error details:
2025-05-28T12:04:46.9880204Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836d100e6404f5026cf1f75/clusters
2025-05-28T12:04:46.9880978Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-05-28T12:04:46.9882020Z         region is currently out of capacity for the requested instance size. Reason:
2025-05-28T12:04:46.9882531Z         Conflict. Params: [], BadRequestDetail: 
2025-05-28T12:04:46.9896566Z   
2025-05-28T12:04:46.9904913Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.51s)
```
#### PASS 18 minutes
```
2025-05-28T13:47:12.0001958Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T13:47:12.0040722Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T13:47:12.0166164Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1092.62s)
```
### 2025-05-29
#### PASS 29 minutes
```
2025-05-29T02:20:21.7262364Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-29T02:20:21.7302388Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-29T02:20:21.7456396Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1741.03s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T03:30:24.2303869Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-30T03:30:24.2343858Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-30T03:30:24.2471195Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5411.69s)
```
#### PASS 14 minutes
```
2025-05-30T08:55:11.7544662Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-30T08:55:11.7604811Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-30T08:55:11.7720564Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (888.45s)
```
### 2025-05-31
#### PASS 16 minutes
```
2025-05-31T04:18:53.2234388Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-31T04:18:53.2291448Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-31T04:18:53.2390718Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (961.91s)
```
### 2025-06-01
#### PASS 12 minutes
```
2025-06-01T04:20:15.0525343Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T04:20:15.0566097Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T04:20:15.0671388Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (771.21s)
```
#### PASS 15 minutes
```
2025-06-01T08:29:24.1319269Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T08:29:24.1358194Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T08:29:24.1486767Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (949.01s)
```
#### PASS 14 minutes
```
2025-06-01T12:36:46.3873240Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T12:36:46.3925158Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T12:36:46.4049445Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (858.56s)
```
#### PASS 16 minutes
```
2025-06-01T16:46:33.8312113Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T16:46:33.8354057Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T16:46:33.8482088Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (978.97s)
```
#### PASS 14 minutes
```
2025-06-01T20:56:30.1324314Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T20:56:30.1399490Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-01T20:56:30.1526037Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (891.79s)
```
### 2025-06-02
#### PASS 17 minutes
```
2025-06-02T01:07:47.7477405Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T01:07:47.7531867Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T01:07:47.7715977Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1026.88s)
```
#### PASS 17 minutes
```
2025-06-02T04:19:30.0968485Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T04:19:30.1015653Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T04:19:30.1134655Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1022.19s)
```
#### PASS 17 minutes
```
2025-06-02T05:16:34.1927736Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T05:16:34.1968670Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T05:16:34.2097752Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1042.89s)
```
#### PASS 13 minutes
```
2025-06-02T09:30:51.2555705Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T09:30:51.2648070Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-02T09:30:51.2779924Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (829.52s)
```
### 2025-06-03
#### PASS 16 minutes
```
2025-06-03T02:00:08.0955900Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-03T02:00:08.1002782Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-03T02:00:08.1113621Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1017.33s)
```
### 2025-06-04
#### PASS 15 minutes
```
2025-06-04T01:50:55.4310002Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-04T01:50:55.4354571Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-04T01:50:55.4468446Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (926.39s)
```
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:38.5885797Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:35:38.5956436Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:35:38.6192853Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:35:38.6193569Z     resource_advanced_cluster_test.go:744: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6194087Z         
2025-06-05T00:35:38.6194339Z         Error: Error in create
2025-06-05T00:35:38.6194621Z         
2025-06-05T00:35:38.6195004Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6195932Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6196645Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6196958Z         
2025-06-05T00:35:38.6197520Z         cluster name: test-acc-tf-c-4296540970871698316, API error details:
2025-06-05T00:35:38.6198539Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d7c939f274132515df/clusters
2025-06-05T00:35:38.6199506Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6200210Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6200657Z         BadRequestDetail: 
2025-06-05T00:35:38.6209133Z   
2025-06-05T00:35:38.6394720Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.99s)
```
### 2025-06-06
#### PASS 15 minutes
```
2025-06-06T05:30:18.8745957Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-06T05:30:18.8823040Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-06T05:30:18.9007408Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (917.87s)
```
### 2025-06-07
#### PASS 24 minutes
```
2025-06-07T01:49:34.5042061Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-07T01:49:34.5086314Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-07T01:49:34.5207525Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1449.79s)
```
### 2025-06-08
#### PASS 15 minutes
```
2025-06-08T01:48:59.8842314Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-08T01:48:59.8916163Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-08T01:48:59.9021365Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (917.25s)
```
### 2025-06-09
#### PASS 16 minutes
```
2025-06-09T04:06:35.6338002Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-09T04:06:35.6377702Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-09T04:06:35.6495495Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (986.64s)
```
### 2025-06-10
#### PASS 32 minutes
```
2025-06-10T02:43:46.9793896Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-10T02:43:46.9833484Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-10T02:43:46.9974338Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1956.61s)
```
### 2025-06-11
#### PASS 17 minutes
```
2025-06-11T01:51:36.5497924Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-11T01:51:36.5538893Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-11T01:51:36.5659375Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1041.76s)
```
#### PASS 17 minutes
```
2025-06-11T09:05:12.3204324Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-11T09:05:12.3282131Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-11T09:05:12.3485912Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1038.57s)
```
### 2025-06-12
#### PASS 15 minutes
```
2025-06-12T01:54:44.2882222Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-12T01:54:44.2929894Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-12T01:54:44.3036877Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (955.41s)
```
### 2025-06-13
#### PASS 16 minutes
```
2025-06-13T01:55:30.6452288Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-13T01:55:30.6491096Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-13T01:55:30.6615065Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (996.39s)
```
### 2025-06-14
#### PASS 21 minutes
```
2025-06-14T02:34:39.9614033Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-14T02:34:39.9663081Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-14T02:34:39.9784080Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1317.75s)
```
### 2025-06-15
#### PASS 13 minutes
```
2025-06-15T01:56:51.5918489Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-15T01:56:51.6005657Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-15T01:56:51.6183135Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (834.48s)
```
### 2025-06-16
#### PASS 20 minutes
```
2025-06-16T02:15:00.6543742Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-16T02:15:00.6584369Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-16T02:15:00.6697262Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1252.64s)
```
### 2025-06-17
#### PASS 15 minutes
```
2025-06-17T01:54:49.3038424Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-17T01:54:49.3087573Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-17T01:54:49.3202898Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (906.68s)
```
### 2025-06-18
#### PASS 19 minutes
```
2025-06-18T01:55:10.7219013Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-18T01:55:10.7261222Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-18T01:55:10.7380246Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1149.07s)
```
#### PASS 15 minutes
```
2025-06-18T08:48:56.0147272Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-18T08:48:56.0201279Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-18T08:48:56.0313926Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (952.77s)
```
### 2025-06-19
#### PASS 42 minutes
```
2025-06-19T02:33:55.9815007Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-19T02:33:55.9868185Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-19T02:33:55.9970768Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (2531.13s)
```
### 2025-06-20
#### PASS 17 minutes
```
2025-06-20T01:46:12.3335335Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-20T01:46:12.3373928Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-20T01:46:12.3489243Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1025.24s)
```
### 2025-06-21
#### PASS 16 minutes
```
2025-06-21T01:47:13.0079342Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-21T01:47:13.0123619Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-21T01:47:13.0234935Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (979.39s)
```
### 2025-06-22
#### PASS 14 minutes
```
2025-06-22T03:04:12.6105455Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-22T03:04:12.6143637Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-22T03:04:12.6350070Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (886.49s)
```
### 2025-06-23
#### PASS 15 minutes
```
2025-06-23T01:49:14.0913173Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-23T01:49:14.0983470Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-23T01:49:14.1124031Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (925.86s)
```
### 2025-06-24
#### PASS 30 minutes
```
2025-06-24T02:00:03.6462259Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-24T02:00:03.6501784Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-24T02:00:03.6652892Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1808.43s)
```
### 2025-06-25
#### PASS 16 minutes
```
2025-06-25T01:46:02.1998094Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-25T01:46:02.2068580Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-25T01:46:02.2217337Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (966.97s)
```
### 2025-06-26
#### PASS 21 minutes
```
2025-06-26T01:58:04.7989170Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-26T01:58:04.8049461Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-26T01:58:04.8162903Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (1281.35s)
```
#### PASS 13 minutes
```
2025-06-26T05:26:49.4814564Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-26T05:26:49.4885634Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-26T05:26:49.5018535Z --- PASS: TestAccClusterAdvancedClusterConfig_selfManagedSharding (830.29s)
```