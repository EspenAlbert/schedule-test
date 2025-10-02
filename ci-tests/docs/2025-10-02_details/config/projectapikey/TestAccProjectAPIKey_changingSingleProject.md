# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 5)
Success rate: 88.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:31](#error-2025-09-07t0031520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd2148704811492b563f6/limits | qa | flaky_500 | 33.10s
[2025-09-08 09:36](#error-2025-09-08t0936480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea31a0cddbf4f6e4a2e7f/limits | qa | flaky_500 | 150.06s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c8e1411d835e95b501e/limits | qa | flaky_500 | 35.02s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b094d444485797b5f975/limits | qa | flaky_500 | 34.00s
[2025-09-21 00:32](#error-2025-09-21t0032220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf473a5ccc8c441718bed9/limits | qa | flaky_500 | 64.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 23 seconds
- 2025-09-04 PASS 30 seconds
- 2025-09-05 PASS 23 seconds
- 2025-09-06 PASS 34 seconds
- 2025-09-07

### Error 2025-09-07T00:31:52+00:00
```
2025-09-07T00:31:52.3798337Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-09-07T00:31:52.3804348Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-09-07T00:31:52.3848130Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-09-07T00:31:52.3848667Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-09-07T00:31:52.3849062Z         
2025-09-07T00:31:52.3849430Z         Error: error when getting project properties after create
2025-09-07T00:31:52.3849745Z         
2025-09-07T00:31:52.3850032Z           with mongodbatlas_project.proj2,
2025-09-07T00:31:52.3850611Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-09-07T00:31:52.3851148Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-09-07T00:31:52.3851438Z         
2025-09-07T00:31:52.3851864Z         error getting project (68bcd2148704811492b563f6): error getting project's
2025-09-07T00:31:52.3852303Z         limits (68bcd2148704811492b563f6):
2025-09-07T00:31:52.3852844Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd2148704811492b563f6/limits
2025-09-07T00:31:52.3853606Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:52.3854169Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:52.3854550Z         BadRequestDetail: 
2025-09-07T00:31:52.3854867Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (33.98s)
```

- 2025-09-08
  - PASS 52 seconds
  - FAIL 2 minutes

### Error 2025-09-08T09:36:48+00:00
```
2025-09-08T09:36:48.0032687Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-09-08T09:36:48.0042829Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-09-08T09:36:48.0066889Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-09-08T09:36:48.0067526Z     resource_project_api_key_test.go:63: Step 4/4 error: Error running post-apply refresh plan: exit status 1
2025-09-08T09:36:48.0067987Z         
2025-09-08T09:36:48.0068577Z         Error: error when getting project properties after create
2025-09-08T09:36:48.0068914Z         
2025-09-08T09:36:48.0069209Z           with mongodbatlas_project.proj2,
2025-09-08T09:36:48.0069802Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-09-08T09:36:48.0070343Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-09-08T09:36:48.0070641Z         
2025-09-08T09:36:48.0071078Z         error getting project (68bea31a0cddbf4f6e4a2e7f): error getting project's
2025-09-08T09:36:48.0071537Z         limits (68bea31a0cddbf4f6e4a2e7f):
2025-09-08T09:36:48.0072105Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea31a0cddbf4f6e4a2e7f/limits
2025-09-08T09:36:48.0072765Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:36:48.0073347Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:36:48.0073732Z         BadRequestDetail: 
2025-09-08T09:36:48.0074069Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (150.63s)
```

  - PASS 39 seconds
- 2025-09-09 PASS 49 seconds
- 2025-09-10 PASS 24 seconds
- 2025-09-11 PASS 27 seconds
- 2025-09-12 PASS 25 seconds
- 2025-09-13 PASS 51 seconds
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4733339Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-09-14T00:31:20.4742386Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-09-14T00:31:20.4797870Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-09-14T00:31:20.4798517Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-09-14T00:31:20.4798992Z         
2025-09-14T00:31:20.4799416Z         Error: error when getting project properties after create
2025-09-14T00:31:20.4799795Z         
2025-09-14T00:31:20.4800130Z           with mongodbatlas_project.proj2,
2025-09-14T00:31:20.4800819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-09-14T00:31:20.4801454Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-09-14T00:31:20.4801786Z         
2025-09-14T00:31:20.4802279Z         error getting project (68c60c8e1411d835e95b501e): error getting project's
2025-09-14T00:31:20.4802787Z         limits (68c60c8e1411d835e95b501e):
2025-09-14T00:31:20.4803414Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c8e1411d835e95b501e/limits
2025-09-14T00:31:20.4804167Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:31:20.4804959Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:31:20.4805414Z         BadRequestDetail: 
2025-09-14T00:31:20.4805809Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (35.25s)
```

- 2025-09-15
  - PASS 22 seconds
  - FAIL 34 seconds

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.2303716Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-09-15T06:23:28.2309589Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-09-15T06:23:28.2354550Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-09-15T06:23:28.2355093Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-09-15T06:23:28.2355493Z         
2025-09-15T06:23:28.2355865Z         Error: error when getting project properties after create
2025-09-15T06:23:28.2356192Z         
2025-09-15T06:23:28.2356489Z           with mongodbatlas_project.proj2,
2025-09-15T06:23:28.2357071Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-09-15T06:23:28.2357611Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-09-15T06:23:28.2357905Z         
2025-09-15T06:23:28.2358336Z         error getting project (68c7b094d444485797b5f975): error getting project's
2025-09-15T06:23:28.2358784Z         limits (68c7b094d444485797b5f975):
2025-09-15T06:23:28.2359341Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b094d444485797b5f975/limits
2025-09-15T06:23:28.2359985Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:23:28.2360554Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:23:28.2360935Z         BadRequestDetail: 
2025-09-15T06:23:28.2361734Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (34.02s)
```

- 2025-09-16 PASS 28 seconds
- 2025-09-17 PASS 49 seconds
- 2025-09-18 PASS 42 seconds
- 2025-09-19 PASS 33 seconds
- 2025-09-20 PASS 46 seconds
- 2025-09-21

### Error 2025-09-21T00:32:22+00:00
```
2025-09-21T00:32:22.2308985Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-09-21T00:32:22.2316555Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-09-21T00:32:22.2359677Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-09-21T00:32:22.2360307Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:32:22.2360757Z         
2025-09-21T00:32:22.2361132Z         Error: error when getting project properties after create
2025-09-21T00:32:22.2361453Z         
2025-09-21T00:32:22.2361757Z           with mongodbatlas_project.proj2,
2025-09-21T00:32:22.2362360Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-09-21T00:32:22.2362904Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-09-21T00:32:22.2363187Z         
2025-09-21T00:32:22.2363641Z         error getting project (68cf473a5ccc8c441718bed9): error getting project's
2025-09-21T00:32:22.2364094Z         limits (68cf473a5ccc8c441718bed9):
2025-09-21T00:32:22.2364669Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf473a5ccc8c441718bed9/limits
2025-09-21T00:32:22.2365343Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:32:22.2366070Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:32:22.2366448Z         BadRequestDetail: 
2025-09-21T00:32:22.2366772Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (64.43s)
```

- 2025-09-22 PASS 22 seconds
- 2025-09-23 PASS 20 seconds
- 2025-09-24 PASS 28 seconds
- 2025-09-25 PASS 45 seconds
- 2025-09-26 PASS 36 seconds
- 2025-09-27 PASS 46 seconds
- 2025-09-28 PASS 21 seconds
- 2025-09-29 PASS 22 seconds
- 2025-09-30
  - PASS 26 seconds
  - PASS 41 seconds
  - PASS 20 seconds
- 2025-10-01
  - PASS 23 seconds
  - PASS 21 seconds
  - PASS 36 seconds
  - PASS 21 seconds
  - PASS 19 seconds
  - PASS 23 seconds
  - PASS 29 seconds
  - PASS 31 seconds
  - PASS 21 seconds
- 2025-10-02 PASS 47 seconds