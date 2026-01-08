# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.08s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 0.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 14 seconds
  - PASS 8 seconds
- 2025-12-11 PASS 11 seconds
- 2025-12-12 PASS 13 seconds
- 2025-12-13 PASS 12 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 9 seconds
- 2025-12-16 PASS 12 seconds
- 2025-12-17 PASS 14 seconds
- 2025-12-18 PASS 11 seconds
- 2025-12-19 PASS 12 seconds
- 2025-12-20 PASS 11 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 11 seconds
- 2025-12-23 PASS 10 seconds
- 2025-12-24 PASS 8 seconds
- 2025-12-25 PASS 9 seconds
- 2025-12-26 PASS 13 seconds
- 2025-12-27 PASS 9 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 12 seconds
- 2025-12-31 PASS 15 seconds
- 2026-01-01 PASS 12 seconds
- 2026-01-02 PASS 13 seconds
- 2026-01-03 PASS 15 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 14 seconds
- 2026-01-06 PASS 11 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.3045418Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-01-07T00:33:18.3055737Z    test_step_number=1
2026-01-07T00:33:18.3056233Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:33:18.3056653Z         
2026-01-07T00:33:18.3057066Z         Error: error creating project: test-acc-tf-p-1401933675947184083
2026-01-07T00:33:18.3057418Z         
2026-01-07T00:33:18.3057718Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.3058307Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.3058846Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.3059139Z         
2026-01-07T00:33:18.3059601Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:18.3060348Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:18.3060918Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:18.3061343Z --- FAIL: TestAccProjectRSProjectInvitation_basic (3.78s)
```

- 2026-01-08
  - PASS 11 seconds
  - FAIL a moment

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7846157Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-01-08T07:59:10.7856031Z    test_terraform_path=/home/runner/work/_temp/daafcaaa-3567-41b0-9fbf-76b4c446a70f/terraform test_name=TestAccProjectRSProjectInvitation_basic test_working_directory=/tmp/plugintest1624494311 test_step_number=1
2026-01-08T07:59:10.7857225Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-08T07:59:10.7857696Z         
2026-01-08T07:59:10.7858126Z         Error: error creating project: test-acc-tf-p-3079698995144085354
2026-01-08T07:59:10.7858503Z         
2026-01-08T07:59:10.7858806Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7859429Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7860015Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7860327Z         
2026-01-08T07:59:10.7860828Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7861471Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7861927Z --- FAIL: TestAccProjectRSProjectInvitation_basic (0.62s)
```

  - PASS 11 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 6 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 seconds
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
- 2026-01-08 PASS 10 seconds
