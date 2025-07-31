# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 03:31](#error-2025-07-14t0331410000) |  | dev | timeout | 3600.07s

## Timeline
- 2025-07-01: MISSING
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
2025-07-14T03:31:41.0227398Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-07-14T03:31:41.0228592Z     resource_ldap_verify_test.go:32: Creating execution cluster: test-acc-tf-c-4443754092314994410
2025-07-14T03:31:41.0229760Z 2025/07/14 02:30:59 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T03:31:41.0230535Z 2025/07/14 02:33:59 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0231265Z 2025/07/14 02:35:00 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0231980Z 2025/07/14 02:35:10 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0232701Z 2025/07/14 02:36:10 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0233414Z 2025/07/14 02:36:20 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0234130Z 2025/07/14 02:37:21 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0234830Z 2025/07/14 02:37:31 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0235546Z 2025/07/14 02:38:31 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0236472Z 2025/07/14 02:38:41 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0237224Z 2025/07/14 02:39:41 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0237940Z 2025/07/14 02:39:52 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0238662Z 2025/07/14 02:40:52 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0239529Z 2025/07/14 02:41:02 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0240255Z 2025/07/14 02:42:02 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0240960Z 2025/07/14 02:42:12 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0241672Z 2025/07/14 02:43:13 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0242375Z 2025/07/14 02:43:23 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0243090Z 2025/07/14 02:44:23 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0243792Z 2025/07/14 02:44:33 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0244508Z 2025/07/14 02:45:33 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0245236Z 2025/07/14 02:45:44 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0245940Z 2025/07/14 02:46:44 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0246641Z 2025/07/14 02:46:54 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0247539Z 2025/07/14 02:47:54 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0248244Z 2025/07/14 02:48:04 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0249114Z 2025/07/14 02:49:05 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0249828Z 2025/07/14 02:49:15 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0250546Z 2025/07/14 02:50:15 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0251245Z 2025/07/14 02:50:25 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0251955Z 2025/07/14 02:51:25 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0252658Z 2025/07/14 02:51:36 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0253369Z 2025/07/14 02:52:36 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0254076Z 2025/07/14 02:52:46 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0254793Z 2025/07/14 02:53:46 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0255499Z 2025/07/14 02:53:56 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0256219Z 2025/07/14 02:54:57 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0256929Z 2025/07/14 02:55:07 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0257637Z 2025/07/14 02:56:07 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0258338Z 2025/07/14 02:56:17 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0259200Z 2025/07/14 02:57:17 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0259908Z 2025/07/14 02:57:28 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0260617Z 2025/07/14 02:58:28 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0261329Z 2025/07/14 02:58:38 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0262026Z 2025/07/14 02:59:38 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0262751Z 2025/07/14 02:59:48 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0263480Z 2025/07/14 03:00:49 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0264200Z 2025/07/14 03:00:59 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0264928Z 2025/07/14 03:01:59 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0265639Z 2025/07/14 03:02:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0266354Z 2025/07/14 03:03:09 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0267063Z 2025/07/14 03:03:20 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0267775Z 2025/07/14 03:04:20 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0268485Z 2025/07/14 03:04:30 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0269338Z 2025/07/14 03:05:30 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0270046Z 2025/07/14 03:05:41 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0270758Z 2025/07/14 03:06:41 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0271638Z 2025/07/14 03:06:51 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0272357Z 2025/07/14 03:07:51 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0273072Z 2025/07/14 03:08:01 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0273794Z 2025/07/14 03:09:02 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0274509Z 2025/07/14 03:09:12 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0275219Z 2025/07/14 03:10:12 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0275928Z 2025/07/14 03:10:22 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0276644Z 2025/07/14 03:11:22 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0277348Z 2025/07/14 03:11:33 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0278056Z 2025/07/14 03:12:33 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0278764Z 2025/07/14 03:12:43 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0279681Z 2025/07/14 03:13:43 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0280397Z 2025/07/14 03:13:53 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0281106Z 2025/07/14 03:14:54 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0281821Z 2025/07/14 03:15:04 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0282712Z 2025/07/14 03:16:04 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0283423Z 2025/07/14 03:16:14 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0284136Z 2025/07/14 03:17:14 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0284836Z 2025/07/14 03:17:24 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0285547Z 2025/07/14 03:18:25 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0286250Z 2025/07/14 03:18:35 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0286961Z 2025/07/14 03:19:35 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0287661Z 2025/07/14 03:19:45 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0288373Z 2025/07/14 03:20:46 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0289229Z 2025/07/14 03:20:56 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0289943Z 2025/07/14 03:21:56 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0290654Z 2025/07/14 03:22:06 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0291355Z 2025/07/14 03:23:06 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0292066Z 2025/07/14 03:23:16 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0292772Z 2025/07/14 03:24:17 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0293476Z 2025/07/14 03:24:27 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0294174Z 2025/07/14 03:25:27 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0294879Z 2025/07/14 03:25:37 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0295586Z 2025/07/14 03:26:38 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0296304Z 2025/07/14 03:26:48 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0297015Z 2025/07/14 03:27:48 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0297723Z 2025/07/14 03:27:58 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0298440Z 2025/07/14 03:28:58 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0299280Z 2025/07/14 03:29:09 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0300011Z 2025/07/14 03:30:09 [TRACE] Waiting 10s before next try
2025-07-14T03:31:41.0300768Z 2025/07/14 03:30:19 [TRACE] Waiting 1m0s before next try
2025-07-14T03:31:41.0301526Z 2025/07/14 03:30:59 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T03:31:41.0302364Z 2025/07/14 03:30:59 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T03:31:41.0303215Z     resource_ldap_verify_test.go:32: 
2025-07-14T03:31:41.0304957Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T03:31:41.0308395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T03:31:41.0312131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2025-07-14T03:31:41.0313639Z         	Error:      	Received unexpected error:
2025-07-14T03:31:41.0315412Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:31:41.0316661Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2025-07-14T03:31:41.0318682Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4443754092314994410, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T03:31:41.0320304Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (3600.66s)
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
- 2025-07-31 PASS 3 minutes