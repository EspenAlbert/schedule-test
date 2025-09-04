# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateSearchType Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 4.01s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 3.06s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 3.04s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 4.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15 PASS 8 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 10 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-08-21 PASS 7 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2177672Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-23T00:52:42.2237104Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-23T00:52:46.2376377Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-23T00:52:46.2377415Z     resource_search_index_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-08-23T00:52:46.2378117Z         
2025-08-23T00:52:46.2382022Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:46.2384345Z         
2025-08-23T00:52:46.2384856Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:46.2386138Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:46.2387150Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:46.2387705Z         
2025-08-23T00:52:46.2873406Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (4.06s)
```

- 2025-08-24 PASS 8 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3231350Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-25T00:56:06.3354514Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-25T00:56:09.8608932Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-25T00:56:09.8609921Z     resource_search_index_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-08-25T00:56:09.8610577Z         
2025-08-25T00:56:09.8614021Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.8616279Z         
2025-08-25T00:56:09.8616828Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.8617652Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.8618235Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.8618531Z         
2025-08-25T00:56:09.9075192Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (3.59s)
```

- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3767676Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-28T00:52:10.3772066Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-28T00:52:13.7617654Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-08-28T00:52:13.7618279Z     resource_search_index_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:52:13.7618695Z         
2025-08-28T00:52:13.7621366Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:13.7622941Z         
2025-08-28T00:52:13.7623264Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:13.7623899Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:13.7624468Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:13.7624776Z         
2025-08-28T00:52:13.8029034Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (3.43s)
```

- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - PASS 9 seconds
  - FAIL 4 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8792558Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-09-01T08:30:14.8934373Z === CONT  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-09-01T08:30:19.6044381Z === NAME  TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-09-01T08:30:19.6045210Z     resource_search_index_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-09-01T08:30:19.6045700Z         
2025-09-01T08:30:19.6047979Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:19.6049329Z         
2025-09-01T08:30:19.6049822Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:19.6050433Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:19.6050992Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:19.6051290Z         
2025-09-01T08:30:19.6683125Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (4.78s)
```

  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 8 seconds