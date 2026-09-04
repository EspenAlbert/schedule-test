# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes | dev |  | 2.08s
[2026-08-27 03:09](#error-2026-08-27t0309330000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes | dev |  | 2.07s
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 3.03s
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10804.07s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10805.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 39 minutes
- 2026-08-07 PASS 40 minutes
- 2026-08-08 PASS 46 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 20 minutes
- 2026-08-11 PASS 49 minutes
- 2026-08-12 PASS 43 minutes
- 2026-08-13 PASS 36 minutes
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1414814Z === RUN   TestAccSearchIndexAPI_withVector
2026-08-14T01:22:18.1418475Z === CONT  TestAccSearchIndexAPI_withVector
2026-08-14T01:22:18.1435589Z === NAME  TestAccSearchIndexAPI_withVector
2026-08-14T01:22:18.1436124Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-08-14T01:22:18.1436536Z         
2026-08-14T01:22:18.1436853Z         Error: Error calling API in Create
2026-08-14T01:22:18.1437158Z         
2026-08-14T01:22:18.1437534Z           with mongodbatlas_search_index_api.test,
2026-08-14T01:22:18.1438257Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-14T01:22:18.1438928Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-14T01:22:18.1439287Z         
2026-08-14T01:22:18.1440125Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes
2026-08-14T01:22:18.1441028Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-14T01:22:18.1441832Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-14T01:22:18.1442548Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-14T01:22:18.1447903Z --- FAIL: TestAccSearchIndexAPI_withVector (2.77s)
```

- 2026-08-15 PASS 52 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 23 minutes
- 2026-08-18 PASS 11 minutes
- 2026-08-19 PASS 9 minutes
- 2026-08-20 PASS 43 minutes
- 2026-08-21 PASS 56 minutes
- 2026-08-22 PASS an hour
- 2026-08-23: MISSING
- 2026-08-24 PASS 5 minutes
- 2026-08-25 PASS 48 minutes
- 2026-08-26 PASS 31 minutes
- 2026-08-27

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5355414Z === RUN   TestAccSearchIndexAPI_withVector
2026-08-27T03:09:33.5362358Z === CONT  TestAccSearchIndexAPI_withVector
2026-08-27T03:09:33.5468993Z === NAME  TestAccSearchIndexAPI_withVector
2026-08-27T03:09:33.5469941Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-08-27T03:09:33.5470855Z         
2026-08-27T03:09:33.5471415Z         Error: Error calling API in Create
2026-08-27T03:09:33.5480807Z         
2026-08-27T03:09:33.5481453Z           with mongodbatlas_search_index_api.test,
2026-08-27T03:09:33.5482689Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-27T03:09:33.5484178Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-27T03:09:33.5484805Z         
2026-08-27T03:09:33.5486322Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes
2026-08-27T03:09:33.5487998Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-27T03:09:33.5489303Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-27T03:09:33.5490536Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T03:09:33.5504496Z   
2026-08-27T03:09:33.5512283Z --- FAIL: TestAccSearchIndexAPI_withVector (2.73s)
```

- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7536921Z === RUN   TestAccSearchIndexAPI_withVector
2026-08-28T04:08:52.7545267Z === CONT  TestAccSearchIndexAPI_withVector
2026-08-28T04:08:52.7774683Z === NAME  TestAccSearchIndexAPI_withVector
2026-08-28T04:08:52.7775643Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-08-28T04:08:52.7776378Z         
2026-08-28T04:08:52.7776944Z         Error: Error calling API in Create
2026-08-28T04:08:52.7777496Z         
2026-08-28T04:08:52.7778172Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7779525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7781030Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7781700Z         
2026-08-28T04:08:52.7783335Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7785301Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7786669Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7787722Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7789342Z --- FAIL: TestAccSearchIndexAPI_withVector (3.30s)
```

- 2026-08-29 PASS 15 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 18 minutes
- 2026-09-01 PASS 46 minutes
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1912445Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-02T04:59:00.1919339Z === CONT  TestAccSearchIndexAPI_withVector
2026-09-02T04:59:00.2054640Z === NAME  TestAccSearchIndexAPI_withVector
2026-09-02T04:59:00.2055428Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-09-02T04:59:00.2056254Z         
2026-09-02T04:59:00.2056853Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.2057201Z         
2026-09-02T04:59:00.2057569Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2058298Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2059002Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2059364Z         
2026-09-02T04:59:00.2059683Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2060146Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2061070Z         index_id="6a97767379ec95325857a125": timeout while waiting for state to
2026-09-02T04:59:00.2061723Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2062398Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.2063113Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.2063630Z --- FAIL: TestAccSearchIndexAPI_withVector (10804.69s)
```

- 2026-09-03
  - PASS an hour
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0689808Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-03T10:02:47.0693828Z === CONT  TestAccSearchIndexAPI_withVector
2026-09-03T10:02:47.0797488Z === NAME  TestAccSearchIndexAPI_withVector
2026-09-03T10:02:47.0798058Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-09-03T10:02:47.0798518Z         
2026-09-03T10:02:47.0798907Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0799486Z         
2026-09-03T10:02:47.0799878Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0800826Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0801535Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0801916Z         
2026-09-03T10:02:47.0802263Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0802746Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0803367Z         index_id="6a99189a72d7295ca9908e52": timeout while waiting for state to
2026-09-03T10:02:47.0804029Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0804726Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0805462Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0807308Z   diagnostic_detail=
2026-09-03T10:02:47.0811332Z    diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create" tf_proto_version=6.11 tf_req_id=d7c68c14-d7b2-358a-d55f-2aba05a783af tf_rpc=ApplyResourceChange
2026-09-03T10:02:47.0820923Z    test_working_directory=/tmp/plugintest2225126806 test_step_number=1
2026-09-03T10:02:47.0829926Z --- FAIL: TestAccSearchIndexAPI_withVector (10805.63s)
```

- 2026-09-04 PASS 5 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-23 01:14](#error-2026-08-23t0114430000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes | qa | 2.10s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 11 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS an hour
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 30 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23

### Error 2026-08-23T01:14:43+00:00
```
2026-08-23T01:14:43.8601835Z === RUN   TestAccSearchIndexAPI_withVector
2026-08-23T01:14:43.8605532Z === CONT  TestAccSearchIndexAPI_withVector
2026-08-23T01:14:43.8698099Z === NAME  TestAccSearchIndexAPI_withVector
2026-08-23T01:14:43.8698608Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-08-23T01:14:43.8698979Z         
2026-08-23T01:14:43.8699443Z         Error: Error calling API in Create
2026-08-23T01:14:43.8699921Z         
2026-08-23T01:14:43.8700332Z           with mongodbatlas_search_index_api.test,
2026-08-23T01:14:43.8700977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-23T01:14:43.8701590Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-23T01:14:43.8701940Z         
2026-08-23T01:14:43.8702652Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes
2026-08-23T01:14:43.8703400Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-23T01:14:43.8704032Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-23T01:14:43.8704542Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-23T01:14:43.8704982Z --- FAIL: TestAccSearchIndexAPI_withVector (2.99s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 8 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 29 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
