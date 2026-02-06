# project/project/TestAccProject_withUpdatedRole Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 4.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 15 seconds
  - FAIL 4 seconds

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7585295Z === RUN   TestAccProject_withUpdatedRole
2026-01-08T07:59:10.7593209Z === CONT  TestAccProject_withUpdatedRole
2026-01-08T07:59:10.7760467Z === NAME  TestAccProject_withUpdatedRole
2026-01-08T07:59:10.7760995Z     resource_project_test.go:782: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7761405Z         
2026-01-08T07:59:10.7761735Z         Error: error adding teams into the project
2026-01-08T07:59:10.7762036Z         
2026-01-08T07:59:10.7762338Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7762963Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7763546Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7763849Z         
2026-01-08T07:59:10.7764453Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f63aaaa2a8443b4901962/teams
2026-01-08T07:59:10.7765300Z         POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T07:59:10.7765759Z         BadRequestDetail: 
2026-01-08T07:59:10.7766056Z --- FAIL: TestAccProject_withUpdatedRole (4.91s)
```

  - PASS 13 seconds
- 2026-01-09 PASS 12 seconds
- 2026-01-10 PASS 11 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 14 seconds
- 2026-01-13 PASS 11 seconds
- 2026-01-14 PASS 10 seconds
- 2026-01-15 PASS 13 seconds
- 2026-01-16 PASS 10 seconds
- 2026-01-17 PASS 15 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 seconds
- 2026-01-20 PASS 12 seconds
- 2026-01-21 PASS 11 seconds
- 2026-01-22
  - PASS 13 seconds
  - PASS 14 seconds
- 2026-01-23 PASS 16 seconds
- 2026-01-24 PASS 14 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 seconds
- 2026-01-27 PASS 15 seconds
- 2026-01-28 PASS 11 seconds
- 2026-01-29 PASS 15 seconds
- 2026-01-30 PASS 11 seconds
- 2026-01-31 PASS 14 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 15 seconds
- 2026-02-03 PASS 15 seconds
- 2026-02-04 PASS 13 seconds
- 2026-02-05 PASS 13 seconds
- 2026-02-06 PASS 12 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 10 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 9 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 9 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 14 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 11 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
