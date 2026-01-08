# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-10 01:00](#error-2025-12-10t0100370000) | CheckFailure for stream_connection.test at Step: 2 Checks: 1,2,5 | dev |  | 6.01s
[2025-12-30 00:55](#error-2025-12-30t0055060000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/69531d47bb0cf4d0314ed4e5/streams/test-acc-tf-s-7846225675842672463/connections/kafka-conn-plaintext | dev |  | 5.06s
[2026-01-02 00:53](#error-2026-01-02t0053150000) | API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName} | dev | unknown | 2.01s
[2026-01-06 00:55](#error-2026-01-06t0055550000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/695c57ffa5e2ee8130f83b46/streams/test-acc-tf-s-2294986341271721538/connections/kafka-conn-plaintext | dev |  | 4.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - FAIL 6 seconds

### Error 2025-12-10T01:00:37+00:00
```
2025-12-10T01:00:37.7317696Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-10T01:00:37.7338687Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-10T01:00:37.7361836Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-10T01:00:37.7363276Z     resource_stream_connection_test.go:99: Step 2/3 error: Check failed: Check 2/3 error: Check 1/2 error: Check 5/10 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-12-10T01:00:37.7365164Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (6.10s)
```

  - PASS 10 seconds
- 2025-12-11 PASS 11 seconds
- 2025-12-12 PASS 10 seconds
- 2025-12-13 PASS 10 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 7 seconds
- 2025-12-16 PASS 13 seconds
- 2025-12-17 PASS 9 seconds
- 2025-12-18 PASS 11 seconds
- 2025-12-19 PASS 7 seconds
- 2025-12-20 PASS 11 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 11 seconds
- 2025-12-23 PASS 11 seconds
- 2025-12-24 PASS 7 seconds
- 2025-12-25 PASS 12 seconds
- 2025-12-26 PASS 9 seconds
- 2025-12-27 PASS 11 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30

### Error 2025-12-30T00:55:06+00:00
```
2025-12-30T00:55:06.9743155Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-30T00:55:06.9744212Z     resource_stream_connection_test.go:98: Creating execution project: test-acc-tf-p-2740397150305218794
2025-12-30T00:55:06.9745172Z     resource_stream_connection_test.go:98: Creating execution stream instance: test-acc-tf-s-7846225675842672463
2025-12-30T00:55:06.9755301Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-30T00:55:06.9780135Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2025-12-30T00:55:06.9780697Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2025-12-30T00:55:06.9781103Z         
2025-12-30T00:55:06.9781378Z         Error: error fetching resource
2025-12-30T00:55:06.9781649Z         
2025-12-30T00:55:06.9781994Z           with data.mongodbatlas_stream_connection.test,
2025-12-30T00:55:06.9782599Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2025-12-30T00:55:06.9783138Z           12: data "mongodbatlas_stream_connection" "test" {
2025-12-30T00:55:06.9783439Z         
2025-12-30T00:55:06.9784248Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69531d47bb0cf4d0314ed4e5/streams/test-acc-tf-s-7846225675842672463/connections/kafka-conn-plaintext
2025-12-30T00:55:06.9785113Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-12-30T00:55:06.9785681Z         Detail: Stream connection with name kafka-conn-plaintext for project
2025-12-30T00:55:06.9786390Z         69531d47bb0cf4d0314ed4e5 and name test-acc-tf-s-7846225675842672463 not
2025-12-30T00:55:06.9786927Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2025-12-30T00:55:06.9787418Z         69531d47bb0cf4d0314ed4e5 test-acc-tf-s-7846225675842672463],
2025-12-30T00:55:06.9787801Z         BadRequestDetail: 
2025-12-30T00:55:06.9788148Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (5.57s)
```

- 2025-12-31 PASS 7 seconds
- 2026-01-01 PASS 11 seconds
- 2026-01-02

### Error 2026-01-02T00:53:15+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-01-02T00:53:15.987000+00:00-TestAccStreamRSStreamConnection_kafkaPlaintext',confidence=1.0,ts_when='5 days ago')
API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName}
```
2026-01-02T00:53:15.9870799Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-02T00:53:15.9882168Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-02T00:53:15.9906985Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-02T00:53:15.9907587Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2026-01-02T00:53:15.9908021Z         
2026-01-02T00:53:15.9908312Z         Error: error fetching resource
2026-01-02T00:53:15.9908585Z         
2026-01-02T00:53:15.9908957Z           with data.mongodbatlas_stream_connection.test,
2026-01-02T00:53:15.9909616Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-01-02T00:53:15.9910399Z           12: data "mongodbatlas_stream_connection" "test" {
2026-01-02T00:53:15.9910713Z         
2026-01-02T00:53:15.9911590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695711f7bb847ea0da1935d4/streams/test-acc-tf-s-3730062657613000804/connections/kafka-conn-plaintext
2026-01-02T00:53:15.9912513Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-02T00:53:15.9913124Z         Detail: Stream connection with name kafka-conn-plaintext for project
2026-01-02T00:53:15.9913737Z         695711f7bb847ea0da1935d4 and name test-acc-tf-s-3730062657613000804 not
2026-01-02T00:53:15.9914293Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2026-01-02T00:53:15.9914807Z         695711f7bb847ea0da1935d4 test-acc-tf-s-3730062657613000804],
2026-01-02T00:53:15.9915227Z         BadRequestDetail: 
2026-01-02T00:53:15.9929734Z   
2026-01-02T00:53:15.9938050Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (2.07s)
```

- 2026-01-03 PASS 12 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 8 seconds
- 2026-01-06

### Error 2026-01-06T00:55:55+00:00
```
2026-01-06T00:55:55.1221131Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-06T00:55:55.1225023Z     resource_stream_connection_test.go:98: Creating execution project (1): test-acc-tf-p-5129356447223480009
2026-01-06T00:55:55.1226952Z     resource_stream_connection_test.go:98: Creating execution stream instance: test-acc-tf-s-2294986341271721538
2026-01-06T00:55:55.1244190Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-06T00:55:55.1275446Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-01-06T00:55:55.1276071Z     resource_stream_connection_test.go:99: Step 1/3 error: Error running apply: exit status 1
2026-01-06T00:55:55.1276501Z         
2026-01-06T00:55:55.1276793Z         Error: error fetching resource
2026-01-06T00:55:55.1277076Z         
2026-01-06T00:55:55.1277456Z           with data.mongodbatlas_stream_connection.test,
2026-01-06T00:55:55.1278132Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-01-06T00:55:55.1278722Z           12: data "mongodbatlas_stream_connection" "test" {
2026-01-06T00:55:55.1279034Z         
2026-01-06T00:55:55.1279952Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695c57ffa5e2ee8130f83b46/streams/test-acc-tf-s-2294986341271721538/connections/kafka-conn-plaintext
2026-01-06T00:55:55.1281089Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-06T00:55:55.1281724Z         Detail: Stream connection with name kafka-conn-plaintext for project
2026-01-06T00:55:55.1282354Z         695c57ffa5e2ee8130f83b46 and name test-acc-tf-s-2294986341271721538 not
2026-01-06T00:55:55.1282922Z         found. Reason: Not Found. Params: [kafka-conn-plaintext
2026-01-06T00:55:55.1283456Z         695c57ffa5e2ee8130f83b46 test-acc-tf-s-2294986341271721538],
2026-01-06T00:55:55.1283854Z         BadRequestDetail: 
2026-01-06T00:55:55.1298716Z    test_terraform_path=/home/runner/work/_temp/1ec31b99-013b-4028-870d-1901dcebf05d/terraform
2026-01-06T00:55:55.1308206Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (4.86s)
```

- 2026-01-07 PASS 10 seconds
- 2026-01-08 PASS 12 seconds

## QA Environment
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
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 7 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 10 seconds
  - PASS 9 seconds
