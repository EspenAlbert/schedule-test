# project/project/TestMigProject_withFalseDefaultSettings Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 8 seconds
```
2025-05-28T00:40:31.0051316Z === RUN   TestMigProject_withFalseDefaultSettings
2025-05-28T00:40:31.0051930Z --- PASS: TestMigProject_withFalseDefaultSettings (8.93s)
```
#### PASS 10 seconds
```
2025-05-28T08:40:09.2635229Z === RUN   TestMigProject_withFalseDefaultSettings
2025-05-28T08:40:09.2635854Z --- PASS: TestMigProject_withFalseDefaultSettings (10.76s)
```
### 2025-05-29
#### PASS 12 seconds
```
2025-05-29T00:42:12.4971267Z === RUN   TestMigProject_withFalseDefaultSettings
2025-05-29T00:42:12.4971686Z --- PASS: TestMigProject_withFalseDefaultSettings (12.21s)
```
### 2025-05-30
#### PASS 11 seconds
```
2025-05-30T00:41:49.4521627Z === RUN   TestMigProject_withFalseDefaultSettings
2025-05-30T00:41:49.4522291Z --- PASS: TestMigProject_withFalseDefaultSettings (11.27s)
```
### 2025-05-31
#### PASS 8 seconds
```
2025-05-31T00:39:35.7940900Z === RUN   TestMigProject_withFalseDefaultSettings
2025-05-31T00:39:35.7941555Z --- PASS: TestMigProject_withFalseDefaultSettings (8.66s)
```
### 2025-06-01
#### PASS 10 seconds
```
2025-06-01T00:44:45.0645981Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-01T00:44:45.0646481Z --- PASS: TestMigProject_withFalseDefaultSettings (10.52s)
```
#### PASS 8 seconds
```
2025-06-01T04:53:00.6173392Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-01T04:53:00.6174197Z --- PASS: TestMigProject_withFalseDefaultSettings (8.56s)
```
#### PASS 9 seconds
```
2025-06-01T09:02:03.3839968Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-01T09:02:03.3840568Z --- PASS: TestMigProject_withFalseDefaultSettings (9.10s)
```
#### PASS 8 seconds
```
2025-06-01T13:11:21.1559336Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-01T13:11:21.1559988Z --- PASS: TestMigProject_withFalseDefaultSettings (8.74s)
```
#### PASS 9 seconds
```
2025-06-01T17:20:49.8501833Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-01T17:20:49.8502547Z --- PASS: TestMigProject_withFalseDefaultSettings (9.49s)
```
#### PASS 7 seconds
```
2025-06-01T21:28:25.8761008Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-01T21:28:25.8761568Z --- PASS: TestMigProject_withFalseDefaultSettings (7.96s)
```
### 2025-06-02
#### PASS 7 seconds
```
2025-06-02T00:42:03.4265998Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-02T00:42:03.4266747Z --- PASS: TestMigProject_withFalseDefaultSettings (7.68s)
```
#### PASS 13 seconds
```
2025-06-02T01:41:41.3885555Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-02T01:41:41.3886097Z --- PASS: TestMigProject_withFalseDefaultSettings (13.29s)
```
#### PASS 12 seconds
```
2025-06-02T05:53:31.5739731Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-02T05:53:31.5740446Z --- PASS: TestMigProject_withFalseDefaultSettings (12.88s)
```
### 2025-06-03
#### PASS 8 seconds
```
2025-06-03T00:41:25.4651428Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-03T00:41:25.4652295Z --- PASS: TestMigProject_withFalseDefaultSettings (8.79s)
```
### 2025-06-04
#### PASS 13 seconds
```
2025-06-04T00:34:02.8400530Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-04T00:34:02.8401058Z --- PASS: TestMigProject_withFalseDefaultSettings (13.16s)
```
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:29:34.4902219Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-05T00:29:34.4908770Z   
2025-06-05T00:29:34.4909239Z     resource_project_migration_test.go:90: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4909661Z         
2025-06-05T00:29:34.4910079Z         Error: error creating project: test-acc-tf-p-279065433929023149
2025-06-05T00:29:34.4910436Z         
2025-06-05T00:29:34.4910742Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4911519Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4912216Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4912525Z         
2025-06-05T00:29:34.4912997Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4913625Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4914202Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4914629Z --- FAIL: TestMigProject_withFalseDefaultSettings (4.64s)
```
### 2025-06-06
#### PASS 14 seconds
```
2025-06-06T00:36:24.5993869Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-06T00:36:24.5994616Z --- PASS: TestMigProject_withFalseDefaultSettings (14.54s)
```
### 2025-06-07
#### PASS 8 seconds
```
2025-06-07T00:31:34.2947550Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-07T00:31:34.2947992Z --- PASS: TestMigProject_withFalseDefaultSettings (8.15s)
```
### 2025-06-08
#### PASS 11 seconds
```
2025-06-08T00:36:20.4530516Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-08T00:36:20.4530945Z --- PASS: TestMigProject_withFalseDefaultSettings (11.76s)
```
### 2025-06-09
#### PASS 12 seconds
```
2025-06-09T00:36:08.5651664Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-09T00:36:08.5652360Z --- PASS: TestMigProject_withFalseDefaultSettings (12.98s)
```
### 2025-06-10
#### PASS 14 seconds
```
2025-06-10T00:42:52.1762195Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-10T00:42:52.1762748Z --- PASS: TestMigProject_withFalseDefaultSettings (14.09s)
```
### 2025-06-11
#### PASS 8 seconds
```
2025-06-11T00:31:59.6300447Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-11T00:31:59.6335682Z --- PASS: TestMigProject_withFalseDefaultSettings (8.53s)
```
#### PASS 6 seconds
```
2025-06-11T07:39:33.7409673Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-11T07:39:33.7410356Z --- PASS: TestMigProject_withFalseDefaultSettings (6.92s)
```
### 2025-06-12
#### PASS 13 seconds
```
2025-06-12T00:33:16.4666807Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-12T00:33:16.4667496Z --- PASS: TestMigProject_withFalseDefaultSettings (13.44s)
```
### 2025-06-13
#### PASS 13 seconds
```
2025-06-13T00:33:55.1512742Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-13T00:33:55.1513500Z --- PASS: TestMigProject_withFalseDefaultSettings (13.29s)
```
### 2025-06-14
#### PASS 10 seconds
```
2025-06-14T00:31:25.2103731Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-14T00:31:25.2104274Z --- PASS: TestMigProject_withFalseDefaultSettings (10.42s)
```
### 2025-06-15
#### PASS 12 seconds
```
2025-06-15T00:36:14.3375156Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-15T00:36:14.3376006Z --- PASS: TestMigProject_withFalseDefaultSettings (12.42s)
```
### 2025-06-16
#### PASS 10 seconds
```
2025-06-16T00:33:20.2233276Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-16T00:33:20.2233955Z --- PASS: TestMigProject_withFalseDefaultSettings (10.77s)
```
### 2025-06-17
#### PASS 7 seconds
```
2025-06-17T00:31:50.0521983Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-17T00:31:50.0522624Z --- PASS: TestMigProject_withFalseDefaultSettings (7.58s)
```
### 2025-06-18
#### PASS 8 seconds
```
2025-06-18T00:31:48.4290277Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-18T00:31:48.4290949Z --- PASS: TestMigProject_withFalseDefaultSettings (8.91s)
```
### 2025-06-19
#### PASS 7 seconds
```
2025-06-19T00:31:58.4301452Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-19T00:31:58.4302175Z --- PASS: TestMigProject_withFalseDefaultSettings (7.78s)
```
### 2025-06-20
#### PASS 8 seconds
```
2025-06-20T00:32:00.0161568Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-20T00:32:00.0162040Z --- PASS: TestMigProject_withFalseDefaultSettings (8.74s)
```
### 2025-06-21
#### PASS 13 seconds
```
2025-06-21T00:34:00.9721355Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-21T00:34:00.9722010Z --- PASS: TestMigProject_withFalseDefaultSettings (13.67s)
```
### 2025-06-22
#### PASS 8 seconds
```
2025-06-22T00:36:57.8969093Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-22T00:36:57.8969464Z --- PASS: TestMigProject_withFalseDefaultSettings (8.32s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:33:38.2217033Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-23T00:33:38.2217591Z --- PASS: TestMigProject_withFalseDefaultSettings (8.11s)
```
### 2025-06-24
#### PASS 12 seconds
```
2025-06-24T00:34:16.6762366Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-24T00:34:16.6763167Z --- PASS: TestMigProject_withFalseDefaultSettings (12.61s)
```
### 2025-06-25
#### PASS 13 seconds
```
2025-06-25T00:34:38.2613279Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-25T00:34:38.2613658Z --- PASS: TestMigProject_withFalseDefaultSettings (13.41s)
```
### 2025-06-26
#### PASS 12 seconds
```
2025-06-26T00:33:55.7999281Z === RUN   TestMigProject_withFalseDefaultSettings
2025-06-26T00:33:55.7999662Z --- PASS: TestMigProject_withFalseDefaultSettings (12.31s)
```