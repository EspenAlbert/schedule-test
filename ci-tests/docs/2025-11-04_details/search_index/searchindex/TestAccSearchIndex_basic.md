# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 3.06s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 5.01s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 5 seconds
- 2025-10-07 PASS 8 seconds
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 7 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9805145Z === RUN   TestAccSearchIndex_basic
2025-10-12T01:07:35.9831615Z === CONT  TestAccSearchIndex_basic
2025-10-12T01:07:39.5053856Z === NAME  TestAccSearchIndex_basic
2025-10-12T01:07:39.5054390Z     resource_search_index_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-12T01:07:39.5054805Z         
2025-10-12T01:07:39.5056724Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.5058045Z         
2025-10-12T01:07:39.5058364Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.5058985Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.5059551Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.5059853Z         
2025-10-12T01:07:39.5548406Z --- FAIL: TestAccSearchIndex_basic (3.57s)
```

- 2025-10-13 PASS 8 seconds
- 2025-10-14 PASS 9 seconds
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 7 seconds
- 2025-10-17 PASS 9 seconds
- 2025-10-18 PASS 13 minutes
- 2025-10-19 PASS 8 seconds
- 2025-10-20
  - PASS 8 seconds
  - PASS 10 minutes
- 2025-10-21 PASS 12 minutes
- 2025-10-22
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-10-23 PASS 13 minutes
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 10 minutes
- 2025-10-26 PASS 8 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7014400Z === RUN   TestAccSearchIndex_basic
2025-10-27T01:17:44.7309443Z === CONT  TestAccSearchIndex_basic
2025-10-27T01:17:49.7381713Z === NAME  TestAccSearchIndex_basic
2025-10-27T01:17:49.7382413Z     resource_search_index_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:17:49.7382819Z         
2025-10-27T01:17:49.7385483Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:49.7386958Z         
2025-10-27T01:17:49.7387381Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:49.7388089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:49.7388671Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:49.7389054Z         
2025-10-27T01:17:49.7881108Z --- FAIL: TestAccSearchIndex_basic (5.08s)
```

- 2025-10-28 PASS 12 minutes
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 12 minutes
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 12 minutes