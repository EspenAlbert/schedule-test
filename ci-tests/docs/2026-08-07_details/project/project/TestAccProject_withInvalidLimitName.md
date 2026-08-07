# project/project/TestAccProject_withInvalidLimitName Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) |  | dev | flaky_500 | 54.02s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.06s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.02s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.08s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8538873Z === RUN   TestAccProject_withInvalidLimitName
2026-07-09T01:01:39.8548683Z === CONT  TestAccProject_withInvalidLimitName
2026-07-09T01:01:39.8621247Z === NAME  TestAccProject_withInvalidLimitName
2026-07-09T01:01:39.8631815Z    test_working_directory=/tmp/plugintest2427050043 test_step_number=1
2026-07-09T01:01:39.8633475Z     resource_project_test.go:1040: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-09T01:01:39.8634477Z         
2026-07-09T01:01:39.8635269Z         Error: error creating project: test-acc-tf-p-7599874150967327745
2026-07-09T01:01:39.8635951Z         
2026-07-09T01:01:39.8636518Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8637676Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8638924Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8639505Z         
2026-07-09T01:01:39.8640405Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:01:39.8641174Z         type
2026-07-09T01:01:39.8714797Z --- FAIL: TestAccProject_withInvalidLimitName (54.23s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5466098Z === RUN   TestAccProject_withInvalidLimitName
2026-07-11T00:54:38.5476106Z === CONT  TestAccProject_withInvalidLimitName
2026-07-11T00:54:38.5681928Z === NAME  TestAccProject_withInvalidLimitName
2026-07-11T00:54:38.5682797Z     resource_project_test.go:1040: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-11T00:54:38.5683377Z         
2026-07-11T00:54:38.5683829Z         Error: error creating project: test-acc-tf-p-5350220911455667001
2026-07-11T00:54:38.5684221Z         
2026-07-11T00:54:38.5684546Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5685192Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5685807Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5686139Z         
2026-07-11T00:54:38.5686640Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5687335Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5688324Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5688791Z --- FAIL: TestAccProject_withInvalidLimitName (79.64s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 23 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3855711Z === RUN   TestAccProject_withInvalidLimitName
2026-07-16T00:44:26.3862447Z === CONT  TestAccProject_withInvalidLimitName
2026-07-16T00:44:26.3876413Z === NAME  TestAccProject_withInvalidLimitName
2026-07-16T00:44:26.3877643Z     resource_project_test.go:1040: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-16T00:44:26.3878729Z         
2026-07-16T00:44:26.3879228Z         Error: error creating project: test-acc-tf-p-2283533911730364253
2026-07-16T00:44:26.3879634Z         
2026-07-16T00:44:26.3879958Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.3880610Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.3881743Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.3882098Z         
2026-07-16T00:44:26.3882604Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.3883292Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.3883913Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.3884367Z --- FAIL: TestAccProject_withInvalidLimitName (65.09s)
```

- 2026-07-17 PASS 5 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.0833979Z === RUN   TestAccProject_withInvalidLimitName
2026-07-18T00:49:47.0842627Z === CONT  TestAccProject_withInvalidLimitName
2026-07-18T00:49:47.0868278Z === NAME  TestAccProject_withInvalidLimitName
2026-07-18T00:49:47.0869796Z     resource_project_test.go:1043: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-18T00:49:47.0871022Z         
2026-07-18T00:49:47.0871821Z         Error: error creating project: test-acc-tf-p-5680489260933248126
2026-07-18T00:49:47.0872530Z         
2026-07-18T00:49:47.0873141Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.0874380Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.0875530Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.0876134Z         
2026-07-18T00:49:47.0877262Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.0878586Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.0879739Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.0880553Z --- FAIL: TestAccProject_withInvalidLimitName (68.16s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4173248Z === RUN   TestAccProject_withInvalidLimitName
2026-07-21T00:47:04.4179969Z === CONT  TestAccProject_withInvalidLimitName
2026-07-21T00:47:04.4253152Z === NAME  TestAccProject_withInvalidLimitName
2026-07-21T00:47:04.4253927Z     resource_project_test.go:1043: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-21T00:47:04.4254497Z         
2026-07-21T00:47:04.4254948Z         Error: error creating project: test-acc-tf-p-7328852328212143056
2026-07-21T00:47:04.4255609Z         
2026-07-21T00:47:04.4255944Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4256747Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4257369Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4257706Z         
2026-07-21T00:47:04.4258210Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4258899Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4259527Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4259985Z --- FAIL: TestAccProject_withInvalidLimitName (74.77s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1149091Z === RUN   TestAccProject_withInvalidLimitName
2026-07-23T00:46:48.1176509Z === CONT  TestAccProject_withInvalidLimitName
2026-07-23T00:46:48.1188743Z    test_working_directory=/tmp/plugintest3465594753
2026-07-23T00:46:48.1333775Z === NAME  TestAccProject_withInvalidLimitName
2026-07-23T00:46:48.1334506Z     resource_project_test.go:1043: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-23T00:46:48.1335064Z         
2026-07-23T00:46:48.1335513Z         Error: error creating project: test-acc-tf-p-8398379968695384646
2026-07-23T00:46:48.1335901Z         
2026-07-23T00:46:48.1336230Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1336864Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1337489Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1337834Z         
2026-07-23T00:46:48.1338334Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1339003Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1339609Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1340053Z --- FAIL: TestAccProject_withInvalidLimitName (64.75s)
```

- 2026-07-24 PASS 5 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 seconds
- 2026-07-28 PASS 4 seconds
- 2026-07-29 PASS 4 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 4 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
