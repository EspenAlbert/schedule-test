# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | flaky_500 | 1.10s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 23 seconds
  - FAIL a second

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7587218Z === RUN   TestAccProject_updatedToEmptyLimits
2026-01-08T07:59:10.7593530Z === CONT  TestAccProject_updatedToEmptyLimits
2026-01-08T07:59:10.7661080Z === NAME  TestAccProject_updatedToEmptyLimits
2026-01-08T07:59:10.7661620Z     resource_project_test.go:954: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7662023Z         
2026-01-08T07:59:10.7662436Z         Error: error creating project: test-acc-tf-p-7557169365005321484
2026-01-08T07:59:10.7662803Z         
2026-01-08T07:59:10.7663103Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7663726Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7664490Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7664831Z         
2026-01-08T07:59:10.7665333Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7665977Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7671645Z    test_terraform_path=/home/runner/work/_temp/daafcaaa-3567-41b0-9fbf-76b4c446a70f/terraform test_working_directory=/tmp/plugintest3465146244 test_name=TestAccProject_withFalseDefaultSettings test_step_number=1
2026-01-08T07:59:10.7706477Z --- FAIL: TestAccProject_updatedToEmptyLimits (1.99s)
```

  - PASS 20 seconds
- 2026-01-09 PASS 17 seconds
- 2026-01-10 PASS 18 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 21 seconds
- 2026-01-13 PASS 18 seconds
- 2026-01-14 PASS 13 seconds
- 2026-01-15 PASS 20 seconds
- 2026-01-16 PASS 15 seconds
- 2026-01-17 PASS 24 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 15 seconds
- 2026-01-20 PASS 20 seconds
- 2026-01-21 PASS 17 seconds
- 2026-01-22
  - PASS 19 seconds
  - PASS 19 seconds
- 2026-01-23 PASS 25 seconds
- 2026-01-24 PASS 21 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 24 seconds
- 2026-01-27 PASS 24 seconds
- 2026-01-28 PASS 18 seconds
- 2026-01-29 PASS 20 seconds
- 2026-01-30 PASS 14 seconds
- 2026-01-31 PASS 21 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 24 seconds
- 2026-02-03 PASS 24 seconds
- 2026-02-04 PASS 18 seconds
- 2026-02-05 PASS 20 seconds
- 2026-02-06 PASS 16 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 11 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 15 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 13 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 22 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 19 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
