# project/project/TestAccProject_withInvalidLimitName Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.03s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-04-16 00:54](#error-2026-04-16t0054520000) |  | dev | flaky_500 | 77.00s
[2026-04-21 00:50](#error-2026-04-21t0050450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-04-30 00:57](#error-2026-04-30t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 21 seconds
- 2026-04-08 PASS 5 seconds
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7221890Z === RUN   TestAccProject_withInvalidLimitName
2026-04-09T00:40:34.7226719Z === CONT  TestAccProject_withInvalidLimitName
2026-04-09T00:40:34.7376182Z === NAME  TestAccProject_withInvalidLimitName
2026-04-09T00:40:34.7376882Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-09T00:40:34.7377545Z         
2026-04-09T00:40:34.7377971Z         Error: error creating project: test-acc-tf-p-7675193431571847977
2026-04-09T00:40:34.7378335Z         
2026-04-09T00:40:34.7378637Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7379246Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7379823Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7380131Z         
2026-04-09T00:40:34.7380594Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7381247Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7382009Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7382443Z --- FAIL: TestAccProject_withInvalidLimitName (113.34s)
```

- 2026-04-10 PASS 5 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3776846Z === RUN   TestAccProject_withInvalidLimitName
2026-04-11T00:48:38.3786718Z === CONT  TestAccProject_withInvalidLimitName
2026-04-11T00:48:38.3914597Z === NAME  TestAccProject_withInvalidLimitName
2026-04-11T00:48:38.3915852Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-11T00:48:38.3916801Z         
2026-04-11T00:48:38.3917779Z         Error: error creating project: test-acc-tf-p-1892696339485120465
2026-04-11T00:48:38.3918346Z         
2026-04-11T00:48:38.3918670Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.3919293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.3919895Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.3920212Z         
2026-04-11T00:48:38.3920691Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.3921350Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.3921946Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.3922384Z --- FAIL: TestAccProject_withInvalidLimitName (68.54s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 6 seconds
- 2026-04-14 PASS 56 seconds
- 2026-04-15 PASS 4 seconds
- 2026-04-16

### Error 2026-04-16T00:54:52+00:00
```
2026-04-16T00:54:52.7913208Z === RUN   TestAccProject_withInvalidLimitName
2026-04-16T00:54:52.7916693Z === CONT  TestAccProject_withInvalidLimitName
2026-04-16T00:54:52.8009107Z === NAME  TestAccProject_withInvalidLimitName
2026-04-16T00:54:52.8009811Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T00:54:52.8010332Z         
2026-04-16T00:54:52.8010753Z         Error: error creating project: test-acc-tf-p-3136113391562293049
2026-04-16T00:54:52.8011256Z         
2026-04-16T00:54:52.8011555Z           with mongodbatlas_project.test,
2026-04-16T00:54:52.8012166Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-16T00:54:52.8012726Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-16T00:54:52.8013027Z         
2026-04-16T00:54:52.8013493Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-16T00:54:52.8013895Z         type
2026-04-16T00:54:52.8014188Z --- FAIL: TestAccProject_withInvalidLimitName (77.05s)
```

- 2026-04-17 PASS 5 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21

### Error 2026-04-21T00:50:45+00:00
```
2026-04-21T00:50:45.8478813Z === RUN   TestAccProject_withInvalidLimitName
2026-04-21T00:50:45.8483470Z === CONT  TestAccProject_withInvalidLimitName
2026-04-21T00:50:45.8501872Z === NAME  TestAccProject_withInvalidLimitName
2026-04-21T00:50:45.8502626Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-21T00:50:45.8503175Z         
2026-04-21T00:50:45.8503610Z         Error: error creating project: test-acc-tf-p-3963861947013633690
2026-04-21T00:50:45.8503979Z         
2026-04-21T00:50:45.8504286Z           with mongodbatlas_project.test,
2026-04-21T00:50:45.8504917Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-21T00:50:45.8505505Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-21T00:50:45.8505816Z         
2026-04-21T00:50:45.8506301Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T00:50:45.8506961Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T00:50:45.8507901Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:45.8508345Z --- FAIL: TestAccProject_withInvalidLimitName (64.25s)
```

- 2026-04-22 PASS 7 seconds
- 2026-04-23 PASS 17 seconds
- 2026-04-24 PASS 4 seconds
- 2026-04-25 PASS 54 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 seconds
- 2026-04-28 PASS 32 seconds
- 2026-04-29 PASS 4 seconds
- 2026-04-30

### Error 2026-04-30T00:57:25+00:00
```
2026-04-30T00:57:25.2516654Z === RUN   TestAccProject_withInvalidLimitName
2026-04-30T00:57:25.2521338Z === CONT  TestAccProject_withInvalidLimitName
2026-04-30T00:57:25.2562933Z === NAME  TestAccProject_withInvalidLimitName
2026-04-30T00:57:25.2564043Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-30T00:57:25.2565000Z         
2026-04-30T00:57:25.2565630Z         Error: error creating project: test-acc-tf-p-2065528908641567221
2026-04-30T00:57:25.2565995Z         
2026-04-30T00:57:25.2566281Z           with mongodbatlas_project.test,
2026-04-30T00:57:25.2566848Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:25.2567561Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:25.2567847Z         
2026-04-30T00:57:25.2568287Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:25.2568891Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:25.2569445Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:25.2569888Z --- FAIL: TestAccProject_withInvalidLimitName (65.45s)
```

- 2026-05-01 PASS 5 seconds
- 2026-05-02 PASS 59 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 seconds
- 2026-05-05 PASS 35 seconds
- 2026-05-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 4 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 seconds
- 2026-05-04 PASS 5 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 4 seconds
