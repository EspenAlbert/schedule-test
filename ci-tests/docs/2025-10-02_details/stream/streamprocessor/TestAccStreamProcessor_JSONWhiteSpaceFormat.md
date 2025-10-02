# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar | qa | flaky_500 | 0.05s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections/sample_stream_solar | qa |  | 0.04s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections/sample_stream_solar | qa |  | 0.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 4 seconds
- 2025-09-05 PASS 5 seconds
- 2025-09-06 PASS 4 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2434427Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-07T01:03:05.2820488Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-07T01:03:05.2846875Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-07T01:03:05.2847416Z     resource_test.go:86: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-09-07T01:03:05.2847806Z         
2025-09-07T01:03:05.2848088Z         Error: error fetching resource
2025-09-07T01:03:05.2848366Z         
2025-09-07T01:03:05.2848742Z           with data.mongodbatlas_stream_connection.sample,
2025-09-07T01:03:05.2849399Z           on terraform_plugin_test.tf line 23, in data "mongodbatlas_stream_connection" "sample":
2025-09-07T01:03:05.2850017Z           23:             data "mongodbatlas_stream_connection" "sample" {
2025-09-07T01:03:05.2850345Z         
2025-09-07T01:03:05.2851215Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar
2025-09-07T01:03:05.2852128Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-07T01:03:05.2852743Z         Detail: Stream connection with name sample_stream_solar for project
2025-09-07T01:03:05.2853344Z         68bcd1d68704811492b53e30 and name test-acc-tf-s-8008636377946794826 not
2025-09-07T01:03:05.2853882Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-09-07T01:03:05.2854394Z         68bcd1d68704811492b53e30 test-acc-tf-s-8008636377946794826],
2025-09-07T01:03:05.2854782Z         BadRequestDetail: 
2025-09-07T01:03:05.2863031Z    test_name=TestAccStreamProcessor_basic test_terraform_path=/home/runner/work/_temp/4f895247-4d79-45c5-ba85-d71e6b632802/terraform test_working_directory=/tmp/plugintest3000288188
2025-09-07T01:03:05.2871988Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.49s)
```

- 2025-09-08
  - PASS 5 seconds
  - PASS 22 seconds
  - PASS 4 seconds
- 2025-09-09 PASS 4 seconds
- 2025-09-10 PASS 5 seconds
- 2025-09-11 PASS 5 seconds
- 2025-09-12
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-09-13 PASS 5 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8192312Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-14T00:45:38.8521342Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-14T00:45:38.8524415Z   diagnostic_detail=
2025-09-14T00:45:38.8526029Z   
2025-09-14T00:45:38.8543653Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-14T00:45:38.8543952Z     resource_test.go:86: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-09-14T00:45:38.8544044Z         
2025-09-14T00:45:38.8544208Z         Error: error fetching resource
2025-09-14T00:45:38.8544303Z         
2025-09-14T00:45:38.8544561Z           with data.mongodbatlas_stream_connection.sample,
2025-09-14T00:45:38.8544988Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-09-14T00:45:38.8545277Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-09-14T00:45:38.8545367Z         
2025-09-14T00:45:38.8546104Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections/sample_stream_solar
2025-09-14T00:45:38.8546581Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8546892Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8547213Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8547482Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8547622Z         BadRequestDetail: 
2025-09-14T00:45:38.8547905Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.45s)
```

- 2025-09-15
  - PASS 4 seconds
  - PASS 5 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0397504Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-15T06:36:28.0734156Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-15T06:36:28.0737344Z   diagnostic_detail=
2025-09-15T06:36:28.0739027Z   
2025-09-15T06:36:28.0757843Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-15T06:36:28.0758159Z     resource_test.go:86: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-09-15T06:36:28.0758259Z         
2025-09-15T06:36:28.0758438Z         Error: error fetching resource
2025-09-15T06:36:28.0758532Z         
2025-09-15T06:36:28.0758810Z           with data.mongodbatlas_stream_connection.sample,
2025-09-15T06:36:28.0759263Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-09-15T06:36:28.0759570Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-09-15T06:36:28.0759664Z         
2025-09-15T06:36:28.0760442Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections/sample_stream_solar
2025-09-15T06:36:28.0760777Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0761232Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0761582Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0761865Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0762115Z         BadRequestDetail: 
2025-09-15T06:36:28.0762311Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.44s)
```

- 2025-09-16 PASS 4 seconds
- 2025-09-17 PASS 5 seconds
- 2025-09-18 PASS 5 seconds
- 2025-09-19 PASS 4 seconds
- 2025-09-20 PASS 4 seconds
- 2025-09-21 PASS 4 seconds
- 2025-09-22 PASS 5 seconds
- 2025-09-23 PASS 4 seconds
- 2025-09-24 PASS 4 seconds
- 2025-09-25 PASS 4 seconds
- 2025-09-26 PASS 4 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 4 seconds
- 2025-09-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-09-30
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 4 seconds