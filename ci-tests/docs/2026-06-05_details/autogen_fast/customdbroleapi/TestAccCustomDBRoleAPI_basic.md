# autogen_fast/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.05s
[2026-05-23 01:05](#error-2026-05-23t0105260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 17 seconds
- 2026-05-08 PASS 13 seconds
- 2026-05-09 PASS a minute
- 2026-05-10: MISSING
- 2026-05-11 PASS 14 seconds
- 2026-05-12 PASS 24 seconds
- 2026-05-13 PASS 14 seconds
- 2026-05-14 PASS 16 seconds
- 2026-05-15 PASS 14 seconds
- 2026-05-16 PASS 55 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4382080Z === RUN   TestAccCustomDBRoleAPI_basic
2026-05-19T01:08:18.4382809Z === CONT  TestAccCustomDBRoleAPI_basic
2026-05-19T01:08:18.4394774Z    test_working_directory=/tmp/plugintest75608599 test_terraform_path=/home/runner/work/_temp/5fac0b4b-663a-4ceb-a6f1-7f16fd3ec1b8/terraform
2026-05-19T01:08:18.4395653Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-05-19T01:08:18.4396089Z         
2026-05-19T01:08:18.4396569Z         Error: error creating project: test-acc-tf-p-2530006282768879908
2026-05-19T01:08:18.4396989Z         
2026-05-19T01:08:18.4397346Z           with mongodbatlas_project.test,
2026-05-19T01:08:18.4398023Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:18.4398658Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:18.4399026Z         
2026-05-19T01:08:18.4399554Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:18.4400279Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:18.4400941Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4401409Z --- FAIL: TestAccCustomDBRoleAPI_basic (93.52s)
```

- 2026-05-20 PASS 13 seconds
- 2026-05-21 PASS 50 seconds
- 2026-05-22 PASS 17 seconds
- 2026-05-23

### Error 2026-05-23T01:05:26+00:00
```
2026-05-23T01:05:26.5090706Z === RUN   TestAccCustomDBRoleAPI_basic
2026-05-23T01:05:26.5091972Z === CONT  TestAccCustomDBRoleAPI_basic
2026-05-23T01:05:26.5114673Z   
2026-05-23T01:05:26.5115427Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-05-23T01:05:26.5116200Z         
2026-05-23T01:05:26.5117068Z         Error: error creating project: test-acc-tf-p-6160684142685266295
2026-05-23T01:05:26.5117874Z         
2026-05-23T01:05:26.5118465Z           with mongodbatlas_project.test,
2026-05-23T01:05:26.5119593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:05:26.5120514Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:05:26.5120878Z         
2026-05-23T01:05:26.5121507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:05:26.5122300Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:05:26.5123515Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.5124154Z --- FAIL: TestAccCustomDBRoleAPI_basic (67.19s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26 PASS 53 seconds
- 2026-05-27 PASS 16 seconds
- 2026-05-28 PASS a minute
- 2026-05-29 PASS 12 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4129117Z === RUN   TestAccCustomDBRoleAPI_basic
2026-05-30T01:10:40.4129881Z === CONT  TestAccCustomDBRoleAPI_basic
2026-05-30T01:10:40.4142092Z   
2026-05-30T01:10:40.4142574Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-05-30T01:10:40.4143023Z         
2026-05-30T01:10:40.4143637Z         Error: error creating project: test-acc-tf-p-7783498004241004599
2026-05-30T01:10:40.4144082Z         
2026-05-30T01:10:40.4144477Z           with mongodbatlas_project.test,
2026-05-30T01:10:40.4145185Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:10:40.4145854Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:10:40.4146240Z         
2026-05-30T01:10:40.4146800Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:10:40.4147543Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:10:40.4148367Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4148868Z --- FAIL: TestAccCustomDBRoleAPI_basic (66.07s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 14 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0395098Z === RUN   TestAccCustomDBRoleAPI_basic
2026-06-02T01:15:50.0395884Z === CONT  TestAccCustomDBRoleAPI_basic
2026-06-02T01:15:50.0408338Z   
2026-06-02T01:15:50.0408813Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:15:50.0409276Z         
2026-06-02T01:15:50.0409938Z         Error: error creating project: test-acc-tf-p-5694516634021024763
2026-06-02T01:15:50.0410508Z         
2026-06-02T01:15:50.0410901Z           with mongodbatlas_project.test,
2026-06-02T01:15:50.0411603Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:15:50.0412268Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:15:50.0412659Z         
2026-06-02T01:15:50.0413218Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:15:50.0414094Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:15:50.0414794Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0415294Z --- FAIL: TestAccCustomDBRoleAPI_basic (69.49s)
```

- 2026-06-03 PASS 17 seconds
- 2026-06-04 PASS 16 seconds
- 2026-06-05 PASS 17 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 11 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 14 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
