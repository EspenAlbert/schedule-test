# search_index/searchindex/TestAccSearchIndex_updatedToEmptyMappingsFields Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 01:07](#error-2025-10-12t0107350000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes | qa |  | 3.03s
[2025-10-27 01:17](#error-2025-10-27t0117440000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes | dev | flaky_500 | 4.03s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 7 seconds
- 2025-10-07 PASS 8 seconds
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 10 seconds
- 2025-10-10 PASS 8 seconds
- 2025-10-11 PASS 8 seconds
- 2025-10-12

### Error 2025-10-12T01:07:35+00:00
```
2025-10-12T01:07:35.9812377Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2025-10-12T01:07:35.9827440Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-10-12T01:07:39.1930941Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-10-12T01:07:39.1931966Z     resource_search_index_test.go:126: Step 1/2 error: Error running apply: exit status 1
2025-10-12T01:07:39.1932669Z         
2025-10-12T01:07:39.1935974Z         Error: error creating index: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf634454e3b49aeabfdbf/clusters/test-acc-tf-c-3869730621863071675/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-12T01:07:39.1938082Z         
2025-10-12T01:07:39.1938681Z           with mongodbatlas_search_index.test,
2025-10-12T01:07:39.1939792Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-12T01:07:39.1941039Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-12T01:07:39.1941547Z         
2025-10-12T01:07:39.2397154Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (3.26s)
```

- 2025-10-13 PASS 11 seconds
- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 12 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19 PASS 9 seconds
- 2025-10-20
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 8 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 10 seconds
- 2025-10-25 PASS 9 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27

### Error 2025-10-27T01:17:44+00:00
```
2025-10-27T01:17:44.7036362Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2025-10-27T01:17:44.7085279Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-10-27T01:17:48.9419905Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-10-27T01:17:48.9420835Z     resource_search_index_test.go:126: Step 1/2 error: Error running apply: exit status 1
2025-10-27T01:17:48.9421249Z         
2025-10-27T01:17:48.9423421Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1f29e7601e46454915/clusters/test-acc-tf-c-5054850061385097118/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-10-27T01:17:48.9424723Z         
2025-10-27T01:17:48.9425026Z           with mongodbatlas_search_index.test,
2025-10-27T01:17:48.9425644Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-10-27T01:17:48.9426206Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-10-27T01:17:48.9426499Z         
2025-10-27T01:17:48.9939568Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (4.29s)
```

- 2025-10-28 PASS 8 seconds
- 2025-10-29 PASS 10 seconds
- 2025-10-30 PASS 9 seconds
- 2025-10-31 PASS 9 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 8 seconds