# search_index/searchindex/TestAccSearchIndex_updatedToEmptyAnalyzers Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-22 00:50](#error-2025-11-22t0050460000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/692103494aaa8d3932323d58/clusters/test-acc-tf-c-5088840315499119094/search/indexes | dev | 3.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 8 seconds
- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-11-06 PASS 8 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 9 seconds
- 2025-11-11 PASS 8 seconds
- 2025-11-12 PASS 9 seconds
- 2025-11-13 PASS 8 seconds
- 2025-11-14 PASS 11 seconds
- 2025-11-15 PASS 9 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 9 seconds
- 2025-11-18 PASS 8 seconds
- 2025-11-19 PASS 10 seconds
- 2025-11-20 PASS 9 seconds
- 2025-11-21 PASS 11 seconds
- 2025-11-22

### Error 2025-11-22T00:50:46+00:00
```
2025-11-22T00:50:46.1628955Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2025-11-22T00:50:46.1817564Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-11-22T00:50:49.9237082Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-11-22T00:50:49.9239153Z     resource_search_index_test.go:148: Step 1/3 error: Error running apply: exit status 1
2025-11-22T00:50:49.9239900Z         
2025-11-22T00:50:49.9243532Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/692103494aaa8d3932323d58/clusters/test-acc-tf-c-5088840315499119094/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-11-22T00:50:49.9246272Z         
2025-11-22T00:50:49.9246839Z           with mongodbatlas_search_index.test,
2025-11-22T00:50:49.9247964Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-11-22T00:50:49.9249168Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-11-22T00:50:49.9249676Z         
2025-11-22T00:50:49.9853957Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (3.81s)
```

- 2025-11-23: MISSING
- 2025-11-24 PASS 10 seconds
- 2025-11-25 PASS 9 seconds
- 2025-11-26 PASS 11 seconds
- 2025-11-27 PASS 9 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 9 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 10 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 10 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 9 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
