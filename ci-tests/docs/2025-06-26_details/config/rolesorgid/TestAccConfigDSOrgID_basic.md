# config/rolesorgid/TestAccConfigDSOrgID_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 35) FAIL(x 6)
Success rate: 85.37%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 2 seconds
```
2025-05-28T00:39:57.6598662Z === RUN   TestAccConfigDSOrgID_basic
2025-05-28T00:39:57.6599241Z === CONT  TestAccConfigDSOrgID_basic
2025-05-28T00:39:57.6599555Z --- PASS: TestAccConfigDSOrgID_basic (2.49s)
```
#### FAIL a moment
```
2025-05-28T08:38:43.8706123Z === RUN   TestAccConfigDSOrgID_basic
2025-05-28T08:38:43.8707153Z === CONT  TestAccConfigDSOrgID_basic
2025-05-28T08:38:43.8720653Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/54bb752c-9b08-4ca0-b57c-ab3e18fcddc5/terraform test_working_directory=/tmp/plugintest2343150649 test_step_number=1
2025-05-28T08:38:43.8722774Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-28T08:38:43.8723599Z         
2025-05-28T08:38:43.8738021Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-05-28T08:38:43.8739066Z         
2025-05-28T08:38:43.8739696Z           with data.mongodbatlas_roles_org_id.test,
2025-05-28T08:38:43.8740820Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-05-28T08:38:43.8742009Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-05-28T08:38:43.8742553Z         
2025-05-28T08:38:43.8743297Z --- FAIL: TestAccConfigDSOrgID_basic (0.41s)
```
#### FAIL a moment
```
2025-05-28T12:23:27.5203660Z === RUN   TestAccConfigDSOrgID_basic
2025-05-28T12:23:27.5204511Z === CONT  TestAccConfigDSOrgID_basic
2025-05-28T12:23:27.5214160Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform test_working_directory=/tmp/plugintest480582016 test_step_number=1
2025-05-28T12:23:27.5215219Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-28T12:23:27.5215666Z         
2025-05-28T12:23:27.5216386Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-05-28T12:23:27.5216924Z         
2025-05-28T12:23:27.5227282Z           with data.mongodbatlas_roles_org_id.test,
2025-05-28T12:23:27.5228030Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-05-28T12:23:27.5228619Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-05-28T12:23:27.5229133Z         
2025-05-28T12:23:27.5229397Z --- FAIL: TestAccConfigDSOrgID_basic (0.34s)
```
### 2025-05-29
#### PASS a second
```
2025-05-29T00:39:19.8864071Z === RUN   TestAccConfigDSOrgID_basic
2025-05-29T00:39:19.8865103Z === CONT  TestAccConfigDSOrgID_basic
2025-05-29T00:39:19.8865652Z --- PASS: TestAccConfigDSOrgID_basic (1.30s)
```
### 2025-05-30
#### PASS a second
```
2025-05-30T00:40:03.3136593Z === RUN   TestAccConfigDSOrgID_basic
2025-05-30T00:40:03.3137180Z === CONT  TestAccConfigDSOrgID_basic
2025-05-30T00:40:03.3137481Z --- PASS: TestAccConfigDSOrgID_basic (1.11s)
```
### 2025-05-31
#### PASS a second
```
2025-05-31T00:39:05.8818963Z === RUN   TestAccConfigDSOrgID_basic
2025-05-31T00:39:05.8820235Z === CONT  TestAccConfigDSOrgID_basic
2025-05-31T00:39:05.8820831Z --- PASS: TestAccConfigDSOrgID_basic (1.51s)
```
### 2025-06-01
#### PASS a second
```
2025-06-01T00:42:49.5846931Z === RUN   TestAccConfigDSOrgID_basic
2025-06-01T00:42:49.5847548Z === CONT  TestAccConfigDSOrgID_basic
2025-06-01T00:42:49.5847867Z --- PASS: TestAccConfigDSOrgID_basic (1.69s)
```
#### PASS a second
```
2025-06-01T04:51:41.3685517Z === RUN   TestAccConfigDSOrgID_basic
2025-06-01T04:51:41.3686455Z === CONT  TestAccConfigDSOrgID_basic
2025-06-01T04:51:41.3686776Z --- PASS: TestAccConfigDSOrgID_basic (1.45s)
```
#### PASS 2 seconds
```
2025-06-01T09:00:43.0206285Z === RUN   TestAccConfigDSOrgID_basic
2025-06-01T09:00:43.0206884Z === CONT  TestAccConfigDSOrgID_basic
2025-06-01T09:00:43.0207191Z --- PASS: TestAccConfigDSOrgID_basic (2.45s)
```
#### PASS a second
```
2025-06-01T13:10:06.6687185Z === RUN   TestAccConfigDSOrgID_basic
2025-06-01T13:10:06.6687778Z === CONT  TestAccConfigDSOrgID_basic
2025-06-01T13:10:06.6688086Z --- PASS: TestAccConfigDSOrgID_basic (1.27s)
```
#### PASS a second
```
2025-06-01T17:19:27.9833166Z === RUN   TestAccConfigDSOrgID_basic
2025-06-01T17:19:27.9833768Z === CONT  TestAccConfigDSOrgID_basic
2025-06-01T17:19:27.9834097Z --- PASS: TestAccConfigDSOrgID_basic (1.42s)
```
#### PASS a second
```
2025-06-01T21:27:43.2958130Z === RUN   TestAccConfigDSOrgID_basic
2025-06-01T21:27:43.2959110Z === CONT  TestAccConfigDSOrgID_basic
2025-06-01T21:27:43.2959629Z --- PASS: TestAccConfigDSOrgID_basic (1.16s)
```
### 2025-06-02
#### PASS a second
```
2025-06-02T00:40:50.1034751Z === RUN   TestAccConfigDSOrgID_basic
2025-06-02T00:40:50.1035356Z === CONT  TestAccConfigDSOrgID_basic
2025-06-02T00:40:50.1035672Z --- PASS: TestAccConfigDSOrgID_basic (1.25s)
```
#### PASS 2 seconds
```
2025-06-02T01:36:56.6367756Z === RUN   TestAccConfigDSOrgID_basic
2025-06-02T01:36:56.6368737Z === CONT  TestAccConfigDSOrgID_basic
2025-06-02T01:36:56.6369267Z --- PASS: TestAccConfigDSOrgID_basic (2.50s)
```
#### PASS a second
```
2025-06-02T05:53:00.3891591Z === RUN   TestAccConfigDSOrgID_basic
2025-06-02T05:53:00.3892175Z === CONT  TestAccConfigDSOrgID_basic
2025-06-02T05:53:00.3892489Z --- PASS: TestAccConfigDSOrgID_basic (1.68s)
```
### 2025-06-03
#### PASS a second
```
2025-06-03T00:40:12.5807819Z === RUN   TestAccConfigDSOrgID_basic
2025-06-03T00:40:12.5808404Z === CONT  TestAccConfigDSOrgID_basic
2025-06-03T00:40:12.5808702Z --- PASS: TestAccConfigDSOrgID_basic (1.14s)
```
### 2025-06-04
#### PASS a second
```
2025-06-04T00:31:03.2498322Z === RUN   TestAccConfigDSOrgID_basic
2025-06-04T00:31:03.2499316Z === CONT  TestAccConfigDSOrgID_basic
2025-06-04T00:31:03.2499838Z --- PASS: TestAccConfigDSOrgID_basic (1.31s)
```
### 2025-06-05
#### PASS a second
```
2025-06-05T00:30:45.1499735Z === RUN   TestAccConfigDSOrgID_basic
2025-06-05T00:30:45.1500336Z === CONT  TestAccConfigDSOrgID_basic
2025-06-05T00:30:45.1500646Z --- PASS: TestAccConfigDSOrgID_basic (1.95s)
```
### 2025-06-06
#### PASS a second
```
2025-06-06T00:31:57.1614364Z === RUN   TestAccConfigDSOrgID_basic
2025-06-06T00:31:57.1615654Z === CONT  TestAccConfigDSOrgID_basic
2025-06-06T00:31:57.1616228Z --- PASS: TestAccConfigDSOrgID_basic (1.23s)
```
### 2025-06-07
#### PASS a second
```
2025-06-07T00:30:59.1395507Z === RUN   TestAccConfigDSOrgID_basic
2025-06-07T00:30:59.1396518Z === CONT  TestAccConfigDSOrgID_basic
2025-06-07T00:30:59.1397196Z --- PASS: TestAccConfigDSOrgID_basic (1.61s)
```
### 2025-06-08
#### FAIL a moment
```
2025-06-08T00:33:53.2133765Z === RUN   TestAccConfigDSOrgID_basic
2025-06-08T00:33:53.2134811Z === CONT  TestAccConfigDSOrgID_basic
2025-06-08T00:33:53.2210087Z   
2025-06-08T00:33:53.2210994Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-08T00:33:53.2211814Z         
2025-06-08T00:33:53.2232142Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-08T00:33:53.2244672Z         
2025-06-08T00:33:53.2245330Z           with data.mongodbatlas_roles_org_id.test,
2025-06-08T00:33:53.2246495Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-08T00:33:53.2247510Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-08T00:33:53.2248056Z         
2025-06-08T00:33:53.2248485Z --- FAIL: TestAccConfigDSOrgID_basic (0.47s)
```
### 2025-06-09
#### PASS a second
```
2025-06-09T00:32:47.3519388Z === RUN   TestAccConfigDSOrgID_basic
2025-06-09T00:32:47.3520470Z === CONT  TestAccConfigDSOrgID_basic
2025-06-09T00:32:47.3521012Z --- PASS: TestAccConfigDSOrgID_basic (1.34s)
```
### 2025-06-10
#### PASS a second
```
2025-06-10T00:40:05.6451807Z === RUN   TestAccConfigDSOrgID_basic
2025-06-10T00:40:05.6452857Z === CONT  TestAccConfigDSOrgID_basic
2025-06-10T00:40:05.6453387Z --- PASS: TestAccConfigDSOrgID_basic (1.62s)
```
### 2025-06-11
#### PASS a second
```
2025-06-11T00:30:57.6308163Z === RUN   TestAccConfigDSOrgID_basic
2025-06-11T00:30:57.6308702Z === CONT  TestAccConfigDSOrgID_basic
2025-06-11T00:30:57.6308992Z --- PASS: TestAccConfigDSOrgID_basic (1.62s)
```
#### FAIL a moment
```
2025-06-11T07:39:05.1359014Z === RUN   TestAccConfigDSOrgID_basic
2025-06-11T07:39:05.1359572Z === CONT  TestAccConfigDSOrgID_basic
2025-06-11T07:39:05.1367404Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/08c539c0-676f-48f3-a2c7-1bfa0f2bbddb/terraform
2025-06-11T07:39:05.1368237Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-11T07:39:05.1368787Z         
2025-06-11T07:39:05.1369586Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-11T07:39:05.1370117Z         
2025-06-11T07:39:05.1370438Z           with data.mongodbatlas_roles_org_id.test,
2025-06-11T07:39:05.1371042Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-11T07:39:05.1371586Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-11T07:39:05.1371872Z         
2025-06-11T07:39:05.1372094Z --- FAIL: TestAccConfigDSOrgID_basic (0.79s)
```
### 2025-06-12
#### PASS a second
```
2025-06-12T00:30:17.1574652Z === RUN   TestAccConfigDSOrgID_basic
2025-06-12T00:30:17.1575614Z === CONT  TestAccConfigDSOrgID_basic
2025-06-12T00:30:17.1576100Z --- PASS: TestAccConfigDSOrgID_basic (1.21s)
```
### 2025-06-13
#### PASS a second
```
2025-06-13T00:30:25.5527282Z === RUN   TestAccConfigDSOrgID_basic
2025-06-13T00:30:25.5528269Z === CONT  TestAccConfigDSOrgID_basic
2025-06-13T00:30:25.5528795Z --- PASS: TestAccConfigDSOrgID_basic (1.74s)
```
### 2025-06-14
#### PASS a second
```
2025-06-14T00:29:51.1325349Z === RUN   TestAccConfigDSOrgID_basic
2025-06-14T00:29:51.1326293Z === CONT  TestAccConfigDSOrgID_basic
2025-06-14T00:29:51.1326834Z --- PASS: TestAccConfigDSOrgID_basic (1.09s)
```
### 2025-06-15
#### FAIL a moment
```
2025-06-15T00:33:43.1867337Z === RUN   TestAccConfigDSOrgID_basic
2025-06-15T00:33:43.1868544Z === CONT  TestAccConfigDSOrgID_basic
2025-06-15T00:33:43.1882468Z    test_working_directory=/tmp/plugintest2594428317 test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/31fa8d43-eae3-4acf-a133-25c5ef7304e1/terraform test_step_number=1
2025-06-15T00:33:43.1884487Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-15T00:33:43.1885264Z         
2025-06-15T00:33:43.1886625Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-15T00:33:43.1887600Z         
2025-06-15T00:33:43.1888787Z           with data.mongodbatlas_roles_org_id.test,
2025-06-15T00:33:43.1889954Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-15T00:33:43.1890961Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-15T00:33:43.1891479Z         
2025-06-15T00:33:43.1891851Z --- FAIL: TestAccConfigDSOrgID_basic (0.30s)
```
### 2025-06-16
#### PASS a second
```
2025-06-16T00:32:19.5520592Z === RUN   TestAccConfigDSOrgID_basic
2025-06-16T00:32:19.5521137Z === CONT  TestAccConfigDSOrgID_basic
2025-06-16T00:32:19.5521466Z --- PASS: TestAccConfigDSOrgID_basic (1.38s)
```
### 2025-06-17
#### PASS a second
```
2025-06-17T00:31:18.9032541Z === RUN   TestAccConfigDSOrgID_basic
2025-06-17T00:31:18.9033525Z === CONT  TestAccConfigDSOrgID_basic
2025-06-17T00:31:18.9034067Z --- PASS: TestAccConfigDSOrgID_basic (1.50s)
```
### 2025-06-18
#### PASS a second
```
2025-06-18T00:30:54.3810979Z === RUN   TestAccConfigDSOrgID_basic
2025-06-18T00:30:54.3811942Z === CONT  TestAccConfigDSOrgID_basic
2025-06-18T00:30:54.3812452Z --- PASS: TestAccConfigDSOrgID_basic (1.24s)
```
#### PASS a second
```
2025-06-18T07:30:47.1883809Z === RUN   TestAccConfigDSOrgID_basic
2025-06-18T07:30:47.1884352Z === CONT  TestAccConfigDSOrgID_basic
2025-06-18T07:30:47.1884635Z --- PASS: TestAccConfigDSOrgID_basic (1.49s)
```
### 2025-06-19
#### PASS a second
```
2025-06-19T00:31:04.0887918Z === RUN   TestAccConfigDSOrgID_basic
2025-06-19T00:31:04.0888773Z === CONT  TestAccConfigDSOrgID_basic
2025-06-19T00:31:04.0889211Z --- PASS: TestAccConfigDSOrgID_basic (1.49s)
```
### 2025-06-20
#### PASS a second
```
2025-06-20T00:31:00.4563737Z === RUN   TestAccConfigDSOrgID_basic
2025-06-20T00:31:00.4564733Z === CONT  TestAccConfigDSOrgID_basic
2025-06-20T00:31:00.4565479Z --- PASS: TestAccConfigDSOrgID_basic (1.37s)
```
### 2025-06-21
#### PASS a second
```
2025-06-21T00:30:24.1528250Z === RUN   TestAccConfigDSOrgID_basic
2025-06-21T00:30:24.1529240Z === CONT  TestAccConfigDSOrgID_basic
2025-06-21T00:30:24.1529724Z --- PASS: TestAccConfigDSOrgID_basic (1.13s)
```
### 2025-06-22
#### FAIL a moment
```
2025-06-22T00:33:39.4135680Z === RUN   TestAccConfigDSOrgID_basic
2025-06-22T00:33:39.4136728Z === CONT  TestAccConfigDSOrgID_basic
2025-06-22T00:33:39.4171329Z    test_terraform_path=/home/runner/work/_temp/deff8d4d-a237-4a7d-b7cc-d8fd6946c8bb/terraform test_working_directory=/tmp/plugintest3782071924
2025-06-22T00:33:39.4173097Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-22T00:33:39.4174320Z         
2025-06-22T00:33:39.4175994Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-22T00:33:39.4177119Z         
2025-06-22T00:33:39.4177879Z           with data.mongodbatlas_roles_org_id.test,
2025-06-22T00:33:39.4179134Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-22T00:33:39.4180205Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-22T00:33:39.4181450Z         
2025-06-22T00:33:39.4182134Z --- FAIL: TestAccConfigDSOrgID_basic (0.48s)
```
### 2025-06-23
#### PASS a second
```
2025-06-23T00:33:10.6582902Z === RUN   TestAccConfigDSOrgID_basic
2025-06-23T00:33:10.6583465Z === CONT  TestAccConfigDSOrgID_basic
2025-06-23T00:33:10.6583756Z --- PASS: TestAccConfigDSOrgID_basic (1.41s)
```
### 2025-06-24
#### PASS a second
```
2025-06-24T00:30:45.8971125Z === RUN   TestAccConfigDSOrgID_basic
2025-06-24T00:30:45.8972063Z === CONT  TestAccConfigDSOrgID_basic
2025-06-24T00:30:45.8972548Z --- PASS: TestAccConfigDSOrgID_basic (1.66s)
```
### 2025-06-25
#### PASS a second
```
2025-06-25T00:31:06.5907450Z === RUN   TestAccConfigDSOrgID_basic
2025-06-25T00:31:06.5908380Z === CONT  TestAccConfigDSOrgID_basic
2025-06-25T00:31:06.5908874Z --- PASS: TestAccConfigDSOrgID_basic (1.91s)
```
### 2025-06-26
#### PASS a second
```
2025-06-26T00:31:01.9605432Z === RUN   TestAccConfigDSOrgID_basic
2025-06-26T00:31:01.9606075Z === CONT  TestAccConfigDSOrgID_basic
2025-06-26T00:31:01.9606408Z --- PASS: TestAccConfigDSOrgID_basic (1.24s)
```