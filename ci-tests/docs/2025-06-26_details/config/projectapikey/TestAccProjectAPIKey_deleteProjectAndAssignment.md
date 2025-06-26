# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 41 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 34) FAIL(x 7)
Success rate: 82.93%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 14 seconds
```
2025-05-28T00:39:57.6573979Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T00:39:57.6576533Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T00:39:57.6588336Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.70s)
```
#### FAIL 4 seconds
```
2025-05-28T08:38:43.8255058Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T08:38:43.8258692Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T08:38:43.8542024Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T08:38:43.8543109Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-05-28T08:38:43.8543849Z         
2025-05-28T08:38:43.8544813Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8545575Z         
2025-05-28T08:38:43.8546174Z           with mongodbatlas_project_api_key.test,
2025-05-28T08:38:43.8547604Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T08:38:43.8548681Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T08:38:43.8549257Z         
2025-05-28T08:38:43.8557621Z    test_name=TestMigProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/54bb752c-9b08-4ca0-b57c-ab3e18fcddc5/terraform
2025-05-28T08:38:43.8579069Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T08:38:43.8580194Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T08:38:43.8580968Z         
2025-05-28T08:38:43.8582224Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8583000Z         
2025-05-28T08:38:43.8583575Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (4.66s)
```
#### FAIL 5 seconds
```
2025-05-28T12:23:27.4982864Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T12:23:27.4985978Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T12:23:27.5141899Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T12:23:27.5142632Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:23:27.5143069Z         
2025-05-28T12:23:27.5143683Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5144197Z         
2025-05-28T12:23:27.5146273Z           with mongodbatlas_project_api_key.test,
2025-05-28T12:23:27.5147399Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T12:23:27.5148472Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T12:23:27.5149244Z         
2025-05-28T12:23:27.5159717Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-28T12:23:27.5160538Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T12:23:27.5161087Z         
2025-05-28T12:23:27.5161645Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5162193Z         
2025-05-28T12:23:27.5162545Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (5.39s)
```
### 2025-05-29
#### PASS 11 seconds
```
2025-05-29T00:39:19.8820461Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-29T00:39:19.8824852Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-29T00:39:19.8845000Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.41s)
```
### 2025-05-30
#### PASS 12 seconds
```
2025-05-30T00:40:03.3112518Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-30T00:40:03.3116283Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-30T00:40:03.3126459Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (12.41s)
```
### 2025-05-31
#### PASS 14 seconds
```
2025-05-31T00:39:05.8778668Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-31T00:39:05.8782447Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-31T00:39:05.8801705Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.97s)
```
### 2025-06-01
#### PASS 10 seconds
```
2025-06-01T00:42:49.5823497Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T00:42:49.5827338Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T00:42:49.5837342Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.91s)
```
#### PASS 10 seconds
```
2025-06-01T04:51:41.3659823Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T04:51:41.3663872Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T04:51:41.3675516Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.41s)
```
#### PASS 10 seconds
```
2025-06-01T09:00:43.0182862Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T09:00:43.0185639Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T09:00:43.0196800Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.22s)
```
#### PASS 11 seconds
```
2025-06-01T13:10:06.6664196Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T13:10:06.6666594Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T13:10:06.6677025Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.17s)
```
#### PASS 12 seconds
```
2025-06-01T17:19:27.9809777Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T17:19:27.9812184Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T17:19:27.9822749Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (12.18s)
```
#### PASS 10 seconds
```
2025-06-01T21:27:43.2916725Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T21:27:43.2920970Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-01T21:27:43.2941337Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.73s)
```
### 2025-06-02
#### PASS 10 seconds
```
2025-06-02T00:40:50.1011919Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-02T00:40:50.1014395Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-02T00:40:50.1025306Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.35s)
```
#### PASS 10 seconds
```
2025-06-02T01:36:56.6303602Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-02T01:36:56.6318777Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-02T01:36:56.6351857Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.73s)
```
#### PASS 13 seconds
```
2025-06-02T05:53:00.3868753Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-02T05:53:00.3870968Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-02T05:53:00.3881464Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (13.88s)
```
### 2025-06-03
#### PASS 11 seconds
```
2025-06-03T00:40:12.5784949Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-03T00:40:12.5786977Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-03T00:40:12.5797846Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.70s)
```
### 2025-06-04
#### PASS 13 seconds
```
2025-06-04T00:31:03.2456971Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-04T00:31:03.2460715Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-04T00:31:03.2481059Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (13.07s)
```
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:30:45.1435730Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-05T00:30:45.1438630Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-05T00:30:45.1479055Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-05T00:30:45.1479658Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:30:45.1480085Z         
2025-06-05T00:30:45.1480508Z         Error: error creating project: test-acc-tf-p-8374247920946035528
2025-06-05T00:30:45.1481331Z         
2025-06-05T00:30:45.1481666Z           with mongodbatlas_project.project2,
2025-06-05T00:30:45.1482317Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-06-05T00:30:45.1483040Z           13: 		resource "mongodbatlas_project" "project2" {
2025-06-05T00:30:45.1483574Z         
2025-06-05T00:30:45.1484108Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1485347Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1486169Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1486641Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (4.28s)
```
### 2025-06-06
#### PASS 10 seconds
```
2025-06-06T00:31:57.1545448Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-06T00:31:57.1549263Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-06T00:31:57.1569514Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.58s)
```
### 2025-06-07
#### PASS 14 seconds
```
2025-06-07T00:30:59.1354059Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-07T00:30:59.1357874Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-07T00:30:59.1376819Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.14s)
```
### 2025-06-08
#### FAIL 4 seconds
```
2025-06-08T00:33:53.1401900Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-08T00:33:53.1407217Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-08T00:33:53.1874299Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-08T00:33:53.1875313Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-06-08T00:33:53.1876057Z         
2025-06-08T00:33:53.1877045Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1877827Z         
2025-06-08T00:33:53.1878457Z           with mongodbatlas_project_api_key.test,
2025-06-08T00:33:53.1879722Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-06-08T00:33:53.1880843Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-08T00:33:53.1881385Z         
2025-06-08T00:33:53.1906961Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-08T00:33:53.1943449Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:33:53.1944263Z         
2025-06-08T00:33:53.1945251Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1946319Z         
2025-06-08T00:33:53.1946891Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (4.61s)
```
### 2025-06-09
#### PASS 9 seconds
```
2025-06-09T00:32:47.3476970Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-09T00:32:47.3481469Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-09T00:32:47.3502316Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (9.93s)
```
### 2025-06-10
#### PASS 14 seconds
```
2025-06-10T00:40:05.6405127Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-10T00:40:05.6409182Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-10T00:40:05.6433691Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.71s)
```
### 2025-06-11
#### PASS 15 seconds
```
2025-06-11T00:30:57.6284426Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-11T00:30:57.6288304Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-11T00:30:57.6298589Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (15.39s)
```
#### FAIL 5 seconds
```
2025-06-11T07:39:05.1196821Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-11T07:39:05.1198826Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-11T07:39:05.1323090Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-11T07:39:05.1323657Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-06-11T07:39:05.1324156Z         
2025-06-11T07:39:05.1324660Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1325286Z         
2025-06-11T07:39:05.1325600Z           with mongodbatlas_project_api_key.test,
2025-06-11T07:39:05.1326225Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-06-11T07:39:05.1326805Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-11T07:39:05.1327103Z         
2025-06-11T07:39:05.1330323Z    test_working_directory=/tmp/plugintest2539042011 test_name=TestMigProjectAPIKey_basic
2025-06-11T07:39:05.1349212Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-11T07:39:05.1349807Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:39:05.1350228Z         
2025-06-11T07:39:05.1350725Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1351136Z         
2025-06-11T07:39:05.1351423Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (5.06s)
```
### 2025-06-12
#### PASS 9 seconds
```
2025-06-12T00:30:17.1537386Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-12T00:30:17.1540765Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-12T00:30:17.1559523Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (9.81s)
```
### 2025-06-13
#### PASS 10 seconds
```
2025-06-13T00:30:25.5490636Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-13T00:30:25.5494582Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-13T00:30:25.5511408Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.41s)
```
### 2025-06-14
#### PASS 10 seconds
```
2025-06-14T00:29:51.1287808Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-14T00:29:51.1290575Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-14T00:29:51.1308476Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.34s)
```
### 2025-06-15
#### FAIL 4 seconds
```
2025-06-15T00:33:43.1545953Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-15T00:33:43.1550829Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-15T00:33:43.1768144Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-15T00:33:43.1769173Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-06-15T00:33:43.1769884Z         
2025-06-15T00:33:43.1770814Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1771565Z         
2025-06-15T00:33:43.1772138Z           with mongodbatlas_project_api_key.test,
2025-06-15T00:33:43.1773322Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-06-15T00:33:43.1774400Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-15T00:33:43.1774933Z         
2025-06-15T00:33:43.1798334Z    test_name=TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-15T00:33:43.1799469Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-15T00:33:43.1800229Z         
2025-06-15T00:33:43.1801155Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1801886Z         
2025-06-15T00:33:43.1802390Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (4.85s)
```
### 2025-06-16
#### PASS 13 seconds
```
2025-06-16T00:32:19.5498105Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-16T00:32:19.5501487Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-16T00:32:19.5510827Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (13.79s)
```
### 2025-06-17
#### PASS 14 seconds
```
2025-06-17T00:31:18.8993209Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-17T00:31:18.9000634Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-17T00:31:18.9015478Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.70s)
```
### 2025-06-18
#### PASS 9 seconds
```
2025-06-18T00:30:54.3757270Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-18T00:30:54.3777800Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-18T00:30:54.3794940Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (9.84s)
```
#### PASS 9 seconds
```
2025-06-18T07:30:47.1862177Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-18T07:30:47.1865386Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-18T07:30:47.1874827Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (9.55s)
```
### 2025-06-19
#### PASS 9 seconds
```
2025-06-19T00:31:04.0821911Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-19T00:31:04.0857108Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-19T00:31:04.0873910Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (9.58s)
```
### 2025-06-20
#### PASS 14 seconds
```
2025-06-20T00:31:00.4532815Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-20T00:31:00.4536392Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-20T00:31:00.4548327Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.84s)
```
### 2025-06-21
#### PASS 10 seconds
```
2025-06-21T00:30:24.1486497Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-21T00:30:24.1490390Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-21T00:30:24.1510675Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.65s)
```
### 2025-06-22
#### FAIL 7 seconds
```
2025-06-22T00:33:39.3835821Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.3842353Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.4082482Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.4083412Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.4084063Z         
2025-06-22T00:33:39.4084900Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4085558Z         
2025-06-22T00:33:39.4086069Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.4087088Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.4088034Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.4088523Z         
2025-06-22T00:33:39.4098260Z    test_step_number=1 test_name=TestAccProjectAPIKey_changingSingleProject test_terraform_path=/home/runner/work/_temp/deff8d4d-a237-4a7d-b7cc-d8fd6946c8bb/terraform test_working_directory=/tmp/plugintest3718775578
2025-06-22T00:33:39.4116344Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-22T00:33:39.4117437Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.4118222Z         
2025-06-22T00:33:39.4119351Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4121004Z         
2025-06-22T00:33:39.4121804Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (7.03s)
```
### 2025-06-23
#### PASS 13 seconds
```
2025-06-23T00:33:10.6559266Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-23T00:33:10.6561821Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-23T00:33:10.6571632Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (13.68s)
```
### 2025-06-24
#### PASS 10 seconds
```
2025-06-24T00:30:45.8930910Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-24T00:30:45.8936711Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-24T00:30:45.8955001Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (10.87s)
```
### 2025-06-25
#### PASS 11 seconds
```
2025-06-25T00:31:06.5832759Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-25T00:31:06.5836391Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-25T00:31:06.5856874Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.96s)
```
### 2025-06-26
#### PASS 11 seconds
```
2025-06-26T00:31:01.9569880Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-26T00:31:01.9574226Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-26T00:31:01.9591551Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.03s)
```