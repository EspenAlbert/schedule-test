# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.10s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-16 00:49](#error-2026-07-16t0049140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 15.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2486880Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-07-09T00:59:33.2487640Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-07-09T00:59:33.2499375Z   
2026-07-09T00:59:33.2499781Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-07-09T00:59:33.2500173Z         
2026-07-09T00:59:33.2500617Z         Error: error creating project: test-acc-tf-p-3196284631442059706
2026-07-09T00:59:33.2501010Z         
2026-07-09T00:59:33.2501331Z           with mongodbatlas_project.test,
2026-07-09T00:59:33.2501978Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-09T00:59:33.2502585Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:59:33.2502908Z         
2026-07-09T00:59:33.2503400Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:59:33.2504086Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:59:33.2504710Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2505175Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (73.96s)
```

- 2026-07-10 PASS 16 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6234200Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-07-11T00:55:51.6234961Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-07-11T00:55:51.6246247Z    test_working_directory=/tmp/plugintest408743206 test_name=TestAccApiKeyProjectAssignmentRS_basic
2026-07-11T00:55:51.6246964Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-07-11T00:55:51.6247361Z         
2026-07-11T00:55:51.6247819Z         Error: error creating project: test-acc-tf-p-4209157217752601182
2026-07-11T00:55:51.6248355Z         
2026-07-11T00:55:51.6248686Z           with mongodbatlas_project.test,
2026-07-11T00:55:51.6249350Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-11T00:55:51.6249961Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:55:51.6250287Z         
2026-07-11T00:55:51.6250781Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:55:51.6251468Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:55:51.6252096Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6252562Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (63.10s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 13 seconds
- 2026-07-14 PASS 19 seconds
- 2026-07-15 PASS 14 seconds
- 2026-07-16

### Error 2026-07-16T00:49:14+00:00
```
2026-07-16T00:49:14.1194835Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-07-16T00:49:14.1195599Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-07-16T00:49:14.1206354Z    test_working_directory=/tmp/plugintest2926902455 test_name=TestAccApiKeyProjectAssignmentRS_basic test_terraform_path=/home/runner/work/_temp/69e64bae-c307-4a19-9e25-5d9971de1977/terraform
2026-07-16T00:49:14.1207357Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-07-16T00:49:14.1207753Z         
2026-07-16T00:49:14.1208200Z         Error: error creating project: test-acc-tf-p-4243848898835450120
2026-07-16T00:49:14.1208587Z         
2026-07-16T00:49:14.1208910Z           with mongodbatlas_project.test,
2026-07-16T00:49:14.1209544Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-16T00:49:14.1210138Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:49:14.1210496Z         
2026-07-16T00:49:14.1210990Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:49:14.1211852Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:49:14.1212501Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:14.1212961Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (63.47s)
```

- 2026-07-17 PASS 12 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4287370Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-07-21T00:53:42.4288052Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-07-21T00:53:42.4295625Z   
2026-07-21T00:53:42.4295869Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-07-21T00:53:42.4295995Z         
2026-07-21T00:53:42.4296261Z         Error: error creating project: test-acc-tf-p-2691232585861574481
2026-07-21T00:53:42.4296409Z         
2026-07-21T00:53:42.4296604Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.4296935Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.4297165Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.4297296Z         
2026-07-21T00:53:42.4297594Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.4297872Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.4298123Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4298392Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (64.86s)
```

- 2026-07-22 PASS 12 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4830522Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-07-23T00:49:05.4831535Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-07-23T00:49:05.4843746Z   
2026-07-23T00:49:05.4844242Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-07-23T00:49:05.4844678Z         
2026-07-23T00:49:05.4845177Z         Error: error creating project: test-acc-tf-p-4497842059821812352
2026-07-23T00:49:05.4845597Z         
2026-07-23T00:49:05.4845972Z           with mongodbatlas_project.test,
2026-07-23T00:49:05.4846628Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-07-23T00:49:05.4847243Z           18: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:49:05.4847628Z         
2026-07-23T00:49:05.4848186Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:05.4848859Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:05.4849579Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:05.4850184Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:05.4850699Z         BadRequestDetail: 
2026-07-23T00:49:05.4851193Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (15.87s)
```

- 2026-07-24 PASS 15 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 25 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 10 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 15 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 15 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
