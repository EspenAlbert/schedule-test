# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95bd59b8466ea72eddf | dev | flaky_500 | 12.07s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | flaky_500 | 1.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 25 seconds
  - PASS 13 seconds
- 2025-12-11 PASS 17 seconds
- 2025-12-12 PASS 25 seconds
- 2025-12-13 PASS 19 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 seconds
- 2025-12-16 PASS 19 seconds
- 2025-12-17 PASS 24 seconds
- 2025-12-18 PASS 21 seconds
- 2025-12-19 PASS 24 seconds
- 2025-12-20 PASS 21 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 20 seconds
- 2025-12-23 PASS 20 seconds
- 2025-12-24 PASS 16 seconds
- 2025-12-25 PASS 17 seconds
- 2025-12-26 PASS 24 seconds
- 2025-12-27 PASS 19 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 23 seconds
- 2025-12-31 PASS 24 seconds
- 2026-01-01 PASS 21 seconds
- 2026-01-02 PASS 24 seconds
- 2026-01-03 PASS 26 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 25 seconds
- 2026-01-06 PASS 19 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2829873Z === RUN   TestAccProject_updatedToEmptyLimits
2026-01-07T00:33:18.2838697Z === CONT  TestAccProject_updatedToEmptyLimits
2026-01-07T00:33:18.3007823Z === NAME  TestAccProject_updatedToEmptyLimits
2026-01-07T00:33:18.3008369Z     resource_project_test.go:954: Step 2/2 error: Error running pre-apply plan: exit status 1
2026-01-07T00:33:18.3008783Z         
2026-01-07T00:33:18.3009110Z         Error: error when getting project from Atlas
2026-01-07T00:33:18.3009408Z         
2026-01-07T00:33:18.3009717Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.3010305Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.3010849Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.3011144Z         
2026-01-07T00:33:18.3011481Z         error getting project (695da95bd59b8466ea72eddf):
2026-01-07T00:33:18.3012059Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95bd59b8466ea72eddf
2026-01-07T00:33:18.3012702Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:18.3013275Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:18.3013664Z         BadRequestDetail: 
2026-01-07T00:33:18.3014510Z --- FAIL: TestAccProject_updatedToEmptyLimits (12.75s)
```

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

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 19 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 12 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 23 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 seconds
