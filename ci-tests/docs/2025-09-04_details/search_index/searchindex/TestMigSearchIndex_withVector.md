# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev |  | 4.05s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev |  | 4.02s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev |  | 5.01s
[2025-09-01 01:30](#error-2025-09-01t0130180000) |  | dev | timeout | 3600.06s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev | flaky_500 | 6.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 10 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 12 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2159835Z === RUN   TestMigSearchIndex_withVector
2025-08-23T00:52:42.2178988Z === CONT  TestMigSearchIndex_withVector
2025-08-23T00:52:46.5432946Z === NAME  TestMigSearchIndex_withVector
2025-08-23T00:52:46.5433525Z     resource_search_index_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-08-23T00:52:46.5433950Z         
2025-08-23T00:52:46.5436148Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:46.5437716Z         
2025-08-23T00:52:46.5438033Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:46.5438651Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:46.5439207Z           14: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:46.5439507Z         
2025-08-23T00:52:46.7160677Z    test_name=TestAccSearchIndex_withSearchType
2025-08-23T00:52:46.7235524Z --- FAIL: TestMigSearchIndex_withVector (4.51s)
```

- 2025-08-24 PASS 9 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3213821Z === RUN   TestMigSearchIndex_withVector
2025-08-25T00:56:06.3232738Z === CONT  TestMigSearchIndex_withVector
2025-08-25T00:56:10.3662646Z === NAME  TestMigSearchIndex_withVector
2025-08-25T00:56:10.3663224Z     resource_search_index_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-08-25T00:56:10.3663654Z         
2025-08-25T00:56:10.3665587Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:10.3667387Z         
2025-08-25T00:56:10.3667784Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:10.3668392Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:10.3668942Z           14: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:10.3669232Z         
2025-08-25T00:56:10.5505595Z --- FAIL: TestMigSearchIndex_withVector (4.23s)
```

- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 10 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3731884Z === RUN   TestMigSearchIndex_withVector
2025-08-28T00:52:10.3769419Z === CONT  TestMigSearchIndex_withVector
2025-08-28T00:52:15.2931200Z === NAME  TestMigSearchIndex_withVector
2025-08-28T00:52:15.2931939Z     resource_search_index_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:52:15.2932377Z         
2025-08-28T00:52:15.2934295Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:15.2935607Z         
2025-08-28T00:52:15.2935906Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:15.2936509Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:15.2937067Z           14: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:15.2937364Z         
2025-08-28T00:52:15.4809988Z --- FAIL: TestMigSearchIndex_withVector (5.11s)
```

- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 10 seconds
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T01:30:18+00:00
```
2025-09-01T01:30:18.5574916Z === RUN   TestMigSearchIndex_withVector
2025-09-01T01:30:18.5575948Z     resource_search_index_migration_test.go:15: Creating execution cluster: test-acc-tf-c-3510226534430188177
2025-09-01T01:30:19.1158359Z 2025/09/01 01:30:19 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T01:33:19.3673542Z 2025/09/01 01:33:19 [TRACE] Waiting 1m0s before next try
2025-09-01T01:34:19.5496378Z 2025/09/01 01:34:19 [TRACE] Waiting 10s before next try
2025-09-01T01:34:29.6800093Z 2025/09/01 01:34:29 [TRACE] Waiting 1m0s before next try
2025-09-01T01:35:29.8735862Z 2025/09/01 01:35:29 [TRACE] Waiting 10s before next try
2025-09-01T01:35:40.0102328Z 2025/09/01 01:35:40 [TRACE] Waiting 1m0s before next try
2025-09-01T01:36:40.2116660Z 2025/09/01 01:36:40 [TRACE] Waiting 10s before next try
2025-09-01T01:36:50.3486631Z 2025/09/01 01:36:50 [TRACE] Waiting 1m0s before next try
2025-09-01T01:37:50.5558877Z 2025/09/01 01:37:50 [TRACE] Waiting 10s before next try
2025-09-01T01:38:00.6925356Z 2025/09/01 01:38:00 [TRACE] Waiting 1m0s before next try
2025-09-01T01:39:00.9324442Z 2025/09/01 01:39:00 [TRACE] Waiting 10s before next try
2025-09-01T01:39:11.0754030Z 2025/09/01 01:39:11 [TRACE] Waiting 1m0s before next try
2025-09-01T01:40:11.3955121Z 2025/09/01 01:40:11 [TRACE] Waiting 10s before next try
2025-09-01T01:40:21.5406056Z 2025/09/01 01:40:21 [TRACE] Waiting 1m0s before next try
2025-09-01T01:41:21.7388305Z 2025/09/01 01:41:21 [TRACE] Waiting 10s before next try
2025-09-01T01:41:31.8654341Z 2025/09/01 01:41:31 [TRACE] Waiting 1m0s before next try
2025-09-01T01:42:32.0530212Z 2025/09/01 01:42:32 [TRACE] Waiting 10s before next try
2025-09-01T01:42:42.1797573Z 2025/09/01 01:42:42 [TRACE] Waiting 1m0s before next try
2025-09-01T01:43:42.3856816Z 2025/09/01 01:43:42 [TRACE] Waiting 10s before next try
2025-09-01T01:43:52.5247915Z 2025/09/01 01:43:52 [TRACE] Waiting 1m0s before next try
2025-09-01T01:44:52.7659436Z 2025/09/01 01:44:52 [TRACE] Waiting 10s before next try
2025-09-01T01:45:02.9062890Z 2025/09/01 01:45:02 [TRACE] Waiting 1m0s before next try
2025-09-01T01:46:03.0998791Z 2025/09/01 01:46:03 [TRACE] Waiting 10s before next try
2025-09-01T01:46:13.2287075Z 2025/09/01 01:46:13 [TRACE] Waiting 1m0s before next try
2025-09-01T01:47:13.4496779Z 2025/09/01 01:47:13 [TRACE] Waiting 10s before next try
2025-09-01T01:47:23.5943036Z 2025/09/01 01:47:23 [TRACE] Waiting 1m0s before next try
2025-09-01T01:48:23.7916904Z 2025/09/01 01:48:23 [TRACE] Waiting 10s before next try
2025-09-01T01:48:33.9473544Z 2025/09/01 01:48:33 [TRACE] Waiting 1m0s before next try
2025-09-01T01:49:34.1534223Z 2025/09/01 01:49:34 [TRACE] Waiting 10s before next try
2025-09-01T01:49:44.2806884Z 2025/09/01 01:49:44 [TRACE] Waiting 1m0s before next try
2025-09-01T01:50:44.4401387Z 2025/09/01 01:50:44 [TRACE] Waiting 10s before next try
2025-09-01T01:50:54.5742117Z 2025/09/01 01:50:54 [TRACE] Waiting 1m0s before next try
2025-09-01T01:51:54.7646454Z 2025/09/01 01:51:54 [TRACE] Waiting 10s before next try
2025-09-01T01:52:04.8858298Z 2025/09/01 01:52:04 [TRACE] Waiting 1m0s before next try
2025-09-01T01:53:05.1696805Z 2025/09/01 01:53:05 [TRACE] Waiting 10s before next try
2025-09-01T01:53:15.3037177Z 2025/09/01 01:53:15 [TRACE] Waiting 1m0s before next try
2025-09-01T01:54:15.6849991Z 2025/09/01 01:54:15 [TRACE] Waiting 10s before next try
2025-09-01T01:54:25.8424307Z 2025/09/01 01:54:25 [TRACE] Waiting 1m0s before next try
2025-09-01T01:55:26.0821695Z 2025/09/01 01:55:26 [TRACE] Waiting 10s before next try
2025-09-01T01:55:36.2074647Z 2025/09/01 01:55:36 [TRACE] Waiting 1m0s before next try
2025-09-01T01:56:36.4217523Z 2025/09/01 01:56:36 [TRACE] Waiting 10s before next try
2025-09-01T01:56:46.5339712Z 2025/09/01 01:56:46 [TRACE] Waiting 1m0s before next try
2025-09-01T01:57:46.7186537Z 2025/09/01 01:57:46 [TRACE] Waiting 10s before next try
2025-09-01T01:57:56.8553030Z 2025/09/01 01:57:56 [TRACE] Waiting 1m0s before next try
2025-09-01T01:58:57.0965103Z 2025/09/01 01:58:57 [TRACE] Waiting 10s before next try
2025-09-01T01:59:07.2332456Z 2025/09/01 01:59:07 [TRACE] Waiting 1m0s before next try
2025-09-01T02:00:07.4256906Z 2025/09/01 02:00:07 [TRACE] Waiting 10s before next try
2025-09-01T02:00:17.5555667Z 2025/09/01 02:00:17 [TRACE] Waiting 1m0s before next try
2025-09-01T02:01:17.7662219Z 2025/09/01 02:01:17 [TRACE] Waiting 10s before next try
2025-09-01T02:01:27.9106498Z 2025/09/01 02:01:27 [TRACE] Waiting 1m0s before next try
2025-09-01T02:02:28.1200929Z 2025/09/01 02:02:28 [TRACE] Waiting 10s before next try
2025-09-01T02:02:38.2690296Z 2025/09/01 02:02:38 [TRACE] Waiting 1m0s before next try
2025-09-01T02:03:38.5143484Z 2025/09/01 02:03:38 [TRACE] Waiting 10s before next try
2025-09-01T02:03:48.6443726Z 2025/09/01 02:03:48 [TRACE] Waiting 1m0s before next try
2025-09-01T02:04:48.8252078Z 2025/09/01 02:04:48 [TRACE] Waiting 10s before next try
2025-09-01T02:04:58.9628219Z 2025/09/01 02:04:58 [TRACE] Waiting 1m0s before next try
2025-09-01T02:05:59.1705405Z 2025/09/01 02:05:59 [TRACE] Waiting 10s before next try
2025-09-01T02:06:09.2785898Z 2025/09/01 02:06:09 [TRACE] Waiting 1m0s before next try
2025-09-01T02:07:09.4740016Z 2025/09/01 02:07:09 [TRACE] Waiting 10s before next try
2025-09-01T02:07:19.6120895Z 2025/09/01 02:07:19 [TRACE] Waiting 1m0s before next try
2025-09-01T02:08:19.8011775Z 2025/09/01 02:08:19 [TRACE] Waiting 10s before next try
2025-09-01T02:08:29.9382830Z 2025/09/01 02:08:29 [TRACE] Waiting 1m0s before next try
2025-09-01T02:09:30.1618354Z 2025/09/01 02:09:30 [TRACE] Waiting 10s before next try
2025-09-01T02:09:40.2931303Z 2025/09/01 02:09:40 [TRACE] Waiting 1m0s before next try
2025-09-01T02:10:40.5329274Z 2025/09/01 02:10:40 [TRACE] Waiting 10s before next try
2025-09-01T02:10:50.6555769Z 2025/09/01 02:10:50 [TRACE] Waiting 1m0s before next try
2025-09-01T02:11:50.8755730Z 2025/09/01 02:11:50 [TRACE] Waiting 10s before next try
2025-09-01T02:12:00.9929559Z 2025/09/01 02:12:00 [TRACE] Waiting 1m0s before next try
2025-09-01T02:13:01.1979519Z 2025/09/01 02:13:01 [TRACE] Waiting 10s before next try
2025-09-01T02:13:11.3428382Z 2025/09/01 02:13:11 [TRACE] Waiting 1m0s before next try
2025-09-01T02:14:11.6307166Z 2025/09/01 02:14:11 [TRACE] Waiting 10s before next try
2025-09-01T02:14:21.7741947Z 2025/09/01 02:14:21 [TRACE] Waiting 1m0s before next try
2025-09-01T02:15:21.9846545Z 2025/09/01 02:15:21 [TRACE] Waiting 10s before next try
2025-09-01T02:15:32.1325789Z 2025/09/01 02:15:32 [TRACE] Waiting 1m0s before next try
2025-09-01T02:16:32.2972938Z 2025/09/01 02:16:32 [TRACE] Waiting 10s before next try
2025-09-01T02:16:42.4294770Z 2025/09/01 02:16:42 [TRACE] Waiting 1m0s before next try
2025-09-01T02:17:42.7270717Z 2025/09/01 02:17:42 [TRACE] Waiting 10s before next try
2025-09-01T02:17:52.8592980Z 2025/09/01 02:17:52 [TRACE] Waiting 1m0s before next try
2025-09-01T02:18:53.0845118Z 2025/09/01 02:18:53 [TRACE] Waiting 10s before next try
2025-09-01T02:19:03.2223840Z 2025/09/01 02:19:03 [TRACE] Waiting 1m0s before next try
2025-09-01T02:20:03.4499180Z 2025/09/01 02:20:03 [TRACE] Waiting 10s before next try
2025-09-01T02:20:13.5638249Z 2025/09/01 02:20:13 [TRACE] Waiting 1m0s before next try
2025-09-01T02:21:13.7419871Z 2025/09/01 02:21:13 [TRACE] Waiting 10s before next try
2025-09-01T02:21:23.8736188Z 2025/09/01 02:21:23 [TRACE] Waiting 1m0s before next try
2025-09-01T02:22:24.0890192Z 2025/09/01 02:22:24 [TRACE] Waiting 10s before next try
2025-09-01T02:22:34.2086827Z 2025/09/01 02:22:34 [TRACE] Waiting 1m0s before next try
2025-09-01T02:23:34.4919873Z 2025/09/01 02:23:34 [TRACE] Waiting 10s before next try
2025-09-01T02:23:44.6356331Z 2025/09/01 02:23:44 [TRACE] Waiting 1m0s before next try
2025-09-01T02:24:44.8672061Z 2025/09/01 02:24:44 [TRACE] Waiting 10s before next try
2025-09-01T02:24:55.0206020Z 2025/09/01 02:24:55 [TRACE] Waiting 1m0s before next try
2025-09-01T02:25:55.2557397Z 2025/09/01 02:25:55 [TRACE] Waiting 10s before next try
2025-09-01T02:26:05.3799244Z 2025/09/01 02:26:05 [TRACE] Waiting 1m0s before next try
2025-09-01T02:27:05.6076071Z 2025/09/01 02:27:05 [TRACE] Waiting 10s before next try
2025-09-01T02:27:15.7643019Z 2025/09/01 02:27:15 [TRACE] Waiting 1m0s before next try
2025-09-01T02:28:15.9796340Z 2025/09/01 02:28:15 [TRACE] Waiting 10s before next try
2025-09-01T02:28:26.1150345Z 2025/09/01 02:28:26 [TRACE] Waiting 1m0s before next try
2025-09-01T02:29:26.3366814Z 2025/09/01 02:29:26 [TRACE] Waiting 10s before next try
2025-09-01T02:29:36.4785389Z 2025/09/01 02:29:36 [TRACE] Waiting 1m0s before next try
2025-09-01T02:30:19.1162021Z 2025/09/01 02:30:19 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T02:30:19.1164010Z 2025/09/01 02:30:19 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T02:30:19.1165384Z     resource_search_index_migration_test.go:15: 
2025-09-01T02:30:19.1167420Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T02:30:19.1175644Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T02:30:19.1179234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:242
2025-09-01T02:30:19.1183216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2025-09-01T02:30:19.1184261Z         	Error:      	Received unexpected error:
2025-09-01T02:30:19.1185381Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T02:30:19.1186011Z         	Test:       	TestMigSearchIndex_withVector
2025-09-01T02:30:19.1187294Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3510226534430188177, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T02:30:19.1188177Z --- FAIL: TestMigSearchIndex_withVector (3600.56s)
```

  - PASS 16 minutes
  - FAIL 6 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8775343Z === RUN   TestMigSearchIndex_withVector
2025-09-01T08:30:14.8793942Z === CONT  TestMigSearchIndex_withVector
2025-09-01T08:30:21.0367255Z === NAME  TestMigSearchIndex_withVector
2025-09-01T08:30:21.0368204Z     resource_search_index_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-09-01T08:30:21.0368882Z         
2025-09-01T08:30:21.0372426Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:21.0374501Z         
2025-09-01T08:30:21.0375007Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:21.0376013Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:21.0376941Z           14: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:21.0377427Z         
2025-09-01T08:30:21.2184819Z --- FAIL: TestMigSearchIndex_withVector (6.34s)
```

  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 12 seconds
- 2025-09-04 PASS 9 seconds