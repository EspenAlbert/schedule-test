# project/project/TestAccProject_withTags Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 7)
Success rate: 81.08%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.07s
[2026-07-10 00:57](#error-2026-07-10t0057040000) |  | dev |  | 62.04s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.06s
[2026-07-14 00:43](#error-2026-07-14t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.05s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.05s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.01s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8541768Z === RUN   TestAccProject_withTags
2026-07-09T01:01:39.8550575Z === CONT  TestAccProject_withTags
2026-07-09T01:01:39.8599538Z    test_name=TestAccProject_slowOperationReadOnly test_terraform_path=/home/runner/work/_temp/730259b6-b07f-4b86-aed8-1a3c54b25f50/terraform test_working_directory=/tmp/plugintest2870817931 test_step_number=1
2026-07-09T01:01:39.8731621Z === NAME  TestAccProject_withTags
2026-07-09T01:01:39.8732331Z     resource_project_test.go:1112: Step 1/8 error: Error running apply: exit status 1
2026-07-09T01:01:39.8732884Z         
2026-07-09T01:01:39.8733728Z         Error: error creating project: test-acc-tf-p-8630633615790216654
2026-07-09T01:01:39.8734191Z         
2026-07-09T01:01:39.8734555Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8735361Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8736165Z           12: resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8736495Z         
2026-07-09T01:01:39.8737045Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:01:39.8737855Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:01:39.8738653Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8739070Z --- FAIL: TestAccProject_withTags (68.73s)
```

- 2026-07-10

### Error 2026-07-10T00:57:04+00:00
```
2026-07-10T00:57:04.6573264Z === RUN   TestAccProject_withTags
2026-07-10T00:57:04.6579745Z === CONT  TestAccProject_withTags
2026-07-10T00:57:04.6660819Z === NAME  TestAccProject_withTags
2026-07-10T00:57:04.6661700Z     resource_project_test.go:1112: Step 7/8 error: Error running post-apply refresh plan: exit status 1
2026-07-10T00:57:04.6662840Z         
2026-07-10T00:57:04.6663412Z         Error: error when getting project properties after create
2026-07-10T00:57:04.6663991Z         
2026-07-10T00:57:04.6664528Z           with mongodbatlas_project.test,
2026-07-10T00:57:04.6665422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-10T00:57:04.6666230Z           12: resource "mongodbatlas_project" "test" {
2026-07-10T00:57:04.6666750Z         
2026-07-10T00:57:04.6667432Z         error getting project (6a5041e2e2b992f4d13b68da): error getting project's
2026-07-10T00:57:04.6668396Z         slow operation thresholding enabled (6a5041e2e2b992f4d13b68da):
2026-07-10T00:57:04.6669405Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041e2e2b992f4d13b68da/managedSlowMs
2026-07-10T00:57:04.6670398Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-07-10T00:57:04.6671049Z         BadRequestDetail: 
2026-07-10T00:57:04.6671680Z --- FAIL: TestAccProject_withTags (62.44s)
```

- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5468934Z === RUN   TestAccProject_withTags
2026-07-11T00:54:38.5474896Z === CONT  TestAccProject_withTags
2026-07-11T00:54:38.5736441Z === NAME  TestAccProject_withTags
2026-07-11T00:54:38.5736994Z     resource_project_test.go:1112: Step 1/8 error: Error running apply: exit status 1
2026-07-11T00:54:38.5737448Z         
2026-07-11T00:54:38.5738042Z         Error: error creating project: test-acc-tf-p-7038182978437124482
2026-07-11T00:54:38.5738450Z         
2026-07-11T00:54:38.5738784Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5739436Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5740035Z           12: resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5740367Z         
2026-07-11T00:54:38.5740866Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5741559Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5742187Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5742605Z --- FAIL: TestAccProject_withTags (86.60s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14

### Error 2026-07-14T00:43:07+00:00
```
2026-07-14T00:43:07.8936901Z === RUN   TestAccProject_withTags
2026-07-14T00:43:07.8940389Z === CONT  TestAccProject_withTags
2026-07-14T00:43:07.9079036Z === NAME  TestAccProject_withTags
2026-07-14T00:43:07.9079548Z     resource_project_test.go:1112: Step 1/8 error: Error running apply: exit status 1
2026-07-14T00:43:07.9079981Z         
2026-07-14T00:43:07.9080420Z         Error: error creating project: test-acc-tf-p-5331284692166669120
2026-07-14T00:43:07.9080812Z         
2026-07-14T00:43:07.9081138Z           with mongodbatlas_project.test,
2026-07-14T00:43:07.9081793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:07.9082394Z           12: resource "mongodbatlas_project" "test" {
2026-07-14T00:43:07.9082720Z         
2026-07-14T00:43:07.9083214Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:07.9083901Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:07.9084519Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:07.9084930Z --- FAIL: TestAccProject_withTags (94.49s)
```

- 2026-07-15 PASS a minute
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3857833Z === RUN   TestAccProject_withTags
2026-07-16T00:44:26.3860469Z === CONT  TestAccProject_withTags
2026-07-16T00:44:26.3936204Z === NAME  TestAccProject_withTags
2026-07-16T00:44:26.3936780Z     resource_project_test.go:1112: Step 1/8 error: Error running apply: exit status 1
2026-07-16T00:44:26.3937238Z         
2026-07-16T00:44:26.3937682Z         Error: error creating project: test-acc-tf-p-8824459260088176006
2026-07-16T00:44:26.3938080Z         
2026-07-16T00:44:26.3938403Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.3939047Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.3939646Z           12: resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.3939968Z         
2026-07-16T00:44:26.3940459Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.3941142Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.3942549Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.3943083Z --- FAIL: TestAccProject_withTags (76.52s)
```

- 2026-07-17 PASS a minute
- 2026-07-18 PASS 3 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4175577Z === RUN   TestAccProject_withTags
2026-07-21T00:47:04.4178295Z === CONT  TestAccProject_withTags
2026-07-21T00:47:04.4309047Z === NAME  TestAccProject_withTags
2026-07-21T00:47:04.4309578Z     resource_project_test.go:1115: Step 1/8 error: Error running apply: exit status 1
2026-07-21T00:47:04.4310018Z         
2026-07-21T00:47:04.4310465Z         Error: error creating project: test-acc-tf-p-5618186790142511458
2026-07-21T00:47:04.4310855Z         
2026-07-21T00:47:04.4311185Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4311835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4312433Z           12: resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4312762Z         
2026-07-21T00:47:04.4313262Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4313950Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4314581Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4315029Z --- FAIL: TestAccProject_withTags (83.08s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1151025Z === RUN   TestAccProject_withTags
2026-07-23T00:46:48.1176170Z === CONT  TestAccProject_withTags
2026-07-23T00:46:48.1351885Z === NAME  TestAccProject_withTags
2026-07-23T00:46:48.1352410Z     resource_project_test.go:1115: Step 1/8 error: Error running apply: exit status 1
2026-07-23T00:46:48.1352842Z         
2026-07-23T00:46:48.1353295Z         Error: error creating project: test-acc-tf-p-2850088162891847221
2026-07-23T00:46:48.1353694Z         
2026-07-23T00:46:48.1354040Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1354684Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1355269Z           12: resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1355598Z         
2026-07-23T00:46:48.1356094Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1356772Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1357381Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1357790Z --- FAIL: TestAccProject_withTags (65.02s)
```

- 2026-07-24 PASS a minute
- 2026-07-25 PASS 39 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 40 seconds
- 2026-07-29 PASS 35 seconds
- 2026-07-30 PASS 42 seconds
- 2026-07-31
  - PASS 35 seconds
  - PASS a minute
  - PASS 24 seconds
- 2026-08-01 PASS 32 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 29 seconds
  - PASS 28 seconds
- 2026-08-04 PASS 46 seconds
- 2026-08-05 PASS 34 seconds
- 2026-08-06 PASS 31 seconds
- 2026-08-07 PASS 32 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 39 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 49 seconds
  - PASS 41 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 48 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 54 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 39 seconds
  - PASS 27 seconds
  - PASS 26 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 32 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
