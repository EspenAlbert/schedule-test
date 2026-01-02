# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-05 to 2026-01-02 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 02:18](#error-2025-12-05t0218570000) |  | dev | timeout | 3604.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05

### Error 2025-12-05T02:18:57+00:00
```
2025-12-05T02:18:57.7778146Z === RUN   TestMigLDAPVerify_basic
2025-12-05T02:18:57.7780122Z     resource_ldap_verify_migration_test.go:10: Creating execution project: test-acc-tf-p-3393318907586692276
2025-12-05T02:18:57.7783174Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-345586934329778982
2025-12-05T02:18:57.7784372Z 2025/12/05 00:30:36 [DEBUG] Waiting for state to become: [IDLE]
2025-12-05T02:18:57.7785209Z 2025/12/05 00:33:37 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7786048Z 2025/12/05 00:34:37 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7786804Z 2025/12/05 00:34:47 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7787578Z 2025/12/05 00:35:47 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7788438Z 2025/12/05 00:35:58 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7789563Z 2025/12/05 00:36:58 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7790472Z 2025/12/05 00:37:08 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7791411Z 2025/12/05 00:38:08 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7792237Z 2025/12/05 00:38:19 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7793157Z 2025/12/05 00:39:19 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7793968Z 2025/12/05 00:39:29 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7794758Z 2025/12/05 00:40:29 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7795534Z 2025/12/05 00:40:40 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7796369Z 2025/12/05 00:41:40 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7797159Z 2025/12/05 00:41:50 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7797933Z 2025/12/05 00:42:50 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7798683Z 2025/12/05 00:43:01 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7799667Z 2025/12/05 00:44:01 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7800438Z 2025/12/05 00:44:11 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7801209Z 2025/12/05 00:45:11 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7801969Z 2025/12/05 00:45:21 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7802729Z 2025/12/05 00:46:22 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7803515Z 2025/12/05 00:46:33 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7804270Z 2025/12/05 00:47:33 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7805030Z 2025/12/05 00:47:44 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7805813Z 2025/12/05 00:48:44 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7806561Z 2025/12/05 00:48:54 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7807160Z 2025/12/05 00:49:54 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7807611Z 2025/12/05 00:50:04 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7808341Z 2025/12/05 00:51:05 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7808760Z 2025/12/05 00:51:15 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7809503Z 2025/12/05 00:52:15 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7809923Z 2025/12/05 00:52:25 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7810331Z 2025/12/05 00:53:26 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7810919Z 2025/12/05 00:53:36 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7811341Z 2025/12/05 00:54:36 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7811752Z 2025/12/05 00:54:46 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7812166Z 2025/12/05 00:55:47 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7812573Z 2025/12/05 00:55:57 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7812979Z 2025/12/05 00:56:57 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7813382Z 2025/12/05 00:57:07 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7813798Z 2025/12/05 00:58:08 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7814201Z 2025/12/05 00:58:18 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7814604Z 2025/12/05 00:59:18 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7815008Z 2025/12/05 00:59:28 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7815418Z 2025/12/05 01:00:29 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7815827Z 2025/12/05 01:00:39 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7816232Z 2025/12/05 01:01:39 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7816635Z 2025/12/05 01:01:49 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7817038Z 2025/12/05 01:02:49 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7817449Z 2025/12/05 01:03:00 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7817856Z 2025/12/05 01:04:00 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7818264Z 2025/12/05 01:04:10 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7818671Z 2025/12/05 01:05:10 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7819280Z 2025/12/05 01:05:21 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7819703Z 2025/12/05 01:06:21 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7820113Z 2025/12/05 01:06:31 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7820655Z 2025/12/05 01:07:31 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7821070Z 2025/12/05 01:07:41 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7821599Z 2025/12/05 01:08:42 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7822064Z 2025/12/05 01:08:52 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7822525Z 2025/12/05 01:09:52 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7823044Z 2025/12/05 01:10:02 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7823463Z 2025/12/05 01:11:03 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7823982Z 2025/12/05 01:11:13 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7824395Z 2025/12/05 01:12:13 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7824911Z 2025/12/05 01:12:23 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7825417Z 2025/12/05 01:13:24 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7825833Z 2025/12/05 01:13:34 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7826349Z 2025/12/05 01:14:34 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7826768Z 2025/12/05 01:14:44 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7827283Z 2025/12/05 01:15:44 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7827717Z 2025/12/05 01:15:55 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7828206Z 2025/12/05 01:16:55 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7828706Z 2025/12/05 01:17:05 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7829339Z 2025/12/05 01:18:05 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7830018Z 2025/12/05 01:18:15 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7830430Z 2025/12/05 01:19:16 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7830943Z 2025/12/05 01:19:26 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7831395Z 2025/12/05 01:20:26 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7831872Z 2025/12/05 01:20:36 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7832380Z 2025/12/05 01:21:37 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7832912Z 2025/12/05 01:21:47 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7833449Z 2025/12/05 01:22:47 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7833925Z 2025/12/05 01:22:57 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7834368Z 2025/12/05 01:23:58 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7834888Z 2025/12/05 01:24:08 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7835308Z 2025/12/05 01:25:08 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7835832Z 2025/12/05 01:25:18 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7836251Z 2025/12/05 01:26:18 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7836757Z 2025/12/05 01:26:29 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7837266Z 2025/12/05 01:27:29 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7837677Z 2025/12/05 01:27:39 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7838192Z 2025/12/05 01:28:39 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7838608Z 2025/12/05 01:28:50 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7839247Z 2025/12/05 01:29:50 [TRACE] Waiting 10s before next try
2025-12-05T02:18:57.7839768Z 2025/12/05 01:30:00 [TRACE] Waiting 1m0s before next try
2025-12-05T02:18:57.7840212Z 2025/12/05 01:30:36 [WARN] WaitForState timeout after 1h0m0s
2025-12-05T02:18:57.7840842Z 2025/12/05 01:30:36 [WARN] WaitForState starting 30s refresh grace period
2025-12-05T02:18:57.7841480Z     resource_ldap_verify_migration_test.go:10: 
2025-12-05T02:18:57.7843075Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-12-05T02:18:57.7846008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:137
2025-12-05T02:18:57.7849661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-12-05T02:18:57.7851928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2025-12-05T02:18:57.7852863Z         	Error:      	Received unexpected error:
2025-12-05T02:18:57.7853860Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:18:57.7854469Z         	Test:       	TestMigLDAPVerify_basic
2025-12-05T02:18:57.7855576Z         	Messages:   	Cluster creation failed: test-acc-tf-c-345586934329778982, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:18:57.7856359Z --- FAIL: TestMigLDAPVerify_basic (3604.05s)
```

- 2025-12-06: MISSING
- 2025-12-07: MISSING
- 2025-12-08 PASS 14 minutes
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 14 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 13 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 14 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 15 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 14 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 15 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 14 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 13 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 13 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 12 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 11 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
