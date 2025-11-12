# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateSearchType Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 3.02s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 3.08s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 9 seconds
- 2025-10-05 PASS 7 seconds
- 2025-10-06 PASS 8 seconds
- 2025-10-07 PASS 8 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 10 seconds
- 2025-10-10 PASS 9 seconds
- 2025-10-11 PASS 8 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9821358Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-10-12T01:07:35.9825270Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-10-12T01:07:39.1594008Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-10-12T01:07:39.1594822Z     resource_search_index_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-10-12T01:07:39.1595429Z         
2025-10-12T01:07:39.1597589Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.1599380Z         
2025-10-12T01:07:39.1599813Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.1600593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.1601159Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.1601454Z         
2025-10-12T01:07:39.2097309Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (3.23s)
```

- 2025-10-13 PASS 9 seconds
- 2025-10-14 PASS 10 seconds
- 2025-10-15 PASS 8 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 12 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19 PASS 8 seconds
- 2025-10-20
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-10-21 PASS 8 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 9 seconds
- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 9 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7082215Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-10-27T01:17:44.7086581Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-10-27T01:17:48.4838937Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-10-27T01:17:48.4840058Z     resource_search_index_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:17:48.4841018Z         
2025-10-27T01:17:48.4844606Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.4846995Z         
2025-10-27T01:17:48.4847551Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.4848703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.4849767Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.4850476Z         
2025-10-27T01:17:48.5441736Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (3.84s)
```

- 2025-10-28 PASS 8 seconds
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 9 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-11-06 PASS 7 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09 PASS 8 seconds
- 2025-11-10 PASS 7 seconds
- 2025-11-11 PASS 7 seconds
- 2025-11-12 PASS 9 seconds