# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:47](#error-2025-09-07t0047560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d3df5af52d2d4d5423/dataFederation/test-acc-tf-6248391563072183713 | qa | flaky_500 | 119.03s
[2025-09-14 00:41](#error-2025-09-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c45d444485797b21bb4/limits | qa | flaky_500 | 49.03s
[2025-09-15 06:33](#error-2025-09-15t0633000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04ffe60767b7f9b1b29/limits | qa | flaky_500 | 48.06s
[2025-09-21 00:48](#error-2025-09-21t0048040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46f15ccc8c4417189b0e/dataFederation/test-acc-tf-6527420720438060517 | qa | flaky_500 | 147.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07

### Error 2025-09-07T00:47:56+00:00
```
2025-09-07T00:47:56.6566059Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-09-07T00:47:56.6573883Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-09-07T00:47:56.6755873Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-09-07T00:47:56.6756464Z     resource_federated_database_instance_test.go:83: Step 2/2 error running import: exit status 1
2025-09-07T00:47:56.6756908Z         
2025-09-07T00:47:56.6759212Z         Error: couldn't import data federated instance (test-acc-tf-6248391563072183713) for project (68bcd1d3df5af52d2d4d5423), error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d3df5af52d2d4d5423/dataFederation/test-acc-tf-6248391563072183713 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6760681Z         
2025-09-07T00:47:56.6761146Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (119.30s)
```

- 2025-09-08
  - PASS a minute
  - PASS 2 minutes
  - PASS a minute
- 2025-09-09 PASS a minute
- 2025-09-10 PASS a minute
- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS 2 minutes
- 2025-09-14

### Error 2025-09-14T00:41:18+00:00
```
2025-09-14T00:41:18.3204559Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-09-14T00:41:18.3215909Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-09-14T00:41:18.3318524Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-09-14T00:41:18.3319190Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:18.3319669Z         
2025-09-14T00:41:18.3320058Z         Error: error when getting project properties after create
2025-09-14T00:41:18.3320398Z         
2025-09-14T00:41:18.3320712Z           with mongodbatlas_project.test,
2025-09-14T00:41:18.3321319Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:18.3321867Z           68: resource "mongodbatlas_project" "test" {
2025-09-14T00:41:18.3322168Z         
2025-09-14T00:41:18.3322624Z         error getting project (68c60c45d444485797b21bb4): error getting project's
2025-09-14T00:41:18.3323091Z         limits (68c60c45d444485797b21bb4):
2025-09-14T00:41:18.3323881Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c45d444485797b21bb4/limits
2025-09-14T00:41:18.3324568Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:18.3325163Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:18.3325567Z         BadRequestDetail: 
2025-09-14T00:41:18.3338762Z   
2025-09-14T00:41:18.3346702Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (49.35s)
```

- 2025-09-15
  - PASS a minute
  - FAIL 48 seconds

### Error 2025-09-15T06:33:00+00:00
```
2025-09-15T06:33:00.5996544Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-09-15T06:33:00.6004515Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-09-15T06:33:00.6118329Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-09-15T06:33:00.6118940Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:00.6119389Z         
2025-09-15T06:33:00.6119762Z         Error: error when getting project properties after create
2025-09-15T06:33:00.6120080Z         
2025-09-15T06:33:00.6120370Z           with mongodbatlas_project.test,
2025-09-15T06:33:00.6120959Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:00.6121490Z           68: resource "mongodbatlas_project" "test" {
2025-09-15T06:33:00.6121769Z         
2025-09-15T06:33:00.6122211Z         error getting project (68c7b04ffe60767b7f9b1b29): error getting project's
2025-09-15T06:33:00.6122671Z         limits (68c7b04ffe60767b7f9b1b29):
2025-09-15T06:33:00.6123243Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04ffe60767b7f9b1b29/limits
2025-09-15T06:33:00.6123901Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:00.6124477Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:00.6124857Z         BadRequestDetail: 
2025-09-15T06:33:00.6137787Z   
2025-09-15T06:33:00.6145502Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (48.65s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21

### Error 2025-09-21T00:48:04+00:00
```
2025-09-21T00:48:04.2559272Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-09-21T00:48:04.2565222Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-09-21T00:48:04.2617550Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-09-21T00:48:04.2618156Z     resource_federated_database_instance_test.go:83: Step 2/2 error running import: exit status 1
2025-09-21T00:48:04.2618587Z         
2025-09-21T00:48:04.2620552Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-6527420720438060517): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46f15ccc8c4417189b0e/dataFederation/test-acc-tf-6527420720438060517 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-21T00:48:04.2621908Z         
2025-09-21T00:48:04.2633431Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-21T00:48:04.2633849Z         
2025-09-21T00:48:04.2636097Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-6527420720438060517): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46f15ccc8c4417189b0e/dataFederation/test-acc-tf-6527420720438060517 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-21T00:48:04.2637476Z         
2025-09-21T00:48:04.2637749Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (147.39s)
```

- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute