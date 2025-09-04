# search_index/searchindex/TestAccSearchIndex_withMapping Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4) TIMEOUT
Success rate: 89.19%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev | 3.08s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev | 3.08s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev | 3.03s
[2025-09-01 04:30](#error-2025-09-01t0430200000) |  | dev | 212455.00s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | 3.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 7 seconds
- 2025-08-07 PASS 52 seconds
- 2025-08-08 PASS 6 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 6 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 5 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 7 seconds
- 2025-08-20
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 7 seconds
- 2025-08-22 PASS 7 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2163097Z === RUN   TestAccSearchIndex_withMapping
2025-08-23T00:52:42.2180037Z === CONT  TestAccSearchIndex_withMapping
2025-08-23T00:52:45.9151000Z === NAME  TestAccSearchIndex_withMapping
2025-08-23T00:52:45.9151553Z     resource_search_index_test.go:42: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:45.9152042Z         
2025-08-23T00:52:45.9154305Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:45.9156915Z         
2025-08-23T00:52:45.9157418Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:45.9158314Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:45.9158898Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:45.9159207Z         
2025-08-23T00:52:45.9610712Z --- FAIL: TestAccSearchIndex_withMapping (3.75s)
```

- 2025-08-24 PASS 6 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3217492Z === RUN   TestAccSearchIndex_withMapping
2025-08-25T00:56:06.3374229Z === CONT  TestAccSearchIndex_withMapping
2025-08-25T00:56:10.0619779Z === NAME  TestAccSearchIndex_withMapping
2025-08-25T00:56:10.0620714Z     resource_search_index_test.go:42: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:10.0621401Z         
2025-08-25T00:56:10.0625182Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:10.0627854Z         
2025-08-25T00:56:10.0628404Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:10.0629516Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:10.0630536Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:10.0631038Z         
2025-08-25T00:56:10.1131605Z --- FAIL: TestAccSearchIndex_withMapping (3.79s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3735330Z === RUN   TestAccSearchIndex_withMapping
2025-08-28T00:52:10.3775579Z === CONT  TestAccSearchIndex_withMapping
2025-08-28T00:52:13.6141264Z === NAME  TestAccSearchIndex_withMapping
2025-08-28T00:52:13.6141910Z     resource_search_index_test.go:42: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:13.6142314Z         
2025-08-28T00:52:13.6144212Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:13.6146041Z         
2025-08-28T00:52:13.6146461Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:13.6147083Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:13.6147639Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:13.6147933Z         
2025-08-28T00:52:13.6611897Z --- FAIL: TestAccSearchIndex_withMapping (3.29s)
```

- 2025-08-29 PASS 7 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 6 seconds
- 2025-09-01
  - TIMEOUT 2 days

### Error 2025-09-01T04:30:20+00:00
```
2025-09-01T04:30:20.4779743Z === RUN   TestAccSearchIndex_withMapping
2025-09-01T04:30:20.4780379Z     resource_search_index_test.go:39: Creating execution cluster: test-acc-tf-c-5476417269767444668
2025-09-01T04:30:21.2350930Z 2025/09/01 04:30:21 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T04:33:21.4258547Z 2025/09/01 04:33:21 [TRACE] Waiting 1m0s before next try
2025-09-01T04:34:21.6534378Z 2025/09/01 04:34:21 [TRACE] Waiting 10s before next try
2025-09-01T04:34:31.7879900Z 2025/09/01 04:34:31 [TRACE] Waiting 1m0s before next try
2025-09-01T04:35:32.0011775Z 2025/09/01 04:35:32 [TRACE] Waiting 10s before next try
2025-09-01T04:35:42.1382965Z 2025/09/01 04:35:42 [TRACE] Waiting 1m0s before next try
2025-09-01T04:36:42.3436551Z 2025/09/01 04:36:42 [TRACE] Waiting 10s before next try
2025-09-01T04:36:52.4889553Z 2025/09/01 04:36:52 [TRACE] Waiting 1m0s before next try
2025-09-01T04:37:52.6776629Z 2025/09/01 04:37:52 [TRACE] Waiting 10s before next try
2025-09-01T04:38:02.8796341Z 2025/09/01 04:38:02 [TRACE] Waiting 1m0s before next try
2025-09-01T04:39:03.1442101Z 2025/09/01 04:39:03 [TRACE] Waiting 10s before next try
2025-09-01T04:39:13.2941064Z 2025/09/01 04:39:13 [TRACE] Waiting 1m0s before next try
2025-09-01T04:40:13.5164182Z 2025/09/01 04:40:13 [TRACE] Waiting 10s before next try
2025-09-01T04:40:23.6464318Z 2025/09/01 04:40:23 [TRACE] Waiting 1m0s before next try
2025-09-01T04:41:23.9150998Z 2025/09/01 04:41:23 [TRACE] Waiting 10s before next try
2025-09-01T04:41:34.0384276Z 2025/09/01 04:41:34 [TRACE] Waiting 1m0s before next try
2025-09-01T04:42:34.2549209Z 2025/09/01 04:42:34 [TRACE] Waiting 10s before next try
2025-09-01T04:42:44.3888347Z 2025/09/01 04:42:44 [TRACE] Waiting 1m0s before next try
2025-09-01T04:43:44.6657968Z 2025/09/01 04:43:44 [TRACE] Waiting 10s before next try
2025-09-01T04:43:54.7843627Z 2025/09/01 04:43:54 [TRACE] Waiting 1m0s before next try
2025-09-01T04:44:54.9742418Z 2025/09/01 04:44:54 [TRACE] Waiting 10s before next try
2025-09-01T04:45:05.1226867Z 2025/09/01 04:45:05 [TRACE] Waiting 1m0s before next try
2025-09-01T04:46:05.3144625Z 2025/09/01 04:46:05 [TRACE] Waiting 10s before next try
2025-09-01T04:46:15.4579335Z 2025/09/01 04:46:15 [TRACE] Waiting 1m0s before next try
2025-09-01T04:47:15.6710035Z 2025/09/01 04:47:15 [TRACE] Waiting 10s before next try
2025-09-01T04:47:25.8093999Z 2025/09/01 04:47:25 [TRACE] Waiting 1m0s before next try
2025-09-01T04:48:25.9953360Z 2025/09/01 04:48:25 [TRACE] Waiting 10s before next try
2025-09-01T04:48:36.1300044Z 2025/09/01 04:48:36 [TRACE] Waiting 1m0s before next try
2025-09-01T04:49:36.3670634Z 2025/09/01 04:49:36 [TRACE] Waiting 10s before next try
2025-09-01T04:49:46.5047474Z 2025/09/01 04:49:46 [TRACE] Waiting 1m0s before next try
2025-09-01T04:50:46.7197451Z 2025/09/01 04:50:46 [TRACE] Waiting 10s before next try
2025-09-01T04:50:56.8713365Z 2025/09/01 04:50:56 [TRACE] Waiting 1m0s before next try
2025-09-01T04:51:57.0380957Z 2025/09/01 04:51:57 [TRACE] Waiting 10s before next try
2025-09-01T04:52:07.1629865Z 2025/09/01 04:52:07 [TRACE] Waiting 1m0s before next try
2025-09-01T04:53:07.3707636Z 2025/09/01 04:53:07 [TRACE] Waiting 10s before next try
2025-09-01T04:53:17.5082485Z 2025/09/01 04:53:17 [TRACE] Waiting 1m0s before next try
2025-09-01T04:54:17.7007502Z 2025/09/01 04:54:17 [TRACE] Waiting 10s before next try
2025-09-01T04:54:27.8657634Z 2025/09/01 04:54:27 [TRACE] Waiting 1m0s before next try
2025-09-01T04:55:28.1175556Z 2025/09/01 04:55:28 [TRACE] Waiting 10s before next try
2025-09-01T04:55:38.2484100Z 2025/09/01 04:55:38 [TRACE] Waiting 1m0s before next try
2025-09-01T04:56:38.4668157Z 2025/09/01 04:56:38 [TRACE] Waiting 10s before next try
2025-09-01T04:56:48.6078763Z 2025/09/01 04:56:48 [TRACE] Waiting 1m0s before next try
2025-09-01T04:57:48.8044582Z 2025/09/01 04:57:48 [TRACE] Waiting 10s before next try
2025-09-01T04:57:58.9283062Z 2025/09/01 04:57:58 [TRACE] Waiting 1m0s before next try
2025-09-01T04:58:59.1362397Z 2025/09/01 04:58:59 [TRACE] Waiting 10s before next try
2025-09-01T04:59:09.2846477Z 2025/09/01 04:59:09 [TRACE] Waiting 1m0s before next try
2025-09-01T05:00:09.5959282Z 2025/09/01 05:00:09 [TRACE] Waiting 10s before next try
2025-09-01T05:00:19.7373666Z 2025/09/01 05:00:19 [TRACE] Waiting 1m0s before next try
2025-09-01T05:01:19.9679348Z 2025/09/01 05:01:19 [TRACE] Waiting 10s before next try
2025-09-01T05:01:30.1046048Z 2025/09/01 05:01:30 [TRACE] Waiting 1m0s before next try
2025-09-01T05:02:30.3112011Z 2025/09/01 05:02:30 [TRACE] Waiting 10s before next try
2025-09-01T05:02:40.4516589Z 2025/09/01 05:02:40 [TRACE] Waiting 1m0s before next try
2025-09-01T05:03:40.6587417Z 2025/09/01 05:03:40 [TRACE] Waiting 10s before next try
2025-09-01T05:03:50.8209667Z 2025/09/01 05:03:50 [TRACE] Waiting 1m0s before next try
2025-09-01T05:04:50.9980775Z 2025/09/01 05:04:50 [TRACE] Waiting 10s before next try
2025-09-01T05:05:01.1289023Z 2025/09/01 05:05:01 [TRACE] Waiting 1m0s before next try
2025-09-01T05:06:01.3319744Z 2025/09/01 05:06:01 [TRACE] Waiting 10s before next try
2025-09-01T05:06:11.4719817Z 2025/09/01 05:06:11 [TRACE] Waiting 1m0s before next try
2025-09-01T05:07:11.6598565Z 2025/09/01 05:07:11 [TRACE] Waiting 10s before next try
2025-09-01T05:07:21.8103493Z 2025/09/01 05:07:21 [TRACE] Waiting 1m0s before next try
2025-09-01T05:08:22.0239509Z 2025/09/01 05:08:22 [TRACE] Waiting 10s before next try
2025-09-01T05:08:32.1477278Z 2025/09/01 05:08:32 [TRACE] Waiting 1m0s before next try
2025-09-01T05:09:32.3860957Z 2025/09/01 05:09:32 [TRACE] Waiting 10s before next try
2025-09-01T05:09:42.5053821Z 2025/09/01 05:09:42 [TRACE] Waiting 1m0s before next try
2025-09-01T05:10:42.7305846Z 2025/09/01 05:10:42 [TRACE] Waiting 10s before next try
2025-09-01T05:10:52.8675231Z 2025/09/01 05:10:52 [TRACE] Waiting 1m0s before next try
2025-09-01T05:11:53.0846661Z 2025/09/01 05:11:53 [TRACE] Waiting 10s before next try
2025-09-01T05:12:03.2234547Z 2025/09/01 05:12:03 [TRACE] Waiting 1m0s before next try
2025-09-01T05:13:03.5128294Z 2025/09/01 05:13:03 [TRACE] Waiting 10s before next try
2025-09-01T05:13:13.6443836Z 2025/09/01 05:13:13 [TRACE] Waiting 1m0s before next try
2025-09-01T05:14:13.8083401Z 2025/09/01 05:14:13 [TRACE] Waiting 10s before next try
2025-09-01T05:14:23.9410711Z 2025/09/01 05:14:23 [TRACE] Waiting 1m0s before next try
2025-09-01T05:15:24.1400817Z 2025/09/01 05:15:24 [TRACE] Waiting 10s before next try
2025-09-01T05:15:34.2549991Z 2025/09/01 05:15:34 [TRACE] Waiting 1m0s before next try
2025-09-01T05:16:34.4931991Z 2025/09/01 05:16:34 [TRACE] Waiting 10s before next try
2025-09-01T05:16:44.6038950Z 2025/09/01 05:16:44 [TRACE] Waiting 1m0s before next try
2025-09-01T05:17:44.7926166Z 2025/09/01 05:17:44 [TRACE] Waiting 10s before next try
2025-09-01T05:17:54.9304365Z 2025/09/01 05:17:54 [TRACE] Waiting 1m0s before next try
2025-09-01T05:18:55.2779455Z 2025/09/01 05:18:55 [TRACE] Waiting 10s before next try
2025-09-01T05:19:05.4310034Z 2025/09/01 05:19:05 [TRACE] Waiting 1m0s before next try
2025-09-01T05:20:05.6623073Z 2025/09/01 05:20:05 [TRACE] Waiting 10s before next try
2025-09-01T05:20:15.7844656Z 2025/09/01 05:20:15 [TRACE] Waiting 1m0s before next try
2025-09-01T05:21:15.9855571Z 2025/09/01 05:21:15 [TRACE] Waiting 10s before next try
2025-09-01T05:21:26.1286334Z 2025/09/01 05:21:26 [TRACE] Waiting 1m0s before next try
2025-09-01T05:22:26.3310323Z 2025/09/01 05:22:26 [TRACE] Waiting 10s before next try
2025-09-01T05:22:36.4798617Z 2025/09/01 05:22:36 [TRACE] Waiting 1m0s before next try
2025-09-01T05:23:36.6735685Z 2025/09/01 05:23:36 [TRACE] Waiting 10s before next try
2025-09-01T05:23:46.8141023Z 2025/09/01 05:23:46 [TRACE] Waiting 1m0s before next try
2025-09-01T05:24:47.0404284Z 2025/09/01 05:24:47 [TRACE] Waiting 10s before next try
2025-09-01T05:24:57.1834132Z 2025/09/01 05:24:57 [TRACE] Waiting 1m0s before next try
2025-09-01T05:25:57.3875079Z 2025/09/01 05:25:57 [TRACE] Waiting 10s before next try
2025-09-01T05:26:07.5363176Z 2025/09/01 05:26:07 [TRACE] Waiting 1m0s before next try
2025-09-01T05:27:07.8177632Z 2025/09/01 05:27:07 [TRACE] Waiting 10s before next try
2025-09-01T05:27:17.9465212Z 2025/09/01 05:27:17 [TRACE] Waiting 1m0s before next try
2025-09-01T05:28:18.1065418Z 2025/09/01 05:28:18 [TRACE] Waiting 10s before next try
2025-09-01T05:28:28.2509010Z 2025/09/01 05:28:28 [TRACE] Waiting 1m0s before next try
2025-09-01T05:29:28.4580280Z 2025/09/01 05:29:28 [TRACE] Waiting 10s before next try
2025-09-01T05:29:38.5999877Z 2025/09/01 05:29:38 [TRACE] Waiting 1m0s before next try
2025-09-01T05:30:15.9305407Z panic: test timed out after 5h0m0s
2025-09-01T05:30:15.9306943Z 	running tests:
2025-09-01T05:30:15.9305407Z panic: test timed out after 5h0m0s
2025-09-01T05:30:15.9306943Z 	running tests:
2025-09-01T05:30:15.9307365Z 		TestAccSearchIndex_withMapping (59m55s)
```

  - PASS 5 seconds
  - FAIL 3 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8778404Z === RUN   TestAccSearchIndex_withMapping
2025-09-01T08:30:14.8880516Z === CONT  TestAccSearchIndex_withMapping
2025-09-01T08:30:18.1286001Z === NAME  TestAccSearchIndex_withMapping
2025-09-01T08:30:18.1286928Z     resource_search_index_test.go:42: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:18.1287592Z         
2025-09-01T08:30:18.1289853Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:18.1291856Z         
2025-09-01T08:30:18.1292183Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:18.1292791Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:18.1293351Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:18.1293651Z         
2025-09-01T08:30:18.1749251Z --- FAIL: TestAccSearchIndex_withMapping (3.29s)
```

  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 5 seconds