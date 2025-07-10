# project/project/TestAccProject_withTags Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 3)
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.08s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.03s
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089f756291349dce6e311/limits | qa | flaky_500 | 59.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 49 seconds
- 2025-04-13 PASS 23 seconds
- 2025-04-14 PASS 49 seconds
- 2025-04-15 PASS 26 seconds
- 2025-04-16
  - PASS 26 seconds
  - PASS 26 seconds
- 2025-04-17 PASS 26 seconds
- 2025-04-18 PASS 37 seconds
- 2025-04-19 PASS 52 seconds
- 2025-04-20 PASS 25 seconds
- 2025-04-21 PASS 42 seconds
- 2025-04-22 PASS 26 seconds
- 2025-04-23 PASS 46 seconds
- 2025-04-24 PASS 24 seconds
- 2025-04-25 PASS 27 seconds
- 2025-04-26 PASS a minute
- 2025-04-27 PASS 55 seconds
- 2025-04-28 PASS 25 seconds
- 2025-04-29 PASS 25 seconds
- 2025-04-30
  - PASS 54 seconds
  - PASS 58 seconds
- 2025-05-01
  - PASS 25 seconds
  - PASS 32 seconds
  - PASS 25 seconds
  - PASS 30 seconds
  - PASS 31 seconds
  - PASS 55 seconds
  - PASS 26 seconds
- 2025-05-02 PASS 40 seconds
- 2025-05-03 PASS 25 seconds
- 2025-05-04 PASS 31 seconds
- 2025-05-05 PASS 33 seconds
- 2025-05-06 PASS 24 seconds
- 2025-05-07 PASS 50 seconds
- 2025-05-08 PASS 26 seconds
- 2025-05-09 PASS 59 seconds
- 2025-05-10 PASS 35 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3778012Z === RUN   TestAccProject_withTags
2025-05-11T00:30:20.3782077Z === CONT  TestAccProject_withTags
2025-05-11T00:30:20.3879463Z === NAME  TestAccProject_withTags
2025-05-11T00:30:20.3879985Z     resource_project_test.go:1016: Step 1/8 error: Error running apply: exit status 1
2025-05-11T00:30:20.3880381Z         
2025-05-11T00:30:20.3880816Z         Error: error creating project: test-acc-tf-p-4819840922255356541
2025-05-11T00:30:20.3881170Z         
2025-05-11T00:30:20.3881494Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3882227Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3882780Z           12: resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3883081Z         
2025-05-11T00:30:20.3883572Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3883984Z         type
2025-05-11T00:30:20.3939142Z --- FAIL: TestAccProject_withTags (1.80s)
```

- 2025-05-12 PASS 54 seconds
- 2025-05-13
  - PASS 30 seconds
  - PASS 24 seconds
- 2025-05-14 PASS 49 seconds
- 2025-05-15 PASS 31 seconds
- 2025-05-16 PASS 26 seconds
- 2025-05-17 PASS 37 seconds
- 2025-05-18 PASS 22 seconds
- 2025-05-19 PASS 29 seconds
- 2025-05-20 PASS 24 seconds
- 2025-05-21 PASS 26 seconds
- 2025-05-22 PASS 30 seconds
- 2025-05-23 PASS 29 seconds
- 2025-05-24 PASS 41 seconds
- 2025-05-25 PASS 29 seconds
- 2025-05-26 PASS 36 seconds
- 2025-05-27
  - PASS 28 seconds
  - PASS 34 seconds
- 2025-05-28
  - PASS 28 seconds
  - PASS 36 seconds
- 2025-05-29 PASS 50 seconds
- 2025-05-30 PASS 41 seconds
- 2025-05-31 PASS 27 seconds
- 2025-06-01
  - PASS 39 seconds
  - PASS 33 seconds
  - PASS 34 seconds
  - PASS 33 seconds
  - PASS 29 seconds
  - PASS 29 seconds
- 2025-06-02
  - PASS 28 seconds
  - PASS 57 seconds
  - PASS 33 seconds
- 2025-06-03 PASS 34 seconds
- 2025-06-04 PASS 55 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4935247Z === RUN   TestAccProject_withTags
2025-06-05T00:29:34.4938087Z === CONT  TestAccProject_withTags
2025-06-05T00:29:34.4985822Z === NAME  TestAccProject_withTags
2025-06-05T00:29:34.4986313Z     resource_project_test.go:1016: Step 1/8 error: Error running apply: exit status 1
2025-06-05T00:29:34.4986713Z         
2025-06-05T00:29:34.4987125Z         Error: error creating project: test-acc-tf-p-4178410985988737156
2025-06-05T00:29:34.4987483Z         
2025-06-05T00:29:34.4987785Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4988385Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4988937Z           12: resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4989236Z         
2025-06-05T00:29:34.4989698Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4990340Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4990918Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4991395Z --- FAIL: TestAccProject_withTags (3.30s)
```

- 2025-06-06 PASS 51 seconds
- 2025-06-07 PASS 28 seconds
- 2025-06-08 PASS 48 seconds
- 2025-06-09 PASS 57 seconds
- 2025-06-10 PASS 55 seconds
- 2025-06-11
  - PASS 34 seconds
  - PASS 26 seconds
- 2025-06-12 PASS 51 seconds
- 2025-06-13 PASS a minute
- 2025-06-14 PASS 34 seconds
- 2025-06-15 PASS 48 seconds
- 2025-06-16 PASS 32 seconds
- 2025-06-17 PASS 29 seconds
- 2025-06-18 PASS 28 seconds
- 2025-06-19 PASS 29 seconds
- 2025-06-20 PASS 35 seconds
- 2025-06-21 PASS a minute
- 2025-06-22 PASS 40 seconds
- 2025-06-23 PASS 29 seconds
- 2025-06-24 PASS 58 seconds
- 2025-06-25 PASS 58 seconds
- 2025-06-26 PASS 53 seconds
- 2025-06-27 PASS 37 seconds
- 2025-06-28 PASS 30 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9493600Z === RUN   TestAccProject_withTags
2025-06-29T00:43:46.9514228Z === CONT  TestAccProject_withTags
2025-06-29T00:43:46.9616427Z === NAME  TestAccProject_withTags
2025-06-29T00:43:46.9617105Z     resource_project_test.go:1016: Step 2/8, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-29T00:43:46.9617841Z         
2025-06-29T00:43:46.9618211Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9618535Z         
2025-06-29T00:43:46.9618822Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9619397Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9619927Z           12: resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9620203Z         
2025-06-29T00:43:46.9620630Z         error getting project (686089f756291349dce6e311): error getting project's
2025-06-29T00:43:46.9621071Z         limits (686089f756291349dce6e311):
2025-06-29T00:43:46.9621631Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089f756291349dce6e311/limits
2025-06-29T00:43:46.9622291Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9622855Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9623239Z         BadRequestDetail: 
2025-06-29T00:43:46.9623509Z --- FAIL: TestAccProject_withTags (59.18s)
```

- 2025-06-30 PASS 56 seconds
- 2025-07-01
  - PASS 36 seconds
  - PASS 39 seconds
  - PASS 56 seconds
  - PASS 33 seconds
  - PASS 31 seconds
  - PASS 28 seconds
- 2025-07-02 PASS 40 seconds
- 2025-07-03 PASS 32 seconds
- 2025-07-04 PASS 32 seconds
- 2025-07-05 PASS 26 seconds
- 2025-07-06 PASS 29 seconds
- 2025-07-07 PASS 28 seconds
- 2025-07-08 PASS 29 seconds
- 2025-07-09 PASS 34 seconds
- 2025-07-10 PASS 56 seconds