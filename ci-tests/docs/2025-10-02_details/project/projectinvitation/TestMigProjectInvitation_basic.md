# project/projectinvitation/TestMigProjectInvitation_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 01:13](#error-2025-09-14t0113050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c6e1411d835e95b49dd/limits | qa | flaky_500 | 36.01s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b073fe60767b7f9b29ca/limits | qa | flaky_500 | 34.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 8 seconds
- 2025-09-05 PASS 9 seconds
- 2025-09-06 PASS 13 seconds
- 2025-09-07 PASS 10 seconds
- 2025-09-08
  - PASS 9 seconds
  - PASS 32 seconds
  - PASS 9 seconds
- 2025-09-09 PASS 15 seconds
- 2025-09-10 PASS 13 seconds
- 2025-09-11 PASS 13 seconds
- 2025-09-12 PASS 16 seconds
- 2025-09-13 PASS 14 seconds
- 2025-09-14

### Error 2025-09-14T01:13:05+00:00
```
2025-09-14T01:13:05.0072720Z === RUN   TestMigProjectInvitation_basic
2025-09-14T01:13:05.0080412Z    test_name=TestMigProjectInvitation_basic
2025-09-14T01:13:05.0081185Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:05.0081677Z         
2025-09-14T01:13:05.0082071Z         Error: error when getting project properties after create
2025-09-14T01:13:05.0082522Z         
2025-09-14T01:13:05.0082825Z           with mongodbatlas_project.test,
2025-09-14T01:13:05.0083437Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:05.0084008Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:05.0084306Z         
2025-09-14T01:13:05.0084880Z         error getting project (68c60c6e1411d835e95b49dd): error getting project's
2025-09-14T01:13:05.0085360Z         limits (68c60c6e1411d835e95b49dd):
2025-09-14T01:13:05.0085947Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c6e1411d835e95b49dd/limits
2025-09-14T01:13:05.0086638Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:05.0087263Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:05.0087682Z         BadRequestDetail: 
2025-09-14T01:13:05.0087986Z --- FAIL: TestMigProjectInvitation_basic (36.11s)
```

- 2025-09-15
  - PASS 9 seconds
  - FAIL 34 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6820999Z === RUN   TestMigProjectInvitation_basic
2025-09-15T07:06:19.6828537Z   
2025-09-15T07:06:19.6829172Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6829645Z         
2025-09-15T07:06:19.6830034Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6830364Z         
2025-09-15T07:06:19.6830667Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6831375Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6831918Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6832211Z         
2025-09-15T07:06:19.6832774Z         error getting project (68c7b073fe60767b7f9b29ca): error getting project's
2025-09-15T07:06:19.6833234Z         limits (68c7b073fe60767b7f9b29ca):
2025-09-15T07:06:19.6833809Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b073fe60767b7f9b29ca/limits
2025-09-15T07:06:19.6834475Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6835054Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6835449Z         BadRequestDetail: 
2025-09-15T07:06:19.6835747Z --- FAIL: TestMigProjectInvitation_basic (34.78s)
```

- 2025-09-16 PASS 13 seconds
- 2025-09-17 PASS 12 seconds
- 2025-09-18 PASS 15 seconds
- 2025-09-19 PASS 13 seconds
- 2025-09-20 PASS 12 seconds
- 2025-09-21 PASS 42 seconds
- 2025-09-22 PASS 14 seconds
- 2025-09-23 PASS 11 seconds
- 2025-09-24 PASS 14 seconds
- 2025-09-25 PASS 15 seconds
- 2025-09-26 PASS 12 seconds
- 2025-09-27 PASS 13 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 10 seconds
- 2025-09-30
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 9 seconds
  - PASS 14 seconds
- 2025-10-02 PASS 14 seconds