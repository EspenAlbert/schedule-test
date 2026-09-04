# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes | dev |  | 2.08s
[2026-08-18 05:00](#error-2026-08-18t0500230000) |  | dev | timeout | 14738.06s
[2026-08-27 03:09](#error-2026-08-27t0309330000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes | dev |  | 4.01s
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 3.03s
[2026-08-29 04:57](#error-2026-08-29t0457210000) |  | dev | timeout | 14125.05s
[2026-08-31 05:11](#error-2026-08-31t0511160000) |  | dev | timeout | 11882.04s
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 11361.09s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 14164.03s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 11272.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 59 minutes
- 2026-08-08 PASS 51 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 2 hours
- 2026-08-11 PASS an hour
- 2026-08-12 PASS an hour
- 2026-08-13 PASS an hour
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1413008Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-14T01:22:18.1419321Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-14T01:22:18.1456367Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-14T01:22:18.1456949Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-08-14T01:22:18.1457349Z         
2026-08-14T01:22:18.1457669Z         Error: Error calling API in Create
2026-08-14T01:22:18.1457966Z         
2026-08-14T01:22:18.1458478Z           with mongodbatlas_search_index_api.test,
2026-08-14T01:22:18.1459199Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-14T01:22:18.1459886Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-14T01:22:18.1460247Z         
2026-08-14T01:22:18.1461066Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes
2026-08-14T01:22:18.1462058Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-14T01:22:18.1462754Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-14T01:22:18.1463333Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-14T01:22:18.1463803Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (2.83s)
```

- 2026-08-15 PASS 2 hours
- 2026-08-16: MISSING
- 2026-08-17 PASS 2 hours
- 2026-08-18

### Error 2026-08-18T05:00:23+00:00
```
2026-08-18T05:00:23.8722109Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-18T05:00:23.8730305Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-18T05:00:23.8747021Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-18T05:00:23.8747672Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-08-18T05:00:23.8748118Z         
2026-08-18T05:00:23.8748491Z         Error: Error waiting for changes in Update
2026-08-18T05:00:23.8748840Z         
2026-08-18T05:00:23.8749205Z           with mongodbatlas_search_index_api.test,
2026-08-18T05:00:23.8749929Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-18T05:00:23.8750626Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-18T05:00:23.8750998Z         
2026-08-18T05:00:23.8751484Z         timeout while waiting for state to become 'READY, STEADY' (last state:
2026-08-18T05:00:23.8751994Z         'BUILDING', timeout: 3h0m0s)
2026-08-18T05:00:23.8752453Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (14738.58s)
```

- 2026-08-19 PASS 52 minutes
- 2026-08-20 PASS an hour
- 2026-08-21 PASS an hour
- 2026-08-22 PASS 29 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS an hour
- 2026-08-25 PASS 57 minutes
- 2026-08-26 PASS an hour
- 2026-08-27

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5352129Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-27T03:09:33.5363090Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-27T03:09:33.5601246Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-27T03:09:33.5601988Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-08-27T03:09:33.5602403Z         
2026-08-27T03:09:33.5602833Z         Error: Error calling API in Create
2026-08-27T03:09:33.5603176Z         
2026-08-27T03:09:33.5603544Z           with mongodbatlas_search_index_api.test,
2026-08-27T03:09:33.5604407Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-27T03:09:33.5605123Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-27T03:09:33.5605495Z         
2026-08-27T03:09:33.5606463Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes
2026-08-27T03:09:33.5607538Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-27T03:09:33.5608266Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-27T03:09:33.5609084Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T03:09:33.5609590Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (4.09s)
```

- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7533548Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-28T04:08:52.7548320Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-28T04:08:52.7736309Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-28T04:08:52.7737577Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:08:52.7738357Z         
2026-08-28T04:08:52.7738947Z         Error: Error calling API in Create
2026-08-28T04:08:52.7739508Z         
2026-08-28T04:08:52.7740178Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7741799Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7743128Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7743806Z         
2026-08-28T04:08:52.7745292Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7746942Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7748243Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7749350Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7773997Z    test_working_directory=/tmp/plugintest738292664
2026-08-28T04:08:52.7788534Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (3.27s)
```

- 2026-08-29

### Error 2026-08-29T04:57:21+00:00
```
2026-08-29T04:57:21.0173679Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-29T04:57:21.0182711Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-29T04:57:21.0376754Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-29T04:57:21.0377432Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-08-29T04:57:21.0377847Z         
2026-08-29T04:57:21.0378354Z         Error: Error waiting for changes in Update
2026-08-29T04:57:21.0378693Z         
2026-08-29T04:57:21.0379157Z           with mongodbatlas_search_index_api.test,
2026-08-29T04:57:21.0379965Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-29T04:57:21.0380747Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-29T04:57:21.0381114Z         
2026-08-29T04:57:21.0381524Z         group_id="6a922a3c197ad1cbd0630515",
2026-08-29T04:57:21.0382013Z         cluster_name="test-acc-tf-c-5836655662705216729",
2026-08-29T04:57:21.0382710Z         index_id="6a922eae874d7bc49124ad62": timeout while waiting for state to
2026-08-29T04:57:21.0383590Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-08-29T04:57:21.0384238Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (14125.51s)
```

- 2026-08-30: MISSING
- 2026-08-31

### Error 2026-08-31T05:11:16+00:00
```
2026-08-31T05:11:16.5451602Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-31T05:11:16.5466633Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-31T05:11:16.5488412Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-31T05:11:16.5489141Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-08-31T05:11:16.5489631Z         
2026-08-31T05:11:16.5490058Z         Error: Error waiting for changes in Update
2026-08-31T05:11:16.5490458Z         
2026-08-31T05:11:16.5490904Z           with mongodbatlas_search_index_api.test,
2026-08-31T05:11:16.5491782Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-31T05:11:16.5492584Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-31T05:11:16.5493007Z         
2026-08-31T05:11:16.5493398Z         group_id="6a94cf64aa75b90f4a29dd3f",
2026-08-31T05:11:16.5493963Z         cluster_name="test-acc-tf-c-2496794755223453049",
2026-08-31T05:11:16.5494696Z         index_id="6a94d46a0cc71681c0c5196e": timeout while waiting for state to
2026-08-31T05:11:16.5495471Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-08-31T05:11:16.5496243Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (11882.43s)
```

- 2026-09-01 PASS an hour
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1908807Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-02T04:59:00.1920105Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-02T04:59:00.2076088Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-02T04:59:00.2076689Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-02T04:59:00.2077106Z         
2026-09-02T04:59:00.2077593Z         Error: Error waiting for changes in Update
2026-09-02T04:59:00.2077922Z         
2026-09-02T04:59:00.2078287Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2079006Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2079686Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2080043Z         
2026-09-02T04:59:00.2080554Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2081117Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2081733Z         index_id="6a97767379ec95325857a12b": timeout while waiting for state to
2026-09-02T04:59:00.2082371Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2082899Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (11361.89s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7098649Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T05:44:17.7108156Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T05:44:17.7205140Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T05:44:17.7206088Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-03T05:44:17.7206719Z         
2026-09-03T05:44:17.7207271Z         Error: Error waiting for changes in Update
2026-09-03T05:44:17.7207795Z         
2026-09-03T05:44:17.7208348Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7209480Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7210575Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7211318Z         
2026-09-03T05:44:17.7211830Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7212761Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7213768Z         index_id="6a98c757c4c2ba86c180a1ec": timeout while waiting for state to
2026-09-03T05:44:17.7214828Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7215689Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (14164.31s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0687405Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T10:02:47.0694268Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T10:02:47.0907170Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-09-03T10:02:47.0908258Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-09-03T10:02:47.0908989Z         
2026-09-03T10:02:47.0909878Z         Error: Error waiting for changes in Update
2026-09-03T10:02:47.0910453Z         
2026-09-03T10:02:47.0911072Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0912367Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0913586Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0914230Z         
2026-09-03T10:02:47.0914811Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0915686Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0917014Z         index_id="6a99189a72d7295ca9908e3e": timeout while waiting for state to
2026-09-03T10:02:47.0918239Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0920706Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (11272.30s)
```

- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 11:37](#error-2026-08-13t1137550000) |  | qa | timeout | 11311.05s
[2026-08-23 01:14](#error-2026-08-23t0114430000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes | qa |  | 2.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS an hour
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13

### Error 2026-08-13T11:37:55+00:00
```
2026-08-13T11:37:55.4799518Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-13T11:37:55.4805887Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-13T11:37:55.4824981Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-13T11:37:55.4825585Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-08-13T11:37:55.4825996Z         
2026-08-13T11:37:55.4826341Z         Error: Error waiting for changes in Update
2026-08-13T11:37:55.4826658Z         
2026-08-13T11:37:55.4827004Z           with mongodbatlas_search_index_api.test,
2026-08-13T11:37:55.4828184Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-13T11:37:55.4828849Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-13T11:37:55.4829247Z         
2026-08-13T11:37:55.4829724Z         timeout while waiting for state to become 'READY, STEADY' (last state:
2026-08-13T11:37:55.4830206Z         'BUILDING', timeout: 3h0m0s)
2026-08-13T11:37:55.4830632Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (11311.53s)
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
2026-08-23T01:14:43.8600070Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-23T01:14:43.8605929Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-23T01:14:43.8620987Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-23T01:14:43.8621543Z     resource_test.go:96: Step 1/2 error: Error running apply: exit status 1
2026-08-23T01:14:43.8621978Z         
2026-08-23T01:14:43.8622327Z         Error: Error calling API in Create
2026-08-23T01:14:43.8622708Z         
2026-08-23T01:14:43.8623095Z           with mongodbatlas_search_index_api.test,
2026-08-23T01:14:43.8623750Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-23T01:14:43.8624360Z           12:         resource "mongodbatlas_search_index_api" "test" {
2026-08-23T01:14:43.8624779Z         
2026-08-23T01:14:43.8625526Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes
2026-08-23T01:14:43.8626346Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-23T01:14:43.8626981Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-23T01:14:43.8627531Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-23T01:14:43.8628000Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (2.26s)
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
