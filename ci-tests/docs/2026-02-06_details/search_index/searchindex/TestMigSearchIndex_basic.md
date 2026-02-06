# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038290000) |  | dev | timeout | 3602.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 15 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 13 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 14 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 13 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 12 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 13 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 13 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 13 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 16 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:29+00:00
```
2026-02-02T00:38:29.8849019Z === RUN   TestMigSearchIndex_basic
2026-02-02T00:38:29.8850442Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-1208345738574514350
2026-02-02T00:38:32.1985659Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-1776489934841574511
2026-02-02T00:38:32.8181368Z 2026/02/02 00:38:32 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T00:41:33.0367593Z 2026/02/02 00:41:33 [TRACE] Waiting 1m0s before next try
2026-02-02T00:42:33.2963896Z 2026/02/02 00:42:33 [TRACE] Waiting 10s before next try
2026-02-02T00:42:43.4114370Z 2026/02/02 00:42:43 [TRACE] Waiting 1m0s before next try
2026-02-02T00:43:43.6905294Z 2026/02/02 00:43:43 [TRACE] Waiting 10s before next try
2026-02-02T00:43:53.8256386Z 2026/02/02 00:43:53 [TRACE] Waiting 1m0s before next try
2026-02-02T00:44:54.0098301Z 2026/02/02 00:44:54 [TRACE] Waiting 10s before next try
2026-02-02T00:45:04.1365724Z 2026/02/02 00:45:04 [TRACE] Waiting 1m0s before next try
2026-02-02T00:46:04.3158279Z 2026/02/02 00:46:04 [TRACE] Waiting 10s before next try
2026-02-02T00:46:14.4348805Z 2026/02/02 00:46:14 [TRACE] Waiting 1m0s before next try
2026-02-02T00:47:14.6849348Z 2026/02/02 00:47:14 [TRACE] Waiting 10s before next try
2026-02-02T00:47:24.8021280Z 2026/02/02 00:47:24 [TRACE] Waiting 1m0s before next try
2026-02-02T00:48:24.9938727Z 2026/02/02 00:48:24 [TRACE] Waiting 10s before next try
2026-02-02T00:48:35.1238793Z 2026/02/02 00:48:35 [TRACE] Waiting 1m0s before next try
2026-02-02T00:49:35.3766572Z 2026/02/02 00:49:35 [TRACE] Waiting 10s before next try
2026-02-02T00:49:45.5216413Z 2026/02/02 00:49:45 [TRACE] Waiting 1m0s before next try
2026-02-02T00:50:45.6807836Z 2026/02/02 00:50:45 [TRACE] Waiting 10s before next try
2026-02-02T00:50:55.7925673Z 2026/02/02 00:50:55 [TRACE] Waiting 1m0s before next try
2026-02-02T00:51:56.0122789Z 2026/02/02 00:51:56 [TRACE] Waiting 10s before next try
2026-02-02T00:52:06.1420443Z 2026/02/02 00:52:06 [TRACE] Waiting 1m0s before next try
2026-02-02T00:53:06.3599065Z 2026/02/02 00:53:06 [TRACE] Waiting 10s before next try
2026-02-02T00:53:16.4814046Z 2026/02/02 00:53:16 [TRACE] Waiting 1m0s before next try
2026-02-02T00:54:16.6918865Z 2026/02/02 00:54:16 [TRACE] Waiting 10s before next try
2026-02-02T00:54:26.8085641Z 2026/02/02 00:54:26 [TRACE] Waiting 1m0s before next try
2026-02-02T00:55:26.9752327Z 2026/02/02 00:55:26 [TRACE] Waiting 10s before next try
2026-02-02T00:55:37.0800525Z 2026/02/02 00:55:37 [TRACE] Waiting 1m0s before next try
2026-02-02T00:56:37.2664758Z 2026/02/02 00:56:37 [TRACE] Waiting 10s before next try
2026-02-02T00:56:47.3922899Z 2026/02/02 00:56:47 [TRACE] Waiting 1m0s before next try
2026-02-02T00:57:47.6141135Z 2026/02/02 00:57:47 [TRACE] Waiting 10s before next try
2026-02-02T00:57:57.7340894Z 2026/02/02 00:57:57 [TRACE] Waiting 1m0s before next try
2026-02-02T00:58:57.9213502Z 2026/02/02 00:58:57 [TRACE] Waiting 10s before next try
2026-02-02T00:59:08.0603046Z 2026/02/02 00:59:08 [TRACE] Waiting 1m0s before next try
2026-02-02T01:00:08.2783469Z 2026/02/02 01:00:08 [TRACE] Waiting 10s before next try
2026-02-02T01:00:18.4108689Z 2026/02/02 01:00:18 [TRACE] Waiting 1m0s before next try
2026-02-02T01:01:18.5806686Z 2026/02/02 01:01:18 [TRACE] Waiting 10s before next try
2026-02-02T01:01:28.7086571Z 2026/02/02 01:01:28 [TRACE] Waiting 1m0s before next try
2026-02-02T01:02:28.8660526Z 2026/02/02 01:02:28 [TRACE] Waiting 10s before next try
2026-02-02T01:02:38.9853213Z 2026/02/02 01:02:38 [TRACE] Waiting 1m0s before next try
2026-02-02T01:03:39.1629442Z 2026/02/02 01:03:39 [TRACE] Waiting 10s before next try
2026-02-02T01:03:49.2762799Z 2026/02/02 01:03:49 [TRACE] Waiting 1m0s before next try
2026-02-02T01:04:49.4403459Z 2026/02/02 01:04:49 [TRACE] Waiting 10s before next try
2026-02-02T01:04:59.5732175Z 2026/02/02 01:04:59 [TRACE] Waiting 1m0s before next try
2026-02-02T01:05:59.7644817Z 2026/02/02 01:05:59 [TRACE] Waiting 10s before next try
2026-02-02T01:06:09.8948735Z 2026/02/02 01:06:09 [TRACE] Waiting 1m0s before next try
2026-02-02T01:07:10.0850657Z 2026/02/02 01:07:10 [TRACE] Waiting 10s before next try
2026-02-02T01:07:20.2226488Z 2026/02/02 01:07:20 [TRACE] Waiting 1m0s before next try
2026-02-02T01:08:20.4807527Z 2026/02/02 01:08:20 [TRACE] Waiting 10s before next try
2026-02-02T01:08:30.6096076Z 2026/02/02 01:08:30 [TRACE] Waiting 1m0s before next try
2026-02-02T01:09:30.9122985Z 2026/02/02 01:09:30 [TRACE] Waiting 10s before next try
2026-02-02T01:09:41.0757759Z 2026/02/02 01:09:41 [TRACE] Waiting 1m0s before next try
2026-02-02T01:10:41.3241419Z 2026/02/02 01:10:41 [TRACE] Waiting 10s before next try
2026-02-02T01:10:51.4519060Z 2026/02/02 01:10:51 [TRACE] Waiting 1m0s before next try
2026-02-02T01:11:51.6439572Z 2026/02/02 01:11:51 [TRACE] Waiting 10s before next try
2026-02-02T01:12:01.8094489Z 2026/02/02 01:12:01 [TRACE] Waiting 1m0s before next try
2026-02-02T01:13:01.9717788Z 2026/02/02 01:13:01 [TRACE] Waiting 10s before next try
2026-02-02T01:13:12.0820372Z 2026/02/02 01:13:12 [TRACE] Waiting 1m0s before next try
2026-02-02T01:14:12.3183841Z 2026/02/02 01:14:12 [TRACE] Waiting 10s before next try
2026-02-02T01:14:22.4359417Z 2026/02/02 01:14:22 [TRACE] Waiting 1m0s before next try
2026-02-02T01:15:22.6909817Z 2026/02/02 01:15:22 [TRACE] Waiting 10s before next try
2026-02-02T01:15:32.8355084Z 2026/02/02 01:15:32 [TRACE] Waiting 1m0s before next try
2026-02-02T01:16:33.1245045Z 2026/02/02 01:16:33 [TRACE] Waiting 10s before next try
2026-02-02T01:16:43.2529115Z 2026/02/02 01:16:43 [TRACE] Waiting 1m0s before next try
2026-02-02T01:17:43.4264456Z 2026/02/02 01:17:43 [TRACE] Waiting 10s before next try
2026-02-02T01:17:53.5819965Z 2026/02/02 01:17:53 [TRACE] Waiting 1m0s before next try
2026-02-02T01:18:53.7657340Z 2026/02/02 01:18:53 [TRACE] Waiting 10s before next try
2026-02-02T01:19:03.9033328Z 2026/02/02 01:19:03 [TRACE] Waiting 1m0s before next try
2026-02-02T01:20:04.1073279Z 2026/02/02 01:20:04 [TRACE] Waiting 10s before next try
2026-02-02T01:20:14.2511731Z 2026/02/02 01:20:14 [TRACE] Waiting 1m0s before next try
2026-02-02T01:21:14.4750722Z 2026/02/02 01:21:14 [TRACE] Waiting 10s before next try
2026-02-02T01:21:24.6002679Z 2026/02/02 01:21:24 [TRACE] Waiting 1m0s before next try
2026-02-02T01:22:24.7636893Z 2026/02/02 01:22:24 [TRACE] Waiting 10s before next try
2026-02-02T01:22:34.8940744Z 2026/02/02 01:22:34 [TRACE] Waiting 1m0s before next try
2026-02-02T01:23:35.1787303Z 2026/02/02 01:23:35 [TRACE] Waiting 10s before next try
2026-02-02T01:23:45.3329985Z 2026/02/02 01:23:45 [TRACE] Waiting 1m0s before next try
2026-02-02T01:24:45.4793486Z 2026/02/02 01:24:45 [TRACE] Waiting 10s before next try
2026-02-02T01:24:55.6157307Z 2026/02/02 01:24:55 [TRACE] Waiting 1m0s before next try
2026-02-02T01:25:55.8021148Z 2026/02/02 01:25:55 [TRACE] Waiting 10s before next try
2026-02-02T01:26:05.9281555Z 2026/02/02 01:26:05 [TRACE] Waiting 1m0s before next try
2026-02-02T01:27:06.1567248Z 2026/02/02 01:27:06 [TRACE] Waiting 10s before next try
2026-02-02T01:27:16.2754440Z 2026/02/02 01:27:16 [TRACE] Waiting 1m0s before next try
2026-02-02T01:28:16.4270495Z 2026/02/02 01:28:16 [TRACE] Waiting 10s before next try
2026-02-02T01:28:26.5497931Z 2026/02/02 01:28:26 [TRACE] Waiting 1m0s before next try
2026-02-02T01:29:26.7729771Z 2026/02/02 01:29:26 [TRACE] Waiting 10s before next try
2026-02-02T01:29:36.9013667Z 2026/02/02 01:29:36 [TRACE] Waiting 1m0s before next try
2026-02-02T01:30:37.0783157Z 2026/02/02 01:30:37 [TRACE] Waiting 10s before next try
2026-02-02T01:30:47.2078658Z 2026/02/02 01:30:47 [TRACE] Waiting 1m0s before next try
2026-02-02T01:31:47.5135506Z 2026/02/02 01:31:47 [TRACE] Waiting 10s before next try
2026-02-02T01:31:57.6356089Z 2026/02/02 01:31:57 [TRACE] Waiting 1m0s before next try
2026-02-02T01:32:57.7956168Z 2026/02/02 01:32:57 [TRACE] Waiting 10s before next try
2026-02-02T01:33:07.9225603Z 2026/02/02 01:33:07 [TRACE] Waiting 1m0s before next try
2026-02-02T01:34:08.0844364Z 2026/02/02 01:34:08 [TRACE] Waiting 10s before next try
2026-02-02T01:34:18.2204748Z 2026/02/02 01:34:18 [TRACE] Waiting 1m0s before next try
2026-02-02T01:35:18.4495273Z 2026/02/02 01:35:18 [TRACE] Waiting 10s before next try
2026-02-02T01:35:28.5848023Z 2026/02/02 01:35:28 [TRACE] Waiting 1m0s before next try
2026-02-02T01:36:28.8226406Z 2026/02/02 01:36:28 [TRACE] Waiting 10s before next try
2026-02-02T01:36:38.9575329Z 2026/02/02 01:36:38 [TRACE] Waiting 1m0s before next try
2026-02-02T01:37:39.1564389Z 2026/02/02 01:37:39 [TRACE] Waiting 10s before next try
2026-02-02T01:37:49.2843775Z 2026/02/02 01:37:49 [TRACE] Waiting 1m0s before next try
2026-02-02T01:38:32.8183408Z 2026/02/02 01:38:32 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T01:38:32.8187718Z 2026/02/02 01:38:32 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T01:38:32.8188891Z     resource_search_index_migration_test.go:11: 
2026-02-02T01:38:32.8191142Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T01:38:32.8204224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T01:38:32.8207637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-02-02T01:38:32.8211433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-02-02T01:38:32.8212917Z         	Error:      	Received unexpected error:
2026-02-02T01:38:32.8214586Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T01:38:32.8215550Z         	Test:       	TestMigSearchIndex_basic
2026-02-02T01:38:32.8217382Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1776489934841574511, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T01:38:32.8218607Z --- FAIL: TestMigSearchIndex_basic (3602.93s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 16 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 12 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 11 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 11 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 13 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
