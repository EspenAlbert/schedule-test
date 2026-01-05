# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 5) FAIL(x 2)
Success rate: 71.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-05 01:00](#error-2026-01-05t0100200000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | dev | flaky_check | 6.10s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 7 seconds
- 2025-12-31 PASS 7 seconds
- 2026-01-01 PASS 8 seconds
- 2026-01-02 PASS 6 seconds
- 2026-01-03 PASS 8 seconds
- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T01:00:20+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2026-01-05T01:00:20.890000+00:00-TestAccStreamRSStreamConnection_kafkaOAuthBearer',confidence=1.0,ts_when='37 minutes ago')
CheckFailure for stream_connection.test at Step: 2 Checks: 2,5
```
2026-01-05T01:00:20.8909840Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-05T01:00:20.8927145Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-05T01:00:20.8951460Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-01-05T01:00:20.8953641Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2026-01-05T01:00:20.8956123Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (6.98s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-04 00:57](#error-2026-01-04t0057460000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | qa | 6.07s

### Timeline
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
