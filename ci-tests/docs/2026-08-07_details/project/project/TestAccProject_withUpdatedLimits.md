# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.00s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-07-14 00:43](#error-2026-07-14t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.02s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8536450Z === RUN   TestAccProject_withUpdatedLimits
2026-07-09T01:01:39.8545985Z === CONT  TestAccProject_withUpdatedLimits
2026-07-09T01:01:39.8752631Z === NAME  TestAccProject_withUpdatedLimits
2026-07-09T01:01:39.8772052Z     resource_project_test.go:921: Step 1/3 error: Error running apply: exit status 1
2026-07-09T01:01:39.8772752Z         
2026-07-09T01:01:39.8773673Z         Error: error creating project: test-acc-tf-p-5234265877544043505
2026-07-09T01:01:39.8774126Z         
2026-07-09T01:01:39.8774463Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8775314Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8776099Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8776463Z         
2026-07-09T01:01:39.8777020Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:01:39.8777853Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:01:39.8778654Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8779105Z --- FAIL: TestAccProject_withUpdatedLimits (75.01s)
```

- 2026-07-10 PASS 37 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5463193Z === RUN   TestAccProject_withUpdatedLimits
2026-07-11T00:54:38.5472903Z === CONT  TestAccProject_withUpdatedLimits
2026-07-11T00:54:38.5601068Z === NAME  TestAccProject_withUpdatedLimits
2026-07-11T00:54:38.5602075Z     resource_project_test.go:921: Step 1/3 error: Error running apply: exit status 1
2026-07-11T00:54:38.5602859Z         
2026-07-11T00:54:38.5603651Z         Error: error creating project: test-acc-tf-p-6708612776660904322
2026-07-11T00:54:38.5604327Z         
2026-07-11T00:54:38.5604909Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5606086Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5607244Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5608031Z         
2026-07-11T00:54:38.5608931Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5610376Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5611537Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5612322Z --- FAIL: TestAccProject_withUpdatedLimits (67.25s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 41 seconds
- 2026-07-14

### Error 2026-07-14T00:43:07+00:00
```
2026-07-14T00:43:07.8933231Z === RUN   TestAccProject_withUpdatedLimits
2026-07-14T00:43:07.8940722Z === CONT  TestAccProject_withUpdatedLimits
2026-07-14T00:43:07.8965351Z === NAME  TestAccProject_withUpdatedLimits
2026-07-14T00:43:07.8966227Z     resource_project_test.go:921: Step 1/3 error: Error running apply: exit status 1
2026-07-14T00:43:07.8966729Z         
2026-07-14T00:43:07.8967181Z         Error: error creating project: test-acc-tf-p-3628860483748814523
2026-07-14T00:43:07.8967573Z         
2026-07-14T00:43:07.8967897Z           with mongodbatlas_project.test,
2026-07-14T00:43:07.8968537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:07.8969135Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:07.8969458Z         
2026-07-14T00:43:07.8969949Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:07.8970635Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:07.8971258Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:07.8971702Z --- FAIL: TestAccProject_withUpdatedLimits (65.77s)
```

- 2026-07-15 PASS 42 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 40 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.0831365Z === RUN   TestAccProject_withUpdatedLimits
2026-07-18T00:49:47.0841964Z === CONT  TestAccProject_withUpdatedLimits
2026-07-18T00:49:47.0968954Z === NAME  TestAccProject_withUpdatedLimits
2026-07-18T00:49:47.0970005Z     resource_project_test.go:924: Step 1/3 error: Error running apply: exit status 1
2026-07-18T00:49:47.0971033Z         
2026-07-18T00:49:47.0971847Z         Error: error creating project: test-acc-tf-p-7062037748378973454
2026-07-18T00:49:47.0972540Z         
2026-07-18T00:49:47.0973123Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.0974294Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.0975388Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.0975959Z         
2026-07-18T00:49:47.0976871Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.0978185Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.0979523Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.0980355Z --- FAIL: TestAccProject_withUpdatedLimits (71.23s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS a minute
- 2026-07-22 PASS 42 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1147727Z === RUN   TestAccProject_withUpdatedLimits
2026-07-23T00:46:48.1175830Z === CONT  TestAccProject_withUpdatedLimits
2026-07-23T00:46:48.1207645Z === NAME  TestAccProject_withUpdatedLimits
2026-07-23T00:46:48.1208204Z     resource_project_test.go:924: Step 1/3 error: Error running apply: exit status 1
2026-07-23T00:46:48.1208636Z         
2026-07-23T00:46:48.1209089Z         Error: error creating project: test-acc-tf-p-424000434005465888
2026-07-23T00:46:48.1209490Z         
2026-07-23T00:46:48.1209822Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1210674Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1211284Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1211631Z         
2026-07-23T00:46:48.1212140Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1212829Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1213452Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1213899Z --- FAIL: TestAccProject_withUpdatedLimits (63.24s)
```

- 2026-07-24 PASS 38 seconds
- 2026-07-25 PASS 24 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 23 seconds
- 2026-07-29 PASS 21 seconds
- 2026-07-30 PASS 24 seconds
- 2026-07-31
  - PASS 23 seconds
  - PASS 40 seconds
  - PASS 15 seconds
- 2026-08-01 PASS 21 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 18 seconds
  - PASS 16 seconds
- 2026-08-04 PASS 28 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 19 seconds
- 2026-08-07 PASS 19 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 27 seconds
  - PASS 25 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 27 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 33 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 23 seconds
  - PASS 17 seconds
  - PASS 16 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 20 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
