# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 3.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 10 seconds
  - PASS 6 seconds
- 2025-12-11 PASS 7 seconds
- 2025-12-12 PASS 9 seconds
- 2025-12-13 PASS 14 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16 PASS 7 seconds
- 2025-12-17 PASS 8 seconds
- 2025-12-18 PASS 8 seconds
- 2025-12-19 PASS 8 seconds
- 2025-12-20 PASS 10 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 8 seconds
- 2025-12-23 PASS 7 seconds
- 2025-12-24 PASS 6 seconds
- 2025-12-25 PASS 8 seconds
- 2025-12-26 PASS 9 seconds
- 2025-12-27 PASS 9 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 9 seconds
- 2025-12-31 PASS 8 seconds
- 2026-01-01 PASS 8 seconds
- 2026-01-02 PASS 9 seconds
- 2026-01-03 PASS 9 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 11 seconds
- 2026-01-06 PASS 11 seconds
- 2026-01-07 PASS 9 seconds
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

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 7 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 8 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 seconds
