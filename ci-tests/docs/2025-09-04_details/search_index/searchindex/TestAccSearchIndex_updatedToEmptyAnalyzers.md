# search_index/searchindex/TestAccSearchIndex_updatedToEmptyAnalyzers Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev |  | 3.08s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev |  | 4.03s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | flaky_500 | 4.07s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev |  | 3.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2166768Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-23T00:52:42.2385615Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-23T00:52:46.0135494Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-23T00:52:46.0136660Z     resource_search_index_test.go:100: Step 1/3 error: Error running apply: exit status 1
2025-08-23T00:52:46.0137367Z         
2025-08-23T00:52:46.0141011Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:46.0143455Z         
2025-08-23T00:52:46.0144002Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:46.0145120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:46.0146787Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:46.0147315Z         
2025-08-23T00:52:46.0630478Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (3.83s)
```

- 2025-08-24 PASS 9 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3220953Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-25T00:56:06.3371756Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-25T00:56:10.5925689Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-25T00:56:10.5926369Z     resource_search_index_test.go:100: Step 1/3 error: Error running apply: exit status 1
2025-08-25T00:56:10.5927069Z         
2025-08-25T00:56:10.5929415Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:10.5930739Z         
2025-08-25T00:56:10.5931045Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:10.5931647Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:10.5932196Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:10.5932486Z         
2025-08-25T00:56:10.6410646Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (4.32s)
```

- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 9 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3739511Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-28T00:52:10.3777061Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-28T00:52:15.0089418Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-08-28T00:52:15.0090362Z     resource_search_index_test.go:100: Step 1/3 error: Error running apply: exit status 1
2025-08-28T00:52:15.0091132Z         
2025-08-28T00:52:15.0093639Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:15.0095003Z         
2025-08-28T00:52:15.0095312Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:15.0095920Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:15.0096494Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:15.0096799Z         
2025-08-28T00:52:15.0545080Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (4.68s)
```

- 2025-08-29 PASS 12 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - PASS 8 seconds
  - FAIL 3 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8782312Z === RUN   TestAccSearchIndex_updatedToEmptyAnalyzers
2025-09-01T08:30:14.8908583Z === CONT  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-09-01T08:30:18.5130753Z === NAME  TestAccSearchIndex_updatedToEmptyAnalyzers
2025-09-01T08:30:18.5131713Z     resource_search_index_test.go:100: Step 1/3 error: Error running apply: exit status 1
2025-09-01T08:30:18.5132191Z         
2025-09-01T08:30:18.5134190Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.5135817Z         
2025-09-01T08:30:18.5136134Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.5136750Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.5137312Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.5137615Z         
2025-09-01T08:30:18.5648102Z --- FAIL: TestAccSearchIndex_updatedToEmptyAnalyzers (3.68s)
```

  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 8 seconds