# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams | qa | flaky_500 | 32.09s
[2025-07-27 00:53](#error-2025-07-27t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections | qa | flaky_500 | 80.05s

## Timeline
- 2025-06-30: MISSING
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
- 2025-07-25 PASS 13 seconds
- 2025-07-26 PASS 11 seconds
- 2025-07-27

### Error 2025-07-27T00:53:08+00:00
```
2025-07-27T00:53:08.7869426Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2025-07-27T00:53:08.7870769Z     resource_stream_connection_migration_test.go:12: Creating execution project: test-acc-tf-p-6880753484124270147
2025-07-27T00:53:08.7872668Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-2606522514647022798
2025-07-27T00:53:08.7900462Z === CONT  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-07-27T00:53:08.8027969Z === NAME  TestMigStreamRSStreamConnection_kafkaPlaintext
2025-07-27T00:53:08.8028744Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:53:08.8029223Z         
2025-07-27T00:53:08.8029489Z         Error: error creating resource
2025-07-27T00:53:08.8029756Z         
2025-07-27T00:53:08.8030085Z           with mongodbatlas_stream_connection.test,
2025-07-27T00:53:08.8030736Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-07-27T00:53:08.8031477Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-27T00:53:08.8031795Z         
2025-07-27T00:53:08.8032575Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbea884d723491e609/streams/test-acc-tf-s-2606522514647022798/connections
2025-07-27T00:53:08.8033469Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:53:08.8034067Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.8034467Z         BadRequestDetail: 
2025-07-27T00:53:08.8034815Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (80.54s)
```

- 2025-07-28 PASS 11 seconds
- 2025-07-29 PASS 9 seconds
- 2025-07-30 PASS 9 seconds