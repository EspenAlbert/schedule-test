# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateEmptyType Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 3.04s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 3.09s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 4.04s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 4.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2176160Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-23T00:52:42.2382590Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-23T00:52:45.5176571Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-23T00:52:45.5177689Z     resource_search_index_test.go:190: Step 1/2 error: Error running apply: exit status 1
2025-08-23T00:52:45.5178635Z         
2025-08-23T00:52:45.5182008Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:45.5195616Z         
2025-08-23T00:52:45.5196337Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:45.5197381Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:45.5198315Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:45.5198806Z         
2025-08-23T00:52:45.5819791Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (3.36s)
```

- 2025-08-24 PASS 7 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3229897Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-25T00:56:06.3356220Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-25T00:56:10.1886531Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-25T00:56:10.1887648Z     resource_search_index_test.go:190: Step 1/2 error: Error running apply: exit status 1
2025-08-25T00:56:10.1888199Z         
2025-08-25T00:56:10.1890417Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:10.1892235Z         
2025-08-25T00:56:10.1892547Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:10.1893171Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:10.1893732Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:10.1894025Z         
2025-08-25T00:56:10.2350647Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (3.91s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 9 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3765721Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-28T00:52:10.3773008Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-28T00:52:14.7045252Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-08-28T00:52:14.7046205Z     resource_search_index_test.go:190: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:52:14.7046655Z         
2025-08-28T00:52:14.7049711Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.7051639Z         
2025-08-28T00:52:14.7051979Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.7052726Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.7053426Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.7053738Z         
2025-08-28T00:52:14.7660915Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (4.39s)
```

- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - PASS 8 seconds
  - FAIL 4 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8791079Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-09-01T08:30:14.8935755Z === CONT  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-09-01T08:30:18.8477828Z === NAME  TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-09-01T08:30:18.8478596Z     resource_search_index_test.go:190: Step 1/2 error: Error running apply: exit status 1
2025-09-01T08:30:18.8479021Z         
2025-09-01T08:30:18.8481579Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.8482922Z         
2025-09-01T08:30:18.8483240Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.8483852Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.8484407Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.8484713Z         
2025-09-01T08:30:18.8925044Z    test_name=TestAccSearchIndex_withVector test_terraform_path=/home/runner/work/_temp/4180e963-5b24-480e-bd79-e37886faa4f1/terraform
2025-09-01T08:30:18.8982866Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (4.01s)
```

  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 9 seconds