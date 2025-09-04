# search_index/searchindex/TestAccSearchIndex_updatedToEmptyMappingsFields Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev |  | 5.01s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev |  | 3.08s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev |  | 4.00s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | flaky_500 | 3.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2168112Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-23T00:52:42.2383581Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-23T00:52:47.2953179Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-23T00:52:47.2953967Z     resource_search_index_test.go:126: Step 1/2 error: Error running apply: exit status 1
2025-08-23T00:52:47.2954403Z         
2025-08-23T00:52:47.2957004Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:47.2958362Z         
2025-08-23T00:52:47.2958666Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:47.2959271Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:47.2959832Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:47.2960119Z         
2025-08-23T00:52:47.3407241Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (5.12s)
```

- 2025-08-24 PASS 7 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3222311Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-25T00:56:06.3369189Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-25T00:56:10.1094656Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-25T00:56:10.1095704Z     resource_search_index_test.go:126: Step 1/2 error: Error running apply: exit status 1
2025-08-25T00:56:10.1096422Z         
2025-08-25T00:56:10.1100247Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:10.1102747Z         
2025-08-25T00:56:10.1103303Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:10.1104431Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:10.1105461Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:10.1105984Z         
2025-08-25T00:56:10.1677811Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (3.85s)
```

- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3740713Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-28T00:52:10.3774768Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-28T00:52:14.3079346Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-08-28T00:52:14.3081106Z     resource_search_index_test.go:126: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:52:14.3082062Z         
2025-08-28T00:52:14.3097333Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.3100233Z         
2025-08-28T00:52:14.3101274Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.3102710Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.3104449Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.3105133Z         
2025-08-28T00:52:14.3695045Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (4.00s)
```

- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - PASS 8 seconds
  - FAIL 3 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8783686Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2025-09-01T08:30:14.8815009Z === CONT  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-09-01T08:30:17.9708201Z === NAME  TestAccSearchIndex_updatedToEmptyMappingsFields
2025-09-01T08:30:17.9709001Z     resource_search_index_test.go:126: Step 1/2 error: Error running apply: exit status 1
2025-09-01T08:30:17.9709402Z         
2025-09-01T08:30:17.9711449Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:17.9713028Z         
2025-09-01T08:30:17.9713412Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:17.9714006Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:17.9714553Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:17.9714843Z         
2025-09-01T08:30:18.0151344Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (3.14s)
```

  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 8 seconds