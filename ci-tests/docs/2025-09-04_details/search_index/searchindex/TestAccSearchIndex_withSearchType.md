# search_index/searchindex/TestAccSearchIndex_withSearchType Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:52](#error-2025-08-23t0052420000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes | dev |  | 4.05s
[2025-08-25 00:56](#error-2025-08-25t0056060000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes | dev |  | 3.02s
[2025-08-28 00:52](#error-2025-08-28t0052100000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes | dev |  | 4.05s
[2025-09-01 03:30](#error-2025-09-01t0330190000) |  | dev | timeout | 3600.06s
[2025-09-01 08:30](#error-2025-09-01t0830140000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes | dev |  | 4.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 7 seconds
- 2025-08-07 PASS 52 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 6 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 6 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 7 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 10 seconds
- 2025-08-20
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23

### Error 2025-08-23T00:52:42+00:00
```
2025-08-23T00:52:42.2161792Z === RUN   TestAccSearchIndex_withSearchType
2025-08-23T00:52:42.2181054Z === CONT  TestAccSearchIndex_withSearchType
2025-08-23T00:52:46.7161232Z === NAME  TestAccSearchIndex_withSearchType
2025-08-23T00:52:46.7162159Z     resource_search_index_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-08-23T00:52:46.7163101Z         
2025-08-23T00:52:46.7166843Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90abdad47257586c1b441/clusters/test-acc-tf-c-7034909334575573742/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-23T00:52:46.7169207Z         
2025-08-23T00:52:46.7169738Z           with mongodbatlas_search_index.test,
2025-08-23T00:52:46.7170829Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-23T00:52:46.7171831Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-23T00:52:46.7172350Z         
2025-08-23T00:52:46.7626608Z --- FAIL: TestAccSearchIndex_withSearchType (4.55s)
```

- 2025-08-24 PASS 7 seconds
- 2025-08-25

### Error 2025-08-25T00:56:06+00:00
```
2025-08-25T00:56:06.3216151Z === RUN   TestAccSearchIndex_withSearchType
2025-08-25T00:56:06.3366585Z === CONT  TestAccSearchIndex_withSearchType
2025-08-25T00:56:09.5269184Z === NAME  TestAccSearchIndex_withSearchType
2025-08-25T00:56:09.5269850Z     resource_search_index_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-08-25T00:56:09.5270384Z         
2025-08-25T00:56:09.5272614Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4116afe76254e7d22d/clusters/test-acc-tf-c-8912540277759118768/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-25T00:56:09.5275186Z         
2025-08-25T00:56:09.5275694Z           with mongodbatlas_search_index.test,
2025-08-25T00:56:09.5276551Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-25T00:56:09.5277337Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-25T00:56:09.5277638Z         
2025-08-25T00:56:09.5731977Z --- FAIL: TestAccSearchIndex_withSearchType (3.25s)
```

- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28

### Error 2025-08-28T00:52:10+00:00
```
2025-08-28T00:52:10.3734181Z === RUN   TestAccSearchIndex_withSearchType
2025-08-28T00:52:10.3776278Z === CONT  TestAccSearchIndex_withSearchType
2025-08-28T00:52:14.7758043Z === NAME  TestAccSearchIndex_withSearchType
2025-08-28T00:52:14.7758773Z     resource_search_index_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-08-28T00:52:14.7759318Z         
2025-08-28T00:52:14.7761958Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68afa26272e5d24729529738/clusters/test-acc-tf-c-7583358268424389764/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-08-28T00:52:14.7763637Z         
2025-08-28T00:52:14.7764030Z           with mongodbatlas_search_index.test,
2025-08-28T00:52:14.7764646Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-08-28T00:52:14.7765421Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-08-28T00:52:14.7765720Z         
2025-08-28T00:52:14.8308461Z --- FAIL: TestAccSearchIndex_withSearchType (4.46s)
```

- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31 PASS 4 seconds
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T03:30:19+00:00
```
2025-09-01T03:30:19.8593723Z === RUN   TestAccSearchIndex_withSearchType
2025-09-01T03:30:19.8594398Z     resource_search_index_test.go:21: Creating execution cluster: test-acc-tf-c-1540311476937088305
2025-09-01T03:30:20.4751380Z 2025/09/01 03:30:20 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T03:33:20.7117574Z 2025/09/01 03:33:20 [TRACE] Waiting 1m0s before next try
2025-09-01T03:34:20.8800401Z 2025/09/01 03:34:20 [TRACE] Waiting 10s before next try
2025-09-01T03:34:31.0263221Z 2025/09/01 03:34:31 [TRACE] Waiting 1m0s before next try
2025-09-01T03:35:31.3069090Z 2025/09/01 03:35:31 [TRACE] Waiting 10s before next try
2025-09-01T03:35:41.4439278Z 2025/09/01 03:35:41 [TRACE] Waiting 1m0s before next try
2025-09-01T03:36:41.7381184Z 2025/09/01 03:36:41 [TRACE] Waiting 10s before next try
2025-09-01T03:36:51.8673529Z 2025/09/01 03:36:51 [TRACE] Waiting 1m0s before next try
2025-09-01T03:37:52.1023539Z 2025/09/01 03:37:52 [TRACE] Waiting 10s before next try
2025-09-01T03:38:02.2341635Z 2025/09/01 03:38:02 [TRACE] Waiting 1m0s before next try
2025-09-01T03:39:02.5004457Z 2025/09/01 03:39:02 [TRACE] Waiting 10s before next try
2025-09-01T03:39:12.6433529Z 2025/09/01 03:39:12 [TRACE] Waiting 1m0s before next try
2025-09-01T03:40:12.9381534Z 2025/09/01 03:40:12 [TRACE] Waiting 10s before next try
2025-09-01T03:40:23.0727221Z 2025/09/01 03:40:23 [TRACE] Waiting 1m0s before next try
2025-09-01T03:41:23.2757600Z 2025/09/01 03:41:23 [TRACE] Waiting 10s before next try
2025-09-01T03:41:33.4079449Z 2025/09/01 03:41:33 [TRACE] Waiting 1m0s before next try
2025-09-01T03:42:33.6742269Z 2025/09/01 03:42:33 [TRACE] Waiting 10s before next try
2025-09-01T03:42:43.8100820Z 2025/09/01 03:42:43 [TRACE] Waiting 1m0s before next try
2025-09-01T03:43:44.0783265Z 2025/09/01 03:43:44 [TRACE] Waiting 10s before next try
2025-09-01T03:43:54.2119848Z 2025/09/01 03:43:54 [TRACE] Waiting 1m0s before next try
2025-09-01T03:44:54.4142439Z 2025/09/01 03:44:54 [TRACE] Waiting 10s before next try
2025-09-01T03:45:04.5699665Z 2025/09/01 03:45:04 [TRACE] Waiting 1m0s before next try
2025-09-01T03:46:04.7649276Z 2025/09/01 03:46:04 [TRACE] Waiting 10s before next try
2025-09-01T03:46:14.9103322Z 2025/09/01 03:46:14 [TRACE] Waiting 1m0s before next try
2025-09-01T03:47:15.1287875Z 2025/09/01 03:47:15 [TRACE] Waiting 10s before next try
2025-09-01T03:47:25.2743953Z 2025/09/01 03:47:25 [TRACE] Waiting 1m0s before next try
2025-09-01T03:48:25.4573980Z 2025/09/01 03:48:25 [TRACE] Waiting 10s before next try
2025-09-01T03:48:35.6007187Z 2025/09/01 03:48:35 [TRACE] Waiting 1m0s before next try
2025-09-01T03:49:35.8132910Z 2025/09/01 03:49:35 [TRACE] Waiting 10s before next try
2025-09-01T03:49:45.9539960Z 2025/09/01 03:49:45 [TRACE] Waiting 1m0s before next try
2025-09-01T03:50:46.1803415Z 2025/09/01 03:50:46 [TRACE] Waiting 10s before next try
2025-09-01T03:50:56.3204580Z 2025/09/01 03:50:56 [TRACE] Waiting 1m0s before next try
2025-09-01T03:51:56.6076911Z 2025/09/01 03:51:56 [TRACE] Waiting 10s before next try
2025-09-01T03:52:06.7529999Z 2025/09/01 03:52:06 [TRACE] Waiting 1m0s before next try
2025-09-01T03:53:06.9799718Z 2025/09/01 03:53:06 [TRACE] Waiting 10s before next try
2025-09-01T03:53:17.1138947Z 2025/09/01 03:53:17 [TRACE] Waiting 1m0s before next try
2025-09-01T03:54:17.3476315Z 2025/09/01 03:54:17 [TRACE] Waiting 10s before next try
2025-09-01T03:54:27.4838189Z 2025/09/01 03:54:27 [TRACE] Waiting 1m0s before next try
2025-09-01T03:55:27.6618155Z 2025/09/01 03:55:27 [TRACE] Waiting 10s before next try
2025-09-01T03:55:37.7831383Z 2025/09/01 03:55:37 [TRACE] Waiting 1m0s before next try
2025-09-01T03:56:37.9937394Z 2025/09/01 03:56:37 [TRACE] Waiting 10s before next try
2025-09-01T03:56:48.1359468Z 2025/09/01 03:56:48 [TRACE] Waiting 1m0s before next try
2025-09-01T03:57:48.3810573Z 2025/09/01 03:57:48 [TRACE] Waiting 10s before next try
2025-09-01T03:57:58.5152788Z 2025/09/01 03:57:58 [TRACE] Waiting 1m0s before next try
2025-09-01T03:58:58.7262309Z 2025/09/01 03:58:58 [TRACE] Waiting 10s before next try
2025-09-01T03:59:08.8453359Z 2025/09/01 03:59:08 [TRACE] Waiting 1m0s before next try
2025-09-01T04:00:09.0347901Z 2025/09/01 04:00:09 [TRACE] Waiting 10s before next try
2025-09-01T04:00:19.1865135Z 2025/09/01 04:00:19 [TRACE] Waiting 1m0s before next try
2025-09-01T04:01:19.3848108Z 2025/09/01 04:01:19 [TRACE] Waiting 10s before next try
2025-09-01T04:01:29.5265457Z 2025/09/01 04:01:29 [TRACE] Waiting 1m0s before next try
2025-09-01T04:02:29.7128047Z 2025/09/01 04:02:29 [TRACE] Waiting 10s before next try
2025-09-01T04:02:39.8409341Z 2025/09/01 04:02:39 [TRACE] Waiting 1m0s before next try
2025-09-01T04:03:40.0839597Z 2025/09/01 04:03:40 [TRACE] Waiting 10s before next try
2025-09-01T04:03:50.2313401Z 2025/09/01 04:03:50 [TRACE] Waiting 1m0s before next try
2025-09-01T04:04:50.5145719Z 2025/09/01 04:04:50 [TRACE] Waiting 10s before next try
2025-09-01T04:05:00.6599055Z 2025/09/01 04:05:00 [TRACE] Waiting 1m0s before next try
2025-09-01T04:06:00.9015039Z 2025/09/01 04:06:00 [TRACE] Waiting 10s before next try
2025-09-01T04:06:11.0614834Z 2025/09/01 04:06:11 [TRACE] Waiting 1m0s before next try
2025-09-01T04:07:11.2817546Z 2025/09/01 04:07:11 [TRACE] Waiting 10s before next try
2025-09-01T04:07:21.4389753Z 2025/09/01 04:07:21 [TRACE] Waiting 1m0s before next try
2025-09-01T04:08:21.5957682Z 2025/09/01 04:08:21 [TRACE] Waiting 10s before next try
2025-09-01T04:08:31.7519172Z 2025/09/01 04:08:31 [TRACE] Waiting 1m0s before next try
2025-09-01T04:09:31.9601662Z 2025/09/01 04:09:31 [TRACE] Waiting 10s before next try
2025-09-01T04:09:42.0923467Z 2025/09/01 04:09:42 [TRACE] Waiting 1m0s before next try
2025-09-01T04:10:42.3550385Z 2025/09/01 04:10:42 [TRACE] Waiting 10s before next try
2025-09-01T04:10:52.4834430Z 2025/09/01 04:10:52 [TRACE] Waiting 1m0s before next try
2025-09-01T04:11:52.6692686Z 2025/09/01 04:11:52 [TRACE] Waiting 10s before next try
2025-09-01T04:12:02.8402790Z 2025/09/01 04:12:02 [TRACE] Waiting 1m0s before next try
2025-09-01T04:13:03.0430047Z 2025/09/01 04:13:03 [TRACE] Waiting 10s before next try
2025-09-01T04:13:13.1651844Z 2025/09/01 04:13:13 [TRACE] Waiting 1m0s before next try
2025-09-01T04:14:13.3606929Z 2025/09/01 04:14:13 [TRACE] Waiting 10s before next try
2025-09-01T04:14:23.4854678Z 2025/09/01 04:14:23 [TRACE] Waiting 1m0s before next try
2025-09-01T04:15:23.7742793Z 2025/09/01 04:15:23 [TRACE] Waiting 10s before next try
2025-09-01T04:15:33.9243108Z 2025/09/01 04:15:33 [TRACE] Waiting 1m0s before next try
2025-09-01T04:16:34.1569063Z 2025/09/01 04:16:34 [TRACE] Waiting 10s before next try
2025-09-01T04:16:44.3114308Z 2025/09/01 04:16:44 [TRACE] Waiting 1m0s before next try
2025-09-01T04:17:44.5126063Z 2025/09/01 04:17:44 [TRACE] Waiting 10s before next try
2025-09-01T04:17:54.6415236Z 2025/09/01 04:17:54 [TRACE] Waiting 1m0s before next try
2025-09-01T04:18:54.8174824Z 2025/09/01 04:18:54 [TRACE] Waiting 10s before next try
2025-09-01T04:19:04.9654539Z 2025/09/01 04:19:04 [TRACE] Waiting 1m0s before next try
2025-09-01T04:20:05.3345153Z 2025/09/01 04:20:05 [TRACE] Waiting 10s before next try
2025-09-01T04:20:15.4784349Z 2025/09/01 04:20:15 [TRACE] Waiting 1m0s before next try
2025-09-01T04:21:15.7954649Z 2025/09/01 04:21:15 [TRACE] Waiting 10s before next try
2025-09-01T04:21:25.9499820Z 2025/09/01 04:21:25 [TRACE] Waiting 1m0s before next try
2025-09-01T04:22:26.1357218Z 2025/09/01 04:22:26 [TRACE] Waiting 10s before next try
2025-09-01T04:22:36.2713679Z 2025/09/01 04:22:36 [TRACE] Waiting 1m0s before next try
2025-09-01T04:23:36.4733888Z 2025/09/01 04:23:36 [TRACE] Waiting 10s before next try
2025-09-01T04:23:46.6121961Z 2025/09/01 04:23:46 [TRACE] Waiting 1m0s before next try
2025-09-01T04:24:46.8212796Z 2025/09/01 04:24:46 [TRACE] Waiting 10s before next try
2025-09-01T04:24:56.9536626Z 2025/09/01 04:24:56 [TRACE] Waiting 1m0s before next try
2025-09-01T04:25:57.1795365Z 2025/09/01 04:25:57 [TRACE] Waiting 10s before next try
2025-09-01T04:26:07.3195458Z 2025/09/01 04:26:07 [TRACE] Waiting 1m0s before next try
2025-09-01T04:27:07.5822837Z 2025/09/01 04:27:07 [TRACE] Waiting 10s before next try
2025-09-01T04:27:17.7186045Z 2025/09/01 04:27:17 [TRACE] Waiting 1m0s before next try
2025-09-01T04:28:17.9622446Z 2025/09/01 04:28:17 [TRACE] Waiting 10s before next try
2025-09-01T04:28:28.1064092Z 2025/09/01 04:28:28 [TRACE] Waiting 1m0s before next try
2025-09-01T04:29:28.3032424Z 2025/09/01 04:29:28 [TRACE] Waiting 10s before next try
2025-09-01T04:29:38.4433931Z 2025/09/01 04:29:38 [TRACE] Waiting 1m0s before next try
2025-09-01T04:30:20.4755959Z 2025/09/01 04:30:20 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T04:30:20.4760840Z 2025/09/01 04:30:20 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T04:30:20.4764224Z     resource_search_index_test.go:21: 
2025-09-01T04:30:20.4766744Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T04:30:20.4770638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T04:30:20.4774482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:21
2025-09-01T04:30:20.4775601Z         	Error:      	Received unexpected error:
2025-09-01T04:30:20.4776641Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T04:30:20.4777323Z         	Test:       	TestAccSearchIndex_withSearchType
2025-09-01T04:30:20.4778486Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1540311476937088305, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T04:30:20.4779300Z --- FAIL: TestAccSearchIndex_withSearchType (3600.62s)
```

  - PASS 6 seconds
  - FAIL 4 seconds

### Error 2025-09-01T08:30:14+00:00
```
2025-09-01T08:30:14.8777344Z === RUN   TestAccSearchIndex_withSearchType
2025-09-01T08:30:14.8881159Z === CONT  TestAccSearchIndex_withSearchType
2025-09-01T08:30:19.6112702Z === NAME  TestAccSearchIndex_withSearchType
2025-09-01T08:30:19.6113568Z     resource_search_index_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-01T08:30:19.6114259Z         
2025-09-01T08:30:19.6117698Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551d57af6b0372e9a25c6/clusters/test-acc-tf-c-1264585706881872893/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2025-09-01T08:30:19.6120154Z         
2025-09-01T08:30:19.6121144Z           with mongodbatlas_search_index.test,
2025-09-01T08:30:19.6122279Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2025-09-01T08:30:19.6123260Z           12: 		resource "mongodbatlas_search_index" "test" {
2025-09-01T08:30:19.6123780Z         
2025-09-01T08:30:19.6689918Z --- FAIL: TestAccSearchIndex_withSearchType (4.79s)
```

  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 5 seconds