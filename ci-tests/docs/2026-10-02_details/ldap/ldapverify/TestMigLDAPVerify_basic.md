# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 23 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 02:05](#error-2026-09-11t0205120000) |  | dev | timeout | 3604.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 16 minutes
- 2026-09-03: MISSING
- 2026-09-04
  - PASS 25 minutes
  - PASS 16 minutes
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 17 minutes
  - PASS 17 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 17 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:05:12+00:00
```
2026-09-11T02:05:12.6207821Z === RUN   TestMigLDAPVerify_basic
2026-09-11T02:05:12.6209674Z     resource_ldap_verify_migration_test.go:10: Creating execution project (1): test-acc-tf-p-3574173754925920703
2026-09-11T02:05:12.6211446Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-7023297579289140486
2026-09-11T02:05:12.6212648Z 2026/09/11 00:41:44 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T02:05:12.6213557Z 2026/09/11 00:44:45 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6214404Z 2026/09/11 00:45:45 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6215322Z 2026/09/11 00:45:55 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6216198Z 2026/09/11 00:46:56 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6217143Z 2026/09/11 00:47:07 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6217995Z 2026/09/11 00:48:07 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6218863Z 2026/09/11 00:48:17 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6219989Z 2026/09/11 00:49:18 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6220862Z 2026/09/11 00:49:28 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6221690Z 2026/09/11 00:50:29 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6222623Z 2026/09/11 00:50:39 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6223478Z 2026/09/11 00:51:39 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6224321Z 2026/09/11 00:51:50 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6225169Z 2026/09/11 00:52:50 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6225986Z 2026/09/11 00:53:00 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6226974Z 2026/09/11 00:54:01 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6227835Z 2026/09/11 00:54:11 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6228699Z 2026/09/11 00:55:11 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6229555Z 2026/09/11 00:55:22 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6230419Z 2026/09/11 00:56:22 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6231314Z 2026/09/11 00:56:32 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6232101Z 2026/09/11 00:57:33 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6232954Z 2026/09/11 00:57:43 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6233811Z 2026/09/11 00:58:43 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6234612Z 2026/09/11 00:58:54 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6235488Z 2026/09/11 00:59:54 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6236329Z 2026/09/11 01:00:05 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6237681Z 2026/09/11 01:01:05 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6238594Z 2026/09/11 01:01:15 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6239472Z 2026/09/11 01:02:16 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6240462Z 2026/09/11 01:02:26 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6241329Z 2026/09/11 01:03:27 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6242193Z 2026/09/11 01:03:37 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6243011Z 2026/09/11 01:04:37 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6243894Z 2026/09/11 01:04:48 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6244730Z 2026/09/11 01:05:48 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6245532Z 2026/09/11 01:05:58 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6246440Z 2026/09/11 01:06:59 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6247356Z 2026/09/11 01:07:09 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6248223Z 2026/09/11 01:08:09 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6249102Z 2026/09/11 01:08:19 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6249866Z 2026/09/11 01:09:20 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6250804Z 2026/09/11 01:09:30 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6251689Z 2026/09/11 01:10:30 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6252478Z 2026/09/11 01:10:41 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6253363Z 2026/09/11 01:11:41 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6254231Z 2026/09/11 01:11:51 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6255040Z 2026/09/11 01:12:52 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6255881Z 2026/09/11 01:13:02 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6256860Z 2026/09/11 01:14:02 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6257675Z 2026/09/11 01:14:13 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6258566Z 2026/09/11 01:15:13 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6259421Z 2026/09/11 01:15:23 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6260276Z 2026/09/11 01:16:23 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6261149Z 2026/09/11 01:16:34 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6262135Z 2026/09/11 01:17:34 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6263008Z 2026/09/11 01:17:44 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6263854Z 2026/09/11 01:18:45 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6264631Z 2026/09/11 01:18:55 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6265540Z 2026/09/11 01:19:55 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6266409Z 2026/09/11 01:20:06 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6267473Z 2026/09/11 01:21:06 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6268336Z 2026/09/11 01:21:16 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6269186Z 2026/09/11 01:22:17 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6270040Z 2026/09/11 01:22:27 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6270863Z 2026/09/11 01:23:27 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6271760Z 2026/09/11 01:23:37 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6272617Z 2026/09/11 01:24:38 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6273456Z 2026/09/11 01:24:48 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6274339Z 2026/09/11 01:25:48 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6275154Z 2026/09/11 01:25:59 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6276005Z 2026/09/11 01:26:59 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6276947Z 2026/09/11 01:27:09 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6277803Z 2026/09/11 01:28:10 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6278639Z 2026/09/11 01:28:20 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6279441Z 2026/09/11 01:29:20 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6280321Z 2026/09/11 01:29:31 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6281181Z 2026/09/11 01:30:31 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6282146Z 2026/09/11 01:30:41 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6283025Z 2026/09/11 01:31:42 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6283902Z 2026/09/11 01:31:52 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6284723Z 2026/09/11 01:32:52 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6285558Z 2026/09/11 01:33:02 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6286461Z 2026/09/11 01:34:03 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6287392Z 2026/09/11 01:34:13 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6288267Z 2026/09/11 01:35:13 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6289152Z 2026/09/11 01:35:24 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6289963Z 2026/09/11 01:36:24 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6290892Z 2026/09/11 01:36:34 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6291746Z 2026/09/11 01:37:34 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6292591Z 2026/09/11 01:37:45 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6293491Z 2026/09/11 01:38:45 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6294315Z 2026/09/11 01:38:55 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6295133Z 2026/09/11 01:39:56 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6296015Z 2026/09/11 01:40:06 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6297143Z 2026/09/11 01:41:06 [TRACE] Waiting 10s before next try
2026-09-11T02:05:12.6297999Z 2026/09/11 01:41:16 [TRACE] Waiting 1m0s before next try
2026-09-11T02:05:12.6298927Z 2026/09/11 01:41:44 [WARN] WaitForState timeout after 1h0m0s
2026-09-11T02:05:12.6299879Z 2026/09/11 01:41:44 [WARN] WaitForState starting 30s refresh grace period
2026-09-11T02:05:12.6300877Z     resource_ldap_verify_migration_test.go:10: 
2026-09-11T02:05:12.6302800Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T02:05:12.6305755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T02:05:12.6308777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:179
2026-09-11T02:05:12.6311813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-09-11T02:05:12.6315004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2026-09-11T02:05:12.6317188Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-09-11T02:05:12.6318221Z         	Error:      	Received unexpected error:
2026-09-11T02:05:12.6320248Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T02:05:12.6321471Z         	Test:       	TestMigLDAPVerify_basic
2026-09-11T02:05:12.6322643Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7023297579289140486
2026-09-11T02:05:12.6323642Z --- FAIL: TestMigLDAPVerify_basic (3604.74s)
```

  - PASS 16 minutes
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 17 minutes
- 2026-09-15: MISSING
- 2026-09-16 PASS 17 minutes
- 2026-09-17: MISSING
- 2026-09-18 PASS 20 minutes
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 17 minutes
- 2026-09-22: MISSING
- 2026-09-23 PASS 16 minutes
- 2026-09-24: MISSING
- 2026-09-25 PASS 17 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 17 minutes
- 2026-09-29: MISSING
- 2026-09-30 PASS 16 minutes
- 2026-10-01: MISSING
- 2026-10-02 PASS 17 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 16 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 16 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 16 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 16 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 18 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 16 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
