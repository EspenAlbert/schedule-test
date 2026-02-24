# search_index/searchindex/TestAccSearchIndex_withMapping Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3) TIMEOUT
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 02:07](#error-2026-01-31t0207340000) |  | dev | timeout | 3600.10s
[2026-02-02 04:38](#error-2026-02-02t0438340000) |  | dev |  | 212455.00s
[2026-02-03 00:39](#error-2026-02-03t0039200000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 00:50](#error-2026-02-24t0050170000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes | dev | flaky_500 | 2.10s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 5 seconds
- 2026-01-28 PASS 9 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30 PASS 8 seconds
- 2026-01-31

### Error 2026-01-31T02:07:34+00:00
```
2026-01-31T02:07:34.1016452Z === RUN   TestAccSearchIndex_withMapping
2026-01-31T02:07:34.1017043Z     resource_search_index_test.go:40: Creating execution cluster: test-acc-tf-c-1538945850540584379
2026-01-31T02:07:35.0683851Z 2026/01/31 02:07:35 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T02:10:35.4879697Z 2026/01/31 02:10:35 [TRACE] Waiting 1m0s before next try
2026-01-31T02:11:35.8711471Z 2026/01/31 02:11:35 [TRACE] Waiting 10s before next try
2026-01-31T02:11:46.0949433Z 2026/01/31 02:11:46 [TRACE] Waiting 1m0s before next try
2026-01-31T02:12:46.4959373Z 2026/01/31 02:12:46 [TRACE] Waiting 10s before next try
2026-01-31T02:12:56.7563645Z 2026/01/31 02:12:56 [TRACE] Waiting 1m0s before next try
2026-01-31T02:13:57.3032635Z 2026/01/31 02:13:57 [TRACE] Waiting 10s before next try
2026-01-31T02:14:07.5646094Z 2026/01/31 02:14:07 [TRACE] Waiting 1m0s before next try
2026-01-31T02:15:07.9518846Z 2026/01/31 02:15:07 [TRACE] Waiting 10s before next try
2026-01-31T02:15:18.1876643Z 2026/01/31 02:15:18 [TRACE] Waiting 1m0s before next try
2026-01-31T02:16:18.7272152Z 2026/01/31 02:16:18 [TRACE] Waiting 10s before next try
2026-01-31T02:16:28.9634121Z 2026/01/31 02:16:28 [TRACE] Waiting 1m0s before next try
2026-01-31T02:17:29.3674338Z 2026/01/31 02:17:29 [TRACE] Waiting 10s before next try
2026-01-31T02:17:39.6134737Z 2026/01/31 02:17:39 [TRACE] Waiting 1m0s before next try
2026-01-31T02:18:39.9957197Z 2026/01/31 02:18:39 [TRACE] Waiting 10s before next try
2026-01-31T02:18:50.2532526Z 2026/01/31 02:18:50 [TRACE] Waiting 1m0s before next try
2026-01-31T02:19:50.6771344Z 2026/01/31 02:19:50 [TRACE] Waiting 10s before next try
2026-01-31T02:20:00.9269328Z 2026/01/31 02:20:00 [TRACE] Waiting 1m0s before next try
2026-01-31T02:21:01.3369596Z 2026/01/31 02:21:01 [TRACE] Waiting 10s before next try
2026-01-31T02:21:11.5751346Z 2026/01/31 02:21:11 [TRACE] Waiting 1m0s before next try
2026-01-31T02:22:11.9569740Z 2026/01/31 02:22:11 [TRACE] Waiting 10s before next try
2026-01-31T02:22:22.1998787Z 2026/01/31 02:22:22 [TRACE] Waiting 1m0s before next try
2026-01-31T02:23:22.6138961Z 2026/01/31 02:23:22 [TRACE] Waiting 10s before next try
2026-01-31T02:23:32.8898987Z 2026/01/31 02:23:32 [TRACE] Waiting 1m0s before next try
2026-01-31T02:24:33.2932156Z 2026/01/31 02:24:33 [TRACE] Waiting 10s before next try
2026-01-31T02:24:43.5295860Z 2026/01/31 02:24:43 [TRACE] Waiting 1m0s before next try
2026-01-31T02:25:43.9331156Z 2026/01/31 02:25:43 [TRACE] Waiting 10s before next try
2026-01-31T02:25:54.1851635Z 2026/01/31 02:25:54 [TRACE] Waiting 1m0s before next try
2026-01-31T02:26:54.5875192Z 2026/01/31 02:26:54 [TRACE] Waiting 10s before next try
2026-01-31T02:27:04.8508480Z 2026/01/31 02:27:04 [TRACE] Waiting 1m0s before next try
2026-01-31T02:28:05.2530965Z 2026/01/31 02:28:05 [TRACE] Waiting 10s before next try
2026-01-31T02:28:15.5064203Z 2026/01/31 02:28:15 [TRACE] Waiting 1m0s before next try
2026-01-31T02:29:15.9028958Z 2026/01/31 02:29:15 [TRACE] Waiting 10s before next try
2026-01-31T02:29:26.1426916Z 2026/01/31 02:29:26 [TRACE] Waiting 1m0s before next try
2026-01-31T02:30:26.5593247Z 2026/01/31 02:30:26 [TRACE] Waiting 10s before next try
2026-01-31T02:30:36.8098734Z 2026/01/31 02:30:36 [TRACE] Waiting 1m0s before next try
2026-01-31T02:31:37.2532216Z 2026/01/31 02:31:37 [TRACE] Waiting 10s before next try
2026-01-31T02:31:47.5081068Z 2026/01/31 02:31:47 [TRACE] Waiting 1m0s before next try
2026-01-31T02:32:47.9010570Z 2026/01/31 02:32:47 [TRACE] Waiting 10s before next try
2026-01-31T02:32:58.1504140Z 2026/01/31 02:32:58 [TRACE] Waiting 1m0s before next try
2026-01-31T02:33:58.5819173Z 2026/01/31 02:33:58 [TRACE] Waiting 10s before next try
2026-01-31T02:34:08.8597117Z 2026/01/31 02:34:08 [TRACE] Waiting 1m0s before next try
2026-01-31T02:35:09.2698883Z 2026/01/31 02:35:09 [TRACE] Waiting 10s before next try
2026-01-31T02:35:19.5094052Z 2026/01/31 02:35:19 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:19.9498154Z 2026/01/31 02:36:19 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.2021959Z 2026/01/31 02:36:30 [TRACE] Waiting 1m0s before next try
2026-01-31T02:37:30.6076098Z 2026/01/31 02:37:30 [TRACE] Waiting 10s before next try
2026-01-31T02:37:40.8952483Z 2026/01/31 02:37:40 [TRACE] Waiting 1m0s before next try
2026-01-31T02:38:41.3263285Z 2026/01/31 02:38:41 [TRACE] Waiting 10s before next try
2026-01-31T02:38:51.6018111Z 2026/01/31 02:38:51 [TRACE] Waiting 1m0s before next try
2026-01-31T02:39:51.9753945Z 2026/01/31 02:39:51 [TRACE] Waiting 10s before next try
2026-01-31T02:40:02.2431879Z 2026/01/31 02:40:02 [TRACE] Waiting 1m0s before next try
2026-01-31T02:41:02.6273124Z 2026/01/31 02:41:02 [TRACE] Waiting 10s before next try
2026-01-31T02:41:12.9005994Z 2026/01/31 02:41:12 [TRACE] Waiting 1m0s before next try
2026-01-31T02:42:13.3019260Z 2026/01/31 02:42:13 [TRACE] Waiting 10s before next try
2026-01-31T02:42:23.5633199Z 2026/01/31 02:42:23 [TRACE] Waiting 1m0s before next try
2026-01-31T02:43:24.0210774Z 2026/01/31 02:43:24 [TRACE] Waiting 10s before next try
2026-01-31T02:43:34.2879026Z 2026/01/31 02:43:34 [TRACE] Waiting 1m0s before next try
2026-01-31T02:44:34.6935275Z 2026/01/31 02:44:34 [TRACE] Waiting 10s before next try
2026-01-31T02:44:44.9642288Z 2026/01/31 02:44:44 [TRACE] Waiting 1m0s before next try
2026-01-31T02:45:45.3713426Z 2026/01/31 02:45:45 [TRACE] Waiting 10s before next try
2026-01-31T02:45:55.6333361Z 2026/01/31 02:45:55 [TRACE] Waiting 1m0s before next try
2026-01-31T02:46:56.0409712Z 2026/01/31 02:46:56 [TRACE] Waiting 10s before next try
2026-01-31T02:47:06.3088128Z 2026/01/31 02:47:06 [TRACE] Waiting 1m0s before next try
2026-01-31T02:48:06.7324663Z 2026/01/31 02:48:06 [TRACE] Waiting 10s before next try
2026-01-31T02:48:17.0044012Z 2026/01/31 02:48:17 [TRACE] Waiting 1m0s before next try
2026-01-31T02:49:17.4275986Z 2026/01/31 02:49:17 [TRACE] Waiting 10s before next try
2026-01-31T02:49:27.6924011Z 2026/01/31 02:49:27 [TRACE] Waiting 1m0s before next try
2026-01-31T02:50:28.0920040Z 2026/01/31 02:50:28 [TRACE] Waiting 10s before next try
2026-01-31T02:50:38.3536355Z 2026/01/31 02:50:38 [TRACE] Waiting 1m0s before next try
2026-01-31T02:51:38.7819806Z 2026/01/31 02:51:38 [TRACE] Waiting 10s before next try
2026-01-31T02:51:49.0535791Z 2026/01/31 02:51:49 [TRACE] Waiting 1m0s before next try
2026-01-31T02:52:49.4455413Z 2026/01/31 02:52:49 [TRACE] Waiting 10s before next try
2026-01-31T02:52:59.7076409Z 2026/01/31 02:52:59 [TRACE] Waiting 1m0s before next try
2026-01-31T02:54:00.1396605Z 2026/01/31 02:54:00 [TRACE] Waiting 10s before next try
2026-01-31T02:54:10.4204901Z 2026/01/31 02:54:10 [TRACE] Waiting 1m0s before next try
2026-01-31T02:55:10.8398115Z 2026/01/31 02:55:10 [TRACE] Waiting 10s before next try
2026-01-31T02:55:21.1027259Z 2026/01/31 02:55:21 [TRACE] Waiting 1m0s before next try
2026-01-31T02:56:21.5235411Z 2026/01/31 02:56:21 [TRACE] Waiting 10s before next try
2026-01-31T02:56:31.7793880Z 2026/01/31 02:56:31 [TRACE] Waiting 1m0s before next try
2026-01-31T02:57:32.3591200Z 2026/01/31 02:57:32 [TRACE] Waiting 10s before next try
2026-01-31T02:57:42.6267354Z 2026/01/31 02:57:42 [TRACE] Waiting 1m0s before next try
2026-01-31T02:58:43.0458630Z 2026/01/31 02:58:43 [TRACE] Waiting 10s before next try
2026-01-31T02:58:53.2966792Z 2026/01/31 02:58:53 [TRACE] Waiting 1m0s before next try
2026-01-31T02:59:53.7035453Z 2026/01/31 02:59:53 [TRACE] Waiting 10s before next try
2026-01-31T03:00:03.9528538Z 2026/01/31 03:00:03 [TRACE] Waiting 1m0s before next try
2026-01-31T03:01:04.3648050Z 2026/01/31 03:01:04 [TRACE] Waiting 10s before next try
2026-01-31T03:01:14.6221540Z 2026/01/31 03:01:14 [TRACE] Waiting 1m0s before next try
2026-01-31T03:02:15.0206536Z 2026/01/31 03:02:15 [TRACE] Waiting 10s before next try
2026-01-31T03:02:25.2978989Z 2026/01/31 03:02:25 [TRACE] Waiting 1m0s before next try
2026-01-31T03:03:25.7196449Z 2026/01/31 03:03:25 [TRACE] Waiting 10s before next try
2026-01-31T03:03:35.9699070Z 2026/01/31 03:03:35 [TRACE] Waiting 1m0s before next try
2026-01-31T03:04:36.4106357Z 2026/01/31 03:04:36 [TRACE] Waiting 10s before next try
2026-01-31T03:04:46.6677125Z 2026/01/31 03:04:46 [TRACE] Waiting 1m0s before next try
2026-01-31T03:05:47.0901979Z 2026/01/31 03:05:47 [TRACE] Waiting 10s before next try
2026-01-31T03:05:57.3536260Z 2026/01/31 03:05:57 [TRACE] Waiting 1m0s before next try
2026-01-31T03:06:57.8696941Z 2026/01/31 03:06:57 [TRACE] Waiting 10s before next try
2026-01-31T03:07:08.1258900Z 2026/01/31 03:07:08 [TRACE] Waiting 1m0s before next try
2026-01-31T03:07:35.0749082Z 2026/01/31 03:07:35 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T03:07:35.0750138Z 2026/01/31 03:07:35 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T03:07:35.0751185Z     resource_search_index_test.go:40: 
2026-01-31T03:07:35.0753425Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T03:07:35.0756666Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T03:07:35.0759357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-01-31T03:07:35.0760472Z         	Error:      	Received unexpected error:
2026-01-31T03:07:35.0761808Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:07:35.0762568Z         	Test:       	TestAccSearchIndex_withMapping
2026-01-31T03:07:35.0763753Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1538945850540584379, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:07:35.0764717Z --- FAIL: TestAccSearchIndex_withMapping (3600.97s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T04:38:34+00:00
```
2026-02-02T04:38:34.6970350Z === RUN   TestAccSearchIndex_withMapping
2026-02-02T04:38:34.6971328Z     resource_search_index_test.go:40: Creating execution cluster: test-acc-tf-c-8046070391352401002
2026-02-02T04:38:35.3783423Z 2026/02/02 04:38:35 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T04:41:35.5398003Z 2026/02/02 04:41:35 [TRACE] Waiting 1m0s before next try
2026-02-02T04:42:35.7078750Z 2026/02/02 04:42:35 [TRACE] Waiting 10s before next try
2026-02-02T04:42:45.8387093Z 2026/02/02 04:42:45 [TRACE] Waiting 1m0s before next try
2026-02-02T04:43:46.0594881Z 2026/02/02 04:43:46 [TRACE] Waiting 10s before next try
2026-02-02T04:43:56.2046459Z 2026/02/02 04:43:56 [TRACE] Waiting 1m0s before next try
2026-02-02T04:44:56.3481885Z 2026/02/02 04:44:56 [TRACE] Waiting 10s before next try
2026-02-02T04:45:06.4588954Z 2026/02/02 04:45:06 [TRACE] Waiting 1m0s before next try
2026-02-02T04:46:06.6814480Z 2026/02/02 04:46:06 [TRACE] Waiting 10s before next try
2026-02-02T04:46:16.8346740Z 2026/02/02 04:46:16 [TRACE] Waiting 1m0s before next try
2026-02-02T04:47:17.0499711Z 2026/02/02 04:47:17 [TRACE] Waiting 10s before next try
2026-02-02T04:47:27.1677359Z 2026/02/02 04:47:27 [TRACE] Waiting 1m0s before next try
2026-02-02T04:48:27.4264605Z 2026/02/02 04:48:27 [TRACE] Waiting 10s before next try
2026-02-02T04:48:37.5585410Z 2026/02/02 04:48:37 [TRACE] Waiting 1m0s before next try
2026-02-02T04:49:37.8759833Z 2026/02/02 04:49:37 [TRACE] Waiting 10s before next try
2026-02-02T04:49:48.0040631Z 2026/02/02 04:49:48 [TRACE] Waiting 1m0s before next try
2026-02-02T04:50:48.1855365Z 2026/02/02 04:50:48 [TRACE] Waiting 10s before next try
2026-02-02T04:50:58.3291539Z 2026/02/02 04:50:58 [TRACE] Waiting 1m0s before next try
2026-02-02T04:51:58.5387040Z 2026/02/02 04:51:58 [TRACE] Waiting 10s before next try
2026-02-02T04:52:08.6627619Z 2026/02/02 04:52:08 [TRACE] Waiting 1m0s before next try
2026-02-02T04:53:08.8481986Z 2026/02/02 04:53:08 [TRACE] Waiting 10s before next try
2026-02-02T04:53:18.9933307Z 2026/02/02 04:53:18 [TRACE] Waiting 1m0s before next try
2026-02-02T04:54:19.1910954Z 2026/02/02 04:54:19 [TRACE] Waiting 10s before next try
2026-02-02T04:54:29.3093115Z 2026/02/02 04:54:29 [TRACE] Waiting 1m0s before next try
2026-02-02T04:55:29.5094653Z 2026/02/02 04:55:29 [TRACE] Waiting 10s before next try
2026-02-02T04:55:39.6412375Z 2026/02/02 04:55:39 [TRACE] Waiting 1m0s before next try
2026-02-02T04:56:39.8427423Z 2026/02/02 04:56:39 [TRACE] Waiting 10s before next try
2026-02-02T04:56:49.9740899Z 2026/02/02 04:56:49 [TRACE] Waiting 1m0s before next try
2026-02-02T04:57:50.2115371Z 2026/02/02 04:57:50 [TRACE] Waiting 10s before next try
2026-02-02T04:58:00.3552553Z 2026/02/02 04:58:00 [TRACE] Waiting 1m0s before next try
2026-02-02T04:59:00.5417289Z 2026/02/02 04:59:00 [TRACE] Waiting 10s before next try
2026-02-02T04:59:10.6612370Z 2026/02/02 04:59:10 [TRACE] Waiting 1m0s before next try
2026-02-02T05:00:10.8918534Z 2026/02/02 05:00:10 [TRACE] Waiting 10s before next try
2026-02-02T05:00:21.0285184Z 2026/02/02 05:00:21 [TRACE] Waiting 1m0s before next try
2026-02-02T05:01:21.2454085Z 2026/02/02 05:01:21 [TRACE] Waiting 10s before next try
2026-02-02T05:01:31.3722490Z 2026/02/02 05:01:31 [TRACE] Waiting 1m0s before next try
2026-02-02T05:02:31.5691556Z 2026/02/02 05:02:31 [TRACE] Waiting 10s before next try
2026-02-02T05:02:41.6874443Z 2026/02/02 05:02:41 [TRACE] Waiting 1m0s before next try
2026-02-02T05:03:41.9442395Z 2026/02/02 05:03:41 [TRACE] Waiting 10s before next try
2026-02-02T05:03:52.0797212Z 2026/02/02 05:03:52 [TRACE] Waiting 1m0s before next try
2026-02-02T05:04:52.2854736Z 2026/02/02 05:04:52 [TRACE] Waiting 10s before next try
2026-02-02T05:05:02.4226586Z 2026/02/02 05:05:02 [TRACE] Waiting 1m0s before next try
2026-02-02T05:06:02.5776422Z 2026/02/02 05:06:02 [TRACE] Waiting 10s before next try
2026-02-02T05:06:12.6920673Z 2026/02/02 05:06:12 [TRACE] Waiting 1m0s before next try
2026-02-02T05:07:12.8858081Z 2026/02/02 05:07:12 [TRACE] Waiting 10s before next try
2026-02-02T05:07:23.0012965Z 2026/02/02 05:07:23 [TRACE] Waiting 1m0s before next try
2026-02-02T05:08:23.1696367Z 2026/02/02 05:08:23 [TRACE] Waiting 10s before next try
2026-02-02T05:08:33.2929577Z 2026/02/02 05:08:33 [TRACE] Waiting 1m0s before next try
2026-02-02T05:09:33.5020752Z 2026/02/02 05:09:33 [TRACE] Waiting 10s before next try
2026-02-02T05:09:43.6249018Z 2026/02/02 05:09:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:10:43.8317064Z 2026/02/02 05:10:43 [TRACE] Waiting 10s before next try
2026-02-02T05:10:53.9519224Z 2026/02/02 05:10:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:11:54.1321358Z 2026/02/02 05:11:54 [TRACE] Waiting 10s before next try
2026-02-02T05:12:04.2775202Z 2026/02/02 05:12:04 [TRACE] Waiting 1m0s before next try
2026-02-02T05:13:04.5174486Z 2026/02/02 05:13:04 [TRACE] Waiting 10s before next try
2026-02-02T05:13:14.6468250Z 2026/02/02 05:13:14 [TRACE] Waiting 1m0s before next try
2026-02-02T05:14:14.8420816Z 2026/02/02 05:14:14 [TRACE] Waiting 10s before next try
2026-02-02T05:14:24.9664727Z 2026/02/02 05:14:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:15:25.1305658Z 2026/02/02 05:15:25 [TRACE] Waiting 10s before next try
2026-02-02T05:15:35.2716678Z 2026/02/02 05:15:35 [TRACE] Waiting 1m0s before next try
2026-02-02T05:16:35.4733203Z 2026/02/02 05:16:35 [TRACE] Waiting 10s before next try
2026-02-02T05:16:45.6088597Z 2026/02/02 05:16:45 [TRACE] Waiting 1m0s before next try
2026-02-02T05:17:45.7714081Z 2026/02/02 05:17:45 [TRACE] Waiting 10s before next try
2026-02-02T05:17:55.8922581Z 2026/02/02 05:17:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:18:56.1081287Z 2026/02/02 05:18:56 [TRACE] Waiting 10s before next try
2026-02-02T05:19:06.2744030Z 2026/02/02 05:19:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:20:06.4115902Z 2026/02/02 05:20:06 [TRACE] Waiting 10s before next try
2026-02-02T05:20:16.5290990Z 2026/02/02 05:20:16 [TRACE] Waiting 1m0s before next try
2026-02-02T05:21:16.7139512Z 2026/02/02 05:21:16 [TRACE] Waiting 10s before next try
2026-02-02T05:21:26.8318380Z 2026/02/02 05:21:26 [TRACE] Waiting 1m0s before next try
2026-02-02T05:22:26.9951601Z 2026/02/02 05:22:26 [TRACE] Waiting 10s before next try
2026-02-02T05:22:37.1302767Z 2026/02/02 05:22:37 [TRACE] Waiting 1m0s before next try
2026-02-02T05:23:37.3108797Z 2026/02/02 05:23:37 [TRACE] Waiting 10s before next try
2026-02-02T05:23:47.4391922Z 2026/02/02 05:23:47 [TRACE] Waiting 1m0s before next try
2026-02-02T05:24:47.6574348Z 2026/02/02 05:24:47 [TRACE] Waiting 10s before next try
2026-02-02T05:24:57.7815513Z 2026/02/02 05:24:57 [TRACE] Waiting 1m0s before next try
2026-02-02T05:25:58.0023018Z 2026/02/02 05:25:58 [TRACE] Waiting 10s before next try
2026-02-02T05:26:08.1467219Z 2026/02/02 05:26:08 [TRACE] Waiting 1m0s before next try
2026-02-02T05:27:08.3225694Z 2026/02/02 05:27:08 [TRACE] Waiting 10s before next try
2026-02-02T05:27:18.4517707Z 2026/02/02 05:27:18 [TRACE] Waiting 1m0s before next try
2026-02-02T05:28:18.6284785Z 2026/02/02 05:28:18 [TRACE] Waiting 10s before next try
2026-02-02T05:28:28.7719184Z 2026/02/02 05:28:28 [TRACE] Waiting 1m0s before next try
2026-02-02T05:29:28.9876683Z 2026/02/02 05:29:28 [TRACE] Waiting 10s before next try
2026-02-02T05:29:39.1283828Z 2026/02/02 05:29:39 [TRACE] Waiting 1m0s before next try
2026-02-02T05:30:39.3428962Z 2026/02/02 05:30:39 [TRACE] Waiting 10s before next try
2026-02-02T05:30:49.4693337Z 2026/02/02 05:30:49 [TRACE] Waiting 1m0s before next try
2026-02-02T05:31:49.6517860Z 2026/02/02 05:31:49 [TRACE] Waiting 10s before next try
2026-02-02T05:31:59.7673128Z 2026/02/02 05:31:59 [TRACE] Waiting 1m0s before next try
2026-02-02T05:32:59.9514553Z 2026/02/02 05:32:59 [TRACE] Waiting 10s before next try
2026-02-02T05:33:10.0875263Z 2026/02/02 05:33:10 [TRACE] Waiting 1m0s before next try
2026-02-02T05:34:10.2596862Z 2026/02/02 05:34:10 [TRACE] Waiting 10s before next try
2026-02-02T05:34:20.3915723Z 2026/02/02 05:34:20 [TRACE] Waiting 1m0s before next try
2026-02-02T05:35:20.5998831Z 2026/02/02 05:35:20 [TRACE] Waiting 10s before next try
2026-02-02T05:35:30.7585782Z 2026/02/02 05:35:30 [TRACE] Waiting 1m0s before next try
2026-02-02T05:36:30.9396122Z 2026/02/02 05:36:30 [TRACE] Waiting 10s before next try
2026-02-02T05:36:41.0828576Z 2026/02/02 05:36:41 [TRACE] Waiting 1m0s before next try
2026-02-02T05:37:41.3407582Z 2026/02/02 05:37:41 [TRACE] Waiting 10s before next try
2026-02-02T05:37:51.4621025Z 2026/02/02 05:37:51 [TRACE] Waiting 1m0s before next try
2026-02-02T05:38:29.8905601Z panic: test timed out after 5h0m0s
2026-02-02T05:38:29.8906260Z 	running tests:
2026-02-02T05:38:29.8905601Z panic: test timed out after 5h0m0s
2026-02-02T05:38:29.8906260Z 	running tests:
2026-02-02T05:38:29.8906713Z 		TestAccSearchIndex_withMapping (59m55s)
```

- 2026-02-03

### Error 2026-02-03T00:39:20+00:00
```
2026-02-03T00:39:20.7941886Z === RUN   TestAccSearchIndex_withMapping
2026-02-03T00:39:20.7942475Z     resource_search_index_test.go:40: Creating execution cluster: test-acc-tf-c-7741748861430928996
2026-02-03T00:39:21.2993704Z     resource_search_index_test.go:40: 
2026-02-03T00:39:21.2995954Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:21.3000308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:21.3003054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-02-03T00:39:21.3004355Z         	Error:      	Received unexpected error:
2026-02-03T00:39:21.3007493Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.3010255Z         	Test:       	TestAccSearchIndex_withMapping
2026-02-03T00:39:21.3014284Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7741748861430928996, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.3016459Z --- FAIL: TestAccSearchIndex_withMapping (0.51s)
```

- 2026-02-04 PASS 5 seconds
- 2026-02-05 PASS 7 seconds
- 2026-02-06 PASS 6 seconds
- 2026-02-07 PASS 5 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 6 seconds
- 2026-02-12 PASS 7 seconds
- 2026-02-13 PASS 8 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 8 seconds
- 2026-02-17 PASS 5 seconds
- 2026-02-18 PASS 8 seconds
- 2026-02-19 PASS 8 seconds
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1599980Z === RUN   TestAccSearchIndex_withMapping
2026-02-24T01:03:37.6682362Z === CONT  TestAccSearchIndex_withMapping
2026-02-24T01:03:40.5783100Z === NAME  TestAccSearchIndex_withMapping
2026-02-24T01:03:40.5783984Z     resource_search_index_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:03:40.5784588Z         
2026-02-24T01:03:40.5787073Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:03:40.5788500Z         
2026-02-24T01:03:40.5788817Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:40.5789640Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:40.5790276Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:40.5790589Z         
2026-02-24T01:03:40.6303083Z --- FAIL: TestAccSearchIndex_withMapping (2.96s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 9 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 6 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 9 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 8 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
