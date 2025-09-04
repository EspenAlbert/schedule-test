# assume_role/provider/TestAccSTSAssumeRole_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:30](#error-2025-08-24t0030260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d244192cd1cc589a9c2/limits | qa | flaky_500 | 33.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 9 seconds
- 2025-08-07 PASS 58 seconds
- 2025-08-08 PASS 6 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 24 seconds
- 2025-08-11 PASS 5 seconds
- 2025-08-12 PASS 6 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 13 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18 PASS 12 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-08-21 PASS 13 seconds
- 2025-08-22 PASS 11 seconds
- 2025-08-23 PASS 13 seconds
- 2025-08-24

### Error 2025-08-24T00:30:26+00:00
```
2025-08-24T00:30:26.7552166Z === RUN   TestAccSTSAssumeRole_basic
2025-08-24T00:30:26.7553310Z === CONT  TestAccSTSAssumeRole_basic
2025-08-24T00:31:00.6796529Z   
2025-08-24T00:31:00.6797503Z     provider_authentication_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:31:00.6798559Z         
2025-08-24T00:31:00.6799246Z         Error: error when getting project properties after create
2025-08-24T00:31:00.6799848Z         
2025-08-24T00:31:00.6800381Z           with mongodbatlas_project.test,
2025-08-24T00:31:00.6801485Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:31:00.6802476Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:31:00.6802999Z         
2025-08-24T00:31:00.6803803Z         error getting project (68aa5d244192cd1cc589a9c2): error getting project's
2025-08-24T00:31:00.6804682Z         limits (68aa5d244192cd1cc589a9c2):
2025-08-24T00:31:00.6805714Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d244192cd1cc589a9c2/limits
2025-08-24T00:31:00.6806921Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:31:00.6808210Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:31:00.6808941Z         BadRequestDetail: 
2025-08-24T00:31:00.7273898Z --- FAIL: TestAccSTSAssumeRole_basic (33.97s)
```

- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 10 seconds
- 2025-08-28 PASS 6 seconds
- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 11 seconds
- 2025-09-01
  - PASS 7 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 12 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 12 seconds
- 2025-09-04 PASS 12 seconds