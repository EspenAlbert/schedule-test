# config/projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 104) FAIL(x 11)
Success rate: 90.43%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa | 0.00s
[2025-05-18 00:31](#error-2025-05-18t0031580000) |  | qa | 2.04s
[2025-05-25 00:32](#error-2025-05-25t0032550000) |  | qa | 2.06s
[2025-05-28 08:38](#error-2025-05-28t0838430000) |  | qa | 2.03s
[2025-05-28 12:23](#error-2025-05-28t1223270000) |  | qa | 2.09s
[2025-06-08 00:33](#error-2025-06-08t0033530000) |  | qa | 2.03s
[2025-06-11 07:39](#error-2025-06-11t0739050000) |  | qa | 2.04s
[2025-06-15 00:33](#error-2025-06-15t0033430000) |  | qa | 2.08s
[2025-06-22 00:33](#error-2025-06-22t0033390000) |  | qa | 1.09s
[2025-06-29 00:34](#error-2025-06-29t0034190000) |  | qa | 1.07s
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | 2.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 11 seconds
- 2025-04-13 PASS 11 seconds
- 2025-04-14 PASS 10 seconds
- 2025-04-15 PASS 11 seconds
- 2025-04-16
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-04-17 PASS 10 seconds
- 2025-04-18 PASS 11 seconds
- 2025-04-19 PASS 16 seconds
- 2025-04-20 PASS 12 seconds
- 2025-04-21 PASS 23 seconds
- 2025-04-22 PASS 11 seconds
- 2025-04-23 PASS 10 seconds
- 2025-04-24 PASS 19 seconds
- 2025-04-25 PASS 11 seconds
- 2025-04-26 PASS 19 seconds
- 2025-04-27 PASS 23 seconds
- 2025-04-28 PASS 21 seconds
- 2025-04-29 PASS 11 seconds
- 2025-04-30
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-05-01
  - PASS 12 seconds
  - PASS 21 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 22 seconds
  - PASS 13 seconds
- 2025-05-02 PASS 19 seconds
- 2025-05-03 PASS 12 seconds
- 2025-05-04 PASS 10 seconds
- 2025-05-05 PASS 23 seconds
- 2025-05-06 PASS 11 seconds
- 2025-05-07 PASS 11 seconds
- 2025-05-08 PASS 11 seconds
- 2025-05-09 PASS 23 seconds
- 2025-05-10 PASS 11 seconds
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.2107880Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-11T00:29:57.2109009Z     resource_project_api_key_test.go:114: Creating execution project: test-acc-tf-p-8262153415009910191
2025-05-11T00:29:57.2109990Z     resource_project_api_key_test.go:114: 
2025-05-11T00:29:57.2111954Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.2115382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.2119282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:114
2025-05-11T00:29:57.2120863Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.2122724Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2123769Z         	Test:       	TestAccProjectAPIKey_updateRole
2025-05-11T00:29:57.2125696Z         	Messages:   	Project creation failed: test-acc-tf-p-8262153415009910191, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2126981Z --- FAIL: TestAccProjectAPIKey_updateRole (0.01s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 21 seconds
  - PASS 10 seconds
- 2025-05-14 PASS 10 seconds
- 2025-05-15 PASS 15 seconds
- 2025-05-16 PASS 21 seconds
- 2025-05-17 PASS 10 seconds
- 2025-05-18

### Error 2025-05-18T00:31:58+00:00
```
2025-05-18T00:31:58.1245973Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-18T00:31:58.1257836Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-18T00:31:58.1298489Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-18T00:31:58.1299480Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-05-18T00:31:58.1300212Z         
2025-05-18T00:31:58.1301173Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1301954Z         
2025-05-18T00:31:58.1302564Z           with mongodbatlas_project_api_key.test,
2025-05-18T00:31:58.1303791Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-18T00:31:58.1304915Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-18T00:31:58.1305498Z         
2025-05-18T00:31:58.1313672Z    test_name=TestAccProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/aebf3c15-e182-4f23-a50a-f01f924448af/terraform test_working_directory=/tmp/plugintest633672179 test_step_number=1
2025-05-18T00:31:58.1470702Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-18T00:31:58.1471948Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-18T00:31:58.1472895Z         
2025-05-18T00:31:58.1473858Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1474829Z         
2025-05-18T00:31:58.1475274Z --- FAIL: TestAccProjectAPIKey_updateRole (2.42s)
```

- 2025-05-19 PASS 11 seconds
- 2025-05-20 PASS 11 seconds
- 2025-05-21 PASS 10 seconds
- 2025-05-22 PASS 10 seconds
- 2025-05-23 PASS 11 seconds
- 2025-05-24 PASS 14 seconds
- 2025-05-25

### Error 2025-05-25T00:32:55+00:00
```
2025-05-25T00:32:55.4728626Z === RUN   TestAccProjectAPIKey_updateRole
2025-05-25T00:32:55.4736804Z === CONT  TestAccProjectAPIKey_updateRole
2025-05-25T00:32:55.4791340Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-25T00:32:55.4792327Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-05-25T00:32:55.4793060Z         
2025-05-25T00:32:55.4794044Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.4794961Z         
2025-05-25T00:32:55.4795568Z           with mongodbatlas_project_api_key.test,
2025-05-25T00:32:55.4796755Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-25T00:32:55.4825301Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-25T00:32:55.4827123Z         
2025-05-25T00:32:55.4951756Z === NAME  TestAccProjectAPIKey_updateRole
2025-05-25T00:32:55.4952796Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-25T00:32:55.4953554Z         
2025-05-25T00:32:55.4954533Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.4982313Z         
2025-05-25T00:32:55.4982798Z --- FAIL: TestAccProjectAPIKey_updateRole (2.58s)
```

- 2025-05-26 PASS 13 seconds
- 2025-05-27 PASS 13 seconds
- 2025-05-28
  - PASS 23 seconds
  - FAIL 2 seconds

### Error 2025-05-28T08:38:43+00:00
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

  - FAIL 2 seconds

### Error 2025-05-28T12:23:27+00:00
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

- 2025-05-29 PASS 14 seconds
- 2025-05-30 PASS 17 seconds
- 2025-05-31 PASS 22 seconds
- 2025-06-01
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 17 seconds
  - PASS 17 seconds
  - PASS 12 seconds
- 2025-06-02
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 22 seconds
- 2025-06-03 PASS 17 seconds
- 2025-06-04 PASS 18 seconds
- 2025-06-05 PASS 21 seconds
- 2025-06-06 PASS 12 seconds
- 2025-06-07 PASS 23 seconds
- 2025-06-08

### Error 2025-06-08T00:33:53+00:00
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

- 2025-06-09 PASS 11 seconds
- 2025-06-10 PASS 23 seconds
- 2025-06-11
  - PASS 23 seconds
  - FAIL 2 seconds

### Error 2025-06-11T07:39:05+00:00
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

- 2025-06-12 PASS 11 seconds
- 2025-06-13 PASS 12 seconds
- 2025-06-14 PASS 13 seconds
- 2025-06-15

### Error 2025-06-15T00:33:43+00:00
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

- 2025-06-16 PASS 23 seconds
- 2025-06-17 PASS 24 seconds
- 2025-06-18
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-06-19 PASS 11 seconds
- 2025-06-20 PASS 23 seconds
- 2025-06-21 PASS 12 seconds
- 2025-06-22

### Error 2025-06-22T00:33:39+00:00
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

- 2025-06-23 PASS 23 seconds
- 2025-06-24 PASS 14 seconds
- 2025-06-25 PASS 14 seconds
- 2025-06-26 PASS 13 seconds
- 2025-06-27 PASS 23 seconds
- 2025-06-28 PASS 11 seconds
- 2025-06-29

### Error 2025-06-29T00:34:19+00:00
```
2025-06-29T00:34:19.1729376Z === RUN   TestAccProjectAPIKey_updateRole
2025-06-29T00:34:19.1734060Z === CONT  TestAccProjectAPIKey_updateRole
2025-06-29T00:34:19.1750865Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-29T00:34:19.1751488Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:34:19.1752004Z         
2025-06-29T00:34:19.1752517Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1752922Z         
2025-06-29T00:34:19.1753239Z           with mongodbatlas_project_api_key.test,
2025-06-29T00:34:19.1753863Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-29T00:34:19.1754449Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-29T00:34:19.1754751Z         
2025-06-29T00:34:19.1799572Z === NAME  TestAccProjectAPIKey_updateRole
2025-06-29T00:34:19.1800253Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T00:34:19.1800790Z         
2025-06-29T00:34:19.1801528Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1801940Z         
2025-06-29T00:34:19.1802259Z --- FAIL: TestAccProjectAPIKey_updateRole (1.71s)
```

- 2025-06-30 PASS 17 seconds
- 2025-07-01
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 23 seconds
  - PASS 11 seconds
  - PASS 24 seconds
  - PASS 12 seconds
- 2025-07-02 PASS 11 seconds
- 2025-07-03 PASS 21 seconds
- 2025-07-04 PASS 14 seconds
- 2025-07-05 PASS 24 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.2824930Z === RUN   TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2829702Z === CONT  TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2872527Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2873040Z     resource_project_api_key_test.go:118: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2873428Z         
2025-07-06T00:34:00.2873928Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2874324Z         
2025-07-06T00:34:00.2874642Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2875496Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2876069Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2876366Z         
2025-07-06T00:34:00.2903974Z === NAME  TestAccProjectAPIKey_updateRole
2025-07-06T00:34:00.2904509Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2904920Z         
2025-07-06T00:34:00.2905844Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2906242Z         
2025-07-06T00:34:00.2906469Z --- FAIL: TestAccProjectAPIKey_updateRole (2.73s)
```

- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 24 seconds
- 2025-07-09 PASS 23 seconds
- 2025-07-10 PASS 11 seconds