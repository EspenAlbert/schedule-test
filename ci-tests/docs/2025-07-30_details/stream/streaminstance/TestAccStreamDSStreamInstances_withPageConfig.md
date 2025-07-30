# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams | qa | flaky_500 | 30.09s
[2025-07-27 00:53](#error-2025-07-27t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573dbef1f7377717a8b53/streams | qa | flaky_500 | 30.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS 2 seconds
- 2025-07-04 PASS 2 seconds
- 2025-07-05 PASS 2 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0018854Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0022622Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0035644Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0036234Z     data_source_stream_instances_test.go:50: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:48:43.0036647Z         
2025-07-06T00:48:43.0036918Z         Error: error creating resource
2025-07-06T00:48:43.0037188Z         
2025-07-06T00:48:43.0037740Z           with mongodbatlas_stream_instance.test,
2025-07-06T00:48:43.0038363Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-07-06T00:48:43.0038936Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-06T00:48:43.0039243Z         
2025-07-06T00:48:43.0039729Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams
2025-07-06T00:48:43.0040388Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0040959Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0041343Z         BadRequestDetail: 
2025-07-06T00:48:43.0041673Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (30.86s)
```

- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS 2 seconds
- 2025-07-10
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-07-11 PASS 2 seconds
- 2025-07-12 PASS 2 seconds
- 2025-07-13 PASS 2 seconds
- 2025-07-14 PASS 2 seconds
- 2025-07-15 PASS 2 seconds
- 2025-07-16 PASS 3 seconds
- 2025-07-17 PASS 2 seconds
- 2025-07-18 PASS 3 seconds
- 2025-07-19 PASS 2 seconds
- 2025-07-20 PASS 31 seconds
- 2025-07-21 PASS 3 seconds
- 2025-07-22 PASS 2 seconds
- 2025-07-23
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-07-24 PASS 2 seconds
- 2025-07-25 PASS 3 seconds
- 2025-07-26 PASS 2 seconds
- 2025-07-27

### Error 2025-07-27T00:53:08+00:00
```
2025-07-27T00:53:08.8096622Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-27T00:53:08.8101386Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-27T00:53:08.8133487Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-07-27T00:53:08.8134104Z     data_source_stream_instances_test.go:50: Step 1/1 error: Error running apply: exit status 1
2025-07-27T00:53:08.8134641Z         
2025-07-27T00:53:08.8134921Z         Error: error creating resource
2025-07-27T00:53:08.8135295Z         
2025-07-27T00:53:08.8135610Z           with mongodbatlas_stream_instance.test,
2025-07-27T00:53:08.8136371Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-07-27T00:53:08.8137087Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-27T00:53:08.8137419Z         
2025-07-27T00:53:08.8138019Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573dbef1f7377717a8b53/streams
2025-07-27T00:53:08.8138822Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:53:08.8139530Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:53:08.8139967Z         BadRequestDetail: 
2025-07-27T00:53:08.8140386Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (30.89s)
```

- 2025-07-28 PASS 2 seconds
- 2025-07-29 PASS 2 seconds
- 2025-07-30 PASS 2 seconds