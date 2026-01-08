# project/project/TestMigProject_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | flaky_500 | 4.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 seconds
  - PASS 8 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 13 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 12 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 13 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 13 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 9 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 13 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 13 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 13 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 12 seconds
- 2026-01-06: MISSING
- 2026-01-07 PASS 14 seconds
- 2026-01-08

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7535354Z === RUN   TestMigProject_basic
2026-01-08T07:59:10.7546356Z   
2026-01-08T07:59:10.7546982Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7547480Z         
2026-01-08T07:59:10.7547992Z         Error: error getting project's settings assigned (695f639faa2a8443b49013a0):
2026-01-08T07:59:10.7548426Z         
2026-01-08T07:59:10.7548751Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7549411Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7550038Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7550364Z         
2026-01-08T07:59:10.7550929Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639faa2a8443b49013a0/settings
2026-01-08T07:59:10.7551697Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T07:59:10.7552404Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7553159Z --- FAIL: TestMigProject_basic (4.67s)
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
- 2026-01-04 PASS 13 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 8 seconds
