# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) |  | dev | flaky_500 | 54.02s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 114.00s
[2026-07-14 00:43](#error-2026-07-14t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.03s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.01s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8537634Z === RUN   TestAccProject_updatedToEmptyLimits
2026-07-09T01:01:39.8544808Z === CONT  TestAccProject_updatedToEmptyLimits
2026-07-09T01:01:39.8661489Z === NAME  TestAccProject_updatedToEmptyLimits
2026-07-09T01:01:39.8662492Z     resource_project_test.go:1006: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:01:39.8663492Z         
2026-07-09T01:01:39.8664291Z         Error: error creating project: test-acc-tf-p-1418648314986828081
2026-07-09T01:01:39.8664975Z         
2026-07-09T01:01:39.8665547Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8666702Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8667784Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8668347Z         
2026-07-09T01:01:39.8669238Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:01:39.8670026Z         type
2026-07-09T01:01:39.8681148Z   
2026-07-09T01:01:39.8712043Z --- FAIL: TestAccProject_updatedToEmptyLimits (54.23s)
```

- 2026-07-10 PASS 24 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5464363Z === RUN   TestAccProject_updatedToEmptyLimits
2026-07-11T00:54:38.5471738Z === CONT  TestAccProject_updatedToEmptyLimits
2026-07-11T00:54:38.5754565Z === NAME  TestAccProject_updatedToEmptyLimits
2026-07-11T00:54:38.5755129Z     resource_project_test.go:1006: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:54:38.5755560Z         
2026-07-11T00:54:38.5756001Z         Error: error creating project: test-acc-tf-p-208159417308195280
2026-07-11T00:54:38.5756385Z         
2026-07-11T00:54:38.5756707Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5757355Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5758107Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5758428Z         
2026-07-11T00:54:38.5758923Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5759608Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5760228Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5760685Z --- FAIL: TestAccProject_updatedToEmptyLimits (114.00s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 28 seconds
- 2026-07-14

### Error 2026-07-14T00:43:07+00:00
```
2026-07-14T00:43:07.8933950Z === RUN   TestAccProject_updatedToEmptyLimits
2026-07-14T00:43:07.8938664Z === CONT  TestAccProject_updatedToEmptyLimits
2026-07-14T00:43:07.9097421Z === NAME  TestAccProject_updatedToEmptyLimits
2026-07-14T00:43:07.9097997Z     resource_project_test.go:1006: Step 1/2 error: Error running apply: exit status 1
2026-07-14T00:43:07.9098434Z         
2026-07-14T00:43:07.9098880Z         Error: error creating project: test-acc-tf-p-3396070356174368089
2026-07-14T00:43:07.9099274Z         
2026-07-14T00:43:07.9099599Z           with mongodbatlas_project.test,
2026-07-14T00:43:07.9100242Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:07.9100849Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:07.9101171Z         
2026-07-14T00:43:07.9101676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:07.9102370Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:07.9102997Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:07.9103454Z --- FAIL: TestAccProject_updatedToEmptyLimits (105.30s)
```

- 2026-07-15 PASS 28 seconds
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3854687Z === RUN   TestAccProject_updatedToEmptyLimits
2026-07-16T00:44:26.3860121Z === CONT  TestAccProject_updatedToEmptyLimits
2026-07-16T00:44:26.4048781Z === NAME  TestAccProject_updatedToEmptyLimits
2026-07-16T00:44:26.4049330Z     resource_project_test.go:1006: Step 1/2 error: Error running apply: exit status 1
2026-07-16T00:44:26.4049768Z         
2026-07-16T00:44:26.4050208Z         Error: error creating project: test-acc-tf-p-5142332670511497234
2026-07-16T00:44:26.4050598Z         
2026-07-16T00:44:26.4050915Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.4051679Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.4052285Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.4052608Z         
2026-07-16T00:44:26.4053103Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.4053788Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.4054414Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.4054865Z --- FAIL: TestAccProject_updatedToEmptyLimits (102.14s)
```

- 2026-07-17 PASS 26 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4172285Z === RUN   TestAccProject_updatedToEmptyLimits
2026-07-21T00:47:04.4177958Z === CONT  TestAccProject_updatedToEmptyLimits
2026-07-21T00:47:04.4211984Z === NAME  TestAccProject_updatedToEmptyLimits
2026-07-21T00:47:04.4212561Z     resource_project_test.go:1009: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:47:04.4213009Z         
2026-07-21T00:47:04.4213457Z         Error: error creating project: test-acc-tf-p-4773211451247648389
2026-07-21T00:47:04.4213854Z         
2026-07-21T00:47:04.4214191Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4214835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4215665Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4216003Z         
2026-07-21T00:47:04.4216507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4217209Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4217841Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4218302Z --- FAIL: TestAccProject_updatedToEmptyLimits (70.56s)
```

- 2026-07-22 PASS 29 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1148408Z === RUN   TestAccProject_updatedToEmptyLimits
2026-07-23T00:46:48.1152680Z === CONT  TestAccProject_updatedToEmptyLimits
2026-07-23T00:46:48.1369298Z === NAME  TestAccProject_updatedToEmptyLimits
2026-07-23T00:46:48.1369860Z     resource_project_test.go:1009: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:46:48.1370398Z         
2026-07-23T00:46:48.1370853Z         Error: error creating project: test-acc-tf-p-8614184551119774006
2026-07-23T00:46:48.1371242Z         
2026-07-23T00:46:48.1371577Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1372216Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1372812Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1373140Z         
2026-07-23T00:46:48.1373630Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1374298Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1374908Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1375492Z --- FAIL: TestAccProject_updatedToEmptyLimits (91.72s)
```

- 2026-07-24 PASS 27 seconds
- 2026-07-25 PASS 16 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 49 seconds
- 2026-07-28 PASS 17 seconds
- 2026-07-29 PASS 15 seconds
- 2026-07-30 PASS 16 seconds
- 2026-07-31
  - PASS 15 seconds
  - PASS 23 seconds
  - PASS 12 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 13 seconds
  - PASS 12 seconds
- 2026-08-04 PASS 18 seconds
- 2026-08-05 PASS 17 seconds
- 2026-08-06 PASS 14 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 16 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 18 seconds
  - PASS 17 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 19 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 21 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 seconds
  - PASS 13 seconds
  - PASS 11 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
