# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:11](#error-2026-01-31t0311380000) |  | dev | timeout | 3604.01s
[2026-02-02 03:39](#error-2026-02-02t0339160000) |  | dev | timeout | 3600.06s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143aeb2e54ee9958febcb/clusters | dev | out_of_capacity | 2.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
- 2026-01-09 PASS 3 minutes
- 2026-01-10 PASS 14 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13 PASS 20 minutes
- 2026-01-14 PASS 3 minutes
- 2026-01-15 PASS 15 minutes
- 2026-01-16 PASS 3 minutes
- 2026-01-17 PASS 12 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 14 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 16 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 14 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27 PASS 15 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29 PASS 15 minutes
- 2026-01-30 PASS 3 minutes
- 2026-01-31

### Error 2026-01-31T03:11:38+00:00
```
2026-01-31T03:11:38.8858168Z === RUN   TestAccLDAPVerify_basic
2026-01-31T03:11:38.8858845Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-3635564764861455265
2026-01-31T03:11:38.8859696Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-7180442171098012142
2026-01-31T03:11:38.8860317Z 2026/01/31 00:35:07 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T03:11:38.8860796Z 2026/01/31 00:38:08 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8861245Z 2026/01/31 00:39:08 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8861687Z 2026/01/31 00:39:18 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8862121Z 2026/01/31 00:40:18 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8862573Z 2026/01/31 00:40:28 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8863010Z 2026/01/31 00:41:29 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8863443Z 2026/01/31 00:41:39 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8863871Z 2026/01/31 00:42:39 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8864294Z 2026/01/31 00:42:49 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8864718Z 2026/01/31 00:43:49 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8865145Z 2026/01/31 00:44:00 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8865574Z 2026/01/31 00:45:00 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8866007Z 2026/01/31 00:45:10 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8866653Z 2026/01/31 00:46:10 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8867094Z 2026/01/31 00:46:21 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8867535Z 2026/01/31 00:47:21 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8867978Z 2026/01/31 00:47:31 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8868439Z 2026/01/31 00:48:31 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8868894Z 2026/01/31 00:48:41 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8869338Z 2026/01/31 00:49:42 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8869775Z 2026/01/31 00:49:52 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8870218Z 2026/01/31 00:50:52 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8870648Z 2026/01/31 00:51:02 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8871084Z 2026/01/31 00:52:02 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8871537Z 2026/01/31 00:52:13 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8872078Z 2026/01/31 00:53:13 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8872510Z 2026/01/31 00:53:23 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8872951Z 2026/01/31 00:54:23 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8873386Z 2026/01/31 00:54:33 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8873963Z 2026/01/31 00:55:34 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8874393Z 2026/01/31 00:55:44 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8874828Z 2026/01/31 00:56:44 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8875255Z 2026/01/31 00:56:54 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8875687Z 2026/01/31 00:57:54 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8876115Z 2026/01/31 00:58:05 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8876666Z 2026/01/31 00:59:05 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8877093Z 2026/01/31 00:59:15 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8877528Z 2026/01/31 01:00:15 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8877957Z 2026/01/31 01:00:25 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8878400Z 2026/01/31 01:01:26 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8878948Z 2026/01/31 01:01:36 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8879395Z 2026/01/31 01:02:36 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8879820Z 2026/01/31 01:02:46 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8880253Z 2026/01/31 01:03:46 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8880684Z 2026/01/31 01:03:57 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8881116Z 2026/01/31 01:04:57 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8881540Z 2026/01/31 01:05:07 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8881977Z 2026/01/31 01:06:07 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8882406Z 2026/01/31 01:06:17 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8882843Z 2026/01/31 01:07:18 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8883272Z 2026/01/31 01:07:28 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8883709Z 2026/01/31 01:08:28 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8884149Z 2026/01/31 01:08:38 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8884587Z 2026/01/31 01:09:38 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8885015Z 2026/01/31 01:09:49 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8885448Z 2026/01/31 01:10:49 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8885877Z 2026/01/31 01:10:59 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8886308Z 2026/01/31 01:11:59 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8886973Z 2026/01/31 01:12:09 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8887405Z 2026/01/31 01:13:10 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8887831Z 2026/01/31 01:13:20 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8888258Z 2026/01/31 01:14:20 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8888684Z 2026/01/31 01:14:30 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8889117Z 2026/01/31 01:15:30 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8889553Z 2026/01/31 01:15:41 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8889994Z 2026/01/31 01:16:41 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8890422Z 2026/01/31 01:16:51 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8890857Z 2026/01/31 01:17:51 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8891288Z 2026/01/31 01:18:02 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8891724Z 2026/01/31 01:19:02 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8892151Z 2026/01/31 01:19:12 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8892580Z 2026/01/31 01:20:12 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8893031Z 2026/01/31 01:20:22 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8893485Z 2026/01/31 01:21:23 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8893923Z 2026/01/31 01:21:33 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8894362Z 2026/01/31 01:22:33 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8894804Z 2026/01/31 01:22:43 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8895381Z 2026/01/31 01:23:44 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8895813Z 2026/01/31 01:23:54 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8896249Z 2026/01/31 01:24:54 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8896792Z 2026/01/31 01:25:04 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8897222Z 2026/01/31 01:26:04 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8897660Z 2026/01/31 01:26:15 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8898114Z 2026/01/31 01:27:15 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8898559Z 2026/01/31 01:27:25 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8898998Z 2026/01/31 01:28:25 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8899434Z 2026/01/31 01:28:36 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8899873Z 2026/01/31 01:29:36 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8900428Z 2026/01/31 01:29:46 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8900875Z 2026/01/31 01:30:46 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8901313Z 2026/01/31 01:30:56 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8901746Z 2026/01/31 01:31:57 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8902179Z 2026/01/31 01:32:07 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8902615Z 2026/01/31 01:33:07 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8903046Z 2026/01/31 01:33:17 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8903482Z 2026/01/31 01:34:17 [TRACE] Waiting 10s before next try
2026-01-31T03:11:38.8903913Z 2026/01/31 01:34:28 [TRACE] Waiting 1m0s before next try
2026-01-31T03:11:38.8904375Z 2026/01/31 01:35:07 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T03:11:38.8904905Z 2026/01/31 01:35:07 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T03:11:38.8905434Z     resource_ldap_verify_test.go:22: 
2026-01-31T03:11:38.8906611Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T03:11:38.8908553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T03:11:38.8910651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-01-31T03:11:38.8912840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-01-31T03:11:38.8919135Z         	Error:      	Received unexpected error:
2026-01-31T03:11:38.8920292Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:11:38.8920989Z         	Test:       	TestAccLDAPVerify_basic
2026-01-31T03:11:38.8922232Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7180442171098012142, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T03:11:38.8923085Z --- FAIL: TestAccLDAPVerify_basic (3604.12s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:16+00:00
```
2026-02-02T03:39:16.6238261Z === RUN   TestAccLDAPVerify_basic
2026-02-02T03:39:16.6238929Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-3678153818532069416
2026-02-02T03:39:16.6239564Z 2026/02/02 01:38:34 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T03:39:16.6240058Z 2026/02/02 01:41:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6240523Z 2026/02/02 01:42:34 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6240979Z 2026/02/02 01:42:45 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6241427Z 2026/02/02 01:43:45 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6241866Z 2026/02/02 01:43:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6242307Z 2026/02/02 01:44:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6242755Z 2026/02/02 01:45:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6243201Z 2026/02/02 01:46:06 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6243639Z 2026/02/02 01:46:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6244083Z 2026/02/02 01:47:16 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6244524Z 2026/02/02 01:47:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6244964Z 2026/02/02 01:48:26 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6245574Z 2026/02/02 01:48:36 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6246178Z 2026/02/02 01:49:37 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6246622Z 2026/02/02 01:49:47 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6247071Z 2026/02/02 01:50:47 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6247507Z 2026/02/02 01:50:57 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6247947Z 2026/02/02 01:51:57 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6248390Z 2026/02/02 01:52:07 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6248835Z 2026/02/02 01:53:08 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6249276Z 2026/02/02 01:53:18 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6249717Z 2026/02/02 01:54:18 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6250156Z 2026/02/02 01:54:28 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6250599Z 2026/02/02 01:55:28 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6251038Z 2026/02/02 01:55:38 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6251486Z 2026/02/02 01:56:39 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6252041Z 2026/02/02 01:56:49 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6252499Z 2026/02/02 01:57:49 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6252942Z 2026/02/02 01:57:59 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6253386Z 2026/02/02 01:58:59 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6253830Z 2026/02/02 01:59:10 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6254274Z 2026/02/02 02:00:10 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6254711Z 2026/02/02 02:00:20 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6255322Z 2026/02/02 02:01:20 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6255774Z 2026/02/02 02:01:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6256217Z 2026/02/02 02:02:30 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6256653Z 2026/02/02 02:02:41 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6257101Z 2026/02/02 02:03:41 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6257545Z 2026/02/02 02:03:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6257985Z 2026/02/02 02:04:51 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6258420Z 2026/02/02 02:05:01 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6258864Z 2026/02/02 02:06:01 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6259305Z 2026/02/02 02:06:12 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6259750Z 2026/02/02 02:07:12 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6260189Z 2026/02/02 02:07:22 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6260631Z 2026/02/02 02:08:22 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6261068Z 2026/02/02 02:08:32 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6261512Z 2026/02/02 02:09:33 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6261951Z 2026/02/02 02:09:43 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6262394Z 2026/02/02 02:10:43 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6262840Z 2026/02/02 02:10:53 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6263281Z 2026/02/02 02:11:53 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6263724Z 2026/02/02 02:12:03 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6264162Z 2026/02/02 02:13:04 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6264600Z 2026/02/02 02:13:14 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6265375Z 2026/02/02 02:14:14 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6265839Z 2026/02/02 02:14:24 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6266289Z 2026/02/02 02:15:24 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6266733Z 2026/02/02 02:15:35 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6267177Z 2026/02/02 02:16:35 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6267620Z 2026/02/02 02:16:45 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6268214Z 2026/02/02 02:17:45 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6268693Z 2026/02/02 02:17:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6269143Z 2026/02/02 02:18:55 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6269580Z 2026/02/02 02:19:06 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6270020Z 2026/02/02 02:20:06 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6270459Z 2026/02/02 02:20:16 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6270901Z 2026/02/02 02:21:16 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6271346Z 2026/02/02 02:21:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6271797Z 2026/02/02 02:22:26 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6272235Z 2026/02/02 02:22:37 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6272674Z 2026/02/02 02:23:37 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6273118Z 2026/02/02 02:23:47 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6273562Z 2026/02/02 02:24:47 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6274191Z 2026/02/02 02:24:57 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6274643Z 2026/02/02 02:25:58 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6275244Z 2026/02/02 02:26:08 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6275747Z 2026/02/02 02:27:08 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6276185Z 2026/02/02 02:27:18 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6276628Z 2026/02/02 02:28:18 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6277061Z 2026/02/02 02:28:29 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6277509Z 2026/02/02 02:29:29 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6277954Z 2026/02/02 02:29:39 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6278396Z 2026/02/02 02:30:39 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6278835Z 2026/02/02 02:30:49 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6279281Z 2026/02/02 02:31:49 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6279723Z 2026/02/02 02:32:00 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6280163Z 2026/02/02 02:33:00 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6280598Z 2026/02/02 02:33:10 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6281043Z 2026/02/02 02:34:10 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6281517Z 2026/02/02 02:34:20 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6281958Z 2026/02/02 02:35:21 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6282395Z 2026/02/02 02:35:31 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6282836Z 2026/02/02 02:36:31 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6283282Z 2026/02/02 02:36:41 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6283726Z 2026/02/02 02:37:41 [TRACE] Waiting 10s before next try
2026-02-02T03:39:16.6284164Z 2026/02/02 02:37:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:39:16.6284635Z 2026/02/02 02:38:34 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T03:39:16.6285335Z 2026/02/02 02:38:34 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T03:39:16.6285877Z     resource_ldap_verify_test.go:22: 
2026-02-02T03:39:16.6286933Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:39:16.6288890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:39:16.6290895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-02-02T03:39:16.6293035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-02-02T03:39:16.6294098Z         	Error:      	Received unexpected error:
2026-02-02T03:39:16.6295374Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:16.6296056Z         	Test:       	TestAccLDAPVerify_basic
2026-02-02T03:39:16.6297257Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3678153818532069416, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:39:16.6298097Z --- FAIL: TestAccLDAPVerify_basic (3600.63s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.3781161Z === RUN   TestAccLDAPVerify_basic
2026-02-03T00:39:21.3781788Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-5157253662141205331
2026-02-03T00:39:21.3782710Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-4176496777795439848
2026-02-03T00:39:21.3783274Z     resource_ldap_verify_test.go:22: 
2026-02-03T00:39:21.3784216Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:21.3785882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:21.3787841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-02-03T00:39:21.3789684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-02-03T00:39:21.3790516Z         	Error:      	Received unexpected error:
2026-02-03T00:39:21.3792807Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143aeb2e54ee9958febcb/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.3793994Z         	Test:       	TestAccLDAPVerify_basic
2026-02-03T00:39:21.3795945Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4176496777795439848, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143aeb2e54ee9958febcb/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.3797288Z --- FAIL: TestAccLDAPVerify_basic (2.94s)
```

- 2026-02-04 PASS 3 minutes
- 2026-02-05 PASS 19 minutes
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
