# search_index/searchindex/TestAccSearchIndex_withStoredSourceInclude Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 4.04s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 5.09s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-10-02 PASS 6 seconds
- 2025-10-03 PASS 6 seconds
- 2025-10-04 PASS 5 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 7 seconds
- 2025-10-08 PASS 7 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 6 seconds
- 2025-10-11 PASS 6 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9817207Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-10-12T01:07:35.9824620Z === CONT  TestAccSearchIndex_withStoredSourceInclude
2025-10-12T01:07:40.3372074Z === NAME  TestAccSearchIndex_withStoredSourceInclude
2025-10-12T01:07:40.3373011Z     resource_search_index_test.go:182: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:07:40.3373694Z         
2025-10-12T01:07:40.3377101Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:40.3379369Z         
2025-10-12T01:07:40.3380059Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:40.3381256Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:40.3381968Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:40.3382551Z         
2025-10-12T01:07:40.3866307Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (4.41s)
```

- 2025-10-13 PASS 8 seconds
- 2025-10-14 PASS 9 seconds
- 2025-10-15 PASS 8 seconds
- 2025-10-16 PASS 11 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 6 seconds
- 2025-10-19 PASS 7 seconds
- 2025-10-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 9 seconds
- 2025-10-22
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 5 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7041955Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-10-27T01:17:44.7085925Z === CONT  TestAccSearchIndex_withStoredSourceInclude
2025-10-27T01:17:50.5453666Z === NAME  TestAccSearchIndex_withStoredSourceInclude
2025-10-27T01:17:50.5454359Z     resource_search_index_test.go:182: Step 1/1 error: Error running apply: exit status 1
2025-10-27T01:17:50.5454981Z         
2025-10-27T01:17:50.5456909Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:50.5458217Z         
2025-10-27T01:17:50.5458530Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:50.5459143Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:50.5459723Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:50.5460025Z         
2025-10-27T01:17:50.5903039Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (5.89s)
```

- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 6 seconds
- 2025-10-30 PASS 6 seconds