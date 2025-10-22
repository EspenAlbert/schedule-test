# search_index/searchindex/TestAccSearchIndex_withSearchType Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa | flaky_500 | 3.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 7 seconds
- 2025-09-24 PASS 8 seconds
- 2025-09-25 PASS 8 seconds
- 2025-09-26 PASS 6 seconds
- 2025-09-27 PASS 7 seconds
- 2025-09-28 PASS 7 seconds
- 2025-09-29 PASS 7 seconds
- 2025-09-30
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-10-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-10-02 PASS 6 seconds
- 2025-10-03 PASS 6 seconds
- 2025-10-04 PASS 8 seconds
- 2025-10-05 PASS 6 seconds
- 2025-10-06 PASS 7 seconds
- 2025-10-07 PASS 7 seconds
- 2025-10-08 PASS 8 seconds
- 2025-10-09 PASS 6 seconds
- 2025-10-10 PASS 7 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9806185Z === RUN   TestAccSearchIndex_withSearchType
2025-10-12T01:07:35.9831025Z === CONT  TestAccSearchIndex_withSearchType
2025-10-12T01:07:39.6971500Z === NAME  TestAccSearchIndex_withSearchType
2025-10-12T01:07:39.6972049Z     resource_search_index_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:07:39.6972669Z         
2025-10-12T01:07:39.6975014Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.6976521Z         
2025-10-12T01:07:39.6977008Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.6977639Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.6978204Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.6978507Z         
2025-10-12T01:07:39.7424718Z --- FAIL: TestAccSearchIndex_withSearchType (3.76s)
```

- 2025-10-13 PASS 7 seconds
- 2025-10-14 PASS 7 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 7 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 6 seconds
- 2025-10-19 PASS 4 seconds
- 2025-10-20
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 5 seconds