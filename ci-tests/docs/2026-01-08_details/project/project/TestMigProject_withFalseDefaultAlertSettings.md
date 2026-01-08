# project/project/TestMigProject_withFalseDefaultAlertSettings Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL(x 2)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95cd59b8466ea7309aa | dev | flaky_500 | 4.10s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 3.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 14 seconds
  - PASS 9 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 13 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 16 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 15 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 13 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 10 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 16 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 13 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 13 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 13 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2806688Z === RUN   TestMigProject_withFalseDefaultAlertSettings
2026-01-07T00:33:18.2833554Z === CONT  TestMigProject_withFalseDefaultAlertSettings
2026-01-07T00:33:18.2906047Z === NAME  TestMigProject_withFalseDefaultAlertSettings
2026-01-07T00:33:18.2906641Z     resource_project_migration_test.go:84: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:18.2907068Z         
2026-01-07T00:33:18.2907397Z         Error: error when getting project after create
2026-01-07T00:33:18.2907703Z         
2026-01-07T00:33:18.2908015Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.2908608Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.2909160Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.2909454Z         
2026-01-07T00:33:18.2909792Z         error getting project (695da95cd59b8466ea7309aa):
2026-01-07T00:33:18.2910373Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95cd59b8466ea7309aa
2026-01-07T00:33:18.2911017Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:18.2911598Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:18.2911991Z         BadRequestDetail: 
2026-01-07T00:33:18.2932955Z --- FAIL: TestMigProject_withFalseDefaultAlertSettings (4.96s)
```

- 2026-01-08

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7565835Z === RUN   TestMigProject_withFalseDefaultAlertSettings
2026-01-08T07:59:10.7590593Z === CONT  TestMigProject_withFalseDefaultAlertSettings
2026-01-08T07:59:10.7713023Z === NAME  TestMigProject_withFalseDefaultAlertSettings
2026-01-08T07:59:10.7713630Z     resource_project_migration_test.go:84: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7714073Z         
2026-01-08T07:59:10.7714591Z         Error: error creating project: test-acc-tf-p-4311600640522006198
2026-01-08T07:59:10.7714960Z         
2026-01-08T07:59:10.7715262Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7715878Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7716459Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7716763Z         
2026-01-08T07:59:10.7717396Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7718030Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7724479Z   
2026-01-08T07:59:10.7729960Z --- FAIL: TestMigProject_withFalseDefaultAlertSettings (3.02s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 seconds
