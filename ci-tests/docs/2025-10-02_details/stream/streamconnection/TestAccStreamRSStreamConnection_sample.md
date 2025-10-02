# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:53](#error-2025-09-08t0953420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-4086475107342984317/connections | qa | flaky_500 | 38.05s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c43d444485797b214ed/streams | qa | flaky_500 | 30.10s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams | qa | flaky_500 | 31.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 4 seconds
- 2025-09-05 PASS 6 seconds
- 2025-09-06 PASS 5 seconds
- 2025-09-07 PASS 37 seconds
- 2025-09-08
  - PASS 5 seconds
  - FAIL 38 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.3757111Z === RUN   TestAccStreamRSStreamConnection_sample
2025-09-08T09:53:42.3766517Z === CONT  TestAccStreamRSStreamConnection_sample
2025-09-08T09:53:42.3966452Z === NAME  TestAccStreamRSStreamConnection_sample
2025-09-08T09:53:42.3967435Z     resource_stream_connection_test.go:221: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:53:42.3968309Z         
2025-09-08T09:53:42.3968787Z         Error: error creating resource
2025-09-08T09:53:42.3969243Z         
2025-09-08T09:53:42.3969816Z           with mongodbatlas_stream_connection.test,
2025-09-08T09:53:42.3970956Z           on terraform_plugin_test.tf line 34, in resource "mongodbatlas_stream_connection" "test":
2025-09-08T09:53:42.3972005Z           34: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-08T09:53:42.3972531Z         
2025-09-08T09:53:42.3973863Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-4086475107342984317/connections
2025-09-08T09:53:42.3975336Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:53:42.3976346Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.3977003Z         BadRequestDetail: 
2025-09-08T09:53:42.3978471Z --- FAIL: TestAccStreamRSStreamConnection_sample (38.51s)
```

  - PASS 4 seconds
- 2025-09-09 PASS 4 seconds
- 2025-09-10 PASS 5 seconds
- 2025-09-11 PASS 5 seconds
- 2025-09-12
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-09-13 PASS 6 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7896771Z === RUN   TestAccStreamRSStreamConnection_sample
2025-09-14T00:45:38.7901011Z === CONT  TestAccStreamRSStreamConnection_sample
2025-09-14T00:45:38.8052157Z === NAME  TestAccStreamRSStreamConnection_sample
2025-09-14T00:45:38.8052720Z     resource_stream_connection_test.go:221: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8053130Z         
2025-09-14T00:45:38.8053393Z         Error: error creating resource
2025-09-14T00:45:38.8053769Z         
2025-09-14T00:45:38.8054083Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8054707Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8055279Z           24: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8055584Z         
2025-09-14T00:45:38.8056081Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams
2025-09-14T00:45:38.8056751Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8057338Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8057725Z         BadRequestDetail: 
2025-09-14T00:45:38.8058579Z --- FAIL: TestAccStreamRSStreamConnection_sample (30.96s)
```

- 2025-09-15
  - PASS 4 seconds
  - PASS 5 seconds
  - FAIL 31 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0048032Z === RUN   TestAccStreamRSStreamConnection_sample
2025-09-15T06:36:28.0054748Z === CONT  TestAccStreamRSStreamConnection_sample
2025-09-15T06:36:28.0239405Z === NAME  TestAccStreamRSStreamConnection_sample
2025-09-15T06:36:28.0240102Z     resource_stream_connection_test.go:221: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0240544Z         
2025-09-15T06:36:28.0240947Z         Error: error creating resource
2025-09-15T06:36:28.0241224Z         
2025-09-15T06:36:28.0241615Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0242318Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0243036Z           24: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0243482Z         
2025-09-15T06:36:28.0244004Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams
2025-09-15T06:36:28.0244884Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0245713Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0246214Z         BadRequestDetail: 
2025-09-15T06:36:28.0259397Z    test_terraform_path=/home/runner/work/_temp/3cb86fb6-c69c-49a7-873f-7dee73528b05/terraform
2025-09-15T06:36:28.0266741Z --- FAIL: TestAccStreamRSStreamConnection_sample (31.08s)
```

- 2025-09-16 PASS 4 seconds
- 2025-09-17 PASS 5 seconds
- 2025-09-18 PASS 5 seconds
- 2025-09-19 PASS 4 seconds
- 2025-09-20 PASS 4 seconds
- 2025-09-21 PASS 5 seconds
- 2025-09-22 PASS 6 seconds
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 4 seconds
- 2025-09-25 PASS 5 seconds
- 2025-09-26 PASS 4 seconds
- 2025-09-27 PASS 6 seconds
- 2025-09-28 PASS 5 seconds
- 2025-09-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-09-30
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 6 seconds
- 2025-10-01
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 4 seconds