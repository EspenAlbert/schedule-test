# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-6906850700820679037/connections/test-acc-tf-8164743705771538624 | dev | flaky_500 | 5.07s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-5518781707599911175/connections/test-acc-tf-4242868797349853172 | qa | flaky_500 | 5.09s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-2463941777149916755/connections/test-acc-tf-5482544873168353453 | dev | flaky_500 | 5.08s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-5139059053316083252/connections/test-acc-tf-6273507682500897046 | dev | flaky_500 | 5.07s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.09s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-8657360613357518085/connections | qa | flaky_500 | 62.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 6 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 6 seconds
- 2025-04-16
  - FAIL 5 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2950880Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T00:45:12.2954612Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T00:45:12.3187578Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T00:45:12.3188293Z     resource_stream_connection_test.go:296: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3188813Z         
2025-04-16T00:45:12.3189099Z         Error: error deleting resource
2025-04-16T00:45:12.3189366Z         
2025-04-16T00:45:12.3190321Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-6906850700820679037/connections/test-acc-tf-8164743705771538624
2025-04-16T00:45:12.3191270Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3191885Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3192530Z         BadRequestDetail: 
2025-04-16T00:45:12.3193049Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (5.70s)
```

  - FAIL 5 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7995953Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T12:49:32.7999551Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T12:49:32.8150997Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T12:49:32.8151705Z     resource_stream_connection_test.go:296: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8152221Z         
2025-04-16T12:49:32.8152504Z         Error: error deleting resource
2025-04-16T12:49:32.8152772Z         
2025-04-16T12:49:32.8153702Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-5518781707599911175/connections/test-acc-tf-4242868797349853172
2025-04-16T12:49:32.8154630Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8155229Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8155645Z         BadRequestDetail: 
2025-04-16T12:49:32.8155972Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (5.95s)
```

  - FAIL 5 seconds

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9973349Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T14:37:26.9975526Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T14:37:27.0158362Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-04-16T14:37:27.0159087Z     resource_stream_connection_test.go:296: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0159609Z         
2025-04-16T14:37:27.0159890Z         Error: error deleting resource
2025-04-16T14:37:27.0160155Z         
2025-04-16T14:37:27.0161096Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-2463941777149916755/connections/test-acc-tf-5482544873168353453
2025-04-16T14:37:27.0162043Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0162647Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0163245Z         BadRequestDetail: 
2025-04-16T14:37:27.0163689Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (5.85s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8914730Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-04-17T00:44:44.8918477Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-04-17T00:44:44.9194523Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-04-17T00:44:44.9195246Z     resource_stream_connection_test.go:296: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9195761Z         
2025-04-17T00:44:44.9196041Z         Error: error deleting resource
2025-04-17T00:44:44.9196311Z         
2025-04-17T00:44:44.9197264Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/streams/test-acc-tf-5139059053316083252/connections/test-acc-tf-6273507682500897046
2025-04-17T00:44:44.9198361Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9198981Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9199401Z         BadRequestDetail: 
2025-04-17T00:44:44.9199730Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (5.66s)
```

- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 6 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 6 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 6 seconds
- 2025-04-28 PASS 6 seconds
- 2025-04-29 PASS 6 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-06 PASS 6 seconds
- 2025-05-07
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6331394Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-05-11T00:29:58.6332851Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-05-11T00:29:58.6348330Z    test_step_number=1 test_working_directory=/tmp/plugintest2763621080
2025-05-11T00:29:58.6349470Z     resource_stream_connection_test.go:296: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:58.6350237Z         
2025-05-11T00:29:58.6350738Z         Error: error creating resource
2025-05-11T00:29:58.6351226Z         
2025-05-11T00:29:58.6351819Z           with mongodbatlas_stream_instance.test,
2025-05-11T00:29:58.6353166Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-05-11T00:29:58.6354260Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-05-11T00:29:58.6354812Z         
2025-05-11T00:29:58.6355831Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:58.6356566Z         type
2025-05-11T00:29:58.6357083Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (0.88s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 6 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-23 PASS 6 seconds
- 2025-05-24 PASS 6 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-28
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-05-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-31 PASS 6 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-06-02
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-06-03
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05 PASS 4 seconds
- 2025-06-06 PASS 6 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 6 seconds
- 2025-06-09 PASS 6 seconds
- 2025-06-10 PASS 6 seconds
- 2025-06-11
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 6 seconds
- 2025-06-17 PASS 6 seconds
- 2025-06-18
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 6 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7955770Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.7957874Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.8100726Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.8101298Z     resource_stream_connection_test.go:296: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8101708Z         
2025-06-22T00:49:55.8102135Z         Error: error creating resource
2025-06-22T00:49:55.8102410Z         
2025-06-22T00:49:55.8102737Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8103375Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8103971Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8104396Z         
2025-06-22T00:49:55.8105133Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-8657360613357518085/connections
2025-06-22T00:49:55.8105967Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8106539Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8106923Z         BadRequestDetail: 
2025-06-22T00:49:55.8225837Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.8226419Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8226835Z         
2025-06-22T00:49:55.8227117Z         Error: error during resource delete
2025-06-22T00:49:55.8227385Z         
2025-06-22T00:49:55.8228046Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-8657360613357518085
2025-06-22T00:49:55.8228800Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8229379Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8229781Z         BadRequestDetail: 
2025-06-22T00:49:55.8230100Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (62.62s)
```

- 2025-06-23 PASS 6 seconds
- 2025-06-24 PASS 6 seconds
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
- 2025-07-10 PASS 8 seconds