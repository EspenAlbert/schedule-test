# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:11](#error-2026-01-31t0311380000) |  | dev | timeout | 3601.09s
[2026-02-02 03:39](#error-2026-02-02t0339160000) |  | dev | timeout | 3600.07s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143aeb2e54ee9958febcb/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09 PASS 3 minutes
- 2026-01-10 PASS 3 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13 PASS 3 minutes
- 2026-01-14 PASS 3 minutes
- 2026-01-15 PASS 3 minutes
- 2026-01-16 PASS 3 minutes
- 2026-01-17 PASS 3 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 3 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 3 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 3 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29 PASS 3 minutes
- 2026-01-30 PASS 3 minutes
- 2026-01-31

### Error 2026-01-31T03:11:38+00:00
```
2026-01-31T03:11:38.8923556Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-01-31T03:11:38.8924330Z     resource_ldap_verify_test.go:32: Creating execution cluster: test-acc-tf-c-8454237929551786099
2026-01-31T03:11:38.8924994Z 2026/01/31 01:35:09 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T03:11:38.8925485Z 2026/01/31 01:38:09 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8925943Z 2026/01/31 01:39:10 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8926595Z 2026/01/31 01:39:20 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8927093Z 2026/01/31 01:40:20 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8927530Z 2026/01/31 01:40:30 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8928146Z 2026/01/31 01:41:31 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8928581Z 2026/01/31 01:41:41 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8929009Z 2026/01/31 01:42:41 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8929444Z 2026/01/31 01:42:51 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8929874Z 2026/01/31 01:43:51 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8930301Z 2026/01/31 01:44:02 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8930736Z 2026/01/31 01:45:02 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8931173Z 2026/01/31 01:45:12 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8931602Z 2026/01/31 01:46:12 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8932029Z 2026/01/31 01:46:22 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8932463Z 2026/01/31 01:47:23 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8932890Z 2026/01/31 01:47:33 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8933442Z 2026/01/31 01:48:33 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8933878Z 2026/01/31 01:48:43 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8934309Z 2026/01/31 01:49:43 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8934739Z 2026/01/31 01:49:54 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8935168Z 2026/01/31 01:50:54 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8935592Z 2026/01/31 01:51:04 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8936037Z 2026/01/31 01:52:04 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8936582Z 2026/01/31 01:52:15 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8937023Z 2026/01/31 01:53:15 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8937472Z 2026/01/31 01:53:25 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8937910Z 2026/01/31 01:54:25 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8938340Z 2026/01/31 01:54:35 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8938783Z 2026/01/31 01:55:36 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8939218Z 2026/01/31 01:55:46 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8939646Z 2026/01/31 01:56:46 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8940073Z 2026/01/31 01:56:56 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8940504Z 2026/01/31 01:57:56 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8940936Z 2026/01/31 01:58:07 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8941367Z 2026/01/31 01:59:07 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8941801Z 2026/01/31 01:59:17 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8942233Z 2026/01/31 02:00:17 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8942660Z 2026/01/31 02:00:27 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8943093Z 2026/01/31 02:01:28 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8943541Z 2026/01/31 02:01:38 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8943988Z 2026/01/31 02:02:38 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8944418Z 2026/01/31 02:02:48 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8944853Z 2026/01/31 02:03:48 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8945289Z 2026/01/31 02:03:59 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8945723Z 2026/01/31 02:04:59 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8946153Z 2026/01/31 02:05:09 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8946696Z 2026/01/31 02:06:09 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8947129Z 2026/01/31 02:06:20 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8947565Z 2026/01/31 02:07:20 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8947995Z 2026/01/31 02:07:30 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8948427Z 2026/01/31 02:08:30 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8948856Z 2026/01/31 02:08:40 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8949417Z 2026/01/31 02:09:41 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8949858Z 2026/01/31 02:09:51 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8950287Z 2026/01/31 02:10:51 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8950718Z 2026/01/31 02:11:01 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8951153Z 2026/01/31 02:12:01 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8951585Z 2026/01/31 02:12:12 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8952016Z 2026/01/31 02:13:12 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8952446Z 2026/01/31 02:13:22 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8952882Z 2026/01/31 02:14:22 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8953312Z 2026/01/31 02:14:32 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8953739Z 2026/01/31 02:15:33 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8954166Z 2026/01/31 02:15:43 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8954913Z 2026/01/31 02:16:43 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8955395Z 2026/01/31 02:16:53 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8955834Z 2026/01/31 02:17:54 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8956269Z 2026/01/31 02:18:04 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8956816Z 2026/01/31 02:19:04 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8957246Z 2026/01/31 02:19:14 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8957675Z 2026/01/31 02:20:15 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8958101Z 2026/01/31 02:20:25 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8958529Z 2026/01/31 02:21:25 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8958960Z 2026/01/31 02:21:35 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8959394Z 2026/01/31 02:22:35 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8959823Z 2026/01/31 02:22:46 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8960267Z 2026/01/31 02:23:46 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8960695Z 2026/01/31 02:23:56 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8961130Z 2026/01/31 02:24:56 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8961557Z 2026/01/31 02:25:06 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8962003Z 2026/01/31 02:26:07 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8962457Z 2026/01/31 02:26:17 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8962908Z 2026/01/31 02:27:17 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8963349Z 2026/01/31 02:27:27 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8963794Z 2026/01/31 02:28:27 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8964230Z 2026/01/31 02:28:38 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8964665Z 2026/01/31 02:29:38 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8965097Z 2026/01/31 02:29:48 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8965539Z 2026/01/31 02:30:48 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8965969Z 2026/01/31 02:30:58 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8966604Z 2026/01/31 02:31:59 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8967049Z 2026/01/31 02:32:09 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8967481Z 2026/01/31 02:33:09 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8967914Z 2026/01/31 02:33:19 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8968346Z 2026/01/31 02:34:20 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8968774Z 2026/01/31 02:34:30 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8969240Z 2026/01/31 02:35:09 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T03:11:38.8969778Z 2026/01/31 02:35:09 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T03:11:38.8970318Z     resource_ldap_verify_test.go:32: 
2026-01-31T03:11:38.8971393Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T03:11:38.8973478Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T03:11:38.8975585Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-01-31T03:11:38.8976639Z         	Error:      	Received unexpected error:
2026-01-31T03:11:38.8977727Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:11:38.8978519Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-01-31T03:11:38.8979787Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8454237929551786099, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:11:38.8980846Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (3601.87s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:16+00:00
```
2026-02-02T03:39:16.6298562Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-02-02T03:39:16.6299302Z     resource_ldap_verify_test.go:32: Creating execution cluster: test-acc-tf-c-7044521627607142209
2026-02-02T03:39:16.6299935Z 2026/02/02 02:38:35 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T03:39:16.6300420Z 2026/02/02 02:41:35 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6300879Z 2026/02/02 02:42:35 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6301333Z 2026/02/02 02:42:45 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6301897Z 2026/02/02 02:43:46 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6302349Z 2026/02/02 02:43:56 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6302793Z 2026/02/02 02:44:56 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6303236Z 2026/02/02 02:45:06 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6303678Z 2026/02/02 02:46:06 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6304119Z 2026/02/02 02:46:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6304555Z 2026/02/02 02:47:17 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6304993Z 2026/02/02 02:47:27 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6305701Z 2026/02/02 02:48:27 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6306154Z 2026/02/02 02:48:37 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6306592Z 2026/02/02 02:49:37 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6307038Z 2026/02/02 02:49:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6307486Z 2026/02/02 02:50:48 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6307923Z 2026/02/02 02:50:58 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6308361Z 2026/02/02 02:51:58 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6308798Z 2026/02/02 02:52:08 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6309238Z 2026/02/02 02:53:08 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6309676Z 2026/02/02 02:53:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6310117Z 2026/02/02 02:54:19 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6310556Z 2026/02/02 02:54:29 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6311003Z 2026/02/02 02:55:29 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6311444Z 2026/02/02 02:55:39 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6311888Z 2026/02/02 02:56:40 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6312336Z 2026/02/02 02:56:50 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6312781Z 2026/02/02 02:57:50 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6313216Z 2026/02/02 02:58:00 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6313656Z 2026/02/02 02:59:00 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6314089Z 2026/02/02 02:59:10 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6314529Z 2026/02/02 03:00:11 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6314969Z 2026/02/02 03:00:21 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6315609Z 2026/02/02 03:01:21 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6316067Z 2026/02/02 03:01:31 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6316517Z 2026/02/02 03:02:31 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6316979Z 2026/02/02 03:02:41 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6317420Z 2026/02/02 03:03:42 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6317994Z 2026/02/02 03:03:52 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6318442Z 2026/02/02 03:04:52 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6318884Z 2026/02/02 03:05:02 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6319328Z 2026/02/02 03:06:02 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6319766Z 2026/02/02 03:06:13 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6320208Z 2026/02/02 03:07:13 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6320648Z 2026/02/02 03:07:23 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6321092Z 2026/02/02 03:08:23 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6321532Z 2026/02/02 03:08:33 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6321983Z 2026/02/02 03:09:33 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6322424Z 2026/02/02 03:09:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6322866Z 2026/02/02 03:10:44 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6323427Z 2026/02/02 03:10:54 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6323880Z 2026/02/02 03:11:54 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6324318Z 2026/02/02 03:12:04 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6324759Z 2026/02/02 03:13:05 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6325372Z 2026/02/02 03:13:15 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6325821Z 2026/02/02 03:14:15 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6326263Z 2026/02/02 03:14:25 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6326706Z 2026/02/02 03:15:25 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6327145Z 2026/02/02 03:15:35 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6327594Z 2026/02/02 03:16:36 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6328035Z 2026/02/02 03:16:46 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6328474Z 2026/02/02 03:17:46 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6328923Z 2026/02/02 03:17:56 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6329364Z 2026/02/02 03:18:57 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6329810Z 2026/02/02 03:19:07 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6330253Z 2026/02/02 03:20:07 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6330690Z 2026/02/02 03:20:17 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6331132Z 2026/02/02 03:21:17 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6331572Z 2026/02/02 03:21:27 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6332017Z 2026/02/02 03:22:28 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6332456Z 2026/02/02 03:22:38 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6332901Z 2026/02/02 03:23:38 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6333339Z 2026/02/02 03:23:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6333784Z 2026/02/02 03:24:48 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6334235Z 2026/02/02 03:24:58 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6334678Z 2026/02/02 03:25:59 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6335290Z 2026/02/02 03:26:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6335740Z 2026/02/02 03:27:09 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6336177Z 2026/02/02 03:27:19 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6336618Z 2026/02/02 03:28:19 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6337057Z 2026/02/02 03:28:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6337504Z 2026/02/02 03:29:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6337942Z 2026/02/02 03:29:40 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6338388Z 2026/02/02 03:30:40 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6338830Z 2026/02/02 03:30:50 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6339405Z 2026/02/02 03:31:50 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6339857Z 2026/02/02 03:32:00 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6340300Z 2026/02/02 03:33:01 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6340743Z 2026/02/02 03:33:11 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6341189Z 2026/02/02 03:34:11 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6341626Z 2026/02/02 03:34:21 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6342069Z 2026/02/02 03:35:21 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6342506Z 2026/02/02 03:35:32 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6342949Z 2026/02/02 03:36:32 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6343388Z 2026/02/02 03:36:42 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6343832Z 2026/02/02 03:37:42 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6344292Z 2026/02/02 03:37:52 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6344777Z 2026/02/02 03:38:35 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T03:39:16.6345661Z 2026/02/02 03:38:35 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T03:39:16.6346217Z     resource_ldap_verify_test.go:32: 
2026-02-02T03:39:16.6347275Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:39:16.6349239Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:39:16.6351345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-02-02T03:39:16.6352264Z         	Error:      	Received unexpected error:
2026-02-02T03:39:16.6353370Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:16.6354174Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-02-02T03:39:16.6355638Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7044521627607142209, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:16.6356572Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (3600.69s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.3797947Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-02-03T00:39:21.3798669Z     resource_ldap_verify_test.go:32: Creating execution cluster: test-acc-tf-c-797072765427889366
2026-02-03T00:39:21.3799223Z     resource_ldap_verify_test.go:32: 
2026-02-03T00:39:21.3800216Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:21.3801869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:21.3803650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-02-03T00:39:21.3804458Z         	Error:      	Received unexpected error:
2026-02-03T00:39:21.3806674Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143aeb2e54ee9958febcb/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.3808404Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-02-03T00:39:21.3810403Z         	Messages:   	Cluster creation failed: test-acc-tf-c-797072765427889366, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143aeb2e54ee9958febcb/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.3811819Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (0.47s)
```

- 2026-02-04 PASS 3 minutes
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
