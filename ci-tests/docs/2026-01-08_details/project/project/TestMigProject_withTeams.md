# project/project/TestMigProject_withTeams Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL(x 2)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | Step 1 1 | dev | 8.06s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 2.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 13 seconds
  - PASS 8 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 14 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 14 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 13 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 13 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 10 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 12 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 12 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 15 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 14 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2799770Z === RUN   TestMigProject_withTeams
2026-01-07T00:33:18.2804925Z     resource_project_migration_test.go:63: Step 1/2 error: Check failed: Check 1/4 error: project (695da949d59b8466ea72bd34) does not exist
2026-01-07T00:33:18.2806016Z --- FAIL: TestMigProject_withTeams (8.61s)
```

- 2026-01-08

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7553474Z === RUN   TestMigProject_withTeams
2026-01-08T07:59:10.7559966Z   
2026-01-08T07:59:10.7560452Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7560913Z         
2026-01-08T07:59:10.7561347Z         Error: error creating project: test-acc-tf-p-7492118766889555123
2026-01-08T07:59:10.7561719Z         
2026-01-08T07:59:10.7562029Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7562669Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7563265Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7563569Z         
2026-01-08T07:59:10.7564069Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7564897Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7565459Z --- FAIL: TestMigProject_withTeams (2.09s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 12 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 7 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 12 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 12 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
