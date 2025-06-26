# project/project/TestMigProject_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 10 seconds
```
2025-05-28T00:40:31.0048785Z === RUN   TestMigProject_basic
2025-05-28T00:40:31.0049410Z --- PASS: TestMigProject_basic (10.06s)
```
#### PASS 10 seconds
```
2025-05-28T08:40:09.2633164Z === RUN   TestMigProject_basic
2025-05-28T08:40:09.2633756Z --- PASS: TestMigProject_basic (10.51s)
```
### 2025-05-29
#### PASS 15 seconds
```
2025-05-29T00:42:12.4969197Z === RUN   TestMigProject_basic
2025-05-29T00:42:12.4969967Z --- PASS: TestMigProject_basic (15.28s)
```
### 2025-05-30
#### PASS 13 seconds
```
2025-05-30T00:41:49.4519356Z === RUN   TestMigProject_basic
2025-05-30T00:41:49.4519885Z --- PASS: TestMigProject_basic (13.19s)
```
### 2025-05-31
#### PASS 9 seconds
```
2025-05-31T00:39:35.7938976Z === RUN   TestMigProject_basic
2025-05-31T00:39:35.7939527Z --- PASS: TestMigProject_basic (9.06s)
```
### 2025-06-01
#### PASS 11 seconds
```
2025-06-01T00:44:45.0643751Z === RUN   TestMigProject_basic
2025-06-01T00:44:45.0644440Z --- PASS: TestMigProject_basic (11.66s)
```
#### PASS 9 seconds
```
2025-06-01T04:53:00.6170235Z === RUN   TestMigProject_basic
2025-06-01T04:53:00.6171131Z --- PASS: TestMigProject_basic (9.15s)
```
#### PASS 9 seconds
```
2025-06-01T09:02:03.3837924Z === RUN   TestMigProject_basic
2025-06-01T09:02:03.3838446Z --- PASS: TestMigProject_basic (9.24s)
```
#### PASS 10 seconds
```
2025-06-01T13:11:21.1557142Z === RUN   TestMigProject_basic
2025-06-01T13:11:21.1557596Z --- PASS: TestMigProject_basic (10.01s)
```
#### PASS 10 seconds
```
2025-06-01T17:20:49.8499365Z === RUN   TestMigProject_basic
2025-06-01T17:20:49.8499955Z --- PASS: TestMigProject_basic (10.01s)
```
#### PASS 7 seconds
```
2025-06-01T21:28:25.8758827Z === RUN   TestMigProject_basic
2025-06-01T21:28:25.8759277Z --- PASS: TestMigProject_basic (7.97s)
```
### 2025-06-02
#### PASS 8 seconds
```
2025-06-02T00:42:03.4263555Z === RUN   TestMigProject_basic
2025-06-02T00:42:03.4264078Z --- PASS: TestMigProject_basic (8.76s)
```
#### PASS 13 seconds
```
2025-06-02T01:41:41.3883471Z === RUN   TestMigProject_basic
2025-06-02T01:41:41.3884005Z --- PASS: TestMigProject_basic (13.07s)
```
#### PASS 12 seconds
```
2025-06-02T05:53:31.5737903Z === RUN   TestMigProject_basic
2025-06-02T05:53:31.5738301Z --- PASS: TestMigProject_basic (12.39s)
```
### 2025-06-03
#### PASS 9 seconds
```
2025-06-03T00:41:25.4648488Z === RUN   TestMigProject_basic
2025-06-03T00:41:25.4649181Z --- PASS: TestMigProject_basic (9.82s)
```
### 2025-06-04
#### PASS 15 seconds
```
2025-06-04T00:34:02.8398217Z === RUN   TestMigProject_basic
2025-06-04T00:34:02.8398753Z --- PASS: TestMigProject_basic (15.88s)
```
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:29:34.4839009Z === RUN   TestMigProject_basic
2025-06-05T00:29:34.4876934Z   
2025-06-05T00:29:34.4877826Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.4878626Z         
2025-06-05T00:29:34.4879389Z         Error: error creating project: test-acc-tf-p-4279980969882869412
2025-06-05T00:29:34.4880042Z         
2025-06-05T00:29:34.4880602Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4882285Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4883334Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4883876Z         
2025-06-05T00:29:34.4884738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4885902Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4886977Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4887950Z --- FAIL: TestMigProject_basic (4.14s)
```
### 2025-06-06
#### PASS 14 seconds
```
2025-06-06T00:36:24.5991626Z === RUN   TestMigProject_basic
2025-06-06T00:36:24.5992199Z --- PASS: TestMigProject_basic (14.64s)
```
### 2025-06-07
#### PASS 10 seconds
```
2025-06-07T00:31:34.2945669Z === RUN   TestMigProject_basic
2025-06-07T00:31:34.2946105Z --- PASS: TestMigProject_basic (10.08s)
```
### 2025-06-08
#### PASS 12 seconds
```
2025-06-08T00:36:20.4528532Z === RUN   TestMigProject_basic
2025-06-08T00:36:20.4529109Z --- PASS: TestMigProject_basic (12.17s)
```
### 2025-06-09
#### PASS 13 seconds
```
2025-06-09T00:36:08.5649705Z === RUN   TestMigProject_basic
2025-06-09T00:36:08.5650271Z --- PASS: TestMigProject_basic (13.93s)
```
### 2025-06-10
#### PASS 12 seconds
```
2025-06-10T00:42:52.1760091Z === RUN   TestMigProject_basic
2025-06-10T00:42:52.1760632Z --- PASS: TestMigProject_basic (12.96s)
```
### 2025-06-11
#### PASS 9 seconds
```
2025-06-11T00:31:59.6242993Z === RUN   TestMigProject_basic
2025-06-11T00:31:59.6245378Z --- PASS: TestMigProject_basic (9.38s)
```
#### PASS 8 seconds
```
2025-06-11T07:39:33.7407535Z === RUN   TestMigProject_basic
2025-06-11T07:39:33.7407973Z --- PASS: TestMigProject_basic (8.92s)
```
### 2025-06-12
#### PASS 12 seconds
```
2025-06-12T00:33:16.4664866Z === RUN   TestMigProject_basic
2025-06-12T00:33:16.4665341Z --- PASS: TestMigProject_basic (12.98s)
```
### 2025-06-13
#### PASS 14 seconds
```
2025-06-13T00:33:55.1509682Z === RUN   TestMigProject_basic
2025-06-13T00:33:55.1510391Z --- PASS: TestMigProject_basic (14.02s)
```
### 2025-06-14
#### PASS 10 seconds
```
2025-06-14T00:31:25.2101097Z === RUN   TestMigProject_basic
2025-06-14T00:31:25.2101722Z --- PASS: TestMigProject_basic (10.82s)
```
### 2025-06-15
#### PASS 12 seconds
```
2025-06-15T00:36:14.3373057Z === RUN   TestMigProject_basic
2025-06-15T00:36:14.3373502Z --- PASS: TestMigProject_basic (12.47s)
```
### 2025-06-16
#### PASS 9 seconds
```
2025-06-16T00:33:20.2231455Z === RUN   TestMigProject_basic
2025-06-16T00:33:20.2231928Z --- PASS: TestMigProject_basic (9.30s)
```
### 2025-06-17
#### PASS 9 seconds
```
2025-06-17T00:31:50.0519825Z === RUN   TestMigProject_basic
2025-06-17T00:31:50.0520324Z --- PASS: TestMigProject_basic (9.43s)
```
### 2025-06-18
#### PASS 8 seconds
```
2025-06-18T00:31:48.4288573Z === RUN   TestMigProject_basic
2025-06-18T00:31:48.4289036Z --- PASS: TestMigProject_basic (8.23s)
```
### 2025-06-19
#### PASS 8 seconds
```
2025-06-19T00:31:58.4299196Z === RUN   TestMigProject_basic
2025-06-19T00:31:58.4299746Z --- PASS: TestMigProject_basic (8.65s)
```
### 2025-06-20
#### PASS 10 seconds
```
2025-06-20T00:32:00.0159821Z === RUN   TestMigProject_basic
2025-06-20T00:32:00.0160246Z --- PASS: TestMigProject_basic (10.42s)
```
### 2025-06-21
#### PASS 14 seconds
```
2025-06-21T00:34:00.9719610Z === RUN   TestMigProject_basic
2025-06-21T00:34:00.9720054Z --- PASS: TestMigProject_basic (14.01s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:36:57.8952638Z === RUN   TestMigProject_basic
2025-06-22T00:36:57.8960883Z   
2025-06-22T00:36:57.8961455Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:36:57.8961871Z         
2025-06-22T00:36:57.8962251Z         Error: error when getting project properties after create
2025-06-22T00:36:57.8962573Z         
2025-06-22T00:36:57.8962858Z           with mongodbatlas_project.test,
2025-06-22T00:36:57.8963429Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-22T00:36:57.8963962Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:36:57.8964241Z         
2025-06-22T00:36:57.8964936Z         error getting project (68574efdab82446d9bfb0f99): error getting project's
2025-06-22T00:36:57.8965525Z         limits (68574efdab82446d9bfb0f99):
2025-06-22T00:36:57.8966091Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efdab82446d9bfb0f99/limits
2025-06-22T00:36:57.8966942Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:36:57.8967509Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:36:57.8967903Z         BadRequestDetail: 
2025-06-22T00:36:57.8968175Z --- FAIL: TestMigProject_basic (34.63s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:33:38.2214923Z === RUN   TestMigProject_basic
2025-06-23T00:33:38.2215337Z --- PASS: TestMigProject_basic (8.74s)
```
### 2025-06-24
#### PASS 14 seconds
```
2025-06-24T00:34:16.6760042Z === RUN   TestMigProject_basic
2025-06-24T00:34:16.6760581Z --- PASS: TestMigProject_basic (14.82s)
```
### 2025-06-25
#### PASS 13 seconds
```
2025-06-25T00:34:38.2611900Z === RUN   TestMigProject_basic
2025-06-25T00:34:38.2612284Z --- PASS: TestMigProject_basic (13.68s)
```
### 2025-06-26
#### PASS 13 seconds
```
2025-06-26T00:33:55.7997896Z === RUN   TestMigProject_basic
2025-06-26T00:33:55.7998271Z --- PASS: TestMigProject_basic (13.41s)
```