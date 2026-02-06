# project/project/TestMigProject_withFalseDefaultAlertSettings Test Details
# Found 22 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 21) FAIL
Success rate: 95.45%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 3.00s

### Timeline
- 2026-01-07: MISSING
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

- 2026-01-09 PASS 12 seconds
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 15 seconds
- 2026-01-13: MISSING
- 2026-01-14 PASS 9 seconds
- 2026-01-15: MISSING
- 2026-01-16 PASS 11 seconds
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 seconds
- 2026-01-20: MISSING
- 2026-01-21 PASS 12 seconds
- 2026-01-22 PASS 14 seconds
- 2026-01-23 PASS 14 seconds
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 seconds
- 2026-01-27: MISSING
- 2026-01-28 PASS 12 seconds
- 2026-01-29: MISSING
- 2026-01-30 PASS 11 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02 PASS 14 seconds
- 2026-02-03: MISSING
- 2026-02-04 PASS 12 seconds
- 2026-02-05: MISSING
- 2026-02-06 PASS 13 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 9 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 10 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 9 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 12 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 12 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
