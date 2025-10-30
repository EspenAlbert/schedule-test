# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev | 301.09s

## Timeline
- 2025-09-30 PASS 6 seconds
- 2025-10-01
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 4 seconds
- 2025-10-03 PASS 4 seconds
- 2025-10-04 PASS 6 seconds
- 2025-10-05 PASS 6 seconds
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 4 seconds
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 5 seconds
- 2025-10-10 PASS 6 seconds
- 2025-10-11 PASS 4 seconds
- 2025-10-12 PASS 17 seconds
- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5432412Z === RUN   TestAccStreamRSStreamConnection_sample
2025-10-13T01:00:44.5438459Z === CONT  TestAccStreamRSStreamConnection_sample
2025-10-13T01:00:44.5481625Z === NAME  TestAccStreamRSStreamConnection_sample
2025-10-13T01:00:44.5482255Z     resource_stream_connection_test.go:221: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:00:44.5482700Z         
2025-10-13T01:00:44.5483014Z         Error: error fetching results
2025-10-13T01:00:44.5483306Z         
2025-10-13T01:00:44.5483820Z           with data.mongodbatlas_stream_connections.test,
2025-10-13T01:00:44.5484591Z           on terraform_plugin_test.tf line 18, in data "mongodbatlas_stream_connections" "test":
2025-10-13T01:00:44.5485248Z           18: data "mongodbatlas_stream_connections" "test" {
2025-10-13T01:00:44.5485567Z         
2025-10-13T01:00:44.5486122Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5486622Z --- FAIL: TestAccStreamRSStreamConnection_sample (301.94s)
```

- 2025-10-14 PASS 7 seconds
- 2025-10-15 PASS 4 seconds
- 2025-10-16 PASS 7 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 5 seconds
- 2025-10-19 PASS 6 seconds
- 2025-10-20
  - PASS 6 seconds
  - PASS 4 seconds
- 2025-10-21 PASS 5 seconds
- 2025-10-22
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-23 PASS 5 seconds
- 2025-10-24 PASS 6 seconds
- 2025-10-25 PASS 4 seconds
- 2025-10-26 PASS 5 seconds
- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 6 seconds
- 2025-10-30 PASS 5 seconds