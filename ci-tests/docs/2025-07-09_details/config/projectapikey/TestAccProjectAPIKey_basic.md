# config/projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 104) FAIL(x 11)
Success rate: 90.43%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-05-18 00:31 | qa | 2.04s
2025-05-25 00:32 | qa | 2.06s
2025-05-28 08:38 | qa | 2.05s
2025-05-28 12:23 | qa | 2.09s
2025-06-08 00:33 | qa | 2.02s
2025-06-11 07:39 | qa | 2.04s
2025-06-15 00:33 | qa | 2.07s
2025-06-22 00:33 | qa | 1.09s
2025-06-29 00:34 | qa | 1.09s
2025-07-06 00:34 | qa | 2.06s

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
#### PASS 8 seconds
### 2025-04-12
#### PASS 7 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 7 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-04-17
#### PASS 8 seconds
### 2025-04-18
#### PASS 8 seconds
### 2025-04-19
#### PASS 11 seconds
### 2025-04-20
#### PASS 9 seconds
### 2025-04-21
#### PASS 16 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 7 seconds
### 2025-04-24
#### PASS 14 seconds
### 2025-04-25
#### PASS 8 seconds
### 2025-04-26
#### PASS 13 seconds
### 2025-04-27
#### PASS 16 seconds
### 2025-04-28
#### PASS 15 seconds
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 7 seconds
#### PASS 8 seconds
### 2025-05-01
#### PASS 9 seconds
#### PASS 15 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 16 seconds
#### PASS 9 seconds
### 2025-05-02
#### PASS 13 seconds
### 2025-05-03
#### PASS 8 seconds
### 2025-05-04
#### PASS 7 seconds
### 2025-05-05
#### PASS 16 seconds
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
2025-05-11T00:29:57.2044405Z === RUN   TestAccProjectAPIKey_basic
2025-05-11T00:29:57.2045504Z     resource_project_api_key_test.go:26: Creating execution project: test-acc-tf-p-6377970072976631587
2025-05-11T00:29:57.2046520Z     resource_project_api_key_test.go:26: 
2025-05-11T00:29:57.2048588Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.2052150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.2055992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:32
2025-05-11T00:29:57.2060010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:26
2025-05-11T00:29:57.2061725Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.2063415Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2064377Z         	Test:       	TestAccProjectAPIKey_basic
2025-05-11T00:29:57.2066358Z         	Messages:   	Project creation failed: test-acc-tf-p-6377970072976631587, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2067569Z --- FAIL: TestAccProjectAPIKey_basic (0.01s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 16 seconds
#### PASS 8 seconds
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
2025-05-18T00:31:58.1242340Z === RUN   TestAccProjectAPIKey_basic
2025-05-18T00:31:58.1257305Z === CONT  TestAccProjectAPIKey_basic
2025-05-18T00:31:58.1315195Z === NAME  TestAccProjectAPIKey_basic
2025-05-18T00:31:58.1316170Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-05-18T00:31:58.1316871Z         
2025-05-18T00:31:58.1343799Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1344625Z         
2025-05-18T00:31:58.1345359Z           with mongodbatlas_project_api_key.test,
2025-05-18T00:31:58.1346563Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-18T00:31:58.1347628Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-18T00:31:58.1348340Z         
2025-05-18T00:31:58.1436271Z === NAME  TestAccProjectAPIKey_basic
2025-05-18T00:31:58.1437326Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-18T00:31:58.1438612Z         
2025-05-18T00:31:58.1439791Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1440541Z         
2025-05-18T00:31:58.1441089Z --- FAIL: TestAccProjectAPIKey_basic (2.40s)
```
### 2025-05-19
#### PASS 8 seconds
### 2025-05-20
#### PASS 7 seconds
### 2025-05-21
#### PASS 8 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 8 seconds
### 2025-05-24
#### PASS 9 seconds
### 2025-05-25
#### FAIL 2 seconds
```
2025-05-25T00:32:55.4725345Z === RUN   TestAccProjectAPIKey_basic
2025-05-25T00:32:55.4740582Z === CONT  TestAccProjectAPIKey_basic
2025-05-25T00:32:55.4774408Z === NAME  TestAccProjectAPIKey_basic
2025-05-25T00:32:55.4775793Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-05-25T00:32:55.4776546Z         
2025-05-25T00:32:55.4777518Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.4778386Z         
2025-05-25T00:32:55.4778978Z           with mongodbatlas_project_api_key.test,
2025-05-25T00:32:55.4780138Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-25T00:32:55.4781210Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-25T00:32:55.4781786Z         
2025-05-25T00:32:55.4923874Z === NAME  TestAccProjectAPIKey_basic
2025-05-25T00:32:55.4926446Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-25T00:32:55.4929286Z         
2025-05-25T00:32:55.4931362Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.4934159Z         
2025-05-25T00:32:55.4934560Z --- FAIL: TestAccProjectAPIKey_basic (2.57s)
```
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 9 seconds
### 2025-05-28
#### PASS 17 seconds
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
### 2025-05-30
#### PASS 12 seconds
### 2025-05-31
#### PASS 15 seconds
### 2025-06-01
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 12 seconds
#### PASS 12 seconds
#### PASS 9 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 16 seconds
### 2025-06-03
#### PASS 12 seconds
### 2025-06-04
#### PASS 13 seconds
### 2025-06-05
#### PASS 15 seconds
### 2025-06-06
#### PASS 9 seconds
### 2025-06-07
#### PASS 17 seconds
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
### 2025-06-10
#### PASS 17 seconds
### 2025-06-11
#### PASS 16 seconds
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
### 2025-06-13
#### PASS 9 seconds
### 2025-06-14
#### PASS 10 seconds
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
### 2025-06-17
#### PASS 17 seconds
### 2025-06-18
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 17 seconds
### 2025-06-21
#### PASS 9 seconds
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
### 2025-06-24
#### PASS 10 seconds
### 2025-06-25
#### PASS 10 seconds
### 2025-06-26
#### PASS 10 seconds
### 2025-06-27
#### PASS 17 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### FAIL a second
```
2025-06-29T00:34:19.1727410Z === RUN   TestAccProjectAPIKey_basic
2025-06-29T00:34:19.1735778Z === CONT  TestAccProjectAPIKey_basic
2025-06-29T00:34:19.1777625Z === NAME  TestAccProjectAPIKey_basic
2025-06-29T00:34:19.1778131Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:34:19.1778527Z         
2025-06-29T00:34:19.1779030Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1779439Z         
2025-06-29T00:34:19.1779773Z           with mongodbatlas_project_api_key.test,
2025-06-29T00:34:19.1780596Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-29T00:34:19.1781402Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-29T00:34:19.1781708Z         
2025-06-29T00:34:19.1786233Z    test_name=TestAccProjectAPIKey_recreateWhenDeletedExternally test_terraform_path=/home/runner/work/_temp/1370ebee-90f1-496c-88ad-ad991f86e814/terraform test_working_directory=/tmp/plugintest1114329746
2025-06-29T00:34:19.1820584Z === NAME  TestAccProjectAPIKey_basic
2025-06-29T00:34:19.1821398Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T00:34:19.1821934Z         
2025-06-29T00:34:19.1822459Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1822969Z         
2025-06-29T00:34:19.1823194Z --- FAIL: TestAccProjectAPIKey_basic (1.92s)
```
### 2025-06-30
#### PASS 12 seconds
### 2025-07-01
#### PASS 8 seconds
#### PASS 11 seconds
#### PASS 16 seconds
#### PASS 9 seconds
#### PASS 17 seconds
#### PASS 10 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 15 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 18 seconds
### 2025-07-06
#### FAIL 2 seconds
```
2025-07-06T00:34:00.2822907Z === RUN   TestAccProjectAPIKey_basic
2025-07-06T00:34:00.2831035Z === CONT  TestAccProjectAPIKey_basic
2025-07-06T00:34:00.2850387Z    test_name=TestAccProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/f4a4173d-86e1-4089-95dd-38ad7426626e/terraform
2025-07-06T00:34:00.2851159Z     resource_project_api_key_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2851553Z         
2025-07-06T00:34:00.2852062Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2852461Z         
2025-07-06T00:34:00.2852770Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2853393Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2853964Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2854256Z         
2025-07-06T00:34:00.2895275Z === NAME  TestAccProjectAPIKey_basic
2025-07-06T00:34:00.2895873Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2896283Z         
2025-07-06T00:34:00.2896780Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2897179Z         
2025-07-06T00:34:00.2897399Z --- FAIL: TestAccProjectAPIKey_basic (2.62s)
```
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 18 seconds
### 2025-07-09
#### PASS 17 seconds