# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateSearchType Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-22 00:50](#error-2025-11-22t0050460000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/692103494aaa8d3932323d58/clusters/test-acc-tf-c-5088840315499119094/search/indexes | dev | 3.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 9 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-11-06 PASS 7 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 7 seconds
- 2025-11-11 PASS 7 seconds
- 2025-11-12 PASS 9 seconds
- 2025-11-13 PASS 9 seconds
- 2025-11-14 PASS 9 seconds
- 2025-11-15 PASS 8 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 8 seconds
- 2025-11-18 PASS 9 seconds
- 2025-11-19 PASS 10 seconds
- 2025-11-20 PASS 9 seconds
- 2025-11-21 PASS 12 seconds
- 2025-11-22

### Error 2025-11-22T00:50:46+00:00
```
2025-11-22T00:50:46.1638419Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-11-22T00:50:46.1820729Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-11-22T00:50:49.6138980Z   
2025-11-22T00:50:49.9577404Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-11-22T00:50:49.9578533Z     resource_search_index_test.go:242: Step 1/2 error: Error running apply: exit status 1
2025-11-22T00:50:49.9579192Z         
2025-11-22T00:50:49.9582868Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/692103494aaa8d3932323d58/clusters/test-acc-tf-c-5088840315499119094/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-11-22T00:50:49.9585287Z         
2025-11-22T00:50:49.9585858Z           with mongodbatlas_search_index.test,
2025-11-22T00:50:49.9586937Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-11-22T00:50:49.9588031Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-11-22T00:50:49.9588883Z         
2025-11-22T00:50:50.0132909Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (3.84s)
```

- 2025-11-23: MISSING
- 2025-11-24 PASS 10 seconds
- 2025-11-25 PASS 8 seconds
- 2025-11-26 PASS 10 seconds
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
- 2025-11-09 PASS 8 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 8 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 9 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 11 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
