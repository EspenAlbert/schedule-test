# search_index/searchindex/TestAccSearchIndex_withSynonyms Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 5.04s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 3.09s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-10-02 PASS 6 seconds
- 2025-10-03 PASS 7 seconds
- 2025-10-04 PASS 8 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 5 seconds
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 7 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9808357Z === RUN   TestAccSearchIndex_withSynonyms
2025-10-12T01:07:35.9826820Z === CONT  TestAccSearchIndex_withSynonyms
2025-10-12T01:07:41.3418492Z === NAME  TestAccSearchIndex_withSynonyms
2025-10-12T01:07:41.3419347Z     resource_search_index_test.go:60: Step 1/1 error: Error running apply: exit status 1
2025-10-12T01:07:41.3419795Z         
2025-10-12T01:07:41.3422148Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:41.3423623Z         
2025-10-12T01:07:41.3423937Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:41.3424553Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:41.3425120Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:41.3425460Z         
2025-10-12T01:07:41.3873174Z --- FAIL: TestAccSearchIndex_withSynonyms (5.41s)
```

- 2025-10-13 PASS 8 seconds
- 2025-10-14 PASS 8 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 6 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 6 seconds
- 2025-10-19 PASS 6 seconds
- 2025-10-20
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 7 seconds
  - PASS 4 seconds
- 2025-10-23 PASS 7 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7018263Z === RUN   TestAccSearchIndex_withSynonyms
2025-10-27T01:17:44.7310463Z === CONT  TestAccSearchIndex_withSynonyms
2025-10-27T01:17:48.0071303Z    test_terraform_path=/home/runner/work/_temp/8f4e56d8-22e8-4f17-97dd-19360af487fb/terraform
2025-10-27T01:17:48.6091748Z === NAME  TestAccSearchIndex_withSynonyms
2025-10-27T01:17:48.6092397Z     resource_search_index_test.go:60: Step 1/1 error: Error running apply: exit status 1
2025-10-27T01:17:48.6092806Z         
2025-10-27T01:17:48.6094978Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.6096460Z         
2025-10-27T01:17:48.6096773Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.6097383Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.6098287Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.6098880Z         
2025-10-27T01:17:48.6558805Z --- FAIL: TestAccSearchIndex_withSynonyms (3.94s)
```

- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 6 seconds