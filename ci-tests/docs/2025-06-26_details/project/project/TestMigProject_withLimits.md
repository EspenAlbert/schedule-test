# project/project/TestMigProject_withLimits Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 13 seconds
```
2025-05-28T00:40:31.0052513Z === RUN   TestMigProject_withLimits
2025-05-28T00:40:31.0052991Z --- PASS: TestMigProject_withLimits (13.13s)
```
#### PASS 17 seconds
```
2025-05-28T08:40:09.2636489Z === RUN   TestMigProject_withLimits
2025-05-28T08:40:09.2636999Z --- PASS: TestMigProject_withLimits (17.15s)
```
### 2025-05-29
#### PASS 21 seconds
```
2025-05-29T00:42:12.4972079Z === RUN   TestMigProject_withLimits
2025-05-29T00:42:12.4972405Z --- PASS: TestMigProject_withLimits (21.14s)
```
### 2025-05-30
#### PASS 20 seconds
```
2025-05-30T00:41:49.4522768Z === RUN   TestMigProject_withLimits
2025-05-30T00:41:49.4523094Z --- PASS: TestMigProject_withLimits (20.25s)
```
### 2025-05-31
#### PASS 13 seconds
```
2025-05-31T00:39:35.7942418Z === RUN   TestMigProject_withLimits
2025-05-31T00:39:35.7942999Z --- PASS: TestMigProject_withLimits (13.91s)
```
### 2025-06-01
#### PASS 17 seconds
```
2025-06-01T00:44:45.0646856Z === RUN   TestMigProject_withLimits
2025-06-01T00:44:45.0647183Z --- PASS: TestMigProject_withLimits (17.10s)
```
#### PASS 14 seconds
```
2025-06-01T04:53:00.6174973Z === RUN   TestMigProject_withLimits
2025-06-01T04:53:00.6175916Z --- PASS: TestMigProject_withLimits (14.38s)
```
#### PASS 13 seconds
```
2025-06-01T09:02:03.3841181Z === RUN   TestMigProject_withLimits
2025-06-01T09:02:03.3841690Z --- PASS: TestMigProject_withLimits (13.67s)
```
#### PASS 15 seconds
```
2025-06-01T13:11:21.1560625Z === RUN   TestMigProject_withLimits
2025-06-01T13:11:21.1561220Z --- PASS: TestMigProject_withLimits (15.21s)
```
#### PASS 13 seconds
```
2025-06-01T17:20:49.8503214Z === RUN   TestMigProject_withLimits
2025-06-01T17:20:49.8503821Z --- PASS: TestMigProject_withLimits (13.98s)
```
#### PASS 13 seconds
```
2025-06-01T21:28:25.8762175Z === RUN   TestMigProject_withLimits
2025-06-01T21:28:25.8762673Z --- PASS: TestMigProject_withLimits (13.00s)
```
### 2025-06-02
#### PASS 13 seconds
```
2025-06-02T00:42:03.4267461Z === RUN   TestMigProject_withLimits
2025-06-02T00:42:03.4268090Z --- PASS: TestMigProject_withLimits (13.45s)
```
#### PASS 22 seconds
```
2025-06-02T01:41:41.3886468Z === RUN   TestMigProject_withLimits
2025-06-02T01:41:41.3886988Z --- PASS: TestMigProject_withLimits (22.31s)
```
#### PASS 17 seconds
```
2025-06-02T05:53:31.5741099Z === RUN   TestMigProject_withLimits
2025-06-02T05:53:31.5741647Z --- PASS: TestMigProject_withLimits (17.42s)
```
### 2025-06-03
#### PASS 13 seconds
```
2025-06-03T00:41:25.4652838Z === RUN   TestMigProject_withLimits
2025-06-03T00:41:25.4653248Z --- PASS: TestMigProject_withLimits (13.70s)
```
### 2025-06-04
#### PASS 21 seconds
```
2025-06-04T00:34:02.8401654Z === RUN   TestMigProject_withLimits
2025-06-04T00:34:02.8402205Z --- PASS: TestMigProject_withLimits (21.25s)
```
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:29:34.4914985Z === RUN   TestMigProject_withLimits
2025-06-05T00:29:34.4921659Z   
2025-06-05T00:29:34.4922135Z     resource_project_migration_test.go:124: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4922569Z         
2025-06-05T00:29:34.4922993Z         Error: error creating project: test-acc-tf-p-6862417819228999374
2025-06-05T00:29:34.4923347Z         
2025-06-05T00:29:34.4923654Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4924245Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4924800Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4925095Z         
2025-06-05T00:29:34.4925562Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4926189Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4926767Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4927155Z --- FAIL: TestMigProject_withLimits (4.99s)
```
### 2025-06-06
#### PASS 21 seconds
```
2025-06-06T00:36:24.5995293Z === RUN   TestMigProject_withLimits
2025-06-06T00:36:24.5995752Z --- PASS: TestMigProject_withLimits (21.61s)
```
### 2025-06-07
#### PASS 12 seconds
```
2025-06-07T00:31:34.2948388Z === RUN   TestMigProject_withLimits
2025-06-07T00:31:34.2948737Z --- PASS: TestMigProject_withLimits (12.84s)
```
### 2025-06-08
#### PASS 20 seconds
```
2025-06-08T00:36:20.4531327Z === RUN   TestMigProject_withLimits
2025-06-08T00:36:20.4531658Z --- PASS: TestMigProject_withLimits (20.62s)
```
### 2025-06-09
#### PASS 22 seconds
```
2025-06-09T00:36:08.5652987Z === RUN   TestMigProject_withLimits
2025-06-09T00:36:08.5653489Z --- PASS: TestMigProject_withLimits (22.72s)
```
### 2025-06-10
#### PASS 24 seconds
```
2025-06-10T00:42:52.1763264Z === RUN   TestMigProject_withLimits
2025-06-10T00:42:52.1764004Z --- PASS: TestMigProject_withLimits (24.23s)
```
### 2025-06-11
#### PASS 13 seconds
```
2025-06-11T00:31:59.6336576Z === RUN   TestMigProject_withLimits
2025-06-11T00:31:59.6337180Z --- PASS: TestMigProject_withLimits (13.39s)
```
#### PASS 11 seconds
```
2025-06-11T07:39:33.7410960Z === RUN   TestMigProject_withLimits
2025-06-11T07:39:33.7411477Z --- PASS: TestMigProject_withLimits (11.80s)
```
### 2025-06-12
#### PASS 20 seconds
```
2025-06-12T00:33:16.4668138Z === RUN   TestMigProject_withLimits
2025-06-12T00:33:16.4668646Z --- PASS: TestMigProject_withLimits (20.04s)
```
### 2025-06-13
#### PASS 22 seconds
```
2025-06-13T00:33:55.1513958Z === RUN   TestMigProject_withLimits
2025-06-13T00:33:55.1514363Z --- PASS: TestMigProject_withLimits (22.42s)
```
### 2025-06-14
#### PASS 15 seconds
```
2025-06-14T00:31:25.2104724Z === RUN   TestMigProject_withLimits
2025-06-14T00:31:25.2105102Z --- PASS: TestMigProject_withLimits (15.04s)
```
### 2025-06-15
#### PASS 20 seconds
```
2025-06-15T00:36:14.3376737Z === RUN   TestMigProject_withLimits
2025-06-15T00:36:14.3377371Z --- PASS: TestMigProject_withLimits (20.88s)
```
### 2025-06-16
#### PASS 15 seconds
```
2025-06-16T00:33:20.2234571Z === RUN   TestMigProject_withLimits
2025-06-16T00:33:20.2235092Z --- PASS: TestMigProject_withLimits (15.00s)
```
### 2025-06-17
#### PASS 12 seconds
```
2025-06-17T00:31:50.0523275Z === RUN   TestMigProject_withLimits
2025-06-17T00:31:50.0523810Z --- PASS: TestMigProject_withLimits (12.04s)
```
### 2025-06-18
#### PASS 11 seconds
```
2025-06-18T00:31:48.4291644Z === RUN   TestMigProject_withLimits
2025-06-18T00:31:48.4292182Z --- PASS: TestMigProject_withLimits (11.37s)
```
### 2025-06-19
#### PASS 13 seconds
```
2025-06-19T00:31:58.4302817Z === RUN   TestMigProject_withLimits
2025-06-19T00:31:58.4303381Z --- PASS: TestMigProject_withLimits (13.21s)
```
### 2025-06-20
#### PASS 13 seconds
```
2025-06-20T00:32:00.0162662Z === RUN   TestMigProject_withLimits
2025-06-20T00:32:00.0163166Z --- PASS: TestMigProject_withLimits (13.88s)
```
### 2025-06-21
#### PASS 22 seconds
```
2025-06-21T00:34:00.9722451Z === RUN   TestMigProject_withLimits
2025-06-21T00:34:00.9722777Z --- PASS: TestMigProject_withLimits (22.26s)
```
### 2025-06-22
#### PASS 34 seconds
```
2025-06-22T00:36:57.8969804Z === RUN   TestMigProject_withLimits
2025-06-22T00:36:57.8970098Z --- PASS: TestMigProject_withLimits (34.05s)
```
### 2025-06-23
#### PASS 11 seconds
```
2025-06-23T00:33:38.2218200Z === RUN   TestMigProject_withLimits
2025-06-23T00:33:38.2218740Z --- PASS: TestMigProject_withLimits (11.32s)
```
### 2025-06-24
#### PASS 22 seconds
```
2025-06-24T00:34:16.6763897Z === RUN   TestMigProject_withLimits
2025-06-24T00:34:16.6764507Z --- PASS: TestMigProject_withLimits (22.52s)
```
### 2025-06-25
#### PASS 22 seconds
```
2025-06-25T00:34:38.2614115Z === RUN   TestMigProject_withLimits
2025-06-25T00:34:38.2614562Z --- PASS: TestMigProject_withLimits (22.86s)
```
### 2025-06-26
#### PASS 21 seconds
```
2025-06-26T00:33:55.8000173Z === RUN   TestMigProject_withLimits
2025-06-26T00:33:55.8000605Z --- PASS: TestMigProject_withLimits (21.41s)
```