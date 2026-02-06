# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 05:36](#error-2026-01-31t0536290000) |  | dev | timeout | 3601.05s
[2026-02-02 05:40](#error-2026-02-02t0540360000) |  | dev | timeout | 3600.07s
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 minutes
- 2026-01-09 PASS 8 minutes
- 2026-01-10 PASS 4 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13 PASS a minute
- 2026-01-14 PASS 13 minutes
- 2026-01-15 PASS 3 minutes
- 2026-01-16 PASS 7 minutes
- 2026-01-17 PASS 10 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 8 minutes
- 2026-01-20 PASS 4 minutes
- 2026-01-21 PASS 7 minutes
- 2026-01-22 PASS 10 minutes
- 2026-01-23 PASS 13 minutes
- 2026-01-24 PASS 7 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 10 minutes
- 2026-01-28 PASS 5 minutes
- 2026-01-29 PASS 3 minutes
- 2026-01-30 PASS 5 minutes
- 2026-01-31

### Error 2026-01-31T05:36:29+00:00
```
2026-01-31T05:36:29.4603032Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-01-31T05:36:29.4603621Z     resource_test.go:50: Creating execution cluster: test-acc-tf-c-2576658502311827244
2026-01-31T05:36:29.4604263Z 2026/01/31 01:36:34 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T05:36:29.4604652Z 2026/01/31 01:39:35 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4605014Z 2026/01/31 01:40:35 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4605368Z 2026/01/31 01:40:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4605716Z 2026/01/31 01:41:46 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4606072Z 2026/01/31 01:41:56 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4606419Z 2026/01/31 01:42:57 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4606766Z 2026/01/31 01:43:07 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4607115Z 2026/01/31 01:44:07 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4607460Z 2026/01/31 01:44:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4607809Z 2026/01/31 01:45:18 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4608276Z 2026/01/31 01:45:28 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4608640Z 2026/01/31 01:46:29 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4608983Z 2026/01/31 01:46:39 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4609332Z 2026/01/31 01:47:39 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4609803Z 2026/01/31 01:47:49 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4610163Z 2026/01/31 01:48:50 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4610633Z 2026/01/31 01:49:00 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4610985Z 2026/01/31 01:50:01 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4611405Z 2026/01/31 01:50:11 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4611750Z 2026/01/31 01:51:11 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4612095Z 2026/01/31 01:51:21 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4612447Z 2026/01/31 01:52:22 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4612791Z 2026/01/31 01:52:32 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4613141Z 2026/01/31 01:53:33 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4613495Z 2026/01/31 01:53:43 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4613872Z 2026/01/31 01:54:43 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4614217Z 2026/01/31 01:54:53 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4614611Z 2026/01/31 01:55:54 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4614964Z 2026/01/31 01:56:04 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4615321Z 2026/01/31 01:57:05 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4615679Z 2026/01/31 01:57:15 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4616027Z 2026/01/31 01:58:15 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4616376Z 2026/01/31 01:58:25 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4616727Z 2026/01/31 01:59:26 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4617076Z 2026/01/31 01:59:36 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4617426Z 2026/01/31 02:00:36 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4617774Z 2026/01/31 02:00:47 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4618233Z 2026/01/31 02:01:47 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4618593Z 2026/01/31 02:01:57 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4618954Z 2026/01/31 02:02:58 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4619306Z 2026/01/31 02:03:08 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4619655Z 2026/01/31 02:04:08 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4620005Z 2026/01/31 02:04:19 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4620350Z 2026/01/31 02:05:19 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4620697Z 2026/01/31 02:05:29 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4621050Z 2026/01/31 02:06:30 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4621395Z 2026/01/31 02:06:40 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4621873Z 2026/01/31 02:07:40 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4622220Z 2026/01/31 02:07:51 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4622573Z 2026/01/31 02:08:51 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4622916Z 2026/01/31 02:09:01 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4623265Z 2026/01/31 02:10:02 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4623613Z 2026/01/31 02:10:12 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4623957Z 2026/01/31 02:11:12 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4624307Z 2026/01/31 02:11:23 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4624652Z 2026/01/31 02:12:23 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4624999Z 2026/01/31 02:12:33 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4625350Z 2026/01/31 02:13:34 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4625696Z 2026/01/31 02:13:44 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4626050Z 2026/01/31 02:14:44 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4626398Z 2026/01/31 02:14:55 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4626745Z 2026/01/31 02:15:55 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4627089Z 2026/01/31 02:16:05 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4627439Z 2026/01/31 02:17:06 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4627975Z 2026/01/31 02:17:16 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4628451Z 2026/01/31 02:18:16 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4628820Z 2026/01/31 02:18:27 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4629172Z 2026/01/31 02:19:27 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4629521Z 2026/01/31 02:19:37 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4629878Z 2026/01/31 02:20:38 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4630222Z 2026/01/31 02:20:48 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4630573Z 2026/01/31 02:21:48 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4630923Z 2026/01/31 02:21:59 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4631267Z 2026/01/31 02:22:59 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4631611Z 2026/01/31 02:23:09 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4631961Z 2026/01/31 02:24:10 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4632312Z 2026/01/31 02:24:20 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4632657Z 2026/01/31 02:25:20 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4633006Z 2026/01/31 02:25:31 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4633349Z 2026/01/31 02:26:31 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4633690Z 2026/01/31 02:26:41 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4634040Z 2026/01/31 02:27:42 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4634388Z 2026/01/31 02:27:52 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4634732Z 2026/01/31 02:28:52 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4635080Z 2026/01/31 02:29:03 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4635423Z 2026/01/31 02:30:03 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4635768Z 2026/01/31 02:30:13 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4636119Z 2026/01/31 02:31:14 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4636466Z 2026/01/31 02:31:24 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4636810Z 2026/01/31 02:32:24 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4637156Z 2026/01/31 02:32:35 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4637498Z 2026/01/31 02:33:35 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4637843Z 2026/01/31 02:33:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4638313Z 2026/01/31 02:34:46 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4638916Z 2026/01/31 02:34:56 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4639265Z 2026/01/31 02:35:56 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4639618Z 2026/01/31 02:36:07 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4639993Z 2026/01/31 02:36:34 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T05:36:29.4640418Z 2026/01/31 02:36:34 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T05:36:29.4640839Z     resource_test.go:50: 
2026-01-31T05:36:29.4641753Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T05:36:29.4643576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T05:36:29.4645509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:50
2026-01-31T05:36:29.4646326Z         	Error:      	Received unexpected error:
2026-01-31T05:36:29.4647308Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4647995Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-01-31T05:36:29.4649286Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2576658502311827244, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4650252Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (3601.50s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T05:40:36+00:00
```
2026-02-02T05:40:36.1268755Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-02T05:40:36.1269360Z     resource_test.go:50: Creating execution cluster: test-acc-tf-c-2959026919725743036
2026-02-02T05:40:36.1269866Z 2026/02/02 01:40:42 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T05:40:36.1270445Z 2026/02/02 01:43:42 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1270817Z 2026/02/02 01:44:42 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1271176Z 2026/02/02 01:44:52 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1271527Z 2026/02/02 01:45:52 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1271887Z 2026/02/02 01:46:02 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1272234Z 2026/02/02 01:47:02 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1272579Z 2026/02/02 01:47:13 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1272929Z 2026/02/02 01:48:13 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1273280Z 2026/02/02 01:48:23 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1273628Z 2026/02/02 01:49:23 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1273976Z 2026/02/02 01:49:33 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1274322Z 2026/02/02 01:50:33 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1274673Z 2026/02/02 01:50:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1275028Z 2026/02/02 01:51:44 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1275376Z 2026/02/02 01:51:54 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1275726Z 2026/02/02 01:52:54 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1276197Z 2026/02/02 01:53:04 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1276547Z 2026/02/02 01:54:04 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1276892Z 2026/02/02 01:54:14 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1277244Z 2026/02/02 01:55:14 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1277590Z 2026/02/02 01:55:25 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1277937Z 2026/02/02 01:56:25 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1278485Z 2026/02/02 01:56:35 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1278837Z 2026/02/02 01:57:35 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1279191Z 2026/02/02 01:57:45 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1279543Z 2026/02/02 01:58:45 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1279888Z 2026/02/02 01:58:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1280231Z 2026/02/02 01:59:56 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1280585Z 2026/02/02 02:00:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1280930Z 2026/02/02 02:01:06 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1281283Z 2026/02/02 02:01:16 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1281638Z 2026/02/02 02:02:16 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1281983Z 2026/02/02 02:02:27 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1282328Z 2026/02/02 02:03:27 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1282674Z 2026/02/02 02:03:37 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1283016Z 2026/02/02 02:04:37 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1283366Z 2026/02/02 02:04:47 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1283796Z 2026/02/02 02:05:47 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1284148Z 2026/02/02 02:05:57 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1284500Z 2026/02/02 02:06:58 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1284851Z 2026/02/02 02:07:08 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1285635Z 2026/02/02 02:08:08 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1286338Z 2026/02/02 02:08:18 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1287007Z 2026/02/02 02:09:18 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1287512Z 2026/02/02 02:09:29 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1287872Z 2026/02/02 02:10:29 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1288438Z 2026/02/02 02:10:39 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1288789Z 2026/02/02 02:11:39 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1289337Z 2026/02/02 02:11:49 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1289681Z 2026/02/02 02:12:49 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1290022Z 2026/02/02 02:12:59 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1290374Z 2026/02/02 02:14:00 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1290719Z 2026/02/02 02:14:10 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1291073Z 2026/02/02 02:15:10 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1291421Z 2026/02/02 02:15:20 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1291762Z 2026/02/02 02:16:20 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1292106Z 2026/02/02 02:16:30 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1292453Z 2026/02/02 02:17:31 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1292793Z 2026/02/02 02:17:41 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1293132Z 2026/02/02 02:18:41 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1293486Z 2026/02/02 02:18:51 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1293834Z 2026/02/02 02:19:51 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1294177Z 2026/02/02 02:20:01 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1294528Z 2026/02/02 02:21:01 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1294985Z 2026/02/02 02:21:12 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1295334Z 2026/02/02 02:22:12 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1295682Z 2026/02/02 02:22:22 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1296025Z 2026/02/02 02:23:22 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1296367Z 2026/02/02 02:23:32 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1296714Z 2026/02/02 02:24:32 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1297060Z 2026/02/02 02:24:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1297401Z 2026/02/02 02:25:43 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1297760Z 2026/02/02 02:25:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1298300Z 2026/02/02 02:26:53 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1298651Z 2026/02/02 02:27:03 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1298999Z 2026/02/02 02:28:03 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1299347Z 2026/02/02 02:28:14 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1299704Z 2026/02/02 02:29:14 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1300058Z 2026/02/02 02:29:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1300402Z 2026/02/02 02:30:24 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1300747Z 2026/02/02 02:30:34 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1301093Z 2026/02/02 02:31:34 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1301436Z 2026/02/02 02:31:44 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1301776Z 2026/02/02 02:32:45 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1302136Z 2026/02/02 02:32:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1302480Z 2026/02/02 02:33:55 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1302823Z 2026/02/02 02:34:05 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1303172Z 2026/02/02 02:35:05 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1303518Z 2026/02/02 02:35:15 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1303860Z 2026/02/02 02:36:16 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1304208Z 2026/02/02 02:36:26 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1304549Z 2026/02/02 02:37:26 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1304891Z 2026/02/02 02:37:36 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1305237Z 2026/02/02 02:38:36 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1305586Z 2026/02/02 02:38:46 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1305924Z 2026/02/02 02:39:47 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1306400Z 2026/02/02 02:39:57 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1306770Z 2026/02/02 02:40:42 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T05:40:36.1307197Z 2026/02/02 02:40:42 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T05:40:36.1307625Z     resource_test.go:50: 
2026-02-02T05:40:36.1308761Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T05:40:36.1310697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T05:40:36.1312733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:50
2026-02-02T05:40:36.1313544Z         	Error:      	Received unexpected error:
2026-02-02T05:40:36.1314570Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1315287Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-02T05:40:36.1316585Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2959026919725743036, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1317551Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (3600.68s)
```

- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4424651Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-03T00:42:45.4425641Z     resource_test.go:50: Creating execution cluster: test-acc-tf-c-4774802517427850363
2026-02-03T00:42:45.4426433Z     resource_test.go:50: 
2026-02-03T00:42:45.4428016Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4431399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4434889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:50
2026-02-03T00:42:45.4436319Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4441037Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4443388Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-03T00:42:45.4447315Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4774802517427850363, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4450019Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (0.45s)
```

- 2026-02-04 PASS 7 minutes
- 2026-02-05 PASS 4 minutes
- 2026-02-06 PASS 11 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 10 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 5 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 5 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 8 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
