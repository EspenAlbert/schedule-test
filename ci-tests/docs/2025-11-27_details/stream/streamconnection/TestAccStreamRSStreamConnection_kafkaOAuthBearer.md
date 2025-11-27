# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections | dev | flaky_500 | 1.02s
[2025-11-15 00:49](#error-2025-11-15t0049570000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6917c8e55b452e273f38bbfa/streams/test-acc-tf-s-8160660117636163264/connections/kafka-conn-oauthbearer | dev |  | 1.07s
[2025-11-20 00:54](#error-2025-11-20t0054140000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/691e608ca0b6e4670df27481/streams/test-acc-tf-s-2580079019913895099/connections/kafka-conn-oauthbearer | dev |  | 1.08s
[2025-11-22 00:49](#error-2025-11-22t0049310000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6921034aa2a1e670f528f5d2/streams/test-acc-tf-s-5408774343527088512/connections/kafka-conn-oauthbearer | dev |  | 1.08s
[2025-11-27 00:57](#error-2025-11-27t0057530000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | dev | flaky_check | 5.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 11 seconds
- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 6 seconds
- 2025-11-05
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.0816951Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-06T00:51:58.0869397Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-06T00:51:58.1002856Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-06T00:51:58.1003493Z     resource_stream_connection_test.go:215: Step 1/3 error: Error running apply: exit status 1
2025-11-06T00:51:58.1003928Z         
2025-11-06T00:51:58.1004361Z         Error: error creating resource
2025-11-06T00:51:58.1004638Z         
2025-11-06T00:51:58.1004988Z           with mongodbatlas_stream_connection.test,
2025-11-06T00:51:58.1005662Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-11-06T00:51:58.1006289Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-11-06T00:51:58.1006625Z         
2025-11-06T00:51:58.1007414Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cba2b/streams/test-acc-tf-s-5661631796527300216/connections
2025-11-06T00:51:58.1008297Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1008907Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1009317Z         BadRequestDetail: 
2025-11-06T00:51:58.1016294Z    test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform test_working_directory=/tmp/plugintest3172593378
2025-11-06T00:51:58.1044504Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.25s)
```

- 2025-11-07 PASS 7 seconds
- 2025-11-08 PASS 7 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 9 seconds
- 2025-11-11 PASS 6 seconds
- 2025-11-12 PASS 9 seconds
- 2025-11-13 PASS 7 seconds
- 2025-11-14 PASS 8 seconds
- 2025-11-15

### Error 2025-11-15T00:49:57+00:00
```
2025-11-15T00:49:57.6377426Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-15T00:49:57.6393710Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-15T00:49:57.6416715Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-15T00:49:57.6417368Z     resource_stream_connection_test.go:215: Step 1/3 error: Error running apply: exit status 1
2025-11-15T00:49:57.6417922Z         
2025-11-15T00:49:57.6435089Z         Error: error fetching resource
2025-11-15T00:49:57.6435577Z         
2025-11-15T00:49:57.6436202Z           with data.mongodbatlas_stream_connection.test,
2025-11-15T00:49:57.6437240Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-11-15T00:49:57.6437863Z           12: data "mongodbatlas_stream_connection" "test" {
2025-11-15T00:49:57.6438398Z         
2025-11-15T00:49:57.6439342Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6917c8e55b452e273f38bbfa/streams/test-acc-tf-s-8160660117636163264/connections/kafka-conn-oauthbearer
2025-11-15T00:49:57.6440307Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-15T00:49:57.6440949Z         Detail: Stream connection with name kafka-conn-oauthbearer for project
2025-11-15T00:49:57.6441831Z         6917c8e55b452e273f38bbfa and name test-acc-tf-s-8160660117636163264 not
2025-11-15T00:49:57.6442420Z         found. Reason: Not Found. Params: [kafka-conn-oauthbearer
2025-11-15T00:49:57.6442943Z         6917c8e55b452e273f38bbfa test-acc-tf-s-8160660117636163264],
2025-11-15T00:49:57.6443337Z         BadRequestDetail: 
2025-11-15T00:49:57.6443704Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.71s)
```

- 2025-11-16: MISSING
- 2025-11-17 PASS 9 seconds
- 2025-11-18 PASS 7 seconds
- 2025-11-19 PASS 8 seconds
- 2025-11-20

### Error 2025-11-20T00:54:14+00:00
```
2025-11-20T00:54:14.6585181Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-20T00:54:14.6599026Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-20T00:54:14.6621093Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-20T00:54:14.6621667Z     resource_stream_connection_test.go:215: Step 1/3 error: Error running apply: exit status 1
2025-11-20T00:54:14.6622076Z         
2025-11-20T00:54:14.6622343Z         Error: error fetching resource
2025-11-20T00:54:14.6622618Z         
2025-11-20T00:54:14.6622961Z           with data.mongodbatlas_stream_connection.test,
2025-11-20T00:54:14.6623568Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-11-20T00:54:14.6624102Z           12: data "mongodbatlas_stream_connection" "test" {
2025-11-20T00:54:14.6624409Z         
2025-11-20T00:54:14.6625231Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e608ca0b6e4670df27481/streams/test-acc-tf-s-2580079019913895099/connections/kafka-conn-oauthbearer
2025-11-20T00:54:14.6626105Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-20T00:54:14.6626805Z         Detail: Stream connection with name kafka-conn-oauthbearer for project
2025-11-20T00:54:14.6627392Z         691e608ca0b6e4670df27481 and name test-acc-tf-s-2580079019913895099 not
2025-11-20T00:54:14.6627924Z         found. Reason: Not Found. Params: [kafka-conn-oauthbearer
2025-11-20T00:54:14.6628502Z         691e608ca0b6e4670df27481 test-acc-tf-s-2580079019913895099],
2025-11-20T00:54:14.6629025Z         BadRequestDetail: 
2025-11-20T00:54:14.6629385Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.79s)
```

- 2025-11-21 PASS 10 seconds
- 2025-11-22

### Error 2025-11-22T00:49:31+00:00
```
2025-11-22T00:49:31.7782996Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-22T00:49:31.7798275Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-22T00:49:31.7827581Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-22T00:49:31.7828220Z     resource_stream_connection_test.go:215: Step 1/3 error: Error running apply: exit status 1
2025-11-22T00:49:31.7828652Z         
2025-11-22T00:49:31.7828929Z         Error: error fetching resource
2025-11-22T00:49:31.7829208Z         
2025-11-22T00:49:31.7829570Z           with data.mongodbatlas_stream_connection.test,
2025-11-22T00:49:31.7830333Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-11-22T00:49:31.7830908Z           12: data "mongodbatlas_stream_connection" "test" {
2025-11-22T00:49:31.7831206Z         
2025-11-22T00:49:31.7832112Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6921034aa2a1e670f528f5d2/streams/test-acc-tf-s-5408774343527088512/connections/kafka-conn-oauthbearer
2025-11-22T00:49:31.7833270Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-22T00:49:31.7833905Z         Detail: Stream connection with name kafka-conn-oauthbearer for project
2025-11-22T00:49:31.7834530Z         6921034aa2a1e670f528f5d2 and name test-acc-tf-s-5408774343527088512 not
2025-11-22T00:49:31.7835092Z         found. Reason: Not Found. Params: [kafka-conn-oauthbearer
2025-11-22T00:49:31.7835611Z         6921034aa2a1e670f528f5d2 test-acc-tf-s-5408774343527088512],
2025-11-22T00:49:31.7836006Z         BadRequestDetail: 
2025-11-22T00:49:31.7836371Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.81s)
```

- 2025-11-23: MISSING
- 2025-11-24 PASS 10 seconds
- 2025-11-25 PASS 9 seconds
- 2025-11-26 PASS 7 seconds
- 2025-11-27

### Error 2025-11-27T00:57:53+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-11-27T00:57:53.715000+00:00-TestAccStreamRSStreamConnection_kafkaOAuthBearer',confidence=1.0,ts_when='an hour ago')
CheckFailure for stream_connection.test at Step: 2 Checks: 2,5
```
2025-11-27T00:57:53.7158788Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-27T00:57:53.7175851Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-27T00:57:53.7187581Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-11-27T00:57:53.7188767Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-11-27T00:57:53.7191395Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (5.36s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 8 seconds
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
- 2025-11-23 PASS 7 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
