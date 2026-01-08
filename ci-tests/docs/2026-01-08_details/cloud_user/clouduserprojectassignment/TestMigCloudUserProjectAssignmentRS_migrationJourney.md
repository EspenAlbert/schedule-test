# cloud_user/clouduserprojectassignment/TestMigCloudUserProjectAssignmentRS_migrationJourney Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da947af4f6cc389e87f34 | dev | flaky_500 | 22.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 seconds
  - PASS 22 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 13 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 13 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 16 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 13 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 21 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 20 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 13 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 14 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 20 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:31:24+00:00
```
2026-01-07T00:31:24.5130786Z === RUN   TestMigCloudUserProjectAssignmentRS_migrationJourney
2026-01-07T00:31:24.5163914Z === CONT  TestMigCloudUserProjectAssignmentRS_migrationJourney
2026-01-07T00:31:24.5191594Z === NAME  TestMigCloudUserProjectAssignmentRS_migrationJourney
2026-01-07T00:31:24.5192731Z     resource_migration_test.go:33: Step 4/4 error: Error running post-apply refresh plan: exit status 1
2026-01-07T00:31:24.5193486Z         
2026-01-07T00:31:24.5194037Z         Error: error when getting project from Atlas
2026-01-07T00:31:24.5194711Z         
2026-01-07T00:31:24.5195251Z           with mongodbatlas_project.mig_test,
2026-01-07T00:31:24.5196343Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_project" "mig_test":
2026-01-07T00:31:24.5197325Z           17: 		resource "mongodbatlas_project" "mig_test" {
2026-01-07T00:31:24.5197830Z         
2026-01-07T00:31:24.5198408Z         error getting project (695da947af4f6cc389e87f34):
2026-01-07T00:31:24.5199410Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da947af4f6cc389e87f34
2026-01-07T00:31:24.5200550Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:24.5201559Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:24.5202225Z         BadRequestDetail: 
2026-01-07T00:31:24.5202876Z --- FAIL: TestMigCloudUserProjectAssignmentRS_migrationJourney (22.58s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 15 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 18 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 23 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 seconds
