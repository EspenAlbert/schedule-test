# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 103) FAIL(x 12)
Success rate: 89.57%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-05-18 00:31 | qa | 6.03s
2025-05-25 00:32 | qa | 5.01s
2025-05-28 08:38 | qa | 4.07s
2025-05-28 12:23 | qa | 5.04s
2025-06-05 00:30 | dev | 4.03s
2025-06-08 00:33 | qa | 4.06s
2025-06-11 07:39 | qa | 5.01s
2025-06-15 00:33 | qa | 4.08s
2025-06-22 00:33 | qa | 7.00s
2025-06-29 00:34 | qa | 35.08s
2025-07-06 00:34 | qa | 33.08s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 10 seconds
### 2025-04-12
#### PASS 11 seconds
### 2025-04-13
#### PASS 9 seconds
### 2025-04-14
#### PASS 11 seconds
### 2025-04-15
#### PASS 11 seconds
### 2025-04-16
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-04-17
#### PASS 8 seconds
### 2025-04-18
#### PASS 9 seconds
### 2025-04-19
#### PASS 11 seconds
### 2025-04-20
#### PASS 11 seconds
### 2025-04-21
#### PASS 14 seconds
### 2025-04-22
#### PASS 10 seconds
### 2025-04-23
#### PASS 9 seconds
### 2025-04-24
#### PASS 13 seconds
### 2025-04-25
#### PASS 10 seconds
### 2025-04-26
#### PASS 13 seconds
### 2025-04-27
#### PASS 16 seconds
### 2025-04-28
#### PASS 16 seconds
### 2025-04-29
#### PASS 11 seconds
### 2025-04-30
#### PASS 11 seconds
#### PASS 10 seconds
### 2025-05-01
#### PASS 10 seconds
#### PASS 13 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 11 seconds
#### PASS 14 seconds
#### PASS 11 seconds
### 2025-05-02
#### PASS 13 seconds
### 2025-05-03
#### PASS 10 seconds
### 2025-05-04
#### PASS 10 seconds
### 2025-05-05
#### PASS 13 seconds
### 2025-05-06
#### PASS 9 seconds
### 2025-05-07
#### PASS 10 seconds
### 2025-05-08
#### PASS 11 seconds
### 2025-05-09
#### PASS 14 seconds
### 2025-05-10
#### PASS 10 seconds
### 2025-05-11
#### FAIL unknown
```
2025-05-11T00:29:57.2167079Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-11T00:29:57.2168176Z     resource_project_api_key_test.go:189: Creating execution project: test-acc-tf-p-770928752696820011
2025-05-11T00:29:57.2169099Z     resource_project_api_key_test.go:189: 
2025-05-11T00:29:57.2170748Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.2174155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.2177806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:189
2025-05-11T00:29:57.2179364Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.2180968Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2182247Z         	Test:       	TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-11T00:29:57.2184174Z         	Messages:   	Project creation failed: test-acc-tf-p-770928752696820011, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2185525Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (0.00s)
```
### 2025-05-12
#### PASS 10 seconds
### 2025-05-13
#### PASS 13 seconds
#### PASS 11 seconds
### 2025-05-14
#### PASS 10 seconds
### 2025-05-15
#### PASS 11 seconds
### 2025-05-16
#### PASS 12 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### FAIL 6 seconds
```
2025-05-18T00:31:58.1250371Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-18T00:31:58.1254629Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-18T00:31:58.1602515Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-18T00:31:58.1603592Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-05-18T00:31:58.1604301Z         
2025-05-18T00:31:58.1605353Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1606088Z         
2025-05-18T00:31:58.1606678Z           with mongodbatlas_project_api_key.test,
2025-05-18T00:31:58.1607825Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-05-18T00:31:58.1609154Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-18T00:31:58.1609714Z         
2025-05-18T00:31:58.1623245Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-18T00:31:58.1624027Z         
2025-05-18T00:31:58.1625035Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1625796Z         
2025-05-18T00:31:58.1626321Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (6.34s)
```
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 9 seconds
### 2025-05-21
#### PASS 10 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 11 seconds
### 2025-05-25
#### FAIL 5 seconds
```
2025-05-25T00:32:55.4733023Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-25T00:32:55.4738680Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-25T00:32:55.5144949Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-25T00:32:55.5152589Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-05-25T00:32:55.5153373Z         
2025-05-25T00:32:55.5154338Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5155305Z         
2025-05-25T00:32:55.5155928Z           with mongodbatlas_project_api_key.test,
2025-05-25T00:32:55.5157074Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project_api_key" "test":
2025-05-25T00:32:55.5158133Z           18: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-25T00:32:55.5158675Z         
2025-05-25T00:32:55.5203690Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-05-25T00:32:55.5205298Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-25T00:32:55.5206236Z         
2025-05-25T00:32:55.5207521Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5208272Z         
2025-05-25T00:32:55.5208975Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (5.09s)
```
### 2025-05-26
#### PASS 11 seconds
### 2025-05-27
#### PASS 10 seconds
### 2025-05-28
#### PASS 14 seconds
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
### 2025-05-30
#### PASS 12 seconds
### 2025-05-31
#### PASS 14 seconds
### 2025-06-01
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 11 seconds
#### PASS 12 seconds
#### PASS 10 seconds
### 2025-06-02
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 13 seconds
### 2025-06-03
#### PASS 11 seconds
### 2025-06-04
#### PASS 13 seconds
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
### 2025-06-07
#### PASS 14 seconds
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
### 2025-06-10
#### PASS 14 seconds
### 2025-06-11
#### PASS 15 seconds
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
### 2025-06-13
#### PASS 10 seconds
### 2025-06-14
#### PASS 10 seconds
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
### 2025-06-17
#### PASS 14 seconds
### 2025-06-18
#### PASS 9 seconds
#### PASS 9 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 14 seconds
### 2025-06-21
#### PASS 10 seconds
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
### 2025-06-24
#### PASS 10 seconds
### 2025-06-25
#### PASS 11 seconds
### 2025-06-26
#### PASS 11 seconds
### 2025-06-27
#### PASS 14 seconds
### 2025-06-28
#### PASS 9 seconds
### 2025-06-29
#### FAIL 35 seconds
```
2025-06-29T00:34:19.1731768Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-29T00:34:19.1734396Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-29T00:34:19.1900157Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-06-29T00:34:19.1900758Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:34:19.1901410Z         
2025-06-29T00:34:19.1901885Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1902223Z         
2025-06-29T00:34:19.1902623Z           with mongodbatlas_project.project2,
2025-06-29T00:34:19.1903267Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-06-29T00:34:19.1903907Z           13: 		resource "mongodbatlas_project" "project2" {
2025-06-29T00:34:19.1904292Z         
2025-06-29T00:34:19.1904734Z         error getting project (686089d056291349dce6dda2): error getting project's
2025-06-29T00:34:19.1905432Z         limits (686089d056291349dce6dda2):
2025-06-29T00:34:19.1906127Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089d056291349dce6dda2/limits
2025-06-29T00:34:19.1906889Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1907469Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1907851Z         BadRequestDetail: 
2025-06-29T00:34:19.1908294Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (35.81s)
```
### 2025-06-30
#### PASS 10 seconds
### 2025-07-01
#### PASS 11 seconds
#### PASS 9 seconds
#### PASS 14 seconds
#### PASS 10 seconds
#### PASS 14 seconds
#### PASS 11 seconds
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### PASS 14 seconds
### 2025-07-04
#### PASS 12 seconds
### 2025-07-05
#### PASS 14 seconds
### 2025-07-06
#### FAIL 33 seconds
```
2025-07-06T00:34:00.2827133Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2829073Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2996816Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2997784Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2998470Z         
2025-07-06T00:34:00.2999115Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2999649Z         
2025-07-06T00:34:00.3000170Z           with mongodbatlas_project.project2,
2025-07-06T00:34:00.3001229Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-07-06T00:34:00.3002202Z           13: 		resource "mongodbatlas_project" "project2" {
2025-07-06T00:34:00.3002694Z         
2025-07-06T00:34:00.3003453Z         error getting project (6869c4547267b5775b683f9d): error getting project's
2025-07-06T00:34:00.3004207Z         limits (6869c4547267b5775b683f9d):
2025-07-06T00:34:00.3005301Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4547267b5775b683f9d/limits
2025-07-06T00:34:00.3006423Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.3007398Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.3008042Z         BadRequestDetail: 
2025-07-06T00:34:00.3008618Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (33.80s)
```
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 15 seconds
### 2025-07-09
#### PASS 14 seconds