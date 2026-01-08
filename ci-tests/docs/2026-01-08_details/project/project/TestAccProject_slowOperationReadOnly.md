# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 36 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 29) FAIL(x 7)
Success rate: 80.56%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.10s
[2026-01-08 00:38](#error-2026-01-08t0038430000) | USER_UNAUTHORIZED /api/atlas/v2/groups/695efb09bd8c78dbeaf3f3e2/limits | dev |  | 10.06s
[2026-01-08 06:55](#error-2026-01-08t0655440000) |  | dev |  | 4.03s
[2026-01-08 07:21](#error-2026-01-08t0721210000) |  | dev |  | 0.07s
[2026-01-08 07:28](#error-2026-01-08t0728430000) |  | dev |  | 0.08s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 5.05s
[2026-01-08 08:01](#error-2026-01-08t0801580000) |  | dev |  | 9.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 19 seconds
  - PASS 12 seconds
- 2025-12-11 PASS 13 seconds
- 2025-12-12 PASS 18 seconds
- 2025-12-13 PASS 14 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 seconds
- 2025-12-16 PASS 15 seconds
- 2025-12-17 PASS 18 seconds
- 2025-12-18 PASS 19 seconds
- 2025-12-19 PASS 17 seconds
- 2025-12-20 PASS 17 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 16 seconds
- 2025-12-23 PASS 15 seconds
- 2025-12-24 PASS 14 seconds
- 2025-12-25 PASS 12 seconds
- 2025-12-26 PASS 19 seconds
- 2025-12-27 PASS 14 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 18 seconds
- 2025-12-31 PASS 21 seconds
- 2026-01-01 PASS 16 seconds
- 2026-01-02 PASS 19 seconds
- 2026-01-03 PASS 17 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 20 seconds
- 2026-01-06 PASS 14 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2832726Z === RUN   TestAccProject_slowOperationReadOnly
2026-01-07T00:33:18.2838045Z === CONT  TestAccProject_slowOperationReadOnly
2026-01-07T00:33:18.2927369Z === NAME  TestAccProject_slowOperationReadOnly
2026-01-07T00:33:18.2927910Z     resource_project_test.go:1119: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:33:18.2928307Z         
2026-01-07T00:33:18.2928722Z         Error: error creating project: test-acc-tf-p-8749867974210947029
2026-01-07T00:33:18.2929093Z         
2026-01-07T00:33:18.2929406Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.2929995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.2930546Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.2930844Z         
2026-01-07T00:33:18.2931307Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:18.2931937Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:18.2932513Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:18.2933377Z --- FAIL: TestAccProject_slowOperationReadOnly (4.98s)
```

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


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 15 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 16 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 19 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 seconds
