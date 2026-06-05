# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 10)
Success rate: 67.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.09s
[2026-05-14 01:05](#error-2026-05-14t0105490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.05s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s
[2026-05-19 01:03](#error-2026-05-19t0103150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.04s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.02s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.07s
[2026-05-30 01:02](#error-2026-05-30t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.07s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev |  | 200.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 53 seconds
  - PASS 18 seconds
- 2026-05-08 PASS 17 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2662556Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-09T00:56:55.2671160Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-09T00:56:55.2842015Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-09T00:56:55.2842663Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:56:55.2843073Z         
2026-05-09T00:56:55.2843486Z         Error: error creating project: test-acc-tf-p-6803742585648056330
2026-05-09T00:56:55.2843846Z         
2026-05-09T00:56:55.2844142Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2844751Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2845317Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2845620Z         
2026-05-09T00:56:55.2846086Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2846870Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2847468Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2847888Z --- FAIL: TestAccProject_updatedToEmptyRoles (102.86s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 13 seconds
- 2026-05-12 PASS 46 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14

### Error 2026-05-14T01:05:49+00:00
```
2026-05-14T01:05:49.3900991Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-14T01:05:49.3912586Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-14T01:05:49.4011842Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-14T01:05:49.4012409Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-14T01:05:49.4012828Z         
2026-05-14T01:05:49.4013258Z         Error: error creating project: test-acc-tf-p-687204481150402304
2026-05-14T01:05:49.4013618Z         
2026-05-14T01:05:49.4013920Z           with mongodbatlas_project.test,
2026-05-14T01:05:49.4014530Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:05:49.4015100Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:05:49.4015402Z         
2026-05-14T01:05:49.4015873Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:05:49.4016518Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:05:49.4017105Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:05:49.4017523Z --- FAIL: TestAccProject_updatedToEmptyRoles (82.52s)
```

- 2026-05-15 PASS 13 seconds
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7289492Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-16T00:55:42.7296689Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-16T00:55:42.7384643Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-16T00:55:42.7385196Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-16T00:55:42.7385610Z         
2026-05-16T00:55:42.7386042Z         Error: error creating project: test-acc-tf-p-3212681376630783886
2026-05-16T00:55:42.7386400Z         
2026-05-16T00:55:42.7386716Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7387330Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7387907Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7388207Z         
2026-05-16T00:55:42.7388679Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7389332Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7389924Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7390355Z --- FAIL: TestAccProject_updatedToEmptyRoles (72.65s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19

### Error 2026-05-19T01:03:15+00:00
```
2026-05-19T01:03:15.0633642Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-19T01:03:15.0639914Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-19T01:03:15.0722775Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-19T01:03:15.0723311Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-19T01:03:15.0723728Z         
2026-05-19T01:03:15.0724160Z         Error: error creating project: test-acc-tf-p-246122948212626593
2026-05-19T01:03:15.0724536Z         
2026-05-19T01:03:15.0724858Z           with mongodbatlas_project.test,
2026-05-19T01:03:15.0725487Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:15.0726075Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:15.0726391Z         
2026-05-19T01:03:15.0726871Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:15.0727525Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:15.0728131Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:15.0728556Z --- FAIL: TestAccProject_updatedToEmptyRoles (72.63s)
```

- 2026-05-20 PASS 15 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9148089Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-21T01:04:31.9157733Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-21T01:04:31.9243700Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-21T01:04:31.9244249Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:04:31.9244664Z         
2026-05-21T01:04:31.9245091Z         Error: error creating project: test-acc-tf-p-5753708622065707787
2026-05-21T01:04:31.9245447Z         
2026-05-21T01:04:31.9245748Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9246354Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9246924Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9247400Z         
2026-05-21T01:04:31.9247869Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9248523Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9249117Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9249544Z --- FAIL: TestAccProject_updatedToEmptyRoles (69.35s)
```

- 2026-05-22 PASS 14 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.0941437Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-23T01:02:27.0950512Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-23T01:02:27.1083981Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-23T01:02:27.1084510Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:02:27.1084917Z         
2026-05-23T01:02:27.1085338Z         Error: error creating project: test-acc-tf-p-4387779245198398008
2026-05-23T01:02:27.1085699Z         
2026-05-23T01:02:27.1086126Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.1086742Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.1087321Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.1087631Z         
2026-05-23T01:02:27.1088100Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.1088756Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.1089480Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.1089902Z --- FAIL: TestAccProject_updatedToEmptyRoles (83.44s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1895162Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-26T02:10:57.1902920Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-26T02:10:57.1974660Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-26T02:10:57.1975180Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-26T02:10:57.1975582Z         
2026-05-26T02:10:57.1975991Z         Error: error creating project: test-acc-tf-p-5221584358571048200
2026-05-26T02:10:57.1976354Z         
2026-05-26T02:10:57.1976649Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.1977256Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.1977996Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.1978290Z         
2026-05-26T02:10:57.1978757Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.1979400Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.1979986Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.1980535Z --- FAIL: TestAccProject_updatedToEmptyRoles (71.16s)
```

- 2026-05-27 PASS 14 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1599581Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-28T00:58:34.1608734Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-28T00:58:34.1709789Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-28T00:58:34.1710328Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-28T00:58:34.1710751Z         
2026-05-28T00:58:34.1711177Z         Error: error creating project: test-acc-tf-p-5163278220462733438
2026-05-28T00:58:34.1711555Z         
2026-05-28T00:58:34.1711862Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1712479Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1713066Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1713382Z         
2026-05-28T00:58:34.1714150Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1714826Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1715434Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1715877Z --- FAIL: TestAccProject_updatedToEmptyRoles (68.66s)
```

- 2026-05-29 PASS 13 seconds
- 2026-05-30

### Error 2026-05-30T01:02:11+00:00
```
2026-05-30T01:02:11.3448941Z === RUN   TestAccProject_updatedToEmptyRoles
2026-05-30T01:02:11.3457479Z === CONT  TestAccProject_updatedToEmptyRoles
2026-05-30T01:02:11.3572664Z === NAME  TestAccProject_updatedToEmptyRoles
2026-05-30T01:02:11.3573225Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:02:11.3573655Z         
2026-05-30T01:02:11.3574099Z         Error: error creating project: test-acc-tf-p-8477322029998612481
2026-05-30T01:02:11.3574487Z         
2026-05-30T01:02:11.3574804Z           with mongodbatlas_project.test,
2026-05-30T01:02:11.3575439Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:11.3576043Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:11.3576369Z         
2026-05-30T01:02:11.3576858Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:11.3577540Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:11.3578158Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:11.3578610Z --- FAIL: TestAccProject_updatedToEmptyRoles (103.69s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 12 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2434371Z === RUN   TestAccProject_updatedToEmptyRoles
2026-06-02T01:12:19.2447521Z === CONT  TestAccProject_updatedToEmptyRoles
2026-06-02T01:12:19.2671321Z === NAME  TestAccProject_updatedToEmptyRoles
2026-06-02T01:12:19.2672240Z     resource_project_test.go:821: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:12:19.2673085Z         
2026-06-02T01:12:19.2673804Z         Error: error creating project: test-acc-tf-p-935187109981350302
2026-06-02T01:12:19.2674435Z         
2026-06-02T01:12:19.2674960Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2676011Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2676985Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2677507Z         
2026-06-02T01:12:19.2678259Z         Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": read tcp
2026-06-02T01:12:19.2679229Z         10.1.0.154:41698->3.228.247.77:443: read: connection timed out
2026-06-02T01:12:19.2688986Z    test_name=TestAccProject_withInvalidLimitName test_terraform_path=/home/runner/work/_temp/d52bcfdd-1092-46f3-b235-9e0bc163766d/terraform test_working_directory=/tmp/plugintest2034468948
2026-06-02T01:12:19.2740648Z --- FAIL: TestAccProject_updatedToEmptyRoles (200.75s)
```

- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 47 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 11 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 16 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
