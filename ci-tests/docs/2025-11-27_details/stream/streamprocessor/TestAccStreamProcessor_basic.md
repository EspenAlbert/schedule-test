# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar | dev | flaky_500 | 4.03s
[2025-11-18 00:52](#error-2025-11-18t0052240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/691bbda149da6618f234f16a/streams/test-acc-tf-s-3932732504536418090/processor/new-processorlitdr | dev | flaky_500 | 11.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 12 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
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
- 2025-11-09: MISSING
- 2025-11-10 PASS 7 seconds
- 2025-11-11 PASS 11 seconds
- 2025-11-12 PASS 9 seconds
- 2025-11-13 PASS 10 seconds
- 2025-11-14 PASS 7 seconds
- 2025-11-15 PASS 8 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 7 seconds
- 2025-11-18

### Error 2025-11-18T00:52:24+00:00
```
2025-11-18T00:52:24.1388107Z === RUN   TestAccStreamProcessor_basic
2025-11-18T00:52:24.1388642Z     resource_test.go:53: Creating execution project: test-acc-tf-p-7055074982419790328
2025-11-18T00:52:24.1389307Z     resource_test.go:53: Creating execution stream instance: test-acc-tf-s-3932732504536418090
2025-11-18T00:52:24.1450641Z === CONT  TestAccStreamProcessor_basic
2025-11-18T00:52:24.1471480Z === NAME  TestAccStreamProcessor_basic
2025-11-18T00:52:24.1471941Z     resource_test.go:53: Step 3/3 error running import: exit status 1
2025-11-18T00:52:24.1472301Z         
2025-11-18T00:52:24.1472735Z         Error: error fetching resource
2025-11-18T00:52:24.1473011Z         
2025-11-18T00:52:24.1473892Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691bbda149da6618f234f16a/streams/test-acc-tf-s-3932732504536418090/processor/new-processorlitdr
2025-11-18T00:52:24.1474940Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-18T00:52:24.1475543Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-18T00:52:24.1475945Z         BadRequestDetail: 
2025-11-18T00:52:24.1476195Z         
2025-11-18T00:52:24.1476844Z --- FAIL: TestAccStreamProcessor_basic (11.69s)
```

- 2025-11-19 PASS 7 seconds
- 2025-11-20 PASS 11 seconds
- 2025-11-21 PASS 8 seconds
- 2025-11-22 PASS 9 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 9 seconds
- 2025-11-25 PASS 13 seconds
- 2025-11-26 PASS 7 seconds
- 2025-11-27 PASS 8 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 7 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 7 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 11 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 6 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
