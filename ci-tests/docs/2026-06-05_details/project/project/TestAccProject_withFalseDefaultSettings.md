# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.09s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.01s
[2026-05-19 01:03](#error-2026-05-19t0103150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.02s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.04s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.07s
[2026-05-30 01:02](#error-2026-05-30t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-06-02 01:12](#error-2026-06-02t0112190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 44 seconds
  - PASS 13 seconds
- 2026-05-08 PASS 17 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2658963Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-09T00:56:55.2670810Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-09T00:56:55.2719748Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-09T00:56:55.2720297Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-09T00:56:55.2720714Z         
2026-05-09T00:56:55.2721377Z         Error: error creating project: test-acc-tf-p-7723711870516734320
2026-05-09T00:56:55.2721748Z         
2026-05-09T00:56:55.2722066Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2723139Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2723873Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2724298Z         
2026-05-09T00:56:55.2724764Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2725419Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2726006Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2726448Z --- FAIL: TestAccProject_withFalseDefaultSettings (70.90s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 12 seconds
- 2026-05-12 PASS 58 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS a minute
- 2026-05-15 PASS 12 seconds
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7286454Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-16T00:55:42.7296066Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-16T00:55:42.7418823Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-16T00:55:42.7419373Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-16T00:55:42.7419792Z         
2026-05-16T00:55:42.7420220Z         Error: error creating project: test-acc-tf-p-1520150888600823246
2026-05-16T00:55:42.7420579Z         
2026-05-16T00:55:42.7420883Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7421496Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7422070Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7422370Z         
2026-05-16T00:55:42.7422856Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7423520Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7424308Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7424759Z --- FAIL: TestAccProject_withFalseDefaultSettings (79.09s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 13 seconds
- 2026-05-19

### Error 2026-05-19T01:03:15+00:00
```
2026-05-19T01:03:15.0630315Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-19T01:03:15.0642599Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-19T01:03:15.0740571Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-19T01:03:15.0741275Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-19T01:03:15.0741693Z         
2026-05-19T01:03:15.0742123Z         Error: error creating project: test-acc-tf-p-378432597800471420
2026-05-19T01:03:15.0742499Z         
2026-05-19T01:03:15.0742810Z           with mongodbatlas_project.test,
2026-05-19T01:03:15.0743562Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:15.0744153Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:15.0744468Z         
2026-05-19T01:03:15.0744942Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:15.0745591Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:15.0746184Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:15.0746635Z --- FAIL: TestAccProject_withFalseDefaultSettings (100.22s)
```

- 2026-05-20 PASS 16 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9143688Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-21T01:04:31.9158063Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-21T01:04:31.9170539Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-21T01:04:31.9171249Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-21T01:04:31.9171850Z         
2026-05-21T01:04:31.9172274Z         Error: error creating project: test-acc-tf-p-6454153116275770411
2026-05-21T01:04:31.9172641Z         
2026-05-21T01:04:31.9172948Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9173559Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9174141Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9174461Z         
2026-05-21T01:04:31.9174932Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9175586Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9176173Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9176619Z --- FAIL: TestAccProject_withFalseDefaultSettings (63.09s)
```

- 2026-05-22 PASS 14 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.0937464Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-23T01:02:27.0951148Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-23T01:02:27.0968550Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-23T01:02:27.0969204Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-23T01:02:27.0969630Z         
2026-05-23T01:02:27.0970070Z         Error: error creating project: test-acc-tf-p-3847928568665649357
2026-05-23T01:02:27.0970440Z         
2026-05-23T01:02:27.0970749Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.0971378Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.0971962Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.0972278Z         
2026-05-23T01:02:27.0972753Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.0973418Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.0974016Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.0974601Z --- FAIL: TestAccProject_withFalseDefaultSettings (65.40s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 11 seconds
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1892522Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-26T02:10:57.1903563Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-26T02:10:57.2025429Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-26T02:10:57.2025958Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-26T02:10:57.2026356Z         
2026-05-26T02:10:57.2026767Z         Error: error creating project: test-acc-tf-p-8115513935847732950
2026-05-26T02:10:57.2027126Z         
2026-05-26T02:10:57.2027529Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.2028257Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.2028833Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.2029129Z         
2026-05-26T02:10:57.2029587Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.2030238Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.2030828Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.2031264Z --- FAIL: TestAccProject_withFalseDefaultSettings (78.68s)
```

- 2026-05-27 PASS 12 seconds
- 2026-05-28 PASS a minute
- 2026-05-29 PASS 15 seconds
- 2026-05-30

### Error 2026-05-30T01:02:11+00:00
```
2026-05-30T01:02:11.3446795Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-30T01:02:11.3457846Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-30T01:02:11.3496355Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-30T01:02:11.3496945Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-30T01:02:11.3497392Z         
2026-05-30T01:02:11.3497843Z         Error: error creating project: test-acc-tf-p-6254581278456208230
2026-05-30T01:02:11.3498237Z         
2026-05-30T01:02:11.3498560Z           with mongodbatlas_project.test,
2026-05-30T01:02:11.3499203Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:11.3500088Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:11.3500433Z         
2026-05-30T01:02:11.3500931Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:11.3501770Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:11.3502401Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:11.3502870Z --- FAIL: TestAccProject_withFalseDefaultSettings (67.29s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 11 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2430761Z === RUN   TestAccProject_withFalseDefaultSettings
2026-06-02T01:12:19.2445192Z === CONT  TestAccProject_withFalseDefaultSettings
2026-06-02T01:12:19.2595140Z === NAME  TestAccProject_withFalseDefaultSettings
2026-06-02T01:12:19.2596092Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-06-02T01:12:19.2596804Z         
2026-06-02T01:12:19.2597541Z         Error: error creating project: test-acc-tf-p-6991876747759047865
2026-06-02T01:12:19.2598167Z         
2026-06-02T01:12:19.2598689Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2599726Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2600703Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2601371Z         
2026-06-02T01:12:19.2602182Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:19.2603268Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:19.2604283Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:19.2605026Z --- FAIL: TestAccProject_withFalseDefaultSettings (81.45s)
```

- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 27 seconds
- 2026-06-05 PASS 13 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 12 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 18 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 19 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 17 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
