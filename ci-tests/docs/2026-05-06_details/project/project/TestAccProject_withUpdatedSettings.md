# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s
[2026-04-18 00:47](#error-2026-04-18t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s
[2026-04-21 00:50](#error-2026-04-21t0050450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-04-30 00:57](#error-2026-04-30t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 116.07s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:42+00:00
```
2026-04-07T00:51:42.3948699Z === RUN   TestAccProject_withUpdatedSettings
2026-04-07T00:51:42.3965815Z === CONT  TestAccProject_withUpdatedSettings
2026-04-07T00:51:42.4101098Z === NAME  TestAccProject_withUpdatedSettings
2026-04-07T00:51:42.4101643Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-04-07T00:51:42.4102057Z         
2026-04-07T00:51:42.4102478Z         Error: error creating project: test-acc-tf-p-8690470646525786869
2026-04-07T00:51:42.4102845Z         
2026-04-07T00:51:42.4103147Z           with mongodbatlas_project.test,
2026-04-07T00:51:42.4103768Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:51:42.4104350Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:51:42.4104661Z         
2026-04-07T00:51:42.4105152Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:51:42.4105812Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:51:42.4106423Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:42.4106848Z --- FAIL: TestAccProject_withUpdatedSettings (73.17s)
```

- 2026-04-08 PASS 19 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 15 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 24 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 15 seconds
- 2026-04-16 PASS 58 seconds
- 2026-04-17 PASS 14 seconds
- 2026-04-18

### Error 2026-04-18T00:47:04+00:00
```
2026-04-18T00:47:04.4802658Z === RUN   TestAccProject_withUpdatedSettings
2026-04-18T00:47:04.4811069Z === CONT  TestAccProject_withUpdatedSettings
2026-04-18T00:47:04.4831462Z === NAME  TestAccProject_withUpdatedSettings
2026-04-18T00:47:04.4832079Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-04-18T00:47:04.4832756Z         
2026-04-18T00:47:04.4833292Z         Error: error creating project: test-acc-tf-p-8264934859500409463
2026-04-18T00:47:04.4833650Z         
2026-04-18T00:47:04.4833898Z           with mongodbatlas_project.test,
2026-04-18T00:47:04.4834383Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:47:04.4834828Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:47:04.4835078Z         
2026-04-18T00:47:04.4835462Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:47:04.4835965Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:47:04.4836423Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:04.4836748Z --- FAIL: TestAccProject_withUpdatedSettings (73.39s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 16 seconds
- 2026-04-21

### Error 2026-04-21T00:50:45+00:00
```
2026-04-21T00:50:45.8473071Z === RUN   TestAccProject_withUpdatedSettings
2026-04-21T00:50:45.8482772Z === CONT  TestAccProject_withUpdatedSettings
2026-04-21T00:50:45.8590759Z === NAME  TestAccProject_withUpdatedSettings
2026-04-21T00:50:45.8591303Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-04-21T00:50:45.8591718Z         
2026-04-21T00:50:45.8592142Z         Error: error creating project: test-acc-tf-p-1273737042078841902
2026-04-21T00:50:45.8592507Z         
2026-04-21T00:50:45.8592822Z           with mongodbatlas_project.test,
2026-04-21T00:50:45.8593442Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-21T00:50:45.8594026Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-21T00:50:45.8594337Z         
2026-04-21T00:50:45.8594811Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T00:50:45.8595475Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T00:50:45.8596084Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:45.8596508Z --- FAIL: TestAccProject_withUpdatedSettings (69.85s)
```

- 2026-04-22 PASS 17 seconds
- 2026-04-23 PASS 49 seconds
- 2026-04-24 PASS 15 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 16 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 16 seconds
- 2026-04-30

### Error 2026-04-30T00:57:25+00:00
```
2026-04-30T00:57:25.2510441Z === RUN   TestAccProject_withUpdatedSettings
2026-04-30T00:57:25.2523887Z === CONT  TestAccProject_withUpdatedSettings
2026-04-30T00:57:25.2664458Z === NAME  TestAccProject_withUpdatedSettings
2026-04-30T00:57:25.2664946Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-04-30T00:57:25.2665330Z         
2026-04-30T00:57:25.2665707Z         Error: error creating project: test-acc-tf-p-2050610668041941249
2026-04-30T00:57:25.2666043Z         
2026-04-30T00:57:25.2666325Z           with mongodbatlas_project.test,
2026-04-30T00:57:25.2666888Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:25.2667422Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:25.2667707Z         
2026-04-30T00:57:25.2668144Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:25.2668739Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:25.2669281Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:25.2669788Z --- FAIL: TestAccProject_withUpdatedSettings (116.68s)
```

- 2026-05-01 PASS 17 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 16 seconds
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4211839Z === RUN   TestAccProject_withUpdatedSettings
2026-05-05T00:53:01.4218973Z === CONT  TestAccProject_withUpdatedSettings
2026-05-05T00:53:01.4297803Z === NAME  TestAccProject_withUpdatedSettings
2026-05-05T00:53:01.4298337Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-05-05T00:53:01.4299009Z         
2026-05-05T00:53:01.4299442Z         Error: error creating project: test-acc-tf-p-7535569618033167586
2026-05-05T00:53:01.4299833Z         
2026-05-05T00:53:01.4300146Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4300771Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4301362Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4301667Z         
2026-05-05T00:53:01.4302141Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4302819Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4303423Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4303856Z --- FAIL: TestAccProject_withUpdatedSettings (69.49s)
```

- 2026-05-06 PASS 22 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 14 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 13 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 12 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 14 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 19 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 13 seconds
- 2026-05-04 PASS 14 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 14 seconds
