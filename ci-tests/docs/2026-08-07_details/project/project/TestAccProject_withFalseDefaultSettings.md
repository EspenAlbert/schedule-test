# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) |  | dev | flaky_500 | 54.02s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.08s
[2026-07-14 00:43](#error-2026-07-14t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.07s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.00s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8531249Z === RUN   TestAccProject_withFalseDefaultSettings
2026-07-09T01:01:39.8548043Z === CONT  TestAccProject_withFalseDefaultSettings
2026-07-09T01:01:39.8681761Z === NAME  TestAccProject_withFalseDefaultSettings
2026-07-09T01:01:39.8682810Z     resource_project_test.go:699: Step 1/4 error: Error running apply: exit status 1
2026-07-09T01:01:39.8683818Z         
2026-07-09T01:01:39.8684618Z         Error: error creating project: test-acc-tf-p-8269511818930422905
2026-07-09T01:01:39.8685300Z         
2026-07-09T01:01:39.8685877Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8687034Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8688116Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8688692Z         
2026-07-09T01:01:39.8689595Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:01:39.8690353Z         type
2026-07-09T01:01:39.8701173Z   
2026-07-09T01:01:39.8714186Z --- FAIL: TestAccProject_withFalseDefaultSettings (54.23s)
```

- 2026-07-10 PASS 17 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5458389Z === RUN   TestAccProject_withFalseDefaultSettings
2026-07-11T00:54:38.5475469Z === CONT  TestAccProject_withFalseDefaultSettings
2026-07-11T00:54:38.5633577Z === NAME  TestAccProject_withFalseDefaultSettings
2026-07-11T00:54:38.5634601Z     resource_project_test.go:699: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:54:38.5635362Z         
2026-07-11T00:54:38.5636156Z         Error: error creating project: test-acc-tf-p-2280616039823241590
2026-07-11T00:54:38.5636834Z         
2026-07-11T00:54:38.5637400Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5638823Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5639912Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5640487Z         
2026-07-11T00:54:38.5641395Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5642632Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5643781Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5644790Z --- FAIL: TestAccProject_withFalseDefaultSettings (75.82s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 17 seconds
- 2026-07-14

### Error 2026-07-14T00:43:07+00:00
```
2026-07-14T00:43:07.8930075Z === RUN   TestAccProject_withFalseDefaultSettings
2026-07-14T00:43:07.8942144Z === CONT  TestAccProject_withFalseDefaultSettings
2026-07-14T00:43:07.9002640Z === NAME  TestAccProject_withFalseDefaultSettings
2026-07-14T00:43:07.9003207Z     resource_project_test.go:699: Step 1/4 error: Error running apply: exit status 1
2026-07-14T00:43:07.9003636Z         
2026-07-14T00:43:07.9004079Z         Error: error creating project: test-acc-tf-p-7177138122137094165
2026-07-14T00:43:07.9004467Z         
2026-07-14T00:43:07.9004785Z           with mongodbatlas_project.test,
2026-07-14T00:43:07.9005423Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:07.9006027Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:07.9006582Z         
2026-07-14T00:43:07.9007073Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:07.9007972Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:07.9008596Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:07.9009061Z --- FAIL: TestAccProject_withFalseDefaultSettings (79.74s)
```

- 2026-07-15 PASS 16 seconds
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3846819Z === RUN   TestAccProject_withFalseDefaultSettings
2026-07-16T00:44:26.3863835Z === CONT  TestAccProject_withFalseDefaultSettings
2026-07-16T00:44:26.3992246Z === NAME  TestAccProject_withFalseDefaultSettings
2026-07-16T00:44:26.3992838Z     resource_project_test.go:699: Step 1/4 error: Error running apply: exit status 1
2026-07-16T00:44:26.3993269Z         
2026-07-16T00:44:26.3993719Z         Error: error creating project: test-acc-tf-p-8531386353533464646
2026-07-16T00:44:26.3994105Z         
2026-07-16T00:44:26.3994549Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.3995196Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.3995800Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.3996119Z         
2026-07-16T00:44:26.3996614Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.3997307Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.3997931Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.3998396Z --- FAIL: TestAccProject_withFalseDefaultSettings (90.01s)
```

- 2026-07-17 PASS 16 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.0825387Z === RUN   TestAccProject_withFalseDefaultSettings
2026-07-18T00:49:47.0844557Z === CONT  TestAccProject_withFalseDefaultSettings
2026-07-18T00:49:47.0902250Z === NAME  TestAccProject_withFalseDefaultSettings
2026-07-18T00:49:47.0903292Z     resource_project_test.go:700: Step 1/4 error: Error running apply: exit status 1
2026-07-18T00:49:47.0904110Z         
2026-07-18T00:49:47.0904955Z         Error: error creating project: test-acc-tf-p-1971556672705876573
2026-07-18T00:49:47.0905646Z         
2026-07-18T00:49:47.0906220Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.0907414Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.0908543Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.0909144Z         
2026-07-18T00:49:47.0910060Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.0911540Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.0912717Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.0913570Z --- FAIL: TestAccProject_withFalseDefaultSettings (68.46s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS a minute
- 2026-07-22 PASS 18 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1144636Z === RUN   TestAccProject_withFalseDefaultSettings
2026-07-23T00:46:48.1174216Z === CONT  TestAccProject_withFalseDefaultSettings
2026-07-23T00:46:48.1315531Z === NAME  TestAccProject_withFalseDefaultSettings
2026-07-23T00:46:48.1316312Z     resource_project_test.go:700: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:46:48.1316750Z         
2026-07-23T00:46:48.1317205Z         Error: error creating project: test-acc-tf-p-6734117869269314516
2026-07-23T00:46:48.1317595Z         
2026-07-23T00:46:48.1317921Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1318562Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1319167Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1319503Z         
2026-07-23T00:46:48.1319999Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1320791Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1321406Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1321865Z --- FAIL: TestAccProject_withFalseDefaultSettings (64.28s)
```

- 2026-07-24 PASS 18 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 24 seconds
- 2026-07-28 PASS 13 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 9 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 12 seconds
  - PASS 9 seconds
- 2026-08-04 PASS 13 seconds
- 2026-08-05 PASS 13 seconds
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 11 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 13 seconds
  - PASS 11 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 13 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 10 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
