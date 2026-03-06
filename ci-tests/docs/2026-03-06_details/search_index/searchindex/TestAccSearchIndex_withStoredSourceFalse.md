# search_index/searchindex/TestAccSearchIndex_withStoredSourceFalse Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:03](#error-2026-02-24t0103370000) |  | dev | flaky_500 | 1.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 6 seconds
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 5 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 7 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12 PASS 7 seconds
- 2026-02-13 PASS 8 seconds
- 2026-02-14 PASS 7 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 8 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 8 seconds
- 2026-02-19 PASS 8 seconds
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 6 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 9 seconds
- 2026-02-24

### Error 2026-02-24T01:03:37+00:00
```
2026-02-24T01:03:37.6528880Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-02-24T01:03:37.6626956Z === CONT  TestAccSearchIndex_withStoredSourceFalse
2026-02-24T01:03:39.2653937Z === NAME  TestAccSearchIndex_withStoredSourceFalse
2026-02-24T01:03:39.2655337Z     resource_search_index_test.go:274: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:39.2656305Z         
2026-02-24T01:03:39.2657866Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:03:39.2659003Z         
2026-02-24T01:03:39.2659839Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:39.2661330Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:39.2662759Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:39.2663514Z         
2026-02-24T01:03:39.4085971Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (1.75s)
```

- 2026-02-25 PASS 7 seconds
- 2026-02-26 PASS 7 seconds
- 2026-02-27 PASS 7 seconds
- 2026-02-28 PASS 7 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 9 seconds
- 2026-03-03 PASS 7 seconds
- 2026-03-04 PASS 7 seconds
- 2026-03-05 PASS 6 seconds
- 2026-03-06 PASS 8 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 7 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 8 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 8 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 6 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 8 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
