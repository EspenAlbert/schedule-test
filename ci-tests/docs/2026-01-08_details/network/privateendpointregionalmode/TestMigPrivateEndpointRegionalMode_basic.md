# network/privateendpointregionalmode/TestMigPrivateEndpointRegionalMode_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:43](#error-2026-01-07t0043030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929d59b8466ea71c377 | dev | flaky_500 | 5.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a minute
  - PASS a minute
- 2025-12-11: MISSING
- 2025-12-12 PASS a minute
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16: MISSING
- 2025-12-17 PASS a minute
- 2025-12-18: MISSING
- 2025-12-19 PASS a minute
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23: MISSING
- 2025-12-24 PASS a minute
- 2025-12-25: MISSING
- 2025-12-26 PASS a minute
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS a minute
- 2026-01-01: MISSING
- 2026-01-02 PASS a minute
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:43:03+00:00
```
2026-01-07T00:43:03.3570783Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2026-01-07T00:43:03.3573694Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2026-01-07T00:43:03.3582033Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2026-01-07T00:43:03.3582731Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:43:03.3583387Z         
2026-01-07T00:43:03.3583753Z         Error: error when getting project after create
2026-01-07T00:43:03.3584081Z         
2026-01-07T00:43:03.3584427Z           with mongodbatlas_project.project,
2026-01-07T00:43:03.3585236Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2026-01-07T00:43:03.3585848Z           14: 		resource "mongodbatlas_project" "project" {
2026-01-07T00:43:03.3586177Z         
2026-01-07T00:43:03.3586549Z         error getting project (695da929d59b8466ea71c377):
2026-01-07T00:43:03.3587161Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929d59b8466ea71c377
2026-01-07T00:43:03.3587841Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:43:03.3588631Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:43:03.3589059Z         BadRequestDetail: 
2026-01-07T00:43:03.3589423Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (5.88s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a minute
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a minute
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS a minute
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
