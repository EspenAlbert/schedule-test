# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 19 TestRuns in dev, qa from 2025-12-05 to 2026-01-02 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 02:17](#error-2025-12-05t0217270000) |  | dev | timeout | 3600.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05
  - FAIL an hour

### Error 2025-12-05T02:17:27+00:00
```
2025-12-05T02:17:27.7749522Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-12-05T02:17:27.7750231Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-2840534044693567184
2025-12-05T02:17:27.7750850Z 2025/12/05 00:30:43 [DEBUG] Waiting for state to become: [IDLE]
2025-12-05T02:17:27.7751260Z 2025/12/05 00:33:43 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7751635Z 2025/12/05 00:34:43 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7752012Z 2025/12/05 00:34:53 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7752383Z 2025/12/05 00:35:54 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7752750Z 2025/12/05 00:36:04 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7753136Z 2025/12/05 00:37:04 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7753521Z 2025/12/05 00:37:14 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7753896Z 2025/12/05 00:38:14 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7754266Z 2025/12/05 00:38:24 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7754639Z 2025/12/05 00:39:24 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7755219Z 2025/12/05 00:39:34 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7755592Z 2025/12/05 00:40:35 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7755953Z 2025/12/05 00:40:45 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7756320Z 2025/12/05 00:41:45 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7756692Z 2025/12/05 00:41:55 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7757060Z 2025/12/05 00:42:55 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7757428Z 2025/12/05 00:43:05 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7757781Z 2025/12/05 00:44:05 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7758397Z 2025/12/05 00:44:16 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7758744Z 2025/12/05 00:45:16 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7759115Z 2025/12/05 00:45:26 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7759475Z 2025/12/05 00:46:26 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7759836Z 2025/12/05 00:46:36 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7760347Z 2025/12/05 00:47:36 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7760705Z 2025/12/05 00:47:46 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7761045Z 2025/12/05 00:48:47 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7761390Z 2025/12/05 00:48:57 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7761729Z 2025/12/05 00:49:57 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7762078Z 2025/12/05 00:50:07 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7762423Z 2025/12/05 00:51:07 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7762774Z 2025/12/05 00:51:17 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7763120Z 2025/12/05 00:52:17 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7763462Z 2025/12/05 00:52:28 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7763806Z 2025/12/05 00:53:28 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7764148Z 2025/12/05 00:53:38 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7764497Z 2025/12/05 00:54:38 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7765101Z 2025/12/05 00:54:48 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7765454Z 2025/12/05 00:55:48 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7765796Z 2025/12/05 00:55:58 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7766156Z 2025/12/05 00:56:59 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7766495Z 2025/12/05 00:57:09 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7766840Z 2025/12/05 00:58:09 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7767184Z 2025/12/05 00:58:19 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7767528Z 2025/12/05 00:59:19 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7767870Z 2025/12/05 00:59:29 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7768214Z 2025/12/05 01:00:29 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7768560Z 2025/12/05 01:00:39 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7768905Z 2025/12/05 01:01:40 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7769249Z 2025/12/05 01:01:50 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7769591Z 2025/12/05 01:02:50 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7769938Z 2025/12/05 01:03:00 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7770278Z 2025/12/05 01:04:00 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7770623Z 2025/12/05 01:04:10 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7770965Z 2025/12/05 01:05:10 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7771314Z 2025/12/05 01:05:21 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7771655Z 2025/12/05 01:06:21 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7772001Z 2025/12/05 01:06:31 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7772345Z 2025/12/05 01:07:31 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7772690Z 2025/12/05 01:07:41 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7773032Z 2025/12/05 01:08:41 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7773441Z 2025/12/05 01:08:51 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7773787Z 2025/12/05 01:09:52 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7774126Z 2025/12/05 01:10:02 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7774469Z 2025/12/05 01:11:02 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7775126Z 2025/12/05 01:11:12 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7775485Z 2025/12/05 01:12:12 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7775982Z 2025/12/05 01:12:22 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7776331Z 2025/12/05 01:13:23 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7776679Z 2025/12/05 01:13:33 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7777023Z 2025/12/05 01:14:33 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7777362Z 2025/12/05 01:14:43 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7777815Z 2025/12/05 01:15:43 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7778158Z 2025/12/05 01:15:53 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7778504Z 2025/12/05 01:16:53 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7778850Z 2025/12/05 01:17:03 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7779190Z 2025/12/05 01:18:04 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7779535Z 2025/12/05 01:18:14 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7779875Z 2025/12/05 01:19:14 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7780262Z 2025/12/05 01:19:24 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7780601Z 2025/12/05 01:20:24 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7780947Z 2025/12/05 01:20:34 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7781289Z 2025/12/05 01:21:34 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7781648Z 2025/12/05 01:21:44 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7781990Z 2025/12/05 01:22:45 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7782335Z 2025/12/05 01:22:55 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7782678Z 2025/12/05 01:23:55 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7783024Z 2025/12/05 01:24:05 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7783371Z 2025/12/05 01:25:05 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7783714Z 2025/12/05 01:25:15 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7784060Z 2025/12/05 01:26:15 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7784434Z 2025/12/05 01:26:25 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7785017Z 2025/12/05 01:27:26 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7785364Z 2025/12/05 01:27:36 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7785708Z 2025/12/05 01:28:36 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7786074Z 2025/12/05 01:28:46 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7786431Z 2025/12/05 01:29:46 [TRACE] Waiting 10s before next try
2025-12-05T02:17:27.7786774Z 2025/12/05 01:29:56 [TRACE] Waiting 1m0s before next try
2025-12-05T02:17:27.7787151Z 2025/12/05 01:30:43 [WARN] WaitForState timeout after 1h0m0s
2025-12-05T02:17:27.7787572Z 2025/12/05 01:30:43 [WARN] WaitForState starting 30s refresh grace period
2025-12-05T02:17:27.7788078Z     resource_stream_connection_migration_test.go:17: 
2025-12-05T02:17:27.7789036Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-12-05T02:17:27.7790745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:137
2025-12-05T02:17:27.7801451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:326
2025-12-05T02:17:27.7803652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2025-12-05T02:17:27.7804535Z         	Error:      	Received unexpected error:
2025-12-05T02:17:27.7805664Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:17:27.7806273Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2025-12-05T02:17:27.7807321Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2840534044693567184, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:17:27.7808243Z --- FAIL: TestMigStreamRSStreamConnection_cluster (3600.60s)
```

  - PASS 8 minutes
- 2025-12-06: MISSING
- 2025-12-07: MISSING
- 2025-12-08 PASS 11 minutes
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 10 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 10 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 12 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 12 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 11 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 11 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 11 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 10 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 9 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 10 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
