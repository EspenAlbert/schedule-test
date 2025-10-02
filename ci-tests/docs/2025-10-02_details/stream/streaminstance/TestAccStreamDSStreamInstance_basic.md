# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d58704811492b53c49/streams | qa | flaky_500 | 32.10s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c43d444485797b214ef/streams | qa | flaky_500 | 33.01s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams | qa | flaky_500 | 33.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds
- 2025-09-05 PASS 5 seconds
- 2025-09-06 PASS 5 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0247580Z === RUN   TestAccStreamDSStreamInstance_basic
2025-09-07T00:50:49.0248188Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-4950088438730096608
2025-09-07T00:50:49.0252674Z === CONT  TestAccStreamDSStreamInstance_basic
2025-09-07T00:50:49.0270193Z === NAME  TestAccStreamDSStreamInstance_basic
2025-09-07T00:50:49.0270743Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-09-07T00:50:49.0271327Z         
2025-09-07T00:50:49.0271605Z         Error: error creating resource
2025-09-07T00:50:49.0271874Z         
2025-09-07T00:50:49.0272198Z           with mongodbatlas_stream_instance.test,
2025-09-07T00:50:49.0272834Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-07T00:50:49.0273421Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-07T00:50:49.0273748Z         
2025-09-07T00:50:49.0274248Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d58704811492b53c49/streams
2025-09-07T00:50:49.0274919Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:50:49.0275502Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:50:49.0276003Z         BadRequestDetail: 
2025-09-07T00:50:49.0281991Z    test_name=TestAccStreamRSStreamInstance_withStreamConfig test_terraform_path=/home/runner/work/_temp/4f895247-4d79-45c5-ba85-d71e6b632802/terraform test_working_directory=/tmp/plugintest3125759981
2025-09-07T00:50:49.0288780Z --- FAIL: TestAccStreamDSStreamInstance_basic (32.99s)
```

- 2025-09-08
  - PASS 6 seconds
  - PASS 19 seconds
  - PASS 4 seconds
- 2025-09-09 PASS 4 seconds
- 2025-09-10 PASS 5 seconds
- 2025-09-11 PASS 5 seconds
- 2025-09-12
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-09-13 PASS 5 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8061121Z === RUN   TestAccStreamDSStreamInstance_basic
2025-09-14T00:45:38.8061726Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-3232790752067209645
2025-09-14T00:45:38.8066058Z === CONT  TestAccStreamDSStreamInstance_basic
2025-09-14T00:45:38.8135635Z === NAME  TestAccStreamDSStreamInstance_basic
2025-09-14T00:45:38.8136313Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:45:38.8136786Z         
2025-09-14T00:45:38.8137111Z         Error: error creating resource
2025-09-14T00:45:38.8137393Z         
2025-09-14T00:45:38.8137717Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8138552Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8139140Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8139559Z         
2025-09-14T00:45:38.8140050Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ef/streams
2025-09-14T00:45:38.8140715Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8141288Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8141792Z         BadRequestDetail: 
2025-09-14T00:45:38.8160355Z --- FAIL: TestAccStreamDSStreamInstance_basic (33.07s)
```

- 2025-09-15
  - PASS 5 seconds
  - PASS 5 seconds
  - FAIL 33 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0269775Z === RUN   TestAccStreamDSStreamInstance_basic
2025-09-15T06:36:28.0270393Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-5515323721810266385
2025-09-15T06:36:28.0275018Z === CONT  TestAccStreamDSStreamInstance_basic
2025-09-15T06:36:28.0357801Z === NAME  TestAccStreamDSStreamInstance_basic
2025-09-15T06:36:28.0358356Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:36:28.0358770Z         
2025-09-15T06:36:28.0359058Z         Error: error creating resource
2025-09-15T06:36:28.0359333Z         
2025-09-15T06:36:28.0359662Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0360324Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0360917Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0361236Z         
2025-09-15T06:36:28.0361744Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams
2025-09-15T06:36:28.0362437Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0363023Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0363414Z         BadRequestDetail: 
2025-09-15T06:36:28.0365151Z --- FAIL: TestAccStreamDSStreamInstance_basic (33.03s)
```

- 2025-09-16 PASS 5 seconds
- 2025-09-17 PASS 5 seconds
- 2025-09-18 PASS 5 seconds
- 2025-09-19 PASS 5 seconds
- 2025-09-20 PASS 5 seconds
- 2025-09-21 PASS 6 seconds
- 2025-09-22 PASS 6 seconds
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 5 seconds
- 2025-09-25 PASS 7 seconds
- 2025-09-26 PASS 4 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-09-30
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 4 seconds