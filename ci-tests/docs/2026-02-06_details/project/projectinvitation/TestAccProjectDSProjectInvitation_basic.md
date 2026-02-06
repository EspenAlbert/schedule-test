# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 3.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 9 seconds
  - FAIL 3 seconds

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7805274Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-01-08T07:59:10.7817172Z   
2026-01-08T07:59:10.7817666Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-01-08T07:59:10.7818126Z         
2026-01-08T07:59:10.7818605Z         Error: error getting project's settings assigned (695f639daa2a8443b4900eaf):
2026-01-08T07:59:10.7819009Z         
2026-01-08T07:59:10.7819317Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7819951Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7820530Z           13: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7820833Z         
2026-01-08T07:59:10.7821366Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639daa2a8443b4900eaf/settings
2026-01-08T07:59:10.7822083Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T07:59:10.7822744Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7823225Z --- FAIL: TestAccProjectDSProjectInvitation_basic (3.44s)
```

  - PASS 9 seconds
- 2026-01-09 PASS 7 seconds
- 2026-01-10 PASS 7 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 8 seconds
- 2026-01-13 PASS 8 seconds
- 2026-01-14 PASS 6 seconds
- 2026-01-15 PASS 8 seconds
- 2026-01-16 PASS 7 seconds
- 2026-01-17 PASS 9 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 6 seconds
- 2026-01-20 PASS 8 seconds
- 2026-01-21 PASS 7 seconds
- 2026-01-22
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-01-23 PASS 11 seconds
- 2026-01-24 PASS 8 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 seconds
- 2026-01-27 PASS 9 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 8 seconds
- 2026-01-30 PASS 5 seconds
- 2026-01-31 PASS 9 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 10 seconds
- 2026-02-03 PASS 10 seconds
- 2026-02-04 PASS 6 seconds
- 2026-02-05 PASS 10 seconds
- 2026-02-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 5 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 6 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 4 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 8 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 7 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
