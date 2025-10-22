# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/sample_stream_solar | dev | 0.05s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar | qa | 0.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS a moment
- 2025-09-24 PASS a moment
- 2025-09-25 PASS a moment
- 2025-09-26 PASS a moment
- 2025-09-27 PASS a moment
- 2025-09-28 PASS a moment
- 2025-09-29
  - PASS a moment
  - PASS a moment
- 2025-09-30
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-10-01
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a second
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-10-02 PASS a moment
- 2025-10-03 PASS a moment
- 2025-10-04 PASS a moment
- 2025-10-05 PASS a moment
- 2025-10-06 PASS a moment
- 2025-10-07 PASS a moment
- 2025-10-08 PASS a moment
- 2025-10-09 PASS a moment
- 2025-10-10 PASS a moment
- 2025-10-11 PASS a moment
- 2025-10-12 PASS a moment
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3206906Z === RUN   TestAccStreamProcessor_createErrors
2025-10-13T01:24:12.3210403Z === CONT  TestAccStreamProcessor_createErrors
2025-10-13T01:24:12.3298226Z === NAME  TestAccStreamProcessor_createErrors
2025-10-13T01:24:12.3299314Z     resource_test.go:294: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-10-13T01:24:12.3299852Z         
2025-10-13T01:24:12.3300186Z         Error: error fetching resource
2025-10-13T01:24:12.3300491Z         
2025-10-13T01:24:12.3300943Z           with data.mongodbatlas_stream_connection.sample,
2025-10-13T01:24:12.3301738Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-10-13T01:24:12.3302478Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-10-13T01:24:12.3302838Z         
2025-10-13T01:24:12.3303893Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/sample_stream_solar
2025-10-13T01:24:12.3304917Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-13T01:24:12.3305640Z         Detail: Stream connection with name sample_stream_solar for project
2025-10-13T01:24:12.3306357Z         68ec47f2b8d3122c296501b7 and name test-acc-tf-s-6101778557580258383 not
2025-10-13T01:24:12.3306984Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-10-13T01:24:12.3307582Z         68ec47f2b8d3122c296501b7 test-acc-tf-s-6101778557580258383],
2025-10-13T01:24:12.3308028Z         BadRequestDetail: 
2025-10-13T01:24:12.3308568Z --- FAIL: TestAccStreamProcessor_createErrors (0.48s)
```

- 2025-10-14 PASS a second
- 2025-10-15 PASS a moment
- 2025-10-16 PASS a second
- 2025-10-17 PASS a moment
- 2025-10-18 PASS a moment
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.2125988Z === RUN   TestAccStreamProcessor_createErrors
2025-10-19T00:50:12.2127458Z === CONT  TestAccStreamProcessor_createErrors
2025-10-19T00:50:12.2165722Z === NAME  TestAccStreamProcessor_createErrors
2025-10-19T00:50:12.2166191Z     resource_test.go:294: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-10-19T00:50:12.2166293Z         
2025-10-19T00:50:12.2166578Z         Error: error fetching resource
2025-10-19T00:50:12.2166781Z         
2025-10-19T00:50:12.2167051Z           with data.mongodbatlas_stream_connection.sample,
2025-10-19T00:50:12.2167625Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-10-19T00:50:12.2167927Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-10-19T00:50:12.2168014Z         
2025-10-19T00:50:12.2168819Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar
2025-10-19T00:50:12.2169243Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2169564Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2169902Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2170179Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2170331Z         BadRequestDetail: 
2025-10-19T00:50:12.2170487Z --- FAIL: TestAccStreamProcessor_createErrors (0.56s)
```

- 2025-10-20
  - PASS a moment
  - PASS a moment
- 2025-10-21 PASS a moment
- 2025-10-22
  - PASS a moment
  - PASS a moment