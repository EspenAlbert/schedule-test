# autogen_slow/streaminstanceapi/TestAccStreamInstanceAPI_basic Test Details
# Found 26 TestRuns in dev, qa from 2025-10-07 to 2025-10-30 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 03:05](#error-2025-10-12t0305560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68eaf69bbae6807c7549b6dc/streams | qa | flaky_500 | 32.06s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07 PASS 3 seconds
- 2025-10-08 PASS 4 seconds
- 2025-10-09 PASS 4 seconds
- 2025-10-10 PASS 3 seconds
- 2025-10-11 PASS 3 seconds
- 2025-10-12

### Error 2025-10-12T03:05:56+00:00
```
2025-10-12T03:05:56.8426988Z === RUN   TestAccStreamInstanceAPI_basic
2025-10-12T03:05:56.8427939Z     resource_test.go:21: Creating execution project: test-acc-tf-p-4175354398732871566
2025-10-12T03:05:56.8429212Z === CONT  TestAccStreamInstanceAPI_basic
2025-10-12T03:05:56.8446822Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/7372f010-1620-4dc6-9778-e685503427eb/terraform
2025-10-12T03:05:56.8447916Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-10-12T03:05:56.8448508Z         
2025-10-12T03:05:56.8448992Z         Error: Error calling API in Create
2025-10-12T03:05:56.8449447Z         
2025-10-12T03:05:56.8450019Z           with mongodbatlas_stream_instance_api.test,
2025-10-12T03:05:56.8451142Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance_api" "test":
2025-10-12T03:05:56.8452197Z           12: 		resource "mongodbatlas_stream_instance_api" "test" {
2025-10-12T03:05:56.8452869Z         
2025-10-12T03:05:56.8454139Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf69bbae6807c7549b6dc/streams
2025-10-12T03:05:56.8455388Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-12T03:05:56.8456408Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-12T03:05:56.8457092Z         BadRequestDetail: 
2025-10-12T03:05:56.8457600Z --- FAIL: TestAccStreamInstanceAPI_basic (32.57s)
```

- 2025-10-13 PASS 3 seconds
- 2025-10-14 PASS 5 seconds
- 2025-10-15 PASS 4 seconds
- 2025-10-16 PASS 6 seconds
- 2025-10-17 PASS 4 seconds
- 2025-10-18 PASS 4 seconds
- 2025-10-19 PASS 5 seconds
- 2025-10-20
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-10-21 PASS 3 seconds
- 2025-10-22
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-10-23 PASS 5 seconds
- 2025-10-24 PASS 4 seconds
- 2025-10-25 PASS 3 seconds
- 2025-10-26 PASS 4 seconds
- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 5 seconds
- 2025-10-30 PASS 3 seconds