# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams | qa | flaky_500 | 30.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-26
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-27 PASS 2 seconds
- 2025-06-28 PASS 3 seconds
- 2025-06-29 PASS 2 seconds
- 2025-06-30 PASS 3 seconds
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