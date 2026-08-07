# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) |  | dev | flaky_500 | 54.02s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.03s
[2026-07-14 00:43](#error-2026-07-14t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.02s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.00s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.09s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8532591Z === RUN   TestAccProject_withUpdatedSettings
2026-07-09T01:01:39.8547400Z === CONT  TestAccProject_withUpdatedSettings
2026-07-09T01:01:39.8641628Z === NAME  TestAccProject_withUpdatedSettings
2026-07-09T01:01:39.8642632Z     resource_project_test.go:735: Step 1/4 error: Error running apply: exit status 1
2026-07-09T01:01:39.8643645Z         
2026-07-09T01:01:39.8644441Z         Error: error creating project: test-acc-tf-p-2581449064069441739
2026-07-09T01:01:39.8645124Z         
2026-07-09T01:01:39.8645702Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8646873Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8647949Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8648516Z         
2026-07-09T01:01:39.8649433Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:01:39.8650207Z         type
2026-07-09T01:01:39.8661057Z   
2026-07-09T01:01:39.8711333Z --- FAIL: TestAccProject_withUpdatedSettings (54.22s)
```

- 2026-07-10 PASS 46 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5459697Z === RUN   TestAccProject_withUpdatedSettings
2026-07-11T00:54:38.5473484Z === CONT  TestAccProject_withUpdatedSettings
2026-07-11T00:54:38.5700487Z === NAME  TestAccProject_withUpdatedSettings
2026-07-11T00:54:38.5701045Z     resource_project_test.go:735: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:54:38.5718588Z         
2026-07-11T00:54:38.5719620Z         Error: error creating project: test-acc-tf-p-6440650126285937830
2026-07-11T00:54:38.5720301Z         
2026-07-11T00:54:38.5720721Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5721398Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5722034Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5722377Z         
2026-07-11T00:54:38.5722899Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5723605Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5724247Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5724712Z --- FAIL: TestAccProject_withUpdatedSettings (81.31s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 51 seconds
- 2026-07-14

### Error 2026-07-14T00:43:07+00:00
```
2026-07-14T00:43:07.8930895Z === RUN   TestAccProject_withUpdatedSettings
2026-07-14T00:43:07.8941787Z === CONT  TestAccProject_withUpdatedSettings
2026-07-14T00:43:07.8983877Z === NAME  TestAccProject_withUpdatedSettings
2026-07-14T00:43:07.8984441Z     resource_project_test.go:735: Step 1/4 error: Error running apply: exit status 1
2026-07-14T00:43:07.8984868Z         
2026-07-14T00:43:07.8985313Z         Error: error creating project: test-acc-tf-p-5295788696326074326
2026-07-14T00:43:07.8985866Z         
2026-07-14T00:43:07.8986475Z           with mongodbatlas_project.test,
2026-07-14T00:43:07.8987125Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:43:07.8987732Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:43:07.8988054Z         
2026-07-14T00:43:07.8988542Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:43:07.8989222Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:43:07.8989842Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:07.8990284Z --- FAIL: TestAccProject_withUpdatedSettings (66.20s)
```

- 2026-07-15 PASS 49 seconds
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3848210Z === RUN   TestAccProject_withUpdatedSettings
2026-07-16T00:44:26.3863473Z === CONT  TestAccProject_withUpdatedSettings
2026-07-16T00:44:26.3955134Z === NAME  TestAccProject_withUpdatedSettings
2026-07-16T00:44:26.3955726Z     resource_project_test.go:735: Step 1/4 error: Error running apply: exit status 1
2026-07-16T00:44:26.3956171Z         
2026-07-16T00:44:26.3956613Z         Error: error creating project: test-acc-tf-p-8286819346981247149
2026-07-16T00:44:26.3956993Z         
2026-07-16T00:44:26.3957308Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.3957947Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.3958549Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.3958876Z         
2026-07-16T00:44:26.3959366Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.3960047Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.3960668Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.3961275Z --- FAIL: TestAccProject_withUpdatedSettings (77.04s)
```

- 2026-07-17 PASS 48 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.0827010Z === RUN   TestAccProject_withUpdatedSettings
2026-07-18T00:49:47.0845809Z === CONT  TestAccProject_withUpdatedSettings
2026-07-18T00:49:47.1051284Z === NAME  TestAccProject_withUpdatedSettings
2026-07-18T00:49:47.1051907Z     resource_project_test.go:736: Step 1/4 error: Error running apply: exit status 1
2026-07-18T00:49:47.1052373Z         
2026-07-18T00:49:47.1052969Z         Error: error creating project: test-acc-tf-p-3164133005215988965
2026-07-18T00:49:47.1053380Z         
2026-07-18T00:49:47.1053711Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.1054374Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.1054997Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.1055334Z         
2026-07-18T00:49:47.1055846Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.1056562Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.1057204Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1057662Z --- FAIL: TestAccProject_withUpdatedSettings (103.93s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 2 minutes
- 2026-07-22 PASS 51 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1145391Z === RUN   TestAccProject_withUpdatedSettings
2026-07-23T00:46:48.1173672Z === CONT  TestAccProject_withUpdatedSettings
2026-07-23T00:46:48.1189131Z === NAME  TestAccProject_withUpdatedSettings
2026-07-23T00:46:48.1189820Z     resource_project_test.go:736: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:46:48.1190697Z         
2026-07-23T00:46:48.1191173Z         Error: error creating project: test-acc-tf-p-396560065690509712
2026-07-23T00:46:48.1191576Z         
2026-07-23T00:46:48.1191916Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1192571Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1193177Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1193513Z         
2026-07-23T00:46:48.1194029Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1194717Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1195342Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1195800Z --- FAIL: TestAccProject_withUpdatedSettings (63.16s)
```

- 2026-07-24 PASS 45 seconds
- 2026-07-25 PASS 28 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 29 seconds
- 2026-07-29 PASS 25 seconds
- 2026-07-30 PASS 30 seconds
- 2026-07-31
  - PASS 25 seconds
  - PASS 43 seconds
  - PASS 18 seconds
- 2026-08-01 PASS 25 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 21 seconds
  - PASS 20 seconds
- 2026-08-04 PASS 31 seconds
- 2026-08-05 PASS 24 seconds
- 2026-08-06 PASS 23 seconds
- 2026-08-07 PASS 22 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 28 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 34 seconds
  - PASS 29 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 33 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 38 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 27 seconds
  - PASS 20 seconds
  - PASS 19 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 22 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
