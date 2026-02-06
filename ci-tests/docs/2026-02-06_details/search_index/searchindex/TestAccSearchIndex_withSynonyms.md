# search_index/searchindex/TestAccSearchIndex_withSynonyms Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:07](#error-2026-01-31t0307350000) |  | dev | timeout | 3600.09s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
- 2026-01-09 PASS 8 seconds
- 2026-01-10 PASS 6 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 7 seconds
- 2026-01-13 PASS 7 seconds
- 2026-01-14 PASS 9 seconds
- 2026-01-15 PASS 8 seconds
- 2026-01-16 PASS 8 seconds
- 2026-01-17 PASS 5 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 7 seconds
- 2026-01-20 PASS 5 seconds
- 2026-01-21 PASS 5 seconds
- 2026-01-22 PASS 6 seconds
- 2026-01-23 PASS 8 seconds
- 2026-01-24 PASS 6 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 7 seconds
- 2026-01-29 PASS 8 seconds
- 2026-01-30 PASS 8 seconds
- 2026-01-31

### Error 2026-01-31T03:07:35+00:00
```
2026-01-31T03:07:35.0765090Z === RUN   TestAccSearchIndex_withSynonyms
2026-01-31T03:07:35.0765725Z     resource_search_index_test.go:58: Creating execution cluster: test-acc-tf-c-5247959738151037258
2026-01-31T03:07:35.9158771Z 2026/01/31 03:07:35 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T03:10:36.3487662Z 2026/01/31 03:10:36 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:36.7642826Z 2026/01/31 03:11:36 [TRACE] Waiting 10s before next try
2026-01-31T03:11:47.0285162Z 2026/01/31 03:11:47 [TRACE] Waiting 1m0s before next try
2026-01-31T03:12:47.4218629Z 2026/01/31 03:12:47 [TRACE] Waiting 10s before next try
2026-01-31T03:12:57.6775481Z 2026/01/31 03:12:57 [TRACE] Waiting 1m0s before next try
2026-01-31T03:13:58.1115975Z 2026/01/31 03:13:58 [TRACE] Waiting 10s before next try
2026-01-31T03:14:08.3732777Z 2026/01/31 03:14:08 [TRACE] Waiting 1m0s before next try
2026-01-31T03:15:08.8102392Z 2026/01/31 03:15:08 [TRACE] Waiting 10s before next try
2026-01-31T03:15:19.0854039Z 2026/01/31 03:15:19 [TRACE] Waiting 1m0s before next try
2026-01-31T03:16:19.5287847Z 2026/01/31 03:16:19 [TRACE] Waiting 10s before next try
2026-01-31T03:16:29.8080552Z 2026/01/31 03:16:29 [TRACE] Waiting 1m0s before next try
2026-01-31T03:17:30.2182228Z 2026/01/31 03:17:30 [TRACE] Waiting 10s before next try
2026-01-31T03:17:40.4697972Z 2026/01/31 03:17:40 [TRACE] Waiting 1m0s before next try
2026-01-31T03:18:40.8598592Z 2026/01/31 03:18:40 [TRACE] Waiting 10s before next try
2026-01-31T03:18:51.0979602Z 2026/01/31 03:18:51 [TRACE] Waiting 1m0s before next try
2026-01-31T03:19:51.5305453Z 2026/01/31 03:19:51 [TRACE] Waiting 10s before next try
2026-01-31T03:20:01.7872403Z 2026/01/31 03:20:01 [TRACE] Waiting 1m0s before next try
2026-01-31T03:21:02.2297555Z 2026/01/31 03:21:02 [TRACE] Waiting 10s before next try
2026-01-31T03:21:12.4671894Z 2026/01/31 03:21:12 [TRACE] Waiting 1m0s before next try
2026-01-31T03:22:12.8723607Z 2026/01/31 03:22:12 [TRACE] Waiting 10s before next try
2026-01-31T03:22:23.1200075Z 2026/01/31 03:22:23 [TRACE] Waiting 1m0s before next try
2026-01-31T03:23:23.5562091Z 2026/01/31 03:23:23 [TRACE] Waiting 10s before next try
2026-01-31T03:23:33.8060983Z 2026/01/31 03:23:33 [TRACE] Waiting 1m0s before next try
2026-01-31T03:24:34.2168336Z 2026/01/31 03:24:34 [TRACE] Waiting 10s before next try
2026-01-31T03:24:44.4600243Z 2026/01/31 03:24:44 [TRACE] Waiting 1m0s before next try
2026-01-31T03:25:44.8835401Z 2026/01/31 03:25:44 [TRACE] Waiting 10s before next try
2026-01-31T03:25:55.1254604Z 2026/01/31 03:25:55 [TRACE] Waiting 1m0s before next try
2026-01-31T03:26:55.5021433Z 2026/01/31 03:26:55 [TRACE] Waiting 10s before next try
2026-01-31T03:27:05.7389155Z 2026/01/31 03:27:05 [TRACE] Waiting 1m0s before next try
2026-01-31T03:28:06.1605187Z 2026/01/31 03:28:06 [TRACE] Waiting 10s before next try
2026-01-31T03:28:16.4012677Z 2026/01/31 03:28:16 [TRACE] Waiting 1m0s before next try
2026-01-31T03:29:16.8182839Z 2026/01/31 03:29:16 [TRACE] Waiting 10s before next try
2026-01-31T03:29:27.0781894Z 2026/01/31 03:29:27 [TRACE] Waiting 1m0s before next try
2026-01-31T03:30:27.4751958Z 2026/01/31 03:30:27 [TRACE] Waiting 10s before next try
2026-01-31T03:30:37.7555068Z 2026/01/31 03:30:37 [TRACE] Waiting 1m0s before next try
2026-01-31T03:31:38.1700904Z 2026/01/31 03:31:38 [TRACE] Waiting 10s before next try
2026-01-31T03:31:48.4203721Z 2026/01/31 03:31:48 [TRACE] Waiting 1m0s before next try
2026-01-31T03:32:48.8376375Z 2026/01/31 03:32:48 [TRACE] Waiting 10s before next try
2026-01-31T03:32:59.0842031Z 2026/01/31 03:32:59 [TRACE] Waiting 1m0s before next try
2026-01-31T03:33:59.5129317Z 2026/01/31 03:33:59 [TRACE] Waiting 10s before next try
2026-01-31T03:34:09.7870257Z 2026/01/31 03:34:09 [TRACE] Waiting 1m0s before next try
2026-01-31T03:35:10.1935176Z 2026/01/31 03:35:10 [TRACE] Waiting 10s before next try
2026-01-31T03:35:20.4429343Z 2026/01/31 03:35:20 [TRACE] Waiting 1m0s before next try
2026-01-31T03:36:20.8772293Z 2026/01/31 03:36:20 [TRACE] Waiting 10s before next try
2026-01-31T03:36:31.1442912Z 2026/01/31 03:36:31 [TRACE] Waiting 1m0s before next try
2026-01-31T03:37:31.5660264Z 2026/01/31 03:37:31 [TRACE] Waiting 10s before next try
2026-01-31T03:37:41.8048939Z 2026/01/31 03:37:41 [TRACE] Waiting 1m0s before next try
2026-01-31T03:38:42.2064117Z 2026/01/31 03:38:42 [TRACE] Waiting 10s before next try
2026-01-31T03:38:52.4549629Z 2026/01/31 03:38:52 [TRACE] Waiting 1m0s before next try
2026-01-31T03:39:52.8630540Z 2026/01/31 03:39:52 [TRACE] Waiting 10s before next try
2026-01-31T03:40:03.1243416Z 2026/01/31 03:40:03 [TRACE] Waiting 1m0s before next try
2026-01-31T03:41:03.5417719Z 2026/01/31 03:41:03 [TRACE] Waiting 10s before next try
2026-01-31T03:41:13.7898868Z 2026/01/31 03:41:13 [TRACE] Waiting 1m0s before next try
2026-01-31T03:42:14.1992341Z 2026/01/31 03:42:14 [TRACE] Waiting 10s before next try
2026-01-31T03:42:24.4642624Z 2026/01/31 03:42:24 [TRACE] Waiting 1m0s before next try
2026-01-31T03:43:24.8887153Z 2026/01/31 03:43:24 [TRACE] Waiting 10s before next try
2026-01-31T03:43:35.1565243Z 2026/01/31 03:43:35 [TRACE] Waiting 1m0s before next try
2026-01-31T03:44:35.5898995Z 2026/01/31 03:44:35 [TRACE] Waiting 10s before next try
2026-01-31T03:44:45.8627432Z 2026/01/31 03:44:45 [TRACE] Waiting 1m0s before next try
2026-01-31T03:45:46.2768115Z 2026/01/31 03:45:46 [TRACE] Waiting 10s before next try
2026-01-31T03:45:56.5460086Z 2026/01/31 03:45:56 [TRACE] Waiting 1m0s before next try
2026-01-31T03:46:56.9222379Z 2026/01/31 03:46:56 [TRACE] Waiting 10s before next try
2026-01-31T03:47:07.1732922Z 2026/01/31 03:47:07 [TRACE] Waiting 1m0s before next try
2026-01-31T03:48:07.6067740Z 2026/01/31 03:48:07 [TRACE] Waiting 10s before next try
2026-01-31T03:48:17.8801530Z 2026/01/31 03:48:17 [TRACE] Waiting 1m0s before next try
2026-01-31T03:49:18.2848462Z 2026/01/31 03:49:18 [TRACE] Waiting 10s before next try
2026-01-31T03:49:28.5462742Z 2026/01/31 03:49:28 [TRACE] Waiting 1m0s before next try
2026-01-31T03:50:29.0016581Z 2026/01/31 03:50:29 [TRACE] Waiting 10s before next try
2026-01-31T03:50:39.2848822Z 2026/01/31 03:50:39 [TRACE] Waiting 1m0s before next try
2026-01-31T03:51:39.6910304Z 2026/01/31 03:51:39 [TRACE] Waiting 10s before next try
2026-01-31T03:51:49.9528104Z 2026/01/31 03:51:49 [TRACE] Waiting 1m0s before next try
2026-01-31T03:52:50.4136349Z 2026/01/31 03:52:50 [TRACE] Waiting 10s before next try
2026-01-31T03:53:00.6604130Z 2026/01/31 03:53:00 [TRACE] Waiting 1m0s before next try
2026-01-31T03:54:01.0543004Z 2026/01/31 03:54:01 [TRACE] Waiting 10s before next try
2026-01-31T03:54:11.3218077Z 2026/01/31 03:54:11 [TRACE] Waiting 1m0s before next try
2026-01-31T03:55:11.7378818Z 2026/01/31 03:55:11 [TRACE] Waiting 10s before next try
2026-01-31T03:55:21.9969265Z 2026/01/31 03:55:21 [TRACE] Waiting 1m0s before next try
2026-01-31T03:56:22.4911927Z 2026/01/31 03:56:22 [TRACE] Waiting 10s before next try
2026-01-31T03:56:32.8542051Z 2026/01/31 03:56:32 [TRACE] Waiting 1m0s before next try
2026-01-31T03:57:34.3717076Z 2026/01/31 03:57:34 [TRACE] Waiting 10s before next try
2026-01-31T03:57:44.9461772Z 2026/01/31 03:57:44 [TRACE] Waiting 1m0s before next try
2026-01-31T03:58:45.4452564Z 2026/01/31 03:58:45 [TRACE] Waiting 10s before next try
2026-01-31T03:58:55.7443521Z 2026/01/31 03:58:55 [TRACE] Waiting 1m0s before next try
2026-01-31T03:59:56.4970335Z 2026/01/31 03:59:56 [TRACE] Waiting 10s before next try
2026-01-31T04:00:06.8217661Z 2026/01/31 04:00:06 [TRACE] Waiting 1m0s before next try
2026-01-31T04:01:07.2494750Z 2026/01/31 04:01:07 [TRACE] Waiting 10s before next try
2026-01-31T04:01:17.5351519Z 2026/01/31 04:01:17 [TRACE] Waiting 1m0s before next try
2026-01-31T04:02:17.9802845Z 2026/01/31 04:02:17 [TRACE] Waiting 10s before next try
2026-01-31T04:02:28.2625710Z 2026/01/31 04:02:28 [TRACE] Waiting 1m0s before next try
2026-01-31T04:03:28.6930078Z 2026/01/31 04:03:28 [TRACE] Waiting 10s before next try
2026-01-31T04:03:38.9693781Z 2026/01/31 04:03:38 [TRACE] Waiting 1m0s before next try
2026-01-31T04:04:39.4379860Z 2026/01/31 04:04:39 [TRACE] Waiting 10s before next try
2026-01-31T04:04:49.7158851Z 2026/01/31 04:04:49 [TRACE] Waiting 1m0s before next try
2026-01-31T04:05:50.1482016Z 2026/01/31 04:05:50 [TRACE] Waiting 10s before next try
2026-01-31T04:06:00.4320593Z 2026/01/31 04:06:00 [TRACE] Waiting 1m0s before next try
2026-01-31T04:07:00.8664306Z 2026/01/31 04:07:00 [TRACE] Waiting 10s before next try
2026-01-31T04:07:11.1316952Z 2026/01/31 04:07:11 [TRACE] Waiting 1m0s before next try
2026-01-31T04:07:35.9204727Z 2026/01/31 04:07:35 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T04:07:35.9206011Z 2026/01/31 04:07:35 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T04:07:35.9207162Z     resource_search_index_test.go:58: 
2026-01-31T04:07:35.9209429Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T04:07:35.9212485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T04:07:35.9215461Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:58
2026-01-31T04:07:35.9216599Z         	Error:      	Received unexpected error:
2026-01-31T04:07:35.9217909Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T04:07:35.9218718Z         	Test:       	TestAccSearchIndex_withSynonyms
2026-01-31T04:07:35.9220209Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5247959738151037258, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T04:07:35.9221252Z --- FAIL: TestAccSearchIndex_withSynonyms (3600.85s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.3016806Z === RUN   TestAccSearchIndex_withSynonyms
2026-02-03T00:39:21.3017424Z     resource_search_index_test.go:58: Creating execution cluster: test-acc-tf-c-5244023863228646522
2026-02-03T00:39:21.7617844Z     resource_search_index_test.go:58: 
2026-02-03T00:39:21.7619722Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:21.7621804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:21.7624089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:58
2026-02-03T00:39:21.7625030Z         	Error:      	Received unexpected error:
2026-02-03T00:39:21.7627934Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.7629560Z         	Test:       	TestAccSearchIndex_withSynonyms
2026-02-03T00:39:21.7631661Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5244023863228646522, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.7633079Z --- FAIL: TestAccSearchIndex_withSynonyms (0.46s)
```

- 2026-02-04 PASS 5 seconds
- 2026-02-05 PASS 6 seconds
- 2026-02-06 PASS 8 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 9 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 7 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 5 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 7 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
