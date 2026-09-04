# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes | dev | flaky_500 | 3.00s
[2026-08-27 03:09](#error-2026-08-27t0309330000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes | dev |  | 3.02s
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 3.08s
[2026-08-29 04:57](#error-2026-08-29t0457210000) |  | dev | timeout | 10803.06s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10804.00s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 18 minutes
- 2026-08-08 PASS 32 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 46 minutes
- 2026-08-11 PASS 38 minutes
- 2026-08-12 PASS 18 minutes
- 2026-08-13 PASS 34 minutes
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1416323Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-14T01:22:18.1421594Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-14T01:22:18.1434709Z    test_name=TestAccSearchIndexAPI_withVector test_terraform_path=/home/runner/work/_temp/b592e59f-94d9-4b35-8a52-6d312892da94/terraform test_working_directory=/tmp/plugintest593065795 test_step_number=1
2026-08-14T01:22:18.1498093Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-14T01:22:18.1498646Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-08-14T01:22:18.1499055Z         
2026-08-14T01:22:18.1499381Z         Error: Error calling API in Create
2026-08-14T01:22:18.1499686Z         
2026-08-14T01:22:18.1500056Z           with mongodbatlas_search_index_api.test,
2026-08-14T01:22:18.1500767Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-14T01:22:18.1501428Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-14T01:22:18.1501874Z         
2026-08-14T01:22:18.1502700Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes
2026-08-14T01:22:18.1503617Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-14T01:22:18.1504316Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-14T01:22:18.1504894Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-14T01:22:18.1505341Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (3.00s)
```

- 2026-08-15 PASS 47 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 37 minutes
- 2026-08-18 PASS 44 minutes
- 2026-08-19 PASS 20 minutes
- 2026-08-20 PASS 46 minutes
- 2026-08-21 PASS 45 minutes
- 2026-08-22 PASS 46 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 40 minutes
- 2026-08-25 PASS 13 minutes
- 2026-08-26 PASS 21 minutes
- 2026-08-27

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5358145Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-27T03:09:33.5364672Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-27T03:09:33.5528040Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-27T03:09:33.5528767Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-08-27T03:09:33.5529191Z         
2026-08-27T03:09:33.5529508Z         Error: Error calling API in Create
2026-08-27T03:09:33.5529837Z         
2026-08-27T03:09:33.5530209Z           with mongodbatlas_search_index_api.test,
2026-08-27T03:09:33.5531142Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-27T03:09:33.5531809Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-27T03:09:33.5532168Z         
2026-08-27T03:09:33.5533130Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes
2026-08-27T03:09:33.5534158Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-27T03:09:33.5534916Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-27T03:09:33.5535649Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T03:09:33.5536108Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (3.23s)
```

- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7539657Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-28T04:08:52.7545961Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-28T04:08:52.7814895Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-28T04:08:52.7815905Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-08-28T04:08:52.7816635Z         
2026-08-28T04:08:52.7817199Z         Error: Error calling API in Create
2026-08-28T04:08:52.7817753Z         
2026-08-28T04:08:52.7818428Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7819780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7821268Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7821852Z         
2026-08-28T04:08:52.7823364Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7825075Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7826406Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7827486Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7828281Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (3.78s)
```

- 2026-08-29

### Error 2026-08-29T04:57:21+00:00
```
2026-08-29T04:57:21.0178873Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-29T04:57:21.0183565Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-29T04:57:21.0253249Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-29T04:57:21.0254176Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-08-29T04:57:21.0254800Z         
2026-08-29T04:57:21.0255354Z         Error: Error waiting for changes in Create
2026-08-29T04:57:21.0255859Z         
2026-08-29T04:57:21.0256437Z           with mongodbatlas_search_index_api.test,
2026-08-29T04:57:21.0257590Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-29T04:57:21.0258639Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-29T04:57:21.0259185Z         
2026-08-29T04:57:21.0259650Z         group_id="6a922a3c197ad1cbd0630515",
2026-08-29T04:57:21.0260388Z         cluster_name="test-acc-tf-c-5836655662705216729",
2026-08-29T04:57:21.0261474Z         index_id="6a922eae874d7bc49124ad51": timeout while waiting for state to
2026-08-29T04:57:21.0262512Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-08-29T04:57:21.0263698Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-08-29T04:57:21.0264817Z         transient error, wait before retrying to allow resource deletion to finish
2026-08-29T04:57:21.0265714Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10803.64s)
```

- 2026-08-30: MISSING
- 2026-08-31 PASS 17 minutes
- 2026-09-01 PASS 47 minutes
- 2026-09-02 PASS an hour
- 2026-09-03
  - PASS an hour
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0691531Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-03T10:02:47.0695896Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-03T10:02:47.0773235Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-09-03T10:02:47.0773977Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-09-03T10:02:47.0774425Z         
2026-09-03T10:02:47.0774811Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0775162Z         
2026-09-03T10:02:47.0775556Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0776314Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0777032Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0777424Z         
2026-09-03T10:02:47.0777780Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0778280Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0778920Z         index_id="6a99189a72d7295ca9908e38": timeout while waiting for state to
2026-09-03T10:02:47.0779854Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0780562Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0781316Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0781901Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (10804.00s)
```

- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-23 01:14](#error-2026-08-23t0114430000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes | qa | flaky_500 | 4.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 35 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS an hour
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 38 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T01:14:43+00:00
```
2026-08-23T01:14:43.8603375Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-23T01:14:43.8607056Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-23T01:14:43.8754034Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-08-23T01:14:43.8754591Z     resource_test.go:184: Step 1/1 error: Error running apply: exit status 1
2026-08-23T01:14:43.8755007Z         
2026-08-23T01:14:43.8755379Z         Error: Error calling API in Create
2026-08-23T01:14:43.8755724Z         
2026-08-23T01:14:43.8756227Z           with mongodbatlas_search_index_api.test,
2026-08-23T01:14:43.8756844Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-23T01:14:43.8757447Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-23T01:14:43.8757818Z         
2026-08-23T01:14:43.8758539Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes
2026-08-23T01:14:43.8759302Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-23T01:14:43.8760060Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-23T01:14:43.8760616Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-23T01:14:43.8761283Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (4.45s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 38 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 19 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
