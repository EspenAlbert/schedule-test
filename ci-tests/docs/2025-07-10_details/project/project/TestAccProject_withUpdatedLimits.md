# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 3)
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.08s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.09s
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089f749709c3a5a3ca50f/limits | qa | flaky_500 | 54.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 28 seconds
- 2025-04-13 PASS 16 seconds
- 2025-04-14 PASS 27 seconds
- 2025-04-15 PASS 17 seconds
- 2025-04-16
  - PASS 16 seconds
  - PASS 16 seconds
- 2025-04-17 PASS 16 seconds
- 2025-04-18 PASS 27 seconds
- 2025-04-19 PASS 31 seconds
- 2025-04-20 PASS 14 seconds
- 2025-04-21 PASS 24 seconds
- 2025-04-22 PASS 16 seconds
- 2025-04-23 PASS 27 seconds
- 2025-04-24 PASS 15 seconds
- 2025-04-25 PASS 16 seconds
- 2025-04-26 PASS 52 seconds
- 2025-04-27 PASS 29 seconds
- 2025-04-28 PASS 15 seconds
- 2025-04-29 PASS 16 seconds
- 2025-04-30
  - PASS 31 seconds
  - PASS 34 seconds
- 2025-05-01
  - PASS 16 seconds
  - PASS 19 seconds
  - PASS 16 seconds
  - PASS 17 seconds
  - PASS 19 seconds
  - PASS 31 seconds
  - PASS 16 seconds
- 2025-05-02 PASS 24 seconds
- 2025-05-03 PASS 15 seconds
- 2025-05-04 PASS 18 seconds
- 2025-05-05 PASS 20 seconds
- 2025-05-06 PASS 15 seconds
- 2025-05-07 PASS 28 seconds
- 2025-05-08 PASS 17 seconds
- 2025-05-09 PASS 32 seconds
- 2025-05-10 PASS 20 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3774976Z === RUN   TestAccProject_withUpdatedLimits
2025-05-11T00:30:20.3779705Z === CONT  TestAccProject_withUpdatedLimits
2025-05-11T00:30:20.3932449Z === NAME  TestAccProject_withUpdatedLimits
2025-05-11T00:30:20.3932990Z     resource_project_test.go:825: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:30:20.3933396Z         
2025-05-11T00:30:20.3933831Z         Error: error creating project: test-acc-tf-p-7564883970410457111
2025-05-11T00:30:20.3934194Z         
2025-05-11T00:30:20.3934511Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3935160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3935725Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3936035Z         
2025-05-11T00:30:20.3936548Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3936959Z         type
2025-05-11T00:30:20.3938794Z --- FAIL: TestAccProject_withUpdatedLimits (1.80s)
```

- 2025-05-12 PASS 31 seconds
- 2025-05-13
  - PASS 18 seconds
  - PASS 15 seconds
- 2025-05-14 PASS 29 seconds
- 2025-05-15 PASS 19 seconds
- 2025-05-16 PASS 15 seconds
- 2025-05-17 PASS 22 seconds
- 2025-05-18 PASS 14 seconds
- 2025-05-19 PASS 16 seconds
- 2025-05-20 PASS 15 seconds
- 2025-05-21 PASS 15 seconds
- 2025-05-22 PASS 17 seconds
- 2025-05-23 PASS 16 seconds
- 2025-05-24 PASS 23 seconds
- 2025-05-25 PASS 17 seconds
- 2025-05-26 PASS 21 seconds
- 2025-05-27
  - PASS 16 seconds
  - PASS 20 seconds
- 2025-05-28
  - PASS 17 seconds
  - PASS 20 seconds
- 2025-05-29 PASS 29 seconds
- 2025-05-30 PASS 22 seconds
- 2025-05-31 PASS 17 seconds
- 2025-06-01
  - PASS 23 seconds
  - PASS 20 seconds
  - PASS 19 seconds
  - PASS 21 seconds
  - PASS 17 seconds
  - PASS 18 seconds
- 2025-06-02
  - PASS 17 seconds
  - PASS 32 seconds
  - PASS 20 seconds
- 2025-06-03 PASS 20 seconds
- 2025-06-04 PASS 31 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4932347Z === RUN   TestAccProject_withUpdatedLimits
2025-06-05T00:29:34.4937036Z === CONT  TestAccProject_withUpdatedLimits
2025-06-05T00:29:34.5052720Z === NAME  TestAccProject_withUpdatedLimits
2025-06-05T00:29:34.5053359Z     resource_project_test.go:825: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:29:34.5053763Z         
2025-06-05T00:29:34.5054174Z         Error: error creating project: test-acc-tf-p-2062860948484289016
2025-06-05T00:29:34.5054535Z         
2025-06-05T00:29:34.5054847Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5055454Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5056005Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5056312Z         
2025-06-05T00:29:34.5056781Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5057418Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5057996Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5058404Z --- FAIL: TestAccProject_withUpdatedLimits (3.87s)
```

- 2025-06-06 PASS 29 seconds
- 2025-06-07 PASS 16 seconds
- 2025-06-08 PASS 27 seconds
- 2025-06-09 PASS 32 seconds
- 2025-06-10 PASS 31 seconds
- 2025-06-11
  - PASS 24 seconds
  - PASS 15 seconds
- 2025-06-12 PASS 29 seconds
- 2025-06-13 PASS 34 seconds
- 2025-06-14 PASS 20 seconds
- 2025-06-15 PASS 27 seconds
- 2025-06-16 PASS 20 seconds
- 2025-06-17 PASS 16 seconds
- 2025-06-18 PASS 15 seconds
- 2025-06-19 PASS 18 seconds
- 2025-06-20 PASS 20 seconds
- 2025-06-21 PASS 33 seconds
- 2025-06-22 PASS 18 seconds
- 2025-06-23 PASS 16 seconds
- 2025-06-24 PASS 33 seconds
- 2025-06-25 PASS 35 seconds
- 2025-06-26 PASS 31 seconds
- 2025-06-27 PASS 22 seconds
- 2025-06-28 PASS 17 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9491008Z === RUN   TestAccProject_withUpdatedLimits
2025-06-29T00:43:46.9495210Z === CONT  TestAccProject_withUpdatedLimits
2025-06-29T00:43:46.9541835Z === NAME  TestAccProject_withUpdatedLimits
2025-06-29T00:43:46.9542395Z     resource_project_test.go:825: Step 1/3 error: Error running apply: exit status 1
2025-06-29T00:43:46.9542797Z         
2025-06-29T00:43:46.9543130Z         Error: error when getting project properties
2025-06-29T00:43:46.9543420Z         
2025-06-29T00:43:46.9543730Z           with data.mongodbatlas_project.test,
2025-06-29T00:43:46.9544313Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-06-29T00:43:46.9544830Z           29: 		data "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9545107Z         
2025-06-29T00:43:46.9545555Z         error getting project (686089f749709c3a5a3ca50f): error getting project's
2025-06-29T00:43:46.9545999Z         limits (686089f749709c3a5a3ca50f):
2025-06-29T00:43:46.9546564Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f749709c3a5a3ca50f/limits
2025-06-29T00:43:46.9547219Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9547995Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9548381Z         BadRequestDetail: 
2025-06-29T00:43:46.9560827Z    test_step_number=1
2025-06-29T00:43:46.9568173Z --- FAIL: TestAccProject_withUpdatedLimits (54.71s)
```

- 2025-06-30 PASS 33 seconds
- 2025-07-01
  - PASS 22 seconds
  - PASS 22 seconds
  - PASS 32 seconds
  - PASS 20 seconds
  - PASS 18 seconds
  - PASS 18 seconds
- 2025-07-02 PASS 23 seconds
- 2025-07-03 PASS 18 seconds
- 2025-07-04 PASS 18 seconds
- 2025-07-05 PASS 15 seconds
- 2025-07-06 PASS 20 seconds
- 2025-07-07 PASS 16 seconds
- 2025-07-08 PASS 17 seconds
- 2025-07-09 PASS 19 seconds
- 2025-07-10 PASS 34 seconds