# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-302222641342853498/connections | qa | flaky_500 | 62.04s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-26
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10
  - PASS 8 seconds
  - FAIL a minute

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3338012Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-07-10T13:24:52.3340469Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-07-10T13:24:52.3495418Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-07-10T13:24:52.3495990Z     resource_stream_connection_test.go:296: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3496397Z         
2025-07-10T13:24:52.3496696Z         Error: error creating resource
2025-07-10T13:24:52.3496958Z         
2025-07-10T13:24:52.3497292Z           with mongodbatlas_stream_connection.test,
2025-07-10T13:24:52.3497949Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-07-10T13:24:52.3498560Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-10T13:24:52.3498870Z         
2025-07-10T13:24:52.3499621Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-302222641342853498/connections
2025-07-10T13:24:52.3500452Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3501420Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3501812Z         BadRequestDetail: 
2025-07-10T13:24:52.3513041Z    test_name=TestAccStreamRSStreamConnection_kafkaSSL
2025-07-10T13:24:52.3665509Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-07-10T13:24:52.3666643Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3667369Z         
2025-07-10T13:24:52.3667837Z         Error: error during resource delete
2025-07-10T13:24:52.3668280Z         
2025-07-10T13:24:52.3669415Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-302222641342853498
2025-07-10T13:24:52.3670875Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-10T13:24:52.3671898Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3672578Z         BadRequestDetail: 
2025-07-10T13:24:52.3673114Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (62.39s)
```

- 2025-07-11 PASS 6 seconds
- 2025-07-12 PASS 6 seconds
- 2025-07-13 PASS 11 seconds
- 2025-07-14 PASS 6 seconds
- 2025-07-15 PASS 3 seconds
- 2025-07-16 PASS 4 seconds
- 2025-07-17 PASS 3 seconds
- 2025-07-18 PASS 4 seconds
- 2025-07-19 PASS 3 seconds
- 2025-07-20 PASS 3 seconds
- 2025-07-21 PASS 4 seconds
- 2025-07-22 PASS 5 seconds
- 2025-07-23
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-07-24 PASS 4 seconds