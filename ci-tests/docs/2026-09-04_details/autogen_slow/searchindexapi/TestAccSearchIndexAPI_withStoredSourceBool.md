# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceBool Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 24) FAIL(x 8) TIMEOUT
Success rate: 72.73%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes | dev |  | 2.09s
[2026-08-27 03:09](#error-2026-08-27t0309330000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes | dev |  | 2.06s
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 3.10s
[2026-08-29 04:57](#error-2026-08-29t0457210000) |  | dev | timeout | 10803.01s
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 13602.05s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev |  | 16859.00s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10805.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 59 minutes
- 2026-08-08 PASS 50 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 3 hours
- 2026-08-11 PASS an hour
- 2026-08-12 PASS an hour
- 2026-08-13 PASS an hour
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1415528Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-08-14T01:22:18.1421174Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-14T01:22:18.1477290Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-14T01:22:18.1477821Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-08-14T01:22:18.1478249Z         
2026-08-14T01:22:18.1478577Z         Error: Error calling API in Create
2026-08-14T01:22:18.1478883Z         
2026-08-14T01:22:18.1479251Z           with mongodbatlas_search_index_api.test,
2026-08-14T01:22:18.1479963Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-14T01:22:18.1480621Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-14T01:22:18.1480969Z         
2026-08-14T01:22:18.1481926Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes
2026-08-14T01:22:18.1482927Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-14T01:22:18.1483626Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-14T01:22:18.1484369Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-14T01:22:18.1484810Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (2.90s)
```

- 2026-08-15 PASS an hour
- 2026-08-16: MISSING
- 2026-08-17 PASS 3 hours
- 2026-08-18 PASS 2 hours
- 2026-08-19 PASS 58 minutes
- 2026-08-20 PASS 57 minutes
- 2026-08-21 PASS an hour
- 2026-08-22 PASS an hour
- 2026-08-23: MISSING
- 2026-08-24 PASS 3 hours
- 2026-08-25 PASS 57 minutes
- 2026-08-26 PASS an hour
- 2026-08-27

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5356690Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-08-27T03:09:33.5365370Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-27T03:09:33.5392535Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-27T03:09:33.5393528Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-08-27T03:09:33.5394260Z         
2026-08-27T03:09:33.5394832Z         Error: Error calling API in Create
2026-08-27T03:09:33.5395379Z         
2026-08-27T03:09:33.5396054Z           with mongodbatlas_search_index_api.test,
2026-08-27T03:09:33.5397338Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-27T03:09:33.5398456Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-27T03:09:33.5399033Z         
2026-08-27T03:09:33.5400786Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes
2026-08-27T03:09:33.5402512Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-27T03:09:33.5403820Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-27T03:09:33.5404881Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T03:09:33.5405659Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (2.56s)
```

- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7538198Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-08-28T04:08:52.7547543Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-28T04:08:52.7854123Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-28T04:08:52.7855163Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:08:52.7856131Z         
2026-08-28T04:08:52.7856720Z         Error: Error calling API in Create
2026-08-28T04:08:52.7857269Z         
2026-08-28T04:08:52.7857944Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7859317Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7860814Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7861457Z         
2026-08-28T04:08:52.7863081Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7864842Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7866189Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7867300Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7868117Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (3.99s)
```

- 2026-08-29

### Error 2026-08-29T04:57:21+00:00
```
2026-08-29T04:57:21.0177616Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-08-29T04:57:21.0189429Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-29T04:57:21.0215156Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-29T04:57:21.0216058Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-08-29T04:57:21.0216709Z         
2026-08-29T04:57:21.0217290Z         Error: Error waiting for changes in Create
2026-08-29T04:57:21.0217803Z         
2026-08-29T04:57:21.0218383Z           with mongodbatlas_search_index_api.test,
2026-08-29T04:57:21.0219524Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-29T04:57:21.0220606Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-29T04:57:21.0221144Z         
2026-08-29T04:57:21.0221658Z         group_id="6a922a3c197ad1cbd0630515",
2026-08-29T04:57:21.0222381Z         cluster_name="test-acc-tf-c-5836655662705216729",
2026-08-29T04:57:21.0223493Z         index_id="6a922eae874d7bc49124ad61": timeout while waiting for state to
2026-08-29T04:57:21.0224516Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-08-29T04:57:21.0225588Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-08-29T04:57:21.0227599Z         transient error, wait before retrying to allow resource deletion to finish
2026-08-29T04:57:21.0228535Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (10803.08s)
```

- 2026-08-30: MISSING
- 2026-08-31 PASS 3 hours
- 2026-09-01 PASS an hour
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1913765Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-02T04:59:00.1924935Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-02T04:59:00.2095378Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-02T04:59:00.2095934Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-09-02T04:59:00.2096354Z         
2026-09-02T04:59:00.2096706Z         Error: Error waiting for changes in Update
2026-09-02T04:59:00.2097042Z         
2026-09-02T04:59:00.2097417Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2098137Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2098812Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2099173Z         
2026-09-02T04:59:00.2099495Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2099959Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2100867Z         index_id="6a97767379ec95325857a119": timeout while waiting for state to
2026-09-02T04:59:00.2101523Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2102024Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (13602.49s)
```

- 2026-09-03
  - TIMEOUT 4 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7102914Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T05:44:17.7112320Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T05:44:17.7247736Z panic: test timed out after 5h0m0s
2026-09-03T05:44:17.7248208Z 	running tests:
2026-09-03T05:44:17.7248761Z 		TestAccSearchIndexAPI_withStoredSourceBool (4h40m59s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0690632Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T10:02:47.0696337Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T10:02:47.0821418Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-09-03T10:02:47.0822005Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0822443Z         
2026-09-03T10:02:47.0822825Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0823190Z         
2026-09-03T10:02:47.0823589Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0824351Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0825076Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0825477Z         
2026-09-03T10:02:47.0825815Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0826302Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0827074Z         index_id="6a99189a72d7295ca9908e51": timeout while waiting for state to
2026-09-03T10:02:47.0827738Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0828436Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0829379Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0830413Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (10805.66s)
```

- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 11:37](#error-2026-08-13t1137550000) |  | qa | timeout | 12003.05s
[2026-08-23 01:14](#error-2026-08-23t0114430000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes | qa |  | 2.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 2 hours
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T11:37:55+00:00
```
2026-08-13T11:37:55.4802352Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-08-13T11:37:55.4807171Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-13T11:37:55.4840925Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-13T11:37:55.4841493Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-08-13T11:37:55.4841894Z         
2026-08-13T11:37:55.4842237Z         Error: Error waiting for changes in Update
2026-08-13T11:37:55.4842551Z         
2026-08-13T11:37:55.4842896Z           with mongodbatlas_search_index_api.test,
2026-08-13T11:37:55.4843801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-13T11:37:55.4844465Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-13T11:37:55.4844808Z         
2026-08-13T11:37:55.4845272Z         timeout while waiting for state to become 'READY, STEADY' (last state:
2026-08-13T11:37:55.4845742Z         'BUILDING', timeout: 3h0m0s)
2026-08-13T11:37:55.4846124Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (12003.46s)
```

- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS an hour
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T01:14:43+00:00
```
2026-08-23T01:14:43.8602591Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-08-23T01:14:43.8607927Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-23T01:14:43.8678786Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-23T01:14:43.8679314Z     resource_test.go:162: Step 1/2 error: Error running apply: exit status 1
2026-08-23T01:14:43.8679883Z         
2026-08-23T01:14:43.8680249Z         Error: Error calling API in Create
2026-08-23T01:14:43.8680586Z         
2026-08-23T01:14:43.8680974Z           with mongodbatlas_search_index_api.test,
2026-08-23T01:14:43.8681626Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-23T01:14:43.8682242Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-23T01:14:43.8682617Z         
2026-08-23T01:14:43.8683337Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes
2026-08-23T01:14:43.8684093Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-23T01:14:43.8684713Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-23T01:14:43.8685241Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-23T01:14:43.8685718Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (2.70s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS an hour
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS an hour
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
