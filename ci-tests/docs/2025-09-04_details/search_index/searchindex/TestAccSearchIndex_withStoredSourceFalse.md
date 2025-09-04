# search_index/searchindex/TestAccSearchIndex_withStoredSourceFalse Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 5.09s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 3.08s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 3.07s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 3.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 seconds
- 2025-08-07 PASS 56 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 8 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2170541Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2025-08-23T00:52:42.2384390Z === CONT  TestAccSearchIndex_withStoredSourceFalse
2025-08-23T00:52:48.0911275Z === NAME  TestAccSearchIndex_withStoredSourceFalse
2025-08-23T00:52:48.0912208Z     resource_search_index_test.go:174: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:48.0912877Z         
2025-08-23T00:52:48.0916431Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:48.0918788Z         
2025-08-23T00:52:48.0919340Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:48.0920472Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:48.0921481Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:48.0921998Z         
2025-08-23T00:52:48.1396934Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (5.91s)
```

- 2025-08-24 PASS 7 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3224771Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2025-08-25T00:56:06.3364221Z === CONT  TestAccSearchIndex_withStoredSourceFalse
2025-08-25T00:56:10.0410567Z === NAME  TestAccSearchIndex_withStoredSourceFalse
2025-08-25T00:56:10.0411379Z     resource_search_index_test.go:174: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:10.0411797Z         
2025-08-25T00:56:10.0414067Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:10.0415648Z         
2025-08-25T00:56:10.0415954Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:10.0416557Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:10.0417356Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:10.0417656Z         
2025-08-25T00:56:10.0968331Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (3.78s)
```

- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3759112Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2025-08-28T00:52:10.3785295Z === CONT  TestAccSearchIndex_withStoredSourceFalse
2025-08-28T00:52:13.6141027Z   
2025-08-28T00:52:14.0456278Z === NAME  TestAccSearchIndex_withStoredSourceFalse
2025-08-28T00:52:14.0457043Z     resource_search_index_test.go:174: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:14.0457457Z         
2025-08-28T00:52:14.0459560Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.0461365Z         
2025-08-28T00:52:14.0461682Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.0462286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.0462843Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.0463140Z         
2025-08-28T00:52:14.1059232Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (3.73s)
```

- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - PASS 5 seconds
  - FAIL 3 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8786017Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2025-09-01T08:30:14.8935098Z === CONT  TestAccSearchIndex_withStoredSourceFalse
2025-09-01T08:30:18.6409963Z === NAME  TestAccSearchIndex_withStoredSourceFalse
2025-09-01T08:30:18.6410879Z     resource_search_index_test.go:174: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:18.6411455Z         
2025-09-01T08:30:18.6414119Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.6415770Z         
2025-09-01T08:30:18.6416088Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.6416697Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.6417264Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.6417570Z         
2025-09-01T08:30:18.6801562Z    test_name=TestAccSearchIndex_withStoredSourceInclude test_terraform_path=/home/runner/work/_temp/4180e963-5b24-480e-bd79-e37886faa4f1/terraform test_working_directory=/tmp/plugintest2417474913
2025-09-01T08:30:18.6874307Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (3.80s)
```

  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 6 seconds