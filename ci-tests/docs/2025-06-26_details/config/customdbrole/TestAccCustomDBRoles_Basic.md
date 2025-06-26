# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 41 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 35) FAIL(x 6)
Success rate: 85.37%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 18 seconds
```
2025-05-28T00:39:40.7784932Z === RUN   TestAccCustomDBRoles_Basic
2025-05-28T00:39:40.7793278Z === CONT  TestAccCustomDBRoles_Basic
2025-05-28T00:39:40.7794470Z --- PASS: TestAccCustomDBRoles_Basic (18.94s)
```
#### FAIL 14 seconds
```
2025-05-28T08:38:43.8027445Z === RUN   TestAccCustomDBRoles_Basic
2025-05-28T08:38:43.8036561Z === CONT  TestAccCustomDBRoles_Basic
2025-05-28T08:38:43.8057782Z   
2025-05-28T08:38:43.8058580Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-05-28T08:38:43.8059296Z         
2025-05-28T08:38:43.8062639Z         Error: error updating custom db role (test-acc-tf-15564076020725148): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836cb23e6404f5026ceee59/customDBRoles/roles/test-acc-tf-15564076020725148 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-28T08:38:43.8064877Z         
2025-05-28T08:38:43.8065425Z           with mongodbatlas_custom_db_role.test,
2025-05-28T08:38:43.8066465Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-05-28T08:38:43.8067426Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-05-28T08:38:43.8067934Z         
2025-05-28T08:38:43.8068330Z --- FAIL: TestAccCustomDBRoles_Basic (14.94s)
```
#### FAIL 14 seconds
```
2025-05-28T12:23:27.4791128Z === RUN   TestAccCustomDBRoles_Basic
2025-05-28T12:23:27.4799603Z === CONT  TestAccCustomDBRoles_Basic
2025-05-28T12:23:27.4820102Z    test_working_directory=/tmp/plugintest2912086261 test_name=TestAccCustomDBRoles_Basic test_step_number=3 test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform
2025-05-28T12:23:27.4821974Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-05-28T12:23:27.4822732Z         
2025-05-28T12:23:27.4826262Z         Error: error updating custom db role (test-acc-tf-1588494206757313605): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836ffd203b2ee7db737c57f/customDBRoles/roles/test-acc-tf-1588494206757313605 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-28T12:23:27.4828976Z         
2025-05-28T12:23:27.4829542Z           with mongodbatlas_custom_db_role.test,
2025-05-28T12:23:27.4830674Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-05-28T12:23:27.4831721Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-05-28T12:23:27.4832264Z         
2025-05-28T12:23:27.4832671Z --- FAIL: TestAccCustomDBRoles_Basic (14.62s)
```
### 2025-05-29
#### PASS 16 seconds
```
2025-05-29T00:39:19.8659835Z === RUN   TestAccCustomDBRoles_Basic
2025-05-29T00:39:19.8667710Z === CONT  TestAccCustomDBRoles_Basic
2025-05-29T00:39:19.8669241Z --- PASS: TestAccCustomDBRoles_Basic (16.99s)
```
### 2025-05-30
#### PASS 17 seconds
```
2025-05-30T00:39:56.8068668Z === RUN   TestAccCustomDBRoles_Basic
2025-05-30T00:39:56.8077022Z === CONT  TestAccCustomDBRoles_Basic
2025-05-30T00:39:56.8077578Z --- PASS: TestAccCustomDBRoles_Basic (17.82s)
```
### 2025-05-31
#### PASS 18 seconds
```
2025-05-31T00:38:54.7635975Z === RUN   TestAccCustomDBRoles_Basic
2025-05-31T00:38:54.7640660Z === CONT  TestAccCustomDBRoles_Basic
2025-05-31T00:38:54.7640976Z --- PASS: TestAccCustomDBRoles_Basic (18.84s)
```
### 2025-06-01
#### PASS 16 seconds
```
2025-06-01T00:42:49.5735851Z === RUN   TestAccCustomDBRoles_Basic
2025-06-01T00:42:49.5740172Z === CONT  TestAccCustomDBRoles_Basic
2025-06-01T00:42:49.5740918Z --- PASS: TestAccCustomDBRoles_Basic (16.21s)
```
#### PASS 16 seconds
```
2025-06-01T04:51:41.3528218Z === RUN   TestAccCustomDBRoles_Basic
2025-06-01T04:51:41.3534557Z === CONT  TestAccCustomDBRoles_Basic
2025-06-01T04:51:41.3534989Z --- PASS: TestAccCustomDBRoles_Basic (16.41s)
```
#### PASS 17 seconds
```
2025-06-01T09:00:43.0096375Z === RUN   TestAccCustomDBRoles_Basic
2025-06-01T09:00:43.0101157Z === CONT  TestAccCustomDBRoles_Basic
2025-06-01T09:00:43.0101478Z --- PASS: TestAccCustomDBRoles_Basic (17.46s)
```
#### PASS 18 seconds
```
2025-06-01T13:10:04.8155490Z === RUN   TestAccCustomDBRoles_Basic
2025-06-01T13:10:04.8163074Z === CONT  TestAccCustomDBRoles_Basic
2025-06-01T13:10:04.8164290Z --- PASS: TestAccCustomDBRoles_Basic (18.17s)
```
#### PASS 18 seconds
```
2025-06-01T17:19:26.6191639Z === RUN   TestAccCustomDBRoles_Basic
2025-06-01T17:19:26.6198598Z === CONT  TestAccCustomDBRoles_Basic
2025-06-01T17:19:26.6200538Z --- PASS: TestAccCustomDBRoles_Basic (18.34s)
```
#### PASS 17 seconds
```
2025-06-01T21:27:43.2783017Z === RUN   TestAccCustomDBRoles_Basic
2025-06-01T21:27:43.2787774Z === CONT  TestAccCustomDBRoles_Basic
2025-06-01T21:27:43.2788088Z --- PASS: TestAccCustomDBRoles_Basic (17.02s)
```
### 2025-06-02
#### PASS 16 seconds
```
2025-06-02T00:40:50.0925291Z === RUN   TestAccCustomDBRoles_Basic
2025-06-02T00:40:50.0930240Z === CONT  TestAccCustomDBRoles_Basic
2025-06-02T00:40:50.0930587Z --- PASS: TestAccCustomDBRoles_Basic (16.76s)
```
#### PASS 16 seconds
```
2025-06-02T01:36:56.5987050Z === RUN   TestAccCustomDBRoles_Basic
2025-06-02T01:36:56.5994906Z === CONT  TestAccCustomDBRoles_Basic
2025-06-02T01:36:56.5995410Z --- PASS: TestAccCustomDBRoles_Basic (16.91s)
```
#### PASS 20 seconds
```
2025-06-02T05:53:00.3783339Z === RUN   TestAccCustomDBRoles_Basic
2025-06-02T05:53:00.3787930Z === CONT  TestAccCustomDBRoles_Basic
2025-06-02T05:53:00.3788252Z --- PASS: TestAccCustomDBRoles_Basic (20.68s)
```
### 2025-06-03
#### PASS 17 seconds
```
2025-06-03T00:40:08.9545987Z === RUN   TestAccCustomDBRoles_Basic
2025-06-03T00:40:08.9550422Z === CONT  TestAccCustomDBRoles_Basic
2025-06-03T00:40:08.9550732Z --- PASS: TestAccCustomDBRoles_Basic (17.91s)
```
### 2025-06-04
#### PASS 18 seconds
```
2025-06-04T00:31:02.0478865Z === RUN   TestAccCustomDBRoles_Basic
2025-06-04T00:31:02.0485579Z === CONT  TestAccCustomDBRoles_Basic
2025-06-04T00:31:02.0486691Z --- PASS: TestAccCustomDBRoles_Basic (18.28s)
```
### 2025-06-05
#### PASS 20 seconds
```
2025-06-05T00:30:45.1167588Z === RUN   TestAccCustomDBRoles_Basic
2025-06-05T00:30:45.1172549Z === CONT  TestAccCustomDBRoles_Basic
2025-06-05T00:30:45.1183246Z   
2025-06-05T00:30:45.1224492Z --- PASS: TestAccCustomDBRoles_Basic (20.25s)
```
### 2025-06-06
#### PASS 15 seconds
```
2025-06-06T00:31:57.1394094Z === RUN   TestAccCustomDBRoles_Basic
2025-06-06T00:31:57.1402203Z === CONT  TestAccCustomDBRoles_Basic
2025-06-06T00:31:57.1402729Z --- PASS: TestAccCustomDBRoles_Basic (15.06s)
```
### 2025-06-07
#### PASS 20 seconds
```
2025-06-07T00:30:42.8791181Z === RUN   TestAccCustomDBRoles_Basic
2025-06-07T00:30:42.8795791Z === CONT  TestAccCustomDBRoles_Basic
2025-06-07T00:30:42.8796114Z --- PASS: TestAccCustomDBRoles_Basic (20.20s)
```
### 2025-06-08
#### FAIL 14 seconds
```
2025-06-08T00:33:53.1013595Z === RUN   TestAccCustomDBRoles_Basic
2025-06-08T00:33:53.1021271Z === CONT  TestAccCustomDBRoles_Basic
2025-06-08T00:33:53.1044810Z === NAME  TestAccCustomDBRoles_Basic
2025-06-08T00:33:53.1045807Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-08T00:33:53.1046559Z         
2025-06-08T00:33:53.1050108Z         Error: error updating custom db role (test-acc-tf-137501554073088077): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6844da0369401b3bb3c36306/customDBRoles/roles/test-acc-tf-137501554073088077 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-08T00:33:53.1052722Z         
2025-06-08T00:33:53.1053348Z           with mongodbatlas_custom_db_role.test,
2025-06-08T00:33:53.1054513Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-08T00:33:53.1055596Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-08T00:33:53.1056177Z         
2025-06-08T00:33:53.1056611Z --- FAIL: TestAccCustomDBRoles_Basic (14.38s)
```
### 2025-06-09
#### PASS 16 seconds
```
2025-06-09T00:32:47.3323951Z === RUN   TestAccCustomDBRoles_Basic
2025-06-09T00:32:47.3331992Z === CONT  TestAccCustomDBRoles_Basic
2025-06-09T00:32:47.3333467Z --- PASS: TestAccCustomDBRoles_Basic (16.37s)
```
### 2025-06-10
#### PASS 19 seconds
```
2025-06-10T00:39:49.3174803Z === RUN   TestAccCustomDBRoles_Basic
2025-06-10T00:39:49.3180365Z === CONT  TestAccCustomDBRoles_Basic
2025-06-10T00:39:49.3180801Z --- PASS: TestAccCustomDBRoles_Basic (19.43s)
```
### 2025-06-11
#### PASS 19 seconds
```
2025-06-11T00:30:44.2888437Z === RUN   TestAccCustomDBRoles_Basic
2025-06-11T00:30:44.2895740Z === CONT  TestAccCustomDBRoles_Basic
2025-06-11T00:30:44.2897809Z --- PASS: TestAccCustomDBRoles_Basic (19.71s)
```
#### FAIL 15 seconds
```
2025-06-11T07:39:05.1032826Z === RUN   TestAccCustomDBRoles_Basic
2025-06-11T07:39:05.1038128Z === CONT  TestAccCustomDBRoles_Basic
2025-06-11T07:39:05.1060376Z   
2025-06-11T07:39:05.1061191Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-11T07:39:05.1061890Z         
2025-06-11T07:39:05.1065692Z         Error: error updating custom db role (test-acc-tf-1118780511067478474): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6849322671e0a97458c8a26e/customDBRoles/roles/test-acc-tf-1118780511067478474 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-11T07:39:05.1068112Z         
2025-06-11T07:39:05.1068697Z           with mongodbatlas_custom_db_role.test,
2025-06-11T07:39:05.1069836Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-11T07:39:05.1070905Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-11T07:39:05.1071458Z         
2025-06-11T07:39:05.1071856Z --- FAIL: TestAccCustomDBRoles_Basic (15.05s)
```
### 2025-06-12
#### PASS 16 seconds
```
2025-06-12T00:30:17.1380680Z === RUN   TestAccCustomDBRoles_Basic
2025-06-12T00:30:17.1388049Z === CONT  TestAccCustomDBRoles_Basic
2025-06-12T00:30:17.1389103Z --- PASS: TestAccCustomDBRoles_Basic (16.71s)
```
### 2025-06-13
#### PASS 17 seconds
```
2025-06-13T00:30:25.5293581Z === RUN   TestAccCustomDBRoles_Basic
2025-06-13T00:30:25.5301163Z === CONT  TestAccCustomDBRoles_Basic
2025-06-13T00:30:25.5301693Z --- PASS: TestAccCustomDBRoles_Basic (17.09s)
```
### 2025-06-14
#### PASS 17 seconds
```
2025-06-14T00:29:51.1120782Z === RUN   TestAccCustomDBRoles_Basic
2025-06-14T00:29:51.1128807Z === CONT  TestAccCustomDBRoles_Basic
2025-06-14T00:29:51.1129308Z --- PASS: TestAccCustomDBRoles_Basic (17.38s)
```
### 2025-06-15
#### FAIL 14 seconds
```
2025-06-15T00:33:43.1276964Z === RUN   TestAccCustomDBRoles_Basic
2025-06-15T00:33:43.1286322Z === CONT  TestAccCustomDBRoles_Basic
2025-06-15T00:33:43.1311322Z   
2025-06-15T00:33:43.1312127Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-15T00:33:43.1312976Z         
2025-06-15T00:33:43.1316466Z         Error: error updating custom db role (test-acc-tf-2333015541836405900): https://cloud-qa.mongodb.com/api/atlas/v2/groups/684e147a83e3896e131ad1bb/customDBRoles/roles/test-acc-tf-2333015541836405900 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-15T00:33:43.1319026Z         
2025-06-15T00:33:43.1319621Z           with mongodbatlas_custom_db_role.test,
2025-06-15T00:33:43.1320801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-15T00:33:43.1321844Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-15T00:33:43.1322382Z         
2025-06-15T00:33:43.1322768Z --- FAIL: TestAccCustomDBRoles_Basic (14.20s)
```
### 2025-06-16
#### PASS 19 seconds
```
2025-06-16T00:32:04.1679133Z === RUN   TestAccCustomDBRoles_Basic
2025-06-16T00:32:04.1685086Z === CONT  TestAccCustomDBRoles_Basic
2025-06-16T00:32:04.1686788Z --- PASS: TestAccCustomDBRoles_Basic (19.34s)
```
### 2025-06-17
#### PASS 19 seconds
```
2025-06-17T00:31:02.9687506Z === RUN   TestAccCustomDBRoles_Basic
2025-06-17T00:31:02.9691930Z === CONT  TestAccCustomDBRoles_Basic
2025-06-17T00:31:02.9692233Z --- PASS: TestAccCustomDBRoles_Basic (19.12s)
```
### 2025-06-18
#### PASS 16 seconds
```
2025-06-18T00:30:54.3568073Z === RUN   TestAccCustomDBRoles_Basic
2025-06-18T00:30:54.3575643Z === CONT  TestAccCustomDBRoles_Basic
2025-06-18T00:30:54.3576158Z --- PASS: TestAccCustomDBRoles_Basic (16.78s)
```
#### PASS 17 seconds
```
2025-06-18T07:30:47.1753928Z === RUN   TestAccCustomDBRoles_Basic
2025-06-18T07:30:47.1758588Z === CONT  TestAccCustomDBRoles_Basic
2025-06-18T07:30:47.1758891Z --- PASS: TestAccCustomDBRoles_Basic (17.42s)
```
### 2025-06-19
#### PASS 16 seconds
```
2025-06-19T00:31:04.0629722Z === RUN   TestAccCustomDBRoles_Basic
2025-06-19T00:31:04.0638673Z === CONT  TestAccCustomDBRoles_Basic
2025-06-19T00:31:04.0639182Z --- PASS: TestAccCustomDBRoles_Basic (16.35s)
```
### 2025-06-20
#### PASS 19 seconds
```
2025-06-20T00:30:41.1275186Z === RUN   TestAccCustomDBRoles_Basic
2025-06-20T00:30:41.1279900Z === CONT  TestAccCustomDBRoles_Basic
2025-06-20T00:30:41.1280241Z --- PASS: TestAccCustomDBRoles_Basic (19.99s)
```
### 2025-06-21
#### PASS 17 seconds
```
2025-06-21T00:30:24.1318033Z === RUN   TestAccCustomDBRoles_Basic
2025-06-21T00:30:24.1325666Z === CONT  TestAccCustomDBRoles_Basic
2025-06-21T00:30:24.1326183Z --- PASS: TestAccCustomDBRoles_Basic (17.62s)
```
### 2025-06-22
#### FAIL 13 seconds
```
2025-06-22T00:33:39.3547901Z === RUN   TestAccCustomDBRoles_Basic
2025-06-22T00:33:39.3556642Z === CONT  TestAccCustomDBRoles_Basic
2025-06-22T00:33:39.3579668Z   
2025-06-22T00:33:39.3580461Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-22T00:33:39.3581537Z         
2025-06-22T00:33:39.3585207Z         Error: error updating custom db role (test-acc-tf-5302981608677911054): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eedab82446d9bfb0630/customDBRoles/roles/test-acc-tf-5302981608677911054 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-22T00:33:39.3587934Z         
2025-06-22T00:33:39.3588766Z           with mongodbatlas_custom_db_role.test,
2025-06-22T00:33:39.3590332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-22T00:33:39.3591736Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-22T00:33:39.3592306Z         
2025-06-22T00:33:39.3592732Z --- FAIL: TestAccCustomDBRoles_Basic (13.99s)
```
### 2025-06-23
#### PASS 20 seconds
```
2025-06-23T00:32:57.6854063Z === RUN   TestAccCustomDBRoles_Basic
2025-06-23T00:32:57.6858136Z === CONT  TestAccCustomDBRoles_Basic
2025-06-23T00:32:57.6858833Z --- PASS: TestAccCustomDBRoles_Basic (20.03s)
```
### 2025-06-24
#### PASS 16 seconds
```
2025-06-24T00:30:45.8653130Z === RUN   TestAccCustomDBRoles_Basic
2025-06-24T00:30:45.8667357Z === CONT  TestAccCustomDBRoles_Basic
2025-06-24T00:30:45.8667903Z --- PASS: TestAccCustomDBRoles_Basic (16.13s)
```
### 2025-06-25
#### PASS 17 seconds
```
2025-06-25T00:31:06.5570243Z === RUN   TestAccCustomDBRoles_Basic
2025-06-25T00:31:06.5577566Z === CONT  TestAccCustomDBRoles_Basic
2025-06-25T00:31:06.5578055Z --- PASS: TestAccCustomDBRoles_Basic (17.45s)
```
### 2025-06-26
#### PASS 16 seconds
```
2025-06-26T00:31:01.9423589Z === RUN   TestAccCustomDBRoles_Basic
2025-06-26T00:31:01.9430704Z === CONT  TestAccCustomDBRoles_Basic
2025-06-26T00:31:01.9431182Z --- PASS: TestAccCustomDBRoles_Basic (16.89s)
```