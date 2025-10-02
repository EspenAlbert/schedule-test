# network/privateendpointregionalmode/TestMigPrivateEndpointRegionalMode_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c411411d835e95b32b8/limits | qa | flaky_500 | 36.04s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03ed444485797b5c854/limits | qa | flaky_500 | 36.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07 PASS a minute
- 2025-09-08
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-09 PASS a minute
- 2025-09-10 PASS a minute
- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS a minute
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6547549Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-09-14T00:41:24.6550373Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-09-14T00:41:24.6586472Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-09-14T00:41:24.6587344Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6588001Z         
2025-09-14T00:41:24.6588430Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6588898Z         
2025-09-14T00:41:24.6589238Z           with mongodbatlas_project.project,
2025-09-14T00:41:24.6589994Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-09-14T00:41:24.6590713Z           14: 		resource "mongodbatlas_project" "project" {
2025-09-14T00:41:24.6591156Z         
2025-09-14T00:41:24.6591630Z         error getting project (68c60c411411d835e95b32b8): error getting project's
2025-09-14T00:41:24.6592240Z         limits (68c60c411411d835e95b32b8):
2025-09-14T00:41:24.6592967Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c411411d835e95b32b8/limits
2025-09-14T00:41:24.6593998Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6594731Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6595270Z         BadRequestDetail: 
2025-09-14T00:41:24.6595638Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (36.41s)
```

- 2025-09-15
  - PASS a minute
  - FAIL 36 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3261308Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-09-15T06:33:08.3264327Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-09-15T06:33:08.3292950Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-09-15T06:33:08.3293624Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3294127Z         
2025-09-15T06:33:08.3294524Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3294864Z         
2025-09-15T06:33:08.3295185Z           with mongodbatlas_project.project,
2025-09-15T06:33:08.3295806Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-09-15T06:33:08.3296387Z           14: 		resource "mongodbatlas_project" "project" {
2025-09-15T06:33:08.3296690Z         
2025-09-15T06:33:08.3297147Z         error getting project (68c7b03ed444485797b5c854): error getting project's
2025-09-15T06:33:08.3297611Z         limits (68c7b03ed444485797b5c854):
2025-09-15T06:33:08.3298294Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03ed444485797b5c854/limits
2025-09-15T06:33:08.3298973Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3299561Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3299968Z         BadRequestDetail: 
2025-09-15T06:33:08.3300301Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (36.65s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21 PASS a minute
- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute