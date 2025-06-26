# projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 41 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 35) FAIL(x 6)
Success rate: 85.37%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 23 seconds
```
2025-05-28T00:39:57.6571184Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-28T00:39:57.6579075Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-28T00:39:57.6590184Z --- PASS: TestAccProjectAPIKey_updateRole (23.67s)
```
#### FAIL 2 seconds
```
2025-05-28T08:38:43.8250768Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-28T08:38:43.8259944Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-28T08:38:43.8283630Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-28T08:38:43.8284920Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-05-28T08:38:43.8285710Z         
2025-05-28T08:38:43.8286945Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8287725Z         
2025-05-28T08:38:43.8288322Z           with mongodbatlas_project_api_key.test,
2025-05-28T08:38:43.8289516Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T08:38:43.8290591Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T08:38:43.8291187Z         
2025-05-28T08:38:43.8470333Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-28T08:38:43.8471555Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T08:38:43.8472584Z         
2025-05-28T08:38:43.8473535Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8474320Z         
2025-05-28T08:38:43.8474788Z --- FAIL: TestAccProjectAPIKey_updateRole (2.27s)
```
#### FAIL 2 seconds
```
2025-05-28T12:23:27.4978216Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-28T12:23:27.4987264Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-28T12:23:27.5015600Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-28T12:23:27.5016658Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:23:27.5017376Z         
2025-05-28T12:23:27.5018284Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5019169Z         
2025-05-28T12:23:27.5019759Z           with mongodbatlas_project_api_key.test,
2025-05-28T12:23:27.5021109Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T12:23:27.5022170Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T12:23:27.5022726Z         
2025-05-28T12:23:27.5087982Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-28T12:23:27.5088553Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T12:23:27.5089200Z         
2025-05-28T12:23:27.5089726Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5090154Z         
2025-05-28T12:23:27.5090411Z --- FAIL: TestAccProjectAPIKey_updateRole (2.87s)
```
### 2025-05-29
#### PASS 14 seconds
```
2025-05-29T00:39:19.8816215Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-29T00:39:19.8827602Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-29T00:39:19.8846959Z --- PASS: TestAccProjectAPIKey_updateRole (14.34s)
```
### 2025-05-30
#### PASS 17 seconds
```
2025-05-30T00:40:03.3109987Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-30T00:40:03.3115871Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-30T00:40:03.3128146Z --- PASS: TestAccProjectAPIKey_updateRole (17.91s)
```
### 2025-05-31
#### PASS 22 seconds
```
2025-05-31T00:39:05.8775377Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-31T00:39:05.8784269Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-31T00:39:05.8804522Z --- PASS: TestAccProjectAPIKey_updateRole (22.10s)
```
### 2025-06-01
#### PASS 11 seconds
```
2025-06-01T00:42:49.5821200Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-01T00:42:49.5826171Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-01T00:42:49.5837767Z --- PASS: TestAccProjectAPIKey_updateRole (11.76s)
```
#### PASS 11 seconds
```
2025-06-01T04:51:41.3644231Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-01T04:51:41.3665770Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-01T04:51:41.3676605Z --- PASS: TestAccProjectAPIKey_updateRole (11.85s)
```
#### PASS 12 seconds
```
2025-06-01T09:00:43.0180636Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-01T09:00:43.0185996Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-01T09:00:43.0197226Z --- PASS: TestAccProjectAPIKey_updateRole (12.29s)
```
#### PASS 17 seconds
```
2025-06-01T13:10:06.6661934Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-01T13:10:06.6667720Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-01T13:10:06.6678290Z --- PASS: TestAccProjectAPIKey_updateRole (17.22s)
```
#### PASS 17 seconds
```
2025-06-01T17:19:27.9807540Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-01T17:19:27.9812563Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-01T17:19:27.9824034Z --- PASS: TestAccProjectAPIKey_updateRole (17.23s)
```
#### PASS 12 seconds
```
2025-06-01T21:27:43.2912759Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-01T21:27:43.2923139Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-01T21:27:43.2943036Z --- PASS: TestAccProjectAPIKey_updateRole (12.65s)
```
### 2025-06-02
#### PASS 11 seconds
```
2025-06-02T00:40:50.1009659Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-02T00:40:50.1015543Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-02T00:40:50.1025731Z --- PASS: TestAccProjectAPIKey_updateRole (11.51s)
```
#### PASS 13 seconds
```
2025-06-02T01:36:56.6293489Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-02T01:36:56.6317078Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-02T01:36:56.6352544Z --- PASS: TestAccProjectAPIKey_updateRole (13.42s)
```
#### PASS 22 seconds
```
2025-06-02T05:53:00.3866507Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-02T05:53:00.3872414Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-02T05:53:00.3883145Z --- PASS: TestAccProjectAPIKey_updateRole (22.19s)
```
### 2025-06-03
#### PASS 17 seconds
```
2025-06-03T00:40:12.5782796Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-03T00:40:12.5787994Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-03T00:40:12.5799514Z --- PASS: TestAccProjectAPIKey_updateRole (17.28s)
```
### 2025-06-04
#### PASS 18 seconds
```
2025-06-04T00:31:03.2452865Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-04T00:31:03.2462931Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-04T00:31:03.2483698Z --- PASS: TestAccProjectAPIKey_updateRole (18.01s)
```
### 2025-06-05
#### PASS 21 seconds
```
2025-06-05T00:30:45.1433385Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-05T00:30:45.1437893Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-05T00:30:45.1488667Z --- PASS: TestAccProjectAPIKey_updateRole (21.35s)
```
### 2025-06-06
#### PASS 12 seconds
```
2025-06-06T00:31:57.1541545Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-06T00:31:57.1552901Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-06T00:31:57.1570221Z --- PASS: TestAccProjectAPIKey_updateRole (12.10s)
```
### 2025-06-07
#### PASS 23 seconds
```
2025-06-07T00:30:59.1350125Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-07T00:30:59.1360375Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-07T00:30:59.1379866Z --- PASS: TestAccProjectAPIKey_updateRole (23.96s)
```
### 2025-06-08
#### FAIL 2 seconds
```
2025-06-08T00:33:53.1358777Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-08T00:33:53.1408652Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-08T00:33:53.1467290Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-08T00:33:53.1468299Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-06-08T00:33:53.1469052Z         
2025-06-08T00:33:53.1470031Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1470812Z         
2025-06-08T00:33:53.1471412Z           with mongodbatlas_project_api_key.test,
2025-06-08T00:33:53.1472771Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-08T00:33:53.1473889Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-08T00:33:53.1474482Z         
2025-06-08T00:33:53.1658797Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-08T00:33:53.1659786Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:33:53.1660572Z         
2025-06-08T00:33:53.1661549Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1693300Z         
2025-06-08T00:33:53.1693859Z --- FAIL: TestAccProjectAPIKey_updateRole (2.34s)
```
### 2025-06-09
#### PASS 11 seconds
```
2025-06-09T00:32:47.3472856Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-09T00:32:47.3484401Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-09T00:32:47.3503104Z --- PASS: TestAccProjectAPIKey_updateRole (11.67s)
```
### 2025-06-10
#### PASS 23 seconds
```
2025-06-10T00:40:05.6387426Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-10T00:40:05.6415508Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-10T00:40:05.6435794Z --- PASS: TestAccProjectAPIKey_updateRole (23.12s)
```
### 2025-06-11
#### PASS 23 seconds
```
2025-06-11T00:30:57.6281810Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-11T00:30:57.6287002Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-11T00:30:57.6299834Z --- PASS: TestAccProjectAPIKey_updateRole (23.31s)
```
#### FAIL 2 seconds
```
2025-06-11T07:39:05.1194702Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-11T07:39:05.1200559Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-11T07:39:05.1252419Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-11T07:39:05.1252934Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-06-11T07:39:05.1253337Z         
2025-06-11T07:39:05.1253835Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1254342Z         
2025-06-11T07:39:05.1254651Z           with mongodbatlas_project_api_key.test,
2025-06-11T07:39:05.1255273Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-11T07:39:05.1256085Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-11T07:39:05.1256382Z         
2025-06-11T07:39:05.1276252Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-11T07:39:05.1276807Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:39:05.1277238Z         
2025-06-11T07:39:05.1277737Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1278152Z         
2025-06-11T07:39:05.1278385Z --- FAIL: TestAccProjectAPIKey_updateRole (2.37s)
```
### 2025-06-12
#### PASS 11 seconds
```
2025-06-12T00:30:17.1533502Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-12T00:30:17.1543122Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-12T00:30:17.1560199Z --- PASS: TestAccProjectAPIKey_updateRole (11.18s)
```
### 2025-06-13
#### PASS 12 seconds
```
2025-06-13T00:30:25.5487307Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-13T00:30:25.5497271Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-13T00:30:25.5513033Z --- PASS: TestAccProjectAPIKey_updateRole (12.20s)
```
### 2025-06-14
#### PASS 13 seconds
```
2025-06-14T00:29:51.1284146Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-14T00:29:51.1291142Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-14T00:29:51.1311287Z --- PASS: TestAccProjectAPIKey_updateRole (13.73s)
```
### 2025-06-15
#### FAIL 2 seconds
```
2025-06-15T00:33:43.1542162Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-15T00:33:43.1550240Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-15T00:33:43.1637687Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-15T00:33:43.1639739Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-06-15T00:33:43.1640515Z         
2025-06-15T00:33:43.1641448Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1642200Z         
2025-06-15T00:33:43.1642768Z           with mongodbatlas_project_api_key.test,
2025-06-15T00:33:43.1643975Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-15T00:33:43.1645074Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-15T00:33:43.1645627Z         
2025-06-15T00:33:43.1715360Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-15T00:33:43.1716349Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-15T00:33:43.1717088Z         
2025-06-15T00:33:43.1718150Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1718858Z         
2025-06-15T00:33:43.1719262Z --- FAIL: TestAccProjectAPIKey_updateRole (2.75s)
```
### 2025-06-16
#### PASS 23 seconds
```
2025-06-16T00:32:19.5495949Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-16T00:32:19.5501132Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-16T00:32:19.5512257Z --- PASS: TestAccProjectAPIKey_updateRole (23.35s)
```
### 2025-06-17
#### PASS 24 seconds
```
2025-06-17T00:31:18.8988738Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-17T00:31:18.8997588Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-17T00:31:18.9017795Z --- PASS: TestAccProjectAPIKey_updateRole (24.20s)
```
### 2025-06-18
#### PASS 11 seconds
```
2025-06-18T00:30:54.3752147Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-18T00:30:54.3776420Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-18T00:30:54.3796318Z --- PASS: TestAccProjectAPIKey_updateRole (11.96s)
```
#### PASS 11 seconds
```
2025-06-18T07:30:47.1859841Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-18T07:30:47.1864100Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-18T07:30:47.1875616Z --- PASS: TestAccProjectAPIKey_updateRole (11.11s)
```
### 2025-06-19
#### PASS 11 seconds
```
2025-06-19T00:31:04.0818286Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-19T00:31:04.0858779Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-19T00:31:04.0874533Z --- PASS: TestAccProjectAPIKey_updateRole (11.11s)
```
### 2025-06-20
#### PASS 23 seconds
```
2025-06-20T00:31:00.4528734Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-20T00:31:00.4538596Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-20T00:31:00.4549840Z --- PASS: TestAccProjectAPIKey_updateRole (23.97s)
```
### 2025-06-21
#### PASS 12 seconds
```
2025-06-21T00:30:24.1481477Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-21T00:30:24.1492895Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-21T00:30:24.1512186Z --- PASS: TestAccProjectAPIKey_updateRole (12.21s)
```
### 2025-06-22
#### FAIL a second
```
2025-06-22T00:33:39.3832078Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3839242Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3921290Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3922222Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3922925Z         
2025-06-22T00:33:39.3923835Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3924561Z         
2025-06-22T00:33:39.3925112Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.3926234Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.3927332Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.3927869Z         
2025-06-22T00:33:39.3936141Z    test_step_number=1 test_name=TestAccProjectAPIKey_basic
2025-06-22T00:33:39.3989306Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-22T00:33:39.3990287Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.3991187Z         
2025-06-22T00:33:39.3992099Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3992821Z         
2025-06-22T00:33:39.3993224Z --- FAIL: TestAccProjectAPIKey_updateRole (1.89s)
```
### 2025-06-23
#### PASS 23 seconds
```
2025-06-23T00:33:10.6556653Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-23T00:33:10.6563543Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-23T00:33:10.6573355Z --- PASS: TestAccProjectAPIKey_updateRole (23.77s)
```
### 2025-06-24
#### PASS 14 seconds
```
2025-06-24T00:30:45.8925766Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-24T00:30:45.8934458Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-24T00:30:45.8955733Z --- PASS: TestAccProjectAPIKey_updateRole (14.14s)
```
### 2025-06-25
#### PASS 14 seconds
```
2025-06-25T00:31:06.5828645Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-25T00:31:06.5838988Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-25T00:31:06.5858298Z --- PASS: TestAccProjectAPIKey_updateRole (14.65s)
```
### 2025-06-26
#### PASS 13 seconds
```
2025-06-26T00:31:01.9566456Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-26T00:31:01.9576007Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-26T00:31:01.9592959Z --- PASS: TestAccProjectAPIKey_updateRole (13.73s)
```