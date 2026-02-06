# search_index/searchindex/TestAccSearchIndex_withTypeSets_ConfigurableDynamic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 04:07](#error-2026-01-31t0407350000) |  | dev | timeout | 3600.08s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
- 2026-01-09 PASS 12 seconds
- 2026-01-10 PASS 11 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 10 seconds
- 2026-01-13 PASS 12 seconds
- 2026-01-14 PASS 12 seconds
- 2026-01-15 PASS 13 seconds
- 2026-01-16 PASS 12 seconds
- 2026-01-17 PASS 10 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 seconds
- 2026-01-20 PASS 9 seconds
- 2026-01-21 PASS 10 seconds
- 2026-01-22 PASS 10 seconds
- 2026-01-23 PASS 11 seconds
- 2026-01-24 PASS 11 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 seconds
- 2026-01-27 PASS 11 seconds
- 2026-01-28 PASS 13 seconds
- 2026-01-29 PASS 12 seconds
- 2026-01-30 PASS 12 seconds
- 2026-01-31

### Error 2026-01-31T04:07:35+00:00
```
2026-01-31T04:07:35.9221793Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-01-31T04:07:35.9222459Z     resource_search_index_test.go:76: Creating execution cluster: test-acc-tf-c-4943802321839337482
2026-01-31T04:07:36.7401214Z 2026/01/31 04:07:36 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T04:10:37.1624810Z 2026/01/31 04:10:37 [TRACE] Waiting 1m0s before next try
2026-01-31T04:11:37.6097428Z 2026/01/31 04:11:37 [TRACE] Waiting 10s before next try
2026-01-31T04:11:47.8827883Z 2026/01/31 04:11:47 [TRACE] Waiting 1m0s before next try
2026-01-31T04:12:48.3078041Z 2026/01/31 04:12:48 [TRACE] Waiting 10s before next try
2026-01-31T04:12:58.5783989Z 2026/01/31 04:12:58 [TRACE] Waiting 1m0s before next try
2026-01-31T04:13:58.9988105Z 2026/01/31 04:13:58 [TRACE] Waiting 10s before next try
2026-01-31T04:14:09.2735194Z 2026/01/31 04:14:09 [TRACE] Waiting 1m0s before next try
2026-01-31T04:15:09.6982899Z 2026/01/31 04:15:09 [TRACE] Waiting 10s before next try
2026-01-31T04:15:19.9673057Z 2026/01/31 04:15:19 [TRACE] Waiting 1m0s before next try
2026-01-31T04:16:20.4107489Z 2026/01/31 04:16:20 [TRACE] Waiting 10s before next try
2026-01-31T04:16:30.6852647Z 2026/01/31 04:16:30 [TRACE] Waiting 1m0s before next try
2026-01-31T04:17:31.1677358Z 2026/01/31 04:17:31 [TRACE] Waiting 10s before next try
2026-01-31T04:17:41.4373850Z 2026/01/31 04:17:41 [TRACE] Waiting 1m0s before next try
2026-01-31T04:18:41.8619480Z 2026/01/31 04:18:41 [TRACE] Waiting 10s before next try
2026-01-31T04:18:52.1318718Z 2026/01/31 04:18:52 [TRACE] Waiting 1m0s before next try
2026-01-31T04:19:52.6537844Z 2026/01/31 04:19:52 [TRACE] Waiting 10s before next try
2026-01-31T04:20:02.9232136Z 2026/01/31 04:20:02 [TRACE] Waiting 1m0s before next try
2026-01-31T04:21:03.3453697Z 2026/01/31 04:21:03 [TRACE] Waiting 10s before next try
2026-01-31T04:21:13.6115533Z 2026/01/31 04:21:13 [TRACE] Waiting 1m0s before next try
2026-01-31T04:22:14.0616956Z 2026/01/31 04:22:14 [TRACE] Waiting 10s before next try
2026-01-31T04:22:24.3342879Z 2026/01/31 04:22:24 [TRACE] Waiting 1m0s before next try
2026-01-31T04:23:24.7561812Z 2026/01/31 04:23:24 [TRACE] Waiting 10s before next try
2026-01-31T04:23:35.0323362Z 2026/01/31 04:23:35 [TRACE] Waiting 1m0s before next try
2026-01-31T04:24:35.4598773Z 2026/01/31 04:24:35 [TRACE] Waiting 10s before next try
2026-01-31T04:24:45.7355111Z 2026/01/31 04:24:45 [TRACE] Waiting 1m0s before next try
2026-01-31T04:25:46.1712241Z 2026/01/31 04:25:46 [TRACE] Waiting 10s before next try
2026-01-31T04:25:56.4524084Z 2026/01/31 04:25:56 [TRACE] Waiting 1m0s before next try
2026-01-31T04:26:56.8747106Z 2026/01/31 04:26:56 [TRACE] Waiting 10s before next try
2026-01-31T04:27:07.1369412Z 2026/01/31 04:27:07 [TRACE] Waiting 1m0s before next try
2026-01-31T04:28:07.5544109Z 2026/01/31 04:28:07 [TRACE] Waiting 10s before next try
2026-01-31T04:28:17.8216981Z 2026/01/31 04:28:17 [TRACE] Waiting 1m0s before next try
2026-01-31T04:29:18.2723302Z 2026/01/31 04:29:18 [TRACE] Waiting 10s before next try
2026-01-31T04:29:28.5445088Z 2026/01/31 04:29:28 [TRACE] Waiting 1m0s before next try
2026-01-31T04:30:28.9556835Z 2026/01/31 04:30:28 [TRACE] Waiting 10s before next try
2026-01-31T04:30:39.2202535Z 2026/01/31 04:30:39 [TRACE] Waiting 1m0s before next try
2026-01-31T04:31:39.6404230Z 2026/01/31 04:31:39 [TRACE] Waiting 10s before next try
2026-01-31T04:31:49.9112494Z 2026/01/31 04:31:49 [TRACE] Waiting 1m0s before next try
2026-01-31T04:32:50.3203670Z 2026/01/31 04:32:50 [TRACE] Waiting 10s before next try
2026-01-31T04:33:00.5813939Z 2026/01/31 04:33:00 [TRACE] Waiting 1m0s before next try
2026-01-31T04:34:01.0167063Z 2026/01/31 04:34:01 [TRACE] Waiting 10s before next try
2026-01-31T04:34:11.2737391Z 2026/01/31 04:34:11 [TRACE] Waiting 1m0s before next try
2026-01-31T04:35:11.6731242Z 2026/01/31 04:35:11 [TRACE] Waiting 10s before next try
2026-01-31T04:35:21.9475493Z 2026/01/31 04:35:21 [TRACE] Waiting 1m0s before next try
2026-01-31T04:36:22.3912940Z 2026/01/31 04:36:22 [TRACE] Waiting 10s before next try
2026-01-31T04:36:32.6793833Z 2026/01/31 04:36:32 [TRACE] Waiting 1m0s before next try
2026-01-31T04:37:33.0860046Z 2026/01/31 04:37:33 [TRACE] Waiting 10s before next try
2026-01-31T04:37:43.3460830Z 2026/01/31 04:37:43 [TRACE] Waiting 1m0s before next try
2026-01-31T04:38:43.7645386Z 2026/01/31 04:38:43 [TRACE] Waiting 10s before next try
2026-01-31T04:38:54.0289097Z 2026/01/31 04:38:54 [TRACE] Waiting 1m0s before next try
2026-01-31T04:39:54.4283459Z 2026/01/31 04:39:54 [TRACE] Waiting 10s before next try
2026-01-31T04:40:04.6967423Z 2026/01/31 04:40:04 [TRACE] Waiting 1m0s before next try
2026-01-31T04:41:05.1249893Z 2026/01/31 04:41:05 [TRACE] Waiting 10s before next try
2026-01-31T04:41:15.4020071Z 2026/01/31 04:41:15 [TRACE] Waiting 1m0s before next try
2026-01-31T04:42:15.8138593Z 2026/01/31 04:42:15 [TRACE] Waiting 10s before next try
2026-01-31T04:42:26.0758465Z 2026/01/31 04:42:26 [TRACE] Waiting 1m0s before next try
2026-01-31T04:43:26.5350553Z 2026/01/31 04:43:26 [TRACE] Waiting 10s before next try
2026-01-31T04:43:36.7979356Z 2026/01/31 04:43:36 [TRACE] Waiting 1m0s before next try
2026-01-31T04:44:37.2037527Z 2026/01/31 04:44:37 [TRACE] Waiting 10s before next try
2026-01-31T04:44:47.4845969Z 2026/01/31 04:44:47 [TRACE] Waiting 1m0s before next try
2026-01-31T04:45:47.8678759Z 2026/01/31 04:45:47 [TRACE] Waiting 10s before next try
2026-01-31T04:45:58.1060037Z 2026/01/31 04:45:58 [TRACE] Waiting 1m0s before next try
2026-01-31T04:46:58.5230502Z 2026/01/31 04:46:58 [TRACE] Waiting 10s before next try
2026-01-31T04:47:08.7775189Z 2026/01/31 04:47:08 [TRACE] Waiting 1m0s before next try
2026-01-31T04:48:09.3275101Z 2026/01/31 04:48:09 [TRACE] Waiting 10s before next try
2026-01-31T04:48:19.5843203Z 2026/01/31 04:48:19 [TRACE] Waiting 1m0s before next try
2026-01-31T04:49:20.0033949Z 2026/01/31 04:49:20 [TRACE] Waiting 10s before next try
2026-01-31T04:49:30.2600095Z 2026/01/31 04:49:30 [TRACE] Waiting 1m0s before next try
2026-01-31T04:50:30.6548920Z 2026/01/31 04:50:30 [TRACE] Waiting 10s before next try
2026-01-31T04:50:40.9392410Z 2026/01/31 04:50:40 [TRACE] Waiting 1m0s before next try
2026-01-31T04:51:41.3466892Z 2026/01/31 04:51:41 [TRACE] Waiting 10s before next try
2026-01-31T04:51:51.5960058Z 2026/01/31 04:51:51 [TRACE] Waiting 1m0s before next try
2026-01-31T04:52:52.0276362Z 2026/01/31 04:52:52 [TRACE] Waiting 10s before next try
2026-01-31T04:53:02.3035605Z 2026/01/31 04:53:02 [TRACE] Waiting 1m0s before next try
2026-01-31T04:54:02.7108772Z 2026/01/31 04:54:02 [TRACE] Waiting 10s before next try
2026-01-31T04:54:12.9845703Z 2026/01/31 04:54:12 [TRACE] Waiting 1m0s before next try
2026-01-31T04:55:13.4342275Z 2026/01/31 04:55:13 [TRACE] Waiting 10s before next try
2026-01-31T04:55:23.7084145Z 2026/01/31 04:55:23 [TRACE] Waiting 1m0s before next try
2026-01-31T04:56:24.1315922Z 2026/01/31 04:56:24 [TRACE] Waiting 10s before next try
2026-01-31T04:56:34.3933560Z 2026/01/31 04:56:34 [TRACE] Waiting 1m0s before next try
2026-01-31T04:57:34.7882417Z 2026/01/31 04:57:34 [TRACE] Waiting 10s before next try
2026-01-31T04:57:45.0481492Z 2026/01/31 04:57:45 [TRACE] Waiting 1m0s before next try
2026-01-31T04:58:45.4511390Z 2026/01/31 04:58:45 [TRACE] Waiting 10s before next try
2026-01-31T04:58:55.7099524Z 2026/01/31 04:58:55 [TRACE] Waiting 1m0s before next try
2026-01-31T04:59:56.1278321Z 2026/01/31 04:59:56 [TRACE] Waiting 10s before next try
2026-01-31T05:00:06.3871533Z 2026/01/31 05:00:06 [TRACE] Waiting 1m0s before next try
2026-01-31T05:01:06.8141361Z 2026/01/31 05:01:06 [TRACE] Waiting 10s before next try
2026-01-31T05:01:17.0562985Z 2026/01/31 05:01:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:02:17.5080031Z 2026/01/31 05:02:17 [TRACE] Waiting 10s before next try
2026-01-31T05:02:27.7688284Z 2026/01/31 05:02:27 [TRACE] Waiting 1m0s before next try
2026-01-31T05:03:28.2790757Z 2026/01/31 05:03:28 [TRACE] Waiting 10s before next try
2026-01-31T05:03:38.5326079Z 2026/01/31 05:03:38 [TRACE] Waiting 1m0s before next try
2026-01-31T05:04:38.9375357Z 2026/01/31 05:04:38 [TRACE] Waiting 10s before next try
2026-01-31T05:04:49.2054926Z 2026/01/31 05:04:49 [TRACE] Waiting 1m0s before next try
2026-01-31T05:05:49.6062943Z 2026/01/31 05:05:49 [TRACE] Waiting 10s before next try
2026-01-31T05:05:59.8669183Z 2026/01/31 05:05:59 [TRACE] Waiting 1m0s before next try
2026-01-31T05:07:00.2694862Z 2026/01/31 05:07:00 [TRACE] Waiting 10s before next try
2026-01-31T05:07:10.5305768Z 2026/01/31 05:07:10 [TRACE] Waiting 1m0s before next try
2026-01-31T05:07:36.7457063Z 2026/01/31 05:07:36 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T05:07:36.7458117Z 2026/01/31 05:07:36 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T05:07:36.7459150Z     resource_search_index_test.go:76: 
2026-01-31T05:07:36.7460988Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T05:07:36.7463292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T05:07:36.7466035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-01-31T05:07:36.7467104Z         	Error:      	Received unexpected error:
2026-01-31T05:07:36.7468651Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:07:36.7469518Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-01-31T05:07:36.7470974Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4943802321839337482, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:07:36.7471896Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (3600.83s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.7633477Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-02-03T00:39:21.7634125Z     resource_search_index_test.go:76: Creating execution cluster: test-acc-tf-c-2622651500985106977
2026-02-03T00:39:22.2648073Z     resource_search_index_test.go:76: 
2026-02-03T00:39:22.2649914Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:22.2652347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:22.2654973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-02-03T00:39:22.2656079Z         	Error:      	Received unexpected error:
2026-02-03T00:39:22.2659434Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.2660842Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-02-03T00:39:22.2663417Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2622651500985106977, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.2664946Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.50s)
```

- 2026-02-04 PASS 11 seconds
- 2026-02-05 PASS 13 seconds
- 2026-02-06 PASS 14 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 13 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 12 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 9 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 10 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
