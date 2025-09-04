# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:29](#error-2025-08-23t0029480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a90af9b4cd9f3d80a39742/limits | dev | flaky_500 | 5.02s
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5dc34192cd1cc58a1513/limits | qa | flaky_500 | 33.02s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398110a66c308153f3963/limits | qa | flaky_500 | 40.04s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 6 seconds
- 2025-08-10 PASS 35 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 6 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 5 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23

### Error 2025-08-23T00:29:48+00:00
```
2025-08-23T00:29:48.8002423Z === RUN   TestAccProject_withFalseDefaultSettings
2025-08-23T00:29:48.8010570Z === CONT  TestAccProject_withFalseDefaultSettings
2025-08-23T00:29:48.8050017Z === NAME  TestAccProject_withFalseDefaultSettings
2025-08-23T00:29:48.8050524Z     resource_project_test.go:655: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:29:48.8050898Z         
2025-08-23T00:29:48.8051267Z         Error: error when getting project properties after create
2025-08-23T00:29:48.8051580Z         
2025-08-23T00:29:48.8051861Z           with mongodbatlas_project.test,
2025-08-23T00:29:48.8052558Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-23T00:29:48.8053091Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-23T00:29:48.8053367Z         
2025-08-23T00:29:48.8053797Z         error getting project (68a90af9b4cd9f3d80a39742): error getting project's
2025-08-23T00:29:48.8054242Z         limits (68a90af9b4cd9f3d80a39742):
2025-08-23T00:29:48.8054798Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90af9b4cd9f3d80a39742/limits
2025-08-23T00:29:48.8055446Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-23T00:29:48.8056004Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-23T00:29:48.8056375Z         BadRequestDetail: 
2025-08-23T00:29:48.8056678Z --- FAIL: TestAccProject_withFalseDefaultSettings (5.17s)
```

- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0462038Z === RUN   TestAccProject_withFalseDefaultSettings
2025-08-24T00:42:09.0472455Z === CONT  TestAccProject_withFalseDefaultSettings
2025-08-24T00:42:09.0497124Z === NAME  TestAccProject_withFalseDefaultSettings
2025-08-24T00:42:09.0497658Z     resource_project_test.go:655: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:42:09.0498043Z         
2025-08-24T00:42:09.0498435Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0498762Z         
2025-08-24T00:42:09.0499066Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0499664Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0500347Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0500652Z         
2025-08-24T00:42:09.0501102Z         error getting project (68aa5dc34192cd1cc58a1513): error getting project's
2025-08-24T00:42:09.0501570Z         limits (68aa5dc34192cd1cc58a1513):
2025-08-24T00:42:09.0502147Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5dc34192cd1cc58a1513/limits
2025-08-24T00:42:09.0502815Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0503401Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0503814Z         BadRequestDetail: 
2025-08-24T00:42:09.0504237Z --- FAIL: TestAccProject_withFalseDefaultSettings (33.24s)
```

- 2025-08-25 PASS 5 seconds
- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29 PASS 4 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7526273Z === RUN   TestAccProject_withFalseDefaultSettings
2025-08-31T00:45:03.7536526Z === CONT  TestAccProject_withFalseDefaultSettings
2025-08-31T00:45:03.7631297Z === NAME  TestAccProject_withFalseDefaultSettings
2025-08-31T00:45:03.7631878Z     resource_project_test.go:655: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:45:03.7632307Z         
2025-08-31T00:45:03.7632680Z         Error: error when getting project properties after create
2025-08-31T00:45:03.7633004Z         
2025-08-31T00:45:03.7633414Z           with mongodbatlas_project.test,
2025-08-31T00:45:03.7634011Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:45:03.7634553Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7634830Z         
2025-08-31T00:45:03.7635258Z         error getting project (68b398110a66c308153f3963): error getting project's
2025-08-31T00:45:03.7635697Z         limits (68b398110a66c308153f3963):
2025-08-31T00:45:03.7636257Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398110a66c308153f3963/limits
2025-08-31T00:45:03.7636906Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7637469Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7637847Z         BadRequestDetail: 
2025-08-31T00:45:03.7639631Z --- FAIL: TestAccProject_withFalseDefaultSettings (40.37s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2453987Z === RUN   TestAccProject_withFalseDefaultSettings
2025-09-01T00:34:53.2461147Z === CONT  TestAccProject_withFalseDefaultSettings
2025-09-01T00:34:53.2535028Z === NAME  TestAccProject_withFalseDefaultSettings
2025-09-01T00:34:53.2535611Z     resource_project_test.go:655: Step 1/1 error: Error running apply: exit status 1
2025-09-01T00:34:53.2536034Z         
2025-09-01T00:34:53.2536458Z         Error: error creating project: test-acc-tf-p-3862076816326971289
2025-09-01T00:34:53.2536810Z         
2025-09-01T00:34:53.2537118Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2537721Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2538268Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2538561Z         
2025-09-01T00:34:53.2539048Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2539693Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2540317Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2540927Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2541580Z         BadRequestDetail: 
2025-09-01T00:34:53.2548989Z    test_step_number=1 test_working_directory=/tmp/plugintest224621558
2025-09-01T00:34:53.2714828Z --- FAIL: TestAccProject_withFalseDefaultSettings (1.97s)
```

  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 4 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 8 seconds