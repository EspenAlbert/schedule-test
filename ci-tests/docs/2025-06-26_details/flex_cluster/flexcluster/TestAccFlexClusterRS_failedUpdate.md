# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 52 seconds
```
2025-05-28T00:38:46.6591115Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-05-28T00:39:38.9367901Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.28s)
```
#### PASS 51 seconds
```
2025-05-28T08:37:56.0577233Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-05-28T08:38:47.3410918Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.28s)
```
### 2025-05-29
#### PASS 52 seconds
```
2025-05-29T00:38:33.2715569Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-05-29T00:39:25.5759661Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.30s)
```
### 2025-05-30
#### PASS 51 seconds
```
2025-05-30T00:39:02.0937866Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-05-30T00:39:53.9984008Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.90s)
```
### 2025-05-31
#### PASS 54 seconds
```
2025-05-31T00:38:07.3579511Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-05-31T00:39:01.4360401Z --- PASS: TestAccFlexClusterRS_failedUpdate (54.08s)
```
### 2025-06-01
#### PASS 52 seconds
```
2025-06-01T00:42:04.0934423Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-01T00:42:56.1907656Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.10s)
```
#### PASS 54 seconds
```
2025-06-01T04:51:05.0053573Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-01T04:51:59.8095738Z --- PASS: TestAccFlexClusterRS_failedUpdate (54.80s)
```
#### PASS 53 seconds
```
2025-06-01T09:00:00.4016972Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-01T09:00:53.5802690Z --- PASS: TestAccFlexClusterRS_failedUpdate (53.18s)
```
#### PASS 54 seconds
```
2025-06-01T13:09:25.5117868Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-01T13:10:20.2688638Z --- PASS: TestAccFlexClusterRS_failedUpdate (54.76s)
```
#### PASS 51 seconds
```
2025-06-01T17:18:32.4137902Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-01T17:19:23.8999268Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.49s)
```
#### PASS 53 seconds
```
2025-06-01T21:26:56.0497034Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-01T21:27:49.2475852Z --- PASS: TestAccFlexClusterRS_failedUpdate (53.20s)
```
### 2025-06-02
#### PASS 52 seconds
```
2025-06-02T00:40:07.5469775Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-02T00:40:59.7618486Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.21s)
```
#### PASS a minute
```
2025-06-02T01:36:11.6278934Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-02T01:37:14.8926616Z --- PASS: TestAccFlexClusterRS_failedUpdate (63.26s)
```
#### PASS 52 seconds
```
2025-06-02T05:51:16.0086625Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-02T05:52:08.4985369Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.49s)
```
### 2025-06-03
#### PASS 51 seconds
```
2025-06-03T00:39:15.8045300Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-03T00:40:07.4741710Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.67s)
```
### 2025-06-04
#### PASS a minute
```
2025-06-04T00:30:29.1221992Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-04T00:31:41.1089184Z --- PASS: TestAccFlexClusterRS_failedUpdate (71.99s)
```
### 2025-06-05
#### FAIL a moment
```
2025-06-05T00:28:50.1931172Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-05T00:28:50.8443409Z   
2025-06-05T00:28:50.8444405Z     resource_test.go:26: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:28:50.8445051Z         
2025-06-05T00:28:50.8447867Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bec939f27413250947/flexClusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:50.8449947Z         
2025-06-05T00:28:50.8450480Z           with mongodbatlas_flex_cluster.test,
2025-06-05T00:28:50.8451624Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2025-06-05T00:28:50.8452650Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2025-06-05T00:28:50.8453420Z         
2025-06-05T00:28:50.8454237Z         Name: test-acc-tf-5010670358719519425, Project ID: 6840e4bec939f27413250947
2025-06-05T00:28:50.9020207Z --- FAIL: TestAccFlexClusterRS_failedUpdate (0.71s)
```
### 2025-06-06
#### PASS 51 seconds
```
2025-06-06T00:31:49.6991167Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-06T00:32:41.2568774Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.56s)
```
### 2025-06-07
#### PASS 54 seconds
```
2025-06-07T00:29:56.4837248Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-07T00:30:51.0262775Z --- PASS: TestAccFlexClusterRS_failedUpdate (54.54s)
```
### 2025-06-08
#### PASS 51 seconds
```
2025-06-08T00:33:03.6541292Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-08T00:33:54.8515740Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.20s)
```
### 2025-06-09
#### PASS 52 seconds
```
2025-06-09T00:32:00.9701560Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-09T00:32:53.2246737Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.25s)
```
### 2025-06-10
#### PASS 52 seconds
```
2025-06-10T00:38:54.1854625Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-10T00:39:46.4507235Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.27s)
```
### 2025-06-11
#### PASS 51 seconds
```
2025-06-11T00:29:45.5708125Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-11T00:30:37.3913706Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.82s)
```
#### PASS 54 seconds
```
2025-06-11T07:38:22.7288470Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-11T07:39:17.2258801Z --- PASS: TestAccFlexClusterRS_failedUpdate (54.50s)
```
### 2025-06-12
#### PASS a minute
```
2025-06-12T00:29:28.2839481Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-12T00:30:50.1212664Z --- PASS: TestAccFlexClusterRS_failedUpdate (81.84s)
```
### 2025-06-13
#### PASS a minute
```
2025-06-13T00:29:51.9322713Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-13T00:31:05.3990798Z --- PASS: TestAccFlexClusterRS_failedUpdate (73.47s)
```
### 2025-06-14
#### PASS a minute
```
2025-06-14T00:29:34.9242029Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-14T00:30:57.6805600Z --- PASS: TestAccFlexClusterRS_failedUpdate (82.76s)
```
### 2025-06-15
#### PASS a minute
```
2025-06-15T00:33:18.4948817Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-15T00:34:19.9915989Z --- PASS: TestAccFlexClusterRS_failedUpdate (61.50s)
```
### 2025-06-16
#### PASS a minute
```
2025-06-16T00:31:30.5522276Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-16T00:33:02.4651265Z --- PASS: TestAccFlexClusterRS_failedUpdate (91.91s)
```
### 2025-06-17
#### PASS 54 seconds
```
2025-06-17T00:30:32.7722602Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-17T00:31:27.5398211Z --- PASS: TestAccFlexClusterRS_failedUpdate (54.77s)
```
### 2025-06-18
#### PASS a minute
```
2025-06-18T00:30:30.8788484Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-18T00:31:42.6782781Z --- PASS: TestAccFlexClusterRS_failedUpdate (71.80s)
```
### 2025-06-19
#### PASS a minute
```
2025-06-19T00:30:39.9186562Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-19T00:31:54.9389085Z --- PASS: TestAccFlexClusterRS_failedUpdate (75.02s)
```
### 2025-06-20
#### PASS a minute
```
2025-06-20T00:30:03.3497633Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-20T00:31:15.2059621Z --- PASS: TestAccFlexClusterRS_failedUpdate (71.86s)
```
### 2025-06-21
#### PASS 51 seconds
```
2025-06-21T00:29:32.4715100Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-21T00:30:24.1141325Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.64s)
```
### 2025-06-22
#### PASS a minute
```
2025-06-22T00:33:09.9712540Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-22T00:34:21.4223114Z --- PASS: TestAccFlexClusterRS_failedUpdate (71.45s)
```
### 2025-06-23
#### PASS a minute
```
2025-06-23T00:32:12.3610347Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-23T00:33:17.3760054Z --- PASS: TestAccFlexClusterRS_failedUpdate (65.01s)
```
### 2025-06-24
#### PASS 52 seconds
```
2025-06-24T00:30:32.5347945Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-24T00:31:25.4457213Z --- PASS: TestAccFlexClusterRS_failedUpdate (52.91s)
```
### 2025-06-25
#### PASS 51 seconds
```
2025-06-25T00:30:28.0678296Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-25T00:31:19.8307203Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.76s)
```
### 2025-06-26
#### PASS 44 seconds
```
2025-06-26T00:30:05.9268800Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-26T00:30:50.4433122Z --- PASS: TestAccFlexClusterRS_failedUpdate (44.52s)
```