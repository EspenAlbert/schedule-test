# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-5637826643844833644 | qa | flaky_500 | 32.03s

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
2025-07-06T00:48:43.0020868Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0022249Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0051981Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0052671Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0053158Z         
2025-07-06T00:48:43.0053435Z         Error: error during resource delete
2025-07-06T00:48:43.0053701Z         
2025-07-06T00:48:43.0054359Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-5637826643844833644
2025-07-06T00:48:43.0055238Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0055818Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0056222Z         BadRequestDetail: 
2025-07-06T00:48:43.0056591Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (32.35s)
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
- 2025-07-20 PASS 30 seconds
- 2025-07-21 PASS 3 seconds
- 2025-07-22 PASS 2 seconds
- 2025-07-23
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-24 PASS 2 seconds
- 2025-07-25 PASS 3 seconds
- 2025-07-26 PASS 3 seconds
- 2025-07-27 PASS 31 seconds
- 2025-07-28 PASS 2 seconds
- 2025-07-29 PASS 2 seconds
- 2025-07-30 PASS 2 seconds