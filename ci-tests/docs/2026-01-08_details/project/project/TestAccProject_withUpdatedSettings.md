# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.09s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 1.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 seconds
  - PASS 12 seconds
- 2025-12-11 PASS 15 seconds
- 2025-12-12 PASS 21 seconds
- 2025-12-13 PASS 15 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 16 seconds
- 2025-12-16 PASS 18 seconds
- 2025-12-17 PASS 21 seconds
- 2025-12-18 PASS 19 seconds
- 2025-12-19 PASS 20 seconds
- 2025-12-20 PASS 19 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 seconds
- 2025-12-23 PASS 14 seconds
- 2025-12-24 PASS 13 seconds
- 2025-12-25 PASS 14 seconds
- 2025-12-26 PASS 20 seconds
- 2025-12-27 PASS 14 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 20 seconds
- 2025-12-31 PASS 20 seconds
- 2026-01-01 PASS 19 seconds
- 2026-01-02 PASS 20 seconds
- 2026-01-03 PASS 19 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 19 seconds
- 2026-01-06 PASS 15 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2827336Z === RUN   TestAccProject_withUpdatedSettings
2026-01-07T00:33:18.2836303Z === CONT  TestAccProject_withUpdatedSettings
2026-01-07T00:33:18.2873153Z === NAME  TestAccProject_withUpdatedSettings
2026-01-07T00:33:18.2873948Z     resource_project_test.go:723: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:33:18.2874621Z         
2026-01-07T00:33:18.2875071Z         Error: error creating project: test-acc-tf-p-7850904922541347232
2026-01-07T00:33:18.2875442Z         
2026-01-07T00:33:18.2875755Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.2876365Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.2876916Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.2877219Z         
2026-01-07T00:33:18.2877880Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:18.2878512Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:18.2879088Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:18.2879499Z --- FAIL: TestAccProject_withUpdatedSettings (3.86s)
```

- 2026-01-08
  - PASS 19 seconds
  - FAIL a second

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7584639Z === RUN   TestAccProject_withUpdatedSettings
2026-01-08T07:59:10.7593860Z === CONT  TestAccProject_withUpdatedSettings
2026-01-08T07:59:10.7606356Z === NAME  TestAccProject_withUpdatedSettings
2026-01-08T07:59:10.7606916Z     resource_project_test.go:723: Step 1/3 error: Error running apply: exit status 1
2026-01-08T07:59:10.7607331Z         
2026-01-08T07:59:10.7607759Z         Error: error creating project: test-acc-tf-p-3721344350517876341
2026-01-08T07:59:10.7608127Z         
2026-01-08T07:59:10.7608429Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7609042Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7609627Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7609933Z         
2026-01-08T07:59:10.7610419Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7611056Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7611483Z --- FAIL: TestAccProject_withUpdatedSettings (1.67s)
```

  - PASS 16 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 seconds
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
- 2025-12-28 PASS 19 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 19 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 seconds
