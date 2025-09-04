# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:32](#error-2025-08-24t0032460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d8d4192cd1cc589fea1/limits | qa | flaky_500 | 33.03s
[2025-08-31 00:32](#error-2025-08-31t0032280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397e17e07f9709daefa5f/limits | qa | flaky_500 | 47.08s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 12 seconds
- 2025-08-09 PASS 14 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 16 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 11 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 10 seconds
- 2025-08-18 PASS 11 seconds
- 2025-08-19 PASS 15 seconds
- 2025-08-20
  - PASS 11 seconds
  - PASS 42 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 14 seconds
- 2025-08-24

### Error 2025-08-24T00:32:46+00:00
```
2025-08-24T00:32:46.4919032Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-08-24T00:32:46.4923878Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-08-24T00:32:46.4946178Z    test_terraform_path=/home/runner/work/_temp/56015ded-48c3-400f-8266-f4c4b8579b1e/terraform test_working_directory=/tmp/plugintest1489100511 test_step_number=1
2025-08-24T00:32:46.4947759Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-08-24T00:32:46.4948408Z         
2025-08-24T00:32:46.4949094Z         Error: error when getting project properties after create
2025-08-24T00:32:46.4949683Z         
2025-08-24T00:32:46.4950214Z           with mongodbatlas_project.test,
2025-08-24T00:32:46.4951277Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:46.4952260Z           18: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:46.4952788Z         
2025-08-24T00:32:46.4953609Z         error getting project (68aa5d8d4192cd1cc589fea1): error getting project's
2025-08-24T00:32:46.4954434Z         limits (68aa5d8d4192cd1cc589fea1):
2025-08-24T00:32:46.4955661Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d8d4192cd1cc589fea1/limits
2025-08-24T00:32:46.4956913Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:46.4957994Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:46.4958695Z         BadRequestDetail: 
2025-08-24T00:32:46.4959253Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (33.32s)
```

- 2025-08-25 PASS 17 seconds
- 2025-08-26 PASS 12 seconds
- 2025-08-27 PASS 13 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31

### Error 2025-08-31T00:32:28+00:00
```
2025-08-31T00:32:28.6786040Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-08-31T00:32:28.6786856Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-08-31T00:32:28.6800713Z    test_working_directory=/tmp/plugintest1309681646 test_name=TestAccApiKeyProjectAssignmentRS_basic
2025-08-31T00:32:28.6801446Z     resource_test.go:32: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:32:28.6801859Z         
2025-08-31T00:32:28.6802238Z         Error: error when getting project properties after create
2025-08-31T00:32:28.6802570Z         
2025-08-31T00:32:28.6802881Z           with mongodbatlas_project.test,
2025-08-31T00:32:28.6803463Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-08-31T00:32:28.6803992Z           18: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:32:28.6804582Z         
2025-08-31T00:32:28.6805184Z         error getting project (68b397e17e07f9709daefa5f): error getting project's
2025-08-31T00:32:28.6805645Z         limits (68b397e17e07f9709daefa5f):
2025-08-31T00:32:28.6806207Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397e17e07f9709daefa5f/limits
2025-08-31T00:32:28.6807221Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:32:28.6808131Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:32:28.6808797Z         BadRequestDetail: 
2025-08-31T00:32:28.6809554Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (47.83s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.3363955Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-09-01T00:31:13.3365220Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-09-01T00:31:13.3385621Z    test_step_number=1
2025-09-01T00:31:13.3386337Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:31:13.3386948Z         
2025-09-01T00:31:13.3387597Z         Error: error creating project: test-acc-tf-p-3717726474514779869
2025-09-01T00:31:13.3388141Z         
2025-09-01T00:31:13.3388606Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.3389763Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.3390630Z           18: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.3391084Z         
2025-09-01T00:31:13.3391833Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.3392858Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.3394049Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.3395025Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.3395680Z         BadRequestDetail: 
2025-09-01T00:31:13.3396182Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (1.89s)
```

  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 16 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds