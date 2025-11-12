# search_index/searchindex/TestAccSearchIndex_withStoredSourceTrue Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 3.03s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 3.04s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 8 seconds
- 2025-10-05 PASS 6 seconds
- 2025-10-06 PASS 7 seconds
- 2025-10-07 PASS 6 seconds
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9815988Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-10-12T01:07:35.9828090Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2025-10-12T01:07:39.2443977Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2025-10-12T01:07:39.2444663Z     resource_search_index_test.go:178: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:07:39.2445083Z         
2025-10-12T01:07:39.2447328Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.2448646Z         
2025-10-12T01:07:39.2448956Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.2449565Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.2450398Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.2450712Z         
2025-10-12T01:07:39.2946238Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (3.31s)
```

- 2025-10-13 PASS 8 seconds
- 2025-10-14 PASS 8 seconds
- 2025-10-15 PASS 6 seconds
- 2025-10-16 PASS 7 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 6 seconds
- 2025-10-19 PASS 7 seconds
- 2025-10-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-10-23 PASS 6 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 6 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7040724Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-10-27T01:17:44.7088604Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2025-10-27T01:17:48.0071801Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2025-10-27T01:17:48.0072655Z     resource_search_index_test.go:178: Step 1/1 error: Error running apply: exit status 1
2025-10-27T01:17:48.0073269Z         
2025-10-27T01:17:48.0076094Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.0077450Z         
2025-10-27T01:17:48.0077762Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.0078367Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.0078933Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.0079236Z         
2025-10-27T01:17:48.0557559Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (3.35s)
```

- 2025-10-28 PASS 7 seconds
- 2025-10-29 PASS 5 seconds
- 2025-10-30 PASS 6 seconds
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-11-06 PASS 5 seconds
- 2025-11-07 PASS 7 seconds
- 2025-11-08 PASS 6 seconds
- 2025-11-09 PASS 6 seconds
- 2025-11-10 PASS 5 seconds
- 2025-11-11 PASS 5 seconds
- 2025-11-12 PASS 6 seconds