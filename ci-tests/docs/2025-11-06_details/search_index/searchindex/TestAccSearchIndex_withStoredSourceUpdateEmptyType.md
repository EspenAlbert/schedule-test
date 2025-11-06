# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateEmptyType Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 4.04s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 4.03s

## Timeline
- 2025-10-07: MISSING
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
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 11 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7080819Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-10-27T01:17:44.7087346Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-10-27T01:17:48.9677232Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-10-27T01:17:48.9678238Z     resource_search_index_test.go:190: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:17:48.9678955Z         
2025-10-27T01:17:48.9682674Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.9685073Z         
2025-10-27T01:17:48.9685662Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.9686793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.9687819Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.9688339Z         
2025-10-27T01:17:49.0198417Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (4.32s)
```

- 2025-10-28 PASS 8 seconds
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 9 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-11-06 PASS 8 seconds