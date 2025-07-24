# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-5897623604624283089/connections | qa | flaky_500 | 62.04s
[2025-07-13 00:52](#error-2025-07-13t0052140000) |  | qa |  | 165.02s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-26
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10
  - PASS 8 seconds
  - FAIL a minute

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3333857Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-07-10T13:24:52.3343627Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-07-10T13:24:52.3357791Z    test_name=TestAccStreamStreamConnection_https test_terraform_path=/home/runner/work/_temp/4d5cd8a7-2970-4d68-aa4b-10ee84c3df9f/terraform test_working_directory=/tmp/plugintest1402042308
2025-07-10T13:24:52.3513401Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-07-10T13:24:52.3513967Z     resource_stream_connection_test.go:117: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3514379Z         
2025-07-10T13:24:52.3514656Z         Error: error creating resource
2025-07-10T13:24:52.3514925Z         
2025-07-10T13:24:52.3515263Z           with mongodbatlas_stream_connection.test,
2025-07-10T13:24:52.3515920Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-07-10T13:24:52.3516531Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-10T13:24:52.3516833Z         
2025-07-10T13:24:52.3517584Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-5897623604624283089/connections
2025-07-10T13:24:52.3518537Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3519120Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3519506Z         BadRequestDetail: 
2025-07-10T13:24:52.3530407Z    test_name=TestAccStreamDSStreamConnection_cluster test_step_number=1 test_terraform_path=/home/runner/work/_temp/4d5cd8a7-2970-4d68-aa4b-10ee84c3df9f/terraform
2025-07-10T13:24:52.3690947Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-07-10T13:24:52.3691968Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3692680Z         
2025-07-10T13:24:52.3693146Z         Error: error during resource delete
2025-07-10T13:24:52.3693595Z         
2025-07-10T13:24:52.3694735Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-5897623604624283089
2025-07-10T13:24:52.3696035Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-10T13:24:52.3697084Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3697761Z         BadRequestDetail: 
2025-07-10T13:24:52.3698285Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (62.41s)
```

- 2025-07-11 PASS 6 seconds
- 2025-07-12 PASS 2 minutes
- 2025-07-13

### Error 2025-07-13T00:52:14+00:00
```
2025-07-13T00:52:14.2640194Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-07-13T00:52:14.2647316Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-07-13T00:52:14.2657678Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-07-13T00:52:14.2658226Z     resource_stream_connection_test.go:119: Step 2/3, expected an error but got none
2025-07-13T00:52:14.2658702Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (165.19s)
```

- 2025-07-14 PASS 6 seconds
- 2025-07-15 PASS 2 minutes
- 2025-07-16 PASS 2 minutes
- 2025-07-17 PASS 2 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20 PASS 2 minutes
- 2025-07-21 PASS 2 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-07-24 PASS 2 minutes