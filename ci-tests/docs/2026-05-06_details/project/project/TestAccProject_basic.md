# project/project/TestAccProject_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 108.03s
[2026-04-18 00:47](#error-2026-04-18t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.06s
[2026-04-21 00:50](#error-2026-04-21t0050450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.02s
[2026-04-25 00:48](#error-2026-04-25t0048210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.06s
[2026-04-30 00:57](#error-2026-04-30t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.02s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 6 minutes
- 2026-04-08 PASS 7 minutes
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7212316Z === RUN   TestAccProject_basic
2026-04-09T00:40:34.7224924Z === CONT  TestAccProject_basic
2026-04-09T00:40:34.7358991Z === NAME  TestAccProject_basic
2026-04-09T00:40:34.7359496Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-04-09T00:40:34.7359911Z         
2026-04-09T00:40:34.7360333Z         Error: error creating project: test-acc-tf-p-8193838130498251771
2026-04-09T00:40:34.7360708Z         
2026-04-09T00:40:34.7361010Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7361622Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7362204Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7362509Z         
2026-04-09T00:40:34.7362980Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7363637Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7364231Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7364622Z --- FAIL: TestAccProject_basic (108.33s)
```

- 2026-04-10 PASS 4 minutes
- 2026-04-11 PASS 5 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 7 minutes
- 2026-04-14 PASS 5 minutes
- 2026-04-15 PASS 3 minutes
- 2026-04-16 PASS 4 minutes
- 2026-04-17 PASS 3 minutes
- 2026-04-18

### Error 2026-04-18T00:47:04+00:00
```
2026-04-18T00:47:04.4799026Z === RUN   TestAccProject_basic
2026-04-18T00:47:04.4808678Z === CONT  TestAccProject_basic
2026-04-18T00:47:04.4887336Z === NAME  TestAccProject_basic
2026-04-18T00:47:04.4887752Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-04-18T00:47:04.4888068Z         
2026-04-18T00:47:04.4888403Z         Error: error creating project: test-acc-tf-p-8952714542002339969
2026-04-18T00:47:04.4888681Z         
2026-04-18T00:47:04.4888923Z           with mongodbatlas_project.test,
2026-04-18T00:47:04.4889563Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:47:04.4890016Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:47:04.4890257Z         
2026-04-18T00:47:04.4890727Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:47:04.4891250Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:47:04.4891735Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:04.4892049Z --- FAIL: TestAccProject_basic (84.56s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21

### Error 2026-04-21T00:50:45+00:00
```
2026-04-21T00:50:45.8449698Z === RUN   TestAccProject_basic
2026-04-21T00:50:45.8481485Z === CONT  TestAccProject_basic
2026-04-21T00:50:45.8614386Z === NAME  TestAccProject_basic
2026-04-21T00:50:45.8614881Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-04-21T00:50:45.8615298Z         
2026-04-21T00:50:45.8615727Z         Error: error creating project: test-acc-tf-p-1983614790875887177
2026-04-21T00:50:45.8616090Z         
2026-04-21T00:50:45.8616395Z           with mongodbatlas_project.test,
2026-04-21T00:50:45.8617013Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-21T00:50:45.8617710Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-21T00:50:45.8618023Z         
2026-04-21T00:50:45.8618492Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T00:50:45.8619152Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T00:50:45.8619758Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:45.8620140Z --- FAIL: TestAccProject_basic (85.15s)
```

- 2026-04-22 PASS 4 minutes
- 2026-04-23 PASS 7 minutes
- 2026-04-24 PASS 4 minutes
- 2026-04-25

### Error 2026-04-25T00:48:21+00:00
```
2026-04-25T00:48:21.5495964Z === RUN   TestAccProject_basic
2026-04-25T00:48:21.5507000Z === CONT  TestAccProject_basic
2026-04-25T00:48:21.5591489Z === NAME  TestAccProject_basic
2026-04-25T00:48:21.5592266Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-04-25T00:48:21.5592688Z         
2026-04-25T00:48:21.5593117Z         Error: error creating project: test-acc-tf-p-8011146062424037784
2026-04-25T00:48:21.5593487Z         
2026-04-25T00:48:21.5593799Z           with mongodbatlas_project.test,
2026-04-25T00:48:21.5594422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-25T00:48:21.5595000Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-25T00:48:21.5595433Z         
2026-04-25T00:48:21.5595911Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-25T00:48:21.5596561Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-25T00:48:21.5597159Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:21.5597952Z --- FAIL: TestAccProject_basic (89.63s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 4 minutes
- 2026-04-28 PASS 4 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30

### Error 2026-04-30T00:57:25+00:00
```
2026-04-30T00:57:25.2506609Z === RUN   TestAccProject_basic
2026-04-30T00:57:25.2519804Z === CONT  TestAccProject_basic
2026-04-30T00:57:25.2616559Z === NAME  TestAccProject_basic
2026-04-30T00:57:25.2617026Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-04-30T00:57:25.2617411Z         
2026-04-30T00:57:25.2617803Z         Error: error creating project: test-acc-tf-p-7103844677313917984
2026-04-30T00:57:25.2618144Z         
2026-04-30T00:57:25.2618427Z           with mongodbatlas_project.test,
2026-04-30T00:57:25.2618997Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:25.2619537Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:25.2619820Z         
2026-04-30T00:57:25.2620255Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:25.2620866Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:25.2621417Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:25.2621778Z --- FAIL: TestAccProject_basic (68.21s)
```

- 2026-05-01 PASS 5 minutes
- 2026-05-02 PASS 5 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 minutes
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4207685Z === RUN   TestAccProject_basic
2026-05-05T00:53:01.4218067Z === CONT  TestAccProject_basic
2026-05-05T00:53:01.4367792Z === NAME  TestAccProject_basic
2026-05-05T00:53:01.4368289Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-05T00:53:01.4368820Z         
2026-05-05T00:53:01.4369250Z         Error: error creating project: test-acc-tf-p-5213154634830826992
2026-05-05T00:53:01.4369615Z         
2026-05-05T00:53:01.4370035Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4370667Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4371254Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4371564Z         
2026-05-05T00:53:01.4372038Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4372702Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4373317Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4373704Z --- FAIL: TestAccProject_basic (91.24s)
```

- 2026-05-06 PASS 7 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 minutes
- 2026-05-04 PASS 3 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 3 minutes
