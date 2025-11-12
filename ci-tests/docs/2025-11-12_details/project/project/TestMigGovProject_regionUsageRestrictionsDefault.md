# project/project/TestMigGovProject_regionUsageRestrictionsDefault Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-12 00:33](#error-2025-11-12t0033420000) |  | dev | flaky_500 | 17.00s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 14 seconds
- 2025-10-05 PASS 14 seconds
- 2025-10-06 PASS 18 seconds
- 2025-10-07 PASS 15 seconds
- 2025-10-08 PASS 19 seconds
- 2025-10-09 PASS 18 seconds
- 2025-10-10 PASS 18 seconds
- 2025-10-11 PASS 17 seconds
- 2025-10-12 PASS 20 seconds
- 2025-10-13 PASS 21 seconds
- 2025-10-14 PASS 14 seconds
- 2025-10-15 PASS 22 seconds
- 2025-10-16 PASS 13 seconds
- 2025-10-17 PASS 16 seconds
- 2025-10-18: MISSING
- 2025-10-19 PASS 14 seconds
- 2025-10-20 PASS 19 seconds
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-10-23: MISSING
- 2025-10-24 PASS 13 seconds
- 2025-10-25: MISSING
- 2025-10-26 PASS 16 seconds
- 2025-10-27 PASS 17 seconds
- 2025-10-28: MISSING
- 2025-10-29 PASS 17 seconds
- 2025-10-30: MISSING
- 2025-10-31 PASS 15 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 seconds
- 2025-11-03 PASS 17 seconds
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 20 seconds
  - PASS 16 seconds
- 2025-11-06: MISSING
- 2025-11-07 PASS 19 seconds
- 2025-11-08: MISSING
- 2025-11-09 PASS 17 seconds
- 2025-11-10 PASS 17 seconds
- 2025-11-11: MISSING
- 2025-11-12

### Error 2025-11-12T00:33:42+00:00
```
2025-11-12T00:33:42.4593131Z === RUN   TestMigGovProject_regionUsageRestrictionsDefault
2025-11-12T00:33:42.4605256Z === CONT  TestMigGovProject_regionUsageRestrictionsDefault
2025-11-12T00:33:42.4694026Z === NAME  TestMigGovProject_regionUsageRestrictionsDefault
2025-11-12T00:33:42.4694669Z     resource_project_migration_test.go:163: Step 1/3 error: Error running apply: exit status 1
2025-11-12T00:33:42.4695106Z         
2025-11-12T00:33:42.4695463Z         Error: error when getting project after create
2025-11-12T00:33:42.4695774Z         
2025-11-12T00:33:42.4696084Z           with mongodbatlas_project.test,
2025-11-12T00:33:42.4696700Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_project" "test":
2025-11-12T00:33:42.4697250Z           19: 		resource "mongodbatlas_project" "test" {
2025-11-12T00:33:42.4697548Z         
2025-11-12T00:33:42.4697892Z         error getting project (6913d4dc34dbff51da651fad):
2025-11-12T00:33:42.4698494Z         https://cloud-dev.mongodbgov.com/api/atlas/v2/groups/6913d4dc34dbff51da651fad
2025-11-12T00:33:42.4699180Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-12T00:33:42.4699763Z         Unexpected error. Reason: Internal Server Error. Params: []
2025-11-12T00:33:42.4700224Z --- FAIL: TestMigGovProject_regionUsageRestrictionsDefault (17.05s)
```
