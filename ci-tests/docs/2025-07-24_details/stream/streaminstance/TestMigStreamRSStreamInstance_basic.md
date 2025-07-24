# stream/streaminstance/TestMigStreamRSStreamInstance_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68ef/streams | qa | flaky_500 | 32.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-26
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-27 PASS 5 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 5 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 5 seconds
- 2025-07-07 PASS 4 seconds
- 2025-07-08 PASS 5 seconds
- 2025-07-09 PASS 4 seconds
- 2025-07-10
  - PASS 7 seconds
  - FAIL 32 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3754272Z === RUN   TestMigStreamRSStreamInstance_basic
2025-07-10T13:24:52.3756719Z === CONT  TestMigStreamRSStreamInstance_basic
2025-07-10T13:24:52.3796679Z === NAME  TestMigStreamRSStreamInstance_basic
2025-07-10T13:24:52.3797394Z     resource_stream_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3797839Z         
2025-07-10T13:24:52.3798226Z         Error: error creating resource
2025-07-10T13:24:52.3798489Z         
2025-07-10T13:24:52.3798887Z           with mongodbatlas_stream_instance.test,
2025-07-10T13:24:52.3799596Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_stream_instance" "test":
2025-07-10T13:24:52.3800281Z           14: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-10T13:24:52.3801116Z         
2025-07-10T13:24:52.3801865Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68ef/streams
2025-07-10T13:24:52.3802679Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3803554Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3804058Z         BadRequestDetail: 
2025-07-10T13:24:52.3804367Z --- FAIL: TestMigStreamRSStreamInstance_basic (32.88s)
```

- 2025-07-11 PASS 5 seconds
- 2025-07-12 PASS 5 seconds
- 2025-07-13 PASS 5 seconds
- 2025-07-14 PASS 5 seconds
- 2025-07-15 PASS 5 seconds
- 2025-07-16 PASS 6 seconds
- 2025-07-17 PASS 5 seconds
- 2025-07-18 PASS 6 seconds
- 2025-07-19 PASS 5 seconds
- 2025-07-20 PASS 32 seconds
- 2025-07-21 PASS 6 seconds
- 2025-07-22 PASS 6 seconds
- 2025-07-23
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-07-24 PASS 5 seconds