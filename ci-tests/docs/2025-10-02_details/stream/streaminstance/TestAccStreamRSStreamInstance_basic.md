# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d58704811492b53c49/streams | qa | flaky_500 | 30.10s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c43d444485797b214ef/streams | qa | flaky_500 | 30.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams | qa | flaky_500 | 31.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 seconds
- 2025-09-04 PASS 2 seconds
- 2025-09-05 PASS 3 seconds
- 2025-09-06 PASS 2 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0251242Z === RUN   TestAccStreamRSStreamInstance_basic
2025-09-07T00:50:49.0254442Z === CONT  TestAccStreamRSStreamInstance_basic
2025-09-07T00:50:49.0300417Z === NAME  TestAccStreamRSStreamInstance_basic
2025-09-07T00:50:49.0300962Z     resource_stream_instance_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:50:49.0301367Z         
2025-09-07T00:50:49.0301649Z         Error: error creating resource
2025-09-07T00:50:49.0301920Z         
2025-09-07T00:50:49.0302246Z           with mongodbatlas_stream_instance.test,
2025-09-07T00:50:49.0302872Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-09-07T00:50:49.0303453Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-07T00:50:49.0303756Z         
2025-09-07T00:50:49.0304264Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d58704811492b53c49/streams
2025-09-07T00:50:49.0304943Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:50:49.0305518Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:50:49.0306008Z         BadRequestDetail: 
2025-09-07T00:50:49.0306314Z --- FAIL: TestAccStreamRSStreamInstance_basic (30.96s)
```

- 2025-09-08
  - PASS 2 seconds
  - PASS 17 seconds
  - PASS 2 seconds
- 2025-09-09 PASS 2 seconds
- 2025-09-10 PASS 2 seconds
- 2025-09-11 PASS 2 seconds
- 2025-09-12
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-09-13 PASS 3 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8064643Z === RUN   TestAccStreamRSStreamInstance_basic
2025-09-14T00:45:38.8067793Z === CONT  TestAccStreamRSStreamInstance_basic
2025-09-14T00:45:38.8082215Z    test_name=TestAccStreamDSStreamInstances_withPageConfig test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_working_directory=/tmp/plugintest483394836 test_step_number=1
2025-09-14T00:45:38.8154007Z === NAME  TestAccStreamRSStreamInstance_basic
2025-09-14T00:45:38.8154553Z     resource_stream_instance_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8154960Z         
2025-09-14T00:45:38.8155226Z         Error: error creating resource
2025-09-14T00:45:38.8155494Z         
2025-09-14T00:45:38.8155803Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8156426Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8157000Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8157302Z         
2025-09-14T00:45:38.8157790Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ef/streams
2025-09-14T00:45:38.8158702Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8159272Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8159657Z         BadRequestDetail: 
2025-09-14T00:45:38.8160725Z --- FAIL: TestAccStreamRSStreamInstance_basic (30.93s)
```

- 2025-09-15
  - PASS 2 seconds
  - PASS 3 seconds
  - FAIL 31 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0273543Z === RUN   TestAccStreamRSStreamInstance_basic
2025-09-15T06:36:28.0276730Z === CONT  TestAccStreamRSStreamInstance_basic
2025-09-15T06:36:28.0340498Z === NAME  TestAccStreamRSStreamInstance_basic
2025-09-15T06:36:28.0341043Z     resource_stream_instance_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0341451Z         
2025-09-15T06:36:28.0341730Z         Error: error creating resource
2025-09-15T06:36:28.0342002Z         
2025-09-15T06:36:28.0342330Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0342967Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0343554Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0343866Z         
2025-09-15T06:36:28.0344408Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams
2025-09-15T06:36:28.0345095Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0345935Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0346347Z         BadRequestDetail: 
2025-09-15T06:36:28.0357000Z    test_working_directory=/tmp/plugintest3017735886 test_name=TestAccStreamDSStreamInstance_basic test_terraform_path=/home/runner/work/_temp/3cb86fb6-c69c-49a7-873f-7dee73528b05/terraform
2025-09-15T06:36:28.0364587Z --- FAIL: TestAccStreamRSStreamInstance_basic (31.07s)
```

- 2025-09-16 PASS 2 seconds
- 2025-09-17 PASS 3 seconds
- 2025-09-18 PASS 3 seconds
- 2025-09-19 PASS 2 seconds
- 2025-09-20 PASS 2 seconds
- 2025-09-21 PASS 2 seconds
- 2025-09-22 PASS 3 seconds
- 2025-09-23 PASS 2 seconds
- 2025-09-24 PASS 2 seconds
- 2025-09-25 PASS 2 seconds
- 2025-09-26 PASS 2 seconds
- 2025-09-27 PASS 3 seconds
- 2025-09-28 PASS 3 seconds
- 2025-09-29
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-30
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-02 PASS 2 seconds