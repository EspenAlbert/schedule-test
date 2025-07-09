# config/projectapikey/TestMigProjectAPIKey_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 104) FAIL(x 11)
Success rate: 90.43%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-05-18 00:31 | qa | 7.02s
2025-05-25 00:32 | qa | 6.08s
2025-05-28 08:38 | qa | 6.07s
2025-05-28 12:23 | qa | 6.05s
2025-06-08 00:33 | qa | 6.04s
2025-06-11 07:39 | qa | 6.03s
2025-06-15 00:33 | qa | 7.00s
2025-06-22 00:33 | qa | 5.01s
2025-06-29 00:34 | qa | 6.01s
2025-07-06 00:34 | qa | 6.08s

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
#### PASS 15 seconds
### 2025-04-12
#### PASS 16 seconds
### 2025-04-13
#### PASS 15 seconds
### 2025-04-14
#### PASS 15 seconds
### 2025-04-15
#### PASS 17 seconds
### 2025-04-16
#### PASS 14 seconds
#### PASS 16 seconds
### 2025-04-17
#### PASS 14 seconds
### 2025-04-18
#### PASS 15 seconds
### 2025-04-19
#### PASS 22 seconds
### 2025-04-20
#### PASS 18 seconds
### 2025-04-21
#### PASS 29 seconds
### 2025-04-22
#### PASS 16 seconds
### 2025-04-23
#### PASS 14 seconds
### 2025-04-24
#### PASS 25 seconds
### 2025-04-25
#### PASS 15 seconds
### 2025-04-26
#### PASS 25 seconds
### 2025-04-27
#### PASS 27 seconds
### 2025-04-28
#### PASS 27 seconds
### 2025-04-29
#### PASS 14 seconds
### 2025-04-30
#### PASS 15 seconds
#### PASS 15 seconds
### 2025-05-01
#### PASS 17 seconds
#### PASS 26 seconds
#### PASS 14 seconds
#### PASS 17 seconds
#### PASS 15 seconds
#### PASS 28 seconds
#### PASS 22 seconds
### 2025-05-02
#### PASS 25 seconds
### 2025-05-03
#### PASS 16 seconds
### 2025-05-04
#### PASS 15 seconds
### 2025-05-05
#### PASS 26 seconds
### 2025-05-06
#### PASS 15 seconds
### 2025-05-07
#### PASS 14 seconds
### 2025-05-08
#### PASS 16 seconds
### 2025-05-09
#### PASS 27 seconds
### 2025-05-10
#### PASS 15 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:57.1862228Z === RUN   TestMigProjectAPIKey_basic
2025-05-11T00:29:57.1863307Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-601685719167819767
2025-05-11T00:29:57.2022772Z     resource_project_api_key_migration_test.go:10: 
2025-05-11T00:29:57.2024593Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.2028174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.2032047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:32
2025-05-11T00:29:57.2036102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_migration_test.go:10
2025-05-11T00:29:57.2037807Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.2039534Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2040494Z         	Test:       	TestMigProjectAPIKey_basic
2025-05-11T00:29:57.2042516Z         	Messages:   	Project creation failed: test-acc-tf-p-601685719167819767, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2043806Z --- FAIL: TestMigProjectAPIKey_basic (0.04s)
```
### 2025-05-12
#### PASS 15 seconds
### 2025-05-13
#### PASS 26 seconds
#### PASS 15 seconds
### 2025-05-14
#### PASS 15 seconds
### 2025-05-15
#### PASS 20 seconds
### 2025-05-16
#### PASS 26 seconds
### 2025-05-17
#### PASS 15 seconds
### 2025-05-18
#### FAIL 7 seconds
```
2025-05-18T00:31:58.1239577Z === RUN   TestMigProjectAPIKey_basic
2025-05-18T00:31:58.1240789Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-5326532183846722966
2025-05-18T00:31:58.1252858Z === CONT  TestMigProjectAPIKey_basic
2025-05-18T00:31:58.1486353Z === NAME  TestMigProjectAPIKey_basic
2025-05-18T00:31:58.1487803Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-05-18T00:31:58.1488965Z         
2025-05-18T00:31:58.1489957Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1490905Z         
2025-05-18T00:31:58.1491504Z           with mongodbatlas_project_api_key.test,
2025-05-18T00:31:58.1492918Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-05-18T00:31:58.1494255Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-18T00:31:58.1494820Z         
2025-05-18T00:31:58.1525548Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-18T00:31:58.1527256Z         
2025-05-18T00:31:58.1528839Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1531492Z         
2025-05-18T00:31:58.1531900Z --- FAIL: TestMigProjectAPIKey_basic (7.17s)
```
### 2025-05-19
#### PASS 15 seconds
### 2025-05-20
#### PASS 16 seconds
### 2025-05-21
#### PASS 15 seconds
### 2025-05-22
#### PASS 14 seconds
### 2025-05-23
#### PASS 15 seconds
### 2025-05-24
#### PASS 18 seconds
### 2025-05-25
#### FAIL 6 seconds
```
2025-05-25T00:32:55.4723005Z === RUN   TestMigProjectAPIKey_basic
2025-05-25T00:32:55.4723989Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-4587288388093235518
2025-05-25T00:32:55.4735672Z === CONT  TestMigProjectAPIKey_basic
2025-05-25T00:32:55.5093606Z === NAME  TestMigProjectAPIKey_basic
2025-05-25T00:32:55.5094663Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-05-25T00:32:55.5095603Z         
2025-05-25T00:32:55.5096593Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5097354Z         
2025-05-25T00:32:55.5097953Z           with mongodbatlas_project_api_key.test,
2025-05-25T00:32:55.5099137Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-05-25T00:32:55.5100237Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-25T00:32:55.5100788Z         
2025-05-25T00:32:55.5114676Z    test_working_directory=/tmp/plugintest984057891 test_name=TestAccProjectAPIKey_deleteProjectAndAssignment test_terraform_path=/home/runner/work/_temp/cd43af5c-0c16-4417-a16e-1ad6422f48a2/terraform
2025-05-25T00:32:55.5234028Z === NAME  TestMigProjectAPIKey_basic
2025-05-25T00:32:55.5235210Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-25T00:32:55.5236223Z         
2025-05-25T00:32:55.5237288Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5238040Z         
2025-05-25T00:32:55.5238438Z --- FAIL: TestMigProjectAPIKey_basic (6.82s)
```
### 2025-05-26
#### PASS 17 seconds
### 2025-05-27
#### PASS 18 seconds
### 2025-05-28
#### PASS 29 seconds
#### FAIL 6 seconds
```
2025-05-28T08:38:43.8244320Z === RUN   TestMigProjectAPIKey_basic
2025-05-28T08:38:43.8245742Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-779210765993564159
2025-05-28T08:38:43.8257486Z === CONT  TestMigProjectAPIKey_basic
2025-05-28T08:38:43.8558986Z === NAME  TestMigProjectAPIKey_basic
2025-05-28T08:38:43.8560041Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-05-28T08:38:43.8560855Z         
2025-05-28T08:38:43.8562119Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8562888Z         
2025-05-28T08:38:43.8563493Z           with mongodbatlas_project_api_key.test,
2025-05-28T08:38:43.8564693Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T08:38:43.8565780Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T08:38:43.8566356Z         
2025-05-28T08:38:43.8685387Z === NAME  TestMigProjectAPIKey_basic
2025-05-28T08:38:43.8686427Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T08:38:43.8687228Z         
2025-05-28T08:38:43.8688541Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8689337Z         
2025-05-28T08:38:43.8689775Z --- FAIL: TestMigProjectAPIKey_basic (6.68s)
```
#### FAIL 6 seconds
```
2025-05-28T12:23:27.4972101Z === RUN   TestMigProjectAPIKey_basic
2025-05-28T12:23:27.4973220Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-823969137066967029
2025-05-28T12:23:27.4985020Z === CONT  TestMigProjectAPIKey_basic
2025-05-28T12:23:27.5115606Z === NAME  TestMigProjectAPIKey_basic
2025-05-28T12:23:27.5116173Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:23:27.5116622Z         
2025-05-28T12:23:27.5117139Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5117563Z         
2025-05-28T12:23:27.5117893Z           with mongodbatlas_project_api_key.test,
2025-05-28T12:23:27.5118532Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T12:23:27.5119305Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T12:23:27.5119635Z         
2025-05-28T12:23:27.5126931Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T12:23:27.5127378Z         
2025-05-28T12:23:27.5128025Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5129347Z         
2025-05-28T12:23:27.5140824Z    test_name=TestAccProjectAPIKey_deleteProjectAndAssignment test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform test_working_directory=/tmp/plugintest485142135 test_step_number=1
2025-05-28T12:23:27.5149681Z --- FAIL: TestMigProjectAPIKey_basic (6.53s)
```
### 2025-05-29
#### PASS 19 seconds
### 2025-05-30
#### PASS 23 seconds
### 2025-05-31
#### PASS 26 seconds
### 2025-06-01
#### PASS 15 seconds
#### PASS 16 seconds
#### PASS 17 seconds
#### PASS 21 seconds
#### PASS 22 seconds
#### PASS 15 seconds
### 2025-06-02
#### PASS 15 seconds
#### PASS 16 seconds
#### PASS 30 seconds
### 2025-06-03
#### PASS 22 seconds
### 2025-06-04
#### PASS 22 seconds
### 2025-06-05
#### PASS 25 seconds
### 2025-06-06
#### PASS 16 seconds
### 2025-06-07
#### PASS 28 seconds
### 2025-06-08
#### FAIL 6 seconds
```
2025-06-08T00:33:53.1352170Z === RUN   TestMigProjectAPIKey_basic
2025-06-08T00:33:53.1353575Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-2316202163649025618
2025-06-08T00:33:53.1404716Z === CONT  TestMigProjectAPIKey_basic
2025-06-08T00:33:53.1750467Z === NAME  TestMigProjectAPIKey_basic
2025-06-08T00:33:53.1751463Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-08T00:33:53.1752216Z         
2025-06-08T00:33:53.1783550Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1784509Z         
2025-06-08T00:33:53.1785074Z           with mongodbatlas_project_api_key.test,
2025-06-08T00:33:53.1786651Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-06-08T00:33:53.1787898Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-08T00:33:53.1788440Z         
2025-06-08T00:33:53.1820854Z    test_terraform_path=/home/runner/work/_temp/13e22bf6-18d3-4285-87a0-815735aa0ae0/terraform
2025-06-08T00:33:53.1822658Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:33:53.1823477Z         
2025-06-08T00:33:53.1824466Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1825230Z         
2025-06-08T00:33:53.1872961Z    test_name=TestAccProjectAPIKey_deleteProjectAndAssignment test_terraform_path=/home/runner/work/_temp/13e22bf6-18d3-4285-87a0-815735aa0ae0/terraform
2025-06-08T00:33:53.1881787Z --- FAIL: TestMigProjectAPIKey_basic (6.36s)
```
### 2025-06-09
#### PASS 14 seconds
### 2025-06-10
#### PASS 27 seconds
### 2025-06-11
#### PASS 27 seconds
#### FAIL 6 seconds
```
2025-06-11T07:39:05.1191084Z === RUN   TestMigProjectAPIKey_basic
2025-06-11T07:39:05.1191713Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-7644005530314057094
2025-06-11T07:39:05.1198165Z === CONT  TestMigProjectAPIKey_basic
2025-06-11T07:39:05.1299073Z === NAME  TestMigProjectAPIKey_basic
2025-06-11T07:39:05.1299625Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-11T07:39:05.1300059Z         
2025-06-11T07:39:05.1300562Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1300969Z         
2025-06-11T07:39:05.1301281Z           with mongodbatlas_project_api_key.test,
2025-06-11T07:39:05.1301906Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-06-11T07:39:05.1302700Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-11T07:39:05.1303003Z         
2025-06-11T07:39:05.1310344Z    test_name=TestAccProjectAPIKey_changingSingleProject test_terraform_path=/home/runner/work/_temp/08c539c0-676f-48f3-a2c7-1bfa0f2bbddb/terraform test_working_directory=/tmp/plugintest810885072
2025-06-11T07:39:05.1330774Z === NAME  TestMigProjectAPIKey_basic
2025-06-11T07:39:05.1331318Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:39:05.1331744Z         
2025-06-11T07:39:05.1332240Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1332652Z         
2025-06-11T07:39:05.1332873Z --- FAIL: TestMigProjectAPIKey_basic (6.34s)
```
### 2025-06-12
#### PASS 14 seconds
### 2025-06-13
#### PASS 17 seconds
### 2025-06-14
#### PASS 17 seconds
### 2025-06-15
#### FAIL 7 seconds
```
2025-06-15T00:33:43.1535275Z === RUN   TestMigProjectAPIKey_basic
2025-06-15T00:33:43.1536397Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-4936331573592324458
2025-06-15T00:33:43.1548516Z === CONT  TestMigProjectAPIKey_basic
2025-06-15T00:33:43.1745249Z === NAME  TestMigProjectAPIKey_basic
2025-06-15T00:33:43.1746275Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-15T00:33:43.1747115Z         
2025-06-15T00:33:43.1748235Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1748970Z         
2025-06-15T00:33:43.1749549Z           with mongodbatlas_project_api_key.test,
2025-06-15T00:33:43.1750716Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-06-15T00:33:43.1752255Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-15T00:33:43.1752858Z         
2025-06-15T00:33:43.1810261Z === NAME  TestMigProjectAPIKey_basic
2025-06-15T00:33:43.1811255Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-15T00:33:43.1811990Z         
2025-06-15T00:33:43.1812914Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1813630Z         
2025-06-15T00:33:43.1814022Z --- FAIL: TestMigProjectAPIKey_basic (7.05s)
```
### 2025-06-16
#### PASS 28 seconds
### 2025-06-17
#### PASS 28 seconds
### 2025-06-18
#### PASS 16 seconds
#### PASS 16 seconds
### 2025-06-19
#### PASS 16 seconds
### 2025-06-20
#### PASS 32 seconds
### 2025-06-21
#### PASS 16 seconds
### 2025-06-22
#### FAIL 5 seconds
```
2025-06-22T00:33:39.3825800Z === RUN   TestMigProjectAPIKey_basic
2025-06-22T00:33:39.3826941Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-5442020449288640608
2025-06-22T00:33:39.3838170Z === CONT  TestMigProjectAPIKey_basic
2025-06-22T00:33:39.4018647Z === NAME  TestMigProjectAPIKey_basic
2025-06-22T00:33:39.4019797Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.4020572Z         
2025-06-22T00:33:39.4021616Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4022312Z         
2025-06-22T00:33:39.4022851Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.4023934Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.4024996Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.4025522Z         
2025-06-22T00:33:39.4033224Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.4034003Z         
2025-06-22T00:33:39.4034958Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4035721Z         
2025-06-22T00:33:39.4036133Z --- FAIL: TestMigProjectAPIKey_basic (5.15s)
```
### 2025-06-23
#### PASS 28 seconds
### 2025-06-24
#### PASS 18 seconds
### 2025-06-25
#### PASS 19 seconds
### 2025-06-26
#### PASS 19 seconds
### 2025-06-27
#### PASS 28 seconds
### 2025-06-28
#### PASS 15 seconds
### 2025-06-29
#### FAIL 6 seconds
```
2025-06-29T00:34:19.1726029Z === RUN   TestMigProjectAPIKey_basic
2025-06-29T00:34:19.1726635Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-1105885974772474532
2025-06-29T00:34:19.1733129Z === CONT  TestMigProjectAPIKey_basic
2025-06-29T00:34:19.1840052Z === NAME  TestMigProjectAPIKey_basic
2025-06-29T00:34:19.1840718Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:34:19.1841301Z         
2025-06-29T00:34:19.1842014Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1842555Z         
2025-06-29T00:34:19.1842892Z           with mongodbatlas_project_api_key.test,
2025-06-29T00:34:19.1843626Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-06-29T00:34:19.1844349Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-29T00:34:19.1844751Z         
2025-06-29T00:34:19.1849362Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T00:34:19.1849904Z         
2025-06-29T00:34:19.1850532Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1851042Z         
2025-06-29T00:34:19.1851375Z --- FAIL: TestMigProjectAPIKey_basic (6.06s)
```
### 2025-06-30
#### PASS 21 seconds
### 2025-07-01
#### PASS 15 seconds
#### PASS 19 seconds
#### PASS 28 seconds
#### PASS 16 seconds
#### PASS 28 seconds
#### PASS 16 seconds
### 2025-07-02
#### PASS 15 seconds
### 2025-07-03
#### PASS 25 seconds
### 2025-07-04
#### PASS 18 seconds
### 2025-07-05
#### PASS 31 seconds
### 2025-07-06
#### FAIL 6 seconds
```
2025-07-06T00:34:00.2821567Z === RUN   TestMigProjectAPIKey_basic
2025-07-06T00:34:00.2822151Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-4065518232293398172
2025-07-06T00:34:00.2828429Z === CONT  TestMigProjectAPIKey_basic
2025-07-06T00:34:00.2958540Z === NAME  TestMigProjectAPIKey_basic
2025-07-06T00:34:00.2959480Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2960221Z         
2025-07-06T00:34:00.2961117Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2961808Z         
2025-07-06T00:34:00.2962359Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2963455Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2964448Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2964950Z         
2025-07-06T00:34:00.2972040Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2972743Z         
2025-07-06T00:34:00.2973623Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2974299Z         
2025-07-06T00:34:00.2974679Z --- FAIL: TestMigProjectAPIKey_basic (6.85s)
```
### 2025-07-07
#### PASS 16 seconds
### 2025-07-08
#### PASS 29 seconds
### 2025-07-09
#### PASS 29 seconds