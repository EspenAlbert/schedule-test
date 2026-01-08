# cloud_user/clouduserprojectassignment/TestMigCloudUserProjectAssignmentRS_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93faf4f6cc389e85c2e | dev | flaky_500 | 12.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 17 seconds
  - PASS 18 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 12 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 13 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 14 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 11 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 16 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 14 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 13 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 15 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 17 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:31:24+00:00
```
2026-01-07T00:31:24.5105070Z === RUN   TestMigCloudUserProjectAssignmentRS_basic
2026-01-07T00:31:24.5106331Z     resource_migration_test.go:22: Creating execution project (1): test-acc-tf-p-137445034773246716
2026-01-07T00:31:24.5117722Z    test_terraform_path=/home/runner/work/_temp/1db11fd5-7609-4071-8034-45ec75cd4ff4/terraform test_working_directory=/tmp/plugintest3870465185 test_name=TestMigCloudUserProjectAssignmentRS_basic
2026-01-07T00:31:24.5119613Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:24.5120281Z         
2026-01-07T00:31:24.5120859Z         Error: error when getting project after create
2026-01-07T00:31:24.5121362Z         
2026-01-07T00:31:24.5121875Z           with mongodbatlas_project.test,
2026-01-07T00:31:24.5122907Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-07T00:31:24.5123846Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:31:24.5124501Z         
2026-01-07T00:31:24.5125085Z         error getting project (695da93faf4f6cc389e85c2e):
2026-01-07T00:31:24.5126443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93faf4f6cc389e85c2e
2026-01-07T00:31:24.5127591Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:24.5128595Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:24.5129261Z         BadRequestDetail: 
2026-01-07T00:31:24.5130026Z --- FAIL: TestMigCloudUserProjectAssignmentRS_basic (12.42s)
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
- 2025-12-21 PASS 13 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
