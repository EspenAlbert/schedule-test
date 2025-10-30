# search_index/searchindex/TestAccSearchIndex_withStoredSourceExclude Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 4.02s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 3.05s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-10-02 PASS 7 seconds
- 2025-10-03 PASS 7 seconds
- 2025-10-04 PASS 7 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 5 seconds
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10 PASS 6 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9818473Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2025-10-12T01:07:35.9824018Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2025-10-12T01:07:40.1732489Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2025-10-12T01:07:40.1733129Z     resource_search_index_test.go:186: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:07:40.1733623Z         
2025-10-12T01:07:40.1735787Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:40.1737251Z         
2025-10-12T01:07:40.1737577Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:40.1738189Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:40.1738750Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:40.1739053Z         
2025-10-12T01:07:40.2213926Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (4.24s)
```

- 2025-10-13 PASS 7 seconds
- 2025-10-14 PASS 8 seconds
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