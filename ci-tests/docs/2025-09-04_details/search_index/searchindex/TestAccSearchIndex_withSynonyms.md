# search_index/searchindex/TestAccSearchIndex_withSynonyms Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | flaky_500 | 3.03s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev |  | 2.09s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev |  | 3.08s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev |  | 4.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 55 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 8 seconds
- 2025-08-11 PASS 5 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 7 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 6 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2164144Z === RUN   TestAccSearchIndex_withSynonyms
2025-08-23T00:52:42.2179500Z === CONT  TestAccSearchIndex_withSynonyms
2025-08-23T00:52:45.4876476Z === NAME  TestAccSearchIndex_withSynonyms
2025-08-23T00:52:45.4877186Z     resource_search_index_test.go:60: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:45.4877634Z         
2025-08-23T00:52:45.4880011Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:45.4881922Z         
2025-08-23T00:52:45.4882243Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:45.4882852Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:45.4883413Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:45.4883709Z         
2025-08-23T00:52:45.5352097Z --- FAIL: TestAccSearchIndex_withSynonyms (3.32s)
```

- 2025-08-24 PASS 5 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3218584Z === RUN   TestAccSearchIndex_withSynonyms
2025-08-25T00:56:06.3359063Z === CONT  TestAccSearchIndex_withSynonyms
2025-08-25T00:56:09.1899065Z === NAME  TestAccSearchIndex_withSynonyms
2025-08-25T00:56:09.1899837Z     resource_search_index_test.go:60: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:09.1900341Z         
2025-08-25T00:56:09.1902572Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.1904158Z         
2025-08-25T00:56:09.1904620Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.1905245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.1905886Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.1906178Z         
2025-08-25T00:56:09.2427079Z --- FAIL: TestAccSearchIndex_withSynonyms (2.92s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3736711Z === RUN   TestAccSearchIndex_withSynonyms
2025-08-28T00:52:10.3778863Z === CONT  TestAccSearchIndex_withSynonyms
2025-08-28T00:52:14.1202554Z === NAME  TestAccSearchIndex_withSynonyms
2025-08-28T00:52:14.1203453Z     resource_search_index_test.go:60: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:14.1204112Z         
2025-08-28T00:52:14.1206924Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.1209315Z         
2025-08-28T00:52:14.1209836Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.1211101Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.1212083Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.1212506Z         
2025-08-28T00:52:14.1638808Z --- FAIL: TestAccSearchIndex_withSynonyms (3.79s)
```

- 2025-08-29 PASS 6 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - PASS 7 seconds
  - FAIL 4 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8779423Z === RUN   TestAccSearchIndex_withSynonyms
2025-09-01T08:30:14.8795110Z === CONT  TestAccSearchIndex_withSynonyms
2025-09-01T08:30:18.9418046Z === NAME  TestAccSearchIndex_withSynonyms
2025-09-01T08:30:18.9418939Z     resource_search_index_test.go:60: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:18.9419521Z         
2025-09-01T08:30:18.9422182Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.9423934Z         
2025-09-01T08:30:18.9424256Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.9424870Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.9425426Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.9425726Z         
2025-09-01T08:30:18.9864624Z --- FAIL: TestAccSearchIndex_withSynonyms (4.11s)
```

  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds