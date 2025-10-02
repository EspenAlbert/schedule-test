# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar | qa | 0.06s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections/sample_stream_solar | qa | 0.05s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections/sample_stream_solar | qa | 0.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a moment
- 2025-09-04 PASS a moment
- 2025-09-05 PASS a second
- 2025-09-06 PASS a moment
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2819195Z === RUN   TestAccStreamProcessor_createErrors
2025-09-07T01:03:05.2821144Z === CONT  TestAccStreamProcessor_createErrors
2025-09-07T01:03:05.2887913Z === NAME  TestAccStreamProcessor_createErrors
2025-09-07T01:03:05.2888568Z     resource_test.go:294: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-09-07T01:03:05.2889057Z         
2025-09-07T01:03:05.2889334Z         Error: error fetching resource
2025-09-07T01:03:05.2889609Z         
2025-09-07T01:03:05.2889983Z           with data.mongodbatlas_stream_connection.sample,
2025-09-07T01:03:05.2890642Z           on terraform_plugin_test.tf line 23, in data "mongodbatlas_stream_connection" "sample":
2025-09-07T01:03:05.2891255Z           23:             data "mongodbatlas_stream_connection" "sample" {
2025-09-07T01:03:05.2891568Z         
2025-09-07T01:03:05.2892433Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar
2025-09-07T01:03:05.2893341Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-07T01:03:05.2893948Z         Detail: Stream connection with name sample_stream_solar for project
2025-09-07T01:03:05.2894544Z         68bcd1d68704811492b53e30 and name test-acc-tf-s-8008636377946794826 not
2025-09-07T01:03:05.2895085Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-09-07T01:03:05.2895592Z         68bcd1d68704811492b53e30 test-acc-tf-s-8008636377946794826],
2025-09-07T01:03:05.2896083Z         BadRequestDetail: 
2025-09-07T01:03:05.2896383Z --- FAIL: TestAccStreamProcessor_createErrors (0.56s)
```

- 2025-09-08
  - PASS a moment
  - PASS 2 seconds
  - PASS a moment
- 2025-09-09 PASS a moment
- 2025-09-10 PASS a moment
- 2025-09-11 PASS a moment
- 2025-09-12
  - PASS a moment
  - PASS a moment
- 2025-09-13 PASS a moment
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8517916Z === RUN   TestAccStreamProcessor_createErrors
2025-09-14T00:45:38.8520690Z === CONT  TestAccStreamProcessor_createErrors
2025-09-14T00:45:38.8554843Z === NAME  TestAccStreamProcessor_createErrors
2025-09-14T00:45:38.8555300Z     resource_test.go:294: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-09-14T00:45:38.8555393Z         
2025-09-14T00:45:38.8555556Z         Error: error fetching resource
2025-09-14T00:45:38.8555649Z         
2025-09-14T00:45:38.8555913Z           with data.mongodbatlas_stream_connection.sample,
2025-09-14T00:45:38.8556342Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-09-14T00:45:38.8556633Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-09-14T00:45:38.8556723Z         
2025-09-14T00:45:38.8557458Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections/sample_stream_solar
2025-09-14T00:45:38.8557777Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8558498Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8558856Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8559136Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8559278Z         BadRequestDetail: 
2025-09-14T00:45:38.8559429Z --- FAIL: TestAccStreamProcessor_createErrors (0.50s)
```

- 2025-09-15
  - PASS a moment
  - PASS a moment
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0730771Z === RUN   TestAccStreamProcessor_createErrors
2025-09-15T06:36:28.0733806Z === CONT  TestAccStreamProcessor_createErrors
2025-09-15T06:36:28.0769647Z === NAME  TestAccStreamProcessor_createErrors
2025-09-15T06:36:28.0770125Z     resource_test.go:294: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-09-15T06:36:28.0770223Z         
2025-09-15T06:36:28.0770397Z         Error: error fetching resource
2025-09-15T06:36:28.0770497Z         
2025-09-15T06:36:28.0770769Z           with data.mongodbatlas_stream_connection.sample,
2025-09-15T06:36:28.0771216Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-09-15T06:36:28.0771522Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-09-15T06:36:28.0771618Z         
2025-09-15T06:36:28.0772389Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections/sample_stream_solar
2025-09-15T06:36:28.0772728Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0773179Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0773525Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0773817Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0774068Z         BadRequestDetail: 
2025-09-15T06:36:28.0774226Z --- FAIL: TestAccStreamProcessor_createErrors (0.51s)
```

- 2025-09-16 PASS a moment
- 2025-09-17 PASS a moment
- 2025-09-18 PASS a moment
- 2025-09-19 PASS a moment
- 2025-09-20 PASS a moment
- 2025-09-21 PASS a moment
- 2025-09-22 PASS a moment
- 2025-09-23 PASS a moment
- 2025-09-24 PASS a moment
- 2025-09-25 PASS a moment
- 2025-09-26 PASS a moment
- 2025-09-27 PASS a moment
- 2025-09-28 PASS a moment
- 2025-09-29
  - PASS a moment
  - PASS a moment
- 2025-09-30
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-10-01
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a second
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-10-02 PASS a moment