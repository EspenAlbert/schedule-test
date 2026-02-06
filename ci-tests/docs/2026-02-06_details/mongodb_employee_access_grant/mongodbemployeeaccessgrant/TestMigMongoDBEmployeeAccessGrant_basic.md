# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038280000) |  | dev | timeout | 3603.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 13 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 11 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 12 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 11 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 10 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 11 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 10 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 12 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 14 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:28+00:00
```
2026-02-02T00:38:28.0109026Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2026-02-02T00:38:28.0112663Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-4122215926743364950
2026-02-02T00:38:30.5646291Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-7952820201790398430
2026-02-02T00:38:31.1461103Z 2026/02/02 00:38:31 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T00:41:31.4156722Z 2026/02/02 00:41:31 [TRACE] Waiting 1m0s before next try
2026-02-02T00:42:31.6162999Z 2026/02/02 00:42:31 [TRACE] Waiting 10s before next try
2026-02-02T00:42:41.7362746Z 2026/02/02 00:42:41 [TRACE] Waiting 1m0s before next try
2026-02-02T00:43:41.9718500Z 2026/02/02 00:43:41 [TRACE] Waiting 10s before next try
2026-02-02T00:43:52.0911158Z 2026/02/02 00:43:52 [TRACE] Waiting 1m0s before next try
2026-02-02T00:44:52.2964978Z 2026/02/02 00:44:52 [TRACE] Waiting 10s before next try
2026-02-02T00:45:02.4139676Z 2026/02/02 00:45:02 [TRACE] Waiting 1m0s before next try
2026-02-02T00:46:02.6315420Z 2026/02/02 00:46:02 [TRACE] Waiting 10s before next try
2026-02-02T00:46:12.7452181Z 2026/02/02 00:46:12 [TRACE] Waiting 1m0s before next try
2026-02-02T00:47:12.9680287Z 2026/02/02 00:47:12 [TRACE] Waiting 10s before next try
2026-02-02T00:47:23.0781353Z 2026/02/02 00:47:23 [TRACE] Waiting 1m0s before next try
2026-02-02T00:48:23.3165884Z 2026/02/02 00:48:23 [TRACE] Waiting 10s before next try
2026-02-02T00:48:33.4243233Z 2026/02/02 00:48:33 [TRACE] Waiting 1m0s before next try
2026-02-02T00:49:33.6196260Z 2026/02/02 00:49:33 [TRACE] Waiting 10s before next try
2026-02-02T00:49:43.7803712Z 2026/02/02 00:49:43 [TRACE] Waiting 1m0s before next try
2026-02-02T00:50:44.0122201Z 2026/02/02 00:50:44 [TRACE] Waiting 10s before next try
2026-02-02T00:50:54.1312196Z 2026/02/02 00:50:54 [TRACE] Waiting 1m0s before next try
2026-02-02T00:51:54.3000450Z 2026/02/02 00:51:54 [TRACE] Waiting 10s before next try
2026-02-02T00:52:04.4248979Z 2026/02/02 00:52:04 [TRACE] Waiting 1m0s before next try
2026-02-02T00:53:04.7607284Z 2026/02/02 00:53:04 [TRACE] Waiting 10s before next try
2026-02-02T00:53:14.8743275Z 2026/02/02 00:53:14 [TRACE] Waiting 1m0s before next try
2026-02-02T00:54:15.0424587Z 2026/02/02 00:54:15 [TRACE] Waiting 10s before next try
2026-02-02T00:54:25.1464115Z 2026/02/02 00:54:25 [TRACE] Waiting 1m0s before next try
2026-02-02T00:55:25.3501235Z 2026/02/02 00:55:25 [TRACE] Waiting 10s before next try
2026-02-02T00:55:35.4679593Z 2026/02/02 00:55:35 [TRACE] Waiting 1m0s before next try
2026-02-02T00:56:35.6342648Z 2026/02/02 00:56:35 [TRACE] Waiting 10s before next try
2026-02-02T00:56:45.7552033Z 2026/02/02 00:56:45 [TRACE] Waiting 1m0s before next try
2026-02-02T00:57:45.8944934Z 2026/02/02 00:57:45 [TRACE] Waiting 10s before next try
2026-02-02T00:57:55.9932053Z 2026/02/02 00:57:55 [TRACE] Waiting 1m0s before next try
2026-02-02T00:58:56.1802108Z 2026/02/02 00:58:56 [TRACE] Waiting 10s before next try
2026-02-02T00:59:06.2968172Z 2026/02/02 00:59:06 [TRACE] Waiting 1m0s before next try
2026-02-02T01:00:06.4445352Z 2026/02/02 01:00:06 [TRACE] Waiting 10s before next try
2026-02-02T01:00:16.5754640Z 2026/02/02 01:00:16 [TRACE] Waiting 1m0s before next try
2026-02-02T01:01:16.7090381Z 2026/02/02 01:01:16 [TRACE] Waiting 10s before next try
2026-02-02T01:01:26.8269981Z 2026/02/02 01:01:26 [TRACE] Waiting 1m0s before next try
2026-02-02T01:02:27.0751159Z 2026/02/02 01:02:27 [TRACE] Waiting 10s before next try
2026-02-02T01:02:37.2299325Z 2026/02/02 01:02:37 [TRACE] Waiting 1m0s before next try
2026-02-02T01:03:37.3632513Z 2026/02/02 01:03:37 [TRACE] Waiting 10s before next try
2026-02-02T01:03:47.4946439Z 2026/02/02 01:03:47 [TRACE] Waiting 1m0s before next try
2026-02-02T01:04:47.7758783Z 2026/02/02 01:04:47 [TRACE] Waiting 10s before next try
2026-02-02T01:04:57.9125259Z 2026/02/02 01:04:57 [TRACE] Waiting 1m0s before next try
2026-02-02T01:05:58.0617657Z 2026/02/02 01:05:58 [TRACE] Waiting 10s before next try
2026-02-02T01:06:08.1888894Z 2026/02/02 01:06:08 [TRACE] Waiting 1m0s before next try
2026-02-02T01:07:08.4065356Z 2026/02/02 01:07:08 [TRACE] Waiting 10s before next try
2026-02-02T01:07:18.5205963Z 2026/02/02 01:07:18 [TRACE] Waiting 1m0s before next try
2026-02-02T01:08:18.7813699Z 2026/02/02 01:08:18 [TRACE] Waiting 10s before next try
2026-02-02T01:08:29.1524882Z 2026/02/02 01:08:29 [TRACE] Waiting 1m0s before next try
2026-02-02T01:09:29.4010783Z 2026/02/02 01:09:29 [TRACE] Waiting 10s before next try
2026-02-02T01:09:39.5083466Z 2026/02/02 01:09:39 [TRACE] Waiting 1m0s before next try
2026-02-02T01:10:39.7199462Z 2026/02/02 01:10:39 [TRACE] Waiting 10s before next try
2026-02-02T01:10:49.8368020Z 2026/02/02 01:10:49 [TRACE] Waiting 1m0s before next try
2026-02-02T01:11:50.1374005Z 2026/02/02 01:11:50 [TRACE] Waiting 10s before next try
2026-02-02T01:12:00.2559395Z 2026/02/02 01:12:00 [TRACE] Waiting 1m0s before next try
2026-02-02T01:13:00.4510803Z 2026/02/02 01:13:00 [TRACE] Waiting 10s before next try
2026-02-02T01:13:10.5760778Z 2026/02/02 01:13:10 [TRACE] Waiting 1m0s before next try
2026-02-02T01:14:10.7419957Z 2026/02/02 01:14:10 [TRACE] Waiting 10s before next try
2026-02-02T01:14:20.8636543Z 2026/02/02 01:14:20 [TRACE] Waiting 1m0s before next try
2026-02-02T01:15:21.0563576Z 2026/02/02 01:15:21 [TRACE] Waiting 10s before next try
2026-02-02T01:15:31.3328623Z 2026/02/02 01:15:31 [TRACE] Waiting 1m0s before next try
2026-02-02T01:16:31.5023863Z 2026/02/02 01:16:31 [TRACE] Waiting 10s before next try
2026-02-02T01:16:41.6145363Z 2026/02/02 01:16:41 [TRACE] Waiting 1m0s before next try
2026-02-02T01:17:41.7574272Z 2026/02/02 01:17:41 [TRACE] Waiting 10s before next try
2026-02-02T01:17:51.8740225Z 2026/02/02 01:17:51 [TRACE] Waiting 1m0s before next try
2026-02-02T01:18:52.1345615Z 2026/02/02 01:18:52 [TRACE] Waiting 10s before next try
2026-02-02T01:19:02.2609629Z 2026/02/02 01:19:02 [TRACE] Waiting 1m0s before next try
2026-02-02T01:20:02.4593511Z 2026/02/02 01:20:02 [TRACE] Waiting 10s before next try
2026-02-02T01:20:12.5993050Z 2026/02/02 01:20:12 [TRACE] Waiting 1m0s before next try
2026-02-02T01:21:12.7481281Z 2026/02/02 01:21:12 [TRACE] Waiting 10s before next try
2026-02-02T01:21:22.8717555Z 2026/02/02 01:21:22 [TRACE] Waiting 1m0s before next try
2026-02-02T01:22:23.2792615Z 2026/02/02 01:22:23 [TRACE] Waiting 10s before next try
2026-02-02T01:22:33.4218773Z 2026/02/02 01:22:33 [TRACE] Waiting 1m0s before next try
2026-02-02T01:23:33.6060597Z 2026/02/02 01:23:33 [TRACE] Waiting 10s before next try
2026-02-02T01:23:43.7221620Z 2026/02/02 01:23:43 [TRACE] Waiting 1m0s before next try
2026-02-02T01:24:43.9889222Z 2026/02/02 01:24:43 [TRACE] Waiting 10s before next try
2026-02-02T01:24:54.1150066Z 2026/02/02 01:24:54 [TRACE] Waiting 1m0s before next try
2026-02-02T01:25:54.2894686Z 2026/02/02 01:25:54 [TRACE] Waiting 10s before next try
2026-02-02T01:26:04.4269721Z 2026/02/02 01:26:04 [TRACE] Waiting 1m0s before next try
2026-02-02T01:27:04.6342498Z 2026/02/02 01:27:04 [TRACE] Waiting 10s before next try
2026-02-02T01:27:14.7542394Z 2026/02/02 01:27:14 [TRACE] Waiting 1m0s before next try
2026-02-02T01:28:14.9472151Z 2026/02/02 01:28:14 [TRACE] Waiting 10s before next try
2026-02-02T01:28:25.0666174Z 2026/02/02 01:28:25 [TRACE] Waiting 1m0s before next try
2026-02-02T01:29:25.2731640Z 2026/02/02 01:29:25 [TRACE] Waiting 10s before next try
2026-02-02T01:29:35.4019277Z 2026/02/02 01:29:35 [TRACE] Waiting 1m0s before next try
2026-02-02T01:30:35.6137377Z 2026/02/02 01:30:35 [TRACE] Waiting 10s before next try
2026-02-02T01:30:45.7232110Z 2026/02/02 01:30:45 [TRACE] Waiting 1m0s before next try
2026-02-02T01:31:45.9894849Z 2026/02/02 01:31:45 [TRACE] Waiting 10s before next try
2026-02-02T01:31:56.1060097Z 2026/02/02 01:31:56 [TRACE] Waiting 1m0s before next try
2026-02-02T01:32:56.3889713Z 2026/02/02 01:32:56 [TRACE] Waiting 10s before next try
2026-02-02T01:33:06.5135880Z 2026/02/02 01:33:06 [TRACE] Waiting 1m0s before next try
2026-02-02T01:34:06.7917337Z 2026/02/02 01:34:06 [TRACE] Waiting 10s before next try
2026-02-02T01:34:16.9082078Z 2026/02/02 01:34:16 [TRACE] Waiting 1m0s before next try
2026-02-02T01:35:17.0722763Z 2026/02/02 01:35:17 [TRACE] Waiting 10s before next try
2026-02-02T01:35:27.1987927Z 2026/02/02 01:35:27 [TRACE] Waiting 1m0s before next try
2026-02-02T01:36:27.4294815Z 2026/02/02 01:36:27 [TRACE] Waiting 10s before next try
2026-02-02T01:36:37.5333076Z 2026/02/02 01:36:37 [TRACE] Waiting 1m0s before next try
2026-02-02T01:37:37.7016227Z 2026/02/02 01:37:37 [TRACE] Waiting 10s before next try
2026-02-02T01:37:47.8303910Z 2026/02/02 01:37:47 [TRACE] Waiting 1m0s before next try
2026-02-02T01:38:31.1465971Z 2026/02/02 01:38:31 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T01:38:31.1466912Z 2026/02/02 01:38:31 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T01:38:31.1473579Z     resource_migration_test.go:11: 
2026-02-02T01:38:31.1477661Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T01:38:31.1484505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T01:38:31.1486980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-02-02T01:38:31.1489752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2026-02-02T01:38:31.1490757Z         	Error:      	Received unexpected error:
2026-02-02T01:38:31.1491865Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T01:38:31.1492625Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2026-02-02T01:38:31.1493966Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7952820201790398430, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T01:38:31.1494888Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (3603.14s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 15 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 minutes
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
