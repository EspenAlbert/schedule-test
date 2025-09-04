# search_index/searchindex/TestAccSearchIndex_withStoredSourceInclude Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 3.09s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 2.08s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 4.04s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 3.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 7 seconds
- 2025-08-07 PASS 50 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 6 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 6 seconds
- 2025-08-18 PASS 6 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 7 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2173221Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-08-23T00:52:42.2343745Z === CONT  TestAccSearchIndex_withStoredSourceInclude
2025-08-23T00:52:46.1000654Z === NAME  TestAccSearchIndex_withStoredSourceInclude
2025-08-23T00:52:46.1001240Z     resource_search_index_test.go:182: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:46.1001865Z         
2025-08-23T00:52:46.1003901Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:46.1005232Z         
2025-08-23T00:52:46.1005540Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:46.1006350Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:46.1006918Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:46.1007211Z         
2025-08-23T00:52:46.1418239Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (3.92s)
```

- 2025-08-24 PASS 6 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3227447Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-08-25T00:56:06.3234542Z === CONT  TestAccSearchIndex_withStoredSourceInclude
2025-08-25T00:56:09.0825638Z === NAME  TestAccSearchIndex_withStoredSourceInclude
2025-08-25T00:56:09.0826397Z     resource_search_index_test.go:182: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:09.0827040Z         
2025-08-25T00:56:09.0828938Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.0830265Z         
2025-08-25T00:56:09.0830553Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.0831143Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.0831682Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.0831966Z         
2025-08-25T00:56:09.1317374Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (2.81s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3762187Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-08-28T00:52:10.3782171Z === CONT  TestAccSearchIndex_withStoredSourceInclude
2025-08-28T00:52:14.7468538Z === NAME  TestAccSearchIndex_withStoredSourceInclude
2025-08-28T00:52:14.7469473Z     resource_search_index_test.go:182: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:14.7470093Z         
2025-08-28T00:52:14.7473769Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.7476031Z         
2025-08-28T00:52:14.7476578Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.7477740Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.7478784Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.7479326Z         
2025-08-28T00:52:14.8048139Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (4.43s)
```

- 2025-08-29 PASS 9 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - PASS 7 seconds
  - FAIL 3 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8788325Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-09-01T08:30:14.8815715Z === CONT  TestAccSearchIndex_withStoredSourceInclude
2025-09-01T08:30:18.6803001Z === NAME  TestAccSearchIndex_withStoredSourceInclude
2025-09-01T08:30:18.6803984Z     resource_search_index_test.go:182: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:18.6804685Z         
2025-09-01T08:30:18.6808100Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.6811354Z         
2025-09-01T08:30:18.6812077Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.6813494Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.6814650Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.6815346Z         
2025-09-01T08:30:18.7277839Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (3.85s)
```

  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 6 seconds