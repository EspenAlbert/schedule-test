# 1/provider/TestAccSTSAssumeRole_basic Test Details
# Found 93 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 52) SKIP(x 39) FAIL(x 2)
Success rate: 96.30%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 8.04s
[2026-01-07 00:30](#error-2026-01-07t0030340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 7.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 23 seconds
  - PASS 13 seconds
  - PASS 25 seconds
  - PASS 18 seconds
- 2025-12-11
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-12
  - PASS 15 seconds
  - PASS 19 seconds
  - PASS 15 seconds
- 2025-12-13
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-14: MISSING
- 2025-12-15
  - PASS 9 seconds
  - PASS 16 seconds
  - PASS 24 seconds
- 2025-12-16
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-17
  - PASS 19 seconds
  - PASS 19 seconds
  - PASS 9 seconds
- 2025-12-18
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-19
  - PASS 18 seconds
  - PASS 15 seconds
  - PASS 19 seconds
- 2025-12-20
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-21: MISSING
- 2025-12-22
  - PASS 8 seconds
  - PASS 23 seconds
  - PASS 21 seconds
- 2025-12-23
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-24
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 15 seconds
- 2025-12-25
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-26
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-12-27
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-12-31
  - PASS 11 seconds
  - PASS 18 seconds
  - PASS 18 seconds
- 2026-01-01
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2026-01-02
  - PASS 12 seconds
  - PASS 18 seconds
  - PASS 19 seconds
- 2026-01-03
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2026-01-04: MISSING
- 2026-01-05
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 15 seconds
- 2026-01-06
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2026-01-07
  - FAIL 8 seconds

### Error 2026-01-07T00:30:31+00:00
```
2026-01-07T00:30:31.4550277Z === RUN   TestAccSTSAssumeRole_basic
2026-01-07T00:30:31.4551500Z === CONT  TestAccSTSAssumeRole_basic
2026-01-07T00:30:38.8019509Z    test_working_directory=/tmp/plugintest2054632936
2026-01-07T00:30:38.8020811Z     provider_authentication_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:30:38.8021317Z         
2026-01-07T00:30:38.8021768Z         Error: error creating project: test-acc-tf-p-205686981809110662
2026-01-07T00:30:38.8022157Z         
2026-01-07T00:30:38.8022560Z           with mongodbatlas_project.test,
2026-01-07T00:30:38.8023405Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:30:38.8023968Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:30:38.8024285Z         
2026-01-07T00:30:38.8024759Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:30:38.8025400Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:30:38.8025979Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:30:39.8791946Z --- FAIL: TestAccSTSAssumeRole_basic (8.42s)
```

  - PASS 11 seconds
  - FAIL 7 seconds

### Error 2026-01-07T00:30:34+00:00
```
2026-01-07T00:30:34.3513972Z === RUN   TestAccSTSAssumeRole_basic
2026-01-07T00:30:34.3515522Z === CONT  TestAccSTSAssumeRole_basic
2026-01-07T00:30:41.2962414Z    test_name=TestAccSTSAssumeRole_basic test_terraform_path=/home/runner/work/_temp/b4192c88-c985-4b41-924d-ae38df173c06/terraform test_working_directory=/tmp/plugintest314029962 test_step_number=1
2026-01-07T00:30:41.2964876Z     provider_authentication_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:30:41.2965683Z         
2026-01-07T00:30:41.2966221Z         Error: error creating project: test-acc-tf-p-3271184202951263687
2026-01-07T00:30:41.2966922Z         
2026-01-07T00:30:41.2967380Z           with mongodbatlas_project.test,
2026-01-07T00:30:41.2968414Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:30:41.2969335Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:30:41.2969790Z         
2026-01-07T00:30:41.2970635Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:30:41.2971737Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:30:41.2972789Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:30:42.2714423Z --- FAIL: TestAccSTSAssumeRole_basic (7.92s)
```

- 2026-01-08
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21
  - PASS 7 seconds
  - PASS 20 seconds
  - PASS 22 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 20 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 17 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 6 seconds
  - PASS 15 seconds
  - PASS 20 seconds
