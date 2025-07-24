# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams | qa | flaky_500 | 32.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-26
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 10 seconds
- 2025-06-29 PASS 9 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 11 seconds
  - FAIL 32 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3330505Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-07-10T13:24:52.3341033Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-07-10T13:24:52.3544319Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-07-10T13:24:52.3545053Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3545496Z         
2025-07-10T13:24:52.3545769Z         Error: error creating resource
2025-07-10T13:24:52.3546028Z         
2025-07-10T13:24:52.3546353Z           with mongodbatlas_stream_instance.test,
2025-07-10T13:24:52.3546999Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_stream_instance" "test":
2025-07-10T13:24:52.3547584Z           15: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-10T13:24:52.3547889Z         
2025-07-10T13:24:52.3548394Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams
2025-07-10T13:24:52.3549067Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3549768Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3550147Z         BadRequestDetail: 
2025-07-10T13:24:52.3550491Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (32.88s)
```

- 2025-07-11 PASS 9 seconds
- 2025-07-12 PASS 8 seconds
- 2025-07-13 PASS 17 seconds
- 2025-07-14 PASS 10 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 12 seconds
- 2025-07-17 PASS 10 seconds
- 2025-07-18 PASS 15 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20 PASS a minute
- 2025-07-21 PASS 13 seconds
- 2025-07-22 PASS 12 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 11 seconds
- 2025-07-24 PASS 11 seconds