# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 03:31](#error-2025-07-14t0331410000) |  | dev | timeout | 3603.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 11 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 11 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 11 minutes
- 2025-07-08 PASS 10 minutes
- 2025-07-09 PASS 10 minutes
- 2025-07-10
  - PASS 11 minutes
  - PASS 14 minutes
- 2025-07-11 PASS 11 minutes
- 2025-07-12 PASS 13 minutes
- 2025-07-13 PASS 14 minutes
- 2025-07-14

### Error 2025-07-14T03:31:41+00:00
```
2025-07-14T03:31:41.0087195Z === RUN   TestMigLDAPVerify_basic
2025-07-14T03:31:41.0087868Z     resource_ldap_verify_migration_test.go:10: Creating execution project: test-acc-tf-p-1295697923697029517
2025-07-14T03:31:41.0088732Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-5569590721822796609
2025-07-14T03:31:41.0089598Z 2025/07/14 00:30:58 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T03:31:41.0090051Z 2025/07/14 00:33:58 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0090485Z 2025/07/14 00:34:58 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0090904Z 2025/07/14 00:35:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0091317Z 2025/07/14 00:36:09 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0091726Z 2025/07/14 00:36:19 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0092141Z 2025/07/14 00:37:19 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0092705Z 2025/07/14 00:37:30 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0093125Z 2025/07/14 00:38:30 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0093533Z 2025/07/14 00:38:40 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0093938Z 2025/07/14 00:39:40 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0094344Z 2025/07/14 00:39:50 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0094747Z 2025/07/14 00:40:51 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0095171Z 2025/07/14 00:41:01 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0095576Z 2025/07/14 00:42:01 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0095975Z 2025/07/14 00:42:11 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0096379Z 2025/07/14 00:43:12 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0096779Z 2025/07/14 00:43:22 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0097182Z 2025/07/14 00:44:22 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0097595Z 2025/07/14 00:44:32 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0098028Z 2025/07/14 00:45:32 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0098458Z 2025/07/14 00:45:43 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0099245Z 2025/07/14 00:46:43 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0099691Z 2025/07/14 00:46:53 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0100133Z 2025/07/14 00:47:53 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0100540Z 2025/07/14 00:48:04 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0100950Z 2025/07/14 00:49:04 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0101352Z 2025/07/14 00:49:14 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0101756Z 2025/07/14 00:50:14 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0102160Z 2025/07/14 00:50:24 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0102565Z 2025/07/14 00:51:25 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0102973Z 2025/07/14 00:51:35 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0103377Z 2025/07/14 00:52:35 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0103782Z 2025/07/14 00:52:45 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0104195Z 2025/07/14 00:53:45 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0104602Z 2025/07/14 00:53:56 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0105011Z 2025/07/14 00:54:56 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0105417Z 2025/07/14 00:55:06 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0105822Z 2025/07/14 00:56:06 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0106229Z 2025/07/14 00:56:16 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0106633Z 2025/07/14 00:57:17 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0107036Z 2025/07/14 00:57:27 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0107441Z 2025/07/14 00:58:27 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0107848Z 2025/07/14 00:58:37 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0108254Z 2025/07/14 00:59:37 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0108658Z 2025/07/14 00:59:47 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0109272Z 2025/07/14 01:00:48 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0109685Z 2025/07/14 01:00:58 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0110091Z 2025/07/14 01:01:58 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0110493Z 2025/07/14 01:02:08 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0110899Z 2025/07/14 01:03:09 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0111300Z 2025/07/14 01:03:19 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0111703Z 2025/07/14 01:04:19 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0112104Z 2025/07/14 01:04:29 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0112509Z 2025/07/14 01:05:30 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0113050Z 2025/07/14 01:05:40 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0113467Z 2025/07/14 01:06:40 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0113872Z 2025/07/14 01:06:50 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0114283Z 2025/07/14 01:07:51 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0114684Z 2025/07/14 01:08:01 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0115088Z 2025/07/14 01:09:01 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0115489Z 2025/07/14 01:09:11 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0115898Z 2025/07/14 01:10:12 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0116301Z 2025/07/14 01:10:22 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0116706Z 2025/07/14 01:11:22 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0117111Z 2025/07/14 01:11:32 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0117515Z 2025/07/14 01:12:32 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0117922Z 2025/07/14 01:12:43 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0118327Z 2025/07/14 01:13:43 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0118739Z 2025/07/14 01:13:53 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0119460Z 2025/07/14 01:14:53 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0119864Z 2025/07/14 01:15:03 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0120275Z 2025/07/14 01:16:04 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0120675Z 2025/07/14 01:16:14 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0121079Z 2025/07/14 01:17:14 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0121482Z 2025/07/14 01:17:25 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0121888Z 2025/07/14 01:18:25 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0122284Z 2025/07/14 01:18:35 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0122694Z 2025/07/14 01:19:35 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0123107Z 2025/07/14 01:19:45 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0123514Z 2025/07/14 01:20:46 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0123918Z 2025/07/14 01:20:56 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0124330Z 2025/07/14 01:21:56 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0124744Z 2025/07/14 01:22:06 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0125151Z 2025/07/14 01:23:06 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0125553Z 2025/07/14 01:23:17 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0125959Z 2025/07/14 01:24:17 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0126368Z 2025/07/14 01:24:27 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0126780Z 2025/07/14 01:25:27 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0127185Z 2025/07/14 01:25:38 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0127594Z 2025/07/14 01:26:38 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0128005Z 2025/07/14 01:26:48 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0128422Z 2025/07/14 01:27:48 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0128827Z 2025/07/14 01:27:58 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0129473Z 2025/07/14 01:28:59 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0129904Z 2025/07/14 01:29:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0130419Z 2025/07/14 01:30:09 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0130830Z 2025/07/14 01:30:19 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0131266Z 2025/07/14 01:30:58 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T03:31:41.0131760Z 2025/07/14 01:30:58 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T03:31:41.0132281Z     resource_ldap_verify_migration_test.go:10: 
2025-07-14T03:31:41.0133298Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T03:31:41.0135220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T03:31:41.0137149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-07-14T03:31:41.0139483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2025-07-14T03:31:41.0140387Z         	Error:      	Received unexpected error:
2025-07-14T03:31:41.0141361Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:31:41.0141948Z         	Test:       	TestMigLDAPVerify_basic
2025-07-14T03:31:41.0143035Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5569590721822796609, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:31:41.0143795Z --- FAIL: TestMigLDAPVerify_basic (3603.42s)
```

- 2025-07-15 PASS 13 minutes
- 2025-07-16 PASS 12 minutes
- 2025-07-17 PASS 11 minutes
- 2025-07-18 PASS 13 minutes
- 2025-07-19 PASS 10 minutes
- 2025-07-20 PASS 11 minutes
- 2025-07-21 PASS 11 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 12 minutes
- 2025-07-25 PASS 13 minutes
- 2025-07-26 PASS 14 minutes
- 2025-07-27 PASS 13 minutes
- 2025-07-28 PASS 13 minutes
- 2025-07-29 PASS 11 minutes
- 2025-07-30 PASS 14 minutes
- 2025-07-31 PASS 18 minutes