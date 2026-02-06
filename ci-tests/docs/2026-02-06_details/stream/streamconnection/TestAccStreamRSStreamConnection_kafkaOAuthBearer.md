# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
- 2026-01-09 PASS 7 seconds
- 2026-01-10 PASS 9 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 10 seconds
- 2026-01-13 PASS 8 seconds
- 2026-01-14 PASS 8 seconds
- 2026-01-15 PASS 7 seconds
- 2026-01-16 PASS 7 seconds
- 2026-01-17 PASS 7 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 10 seconds
- 2026-01-20 PASS 7 seconds
- 2026-01-21 PASS 12 seconds
- 2026-01-22 PASS 10 seconds
- 2026-01-23 PASS 9 seconds
- 2026-01-24 PASS 15 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 8 seconds
- 2026-01-28 PASS 9 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 8 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 8 seconds
- 2026-02-03
  - PASS 15 seconds
  - PASS 13 seconds
- 2026-02-04 PASS 10 seconds
- 2026-02-05 PASS 8 seconds
- 2026-02-06 PASS 10 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-25 01:02](#error-2026-01-25t0102290000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/69756558aff53e81ac7ab09c/streams/test-acc-tf-s-153128178241664666/connections/kafka-conn-oauthbearer | qa | 8.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 9 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 8 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 9 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25

### Error 2026-01-25T01:02:29+00:00
```
2026-01-25T01:02:29.4702773Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-25T01:02:29.4723809Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-25T01:02:29.4762529Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-25T01:02:29.4763584Z     resource_stream_connection_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-01-25T01:02:29.4764047Z         
2026-01-25T01:02:29.4764338Z         Error: error fetching resource
2026-01-25T01:02:29.4764633Z         
2026-01-25T01:02:29.4765173Z           with data.mongodbatlas_stream_connection.test,
2026-01-25T01:02:29.4765821Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-01-25T01:02:29.4766408Z           12: data "mongodbatlas_stream_connection" "test" {
2026-01-25T01:02:29.4766767Z         
2026-01-25T01:02:29.4767605Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69756558aff53e81ac7ab09c/streams/test-acc-tf-s-153128178241664666/connections/kafka-conn-oauthbearer
2026-01-25T01:02:29.4768488Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-25T01:02:29.4769096Z         Detail: Stream connection with name kafka-conn-oauthbearer for project
2026-01-25T01:02:29.4769727Z         69756558aff53e81ac7ab09c and name test-acc-tf-s-153128178241664666 not found.
2026-01-25T01:02:29.4770364Z         Reason: Not Found. Params: [kafka-conn-oauthbearer 69756558aff53e81ac7ab09c
2026-01-25T01:02:29.4772155Z         test-acc-tf-s-153128178241664666], BadRequestDetail: 
2026-01-25T01:02:29.4773189Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (8.62s)
```

- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 10 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 12 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
