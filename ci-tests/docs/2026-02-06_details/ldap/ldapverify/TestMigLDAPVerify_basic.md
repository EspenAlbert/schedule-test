# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 03:39](#error-2026-02-02t0339160000) |  | dev | timeout | 3604.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 16 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 14 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 14 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 14 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 15 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 14 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 14 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 20 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:16+00:00
```
2026-02-02T03:39:16.6176376Z === RUN   TestMigLDAPVerify_basic
2026-02-02T03:39:16.6177220Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-6935***107694407113
2026-02-02T03:39:16.6178176Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-6122085483111839555
2026-02-02T03:39:16.6178844Z 2026/02/02 00:38:33 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T03:39:16.6179349Z 2026/02/02 00:41:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6179955Z 2026/02/02 00:42:34 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6180420Z 2026/02/02 00:42:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6180868Z 2026/02/02 00:43:44 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6181323Z 2026/02/02 00:43:54 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6181768Z 2026/02/02 00:44:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6182213Z 2026/02/02 00:45:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6182653Z 2026/02/02 00:46:05 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6183094Z 2026/02/02 00:46:15 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6183537Z 2026/02/02 00:47:15 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6183974Z 2026/02/02 00:47:25 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6184416Z 2026/02/02 00:48:26 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6184862Z 2026/02/02 00:48:36 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6185572Z 2026/02/02 00:49:36 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6186023Z 2026/02/02 00:49:46 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6186466Z 2026/02/02 00:50:46 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6186912Z 2026/02/02 00:50:56 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6187354Z 2026/02/02 00:51:57 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6187788Z 2026/02/02 00:52:07 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6188246Z 2026/02/02 00:53:07 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6188684Z 2026/02/02 00:53:17 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6189122Z 2026/02/02 00:54:17 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6189560Z 2026/02/02 00:54:28 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6190005Z 2026/02/02 00:55:28 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6190451Z 2026/02/02 00:55:38 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6190894Z 2026/02/02 00:56:38 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6191330Z 2026/02/02 00:56:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6191770Z 2026/02/02 00:57:48 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6192206Z 2026/02/02 00:57:59 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6192647Z 2026/02/02 00:58:59 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6193085Z 2026/02/02 00:59:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6193536Z 2026/02/02 01:00:09 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6193977Z 2026/02/02 01:00:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6194417Z 2026/02/02 01:01:19 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6194854Z 2026/02/02 01:01:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6195492Z 2026/02/02 01:02:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6196084Z 2026/02/02 01:02:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6196535Z 2026/02/02 01:03:40 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6196975Z 2026/02/02 01:03:50 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6197418Z 2026/02/02 01:04:51 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6197859Z 2026/02/02 01:05:01 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6198297Z 2026/02/02 01:06:01 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6198731Z 2026/02/02 01:06:11 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6199181Z 2026/02/02 01:07:11 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6199620Z 2026/02/02 01:07:21 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6200063Z 2026/02/02 01:08:22 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6200505Z 2026/02/02 01:08:32 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6200951Z 2026/02/02 01:09:32 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6201398Z 2026/02/02 01:09:42 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6201955Z 2026/02/02 01:10:42 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6202400Z 2026/02/02 01:10:52 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6202841Z 2026/02/02 01:11:53 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6203277Z 2026/02/02 01:12:03 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6203717Z 2026/02/02 01:13:03 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6204330Z 2026/02/02 01:13:13 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6204783Z 2026/02/02 01:14:14 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6205389Z 2026/02/02 01:14:24 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6205841Z 2026/02/02 01:15:24 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6206284Z 2026/02/02 01:15:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6206728Z 2026/02/02 01:16:34 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6207168Z 2026/02/02 01:16:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6207616Z 2026/02/02 01:17:45 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6208057Z 2026/02/02 01:17:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6208496Z 2026/02/02 01:18:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6208936Z 2026/02/02 01:19:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6209378Z 2026/02/02 01:20:05 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6209818Z 2026/02/02 01:20:15 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6210268Z 2026/02/02 01:21:16 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6210714Z 2026/02/02 01:21:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6211152Z 2026/02/02 01:22:26 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6211588Z 2026/02/02 01:22:36 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6212033Z 2026/02/02 01:23:36 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6212479Z 2026/02/02 01:23:46 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6212925Z 2026/02/02 01:24:47 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6213364Z 2026/02/02 01:24:57 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6213801Z 2026/02/02 01:25:57 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6214239Z 2026/02/02 01:26:07 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6214683Z 2026/02/02 01:27:07 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6215285Z 2026/02/02 01:27:18 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6215735Z 2026/02/02 01:28:18 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6216181Z 2026/02/02 01:28:28 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6216621Z 2026/02/02 01:29:28 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6217058Z 2026/02/02 01:29:38 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6217501Z 2026/02/02 01:30:38 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6218076Z 2026/02/02 01:30:49 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6218521Z 2026/02/02 01:31:49 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6218958Z 2026/02/02 01:31:59 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6219398Z 2026/02/02 01:32:59 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6219842Z 2026/02/02 01:33:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6220283Z 2026/02/02 01:34:10 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6220795Z 2026/02/02 01:34:20 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6221272Z 2026/02/02 01:35:20 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6221713Z 2026/02/02 01:35:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6222155Z 2026/02/02 01:36:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6222594Z 2026/02/02 01:36:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6223034Z 2026/02/02 01:37:41 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6223475Z 2026/02/02 01:37:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6224066Z 2026/02/02 01:38:33 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T03:39:16.6224611Z 2026/02/02 01:38:33 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T03:39:16.6225420Z     resource_ldap_verify_migration_test.go:10: 
2026-02-02T03:39:16.6226546Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:39:16.6228510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:39:16.6230604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-02-02T03:39:16.6232846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2026-02-02T03:39:16.6233806Z         	Error:      	Received unexpected error:
2026-02-02T03:39:16.6234941Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:16.6235800Z         	Test:       	TestMigLDAPVerify_basic
2026-02-02T03:39:16.6237016Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6122085483111839555, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:16.6237855Z --- FAIL: TestMigLDAPVerify_basic (3604.01s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 11 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 12 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 13 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 11 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 14 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
