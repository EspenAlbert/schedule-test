# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 103) FAIL(x 12)
Success rate: 89.57%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-05-18 00:31 | qa | 5.02s
2025-05-25 00:32 | qa | 5.03s
2025-05-28 08:38 | qa | 5.02s
2025-05-28 12:23 | qa | 6.09s
2025-06-05 00:30 | dev | 3.04s
2025-06-08 00:33 | qa | 5.04s
2025-06-11 07:39 | qa | 4.09s
2025-06-15 00:33 | qa | 6.02s
2025-06-22 00:33 | qa | 6.08s
2025-06-29 00:34 | qa | 33.07s
2025-07-06 00:34 | qa | 34.05s

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
#### PASS 22 seconds
### 2025-04-12
#### PASS 23 seconds
### 2025-04-13
#### PASS 23 seconds
### 2025-04-14
#### PASS 23 seconds
### 2025-04-15
#### PASS 28 seconds
### 2025-04-16
#### PASS 21 seconds
#### PASS 22 seconds
### 2025-04-17
#### PASS 22 seconds
### 2025-04-18
#### PASS 21 seconds
### 2025-04-19
#### PASS 32 seconds
### 2025-04-20
#### PASS 26 seconds
### 2025-04-21
#### PASS 46 seconds
### 2025-04-22
#### PASS 22 seconds
### 2025-04-23
#### PASS 20 seconds
### 2025-04-24
#### PASS 39 seconds
### 2025-04-25
#### PASS 22 seconds
### 2025-04-26
#### PASS 39 seconds
### 2025-04-27
#### PASS 48 seconds
### 2025-04-28
#### PASS 44 seconds
### 2025-04-29
#### PASS 22 seconds
### 2025-04-30
#### PASS 21 seconds
#### PASS 24 seconds
### 2025-05-01
#### PASS 26 seconds
#### PASS 43 seconds
#### PASS 21 seconds
#### PASS 26 seconds
#### PASS 24 seconds
#### PASS 47 seconds
#### PASS 24 seconds
### 2025-05-02
#### PASS 40 seconds
### 2025-05-03
#### PASS 26 seconds
### 2025-05-04
#### PASS 23 seconds
### 2025-05-05
#### PASS 44 seconds
### 2025-05-06
#### PASS 22 seconds
### 2025-05-07
#### PASS 20 seconds
### 2025-05-08
#### PASS 22 seconds
### 2025-05-09
#### PASS 47 seconds
### 2025-05-10
#### PASS 22 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:57.2068253Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-05-11T00:29:57.2069425Z     resource_project_api_key_test.go:58: Creating execution project: test-acc-tf-p-3050371363194917413
2025-05-11T00:29:57.2070373Z     resource_project_api_key_test.go:58: 
2025-05-11T00:29:57.2072277Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.2075611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.2079408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:58
2025-05-11T00:29:57.2080951Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.2082758Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2083864Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2025-05-11T00:29:57.2085817Z         	Messages:   	Project creation failed: test-acc-tf-p-3050371363194917413, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2087173Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (0.01s)
```
### 2025-05-12
#### PASS 22 seconds
### 2025-05-13
#### PASS 44 seconds
#### PASS 22 seconds
### 2025-05-14
#### PASS 22 seconds
### 2025-05-15
#### PASS 32 seconds
### 2025-05-16
#### PASS 40 seconds
### 2025-05-17
#### PASS 19 seconds
### 2025-05-18
#### FAIL 5 seconds
```
2025-05-18T00:31:58.1243445Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-05-18T00:31:58.1256692Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-05-18T00:31:58.1562949Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-05-18T00:31:58.1563991Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-05-18T00:31:58.1564728Z         
2025-05-18T00:31:58.1565690Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1566435Z         
2025-05-18T00:31:58.1567025Z           with mongodbatlas_project_api_key.test,
2025-05-18T00:31:58.1568376Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-05-18T00:31:58.1569455Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-18T00:31:58.1570014Z         
2025-05-18T00:31:58.1583343Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-18T00:31:58.1584164Z         
2025-05-18T00:31:58.1585138Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1585869Z         
2025-05-18T00:31:58.1586354Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (5.19s)
```
### 2025-05-19
#### PASS 22 seconds
### 2025-05-20
#### PASS 26 seconds
### 2025-05-21
#### PASS 22 seconds
### 2025-05-22
#### PASS 20 seconds
### 2025-05-23
#### PASS 23 seconds
### 2025-05-24
#### PASS 27 seconds
### 2025-05-25
#### FAIL 5 seconds
```
2025-05-25T00:32:55.4726265Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-05-25T00:32:55.4738009Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-05-25T00:32:55.5177345Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-05-25T00:32:55.5178859Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-05-25T00:32:55.5179825Z         
2025-05-25T00:32:55.5181268Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5182185Z         
2025-05-25T00:32:55.5182972Z           with mongodbatlas_project_api_key.test,
2025-05-25T00:32:55.5184505Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-05-25T00:32:55.5186215Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-25T00:32:55.5186950Z         
2025-05-25T00:32:55.5222547Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-05-25T00:32:55.5223864Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-25T00:32:55.5224646Z         
2025-05-25T00:32:55.5225762Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5226537Z         
2025-05-25T00:32:55.5227034Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (5.28s)
```
### 2025-05-26
#### PASS 28 seconds
### 2025-05-27
#### PASS 27 seconds
### 2025-05-28
#### PASS 46 seconds
#### FAIL 5 seconds
```
2025-05-28T08:38:43.8248296Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-05-28T08:38:43.8260539Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-05-28T08:38:43.8598805Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-05-28T08:38:43.8599837Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-05-28T08:38:43.8600779Z         
2025-05-28T08:38:43.8601857Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8602617Z         
2025-05-28T08:38:43.8603210Z           with mongodbatlas_project_api_key.test,
2025-05-28T08:38:43.8604351Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T08:38:43.8605387Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T08:38:43.8605958Z         
2025-05-28T08:38:43.8674862Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T08:38:43.8675679Z         
2025-05-28T08:38:43.8676719Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8677551Z         
2025-05-28T08:38:43.8678165Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (5.16s)
```
#### FAIL 6 seconds
```
2025-05-28T12:23:27.4975736Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-05-28T12:23:27.4988348Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-05-28T12:23:27.5173221Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-05-28T12:23:27.5174128Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-05-28T12:23:27.5174947Z         
2025-05-28T12:23:27.5175966Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5176752Z         
2025-05-28T12:23:27.5177361Z           with mongodbatlas_project_api_key.test,
2025-05-28T12:23:27.5178539Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T12:23:27.5179786Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T12:23:27.5180368Z         
2025-05-28T12:23:27.5187573Z    test_name=TestAccProjectAPIKey_changingSingleProject test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform test_step_number=1
2025-05-28T12:23:27.5188911Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T12:23:27.5189529Z         
2025-05-28T12:23:27.5190418Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5191473Z         
2025-05-28T12:23:27.5192047Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (6.86s)
```
### 2025-05-29
#### PASS 29 seconds
### 2025-05-30
#### PASS 36 seconds
### 2025-05-31
#### PASS 43 seconds
### 2025-06-01
#### PASS 22 seconds
#### PASS 23 seconds
#### PASS 25 seconds
#### PASS 35 seconds
#### PASS 34 seconds
#### PASS 24 seconds
### 2025-06-02
#### PASS 23 seconds
#### PASS 26 seconds
#### PASS 44 seconds
### 2025-06-03
#### PASS 35 seconds
### 2025-06-04
#### PASS 36 seconds
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:30:45.1431943Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-06-05T00:30:45.1438246Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-06-05T00:30:45.1458567Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-05T00:30:45.1459139Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:30:45.1459560Z         
2025-06-05T00:30:45.1459984Z         Error: error creating project: test-acc-tf-p-6008088978826043825
2025-06-05T00:30:45.1460348Z         
2025-06-05T00:30:45.1460670Z           with mongodbatlas_project.proj2,
2025-06-05T00:30:45.1461280Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-06-05T00:30:45.1461858Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-06-05T00:30:45.1462177Z         
2025-06-05T00:30:45.1462659Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1463318Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1464102Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1464883Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (3.39s)
```
### 2025-06-06
#### PASS 24 seconds
### 2025-06-07
#### PASS 48 seconds
### 2025-06-08
#### FAIL 5 seconds
```
2025-06-08T00:33:53.1356334Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-06-08T00:33:53.1409271Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-06-08T00:33:53.1962253Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-08T00:33:53.1993635Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-06-08T00:33:53.1994404Z         
2025-06-08T00:33:53.1995331Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1996103Z         
2025-06-08T00:33:53.1996692Z           with mongodbatlas_project_api_key.test,
2025-06-08T00:33:53.1997910Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-06-08T00:33:53.1999022Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-08T00:33:53.1999594Z         
2025-06-08T00:33:53.2014638Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:33:53.2015407Z         
2025-06-08T00:33:53.2016338Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.2017084Z         
2025-06-08T00:33:53.2017580Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (5.39s)
```
### 2025-06-09
#### PASS 22 seconds
### 2025-06-10
#### PASS 46 seconds
### 2025-06-11
#### PASS 45 seconds
#### FAIL 4 seconds
```
2025-06-11T07:39:05.1193116Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-06-11T07:39:05.1200227Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-06-11T07:39:05.1311205Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-11T07:39:05.1311759Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-06-11T07:39:05.1312161Z         
2025-06-11T07:39:05.1312666Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1313076Z         
2025-06-11T07:39:05.1313397Z           with mongodbatlas_project_api_key.test,
2025-06-11T07:39:05.1314030Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-06-11T07:39:05.1314709Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-11T07:39:05.1315008Z         
2025-06-11T07:39:05.1322793Z    test_step_number=1
2025-06-11T07:39:05.1339734Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-11T07:39:05.1340306Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:39:05.1340728Z         
2025-06-11T07:39:05.1341230Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1341644Z         
2025-06-11T07:39:05.1341918Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (4.95s)
```
### 2025-06-12
#### PASS 21 seconds
### 2025-06-13
#### PASS 24 seconds
### 2025-06-14
#### PASS 28 seconds
### 2025-06-15
#### FAIL 6 seconds
```
2025-06-15T00:33:43.1539712Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-06-15T00:33:43.1552697Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-06-15T00:33:43.1829263Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-15T00:33:43.1830274Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-06-15T00:33:43.1830985Z         
2025-06-15T00:33:43.1831879Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1832579Z         
2025-06-15T00:33:43.1833142Z           with mongodbatlas_project_api_key.test,
2025-06-15T00:33:43.1834293Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-06-15T00:33:43.1835325Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-15T00:33:43.1835863Z         
2025-06-15T00:33:43.1849338Z    test_name=TestAccProjectAPIKey_changingSingleProject test_terraform_path=/home/runner/work/_temp/31fa8d43-eae3-4acf-a133-25c5ef7304e1/terraform
2025-06-15T00:33:43.1851261Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-15T00:33:43.1852067Z         
2025-06-15T00:33:43.1853026Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1853782Z         
2025-06-15T00:33:43.1854283Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (6.19s)
```
### 2025-06-16
#### PASS 46 seconds
### 2025-06-17
#### PASS 48 seconds
### 2025-06-18
#### PASS 24 seconds
#### PASS 24 seconds
### 2025-06-19
#### PASS 22 seconds
### 2025-06-20
#### PASS 48 seconds
### 2025-06-21
#### PASS 25 seconds
### 2025-06-22
#### FAIL 6 seconds
```
2025-06-22T00:33:39.3829520Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-06-22T00:33:39.3840341Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-06-22T00:33:39.4051663Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-22T00:33:39.4052667Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-06-22T00:33:39.4053395Z         
2025-06-22T00:33:39.4054354Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4055128Z         
2025-06-22T00:33:39.4055714Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.4056908Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.4058036Z           17: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.4058601Z         
2025-06-22T00:33:39.4081371Z    test_terraform_path=/home/runner/work/_temp/deff8d4d-a237-4a7d-b7cc-d8fd6946c8bb/terraform test_working_directory=/tmp/plugintest298380446
2025-06-22T00:33:39.4099918Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-22T00:33:39.4100847Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.4101857Z         
2025-06-22T00:33:39.4102680Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.4103338Z         
2025-06-22T00:33:39.4103769Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (6.79s)
```
### 2025-06-23
#### PASS 45 seconds
### 2025-06-24
#### PASS 28 seconds
### 2025-06-25
#### PASS 29 seconds
### 2025-06-26
#### PASS 31 seconds
### 2025-06-27
#### PASS 48 seconds
### 2025-06-28
#### PASS 23 seconds
### 2025-06-29
#### FAIL 33 seconds
```
2025-06-29T00:34:19.1728013Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-06-29T00:34:19.1735062Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-06-29T00:34:19.1866517Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-06-29T00:34:19.1867272Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-06-29T00:34:19.1868054Z         
2025-06-29T00:34:19.1868676Z         Error: error when getting project properties after create
2025-06-29T00:34:19.1869164Z         
2025-06-29T00:34:19.1869859Z           with mongodbatlas_project.proj2,
2025-06-29T00:34:19.1870664Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-06-29T00:34:19.1871695Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-06-29T00:34:19.1872224Z         
2025-06-29T00:34:19.1872984Z         error getting project (686089d049709c3a5a3ca202): error getting project's
2025-06-29T00:34:19.1873658Z         limits (686089d049709c3a5a3ca202):
2025-06-29T00:34:19.1874433Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089d049709c3a5a3ca202/limits
2025-06-29T00:34:19.1883768Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:34:19.1884436Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:34:19.1884888Z         BadRequestDetail: 
2025-06-29T00:34:19.1885275Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (33.66s)
```
### 2025-06-30
#### PASS 33 seconds
### 2025-07-01
#### PASS 23 seconds
#### PASS 28 seconds
#### PASS 47 seconds
#### PASS 24 seconds
#### PASS 47 seconds
#### PASS 25 seconds
### 2025-07-02
#### PASS 23 seconds
### 2025-07-03
#### PASS 43 seconds
### 2025-07-04
#### PASS 28 seconds
### 2025-07-05
#### PASS 46 seconds
### 2025-07-06
#### FAIL 34 seconds
```
2025-07-06T00:34:00.2823471Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.2830018Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.3030634Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.3031596Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-07-06T00:34:00.3032282Z         
2025-07-06T00:34:00.3032956Z         Error: error when getting project properties after create
2025-07-06T00:34:00.3033505Z         
2025-07-06T00:34:00.3034026Z           with mongodbatlas_project.proj2,
2025-07-06T00:34:00.3035079Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-07-06T00:34:00.3036236Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-07-06T00:34:00.3036736Z         
2025-07-06T00:34:00.3037508Z         error getting project (6869c4547267b5775b683fb3): error getting project's
2025-07-06T00:34:00.3038292Z         limits (6869c4547267b5775b683fb3):
2025-07-06T00:34:00.3039267Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4547267b5775b683fb3/limits
2025-07-06T00:34:00.3040405Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.3041398Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.3042069Z         BadRequestDetail: 
2025-07-06T00:34:00.3042617Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (34.49s)
```
### 2025-07-07
#### PASS 24 seconds
### 2025-07-08
#### PASS 48 seconds
### 2025-07-09
#### PASS 46 seconds