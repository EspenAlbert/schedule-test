# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 3.04s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 3.08s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 5 seconds
- 2025-10-10 PASS 7 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9813670Z === RUN   TestAccSearchIndex_withVector
2025-10-12T01:07:35.9823450Z === CONT  TestAccSearchIndex_withVector
2025-10-12T01:07:39.2829575Z === NAME  TestAccSearchIndex_withVector
2025-10-12T01:07:39.2830972Z     resource_search_index_test.go:144: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:07:39.2831718Z         
2025-10-12T01:07:39.2835268Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.2837906Z         
2025-10-12T01:07:39.2838468Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.2839614Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.2840922Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.2841462Z         
2025-10-12T01:07:39.3351113Z --- FAIL: TestAccSearchIndex_withVector (3.36s)
```

- 2025-10-13 PASS 6 seconds
- 2025-10-14 PASS 8 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 7 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 5 seconds
- 2025-10-19 PASS 7 seconds
- 2025-10-20
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 6 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7037945Z === RUN   TestAccSearchIndex_withVector
2025-10-27T01:17:44.7084068Z === CONT  TestAccSearchIndex_withVector
2025-10-27T01:17:48.4755550Z === NAME  TestAccSearchIndex_withVector
2025-10-27T01:17:48.4756292Z     resource_search_index_test.go:144: Step 1/1 error: Error running apply: exit status 1
2025-10-27T01:17:48.4756995Z         
2025-10-27T01:17:48.4759036Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.4760521Z         
2025-10-27T01:17:48.4760847Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.4761470Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.4762030Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.4762323Z         
2025-10-27T01:17:48.4837505Z    test_name=TestAccSearchIndex_withStoredSourceUpdateSearchType test_terraform_path=/home/runner/work/_temp/8f4e56d8-22e8-4f17-97dd-19360af487fb/terraform
2025-10-27T01:17:48.5392654Z --- FAIL: TestAccSearchIndex_withVector (3.84s)
```

- 2025-10-28 PASS 5 seconds
- 2025-10-29 PASS 8 seconds
- 2025-10-30 PASS 7 seconds
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03 PASS 6 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 5 seconds