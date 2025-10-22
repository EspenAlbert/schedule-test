# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateEmptyType Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa | 4.04s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 10 seconds
- 2025-09-24 PASS 9 seconds
- 2025-09-25 PASS 9 seconds
- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 10 seconds
- 2025-09-28 PASS 10 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-10-01
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 9 seconds
- 2025-10-03 PASS 8 seconds
- 2025-10-04 PASS 10 seconds
- 2025-10-05 PASS 9 seconds
- 2025-10-06 PASS 8 seconds
- 2025-10-07 PASS 9 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 10 seconds
- 2025-10-10 PASS 10 seconds
- 2025-10-11 PASS 8 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9819768Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-10-12T01:07:35.9825975Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-10-12T01:07:40.2929644Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-10-12T01:07:40.2930883Z     resource_search_index_test.go:190: Step 1/2 error: Error running apply: exit status 1
2025-10-12T01:07:40.2931614Z         
2025-10-12T01:07:40.2935169Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:40.2937550Z         
2025-10-12T01:07:40.2938090Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:40.2939186Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:40.2940643Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:40.2941199Z         
2025-10-12T01:07:40.3517173Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (4.37s)
```

- 2025-10-13 PASS 11 seconds
- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 10 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19 PASS 9 seconds
- 2025-10-20
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 8 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 8 seconds