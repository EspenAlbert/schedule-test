# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3ed444485797b20bc5/limits | qa | flaky_500 | 34.06s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b047fe60767b7f9b0f1a/limits | qa | flaky_500 | 33.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 30 seconds
- 2025-09-04 PASS 31 seconds
- 2025-09-05 PASS 29 seconds
- 2025-09-06 PASS 31 seconds
- 2025-09-07 PASS 26 seconds
- 2025-09-08
  - PASS 35 seconds
  - PASS a minute
  - PASS 31 seconds
- 2025-09-09 PASS 35 seconds
- 2025-09-10 PASS 28 seconds
- 2025-09-11 PASS 34 seconds
- 2025-09-12 PASS 29 seconds
- 2025-09-13 PASS 35 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4455529Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-14T00:31:20.4458835Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-14T00:31:20.4492719Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-14T00:31:20.4493480Z     resource_test.go:405: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:31:20.4494173Z         
2025-09-14T00:31:20.4495045Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4495384Z         
2025-09-14T00:31:20.4495673Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4496253Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4496780Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4497065Z         
2025-09-14T00:31:20.4497497Z         error getting project (68c60c3ed444485797b20bc5): error getting project's
2025-09-14T00:31:20.4498261Z         limits (68c60c3ed444485797b20bc5):
2025-09-14T00:31:20.4498819Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3ed444485797b20bc5/limits
2025-09-14T00:31:20.4499478Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4500047Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4500423Z         BadRequestDetail: 
2025-09-14T00:31:20.4500779Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (34.65s)
```

- 2025-09-15
  - PASS 28 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.1973637Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-15T06:23:28.1978877Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-15T06:23:28.2037412Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-15T06:23:28.2038286Z     resource_test.go:405: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:23:28.2038749Z         
2025-09-15T06:23:28.2039227Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2039751Z         
2025-09-15T06:23:28.2040122Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2040862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2041535Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2041888Z         
2025-09-15T06:23:28.2042617Z         error getting project (68c7b047fe60767b7f9b0f1a): error getting project's
2025-09-15T06:23:28.2043197Z         limits (68c7b047fe60767b7f9b0f1a):
2025-09-15T06:23:28.2043907Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b047fe60767b7f9b0f1a/limits
2025-09-15T06:23:28.2044744Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2045476Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2045964Z         BadRequestDetail: 
2025-09-15T06:23:28.2047002Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (33.13s)
```

- 2025-09-16 PASS 28 seconds
- 2025-09-17 PASS 37 seconds
- 2025-09-18 PASS 33 seconds
- 2025-09-19 PASS 30 seconds
- 2025-09-20 PASS 35 seconds
- 2025-09-21 PASS 32 seconds
- 2025-09-22 PASS 27 seconds
- 2025-09-23 PASS 27 seconds
- 2025-09-24 PASS 29 seconds
- 2025-09-25 PASS 33 seconds
- 2025-09-26 PASS 33 seconds
- 2025-09-27 PASS 34 seconds
- 2025-09-28 PASS 26 seconds
- 2025-09-29 PASS 27 seconds
- 2025-09-30
  - PASS 28 seconds
  - PASS 32 seconds
  - PASS 28 seconds
- 2025-10-01
  - PASS 28 seconds
  - PASS 29 seconds
  - PASS 29 seconds
  - PASS 27 seconds
  - PASS 27 seconds
  - PASS 27 seconds
  - PASS 29 seconds
  - PASS 29 seconds
  - PASS 27 seconds
- 2025-10-02 PASS 34 seconds