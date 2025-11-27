# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-860311008190618911 | dev | flaky_500 | 2.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 3 seconds
- 2025-10-30 PASS 2 seconds
- 2025-10-31 PASS 3 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 2 seconds
- 2025-11-04 PASS 2 seconds
- 2025-11-05
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1134208Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-11-06T00:51:58.1136867Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-11-06T00:51:58.1202183Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-11-06T00:51:58.1202902Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1203405Z         
2025-11-06T00:51:58.1203713Z         Error: error during resource delete
2025-11-06T00:51:58.1203997Z         
2025-11-06T00:51:58.1204829Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-860311008190618911
2025-11-06T00:51:58.1205629Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1206247Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1206674Z         BadRequestDetail: 
2025-11-06T00:51:58.1212013Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (2.18s)
```

- 2025-11-07 PASS 2 seconds
- 2025-11-08 PASS 2 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 3 seconds
- 2025-11-11 PASS 2 seconds
- 2025-11-12 PASS 3 seconds
- 2025-11-13 PASS 2 seconds
- 2025-11-14 PASS 3 seconds
- 2025-11-15 PASS 2 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 3 seconds
- 2025-11-18 PASS 3 seconds
- 2025-11-19 PASS 2 seconds
- 2025-11-20 PASS 2 seconds
- 2025-11-21 PASS 3 seconds
- 2025-11-22 PASS 2 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 3 seconds
- 2025-11-25 PASS 2 seconds
- 2025-11-26 PASS 2 seconds
- 2025-11-27 PASS 2 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 2 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 2 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 3 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 2 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
