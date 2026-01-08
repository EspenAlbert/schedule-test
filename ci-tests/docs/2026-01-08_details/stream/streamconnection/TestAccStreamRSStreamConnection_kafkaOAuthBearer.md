# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-26 00:56](#error-2025-12-26t0056260000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | dev |  | 7.01s
[2026-01-05 01:00](#error-2026-01-05t0100200000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | dev | flaky_check | 6.10s
[2026-01-06 00:55](#error-2026-01-06t0055550000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/695c57ffa5e2ee8130f83b46/streams/test-acc-tf-s-2294986341271721538/connections/kafka-conn-oauthbearer | dev |  | 2.06s
[2026-01-07 00:45](#error-2026-01-07t0045550000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/695da930d59b8466ea724401/streams/test-acc-tf-s-2157994889909342629/connections/kafka-conn-oauthbearer | dev |  | 2.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-12-11 PASS 9 seconds
- 2025-12-12 PASS 10 seconds
- 2025-12-13 PASS 6 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 7 seconds
- 2025-12-16 PASS 10 seconds
- 2025-12-17 PASS 10 seconds
- 2025-12-18 PASS 8 seconds
- 2025-12-19 PASS 7 seconds
- 2025-12-20 PASS 7 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 10 seconds
- 2025-12-23 PASS 8 seconds
- 2025-12-24 PASS 7 seconds
- 2025-12-25 PASS 7 seconds
- 2025-12-26

### Error 2025-12-26T00:56:26+00:00
```
2025-12-26T00:56:26.4444391Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-26T00:56:26.4454175Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-26T00:56:26.4469985Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-26T00:56:26.4471714Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-12-26T00:56:26.4472719Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (7.12s)
```

- 2025-12-27 PASS 8 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 7 seconds
- 2025-12-31 PASS 7 seconds
- 2026-01-01 PASS 8 seconds
- 2026-01-02 PASS 6 seconds
- 2026-01-03 PASS 8 seconds
- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T01:00:20+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2026-01-05T01:00:20.890000+00:00-TestAccStreamRSStreamConnection_kafkaOAuthBearer',confidence=1.0,ts_when='3 days ago')
CheckFailure for stream_connection.test at Step: 2 Checks: 2,5
```
2026-01-05T01:00:20.8909840Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-05T01:00:20.8927145Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-05T01:00:20.8951460Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-05T01:00:20.8953641Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2026-01-05T01:00:20.8956123Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (6.98s)
```

- 2026-01-06

### Error 2026-01-06T00:55:55+00:00
```
2026-01-06T00:55:55.1229317Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-06T00:55:55.1246969Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-06T00:55:55.1299246Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-06T00:55:55.1299957Z     resource_stream_connection_test.go:215: Step 1/3 error: Error running apply: exit status 1
2026-01-06T00:55:55.1300408Z         
2026-01-06T00:55:55.1300901Z         Error: error fetching resource
2026-01-06T00:55:55.1301188Z         
2026-01-06T00:55:55.1301559Z           with data.mongodbatlas_stream_connection.test,
2026-01-06T00:55:55.1302223Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-01-06T00:55:55.1302807Z           12: data "mongodbatlas_stream_connection" "test" {
2026-01-06T00:55:55.1303121Z         
2026-01-06T00:55:55.1304043Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695c57ffa5e2ee8130f83b46/streams/test-acc-tf-s-2294986341271721538/connections/kafka-conn-oauthbearer
2026-01-06T00:55:55.1305013Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-06T00:55:55.1305669Z         Detail: Stream connection with name kafka-conn-oauthbearer for project
2026-01-06T00:55:55.1306317Z         695c57ffa5e2ee8130f83b46 and name test-acc-tf-s-2294986341271721538 not
2026-01-06T00:55:55.1306905Z         found. Reason: Not Found. Params: [kafka-conn-oauthbearer
2026-01-06T00:55:55.1307443Z         695c57ffa5e2ee8130f83b46 test-acc-tf-s-2294986341271721538],
2026-01-06T00:55:55.1307847Z         BadRequestDetail: 
2026-01-06T00:55:55.1308693Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (2.59s)
```

- 2026-01-07

### Error 2026-01-07T00:45:55+00:00
```
2026-01-07T00:45:55.2582789Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-07T00:45:55.2618395Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-07T00:45:55.2641496Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-07T00:45:55.2642108Z     resource_stream_connection_test.go:215: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:45:55.2642541Z         
2026-01-07T00:45:55.2642831Z         Error: error fetching resource
2026-01-07T00:45:55.2643317Z         
2026-01-07T00:45:55.2643705Z           with data.mongodbatlas_stream_connection.test,
2026-01-07T00:45:55.2644349Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-01-07T00:45:55.2644922Z           12: data "mongodbatlas_stream_connection" "test" {
2026-01-07T00:45:55.2645235Z         
2026-01-07T00:45:55.2646125Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da930d59b8466ea724401/streams/test-acc-tf-s-2157994889909342629/connections/kafka-conn-oauthbearer
2026-01-07T00:45:55.2647061Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-07T00:45:55.2647684Z         Detail: Stream connection with name kafka-conn-oauthbearer for project
2026-01-07T00:45:55.2648311Z         695da930d59b8466ea724401 and name test-acc-tf-s-2157994889909342629 not
2026-01-07T00:45:55.2648865Z         found. Reason: Not Found. Params: [kafka-conn-oauthbearer
2026-01-07T00:45:55.2649382Z         695da930d59b8466ea724401 test-acc-tf-s-2157994889909342629],
2026-01-07T00:45:55.2649768Z         BadRequestDetail: 
2026-01-07T00:45:55.2650131Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (2.80s)
```

- 2026-01-08 PASS 9 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-04 00:57](#error-2026-01-04t0057460000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | qa | 6.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 7 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04

### Error 2026-01-04T00:57:46+00:00
```
2026-01-04T00:57:46.3837380Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-04T00:57:46.3847314Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-04T00:57:46.3862112Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-04T00:57:46.3863285Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2026-01-04T00:57:46.3864557Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (6.69s)
```

- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 10 seconds
  - PASS 9 seconds
