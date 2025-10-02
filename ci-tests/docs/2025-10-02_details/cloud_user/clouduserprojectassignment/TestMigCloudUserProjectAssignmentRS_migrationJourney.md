# cloud_user/clouduserprojectassignment/TestMigCloudUserProjectAssignmentRS_migrationJourney Test Details
# Found 34 TestRuns in dev, qa from 2025-09-10 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:29](#error-2025-09-14t0029160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3ad444485797b20005/limits | qa | flaky_500 | 35.05s
[2025-09-15 06:21](#error-2025-09-15t0621200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03efe60767b7f9af809/limits | qa | flaky_500 | 34.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 PASS 14 seconds
- 2025-09-11 PASS 19 seconds
- 2025-09-12
  - PASS 22 seconds
  - PASS 12 seconds
- 2025-09-13 PASS 14 seconds
- 2025-09-14

### Error 2025-09-14T00:29:16+00:00
```
2025-09-14T00:29:16.2323367Z === RUN   TestMigCloudUserProjectAssignmentRS_migrationJourney
2025-09-14T00:29:16.2329135Z === CONT  TestMigCloudUserProjectAssignmentRS_migrationJourney
2025-09-14T00:29:16.2368613Z === NAME  TestMigCloudUserProjectAssignmentRS_migrationJourney
2025-09-14T00:29:16.2369187Z     resource_migration_test.go:34: Step 1/4 error: Error running apply: exit status 1
2025-09-14T00:29:16.2369581Z         
2025-09-14T00:29:16.2369962Z         Error: error when getting project properties after create
2025-09-14T00:29:16.2370292Z         
2025-09-14T00:29:16.2370609Z           with mongodbatlas_project.mig_test,
2025-09-14T00:29:16.2371216Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_project" "mig_test":
2025-09-14T00:29:16.2371968Z           19: 		resource "mongodbatlas_project" "mig_test" {
2025-09-14T00:29:16.2372272Z         
2025-09-14T00:29:16.2372715Z         error getting project (68c60c3ad444485797b20005): error getting project's
2025-09-14T00:29:16.2373162Z         limits (68c60c3ad444485797b20005):
2025-09-14T00:29:16.2373922Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3ad444485797b20005/limits
2025-09-14T00:29:16.2374742Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:16.2375315Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:16.2375704Z         BadRequestDetail: 
2025-09-14T00:29:16.2376082Z --- FAIL: TestMigCloudUserProjectAssignmentRS_migrationJourney (35.54s)
```

- 2025-09-15
  - PASS 16 seconds
  - FAIL 34 seconds

### Error 2025-09-15T06:21:20+00:00
```
2025-09-15T06:21:20.4003900Z === RUN   TestMigCloudUserProjectAssignmentRS_migrationJourney
2025-09-15T06:21:20.4009257Z === CONT  TestMigCloudUserProjectAssignmentRS_migrationJourney
2025-09-15T06:21:20.4046385Z === NAME  TestMigCloudUserProjectAssignmentRS_migrationJourney
2025-09-15T06:21:20.4046947Z     resource_migration_test.go:34: Step 1/4 error: Error running apply: exit status 1
2025-09-15T06:21:20.4047332Z         
2025-09-15T06:21:20.4047708Z         Error: error when getting project properties after create
2025-09-15T06:21:20.4048027Z         
2025-09-15T06:21:20.4048591Z           with mongodbatlas_project.mig_test,
2025-09-15T06:21:20.4049205Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_project" "mig_test":
2025-09-15T06:21:20.4049898Z           19: 		resource "mongodbatlas_project" "mig_test" {
2025-09-15T06:21:20.4050195Z         
2025-09-15T06:21:20.4050640Z         error getting project (68c7b03efe60767b7f9af809): error getting project's
2025-09-15T06:21:20.4051088Z         limits (68c7b03efe60767b7f9af809):
2025-09-15T06:21:20.4051648Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03efe60767b7f9af809/limits
2025-09-15T06:21:20.4052410Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:20.4052972Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:20.4053349Z         BadRequestDetail: 
2025-09-15T06:21:20.4053718Z --- FAIL: TestMigCloudUserProjectAssignmentRS_migrationJourney (34.88s)
```

- 2025-09-16 PASS 15 seconds
- 2025-09-17 PASS 16 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 18 seconds
- 2025-09-20 PASS 22 seconds
- 2025-09-21 PASS 11 seconds
- 2025-09-22 PASS 13 seconds
- 2025-09-23 PASS 18 seconds
- 2025-09-24 PASS 16 seconds
- 2025-09-25 PASS 19 seconds
- 2025-09-26 PASS 22 seconds
- 2025-09-27 PASS 18 seconds
- 2025-09-28 PASS 13 seconds
- 2025-09-29 PASS 19 seconds
- 2025-09-30
  - PASS 17 seconds
  - PASS 11 seconds
  - PASS 16 seconds
- 2025-10-01
  - PASS 23 seconds
  - PASS 20 seconds
  - PASS 18 seconds
  - PASS 12 seconds
  - PASS 17 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 15 seconds
- 2025-10-02 PASS 13 seconds