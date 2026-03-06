# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 1244.05s
[2026-03-03 01:10](#error-2026-03-03t0110380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 40 minutes
- 2026-02-06 PASS 42 minutes
- 2026-02-07 PASS 39 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 43 minutes
- 2026-02-10 PASS 39 minutes
- 2026-02-11 PASS 42 minutes
- 2026-02-12 PASS 40 minutes
- 2026-02-13 PASS 41 minutes
- 2026-02-14 PASS 57 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 42 minutes
- 2026-02-17 PASS 41 minutes
- 2026-02-18 PASS 45 minutes
- 2026-02-19 PASS 58 minutes
- 2026-02-20 PASS 40 minutes
- 2026-02-21 PASS 57 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 41 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3715652Z === RUN   TestAccSearchDeploymentAPI_basic
2026-02-24T01:07:11.3716593Z === CONT  TestAccSearchDeploymentAPI_basic
2026-02-24T01:07:11.3725430Z    test_terraform_path=/home/runner/work/_temp/cac00275-aef5-443b-ac5b-c1f29c969ce5/terraform test_working_directory=/tmp/plugintest2701736687
2026-02-24T01:07:11.3726488Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:07:11.3726877Z         
2026-02-24T01:07:11.3727164Z         Error: Error calling API in Create
2026-02-24T01:07:11.3727463Z         
2026-02-24T01:07:11.3727825Z           with mongodbatlas_search_deployment_api.test,
2026-02-24T01:07:11.3728535Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-02-24T01:07:11.3729217Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-02-24T01:07:11.3729560Z         
2026-02-24T01:07:11.3730030Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:07:11.3730451Z         type
2026-02-24T01:07:11.3730730Z --- FAIL: TestAccSearchDeploymentAPI_basic (1244.47s)
```

- 2026-02-25 PASS 45 minutes
- 2026-02-26 PASS 50 minutes
- 2026-02-27 PASS 39 minutes
- 2026-02-28 PASS 38 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 40 minutes
  - PASS 41 minutes
- 2026-03-03

### Error 2026-03-03T01:10:38+00:00
```
2026-03-03T01:10:38.6160181Z === RUN   TestAccSearchDeploymentAPI_basic
2026-03-03T01:10:38.6160814Z === CONT  TestAccSearchDeploymentAPI_basic
2026-03-03T01:10:38.6190235Z   
2026-03-03T01:10:38.6190629Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-03-03T01:10:38.6190989Z         
2026-03-03T01:10:38.6191394Z         Error: error creating project: test-acc-tf-p-5821700009956017743
2026-03-03T01:10:38.6191748Z         
2026-03-03T01:10:38.6192048Z           with mongodbatlas_project.test,
2026-03-03T01:10:38.6192609Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-03-03T01:10:38.6193147Z           13: 	resource "mongodbatlas_project" "test" {
2026-03-03T01:10:38.6193446Z         
2026-03-03T01:10:38.6193886Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-03T01:10:38.6194481Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-03T01:10:38.6195037Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T01:10:38.6195431Z --- FAIL: TestAccSearchDeploymentAPI_basic (70.09s)
```

- 2026-03-04 PASS 37 minutes
- 2026-03-05 PASS 52 minutes
- 2026-03-06 PASS 44 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-02 12:13](#error-2026-03-02t1213550000) |  | qa | 978.02s

### Timeline
- 2026-02-04 PASS 34 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 40 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 42 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 39 minutes
  - PASS 34 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 37 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 43 minutes
- 2026-03-02

### Error 2026-03-02T12:13:55+00:00
```
2026-03-02T12:13:55.0617233Z === RUN   TestAccSearchDeploymentAPI_basic
2026-03-02T12:13:55.0618148Z === CONT  TestAccSearchDeploymentAPI_basic
2026-03-02T12:13:55.0631315Z    test_name=TestAccSearchDeploymentAPI_basic
2026-03-02T12:13:55.0631880Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-03-02T12:13:55.0632293Z         
2026-03-02T12:13:55.0632617Z         Error: Error waiting for changes in Create
2026-03-02T12:13:55.0632927Z         
2026-03-02T12:13:55.0633301Z           with mongodbatlas_search_deployment_api.test,
2026-03-02T12:13:55.0634027Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-03-02T12:13:55.0634740Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-03-02T12:13:55.0635091Z         
2026-03-02T12:13:55.0635538Z         unexpected state 'DELETED', wanted target 'IDLE'. last error: %!s(<nil>)
2026-03-02T12:13:55.0647004Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/7e335a9f-3a41-4819-a12b-d04715a98d17/terraform
2026-03-02T12:13:55.0647955Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-03-02T12:13:55.0648429Z         
2026-03-02T12:13:55.0648728Z         Error: error when destroying resource
2026-03-02T12:13:55.0649017Z         
2026-03-02T12:13:55.0649370Z         error deleting project (69a57b310b79a8d7dc99dd89):
2026-03-02T12:13:55.0649967Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a57b310b79a8d7dc99dd89
2026-03-02T12:13:55.0650783Z         DELETE: HTTP 409 Conflict (Error code:
2026-03-02T12:13:55.0651359Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2026-03-02T12:13:55.0652001Z         there are active managed deployments. Reason: Conflict. Params: [],
2026-03-02T12:13:55.0652448Z         BadRequestDetail: 
2026-03-02T12:13:55.0652759Z --- FAIL: TestAccSearchDeploymentAPI_basic (978.25s)
```

- 2026-03-03 PASS 38 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
