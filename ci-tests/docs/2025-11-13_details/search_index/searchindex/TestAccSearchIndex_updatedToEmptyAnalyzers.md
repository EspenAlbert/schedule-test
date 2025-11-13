# search_index/searchindex/TestAccSearchIndex_updatedToEmptyAnalyzers Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 5.02s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 12 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19 PASS 9 seconds
- 2025-10-20
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-10-21 PASS 11 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 9 seconds
- 2025-10-24 PASS 10 seconds
- 2025-10-25 PASS 9 seconds
- 2025-10-26 PASS 9 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7034952Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2025-10-27T01:17:44.7088014Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-10-27T01:17:49.8400612Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-10-27T01:17:49.8401287Z     resource_search_index_test.go:100: Step 1/3 error: Error running apply: exit status 1
2025-10-27T01:17:49.8401690Z         
2025-10-27T01:17:49.8403988Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:49.8405415Z         
2025-10-27T01:17:49.8405726Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:49.8406340Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:49.8407129Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:49.8407575Z         
2025-10-27T01:17:49.8826965Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (5.18s)
```

- 2025-10-28 PASS 8 seconds
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 8 seconds
- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-11-06 PASS 8 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09 PASS 9 seconds
- 2025-11-10 PASS 9 seconds
- 2025-11-11 PASS 8 seconds
- 2025-11-12 PASS 9 seconds
- 2025-11-13
  - PASS 8 seconds
  - PASS 10 seconds