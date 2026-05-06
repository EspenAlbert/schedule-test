# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.08s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.03s
[2026-04-18 00:47](#error-2026-04-18t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.07s
[2026-04-21 00:50](#error-2026-04-21t0050450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.09s
[2026-04-30 00:57](#error-2026-04-30t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s
[2026-05-02 00:58](#error-2026-05-02t0058370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 33 seconds
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7220160Z === RUN   TestAccProject_withUpdatedLimits
2026-04-09T00:40:34.7227058Z === CONT  TestAccProject_withUpdatedLimits
2026-04-09T00:40:34.7269183Z === NAME  TestAccProject_withUpdatedLimits
2026-04-09T00:40:34.7269743Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-04-09T00:40:34.7270165Z         
2026-04-09T00:40:34.7270585Z         Error: error creating project: test-acc-tf-p-5413536072683840835
2026-04-09T00:40:34.7271146Z         
2026-04-09T00:40:34.7271447Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7272069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7272649Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7272961Z         
2026-04-09T00:40:34.7273435Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7274089Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7274686Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7275104Z --- FAIL: TestAccProject_withUpdatedLimits (74.83s)
```

- 2026-04-10 PASS 26 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3774508Z === RUN   TestAccProject_withUpdatedLimits
2026-04-11T00:48:38.3783513Z === CONT  TestAccProject_withUpdatedLimits
2026-04-11T00:48:38.3987943Z === NAME  TestAccProject_withUpdatedLimits
2026-04-11T00:48:38.3988633Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:48:38.3989103Z         
2026-04-11T00:48:38.3989534Z         Error: error creating project: test-acc-tf-p-4446791723158586870
2026-04-11T00:48:38.3989905Z         
2026-04-11T00:48:38.3990214Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.3990830Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.3991420Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.3991737Z         
2026-04-11T00:48:38.3992211Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.3992878Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.3993479Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.3993905Z --- FAIL: TestAccProject_withUpdatedLimits (77.26s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 40 seconds
- 2026-04-14 PASS 2 minutes
- 2026-04-15 PASS 22 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 25 seconds
- 2026-04-18

### Error 2026-04-18T00:47:04+00:00
```
2026-04-18T00:47:04.4805064Z === RUN   TestAccProject_withUpdatedLimits
2026-04-18T00:47:04.4810825Z === CONT  TestAccProject_withUpdatedLimits
2026-04-18T00:47:04.4860017Z === NAME  TestAccProject_withUpdatedLimits
2026-04-18T00:47:04.4860428Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-04-18T00:47:04.4860745Z         
2026-04-18T00:47:04.4861075Z         Error: error creating project: test-acc-tf-p-1126436806279094565
2026-04-18T00:47:04.4861359Z         
2026-04-18T00:47:04.4861593Z           with mongodbatlas_project.test,
2026-04-18T00:47:04.4862058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:47:04.4862502Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:47:04.4862743Z         
2026-04-18T00:47:04.4863101Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:47:04.4863717Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:47:04.4864167Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:04.4864486Z --- FAIL: TestAccProject_withUpdatedLimits (75.73s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 24 seconds
- 2026-04-21

### Error 2026-04-21T00:50:45+00:00
```
2026-04-21T00:50:45.8476808Z === RUN   TestAccProject_withUpdatedLimits
2026-04-21T00:50:45.8484153Z === CONT  TestAccProject_withUpdatedLimits
2026-04-21T00:50:45.8573234Z === NAME  TestAccProject_withUpdatedLimits
2026-04-21T00:50:45.8573797Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-04-21T00:50:45.8574211Z         
2026-04-21T00:50:45.8574751Z         Error: error creating project: test-acc-tf-p-6060374050204601789
2026-04-21T00:50:45.8575120Z         
2026-04-21T00:50:45.8575421Z           with mongodbatlas_project.test,
2026-04-21T00:50:45.8576040Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-21T00:50:45.8576637Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-21T00:50:45.8576941Z         
2026-04-21T00:50:45.8577539Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-21T00:50:45.8578203Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-21T00:50:45.8578806Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T00:50:45.8579229Z --- FAIL: TestAccProject_withUpdatedLimits (68.93s)
```

- 2026-04-22 PASS 24 seconds
- 2026-04-23 PASS 52 seconds
- 2026-04-24 PASS 25 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 28 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 24 seconds
- 2026-04-30

### Error 2026-04-30T00:57:25+00:00
```
2026-04-30T00:57:25.2514423Z === RUN   TestAccProject_withUpdatedLimits
2026-04-30T00:57:25.2521636Z === CONT  TestAccProject_withUpdatedLimits
2026-04-30T00:57:25.2598929Z === NAME  TestAccProject_withUpdatedLimits
2026-04-30T00:57:25.2599433Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-04-30T00:57:25.2599822Z         
2026-04-30T00:57:25.2600210Z         Error: error creating project: test-acc-tf-p-5675432908203197860
2026-04-30T00:57:25.2600550Z         
2026-04-30T00:57:25.2600822Z           with mongodbatlas_project.test,
2026-04-30T00:57:25.2601747Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:57:25.2602567Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:57:25.2602867Z         
2026-04-30T00:57:25.2603317Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:57:25.2603934Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:57:25.2604490Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:25.2604883Z --- FAIL: TestAccProject_withUpdatedLimits (67.92s)
```

- 2026-05-01 PASS 29 seconds
- 2026-05-02

### Error 2026-05-02T00:58:37+00:00
```
2026-05-02T00:58:37.2186716Z === RUN   TestAccProject_withUpdatedLimits
2026-05-02T00:58:37.2193774Z === CONT  TestAccProject_withUpdatedLimits
2026-05-02T00:58:37.2260220Z === NAME  TestAccProject_withUpdatedLimits
2026-05-02T00:58:37.2260746Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-02T00:58:37.2261154Z         
2026-05-02T00:58:37.2261561Z         Error: error creating project: test-acc-tf-p-1762969413711820796
2026-05-02T00:58:37.2261924Z         
2026-05-02T00:58:37.2262217Z           with mongodbatlas_project.test,
2026-05-02T00:58:37.2262820Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-02T00:58:37.2263394Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-02T00:58:37.2263692Z         
2026-05-02T00:58:37.2264162Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-02T00:58:37.2264807Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-02T00:58:37.2265397Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-02T00:58:37.2265811Z --- FAIL: TestAccProject_withUpdatedLimits (68.44s)
```

- 2026-05-03: MISSING
- 2026-05-04 PASS 23 seconds
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4214068Z === RUN   TestAccProject_withUpdatedLimits
2026-05-05T00:53:01.4218354Z === CONT  TestAccProject_withUpdatedLimits
2026-05-05T00:53:01.4350665Z === NAME  TestAccProject_withUpdatedLimits
2026-05-05T00:53:01.4351195Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-05T00:53:01.4351607Z         
2026-05-05T00:53:01.4352036Z         Error: error creating project: test-acc-tf-p-515846138801357081
2026-05-05T00:53:01.4352407Z         
2026-05-05T00:53:01.4352718Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4353357Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4353952Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4354266Z         
2026-05-05T00:53:01.4354752Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4355428Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4356032Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4356460Z --- FAIL: TestAccProject_withUpdatedLimits (76.06s)
```

- 2026-05-06 PASS 39 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 23 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 21 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 19 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 22 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 36 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 seconds
- 2026-05-04 PASS 23 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 22 seconds
