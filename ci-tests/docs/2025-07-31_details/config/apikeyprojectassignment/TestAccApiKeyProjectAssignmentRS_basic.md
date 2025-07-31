# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 24 TestRuns in dev, qa from 2025-07-10 to 2025-07-31 from master branch: 1 unique tests, PASS(x 21) FAIL(x 3)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 00:31](#error-2025-07-10t0031000000) | CheckFailure for api_key_project_assignments.plural at Step: 2 Checks: 10 | dev | dangling_resource | 8.04s
[2025-07-10 13:09](#error-2025-07-10t1309210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb5f006d8d55bb9e785e/limits | qa | flaky_500 | 33.09s
[2025-07-27 00:36](#error-2025-07-27t0036100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857437ef1f7377717aa219/limits | qa | flaky_500 | 35.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02: MISSING
- 2025-07-03: MISSING
- 2025-07-04: MISSING
- 2025-07-05: MISSING
- 2025-07-06: MISSING
- 2025-07-07: MISSING
- 2025-07-08: MISSING
- 2025-07-09: MISSING
- 2025-07-10
  - FAIL 8 seconds

### Error 2025-07-10T00:31:00+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-07-10T00:31:00.234000+00:00-TestAccApiKeyProjectAssignmentRS_basic',confidence=1.0,ts_when='21 days ago')
CheckFailure for api_key_project_assignments.plural at Step: 2 Checks: 10
```
2025-07-10T00:31:00.2342001Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-07-10T00:31:00.2343185Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-07-10T00:31:00.2347994Z     resource_test.go:29: Step 2/3 error: Check failed: Check 10/13 error: data.mongodbatlas_api_key_project_assignments.plural: Attribute 'results.0.roles.0' expected "GROUP_READ_ONLY", got "GROUP_OWNER"
2025-07-10T00:31:00.2348802Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (8.40s)
```

  - FAIL 33 seconds

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.2179542Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-07-10T13:09:21.2180224Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-07-10T13:09:21.2192641Z   
2025-07-10T13:09:21.2193006Z     resource_test.go:29: Step 1/3 error: Error running apply: exit status 1
2025-07-10T13:09:21.2193364Z         
2025-07-10T13:09:21.2193734Z         Error: error when getting project properties after create
2025-07-10T13:09:21.2194054Z         
2025-07-10T13:09:21.2194345Z           with mongodbatlas_project.test,
2025-07-10T13:09:21.2194930Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-07-10T13:09:21.2195465Z           18: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:09:21.2195754Z         
2025-07-10T13:09:21.2196196Z         error getting project (686fbb5f006d8d55bb9e785e): error getting project's
2025-07-10T13:09:21.2196756Z         limits (686fbb5f006d8d55bb9e785e):
2025-07-10T13:09:21.2197317Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb5f006d8d55bb9e785e/limits
2025-07-10T13:09:21.2197968Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:09:21.2198534Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:09:21.2198913Z         BadRequestDetail: 
2025-07-10T13:09:21.2199226Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (33.91s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 9 seconds
- 2025-07-13 PASS 28 seconds
- 2025-07-14 PASS 14 seconds
- 2025-07-15 PASS 11 seconds
- 2025-07-16 PASS 13 seconds
- 2025-07-17 PASS 12 seconds
- 2025-07-18 PASS 12 seconds
- 2025-07-19 PASS 11 seconds
- 2025-07-20 PASS 9 seconds
- 2025-07-21 PASS 14 seconds
- 2025-07-22 PASS 12 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 19 seconds
- 2025-07-24 PASS 12 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 11 seconds
- 2025-07-27

### Error 2025-07-27T00:36:10+00:00
```
2025-07-27T00:36:10.4988155Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-07-27T00:36:10.4989416Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-07-27T00:36:10.5008812Z   
2025-07-27T00:36:10.5009221Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-07-27T00:36:10.5009585Z         
2025-07-27T00:36:10.5009978Z         Error: error when getting project properties after create
2025-07-27T00:36:10.5010308Z         
2025-07-27T00:36:10.5010620Z           with mongodbatlas_project.test,
2025-07-27T00:36:10.5011209Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-07-27T00:36:10.5011745Z           18: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:36:10.5012031Z         
2025-07-27T00:36:10.5012478Z         error getting project (68857437ef1f7377717aa219): error getting project's
2025-07-27T00:36:10.5012920Z         limits (68857437ef1f7377717aa219):
2025-07-27T00:36:10.5013483Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857437ef1f7377717aa219/limits
2025-07-27T00:36:10.5014144Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:36:10.5014713Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:36:10.5015095Z         BadRequestDetail: 
2025-07-27T00:36:10.5015413Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (35.09s)
```

- 2025-07-28 PASS 15 seconds
- 2025-07-29 PASS 11 seconds
- 2025-07-30 PASS 9 seconds
- 2025-07-31 PASS 20 seconds