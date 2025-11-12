# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/sample_stream_solar | dev |  | 0.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar | qa |  | 0.05s
[2025-10-26 00:50](#error-2025-10-26t0050160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/processors | qa | flaky_500 | 4.08s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar | dev | flaky_500 | 4.03s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 12 seconds
- 2025-10-05 PASS 12 seconds
- 2025-10-06 PASS 9 seconds
- 2025-10-07 PASS 6 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10 PASS 9 seconds
- 2025-10-11 PASS 8 seconds
- 2025-10-12 PASS 10 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2968977Z === RUN   TestAccStreamProcessor_basic
2025-10-13T01:24:12.3209548Z === CONT  TestAccStreamProcessor_basic
2025-10-13T01:24:12.3270751Z === NAME  TestAccStreamProcessor_basic
2025-10-13T01:24:12.3271357Z     resource_test.go:43: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-10-13T01:24:12.3271793Z         
2025-10-13T01:24:12.3272147Z         Error: error fetching resource
2025-10-13T01:24:12.3272568Z         
2025-10-13T01:24:12.3273075Z           with data.mongodbatlas_stream_connection.sample,
2025-10-13T01:24:12.3273889Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-10-13T01:24:12.3274632Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-10-13T01:24:12.3274991Z         
2025-10-13T01:24:12.3276055Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/sample_stream_solar
2025-10-13T01:24:12.3277097Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-13T01:24:12.3277798Z         Detail: Stream connection with name sample_stream_solar for project
2025-10-13T01:24:12.3278658Z         68ec47f2b8d3122c296501b7 and name test-acc-tf-s-6101778557580258383 not
2025-10-13T01:24:12.3279308Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-10-13T01:24:12.3279941Z         68ec47f2b8d3122c296501b7 test-acc-tf-s-6101778557580258383],
2025-10-13T01:24:12.3280391Z         BadRequestDetail: 
2025-10-13T01:24:12.3287362Z --- FAIL: TestAccStreamProcessor_basic (0.44s)
```

- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 8 seconds
- 2025-10-17 PASS 5 seconds
- 2025-10-18 PASS 9 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1812703Z === RUN   TestAccStreamProcessor_basic
2025-10-19T00:50:12.2127119Z === CONT  TestAccStreamProcessor_basic
2025-10-19T00:50:12.2141915Z === NAME  TestAccStreamProcessor_basic
2025-10-19T00:50:12.2142361Z     resource_test.go:43: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-10-19T00:50:12.2142460Z         
2025-10-19T00:50:12.2142633Z         Error: error fetching resource
2025-10-19T00:50:12.2142725Z         
2025-10-19T00:50:12.2143107Z           with data.mongodbatlas_stream_connection.sample,
2025-10-19T00:50:12.2143553Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-10-19T00:50:12.2143975Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-10-19T00:50:12.2144070Z         
2025-10-19T00:50:12.2144961Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar
2025-10-19T00:50:12.2145301Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2145741Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2146091Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2146501Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2146802Z         BadRequestDetail: 
2025-10-19T00:50:12.2151714Z   
2025-10-19T00:50:12.2156869Z --- FAIL: TestAccStreamProcessor_basic (0.50s)
```

- 2025-10-20
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 9 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 12 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26

### Error 2025-10-26T00:50:16+00:00
```
2025-10-26T00:50:16.3475500Z === RUN   TestAccStreamProcessor_basic
2025-10-26T00:50:16.3537561Z === CONT  TestAccStreamProcessor_basic
2025-10-26T00:50:16.3573459Z === NAME  TestAccStreamProcessor_basic
2025-10-26T00:50:16.3573935Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2025-10-26T00:50:16.3574313Z         
2025-10-26T00:50:16.3574596Z         Error: error fetching results
2025-10-26T00:50:16.3574868Z         
2025-10-26T00:50:16.3575239Z           with data.mongodbatlas_stream_processors.test,
2025-10-26T00:50:16.3575919Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_stream_processors" "test":
2025-10-26T00:50:16.3576534Z           37: 	data "mongodbatlas_stream_processors" "test" {
2025-10-26T00:50:16.3576855Z         
2025-10-26T00:50:16.3577658Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/processors
2025-10-26T00:50:16.3578547Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-26T00:50:16.3579151Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-26T00:50:16.3579560Z         BadRequestDetail: 
2025-10-26T00:50:16.3599465Z --- FAIL: TestAccStreamProcessor_basic (4.83s)
```

- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 9 seconds
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 12 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 9 seconds
- 2025-11-05
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1233008Z === RUN   TestAccStreamProcessor_basic
2025-11-06T00:51:58.1233534Z     resource_test.go:53: Creating execution project: test-acc-tf-p-3017931523955829157
2025-11-06T00:51:58.1234185Z     resource_test.go:53: Creating execution stream instance: test-acc-tf-s-5095699402994875159
2025-11-06T00:51:58.1557056Z === CONT  TestAccStreamProcessor_basic
2025-11-06T00:51:58.1601500Z === NAME  TestAccStreamProcessor_basic
2025-11-06T00:51:58.1602018Z     resource_test.go:53: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-11-06T00:51:58.1602535Z         
2025-11-06T00:51:58.1602820Z         Error: error fetching resource
2025-11-06T00:51:58.1603091Z         
2025-11-06T00:51:58.1603471Z           with data.mongodbatlas_stream_connection.sample,
2025-11-06T00:51:58.1604140Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-11-06T00:51:58.1604758Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-11-06T00:51:58.1605075Z         
2025-11-06T00:51:58.1605967Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar
2025-11-06T00:51:58.1606895Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-06T00:51:58.1607507Z         Detail: Stream connection with name sample_stream_solar for project
2025-11-06T00:51:58.1608133Z         690beb6db3b40e65d4dd6ef5 and name test-acc-tf-s-5095699402994875159 not
2025-11-06T00:51:58.1608693Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-11-06T00:51:58.1609216Z         690beb6db3b40e65d4dd6ef5 test-acc-tf-s-5095699402994875159],
2025-11-06T00:51:58.1609618Z         BadRequestDetail: 
2025-11-06T00:51:58.1610368Z --- FAIL: TestAccStreamProcessor_basic (4.32s)
```

- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 11 seconds
- 2025-11-09 PASS 7 seconds
- 2025-11-10 PASS 7 seconds
- 2025-11-11 PASS 11 seconds
- 2025-11-12 PASS 9 seconds