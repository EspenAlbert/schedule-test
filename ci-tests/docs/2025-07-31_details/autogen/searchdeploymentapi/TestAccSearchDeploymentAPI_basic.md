# autogen/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 01:08](#error-2025-07-06t0108110000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4767267b5775b68458e/limits | qa | flaky_500 | 2054.02s
[2025-07-11 03:44](#error-2025-07-11t0344050000) |  | dev | timeout | 11507.05s
[2025-07-14 03:33](#error-2025-07-14t0333200000) |  | dev | timeout | 10805.05s
[2025-07-27 01:02](#error-2025-07-27t0102100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6885747fea884d723492026f/limits | qa | flaky_500 | 1481.09s

## Timeline
- 2025-07-01: MISSING
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
- 2025-07-10
  - PASS 34 minutes
  - PASS 31 minutes
- 2025-07-11

### Error 2025-07-11T03:44:05+00:00
```
2025-07-11T03:44:05.2348494Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-11T03:44:05.2350171Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-11T03:44:05.2369459Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/c80d0b61-4fe9-4f05-93bc-f93987bc3f58/terraform test_working_directory=/tmp/plugintest4123493297
2025-07-11T03:44:05.2372883Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-07-11T03:44:05.2373563Z         
2025-07-11T03:44:05.2374138Z         Error: Error waiting for changes in Create
2025-07-11T03:44:05.2374668Z         
2025-07-11T03:44:05.2375479Z           with mongodbatlas_search_deployment_api.test,
2025-07-11T03:44:05.2376764Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2025-07-11T03:44:05.2377938Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2025-07-11T03:44:05.2378553Z         
2025-07-11T03:44:05.2379383Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-11T03:44:05.2380113Z         timeout: 3h0m0s)
2025-07-11T03:44:05.2399105Z   
2025-07-11T03:44:05.2399938Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T03:44:05.2400697Z         
2025-07-11T03:44:05.2401216Z         Error: error when destroying resource
2025-07-11T03:44:05.2401713Z         
2025-07-11T03:44:05.2402284Z         error deleting project (68705b924f431f68780bf381):
2025-07-11T03:44:05.2403272Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b924f431f68780bf381
2025-07-11T03:44:05.2404109Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-11T03:44:05.2405214Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2025-07-11T03:44:05.2406289Z         there are active managed deployments. Reason: Conflict. Params: [],
2025-07-11T03:44:05.2406969Z         BadRequestDetail: 
2025-07-11T03:44:05.2407627Z --- FAIL: TestAccSearchDeploymentAPI_basic (11507.47s)
```

- 2025-07-12 PASS 30 minutes
- 2025-07-13 PASS 33 minutes
- 2025-07-14

### Error 2025-07-14T03:33:20+00:00
```
2025-07-14T03:33:20.6543004Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-14T03:33:20.6543851Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-14T03:33:20.6551822Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/c59f1e1f-bb77-4d81-9570-b1e79943fd89/terraform test_working_directory=/tmp/plugintest3796122558
2025-07-14T03:33:20.6552756Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-07-14T03:33:20.6553118Z         
2025-07-14T03:33:20.6554037Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:33:20.6554574Z         
2025-07-14T03:33:20.6554891Z           with mongodbatlas_advanced_cluster.test,
2025-07-14T03:33:20.6555528Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-14T03:33:20.6556113Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-07-14T03:33:20.6556420Z         
2025-07-14T03:33:20.6567573Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:33:20.6568010Z         
2025-07-14T03:33:20.6568298Z         Error: error when destroying resource
2025-07-14T03:33:20.6568569Z         
2025-07-14T03:33:20.6568902Z         error deleting project (6874504752cba864e5f11c04):
2025-07-14T03:33:20.6569463Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6874504752cba864e5f11c04
2025-07-14T03:33:20.6569946Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:33:20.6570476Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:33:20.6571091Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:33:20.6571529Z         Params: [], BadRequestDetail: 
2025-07-14T03:33:20.6571861Z --- FAIL: TestAccSearchDeploymentAPI_basic (10805.52s)
```

- 2025-07-15 PASS 39 minutes
- 2025-07-16 PASS 36 minutes
- 2025-07-17 PASS 33 minutes
- 2025-07-18 PASS 43 minutes
- 2025-07-19 PASS 30 minutes
- 2025-07-20 PASS 33 minutes
- 2025-07-21 PASS 29 minutes
- 2025-07-22 PASS 32 minutes
- 2025-07-23
  - PASS 33 minutes
  - PASS 34 minutes
- 2025-07-24 PASS 31 minutes
- 2025-07-25 PASS 34 minutes
- 2025-07-26 PASS 37 minutes
- 2025-07-27

### Error 2025-07-27T01:02:10+00:00
```
2025-07-27T01:02:10.0163416Z === RUN   TestAccSearchDeploymentAPI_basic
2025-07-27T01:02:10.0164672Z === CONT  TestAccSearchDeploymentAPI_basic
2025-07-27T01:02:10.0185183Z    test_working_directory=/tmp/plugintest3048976563 test_terraform_path=/home/runner/work/_temp/802fbb90-eac9-4a38-af70-0e2b36227570/terraform
2025-07-27T01:02:10.0186673Z     resource_test.go:25: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:02:10.0187360Z         
2025-07-27T01:02:10.0188011Z         Error: error when getting project properties after create
2025-07-27T01:02:10.0188547Z         
2025-07-27T01:02:10.0189034Z           with mongodbatlas_project.test,
2025-07-27T01:02:10.0190044Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-27T01:02:10.0190946Z           13: 	resource "mongodbatlas_project" "test" {
2025-07-27T01:02:10.0191424Z         
2025-07-27T01:02:10.0192167Z         error getting project (6885747fea884d723492026f): error getting project's
2025-07-27T01:02:10.0192924Z         limits (6885747fea884d723492026f):
2025-07-27T01:02:10.0193880Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6885747fea884d723492026f/limits
2025-07-27T01:02:10.0195001Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:02:10.0196107Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:02:10.0196762Z         BadRequestDetail: 
2025-07-27T01:02:10.0197251Z --- FAIL: TestAccSearchDeploymentAPI_basic (1481.90s)
```

- 2025-07-28 PASS 34 minutes
- 2025-07-29 PASS 33 minutes
- 2025-07-30 PASS 37 minutes
- 2025-07-31 PASS 43 minutes