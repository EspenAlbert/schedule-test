# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar | qa | 0.06s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar | dev | 0.05s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-23 PASS a moment
- 2025-10-24 PASS a moment
- 2025-10-25 PASS a moment
- 2025-10-26 PASS a moment
- 2025-10-27 PASS a moment
- 2025-10-28 PASS a moment
- 2025-10-29 PASS a moment
- 2025-10-30 PASS a moment
- 2025-10-31 PASS a second
- 2025-11-01: MISSING
- 2025-11-02 PASS a moment
- 2025-11-03 PASS a moment
- 2025-11-04 PASS a moment
- 2025-11-05
  - PASS a moment
  - PASS a moment
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1555071Z === RUN   TestAccStreamProcessor_createErrors
2025-11-06T00:51:58.1558060Z === CONT  TestAccStreamProcessor_createErrors
2025-11-06T00:51:58.1625151Z === NAME  TestAccStreamProcessor_createErrors
2025-11-06T00:51:58.1625615Z     resource_test.go:311: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-11-06T00:51:58.1625717Z         
2025-11-06T00:51:58.1625898Z         Error: error fetching resource
2025-11-06T00:51:58.1626002Z         
2025-11-06T00:51:58.1626267Z           with data.mongodbatlas_stream_connection.sample,
2025-11-06T00:51:58.1626712Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-11-06T00:51:58.1627025Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-11-06T00:51:58.1627120Z         
2025-11-06T00:51:58.1627889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar
2025-11-06T00:51:58.1628238Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-06T00:51:58.1628570Z         Detail: Stream connection with name sample_stream_solar for project
2025-11-06T00:51:58.1628911Z         690beb6db3b40e65d4dd6ef5 and name test-acc-tf-s-5095699402994875159 not
2025-11-06T00:51:58.1629178Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-11-06T00:51:58.1629469Z         690beb6db3b40e65d4dd6ef5 test-acc-tf-s-5095699402994875159],
2025-11-06T00:51:58.1629616Z         BadRequestDetail: 
2025-11-06T00:51:58.1629777Z --- FAIL: TestAccStreamProcessor_createErrors (0.51s)
```

- 2025-11-07 PASS a moment
- 2025-11-08 PASS a moment
- 2025-11-09 PASS a moment
- 2025-11-10 PASS a moment
- 2025-11-11 PASS a moment
- 2025-11-12 PASS a moment
- 2025-11-13
  - PASS a moment
  - PASS a moment