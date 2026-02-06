# project/project/TestMigProject_withLimits Test Details
# Found 22 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 21) FAIL
Success rate: 95.45%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 4.08s

### Timeline
- 2026-01-07: MISSING
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

- 2026-01-09 PASS 18 seconds
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 21 seconds
- 2026-01-13: MISSING
- 2026-01-14 PASS 14 seconds
- 2026-01-15: MISSING
- 2026-01-16 PASS 13 seconds
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 15 seconds
- 2026-01-20: MISSING
- 2026-01-21 PASS 17 seconds
- 2026-01-22 PASS 18 seconds
- 2026-01-23 PASS 23 seconds
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 24 seconds
- 2026-01-27: MISSING
- 2026-01-28 PASS 15 seconds
- 2026-01-29: MISSING
- 2026-01-30 PASS 14 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02 PASS 24 seconds
- 2026-02-03: MISSING
- 2026-02-04 PASS 19 seconds
- 2026-02-05: MISSING
- 2026-02-06 PASS 15 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 12 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 10 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 13 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 21 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 18 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 19 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
