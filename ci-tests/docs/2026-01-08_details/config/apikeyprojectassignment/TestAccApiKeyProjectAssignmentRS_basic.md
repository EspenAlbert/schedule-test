# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da96fd59b8466ea732ae9 | dev | flaky_500 | 9.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-12-11 PASS 13 seconds
- 2025-12-12 PASS 15 seconds
- 2025-12-13 PASS 11 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 seconds
- 2025-12-16 PASS 14 seconds
- 2025-12-17 PASS 12 seconds
- 2025-12-18 PASS 14 seconds
- 2025-12-19 PASS 10 seconds
- 2025-12-20 PASS 10 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 seconds
- 2025-12-23 PASS 11 seconds
- 2025-12-24 PASS 15 seconds
- 2025-12-25 PASS 11 seconds
- 2025-12-26 PASS 14 seconds
- 2025-12-27 PASS 11 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 12 seconds
- 2025-12-31 PASS 11 seconds
- 2026-01-01 PASS 10 seconds
- 2026-01-02 PASS 11 seconds
- 2026-01-03 PASS 11 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 13 seconds
- 2026-01-06 PASS 14 seconds
- 2026-01-07

### Error 2026-01-07T00:33:25+00:00
```
2026-01-07T00:33:25.9803946Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-01-07T00:33:25.9804639Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-01-07T00:33:25.9816263Z   
2026-01-07T00:33:25.9816716Z     resource_test.go:32: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2026-01-07T00:33:25.9817121Z         
2026-01-07T00:33:25.9817629Z         Error: error when getting project from Atlas
2026-01-07T00:33:25.9817921Z         
2026-01-07T00:33:25.9818217Z           with mongodbatlas_project.test,
2026-01-07T00:33:25.9818800Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:25.9819331Z           18: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:25.9819620Z         
2026-01-07T00:33:25.9819944Z         error getting project (695da96fd59b8466ea732ae9):
2026-01-07T00:33:25.9820501Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da96fd59b8466ea732ae9
2026-01-07T00:33:25.9821141Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:25.9821712Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:25.9822105Z         BadRequestDetail: 
2026-01-07T00:33:25.9822421Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (9.34s)
```

- 2026-01-08 PASS 12 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 9 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 9 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 9 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 seconds
