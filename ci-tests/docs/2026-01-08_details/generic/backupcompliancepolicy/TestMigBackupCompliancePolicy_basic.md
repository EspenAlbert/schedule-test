# generic/backupcompliancepolicy/TestMigBackupCompliancePolicy_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92caf4f6cc389e7e0e9 | dev | flaky_500 | 70.05s

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

### Error 2026-01-07T00:31:47+00:00
```
2026-01-07T00:31:47.1104659Z === RUN   TestMigBackupCompliancePolicy_basic
2026-01-07T00:31:47.1114274Z === CONT  TestMigBackupCompliancePolicy_basic
2026-01-07T00:31:47.1226880Z === NAME  TestMigBackupCompliancePolicy_basic
2026-01-07T00:31:47.1227928Z     resource_backup_compliance_policy_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-01-07T00:31:47.1228847Z         
2026-01-07T00:31:47.1229651Z         Error: error when getting project from Atlas
2026-01-07T00:31:47.1230249Z         
2026-01-07T00:31:47.1230778Z           with mongodbatlas_project.test,
2026-01-07T00:31:47.1231502Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-07T00:31:47.1232095Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:31:47.1232455Z         
2026-01-07T00:31:47.1232844Z         error getting project (695da92caf4f6cc389e7e0e9):
2026-01-07T00:31:47.1233454Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92caf4f6cc389e7e0e9
2026-01-07T00:31:47.1234126Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:47.1234729Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:47.1235171Z         BadRequestDetail: 
2026-01-07T00:31:47.1235533Z --- FAIL: TestMigBackupCompliancePolicy_basic (70.46s)
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
