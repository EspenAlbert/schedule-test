# search_index/searchindex/TestAccSearchIndex_updatedToEmptySynonyms Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 4.00s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 3.09s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 3.08s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 3.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 9 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 8 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 11 seconds
- 2025-08-19 PASS 10 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2165268Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2025-08-23T00:52:42.2386387Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2025-08-23T00:52:45.4875833Z    test_name=TestAccSearchIndex_withSynonyms
2025-08-23T00:52:46.1928302Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2025-08-23T00:52:46.1928974Z     resource_search_index_test.go:78: Step 1/2 error: Error running apply: exit status 1
2025-08-23T00:52:46.1929626Z         
2025-08-23T00:52:46.1932308Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:46.1934206Z         
2025-08-23T00:52:46.1934614Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:46.1935218Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:46.1935770Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:46.1936235Z         
2025-08-23T00:52:46.2374503Z    test_name=TestAccSearchIndex_withStoredSourceUpdateSearchType test_terraform_path=/home/runner/work/_temp/30f14330-1079-4bbe-a6c0-bb2c01026325/terraform test_working_directory=/tmp/plugintest718716657 test_step_number=1
2025-08-23T00:52:46.2397075Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (4.00s)
```

- 2025-08-24 PASS 7 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3219684Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2025-08-25T00:56:06.3377451Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2025-08-25T00:56:10.1265243Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2025-08-25T00:56:10.1265912Z     resource_search_index_test.go:78: Step 1/2 error: Error running apply: exit status 1
2025-08-25T00:56:10.1266371Z         
2025-08-25T00:56:10.1269116Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:10.1270490Z         
2025-08-25T00:56:10.1270797Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:10.1271417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:10.1271975Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:10.1272309Z         
2025-08-25T00:56:10.1821508Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (3.86s)
```

- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3738115Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2025-08-28T00:52:10.3777978Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2025-08-28T00:52:14.0610969Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2025-08-28T00:52:14.0611622Z     resource_search_index_test.go:78: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:52:14.0612227Z         
2025-08-28T00:52:14.0614809Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.0616722Z         
2025-08-28T00:52:14.0617238Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.0618147Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.0619056Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.0619565Z         
2025-08-28T00:52:14.1212799Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (3.75s)
```

- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - PASS 8 seconds
  - FAIL 3 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8781023Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2025-09-01T08:30:14.8936700Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2025-09-01T08:30:17.9707760Z    test_working_directory=/tmp/plugintest1855039458
2025-09-01T08:30:18.3034564Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2025-09-01T08:30:18.3035850Z     resource_search_index_test.go:78: Step 1/2 error: Error running apply: exit status 1
2025-09-01T08:30:18.3036471Z         
2025-09-01T08:30:18.3038470Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.3040215Z         
2025-09-01T08:30:18.3040527Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.3041125Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.3041672Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.3041964Z         
2025-09-01T08:30:18.3476062Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (3.46s)
```

  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 8 seconds