# autogen_fast/projectapi/TestAccProjectAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.04s
[2026-07-23 00:48](#error-2026-07-23t0048440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6742020Z === RUN   TestAccProjectAPI_basic
2026-07-09T00:57:29.6742701Z === CONT  TestAccProjectAPI_basic
2026-07-09T00:57:29.6754025Z    test_name=TestAccProjectAPI_basic test_terraform_path=/home/runner/work/_temp/ec46ddad-bb5c-4dc2-859a-2e184b1ced7b/terraform
2026-07-09T00:57:29.6754878Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-09T00:57:29.6755322Z         
2026-07-09T00:57:29.6755680Z         Error: Error calling API in Create
2026-07-09T00:57:29.6756023Z         
2026-07-09T00:57:29.6756406Z           with mongodbatlas_project_api.test,
2026-07-09T00:57:29.6757121Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-07-09T00:57:29.6757790Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-07-09T00:57:29.6758170Z         
2026-07-09T00:57:29.6758977Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:57:29.6759719Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:57:29.6760391Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6760845Z --- FAIL: TestAccProjectAPI_basic (64.37s)
```

- 2026-07-10 PASS 10 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1826922Z === RUN   TestAccProjectAPI_basic
2026-07-11T00:54:31.1827628Z === CONT  TestAccProjectAPI_basic
2026-07-11T00:54:31.1839514Z    test_name=TestAccProjectAPI_basic test_terraform_path=/home/runner/work/_temp/65649fd9-0da6-42e4-be33-4e4062fc5679/terraform test_working_directory=/tmp/plugintest48782562 test_step_number=1
2026-07-11T00:54:31.1840604Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:54:31.1841059Z         
2026-07-11T00:54:31.1841420Z         Error: Error calling API in Create
2026-07-11T00:54:31.1841781Z         
2026-07-11T00:54:31.1842171Z           with mongodbatlas_project_api.test,
2026-07-11T00:54:31.1842897Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-07-11T00:54:31.1843591Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-07-11T00:54:31.1843980Z         
2026-07-11T00:54:31.1844532Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:31.1845276Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:31.1846153Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1846627Z --- FAIL: TestAccProjectAPI_basic (64.59s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 11 seconds
- 2026-07-14 PASS 12 seconds
- 2026-07-15 PASS 11 seconds
- 2026-07-16 PASS 22 seconds
- 2026-07-17 PASS 10 seconds
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.8253934Z === RUN   TestAccProjectAPI_basic
2026-07-18T00:50:10.8254900Z === CONT  TestAccProjectAPI_basic
2026-07-18T00:50:10.8266570Z    test_terraform_path=/home/runner/work/_temp/5b86bd40-0df2-44bc-899e-954c9b4a7970/terraform test_working_directory=/tmp/plugintest4191941931 test_step_number=1 test_name=TestAccProjectAPI_basic
2026-07-18T00:50:10.8267668Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-18T00:50:10.8268177Z         
2026-07-18T00:50:10.8268780Z         Error: Error calling API in Create
2026-07-18T00:50:10.8269247Z         
2026-07-18T00:50:10.8269698Z           with mongodbatlas_project_api.test,
2026-07-18T00:50:10.8270480Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-07-18T00:50:10.8271262Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-07-18T00:50:10.8271761Z         
2026-07-18T00:50:10.8272379Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:50:10.8273192Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:50:10.8273892Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8274378Z --- FAIL: TestAccProjectAPI_basic (65.79s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0261644Z === RUN   TestAccProjectAPI_basic
2026-07-21T00:53:06.0262367Z === CONT  TestAccProjectAPI_basic
2026-07-21T00:53:06.0273562Z    test_terraform_path=/home/runner/work/_temp/43ec9403-dd7c-4fd7-bef5-d603f2bab8dc/terraform test_working_directory=/tmp/plugintest3780448679 test_step_number=1 test_name=TestAccProjectAPI_basic
2026-07-21T00:53:06.0274828Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:53:06.0275451Z         
2026-07-21T00:53:06.0275832Z         Error: Error calling API in Create
2026-07-21T00:53:06.0276196Z         
2026-07-21T00:53:06.0276588Z           with mongodbatlas_project_api.test,
2026-07-21T00:53:06.0277328Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-07-21T00:53:06.0278021Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-07-21T00:53:06.0278405Z         
2026-07-21T00:53:06.0279088Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:06.0279844Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:06.0280523Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0281001Z --- FAIL: TestAccProjectAPI_basic (76.36s)
```

- 2026-07-22 PASS 11 seconds
- 2026-07-23

### Error 2026-07-23T00:48:44+00:00
```
2026-07-23T00:48:44.7217503Z === RUN   TestAccProjectAPI_basic
2026-07-23T00:48:44.7218496Z === CONT  TestAccProjectAPI_basic
2026-07-23T00:48:44.7228272Z    test_step_number=1 test_name=TestAccProjectAPI_basic test_terraform_path=/home/runner/work/_temp/3d89b7fa-80d1-46f3-a554-35fc37294de1/terraform test_working_directory=/tmp/plugintest517648483
2026-07-23T00:48:44.7229141Z     resource_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:48:44.7229516Z         
2026-07-23T00:48:44.7229818Z         Error: Error calling API in Create
2026-07-23T00:48:44.7230104Z         
2026-07-23T00:48:44.7230412Z           with mongodbatlas_project_api.test,
2026-07-23T00:48:44.7230989Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2026-07-23T00:48:44.7231526Z           12: 		resource "mongodbatlas_project_api" "test" {
2026-07-23T00:48:44.7231835Z         
2026-07-23T00:48:44.7232265Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:44.7233398Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:44.7233940Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:44.7234316Z --- FAIL: TestAccProjectAPI_basic (71.27s)
```

- 2026-07-24 PASS 9 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 8 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 10 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 24 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
