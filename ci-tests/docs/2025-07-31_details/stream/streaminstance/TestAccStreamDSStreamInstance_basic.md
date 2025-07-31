# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-01 to 2025-07-31 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-27 00:53](#error-2025-07-27t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573dbef1f7377717a8b53/streams | qa | flaky_500 | 32.02s

## Timeline
- 2025-07-01 PASS 6 seconds
- 2025-07-02 PASS 4 seconds
- 2025-07-03 PASS 5 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 5 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 4 seconds
- 2025-07-10
  - PASS 7 seconds
  - PASS 35 seconds
- 2025-07-11 PASS 5 seconds
- 2025-07-12 PASS 4 seconds
- 2025-07-13 PASS 4 seconds
- 2025-07-14 PASS 5 seconds
- 2025-07-15 PASS 4 seconds
- 2025-07-16 PASS 5 seconds
- 2025-07-17 PASS 5 seconds
- 2025-07-18 PASS 5 seconds
- 2025-07-19 PASS 4 seconds
- 2025-07-20 PASS 33 seconds
- 2025-07-21 PASS 5 seconds
- 2025-07-22 PASS 4 seconds
- 2025-07-23
  - PASS 4 seconds
  - PASS 6 seconds
- 2025-07-24 PASS 4 seconds
- 2025-07-25 PASS 5 seconds
- 2025-07-26 PASS 5 seconds
- 2025-07-27

### Error 2025-07-27T00:53:08+00:00
```
2025-07-27T00:53:08.8094465Z === RUN   TestAccStreamDSStreamInstance_basic
2025-07-27T00:53:08.8095084Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-6196834784676859698
2025-07-27T00:53:08.8099427Z === CONT  TestAccStreamDSStreamInstance_basic
2025-07-27T00:53:08.8113392Z === NAME  TestAccStreamDSStreamInstance_basic
2025-07-27T00:53:08.8113941Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-07-27T00:53:08.8114370Z         
2025-07-27T00:53:08.8114632Z         Error: error creating resource
2025-07-27T00:53:08.8115012Z         
2025-07-27T00:53:08.8115327Z           with mongodbatlas_stream_instance.test,
2025-07-27T00:53:08.8115971Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-07-27T00:53:08.8116562Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-27T00:53:08.8116871Z         
2025-07-27T00:53:08.8117363Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbef1f7377717a8b53/streams
2025-07-27T00:53:08.8118053Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:53:08.8118642Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.8119032Z         BadRequestDetail: 
2025-07-27T00:53:08.8119346Z --- FAIL: TestAccStreamDSStreamInstance_basic (32.17s)
```

- 2025-07-28 PASS 4 seconds
- 2025-07-29 PASS 4 seconds
- 2025-07-30 PASS 4 seconds
- 2025-07-31 PASS 6 seconds