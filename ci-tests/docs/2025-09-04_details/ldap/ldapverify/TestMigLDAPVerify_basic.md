# ldap/ldapverify/TestMigLDAPVerify_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 01:00](#error-2025-08-20t0100170000) |  | dev | flaky_client | 318.07s
[2025-09-01 00:30](#error-2025-09-01t0030220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 07:21](#error-2025-09-01t0721330000) |  | dev | timeout | 3603.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 14 minutes
- 2025-08-07 PASS 16 minutes
- 2025-08-08 PASS 15 minutes
- 2025-08-09 PASS 15 minutes
- 2025-08-10 PASS 20 minutes
- 2025-08-11 PASS 31 minutes
- 2025-08-12 PASS 14 minutes
- 2025-08-13 PASS 15 minutes
- 2025-08-14 PASS 13 minutes
- 2025-08-15 PASS 11 minutes
- 2025-08-16 PASS 37 minutes
- 2025-08-17 PASS 24 minutes
- 2025-08-18 PASS 14 minutes
- 2025-08-19 PASS 14 minutes
- 2025-08-20
  - FAIL 5 minutes

### Error 2025-08-20T01:00:17+00:00
```
2025-08-20T01:00:17.0177309Z === RUN   TestMigLDAPVerify_basic
2025-08-20T01:00:17.0179539Z     resource_ldap_verify_migration_test.go:10: Creating execution project: test-acc-tf-p-8294552845777601007
2025-08-20T01:00:17.0181137Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-6412828381987224492
2025-08-20T01:00:17.0182200Z 2025/08/20 00:27:01 [DEBUG] Waiting for state to become: [IDLE]
2025-08-20T01:00:17.0182971Z 2025/08/20 00:30:01 [TRACE] Waiting 1m0s before next try
2025-08-20T01:00:17.0183744Z 2025/08/20 00:31:01 [TRACE] Waiting 10s before next try
2025-08-20T01:00:17.0184487Z 2025/08/20 00:31:11 [TRACE] Waiting 1m0s before next try
2025-08-20T01:00:17.0185589Z     resource_ldap_verify_migration_test.go:10: 
2025-08-20T01:00:17.0187407Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-08-20T01:00:17.0190731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:123
2025-08-20T01:00:17.0194450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-08-20T01:00:17.0198863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2025-08-20T01:00:17.0200438Z         	Error:      	Received unexpected error:
2025-08-20T01:00:17.0203576Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a51652552c1710e1fa78f9/clusters/test-acc-tf-c-6412828381987224492": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-08-20T01:00:17.0205408Z         	Test:       	TestMigLDAPVerify_basic
2025-08-20T01:00:17.0208278Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6412828381987224492, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a51652552c1710e1fa78f9/clusters/test-acc-tf-c-6412828381987224492": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-08-20T01:00:17.0210257Z --- FAIL: TestMigLDAPVerify_basic (318.70s)
```

  - PASS 17 minutes
- 2025-08-21 PASS 13 minutes
- 2025-08-22 PASS 11 minutes
- 2025-08-23 PASS 14 minutes
- 2025-08-24 PASS 12 minutes
- 2025-08-25 PASS 13 minutes
- 2025-08-26 PASS 18 minutes
- 2025-08-27 PASS 28 minutes
- 2025-08-28 PASS 14 minutes
- 2025-08-29 PASS 23 minutes
- 2025-08-30 PASS 13 minutes
- 2025-08-31 PASS 13 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:22+00:00
```
2025-09-01T00:30:22.1705959Z === RUN   TestMigLDAPVerify_basic
2025-09-01T00:30:22.1708340Z     resource_ldap_verify_migration_test.go:10: Creating execution project: test-acc-tf-p-3109280175467170684
2025-09-01T00:30:22.1709947Z     resource_ldap_verify_migration_test.go:10: 
2025-09-01T00:30:22.1712171Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:22.1716149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:22.1720248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:120
2025-09-01T00:30:22.1724566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-09-01T00:30:22.1729307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2025-09-01T00:30:22.1732207Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:22.1733456Z         	Error:      	Received unexpected error:
2025-09-01T00:30:22.1739623Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:22.1742218Z         	Test:       	TestMigLDAPVerify_basic
2025-09-01T00:30:22.1746543Z         	Messages:   	Project creation failed: test-acc-tf-p-3109280175467170684, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:22.1749657Z --- FAIL: TestMigLDAPVerify_basic (0.21s)
```

  - FAIL an hour

### Error 2025-09-01T07:21:33+00:00
```
2025-09-01T07:21:33.7497777Z === RUN   TestMigLDAPVerify_basic
2025-09-01T07:21:33.7499242Z     resource_ldap_verify_migration_test.go:10: Creating execution project: test-acc-tf-p-3713056826462535998
2025-09-01T07:21:33.7500882Z     resource_ldap_verify_migration_test.go:10: Creating execution cluster: test-acc-tf-c-4281678521184732406
2025-09-01T07:21:33.7502059Z 2025/09/01 05:58:14 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T07:21:33.7502881Z 2025/09/01 06:01:14 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7503669Z 2025/09/01 06:02:14 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7504443Z 2025/09/01 06:02:24 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7505418Z 2025/09/01 06:03:25 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7506192Z 2025/09/01 06:03:35 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7506992Z 2025/09/01 06:04:35 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7508124Z 2025/09/01 06:04:45 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7508901Z 2025/09/01 06:05:45 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7509685Z 2025/09/01 06:05:56 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7510443Z 2025/09/01 06:06:56 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7511204Z 2025/09/01 06:07:06 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7511949Z 2025/09/01 06:08:06 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7512699Z 2025/09/01 06:08:16 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7513446Z 2025/09/01 06:09:16 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7514194Z 2025/09/01 06:09:27 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7515148Z 2025/09/01 06:10:27 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7515952Z 2025/09/01 06:10:37 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7516728Z 2025/09/01 06:11:37 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7517493Z 2025/09/01 06:11:47 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7518249Z 2025/09/01 06:12:48 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7519006Z 2025/09/01 06:12:58 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7519755Z 2025/09/01 06:13:58 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7520507Z 2025/09/01 06:14:08 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7521258Z 2025/09/01 06:15:08 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7522009Z 2025/09/01 06:15:18 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7523342Z 2025/09/01 06:16:19 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7524131Z 2025/09/01 06:16:29 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7525129Z 2025/09/01 06:17:29 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7525876Z 2025/09/01 06:17:39 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7526629Z 2025/09/01 06:18:39 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7527377Z 2025/09/01 06:18:49 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7528126Z 2025/09/01 06:19:50 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7528910Z 2025/09/01 06:20:00 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7529651Z 2025/09/01 06:21:00 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7530389Z 2025/09/01 06:21:10 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7531122Z 2025/09/01 06:22:10 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7531873Z 2025/09/01 06:22:20 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7533004Z 2025/09/01 06:23:21 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7533801Z 2025/09/01 06:23:31 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7534908Z 2025/09/01 06:24:31 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7535712Z 2025/09/01 06:24:41 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7536720Z 2025/09/01 06:25:41 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7537495Z 2025/09/01 06:25:51 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7538261Z 2025/09/01 06:26:52 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7539016Z 2025/09/01 06:27:02 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7539775Z 2025/09/01 06:28:02 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7540517Z 2025/09/01 06:28:12 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7541264Z 2025/09/01 06:29:12 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7542006Z 2025/09/01 06:29:23 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7542748Z 2025/09/01 06:30:23 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7543487Z 2025/09/01 06:30:33 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7544236Z 2025/09/01 06:31:33 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7545155Z 2025/09/01 06:31:43 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7545897Z 2025/09/01 06:32:44 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7546792Z 2025/09/01 06:32:54 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7547523Z 2025/09/01 06:33:54 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7548266Z 2025/09/01 06:34:04 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7549017Z 2025/09/01 06:35:04 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7549762Z 2025/09/01 06:35:15 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7550515Z 2025/09/01 06:36:15 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7551256Z 2025/09/01 06:36:25 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7552003Z 2025/09/01 06:37:25 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7552744Z 2025/09/01 06:37:35 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7553485Z 2025/09/01 06:38:36 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7554223Z 2025/09/01 06:38:46 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7555148Z 2025/09/01 06:39:46 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7555916Z 2025/09/01 06:39:56 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7556661Z 2025/09/01 06:40:56 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7557406Z 2025/09/01 06:41:06 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7558144Z 2025/09/01 06:42:07 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7558879Z 2025/09/01 06:42:17 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7559622Z 2025/09/01 06:43:17 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7560360Z 2025/09/01 06:43:27 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7561108Z 2025/09/01 06:44:27 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7561855Z 2025/09/01 06:44:37 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7562597Z 2025/09/01 06:45:38 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7563336Z 2025/09/01 06:45:48 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7564077Z 2025/09/01 06:46:48 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7565002Z 2025/09/01 06:46:58 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7565748Z 2025/09/01 06:47:58 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7566488Z 2025/09/01 06:48:08 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7567225Z 2025/09/01 06:49:09 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7567960Z 2025/09/01 06:49:19 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7568704Z 2025/09/01 06:50:19 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7569442Z 2025/09/01 06:50:29 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7570190Z 2025/09/01 06:51:29 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7570927Z 2025/09/01 06:51:40 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7571665Z 2025/09/01 06:52:40 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7572416Z 2025/09/01 06:52:50 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7573340Z 2025/09/01 06:53:50 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7574102Z 2025/09/01 06:54:00 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7575017Z 2025/09/01 06:55:01 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7575787Z 2025/09/01 06:55:11 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7576552Z 2025/09/01 06:56:11 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7577302Z 2025/09/01 06:56:21 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7578051Z 2025/09/01 06:57:21 [TRACE] Waiting 10s before next try
2025-09-01T07:21:33.7578798Z 2025/09/01 06:57:31 [TRACE] Waiting 1m0s before next try
2025-09-01T07:21:33.7579584Z 2025/09/01 06:58:14 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T07:21:33.7580461Z 2025/09/01 06:58:14 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T07:21:33.7581402Z     resource_ldap_verify_migration_test.go:10: 
2025-09-01T07:21:33.7583418Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T07:21:33.7587279Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T07:21:33.7591126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-09-01T07:21:33.7595346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_migration_test.go:10
2025-09-01T07:21:33.7597035Z         	Error:      	Received unexpected error:
2025-09-01T07:21:33.7598920Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T07:21:33.7600018Z         	Test:       	TestMigLDAPVerify_basic
2025-09-01T07:21:33.7602085Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4281678521184732406, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T07:21:33.7603504Z --- FAIL: TestMigLDAPVerify_basic (3603.86s)
```

  - PASS 21 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 11 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 15 minutes
- 2025-09-03 PASS 20 minutes
- 2025-09-04 PASS 14 minutes