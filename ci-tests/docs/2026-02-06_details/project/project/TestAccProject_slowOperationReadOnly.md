# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 39 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 00:38](#error-2026-01-08t0038430000) | USER_UNAUTHORIZED /api/atlas/v2/groups/695efb09bd8c78dbeaf3f3e2/limits | dev | 10.06s
[2026-01-08 06:55](#error-2026-01-08t0655440000) |  | dev | 4.03s
[2026-01-08 07:21](#error-2026-01-08t0721210000) |  | dev | 0.07s
[2026-01-08 07:28](#error-2026-01-08t0728430000) |  | dev | 0.08s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 5.05s
[2026-01-08 08:01](#error-2026-01-08t0801580000) |  | dev | 9.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - FAIL 10 seconds

### Error 2026-01-08T00:38:43+00:00
```
2026-01-08T00:38:43.7688576Z === RUN   TestAccProject_slowOperationReadOnly
2026-01-08T00:38:43.7691063Z === CONT  TestAccProject_slowOperationReadOnly
2026-01-08T00:38:43.7715530Z === NAME  TestAccProject_slowOperationReadOnly
2026-01-08T00:38:43.7716455Z     resource_project_test.go:1119: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-01-08T00:38:43.7717501Z         
2026-01-08T00:38:43.7718096Z         Error: error when getting project properties after create
2026-01-08T00:38:43.7718459Z         
2026-01-08T00:38:43.7718767Z           with mongodbatlas_project.test,
2026-01-08T00:38:43.7719389Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-01-08T00:38:43.7719963Z           18: 		resource "mongodbatlas_project" "test" {
2026-01-08T00:38:43.7720274Z         
2026-01-08T00:38:43.7720738Z         error getting project (695efb09bd8c78dbeaf3f3e2): error getting project's
2026-01-08T00:38:43.7721729Z         limits (695efb09bd8c78dbeaf3f3e2):
2026-01-08T00:38:43.7722343Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695efb09bd8c78dbeaf3f3e2/limits
2026-01-08T00:38:43.7723036Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T00:38:43.7723688Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T00:38:43.7735063Z   
2026-01-08T00:38:43.7735557Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-08T00:38:43.7736016Z         
2026-01-08T00:38:43.7736324Z         Error: error when destroying resource
2026-01-08T00:38:43.7736614Z         
2026-01-08T00:38:43.7736964Z         error deleting project (695efb09bd8c78dbeaf3f3e2):
2026-01-08T00:38:43.7737567Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695efb09bd8c78dbeaf3f3e2
2026-01-08T00:38:43.7738213Z         DELETE: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail:
2026-01-08T00:38:43.7738873Z         Current user is not authorized to perform this action. Reason: Unauthorized.
2026-01-08T00:38:43.7739352Z         Params: [], BadRequestDetail: 
2026-01-08T00:38:43.7739702Z --- FAIL: TestAccProject_slowOperationReadOnly (10.59s)
```

  - FAIL 4 seconds

### Error 2026-01-08T06:55:44+00:00
```
2026-01-08T06:55:44.9318492Z === RUN   TestAccProject_slowOperationReadOnly
2026-01-08T06:55:44.9319669Z === CONT  TestAccProject_slowOperationReadOnly
2026-01-08T06:55:44.9334704Z   
2026-01-08T06:55:44.9335292Z     resource_project_test.go:1119: Step 1/4 error: Error running apply: exit status 1
2026-01-08T06:55:44.9335804Z         
2026-01-08T06:55:44.9336346Z         Error: error during project deletion when updating project settings
2026-01-08T06:55:44.9336831Z         
2026-01-08T06:55:44.9337245Z           with mongodbatlas_project.test,
2026-01-08T06:55:44.9337946Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T06:55:44.9338609Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T06:55:44.9339009Z         
2026-01-08T06:55:44.9339756Z         error deleting project (695f54edaa2a8443b48e7391):
2026-01-08T06:55:44.9340486Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f54edaa2a8443b48e7391/settings
2026-01-08T06:55:44.9341289Z         PATCH: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T06:55:44.9341821Z         BadRequestDetail: 
2026-01-08T06:55:44.9342221Z --- FAIL: TestAccProject_slowOperationReadOnly (4.33s)
```

  - FAIL a moment

### Error 2026-01-08T07:21:21+00:00
```
2026-01-08T07:21:21.6545464Z === RUN   TestAccProject_slowOperationReadOnly
2026-01-08T07:21:21.6546718Z === CONT  TestAccProject_slowOperationReadOnly
2026-01-08T07:21:21.6566610Z   
2026-01-08T07:21:21.6567442Z     resource_project_test.go:1119: Step 1/4 error: Error running apply: exit status 1
2026-01-08T07:21:21.6568414Z         
2026-01-08T07:21:21.6569170Z         Error: error creating project: test-acc-tf-p-7036537570825614205
2026-01-08T07:21:21.6569820Z         
2026-01-08T07:21:21.6570375Z           with mongodbatlas_project.test,
2026-01-08T07:21:21.6571487Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:21:21.6572544Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:21:21.6573107Z         
2026-01-08T07:21:21.6574006Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:21:21.6575164Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:21:21.6576326Z --- FAIL: TestAccProject_slowOperationReadOnly (0.72s)
```

  - FAIL a moment

### Error 2026-01-08T07:28:43+00:00
```
2026-01-08T07:28:43.9383918Z === RUN   TestAccProject_slowOperationReadOnly
2026-01-08T07:28:43.9385178Z === CONT  TestAccProject_slowOperationReadOnly
2026-01-08T07:28:43.9397327Z    test_step_number=1 test_name=TestAccProject_slowOperationReadOnly test_terraform_path=/home/runner/work/_temp/527c8323-7d00-4f37-867f-20308ab2464c/terraform test_working_directory=/tmp/plugintest1076958146
2026-01-08T07:28:43.9398486Z     resource_project_test.go:1119: Step 1/4 error: Error running apply: exit status 1
2026-01-08T07:28:43.9398932Z         
2026-01-08T07:28:43.9399479Z         Error: error creating project: test-acc-tf-p-1209043998443392151
2026-01-08T07:28:43.9399916Z         
2026-01-08T07:28:43.9400237Z           with mongodbatlas_project.test,
2026-01-08T07:28:43.9401072Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:28:43.9401684Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:28:43.9402008Z         
2026-01-08T07:28:43.9402508Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:28:43.9403158Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:28:43.9403605Z --- FAIL: TestAccProject_slowOperationReadOnly (0.77s)
```

  - FAIL 5 seconds

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7589881Z === RUN   TestAccProject_slowOperationReadOnly
2026-01-08T07:59:10.7591910Z === CONT  TestAccProject_slowOperationReadOnly
2026-01-08T07:59:10.7777952Z === NAME  TestAccProject_slowOperationReadOnly
2026-01-08T07:59:10.7778489Z     resource_project_test.go:1119: Step 1/4 error: Error running apply: exit status 1
2026-01-08T07:59:10.7778903Z         
2026-01-08T07:59:10.7779388Z         Error: error getting project's settings assigned (695f63aabd8c78dbeaf9be31):
2026-01-08T07:59:10.7779790Z         
2026-01-08T07:59:10.7780096Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7780716Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7781303Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7781607Z         
2026-01-08T07:59:10.7782139Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f63aabd8c78dbeaf9be31/settings
2026-01-08T07:59:10.7782857Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T07:59:10.7783516Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7783986Z --- FAIL: TestAccProject_slowOperationReadOnly (5.49s)
```

  - FAIL 9 seconds

### Error 2026-01-08T08:01:58+00:00
```
2026-01-08T08:01:58.9958642Z === RUN   TestAccProject_slowOperationReadOnly
2026-01-08T08:01:58.9963762Z === CONT  TestAccProject_slowOperationReadOnly
2026-01-08T08:01:58.9984596Z === NAME  TestAccProject_slowOperationReadOnly
2026-01-08T08:01:58.9985429Z     resource_project_test.go:1119: Step 2/4 error: Error running pre-apply plan: exit status 1
2026-01-08T08:01:58.9985892Z         
2026-01-08T08:01:58.9986231Z         Error: error when getting project from Atlas
2026-01-08T08:01:58.9986547Z         
2026-01-08T08:01:58.9986966Z           with mongodbatlas_project.test,
2026-01-08T08:01:58.9987586Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-01-08T08:01:58.9988169Z           18: 		resource "mongodbatlas_project" "test" {
2026-01-08T08:01:58.9988474Z         
2026-01-08T08:01:58.9988830Z         error getting project (695f6320bd8c78dbeaf969e4):
2026-01-08T08:01:58.9989614Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f6320bd8c78dbeaf969e4
2026-01-08T08:01:58.9990287Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T08:01:58.9990935Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T08:01:59.0000890Z   
2026-01-08T08:01:59.0001384Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-08T08:01:59.0001854Z         
2026-01-08T08:01:59.0002162Z         Error: error when destroying resource
2026-01-08T08:01:59.0002457Z         
2026-01-08T08:01:59.0002806Z         error deleting project (695f6320bd8c78dbeaf969e4):
2026-01-08T08:01:59.0003399Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f6320bd8c78dbeaf969e4
2026-01-08T08:01:59.0004096Z         DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T08:01:59.0004555Z         BadRequestDetail: 
2026-01-08T08:01:59.0004874Z --- FAIL: TestAccProject_slowOperationReadOnly (9.22s)
```

- 2026-01-09 PASS 16 seconds
- 2026-01-10 PASS 14 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 19 seconds
- 2026-01-13 PASS 13 seconds
- 2026-01-14 PASS 12 seconds
- 2026-01-15 PASS 15 seconds
- 2026-01-16 PASS 13 seconds
- 2026-01-17 PASS 17 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 13 seconds
- 2026-01-20 PASS 14 seconds
- 2026-01-21 PASS 14 seconds
- 2026-01-22
  - PASS 16 seconds
  - PASS 14 seconds
- 2026-01-23 PASS 20 seconds
- 2026-01-24 PASS 15 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 18 seconds
- 2026-01-27 PASS 19 seconds
- 2026-01-28 PASS 14 seconds
- 2026-01-29 PASS 15 seconds
- 2026-01-30 PASS 12 seconds
- 2026-01-31 PASS 16 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 19 seconds
- 2026-02-03 PASS 19 seconds
- 2026-02-04 PASS 14 seconds
- 2026-02-05 PASS 14 seconds
- 2026-02-06 PASS 14 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 11 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 11 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 17 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 14 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
