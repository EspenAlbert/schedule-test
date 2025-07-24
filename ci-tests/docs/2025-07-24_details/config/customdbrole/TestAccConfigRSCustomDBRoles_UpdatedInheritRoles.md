# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:08](#error-2025-07-10t1308210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05fd583001f9eeb70e/limits | qa | flaky_500 | 36.03s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 29 seconds
- 2025-06-26 PASS 28 seconds
- 2025-06-27 PASS 33 seconds
- 2025-06-28 PASS 27 seconds
- 2025-06-29 PASS 28 seconds
- 2025-06-30 PASS 30 seconds
- 2025-07-01
  - PASS 28 seconds
  - PASS 30 seconds
  - PASS 34 seconds
  - PASS 29 seconds
  - PASS 35 seconds
  - PASS 28 seconds
- 2025-07-02 PASS 29 seconds
- 2025-07-03 PASS 33 seconds
- 2025-07-04 PASS 28 seconds
- 2025-07-05 PASS 35 seconds
- 2025-07-06 PASS 27 seconds
- 2025-07-07 PASS 28 seconds
- 2025-07-08 PASS 33 seconds
- 2025-07-09 PASS 34 seconds
- 2025-07-10
  - PASS 28 seconds
  - FAIL 36 seconds

### Error 2025-07-10T13:08:21+00:00
```
2025-07-10T13:08:21.1104455Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-07-10T13:08:21.1133251Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-07-10T13:08:21.1344562Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-07-10T13:08:21.1345591Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:08:21.1346288Z         
2025-07-10T13:08:21.1347149Z         Error: error when getting project properties after create
2025-07-10T13:08:21.1347723Z         
2025-07-10T13:08:21.1348165Z           with mongodbatlas_project.test,
2025-07-10T13:08:21.1349048Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:21.1349992Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:21.1350480Z         
2025-07-10T13:08:21.1351241Z         error getting project (686fbb05fd583001f9eeb70e): error getting project's
2025-07-10T13:08:21.1352029Z         limits (686fbb05fd583001f9eeb70e):
2025-07-10T13:08:21.1353033Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05fd583001f9eeb70e/limits
2025-07-10T13:08:21.1354216Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:21.1355240Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:21.1355936Z         BadRequestDetail: 
2025-07-10T13:08:21.1357007Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (36.32s)
```

- 2025-07-11 PASS 31 seconds
- 2025-07-12 PASS 35 seconds
- 2025-07-13 PASS 27 seconds
- 2025-07-14 PASS 39 seconds
- 2025-07-15 PASS 33 seconds
- 2025-07-16 PASS 33 seconds
- 2025-07-17 PASS 32 seconds
- 2025-07-18 PASS 33 seconds
- 2025-07-19 PASS 32 seconds
- 2025-07-20 PASS a minute
- 2025-07-21 PASS 39 seconds
- 2025-07-22 PASS 35 seconds
- 2025-07-23
  - PASS 30 seconds
  - PASS 27 seconds
  - PASS 35 seconds
- 2025-07-24 PASS 30 seconds