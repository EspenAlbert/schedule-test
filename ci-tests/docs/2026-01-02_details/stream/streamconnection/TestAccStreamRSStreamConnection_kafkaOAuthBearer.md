# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-05 02:17](#error-2025-12-05t0217270000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | dev | 5.01s
[2025-12-09 00:57](#error-2025-12-09t0057150000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | dev | 6.08s
[2025-12-26 00:56](#error-2025-12-26t0056260000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | dev | 7.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 9 seconds
- 2025-12-05
  - FAIL 5 seconds

### Error 2025-12-05T02:17:27+00:00
```
2025-12-05T02:17:27.7809486Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-05T02:17:27.7820307Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-05T02:17:27.7838882Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-05T02:17:27.7840052Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-12-05T02:17:27.7841848Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (5.06s)
```

  - PASS 10 seconds
- 2025-12-06 PASS 7 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 8 seconds
- 2025-12-09

### Error 2025-12-09T00:57:15+00:00
```
2025-12-09T00:57:15.0627370Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-09T00:57:15.0646863Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-09T00:57:15.0666839Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-09T00:57:15.0668712Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-12-09T00:57:15.0670351Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (6.85s)
```

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

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-07 00:54](#error-2025-12-07t0054350000) | CheckFailure for stream_connection.test at Step: 2 Checks: 2,5 | qa | 8.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07

### Error 2025-12-07T00:54:35+00:00
```
2025-12-07T00:54:35.1712768Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-07T00:54:35.1724732Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-07T00:54:35.1738714Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2025-12-07T00:54:35.1739935Z     resource_stream_connection_test.go:215: Step 2/3 error: Check failed: Check 2/3 error: Check 5/14 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2025-12-07T00:54:35.1741509Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (8.09s)
```

- 2025-12-08: MISSING
- 2025-12-09 PASS 10 seconds
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
