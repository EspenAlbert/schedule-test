# project/project/TestAccProject_withUpdatedRole Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 8)
Success rate: 76.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s
[2026-04-09 00:40](#error-2026-04-09t0040340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.10s
[2026-04-11 00:48](#error-2026-04-11t0048380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.04s
[2026-04-16 00:54](#error-2026-04-16t0054520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.09s
[2026-04-18 00:47](#error-2026-04-18t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.07s
[2026-04-28 00:58](#error-2026-04-28t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-05-02 00:58](#error-2026-05-02t0058370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s
[2026-05-05 00:53](#error-2026-05-05t0053010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:42+00:00
```
2026-04-07T00:51:42.3950165Z === RUN   TestAccProject_withUpdatedRole
2026-04-07T00:51:42.3965256Z === CONT  TestAccProject_withUpdatedRole
2026-04-07T00:51:42.4082680Z === NAME  TestAccProject_withUpdatedRole
2026-04-07T00:51:42.4083270Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-04-07T00:51:42.4083729Z         
2026-04-07T00:51:42.4084187Z         Error: error creating project: test-acc-tf-p-8916043806902550589
2026-04-07T00:51:42.4084583Z         
2026-04-07T00:51:42.4084904Z           with mongodbatlas_project.test,
2026-04-07T00:51:42.4085575Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:51:42.4086211Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:51:42.4086537Z         
2026-04-07T00:51:42.4087047Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:51:42.4087973Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:51:42.4088611Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:42.4089036Z --- FAIL: TestAccProject_withUpdatedRole (66.83s)
```

- 2026-04-08 PASS 16 seconds
- 2026-04-09

### Error 2026-04-09T00:40:34+00:00
```
2026-04-09T00:40:34.7218481Z === RUN   TestAccProject_withUpdatedRole
2026-04-09T00:40:34.7228211Z === CONT  TestAccProject_withUpdatedRole
2026-04-09T00:40:34.7324725Z === NAME  TestAccProject_withUpdatedRole
2026-04-09T00:40:34.7325266Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:34.7325674Z         
2026-04-09T00:40:34.7326085Z         Error: error creating project: test-acc-tf-p-5947934365894510312
2026-04-09T00:40:34.7326453Z         
2026-04-09T00:40:34.7326749Z           with mongodbatlas_project.test,
2026-04-09T00:40:34.7327505Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:34.7328091Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:34.7328394Z         
2026-04-09T00:40:34.7328868Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:34.7329521Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:34.7330127Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:34.7330537Z --- FAIL: TestAccProject_withUpdatedRole (84.97s)
```

- 2026-04-10 PASS 12 seconds
- 2026-04-11

### Error 2026-04-11T00:48:38+00:00
```
2026-04-11T00:48:38.3772238Z === RUN   TestAccProject_withUpdatedRole
2026-04-11T00:48:38.3782962Z === CONT  TestAccProject_withUpdatedRole
2026-04-11T00:48:38.4005622Z === NAME  TestAccProject_withUpdatedRole
2026-04-11T00:48:38.4006149Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:48:38.4006577Z         
2026-04-11T00:48:38.4006994Z         Error: error creating project: test-acc-tf-p-2861358903817463509
2026-04-11T00:48:38.4007370Z         
2026-04-11T00:48:38.4007803Z           with mongodbatlas_project.test,
2026-04-11T00:48:38.4008418Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:38.4009005Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:38.4009312Z         
2026-04-11T00:48:38.4009791Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:38.4010449Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:38.4011054Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:38.4011473Z --- FAIL: TestAccProject_withUpdatedRole (92.38s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 16 seconds
- 2026-04-14 PASS 49 seconds
- 2026-04-15 PASS 10 seconds
- 2026-04-16

### Error 2026-04-16T00:54:52+00:00
```
2026-04-16T00:54:52.7909039Z === RUN   TestAccProject_withUpdatedRole
2026-04-16T00:54:52.7919884Z === CONT  TestAccProject_withUpdatedRole
2026-04-16T00:54:52.8025748Z === NAME  TestAccProject_withUpdatedRole
2026-04-16T00:54:52.8026291Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:52.8026703Z         
2026-04-16T00:54:52.8027131Z         Error: error creating project: test-acc-tf-p-4143925306044293013
2026-04-16T00:54:52.8027603Z         
2026-04-16T00:54:52.8027914Z           with mongodbatlas_project.test,
2026-04-16T00:54:52.8028527Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-16T00:54:52.8029112Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-16T00:54:52.8029414Z         
2026-04-16T00:54:52.8029889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-16T00:54:52.8030546Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-16T00:54:52.8031135Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:54:52.8031554Z --- FAIL: TestAccProject_withUpdatedRole (87.88s)
```

- 2026-04-17 PASS 12 seconds
- 2026-04-18

### Error 2026-04-18T00:47:04+00:00
```
2026-04-18T00:47:04.4803478Z === RUN   TestAccProject_withUpdatedRole
2026-04-18T00:47:04.4811313Z === CONT  TestAccProject_withUpdatedRole
2026-04-18T00:47:04.4850024Z === NAME  TestAccProject_withUpdatedRole
2026-04-18T00:47:04.4850451Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-04-18T00:47:04.4850771Z         
2026-04-18T00:47:04.4851104Z         Error: error creating project: test-acc-tf-p-8414750342778098658
2026-04-18T00:47:04.4851384Z         
2026-04-18T00:47:04.4851624Z           with mongodbatlas_project.test,
2026-04-18T00:47:04.4852103Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:47:04.4852548Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:47:04.4852789Z         
2026-04-18T00:47:04.4853499Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:47:04.4854039Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:47:04.4854502Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:04.4859831Z   
2026-04-18T00:47:04.4864776Z --- FAIL: TestAccProject_withUpdatedRole (75.73s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 13 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS 30 seconds
- 2026-04-24 PASS 11 seconds
- 2026-04-25 PASS 34 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 seconds
- 2026-04-28

### Error 2026-04-28T00:58:58+00:00
```
2026-04-28T00:58:58.2903554Z === RUN   TestAccProject_withUpdatedRole
2026-04-28T00:58:58.2914650Z === CONT  TestAccProject_withUpdatedRole
2026-04-28T00:58:58.2940637Z === NAME  TestAccProject_withUpdatedRole
2026-04-28T00:58:58.2941478Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-04-28T00:58:58.2942224Z         
2026-04-28T00:58:58.2942975Z         Error: error creating project: test-acc-tf-p-7577966133324619139
2026-04-28T00:58:58.2943510Z         
2026-04-28T00:58:58.2943928Z           with mongodbatlas_project.test,
2026-04-28T00:58:58.2944659Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-28T00:58:58.2945343Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-28T00:58:58.2945741Z         
2026-04-28T00:58:58.2946622Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-28T00:58:58.2947429Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-28T00:58:58.2948141Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-28T00:58:58.2948942Z --- FAIL: TestAccProject_withUpdatedRole (67.65s)
```

- 2026-04-29 PASS 15 seconds
- 2026-04-30 PASS 46 seconds
- 2026-05-01 PASS 14 seconds
- 2026-05-02

### Error 2026-05-02T00:58:37+00:00
```
2026-05-02T00:58:37.2183899Z === RUN   TestAccProject_withUpdatedRole
2026-05-02T00:58:37.2194406Z === CONT  TestAccProject_withUpdatedRole
2026-05-02T00:58:37.2242960Z === NAME  TestAccProject_withUpdatedRole
2026-05-02T00:58:37.2243511Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-05-02T00:58:37.2243924Z         
2026-05-02T00:58:37.2244341Z         Error: error creating project: test-acc-tf-p-2001431437549624730
2026-05-02T00:58:37.2244696Z         
2026-05-02T00:58:37.2244989Z           with mongodbatlas_project.test,
2026-05-02T00:58:37.2245599Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-02T00:58:37.2246170Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-02T00:58:37.2246703Z         
2026-05-02T00:58:37.2247177Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-02T00:58:37.2247828Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-02T00:58:37.2248425Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-02T00:58:37.2248831Z --- FAIL: TestAccProject_withUpdatedRole (67.09s)
```

- 2026-05-03: MISSING
- 2026-05-04 PASS 11 seconds
- 2026-05-05

### Error 2026-05-05T00:53:01+00:00
```
2026-05-05T00:53:01.4212506Z === RUN   TestAccProject_withUpdatedRole
2026-05-05T00:53:01.4219618Z === CONT  TestAccProject_withUpdatedRole
2026-05-05T00:53:01.4333066Z === NAME  TestAccProject_withUpdatedRole
2026-05-05T00:53:01.4333599Z     resource_project_test.go:791: Step 1/2 error: Error running apply: exit status 1
2026-05-05T00:53:01.4334017Z         
2026-05-05T00:53:01.4334440Z         Error: error creating project: test-acc-tf-p-1925760531827485283
2026-05-05T00:53:01.4334808Z         
2026-05-05T00:53:01.4335118Z           with mongodbatlas_project.test,
2026-05-05T00:53:01.4335738Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:53:01.4336465Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:53:01.4336784Z         
2026-05-05T00:53:01.4337271Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:53:01.4337946Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:53:01.4338765Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:01.4339197Z --- FAIL: TestAccProject_withUpdatedRole (75.69s)
```

- 2026-05-06 PASS 17 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 13 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 11 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 14 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 10 seconds
- 2026-05-04 PASS 11 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 11 seconds
