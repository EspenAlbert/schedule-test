# project/project/TestMigProject_withTeams Test Details
# Found 22 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 21) FAIL
Success rate: 95.45%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 2.01s

### Timeline
- 2026-01-07: MISSING
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

- 2026-01-09 PASS 11 seconds
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 13 seconds
- 2026-01-13: MISSING
- 2026-01-14 PASS 9 seconds
- 2026-01-15: MISSING
- 2026-01-16 PASS 10 seconds
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 10 seconds
- 2026-01-20: MISSING
- 2026-01-21 PASS 11 seconds
- 2026-01-22 PASS 11 seconds
- 2026-01-23 PASS 14 seconds
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 14 seconds
- 2026-01-27: MISSING
- 2026-01-28 PASS 10 seconds
- 2026-01-29: MISSING
- 2026-01-30 PASS 9 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02 PASS 14 seconds
- 2026-02-03: MISSING
- 2026-02-04 PASS 12 seconds
- 2026-02-05: MISSING
- 2026-02-06 PASS 10 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 9 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 8 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 9 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 12 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
