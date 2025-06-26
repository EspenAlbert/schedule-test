# projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 35) FAIL(x 6)
Success rate: 85.37%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 17 seconds
```
2025-05-28T00:39:57.6568171Z === RUN   TestAccProjectAPIKey_basic
2025-05-28T00:39:57.6578729Z === CONT  TestAccProjectAPIKey_basic
2025-05-28T00:39:57.6588752Z --- PASS: TestAccProjectAPIKey_basic (17.62s)
```
#### FAIL 2 seconds
```
2025-05-28T08:38:43.8247192Z === RUN   TestAccProjectAPIKey_basic
2025-05-28T08:38:43.8261128Z === CONT  TestAccProjectAPIKey_basic
2025-05-28T08:38:43.8428196Z === NAME  TestAccProjectAPIKey_basic
2025-05-28T08:38:43.8429205Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-05-28T08:38:43.8430212Z         
2025-05-28T08:38:43.8431171Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8432266Z         
2025-05-28T08:38:43.8432881Z           with mongodbatlas_project_api_key.test,
2025-05-28T08:38:43.8434058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T08:38:43.8435143Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T08:38:43.8435703Z         
2025-05-28T08:38:43.8449047Z    test_step_number=1 test_name=TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T08:38:43.8487796Z === NAME  TestAccProjectAPIKey_basic
2025-05-28T08:38:43.8488933Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T08:38:43.8489701Z         
2025-05-28T08:38:43.8490642Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8491647Z         
2025-05-28T08:38:43.8492083Z --- FAIL: TestAccProjectAPIKey_basic (2.48s)
```
#### FAIL 2 seconds
```
2025-05-28T12:23:27.4974640Z === RUN   TestAccProjectAPIKey_basic
2025-05-28T12:23:27.4989056Z === CONT  TestAccProjectAPIKey_basic
2025-05-28T12:23:27.5014096Z    test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform test_step_number=1 test_working_directory=/tmp/plugintest3355004936 test_name=TestAccProjectAPIKey_updateRole
2025-05-28T12:23:27.5054098Z === NAME  TestAccProjectAPIKey_basic
2025-05-28T12:23:27.5054643Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:23:27.5055203Z         
2025-05-28T12:23:27.5055742Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5056185Z         
2025-05-28T12:23:27.5056535Z           with mongodbatlas_project_api_key.test,
2025-05-28T12:23:27.5057177Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T12:23:27.5057775Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T12:23:27.5058090Z         
2025-05-28T12:23:27.5081619Z === NAME  TestAccProjectAPIKey_basic
2025-05-28T12:23:27.5082221Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T12:23:27.5082690Z         
2025-05-28T12:23:27.5083224Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5083659Z         
2025-05-28T12:23:27.5083908Z --- FAIL: TestAccProjectAPIKey_basic (2.86s)
```
### 2025-05-29
#### PASS 11 seconds
```
2025-05-29T00:39:19.8812470Z === RUN   TestAccProjectAPIKey_basic
2025-05-29T00:39:19.8828161Z === CONT  TestAccProjectAPIKey_basic
2025-05-29T00:39:19.8844269Z --- PASS: TestAccProjectAPIKey_basic (11.02s)
```
### 2025-05-30
#### PASS 12 seconds
```
2025-05-30T00:40:03.3107597Z === RUN   TestAccProjectAPIKey_basic
2025-05-30T00:40:03.3117582Z === CONT  TestAccProjectAPIKey_basic
2025-05-30T00:40:03.3126882Z --- PASS: TestAccProjectAPIKey_basic (12.48s)
```
### 2025-05-31
#### PASS 15 seconds
```
2025-05-31T00:39:05.8772790Z === RUN   TestAccProjectAPIKey_basic
2025-05-31T00:39:05.8785428Z === CONT  TestAccProjectAPIKey_basic
2025-05-31T00:39:05.8802399Z --- PASS: TestAccProjectAPIKey_basic (15.81s)
```
### 2025-06-01
#### PASS 8 seconds
```
2025-06-01T00:42:49.5819077Z === RUN   TestAccProjectAPIKey_basic
2025-06-01T00:42:49.5827708Z === CONT  TestAccProjectAPIKey_basic
2025-06-01T00:42:49.5836414Z --- PASS: TestAccProjectAPIKey_basic (8.88s)
```
#### PASS 8 seconds
```
2025-06-01T04:51:41.3641643Z === RUN   TestAccProjectAPIKey_basic
2025-06-01T04:51:41.3662115Z === CONT  TestAccProjectAPIKey_basic
2025-06-01T04:51:41.3674569Z --- PASS: TestAccProjectAPIKey_basic (8.86s)
```
#### PASS 9 seconds
```
2025-06-01T09:00:43.0178589Z === RUN   TestAccProjectAPIKey_basic
2025-06-01T09:00:43.0187102Z === CONT  TestAccProjectAPIKey_basic
2025-06-01T09:00:43.0195882Z --- PASS: TestAccProjectAPIKey_basic (9.65s)
```
#### PASS 12 seconds
```
2025-06-01T13:10:06.6659828Z === RUN   TestAccProjectAPIKey_basic
2025-06-01T13:10:06.6668430Z === CONT  TestAccProjectAPIKey_basic
2025-06-01T13:10:06.6677441Z --- PASS: TestAccProjectAPIKey_basic (12.93s)
```
#### PASS 12 seconds
```
2025-06-01T17:19:27.9805135Z === RUN   TestAccProjectAPIKey_basic
2025-06-01T17:19:27.9813603Z === CONT  TestAccProjectAPIKey_basic
2025-06-01T17:19:27.9823169Z --- PASS: TestAccProjectAPIKey_basic (12.57s)
```
#### PASS 9 seconds
```
2025-06-01T21:27:43.2909002Z === RUN   TestAccProjectAPIKey_basic
2025-06-01T21:27:43.2924326Z === CONT  TestAccProjectAPIKey_basic
2025-06-01T21:27:43.2939553Z --- PASS: TestAccProjectAPIKey_basic (9.57s)
```
### 2025-06-02
#### PASS 8 seconds
```
2025-06-02T00:40:50.1007471Z === RUN   TestAccProjectAPIKey_basic
2025-06-02T00:40:50.1016236Z === CONT  TestAccProjectAPIKey_basic
2025-06-02T00:40:50.1024392Z --- PASS: TestAccProjectAPIKey_basic (8.46s)
```
#### PASS 10 seconds
```
2025-06-02T01:36:56.6278581Z === RUN   TestAccProjectAPIKey_basic
2025-06-02T01:36:56.6324455Z === CONT  TestAccProjectAPIKey_basic
2025-06-02T01:36:56.6351172Z --- PASS: TestAccProjectAPIKey_basic (10.71s)
```
#### PASS 16 seconds
```
2025-06-02T05:53:00.3864459Z === RUN   TestAccProjectAPIKey_basic
2025-06-02T05:53:00.3873094Z === CONT  TestAccProjectAPIKey_basic
2025-06-02T05:53:00.3881874Z --- PASS: TestAccProjectAPIKey_basic (16.19s)
```
### 2025-06-03
#### PASS 12 seconds
```
2025-06-03T00:40:12.5780477Z === RUN   TestAccProjectAPIKey_basic
2025-06-03T00:40:12.5788678Z === CONT  TestAccProjectAPIKey_basic
2025-06-03T00:40:12.5798265Z --- PASS: TestAccProjectAPIKey_basic (12.76s)
```
### 2025-06-04
#### PASS 13 seconds
```
2025-06-04T00:31:03.2445970Z === RUN   TestAccProjectAPIKey_basic
2025-06-04T00:31:03.2464257Z === CONT  TestAccProjectAPIKey_basic
2025-06-04T00:31:03.2482370Z --- PASS: TestAccProjectAPIKey_basic (13.08s)
```
### 2025-06-05
#### PASS 15 seconds
```
2025-06-05T00:30:45.1431315Z === RUN   TestAccProjectAPIKey_basic
2025-06-05T00:30:45.1439656Z === CONT  TestAccProjectAPIKey_basic
2025-06-05T00:30:45.1487058Z --- PASS: TestAccProjectAPIKey_basic (15.26s)
```
### 2025-06-06
#### PASS 9 seconds
```
2025-06-06T00:31:57.1534633Z === RUN   TestAccProjectAPIKey_basic
2025-06-06T00:31:57.1553436Z === CONT  TestAccProjectAPIKey_basic
2025-06-06T00:31:57.1568001Z --- PASS: TestAccProjectAPIKey_basic (9.57s)
```
### 2025-06-07
#### PASS 17 seconds
```
2025-06-07T00:30:59.1346267Z === RUN   TestAccProjectAPIKey_basic
2025-06-07T00:30:59.1361562Z === CONT  TestAccProjectAPIKey_basic
2025-06-07T00:30:59.1377726Z --- PASS: TestAccProjectAPIKey_basic (17.40s)
```
### 2025-06-08
#### FAIL 2 seconds
```
2025-06-08T00:33:53.1354994Z === RUN   TestAccProjectAPIKey_basic
2025-06-08T00:33:53.1409972Z === CONT  TestAccProjectAPIKey_basic
2025-06-08T00:33:53.1445014Z === NAME  TestAccProjectAPIKey_basic
2025-06-08T00:33:53.1446043Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-08T00:33:53.1446788Z         
2025-06-08T00:33:53.1447780Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1448545Z         
2025-06-08T00:33:53.1449158Z           with mongodbatlas_project_api_key.test,
2025-06-08T00:33:53.1450345Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-08T00:33:53.1451439Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-08T00:33:53.1452068Z         
2025-06-08T00:33:53.1466821Z    test_step_number=1
2025-06-08T00:33:53.1581417Z === NAME  TestAccProjectAPIKey_basic
2025-06-08T00:33:53.1582630Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:33:53.1583486Z         
2025-06-08T00:33:53.1584487Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1585321Z         
2025-06-08T00:33:53.1585768Z --- FAIL: TestAccProjectAPIKey_basic (2.18s)
```
### 2025-06-09
#### PASS 8 seconds
```
2025-06-09T00:32:47.3468878Z === RUN   TestAccProjectAPIKey_basic
2025-06-09T00:32:47.3484964Z === CONT  TestAccProjectAPIKey_basic
2025-06-09T00:32:47.3500414Z --- PASS: TestAccProjectAPIKey_basic (8.39s)
```
### 2025-06-10
#### PASS 17 seconds
```
2025-06-10T00:40:05.6374811Z === RUN   TestAccProjectAPIKey_basic
2025-06-10T00:40:05.6417266Z === CONT  TestAccProjectAPIKey_basic
2025-06-10T00:40:05.6434379Z --- PASS: TestAccProjectAPIKey_basic (17.11s)
```
### 2025-06-11
#### PASS 16 seconds
```
2025-06-11T00:30:57.6279405Z === RUN   TestAccProjectAPIKey_basic
2025-06-11T00:30:57.6289112Z === CONT  TestAccProjectAPIKey_basic
2025-06-11T00:30:57.6299025Z --- PASS: TestAccProjectAPIKey_basic (16.36s)
```
#### FAIL 2 seconds
```
2025-06-11T07:39:05.1192532Z === RUN   TestAccProjectAPIKey_basic
2025-06-11T07:39:05.1200845Z === CONT  TestAccProjectAPIKey_basic
2025-06-11T07:39:05.1211926Z   
2025-06-11T07:39:05.1240758Z === NAME  TestAccProjectAPIKey_basic
2025-06-11T07:39:05.1241265Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-11T07:39:05.1241672Z         
2025-06-11T07:39:05.1242177Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1242585Z         
2025-06-11T07:39:05.1242893Z           with mongodbatlas_project_api_key.test,
2025-06-11T07:39:05.1243517Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-11T07:39:05.1244188Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-11T07:39:05.1244498Z         
2025-06-11T07:39:05.1251579Z    test_name=TestAccProjectAPIKey_updateRole test_terraform_path=/home/runner/work/_temp/08c539c0-676f-48f3-a2c7-1bfa0f2bbddb/terraform test_working_directory=/tmp/plugintest3942972211 test_step_number=1
2025-06-11T07:39:05.1291709Z === NAME  TestAccProjectAPIKey_basic
2025-06-11T07:39:05.1292245Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:39:05.1292694Z         
2025-06-11T07:39:05.1293188Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1293597Z         
2025-06-11T07:39:05.1293820Z --- FAIL: TestAccProjectAPIKey_basic (2.43s)
```
### 2025-06-12
#### PASS 8 seconds
```
2025-06-12T00:30:17.1530005Z === RUN   TestAccProjectAPIKey_basic
2025-06-12T00:30:17.1544215Z === CONT  TestAccProjectAPIKey_basic
2025-06-12T00:30:17.1558054Z --- PASS: TestAccProjectAPIKey_basic (8.27s)
```
### 2025-06-13
#### PASS 9 seconds
```
2025-06-13T00:30:25.5484231Z === RUN   TestAccProjectAPIKey_basic
2025-06-13T00:30:25.5496823Z === CONT  TestAccProjectAPIKey_basic
2025-06-13T00:30:25.5510047Z --- PASS: TestAccProjectAPIKey_basic (9.04s)
```
### 2025-06-14
#### PASS 10 seconds
```
2025-06-14T00:29:51.1280655Z === RUN   TestAccProjectAPIKey_basic
2025-06-14T00:29:51.1294256Z === CONT  TestAccProjectAPIKey_basic
2025-06-14T00:29:51.1309094Z --- PASS: TestAccProjectAPIKey_basic (10.34s)
```
### 2025-06-15
#### FAIL 2 seconds
```
2025-06-15T00:33:43.1537750Z === RUN   TestAccProjectAPIKey_basic
2025-06-15T00:33:43.1553256Z === CONT  TestAccProjectAPIKey_basic
2025-06-15T00:33:43.1574071Z   
2025-06-15T00:33:43.1615820Z === NAME  TestAccProjectAPIKey_basic
2025-06-15T00:33:43.1616787Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-15T00:33:43.1617534Z         
2025-06-15T00:33:43.1618645Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1619408Z         
2025-06-15T00:33:43.1619989Z           with mongodbatlas_project_api_key.test,
2025-06-15T00:33:43.1621160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-15T00:33:43.1622209Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-15T00:33:43.1622772Z         
2025-06-15T00:33:43.1636578Z    test_name=TestAccProjectAPIKey_updateRole test_terraform_path=/home/runner/work/_temp/31fa8d43-eae3-4acf-a133-25c5ef7304e1/terraform
2025-06-15T00:33:43.1699087Z === NAME  TestAccProjectAPIKey_basic
2025-06-15T00:33:43.1700140Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-15T00:33:43.1701018Z         
2025-06-15T00:33:43.1701980Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1702696Z         
2025-06-15T00:33:43.1703072Z --- FAIL: TestAccProjectAPIKey_basic (2.70s)
```
### 2025-06-16
#### PASS 17 seconds
```
2025-06-16T00:32:19.5493907Z === RUN   TestAccProjectAPIKey_basic
2025-06-16T00:32:19.5502681Z === CONT  TestAccProjectAPIKey_basic
2025-06-16T00:32:19.5511223Z --- PASS: TestAccProjectAPIKey_basic (17.24s)
```
### 2025-06-17
#### PASS 17 seconds
```
2025-06-17T00:31:18.8984920Z === RUN   TestAccProjectAPIKey_basic
2025-06-17T00:31:18.8999539Z === CONT  TestAccProjectAPIKey_basic
2025-06-17T00:31:18.9016185Z --- PASS: TestAccProjectAPIKey_basic (17.86s)
```
### 2025-06-18
#### PASS 9 seconds
```
2025-06-18T00:30:54.3748148Z === RUN   TestAccProjectAPIKey_basic
2025-06-18T00:30:54.3779121Z === CONT  TestAccProjectAPIKey_basic
2025-06-18T00:30:54.3793287Z --- PASS: TestAccProjectAPIKey_basic (9.45s)
```
#### PASS 8 seconds
```
2025-06-18T07:30:47.1857907Z === RUN   TestAccProjectAPIKey_basic
2025-06-18T07:30:47.1865058Z === CONT  TestAccProjectAPIKey_basic
2025-06-18T07:30:47.1874437Z --- PASS: TestAccProjectAPIKey_basic (8.41s)
```
### 2025-06-19
#### PASS 8 seconds
```
2025-06-19T00:31:04.0815280Z === RUN   TestAccProjectAPIKey_basic
2025-06-19T00:31:04.0859794Z === CONT  TestAccProjectAPIKey_basic
2025-06-19T00:31:04.0872575Z --- PASS: TestAccProjectAPIKey_basic (8.04s)
```
### 2025-06-20
#### PASS 17 seconds
```
2025-06-20T00:31:00.4523267Z === RUN   TestAccProjectAPIKey_basic
2025-06-20T00:31:00.4539266Z === CONT  TestAccProjectAPIKey_basic
2025-06-20T00:31:00.4548879Z --- PASS: TestAccProjectAPIKey_basic (17.83s)
```
### 2025-06-21
#### PASS 9 seconds
```
2025-06-21T00:30:24.1477946Z === RUN   TestAccProjectAPIKey_basic
2025-06-21T00:30:24.1494134Z === CONT  TestAccProjectAPIKey_basic
2025-06-21T00:30:24.1509065Z --- PASS: TestAccProjectAPIKey_basic (9.37s)
```
### 2025-06-22
#### FAIL a second
```
2025-06-22T00:33:39.3828482Z === RUN   TestAccProjectAPIKey_basic
2025-06-22T00:33:39.3841768Z === CONT  TestAccProjectAPIKey_basic
2025-06-22T00:33:39.3936735Z === NAME  TestAccProjectAPIKey_basic
2025-06-22T00:33:39.3937634Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3938338Z         
2025-06-22T00:33:39.3939248Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3939965Z         
2025-06-22T00:33:39.3940517Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.3941868Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.3942922Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.3943454Z         
2025-06-22T00:33:39.3954427Z    test_working_directory=/tmp/plugintest3923275540 test_name=TestAccProjectAPIKey_updateDescription test_terraform_path=/home/runner/work/_temp/deff8d4d-a237-4a7d-b7cc-d8fd6946c8bb/terraform
2025-06-22T00:33:39.4005481Z === NAME  TestAccProjectAPIKey_basic
2025-06-22T00:33:39.4006432Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.4007179Z         
2025-06-22T00:33:39.4008089Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4008814Z         
2025-06-22T00:33:39.4009206Z --- FAIL: TestAccProjectAPIKey_basic (1.90s)
```
### 2025-06-23
#### PASS 17 seconds
```
2025-06-23T00:33:10.6554680Z === RUN   TestAccProjectAPIKey_basic
2025-06-23T00:33:10.6563246Z === CONT  TestAccProjectAPIKey_basic
2025-06-23T00:33:10.6572505Z --- PASS: TestAccProjectAPIKey_basic (17.20s)
```
### 2025-06-24
#### PASS 10 seconds
```
2025-06-24T00:30:45.8922228Z === RUN   TestAccProjectAPIKey_basic
2025-06-24T00:30:45.8935568Z === CONT  TestAccProjectAPIKey_basic
2025-06-24T00:30:45.8954018Z --- PASS: TestAccProjectAPIKey_basic (10.69s)
```
### 2025-06-25
#### PASS 10 seconds
```
2025-06-25T00:31:06.5825082Z === RUN   TestAccProjectAPIKey_basic
2025-06-25T00:31:06.5840213Z === CONT  TestAccProjectAPIKey_basic
2025-06-25T00:31:06.5855268Z --- PASS: TestAccProjectAPIKey_basic (10.85s)
```
### 2025-06-26
#### PASS 10 seconds
```
2025-06-26T00:31:01.9563364Z === RUN   TestAccProjectAPIKey_basic
2025-06-26T00:31:01.9576467Z === CONT  TestAccProjectAPIKey_basic
2025-06-26T00:31:01.9590111Z --- PASS: TestAccProjectAPIKey_basic (10.03s)
```