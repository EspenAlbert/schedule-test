# autogen/streaminstanceapi/TestAccStreamInstanceAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2025-06-26 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 01:10](#error-2025-06-29t0110040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089ef56291349dce6e1cb/streams/test-acc-tf-3162738445947661246 | qa | flaky_500 | 57.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25: MISSING
- 2025-06-26 PASS 6 seconds
- 2025-06-27: MISSING
- 2025-06-28 PASS 6 seconds
- 2025-06-29

### Error 2025-06-29T01:10:04+00:00
```
2025-06-29T01:10:04.0858629Z === RUN   TestAccStreamInstanceAPI_basic
2025-06-29T01:10:04.0859383Z     resource_test.go:21: Creating execution project: test-acc-tf-p-251722769283288324
2025-06-29T01:10:04.0860423Z === CONT  TestAccStreamInstanceAPI_basic
2025-06-29T01:10:04.0877582Z   
2025-06-29T01:10:04.0878276Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T01:10:04.0886952Z         
2025-06-29T01:10:04.0887465Z         Error: Error calling API in Delete
2025-06-29T01:10:04.0887904Z         
2025-06-29T01:10:04.0888696Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089ef56291349dce6e1cb/streams/test-acc-tf-3162738445947661246
2025-06-29T01:10:04.0889486Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-29T01:10:04.0890085Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T01:10:04.0890491Z         BadRequestDetail: 
2025-06-29T01:10:04.0890783Z --- FAIL: TestAccStreamInstanceAPI_basic (57.92s)
```

- 2025-06-30 PASS 3 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-07-02 PASS 3 seconds
- 2025-07-03 PASS 4 seconds
- 2025-07-04 PASS 4 seconds
- 2025-07-05 PASS 3 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 3 seconds
- 2025-07-09 PASS 3 seconds
- 2025-07-10
  - PASS 2 seconds
  - PASS 33 seconds
- 2025-07-11 PASS 4 seconds
- 2025-07-12 PASS 4 seconds
- 2025-07-13 PASS 4 seconds
- 2025-07-14 PASS 3 seconds
- 2025-07-15 PASS 4 seconds
- 2025-07-16 PASS 4 seconds
- 2025-07-17 PASS 5 seconds
- 2025-07-18 PASS 3 seconds
- 2025-07-19 PASS 3 seconds
- 2025-07-20 PASS 33 seconds
- 2025-07-21 PASS 3 seconds
- 2025-07-22 PASS 4 seconds
- 2025-07-23
  - PASS 3 seconds
  - PASS 33 seconds
- 2025-07-24 PASS 3 seconds