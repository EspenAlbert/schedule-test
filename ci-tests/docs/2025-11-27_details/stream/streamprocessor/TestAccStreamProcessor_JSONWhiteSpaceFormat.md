# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar | dev | 0.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 4 seconds
- 2025-10-31 PASS 4 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 3 seconds
- 2025-11-04 PASS 3 seconds
- 2025-11-05
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1234995Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-11-06T00:51:58.1558415Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-11-06T00:51:58.1560163Z   diagnostic_detail=
2025-11-06T00:51:58.1562805Z    tf_proto_version=6.10 tf_resource_type=mongodbatlas_stream_processor diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")"
2025-11-06T00:51:58.1577824Z    test_working_directory=/tmp/plugintest1949435983 test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-11-06T00:51:58.1578671Z     resource_test.go:124: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-11-06T00:51:58.1579084Z         
2025-11-06T00:51:58.1579375Z         Error: error fetching resource
2025-11-06T00:51:58.1579656Z         
2025-11-06T00:51:58.1580028Z           with data.mongodbatlas_stream_connection.sample,
2025-11-06T00:51:58.1580891Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-11-06T00:51:58.1581508Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-11-06T00:51:58.1581837Z         
2025-11-06T00:51:58.1582725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar
2025-11-06T00:51:58.1583651Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-06T00:51:58.1584266Z         Detail: Stream connection with name sample_stream_solar for project
2025-11-06T00:51:58.1584902Z         690beb6db3b40e65d4dd6ef5 and name test-acc-tf-s-5095699402994875159 not
2025-11-06T00:51:58.1585461Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-11-06T00:51:58.1585982Z         690beb6db3b40e65d4dd6ef5 test-acc-tf-s-5095699402994875159],
2025-11-06T00:51:58.1586392Z         BadRequestDetail: 
2025-11-06T00:51:58.1601028Z    test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform
2025-11-06T00:51:58.1609966Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.43s)
```

- 2025-11-07 PASS 3 seconds
- 2025-11-08 PASS 3 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 4 seconds
- 2025-11-11 PASS 3 seconds
- 2025-11-12 PASS 5 seconds
- 2025-11-13 PASS 3 seconds
- 2025-11-14 PASS 4 seconds
- 2025-11-15 PASS 3 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 4 seconds
- 2025-11-18 PASS 4 seconds
- 2025-11-19 PASS 3 seconds
- 2025-11-20 PASS 4 seconds
- 2025-11-21 PASS 4 seconds
- 2025-11-22 PASS 3 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 4 seconds
- 2025-11-25 PASS 4 seconds
- 2025-11-26 PASS 4 seconds
- 2025-11-27 PASS 3 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 3 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 3 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 5 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 3 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
