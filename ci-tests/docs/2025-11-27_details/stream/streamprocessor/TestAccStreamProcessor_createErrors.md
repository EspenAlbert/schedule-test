# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar | dev | 0.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS a moment
- 2025-10-30 PASS a moment
- 2025-10-31 PASS a second
- 2025-11-01: MISSING
- 2025-11-02: MISSING
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
- 2025-11-09: MISSING
- 2025-11-10 PASS a moment
- 2025-11-11 PASS a moment
- 2025-11-12 PASS a moment
- 2025-11-13 PASS a moment
- 2025-11-14 PASS a moment
- 2025-11-15 PASS a moment
- 2025-11-16: MISSING
- 2025-11-17 PASS a moment
- 2025-11-18 PASS a moment
- 2025-11-19 PASS a moment
- 2025-11-20 PASS a moment
- 2025-11-21 PASS a moment
- 2025-11-22 PASS a moment
- 2025-11-23: MISSING
- 2025-11-24 PASS a moment
- 2025-11-25 PASS a second
- 2025-11-26 PASS a moment
- 2025-11-27 PASS a moment

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS a moment
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS a moment
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS a moment
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS a moment
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS a moment
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
