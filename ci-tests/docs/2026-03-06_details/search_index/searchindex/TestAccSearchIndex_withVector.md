# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:50](#error-2026-02-24t0050170000) |  | dev | flaky_500 | 1.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 8 seconds
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 7 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 8 seconds
- 2026-02-12 PASS 7 seconds
- 2026-02-13 PASS 6 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1604673Z === RUN   TestAccSearchIndex_withVector
2026-02-24T01:03:37.6537723Z === CONT  TestAccSearchIndex_withVector
2026-02-24T01:03:39.3158051Z === NAME  TestAccSearchIndex_withVector
2026-02-24T01:03:39.3159239Z     resource_search_index_test.go:193: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:39.3160547Z         
2026-02-24T01:03:39.3161921Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:03:39.3198239Z         
2026-02-24T01:03:39.3198954Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:39.3210679Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:39.3212070Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:39.3212835Z         
2026-02-24T01:03:39.4395805Z --- FAIL: TestAccSearchIndex_withVector (1.79s)
```

- 2026-02-25 PASS 8 seconds
- 2026-02-26 PASS 7 seconds
- 2026-02-27 PASS 9 seconds
- 2026-02-28 PASS 7 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 7 seconds
- 2026-03-03 PASS 7 seconds
- 2026-03-04 PASS 6 seconds
- 2026-03-05 PASS 7 seconds
- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 8 seconds
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
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 9 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 6 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
