# search_index/searchindex/TestAccSearchIndex_withStoredSourceExclude Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 3.05s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 6 seconds
- 2025-10-17 PASS 9 seconds
- 2025-10-18 PASS 6 seconds
- 2025-10-19 PASS 5 seconds
- 2025-10-20
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-23 PASS 6 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7043210Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2025-10-27T01:17:44.7084627Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2025-10-27T01:17:48.1535462Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2025-10-27T01:17:48.1536500Z     resource_search_index_test.go:186: Step 1/1 error: Error running apply: exit status 1
2025-10-27T01:17:48.1537261Z         
2025-10-27T01:17:48.1541127Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.1543604Z         
2025-10-27T01:17:48.1544203Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.1545312Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.1546325Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.1546846Z         
2025-10-27T01:17:48.2042378Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.50s)
```

- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 7 seconds
- 2025-10-31 PASS 7 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 6 seconds
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 6 seconds
- 2025-11-05
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-11-06 PASS 5 seconds
- 2025-11-07 PASS 8 seconds
- 2025-11-08 PASS 5 seconds
- 2025-11-09 PASS 7 seconds
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 5 seconds
- 2025-11-12 PASS 6 seconds
- 2025-11-13
  - PASS 6 seconds
  - PASS 6 seconds