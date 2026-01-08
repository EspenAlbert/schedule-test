# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:43](#error-2026-01-07t0043030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ac70 | dev | flaky_500 | 101.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a minute
  - PASS a minute
- 2025-12-11 PASS a minute
- 2025-12-12 PASS a minute
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS a minute
- 2025-12-17 PASS a minute
- 2025-12-18 PASS a minute
- 2025-12-19 PASS a minute
- 2025-12-20 PASS a minute
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS a minute
- 2025-12-24 PASS a minute
- 2025-12-25 PASS a minute
- 2025-12-26 PASS a minute
- 2025-12-27 PASS a minute
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a minute
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS a minute
- 2026-01-03 PASS a minute
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06 PASS a minute
- 2026-01-07

### Error 2026-01-07T00:43:03+00:00
```
2026-01-07T00:43:03.3571590Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2026-01-07T00:43:03.3574086Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2026-01-07T00:43:03.3581090Z    test_terraform_path=/home/runner/work/_temp/cf5ce4e0-8d5e-4d38-8236-8cefe1492d45/terraform test_working_directory=/tmp/plugintest2578909148 test_name=TestMigPrivateEndpointRegionalMode_basic test_step_number=1
2026-01-07T00:43:03.3601946Z === NAME  TestAccPrivateEndpointRegionalMode_basic
2026-01-07T00:43:03.3602681Z     resource_private_endpoint_regional_mode_test.go:16: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2026-01-07T00:43:03.3603224Z         
2026-01-07T00:43:03.3603584Z         Error: error when getting project from Atlas
2026-01-07T00:43:03.3603906Z         
2026-01-07T00:43:03.3604253Z           with mongodbatlas_project.project,
2026-01-07T00:43:03.3604892Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2026-01-07T00:43:03.3605491Z           12: 		resource "mongodbatlas_project" "project" {
2026-01-07T00:43:03.3605820Z         
2026-01-07T00:43:03.3606186Z         error getting project (695da928d59b8466ea71ac70):
2026-01-07T00:43:03.3606792Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ac70
2026-01-07T00:43:03.3607789Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:43:03.3608504Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:43:03.3608929Z         BadRequestDetail: 
2026-01-07T00:43:03.3609302Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (101.25s)
```

- 2026-01-08 PASS a minute

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
