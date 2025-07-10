# autogen/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 64 TestRuns in dev, qa from 2025-05-22 to 2025-07-10 from master branch: 1 unique tests, PASS(x 61) FAIL(x 3)
Success rate: 95.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-04 03:44](#error-2025-06-04t0344260000) |  | dev | timeout | 11628.03s
[2025-06-05 00:31](#error-2025-06-05t0031370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 1.05s
[2025-07-06 01:08](#error-2025-07-06t0108110000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4767267b5775b68458e/limits | qa | flaky_500 | 2054.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12: MISSING
- 2025-04-13: MISSING
- 2025-04-14: MISSING
- 2025-04-15: MISSING
- 2025-04-16: MISSING
- 2025-04-17: MISSING
- 2025-04-18: MISSING
- 2025-04-19: MISSING
- 2025-04-20: MISSING
- 2025-04-21: MISSING
- 2025-04-22: MISSING
- 2025-04-23: MISSING
- 2025-04-24: MISSING
- 2025-04-25: MISSING
- 2025-04-26: MISSING
- 2025-04-27: MISSING
- 2025-04-28: MISSING
- 2025-04-29: MISSING
- 2025-04-30: MISSING
- 2025-05-01: MISSING
- 2025-05-02: MISSING
- 2025-05-03: MISSING
- 2025-05-04: MISSING
- 2025-05-05: MISSING
- 2025-05-06: MISSING
- 2025-05-07: MISSING
- 2025-05-08: MISSING
- 2025-05-09: MISSING
- 2025-05-10: MISSING
- 2025-05-11: MISSING
- 2025-05-12: MISSING
- 2025-05-13: MISSING
- 2025-05-14: MISSING
- 2025-05-15: MISSING
- 2025-05-16: MISSING
- 2025-05-17: MISSING
- 2025-05-18: MISSING
- 2025-05-19: MISSING
- 2025-05-20: MISSING
- 2025-05-21: MISSING
- 2025-05-22 PASS 31 minutes
- 2025-05-23 PASS 39 minutes
- 2025-05-24 PASS 34 minutes
- 2025-05-25 PASS 32 minutes
- 2025-05-26 PASS 32 minutes
- 2025-05-27 PASS 32 minutes
- 2025-05-28
  - PASS 42 minutes
  - PASS 33 minutes
- 2025-05-29 PASS 38 minutes
- 2025-05-30 PASS 2 hours
- 2025-05-31 PASS 34 minutes
- 2025-06-01
  - PASS 31 minutes
  - PASS 31 minutes
  - PASS 33 minutes
  - PASS 31 minutes
  - PASS 30 minutes
  - PASS 32 minutes
- 2025-06-02
  - PASS 32 minutes
  - PASS 32 minutes
  - PASS 30 minutes
- 2025-06-03 PASS 35 minutes
- 2025-06-04

### Error 2025-06-04T03:44:26+00:00
```
2025-06-04T03:44:26.1473330Z === RUN   TestAccSearchDeploymentAPI_basic
2025-06-04T03:44:26.1474830Z === CONT  TestAccSearchDeploymentAPI_basic
2025-06-04T03:44:26.1487189Z   
2025-06-04T03:44:26.1487637Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-06-04T03:44:26.1488038Z         
2025-06-04T03:44:26.1488369Z         Error: Error waiting for changes in Create
2025-06-04T03:44:26.1488687Z         
2025-06-04T03:44:26.1489499Z           with mongodbatlas_search_deployment_api.test,
2025-06-04T03:44:26.1490291Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2025-06-04T03:44:26.1490979Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2025-06-04T03:44:26.1491338Z         
2025-06-04T03:44:26.1491821Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-06-04T03:44:26.1492277Z         timeout: 3h0m0s)
2025-06-04T03:44:26.1503217Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/bbe3dedf-0917-4668-a09d-826a6f3436fe/terraform test_working_directory=/tmp/plugintest2151640024
2025-06-04T03:44:26.1504262Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-04T03:44:26.1504695Z         
2025-06-04T03:44:26.1504994Z         Error: error when destroying resource
2025-06-04T03:44:26.1505275Z         
2025-06-04T03:44:26.1505616Z         error deleting project (683f93ae040e946541787729):
2025-06-04T03:44:26.1506189Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/683f93ae040e946541787729
2025-06-04T03:44:26.1506683Z         DELETE: HTTP 409 Conflict (Error code:
2025-06-04T03:44:26.1507225Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2025-06-04T03:44:26.1508012Z         there are active managed deployments. Reason: Conflict. Params: [],
2025-06-04T03:44:26.1508432Z         BadRequestDetail: 
2025-06-04T03:44:26.1508747Z --- FAIL: TestAccSearchDeploymentAPI_basic (11628.33s)
```

- 2025-06-05

### Error 2025-06-05T00:31:37+00:00
```
2025-06-05T00:31:37.9473690Z === RUN   TestAccSearchDeploymentAPI_basic
2025-06-05T00:31:37.9474415Z === CONT  TestAccSearchDeploymentAPI_basic
2025-06-05T00:31:37.9484942Z    test_terraform_path=/home/runner/work/_temp/aa0d7930-11c9-407a-b338-425cf0590521/terraform test_working_directory=/tmp/plugintest3530494730 test_name=TestAccSearchDeploymentAPI_basic test_step_number=1
2025-06-05T00:31:37.9485981Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:31:37.9486359Z         
2025-06-05T00:31:37.9486782Z         Error: error creating project: test-acc-tf-p-3404692494262052651
2025-06-05T00:31:37.9487146Z         
2025-06-05T00:31:37.9487454Z           with mongodbatlas_project.test,
2025-06-05T00:31:37.9488062Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-06-05T00:31:37.9488615Z           13: 	resource "mongodbatlas_project" "test" {
2025-06-05T00:31:37.9488918Z         
2025-06-05T00:31:37.9489384Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:31:37.9490018Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:31:37.9492210Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:37.9492972Z --- FAIL: TestAccSearchDeploymentAPI_basic (1.53s)
```

- 2025-06-06 PASS 33 minutes
- 2025-06-07 PASS 32 minutes
- 2025-06-08 PASS 32 minutes
- 2025-06-09 PASS 31 minutes
- 2025-06-10 PASS 2 hours
- 2025-06-11
  - PASS 35 minutes
  - PASS 33 minutes
- 2025-06-12 PASS 34 minutes
- 2025-06-13 PASS 34 minutes
- 2025-06-14 PASS 38 minutes
- 2025-06-15 PASS 35 minutes
- 2025-06-16 PASS 39 minutes
- 2025-06-17 PASS 33 minutes
- 2025-06-18 PASS 33 minutes
- 2025-06-19 PASS 37 minutes
- 2025-06-20 PASS 33 minutes
- 2025-06-21 PASS 31 minutes
- 2025-06-22 PASS 32 minutes
- 2025-06-23 PASS 31 minutes
- 2025-06-24 PASS 32 minutes
- 2025-06-25 PASS 34 minutes
- 2025-06-26 PASS 41 minutes
- 2025-06-27 PASS 34 minutes
- 2025-06-28 PASS 33 minutes
- 2025-06-29 PASS 36 minutes
- 2025-06-30 PASS 34 minutes
- 2025-07-01
  - PASS 28 minutes
  - PASS 31 minutes
  - PASS 34 minutes
  - PASS 32 minutes
  - PASS 33 minutes
  - PASS 36 minutes
- 2025-07-02 PASS 33 minutes
- 2025-07-03 PASS 32 minutes
- 2025-07-04 PASS 36 minutes
- 2025-07-05 PASS 32 minutes
- 2025-07-06

### Error 2025-07-06T01:08:11+00:00
```
2025-07-06T01:08:11.8989975Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-06T01:08:11.8991433Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-06T01:08:11.9007018Z   
2025-07-06T01:08:11.9007475Z     resource_test.go:25: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:08:11.9008028Z         
2025-07-06T01:08:11.9008412Z         Error: error when getting project properties after create
2025-07-06T01:08:11.9008741Z         
2025-07-06T01:08:11.9009024Z           with mongodbatlas_project.test,
2025-07-06T01:08:11.9009596Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T01:08:11.9010292Z           13: 	resource "mongodbatlas_project" "test" {
2025-07-06T01:08:11.9010586Z         
2025-07-06T01:08:11.9011009Z         error getting project (6869c4767267b5775b68458e): error getting project's
2025-07-06T01:08:11.9011437Z         limits (6869c4767267b5775b68458e):
2025-07-06T01:08:11.9011984Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4767267b5775b68458e/limits
2025-07-06T01:08:11.9012618Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:08:11.9013184Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:08:11.9013556Z         BadRequestDetail: 
2025-07-06T01:08:11.9013848Z --- FAIL: TestAccSearchDeploymentAPI_basic (2054.16s)
```

- 2025-07-07 PASS 31 minutes
- 2025-07-08 PASS 33 minutes
- 2025-07-09 PASS 36 minutes
- 2025-07-10 PASS 34 minutes