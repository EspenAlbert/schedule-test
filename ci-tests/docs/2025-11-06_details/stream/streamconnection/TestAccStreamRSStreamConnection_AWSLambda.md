# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 25.05s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 24.01s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 44 seconds
- 2025-10-09 PASS 43 seconds
- 2025-10-10 PASS 46 seconds
- 2025-10-11 PASS 42 seconds
- 2025-10-12 PASS 41 seconds
- 2025-10-13 PASS 38 seconds
- 2025-10-14 PASS 44 seconds
- 2025-10-15 PASS 42 seconds
- 2025-10-16 PASS 44 seconds
- 2025-10-17 PASS 42 seconds
- 2025-10-18 PASS 40 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1476553Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-10-19T00:50:12.1482680Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-10-19T00:50:12.1669352Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-10-19T00:50:12.1669944Z     resource_stream_connection_test.go:476: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1670383Z         
2025-10-19T00:50:12.1670665Z         Error: error creating resource
2025-10-19T00:50:12.1670946Z         
2025-10-19T00:50:12.1671280Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1672112Z           on terraform_plugin_test.tf line 53, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1672872Z           53: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1673209Z         
2025-10-19T00:50:12.1674128Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1675177Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1675886Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1676766Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1677521Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1678032Z         BadRequestDetail: 
2025-10-19T00:50:12.1678382Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (25.47s)
```

- 2025-10-20
  - PASS 44 seconds
  - PASS 38 seconds
- 2025-10-21 PASS 40 seconds
- 2025-10-22
  - PASS 43 seconds
  - PASS 44 seconds
- 2025-10-23 PASS 43 seconds
- 2025-10-24 PASS 44 seconds
- 2025-10-25 PASS 40 seconds
- 2025-10-26 PASS 42 seconds
- 2025-10-27 PASS 41 seconds
- 2025-10-28 PASS 40 seconds
- 2025-10-29 PASS 46 seconds
- 2025-10-30 PASS 44 seconds
- 2025-10-31 PASS 46 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 41 seconds
- 2025-11-03 PASS 43 seconds
- 2025-11-04 PASS 41 seconds
- 2025-11-05
  - PASS 46 seconds
  - PASS 47 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0861989Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-11-06T00:51:58.0870837Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-11-06T00:51:58.1097027Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-11-06T00:51:58.1097623Z     resource_stream_connection_test.go:481: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:51:58.1098044Z         
2025-11-06T00:51:58.1098338Z         Error: error creating resource
2025-11-06T00:51:58.1098608Z         
2025-11-06T00:51:58.1098949Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.1099786Z           on terraform_plugin_test.tf line 53, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.1100570Z           53: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.1100900Z         
2025-11-06T00:51:58.1101676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.1102545Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1103131Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1103531Z         BadRequestDetail: 
2025-11-06T00:51:58.1103996Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (24.11s)
```
