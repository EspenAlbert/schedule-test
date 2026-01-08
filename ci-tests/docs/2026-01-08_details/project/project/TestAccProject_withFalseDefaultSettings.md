# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | Step 1 1 | dev | 7.03s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 1.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 14 seconds
  - PASS 10 seconds
- 2025-12-11 PASS 10 seconds
- 2025-12-12 PASS 15 seconds
- 2025-12-13 PASS 14 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 seconds
- 2025-12-16 PASS 12 seconds
- 2025-12-17 PASS 14 seconds
- 2025-12-18 PASS 12 seconds
- 2025-12-19 PASS 15 seconds
- 2025-12-20 PASS 13 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 seconds
- 2025-12-23 PASS 12 seconds
- 2025-12-24 PASS 10 seconds
- 2025-12-25 PASS 11 seconds
- 2025-12-26 PASS 14 seconds
- 2025-12-27 PASS 10 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 13 seconds
- 2025-12-31 PASS 14 seconds
- 2026-01-01 PASS 13 seconds
- 2026-01-02 PASS 14 seconds
- 2026-01-03 PASS 15 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 seconds
- 2026-01-06 PASS 11 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2826632Z === RUN   TestAccProject_withFalseDefaultSettings
2026-01-07T00:33:18.2836911Z === CONT  TestAccProject_withFalseDefaultSettings
2026-01-07T00:33:18.2936380Z === NAME  TestAccProject_withFalseDefaultSettings
2026-01-07T00:33:18.2937091Z     resource_project_test.go:687: Step 1/4 error: Check failed: Check 1/3 error: project (695da95baf4f6cc389e8b563) does not exist
2026-01-07T00:33:18.2938072Z --- FAIL: TestAccProject_withFalseDefaultSettings (7.29s)
```

- 2026-01-08
  - PASS 15 seconds
  - FAIL a second

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7583701Z === RUN   TestAccProject_withFalseDefaultSettings
2026-01-08T07:59:10.7591560Z === CONT  TestAccProject_withFalseDefaultSettings
2026-01-08T07:59:10.7672597Z === NAME  TestAccProject_withFalseDefaultSettings
2026-01-08T07:59:10.7673321Z     resource_project_test.go:687: Step 1/4 error: Error running apply: exit status 1
2026-01-08T07:59:10.7673766Z         
2026-01-08T07:59:10.7674192Z         Error: error creating project: test-acc-tf-p-2853912353050798552
2026-01-08T07:59:10.7674755Z         
2026-01-08T07:59:10.7675065Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7675685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7676270Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7676583Z         
2026-01-08T07:59:10.7677072Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7677710Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7683293Z    test_name=TestAccProject_withTags test_step_number=1 test_terraform_path=/home/runner/work/_temp/daafcaaa-3567-41b0-9fbf-76b4c446a70f/terraform
2026-01-08T07:59:10.7706074Z --- FAIL: TestAccProject_withFalseDefaultSettings (1.97s)
```

  - PASS 12 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 7 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
