# project/project/TestAccProject_withInvalidLimitName Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.08s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 3 seconds
- 2025-04-14 PASS 4 seconds
- 2025-04-15 PASS 3 seconds
- 2025-04-16
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-04-17 PASS 3 seconds
- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 5 seconds
- 2025-04-20 PASS 3 seconds
- 2025-04-21 PASS 3 seconds
- 2025-04-22 PASS 3 seconds
- 2025-04-23 PASS 5 seconds
- 2025-04-24 PASS 3 seconds
- 2025-04-25 PASS 3 seconds
- 2025-04-26 PASS 6 seconds
- 2025-04-27 PASS 3 seconds
- 2025-04-28 PASS 4 seconds
- 2025-04-29 PASS 6 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 4 seconds
- 2025-05-01
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-05-02 PASS 7 seconds
- 2025-05-03 PASS 3 seconds
- 2025-05-04 PASS 4 seconds
- 2025-05-05 PASS 4 seconds
- 2025-05-06 PASS 3 seconds
- 2025-05-07 PASS 4 seconds
- 2025-05-08 PASS 3 seconds
- 2025-05-09 PASS 4 seconds
- 2025-05-10 PASS 4 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3776289Z === RUN   TestAccProject_withInvalidLimitName
2025-05-11T00:30:20.3783545Z === CONT  TestAccProject_withInvalidLimitName
2025-05-11T00:30:20.3792498Z    test_terraform_path=/home/runner/work/_temp/613870aa-2996-4d68-93a5-22f44d0f7261/terraform test_working_directory=/tmp/plugintest1178270429
2025-05-11T00:30:20.3890455Z === NAME  TestAccProject_withInvalidLimitName
2025-05-11T00:30:20.3891157Z     resource_project_test.go:944: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-05-11T00:30:20.3891660Z         
2025-05-11T00:30:20.3892263Z         Error: error creating project: test-acc-tf-p-4145446956329139651
2025-05-11T00:30:20.3892625Z         
2025-05-11T00:30:20.3893064Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3893686Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3894243Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3894548Z         
2025-05-11T00:30:20.3895030Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3895443Z         type
2025-05-11T00:30:20.3904449Z   
2025-05-11T00:30:20.3939637Z --- FAIL: TestAccProject_withInvalidLimitName (1.79s)
```

- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 4 seconds
- 2025-05-16 PASS 3 seconds
- 2025-05-17 PASS 4 seconds
- 2025-05-18 PASS 3 seconds
- 2025-05-19 PASS 3 seconds
- 2025-05-20 PASS 4 seconds
- 2025-05-21 PASS 5 seconds
- 2025-05-22 PASS 4 seconds
- 2025-05-23 PASS 4 seconds
- 2025-05-24 PASS 4 seconds
- 2025-05-25 PASS 3 seconds
- 2025-05-26 PASS 5 seconds
- 2025-05-27
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-05-28
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-29 PASS 3 seconds
- 2025-05-30 PASS 4 seconds
- 2025-05-31 PASS 4 seconds
- 2025-06-01
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-03 PASS 3 seconds
- 2025-06-04 PASS 4 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4933776Z === RUN   TestAccProject_withInvalidLimitName
2025-06-05T00:29:34.4939079Z === CONT  TestAccProject_withInvalidLimitName
2025-06-05T00:29:34.5102613Z === NAME  TestAccProject_withInvalidLimitName
2025-06-05T00:29:34.5103284Z     resource_project_test.go:944: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:29:34.5103786Z         
2025-06-05T00:29:34.5104196Z         Error: error creating project: test-acc-tf-p-6978586122213850025
2025-06-05T00:29:34.5104554Z         
2025-06-05T00:29:34.5104854Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5105460Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5106008Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5106311Z         
2025-06-05T00:29:34.5106777Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5107411Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5107988Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5108415Z --- FAIL: TestAccProject_withInvalidLimitName (4.35s)
```

- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 4 seconds
- 2025-06-08 PASS 4 seconds
- 2025-06-09 PASS 4 seconds
- 2025-06-10 PASS 4 seconds
- 2025-06-11
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 5 seconds
- 2025-06-14 PASS 3 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 7 seconds
- 2025-06-17 PASS 3 seconds
- 2025-06-18 PASS 3 seconds
- 2025-06-19 PASS 3 seconds
- 2025-06-20 PASS 4 seconds
- 2025-06-21 PASS 4 seconds
- 2025-06-22 PASS 4 seconds
- 2025-06-23 PASS 4 seconds
- 2025-06-24 PASS 4 seconds
- 2025-06-25 PASS 4 seconds
- 2025-06-26 PASS 4 seconds
- 2025-06-27 PASS 5 seconds
- 2025-06-28 PASS 4 seconds
- 2025-06-29 PASS 4 seconds
- 2025-06-30 PASS 3 seconds
- 2025-07-01
  - PASS 4 seconds
  - PASS 7 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-07-02 PASS 4 seconds
- 2025-07-03 PASS 3 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 3 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 3 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 4 seconds
- 2025-07-10 PASS 4 seconds