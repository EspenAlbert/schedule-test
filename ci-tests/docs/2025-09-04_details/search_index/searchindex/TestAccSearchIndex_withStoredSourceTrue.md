# search_index/searchindex/TestAccSearchIndex_withStoredSourceTrue Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 3.08s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 3.00s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 3.10s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 4.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 seconds
- 2025-08-07 PASS 52 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 6 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 6 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 6 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 7 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2171844Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-08-23T00:52:42.2385011Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2025-08-23T00:52:45.9780106Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2025-08-23T00:52:45.9780965Z     resource_search_index_test.go:178: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:45.9781512Z         
2025-08-23T00:52:45.9784678Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:45.9786298Z         
2025-08-23T00:52:45.9786616Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:45.9787236Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:45.9787808Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:45.9788113Z         
2025-08-23T00:52:46.0255077Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (3.79s)
```

- 2025-08-24 PASS 5 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3226123Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-08-25T00:56:06.3358214Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2025-08-25T00:56:09.3134455Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2025-08-25T00:56:09.3135560Z     resource_search_index_test.go:178: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:09.3136282Z         
2025-08-25T00:56:09.3138921Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.3140761Z         
2025-08-25T00:56:09.3141138Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.3141790Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.3142345Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.3142639Z         
2025-08-25T00:56:09.3569242Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (3.04s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3760567Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-08-28T00:52:10.3780453Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2025-08-28T00:52:14.2552649Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2025-08-28T00:52:14.2553558Z     resource_search_index_test.go:178: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:14.2554204Z         
2025-08-28T00:52:14.2557438Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.2559737Z         
2025-08-28T00:52:14.2560234Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.2561437Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.2562379Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.2562864Z         
2025-08-28T00:52:14.3197978Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (3.95s)
```

- 2025-08-29 PASS 7 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - PASS 5 seconds
  - FAIL 4 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8787156Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-09-01T08:30:14.8907796Z === CONT  TestAccSearchIndex_withStoredSourceTrue
2025-09-01T08:30:19.4971609Z === NAME  TestAccSearchIndex_withStoredSourceTrue
2025-09-01T08:30:19.4972295Z     resource_search_index_test.go:178: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:19.4972797Z         
2025-09-01T08:30:19.4975104Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:19.4976689Z         
2025-09-01T08:30:19.4976994Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:19.4977732Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:19.4978561Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:19.4979728Z         
2025-09-01T08:30:19.5586341Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (4.68s)
```

  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds