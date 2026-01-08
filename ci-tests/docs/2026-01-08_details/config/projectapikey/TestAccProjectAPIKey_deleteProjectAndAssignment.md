# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-12-11 PASS 12 seconds
- 2025-12-12 PASS 14 seconds
- 2025-12-13 PASS 10 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 seconds
- 2025-12-16 PASS 13 seconds
- 2025-12-17 PASS 11 seconds
- 2025-12-18 PASS 12 seconds
- 2025-12-19 PASS 10 seconds
- 2025-12-20 PASS 10 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 seconds
- 2025-12-23 PASS 10 seconds
- 2025-12-24 PASS 14 seconds
- 2025-12-25 PASS 12 seconds
- 2025-12-26 PASS 13 seconds
- 2025-12-27 PASS 10 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 10 seconds
- 2025-12-31 PASS 11 seconds
- 2026-01-01 PASS 12 seconds
- 2026-01-02 PASS 8 seconds
- 2026-01-03 PASS 12 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 14 seconds
- 2026-01-06 PASS 14 seconds
- 2026-01-07

### Error 2026-01-07T00:33:25+00:00
```
2026-01-07T00:33:25.9747118Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2026-01-07T00:33:25.9750959Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2026-01-07T00:33:25.9787935Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2026-01-07T00:33:25.9788896Z     resource_project_api_key_test.go:213: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:25.9789559Z         
2026-01-07T00:33:25.9790229Z         Error: error creating project: test-acc-tf-p-5893479410815114692
2026-01-07T00:33:25.9790593Z         
2026-01-07T00:33:25.9790911Z           with mongodbatlas_project.project2,
2026-01-07T00:33:25.9791546Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2026-01-07T00:33:25.9792128Z           13: 		resource "mongodbatlas_project" "project2" {
2026-01-07T00:33:25.9792448Z         
2026-01-07T00:33:25.9792914Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:25.9793534Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:25.9794104Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:25.9794552Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (3.77s)
```

- 2026-01-08 PASS 10 seconds

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
- 2025-12-21 PASS 9 seconds
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
- 2026-01-08 PASS 13 seconds
