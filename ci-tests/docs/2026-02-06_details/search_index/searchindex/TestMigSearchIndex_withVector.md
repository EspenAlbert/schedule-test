# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 01:38](#error-2026-02-02t0138320000) |  | dev | timeout | 3600.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 12 seconds
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 10 seconds
- 2026-01-13: MISSING
- 2026-01-14 PASS 11 seconds
- 2026-01-15: MISSING
- 2026-01-16 PASS 10 seconds
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 seconds
- 2026-01-20: MISSING
- 2026-01-21 PASS 9 seconds
- 2026-01-22: MISSING
- 2026-01-23 PASS 12 seconds
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 seconds
- 2026-01-27: MISSING
- 2026-01-28 PASS 10 seconds
- 2026-01-29: MISSING
- 2026-01-30 PASS 11 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T01:38:32+00:00
```
2026-02-02T01:38:32.8219147Z === RUN   TestMigSearchIndex_withVector
2026-02-02T01:38:32.8220337Z     resource_search_index_migration_test.go:15: Creating execution cluster: test-acc-tf-c-7961222180176297984
2026-02-02T01:38:33.3952680Z 2026/02/02 01:38:33 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T01:41:33.5993914Z 2026/02/02 01:41:33 [TRACE] Waiting 1m0s before next try
2026-02-02T01:42:33.8292839Z 2026/02/02 01:42:33 [TRACE] Waiting 10s before next try
2026-02-02T01:42:43.9558347Z 2026/02/02 01:42:43 [TRACE] Waiting 1m0s before next try
2026-02-02T01:43:44.1495378Z 2026/02/02 01:43:44 [TRACE] Waiting 10s before next try
2026-02-02T01:43:54.2754253Z 2026/02/02 01:43:54 [TRACE] Waiting 1m0s before next try
2026-02-02T01:44:54.4676900Z 2026/02/02 01:44:54 [TRACE] Waiting 10s before next try
2026-02-02T01:45:04.6040222Z 2026/02/02 01:45:04 [TRACE] Waiting 1m0s before next try
2026-02-02T01:46:04.8115750Z 2026/02/02 01:46:04 [TRACE] Waiting 10s before next try
2026-02-02T01:46:14.9284952Z 2026/02/02 01:46:14 [TRACE] Waiting 1m0s before next try
2026-02-02T01:47:15.1103195Z 2026/02/02 01:47:15 [TRACE] Waiting 10s before next try
2026-02-02T01:47:25.2306661Z 2026/02/02 01:47:25 [TRACE] Waiting 1m0s before next try
2026-02-02T01:48:25.4296080Z 2026/02/02 01:48:25 [TRACE] Waiting 10s before next try
2026-02-02T01:48:35.5663356Z 2026/02/02 01:48:35 [TRACE] Waiting 1m0s before next try
2026-02-02T01:49:35.8377109Z 2026/02/02 01:49:35 [TRACE] Waiting 10s before next try
2026-02-02T01:49:45.9732694Z 2026/02/02 01:49:45 [TRACE] Waiting 1m0s before next try
2026-02-02T01:50:46.2109900Z 2026/02/02 01:50:46 [TRACE] Waiting 10s before next try
2026-02-02T01:50:56.3461608Z 2026/02/02 01:50:56 [TRACE] Waiting 1m0s before next try
2026-02-02T01:51:56.5493698Z 2026/02/02 01:51:56 [TRACE] Waiting 10s before next try
2026-02-02T01:52:06.6728825Z 2026/02/02 01:52:06 [TRACE] Waiting 1m0s before next try
2026-02-02T01:53:06.8825885Z 2026/02/02 01:53:06 [TRACE] Waiting 10s before next try
2026-02-02T01:53:17.0164775Z 2026/02/02 01:53:17 [TRACE] Waiting 1m0s before next try
2026-02-02T01:54:17.2043205Z 2026/02/02 01:54:17 [TRACE] Waiting 10s before next try
2026-02-02T01:54:27.3205744Z 2026/02/02 01:54:27 [TRACE] Waiting 1m0s before next try
2026-02-02T01:55:27.4806031Z 2026/02/02 01:55:27 [TRACE] Waiting 10s before next try
2026-02-02T01:55:37.5957237Z 2026/02/02 01:55:37 [TRACE] Waiting 1m0s before next try
2026-02-02T01:56:37.7703408Z 2026/02/02 01:56:37 [TRACE] Waiting 10s before next try
2026-02-02T01:56:47.9215042Z 2026/02/02 01:56:47 [TRACE] Waiting 1m0s before next try
2026-02-02T01:57:48.0967117Z 2026/02/02 01:57:48 [TRACE] Waiting 10s before next try
2026-02-02T01:57:58.2218405Z 2026/02/02 01:57:58 [TRACE] Waiting 1m0s before next try
2026-02-02T01:58:58.3933008Z 2026/02/02 01:58:58 [TRACE] Waiting 10s before next try
2026-02-02T01:59:08.5285865Z 2026/02/02 01:59:08 [TRACE] Waiting 1m0s before next try
2026-02-02T02:00:08.9029041Z 2026/02/02 02:00:08 [TRACE] Waiting 10s before next try
2026-02-02T02:00:19.0577584Z 2026/02/02 02:00:19 [TRACE] Waiting 1m0s before next try
2026-02-02T02:01:19.2734326Z 2026/02/02 02:01:19 [TRACE] Waiting 10s before next try
2026-02-02T02:01:29.4040968Z 2026/02/02 02:01:29 [TRACE] Waiting 1m0s before next try
2026-02-02T02:02:29.6275827Z 2026/02/02 02:02:29 [TRACE] Waiting 10s before next try
2026-02-02T02:02:39.7672193Z 2026/02/02 02:02:39 [TRACE] Waiting 1m0s before next try
2026-02-02T02:03:39.9250626Z 2026/02/02 02:03:39 [TRACE] Waiting 10s before next try
2026-02-02T02:03:50.0532350Z 2026/02/02 02:03:50 [TRACE] Waiting 1m0s before next try
2026-02-02T02:04:50.2834156Z 2026/02/02 02:04:50 [TRACE] Waiting 10s before next try
2026-02-02T02:05:00.4283708Z 2026/02/02 02:05:00 [TRACE] Waiting 1m0s before next try
2026-02-02T02:06:00.6002618Z 2026/02/02 02:06:00 [TRACE] Waiting 10s before next try
2026-02-02T02:06:10.7203088Z 2026/02/02 02:06:10 [TRACE] Waiting 1m0s before next try
2026-02-02T02:07:10.8724436Z 2026/02/02 02:07:10 [TRACE] Waiting 10s before next try
2026-02-02T02:07:21.0186279Z 2026/02/02 02:07:21 [TRACE] Waiting 1m0s before next try
2026-02-02T02:08:21.2324497Z 2026/02/02 02:08:21 [TRACE] Waiting 10s before next try
2026-02-02T02:08:31.3475932Z 2026/02/02 02:08:31 [TRACE] Waiting 1m0s before next try
2026-02-02T02:09:31.5469661Z 2026/02/02 02:09:31 [TRACE] Waiting 10s before next try
2026-02-02T02:09:41.6772800Z 2026/02/02 02:09:41 [TRACE] Waiting 1m0s before next try
2026-02-02T02:10:41.9851193Z 2026/02/02 02:10:41 [TRACE] Waiting 10s before next try
2026-02-02T02:10:52.1147409Z 2026/02/02 02:10:52 [TRACE] Waiting 1m0s before next try
2026-02-02T02:11:52.2612300Z 2026/02/02 02:11:52 [TRACE] Waiting 10s before next try
2026-02-02T02:12:02.3958830Z 2026/02/02 02:12:02 [TRACE] Waiting 1m0s before next try
2026-02-02T02:13:02.5817248Z 2026/02/02 02:13:02 [TRACE] Waiting 10s before next try
2026-02-02T02:13:12.7013050Z 2026/02/02 02:13:12 [TRACE] Waiting 1m0s before next try
2026-02-02T02:14:12.8824765Z 2026/02/02 02:14:12 [TRACE] Waiting 10s before next try
2026-02-02T02:14:23.0212071Z 2026/02/02 02:14:23 [TRACE] Waiting 1m0s before next try
2026-02-02T02:15:23.2428396Z 2026/02/02 02:15:23 [TRACE] Waiting 10s before next try
2026-02-02T02:15:33.3614640Z 2026/02/02 02:15:33 [TRACE] Waiting 1m0s before next try
2026-02-02T02:16:33.5223801Z 2026/02/02 02:16:33 [TRACE] Waiting 10s before next try
2026-02-02T02:16:43.6536532Z 2026/02/02 02:16:43 [TRACE] Waiting 1m0s before next try
2026-02-02T02:17:43.8200010Z 2026/02/02 02:17:43 [TRACE] Waiting 10s before next try
2026-02-02T02:17:53.9435009Z 2026/02/02 02:17:53 [TRACE] Waiting 1m0s before next try
2026-02-02T02:18:54.1348744Z 2026/02/02 02:18:54 [TRACE] Waiting 10s before next try
2026-02-02T02:19:04.3024345Z 2026/02/02 02:19:04 [TRACE] Waiting 1m0s before next try
2026-02-02T02:20:04.4750991Z 2026/02/02 02:20:04 [TRACE] Waiting 10s before next try
2026-02-02T02:20:14.6076672Z 2026/02/02 02:20:14 [TRACE] Waiting 1m0s before next try
2026-02-02T02:21:14.8572554Z 2026/02/02 02:21:14 [TRACE] Waiting 10s before next try
2026-02-02T02:21:24.9746477Z 2026/02/02 02:21:24 [TRACE] Waiting 1m0s before next try
2026-02-02T02:22:25.1703163Z 2026/02/02 02:22:25 [TRACE] Waiting 10s before next try
2026-02-02T02:22:35.3069974Z 2026/02/02 02:22:35 [TRACE] Waiting 1m0s before next try
2026-02-02T02:23:35.5860600Z 2026/02/02 02:23:35 [TRACE] Waiting 10s before next try
2026-02-02T02:23:45.7123921Z 2026/02/02 02:23:45 [TRACE] Waiting 1m0s before next try
2026-02-02T02:24:45.9252270Z 2026/02/02 02:24:45 [TRACE] Waiting 10s before next try
2026-02-02T02:24:56.0537461Z 2026/02/02 02:24:56 [TRACE] Waiting 1m0s before next try
2026-02-02T02:25:56.2120867Z 2026/02/02 02:25:56 [TRACE] Waiting 10s before next try
2026-02-02T02:26:06.3444738Z 2026/02/02 02:26:06 [TRACE] Waiting 1m0s before next try
2026-02-02T02:27:06.5124939Z 2026/02/02 02:27:06 [TRACE] Waiting 10s before next try
2026-02-02T02:27:16.6483665Z 2026/02/02 02:27:16 [TRACE] Waiting 1m0s before next try
2026-02-02T02:28:16.9016815Z 2026/02/02 02:28:16 [TRACE] Waiting 10s before next try
2026-02-02T02:28:27.0388184Z 2026/02/02 02:28:27 [TRACE] Waiting 1m0s before next try
2026-02-02T02:29:27.1749398Z 2026/02/02 02:29:27 [TRACE] Waiting 10s before next try
2026-02-02T02:29:37.4521757Z 2026/02/02 02:29:37 [TRACE] Waiting 1m0s before next try
2026-02-02T02:30:37.7401042Z 2026/02/02 02:30:37 [TRACE] Waiting 10s before next try
2026-02-02T02:30:47.8799143Z 2026/02/02 02:30:47 [TRACE] Waiting 1m0s before next try
2026-02-02T02:31:48.0634145Z 2026/02/02 02:31:48 [TRACE] Waiting 10s before next try
2026-02-02T02:31:58.1993031Z 2026/02/02 02:31:58 [TRACE] Waiting 1m0s before next try
2026-02-02T02:32:58.3468145Z 2026/02/02 02:32:58 [TRACE] Waiting 10s before next try
2026-02-02T02:33:08.4705333Z 2026/02/02 02:33:08 [TRACE] Waiting 1m0s before next try
2026-02-02T02:34:08.6404579Z 2026/02/02 02:34:08 [TRACE] Waiting 10s before next try
2026-02-02T02:34:18.7683124Z 2026/02/02 02:34:18 [TRACE] Waiting 1m0s before next try
2026-02-02T02:35:19.0049200Z 2026/02/02 02:35:19 [TRACE] Waiting 10s before next try
2026-02-02T02:35:29.1425678Z 2026/02/02 02:35:29 [TRACE] Waiting 1m0s before next try
2026-02-02T02:36:29.3401960Z 2026/02/02 02:36:29 [TRACE] Waiting 10s before next try
2026-02-02T02:36:39.4845826Z 2026/02/02 02:36:39 [TRACE] Waiting 1m0s before next try
2026-02-02T02:37:39.6539374Z 2026/02/02 02:37:39 [TRACE] Waiting 10s before next try
2026-02-02T02:37:49.7913408Z 2026/02/02 02:37:49 [TRACE] Waiting 1m0s before next try
2026-02-02T02:38:33.3957000Z 2026/02/02 02:38:33 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T02:38:33.3958168Z 2026/02/02 02:38:33 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T02:38:33.3963254Z     resource_search_index_migration_test.go:15: 
2026-02-02T02:38:33.3965722Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T02:38:33.3971980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T02:38:33.3975507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:342
2026-02-02T02:38:33.3979225Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2026-02-02T02:38:33.3980768Z         	Error:      	Received unexpected error:
2026-02-02T02:38:33.3982615Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T02:38:33.3983215Z         	Test:       	TestMigSearchIndex_withVector
2026-02-02T02:38:33.3984276Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7961222180176297984, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T02:38:33.3985016Z --- FAIL: TestMigSearchIndex_withVector (3600.58s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 11 seconds
- 2026-02-05: MISSING
- 2026-02-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 11 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 11 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 10 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 11 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 10 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 10 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
