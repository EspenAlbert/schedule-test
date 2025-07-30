# network/privateendpointregionalmode/TestMigPrivateEndpointRegionalMode_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c406690ae45e168bd269/limits | qa | flaky_500 | 102.09s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafcfd583001f9eeb242/limits | qa | flaky_500 | 35.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6397294Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6400130Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6446039Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6446810Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6447372Z         
2025-07-06T00:44:46.6447768Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6448115Z         
2025-07-06T00:44:46.6448441Z           with mongodbatlas_project.project,
2025-07-06T00:44:46.6449077Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-07-06T00:44:46.6449663Z           14: 		resource "mongodbatlas_project" "project" {
2025-07-06T00:44:46.6450105Z         
2025-07-06T00:44:46.6450568Z         error getting project (6869c406690ae45e168bd269): error getting project's
2025-07-06T00:44:46.6451045Z         limits (6869c406690ae45e168bd269):
2025-07-06T00:44:46.6451633Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c406690ae45e168bd269/limits
2025-07-06T00:44:46.6452321Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6452914Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6453327Z         BadRequestDetail: 
2025-07-06T00:44:46.6454228Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (102.86s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL 35 seconds

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8564289Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-10T13:19:33.8567074Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-10T13:19:33.8575722Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-07-10T13:19:33.8576400Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:19:33.8576903Z         
2025-07-10T13:19:33.8577306Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8577657Z         
2025-07-10T13:19:33.8577982Z           with mongodbatlas_project.project,
2025-07-10T13:19:33.8578606Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-07-10T13:19:33.8579189Z           14: 		resource "mongodbatlas_project" "project" {
2025-07-10T13:19:33.8579509Z         
2025-07-10T13:19:33.8579973Z         error getting project (686fbafcfd583001f9eeb242): error getting project's
2025-07-10T13:19:33.8580453Z         limits (686fbafcfd583001f9eeb242):
2025-07-10T13:19:33.8581148Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafcfd583001f9eeb242/limits
2025-07-10T13:19:33.8581825Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8582418Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8582824Z         BadRequestDetail: 
2025-07-10T13:19:33.8583167Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (35.47s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13 PASS a minute
- 2025-07-14 PASS a minute
- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20 PASS a minute
- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27 PASS a minute
- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS a minute