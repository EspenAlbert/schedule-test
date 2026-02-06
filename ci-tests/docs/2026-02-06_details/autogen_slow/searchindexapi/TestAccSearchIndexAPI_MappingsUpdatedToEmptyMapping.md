# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 05:36](#error-2026-01-31t0536290000) |  | dev | timeout | 3600.07s
[2026-02-02 05:40](#error-2026-02-02t0540360000) |  | dev | timeout | 3600.06s
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
- 2026-01-09 PASS 16 minutes
- 2026-01-10 PASS 19 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 9 minutes
- 2026-01-14 PASS 19 minutes
- 2026-01-15 PASS 16 minutes
- 2026-01-16 PASS 20 minutes
- 2026-01-17 PASS 15 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 18 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 18 minutes
- 2026-01-22 PASS 17 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 22 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 23 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 18 minutes
- 2026-01-29 PASS 14 minutes
- 2026-01-30 PASS 15 minutes
- 2026-01-31

### Error 2026-01-31T05:36:29+00:00
```
2026-01-31T05:36:29.4703882Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-01-31T05:36:29.4704630Z     resource_test.go:92: Creating execution cluster: test-acc-tf-c-117656079958737004
2026-01-31T05:36:29.4705195Z 2026/01/31 03:36:36 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T05:36:29.4705676Z 2026/01/31 03:39:36 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4706173Z 2026/01/31 03:40:37 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4706627Z 2026/01/31 03:40:47 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4707118Z 2026/01/31 03:41:48 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4707694Z 2026/01/31 03:41:58 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4708238Z 2026/01/31 03:42:58 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4708727Z 2026/01/31 03:43:08 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4709089Z 2026/01/31 03:44:09 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4709570Z 2026/01/31 03:44:19 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4709937Z 2026/01/31 03:45:20 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4710426Z 2026/01/31 03:45:30 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4710782Z 2026/01/31 03:46:30 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4711261Z 2026/01/31 03:46:40 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4711621Z 2026/01/31 03:47:41 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4712151Z 2026/01/31 03:47:51 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4712558Z 2026/01/31 03:48:52 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4713062Z 2026/01/31 03:49:02 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4713437Z 2026/01/31 03:50:02 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4713933Z 2026/01/31 03:50:13 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4714297Z 2026/01/31 03:51:13 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4714783Z 2026/01/31 03:51:23 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4715265Z 2026/01/31 03:52:24 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4715795Z 2026/01/31 03:52:34 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4716185Z 2026/01/31 03:53:34 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4716644Z 2026/01/31 03:53:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4717048Z 2026/01/31 03:54:45 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4717490Z 2026/01/31 03:54:55 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4717896Z 2026/01/31 03:55:56 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4718516Z 2026/01/31 03:56:06 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4719006Z 2026/01/31 03:57:07 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4719355Z 2026/01/31 03:57:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4719841Z 2026/01/31 03:58:18 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4720192Z 2026/01/31 03:58:28 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4720680Z 2026/01/31 03:59:29 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4721034Z 2026/01/31 03:59:39 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4721517Z 2026/01/31 04:00:39 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4721866Z 2026/01/31 04:00:50 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4730657Z 2026/01/31 04:01:50 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4731152Z 2026/01/31 04:02:00 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4731557Z 2026/01/31 04:03:01 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4731923Z 2026/01/31 04:03:11 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4732286Z 2026/01/31 04:04:11 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4732842Z 2026/01/31 04:04:22 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4733201Z 2026/01/31 04:05:22 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4733559Z 2026/01/31 04:05:32 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4733908Z 2026/01/31 04:06:33 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4734254Z 2026/01/31 04:06:43 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4734599Z 2026/01/31 04:07:44 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4735013Z 2026/01/31 04:07:54 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4735359Z 2026/01/31 04:08:54 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4735706Z 2026/01/31 04:09:05 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4736243Z 2026/01/31 04:10:05 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4736585Z 2026/01/31 04:10:15 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4736931Z 2026/01/31 04:11:16 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4737274Z 2026/01/31 04:11:26 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4737612Z 2026/01/31 04:12:27 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4737957Z 2026/01/31 04:12:37 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4738432Z 2026/01/31 04:13:37 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4738782Z 2026/01/31 04:13:48 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4739128Z 2026/01/31 04:14:48 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4739468Z 2026/01/31 04:14:58 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4739988Z 2026/01/31 04:15:59 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4740338Z 2026/01/31 04:16:09 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4740690Z 2026/01/31 04:17:09 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4741030Z 2026/01/31 04:17:20 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4741381Z 2026/01/31 04:18:20 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4741722Z 2026/01/31 04:18:30 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4742062Z 2026/01/31 04:19:31 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4742407Z 2026/01/31 04:19:41 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4742879Z 2026/01/31 04:20:42 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4743229Z 2026/01/31 04:20:52 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4743578Z 2026/01/31 04:21:52 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4743918Z 2026/01/31 04:22:02 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4744259Z 2026/01/31 04:23:03 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4744603Z 2026/01/31 04:23:13 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4744951Z 2026/01/31 04:24:14 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4745295Z 2026/01/31 04:24:24 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4745651Z 2026/01/31 04:25:24 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4745994Z 2026/01/31 04:25:35 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4746336Z 2026/01/31 04:26:35 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4746685Z 2026/01/31 04:26:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4747034Z 2026/01/31 04:27:46 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4747377Z 2026/01/31 04:27:56 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4747726Z 2026/01/31 04:28:57 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4748072Z 2026/01/31 04:29:07 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4748536Z 2026/01/31 04:30:07 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4748882Z 2026/01/31 04:30:18 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4749236Z 2026/01/31 04:31:18 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4749581Z 2026/01/31 04:31:28 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4749932Z 2026/01/31 04:32:29 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4750293Z 2026/01/31 04:32:39 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4750645Z 2026/01/31 04:33:39 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4750994Z 2026/01/31 04:33:50 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4751341Z 2026/01/31 04:34:50 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4751686Z 2026/01/31 04:35:00 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4752036Z 2026/01/31 04:36:01 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4752376Z 2026/01/31 04:36:11 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4752748Z 2026/01/31 04:36:36 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T05:36:29.4753360Z 2026/01/31 04:36:36 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T05:36:29.4753937Z     resource_test.go:92: 
2026-01-31T05:36:29.4754859Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T05:36:29.4756673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T05:36:29.4758691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:92
2026-01-31T05:36:29.4759506Z         	Error:      	Received unexpected error:
2026-01-31T05:36:29.4760479Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4761182Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-01-31T05:36:29.4762356Z         	Messages:   	Cluster creation failed: test-acc-tf-c-117656079958737004, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4763215Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (3600.69s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T05:40:36+00:00
```
2026-02-02T05:40:36.1373817Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-02T05:40:36.1374438Z     resource_test.go:92: Creating execution cluster: test-acc-tf-c-8026234853594720901
2026-02-02T05:40:36.1374936Z 2026/02/02 03:40:43 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T05:40:36.1375334Z 2026/02/02 03:43:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1375709Z 2026/02/02 03:44:43 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1376065Z 2026/02/02 03:44:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1376419Z 2026/02/02 03:45:53 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1376775Z 2026/02/02 03:46:04 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1377283Z 2026/02/02 03:47:04 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1377630Z 2026/02/02 03:47:14 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1378284Z 2026/02/02 03:48:14 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1378706Z 2026/02/02 03:48:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1379136Z 2026/02/02 03:49:24 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1379561Z 2026/02/02 03:49:35 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1379978Z 2026/02/02 03:50:35 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1380412Z 2026/02/02 03:50:45 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1380824Z 2026/02/02 03:51:45 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1381273Z 2026/02/02 03:51:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1381649Z 2026/02/02 03:52:55 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1382110Z 2026/02/02 03:53:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1382476Z 2026/02/02 03:54:06 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1382823Z 2026/02/02 03:54:16 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1383174Z 2026/02/02 03:55:16 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1383523Z 2026/02/02 03:55:26 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1384010Z 2026/02/02 03:56:26 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1384373Z 2026/02/02 03:56:37 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1384722Z 2026/02/02 03:57:37 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1385068Z 2026/02/02 03:57:47 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1385420Z 2026/02/02 03:58:47 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1385768Z 2026/02/02 03:58:57 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1386119Z 2026/02/02 03:59:57 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1386474Z 2026/02/02 04:00:08 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1386830Z 2026/02/02 04:01:08 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1387176Z 2026/02/02 04:01:18 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1387524Z 2026/02/02 04:02:18 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1387877Z 2026/02/02 04:02:28 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1388424Z 2026/02/02 04:03:29 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1388773Z 2026/02/02 04:03:39 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1389218Z 2026/02/02 04:04:39 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1389602Z 2026/02/02 04:04:49 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1390071Z 2026/02/02 04:05:49 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1390435Z 2026/02/02 04:05:59 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1390898Z 2026/02/02 04:07:00 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1391251Z 2026/02/02 04:07:10 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1391720Z 2026/02/02 04:08:10 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1392176Z 2026/02/02 04:08:20 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1392530Z 2026/02/02 04:09:20 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1393003Z 2026/02/02 04:09:30 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1393360Z 2026/02/02 04:10:31 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1393836Z 2026/02/02 04:10:41 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1394193Z 2026/02/02 04:11:41 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1394658Z 2026/02/02 04:11:51 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1395014Z 2026/02/02 04:12:51 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1395480Z 2026/02/02 04:13:01 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1395834Z 2026/02/02 04:14:01 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1396263Z 2026/02/02 04:14:12 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1396807Z 2026/02/02 04:15:12 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1397312Z 2026/02/02 04:15:22 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1397677Z 2026/02/02 04:16:22 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1398304Z 2026/02/02 04:16:32 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1398764Z 2026/02/02 04:17:33 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1399131Z 2026/02/02 04:17:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1399489Z 2026/02/02 04:18:43 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1399835Z 2026/02/02 04:18:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1400182Z 2026/02/02 04:19:53 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1400531Z 2026/02/02 04:20:03 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1400878Z 2026/02/02 04:21:04 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1401223Z 2026/02/02 04:21:14 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1401581Z 2026/02/02 04:22:14 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1401928Z 2026/02/02 04:22:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1402276Z 2026/02/02 04:23:24 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1402631Z 2026/02/02 04:23:35 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1403153Z 2026/02/02 04:24:35 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1403509Z 2026/02/02 04:24:45 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1403892Z 2026/02/02 04:25:45 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1404240Z 2026/02/02 04:25:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1404587Z 2026/02/02 04:26:55 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1404941Z 2026/02/02 04:27:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1405287Z 2026/02/02 04:28:06 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1405630Z 2026/02/02 04:28:16 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1405991Z 2026/02/02 04:29:16 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1406339Z 2026/02/02 04:29:26 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1406692Z 2026/02/02 04:30:26 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1407045Z 2026/02/02 04:30:37 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1407402Z 2026/02/02 04:31:37 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1407751Z 2026/02/02 04:31:47 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1408283Z 2026/02/02 04:32:47 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1408640Z 2026/02/02 04:32:57 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1408986Z 2026/02/02 04:33:57 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1409338Z 2026/02/02 04:34:08 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1409684Z 2026/02/02 04:35:08 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1410032Z 2026/02/02 04:35:18 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1410393Z 2026/02/02 04:36:18 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1410746Z 2026/02/02 04:36:28 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1411093Z 2026/02/02 04:37:28 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1411456Z 2026/02/02 04:37:39 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1411810Z 2026/02/02 04:38:39 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1412161Z 2026/02/02 04:38:49 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1412520Z 2026/02/02 04:39:49 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1412871Z 2026/02/02 04:39:59 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1413243Z 2026/02/02 04:40:43 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T05:40:36.1413679Z 2026/02/02 04:40:43 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T05:40:36.1414103Z     resource_test.go:92: 
2026-02-02T05:40:36.1415060Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T05:40:36.1417162Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T05:40:36.1419416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:92
2026-02-02T05:40:36.1420243Z         	Error:      	Received unexpected error:
2026-02-02T05:40:36.1421432Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1422286Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-02T05:40:36.1423677Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8026234853594720901, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1424754Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (3600.59s)
```

- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4477875Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-03T00:42:45.4479031Z     resource_test.go:92: Creating execution cluster: test-acc-tf-c-2602601952086228823
2026-02-03T00:42:45.4479813Z     resource_test.go:92: 
2026-02-03T00:42:45.4481384Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4484632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4488223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:92
2026-02-03T00:42:45.4489621Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4494165Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4496536Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-02-03T00:42:45.4500603Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2602601952086228823, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4503186Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (0.40s)
```

- 2026-02-04 PASS 16 minutes
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 25 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 12 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 14 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 19 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 15 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 20 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
