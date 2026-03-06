# search_index/searchindex/TestAccSearchIndex_withNumPartitions Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:50](#error-2026-02-24t0050170000) |  | dev | flaky_500 | 800.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 12 minutes
- 2026-02-06 PASS 13 minutes
- 2026-02-07 PASS 11 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 12 minutes
- 2026-02-10 PASS 12 minutes
- 2026-02-11 PASS 13 minutes
- 2026-02-12 PASS 13 minutes
- 2026-02-13 PASS 13 minutes
- 2026-02-14 PASS 14 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 13 minutes
- 2026-02-17 PASS 12 minutes
- 2026-02-18 PASS 14 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 14 minutes
- 2026-02-21 PASS 14 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 13 minutes
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1605275Z === RUN   TestAccSearchIndex_withNumPartitions
2026-02-24T01:00:45.5918412Z   
2026-02-24T01:00:45.5919275Z     resource_search_index_test.go:201: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:00:45.5920226Z         
2026-02-24T01:00:45.5920914Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:00:45.5921459Z         
2026-02-24T01:00:45.5922001Z           with mongodbatlas_search_index.test,
2026-02-24T01:00:45.5922840Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:00:45.5923467Z           24: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:00:45.5923785Z         
2026-02-24T01:03:37.3232259Z --- FAIL: TestAccSearchIndex_withNumPartitions (800.16s)
```

- 2026-02-25 PASS 13 minutes
- 2026-02-26 PASS 18 minutes
- 2026-02-27 PASS 12 minutes
- 2026-02-28 PASS 13 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 13 minutes
- 2026-03-03 PASS 13 minutes
- 2026-03-04 PASS 13 minutes
- 2026-03-05 PASS 21 minutes
- 2026-03-06 PASS 13 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 10 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 16 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 13 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 18 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 12 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
