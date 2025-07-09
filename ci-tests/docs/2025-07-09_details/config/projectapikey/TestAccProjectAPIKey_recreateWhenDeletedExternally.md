# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 104) FAIL(x 11)
Success rate: 90.43%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-05-18 00:31 | qa | 2.04s
2025-05-25 00:32 | qa | 2.07s
2025-05-28 08:38 | qa | 2.06s
2025-05-28 12:23 | qa | 2.09s
2025-06-08 00:33 | qa | 2.04s
2025-06-11 07:39 | qa | 2.04s
2025-06-15 00:33 | qa | 2.06s
2025-06-22 00:33 | qa | 1.08s
2025-06-29 00:34 | qa | 1.09s
2025-07-06 00:34 | qa | 2.08s

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
#### PASS 9 seconds
### 2025-04-12
#### PASS 8 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 8 seconds
### 2025-04-18
#### PASS 9 seconds
### 2025-04-19
#### PASS 11 seconds
### 2025-04-20
#### PASS 9 seconds
### 2025-04-21
#### PASS 17 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 7 seconds
### 2025-04-24
#### PASS 14 seconds
### 2025-04-25
#### PASS 8 seconds
### 2025-04-26
#### PASS 14 seconds
### 2025-04-27
#### PASS 17 seconds
### 2025-04-28
#### PASS 15 seconds
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-01
#### PASS 9 seconds
#### PASS 15 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 7 seconds
#### PASS 17 seconds
#### PASS 9 seconds
### 2025-05-02
#### PASS 14 seconds
### 2025-05-03
#### PASS 9 seconds
### 2025-05-04
#### PASS 7 seconds
### 2025-05-05
#### PASS 17 seconds
### 2025-05-06
#### PASS 8 seconds
### 2025-05-07
#### PASS 8 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 17 seconds
### 2025-05-10
#### PASS 7 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:57.2147374Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-11T00:29:57.2148568Z     resource_project_api_key_test.go:157: Creating execution project: test-acc-tf-p-8253426588093559035
2025-05-11T00:29:57.2149538Z     resource_project_api_key_test.go:157: 
2025-05-11T00:29:57.2151226Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.2154637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.2158300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:157
2025-05-11T00:29:57.2159803Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.2161413Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2162711Z         	Test:       	TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-11T00:29:57.2164644Z         	Messages:   	Project creation failed: test-acc-tf-p-8253426588093559035, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2166291Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (0.01s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 16 seconds
#### PASS 7 seconds
### 2025-05-14
#### PASS 8 seconds
### 2025-05-15
#### PASS 12 seconds
### 2025-05-16
#### PASS 15 seconds
### 2025-05-17
#### PASS 8 seconds
### 2025-05-18
#### FAIL 2 seconds
```
2025-05-18T00:31:58.1248619Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-18T00:31:58.1255363Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-18T00:31:58.1364192Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-18T00:31:58.1365527Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-05-18T00:31:58.1366279Z         
2025-05-18T00:31:58.1367308Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1368306Z         
2025-05-18T00:31:58.1368995Z           with mongodbatlas_project_api_key.test,
2025-05-18T00:31:58.1370218Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-18T00:31:58.1371351Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-18T00:31:58.1371922Z         
2025-05-18T00:31:58.1385265Z    test_name=TestAccProjectAPIKey_updateDescription test_terraform_path=/home/runner/work/_temp/aebf3c15-e182-4f23-a50a-f01f924448af/terraform test_working_directory=/tmp/plugintest519854224 test_step_number=1
2025-05-18T00:31:58.1449519Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-18T00:31:58.1450797Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-18T00:31:58.1451558Z         
2025-05-18T00:31:58.1452619Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1453339Z         
2025-05-18T00:31:58.1454009Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.41s)
```
### 2025-05-19
#### PASS 8 seconds
### 2025-05-20
#### PASS 8 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 8 seconds
### 2025-05-24
#### PASS 10 seconds
### 2025-05-25
#### FAIL 2 seconds
```
2025-05-25T00:32:55.4731514Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-25T00:32:55.4739942Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-25T00:32:55.4871209Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-25T00:32:55.4872440Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-05-25T00:32:55.4873180Z         
2025-05-25T00:32:55.4874247Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.4875229Z         
2025-05-25T00:32:55.4875792Z           with mongodbatlas_project_api_key.test,
2025-05-25T00:32:55.4877091Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-25T00:32:55.4878309Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-25T00:32:55.4878851Z         
2025-05-25T00:32:55.4922270Z    test_working_directory=/tmp/plugintest4214264769
2025-05-25T00:32:55.5061324Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-25T00:32:55.5063045Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-25T00:32:55.5063929Z         
2025-05-25T00:32:55.5065160Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5065943Z         
2025-05-25T00:32:55.5066584Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.68s)
```
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 10 seconds
### 2025-05-28
#### PASS 17 seconds
#### FAIL 2 seconds
```
2025-05-28T08:38:43.8253319Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T08:38:43.8263428Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T08:38:43.8283229Z   
2025-05-28T08:38:43.8449928Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T08:38:43.8451007Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-05-28T08:38:43.8451933Z         
2025-05-28T08:38:43.8452877Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8453632Z         
2025-05-28T08:38:43.8454225Z           with mongodbatlas_project_api_key.test,
2025-05-28T08:38:43.8455402Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T08:38:43.8456470Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T08:38:43.8457028Z         
2025-05-28T08:38:43.8504882Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T08:38:43.8506014Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T08:38:43.8506787Z         
2025-05-28T08:38:43.8507739Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8508508Z         
2025-05-28T08:38:43.8509082Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.57s)
```
#### FAIL 2 seconds
```
2025-05-28T12:23:27.4980957Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T12:23:27.4987748Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T12:23:27.5038496Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T12:23:27.5039782Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:23:27.5040537Z         
2025-05-28T12:23:27.5041526Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5042299Z         
2025-05-28T12:23:27.5042914Z           with mongodbatlas_project_api_key.test,
2025-05-28T12:23:27.5044059Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T12:23:27.5045047Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T12:23:27.5045370Z         
2025-05-28T12:23:27.5053592Z    test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform test_step_number=1
2025-05-28T12:23:27.5107630Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-05-28T12:23:27.5108249Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T12:23:27.5108705Z         
2025-05-28T12:23:27.5109413Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5109847Z         
2025-05-28T12:23:27.5110175Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.91s)
```
### 2025-05-29
#### PASS 11 seconds
### 2025-05-30
#### PASS 13 seconds
### 2025-05-31
#### PASS 16 seconds
### 2025-06-01
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 13 seconds
#### PASS 12 seconds
#### PASS 10 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 16 seconds
### 2025-06-03
#### PASS 12 seconds
### 2025-06-04
#### PASS 12 seconds
### 2025-06-05
#### PASS 15 seconds
### 2025-06-06
#### PASS 10 seconds
### 2025-06-07
#### PASS 17 seconds
### 2025-06-08
#### FAIL 2 seconds
```
2025-06-08T00:33:53.1361161Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-08T00:33:53.1407971Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-08T00:33:53.1541745Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-08T00:33:53.1543135Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-06-08T00:33:53.1543943Z         
2025-06-08T00:33:53.1544964Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1564616Z         
2025-06-08T00:33:53.1565277Z           with mongodbatlas_project_api_key.test,
2025-06-08T00:33:53.1566928Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-08T00:33:53.1568069Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-08T00:33:53.1568682Z         
2025-06-08T00:33:53.1579995Z    test_name=TestAccProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/13e22bf6-18d3-4285-87a0-815735aa0ae0/terraform test_working_directory=/tmp/plugintest1566912217
2025-06-08T00:33:53.1736691Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-08T00:33:53.1737826Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:33:53.1738590Z         
2025-06-08T00:33:53.1739525Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1740261Z         
2025-06-08T00:33:53.1740818Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.37s)
```
### 2025-06-09
#### PASS 8 seconds
### 2025-06-10
#### PASS 17 seconds
### 2025-06-11
#### PASS 16 seconds
#### FAIL 2 seconds
```
2025-06-11T07:39:05.1196008Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-11T07:39:05.1199552Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-11T07:39:05.1231610Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-11T07:39:05.1232190Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-06-11T07:39:05.1232591Z         
2025-06-11T07:39:05.1233100Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1233780Z         
2025-06-11T07:39:05.1234190Z           with mongodbatlas_project_api_key.test,
2025-06-11T07:39:05.1234824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-11T07:39:05.1235413Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-11T07:39:05.1235715Z         
2025-06-11T07:39:05.1240127Z    test_name=TestAccProjectAPIKey_basic test_step_number=1 test_terraform_path=/home/runner/work/_temp/08c539c0-676f-48f3-a2c7-1bfa0f2bbddb/terraform
2025-06-11T07:39:05.1282668Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-11T07:39:05.1283268Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:39:05.1283694Z         
2025-06-11T07:39:05.1284290Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1284697Z         
2025-06-11T07:39:05.1285001Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.37s)
```
### 2025-06-12
#### PASS 8 seconds
### 2025-06-13
#### PASS 9 seconds
### 2025-06-14
#### PASS 10 seconds
### 2025-06-15
#### FAIL 2 seconds
```
2025-06-15T00:33:43.1544488Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-15T00:33:43.1551491Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-15T00:33:43.1574519Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-15T00:33:43.1575569Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-06-15T00:33:43.1576284Z         
2025-06-15T00:33:43.1577194Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1589863Z         
2025-06-15T00:33:43.1590481Z           with mongodbatlas_project_api_key.test,
2025-06-15T00:33:43.1591651Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-15T00:33:43.1592739Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-15T00:33:43.1593300Z         
2025-06-15T00:33:43.1681864Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-15T00:33:43.1682972Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-15T00:33:43.1683707Z         
2025-06-15T00:33:43.1684646Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1685375Z         
2025-06-15T00:33:43.1685947Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.56s)
```
### 2025-06-16
#### PASS 17 seconds
### 2025-06-17
#### PASS 17 seconds
### 2025-06-18
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 18 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### FAIL a second
```
2025-06-22T00:33:39.3834391Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3843064Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3894406Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3895428Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3896148Z         
2025-06-22T00:33:39.3897054Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3897952Z         
2025-06-22T00:33:39.3898527Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.3899655Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.3900714Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.3901371Z         
2025-06-22T00:33:39.3972526Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-22T00:33:39.3973595Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.3974345Z         
2025-06-22T00:33:39.3975249Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3975969Z         
2025-06-22T00:33:39.3976500Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (1.83s)
```
### 2025-06-23
#### PASS 17 seconds
### 2025-06-24
#### PASS 10 seconds
### 2025-06-25
#### PASS 11 seconds
### 2025-06-26
#### PASS 10 seconds
### 2025-06-27
#### PASS 17 seconds
### 2025-06-28
#### PASS 9 seconds
### 2025-06-29
#### FAIL a second
```
2025-06-29T00:34:19.1730816Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-29T00:34:19.1735431Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-29T00:34:19.1787358Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-29T00:34:19.1787951Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:34:19.1788454Z         
2025-06-29T00:34:19.1789218Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1789643Z         
2025-06-29T00:34:19.1790089Z           with mongodbatlas_project_api_key.test,
2025-06-29T00:34:19.1790838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-29T00:34:19.1791648Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-29T00:34:19.1791957Z         
2025-06-29T00:34:19.1799252Z    test_name=TestAccProjectAPIKey_updateRole
2025-06-29T00:34:19.1813406Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-06-29T00:34:19.1814148Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T00:34:19.1814667Z         
2025-06-29T00:34:19.1815213Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1815685Z         
2025-06-29T00:34:19.1816207Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (1.90s)
```
### 2025-06-30
#### PASS 12 seconds
### 2025-07-01
#### PASS 8 seconds
#### PASS 11 seconds
#### PASS 17 seconds
#### PASS 8 seconds
#### PASS 17 seconds
#### PASS 9 seconds
### 2025-07-02
#### PASS 7 seconds
### 2025-07-03
#### PASS 15 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 18 seconds
### 2025-07-06
#### FAIL 2 seconds
```
2025-07-06T00:34:00.2826332Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2830703Z === CONT  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2863260Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2864049Z     resource_project_api_key_test.go:163: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2864467Z         
2025-07-06T00:34:00.2864980Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2865535Z         
2025-07-06T00:34:00.2865858Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2866476Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2867051Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2867346Z         
2025-07-06T00:34:00.2931433Z === NAME  TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-07-06T00:34:00.2932452Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2933149Z         
2025-07-06T00:34:00.2934200Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2934863Z         
2025-07-06T00:34:00.2935507Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (2.77s)
```
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 19 seconds
### 2025-07-09
#### PASS 18 seconds