# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.06s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.04s
[2026-04-14 00:55](#error-2026-04-14t0055030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.08s
[2026-04-16 00:54](#error-2026-04-16t0054520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-04-25 00:48](#error-2026-04-25t0048210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-04-30 00:57](#error-2026-04-30t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.01s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 32 seconds
- 2026-04-08 PASS 14 seconds
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7216005Z === RUN   TestAccProject_withFalseDefaultSettings
2026-04-09T00:40:34.7228883Z === CONT  TestAccProject_withFalseDefaultSettings
2026-04-09T00:40:34.7286636Z === NAME  TestAccProject_withFalseDefaultSettings
2026-04-09T00:40:34.7287175Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-04-09T00:40:34.7287862Z         
2026-04-09T00:40:34.7288301Z         Error: error creating project: test-acc-tf-p-6091715298434418385
2026-04-09T00:40:34.7288667Z         
2026-04-09T00:40:34.7288974Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7289592Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7290170Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7290482Z         
2026-04-09T00:40:34.7290943Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7291593Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7292184Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7292626Z --- FAIL: TestAccProject_withFalseDefaultSettings (77.58s)
```

- 2026-04-10 PASS 11 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3769479Z === RUN   TestAccProject_withFalseDefaultSettings
2026-04-11T00:48:38.3788389Z === CONT  TestAccProject_withFalseDefaultSettings
2026-04-11T00:48:38.3883560Z === NAME  TestAccProject_withFalseDefaultSettings
2026-04-11T00:48:38.3884547Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-04-11T00:48:38.3885258Z         
2026-04-11T00:48:38.3886000Z         Error: error creating project: test-acc-tf-p-5231351653411621212
2026-04-11T00:48:38.3886628Z         
2026-04-11T00:48:38.3887159Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.3888480Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.3889493Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.3890024Z         
2026-04-11T00:48:38.3890865Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.3892018Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.3893076Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.3893850Z --- FAIL: TestAccProject_withFalseDefaultSettings (67.40s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 16 seconds
- 2026-04-14

### Error 2026-04-14T00:55:03+00:00
```
2026-04-14T00:55:03.8122934Z === RUN   TestAccProject_withFalseDefaultSettings
2026-04-14T00:55:03.8136047Z === CONT  TestAccProject_withFalseDefaultSettings
2026-04-14T00:55:03.8215515Z === NAME  TestAccProject_withFalseDefaultSettings
2026-04-14T00:55:03.8216094Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-04-14T00:55:03.8216524Z         
2026-04-14T00:55:03.8216952Z         Error: error creating project: test-acc-tf-p-8199455484468485844
2026-04-14T00:55:03.8217315Z         
2026-04-14T00:55:03.8217616Z           with mongodbatlas_project.test,
2026-04-14T00:55:03.8218235Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-14T00:55:03.8218812Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-14T00:55:03.8219127Z         
2026-04-14T00:55:03.8219606Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-14T00:55:03.8220260Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-14T00:55:03.8221038Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:55:03.8221488Z --- FAIL: TestAccProject_withFalseDefaultSettings (73.77s)
```

- 2026-04-15 PASS 10 seconds
- 2026-04-16

### Error 2026-04-16T00:54:52+00:00
```
2026-04-16T00:54:52.7906270Z === RUN   TestAccProject_withFalseDefaultSettings
2026-04-16T00:54:52.7918523Z === CONT  TestAccProject_withFalseDefaultSettings
2026-04-16T00:54:52.7954799Z === NAME  TestAccProject_withFalseDefaultSettings
2026-04-16T00:54:52.7955378Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:52.7955795Z         
2026-04-16T00:54:52.7956240Z         Error: error creating project: test-acc-tf-p-4730107276082951886
2026-04-16T00:54:52.7956620Z         
2026-04-16T00:54:52.7956937Z           with mongodbatlas_project.test,
2026-04-16T00:54:52.7957976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-16T00:54:52.7958629Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-16T00:54:52.7958955Z         
2026-04-16T00:54:52.7959464Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-16T00:54:52.7960127Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-16T00:54:52.7960731Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:54:52.7961175Z --- FAIL: TestAccProject_withFalseDefaultSettings (63.01s)
```

- 2026-04-17 PASS 12 seconds
- 2026-04-18 PASS 54 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 seconds
- 2026-04-21 PASS 59 seconds
- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS 24 seconds
- 2026-04-24 PASS 13 seconds
- 2026-04-25

### Error 2026-04-25T00:48:21+00:00
```
2026-04-25T00:48:21.5499003Z === RUN   TestAccProject_withFalseDefaultSettings
2026-04-25T00:48:21.5509439Z === CONT  TestAccProject_withFalseDefaultSettings
2026-04-25T00:48:21.5533179Z === NAME  TestAccProject_withFalseDefaultSettings
2026-04-25T00:48:21.5533836Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-04-25T00:48:21.5534261Z         
2026-04-25T00:48:21.5534706Z         Error: error creating project: test-acc-tf-p-1171253523271822029
2026-04-25T00:48:21.5535078Z         
2026-04-25T00:48:21.5535605Z           with mongodbatlas_project.test,
2026-04-25T00:48:21.5536370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-25T00:48:21.5536957Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-25T00:48:21.5537277Z         
2026-04-25T00:48:21.5537784Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-25T00:48:21.5538445Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-25T00:48:21.5539060Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:21.5539518Z --- FAIL: TestAccProject_withFalseDefaultSettings (64.79s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 12 seconds
- 2026-04-28 PASS 55 seconds
- 2026-04-29 PASS 11 seconds
- 2026-04-30

### Error 2026-04-30T00:57:25+00:00
```
2026-04-30T00:57:25.2509206Z === RUN   TestAccProject_withFalseDefaultSettings
2026-04-30T00:57:25.2523058Z === CONT  TestAccProject_withFalseDefaultSettings
2026-04-30T00:57:25.2632619Z === NAME  TestAccProject_withFalseDefaultSettings
2026-04-30T00:57:25.2633145Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-04-30T00:57:25.2633523Z         
2026-04-30T00:57:25.2633906Z         Error: error creating project: test-acc-tf-p-8251513210075274840
2026-04-30T00:57:25.2634242Z         
2026-04-30T00:57:25.2634519Z           with mongodbatlas_project.test,
2026-04-30T00:57:25.2635085Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:25.2635629Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:25.2635908Z         
2026-04-30T00:57:25.2636346Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:25.2636960Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:25.2637516Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:25.2637933Z --- FAIL: TestAccProject_withFalseDefaultSettings (70.11s)
```

- 2026-05-01 PASS 14 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 11 seconds
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4211030Z === RUN   TestAccProject_withFalseDefaultSettings
2026-05-05T00:53:01.4220289Z === CONT  TestAccProject_withFalseDefaultSettings
2026-05-05T00:53:01.4273956Z === NAME  TestAccProject_withFalseDefaultSettings
2026-05-05T00:53:01.4274520Z     resource_project_test.go:696: Step 1/4 error: Error running apply: exit status 1
2026-05-05T00:53:01.4274930Z         
2026-05-05T00:53:01.4275360Z         Error: error creating project: test-acc-tf-p-3252978896454460365
2026-05-05T00:53:01.4275725Z         
2026-05-05T00:53:01.4276031Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4276660Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4277252Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4277566Z         
2026-05-05T00:53:01.4278049Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4278845Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4279454Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4279900Z --- FAIL: TestAccProject_withFalseDefaultSettings (66.21s)
```

- 2026-05-06 PASS 16 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 11 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 9 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 10 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 15 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 9 seconds
- 2026-05-04 PASS 11 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 10 seconds
