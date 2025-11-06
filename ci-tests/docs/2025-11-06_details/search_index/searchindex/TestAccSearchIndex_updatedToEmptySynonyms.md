# search_index/searchindex/TestAccSearchIndex_updatedToEmptySynonyms Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 3.05s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 3.05s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 8 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9809499Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2025-10-12T01:07:35.9830277Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2025-10-12T01:07:39.4477536Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2025-10-12T01:07:39.4478356Z     resource_search_index_test.go:78: Step 1/2 error: Error running apply: exit status 1
2025-10-12T01:07:39.4479078Z         
2025-10-12T01:07:39.4482177Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.4484008Z         
2025-10-12T01:07:39.4484520Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.4485229Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.4485796Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.4486097Z         
2025-10-12T01:07:39.4945899Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (3.51s)
```

- 2025-10-13 PASS 10 seconds
- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 11 seconds
- 2025-10-17 PASS 11 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19 PASS 9 seconds
- 2025-10-20
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-10-21 PASS 8 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 9 seconds
- 2025-10-24 PASS 11 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7019784Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2025-10-27T01:17:44.7281656Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2025-10-27T01:17:48.1353925Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2025-10-27T01:17:48.1354592Z     resource_search_index_test.go:78: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:17:48.1355018Z         
2025-10-27T01:17:48.1357315Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.1358659Z         
2025-10-27T01:17:48.1358963Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.1359575Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.1360602Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.1361312Z         
2025-10-27T01:17:48.1534193Z    test_name=TestAccSearchIndex_withStoredSourceExclude test_terraform_path=/home/runner/work/_temp/8f4e56d8-22e8-4f17-97dd-19360af487fb/terraform
2025-10-27T01:17:48.1858333Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (3.47s)
```

- 2025-10-28 PASS 8 seconds
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 8 seconds
- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 seconds
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 8 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 7 seconds