# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 23) FAIL(x 9) TIMEOUT
Success rate: 69.70%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 01:22](#error-2026-08-14t0122180000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes | dev |  | 3.05s
[2026-08-17 05:20](#error-2026-08-17t0520490000) |  | dev |  | 17064.00s
[2026-08-27 03:09](#error-2026-08-27t0309330000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes | dev |  | 3.07s
[2026-08-28 04:08](#error-2026-08-28t0408520000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes | dev |  | 2.08s
[2026-08-29 04:57](#error-2026-08-29t0457210000) |  | dev | timeout | 13683.07s
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 13723.02s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 13644.02s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10805.08s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 2 hours
- 2026-08-08 PASS 58 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 3 hours
- 2026-08-11 PASS an hour
- 2026-08-12 PASS an hour
- 2026-08-13 PASS 3 hours
- 2026-08-14

### Error 2026-08-14T01:22:18+00:00
```
2026-08-14T01:22:18.1413922Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-14T01:22:18.1418869Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-14T01:22:18.1540481Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-14T01:22:18.1541211Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-08-14T01:22:18.1541616Z         
2026-08-14T01:22:18.1542130Z         Error: Error calling API in Create
2026-08-14T01:22:18.1542545Z         
2026-08-14T01:22:18.1542928Z           with mongodbatlas_search_index_api.test,
2026-08-14T01:22:18.1543791Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-14T01:22:18.1544617Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-14T01:22:18.1545101Z         
2026-08-14T01:22:18.1546071Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e6261ca4d3d34f82a6bd4/clusters/test-acc-tf-c-4366285902860641581/search/indexes
2026-08-14T01:22:18.1547279Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-14T01:22:18.1548121Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-14T01:22:18.1548818Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-14T01:22:18.1549433Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (3.53s)
```

- 2026-08-15 PASS 2 hours
- 2026-08-16: MISSING
- 2026-08-17

### Error 2026-08-17T05:20:49+00:00
```
2026-08-17T05:20:49.7530138Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-17T05:20:49.7535765Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-17T05:20:49.7543118Z panic: test timed out after 5h0m0s
2026-08-17T05:20:49.7543412Z 	running tests:
2026-08-17T05:20:49.7543806Z 		TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (4h44m24s)
```

- 2026-08-18 PASS 4 hours
- 2026-08-19 PASS 58 minutes
- 2026-08-20 PASS an hour
- 2026-08-21 PASS 3 hours
- 2026-08-22 PASS 2 hours
- 2026-08-23: MISSING
- 2026-08-24 PASS 3 hours
- 2026-08-25 PASS an hour
- 2026-08-26 PASS 2 hours
- 2026-08-27

### Error 2026-08-27T03:09:33+00:00
```
2026-08-27T03:09:33.5353830Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-27T03:09:33.5366107Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-27T03:09:33.5552311Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-27T03:09:33.5553038Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-08-27T03:09:33.5553458Z         
2026-08-27T03:09:33.5553925Z         Error: Error calling API in Create
2026-08-27T03:09:33.5554248Z         
2026-08-27T03:09:33.5554616Z           with mongodbatlas_search_index_api.test,
2026-08-27T03:09:33.5555485Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-27T03:09:33.5556305Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-27T03:09:33.5556675Z         
2026-08-27T03:09:33.5557869Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f97396af220b06a10ad47/clusters/test-acc-tf-c-3874715849736483179/search/indexes
2026-08-27T03:09:33.5559001Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-27T03:09:33.5559868Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-27T03:09:33.5560744Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-27T03:09:33.5561239Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (3.70s)
```

- 2026-08-28

### Error 2026-08-28T04:08:52+00:00
```
2026-08-28T04:08:52.7535253Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-28T04:08:52.7546759Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-28T04:08:52.7615563Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-28T04:08:52.7616693Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-08-28T04:08:52.7617509Z         
2026-08-28T04:08:52.7618073Z         Error: Error calling API in Create
2026-08-28T04:08:52.7618608Z         
2026-08-28T04:08:52.7619277Z           with mongodbatlas_search_index_api.test,
2026-08-28T04:08:52.7620848Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-28T04:08:52.7622138Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-28T04:08:52.7622790Z         
2026-08-28T04:08:52.7624264Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd434dc94e0a78d3a78/clusters/test-acc-tf-c-1159806956717905744/search/indexes
2026-08-28T04:08:52.7625906Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-28T04:08:52.7627217Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-28T04:08:52.7628320Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:08:52.7629204Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (2.79s)
```

- 2026-08-29

### Error 2026-08-29T04:57:21+00:00
```
2026-08-29T04:57:21.0175128Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-29T04:57:21.0184241Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-29T04:57:21.0355797Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-29T04:57:21.0356520Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-08-29T04:57:21.0357045Z         
2026-08-29T04:57:21.0357423Z         Error: Error waiting for changes in Update
2026-08-29T04:57:21.0357856Z         
2026-08-29T04:57:21.0358238Z           with mongodbatlas_search_index_api.test,
2026-08-29T04:57:21.0359067Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-29T04:57:21.0359862Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-29T04:57:21.0360385Z         
2026-08-29T04:57:21.0360721Z         group_id="6a922a3c197ad1cbd0630515",
2026-08-29T04:57:21.0361297Z         cluster_name="test-acc-tf-c-5836655662705216729",
2026-08-29T04:57:21.0362173Z         index_id="6a922eae197ad1cbd065590d": timeout while waiting for state to
2026-08-29T04:57:21.0362923Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-08-29T04:57:21.0363663Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13683.67s)
```

- 2026-08-30: MISSING
- 2026-08-31 PASS 3 hours
- 2026-09-01 PASS an hour
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1910794Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-02T04:59:00.1925757Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-02T04:59:00.2114535Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-02T04:59:00.2115122Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-02T04:59:00.2115546Z         
2026-09-02T04:59:00.2115899Z         Error: Error waiting for changes in Update
2026-09-02T04:59:00.2116230Z         
2026-09-02T04:59:00.2116715Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2117430Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2118105Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2118460Z         
2026-09-02T04:59:00.2118776Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2119238Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2119842Z         index_id="6a9776737f32ed5349fdc8a7": timeout while waiting for state to
2026-09-02T04:59:00.2120730Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2121279Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13723.17s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7100151Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T05:44:17.7109550Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T05:44:17.7174418Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T05:44:17.7175488Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-09-03T05:44:17.7176134Z         
2026-09-03T05:44:17.7176691Z         Error: Error waiting for changes in Update
2026-09-03T05:44:17.7177210Z         
2026-09-03T05:44:17.7177788Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7178951Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7180047Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7180602Z         
2026-09-03T05:44:17.7181255Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7182008Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7183011Z         index_id="6a98c757c4c2ba86c180a1eb": timeout while waiting for state to
2026-09-03T05:44:17.7184062Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7184912Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13644.19s)
```

  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0688474Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T10:02:47.0697290Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T10:02:47.0846118Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-09-03T10:02:47.0846748Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-09-03T10:02:47.0847181Z         
2026-09-03T10:02:47.0847564Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0847920Z         
2026-09-03T10:02:47.0848316Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0849062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0849986Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0850364Z         
2026-09-03T10:02:47.0850708Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0851193Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0851817Z         index_id="6a99189a72d7295ca9908e41": timeout while waiting for state to
2026-09-03T10:02:47.0852474Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0853301Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0854042Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0854659Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (10805.75s)
```

- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 11:37](#error-2026-08-13t1137550000) |  | qa | timeout | 13440.06s
[2026-08-23 01:14](#error-2026-08-23t0114430000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes | qa |  | 4.03s

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
2026-08-13T11:37:55.4800499Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-13T11:37:55.4807587Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-13T11:37:55.4856381Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-13T11:37:55.4856952Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-08-13T11:37:55.4857343Z         
2026-08-13T11:37:55.4857682Z         Error: Error waiting for changes in Update
2026-08-13T11:37:55.4857997Z         
2026-08-13T11:37:55.4858339Z           with mongodbatlas_search_index_api.test,
2026-08-13T11:37:55.4859025Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-13T11:37:55.4859675Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-13T11:37:55.4860083Z         
2026-08-13T11:37:55.4860544Z         timeout while waiting for state to become 'READY, STEADY' (last state:
2026-08-13T11:37:55.4861012Z         'BUILDING', timeout: 3h0m0s)
2026-08-13T11:37:55.4861429Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13440.61s)
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
2026-08-23T01:14:43.8600984Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-23T01:14:43.8608339Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-23T01:14:43.8620587Z   
2026-08-23T01:14:43.8735672Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-23T01:14:43.8736195Z     resource_test.go:118: Step 1/3 error: Error running apply: exit status 1
2026-08-23T01:14:43.8736576Z         
2026-08-23T01:14:43.8736914Z         Error: Error calling API in Create
2026-08-23T01:14:43.8737250Z         
2026-08-23T01:14:43.8737610Z           with mongodbatlas_search_index_api.test,
2026-08-23T01:14:43.8738215Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-23T01:14:43.8738777Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-23T01:14:43.8739138Z         
2026-08-23T01:14:43.8739989Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a8a3d41852bf2142d1a5af2/clusters/test-acc-tf-c-5960356520266734261/search/indexes
2026-08-23T01:14:43.8740714Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-08-23T01:14:43.8741309Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-08-23T01:14:43.8741822Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-08-23T01:14:43.8742268Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (4.29s)
```

- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 2 hours
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 2 hours
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
