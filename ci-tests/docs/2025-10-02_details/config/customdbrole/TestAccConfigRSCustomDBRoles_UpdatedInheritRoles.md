# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c98704811492b52eb4/limits | qa | flaky_500 | 34.00s
[2025-09-08 09:36](#error-2025-09-08t0936070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2ae341d8a4987762b94/limits | qa | flaky_500 | 34.02s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3e1411d835e95b2d50/limits | qa | flaky_500 | 33.08s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b046fe60767b7f9b0ebb/limits | qa | flaky_500 | 33.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 28 seconds
- 2025-09-04 PASS 30 seconds
- 2025-09-05 PASS 29 seconds
- 2025-09-06 PASS 38 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3634231Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-07T00:31:52.3635377Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-07T00:31:52.3670641Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-07T00:31:52.3671248Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:31:52.3671645Z         
2025-09-07T00:31:52.3672024Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3672345Z         
2025-09-07T00:31:52.3672635Z           with mongodbatlas_project.test,
2025-09-07T00:31:52.3673211Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:31:52.3673732Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:31:52.3674024Z         
2025-09-07T00:31:52.3674462Z         error getting project (68bcd1c98704811492b52eb4): error getting project's
2025-09-07T00:31:52.3674901Z         limits (68bcd1c98704811492b52eb4):
2025-09-07T00:31:52.3675457Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c98704811492b52eb4/limits
2025-09-07T00:31:52.3676110Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3676678Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3677067Z         BadRequestDetail: 
2025-09-07T00:31:52.3677417Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (34.00s)
```

- 2025-09-08
  - PASS 34 seconds
  - FAIL 34 seconds

### Error 2025-09-08T09:36:07+00:00
```
2025-09-08T09:36:07.0319148Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-08T09:36:07.0320651Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-08T09:36:07.0334947Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-08T09:36:07.0335518Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:36:07.0335919Z         
2025-09-08T09:36:07.0336303Z         Error: error when getting project properties after create
2025-09-08T09:36:07.0336635Z         
2025-09-08T09:36:07.0336930Z           with mongodbatlas_project.test,
2025-09-08T09:36:07.0337513Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:36:07.0338052Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:36:07.0338575Z         
2025-09-08T09:36:07.0339036Z         error getting project (68bea2ae341d8a4987762b94): error getting project's
2025-09-08T09:36:07.0339502Z         limits (68bea2ae341d8a4987762b94):
2025-09-08T09:36:07.0340083Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2ae341d8a4987762b94/limits
2025-09-08T09:36:07.0340755Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:36:07.0341322Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:36:07.0341708Z         BadRequestDetail: 
2025-09-08T09:36:07.0342064Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (34.24s)
```

  - PASS 32 seconds
- 2025-09-09 PASS 34 seconds
- 2025-09-10 PASS 27 seconds
- 2025-09-11 PASS 30 seconds
- 2025-09-12 PASS 27 seconds
- 2025-09-13 PASS 39 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4456305Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-14T00:31:20.4458440Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-14T00:31:20.4473291Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-14T00:31:20.4473811Z     resource_test.go:560: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:31:20.4474163Z         
2025-09-14T00:31:20.4474529Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4474848Z         
2025-09-14T00:31:20.4475136Z           with mongodbatlas_project.test,
2025-09-14T00:31:20.4475708Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:31:20.4476230Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:31:20.4476515Z         
2025-09-14T00:31:20.4476946Z         error getting project (68c60c3e1411d835e95b2d50): error getting project's
2025-09-14T00:31:20.4477390Z         limits (68c60c3e1411d835e95b2d50):
2025-09-14T00:31:20.4478120Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3e1411d835e95b2d50/limits
2025-09-14T00:31:20.4478767Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4479328Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4479707Z         BadRequestDetail: 
2025-09-14T00:31:20.4480058Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (33.75s)
```

- 2025-09-15
  - PASS 26 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.1975017Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-15T06:23:28.1977597Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-15T06:23:28.2004665Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-15T06:23:28.2005578Z     resource_test.go:560: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:23:28.2006189Z         
2025-09-15T06:23:28.2006838Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2007390Z         
2025-09-15T06:23:28.2007893Z           with mongodbatlas_project.test,
2025-09-15T06:23:28.2008944Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:23:28.2009899Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:23:28.2010396Z         
2025-09-15T06:23:28.2011175Z         error getting project (68c7b046fe60767b7f9b0ebb): error getting project's
2025-09-15T06:23:28.2011976Z         limits (68c7b046fe60767b7f9b0ebb):
2025-09-15T06:23:28.2013107Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b046fe60767b7f9b0ebb/limits
2025-09-15T06:23:28.2014294Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2015308Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2015978Z         BadRequestDetail: 
2025-09-15T06:23:28.2036200Z    test_step_number=1 test_name=TestAccConfigRSCustomDBRoles_MultipleCustomRoles test_terraform_path=/home/runner/work/_temp/daaaf918-dc0f-4c8a-9f19-644c2f5cfb8b/terraform test_working_directory=/tmp/plugintest4129428150
2025-09-15T06:23:28.2046408Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (33.09s)
```

- 2025-09-16 PASS 30 seconds
- 2025-09-17 PASS 38 seconds
- 2025-09-18 PASS 32 seconds
- 2025-09-19 PASS 30 seconds
- 2025-09-20 PASS 34 seconds
- 2025-09-21 PASS 31 seconds
- 2025-09-22 PASS 30 seconds
- 2025-09-23 PASS 26 seconds
- 2025-09-24 PASS 28 seconds
- 2025-09-25 PASS 36 seconds
- 2025-09-26 PASS 31 seconds
- 2025-09-27 PASS 33 seconds
- 2025-09-28 PASS 26 seconds
- 2025-09-29 PASS 27 seconds
- 2025-09-30
  - PASS 29 seconds
  - PASS 33 seconds
  - PASS 27 seconds
- 2025-10-01
  - PASS 27 seconds
  - PASS 28 seconds
  - PASS 30 seconds
  - PASS 27 seconds
  - PASS 26 seconds
  - PASS 27 seconds
  - PASS 29 seconds
  - PASS 28 seconds
  - PASS 27 seconds
- 2025-10-02 PASS 35 seconds