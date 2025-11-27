# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 3.09s
[2025-11-07 00:56](#error-2025-11-07t0056190000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/690d3d0fb092065c921146b2/streams/test-acc-tf-s-7913812519638902798/connections/kafka-conn-plaintext | dev |  | 2.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 12 seconds
- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 11 seconds
- 2025-11-05
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0812268Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-06T00:51:58.0813663Z     resource_stream_connection_test.go:98: Creating execution project: test-acc-tf-p-6453310834697206708
2025-11-06T00:51:58.0815198Z     resource_stream_connection_test.go:98: Creating execution stream instance: test-acc-tf-s-5661631796527300216
2025-11-06T00:51:58.0866196Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-06T00:51:58.1016969Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-06T00:51:58.1017568Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.1017996Z         
2025-11-06T00:51:58.1018292Z         Error: error creating resource
2025-11-06T00:51:58.1018573Z         
2025-11-06T00:51:58.1018919Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.1019580Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.1020192Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.1020681Z         
2025-11-06T00:51:58.1021454Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.1022328Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1022910Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1023308Z         BadRequestDetail: 
2025-11-06T00:51:58.1035377Z   
2025-11-06T00:51:58.1044036Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (3.92s)
```

- 2025-11-07

### Error 2025-11-07T00:56:19+00:00
```
2025-11-07T00:56:19.9284787Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-07T00:56:19.9296554Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-07T00:56:19.9321774Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-07T00:56:19.9322367Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2025-11-07T00:56:19.9322788Z         
2025-11-07T00:56:19.9323067Z         Error: error fetching resource
2025-11-07T00:56:19.9323338Z         
2025-11-07T00:56:19.9323693Z           with data.mongodbatlas_stream_connection.test,
2025-11-07T00:56:19.9324637Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-11-07T00:56:19.9340959Z           12: data "mongodbatlas_stream_connection" "test" {
2025-11-07T00:56:19.9341553Z         
2025-11-07T00:56:19.9342985Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0fb092065c921146b2/streams/test-acc-tf-s-7913812519638902798/connections/kafka-conn-plaintext
2025-11-07T00:56:19.9344239Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-07T00:56:19.9344892Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-11-07T00:56:19.9345526Z         690d3d0fb092065c921146b2 and name test-acc-tf-s-7913812519638902798 not
2025-11-07T00:56:19.9346092Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-11-07T00:56:19.9346626Z         690d3d0fb092065c921146b2 test-acc-tf-s-7913812519638902798],
2025-11-07T00:56:19.9347024Z         BadRequestDetail: 
2025-11-07T00:56:19.9347389Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (2.58s)
```

- 2025-11-08 PASS 10 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 9 seconds
- 2025-11-11 PASS 9 seconds
- 2025-11-12 PASS 10 seconds
- 2025-11-13 PASS 11 seconds
- 2025-11-14 PASS 9 seconds
- 2025-11-15 PASS 8 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 9 seconds
- 2025-11-18 PASS 12 seconds
- 2025-11-19 PASS 10 seconds
- 2025-11-20 PASS 9 seconds
- 2025-11-21 PASS 9 seconds
- 2025-11-22 PASS 12 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 10 seconds
- 2025-11-25 PASS 11 seconds
- 2025-11-26 PASS 8 seconds
- 2025-11-27 PASS 9 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-23 00:52](#error-2025-11-23t0052170000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/692255f803310a7572355d2f/streams/test-acc-tf-s-6402669412037116246/connections/kafka-conn-plaintext | qa | 2.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
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
- 2025-11-13 PASS 8 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 11 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23

### Error 2025-11-23T00:52:17+00:00
```
2025-11-23T00:52:17.4799761Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-23T00:52:17.4814279Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-23T00:52:17.4838483Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-11-23T00:52:17.4839074Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2025-11-23T00:52:17.4839507Z         
2025-11-23T00:52:17.4839787Z         Error: error fetching resource
2025-11-23T00:52:17.4840063Z         
2025-11-23T00:52:17.4840418Z           with data.mongodbatlas_stream_connection.test,
2025-11-23T00:52:17.4841063Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-11-23T00:52:17.4841636Z           12: data "mongodbatlas_stream_connection" "test" {
2025-11-23T00:52:17.4841944Z         
2025-11-23T00:52:17.4842820Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/692255f803310a7572355d2f/streams/test-acc-tf-s-6402669412037116246/connections/kafka-conn-plaintext
2025-11-23T00:52:17.4843741Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-23T00:52:17.4844362Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-11-23T00:52:17.4844966Z         692255f803310a7572355d2f and name test-acc-tf-s-6402669412037116246 not
2025-11-23T00:52:17.4845701Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-11-23T00:52:17.4846215Z         692255f803310a7572355d2f test-acc-tf-s-6402669412037116246],
2025-11-23T00:52:17.4846605Z         BadRequestDetail: 
2025-11-23T00:52:17.4846956Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (2.57s)
```

- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
