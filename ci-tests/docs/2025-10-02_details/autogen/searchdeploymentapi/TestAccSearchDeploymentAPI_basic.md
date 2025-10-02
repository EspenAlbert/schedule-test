# autogen/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 5)
Success rate: 88.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 10:08](#error-2025-09-08t1008400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea30e341d8a498776940a/limits | qa | flaky_500 | 2074.09s
[2025-09-14 00:54](#error-2025-09-14t0054200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb71411d835e95b5ef9/limits | qa | flaky_500 | 34.03s
[2025-09-15 06:45](#error-2025-09-15t0645400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0c9fe60767b7f9b3f45/limits | qa | flaky_500 | 34.00s
[2025-09-21 00:58](#error-2025-09-21t0058200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4758bd1cb41a3e707907/limits | qa | flaky_500 | 33.09s
[2025-10-01 02:37](#error-2025-10-01t0237100000) |  | dev |  | 7600.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 52 minutes
- 2025-09-05 PASS 44 minutes
- 2025-09-06 PASS 53 minutes
- 2025-09-07 PASS 41 minutes
- 2025-09-08
  - PASS 52 minutes
  - FAIL 34 minutes

### Error 2025-09-08T10:08:40+00:00
```
2025-09-08T10:08:40.3202820Z === RUN   TestAccSearchDeploymentAPI_basic
2025-09-08T10:08:40.3204430Z === CONT  TestAccSearchDeploymentAPI_basic
2025-09-08T10:08:40.3220983Z    test_name=TestAccSearchDeploymentAPI_basic
2025-09-08T10:08:40.3223315Z     resource_test.go:25: Step 2/3 error: Error running pre-apply plan: exit status 1
2025-09-08T10:08:40.3224091Z         
2025-09-08T10:08:40.3224717Z         Error: error when getting project properties after create
2025-09-08T10:08:40.3225259Z         
2025-09-08T10:08:40.3225777Z           with mongodbatlas_project.test,
2025-09-08T10:08:40.3226767Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-08T10:08:40.3227536Z           13: 	resource "mongodbatlas_project" "test" {
2025-09-08T10:08:40.3227835Z         
2025-09-08T10:08:40.3228281Z         error getting project (68bea30e341d8a498776940a): error getting project's
2025-09-08T10:08:40.3228735Z         limits (68bea30e341d8a498776940a):
2025-09-08T10:08:40.3229301Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea30e341d8a498776940a/limits
2025-09-08T10:08:40.3229951Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T10:08:40.3230511Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T10:08:40.3230904Z         BadRequestDetail: 
2025-09-08T10:08:40.3231210Z --- FAIL: TestAccSearchDeploymentAPI_basic (2074.92s)
```

  - PASS 47 minutes
- 2025-09-09 PASS 52 minutes
- 2025-09-10 PASS 47 minutes
- 2025-09-11 PASS 40 minutes
- 2025-09-12 PASS 37 minutes
- 2025-09-13 PASS 42 minutes
- 2025-09-14

### Error 2025-09-14T00:54:20+00:00
```
2025-09-14T00:54:20.5158901Z === RUN   TestAccSearchDeploymentAPI_basic
2025-09-14T00:54:20.5159505Z === CONT  TestAccSearchDeploymentAPI_basic
2025-09-14T00:54:20.5171824Z   
2025-09-14T00:54:20.5172192Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:54:20.5172539Z         
2025-09-14T00:54:20.5172897Z         Error: error when getting project properties after create
2025-09-14T00:54:20.5173207Z         
2025-09-14T00:54:20.5173484Z           with mongodbatlas_project.test,
2025-09-14T00:54:20.5174368Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-14T00:54:20.5174884Z           13: 	resource "mongodbatlas_project" "test" {
2025-09-14T00:54:20.5175155Z         
2025-09-14T00:54:20.5175569Z         error getting project (68c60cb71411d835e95b5ef9): error getting project's
2025-09-14T00:54:20.5176003Z         limits (68c60cb71411d835e95b5ef9):
2025-09-14T00:54:20.5176544Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb71411d835e95b5ef9/limits
2025-09-14T00:54:20.5177174Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:54:20.5177727Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:54:20.5178097Z         BadRequestDetail: 
2025-09-14T00:54:20.5178386Z --- FAIL: TestAccSearchDeploymentAPI_basic (34.34s)
```

- 2025-09-15
  - PASS 32 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:45:40+00:00
```
2025-09-15T06:45:40.0015767Z === RUN   TestAccSearchDeploymentAPI_basic
2025-09-15T06:45:40.0017038Z === CONT  TestAccSearchDeploymentAPI_basic
2025-09-15T06:45:40.0039370Z   
2025-09-15T06:45:40.0040036Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:45:40.0040648Z         
2025-09-15T06:45:40.0041334Z         Error: error when getting project properties after create
2025-09-15T06:45:40.0041897Z         
2025-09-15T06:45:40.0042419Z           with mongodbatlas_project.test,
2025-09-15T06:45:40.0043488Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-15T06:45:40.0044428Z           13: 	resource "mongodbatlas_project" "test" {
2025-09-15T06:45:40.0044927Z         
2025-09-15T06:45:40.0045730Z         error getting project (68c7b0c9fe60767b7f9b3f45): error getting project's
2025-09-15T06:45:40.0046699Z         limits (68c7b0c9fe60767b7f9b3f45):
2025-09-15T06:45:40.0047702Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0c9fe60767b7f9b3f45/limits
2025-09-15T06:45:40.0048890Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:45:40.0049935Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:45:40.0050614Z         BadRequestDetail: 
2025-09-15T06:45:40.0051124Z --- FAIL: TestAccSearchDeploymentAPI_basic (34.01s)
```

- 2025-09-16 PASS 52 minutes
- 2025-09-17 PASS 39 minutes
- 2025-09-18 PASS 49 minutes
- 2025-09-19 PASS 38 minutes
- 2025-09-20 PASS 35 minutes
- 2025-09-21

### Error 2025-09-21T00:58:20+00:00
```
2025-09-21T00:58:20.6436570Z === RUN   TestAccSearchDeploymentAPI_basic
2025-09-21T00:58:20.6437638Z === CONT  TestAccSearchDeploymentAPI_basic
2025-09-21T00:58:20.6460561Z    test_step_number=1 test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/c682f61b-85ce-45dd-b7dd-3f2de9366661/terraform test_working_directory=/tmp/plugintest402196793
2025-09-21T00:58:20.6462816Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:58:20.6474814Z         
2025-09-21T00:58:20.6475521Z         Error: error when getting project properties after create
2025-09-21T00:58:20.6476123Z         
2025-09-21T00:58:20.6476681Z           with mongodbatlas_project.test,
2025-09-21T00:58:20.6477968Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-21T00:58:20.6478945Z           13: 	resource "mongodbatlas_project" "test" {
2025-09-21T00:58:20.6479461Z         
2025-09-21T00:58:20.6480276Z         error getting project (68cf4758bd1cb41a3e707907): error getting project's
2025-09-21T00:58:20.6481113Z         limits (68cf4758bd1cb41a3e707907):
2025-09-21T00:58:20.6482340Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4758bd1cb41a3e707907/limits
2025-09-21T00:58:20.6483561Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:58:20.6484612Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:58:20.6485314Z         BadRequestDetail: 
2025-09-21T00:58:20.6485836Z --- FAIL: TestAccSearchDeploymentAPI_basic (33.87s)
```

- 2025-09-22 PASS 35 minutes
- 2025-09-23 PASS 39 minutes
- 2025-09-24 PASS 37 minutes
- 2025-09-25 PASS 41 minutes
- 2025-09-26 PASS 40 minutes
- 2025-09-27 PASS 43 minutes
- 2025-09-28 PASS 45 minutes
- 2025-09-29 PASS 42 minutes
- 2025-09-30
  - PASS 40 minutes
  - PASS 39 minutes
  - PASS 37 minutes
  - PASS 34 minutes
- 2025-10-01
  - FAIL 2 hours

### Error 2025-10-01T02:37:10+00:00
```
2025-10-01T02:37:10.2994139Z === RUN   TestAccSearchDeploymentAPI_basic
2025-10-01T02:37:10.2995397Z === CONT  TestAccSearchDeploymentAPI_basic
2025-10-01T02:37:10.3010563Z    test_name=TestAccSearchDeploymentAPI_basic
2025-10-01T02:37:10.3011715Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-10-01T02:37:10.3012389Z         
2025-10-01T02:37:10.3013005Z         Error: Error waiting for changes in Create
2025-10-01T02:37:10.3013538Z         
2025-10-01T02:37:10.3014226Z           with mongodbatlas_search_deployment_api.test,
2025-10-01T02:37:10.3015787Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2025-10-01T02:37:10.3016992Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2025-10-01T02:37:10.3017586Z         
2025-10-01T02:37:10.3018414Z         unexpected state 'DELETED', wanted target 'IDLE'. last error: %!s(<nil>)
2025-10-01T02:37:10.3037606Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/ead093b4-6058-4515-9471-772c509f4ab7/terraform test_working_directory=/tmp/plugintest2274708850 test_step_number=1
2025-10-01T02:37:10.3039610Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T02:37:10.3040379Z         
2025-10-01T02:37:10.3040920Z         Error: error when destroying resource
2025-10-01T02:37:10.3041433Z         
2025-10-01T02:37:10.3042268Z         error deleting project (68dc76260c72c45ec9a9d4e2):
2025-10-01T02:37:10.3043359Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc76260c72c45ec9a9d4e2
2025-10-01T02:37:10.3044265Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-01T02:37:10.3045296Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2025-10-01T02:37:10.3046442Z         there are active managed deployments. Reason: Conflict. Params: [],
2025-10-01T02:37:10.3047187Z         BadRequestDetail: 
2025-10-01T02:37:10.3047733Z --- FAIL: TestAccSearchDeploymentAPI_basic (7600.19s)
```

  - PASS an hour
  - PASS 2 hours
  - PASS an hour
  - PASS 53 minutes
  - PASS 36 minutes
  - PASS 32 minutes
  - PASS 32 minutes
- 2025-10-02 PASS 56 minutes