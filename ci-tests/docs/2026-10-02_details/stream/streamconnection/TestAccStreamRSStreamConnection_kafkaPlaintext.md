# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections | dev |  | 3.06s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev |  | 0.04s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | real_test_failure | 3.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 6 seconds
- 2026-09-03 PASS 11 seconds
- 2026-09-04 PASS 5 seconds
- 2026-09-05 PASS 14 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 8 seconds
- 2026-09-08 PASS 10 seconds
- 2026-09-09 PASS 6 seconds
- 2026-09-10 PASS 10 seconds
- 2026-09-11
  - PASS 7 seconds
  - PASS 7 seconds
- 2026-09-12 PASS 12 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 5 seconds
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7071219Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-09-15T01:40:26.7072765Z     resource_stream_connection_test.go:96: Creating execution project (1): test-acc-tf-p-2210896549590350814
2026-09-15T01:40:26.7074670Z     resource_stream_connection_test.go:96: Creating execution stream instance: test-acc-tf-s-6926080479850766113
2026-09-15T01:40:26.7100877Z    test_name=TestAccStreamRSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/8dac1edb-3c11-4d9a-ab9c-98e5162cfa5f/terraform test_working_directory=/tmp/plugintest1561745363
2026-09-15T01:40:26.7103109Z     resource_stream_connection_test.go:97: Step 1/4 error: Error running apply: exit status 1
2026-09-15T01:40:26.7103986Z         
2026-09-15T01:40:26.7104577Z         Error: error creating resource
2026-09-15T01:40:26.7105128Z         
2026-09-15T01:40:26.7105833Z           with mongodbatlas_stream_connection.test,
2026-09-15T01:40:26.7107232Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-15T01:40:26.7108757Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-15T01:40:26.7109445Z         
2026-09-15T01:40:26.7110933Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections
2026-09-15T01:40:26.7112586Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7113887Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7115242Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7116238Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (3.61s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6653195Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-09-16T01:37:53.6667691Z   
2026-09-16T01:37:53.6668231Z     resource_stream_connection_test.go:97: Step 1/4 error: Error running apply: exit status 1
2026-09-16T01:37:53.6668720Z         
2026-09-16T01:37:53.6669056Z         Error: error creating resource
2026-09-16T01:37:53.6669379Z         
2026-09-16T01:37:53.6669781Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6670532Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6671226Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6671755Z         
2026-09-16T01:37:53.6672593Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6673485Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6674192Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6674911Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6675686Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (0.43s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2026-09-17T01:38:50.252000+00:00-TestAccStreamRSStreamConnection_kafkaPlaintext',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2520164Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-09-17T01:38:50.2522187Z     resource_stream_connection_test.go:96: Creating execution project (1): test-acc-tf-p-2763990696228596803
2026-09-17T01:38:50.2524131Z     resource_stream_connection_test.go:96: Creating execution stream instance: test-acc-tf-s-7698987809372845664
2026-09-17T01:38:50.2541781Z    test_terraform_path=/home/runner/work/_temp/fb1bcd30-9ea9-40ce-ba2e-82d12a3edae5/terraform test_name=TestAccStreamRSStreamConnection_kafkaPlaintext
2026-09-17T01:38:50.2542924Z     resource_stream_connection_test.go:97: Step 1/4 error: Error running apply: exit status 1
2026-09-17T01:38:50.2543493Z         
2026-09-17T01:38:50.2543885Z         Error: error creating resource
2026-09-17T01:38:50.2544277Z         
2026-09-17T01:38:50.2544759Z           with mongodbatlas_stream_connection.test,
2026-09-17T01:38:50.2545738Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-17T01:38:50.2546527Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-17T01:38:50.2546962Z         
2026-09-17T01:38:50.2547863Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections
2026-09-17T01:38:50.2548761Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2549462Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2550189Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2550755Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (3.73s)
```

- 2026-09-18 PASS 5 seconds
- 2026-09-19 PASS 12 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 8 seconds
- 2026-09-22 PASS 15 seconds
- 2026-09-23 PASS 8 seconds
- 2026-09-24 PASS 12 seconds
- 2026-09-25 PASS 6 seconds
- 2026-09-26 PASS 11 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 8 seconds
- 2026-09-29
  - PASS 12 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-09-30
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-10-01 PASS 11 seconds
- 2026-10-02 PASS 8 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 5 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 7 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 7 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 9 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 8 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 9 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
