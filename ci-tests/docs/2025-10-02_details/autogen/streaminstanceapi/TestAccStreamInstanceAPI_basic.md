# autogen/streaminstanceapi/TestAccStreamInstanceAPI_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:54](#error-2025-09-14t0054200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cbe1411d835e95b63ee/streams | qa | flaky_500 | 34.08s
[2025-09-15 06:45](#error-2025-09-15t0645400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0d2fe60767b7f9b41a6/streams | qa | flaky_500 | 32.06s
[2025-09-17 01:09](#error-2025-09-17t0109050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68ca00de69d8c04598b6eb68/streams/test-acc-tf-6548805966766389462 | dev | flaky_500 | 5.09s
[2025-09-21 00:58](#error-2025-09-21t0058200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf4758bd1cb41a3e707a0f/streams/test-acc-tf-627913207731995465 | qa | flaky_500 | 34.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds
- 2025-09-05 PASS 5 seconds
- 2025-09-06 PASS 4 seconds
- 2025-09-07 PASS 19 seconds
- 2025-09-08
  - PASS 4 seconds
  - PASS 26 seconds
  - PASS 3 seconds
- 2025-09-09 PASS 3 seconds
- 2025-09-10 PASS 4 seconds
- 2025-09-11 PASS 4 seconds
- 2025-09-12 PASS 4 seconds
- 2025-09-13 PASS 4 seconds
- 2025-09-14

### Error 2025-09-14T00:54:20+00:00
```
2025-09-14T00:54:20.5179612Z === RUN   TestAccStreamInstanceAPI_basic
2025-09-14T00:54:20.5180107Z     resource_test.go:21: Creating execution project: test-acc-tf-p-1257718758923678713
2025-09-14T00:54:20.5180809Z === CONT  TestAccStreamInstanceAPI_basic
2025-09-14T00:54:20.5190811Z    test_working_directory=/tmp/plugintest152528400 test_step_number=1 test_name=TestAccStreamInstanceAPI_basic test_terraform_path=/home/runner/work/_temp/e3fd32b5-07ce-4620-9473-d66cae989cce/terraform
2025-09-14T00:54:20.5191751Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:54:20.5192110Z         
2025-09-14T00:54:20.5192515Z         Error: Error calling API in Create
2025-09-14T00:54:20.5192780Z         
2025-09-14T00:54:20.5193097Z           with mongodbatlas_stream_instance_api.test,
2025-09-14T00:54:20.5193722Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance_api" "test":
2025-09-14T00:54:20.5194617Z           12: 		resource "mongodbatlas_stream_instance_api" "test" {
2025-09-14T00:54:20.5194928Z         
2025-09-14T00:54:20.5195408Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cbe1411d835e95b63ee/streams
2025-09-14T00:54:20.5196053Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:54:20.5196599Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:54:20.5196971Z         BadRequestDetail: 
2025-09-14T00:54:20.5197248Z --- FAIL: TestAccStreamInstanceAPI_basic (34.75s)
```

- 2025-09-15
  - PASS 4 seconds
  - FAIL 32 seconds

### Error 2025-09-15T06:45:40+00:00
```
2025-09-15T06:45:40.0053353Z === RUN   TestAccStreamInstanceAPI_basic
2025-09-15T06:45:40.0054269Z     resource_test.go:21: Creating execution project: test-acc-tf-p-8233645534250490426
2025-09-15T06:45:40.0055533Z === CONT  TestAccStreamInstanceAPI_basic
2025-09-15T06:45:40.0074432Z    test_working_directory=/tmp/plugintest1356503760 test_name=TestAccStreamInstanceAPI_basic
2025-09-15T06:45:40.0075558Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:45:40.0076378Z         
2025-09-15T06:45:40.0076896Z         Error: Error calling API in Create
2025-09-15T06:45:40.0077557Z         
2025-09-15T06:45:40.0078150Z           with mongodbatlas_stream_instance_api.test,
2025-09-15T06:45:40.0079561Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance_api" "test":
2025-09-15T06:45:40.0080894Z           12: 		resource "mongodbatlas_stream_instance_api" "test" {
2025-09-15T06:45:40.0081735Z         
2025-09-15T06:45:40.0082812Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0d2fe60767b7f9b41a6/streams
2025-09-15T06:45:40.0084201Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:45:40.0085519Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:45:40.0086632Z         BadRequestDetail: 
2025-09-15T06:45:40.0098695Z --- FAIL: TestAccStreamInstanceAPI_basic (32.59s)
```

- 2025-09-16 PASS 3 seconds
- 2025-09-17

### Error 2025-09-17T01:09:05+00:00
```
2025-09-17T01:09:05.6736893Z === RUN   TestAccStreamInstanceAPI_basic
2025-09-17T01:09:05.6739973Z     resource_test.go:21: Creating execution project: test-acc-tf-p-8259829617669838923
2025-09-17T01:09:05.6741310Z === CONT  TestAccStreamInstanceAPI_basic
2025-09-17T01:09:05.6761159Z    test_step_number=2
2025-09-17T01:09:05.6762107Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-17T01:09:05.6762903Z         
2025-09-17T01:09:05.6763397Z         Error: Error calling API in Delete
2025-09-17T01:09:05.6763878Z         
2025-09-17T01:09:05.6765124Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ca00de69d8c04598b6eb68/streams/test-acc-tf-6548805966766389462
2025-09-17T01:09:05.6766517Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-09-17T01:09:05.6767767Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-17T01:09:05.6768505Z         BadRequestDetail: 
2025-09-17T01:09:05.6769010Z --- FAIL: TestAccStreamInstanceAPI_basic (5.95s)
```

- 2025-09-18 PASS 3 seconds
- 2025-09-19 PASS 4 seconds
- 2025-09-20 PASS 3 seconds
- 2025-09-21

### Error 2025-09-21T00:58:20+00:00
```
2025-09-21T00:58:20.6488177Z === RUN   TestAccStreamInstanceAPI_basic
2025-09-21T00:58:20.6489117Z     resource_test.go:21: Creating execution project: test-acc-tf-p-3253115567079845693
2025-09-21T00:58:20.6490370Z === CONT  TestAccStreamInstanceAPI_basic
2025-09-21T00:58:20.6507739Z    test_name=TestAccStreamInstanceAPI_basic test_terraform_path=/home/runner/work/_temp/c682f61b-85ce-45dd-b7dd-3f2de9366661/terraform test_working_directory=/tmp/plugintest160958340 test_step_number=2
2025-09-21T00:58:20.6509737Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-21T00:58:20.6510507Z         
2025-09-21T00:58:20.6510978Z         Error: Error calling API in Delete
2025-09-21T00:58:20.6511580Z         
2025-09-21T00:58:20.6512769Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4758bd1cb41a3e707a0f/streams/test-acc-tf-627913207731995465
2025-09-21T00:58:20.6514133Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-09-21T00:58:20.6515178Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:58:20.6515885Z         BadRequestDetail: 
2025-09-21T00:58:20.6516362Z --- FAIL: TestAccStreamInstanceAPI_basic (34.40s)
```

- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 4 seconds
- 2025-09-25 PASS 3 seconds
- 2025-09-26 PASS 5 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29 PASS 3 seconds
- 2025-09-30
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-10-02 PASS 3 seconds