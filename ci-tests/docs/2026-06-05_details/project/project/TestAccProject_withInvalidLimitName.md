# project/project/TestAccProject_withInvalidLimitName Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.10s
[2026-05-12 00:59](#error-2026-05-12t0059160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.08s
[2026-05-14 01:05](#error-2026-05-14t0105490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.10s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s
[2026-05-30 01:02](#error-2026-05-30t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.01s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev |  | 200.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 31 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2665900Z === RUN   TestAccProject_withInvalidLimitName
2026-05-09T00:56:55.2672489Z === CONT  TestAccProject_withInvalidLimitName
2026-05-09T00:56:55.2683505Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/be0ebae3-d645-416a-8394-bdbc5c48e119/terraform test_working_directory=/tmp/plugintest2439464474
2026-05-09T00:56:55.2773264Z === NAME  TestAccProject_withInvalidLimitName
2026-05-09T00:56:55.2773962Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-09T00:56:55.2774493Z         
2026-05-09T00:56:55.2774906Z         Error: error creating project: test-acc-tf-p-628658062618857846
2026-05-09T00:56:55.2775271Z         
2026-05-09T00:56:55.2775568Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2776175Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2776884Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2777189Z         
2026-05-09T00:56:55.2777656Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2778306Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2778893Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2779312Z --- FAIL: TestAccProject_withInvalidLimitName (79.97s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12

### Error 2026-05-12T00:59:16+00:00
```
2026-05-12T00:59:16.8637843Z === RUN   TestAccProject_withInvalidLimitName
2026-05-12T00:59:16.8645647Z === CONT  TestAccProject_withInvalidLimitName
2026-05-12T00:59:16.8751465Z === NAME  TestAccProject_withInvalidLimitName
2026-05-12T00:59:16.8752176Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-12T00:59:16.8752716Z         
2026-05-12T00:59:16.8753280Z         Error: error creating project: test-acc-tf-p-1482874081432019415
2026-05-12T00:59:16.8753660Z         
2026-05-12T00:59:16.8753987Z           with mongodbatlas_project.test,
2026-05-12T00:59:16.8754605Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-12T00:59:16.8755190Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:59:16.8755508Z         
2026-05-12T00:59:16.8755988Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:59:16.8756654Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:59:16.8757253Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:59:16.8757686Z --- FAIL: TestAccProject_withInvalidLimitName (72.77s)
```

- 2026-05-13 PASS 5 seconds
- 2026-05-14

### Error 2026-05-14T01:05:49+00:00
```
2026-05-14T01:05:49.3903837Z === RUN   TestAccProject_withInvalidLimitName
2026-05-14T01:05:49.3913475Z === CONT  TestAccProject_withInvalidLimitName
2026-05-14T01:05:49.3939676Z === NAME  TestAccProject_withInvalidLimitName
2026-05-14T01:05:49.3940915Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-14T01:05:49.3941794Z         
2026-05-14T01:05:49.3942459Z         Error: error creating project: test-acc-tf-p-2131949049871279353
2026-05-14T01:05:49.3942838Z         
2026-05-14T01:05:49.3943158Z           with mongodbatlas_project.test,
2026-05-14T01:05:49.3943787Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:05:49.3944368Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:05:49.3944682Z         
2026-05-14T01:05:49.3945158Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:05:49.3945811Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:05:49.3946413Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:05:49.3946847Z --- FAIL: TestAccProject_withInvalidLimitName (64.42s)
```

- 2026-05-15 PASS 4 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 4 seconds
- 2026-05-19 PASS 46 seconds
- 2026-05-20 PASS 5 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9151783Z === RUN   TestAccProject_withInvalidLimitName
2026-05-21T01:04:31.9158402Z === CONT  TestAccProject_withInvalidLimitName
2026-05-21T01:04:31.9225375Z === NAME  TestAccProject_withInvalidLimitName
2026-05-21T01:04:31.9226095Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-21T01:04:31.9226639Z         
2026-05-21T01:04:31.9227055Z         Error: error creating project: test-acc-tf-p-1192182991110425570
2026-05-21T01:04:31.9227428Z         
2026-05-21T01:04:31.9227726Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9228336Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9228922Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9229314Z         
2026-05-21T01:04:31.9229785Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9230759Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9231365Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9232129Z --- FAIL: TestAccProject_withInvalidLimitName (68.98s)
```

- 2026-05-22 PASS 5 seconds
- 2026-05-23 PASS 32 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 5 seconds
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1897256Z === RUN   TestAccProject_withInvalidLimitName
2026-05-26T02:10:57.1901926Z === CONT  TestAccProject_withInvalidLimitName
2026-05-26T02:10:57.1939823Z === NAME  TestAccProject_withInvalidLimitName
2026-05-26T02:10:57.1940556Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-26T02:10:57.1941083Z         
2026-05-26T02:10:57.1941509Z         Error: error creating project: test-acc-tf-p-5021822496407741374
2026-05-26T02:10:57.1941876Z         
2026-05-26T02:10:57.1942174Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.1942790Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.1943365Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.1943683Z         
2026-05-26T02:10:57.1944147Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.1944800Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.1945393Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.1956596Z   
2026-05-26T02:10:57.1962707Z --- FAIL: TestAccProject_withInvalidLimitName (69.64s)
```

- 2026-05-27 PASS 6 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1601894Z === RUN   TestAccProject_withInvalidLimitName
2026-05-28T00:58:34.1608011Z === CONT  TestAccProject_withInvalidLimitName
2026-05-28T00:58:34.1656527Z === NAME  TestAccProject_withInvalidLimitName
2026-05-28T00:58:34.1657498Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-28T00:58:34.1658051Z         
2026-05-28T00:58:34.1658489Z         Error: error creating project: test-acc-tf-p-8355242262071703237
2026-05-28T00:58:34.1658860Z         
2026-05-28T00:58:34.1659174Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1659789Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1660371Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1660691Z         
2026-05-28T00:58:34.1661171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1661845Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1662463Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1662901Z --- FAIL: TestAccProject_withInvalidLimitName (66.65s)
```

- 2026-05-29 PASS 5 seconds
- 2026-05-30

### Error 2026-05-30T01:02:11+00:00
```
2026-05-30T01:02:11.3452059Z === RUN   TestAccProject_withInvalidLimitName
2026-05-30T01:02:11.3456408Z === CONT  TestAccProject_withInvalidLimitName
2026-05-30T01:02:11.3516844Z === NAME  TestAccProject_withInvalidLimitName
2026-05-30T01:02:11.3517588Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-30T01:02:11.3518154Z         
2026-05-30T01:02:11.3518589Z         Error: error creating project: test-acc-tf-p-49585872838759461
2026-05-30T01:02:11.3518970Z         
2026-05-30T01:02:11.3519291Z           with mongodbatlas_project.test,
2026-05-30T01:02:11.3520060Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:11.3520664Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:11.3520992Z         
2026-05-30T01:02:11.3521488Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:11.3522177Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:11.3522797Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:11.3523238Z --- FAIL: TestAccProject_withInvalidLimitName (72.06s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2438056Z === RUN   TestAccProject_withInvalidLimitName
2026-06-02T01:12:19.2448106Z === CONT  TestAccProject_withInvalidLimitName
2026-06-02T01:12:19.2690605Z === NAME  TestAccProject_withInvalidLimitName
2026-06-02T01:12:19.2691934Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-06-02T01:12:19.2692842Z         
2026-06-02T01:12:19.2693572Z         Error: error creating project: test-acc-tf-p-3085321179925422748
2026-06-02T01:12:19.2694206Z         
2026-06-02T01:12:19.2694727Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2695764Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2696739Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2697269Z         
2026-06-02T01:12:19.2698010Z         Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": read tcp
2026-06-02T01:12:19.2698978Z         10.1.0.154:41736->3.228.247.77:443: read: connection timed out
2026-06-02T01:12:19.2710293Z   
2026-06-02T01:12:19.2739195Z --- FAIL: TestAccProject_withInvalidLimitName (200.75s)
```

- 2026-06-03 PASS 5 seconds
- 2026-06-04 PASS 46 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 7 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 5 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
