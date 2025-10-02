# autogen/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:59](#error-2025-09-07t0059320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd23b8704811492b57b4a/limits | qa | flaky_500 | 35.08s
[2025-09-14 00:54](#error-2025-09-14t0054200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c9bd444485797b237d1/limits | qa | flaky_500 | 33.01s
[2025-09-15 06:45](#error-2025-09-15t0645390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0aed444485797b604c0/limits | qa | flaky_500 | 34.00s
[2025-09-21 00:58](#error-2025-09-21t0058200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4740bd1cb41a3e7066b9/limits | qa | flaky_500 | 21.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 12 seconds
- 2025-09-05 PASS 12 seconds
- 2025-09-06 PASS 11 seconds
- 2025-09-07

### Error 2025-09-07T00:59:32+00:00
```
2025-09-07T00:59:32.5330458Z === RUN   TestAccCustomDBRoleAPI_basic
2025-09-07T00:59:32.5331131Z === CONT  TestAccCustomDBRoleAPI_basic
2025-09-07T00:59:32.5344884Z   
2025-09-07T00:59:32.5345387Z     resource_test.go:25: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:59:32.5345839Z         
2025-09-07T00:59:32.5346263Z         Error: error when getting project properties after create
2025-09-07T00:59:32.5346629Z         
2025-09-07T00:59:32.5346966Z           with mongodbatlas_project.test,
2025-09-07T00:59:32.5347586Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:59:32.5348138Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:59:32.5348465Z         
2025-09-07T00:59:32.5348941Z         error getting project (68bcd23b8704811492b57b4a): error getting project's
2025-09-07T00:59:32.5349428Z         limits (68bcd23b8704811492b57b4a):
2025-09-07T00:59:32.5350033Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd23b8704811492b57b4a/limits
2025-09-07T00:59:32.5350732Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:59:32.5351331Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:59:32.5351754Z         BadRequestDetail: 
2025-09-07T00:59:32.5352207Z --- FAIL: TestAccCustomDBRoleAPI_basic (35.77s)
```

- 2025-09-08
  - PASS 13 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-09-09 PASS 7 seconds
- 2025-09-10 PASS 7 seconds
- 2025-09-11 PASS 9 seconds
- 2025-09-12 PASS 15 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:54:20+00:00
```
2025-09-14T00:54:20.5121302Z === RUN   TestAccCustomDBRoleAPI_basic
2025-09-14T00:54:20.5121886Z === CONT  TestAccCustomDBRoleAPI_basic
2025-09-14T00:54:20.5134411Z   
2025-09-14T00:54:20.5134817Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:54:20.5135175Z         
2025-09-14T00:54:20.5135537Z         Error: error when getting project properties after create
2025-09-14T00:54:20.5135846Z         
2025-09-14T00:54:20.5136126Z           with mongodbatlas_project.test,
2025-09-14T00:54:20.5136683Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:54:20.5137190Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:54:20.5137460Z         
2025-09-14T00:54:20.5137879Z         error getting project (68c60c9bd444485797b237d1): error getting project's
2025-09-14T00:54:20.5138314Z         limits (68c60c9bd444485797b237d1):
2025-09-14T00:54:20.5138848Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c9bd444485797b237d1/limits
2025-09-14T00:54:20.5139479Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:54:20.5140022Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:54:20.5140546Z         BadRequestDetail: 
2025-09-14T00:54:20.5140839Z --- FAIL: TestAccCustomDBRoleAPI_basic (33.12s)
```

- 2025-09-15
  - PASS 13 seconds
  - FAIL 34 seconds

### Error 2025-09-15T06:45:39+00:00
```
2025-09-15T06:45:39.9948395Z === RUN   TestAccCustomDBRoleAPI_basic
2025-09-15T06:45:39.9949387Z === CONT  TestAccCustomDBRoleAPI_basic
2025-09-15T06:45:39.9971099Z   
2025-09-15T06:45:39.9971775Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:45:39.9972395Z         
2025-09-15T06:45:39.9973084Z         Error: error when getting project properties after create
2025-09-15T06:45:39.9973647Z         
2025-09-15T06:45:39.9974169Z           with mongodbatlas_project.test,
2025-09-15T06:45:39.9975248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:45:39.9976382Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:45:39.9976908Z         
2025-09-15T06:45:39.9977721Z         error getting project (68c7b0aed444485797b604c0): error getting project's
2025-09-15T06:45:39.9978540Z         limits (68c7b0aed444485797b604c0):
2025-09-15T06:45:39.9979590Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0aed444485797b604c0/limits
2025-09-15T06:45:39.9980796Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:45:39.9981837Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:45:39.9982701Z         BadRequestDetail: 
2025-09-15T06:45:39.9983195Z --- FAIL: TestAccCustomDBRoleAPI_basic (34.03s)
```

- 2025-09-16 PASS 7 seconds
- 2025-09-17 PASS 13 seconds
- 2025-09-18 PASS 8 seconds
- 2025-09-19 PASS 9 seconds
- 2025-09-20 PASS 8 seconds
- 2025-09-21

### Error 2025-09-21T00:58:20+00:00
```
2025-09-21T00:58:20.6366177Z === RUN   TestAccCustomDBRoleAPI_basic
2025-09-21T00:58:20.6367247Z === CONT  TestAccCustomDBRoleAPI_basic
2025-09-21T00:58:20.6390273Z   
2025-09-21T00:58:20.6390966Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-09-21T00:58:20.6391783Z         
2025-09-21T00:58:20.6392484Z         Error: error when getting project properties after create
2025-09-21T00:58:20.6393079Z         
2025-09-21T00:58:20.6393616Z           with mongodbatlas_project.test,
2025-09-21T00:58:20.6394698Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:58:20.6395685Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:58:20.6396199Z         
2025-09-21T00:58:20.6397008Z         error getting project (68cf4740bd1cb41a3e7066b9): error getting project's
2025-09-21T00:58:20.6397839Z         limits (68cf4740bd1cb41a3e7066b9):
2025-09-21T00:58:20.6398873Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4740bd1cb41a3e7066b9/limits
2025-09-21T00:58:20.6400089Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:58:20.6401140Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:58:20.6402015Z         BadRequestDetail: 
2025-09-21T00:58:20.6402508Z --- FAIL: TestAccCustomDBRoleAPI_basic (21.42s)
```

- 2025-09-22 PASS 10 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 8 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 12 seconds
- 2025-09-27 PASS 7 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 10 seconds
- 2025-09-30
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 12 seconds
- 2025-10-01
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 12 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-10-02 PASS 7 seconds