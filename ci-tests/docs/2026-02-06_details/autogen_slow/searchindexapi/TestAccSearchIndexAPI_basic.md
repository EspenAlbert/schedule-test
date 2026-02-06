# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 05:36](#error-2026-01-31t0536290000) |  | dev | timeout | 3603.09s
[2026-02-02 05:40](#error-2026-02-02t0540360000) |  | dev | timeout | 3605.03s
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 2.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
- 2026-01-09 PASS 22 minutes
- 2026-01-10 PASS 17 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 19 minutes
- 2026-01-14 PASS 26 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 24 minutes
- 2026-01-17 PASS 17 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 23 minutes
- 2026-01-20 PASS 25 minutes
- 2026-01-21 PASS 27 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 21 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 25 minutes
- 2026-01-27 PASS 19 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 24 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T05:36:29+00:00
```
2026-01-31T05:36:29.4550396Z === RUN   TestAccSearchIndexAPI_basic
2026-01-31T05:36:29.4553420Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-121294614570934259
2026-01-31T05:36:29.4554392Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-2164729550365021063
2026-01-31T05:36:29.4555084Z 2026/01/31 00:36:33 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T05:36:29.4555616Z 2026/01/31 00:39:33 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4556135Z 2026/01/31 00:40:34 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4556614Z 2026/01/31 00:40:44 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4557093Z 2026/01/31 00:41:44 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4557559Z 2026/01/31 00:41:55 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4558022Z 2026/01/31 00:42:55 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4558807Z 2026/01/31 00:43:05 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4559309Z 2026/01/31 00:44:06 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4559781Z 2026/01/31 00:44:16 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4560253Z 2026/01/31 00:45:16 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4560716Z 2026/01/31 00:45:27 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4561178Z 2026/01/31 00:46:27 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4561644Z 2026/01/31 00:46:37 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4562110Z 2026/01/31 00:47:38 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4562577Z 2026/01/31 00:47:48 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4562991Z 2026/01/31 00:48:48 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4563351Z 2026/01/31 00:48:58 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4563708Z 2026/01/31 00:49:59 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4564055Z 2026/01/31 00:50:09 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4564695Z 2026/01/31 00:51:09 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4565034Z 2026/01/31 00:51:20 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4565380Z 2026/01/31 00:52:20 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4565716Z 2026/01/31 00:52:30 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4566095Z 2026/01/31 00:53:31 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4566441Z 2026/01/31 00:53:41 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4566782Z 2026/01/31 00:54:41 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4567119Z 2026/01/31 00:54:52 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4567465Z 2026/01/31 00:55:52 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4567803Z 2026/01/31 00:56:02 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4568257Z 2026/01/31 00:57:03 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4568605Z 2026/01/31 00:57:13 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4568950Z 2026/01/31 00:58:13 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4569289Z 2026/01/31 00:58:23 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4569640Z 2026/01/31 00:59:24 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4570000Z 2026/01/31 00:59:34 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4570344Z 2026/01/31 01:00:34 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4570695Z 2026/01/31 01:00:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4571192Z 2026/01/31 01:01:45 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4571542Z 2026/01/31 01:01:55 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4571889Z 2026/01/31 01:02:56 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4572230Z 2026/01/31 01:03:06 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4572567Z 2026/01/31 01:04:06 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4573111Z 2026/01/31 01:04:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4573460Z 2026/01/31 01:05:17 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4573806Z 2026/01/31 01:05:27 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4574151Z 2026/01/31 01:06:28 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4574495Z 2026/01/31 01:06:38 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4574833Z 2026/01/31 01:07:38 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4575182Z 2026/01/31 01:07:49 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4575526Z 2026/01/31 01:08:49 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4575864Z 2026/01/31 01:08:59 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4576205Z 2026/01/31 01:10:00 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4576545Z 2026/01/31 01:10:10 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4576882Z 2026/01/31 01:11:10 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4577227Z 2026/01/31 01:11:21 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4577570Z 2026/01/31 01:12:21 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4577910Z 2026/01/31 01:12:31 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4578376Z 2026/01/31 01:13:32 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4578716Z 2026/01/31 01:13:42 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4579054Z 2026/01/31 01:14:42 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4579403Z 2026/01/31 01:14:53 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4579745Z 2026/01/31 01:15:53 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4580088Z 2026/01/31 01:16:03 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4580431Z 2026/01/31 01:17:04 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4580770Z 2026/01/31 01:17:14 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4581130Z 2026/01/31 01:18:14 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4581468Z 2026/01/31 01:18:25 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4581955Z 2026/01/31 01:19:25 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4582303Z 2026/01/31 01:19:35 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4582645Z 2026/01/31 01:20:36 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4582980Z 2026/01/31 01:20:46 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4583321Z 2026/01/31 01:21:47 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4583662Z 2026/01/31 01:21:57 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4584006Z 2026/01/31 01:22:57 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4584349Z 2026/01/31 01:23:07 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4584688Z 2026/01/31 01:24:08 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4585024Z 2026/01/31 01:24:18 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4585365Z 2026/01/31 01:25:19 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4585700Z 2026/01/31 01:25:29 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4586047Z 2026/01/31 01:26:30 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4586389Z 2026/01/31 01:26:40 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4586731Z 2026/01/31 01:27:40 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4587067Z 2026/01/31 01:27:51 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4587409Z 2026/01/31 01:28:51 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4587747Z 2026/01/31 01:29:01 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4588311Z 2026/01/31 01:30:02 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4588668Z 2026/01/31 01:30:12 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4589012Z 2026/01/31 01:31:12 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4589356Z 2026/01/31 01:31:23 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4589700Z 2026/01/31 01:32:23 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4590042Z 2026/01/31 01:32:33 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4590386Z 2026/01/31 01:33:34 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4590732Z 2026/01/31 01:33:44 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4591068Z 2026/01/31 01:34:44 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4591405Z 2026/01/31 01:34:54 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4591749Z 2026/01/31 01:35:55 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4592087Z 2026/01/31 01:36:05 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4592462Z 2026/01/31 01:36:33 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T05:36:29.4592895Z 2026/01/31 01:36:33 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T05:36:29.4593317Z     resource_test.go:21: 
2026-01-31T05:36:29.4594261Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T05:36:29.4596212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T05:36:29.4598248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:21
2026-01-31T05:36:29.4599181Z         	Error:      	Received unexpected error:
2026-01-31T05:36:29.4600164Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4600759Z         	Test:       	TestAccSearchIndexAPI_basic
2026-01-31T05:36:29.4601866Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2164729550365021063, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T05:36:29.4602628Z --- FAIL: TestAccSearchIndexAPI_basic (3603.93s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T05:40:36+00:00
```
2026-02-02T05:40:36.1202784Z === RUN   TestAccSearchIndexAPI_basic
2026-02-02T05:40:36.1208246Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-8891387366818074507
2026-02-02T05:40:36.1209774Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-61482311963217811
2026-02-02T05:40:36.1210820Z 2026/02/02 00:40:41 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T05:40:36.1211622Z 2026/02/02 00:43:41 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1212449Z 2026/02/02 00:44:41 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1213333Z 2026/02/02 00:44:51 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1214230Z 2026/02/02 00:45:51 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1215076Z 2026/02/02 00:46:02 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1215870Z 2026/02/02 00:47:02 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1216738Z 2026/02/02 00:47:12 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1217565Z 2026/02/02 00:48:12 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1218277Z 2026/02/02 00:48:22 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1218823Z 2026/02/02 00:49:22 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1219337Z 2026/02/02 00:49:32 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1219843Z 2026/02/02 00:50:33 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1220353Z 2026/02/02 00:50:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1220863Z 2026/02/02 00:51:43 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1221376Z 2026/02/02 00:51:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1221793Z 2026/02/02 00:52:53 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1222149Z 2026/02/02 00:53:03 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1222500Z 2026/02/02 00:54:03 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1222864Z 2026/02/02 00:54:14 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1223391Z 2026/02/02 00:55:14 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1223978Z 2026/02/02 00:55:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1224889Z 2026/02/02 00:56:24 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1225458Z 2026/02/02 00:56:34 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1226166Z 2026/02/02 00:57:34 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1226821Z 2026/02/02 00:57:44 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1227468Z 2026/02/02 00:58:44 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1227860Z 2026/02/02 00:58:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1228430Z 2026/02/02 00:59:55 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1228932Z 2026/02/02 01:00:05 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1229314Z 2026/02/02 01:01:05 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1229761Z 2026/02/02 01:01:15 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1230116Z 2026/02/02 01:02:15 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1230483Z 2026/02/02 01:02:26 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1230853Z 2026/02/02 01:03:26 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1231210Z 2026/02/02 01:03:36 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1231567Z 2026/02/02 01:04:36 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1231919Z 2026/02/02 01:04:46 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1232528Z 2026/02/02 01:05:46 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1232909Z 2026/02/02 01:05:56 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1233277Z 2026/02/02 01:06:57 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1233640Z 2026/02/02 01:07:07 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1234010Z 2026/02/02 01:08:07 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1234368Z 2026/02/02 01:08:17 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1234725Z 2026/02/02 01:09:17 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1235085Z 2026/02/02 01:09:27 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1235448Z 2026/02/02 01:10:28 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1235802Z 2026/02/02 01:10:38 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1236162Z 2026/02/02 01:11:38 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1236519Z 2026/02/02 01:11:48 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1236881Z 2026/02/02 01:12:48 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1237277Z 2026/02/02 01:12:58 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1237628Z 2026/02/02 01:13:59 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1237977Z 2026/02/02 01:14:09 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1238534Z 2026/02/02 01:15:09 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1238907Z 2026/02/02 01:15:19 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1239266Z 2026/02/02 01:16:19 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1239625Z 2026/02/02 01:16:29 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1239989Z 2026/02/02 01:17:29 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1240339Z 2026/02/02 01:17:40 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1240693Z 2026/02/02 01:18:40 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1241051Z 2026/02/02 01:18:50 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1241404Z 2026/02/02 01:19:50 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1241763Z 2026/02/02 01:20:00 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1242130Z 2026/02/02 01:21:00 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1242503Z 2026/02/02 01:21:11 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1242876Z 2026/02/02 01:22:11 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1243233Z 2026/02/02 01:22:21 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1243593Z 2026/02/02 01:23:21 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1243959Z 2026/02/02 01:23:31 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1244450Z 2026/02/02 01:24:31 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1244802Z 2026/02/02 01:24:41 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1245156Z 2026/02/02 01:25:42 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1245507Z 2026/02/02 01:25:52 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1245884Z 2026/02/02 01:26:52 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1246245Z 2026/02/02 01:27:02 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1246594Z 2026/02/02 01:28:02 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1246947Z 2026/02/02 01:28:12 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1247303Z 2026/02/02 01:29:12 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1247650Z 2026/02/02 01:29:23 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1248156Z 2026/02/02 01:30:23 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1248549Z 2026/02/02 01:30:33 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1248908Z 2026/02/02 01:31:33 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1249258Z 2026/02/02 01:31:43 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1249625Z 2026/02/02 01:32:43 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1249975Z 2026/02/02 01:32:53 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1250446Z 2026/02/02 01:33:54 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1250807Z 2026/02/02 01:34:04 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1251156Z 2026/02/02 01:35:04 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1251506Z 2026/02/02 01:35:14 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1251859Z 2026/02/02 01:36:14 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1252211Z 2026/02/02 01:36:24 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1252567Z 2026/02/02 01:37:24 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1252926Z 2026/02/02 01:37:35 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1253283Z 2026/02/02 01:38:35 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1253635Z 2026/02/02 01:38:45 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1253995Z 2026/02/02 01:39:45 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1254346Z 2026/02/02 01:39:55 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1254728Z 2026/02/02 01:40:41 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T05:40:36.1255171Z 2026/02/02 01:40:41 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T05:40:36.1255600Z     resource_test.go:21: 
2026-02-02T05:40:36.1257133Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T05:40:36.1260723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T05:40:36.1263680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:21
2026-02-02T05:40:36.1264548Z         	Error:      	Received unexpected error:
2026-02-02T05:40:36.1265610Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1266228Z         	Test:       	TestAccSearchIndexAPI_basic
2026-02-02T05:40:36.1267381Z         	Messages:   	Cluster creation failed: test-acc-tf-c-61482311963217811, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T05:40:36.1268352Z --- FAIL: TestAccSearchIndexAPI_basic (3605.25s)
```

- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4397636Z === RUN   TestAccSearchIndexAPI_basic
2026-02-03T00:42:45.4398715Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5109354214441073829
2026-02-03T00:42:45.4399851Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-851016788534003299
2026-02-03T00:42:45.4400621Z     resource_test.go:21: 
2026-02-03T00:42:45.4402210Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4405616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4409187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:21
2026-02-03T00:42:45.4410601Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4415355Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4417542Z         	Test:       	TestAccSearchIndexAPI_basic
2026-02-03T00:42:45.4421562Z         	Messages:   	Cluster creation failed: test-acc-tf-c-851016788534003299, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4424004Z --- FAIL: TestAccSearchIndexAPI_basic (2.60s)
```

- 2026-02-04 PASS 28 minutes
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 36 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 15 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 22 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 21 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 15 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 24 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
