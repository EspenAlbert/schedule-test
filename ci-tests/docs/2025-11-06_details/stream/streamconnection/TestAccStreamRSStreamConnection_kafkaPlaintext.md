# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 02:46](#error-2025-10-12t0246540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68eaf645bae6807c7549827a/streams/test-acc-tf-s-12914442530019558/connections | qa | flaky_500 | 6.02s
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 304.10s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.05s
[2025-10-20 10:49](#error-2025-10-20t1049140000) | CheckFailure for stream_connection.test at Step: 2 Checks: 1,2,5 | dev |  | 7.06s
[2025-10-23 01:09](#error-2025-10-23t0109080000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f976a3e0ed31606cbb970f/streams/test-acc-tf-s-8845169137580307289/connections/kafka-conn-plaintext | dev | flaky_500 | 4.02s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 3.09s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10 PASS 8 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12

### Error 2025-10-12T02:46:54+00:00
```
2025-10-12T02:46:54.3426434Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-12T02:46:54.3467099Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-12T02:46:54.3481195Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-12T02:46:54.3481789Z     resource_stream_connection_test.go:69: Step 1/3 error: Error running apply: exit status 1
2025-10-12T02:46:54.3482212Z         
2025-10-12T02:46:54.3482508Z         Error: error creating resource
2025-10-12T02:46:54.3482785Z         
2025-10-12T02:46:54.3483133Z           with mongodbatlas_stream_connection.test,
2025-10-12T02:46:54.3483792Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-10-12T02:46:54.3484489Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-12T02:46:54.3484814Z         
2025-10-12T02:46:54.3485576Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf645bae6807c7549827a/streams/test-acc-tf-s-12914442530019558/connections
2025-10-12T02:46:54.3486421Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-12T02:46:54.3487020Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-12T02:46:54.3487425Z         BadRequestDetail: 
2025-10-12T02:46:54.3487776Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (6.23s)
```

- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5418429Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5436863Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5530450Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-13T01:00:44.5531284Z     resource_stream_connection_test.go:69: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:00:44.5531810Z         
2025-10-13T01:00:44.5532125Z         Error: error deleting resource
2025-10-13T01:00:44.5532418Z         
2025-10-13T01:00:44.5532967Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5533486Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (304.98s)
```

- 2025-10-14 PASS 10 seconds
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 PASS 10 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1445576Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-19T00:50:12.1481962Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-19T00:50:12.1569787Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-19T00:50:12.1570376Z     resource_stream_connection_test.go:94: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1570794Z         
2025-10-19T00:50:12.1571231Z         Error: error creating resource
2025-10-19T00:50:12.1571512Z         
2025-10-19T00:50:12.1571853Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1572507Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1573119Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1573437Z         
2025-10-19T00:50:12.1574198Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1575028Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1575617Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1576354Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1577043Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1577433Z         BadRequestDetail: 
2025-10-19T00:50:12.1596239Z   
2025-10-19T00:50:12.1632717Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1.54s)
```

- 2025-10-20
  - PASS 9 seconds
  - FAIL 7 seconds

### Error 2025-10-20T10:49:14+00:00
```
2025-10-20T10:49:14.1990030Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-20T10:49:14.1991285Z     resource_stream_connection_test.go:93: Creating execution project: test-acc-tf-p-1707422184773807409
2025-10-20T10:49:14.1992748Z     resource_stream_connection_test.go:93: Creating execution stream instance: test-acc-tf-s-2676497988784018712
2025-10-20T10:49:14.2013620Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-20T10:49:14.2041181Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-20T10:49:14.2043510Z     resource_stream_connection_test.go:94: Step 2/3 error: Check failed: Check 2/3 error: Check 1/2 error: Check 5/10 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-10-20T10:49:14.2046904Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (7.59s)
```

- 2025-10-21 PASS 8 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-10-23

### Error 2025-10-23T01:09:08+00:00
```
2025-10-23T01:09:08.6670960Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-23T01:09:08.6672227Z     resource_stream_connection_test.go:93: Creating execution project: test-acc-tf-p-7169248382245392089
2025-10-23T01:09:08.6673628Z     resource_stream_connection_test.go:93: Creating execution stream instance: test-acc-tf-s-8845169137580307289
2025-10-23T01:09:08.6691166Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-23T01:09:08.6737155Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-10-23T01:09:08.6738376Z     resource_stream_connection_test.go:94: Step 1/3 error: Error running apply: exit status 1
2025-10-23T01:09:08.6739083Z         
2025-10-23T01:09:08.6739565Z         Error: error fetching resource
2025-10-23T01:09:08.6740021Z         
2025-10-23T01:09:08.6740653Z           with data.mongodbatlas_stream_connection.test,
2025-10-23T01:09:08.6741952Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-10-23T01:09:08.6742948Z           12: data "mongodbatlas_stream_connection" "test" {
2025-10-23T01:09:08.6743467Z         
2025-10-23T01:09:08.6745038Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f976a3e0ed31606cbb970f/streams/test-acc-tf-s-8845169137580307289/connections/kafka-conn-plaintext
2025-10-23T01:09:08.6746837Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-23T01:09:08.6748044Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-10-23T01:09:08.6749132Z         68f976a3e0ed31606cbb970f and name test-acc-tf-s-8845169137580307289 not
2025-10-23T01:09:08.6750085Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-10-23T01:09:08.6751040Z         68f976a3e0ed31606cbb970f test-acc-tf-s-8845169137580307289],
2025-10-23T01:09:08.6751706Z         BadRequestDetail: 
2025-10-23T01:09:08.6752320Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (4.18s)
```

- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 9 seconds
- 2025-10-26 PASS 10 seconds
- 2025-10-27 PASS 7 seconds
- 2025-10-28 PASS 9 seconds
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 12 seconds
- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
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
