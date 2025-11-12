# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 303.00s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.06s
[2025-10-20 00:53](#error-2025-10-20t0053240000) |  | dev | flaky_500 | 5.08s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 1.01s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 10 seconds
- 2025-10-05 PASS 10 seconds
- 2025-10-06 PASS 9 seconds
- 2025-10-07 PASS 6 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10 PASS 9 seconds
- 2025-10-11 PASS 8 seconds
- 2025-10-12 PASS 43 seconds
- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5433144Z === RUN   TestAccStreamStreamConnection_https
2025-10-13T01:00:44.5437994Z === CONT  TestAccStreamStreamConnection_https
2025-10-13T01:00:44.5495734Z === NAME  TestAccStreamStreamConnection_https
2025-10-13T01:00:44.5496365Z     resource_stream_connection_test.go:257: Step 2/4 error: Error running apply: exit status 1
2025-10-13T01:00:44.5496807Z         
2025-10-13T01:00:44.5497131Z         Error: error updating resource
2025-10-13T01:00:44.5497416Z         
2025-10-13T01:00:44.5497816Z           with mongodbatlas_stream_connection.test,
2025-10-13T01:00:44.5499005Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-13T01:00:44.5499723Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-13T01:00:44.5500059Z         
2025-10-13T01:00:44.5500617Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5506317Z    test_name=TestMigStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5522590Z --- FAIL: TestAccStreamStreamConnection_https (303.02s)
```

- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 10 seconds
- 2025-10-17 PASS 10 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1474590Z === RUN   TestAccStreamStreamConnection_https
2025-10-19T00:50:12.1483028Z === CONT  TestAccStreamStreamConnection_https
2025-10-19T00:50:12.1596480Z === NAME  TestAccStreamStreamConnection_https
2025-10-19T00:50:12.1597232Z     resource_stream_connection_test.go:389: Step 1/4 error: Error running apply: exit status 1
2025-10-19T00:50:12.1597655Z         
2025-10-19T00:50:12.1597935Z         Error: error creating resource
2025-10-19T00:50:12.1598207Z         
2025-10-19T00:50:12.1598539Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1599200Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1599803Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1600122Z         
2025-10-19T00:50:12.1600999Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1601840Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1602433Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1603035Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1603606Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1604142Z         BadRequestDetail: 
2025-10-19T00:50:12.1612939Z   
2025-10-19T00:50:12.1633960Z --- FAIL: TestAccStreamStreamConnection_https (1.58s)
```

- 2025-10-20
  - FAIL 5 seconds

### Error 2025-10-20T00:53:24+00:00
```
2025-10-20T00:53:24.1014406Z === RUN   TestAccStreamStreamConnection_https
2025-10-20T00:53:24.1024570Z === CONT  TestAccStreamStreamConnection_https
2025-10-20T00:53:24.1048143Z === NAME  TestAccStreamStreamConnection_https
2025-10-20T00:53:24.1048736Z     resource_stream_connection_test.go:389: Step 2/4 error: Error running apply: exit status 1
2025-10-20T00:53:24.1049170Z         
2025-10-20T00:53:24.1049456Z         Error: error updating resource
2025-10-20T00:53:24.1049726Z         
2025-10-20T00:53:24.1050072Z           with mongodbatlas_stream_connection.test,
2025-10-20T00:53:24.1050736Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-20T00:53:24.1051363Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-20T00:53:24.1051684Z         
2025-10-20T00:53:24.1052768Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f582ad7e56882d517c4a90/streams/test-acc-tf-s-5111663109360059659/connections/ConnectionNameHttps
2025-10-20T00:53:24.1053607Z         PATCH: HTTP 404 Not Found (Error code:
2025-10-20T00:53:24.1054418Z         "STREAM_CONNECTION_NOT_FOUND_FOR_NAME") Detail: Stream connection with name
2025-10-20T00:53:24.1055629Z         ConnectionNameHttps for project 68f582ad7e56882d517c4a90 and name
2025-10-20T00:53:24.1056446Z         test-acc-tf-s-5111663109360059659 not found. Reason: Not Found. Params:
2025-10-20T00:53:24.1056968Z         [ConnectionNameHttps 68f582ad7e56882d517c4a90
2025-10-20T00:53:24.1057438Z         test-acc-tf-s-5111663109360059659], BadRequestDetail: 
2025-10-20T00:53:24.1057825Z --- FAIL: TestAccStreamStreamConnection_https (5.79s)
```

  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27 PASS 7 seconds
- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 11 seconds
- 2025-10-30 PASS 9 seconds
- 2025-10-31 PASS 11 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0858379Z === RUN   TestAccStreamStreamConnection_https
2025-11-06T00:51:58.0866867Z === CONT  TestAccStreamStreamConnection_https
2025-11-06T00:51:58.0905760Z === NAME  TestAccStreamStreamConnection_https
2025-11-06T00:51:58.0906760Z     resource_stream_connection_test.go:394: Step 1/4 error: Error running apply: exit status 1
2025-11-06T00:51:58.0907499Z         
2025-11-06T00:51:58.0907981Z         Error: error creating resource
2025-11-06T00:51:58.0908453Z         
2025-11-06T00:51:58.0909039Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.0910197Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.0911400Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.0911952Z         
2025-11-06T00:51:58.0913330Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.0914904Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.0915980Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.0916684Z         BadRequestDetail: 
2025-11-06T00:51:58.0937814Z   
2025-11-06T00:51:58.1042306Z --- FAIL: TestAccStreamStreamConnection_https (1.14s)
```

- 2025-11-07 PASS 8 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09 PASS 9 seconds
- 2025-11-10 PASS 11 seconds
- 2025-11-11 PASS 7 seconds
- 2025-11-12 PASS 11 seconds