# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 1.07s

### Timeline
- 2026-01-07: MISSING
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
- 2026-01-09 PASS 15 seconds
- 2026-01-10 PASS 16 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 seconds
- 2026-01-13 PASS 15 seconds
- 2026-01-14 PASS 12 seconds
- 2026-01-15 PASS 17 seconds
- 2026-01-16 PASS 13 seconds
- 2026-01-17 PASS 18 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 seconds
- 2026-01-20 PASS 17 seconds
- 2026-01-21 PASS 15 seconds
- 2026-01-22
  - PASS 17 seconds
  - PASS 15 seconds
- 2026-01-23 PASS 20 seconds
- 2026-01-24 PASS 18 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 20 seconds
- 2026-01-27 PASS 20 seconds
- 2026-01-28 PASS 14 seconds
- 2026-01-29 PASS 16 seconds
- 2026-01-30 PASS 12 seconds
- 2026-01-31 PASS 18 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 20 seconds
- 2026-02-03 PASS 21 seconds
- 2026-02-04 PASS 15 seconds
- 2026-02-05 PASS 18 seconds
- 2026-02-06 PASS 15 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 12 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 11 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 18 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 16 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
