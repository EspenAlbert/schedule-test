# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 02:36](#error-2026-01-31t0236300000) |  | dev | timeout | 3600.07s
[2026-02-02 03:39](#error-2026-02-02t0339100000) |  | dev | timeout | 3600.07s
[2026-02-03 00:40](#error-2026-02-03t0040330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c3e3c7fce2317e5c9e/clusters | dev | out_of_capacity | 0.06s
[2026-02-03 01:51](#error-2026-02-03t0151060000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6981544c8303bfa55c821874/clusters | dev | out_of_capacity | 0.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
- 2026-01-09 PASS 13 minutes
- 2026-01-10 PASS 10 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 11 minutes
- 2026-01-13 PASS 14 minutes
- 2026-01-14 PASS 11 minutes
- 2026-01-15 PASS 13 minutes
- 2026-01-16 PASS 12 minutes
- 2026-01-17 PASS 11 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 minutes
- 2026-01-20 PASS 12 minutes
- 2026-01-21 PASS 12 minutes
- 2026-01-22 PASS 13 minutes
- 2026-01-23 PASS 12 minutes
- 2026-01-24 PASS 11 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 minutes
- 2026-01-27 PASS 12 minutes
- 2026-01-28 PASS 11 minutes
- 2026-01-29 PASS 13 minutes
- 2026-01-30: MISSING
- 2026-01-31

### Error 2026-01-31T02:36:30+00:00
```
2026-01-31T02:36:30.9710936Z === RUN   TestAccStreamProcessor_withOptions
2026-01-31T02:36:30.9712176Z     resource_test.go:172: Creating execution cluster: test-acc-tf-c-4975332810579391218
2026-01-31T02:36:30.9713142Z 2026/01/31 00:35:23 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T02:36:30.9715724Z 2026/01/31 00:38:24 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9716515Z 2026/01/31 00:39:24 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9717190Z 2026/01/31 00:39:34 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9717844Z 2026/01/31 00:40:34 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9718486Z 2026/01/31 00:40:45 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9719148Z 2026/01/31 00:41:45 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9719778Z 2026/01/31 00:41:55 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9720412Z 2026/01/31 00:42:55 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9721041Z 2026/01/31 00:43:06 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9721677Z 2026/01/31 00:44:06 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9722485Z 2026/01/31 00:44:16 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9723101Z 2026/01/31 00:45:16 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9723688Z 2026/01/31 00:45:27 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9724326Z 2026/01/31 00:46:27 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9725020Z 2026/01/31 00:46:37 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9725650Z 2026/01/31 00:47:37 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9726293Z 2026/01/31 00:47:47 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9726936Z 2026/01/31 00:48:48 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9727592Z 2026/01/31 00:48:58 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9728220Z 2026/01/31 00:49:58 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9728858Z 2026/01/31 00:50:08 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9729509Z 2026/01/31 00:51:09 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9730142Z 2026/01/31 00:51:19 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9730784Z 2026/01/31 00:52:19 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9731429Z 2026/01/31 00:52:29 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9732320Z 2026/01/31 00:53:29 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9732959Z 2026/01/31 00:53:40 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9733663Z 2026/01/31 00:54:40 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9734317Z 2026/01/31 00:54:50 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9734958Z 2026/01/31 00:55:50 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9735597Z 2026/01/31 00:56:00 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9736227Z 2026/01/31 00:57:01 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9736902Z 2026/01/31 00:57:11 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9737521Z 2026/01/31 00:58:11 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9738160Z 2026/01/31 00:58:21 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9739287Z 2026/01/31 00:59:22 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9740247Z 2026/01/31 00:59:32 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9740875Z 2026/01/31 01:00:32 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9741510Z 2026/01/31 01:00:42 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9742411Z 2026/01/31 01:01:42 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9743101Z 2026/01/31 01:01:53 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9743735Z 2026/01/31 01:02:53 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9744364Z 2026/01/31 01:03:03 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9745000Z 2026/01/31 01:04:03 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9745635Z 2026/01/31 01:04:14 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9746265Z 2026/01/31 01:05:14 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9746893Z 2026/01/31 01:05:24 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9747717Z 2026/01/31 01:06:24 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9748381Z 2026/01/31 01:06:34 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9749039Z 2026/01/31 01:07:35 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9749686Z 2026/01/31 01:07:45 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9750334Z 2026/01/31 01:08:45 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9750964Z 2026/01/31 01:08:55 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9751604Z 2026/01/31 01:09:56 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9752400Z 2026/01/31 01:10:06 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9753045Z 2026/01/31 01:11:06 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9753681Z 2026/01/31 01:11:16 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9754312Z 2026/01/31 01:12:17 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9754947Z 2026/01/31 01:12:27 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9755590Z 2026/01/31 01:13:27 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9756884Z 2026/01/31 01:13:37 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9757533Z 2026/01/31 01:14:37 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9758171Z 2026/01/31 01:14:48 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9758875Z 2026/01/31 01:15:48 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9759512Z 2026/01/31 01:15:58 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9760132Z 2026/01/31 01:16:58 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9760767Z 2026/01/31 01:17:09 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9761393Z 2026/01/31 01:18:09 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9763704Z 2026/01/31 01:18:19 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9764338Z 2026/01/31 01:19:19 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9764972Z 2026/01/31 01:19:30 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9765617Z 2026/01/31 01:20:30 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9766244Z 2026/01/31 01:20:40 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9766872Z 2026/01/31 01:21:40 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9767496Z 2026/01/31 01:21:51 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9768120Z 2026/01/31 01:22:51 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9768746Z 2026/01/31 01:23:01 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9769381Z 2026/01/31 01:24:01 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9770006Z 2026/01/31 01:24:12 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9770640Z 2026/01/31 01:25:12 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9771268Z 2026/01/31 01:25:22 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9772062Z 2026/01/31 01:26:22 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9772700Z 2026/01/31 01:26:33 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9773538Z 2026/01/31 01:27:33 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9774176Z 2026/01/31 01:27:43 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9774794Z 2026/01/31 01:28:43 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9775429Z 2026/01/31 01:28:54 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9776058Z 2026/01/31 01:29:54 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9776685Z 2026/01/31 01:30:04 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9777316Z 2026/01/31 01:31:04 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9777948Z 2026/01/31 01:31:14 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9778583Z 2026/01/31 01:32:15 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9779211Z 2026/01/31 01:32:25 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9779835Z 2026/01/31 01:33:25 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9780486Z 2026/01/31 01:33:35 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9781279Z 2026/01/31 01:34:36 [TRACE] Waiting 10s before next try
2026-01-31T02:36:30.9782093Z 2026/01/31 01:34:46 [TRACE] Waiting 1m0s before next try
2026-01-31T02:36:30.9782765Z 2026/01/31 01:35:23 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T02:36:30.9783534Z 2026/01/31 01:35:23 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T02:36:30.9784271Z     resource_test.go:172: 
2026-01-31T02:36:30.9785946Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T02:36:30.9789299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T02:36:30.9792944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2026-01-31T02:36:30.9794410Z         	Error:      	Received unexpected error:
2026-01-31T02:36:30.9796180Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:36:30.9797295Z         	Test:       	TestAccStreamProcessor_withOptions
2026-01-31T02:36:30.9799284Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4975332810579391218, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:36:30.9800674Z --- FAIL: TestAccStreamProcessor_withOptions (3600.65s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:10+00:00
```
2026-02-02T03:39:10.8616587Z === RUN   TestAccStreamProcessor_withOptions
2026-02-02T03:39:10.8617077Z     resource_test.go:172: Creating execution cluster: test-acc-tf-c-6396625515331378852
2026-02-02T03:39:10.8617559Z 2026/02/02 00:38:47 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T03:39:10.8618078Z 2026/02/02 00:41:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8618436Z 2026/02/02 00:42:48 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8618783Z 2026/02/02 00:42:58 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8619134Z 2026/02/02 00:43:59 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8619479Z 2026/02/02 00:44:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8619826Z 2026/02/02 00:45:09 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8620164Z 2026/02/02 00:45:20 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8620517Z 2026/02/02 00:46:20 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8620851Z 2026/02/02 00:46:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8621198Z 2026/02/02 00:47:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8621533Z 2026/02/02 00:47:41 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8621879Z 2026/02/02 00:48:41 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8622224Z 2026/02/02 00:48:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8622559Z 2026/02/02 00:49:52 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8622904Z 2026/02/02 00:50:02 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8623242Z 2026/02/02 00:51:02 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8623582Z 2026/02/02 00:51:12 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8623921Z 2026/02/02 00:52:13 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8624347Z 2026/02/02 00:52:23 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8624689Z 2026/02/02 00:53:23 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8625033Z 2026/02/02 00:53:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8625374Z 2026/02/02 00:54:34 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8625731Z 2026/02/02 00:54:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8626083Z 2026/02/02 00:55:44 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8626448Z 2026/02/02 00:55:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8626802Z 2026/02/02 00:56:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8627153Z 2026/02/02 00:57:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8627502Z 2026/02/02 00:58:06 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8627835Z 2026/02/02 00:58:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8628180Z 2026/02/02 00:59:16 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8628514Z 2026/02/02 00:59:27 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8628852Z 2026/02/02 01:00:27 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8629188Z 2026/02/02 01:00:37 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8629525Z 2026/02/02 01:01:37 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8629860Z 2026/02/02 01:01:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8630304Z 2026/02/02 01:02:48 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8630648Z 2026/02/02 01:02:58 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8630998Z 2026/02/02 01:03:59 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8631340Z 2026/02/02 01:04:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8631686Z 2026/02/02 01:05:09 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8632034Z 2026/02/02 01:05:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8632370Z 2026/02/02 01:06:20 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8632715Z 2026/02/02 01:06:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8633051Z 2026/02/02 01:07:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8633393Z 2026/02/02 01:07:41 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8633729Z 2026/02/02 01:08:41 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8634071Z 2026/02/02 01:08:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8634472Z 2026/02/02 01:09:52 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8634899Z 2026/02/02 01:10:02 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8635238Z 2026/02/02 01:11:02 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8635582Z 2026/02/02 01:11:13 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8635919Z 2026/02/02 01:12:13 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8636261Z 2026/02/02 01:12:23 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8636602Z 2026/02/02 01:13:24 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8636953Z 2026/02/02 01:13:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8637300Z 2026/02/02 01:14:34 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8637636Z 2026/02/02 01:14:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8637984Z 2026/02/02 01:15:45 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8638328Z 2026/02/02 01:15:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8638696Z 2026/02/02 01:16:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8639037Z 2026/02/02 01:17:06 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8639378Z 2026/02/02 01:18:06 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8639711Z 2026/02/02 01:18:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8640049Z 2026/02/02 01:19:16 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8640379Z 2026/02/02 01:19:27 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8640724Z 2026/02/02 01:20:27 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8641061Z 2026/02/02 01:20:37 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8641397Z 2026/02/02 01:21:38 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8641731Z 2026/02/02 01:21:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8642073Z 2026/02/02 01:22:48 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8642411Z 2026/02/02 01:22:58 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8642747Z 2026/02/02 01:23:59 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8643089Z 2026/02/02 01:24:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8643424Z 2026/02/02 01:25:09 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8643760Z 2026/02/02 01:25:20 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8644091Z 2026/02/02 01:26:20 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8644548Z 2026/02/02 01:26:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8644928Z 2026/02/02 01:27:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8645276Z 2026/02/02 01:27:41 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8645608Z 2026/02/02 01:28:41 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8645950Z 2026/02/02 01:28:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8646286Z 2026/02/02 01:29:52 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8646636Z 2026/02/02 01:30:02 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8647100Z 2026/02/02 01:31:02 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8647466Z 2026/02/02 01:31:13 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8647815Z 2026/02/02 01:32:13 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8648245Z 2026/02/02 01:32:23 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8648589Z 2026/02/02 01:33:23 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8648931Z 2026/02/02 01:33:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8649273Z 2026/02/02 01:34:34 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8649606Z 2026/02/02 01:34:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8649950Z 2026/02/02 01:35:45 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8650284Z 2026/02/02 01:35:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8650630Z 2026/02/02 01:36:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8650967Z 2026/02/02 01:37:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8651313Z 2026/02/02 01:38:06 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8651730Z 2026/02/02 01:38:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8652101Z 2026/02/02 01:38:47 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T03:39:10.8652512Z 2026/02/02 01:38:47 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T03:39:10.8652906Z     resource_test.go:172: 
2026-02-02T03:39:10.8653734Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:39:10.8655491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:39:10.8657175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2026-02-02T03:39:10.8657910Z         	Error:      	Received unexpected error:
2026-02-02T03:39:10.8658757Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8659329Z         	Test:       	TestAccStreamProcessor_withOptions
2026-02-02T03:39:10.8660372Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6396625515331378852, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8661083Z --- FAIL: TestAccStreamProcessor_withOptions (3600.68s)
```

- 2026-02-03
  - FAIL a moment

### Error 2026-02-03T00:40:33+00:00
```
2026-02-03T00:40:33.6501877Z === RUN   TestAccStreamProcessor_withOptions
2026-02-03T00:40:33.6502414Z     resource_test.go:172: Creating execution cluster: test-acc-tf-c-4267366659509533042
2026-02-03T00:40:33.6502880Z     resource_test.go:172: 
2026-02-03T00:40:33.6503762Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:40:33.6505716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:40:33.6508540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2026-02-03T00:40:33.6509982Z         	Error:      	Received unexpected error:
2026-02-03T00:40:33.6514428Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3e3c7fce2317e5c9e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:33.6516858Z         	Test:       	TestAccStreamProcessor_withOptions
2026-02-03T00:40:33.6520659Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4267366659509533042, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3e3c7fce2317e5c9e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:33.6523128Z --- FAIL: TestAccStreamProcessor_withOptions (0.57s)
```

  - FAIL a moment

### Error 2026-02-03T01:51:06+00:00
```
2026-02-03T01:51:06.0597054Z === RUN   TestAccStreamProcessor_withOptions
2026-02-03T01:51:06.0597601Z     resource_test.go:172: Creating execution cluster: test-acc-tf-c-6590033819723078879
2026-02-03T01:51:06.0598067Z     resource_test.go:172: 
2026-02-03T01:51:06.0598966Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T01:51:06.0600746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T01:51:06.0602885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2026-02-03T01:51:06.0603692Z         	Error:      	Received unexpected error:
2026-02-03T01:51:06.0606168Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544c8303bfa55c821874/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T01:51:06.0607429Z         	Test:       	TestAccStreamProcessor_withOptions
2026-02-03T01:51:06.0609532Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6590033819723078879, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544c8303bfa55c821874/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T01:51:06.0610917Z --- FAIL: TestAccStreamProcessor_withOptions (0.55s)
```

- 2026-02-04 PASS 15 minutes
- 2026-02-05 PASS 15 minutes
- 2026-02-06 PASS 17 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 10 minutes
  - PASS 12 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 11 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 9 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 10 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 9 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 11 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 10 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
