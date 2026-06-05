# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.08s
[2026-05-12 00:59](#error-2026-05-12t0059160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.00s
[2026-05-14 01:05](#error-2026-05-14t0105490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.08s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.04s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.08s
[2026-06-02 01:12](#error-2026-06-02t0112190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 24 seconds
- 2026-05-08 PASS 23 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2660287Z === RUN   TestAccProject_withUpdatedSettings
2026-05-09T00:56:55.2670473Z === CONT  TestAccProject_withUpdatedSettings
2026-05-09T00:56:55.2790619Z === NAME  TestAccProject_withUpdatedSettings
2026-05-09T00:56:55.2791131Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-05-09T00:56:55.2791538Z         
2026-05-09T00:56:55.2791952Z         Error: error creating project: test-acc-tf-p-6443711286490087633
2026-05-09T00:56:55.2792308Z         
2026-05-09T00:56:55.2792609Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2793216Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2793780Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2794083Z         
2026-05-09T00:56:55.2794728Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2795384Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2795964Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2796379Z --- FAIL: TestAccProject_withUpdatedSettings (94.78s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 15 seconds
- 2026-05-12

### Error 2026-05-12T00:59:16+00:00
```
2026-05-12T00:59:16.8633106Z === RUN   TestAccProject_withUpdatedSettings
2026-05-12T00:59:16.8644850Z === CONT  TestAccProject_withUpdatedSettings
2026-05-12T00:59:16.8714588Z === NAME  TestAccProject_withUpdatedSettings
2026-05-12T00:59:16.8715300Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-05-12T00:59:16.8715722Z         
2026-05-12T00:59:16.8716160Z         Error: error creating project: test-acc-tf-p-2318352410257305399
2026-05-12T00:59:16.8716534Z         
2026-05-12T00:59:16.8716852Z           with mongodbatlas_project.test,
2026-05-12T00:59:16.8717483Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-12T00:59:16.8718068Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:59:16.8718384Z         
2026-05-12T00:59:16.8718876Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:59:16.8719539Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:59:16.8720164Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:59:16.8720606Z --- FAIL: TestAccProject_withUpdatedSettings (68.01s)
```

- 2026-05-13 PASS 15 seconds
- 2026-05-14

### Error 2026-05-14T01:05:49+00:00
```
2026-05-14T01:05:49.3898979Z === RUN   TestAccProject_withUpdatedSettings
2026-05-14T01:05:49.3910591Z === CONT  TestAccProject_withUpdatedSettings
2026-05-14T01:05:49.3975966Z === NAME  TestAccProject_withUpdatedSettings
2026-05-14T01:05:49.3976793Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-05-14T01:05:49.3977436Z         
2026-05-14T01:05:49.3977925Z         Error: error creating project: test-acc-tf-p-7764294619799959290
2026-05-14T01:05:49.3978291Z         
2026-05-14T01:05:49.3978595Z           with mongodbatlas_project.test,
2026-05-14T01:05:49.3979212Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:05:49.3979779Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:05:49.3980335Z         
2026-05-14T01:05:49.3980811Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:05:49.3981464Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:05:49.3982061Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:05:49.3982485Z --- FAIL: TestAccProject_withUpdatedSettings (77.76s)
```

- 2026-05-15 PASS 15 seconds
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7287590Z === RUN   TestAccProject_withUpdatedSettings
2026-05-16T00:55:42.7295558Z === CONT  TestAccProject_withUpdatedSettings
2026-05-16T00:55:42.7350027Z === NAME  TestAccProject_withUpdatedSettings
2026-05-16T00:55:42.7350563Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-05-16T00:55:42.7350969Z         
2026-05-16T00:55:42.7351442Z         Error: error creating project: test-acc-tf-p-7396394601557199817
2026-05-16T00:55:42.7351802Z         
2026-05-16T00:55:42.7352109Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7352721Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7353310Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7353627Z         
2026-05-16T00:55:42.7354217Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7354899Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7355497Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7355921Z --- FAIL: TestAccProject_withUpdatedSettings (67.60s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 15 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 20 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9145174Z === RUN   TestAccProject_withUpdatedSettings
2026-05-21T01:04:31.9157415Z === CONT  TestAccProject_withUpdatedSettings
2026-05-21T01:04:31.9261294Z === NAME  TestAccProject_withUpdatedSettings
2026-05-21T01:04:31.9261828Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:04:31.9262236Z         
2026-05-21T01:04:31.9262652Z         Error: error creating project: test-acc-tf-p-1342151973148525352
2026-05-21T01:04:31.9263017Z         
2026-05-21T01:04:31.9263312Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9263917Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9264493Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9264795Z         
2026-05-21T01:04:31.9265263Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9265920Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9266513Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9266939Z --- FAIL: TestAccProject_withUpdatedSettings (77.42s)
```

- 2026-05-22 PASS 19 seconds
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS 15 seconds
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1893619Z === RUN   TestAccProject_withUpdatedSettings
2026-05-26T02:10:57.1903229Z === CONT  TestAccProject_withUpdatedSettings
2026-05-26T02:10:57.2042425Z === NAME  TestAccProject_withUpdatedSettings
2026-05-26T02:10:57.2042947Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-05-26T02:10:57.2043341Z         
2026-05-26T02:10:57.2043760Z         Error: error creating project: test-acc-tf-p-1307552551273083228
2026-05-26T02:10:57.2044112Z         
2026-05-26T02:10:57.2044404Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.2045017Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.2045580Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.2045878Z         
2026-05-26T02:10:57.2046340Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.2046983Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.2047575Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.2048134Z --- FAIL: TestAccProject_withUpdatedSettings (88.79s)
```

- 2026-05-27 PASS 17 seconds
- 2026-05-28 PASS 58 seconds
- 2026-05-29 PASS 15 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 17 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2432186Z === RUN   TestAccProject_withUpdatedSettings
2026-06-02T01:12:19.2444599Z === CONT  TestAccProject_withUpdatedSettings
2026-06-02T01:12:19.2624442Z === NAME  TestAccProject_withUpdatedSettings
2026-06-02T01:12:19.2625351Z     resource_project_test.go:732: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:12:19.2626076Z         
2026-06-02T01:12:19.2626799Z         Error: error creating project: test-acc-tf-p-4198175004731319357
2026-06-02T01:12:19.2627447Z         
2026-06-02T01:12:19.2627974Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2629042Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2630023Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2630570Z         
2026-06-02T01:12:19.2631515Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:19.2632641Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:19.2633664Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:19.2634382Z --- FAIL: TestAccProject_withUpdatedSettings (85.56s)
```

- 2026-06-03 PASS 14 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 14 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 22 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 24 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
