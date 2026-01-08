# project/project/TestMigProject_withTrueDefaultAlertSettings Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 3.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 14 seconds
  - PASS 10 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 14 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 14 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 14 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 13 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 14 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 14 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 15 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 seconds
- 2026-01-06: MISSING
- 2026-01-07 PASS 12 seconds
- 2026-01-08

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7566626Z === RUN   TestMigProject_withTrueDefaultAlertSettings
2026-01-08T07:59:10.7592268Z === CONT  TestMigProject_withTrueDefaultAlertSettings
2026-01-08T07:59:10.7724742Z === NAME  TestMigProject_withTrueDefaultAlertSettings
2026-01-08T07:59:10.7725342Z     resource_project_migration_test.go:88: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7725782Z         
2026-01-08T07:59:10.7726204Z         Error: error creating project: test-acc-tf-p-8369227726420397115
2026-01-08T07:59:10.7726572Z         
2026-01-08T07:59:10.7726876Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7727490Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7728067Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7728375Z         
2026-01-08T07:59:10.7728866Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7729503Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7730410Z --- FAIL: TestMigProject_withTrueDefaultAlertSettings (3.02s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 14 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 11 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 seconds
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
- 2026-01-08 PASS 11 seconds
