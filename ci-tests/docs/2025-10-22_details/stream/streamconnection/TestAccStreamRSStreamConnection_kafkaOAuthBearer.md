# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 13 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 8) FAIL(x 5)
Success rate: 61.54%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-23 00:46](#error-2025-09-23t0046570000) | VALIDATION_ERROR /api/atlas/v2/groups/68d1e95ea895df0d27e694dc/streams/test-acc-tf-s-2429861209096068710/connections | dev | 1.02s
[2025-09-24 00:48](#error-2025-09-24t0048490000) | VALIDATION_ERROR /api/atlas/v2/groups/68d33ad5f1337d3c4efe8a30/streams/test-acc-tf-s-4994766804749352644/connections | dev | 1.00s
[2025-09-25 01:39](#error-2025-09-25t0139080000) | VALIDATION_ERROR /api/atlas/v2/groups/68d48c54ac285026f1fd092c/streams/test-acc-tf-s-7249668804199471548/connections | dev | 1.02s
[2025-09-26 00:48](#error-2025-09-26t0048160000) | VALIDATION_ERROR /api/atlas/v2/groups/68d5ddddf8df4c6a73fc333b/streams/test-acc-tf-s-8113659077103869597/connections | dev | 1.02s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa | 1.05s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23

### Error 2025-09-23T00:46:57+00:00
```
2025-09-23T00:46:57.4247827Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-23T00:46:57.4282443Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-23T00:46:57.4296897Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-23T00:46:57.4297811Z     resource_stream_connection_test.go:147: Step 1/3 error: Error running apply: exit status 1
2025-09-23T00:46:57.4298606Z         
2025-09-23T00:46:57.4299076Z         Error: error creating resource
2025-09-23T00:46:57.4299356Z         
2025-09-23T00:46:57.4299707Z           with mongodbatlas_stream_connection.test,
2025-09-23T00:46:57.4300369Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-23T00:46:57.4300975Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-23T00:46:57.4301290Z         
2025-09-23T00:46:57.4302061Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d1e95ea895df0d27e694dc/streams/test-acc-tf-s-2429861209096068710/connections
2025-09-23T00:46:57.4302888Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-23T00:46:57.4303675Z         request content produced the validation error: Invalid method. Reason: Bad
2025-09-23T00:46:57.4304235Z         Request. Params: [Invalid method], BadRequestDetail: 
2025-09-23T00:46:57.4304663Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.16s)
```

- 2025-09-24

### Error 2025-09-24T00:48:49+00:00
```
2025-09-24T00:48:49.7218429Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-24T00:48:49.7272753Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-24T00:48:49.7299134Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-24T00:48:49.7300290Z     resource_stream_connection_test.go:147: Step 1/3 error: Error running apply: exit status 1
2025-09-24T00:48:49.7301051Z         
2025-09-24T00:48:49.7301534Z         Error: error creating resource
2025-09-24T00:48:49.7302011Z         
2025-09-24T00:48:49.7302618Z           with mongodbatlas_stream_connection.test,
2025-09-24T00:48:49.7303808Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-24T00:48:49.7304884Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-24T00:48:49.7305429Z         
2025-09-24T00:48:49.7306838Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d33ad5f1337d3c4efe8a30/streams/test-acc-tf-s-4994766804749352644/connections
2025-09-24T00:48:49.7308641Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-24T00:48:49.7309735Z         request content produced the validation error: Invalid method. Reason: Bad
2025-09-24T00:48:49.7310689Z         Request. Params: [Invalid method], BadRequestDetail: 
2025-09-24T00:48:49.7311407Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.05s)
```

- 2025-09-25

### Error 2025-09-25T01:39:08+00:00
```
2025-09-25T01:39:08.8251966Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-25T01:39:08.8310134Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-25T01:39:08.8333278Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-25T01:39:08.8334530Z     resource_stream_connection_test.go:147: Step 1/3 error: Error running apply: exit status 1
2025-09-25T01:39:08.8335284Z         
2025-09-25T01:39:08.8335769Z         Error: error creating resource
2025-09-25T01:39:08.8336243Z         
2025-09-25T01:39:08.8336825Z           with mongodbatlas_stream_connection.test,
2025-09-25T01:39:08.8338010Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-25T01:39:08.8339110Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-25T01:39:08.8339665Z         
2025-09-25T01:39:08.8341066Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c54ac285026f1fd092c/streams/test-acc-tf-s-7249668804199471548/connections
2025-09-25T01:39:08.8342767Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-25T01:39:08.8344133Z         request content produced the validation error: Invalid method. Reason: Bad
2025-09-25T01:39:08.8345148Z         Request. Params: [Invalid method], BadRequestDetail: 
2025-09-25T01:39:08.8346124Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.24s)
```

- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2179625Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-26T00:48:16.2217203Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-26T00:48:16.2232573Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-09-26T00:48:16.2233288Z     resource_stream_connection_test.go:147: Step 1/3 error: Error running apply: exit status 1
2025-09-26T00:48:16.2233763Z         
2025-09-26T00:48:16.2234053Z         Error: error creating resource
2025-09-26T00:48:16.2234316Z         
2025-09-26T00:48:16.2234690Z           with mongodbatlas_stream_connection.test,
2025-09-26T00:48:16.2235428Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-09-26T00:48:16.2236079Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-26T00:48:16.2236393Z         
2025-09-26T00:48:16.2237256Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5ddddf8df4c6a73fc333b/streams/test-acc-tf-s-8113659077103869597/connections
2025-09-26T00:48:16.2238392Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-26T00:48:16.2239078Z         request content produced the validation error: Invalid method. Reason: Bad
2025-09-26T00:48:16.2239670Z         Request. Params: [Invalid method], BadRequestDetail: 
2025-09-26T00:48:16.2240220Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.18s)
```

- 2025-09-27: MISSING
- 2025-09-28: MISSING
- 2025-09-29: MISSING
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07: MISSING
- 2025-10-08: MISSING
- 2025-10-09: MISSING
- 2025-10-10: MISSING
- 2025-10-11: MISSING
- 2025-10-12: MISSING
- 2025-10-13: MISSING
- 2025-10-14: MISSING
- 2025-10-15: MISSING
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 9 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1446470Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-19T00:50:12.1481155Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-19T00:50:12.1504758Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-10-19T00:50:12.1505363Z     resource_stream_connection_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1505787Z         
2025-10-19T00:50:12.1506065Z         Error: error creating resource
2025-10-19T00:50:12.1506336Z         
2025-10-19T00:50:12.1506879Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1507551Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1508282Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1508604Z         
2025-10-19T00:50:12.1509370Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1510197Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1510800Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1511404Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1511973Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1512431Z         BadRequestDetail: 
2025-10-19T00:50:12.1525652Z    test_name=TestAccStreamRSStreamConnection_cluster test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform
2025-10-19T00:50:12.1631838Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.51s)
```

- 2025-10-20
  - PASS 9 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 9 seconds