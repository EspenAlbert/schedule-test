# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 03:39](#error-2026-02-02t0339100000) |  | dev | timeout | 3600.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 13 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 12 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 11 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 12 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 12 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 12 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 11 minutes
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:10+00:00
```
2026-02-02T03:39:10.8470127Z === RUN   TestMigStreamRSStreamConnection_cluster
2026-02-02T03:39:10.8470772Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-3124516284420493996
2026-02-02T03:39:10.8471337Z 2026/02/02 00:38:47 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T03:39:10.8471714Z 2026/02/02 00:41:47 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8472072Z 2026/02/02 00:42:47 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8472425Z 2026/02/02 00:42:57 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8472781Z 2026/02/02 00:43:58 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8473126Z 2026/02/02 00:44:08 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8473477Z 2026/02/02 00:45:08 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8473831Z 2026/02/02 00:45:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8474172Z 2026/02/02 00:46:19 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8474580Z 2026/02/02 00:46:29 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8474919Z 2026/02/02 00:47:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8475263Z 2026/02/02 00:47:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8475609Z 2026/02/02 00:48:40 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8475952Z 2026/02/02 00:48:50 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8476291Z 2026/02/02 00:49:51 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8476654Z 2026/02/02 00:50:01 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8476993Z 2026/02/02 00:51:01 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8477339Z 2026/02/02 00:51:12 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8477672Z 2026/02/02 00:52:12 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8478013Z 2026/02/02 00:52:22 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8478348Z 2026/02/02 00:53:23 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8478695Z 2026/02/02 00:53:33 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8479034Z 2026/02/02 00:54:33 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8479372Z 2026/02/02 00:54:43 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8479709Z 2026/02/02 00:55:44 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8480046Z 2026/02/02 00:55:54 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8480384Z 2026/02/02 00:56:54 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8480838Z 2026/02/02 00:57:04 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8481189Z 2026/02/02 00:58:05 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8481526Z 2026/02/02 00:58:15 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8481869Z 2026/02/02 00:59:15 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8482237Z 2026/02/02 00:59:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8482575Z 2026/02/02 01:00:26 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8482919Z 2026/02/02 01:00:36 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8483257Z 2026/02/02 01:01:37 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8483599Z 2026/02/02 01:01:47 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8483941Z 2026/02/02 01:02:47 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8484418Z 2026/02/02 01:02:57 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8484840Z 2026/02/02 01:03:58 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8485291Z 2026/02/02 01:04:08 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8485635Z 2026/02/02 01:05:08 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8485976Z 2026/02/02 01:05:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8486323Z 2026/02/02 01:06:19 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8486659Z 2026/02/02 01:06:29 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8487007Z 2026/02/02 01:07:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8487348Z 2026/02/02 01:07:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8487691Z 2026/02/02 01:08:40 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8488027Z 2026/02/02 01:08:50 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8488368Z 2026/02/02 01:09:51 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8488704Z 2026/02/02 01:10:01 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8489055Z 2026/02/02 01:11:01 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8489396Z 2026/02/02 01:11:12 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8489742Z 2026/02/02 01:12:12 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8490074Z 2026/02/02 01:12:22 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8490420Z 2026/02/02 01:13:22 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8490756Z 2026/02/02 01:13:33 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8491101Z 2026/02/02 01:14:33 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8491454Z 2026/02/02 01:14:43 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8491798Z 2026/02/02 01:15:44 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8492144Z 2026/02/02 01:15:54 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8492484Z 2026/02/02 01:16:54 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8492835Z 2026/02/02 01:17:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8493174Z 2026/02/02 01:18:05 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8493521Z 2026/02/02 01:18:15 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8493862Z 2026/02/02 01:19:16 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8494212Z 2026/02/02 01:19:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8494727Z 2026/02/02 01:20:26 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8495084Z 2026/02/02 01:20:37 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8495437Z 2026/02/02 01:21:37 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8495800Z 2026/02/02 01:21:47 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8496152Z 2026/02/02 01:22:48 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8496504Z 2026/02/02 01:22:58 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8496864Z 2026/02/02 01:23:58 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8497205Z 2026/02/02 01:24:08 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8497653Z 2026/02/02 01:25:09 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8497996Z 2026/02/02 01:25:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8498345Z 2026/02/02 01:26:19 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8498680Z 2026/02/02 01:26:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8499024Z 2026/02/02 01:27:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8499360Z 2026/02/02 01:27:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8499704Z 2026/02/02 01:28:41 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8500045Z 2026/02/02 01:28:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8500388Z 2026/02/02 01:29:51 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8500722Z 2026/02/02 01:30:01 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8501067Z 2026/02/02 01:31:02 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8501403Z 2026/02/02 01:31:12 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8501741Z 2026/02/02 01:32:12 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8502157Z 2026/02/02 01:32:23 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8502504Z 2026/02/02 01:33:23 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8502989Z 2026/02/02 01:33:33 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8503368Z 2026/02/02 01:34:34 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8503711Z 2026/02/02 01:34:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8504064Z 2026/02/02 01:35:44 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8504485Z 2026/02/02 01:35:54 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8504831Z 2026/02/02 01:36:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8505174Z 2026/02/02 01:37:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8505523Z 2026/02/02 01:38:05 [TRACE] Waiting 10s before next try
2026-02-02T03:39:10.8505863Z 2026/02/02 01:38:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:10.8506236Z 2026/02/02 01:38:47 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T03:39:10.8506661Z 2026/02/02 01:38:47 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T03:39:10.8507125Z     resource_stream_connection_migration_test.go:17: 
2026-02-02T03:39:10.8508010Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:39:10.8509686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:39:10.8511524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:327
2026-02-02T03:39:10.8513521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2026-02-02T03:39:10.8514424Z         	Error:      	Received unexpected error:
2026-02-02T03:39:10.8515290Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8515975Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2026-02-02T03:39:10.8516963Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3124516284420493996, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:10.8517701Z --- FAIL: TestMigStreamRSStreamConnection_cluster (3600.77s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 14 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 10 minutes
  - PASS 12 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 10 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 10 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 10 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 10 minutes
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
