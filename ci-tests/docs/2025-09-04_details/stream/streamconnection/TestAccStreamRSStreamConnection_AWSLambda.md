# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 43 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:15](#error-2025-08-10t0115050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-s-2653652820417135320/connections | qa | flaky_500 | 84.05s
[2025-08-17 01:18](#error-2025-08-17t0118020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67978809c57f200e59f19f6a/streams | qa | flaky_500 | 31.01s
[2025-08-28 00:56](#error-2025-08-28t0056490000) |  | dev |  | 2.00s
[2025-08-29 01:05](#error-2025-08-29t0105140000) |  | dev | flaky_500 | 2.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 seconds
- 2025-08-07
  - PASS 27 seconds
  - PASS 5 seconds
- 2025-08-08 PASS 3 seconds
- 2025-08-09 PASS 3 seconds
- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6181445Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-08-10T01:15:05.6186025Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-08-10T01:15:05.6330541Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-08-10T01:15:05.6331159Z     resource_stream_connection_test.go:345: Step 1/2 error: Error running apply: exit status 1
2025-08-10T01:15:05.6331578Z         
2025-08-10T01:15:05.6331852Z         Error: error creating resource
2025-08-10T01:15:05.6332119Z         
2025-08-10T01:15:05.6332446Z           with mongodbatlas_stream_connection.test,
2025-08-10T01:15:05.6333091Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-08-10T01:15:05.6333689Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-10T01:15:05.6334002Z         
2025-08-10T01:15:05.6334752Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-s-2653652820417135320/connections
2025-08-10T01:15:05.6335602Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:15:05.6336177Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6336569Z         BadRequestDetail: 
2025-08-10T01:15:05.6399275Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-08-10T01:15:05.6399853Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-10T01:15:05.6400279Z         
2025-08-10T01:15:05.6400562Z         Error: error during resource delete
2025-08-10T01:15:05.6400831Z         
2025-08-10T01:15:05.6401513Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-s-2653652820417135320
2025-08-10T01:15:05.6402287Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-08-10T01:15:05.6402880Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6403281Z         BadRequestDetail: 
2025-08-10T01:15:05.6403608Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (84.46s)
```

- 2025-08-11 PASS 3 seconds
- 2025-08-12
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 3 seconds
- 2025-08-15 PASS 3 seconds
- 2025-08-16 PASS 3 seconds
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6272055Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-08-17T01:18:02.6277022Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-08-17T01:18:02.6376227Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-08-17T01:18:02.6377502Z     resource_stream_connection_test.go:345: Step 1/2 error: Error running apply: exit status 1
2025-08-17T01:18:02.6378240Z         
2025-08-17T01:18:02.6378713Z         Error: error creating resource
2025-08-17T01:18:02.6379343Z         
2025-08-17T01:18:02.6379911Z           with mongodbatlas_stream_instance.test,
2025-08-17T01:18:02.6381056Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-08-17T01:18:02.6382111Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-08-17T01:18:02.6382635Z         
2025-08-17T01:18:02.6383516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams
2025-08-17T01:18:02.6384720Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:18:02.6385764Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:18:02.6386441Z         BadRequestDetail: 
2025-08-17T01:18:02.6406171Z    test_name=TestAccStreamRSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/0ae9b45c-461d-4231-b07c-84196d882636/terraform test_working_directory=/tmp/plugintest2742625326 test_step_number=1
2025-08-17T01:18:02.6420455Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (31.09s)
```

- 2025-08-18
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-08-19 PASS 4 seconds
- 2025-08-20
  - PASS 4 seconds
  - PASS 16 seconds
- 2025-08-21 PASS 3 seconds
- 2025-08-22 PASS 4 seconds
- 2025-08-23 PASS 3 seconds
- 2025-08-24 PASS 4 seconds
- 2025-08-25 PASS 3 seconds
- 2025-08-26 PASS 3 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28

### Error 2025-08-28T00:56:49+00:00
```
2025-08-28T00:56:49.4297178Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-08-28T00:56:49.4303232Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-08-28T00:56:49.4324088Z    test_name=TestAccStreamRSStreamConnection_AWSLambda test_terraform_path=/home/runner/work/_temp/3b20f5b7-ea79-4991-9efa-e6d1d5315bbb/terraform
2025-08-28T00:56:49.4324983Z     resource_stream_connection_test.go:345: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:56:49.4325399Z         
2025-08-28T00:56:49.4325671Z         Error: error creating resource
2025-08-28T00:56:49.4325937Z         
2025-08-28T00:56:49.4326266Z           with mongodbatlas_stream_connection.test,
2025-08-28T00:56:49.4326912Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-08-28T00:56:49.4327691Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-28T00:56:49.4328007Z         
2025-08-28T00:56:49.4328974Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-s-8375600360319752089/connections
2025-08-28T00:56:49.4329660Z         POST: HTTP 400 Bad Request (Error code:
2025-08-28T00:56:49.4330182Z         "STREAM_AWS_CONNECTION_NOT_AUTHORIZED") Detail: Unable to authorize AWS
2025-08-28T00:56:49.4330797Z         connection with name test-acc-tf-2890260060493207829. Please verify that the
2025-08-28T00:56:49.4331372Z         IAM role has been configured correctly and refer to the following
2025-08-28T00:56:49.4331805Z         documentation for further guidance:
2025-08-28T00:56:49.4332332Z         https://www.mongodb.com/docs/atlas/security/set-up-unified-aws-access/.
2025-08-28T00:56:49.4332896Z         Reason: Bad Request. Params: [test-acc-tf-2890260060493207829],
2025-08-28T00:56:49.4333281Z         BadRequestDetail: 
2025-08-28T00:56:49.4333608Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (2.00s)
```

- 2025-08-29
  - FAIL 2 seconds

### Error 2025-08-29T01:05:14+00:00
```
2025-08-29T01:05:14.5455629Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-08-29T01:05:14.5461372Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-08-29T01:05:14.5479879Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-08-29T01:05:14.5480479Z     resource_stream_connection_test.go:345: Step 1/2 error: Error running apply: exit status 1
2025-08-29T01:05:14.5480914Z         
2025-08-29T01:05:14.5481198Z         Error: error creating resource
2025-08-29T01:05:14.5481477Z         
2025-08-29T01:05:14.5481811Z           with mongodbatlas_stream_connection.test,
2025-08-29T01:05:14.5482742Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-08-29T01:05:14.5483425Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-29T01:05:14.5483756Z         
2025-08-29T01:05:14.5484547Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-s-9181813617952658945/connections
2025-08-29T01:05:14.5485263Z         POST: HTTP 400 Bad Request (Error code:
2025-08-29T01:05:14.5485805Z         "STREAM_AWS_CONNECTION_NOT_AUTHORIZED") Detail: Unable to authorize AWS
2025-08-29T01:05:14.5486440Z         connection with name test-acc-tf-8357731275006170223. Please verify that the
2025-08-29T01:05:14.5487042Z         IAM role has been configured correctly and refer to the following
2025-08-29T01:05:14.5487487Z         documentation for further guidance:
2025-08-29T01:05:14.5488028Z         https://www.mongodb.com/docs/atlas/security/set-up-unified-aws-access/.
2025-08-29T01:05:14.5488614Z         Reason: Bad Request. Params: [test-acc-tf-8357731275006170223],
2025-08-29T01:05:14.5489007Z         BadRequestDetail: 
2025-08-29T01:05:14.5489342Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (2.08s)
```

  - PASS 3 seconds
  - PASS 4 seconds
- 2025-08-30 PASS 4 seconds
- 2025-08-31 PASS 3 seconds
- 2025-09-01
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-02 PASS 4 seconds
- 2025-09-03 PASS 3 seconds
- 2025-09-04 PASS 4 seconds