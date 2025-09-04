# search_index/searchindex/TestAccSearchIndex_withStoredSourceExclude Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev |  | 3.06s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev |  | 3.04s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev |  | 3.10s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | flaky_500 | 3.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 7 seconds
- 2025-08-07 PASS 53 seconds
- 2025-08-08 PASS 6 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 7 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 5 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-08-21 PASS 7 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2174710Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2025-08-23T00:52:42.2189360Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2025-08-23T00:52:45.8236549Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2025-08-23T00:52:45.8237348Z     resource_search_index_test.go:186: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:45.8237853Z         
2025-08-23T00:52:45.8240038Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:45.8241737Z         
2025-08-23T00:52:45.8242055Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:45.8242664Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:45.8243221Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:45.8243519Z         
2025-08-23T00:52:45.8668009Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.65s)
```

- 2025-08-24 PASS 5 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3228638Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2025-08-25T00:56:06.3233836Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2025-08-25T00:56:09.7183308Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2025-08-25T00:56:09.7184628Z     resource_search_index_test.go:186: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:09.7185390Z         
2025-08-25T00:56:09.7188836Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.7191350Z         
2025-08-25T00:56:09.7191903Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.7193038Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.7194041Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.7194582Z         
2025-08-25T00:56:09.7589176Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.44s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3764131Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2025-08-28T00:52:10.3773863Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2025-08-28T00:52:14.2724032Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2025-08-28T00:52:14.2724997Z     resource_search_index_test.go:186: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:14.2725694Z         
2025-08-28T00:52:14.2729138Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.2730494Z         
2025-08-28T00:52:14.2731038Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.2731701Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.2732269Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.2732567Z         
2025-08-28T00:52:14.3365903Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.96s)
```

- 2025-08-29 PASS 9 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - PASS 7 seconds
  - FAIL 3 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8789500Z === RUN   TestAccSearchIndex_withStoredSourceExclude
2025-09-01T08:30:14.8794529Z === CONT  TestAccSearchIndex_withStoredSourceExclude
2025-09-01T08:30:18.7450507Z === NAME  TestAccSearchIndex_withStoredSourceExclude
2025-09-01T08:30:18.7451501Z     resource_search_index_test.go:186: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:18.7451938Z         
2025-09-01T08:30:18.7454508Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.7456095Z         
2025-09-01T08:30:18.7456511Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.7457108Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.7457661Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.7457952Z         
2025-09-01T08:30:18.7887503Z --- FAIL: TestAccSearchIndex_withStoredSourceExclude (3.91s)
```

  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 5 seconds