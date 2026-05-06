# autogen_fast/projectapi/TestAccProjectAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:49](#error-2026-04-11t0049540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.05s
[2026-04-30 01:02](#error-2026-04-30t0102360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s
[2026-05-05 00:59](#error-2026-05-05t0059010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 10 seconds
- 2026-04-08 PASS 9 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 8 seconds
- 2026-04-11

### Error 2026-04-11T00:49:54+00:00
```
2026-04-11T00:49:54.5553724Z === RUN   TestAccProjectAPI_basic
2026-04-11T00:49:54.5554906Z === CONT  TestAccProjectAPI_basic
2026-04-11T00:49:54.5577120Z    test_working_directory=/tmp/plugintest4162213666 test_step_number=1
2026-04-11T00:49:54.5578153Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-04-11T00:49:54.5578869Z         
2026-04-11T00:49:54.5579595Z         Error: Error calling API in Create
2026-04-11T00:49:54.5580159Z         
2026-04-11T00:49:54.5580777Z           with mongodbatlas_project_api.test,
2026-04-11T00:49:54.5581922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-04-11T00:49:54.5583015Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-04-11T00:49:54.5583618Z         
2026-04-11T00:49:54.5584479Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:49:54.5585615Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:49:54.5586677Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:49:54.5587392Z --- FAIL: TestAccProjectAPI_basic (83.45s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 9 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 10 seconds
- 2026-04-16 PASS 11 seconds
- 2026-04-17 PASS 10 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 seconds
- 2026-04-21 PASS 17 seconds
- 2026-04-22 PASS 10 seconds
- 2026-04-23 PASS 17 seconds
- 2026-04-24 PASS 9 seconds
- 2026-04-25 PASS 9 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 10 seconds
- 2026-04-28 PASS 9 seconds
- 2026-04-29 PASS 9 seconds
- 2026-04-30

### Error 2026-04-30T01:02:36+00:00
```
2026-04-30T01:02:36.0935379Z === RUN   TestAccProjectAPI_basic
2026-04-30T01:02:36.0936026Z === CONT  TestAccProjectAPI_basic
2026-04-30T01:02:36.0946602Z    test_name=TestAccProjectAPI_basic
2026-04-30T01:02:36.0947091Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-04-30T01:02:36.0947497Z         
2026-04-30T01:02:36.0947826Z         Error: Error calling API in Create
2026-04-30T01:02:36.0948132Z         
2026-04-30T01:02:36.0948467Z           with mongodbatlas_project_api.test,
2026-04-30T01:02:36.0949119Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-04-30T01:02:36.0952428Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-04-30T01:02:36.0952949Z         
2026-04-30T01:02:36.0953881Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:02:36.0954891Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:02:36.0955878Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0956506Z --- FAIL: TestAccProjectAPI_basic (61.96s)
```

- 2026-05-01 PASS 10 seconds
- 2026-05-02 PASS 12 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 seconds
- 2026-05-05

### Error 2026-05-05T00:59:01+00:00
```
2026-05-05T00:59:01.1159723Z === RUN   TestAccProjectAPI_basic
2026-05-05T00:59:01.1161436Z === CONT  TestAccProjectAPI_basic
2026-05-05T00:59:01.1200345Z   
2026-05-05T00:59:01.1201092Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-05T00:59:01.1201829Z         
2026-05-05T00:59:01.1202434Z         Error: Error calling API in Create
2026-05-05T00:59:01.1203235Z         
2026-05-05T00:59:01.1204063Z           with mongodbatlas_project_api.test,
2026-05-05T00:59:01.1205266Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-05-05T00:59:01.1206561Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-05-05T00:59:01.1207176Z         
2026-05-05T00:59:01.1208064Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:59:01.1209268Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:59:01.1214996Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:59:01.1215791Z --- FAIL: TestAccProjectAPI_basic (62.62s)
```

- 2026-05-06 PASS 8 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 10 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 8 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 10 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 9 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 seconds
