# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029470000) |  | qa |  | 1.04s
[2025-06-05 00:30](#error-2025-06-05t0030450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.06s
[2025-06-22 00:33](#error-2025-06-22t0033390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574ef0af7a0954e84adda3/limits | qa | flaky_500 | 34.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 35 seconds
- 2025-04-13 PASS 33 seconds
- 2025-04-14 PASS 26 seconds
- 2025-04-15 PASS 36 seconds
- 2025-04-16
  - PASS 32 seconds
  - PASS 32 seconds
- 2025-04-17 PASS 33 seconds
- 2025-04-18 PASS 34 seconds
- 2025-04-19 PASS 38 seconds
- 2025-04-20 PASS 34 seconds
- 2025-04-21 PASS 39 seconds
- 2025-04-22 PASS 37 seconds
- 2025-04-23 PASS 34 seconds
- 2025-04-24 PASS 38 seconds
- 2025-04-25 PASS 28 seconds
- 2025-04-26 PASS 33 seconds
- 2025-04-27 PASS 34 seconds
- 2025-04-28 PASS 33 seconds
- 2025-04-29 PASS 29 seconds
- 2025-04-30
  - PASS 28 seconds
  - PASS 28 seconds
- 2025-05-01
  - PASS 29 seconds
  - PASS 33 seconds
  - PASS 28 seconds
  - PASS 28 seconds
  - PASS 28 seconds
  - PASS 33 seconds
  - PASS 29 seconds
- 2025-05-02 PASS 32 seconds
- 2025-05-03 PASS 29 seconds
- 2025-05-04 PASS 29 seconds
- 2025-05-05 PASS 34 seconds
- 2025-05-06 PASS 27 seconds
- 2025-05-07 PASS 28 seconds
- 2025-05-08 PASS 29 seconds
- 2025-05-09 PASS 34 seconds
- 2025-05-10 PASS 28 seconds
- 2025-05-11

### Error 2025-05-11T00:29:47+00:00
```
2025-05-11T00:29:47.3847662Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-05-11T00:29:47.3849785Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-05-11T00:29:47.3867232Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-05-11T00:29:47.3868269Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:47.3868986Z         
2025-05-11T00:29:47.3869715Z         Error: error creating project: test-acc-tf-p-9179300158875465765
2025-05-11T00:29:47.3870335Z         
2025-05-11T00:29:47.3870852Z           with mongodbatlas_project.test,
2025-05-11T00:29:47.3872093Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:47.3873062Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:47.3873568Z         
2025-05-11T00:29:47.3874388Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:47.3875066Z         type
2025-05-11T00:29:47.3890056Z    test_name=TestAccConfigRSCustomDBRoles_WithInheritedRoles test_terraform_path=/home/runner/work/_temp/9cb30b14-da37-4aae-9179-acc0e8e8f9a4/terraform test_working_directory=/tmp/plugintest2111633508
2025-05-11T00:29:47.3936091Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (1.37s)
```

- 2025-05-12 PASS 28 seconds
- 2025-05-13
  - PASS 33 seconds
  - PASS 28 seconds
- 2025-05-14 PASS 28 seconds
- 2025-05-15 PASS 30 seconds
- 2025-05-16 PASS 32 seconds
- 2025-05-17 PASS 27 seconds
- 2025-05-18 PASS 31 seconds
- 2025-05-19 PASS 26 seconds
- 2025-05-20 PASS 28 seconds
- 2025-05-21 PASS 30 seconds
- 2025-05-22 PASS 27 seconds
- 2025-05-23 PASS 28 seconds
- 2025-05-24 PASS 29 seconds
- 2025-05-25 PASS 29 seconds
- 2025-05-26 PASS 30 seconds
- 2025-05-27 PASS 30 seconds
- 2025-05-28
  - PASS 35 seconds
  - PASS 27 seconds
  - PASS 28 seconds
- 2025-05-29 PASS 30 seconds
- 2025-05-30 PASS 32 seconds
- 2025-05-31 PASS 32 seconds
- 2025-06-01
  - PASS 27 seconds
  - PASS 29 seconds
  - PASS 28 seconds
  - PASS 30 seconds
  - PASS 30 seconds
  - PASS 28 seconds
- 2025-06-02
  - PASS 28 seconds
  - PASS 28 seconds
  - PASS 36 seconds
- 2025-06-03 PASS 30 seconds
- 2025-06-04 PASS 31 seconds
- 2025-06-05

### Error 2025-06-05T00:30:45+00:00
```
2025-06-05T00:30:45.1170107Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-05T00:30:45.1171672Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-05T00:30:45.1200399Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-05T00:30:45.1200987Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:30:45.1201410Z         
2025-06-05T00:30:45.1201838Z         Error: error creating project: test-acc-tf-p-1338485481402917517
2025-06-05T00:30:45.1202203Z         
2025-06-05T00:30:45.1202511Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1203112Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1203665Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1203996Z         
2025-06-05T00:30:45.1204669Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1205304Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1205881Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1206820Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (2.59s)
```

- 2025-06-06 PASS 29 seconds
- 2025-06-07 PASS 35 seconds
- 2025-06-08 PASS 27 seconds
- 2025-06-09 PASS 27 seconds
- 2025-06-10 PASS 33 seconds
- 2025-06-11
  - PASS 33 seconds
  - PASS 27 seconds
- 2025-06-12 PASS 26 seconds
- 2025-06-13 PASS 28 seconds
- 2025-06-14 PASS 29 seconds
- 2025-06-15 PASS 26 seconds
- 2025-06-16 PASS 33 seconds
- 2025-06-17 PASS 34 seconds
- 2025-06-18
  - PASS 28 seconds
  - PASS 29 seconds
- 2025-06-19 PASS 28 seconds
- 2025-06-20 PASS 35 seconds
- 2025-06-21 PASS 28 seconds
- 2025-06-22

### Error 2025-06-22T00:33:39+00:00
```
2025-06-22T00:33:39.3552661Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-22T00:33:39.3556030Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-22T00:33:39.3621625Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-22T00:33:39.3622767Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3623505Z         
2025-06-22T00:33:39.3624182Z         Error: error when getting project properties after create
2025-06-22T00:33:39.3624771Z         
2025-06-22T00:33:39.3625291Z           with mongodbatlas_project.test,
2025-06-22T00:33:39.3626724Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:33:39.3627720Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:33:39.3628234Z         
2025-06-22T00:33:39.3629038Z         error getting project (68574ef0af7a0954e84adda3): error getting project's
2025-06-22T00:33:39.3629856Z         limits (68574ef0af7a0954e84adda3):
2025-06-22T00:33:39.3630938Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef0af7a0954e84adda3/limits
2025-06-22T00:33:39.3632385Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:33:39.3633469Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:33:39.3634183Z         BadRequestDetail: 
2025-06-22T00:33:39.3634818Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (34.14s)
```

- 2025-06-23 PASS 33 seconds
- 2025-06-24 PASS 29 seconds
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
- 2025-07-10 PASS 28 seconds