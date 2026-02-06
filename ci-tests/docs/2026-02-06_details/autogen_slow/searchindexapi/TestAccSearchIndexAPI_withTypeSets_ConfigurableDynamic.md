# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) TIMEOUT(x 2) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 05:36](#error-2026-01-31t0536290000) |  | dev |  | 212453.00s
[2026-02-02 05:40](#error-2026-02-02t0540360000) |  | dev |  | 212453.00s
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 20 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 19 minutes
- 2026-01-13 PASS 18 minutes
- 2026-01-14 PASS 20 minutes
- 2026-01-15 PASS 17 minutes
- 2026-01-16 PASS 22 minutes
- 2026-01-17 PASS 19 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20 PASS 19 minutes
- 2026-01-21 PASS 21 minutes
- 2026-01-22 PASS 18 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 24 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 26 minutes
- 2026-01-27 PASS 19 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 18 minutes
- 2026-01-30 PASS 21 minutes
- 2026-01-31

### Error 2026-01-31T05:36:29+00:00
```
2026-01-31T05:36:29.4763721Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-01-31T05:36:29.4764336Z     resource_test.go:114: Creating execution cluster: test-acc-tf-c-1359804354385347503
2026-01-31T05:36:29.4764837Z 2026/01/31 04:36:37 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T05:36:29.4765365Z 2026/01/31 04:39:37 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4765734Z 2026/01/31 04:40:38 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4766125Z 2026/01/31 04:40:48 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4766482Z 2026/01/31 04:41:52 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4766829Z 2026/01/31 04:42:03 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4767173Z 2026/01/31 04:43:03 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4767526Z 2026/01/31 04:43:13 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4767878Z 2026/01/31 04:44:14 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4768410Z 2026/01/31 04:44:24 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4768788Z 2026/01/31 04:45:24 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4769133Z 2026/01/31 04:45:35 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4769487Z 2026/01/31 04:46:35 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4769856Z 2026/01/31 04:46:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4770204Z 2026/01/31 04:47:46 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4770554Z 2026/01/31 04:47:56 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4770907Z 2026/01/31 04:48:57 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4771252Z 2026/01/31 04:49:07 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4771595Z 2026/01/31 04:50:07 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4771950Z 2026/01/31 04:50:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4772293Z 2026/01/31 04:51:18 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4772639Z 2026/01/31 04:51:28 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4772989Z 2026/01/31 04:52:29 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4773334Z 2026/01/31 04:52:39 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4773680Z 2026/01/31 04:53:39 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4774042Z 2026/01/31 04:53:50 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4774387Z 2026/01/31 04:54:50 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4774731Z 2026/01/31 04:55:00 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4775080Z 2026/01/31 04:56:01 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4775425Z 2026/01/31 04:56:11 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4775769Z 2026/01/31 04:57:11 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4776248Z 2026/01/31 04:57:22 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4776592Z 2026/01/31 04:58:22 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4776940Z 2026/01/31 04:58:32 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4777291Z 2026/01/31 04:59:33 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4777634Z 2026/01/31 04:59:43 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4777978Z 2026/01/31 05:00:44 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4778443Z 2026/01/31 05:00:54 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4778789Z 2026/01/31 05:01:54 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4779133Z 2026/01/31 05:02:04 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4779651Z 2026/01/31 05:03:05 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4779997Z 2026/01/31 05:03:15 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4780340Z 2026/01/31 05:04:16 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4780699Z 2026/01/31 05:04:26 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4781042Z 2026/01/31 05:05:26 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4781384Z 2026/01/31 05:05:36 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4781735Z 2026/01/31 05:06:37 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4782076Z 2026/01/31 05:06:47 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4782420Z 2026/01/31 05:07:48 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4782905Z 2026/01/31 05:07:58 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4783260Z 2026/01/31 05:08:58 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4783607Z 2026/01/31 05:09:08 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4783957Z 2026/01/31 05:10:09 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4784307Z 2026/01/31 05:10:19 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4784651Z 2026/01/31 05:11:19 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4785010Z 2026/01/31 05:11:30 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4785355Z 2026/01/31 05:12:30 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4785701Z 2026/01/31 05:12:40 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4786054Z 2026/01/31 05:13:41 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4786397Z 2026/01/31 05:13:51 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4786741Z 2026/01/31 05:14:52 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4787095Z 2026/01/31 05:15:02 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4787440Z 2026/01/31 05:16:02 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4787787Z 2026/01/31 05:16:13 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4788254Z 2026/01/31 05:17:13 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4788603Z 2026/01/31 05:17:23 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4788947Z 2026/01/31 05:18:24 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4789304Z 2026/01/31 05:18:34 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4789645Z 2026/01/31 05:19:34 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4789987Z 2026/01/31 05:19:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4790339Z 2026/01/31 05:20:45 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4790683Z 2026/01/31 05:20:55 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4791027Z 2026/01/31 05:21:56 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4791381Z 2026/01/31 05:22:06 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4791726Z 2026/01/31 05:23:06 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4792071Z 2026/01/31 05:23:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4792421Z 2026/01/31 05:24:17 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4792771Z 2026/01/31 05:24:27 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4793118Z 2026/01/31 05:25:28 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4793618Z 2026/01/31 05:25:38 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4793981Z 2026/01/31 05:26:38 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4794330Z 2026/01/31 05:26:49 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4794678Z 2026/01/31 05:27:49 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4795028Z 2026/01/31 05:27:59 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4795372Z 2026/01/31 05:29:00 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4795720Z 2026/01/31 05:29:10 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4796076Z 2026/01/31 05:30:11 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4796421Z 2026/01/31 05:30:21 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4796768Z 2026/01/31 05:31:21 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4797122Z 2026/01/31 05:31:31 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4797470Z 2026/01/31 05:32:32 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4797824Z 2026/01/31 05:32:42 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4798332Z 2026/01/31 05:33:43 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4798765Z 2026/01/31 05:33:53 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4799115Z 2026/01/31 05:34:53 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4799467Z 2026/01/31 05:35:04 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4799811Z 2026/01/31 05:36:04 [TRACE] Waiting 10s before next try
2026-01-31T05:36:29.4800278Z 2026/01/31 05:36:14 [TRACE] Waiting 1m0s before next try
2026-01-31T05:36:29.4800630Z panic: test timed out after 5h0m0s
2026-01-31T05:36:29.4800912Z 	running tests:
2026-01-31T05:36:29.4800630Z panic: test timed out after 5h0m0s
2026-01-31T05:36:29.4800912Z 	running tests:
2026-01-31T05:36:29.4801283Z 		TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (59m53s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T05:40:36+00:00
```
2026-02-02T05:40:36.1425264Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-02T05:40:36.1426010Z     resource_test.go:114: Creating execution cluster: test-acc-tf-c-8487116556791784837
2026-02-02T05:40:36.1426640Z 2026/02/02 04:40:44 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T05:40:36.1427289Z 2026/02/02 04:43:44 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1427684Z 2026/02/02 04:44:44 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1428216Z 2026/02/02 04:44:54 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1428582Z 2026/02/02 04:45:54 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1428941Z 2026/02/02 04:46:04 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1429290Z 2026/02/02 04:47:05 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1429694Z 2026/02/02 04:47:15 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1430122Z 2026/02/02 04:48:15 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1430545Z 2026/02/02 04:48:25 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1430949Z 2026/02/02 04:49:25 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1431371Z 2026/02/02 04:49:36 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1431778Z 2026/02/02 04:50:36 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1432213Z 2026/02/02 04:50:46 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1432614Z 2026/02/02 04:51:46 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1433040Z 2026/02/02 04:51:56 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1433435Z 2026/02/02 04:52:56 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1433792Z 2026/02/02 04:53:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1434139Z 2026/02/02 04:54:07 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1434607Z 2026/02/02 04:54:17 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1434960Z 2026/02/02 04:55:17 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1435450Z 2026/02/02 04:55:27 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1435800Z 2026/02/02 04:56:27 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1436283Z 2026/02/02 04:56:38 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1436633Z 2026/02/02 04:57:38 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1437110Z 2026/02/02 04:57:48 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1437548Z 2026/02/02 04:58:48 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1437974Z 2026/02/02 04:58:58 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1438535Z 2026/02/02 04:59:58 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1438936Z 2026/02/02 05:00:09 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1439366Z 2026/02/02 05:01:09 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1439763Z 2026/02/02 05:01:19 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1440198Z 2026/02/02 05:02:19 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1440829Z 2026/02/02 05:02:29 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1441186Z 2026/02/02 05:03:29 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1441739Z 2026/02/02 05:03:39 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1442101Z 2026/02/02 05:04:40 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1442562Z 2026/02/02 05:04:50 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1442930Z 2026/02/02 05:05:50 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1443387Z 2026/02/02 05:06:00 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1443750Z 2026/02/02 05:07:00 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1444225Z 2026/02/02 05:07:11 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1444579Z 2026/02/02 05:08:11 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1445043Z 2026/02/02 05:08:21 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1445411Z 2026/02/02 05:09:21 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1445873Z 2026/02/02 05:09:31 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1446230Z 2026/02/02 05:10:31 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1446700Z 2026/02/02 05:10:42 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1447058Z 2026/02/02 05:11:42 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1447640Z 2026/02/02 05:11:52 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1448164Z 2026/02/02 05:12:52 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1448581Z 2026/02/02 05:13:02 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1449004Z 2026/02/02 05:14:02 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1449410Z 2026/02/02 05:14:13 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1449829Z 2026/02/02 05:15:13 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1450230Z 2026/02/02 05:15:23 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1450596Z 2026/02/02 05:16:23 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1450941Z 2026/02/02 05:16:33 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1451288Z 2026/02/02 05:17:33 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1451728Z 2026/02/02 05:17:44 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1452098Z 2026/02/02 05:18:44 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1452554Z 2026/02/02 05:18:54 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1452925Z 2026/02/02 05:19:54 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1453374Z 2026/02/02 05:20:04 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1453757Z 2026/02/02 05:21:04 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1454223Z 2026/02/02 05:21:15 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1454580Z 2026/02/02 05:22:15 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1454930Z 2026/02/02 05:22:25 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1455295Z 2026/02/02 05:23:25 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1455640Z 2026/02/02 05:23:35 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1455984Z 2026/02/02 05:24:36 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1456337Z 2026/02/02 05:24:46 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1456684Z 2026/02/02 05:25:46 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1457039Z 2026/02/02 05:25:56 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1457396Z 2026/02/02 05:26:56 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1457853Z 2026/02/02 05:27:06 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1458413Z 2026/02/02 05:28:07 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1458774Z 2026/02/02 05:28:17 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1459296Z 2026/02/02 05:29:17 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1459647Z 2026/02/02 05:29:27 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1460288Z 2026/02/02 05:30:27 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1460637Z 2026/02/02 05:30:38 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1461111Z 2026/02/02 05:31:38 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1461467Z 2026/02/02 05:31:48 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1461944Z 2026/02/02 05:32:48 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1462336Z 2026/02/02 05:32:58 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1462777Z 2026/02/02 05:33:58 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1463175Z 2026/02/02 05:34:09 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1463622Z 2026/02/02 05:35:09 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1471773Z 2026/02/02 05:35:19 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1472195Z 2026/02/02 05:36:19 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1472708Z 2026/02/02 05:36:29 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1473150Z 2026/02/02 05:37:30 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1473575Z 2026/02/02 05:37:40 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1473993Z 2026/02/02 05:38:40 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1474399Z 2026/02/02 05:38:50 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1474824Z 2026/02/02 05:39:50 [TRACE] Waiting 10s before next try
2026-02-02T05:40:36.1475384Z 2026/02/02 05:40:00 [TRACE] Waiting 1m0s before next try
2026-02-02T05:40:36.1475867Z panic: test timed out after 5h0m0s
2026-02-02T05:40:36.1476151Z 	running tests:
2026-02-02T05:40:36.1475867Z panic: test timed out after 5h0m0s
2026-02-02T05:40:36.1476151Z 	running tests:
2026-02-02T05:40:36.1476659Z 		TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (59m53s)
```

- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4504016Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-03T00:42:45.4505050Z     resource_test.go:114: Creating execution cluster: test-acc-tf-c-6548939140283544914
2026-02-03T00:42:45.4505890Z     resource_test.go:114: 
2026-02-03T00:42:45.4507472Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4511024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4514488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:114
2026-02-03T00:42:45.4515902Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4520587Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4522944Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-02-03T00:42:45.4526888Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6548939140283544914, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4529600Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (0.42s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 39 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 17 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 15 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 19 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 18 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 17 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 20 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
