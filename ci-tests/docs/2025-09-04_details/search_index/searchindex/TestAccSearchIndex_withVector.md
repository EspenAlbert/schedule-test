# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 37 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 4.01s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 3.06s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 3.09s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 4.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 seconds
- 2025-08-07 PASS 55 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 6 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 7 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2169457Z === RUN   TestAccSearchIndex_withVector
2025-08-23T00:52:42.2180546Z === CONT  TestAccSearchIndex_withVector
2025-08-23T00:52:46.3264961Z === NAME  TestAccSearchIndex_withVector
2025-08-23T00:52:46.3265573Z     resource_search_index_test.go:144: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:46.3266160Z         
2025-08-23T00:52:46.3268443Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:46.3269800Z         
2025-08-23T00:52:46.3270104Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:46.3270709Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:46.3271258Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:46.3271546Z         
2025-08-23T00:52:46.3682781Z --- FAIL: TestAccSearchIndex_withVector (4.15s)
```

- 2025-08-24 PASS 7 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3223653Z === RUN   TestAccSearchIndex_withVector
2025-08-25T00:56:06.3233246Z === CONT  TestAccSearchIndex_withVector
2025-08-25T00:56:09.8134288Z === NAME  TestAccSearchIndex_withVector
2025-08-25T00:56:09.8135146Z     resource_search_index_test.go:144: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:09.8135809Z         
2025-08-25T00:56:09.8139405Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.8141727Z         
2025-08-25T00:56:09.8142243Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.8143295Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.8144202Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.8144705Z         
2025-08-25T00:56:09.8670780Z --- FAIL: TestAccSearchIndex_withVector (3.55s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3757476Z === RUN   TestAccSearchIndex_withVector
2025-08-28T00:52:10.3771052Z === CONT  TestAccSearchIndex_withVector
2025-08-28T00:52:14.2094247Z === NAME  TestAccSearchIndex_withVector
2025-08-28T00:52:14.2095300Z     resource_search_index_test.go:144: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:14.2095961Z         
2025-08-28T00:52:14.2099730Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.2102265Z         
2025-08-28T00:52:14.2102819Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.2103946Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.2104949Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.2105498Z         
2025-08-28T00:52:14.2551213Z    test_name=TestAccSearchIndex_withStoredSourceTrue test_terraform_path=/home/runner/work/_temp/8e9c9614-2140-4fe8-ad07-976146572f10/terraform test_working_directory=/tmp/plugintest2632018616 test_step_number=1
2025-08-28T00:52:14.2563371Z --- FAIL: TestAccSearchIndex_withVector (3.88s)
```

- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - PASS 7 seconds
  - FAIL 4 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8784975Z === RUN   TestAccSearchIndex_withVector
2025-09-01T08:30:14.8795636Z === CONT  TestAccSearchIndex_withVector
2025-09-01T08:30:18.8926025Z === NAME  TestAccSearchIndex_withVector
2025-09-01T08:30:18.8926921Z     resource_search_index_test.go:144: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:18.8927596Z         
2025-09-01T08:30:18.8931075Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.8933294Z         
2025-09-01T08:30:18.8933805Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.8934852Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.8935832Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.8936328Z         
2025-09-01T08:30:18.9405711Z --- FAIL: TestAccSearchIndex_withVector (4.06s)
```

  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 6 seconds