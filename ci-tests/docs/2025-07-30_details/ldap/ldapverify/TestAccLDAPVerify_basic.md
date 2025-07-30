# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 03:31](#error-2025-07-14t0331410000) |  | dev | timeout | 3600.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-11 PASS 3 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13 PASS 3 minutes
- 2025-07-14

### Error 2025-07-14T03:31:41+00:00
```
2025-07-14T03:31:41.0144182Z === RUN   TestAccLDAPVerify_basic
2025-07-14T03:31:41.0144797Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-7449746691704694551
2025-07-14T03:31:41.0145507Z 2025/07/14 01:30:59 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T03:31:41.0145960Z 2025/07/14 01:33:59 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0146387Z 2025/07/14 01:34:59 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0146812Z 2025/07/14 01:35:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0153937Z 2025/07/14 01:36:09 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0154419Z 2025/07/14 01:36:20 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0154877Z 2025/07/14 01:37:20 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0155302Z 2025/07/14 01:37:30 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0155747Z 2025/07/14 01:38:30 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0156164Z 2025/07/14 01:38:41 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0156596Z 2025/07/14 01:39:41 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0157028Z 2025/07/14 01:39:51 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0157445Z 2025/07/14 01:40:51 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0157858Z 2025/07/14 01:41:01 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0158270Z 2025/07/14 01:42:02 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0158677Z 2025/07/14 01:42:12 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0159221Z 2025/07/14 01:43:12 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0159629Z 2025/07/14 01:43:22 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0160034Z 2025/07/14 01:44:22 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0160430Z 2025/07/14 01:44:33 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0160837Z 2025/07/14 01:45:33 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0161239Z 2025/07/14 01:45:43 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0161639Z 2025/07/14 01:46:43 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0162041Z 2025/07/14 01:46:53 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0162441Z 2025/07/14 01:47:54 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0162841Z 2025/07/14 01:48:04 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0163245Z 2025/07/14 01:49:04 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0163642Z 2025/07/14 01:49:14 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0164046Z 2025/07/14 01:50:15 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0164446Z 2025/07/14 01:50:25 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0164849Z 2025/07/14 01:51:25 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0165247Z 2025/07/14 01:51:35 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0165805Z 2025/07/14 01:52:36 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0166224Z 2025/07/14 01:52:46 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0166627Z 2025/07/14 01:53:46 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0167030Z 2025/07/14 01:53:56 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0167430Z 2025/07/14 01:54:57 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0167820Z 2025/07/14 01:55:07 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0168226Z 2025/07/14 01:56:07 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0168628Z 2025/07/14 01:56:17 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0169264Z 2025/07/14 01:57:17 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0169675Z 2025/07/14 01:57:28 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0170074Z 2025/07/14 01:58:28 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0170472Z 2025/07/14 01:58:38 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0170875Z 2025/07/14 01:59:38 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0171273Z 2025/07/14 01:59:48 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0171675Z 2025/07/14 02:00:49 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0172232Z 2025/07/14 02:00:59 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0172634Z 2025/07/14 02:01:59 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0173033Z 2025/07/14 02:02:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0173462Z 2025/07/14 02:03:10 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0173895Z 2025/07/14 02:03:20 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0174315Z 2025/07/14 02:04:20 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0174726Z 2025/07/14 02:04:30 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0175138Z 2025/07/14 02:05:30 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0175542Z 2025/07/14 02:05:41 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0175949Z 2025/07/14 02:06:41 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0176353Z 2025/07/14 02:06:51 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0176761Z 2025/07/14 02:07:51 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0177164Z 2025/07/14 02:08:01 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0177565Z 2025/07/14 02:09:02 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0177973Z 2025/07/14 02:09:12 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0178383Z 2025/07/14 02:10:12 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0178792Z 2025/07/14 02:10:22 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0179576Z 2025/07/14 02:11:23 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0180300Z 2025/07/14 02:11:33 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0181010Z 2025/07/14 02:12:33 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0181723Z 2025/07/14 02:12:43 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0182449Z 2025/07/14 02:13:43 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0183160Z 2025/07/14 02:13:54 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0183876Z 2025/07/14 02:14:54 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0184587Z 2025/07/14 02:15:04 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0185298Z 2025/07/14 02:16:04 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0185996Z 2025/07/14 02:16:15 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0186708Z 2025/07/14 02:17:15 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0187411Z 2025/07/14 02:17:25 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0188122Z 2025/07/14 02:18:25 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0188850Z 2025/07/14 02:18:36 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0189739Z 2025/07/14 02:19:36 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0190463Z 2025/07/14 02:19:46 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0191355Z 2025/07/14 02:20:46 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0192073Z 2025/07/14 02:20:57 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0192886Z 2025/07/14 02:21:57 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0193591Z 2025/07/14 02:22:07 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0194305Z 2025/07/14 02:23:07 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0195008Z 2025/07/14 02:23:17 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0195717Z 2025/07/14 02:24:18 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0196431Z 2025/07/14 02:24:28 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0197151Z 2025/07/14 02:25:28 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0197861Z 2025/07/14 02:25:38 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0198567Z 2025/07/14 02:26:39 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0199484Z 2025/07/14 02:26:49 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0200269Z 2025/07/14 02:27:49 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0200993Z 2025/07/14 02:27:59 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0201705Z 2025/07/14 02:28:59 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0202634Z 2025/07/14 02:29:10 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0203341Z 2025/07/14 02:30:10 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0204062Z 2025/07/14 02:30:20 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0204811Z 2025/07/14 02:30:59 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T03:31:41.0205653Z 2025/07/14 02:30:59 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T03:31:41.0206516Z     resource_ldap_verify_test.go:22: 
2025-07-14T03:31:41.0208267Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T03:31:41.0211736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T03:31:41.0215300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-07-14T03:31:41.0219082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2025-07-14T03:31:41.0220600Z         	Error:      	Received unexpected error:
2025-07-14T03:31:41.0222381Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:31:41.0223415Z         	Test:       	TestAccLDAPVerify_basic
2025-07-14T03:31:41.0225350Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7449746691704694551, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:31:41.0226677Z --- FAIL: TestAccLDAPVerify_basic (3600.87s)
```

- 2025-07-15 PASS 3 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 3 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20 PASS 3 minutes
- 2025-07-21 PASS 3 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes
- 2025-07-25 PASS 3 minutes
- 2025-07-26 PASS 3 minutes
- 2025-07-27 PASS 3 minutes
- 2025-07-28 PASS 3 minutes
- 2025-07-29 PASS 3 minutes
- 2025-07-30 PASS 3 minutes