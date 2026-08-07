# autogen_fast/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-14 00:45](#error-2026-07-14t0045270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.03s
[2026-07-16 00:48](#error-2026-07-16t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 2 minutes
- 2026-07-10 PASS 13 seconds
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14

### Error 2026-07-14T00:45:27+00:00
```
2026-07-14T00:45:27.4153477Z === RUN   TestAccCustomDBRoleAPI_basic
2026-07-14T00:45:27.4156288Z === CONT  TestAccCustomDBRoleAPI_basic
2026-07-14T00:45:27.4202457Z    test_working_directory=/tmp/plugintest2442691959
2026-07-14T00:45:27.4203658Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-07-14T00:45:27.4204630Z         
2026-07-14T00:45:27.4205651Z         Error: error creating project: test-acc-tf-p-8562120744813253508
2026-07-14T00:45:27.4206584Z         
2026-07-14T00:45:27.4207625Z           with mongodbatlas_project.test,
2026-07-14T00:45:27.4209059Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:45:27.4210396Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:45:27.4211190Z         
2026-07-14T00:45:27.4212273Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:45:27.4213733Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:45:27.4215104Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:27.4216074Z --- FAIL: TestAccCustomDBRoleAPI_basic (77.31s)
```

- 2026-07-15 PASS 13 seconds
- 2026-07-16

### Error 2026-07-16T00:48:43+00:00
```
2026-07-16T00:48:43.0597570Z === RUN   TestAccCustomDBRoleAPI_basic
2026-07-16T00:48:43.0598590Z === CONT  TestAccCustomDBRoleAPI_basic
2026-07-16T00:48:43.0611748Z   
2026-07-16T00:48:43.0612440Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-07-16T00:48:43.0612993Z         
2026-07-16T00:48:43.0613604Z         Error: error creating project: test-acc-tf-p-8545097677864717286
2026-07-16T00:48:43.0614238Z         
2026-07-16T00:48:43.0614803Z           with mongodbatlas_project.test,
2026-07-16T00:48:43.0615600Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:48:43.0616331Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:48:43.0616827Z         
2026-07-16T00:48:43.0617469Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:48:43.0618292Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:48:43.0619077Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:43.0619679Z --- FAIL: TestAccCustomDBRoleAPI_basic (62.04s)
```

- 2026-07-17 PASS 17 seconds
- 2026-07-18 PASS 38 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2327771Z === RUN   TestAccCustomDBRoleAPI_basic
2026-07-21T00:52:27.2328534Z === CONT  TestAccCustomDBRoleAPI_basic
2026-07-21T00:52:27.2340890Z   
2026-07-21T00:52:27.2341362Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-07-21T00:52:27.2341819Z         
2026-07-21T00:52:27.2342449Z         Error: error creating project: test-acc-tf-p-5119757147580314278
2026-07-21T00:52:27.2342897Z         
2026-07-21T00:52:27.2343279Z           with mongodbatlas_project.test,
2026-07-21T00:52:27.2343996Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:52:27.2344683Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:52:27.2345183Z         
2026-07-21T00:52:27.2345752Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:52:27.2346500Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:52:27.2347178Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2347672Z --- FAIL: TestAccCustomDBRoleAPI_basic (66.62s)
```

- 2026-07-22 PASS 15 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9066966Z === RUN   TestAccCustomDBRoleAPI_basic
2026-07-23T00:48:36.9067552Z === CONT  TestAccCustomDBRoleAPI_basic
2026-07-23T00:48:36.9077162Z   
2026-07-23T00:48:36.9077532Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-07-23T00:48:36.9077882Z         
2026-07-23T00:48:36.9078282Z         Error: error creating project: test-acc-tf-p-209465995352925666
2026-07-23T00:48:36.9078630Z         
2026-07-23T00:48:36.9078932Z           with mongodbatlas_project.test,
2026-07-23T00:48:36.9079474Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:36.9079987Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:36.9080283Z         
2026-07-23T00:48:36.9080721Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:36.9081309Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:36.9081830Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9082221Z --- FAIL: TestAccCustomDBRoleAPI_basic (63.53s)
```

- 2026-07-24 PASS 13 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 20 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 13 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 10 seconds
- 2026-08-04 PASS 13 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 17 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 15 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 19 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 21 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
