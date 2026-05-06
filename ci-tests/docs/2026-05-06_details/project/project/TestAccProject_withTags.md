# project/project/TestAccProject_withTags Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.01s
[2026-04-14 00:55](#error-2026-04-14t0055030000) |  | dev | flaky_500 | 61.02s
[2026-04-21 00:50](#error-2026-04-21t0050450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-04-25 00:48](#error-2026-04-25t0048210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.05s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 59 seconds
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7223666Z === RUN   TestAccProject_withTags
2026-04-09T00:40:34.7225535Z === CONT  TestAccProject_withTags
2026-04-09T00:40:34.7341767Z === NAME  TestAccProject_withTags
2026-04-09T00:40:34.7342261Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-04-09T00:40:34.7342666Z         
2026-04-09T00:40:34.7343082Z         Error: error creating project: test-acc-tf-p-2629276744555635684
2026-04-09T00:40:34.7343447Z         
2026-04-09T00:40:34.7343749Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7344359Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7344928Z           12: resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7345239Z         
2026-04-09T00:40:34.7345705Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7346359Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7347078Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7347756Z --- FAIL: TestAccProject_withTags (99.12s)
```

- 2026-04-10 PASS 41 seconds
- 2026-04-11 PASS 2 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14

### Error 2026-04-14T00:55:03+00:00
```
2026-04-14T00:55:03.8131489Z === RUN   TestAccProject_withTags
2026-04-14T00:55:03.8133682Z === CONT  TestAccProject_withTags
2026-04-14T00:55:03.8180705Z === NAME  TestAccProject_withTags
2026-04-14T00:55:03.8181245Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-04-14T00:55:03.8181662Z         
2026-04-14T00:55:03.8182081Z         Error: error creating project: test-acc-tf-p-4996879538765111675
2026-04-14T00:55:03.8182437Z         
2026-04-14T00:55:03.8182729Z           with mongodbatlas_project.test,
2026-04-14T00:55:03.8183348Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-14T00:55:03.8183911Z           12: resource "mongodbatlas_project" "test" {
2026-04-14T00:55:03.8184215Z         
2026-04-14T00:55:03.8184672Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-14T00:55:03.8185084Z         type
2026-04-14T00:55:03.8190783Z    test_name=TestAccProject_updatedToEmptyRoles
2026-04-14T00:55:03.8196126Z --- FAIL: TestAccProject_withTags (61.23s)
```

- 2026-04-15 PASS 38 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 40 seconds
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 40 seconds
- 2026-04-21

### Error 2026-04-21T00:50:45+00:00
```
2026-04-21T00:50:45.8480239Z === RUN   TestAccProject_withTags
2026-04-21T00:50:45.8485032Z === CONT  TestAccProject_withTags
2026-04-21T00:50:45.8555833Z === NAME  TestAccProject_withTags
2026-04-21T00:50:45.8556360Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-04-21T00:50:45.8556772Z         
2026-04-21T00:50:45.8557395Z         Error: error creating project: test-acc-tf-p-3657714996450529146
2026-04-21T00:50:45.8557764Z         
2026-04-21T00:50:45.8558066Z           with mongodbatlas_project.test,
2026-04-21T00:50:45.8558698Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-21T00:50:45.8559271Z           12: resource "mongodbatlas_project" "test" {
2026-04-21T00:50:45.8559570Z         
2026-04-21T00:50:45.8560053Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T00:50:45.8560857Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T00:50:45.8561474Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:45.8561862Z --- FAIL: TestAccProject_withTags (68.11s)
```

- 2026-04-22 PASS 38 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 42 seconds
- 2026-04-25

### Error 2026-04-25T00:48:21+00:00
```
2026-04-25T00:48:21.5505034Z === RUN   TestAccProject_withTags
2026-04-25T00:48:21.5510099Z === CONT  TestAccProject_withTags
2026-04-25T00:48:21.5568120Z === NAME  TestAccProject_withTags
2026-04-25T00:48:21.5568628Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-04-25T00:48:21.5569042Z         
2026-04-25T00:48:21.5569484Z         Error: error creating project: test-acc-tf-p-6620784177877183348
2026-04-25T00:48:21.5569861Z         
2026-04-25T00:48:21.5570175Z           with mongodbatlas_project.test,
2026-04-25T00:48:21.5570788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-25T00:48:21.5571355Z           12: resource "mongodbatlas_project" "test" {
2026-04-25T00:48:21.5571661Z         
2026-04-25T00:48:21.5572139Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-25T00:48:21.5572784Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-25T00:48:21.5573378Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:21.5573768Z --- FAIL: TestAccProject_withTags (72.53s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 46 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 38 seconds
- 2026-04-30 PASS 2 minutes
- 2026-05-01 PASS 52 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 40 seconds
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4216803Z === RUN   TestAccProject_withTags
2026-05-05T00:53:01.4221004Z === CONT  TestAccProject_withTags
2026-05-05T00:53:01.4238801Z === NAME  TestAccProject_withTags
2026-05-05T00:53:01.4239345Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-05-05T00:53:01.4239764Z         
2026-05-05T00:53:01.4240206Z         Error: error creating project: test-acc-tf-p-7950260236453832645
2026-05-05T00:53:01.4240575Z         
2026-05-05T00:53:01.4240884Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4241515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4242095Z           12: resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4242403Z         
2026-05-05T00:53:01.4242882Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4243562Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4244181Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4244578Z --- FAIL: TestAccProject_withTags (65.06s)
```

- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 37 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 36 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 30 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 39 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 59 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 28 seconds
- 2026-05-04 PASS 35 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 38 seconds
