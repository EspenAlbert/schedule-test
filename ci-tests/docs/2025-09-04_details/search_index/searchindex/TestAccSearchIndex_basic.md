# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev |  | 3.04s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev |  | 2.08s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev |  | 4.04s
[2025-09-01 02:30](#error-2025-09-01t0230190000) |  | dev | timeout | 3600.07s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev |  | 4.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 9 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 7 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15 PASS 8 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 6 seconds
- 2025-08-22 PASS 7 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2160836Z === RUN   TestAccSearchIndex_basic
2025-08-23T00:52:42.2181677Z === CONT  TestAccSearchIndex_basic
2025-08-23T00:52:45.5525667Z === NAME  TestAccSearchIndex_basic
2025-08-23T00:52:45.5526501Z     resource_search_index_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-08-23T00:52:45.5527031Z         
2025-08-23T00:52:45.5529638Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:45.5531135Z         
2025-08-23T00:52:45.5531512Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:45.5532189Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:45.5532757Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:45.5533119Z         
2025-08-23T00:52:45.6035566Z --- FAIL: TestAccSearchIndex_basic (3.39s)
```

- 2025-08-24 PASS 7 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3214881Z === RUN   TestAccSearchIndex_basic
2025-08-25T00:56:06.3382547Z === CONT  TestAccSearchIndex_basic
2025-08-25T00:56:09.0808514Z   
2025-08-25T00:56:09.0809290Z     resource_search_index_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-08-25T00:56:09.0809908Z         
2025-08-25T00:56:09.0812292Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.0814187Z         
2025-08-25T00:56:09.0814612Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.0815703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.0816865Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.0817391Z         
2025-08-25T00:56:09.1332387Z --- FAIL: TestAccSearchIndex_basic (2.81s)
```

- 2025-08-26 PASS 6 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3733033Z === RUN   TestAccSearchIndex_basic
2025-08-28T00:52:10.3783733Z === CONT  TestAccSearchIndex_basic
2025-08-28T00:52:14.6776021Z === NAME  TestAccSearchIndex_basic
2025-08-28T00:52:14.6776900Z     resource_search_index_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:52:14.6777535Z         
2025-08-28T00:52:14.6780014Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.6781860Z         
2025-08-28T00:52:14.6782197Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.6782813Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.6783377Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.6783675Z         
2025-08-28T00:52:14.7418387Z --- FAIL: TestAccSearchIndex_basic (4.37s)
```

- 2025-08-29 PASS 7 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T02:30:19+00:00
```
2025-09-01T02:30:19.1188740Z === RUN   TestAccSearchIndex_basic
2025-09-01T02:30:19.1189726Z     resource_search_index_test.go:16: Creating execution cluster: test-acc-tf-c-208537597200923415
2025-09-01T02:30:19.8565857Z 2025/09/01 02:30:19 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T02:33:20.1193653Z 2025/09/01 02:33:20 [TRACE] Waiting 1m0s before next try
2025-09-01T02:34:20.3902265Z 2025/09/01 02:34:20 [TRACE] Waiting 10s before next try
2025-09-01T02:34:30.5425589Z 2025/09/01 02:34:30 [TRACE] Waiting 1m0s before next try
2025-09-01T02:35:30.8641984Z 2025/09/01 02:35:30 [TRACE] Waiting 10s before next try
2025-09-01T02:35:41.0130602Z 2025/09/01 02:35:41 [TRACE] Waiting 1m0s before next try
2025-09-01T02:36:41.2616806Z 2025/09/01 02:36:41 [TRACE] Waiting 10s before next try
2025-09-01T02:36:51.3913796Z 2025/09/01 02:36:51 [TRACE] Waiting 1m0s before next try
2025-09-01T02:37:51.5771231Z 2025/09/01 02:37:51 [TRACE] Waiting 10s before next try
2025-09-01T02:38:01.7557392Z 2025/09/01 02:38:01 [TRACE] Waiting 1m0s before next try
2025-09-01T02:39:01.9704360Z 2025/09/01 02:39:01 [TRACE] Waiting 10s before next try
2025-09-01T02:39:12.1199124Z 2025/09/01 02:39:12 [TRACE] Waiting 1m0s before next try
2025-09-01T02:40:12.3040801Z 2025/09/01 02:40:12 [TRACE] Waiting 10s before next try
2025-09-01T02:40:22.4418937Z 2025/09/01 02:40:22 [TRACE] Waiting 1m0s before next try
2025-09-01T02:41:22.6517762Z 2025/09/01 02:41:22 [TRACE] Waiting 10s before next try
2025-09-01T02:41:32.7628152Z 2025/09/01 02:41:32 [TRACE] Waiting 1m0s before next try
2025-09-01T02:42:33.0384739Z 2025/09/01 02:42:33 [TRACE] Waiting 10s before next try
2025-09-01T02:42:43.1793596Z 2025/09/01 02:42:43 [TRACE] Waiting 1m0s before next try
2025-09-01T02:43:43.3778594Z 2025/09/01 02:43:43 [TRACE] Waiting 10s before next try
2025-09-01T02:43:53.5254397Z 2025/09/01 02:43:53 [TRACE] Waiting 1m0s before next try
2025-09-01T02:44:53.7626821Z 2025/09/01 02:44:53 [TRACE] Waiting 10s before next try
2025-09-01T02:45:03.8991576Z 2025/09/01 02:45:03 [TRACE] Waiting 1m0s before next try
2025-09-01T02:46:04.0992253Z 2025/09/01 02:46:04 [TRACE] Waiting 10s before next try
2025-09-01T02:46:14.2368784Z 2025/09/01 02:46:14 [TRACE] Waiting 1m0s before next try
2025-09-01T02:47:14.4670670Z 2025/09/01 02:47:14 [TRACE] Waiting 10s before next try
2025-09-01T02:47:24.5950569Z 2025/09/01 02:47:24 [TRACE] Waiting 1m0s before next try
2025-09-01T02:48:24.8892161Z 2025/09/01 02:48:24 [TRACE] Waiting 10s before next try
2025-09-01T02:48:35.0241189Z 2025/09/01 02:48:35 [TRACE] Waiting 1m0s before next try
2025-09-01T02:49:35.2249850Z 2025/09/01 02:49:35 [TRACE] Waiting 10s before next try
2025-09-01T02:49:45.3838561Z 2025/09/01 02:49:45 [TRACE] Waiting 1m0s before next try
2025-09-01T02:50:45.6163137Z 2025/09/01 02:50:45 [TRACE] Waiting 10s before next try
2025-09-01T02:50:55.7528203Z 2025/09/01 02:50:55 [TRACE] Waiting 1m0s before next try
2025-09-01T02:51:56.0533510Z 2025/09/01 02:51:56 [TRACE] Waiting 10s before next try
2025-09-01T02:52:06.1791080Z 2025/09/01 02:52:06 [TRACE] Waiting 1m0s before next try
2025-09-01T02:53:06.3751802Z 2025/09/01 02:53:06 [TRACE] Waiting 10s before next try
2025-09-01T02:53:16.5032959Z 2025/09/01 02:53:16 [TRACE] Waiting 1m0s before next try
2025-09-01T02:54:16.7091210Z 2025/09/01 02:54:16 [TRACE] Waiting 10s before next try
2025-09-01T02:54:26.8588850Z 2025/09/01 02:54:26 [TRACE] Waiting 1m0s before next try
2025-09-01T02:55:27.0554288Z 2025/09/01 02:55:27 [TRACE] Waiting 10s before next try
2025-09-01T02:55:37.2074199Z 2025/09/01 02:55:37 [TRACE] Waiting 1m0s before next try
2025-09-01T02:56:37.4313150Z 2025/09/01 02:56:37 [TRACE] Waiting 10s before next try
2025-09-01T02:56:47.5727404Z 2025/09/01 02:56:47 [TRACE] Waiting 1m0s before next try
2025-09-01T02:57:47.8588974Z 2025/09/01 02:57:47 [TRACE] Waiting 10s before next try
2025-09-01T02:57:57.9980171Z 2025/09/01 02:57:57 [TRACE] Waiting 1m0s before next try
2025-09-01T02:58:58.3624495Z 2025/09/01 02:58:58 [TRACE] Waiting 10s before next try
2025-09-01T02:59:08.4924896Z 2025/09/01 02:59:08 [TRACE] Waiting 1m0s before next try
2025-09-01T03:00:08.7363946Z 2025/09/01 03:00:08 [TRACE] Waiting 10s before next try
2025-09-01T03:00:18.8698164Z 2025/09/01 03:00:18 [TRACE] Waiting 1m0s before next try
2025-09-01T03:01:19.0635914Z 2025/09/01 03:01:19 [TRACE] Waiting 10s before next try
2025-09-01T03:01:29.2138203Z 2025/09/01 03:01:29 [TRACE] Waiting 1m0s before next try
2025-09-01T03:02:29.4433116Z 2025/09/01 03:02:29 [TRACE] Waiting 10s before next try
2025-09-01T03:02:39.5837852Z 2025/09/01 03:02:39 [TRACE] Waiting 1m0s before next try
2025-09-01T03:03:39.8427592Z 2025/09/01 03:03:39 [TRACE] Waiting 10s before next try
2025-09-01T03:03:49.9884458Z 2025/09/01 03:03:49 [TRACE] Waiting 1m0s before next try
2025-09-01T03:04:50.2776098Z 2025/09/01 03:04:50 [TRACE] Waiting 10s before next try
2025-09-01T03:05:00.4068605Z 2025/09/01 03:05:00 [TRACE] Waiting 1m0s before next try
2025-09-01T03:06:00.6228582Z 2025/09/01 03:06:00 [TRACE] Waiting 10s before next try
2025-09-01T03:06:10.7588168Z 2025/09/01 03:06:10 [TRACE] Waiting 1m0s before next try
2025-09-01T03:07:10.9486203Z 2025/09/01 03:07:10 [TRACE] Waiting 10s before next try
2025-09-01T03:07:21.0914812Z 2025/09/01 03:07:21 [TRACE] Waiting 1m0s before next try
2025-09-01T03:08:21.3444787Z 2025/09/01 03:08:21 [TRACE] Waiting 10s before next try
2025-09-01T03:08:31.4797683Z 2025/09/01 03:08:31 [TRACE] Waiting 1m0s before next try
2025-09-01T03:09:31.6746105Z 2025/09/01 03:09:31 [TRACE] Waiting 10s before next try
2025-09-01T03:09:41.7993307Z 2025/09/01 03:09:41 [TRACE] Waiting 1m0s before next try
2025-09-01T03:10:42.0518089Z 2025/09/01 03:10:42 [TRACE] Waiting 10s before next try
2025-09-01T03:10:52.1759717Z 2025/09/01 03:10:52 [TRACE] Waiting 1m0s before next try
2025-09-01T03:11:52.3416982Z 2025/09/01 03:11:52 [TRACE] Waiting 10s before next try
2025-09-01T03:12:02.4675922Z 2025/09/01 03:12:02 [TRACE] Waiting 1m0s before next try
2025-09-01T03:13:02.6399031Z 2025/09/01 03:13:02 [TRACE] Waiting 10s before next try
2025-09-01T03:13:12.7734667Z 2025/09/01 03:13:12 [TRACE] Waiting 1m0s before next try
2025-09-01T03:14:12.9851100Z 2025/09/01 03:14:12 [TRACE] Waiting 10s before next try
2025-09-01T03:14:23.1225317Z 2025/09/01 03:14:23 [TRACE] Waiting 1m0s before next try
2025-09-01T03:15:23.3669209Z 2025/09/01 03:15:23 [TRACE] Waiting 10s before next try
2025-09-01T03:15:33.5158097Z 2025/09/01 03:15:33 [TRACE] Waiting 1m0s before next try
2025-09-01T03:16:33.7056744Z 2025/09/01 03:16:33 [TRACE] Waiting 10s before next try
2025-09-01T03:16:43.8099328Z 2025/09/01 03:16:43 [TRACE] Waiting 1m0s before next try
2025-09-01T03:17:44.0054499Z 2025/09/01 03:17:44 [TRACE] Waiting 10s before next try
2025-09-01T03:17:54.1667777Z 2025/09/01 03:17:54 [TRACE] Waiting 1m0s before next try
2025-09-01T03:18:54.3384363Z 2025/09/01 03:18:54 [TRACE] Waiting 10s before next try
2025-09-01T03:19:04.4642015Z 2025/09/01 03:19:04 [TRACE] Waiting 1m0s before next try
2025-09-01T03:20:04.7001823Z 2025/09/01 03:20:04 [TRACE] Waiting 10s before next try
2025-09-01T03:20:14.8254672Z 2025/09/01 03:20:14 [TRACE] Waiting 1m0s before next try
2025-09-01T03:21:15.1438676Z 2025/09/01 03:21:15 [TRACE] Waiting 10s before next try
2025-09-01T03:21:25.2767648Z 2025/09/01 03:21:25 [TRACE] Waiting 1m0s before next try
2025-09-01T03:22:25.4588453Z 2025/09/01 03:22:25 [TRACE] Waiting 10s before next try
2025-09-01T03:22:35.6014168Z 2025/09/01 03:22:35 [TRACE] Waiting 1m0s before next try
2025-09-01T03:23:35.7667152Z 2025/09/01 03:23:35 [TRACE] Waiting 10s before next try
2025-09-01T03:23:45.9027930Z 2025/09/01 03:23:45 [TRACE] Waiting 1m0s before next try
2025-09-01T03:24:46.0796479Z 2025/09/01 03:24:46 [TRACE] Waiting 10s before next try
2025-09-01T03:24:56.2342316Z 2025/09/01 03:24:56 [TRACE] Waiting 1m0s before next try
2025-09-01T03:25:56.4523854Z 2025/09/01 03:25:56 [TRACE] Waiting 10s before next try
2025-09-01T03:26:06.5816818Z 2025/09/01 03:26:06 [TRACE] Waiting 1m0s before next try
2025-09-01T03:27:06.8533337Z 2025/09/01 03:27:06 [TRACE] Waiting 10s before next try
2025-09-01T03:27:16.9797161Z 2025/09/01 03:27:16 [TRACE] Waiting 1m0s before next try
2025-09-01T03:28:17.2399297Z 2025/09/01 03:28:17 [TRACE] Waiting 10s before next try
2025-09-01T03:28:27.3651067Z 2025/09/01 03:28:27 [TRACE] Waiting 1m0s before next try
2025-09-01T03:29:27.6005522Z 2025/09/01 03:29:27 [TRACE] Waiting 10s before next try
2025-09-01T03:29:37.7358166Z 2025/09/01 03:29:37 [TRACE] Waiting 1m0s before next try
2025-09-01T03:30:19.8570274Z 2025/09/01 03:30:19 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T03:30:19.8571333Z 2025/09/01 03:30:19 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T03:30:19.8572936Z     resource_search_index_test.go:16: 
2025-09-01T03:30:19.8575355Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T03:30:19.8579992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T03:30:19.8584765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-09-01T03:30:19.8588559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:16
2025-09-01T03:30:19.8589607Z         	Error:      	Received unexpected error:
2025-09-01T03:30:19.8590628Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T03:30:19.8591250Z         	Test:       	TestAccSearchIndex_basic
2025-09-01T03:30:19.8592350Z         	Messages:   	Cluster creation failed: test-acc-tf-c-208537597200923415, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T03:30:19.8593395Z --- FAIL: TestAccSearchIndex_basic (3600.74s)
```

  - PASS 7 seconds
  - FAIL 4 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8776361Z === RUN   TestAccSearchIndex_basic
2025-09-01T08:30:14.8933627Z === CONT  TestAccSearchIndex_basic
2025-09-01T08:30:19.4873387Z === NAME  TestAccSearchIndex_basic
2025-09-01T08:30:19.4873928Z     resource_search_index_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-01T08:30:19.4874478Z         
2025-09-01T08:30:19.4878195Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:19.4880499Z         
2025-09-01T08:30:19.4880989Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:19.4881969Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:19.4882849Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:19.4883329Z         
2025-09-01T08:30:19.5518717Z --- FAIL: TestAccSearchIndex_basic (4.67s)
```

  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 6 seconds