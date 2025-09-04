# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5dc34192cd1cc58a14bb/limits | qa | flaky_500 | 39.09s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398117e07f9709daf0fa2/limits | qa | flaky_500 | 46.08s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 45 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 11 seconds
- 2025-08-10 PASS 44 seconds
- 2025-08-11 PASS 19 seconds
- 2025-08-12
  - PASS 18 seconds
  - PASS 11 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 15 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 32 seconds
- 2025-08-18 PASS 12 seconds
- 2025-08-19 PASS 17 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 18 seconds
- 2025-08-21 PASS 17 seconds
- 2025-08-22 PASS 13 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0462840Z === RUN   TestAccProject_withUpdatedSettings
2025-08-24T00:42:09.0469574Z === CONT  TestAccProject_withUpdatedSettings
2025-08-24T00:42:09.0577667Z === NAME  TestAccProject_withUpdatedSettings
2025-08-24T00:42:09.0578220Z     resource_project_test.go:679: Step 2/3 error: Error running pre-apply plan: exit status 1
2025-08-24T00:42:09.0578632Z         
2025-08-24T00:42:09.0579015Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0579350Z         
2025-08-24T00:42:09.0579646Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0580237Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0580779Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0581104Z         
2025-08-24T00:42:09.0581558Z         error getting project (68aa5dc34192cd1cc58a14bb): error getting project's
2025-08-24T00:42:09.0582021Z         limits (68aa5dc34192cd1cc58a14bb):
2025-08-24T00:42:09.0582594Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5dc34192cd1cc58a14bb/limits
2025-08-24T00:42:09.0583270Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0583843Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0584235Z         BadRequestDetail: 
2025-08-24T00:42:09.0596723Z    test_working_directory=/tmp/plugintest50135221 test_step_number=1
2025-08-24T00:42:09.0604130Z --- FAIL: TestAccProject_withUpdatedSettings (39.89s)
```

- 2025-08-25 PASS 11 seconds
- 2025-08-26 PASS 18 seconds
- 2025-08-27 PASS 14 seconds
- 2025-08-28 PASS 16 seconds
- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7526922Z === RUN   TestAccProject_withUpdatedSettings
2025-08-31T00:45:03.7535896Z === CONT  TestAccProject_withUpdatedSettings
2025-08-31T00:45:03.7727497Z === NAME  TestAccProject_withUpdatedSettings
2025-08-31T00:45:03.7728010Z     resource_project_test.go:679: Step 2/3 error: Error running apply: exit status 1
2025-08-31T00:45:03.7728503Z         
2025-08-31T00:45:03.7728878Z         Error: error when getting project properties after create
2025-08-31T00:45:03.7729325Z         
2025-08-31T00:45:03.7729622Z           with mongodbatlas_project.test,
2025-08-31T00:45:03.7730445Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:45:03.7731102Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7731432Z         
2025-08-31T00:45:03.7731974Z         error getting project (68b398117e07f9709daf0fa2): error getting project's
2025-08-31T00:45:03.7732692Z         limits (68b398117e07f9709daf0fa2):
2025-08-31T00:45:03.7733382Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398117e07f9709daf0fa2/limits
2025-08-31T00:45:03.7734164Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7734761Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7735247Z         BadRequestDetail: 
2025-08-31T00:45:03.7735550Z --- FAIL: TestAccProject_withUpdatedSettings (46.78s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2454660Z === RUN   TestAccProject_withUpdatedSettings
2025-09-01T00:34:53.2462709Z === CONT  TestAccProject_withUpdatedSettings
2025-09-01T00:34:53.2692206Z === NAME  TestAccProject_withUpdatedSettings
2025-09-01T00:34:53.2692720Z     resource_project_test.go:679: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:34:53.2693106Z         
2025-09-01T00:34:53.2693511Z         Error: error creating project: test-acc-tf-p-5427522129698867614
2025-09-01T00:34:53.2693860Z         
2025-09-01T00:34:53.2694155Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2694739Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2695271Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2695564Z         
2025-09-01T00:34:53.2696031Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2696664Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2697278Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2697874Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2698397Z         BadRequestDetail: 
2025-09-01T00:34:53.2705695Z   
2025-09-01T00:34:53.2715518Z --- FAIL: TestAccProject_withUpdatedSettings (1.97s)
```

  - PASS 16 seconds
  - PASS 18 seconds
  - PASS 16 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 17 seconds
  - PASS 11 seconds
- 2025-09-02 PASS 18 seconds
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 12 seconds