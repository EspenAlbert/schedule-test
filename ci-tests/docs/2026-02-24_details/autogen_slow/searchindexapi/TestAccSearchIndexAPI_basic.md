# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 8)
Success rate: 75.76%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 05:36](#error-2026-01-31t0536290000) |  | dev | timeout | 3603.09s
[2026-02-02 05:40](#error-2026-02-02t0540360000) |  | dev | timeout | 3605.03s
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 2.06s
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 959.09s

### Timeline
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
- 2026-02-07 PASS 30 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 29 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 33 minutes
- 2026-02-12 PASS 24 minutes
- 2026-02-13 PASS 36 minutes
- 2026-02-14 PASS 22 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 23 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 28 minutes
- 2026-02-21 PASS 31 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 31 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3732202Z === RUN   TestAccSearchIndexAPI_basic
2026-02-24T01:07:11.3732752Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7851778257667580273
2026-02-24T01:07:11.3733430Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-2207206617986808029
2026-02-24T01:07:11.3733925Z 2026/02/24 00:38:08 [DEBUG] Waiting for state to become: [IDLE]
2026-02-24T01:07:11.3734330Z 2026/02/24 00:41:08 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3734701Z 2026/02/24 00:42:08 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3735069Z 2026/02/24 00:42:18 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3735424Z 2026/02/24 00:43:19 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3735779Z 2026/02/24 00:43:29 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3736399Z 2026/02/24 00:44:29 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3736767Z 2026/02/24 00:44:39 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3737134Z 2026/02/24 00:45:39 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3737491Z 2026/02/24 00:45:50 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3737848Z 2026/02/24 00:46:50 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3738214Z 2026/02/24 00:47:00 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3738570Z 2026/02/24 00:48:01 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3738927Z 2026/02/24 00:48:11 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3739286Z 2026/02/24 00:49:11 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3739638Z 2026/02/24 00:49:22 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3739994Z 2026/02/24 00:50:24 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3740348Z 2026/02/24 00:50:34 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3740707Z 2026/02/24 00:51:36 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3741059Z 2026/02/24 00:51:46 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3741416Z 2026/02/24 00:52:47 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3741773Z 2026/02/24 00:52:59 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3742132Z     resource_test.go:21: 
2026-02-24T01:07:11.3743089Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-02-24T01:07:11.3744970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:21
2026-02-24T01:07:11.3746081Z         	Error:      	Received unexpected error:
2026-02-24T01:07:11.3747750Z         	            	cluster(699cf2eb8dfec41eaa864f4d:test-acc-tf-c-2207206617986808029) loading sample data set error: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:07:11.3748648Z         	Test:       	TestAccSearchIndexAPI_basic
2026-02-24T01:07:11.3749003Z --- FAIL: TestAccSearchIndexAPI_basic (959.90s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 1533.01s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 1526.08s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 1383.04s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 1151.10s

### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1932226Z === RUN   TestAccSearchIndexAPI_basic
2026-02-15T01:24:54.1932949Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5155457951293359405
2026-02-15T01:24:54.1933776Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-2299255714505639175
2026-02-15T01:24:54.1934388Z 2026/02/15 00:42:13 [DEBUG] Waiting for state to become: [IDLE]
2026-02-15T01:24:54.1934872Z 2026/02/15 00:45:13 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1935509Z 2026/02/15 00:46:13 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1935975Z 2026/02/15 00:46:23 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1936436Z 2026/02/15 00:47:23 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1936885Z 2026/02/15 00:47:34 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1937324Z 2026/02/15 00:48:34 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1937758Z 2026/02/15 00:48:44 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1938504Z 2026/02/15 00:49:44 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1938947Z 2026/02/15 00:49:54 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1939388Z 2026/02/15 00:50:54 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1939821Z 2026/02/15 00:51:05 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1940253Z 2026/02/15 00:52:05 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1940689Z 2026/02/15 00:52:15 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1941127Z 2026/02/15 00:53:15 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1941564Z 2026/02/15 00:53:25 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1942055Z 2026/02/15 00:54:25 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-15T01:24:54.1942547Z 2026/02/15 00:55:26 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1950768Z === CONT  TestAccSearchIndexAPI_basic
2026-02-15T01:24:54.1979698Z === NAME  TestAccSearchIndexAPI_basic
2026-02-15T01:24:54.1980750Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9f7) still exists
2026-02-15T01:24:54.1981613Z --- FAIL: TestAccSearchIndexAPI_basic (1533.08s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 25 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9163335Z === RUN   TestAccSearchIndexAPI_basic
2026-02-17T16:03:21.9163976Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7341359849284937882
2026-02-17T16:03:21.9164688Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-1519459127951114801
2026-02-17T16:03:21.9165228Z 2026/02/17 15:24:18 [DEBUG] Waiting for state to become: [IDLE]
2026-02-17T16:03:21.9165652Z 2026/02/17 15:27:18 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9166211Z 2026/02/17 15:28:18 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9166597Z 2026/02/17 15:28:28 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9166973Z 2026/02/17 15:29:29 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9167347Z 2026/02/17 15:29:39 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9168046Z 2026/02/17 15:30:39 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9168413Z 2026/02/17 15:30:49 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9168784Z 2026/02/17 15:31:49 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9169147Z 2026/02/17 15:32:00 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9169518Z 2026/02/17 15:33:00 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9169884Z 2026/02/17 15:33:10 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9170262Z 2026/02/17 15:34:10 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9170760Z 2026/02/17 15:34:21 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9171146Z 2026/02/17 15:35:21 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9171522Z 2026/02/17 15:35:31 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9171919Z 2026/02/17 15:36:31 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-17T16:03:21.9172317Z 2026/02/17 15:37:32 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9179885Z === CONT  TestAccSearchIndexAPI_basic
2026-02-17T16:03:21.9210269Z === NAME  TestAccSearchIndexAPI_basic
2026-02-17T16:03:21.9211279Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b79c64c45bf0bbb4bd4) still exists
2026-02-17T16:03:21.9212134Z --- FAIL: TestAccSearchIndexAPI_basic (1526.81s)
```

  - FAIL 23 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3884094Z === RUN   TestAccSearchIndexAPI_basic
2026-02-17T20:22:24.3885154Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5920132817305394274
2026-02-17T20:22:24.3886321Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-3721231508258722541
2026-02-17T20:22:24.3887168Z 2026/02/17 19:46:48 [DEBUG] Waiting for state to become: [IDLE]
2026-02-17T20:22:24.3887853Z 2026/02/17 19:49:48 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3888826Z 2026/02/17 19:50:48 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3889513Z 2026/02/17 19:50:58 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3890416Z 2026/02/17 19:51:59 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3891059Z 2026/02/17 19:52:09 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3891696Z 2026/02/17 19:53:09 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3892330Z 2026/02/17 19:53:19 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3892957Z 2026/02/17 19:54:19 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3893595Z 2026/02/17 19:54:29 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3894225Z 2026/02/17 19:55:30 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3894875Z 2026/02/17 19:55:40 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3895584Z 2026/02/17 19:56:40 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-17T20:22:24.3896289Z 2026/02/17 19:57:40 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3909740Z === CONT  TestAccSearchIndexAPI_basic
2026-02-17T20:22:24.3932119Z === NAME  TestAccSearchIndexAPI_basic
2026-02-17T20:22:24.3936300Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c87298b8813de67e5cb4) still exists
2026-02-17T20:22:24.3937856Z --- FAIL: TestAccSearchIndexAPI_basic (1383.37s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8690471Z === RUN   TestAccSearchIndexAPI_basic
2026-02-22T01:16:57.8691272Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5805901280700101522
2026-02-22T01:16:57.8692158Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-8475155293841306936
2026-02-22T01:16:57.8692812Z 2026/02/22 00:40:00 [DEBUG] Waiting for state to become: [IDLE]
2026-02-22T01:16:57.8693351Z 2026/02/22 00:43:00 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8696494Z 2026/02/22 00:44:00 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8697131Z 2026/02/22 00:44:10 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8697559Z 2026/02/22 00:45:11 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8697975Z 2026/02/22 00:45:21 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8698371Z 2026/02/22 00:46:21 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8698757Z 2026/02/22 00:46:31 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8699145Z 2026/02/22 00:47:31 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8699556Z 2026/02/22 00:47:41 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8699989Z 2026/02/22 00:48:41 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8700378Z 2026/02/22 00:48:52 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8700773Z 2026/02/22 00:49:52 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8701163Z 2026/02/22 00:50:02 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8701559Z 2026/02/22 00:51:02 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8701947Z 2026/02/22 00:51:12 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8702322Z 2026/02/22 00:52:12 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8702700Z 2026/02/22 00:52:22 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8703129Z 2026/02/22 00:53:23 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-22T01:16:57.8703569Z 2026/02/22 00:54:23 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8712200Z === CONT  TestAccSearchIndexAPI_basic
2026-02-22T01:16:57.8719666Z === NAME  TestAccSearchIndexAPI_basic
2026-02-22T01:16:57.8720785Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fcc26caab7eb26b74c) still exists
2026-02-22T01:16:57.8721697Z --- FAIL: TestAccSearchIndexAPI_basic (1151.95s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
