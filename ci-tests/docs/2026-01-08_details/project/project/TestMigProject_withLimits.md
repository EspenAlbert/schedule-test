# project/project/TestMigProject_withLimits Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL(x 2)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da952d59b8466ea72c5f8 | dev | flaky_500 | 9.10s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 4.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 seconds
  - PASS 12 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 23 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 23 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 23 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 20 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 13 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 22 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 22 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 22 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 23 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2808845Z === RUN   TestMigProject_withLimits
2026-01-07T00:33:18.2816440Z    test_name=TestMigProject_withLimits
2026-01-07T00:33:18.2817518Z     resource_project_migration_test.go:133: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2026-01-07T00:33:18.2818499Z         
2026-01-07T00:33:18.2818937Z         Error: error when getting project from Atlas
2026-01-07T00:33:18.2819243Z         
2026-01-07T00:33:18.2819580Z           with data.mongodbatlas_project.test,
2026-01-07T00:33:18.2820226Z           on terraform_plugin_test.tf line 31, in data "mongodbatlas_project" "test":
2026-01-07T00:33:18.2820743Z           31: 		data "mongodbatlas_project" "test" {
2026-01-07T00:33:18.2821035Z         
2026-01-07T00:33:18.2821382Z         error getting project (695da952d59b8466ea72c5f8):
2026-01-07T00:33:18.2821963Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da952d59b8466ea72c5f8
2026-01-07T00:33:18.2822607Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:18.2823183Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:18.2823583Z         BadRequestDetail: 
2026-01-07T00:33:18.2823870Z --- FAIL: TestMigProject_withLimits (9.98s)
```

- 2026-01-08

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7567347Z === RUN   TestMigProject_withLimits
2026-01-08T07:59:10.7574611Z   
2026-01-08T07:59:10.7575094Z     resource_project_migration_test.go:133: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7575539Z         
2026-01-08T07:59:10.7575925Z         Error: error during project deletion when adding limits
2026-01-08T07:59:10.7576435Z         
2026-01-08T07:59:10.7576742Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7577373Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7577958Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7578262Z         
2026-01-08T07:59:10.7578809Z         error deleting project (695f63a5bd8c78dbeaf9b79b):
2026-01-08T07:59:10.7579680Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f63a5bd8c78dbeaf9b79b/limits/atlas.project.deployment.clusters
2026-01-08T07:59:10.7580547Z         PATCH: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T07:59:10.7581005Z         BadRequestDetail: 
2026-01-08T07:59:10.7581290Z --- FAIL: TestMigProject_withLimits (4.83s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 19 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 21 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 seconds
