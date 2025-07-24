# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections/sample_stream_solar | qa | 0.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS a second
  - PASS a second
- 2025-06-26
  - PASS a second
  - PASS a second
- 2025-06-27 PASS a second
- 2025-06-28 PASS 2 seconds
- 2025-06-29 PASS a second
- 2025-06-30 PASS 2 seconds
- 2025-07-01
  - PASS 2 seconds
  - PASS a second
  - PASS 2 seconds
  - PASS a second
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS a second
  - PASS a second
- 2025-07-02 PASS a second
- 2025-07-03 PASS a second
- 2025-07-04 PASS a second
- 2025-07-05 PASS a second
- 2025-07-06 PASS a second
- 2025-07-07 PASS a second
- 2025-07-08 PASS a second
- 2025-07-09 PASS a second
- 2025-07-10
  - PASS 2 seconds
  - PASS 6 seconds
- 2025-07-11 PASS a second
- 2025-07-12 PASS a second
- 2025-07-13 PASS a second
- 2025-07-14 PASS a second
- 2025-07-15 PASS a moment
- 2025-07-16 PASS a second
- 2025-07-17 PASS a moment
- 2025-07-18 PASS a second
- 2025-07-19 PASS a moment
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.7323756Z === RUN   TestAccStreamProcessor_createErrors
2025-07-20T00:53:03.7324964Z === CONT  TestAccStreamProcessor_createErrors
2025-07-20T00:53:03.7391293Z === NAME  TestAccStreamProcessor_createErrors
2025-07-20T00:53:03.7392026Z     resource_test.go:294: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-07-20T00:53:03.7392604Z         
2025-07-20T00:53:03.7392872Z         Error: error fetching resource
2025-07-20T00:53:03.7393223Z         
2025-07-20T00:53:03.7393580Z           with data.mongodbatlas_stream_connection.sample,
2025-07-20T00:53:03.7394316Z           on terraform_plugin_test.tf line 23, in data "mongodbatlas_stream_connection" "sample":
2025-07-20T00:53:03.7394994Z           23:             data "mongodbatlas_stream_connection" "sample" {
2025-07-20T00:53:03.7395515Z         
2025-07-20T00:53:03.7396806Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/connections/sample_stream_solar
2025-07-20T00:53:03.7397845Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7398531Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7399247Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7399902Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7400301Z         BadRequestDetail: 
2025-07-20T00:53:03.7400691Z --- FAIL: TestAccStreamProcessor_createErrors (0.52s)
```

- 2025-07-21 PASS a moment
- 2025-07-22 PASS a second
- 2025-07-23
  - PASS a moment
  - PASS a moment
- 2025-07-24 PASS a moment