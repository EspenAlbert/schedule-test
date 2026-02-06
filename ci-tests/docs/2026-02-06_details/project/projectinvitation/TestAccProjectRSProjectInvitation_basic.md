# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 0.06s

### Timeline
- 2026-01-07: MISSING
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
- 2026-01-09 PASS 9 seconds
- 2026-01-10 PASS 9 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 12 seconds
- 2026-01-13 PASS 10 seconds
- 2026-01-14 PASS 8 seconds
- 2026-01-15 PASS 12 seconds
- 2026-01-16 PASS 7 seconds
- 2026-01-17 PASS 13 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 8 seconds
- 2026-01-20 PASS 11 seconds
- 2026-01-21 PASS 9 seconds
- 2026-01-22
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-01-23 PASS 15 seconds
- 2026-01-24 PASS 12 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 12 seconds
- 2026-01-27 PASS 13 seconds
- 2026-01-28 PASS 12 seconds
- 2026-01-29 PASS 10 seconds
- 2026-01-30 PASS 7 seconds
- 2026-01-31 PASS 12 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 14 seconds
- 2026-02-03 PASS 13 seconds
- 2026-02-04 PASS 11 seconds
- 2026-02-05 PASS 10 seconds
- 2026-02-06 PASS 10 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 6 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 6 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 7 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 13 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 10 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
