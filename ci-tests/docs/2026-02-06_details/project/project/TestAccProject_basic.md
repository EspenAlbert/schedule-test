# project/project/TestAccProject_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 37.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 6 minutes
  - FAIL 37 seconds

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7582455Z === RUN   TestAccProject_basic
2026-01-08T07:59:10.7591258Z === CONT  TestAccProject_basic
2026-01-08T07:59:10.7797646Z === NAME  TestAccProject_basic
2026-01-08T07:59:10.7798144Z     resource_project_test.go:558: Step 1/4 error: Error running apply: exit status 1
2026-01-08T07:59:10.7798553Z         
2026-01-08T07:59:10.7798990Z         Error: error during project deletion when getting project settings
2026-01-08T07:59:10.7799358Z         
2026-01-08T07:59:10.7799659Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7800285Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7800864Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7801182Z         
2026-01-08T07:59:10.7801533Z         error deleting project (695f63cbaa2a8443b49026fe):
2026-01-08T07:59:10.7802181Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f63cbaa2a8443b49026fe/settings
2026-01-08T07:59:10.7802902Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T07:59:10.7803558Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7803984Z --- FAIL: TestAccProject_basic (37.79s)
```

  - PASS 5 minutes
- 2026-01-09 PASS 4 minutes
- 2026-01-10 PASS 3 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 5 minutes
- 2026-01-13 PASS 4 minutes
- 2026-01-14 PASS 2 minutes
- 2026-01-15 PASS 3 minutes
- 2026-01-16 PASS 2 minutes
- 2026-01-17 PASS 3 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 minutes
- 2026-01-20 PASS 2 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22
  - PASS 3 minutes
  - PASS 49 seconds
- 2026-01-23 PASS 5 minutes
- 2026-01-24 PASS 3 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 5 minutes
- 2026-01-27 PASS 4 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29 PASS 2 minutes
- 2026-01-30 PASS 2 minutes
- 2026-01-31 PASS 3 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 5 minutes
- 2026-02-03 PASS 3 minutes
- 2026-02-04 PASS 3 minutes
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS a minute
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a minute
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 2 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 4 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
