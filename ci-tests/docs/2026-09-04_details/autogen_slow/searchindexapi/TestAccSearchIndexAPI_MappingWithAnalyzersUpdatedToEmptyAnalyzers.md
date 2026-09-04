# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 25) FAIL(x 8)
Success rate: 75.76%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes | dev |  | 5.03s
[2026-08-27 03:09](#error-2026-08-27t0309330000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes | dev |  | 2.06s
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 3.01s
[2026-08-29 04:57](#error-2026-08-29t0457210000) |  | dev | timeout | 10804.03s
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10803.01s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 14327.07s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 11271.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 55 minutes
- 2026-08-07 PASS an hour
- 2026-08-08 PASS 55 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 55 minutes
- 2026-08-11 PASS an hour
- 2026-08-12 PASS an hour
- 2026-08-13 PASS an hour
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1411912Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-14T01:22:18.1420310Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-14T01:22:18.1590533Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-14T01:22:18.1591286Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-08-14T01:22:18.1591687Z         
2026-08-14T01:22:18.1592097Z         Error: Error calling API in Create
2026-08-14T01:22:18.1592406Z         
2026-08-14T01:22:18.1592776Z           with mongodbatlas_search_index_api.test,
2026-08-14T01:22:18.1593772Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-14T01:22:18.1594471Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-14T01:22:18.1594835Z         
2026-08-14T01:22:18.1595655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes
2026-08-14T01:22:18.1596560Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-14T01:22:18.1597361Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-14T01:22:18.1597953Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-14T01:22:18.1598494Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (5.32s)
```

- 2026-08-15 PASS 57 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS an hour
- 2026-08-18 PASS an hour
- 2026-08-19 PASS 47 minutes
- 2026-08-20 PASS 57 minutes
- 2026-08-21 PASS 59 minutes
- 2026-08-22 PASS an hour
- 2026-08-23: MISSING
- 2026-08-24 PASS an hour
- 2026-08-25 PASS an hour
- 2026-08-26 PASS 55 minutes
- 2026-08-27

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5349833Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-27T03:09:33.5367015Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-27T03:09:33.5391682Z    test_step_number=1 test_name=TestAccSearchIndexAPI_withStoredSourceBool
2026-08-27T03:09:33.5430838Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-27T03:09:33.5431973Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-08-27T03:09:33.5432689Z         
2026-08-27T03:09:33.5433261Z         Error: Error calling API in Create
2026-08-27T03:09:33.5433808Z         
2026-08-27T03:09:33.5434473Z           with mongodbatlas_search_index_api.test,
2026-08-27T03:09:33.5435782Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-27T03:09:33.5437054Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-27T03:09:33.5437701Z         
2026-08-27T03:09:33.5439251Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes
2026-08-27T03:09:33.5441071Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-27T03:09:33.5442279Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-27T03:09:33.5443278Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T03:09:33.5444200Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (2.64s)
```

- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7531445Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-28T04:08:52.7549276Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-28T04:08:52.7696113Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-28T04:08:52.7697325Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:08:52.7698142Z         
2026-08-28T04:08:52.7698719Z         Error: Error calling API in Create
2026-08-28T04:08:52.7699248Z         
2026-08-28T04:08:52.7699881Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7701368Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7702609Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7703257Z         
2026-08-28T04:08:52.7704863Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7706630Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7707972Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7709059Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7710042Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (3.11s)
```

- 2026-08-29

### Error 2026-08-29T04:57:21+00:00
```
2026-08-29T04:57:21.0171659Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-29T04:57:21.0185063Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-29T04:57:21.0324894Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-29T04:57:21.0325633Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-08-29T04:57:21.0334578Z         
2026-08-29T04:57:21.0335030Z         Error: Error waiting for changes in Create
2026-08-29T04:57:21.0335424Z         
2026-08-29T04:57:21.0335826Z           with mongodbatlas_search_index_api.test,
2026-08-29T04:57:21.0336572Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-29T04:57:21.0337276Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-29T04:57:21.0337656Z         
2026-08-29T04:57:21.0338002Z         group_id="6a922a3c197ad1cbd0630515",
2026-08-29T04:57:21.0338478Z         cluster_name="test-acc-tf-c-5836655662705216729",
2026-08-29T04:57:21.0339097Z         index_id="6a922eae197ad1cbd065590f": timeout while waiting for state to
2026-08-29T04:57:21.0339738Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-08-29T04:57:21.0340407Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-08-29T04:57:21.0341131Z         transient error, wait before retrying to allow resource deletion to finish
2026-08-29T04:57:21.0342300Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10804.28s)
```

- 2026-08-30: MISSING
- 2026-08-31 PASS an hour
- 2026-09-01 PASS an hour
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1906686Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-02T04:59:00.1922225Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-02T04:59:00.1955862Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-02T04:59:00.1956992Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-09-02T04:59:00.1957749Z         
2026-09-02T04:59:00.1958390Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.1958991Z         
2026-09-02T04:59:00.1959664Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.1961258Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.1962582Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.1963244Z         
2026-09-02T04:59:00.1963798Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.1964794Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.1965950Z         index_id="6a9776737f32ed5349fdc8a0": timeout while waiting for state to
2026-09-02T04:59:00.1967150Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.1968366Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.1969701Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.1971131Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (10803.12s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7096784Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T05:44:17.7111337Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T05:44:17.7235993Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T05:44:17.7237167Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-03T05:44:17.7237832Z         
2026-09-03T05:44:17.7238403Z         Error: Error waiting for changes in Update
2026-09-03T05:44:17.7238929Z         
2026-09-03T05:44:17.7239497Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7240685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7241988Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7242561Z         
2026-09-03T05:44:17.7243073Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7243841Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7244844Z         index_id="6a98c757c4c2ba86c180a1ed": timeout while waiting for state to
2026-09-03T05:44:17.7245910Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7246891Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (14327.72s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0686190Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T10:02:47.0694838Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T10:02:47.0873420Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-09-03T10:02:47.0874644Z     resource_test.go:74: Step 2/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0875346Z         
2026-09-03T10:02:47.0875951Z         Error: Error waiting for changes in Update
2026-09-03T10:02:47.0876502Z         
2026-09-03T10:02:47.0877133Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0878412Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0879895Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0880559Z         
2026-09-03T10:02:47.0881139Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0881979Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0883047Z         index_id="6a99189a72d7295ca9908e5e": timeout while waiting for state to
2026-09-03T10:02:47.0884178Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0905188Z    test_step_number=2 test_name=TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping test_terraform_path=/home/runner/work/_temp/0c1db9d8-7e8f-4171-b733-778630ab847c/terraform test_working_directory=/tmp/plugintest118871097
2026-09-03T10:02:47.0919583Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (11271.89s)
```

- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-23 01:14](#error-2026-08-23t0114430000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes | qa | 2.04s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS an hour
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 2 hours
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
2026-08-23T01:14:43.8598854Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-23T01:14:43.8606392Z === CONT  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-23T01:14:43.8660431Z === NAME  TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-08-23T01:14:43.8661007Z     resource_test.go:74: Step 1/2 error: Error running apply: exit status 1
2026-08-23T01:14:43.8661392Z         
2026-08-23T01:14:43.8661720Z         Error: Error calling API in Create
2026-08-23T01:14:43.8662052Z         
2026-08-23T01:14:43.8662426Z           with mongodbatlas_search_index_api.test,
2026-08-23T01:14:43.8663040Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-23T01:14:43.8663603Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-23T01:14:43.8663961Z         
2026-08-23T01:14:43.8664622Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes
2026-08-23T01:14:43.8665443Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-23T01:14:43.8666016Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-23T01:14:43.8666490Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-23T01:14:43.8666997Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (2.44s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS an hour
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 59 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
