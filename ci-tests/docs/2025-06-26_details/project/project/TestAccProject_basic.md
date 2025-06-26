# project/project/TestAccProject_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS a minute
```
2025-05-28T00:40:31.0055067Z === RUN   TestAccProject_basic
2025-05-28T00:40:31.0068079Z === CONT  TestAccProject_basic
2025-05-28T00:40:31.0107696Z --- PASS: TestAccProject_basic (112.43s)
```
#### PASS 2 minutes
```
2025-05-28T08:40:09.2638985Z === RUN   TestAccProject_basic
2025-05-28T08:40:09.2651318Z === CONT  TestAccProject_basic
2025-05-28T08:40:09.2715571Z --- PASS: TestAccProject_basic (131.79s)
```
### 2025-05-29
#### PASS 3 minutes
```
2025-05-29T00:42:12.4973981Z === RUN   TestAccProject_basic
2025-05-29T00:42:12.4986029Z === CONT  TestAccProject_basic
2025-05-29T00:42:12.5027274Z --- PASS: TestAccProject_basic (203.93s)
```
### 2025-05-30
#### PASS 2 minutes
```
2025-05-30T00:41:49.4524223Z === RUN   TestAccProject_basic
2025-05-30T00:41:49.4536078Z === CONT  TestAccProject_basic
2025-05-30T00:41:49.4576281Z --- PASS: TestAccProject_basic (158.22s)
```
### 2025-05-31
#### PASS a minute
```
2025-05-31T00:39:35.7944910Z === RUN   TestAccProject_basic
2025-05-31T00:39:35.7956061Z === CONT  TestAccProject_basic
2025-05-31T00:39:35.7998684Z --- PASS: TestAccProject_basic (110.56s)
```
### 2025-06-01
#### PASS 2 minutes
```
2025-06-01T00:44:45.0648364Z === RUN   TestAccProject_basic
2025-06-01T00:44:45.0660636Z === CONT  TestAccProject_basic
2025-06-01T00:44:45.0719867Z --- PASS: TestAccProject_basic (160.85s)
```
#### PASS 2 minutes
```
2025-06-01T04:53:00.6178344Z === RUN   TestAccProject_basic
2025-06-01T04:53:00.6197883Z === CONT  TestAccProject_basic
2025-06-01T04:53:00.6245118Z --- PASS: TestAccProject_basic (133.35s)
```
#### PASS 2 minutes
```
2025-06-01T09:02:03.3843537Z === RUN   TestAccProject_basic
2025-06-01T09:02:03.3854770Z === CONT  TestAccProject_basic
2025-06-01T09:02:03.3897514Z --- PASS: TestAccProject_basic (136.97s)
```
#### PASS 2 minutes
```
2025-06-01T13:11:21.1563179Z === RUN   TestAccProject_basic
2025-06-01T13:11:21.1575758Z === CONT  TestAccProject_basic
2025-06-01T13:11:21.1619365Z --- PASS: TestAccProject_basic (135.67s)
```
#### PASS a minute
```
2025-06-01T17:20:49.8506083Z === RUN   TestAccProject_basic
2025-06-01T17:20:49.8523764Z === CONT  TestAccProject_basic
2025-06-01T17:20:49.8571374Z --- PASS: TestAccProject_basic (105.83s)
```
#### PASS a minute
```
2025-06-01T21:28:25.8763851Z === RUN   TestAccProject_basic
2025-06-01T21:28:25.8773376Z === CONT  TestAccProject_basic
2025-06-01T21:28:25.8817264Z --- PASS: TestAccProject_basic (106.55s)
```
### 2025-06-02
#### PASS 2 minutes
```
2025-06-02T00:42:03.4270198Z === RUN   TestAccProject_basic
2025-06-02T00:42:03.4283088Z === CONT  TestAccProject_basic
2025-06-02T00:42:03.4324838Z --- PASS: TestAccProject_basic (129.82s)
```
#### PASS 5 minutes
```
2025-06-02T01:41:41.3888334Z === RUN   TestAccProject_basic
2025-06-02T01:41:41.3900885Z === CONT  TestAccProject_basic
2025-06-02T01:41:41.3941651Z --- PASS: TestAccProject_basic (313.07s)
```
#### PASS 2 minutes
```
2025-06-02T05:53:31.5743578Z === RUN   TestAccProject_basic
2025-06-02T05:53:31.5755706Z === CONT  TestAccProject_basic
2025-06-02T05:53:31.5796132Z --- PASS: TestAccProject_basic (132.16s)
```
### 2025-06-03
#### PASS 2 minutes
```
2025-06-03T00:41:25.4655050Z === RUN   TestAccProject_basic
2025-06-03T00:41:25.4666997Z === CONT  TestAccProject_basic
2025-06-03T00:41:25.4712306Z --- PASS: TestAccProject_basic (134.25s)
```
### 2025-06-04
#### PASS 3 minutes
```
2025-06-04T00:34:02.8403958Z === RUN   TestAccProject_basic
2025-06-04T00:34:02.8415575Z === CONT  TestAccProject_basic
2025-06-04T00:34:02.8458170Z --- PASS: TestAccProject_basic (212.66s)
```
### 2025-06-05
#### FAIL a second
```
2025-06-05T00:29:34.4928318Z === RUN   TestAccProject_basic
2025-06-05T00:29:34.4939712Z === CONT  TestAccProject_basic
2025-06-05T00:29:34.4951944Z === NAME  TestAccProject_basic
2025-06-05T00:29:34.4952502Z     resource_project_test.go:540: Step 1/4 error: Error running pre-apply plan: exit status 1
2025-06-05T00:29:34.4952928Z         
2025-06-05T00:29:34.4953283Z         Error: error in monogbatlas_projects data source
2025-06-05T00:29:34.4953599Z         
2025-06-05T00:29:34.4953928Z           with data.mongodbatlas_projects.test,
2025-06-05T00:29:34.4954528Z           on terraform_plugin_test.tf line 40, in data "mongodbatlas_projects" "test":
2025-06-05T00:29:34.4955187Z           40: 			data "mongodbatlas_projects" "test" {
2025-06-05T00:29:34.4955499Z         
2025-06-05T00:29:34.4955796Z         error getting projects information:
2025-06-05T00:29:34.4956349Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups GET: HTTP 500 Internal
2025-06-05T00:29:34.4956973Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4957555Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4957933Z --- FAIL: TestAccProject_basic (1.38s)
```
### 2025-06-06
#### PASS 4 minutes
```
2025-06-06T00:36:24.5997633Z === RUN   TestAccProject_basic
2025-06-06T00:36:24.6015150Z === CONT  TestAccProject_basic
2025-06-06T00:36:24.6059083Z --- PASS: TestAccProject_basic (295.74s)
```
### 2025-06-07
#### PASS a minute
```
2025-06-07T00:31:34.2949989Z === RUN   TestAccProject_basic
2025-06-07T00:31:34.2959662Z === CONT  TestAccProject_basic
2025-06-07T00:31:34.3002237Z --- PASS: TestAccProject_basic (118.98s)
```
### 2025-06-08
#### PASS 2 minutes
```
2025-06-08T00:36:20.4532869Z === RUN   TestAccProject_basic
2025-06-08T00:36:20.4545852Z === CONT  TestAccProject_basic
2025-06-08T00:36:20.4574685Z   
2025-06-08T00:36:20.4631852Z --- PASS: TestAccProject_basic (179.72s)
```
### 2025-06-09
#### PASS 3 minutes
```
2025-06-09T00:36:08.5654689Z === RUN   TestAccProject_basic
2025-06-09T00:36:08.5665383Z === CONT  TestAccProject_basic
2025-06-09T00:36:08.5708421Z --- PASS: TestAccProject_basic (230.50s)
```
### 2025-06-10
#### PASS 3 minutes
```
2025-06-10T00:42:52.1765199Z === RUN   TestAccProject_basic
2025-06-10T00:42:52.1774331Z === CONT  TestAccProject_basic
2025-06-10T00:42:52.1817484Z --- PASS: TestAccProject_basic (220.89s)
```
### 2025-06-11
#### PASS 2 minutes
```
2025-06-11T00:31:59.6339259Z === RUN   TestAccProject_basic
2025-06-11T00:31:59.6368455Z === CONT  TestAccProject_basic
2025-06-11T00:31:59.6447507Z --- PASS: TestAccProject_basic (138.70s)
```
#### PASS a minute
```
2025-06-11T07:39:33.7413362Z === RUN   TestAccProject_basic
2025-06-11T07:39:33.7425571Z === CONT  TestAccProject_basic
2025-06-11T07:39:33.7465869Z --- PASS: TestAccProject_basic (94.01s)
```
### 2025-06-12
#### PASS 3 minutes
```
2025-06-12T00:33:16.4670647Z === RUN   TestAccProject_basic
2025-06-12T00:33:16.4683343Z === CONT  TestAccProject_basic
2025-06-12T00:33:16.4722652Z --- PASS: TestAccProject_basic (213.54s)
```
### 2025-06-13
#### PASS 4 minutes
```
2025-06-13T00:33:55.1515780Z === RUN   TestAccProject_basic
2025-06-13T00:33:55.1528714Z === CONT  TestAccProject_basic
2025-06-13T00:33:55.1569359Z --- PASS: TestAccProject_basic (243.21s)
```
### 2025-06-14
#### PASS 2 minutes
```
2025-06-14T00:31:25.2106683Z === RUN   TestAccProject_basic
2025-06-14T00:31:25.2118118Z === CONT  TestAccProject_basic
2025-06-14T00:31:25.2159400Z --- PASS: TestAccProject_basic (145.96s)
```
### 2025-06-15
#### PASS 3 minutes
```
2025-06-15T00:36:14.3379387Z === RUN   TestAccProject_basic
2025-06-15T00:36:14.3391350Z === CONT  TestAccProject_basic
2025-06-15T00:36:14.3435810Z --- PASS: TestAccProject_basic (181.75s)
```
### 2025-06-16
#### PASS 2 minutes
```
2025-06-16T00:33:20.2236226Z === RUN   TestAccProject_basic
2025-06-16T00:33:20.2247004Z === CONT  TestAccProject_basic
2025-06-16T00:33:20.2287991Z --- PASS: TestAccProject_basic (136.70s)
```
### 2025-06-17
#### PASS 2 minutes
```
2025-06-17T00:31:50.0525822Z === RUN   TestAccProject_basic
2025-06-17T00:31:50.0538356Z === CONT  TestAccProject_basic
2025-06-17T00:31:50.0580081Z --- PASS: TestAccProject_basic (121.38s)
```
### 2025-06-18
#### PASS a minute
```
2025-06-18T00:31:48.4294058Z === RUN   TestAccProject_basic
2025-06-18T00:31:48.4303175Z === CONT  TestAccProject_basic
2025-06-18T00:31:48.4347455Z --- PASS: TestAccProject_basic (113.31s)
```
### 2025-06-19
#### PASS a minute
```
2025-06-19T00:31:58.4305258Z === RUN   TestAccProject_basic
2025-06-19T00:31:58.4317992Z === CONT  TestAccProject_basic
2025-06-19T00:31:58.4362168Z --- PASS: TestAccProject_basic (112.13s)
```
### 2025-06-20
#### PASS 2 minutes
```
2025-06-20T00:32:00.0165048Z === RUN   TestAccProject_basic
2025-06-20T00:32:00.0176684Z === CONT  TestAccProject_basic
2025-06-20T00:32:00.0223838Z --- PASS: TestAccProject_basic (146.00s)
```
### 2025-06-21
#### PASS 4 minutes
```
2025-06-21T00:34:00.9724008Z === RUN   TestAccProject_basic
2025-06-21T00:34:00.9736954Z === CONT  TestAccProject_basic
2025-06-21T00:34:00.9777626Z --- PASS: TestAccProject_basic (251.60s)
```
### 2025-06-22
#### PASS 3 minutes
```
2025-06-22T00:36:57.8971201Z === RUN   TestAccProject_basic
2025-06-22T00:36:57.8982603Z === CONT  TestAccProject_basic
2025-06-22T00:36:57.9024086Z --- PASS: TestAccProject_basic (215.87s)
```
### 2025-06-23
#### PASS a minute
```
2025-06-23T00:33:38.2220697Z === RUN   TestAccProject_basic
2025-06-23T00:33:38.2232547Z === CONT  TestAccProject_basic
2025-06-23T00:33:38.2273125Z --- PASS: TestAccProject_basic (112.32s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:34:16.6766641Z === RUN   TestAccProject_basic
2025-06-24T00:34:16.6780548Z === CONT  TestAccProject_basic
2025-06-24T00:34:16.6822225Z --- PASS: TestAccProject_basic (236.93s)
```
### 2025-06-25
#### PASS 4 minutes
```
2025-06-25T00:34:38.2616658Z === RUN   TestAccProject_basic
2025-06-25T00:34:38.2629072Z === CONT  TestAccProject_basic
2025-06-25T00:34:38.2674336Z --- PASS: TestAccProject_basic (242.98s)
```
### 2025-06-26
#### PASS 3 minutes
```
2025-06-26T00:33:55.8002532Z === RUN   TestAccProject_basic
2025-06-26T00:33:55.8014952Z === CONT  TestAccProject_basic
2025-06-26T00:33:55.8056205Z --- PASS: TestAccProject_basic (212.15s)
```