# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-382839235682383328 | dev | flaky_500 | 5.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 6 seconds
- 2025-10-30 PASS 6 seconds
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 5 seconds
- 2025-11-04 PASS 5 seconds
- 2025-11-05
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1112522Z === RUN   TestAccStreamDSStreamInstance_basic
2025-11-06T00:51:58.1113142Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-6779998157476133312
2025-11-06T00:51:58.1135649Z === CONT  TestAccStreamDSStreamInstance_basic
2025-11-06T00:51:58.1222820Z === NAME  TestAccStreamDSStreamInstance_basic
2025-11-06T00:51:58.1223501Z     data_source_stream_instance_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-06T00:51:58.1224012Z         
2025-11-06T00:51:58.1224308Z         Error: error during resource delete
2025-11-06T00:51:58.1224590Z         
2025-11-06T00:51:58.1225269Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6cb0a5510b327cb9ec/streams/test-acc-tf-382839235682383328
2025-11-06T00:51:58.1226042Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-11-06T00:51:58.1226652Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1227069Z         BadRequestDetail: 
2025-11-06T00:51:58.1227380Z --- FAIL: TestAccStreamDSStreamInstance_basic (5.93s)
```

- 2025-11-07 PASS 5 seconds
- 2025-11-08 PASS 5 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 5 seconds
- 2025-11-11 PASS 4 seconds
- 2025-11-12 PASS 6 seconds
- 2025-11-13 PASS 7 seconds
- 2025-11-14 PASS 7 seconds
- 2025-11-15 PASS 4 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 7 seconds
- 2025-11-18 PASS 5 seconds
- 2025-11-19 PASS 5 seconds
- 2025-11-20 PASS 6 seconds
- 2025-11-21 PASS 5 seconds
- 2025-11-22 PASS 5 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 6 seconds
- 2025-11-25 PASS 6 seconds
- 2025-11-26 PASS 4 seconds
- 2025-11-27 PASS 5 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 4 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 4 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 5 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 6 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 6 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
