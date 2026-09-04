# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes | dev |  | 3.02s
[2026-08-27 03:09](#error-2026-08-27t0309330000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes | dev |  | 2.08s
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 2.07s
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10804.01s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10803.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 43 minutes
- 2026-08-08 PASS 29 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 17 minutes
- 2026-08-11 PASS 38 minutes
- 2026-08-12 PASS 18 minutes
- 2026-08-13 PASS an hour
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1417163Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-14T01:22:18.1419785Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-14T01:22:18.1518834Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-14T01:22:18.1519423Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-08-14T01:22:18.1519821Z         
2026-08-14T01:22:18.1520146Z         Error: Error calling API in Create
2026-08-14T01:22:18.1520469Z         
2026-08-14T01:22:18.1520836Z           with mongodbatlas_search_index_api.test,
2026-08-14T01:22:18.1521901Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-14T01:22:18.1522862Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-14T01:22:18.1523216Z         
2026-08-14T01:22:18.1524052Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes
2026-08-14T01:22:18.1524953Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-14T01:22:18.1525654Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-14T01:22:18.1526226Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-14T01:22:18.1526704Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (3.23s)
```

- 2026-08-15 PASS 38 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 21 minutes
- 2026-08-18 PASS 38 minutes
- 2026-08-19 PASS 44 minutes
- 2026-08-20 PASS 19 minutes
- 2026-08-21 PASS 17 minutes
- 2026-08-22 PASS 57 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 27 minutes
- 2026-08-25 PASS 23 minutes
- 2026-08-26 PASS 30 minutes
- 2026-08-27

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5359566Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-27T03:09:33.5363910Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-27T03:09:33.5504822Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-27T03:09:33.5505429Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-08-27T03:09:33.5505855Z         
2026-08-27T03:09:33.5506180Z         Error: Error calling API in Create
2026-08-27T03:09:33.5506502Z         
2026-08-27T03:09:33.5506863Z           with mongodbatlas_search_index_api.test,
2026-08-27T03:09:33.5507581Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-27T03:09:33.5508253Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-27T03:09:33.5508608Z         
2026-08-27T03:09:33.5509429Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes
2026-08-27T03:09:33.5510576Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-27T03:09:33.5511300Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-27T03:09:33.5511879Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T03:09:33.5512766Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (2.76s)
```

- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7542681Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-28T04:08:52.7550469Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-28T04:08:52.7574959Z    test_working_directory=/tmp/plugintest2076106042 test_step_number=1 test_name=TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-28T04:08:52.7576542Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-08-28T04:08:52.7577230Z         
2026-08-28T04:08:52.7577756Z         Error: Error calling API in Create
2026-08-28T04:08:52.7578247Z         
2026-08-28T04:08:52.7578872Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7580460Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7581764Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7582417Z         
2026-08-28T04:08:52.7584023Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7585776Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7587108Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7588202Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7589089Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (2.71s)
```

- 2026-08-29 PASS 53 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS an hour
- 2026-09-01 PASS 41 minutes
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1916870Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-02T04:59:00.1923270Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-02T04:59:00.2031191Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-02T04:59:00.2031822Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-02T04:59:00.2032256Z         
2026-09-02T04:59:00.2032617Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.2032949Z         
2026-09-02T04:59:00.2033309Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2034062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2034741Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2035100Z         
2026-09-02T04:59:00.2035416Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2035873Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2036472Z         index_id="6a97767379ec95325857a124": timeout while waiting for state to
2026-09-02T04:59:00.2037118Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2037794Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.2038523Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.2039239Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10804.06s)
```

- 2026-09-03
  - PASS 47 minutes
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0692477Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-03T10:02:47.0695408Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-03T10:02:47.0723225Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-03T10:02:47.0724332Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-03T10:02:47.0724808Z         
2026-09-03T10:02:47.0725197Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0725567Z         
2026-09-03T10:02:47.0725960Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0726726Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0727443Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0727823Z         
2026-09-03T10:02:47.0728164Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0728661Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0729550Z         index_id="6a99189a8f4e31db6818c1f8": timeout while waiting for state to
2026-09-03T10:02:47.0730233Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0731360Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0732133Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0732744Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.55s)
```

- 2026-09-04 PASS 32 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-23 01:14](#error-2026-08-23t0114430000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes | qa | 3.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 27 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 23 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 28 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T01:14:43+00:00
```
2026-08-23T01:14:43.8604231Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-23T01:14:43.8607497Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-23T01:14:43.8716592Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-08-23T01:14:43.8717371Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-08-23T01:14:43.8717791Z         
2026-08-23T01:14:43.8718216Z         Error: Error calling API in Create
2026-08-23T01:14:43.8718564Z         
2026-08-23T01:14:43.8719036Z           with mongodbatlas_search_index_api.test,
2026-08-23T01:14:43.8719778Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-23T01:14:43.8720530Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-23T01:14:43.8721013Z         
2026-08-23T01:14:43.8721848Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes
2026-08-23T01:14:43.8722556Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-23T01:14:43.8723335Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-23T01:14:43.8723841Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-23T01:14:43.8724291Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (3.43s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 23 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 54 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
