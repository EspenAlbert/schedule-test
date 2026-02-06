# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035080000) |  | dev | flaky_client | 1944.04s
[2026-02-02 02:38](#error-2026-02-02t0238330000) |  | dev | timeout | 3600.07s
[2026-02-03 00:39](#error-2026-02-03t0039160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 3.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
- 2026-01-09 PASS 9 seconds
- 2026-01-10 PASS 12 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 9 seconds
- 2026-01-13 PASS 16 minutes
- 2026-01-14 PASS 8 seconds
- 2026-01-15 PASS 14 minutes
- 2026-01-16 PASS 7 seconds
- 2026-01-17 PASS 13 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 8 seconds
- 2026-01-20 PASS 13 minutes
- 2026-01-21 PASS 6 seconds
- 2026-01-22 PASS 15 minutes
- 2026-01-23 PASS 7 seconds
- 2026-01-24 PASS 13 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 13 minutes
- 2026-01-28 PASS 9 seconds
- 2026-01-29 PASS 14 minutes
- 2026-01-30 PASS 9 seconds
- 2026-01-31

### Error 2026-01-31T00:35:08+00:00
```
2026-01-31T00:35:08.7330482Z === RUN   TestAccSearchIndex_basic
2026-01-31T00:35:08.7332983Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-9034917467091189013
2026-01-31T00:35:10.8565371Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-4509679557171848456
2026-01-31T00:35:11.7200982Z 2026/01/31 00:35:11 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T00:38:12.1881906Z 2026/01/31 00:38:12 [TRACE] Waiting 1m0s before next try
2026-01-31T00:39:12.6036721Z 2026/01/31 00:39:12 [TRACE] Waiting 10s before next try
2026-01-31T00:39:22.8486788Z 2026/01/31 00:39:22 [TRACE] Waiting 1m0s before next try
2026-01-31T00:40:23.3004733Z 2026/01/31 00:40:23 [TRACE] Waiting 10s before next try
2026-01-31T00:40:33.5663037Z 2026/01/31 00:40:33 [TRACE] Waiting 1m0s before next try
2026-01-31T00:41:34.0318929Z 2026/01/31 00:41:34 [TRACE] Waiting 10s before next try
2026-01-31T00:41:44.2720766Z 2026/01/31 00:41:44 [TRACE] Waiting 1m0s before next try
2026-01-31T00:42:44.6673926Z 2026/01/31 00:42:44 [TRACE] Waiting 10s before next try
2026-01-31T00:42:54.9242179Z 2026/01/31 00:42:54 [TRACE] Waiting 1m0s before next try
2026-01-31T00:43:55.3292615Z 2026/01/31 00:43:55 [TRACE] Waiting 10s before next try
2026-01-31T00:44:05.5673672Z 2026/01/31 00:44:05 [TRACE] Waiting 1m0s before next try
2026-01-31T00:45:05.9925658Z 2026/01/31 00:45:05 [TRACE] Waiting 10s before next try
2026-01-31T00:45:16.2431001Z 2026/01/31 00:45:16 [TRACE] Waiting 1m0s before next try
2026-01-31T00:46:16.6486354Z 2026/01/31 00:46:16 [TRACE] Waiting 10s before next try
2026-01-31T00:46:26.8948860Z 2026/01/31 00:46:26 [TRACE] Waiting 1m0s before next try
2026-01-31T00:47:27.3151771Z 2026/01/31 00:47:27 [TRACE] Waiting 10s before next try
2026-01-31T00:47:37.5460609Z 2026/01/31 00:47:37 [TRACE] Waiting 1m0s before next try
2026-01-31T00:48:37.9352954Z 2026/01/31 00:48:37 [TRACE] Waiting 10s before next try
2026-01-31T00:48:48.1838119Z 2026/01/31 00:48:48 [TRACE] Waiting 1m0s before next try
2026-01-31T00:49:48.6122055Z 2026/01/31 00:49:48 [TRACE] Waiting 10s before next try
2026-01-31T00:49:58.8493795Z 2026/01/31 00:49:58 [TRACE] Waiting 1m0s before next try
2026-01-31T00:50:59.2619375Z 2026/01/31 00:50:59 [TRACE] Waiting 10s before next try
2026-01-31T00:51:09.5110265Z 2026/01/31 00:51:09 [TRACE] Waiting 1m0s before next try
2026-01-31T00:52:09.9300493Z 2026/01/31 00:52:09 [TRACE] Waiting 10s before next try
2026-01-31T00:52:20.1700077Z 2026/01/31 00:52:20 [TRACE] Waiting 1m0s before next try
2026-01-31T00:53:20.5783985Z 2026/01/31 00:53:20 [TRACE] Waiting 10s before next try
2026-01-31T00:53:30.8400253Z 2026/01/31 00:53:30 [TRACE] Waiting 1m0s before next try
2026-01-31T00:54:31.2578970Z 2026/01/31 00:54:31 [TRACE] Waiting 10s before next try
2026-01-31T00:54:41.4993721Z 2026/01/31 00:54:41 [TRACE] Waiting 1m0s before next try
2026-01-31T00:55:41.8775390Z 2026/01/31 00:55:41 [TRACE] Waiting 10s before next try
2026-01-31T00:55:52.1228969Z 2026/01/31 00:55:52 [TRACE] Waiting 1m0s before next try
2026-01-31T00:56:52.5210359Z 2026/01/31 00:56:52 [TRACE] Waiting 10s before next try
2026-01-31T00:57:02.7719400Z 2026/01/31 00:57:02 [TRACE] Waiting 1m0s before next try
2026-01-31T00:58:03.1649016Z 2026/01/31 00:58:03 [TRACE] Waiting 10s before next try
2026-01-31T00:58:13.4118063Z 2026/01/31 00:58:13 [TRACE] Waiting 1m0s before next try
2026-01-31T00:59:13.8375440Z 2026/01/31 00:59:13 [TRACE] Waiting 10s before next try
2026-01-31T00:59:24.0825285Z 2026/01/31 00:59:24 [TRACE] Waiting 1m0s before next try
2026-01-31T01:00:24.4830856Z 2026/01/31 01:00:24 [TRACE] Waiting 10s before next try
2026-01-31T01:00:34.7261782Z 2026/01/31 01:00:34 [TRACE] Waiting 1m0s before next try
2026-01-31T01:01:35.1316884Z 2026/01/31 01:01:35 [TRACE] Waiting 10s before next try
2026-01-31T01:01:45.3875023Z 2026/01/31 01:01:45 [TRACE] Waiting 1m0s before next try
2026-01-31T01:02:45.7979265Z 2026/01/31 01:02:45 [TRACE] Waiting 10s before next try
2026-01-31T01:02:56.0532867Z 2026/01/31 01:02:56 [TRACE] Waiting 1m0s before next try
2026-01-31T01:03:56.5110344Z 2026/01/31 01:03:56 [TRACE] Waiting 10s before next try
2026-01-31T01:04:06.7596527Z 2026/01/31 01:04:06 [TRACE] Waiting 1m0s before next try
2026-01-31T01:05:07.1708265Z 2026/01/31 01:05:07 [TRACE] Waiting 10s before next try
2026-01-31T01:05:17.4214837Z 2026/01/31 01:05:17 [TRACE] Waiting 1m0s before next try
2026-01-31T01:06:17.8304260Z 2026/01/31 01:06:17 [TRACE] Waiting 10s before next try
2026-01-31T01:06:28.0883020Z 2026/01/31 01:06:28 [TRACE] Waiting 1m0s before next try
2026-01-31T01:07:33.0918768Z     resource_search_index_test.go:17: 
2026-01-31T01:07:33.0921991Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T01:07:33.0927388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T01:07:33.0931169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-01-31T01:07:33.0933977Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-01-31T01:07:33.0935462Z         	Error:      	Received unexpected error:
2026-01-31T01:07:33.0938739Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e3c7d00588dcf9eb71b/clusters/test-acc-tf-c-4509679557171848456": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-01-31T01:07:33.0940559Z         	Test:       	TestAccSearchIndex_basic
2026-01-31T01:07:33.0943801Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4509679557171848456, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e3c7d00588dcf9eb71b/clusters/test-acc-tf-c-4509679557171848456": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-01-31T01:07:33.0945179Z --- FAIL: TestAccSearchIndex_basic (1944.36s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T02:38:33+00:00
```
2026-02-02T02:38:33.3985347Z === RUN   TestAccSearchIndex_basic
2026-02-02T02:38:33.3985922Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-1931425752425789823
2026-02-02T02:38:34.0503544Z 2026/02/02 02:38:34 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T02:41:34.2748236Z 2026/02/02 02:41:34 [TRACE] Waiting 1m0s before next try
2026-02-02T02:42:34.4695635Z 2026/02/02 02:42:34 [TRACE] Waiting 10s before next try
2026-02-02T02:42:44.6093873Z 2026/02/02 02:42:44 [TRACE] Waiting 1m0s before next try
2026-02-02T02:43:44.7808094Z 2026/02/02 02:43:44 [TRACE] Waiting 10s before next try
2026-02-02T02:43:54.8990387Z 2026/02/02 02:43:54 [TRACE] Waiting 1m0s before next try
2026-02-02T02:44:55.0967908Z 2026/02/02 02:44:55 [TRACE] Waiting 10s before next try
2026-02-02T02:45:05.3299966Z 2026/02/02 02:45:05 [TRACE] Waiting 1m0s before next try
2026-02-02T02:46:05.5172616Z 2026/02/02 02:46:05 [TRACE] Waiting 10s before next try
2026-02-02T02:46:15.6529774Z 2026/02/02 02:46:15 [TRACE] Waiting 1m0s before next try
2026-02-02T02:47:15.8587954Z 2026/02/02 02:47:15 [TRACE] Waiting 10s before next try
2026-02-02T02:47:26.0328476Z 2026/02/02 02:47:26 [TRACE] Waiting 1m0s before next try
2026-02-02T02:48:26.2030250Z 2026/02/02 02:48:26 [TRACE] Waiting 10s before next try
2026-02-02T02:48:36.3324445Z 2026/02/02 02:48:36 [TRACE] Waiting 1m0s before next try
2026-02-02T02:49:36.5602514Z 2026/02/02 02:49:36 [TRACE] Waiting 10s before next try
2026-02-02T02:49:46.7183674Z 2026/02/02 02:49:46 [TRACE] Waiting 1m0s before next try
2026-02-02T02:50:46.9155678Z 2026/02/02 02:50:46 [TRACE] Waiting 10s before next try
2026-02-02T02:50:57.0345082Z 2026/02/02 02:50:57 [TRACE] Waiting 1m0s before next try
2026-02-02T02:51:57.2077989Z 2026/02/02 02:51:57 [TRACE] Waiting 10s before next try
2026-02-02T02:52:07.3372632Z 2026/02/02 02:52:07 [TRACE] Waiting 1m0s before next try
2026-02-02T02:53:07.5722417Z 2026/02/02 02:53:07 [TRACE] Waiting 10s before next try
2026-02-02T02:53:17.6984505Z 2026/02/02 02:53:17 [TRACE] Waiting 1m0s before next try
2026-02-02T02:54:17.8844088Z 2026/02/02 02:54:17 [TRACE] Waiting 10s before next try
2026-02-02T02:54:28.0154847Z 2026/02/02 02:54:28 [TRACE] Waiting 1m0s before next try
2026-02-02T02:55:28.1802598Z 2026/02/02 02:55:28 [TRACE] Waiting 10s before next try
2026-02-02T02:55:38.3241897Z 2026/02/02 02:55:38 [TRACE] Waiting 1m0s before next try
2026-02-02T02:56:38.5164315Z 2026/02/02 02:56:38 [TRACE] Waiting 10s before next try
2026-02-02T02:56:48.6283548Z 2026/02/02 02:56:48 [TRACE] Waiting 1m0s before next try
2026-02-02T02:57:48.8325088Z 2026/02/02 02:57:48 [TRACE] Waiting 10s before next try
2026-02-02T02:57:58.9599673Z 2026/02/02 02:57:58 [TRACE] Waiting 1m0s before next try
2026-02-02T02:58:59.1714399Z 2026/02/02 02:58:59 [TRACE] Waiting 10s before next try
2026-02-02T02:59:09.3046799Z 2026/02/02 02:59:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:00:09.4796511Z 2026/02/02 03:00:09 [TRACE] Waiting 10s before next try
2026-02-02T03:00:19.6248211Z 2026/02/02 03:00:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:01:19.7938466Z 2026/02/02 03:01:19 [TRACE] Waiting 10s before next try
2026-02-02T03:01:29.9092927Z 2026/02/02 03:01:29 [TRACE] Waiting 1m0s before next try
2026-02-02T03:02:30.0763451Z 2026/02/02 03:02:30 [TRACE] Waiting 10s before next try
2026-02-02T03:02:40.2241238Z 2026/02/02 03:02:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:03:40.4438587Z 2026/02/02 03:03:40 [TRACE] Waiting 10s before next try
2026-02-02T03:03:50.9328925Z 2026/02/02 03:03:50 [TRACE] Waiting 1m0s before next try
2026-02-02T03:04:51.1816350Z 2026/02/02 03:04:51 [TRACE] Waiting 10s before next try
2026-02-02T03:05:01.3048110Z 2026/02/02 03:05:01 [TRACE] Waiting 1m0s before next try
2026-02-02T03:06:01.4497390Z 2026/02/02 03:06:01 [TRACE] Waiting 10s before next try
2026-02-02T03:06:11.6005239Z 2026/02/02 03:06:11 [TRACE] Waiting 1m0s before next try
2026-02-02T03:07:11.8328698Z 2026/02/02 03:07:11 [TRACE] Waiting 10s before next try
2026-02-02T03:07:21.9684859Z 2026/02/02 03:07:21 [TRACE] Waiting 1m0s before next try
2026-02-02T03:08:22.1407791Z 2026/02/02 03:08:22 [TRACE] Waiting 10s before next try
2026-02-02T03:08:32.2609192Z 2026/02/02 03:08:32 [TRACE] Waiting 1m0s before next try
2026-02-02T03:09:32.5359298Z 2026/02/02 03:09:32 [TRACE] Waiting 10s before next try
2026-02-02T03:09:42.6583805Z 2026/02/02 03:09:42 [TRACE] Waiting 1m0s before next try
2026-02-02T03:10:42.8324628Z 2026/02/02 03:10:42 [TRACE] Waiting 10s before next try
2026-02-02T03:10:52.9545463Z 2026/02/02 03:10:52 [TRACE] Waiting 1m0s before next try
2026-02-02T03:11:53.1356161Z 2026/02/02 03:11:53 [TRACE] Waiting 10s before next try
2026-02-02T03:12:03.2661915Z 2026/02/02 03:12:03 [TRACE] Waiting 1m0s before next try
2026-02-02T03:13:03.4543436Z 2026/02/02 03:13:03 [TRACE] Waiting 10s before next try
2026-02-02T03:13:13.5768542Z 2026/02/02 03:13:13 [TRACE] Waiting 1m0s before next try
2026-02-02T03:14:13.7944847Z 2026/02/02 03:14:13 [TRACE] Waiting 10s before next try
2026-02-02T03:14:23.9060999Z 2026/02/02 03:14:23 [TRACE] Waiting 1m0s before next try
2026-02-02T03:15:24.1185769Z 2026/02/02 03:15:24 [TRACE] Waiting 10s before next try
2026-02-02T03:15:34.2373635Z 2026/02/02 03:15:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:16:34.4167204Z 2026/02/02 03:16:34 [TRACE] Waiting 10s before next try
2026-02-02T03:16:44.5349491Z 2026/02/02 03:16:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:17:44.6846696Z 2026/02/02 03:17:44 [TRACE] Waiting 10s before next try
2026-02-02T03:17:54.8062044Z 2026/02/02 03:17:54 [TRACE] Waiting 1m0s before next try
2026-02-02T03:18:54.9906675Z 2026/02/02 03:18:54 [TRACE] Waiting 10s before next try
2026-02-02T03:19:05.1588797Z 2026/02/02 03:19:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:20:05.3630006Z 2026/02/02 03:20:05 [TRACE] Waiting 10s before next try
2026-02-02T03:20:15.4874471Z 2026/02/02 03:20:15 [TRACE] Waiting 1m0s before next try
2026-02-02T03:21:15.6875348Z 2026/02/02 03:21:15 [TRACE] Waiting 10s before next try
2026-02-02T03:21:25.8031199Z 2026/02/02 03:21:25 [TRACE] Waiting 1m0s before next try
2026-02-02T03:22:25.9849411Z 2026/02/02 03:22:25 [TRACE] Waiting 10s before next try
2026-02-02T03:22:36.1327775Z 2026/02/02 03:22:36 [TRACE] Waiting 1m0s before next try
2026-02-02T03:23:36.3209962Z 2026/02/02 03:23:36 [TRACE] Waiting 10s before next try
2026-02-02T03:23:46.4454524Z 2026/02/02 03:23:46 [TRACE] Waiting 1m0s before next try
2026-02-02T03:24:46.6176857Z 2026/02/02 03:24:46 [TRACE] Waiting 10s before next try
2026-02-02T03:24:56.7525979Z 2026/02/02 03:24:56 [TRACE] Waiting 1m0s before next try
2026-02-02T03:25:57.0023554Z 2026/02/02 03:25:57 [TRACE] Waiting 10s before next try
2026-02-02T03:26:07.1351553Z 2026/02/02 03:26:07 [TRACE] Waiting 1m0s before next try
2026-02-02T03:27:07.3002603Z 2026/02/02 03:27:07 [TRACE] Waiting 10s before next try
2026-02-02T03:27:17.4301607Z 2026/02/02 03:27:17 [TRACE] Waiting 1m0s before next try
2026-02-02T03:28:17.6578656Z 2026/02/02 03:28:17 [TRACE] Waiting 10s before next try
2026-02-02T03:28:27.7757885Z 2026/02/02 03:28:27 [TRACE] Waiting 1m0s before next try
2026-02-02T03:29:27.9695045Z 2026/02/02 03:29:27 [TRACE] Waiting 10s before next try
2026-02-02T03:29:38.1029338Z 2026/02/02 03:29:38 [TRACE] Waiting 1m0s before next try
2026-02-02T03:30:38.3065018Z 2026/02/02 03:30:38 [TRACE] Waiting 10s before next try
2026-02-02T03:30:48.4381888Z 2026/02/02 03:30:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:31:48.5887555Z 2026/02/02 03:31:48 [TRACE] Waiting 10s before next try
2026-02-02T03:31:58.7058134Z 2026/02/02 03:31:58 [TRACE] Waiting 1m0s before next try
2026-02-02T03:32:58.8851344Z 2026/02/02 03:32:58 [TRACE] Waiting 10s before next try
2026-02-02T03:33:09.0199657Z 2026/02/02 03:33:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:34:09.1855571Z 2026/02/02 03:34:09 [TRACE] Waiting 10s before next try
2026-02-02T03:34:19.3026822Z 2026/02/02 03:34:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:35:19.5059971Z 2026/02/02 03:35:19 [TRACE] Waiting 10s before next try
2026-02-02T03:35:29.6648323Z 2026/02/02 03:35:29 [TRACE] Waiting 1m0s before next try
2026-02-02T03:36:29.9362907Z 2026/02/02 03:36:29 [TRACE] Waiting 10s before next try
2026-02-02T03:36:40.0665016Z 2026/02/02 03:36:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:37:40.2403118Z 2026/02/02 03:37:40 [TRACE] Waiting 10s before next try
2026-02-02T03:37:50.3673687Z 2026/02/02 03:37:50 [TRACE] Waiting 1m0s before next try
2026-02-02T03:38:34.0505805Z 2026/02/02 03:38:34 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T03:38:34.0510694Z 2026/02/02 03:38:34 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T03:38:34.0515554Z     resource_search_index_test.go:17: 
2026-02-02T03:38:34.0518416Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:38:34.0521922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:38:34.0525116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-02-02T03:38:34.0527103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-02-02T03:38:34.0527904Z         	Error:      	Received unexpected error:
2026-02-02T03:38:34.0528852Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:38:34.0529428Z         	Test:       	TestAccSearchIndex_basic
2026-02-02T03:38:34.0530692Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1931425752425789823, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:38:34.0531420Z --- FAIL: TestAccSearchIndex_basic (3600.65s)
```

- 2026-02-03

### Error 2026-02-03T00:39:16+00:00
```
2026-02-03T00:39:16.9666019Z === RUN   TestAccSearchIndex_basic
2026-02-03T00:39:16.9669083Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-4152829892837364336
2026-02-03T00:39:19.7382430Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-2394080824305664463
2026-02-03T00:39:20.3227982Z     resource_search_index_test.go:17: 
2026-02-03T00:39:20.3230311Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:20.3233358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:20.3235829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-02-03T00:39:20.3238595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-02-03T00:39:20.3239692Z         	Error:      	Received unexpected error:
2026-02-03T00:39:20.3242753Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:20.3244012Z         	Test:       	TestAccSearchIndex_basic
2026-02-03T00:39:20.3246089Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2394080824305664463, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:20.3247450Z --- FAIL: TestAccSearchIndex_basic (3.36s)
```

- 2026-02-04 PASS 8 seconds
- 2026-02-05 PASS 16 minutes
- 2026-02-06 PASS 8 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 8 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 8 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 7 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 9 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 9 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
