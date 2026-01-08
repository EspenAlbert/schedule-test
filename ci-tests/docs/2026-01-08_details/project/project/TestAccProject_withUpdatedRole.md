# project/project/TestAccProject_withUpdatedRole Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95cd59b8466ea72ee92 | dev | flaky_500 | 8.09s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 4.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 seconds
  - PASS 10 seconds
- 2025-12-11 PASS 11 seconds
- 2025-12-12 PASS 15 seconds
- 2025-12-13 PASS 12 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 seconds
- 2025-12-16 PASS 13 seconds
- 2025-12-17 PASS 15 seconds
- 2025-12-18 PASS 14 seconds
- 2025-12-19 PASS 15 seconds
- 2025-12-20 PASS 13 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 seconds
- 2025-12-23 PASS 11 seconds
- 2025-12-24 PASS 10 seconds
- 2025-12-25 PASS 11 seconds
- 2025-12-26 PASS 15 seconds
- 2025-12-27 PASS 13 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 seconds
- 2025-12-31 PASS 16 seconds
- 2026-01-01 PASS 13 seconds
- 2026-01-02 PASS 15 seconds
- 2026-01-03 PASS 16 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 seconds
- 2026-01-06 PASS 13 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2827961Z === RUN   TestAccProject_withUpdatedRole
2026-01-07T00:33:18.2835982Z === CONT  TestAccProject_withUpdatedRole
2026-01-07T00:33:18.2949944Z === NAME  TestAccProject_withUpdatedRole
2026-01-07T00:33:18.2950485Z     resource_project_test.go:782: Step 2/2 error: Error running pre-apply plan: exit status 1
2026-01-07T00:33:18.2950896Z         
2026-01-07T00:33:18.2951228Z         Error: error when getting project from Atlas
2026-01-07T00:33:18.2951525Z         
2026-01-07T00:33:18.2951828Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.2952420Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.2952965Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.2953260Z         
2026-01-07T00:33:18.2953596Z         error getting project (695da95cd59b8466ea72ee92):
2026-01-07T00:33:18.2954168Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95cd59b8466ea72ee92
2026-01-07T00:33:18.2954973Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:18.2955562Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:18.2955959Z         BadRequestDetail: 
2026-01-07T00:33:18.2977466Z --- FAIL: TestAccProject_withUpdatedRole (8.90s)
```

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
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 14 seconds
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
